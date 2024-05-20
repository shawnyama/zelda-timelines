<template>
  <div ref="mermaidContainer">
    <vue-mermaid-string class="mermaid" :value="generateDiagram()" @node-click="selectNode" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import * as d3 from 'd3'
import endent from 'endent'
import { GameIds, timeSplitEvents, whatIfEvents, majorEvents } from '@/data/events'
import { LinkDesigns } from '@/data/link-designs'
import { gameNodes } from '@/data/games'
import { links, Timelines } from '@/data/timelines'
import type { GameNode, Node } from '@/data/games'
import type { Link } from '@/data/timelines'

const props = defineProps<{
  selectedGame: GameNode | null
  selectedTimeline: Timelines
  orientation: 'LR' | 'TB'
  year: number
}>()

const emit = defineEmits(['select-game'])

const mermaidContainer = ref()

// Diagram positioning and scaling
const DIAGRAM_PADDING = 400
const MIN_SCALE = 0.75
let svg: d3.Selection<any, unknown, HTMLElement, undefined>
let svgWidth = 0
let svgHeight = 0
let zoom: d3.ZoomBehavior<any, unknown>
let scale = 1
let xTranslate = 0
let yTranslate = 0
let timelineGroup: d3.Selection<any, unknown, HTMLElement, undefined>
let timelineBBox: SVGRect
let timelineBRectClient: any

// const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => {
    // Check if id is a game
    if (Object.values(GameIds).includes(id as GameIds)) {
      const imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
      // FIXME: Make the divs generated here the same width
      if (!imagePath.includes('undefined')) {
        return endent`${id}[<figure><img class='${id}' src='${imagePath}' alt='Icon' width='240' height='180'></img><h3 class='title'>${title}</h3></figure>]`
      }
      return endent`${id}[<div class='fallback-icon ${id}'>k</div><h3 class='fallback-title'>${title}</h3>]`
    } else if (timeSplitEvents.includes(title)) {
      return endent`${id}[<h4 class='major-event title'>${title}</h4>]`
    } else if (whatIfEvents.includes(title)) {
      return endent`${id}[<h4 class='major-event title what-if'>${title}</h4>]`
    }
    return endent`${id}[<h4 class='title'>${title}</h4>]`
  }

  const removeSpaces = (str: string) => str.replaceAll(' ', '')

  const generateLink = ({
    source,
    target,
    label,
    linkDesign = LinkDesigns.Thick,
    distance = 0,
    subgraphStart,
    subgraphEnd
  }: Link) => {
    distance += 3 // Minimum required for mermaid to render is 3

    const link =
      linkDesign === LinkDesigns.Dotted
        ? `-${linkDesign.repeat(distance - 2)}-`
        : linkDesign.repeat(distance)

    let connection = `${removeSpaces(source)} ${link}${!!label ? `|${label}|` : ''} ${removeSpaces(
      target
    )}`

    if (subgraphStart) {
      // Concatenate 'Subgraph' to the end of subgraphStart if it's an event (avoids being repeated if used in source or target)
      if (majorEvents.includes(subgraphStart)) subgraphStart = subgraphStart.concat('Subgraph')

      connection = endent`
        subgraph ${removeSpaces(subgraphStart)}
        direction ${props.orientation}\n${connection}`
      // console.log(connection)
    }
    if (subgraphEnd) {
      for (let i = 0; i < subgraphEnd; i++) {
        connection = `${connection}\nend`
      }
    }

    return connection
  }

  const generateClick = ({ id }: GameNode) => `click ${id}`

  // Remove nodes that aren't used in links
  const timelineLinks = links[props.selectedTimeline]

  // Hold all events, games, etc. that are in the timeline
  const timelineContent = Array.from(
    new Set(timelineLinks.map(({ source, target }) => [source, target]).flat())
  )
  const gameContent = timelineContent.filter((id) => Object.values(GameIds).includes(id as GameIds))
  const eventContent = timelineContent.filter((id) => !gameContent.includes(id))

  // Collect game nodes that belong in the timeline
  const gameNodesToDisplay: GameNode[] = gameNodes.filter(
    ({ id, releases }) => gameContent.includes(id as GameIds) && props.year >= releases[0].year
  )

  // Insert event nodes that belong in the timeline
  const eventNodesToDisplay: Node[] = []
  eventContent.forEach((id) => eventNodesToDisplay.push({ id: removeSpaces(id), title: id }))

  const nodesToDisplay: GameNode[] | Node[] = [...gameNodesToDisplay, ...eventNodesToDisplay]

  const diagram = endent`%%{
    init: {
      'theme': 'base',
      'themeVariables': {
        'primaryColor': 'transparent',
        'primaryBorderColor': 'transparent',
        'lineColor': 'darkred'
      }
    }
  }%%
  flowchart ${props.orientation}
  ${nodesToDisplay.map(generateNode).join('\n ')}
  ${timelineLinks.map(generateLink).join('\n ')}
  ${gameNodesToDisplay.map(generateClick).join('\n ')}
  `

  // Select the first game if none is selected or if the selected game doesn't belong in the newly selected timeline
  if (
    !props.selectedGame ||
    (props.selectedGame.id && gameNodesToDisplay.map(({ id }) => id)).includes(
      props.selectedGame.id
    ) === false
  ) {
    selectGame(gameNodesToDisplay[0].id)
  }

  //   console.log(diagram)
  return diagram
}

