<template>
  <div ref="mermaidContainer">
    <vue-mermaid-string class="mermaid" :value="generateDiagram()" />
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
  isSmallScreen: boolean
}>()

const emit = defineEmits(['select-game', 'close-description-modal', 'update:is-small-screen'])

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

// Tracks available game nodes
let displayedGameIds: string[] = []

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => {
    // Check if id is a game
    if (Object.values(GameIds).includes(id as GameIds)) {
      let imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
      if (imagePath.includes('undefined')) {
        imagePath = new URL(`../assets/icons/games/fallback.svg`, import.meta.url).href
      }
      return `${id}[<figure class='${id}'><img src='${imagePath}' alt='Icon' width='240' height='180'></img><h3 class='title'>${title}</h3></figure>]`
    } else if (timeSplitEvents.includes(title)) {
      return `${id}[<h4 class='major-event title'>${title}</h4>]`
    } else if (whatIfEvents.includes(title)) {
      return `${id}[<h4 class='major-event title what-if'>${title}</h4>]`
    }
    return `${id}[<h4 class='title'>${title}</h4>]`
  }

  const removeSpaces = (str: string) => str.replaceAll(' ', '')

  const generateLink = (
    {
      source,
      target,
      label,
      linkDesign = LinkDesigns.Normal,
      distance = 0,
      subgraphStart,
      subgraphEnd
    }: Link,
    index: number
  ) => {
    distance += 3 // Minimum required for mermaid to render is 3

    // The link between nodes (link design is applied here)
    const link =
      linkDesign === LinkDesigns.Dotted
        ? `-${linkDesign.repeat(distance - 2)}-`
        : linkDesign.repeat(distance)

    // Applies custom styling to current thick link
    if (linkDesign === LinkDesigns.Thick) {
      linkStyles = linkStyles.concat(`linkStyle ${index} stroke-width:7px;`)
    }

    let connection = endent`
      ${removeSpaces(source)} 
      ${link}${!!label ? `|${label}|` : ''} 
      ${removeSpaces(target)}`

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

  let linkStyles: string = 'linkStyle default stroke-width:4px;' // Will be concatenated with other link styles in generateLink()
  const diagram = endent`%%{
    init: ${JSON.stringify({
      theme: 'base',
      flowchart: {},
      themeVariables: {
        primaryColor: 'transparent',
        primaryBorderColor: 'transparent',
        lineColor: 'hsl(168, 57%, 26%)'
      }
    })}
  }%%
  flowchart ${props.orientation} 
  ${nodesToDisplay.map(generateNode).join('\n ')}
  ${timelineLinks.map((link, index) => generateLink(link, index)).join('\n ')}
  ${gameNodesToDisplay.map(generateClick).join('\n ')}
  ${linkStyles}
  `

  displayedGameIds = gameNodesToDisplay.map(({ id }) => id) // Keep track of available game nodes

  return diagram
}

function applyTransform(
  xTranslate: number,
  yTranslate: number,
  options: { useTransition?: boolean; scale?: number } = {}
) {
  // console.log(xTranslate, yTranslate)
  if (!zoom?.transform) return
  const defaultOptions = { useTransition: true, scale: maxScale }
  const { scale, useTransition } = { ...defaultOptions, ...options }
  if (useTransition) {
    svg
      .transition()
      .duration(750)
      .call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  } else {
    svg.call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))
  }
}

// Game nodes are only selectable now
async function selectNode(event: MouseEvent) {
  const gameNodeElement = event.currentTarget as HTMLElement
  const id = gameNodeElement.classList[0]
  const gameNode = gameNodes.find((gameNode) => gameNode.id === id) ?? null
  if (!gameNode) return
  emit('select-game', gameNode)

  // Move to node position
  let xTranslate = 0
  let yTranslate = 0
  // Capture the center position of the node
  const gameNodeRect = gameNodeElement.getBoundingClientRect()
  const clientX = gameNodeRect.left + gameNodeRect.width / 2
  const clientY = gameNodeRect.top + gameNodeRect.height / 2
  const [x, y] = d3.pointer({ clientX, clientY }, svg.node())
  const [transformedX, transformedY] = d3.zoomTransform(svg.node()).invert([x, y])

  if (props.orientation === 'LR') {
    xTranslate = -transformedX + svgWidth
    yTranslate = -transformedY
  } else if (props.orientation === 'TB') {
    const vw40InPixels = window.innerWidth * 0.4
    xTranslate = props.isSmallScreen ? -transformedX + 120 : -transformedX - vw40InPixels / 2 // Hacky x position approximation for TB orientation, FIXME: should figure out the real calculation
    yTranslate = -transformedY + svgHeight
  }

  // Check if xTranslate and yTranslate are within the boundaries of translateExtent
  const leftBound = -translateExtent[0][0]
  const rightBound = -timelineBBox.width
  const topBound = translateExtent[0][1]
  const bottomBound = translateExtent[1][1]
  console.log('xpos', xTranslate)
  console.log('width', timelineBBox.width)
  console.log('left', leftBound, transformedX)
  console.log('right', rightBound, transformedX)
  if (xTranslate > leftBound) xTranslate = leftBound
  else if (xTranslate < rightBound) xTranslate = rightBound

  // if (yTranslate < translateExtent[0][1]) {
  //   yTranslate = translateExtent[0][1]
  // } else if (yTranslate > translateExtent[1][1]) {
  //   yTranslate = translateExtent[1][1]
  // }

  const isInitializing = event.detail === -1 // If we are initializing the position, due to timeline or orientation change
  const transformOptions = isInitializing ? { useTransition: false } : {}
  applyTransform(xTranslate, yTranslate, transformOptions)

  // The following classes must be added using vanilla JS since we are accessing HTML rendered within the vue-mermaid-string component
  // Add selected game class
  const prevGameNodeElement = mermaidContainer.value.querySelector('.selected-game')
  if (prevGameNodeElement) prevGameNodeElement.classList.remove('selected-game')
  gameNodeElement.classList.add('selected-game')
  // Apply spin animation
  if (isInitializing) return
  const gameIconElement = gameNodeElement.querySelector('img')
  if (!gameIconElement) return
  const spinClass = gameNode.isIconSlanted ? 'slanted-spin-on-game-select' : 'spin-on-game-select'
  gameIconElement.classList.add(spinClass)
  setTimeout(() => gameIconElement.classList.remove(spinClass), 800)
}

