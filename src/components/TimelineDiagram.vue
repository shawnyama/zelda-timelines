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
let maxScale = 1
let svg: d3.Selection<any, unknown, HTMLElement, undefined>
let svgWidth = 0
let svgHeight = 0
let zoom: d3.ZoomBehavior<any, unknown>
let translateExtent: number[][] = []
let timelineGroup: d3.Selection<any, unknown, HTMLElement, undefined>
let timelineBBox: SVGRect
let displayedGameIds: string[] = []

// Tracks the first and last game nodes so we can jump to them
let firstGame: Element | null
let lastGame: Element | null

// const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => {
    // Check if id is a game
    if (Object.values(GameIds).includes(id as GameIds)) {
      const imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
      // FIXME: Make the divs generated here the same width
      if (!imagePath.includes('undefined')) {
        return endent`${id}[<figure class='${id}'><img src='${imagePath}' alt='Icon' width='240' height='180'></img><h3 class='title'>${title}</h3></figure>]`
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
  displayedGameIds = gameNodesToDisplay.map(({ id }) => id)
  if (
    !props.selectedGame ||
    (props.selectedGame.id && displayedGameIds.includes(props.selectedGame.id)) === false
  ) {
    selectNode(gameNodesToDisplay[0].id)
  } else {
    selectNode(props.selectedGame.id)
  }

  //   console.log(diagram)
  return diagram
}

function applyTransform(
  xTranslate: number,
  yTranslate: number,
  scale = maxScale,
  options = { useTransition: true }
) {
  if (!zoom?.transform) return
  if (options.useTransition) {
    svg
      .transition()
      .duration(750)
      .call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  } else {
    svg.call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  }
}

// Game nodes are only selectable now
async function selectNode(id: string) {
  await nextTick()
  emit('select-game', gameNodes.find((gameNode) => gameNode.id === id) ?? null)

  // Move to icon and apply spin animation and styling to it
  if (!mermaidContainer.value) return
  const gameNode = mermaidContainer.value.querySelector(`.${id}`)
  const gameIcon = gameNode.querySelector('img')

  // The following classes must be added using vanilla JS since we are accessing HTML rendered within the vue-mermaid-string component
  // Add selected game class
  const prevGameNode = mermaidContainer.value.querySelector('.selected-game')
  if (prevGameNode) prevGameNode.classList.remove('selected-game')
  gameNode.classList.add('selected-game')
  // Apply spin animation
  gameIcon.classList.add('spin-on-game-select')
  setTimeout(() => gameIcon.classList.remove('spin-on-game-select'), 800)
}

// TODO: Consider merging with selectNode
async function moveToNode(event: MouseEvent) {
  let xTranslate = 0
  let yTranslate = 0
  let [x, y] = d3.pointer(event, svg.node())
  let [transformedX, transformedY] = d3.zoomTransform(svg.node()).invert([x, y])

  if (props.orientation === 'LR') {
    xTranslate = -transformedX + svgWidth
    yTranslate = -transformedY
  } else if (props.orientation === 'TB') {
    xTranslate = -transformedX
    yTranslate = -transformedY + svgHeight
  }

  // Check if xTranslate and yTranslate are within the boundaries of translateExtent
  // if (xTranslate < translateExtent[0][0]) {
  //   xTranslate = translateExtent[0][0]
  // } else if (xTranslate > translateExtent[1][0]) {
  //   xTranslate = translateExtent[1][0]
  // }

  // if (yTranslate < translateExtent[0][1]) {
  //   yTranslate = translateExtent[0][1]
  // } else if (yTranslate > translateExtent[1][1]) {
  //   yTranslate = translateExtent[1][1]
  // }

  console.log(xTranslate, yTranslate, maxScale, firstGame, lastGame)

  applyTransform(xTranslate, yTranslate)
}

function moveToBeginning() {
  firstGame?.dispatchEvent(new MouseEvent('click'))
}

function moveToEnd() {
  lastGame?.dispatchEvent(new MouseEvent('click'))
}

// Zooms all the way out so you can see the entire diagram
function zoomOut() {
  applyTransform(0, 0, 1)
}

defineExpose({ zoomOut, moveToBeginning, moveToEnd })

async function updateDimensions() {
  await nextTick() // Wait for mermaid to render the diagram (generateDiagram() to finish)

  // Get window dimensions (SVG should cover the window size)
  svgWidth = window.innerWidth
  svgHeight = window.innerHeight
  // Get the svg container and the attributes of its first group which contains the timeline diagram
  svg = d3.select('.mermaid > svg').attr('height', svgHeight).style('max-width', '100%')
  timelineGroup = svg.select('g')
  timelineBBox = (timelineGroup?.node() as any).getBBox()

  // Determine dimensions of the viewport and maximum scale
  const setTranslateExtent = (x0: number, y0: number, x1: number, y1: number) => [
    [x0, y0],
    [x1, y1]
  ]
  if (props.orientation === 'LR') {
    maxScale = timelineBBox.width / svgWidth / 2
    translateExtent = setTranslateExtent(
      -DIAGRAM_PADDING,
      -svgHeight + DIAGRAM_PADDING,
      timelineBBox.width + DIAGRAM_PADDING,
      svgHeight * 2 + DIAGRAM_PADDING
    )
  } else if (props.orientation === 'TB') {
    maxScale = timelineBBox.height / svgHeight / 2
    translateExtent = setTranslateExtent(
      -svgWidth + DIAGRAM_PADDING,
      -DIAGRAM_PADDING,
      svgWidth * 2 + DIAGRAM_PADDING,
      timelineBBox.height + DIAGRAM_PADDING
    )
  }

  // Zoom behaviour
  zoom = d3
    .zoom()
    .translateExtent(translateExtent as any)
    .scaleExtent([MIN_SCALE, maxScale])
    .on('zoom', (event) => {
      timelineGroup.attr('transform', event.transform)
    })

  svg
    .call(zoom as any) // Apply pan/zoom behaviour
    .on('dblclick.zoom', null) // Disable double click zoom
    // Listen for clicks on nodes so we can move to them
    .selectAll('figure')
    .on('click', moveToNode)

  // Find the first and last game nodes so we can jump to them
  firstGame = mermaidContainer.value.querySelector(`.${displayedGameIds[0]}`)
  lastGame = mermaidContainer.value.querySelector(
    `.${displayedGameIds[displayedGameIds.length - 1]}`
  )
  moveToBeginning() // Move to the first game node
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

:deep(.selected-game h3.title) {
  color: white;
  text-shadow: var(--dark-green) 0 0 1rem;
  scale: 1.2;
  margin-top: 0.5rem;
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