const selectGame = (id: string) =>
  emit('select-game', gameNodes.find((gameNode) => gameNode.id === id) ?? null)

function applyTransform(useTransition = true) {
  if (!zoom?.transform) return
  if (useTransition) {
    svg
      .transition()
      .duration(1000)
      .call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  } else {
    svg.call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  }
}

// Game nodes are only selectable now
function selectNode(id: string) {
  selectGame(id)
  // Move to icon and apply spin animation to it
  const gameIcon = mermaidContainer.value.querySelector(`.${id}`)
  const gameIconBBox = gameIcon.getBoundingClientRect()

  timelineBRectClient = (timelineGroup?.node() as any).getBoundingClientRect()
  console.log('game', gameIconBBox)
  console.log('timelineDOM', timelineBRectClient)
  console.log('timelineBBox', timelineBBox)
  scale = timelineBBox.width / svgWidth / 2

  const gameIconX = -gameIconBBox.x * scale //- timelineBBox.width

  // Once we can figure out how to move to a specific icon, moveToBeginning shouldn't be a problem and should begin at the first icon rather than the edge of the diagram
  // Right now this varies depending on your current position on the canvas
  xTranslate = -gameIconBBox.x * scale //- timelineBRectClient.width //+ gameIconBBox.width / 2
  yTranslate = -gameIconBBox.y * scale //- svgHeight //+ gameIconBBox.height / 2
  console.log(xTranslate, yTranslate)
  applyTransform()

  gameIcon.classList.add('spin-on-game-select')
  setTimeout(() => gameIcon.classList.remove('spin-on-game-select'), 800)
}

// Zooms all the way out so you can see the entire diagram
function zoomOut() {
  scale = 1
  xTranslate = 0
  yTranslate = 0
  applyTransform()
}
// Determine initial position and scale
async function moveToBeginning() {
  // timelineBRectClient = (timelineGroup?.node() as any).getBoundingClientRect()
  // const aspectRatio = timelineBBox.width / timelineBBox.height
  // console.log(aspectRatio)

  if (props.orientation === 'LR') {
    scale = timelineBBox.width / svgWidth / 2
    xTranslate = DIAGRAM_PADDING
    yTranslate = -timelineBBox.height / 2
  } else if (props.orientation === 'TB') {
    scale = timelineBBox.height / svgHeight / 2
    xTranslate = (-timelineBBox.width / 4) * scale
    yTranslate = DIAGRAM_PADDING
  }

  // console.log(timelineBRectClient.height)

  applyTransform()
}
// function moveToEnd() {}
defineExpose({ zoomOut, moveToBeginning })