function jumpToNode(nodeElement: Element, options = { useTransition: true }) {
  const detail = options.useTransition ? 0 : -1
  nodeElement.dispatchEvent(new MouseEvent('click', { detail }))
  if (props.isSmallScreen) emit('close-description-modal') // Closes description modal (we don't want to show the description immediately on mobile)
}

function jumpToBeginning() {
  const x0 = translateExtent[0][0]
  const y0 = translateExtent[0][1]
  if (props.orientation === 'LR') {
    applyTransform(-x0, y0)
  } else if (props.orientation === 'TB') {
    applyTransform(x0, -y0)
  }
}

function jumpToEnd() {
  console.log(translateExtent)
  console.log(timelineBBox.width, timelineBBox.height)
  if (props.orientation === 'LR') {
    applyTransform(-translateExtent[1][0] + 3 * DIAGRAM_PADDING, translateExtent[0][1])
  } else if (props.orientation === 'TB') {
    applyTransform(translateExtent[1][0], translateExtent[1][1])
  }
}

// Zooms all the way out so you can see the entire diagram
function zoomOut() {
  applyTransform(0, 0, { scale: 1 })
}

defineExpose({ zoomOut, jumpToBeginning, jumpToEnd }) // Used in Navbar.vue

async function updateDimensions() {
  await nextTick() // Wait for mermaid to render the diagram (generateDiagram() to finish)

  // Get window dimensions (SVG should cover the window size)
  svgWidth = window.innerWidth
  svgHeight = window.innerHeight
  emit('update:is-small-screen', window.innerWidth < 800)
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
    .on('click', selectNode)
}

// Update dimensions when timeline or orientation changes
watch(
  () => [
    props.selectedTimeline,
    props.orientation,
    props.isSmallScreen // Prevents edge case where there is no description when going from mobile to desktop view
  ],
  async () => {
    await updateDimensions()
    // Initialize the position at the last selected game node (if it exists), otherwise start at the first game
    const gameNode =
      props.selectedGame && displayedGameIds.includes(props.selectedGame.id)
        ? mermaidContainer.value.querySelector(`.${props.selectedGame.id}`)
        : mermaidContainer.value.querySelector(`.${displayedGameIds[0]}`)
    if (gameNode) jumpToNode(gameNode, { useTransition: false })
  },
  { immediate: true }
)

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

:deep(foreignObject .slanted-spin-on-game-select) {
  animation: slantedSpin 0.25s linear 2, endSlantedSpin 0.2s linear 1;
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
  border: 3px solid #3a5fcd;
  background-color: #8ca6f4;
  /* color: white; */
  padding: 1rem;
}

:deep(h4.what-if) {
  border: 3px solid gold;
  background-color: whitesmoke;
}

:deep(#mermaid.edge-thickness-normal) {
  stroke-width: 8px;
}

@keyframes spin {
  0%,
  100% {
    transform: translateY(-1rem) rotateY(0deg) scale(1.05);
  }
  25% {
    transform: translateY(-1rem) rotateY(90deg) scale(1.05);
  }
  50% {
    transform: translateY(-1rem) rotateY(180deg) scale(1.05);
  }
  75% {
    transform: translateY(-1rem) rotateY(270deg) scale(1.05);
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

@keyframes slantedSpin {
  0%,
  100% {
    transform: translateY(-1rem) rotate3d(-1, 1, 0, 0deg) scale(1.05);
  }
  25% {
    transform: translateY(-1rem) rotate3d(-1, 1, 0, 90deg) scale(1.05);
  }
  50% {
    transform: translateY(-1rem) rotate3d(-1, 1, 0, 180deg) scale(1.05);
  }
  75% {
    transform: translateY(-1rem) rotate3d(-1, 1, 0, 270deg) scale(1.05);
  }
}

@keyframes endSlantedSpin {
  0% {
    transform: translateY(-1rem) rotate3d(-1, 1, 0, 360deg) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