async function updateDimensions() {
  await nextTick()

  // Get window dimensions (SVG should cover the window size)
  svgWidth = window.innerWidth
  svgHeight = window.innerHeight
  // Get the svg container and the attributes of its first group which contains the timeline diagram
  svg = d3.select('.mermaid > svg').attr('height', svgHeight).style('max-width', '100%')
  timelineGroup = svg.select('g')
  timelineBBox = (timelineGroup?.node() as any).getBBox()

  // Determine dimensions of the viewport
  // TODO: Save the translate extent in a variable so that move functions can be limited to it
  const setTranslateExtent = (x0: number, y0: number, x1: number, y1: number) => [
    [x0, y0],
    [x1, y1]
  ]
  const translateExtent =
    props.orientation === 'LR'
      ? setTranslateExtent(
          -DIAGRAM_PADDING,
          -svgHeight + DIAGRAM_PADDING,
          timelineBBox.width + DIAGRAM_PADDING,
          svgHeight * 2 + DIAGRAM_PADDING
        )
      : setTranslateExtent(
          -svgWidth + DIAGRAM_PADDING,
          -DIAGRAM_PADDING,
          svgWidth * 2 + DIAGRAM_PADDING,
          timelineBBox.height + DIAGRAM_PADDING
        )

  moveToBeginning()

  // Zoom behaviour
  zoom = d3
    .zoom()
    .translateExtent(translateExtent as any)
    .scaleExtent([MIN_SCALE, scale])
    .on('zoom', (event) => {
      timelineGroup.attr('transform', event.transform)
    })

  // Apply pan/zoom behaviour, disable double click zoom, and apply initial position and scale
  svg.call(zoom as any).on('dblclick.zoom', null)
  applyTransform(false)
}

// Update dimensions when timeline changes
watch(() => props.selectedTimeline, updateDimensions)

// Update dimensions when window resizes, might sometimes run when the selectedTimeline changes
const resizeObserver = new ResizeObserver(updateDimensions)
onMounted(() => mermaidContainer.value && resizeObserver.observe(mermaidContainer.value))
</script>

<style scoped>
.mermaid {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100vw;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  /* & :deep(svg > g > .root > .nodes > g) {
    width: 100px;
  } */
}

:deep(foreignObject) {
  overflow: visible;
}

:deep(foreignObject *) {
  transition: 0.2s;
}

:deep(foreignObject:hover img) {
  scale: 1.05;
  transform: translateY(-1rem);
}

:deep(foreignObject .spin-on-game-select) {
  animation: spin 0.25s linear 2, endSpin 0.2s linear 1;
  animation-delay: 0s, 0.5s;
}

/* :deep(foreignObject:hover h3) {
} */

:deep(figure) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

:deep(h3.title),
:deep(h3.fallback-title) {
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: 2rem;
  text-wrap: wrap;
}

:deep(h3.fallback-title) {
  margin-top: -1rem;
}

:deep(.fallback-icon) {
  font-family: 'hylian_symbols';
  font-size: 11rem;
  color: white;
}

:deep(h4.title) {
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  width: 16rem;
  text-wrap: wrap;
}

:deep(h4.major-event) {
  font-size: 2rem;
  border: 3px solid red;
  background-color: yellow;
  padding: 1rem;
}

:deep(h4.what-if) {
  border: 3px solid blue;
  background-color: lightblue;
}

@keyframes spin {
  0%,
  100% {
    transform: rotateY(0deg) scale(1.05) translateY(-1rem);
  }
  25% {
    transform: rotateY(90deg) scale(1.05) translateY(-1rem);
  }
  50% {
    transform: rotateY(180deg) scale(1.05) translateY(-1rem);
  }
  75% {
    transform: rotateY(270deg) scale(1.05) translateY(-1rem);
  }
}

@keyframes endSpin {
  0% {
    transform: rotateY(360deg) scale(1.05);
  }
  100% {
    transform: rotateY(0deg) scale(1) translateY(0);
  }
}
</style>
