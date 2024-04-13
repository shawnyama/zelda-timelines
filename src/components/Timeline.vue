<template>
  <main :class="orientation">
    <section ref="mermaidContainer">
      <navbar
        :selectedTimeline="selectedTimeline"
        :orientation="orientation"
        :theme-icon="themeIcon"
        @select-timeline="selectTimeline"
        @toggle-about-modal="toggleAboutModal"
        @toggle-orientation="toggleOrientation"
        @toggle-theme="toggleTheme"
        @reset-view="updateDimensions"
      />
      <vue-mermaid-string class="mermaid" :value="generateDiagram()" @node-click="selectGame" />
    </section>
    <description :game="selectedGame" :orientation="orientation" />
  </main>
  <about-modal v-if="showAboutModal" @toggle-about-modal="toggleAboutModal" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import * as d3 from 'd3'
import endent from 'endent'
import Navbar from '@/components/Navbar.vue'
import Description from './Description.vue'
import AboutModal from './AboutModal.vue'
import { gameNodes } from '@/data/games'
import { links, Timelines } from '@/data/timelines'
import { LinkDesigns } from '@/data/link-designs'
import { GameIds } from '@/data/events'
// import type { Events, TimeSplitEvents, Eras } from '@/data/events'
import type { GameNode, Node } from '@/data/games'
import type { Link } from '@/data/timelines'

let width = 0
let height = 0

const mermaidContainer = ref()

const selectedTimeline = ref(
  (localStorage.getItem('selectedTimeline') as Timelines) ?? Timelines.Official
)

const orientation = ref(localStorage.getItem('orientation') ?? 'LR')

const year = ref(new Date().getFullYear())
const isDrawingDiagram = ref(false)
const selectedGame = ref<GameNode | null>(null)
const showAboutModal = ref(false)

// Icon buttons
const themeIcon = ref('ph:sun-bold')

function toggleAboutModal() {
  showAboutModal.value = !showAboutModal.value
}
function toggleTheme() {
  themeIcon.value = themeIcon.value === 'ph:sun-bold' ? 'ph:moon-bold' : 'ph:sun-bold'
}
function toggleOrientation() {
  orientation.value = orientation.value === 'LR' ? 'TB' : 'LR'
  localStorage.setItem('orientation', orientation.value)
}

const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => {
    // Check if id is a game
    if (Object.values(GameIds).includes(id as GameIds)) {
      const imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
      // FIXME: Make the divs generated here the same width
      if (!imagePath.includes('undefined')) {
        return endent`${id}[<img class='${id}' src='${imagePath}' alt='Icon' width='240' height='180'></img><h3 class='title'>${title}</h3>]`
      }
      return endent`${id}[<div class='fallback-icon ${id}'>k</div><h3 class='fallback-title'>${title}</h3>]`
    }
    return endent`${id}[<h4 class='title'>${title}</h4>]`
  }

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

    let connection = `${source.replace(/\s+/g, '')} ${link}${
      !!label ? `|${label}|` : ''
    } ${target.replace(/\s+/g, '')}`

    if (subgraphStart) {
      connection = endent`
      subgraph ${subgraphStart.replace(/\s+/g, '')}
      direction ${orientation.value}\n${connection}`
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

  isDrawingDiagram.value = true

  // Remove nodes that aren't used in links
  const timelineLinks = links[selectedTimeline.value]

  // Hold all events, games, etc. that are in the timeline
  const timelineContent = Array.from(
    new Set(timelineLinks.map(({ source, target }) => [source, target]).flat())
  )
  const gameContent = timelineContent.filter((id) => Object.values(GameIds).includes(id as GameIds))
  const eventContent = timelineContent.filter((id) => !gameContent.includes(id))
  // Collect game nodes that belong in the timeline
  const gameNodesToDisplay: GameNode[] = gameNodes.filter(
    ({ id, releases }) => gameContent.includes(id as GameIds) && year.value >= releases[0].year
  )
  // Insert event nodes that belong in the timeline
  const eventNodesToDisplay: Node[] = []
  eventContent.forEach((id) => eventNodesToDisplay.push({ id: id.replace(/\s+/g, ''), title: id }))

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
  flowchart ${orientation.value}
  ${nodesToDisplay.map(generateNode).join('\n ')}
  ${timelineLinks.map(generateLink).join('\n ')}
  ${gameNodesToDisplay.map(generateClick).join('\n ')}
  `
  // Game nodes are only clickable for now

  // console.log(diagram)

  isDrawingDiagram.value = false
  return diagram
}

function selectGame(gameId: GameIds) {
  selectedGame.value = gameNodes.find(({ id }) => id === gameId) ?? null
  // Apply spin animation to icon
  const gameIcon = mermaidContainer.value.querySelector(`.${gameId}`)
  gameIcon.classList.add('spin-on-game-select')
  setTimeout(() => gameIcon.classList.remove('spin-on-game-select'), 800)
}

const diagramPadding = 400
const scaleMin = 0.75

async function updateDimensions() {
  await nextTick()

  width = window.innerWidth
  height = window.innerHeight

  // Apply pan/zoom
  const svg = d3.select('.mermaid > svg').attr('height', height).style('max-width', '100%')
  const timelineGroup = svg.select('g')
  const timelineBBox = (timelineGroup?.node() as any).getBBox()

  const translateExtent =
    orientation.value === 'LR'
      ? [
          [-diagramPadding, -height + diagramPadding],
          [timelineBBox.width + diagramPadding, height * 2 + diagramPadding] // x1 may have to vary depending on width of diagram
        ]
      : [
          [-width + diagramPadding, -diagramPadding],
          [width * 2 + diagramPadding, timelineBBox.height + diagramPadding]
        ]

  const zoom = d3
    .zoom()
    .translateExtent(translateExtent as any)
    .scaleExtent([scaleMin, 5])
    .on('zoom', (event) => {
      timelineGroup.attr('transform', event.transform)
    })

  svg.call(zoom as any).on('dblclick.zoom', null)

  // Determine initial position and scale
  let scale = 1
  let xTranslate = 0
  let yTranslate = 0

  if (orientation.value === 'LR') {
    scale = timelineBBox.width / (width * 2.5)
    if (scale < scaleMin) scale = scaleMin

    xTranslate = -timelineBBox.x * scale + diagramPadding / scale // FIXME: Double check if this diagram padding addition makes enough sense
    yTranslate = -timelineBBox.y * scale - timelineBBox.height / 3 // FIXME: This is a temporary hacky way to center the diagram (ALT)
  } else if (orientation.value === 'TB') {
    scale = timelineBBox.height / (height * 2.5)
    if (scale < scaleMin) scale = scaleMin

    xTranslate = mermaidContainer.value.clientWidth / 2 - timelineBBox.width / 2 // FIXME: This is a temporary hacky way to center the diagram
    yTranslate = diagramPadding / scale // FIXME: Double check if this diagram padding addition makes enough sense
  }

  // Apply the transform
  svg.call(zoom.transform as any, d3.zoomIdentity.scale(scale).translate(xTranslate, yTranslate))

  // console.log(scale, translate)
  // console.log(selectedTimeline.value,svg)
  // console.log(width, height)
}

const resizeObserver = new ResizeObserver(() => {
  // This may sometimes run when the selectedTimeline changes
  // However this is meant for window resize
  updateDimensions()
  console.log('window resize')
})

function selectTimeline(timeline: Timelines) {
  selectedTimeline.value = timeline
}

watch(
  () => selectedTimeline.value,
  () => {
    history.pushState(
      { selectedTimeline: selectedTimeline.value },
      selectedTimeline.value,
      `/zelda-timelines/${selectedTimeline.value}`
    )
    localStorage.setItem('selectedTimeline', selectedTimeline.value)

    updateDimensions()
    console.log('switch to', selectedTimeline.value, 'timeline')
    console.log(history)
  }
)

onMounted(() => {
  // If URL has a timeline, select it
  // Otherwise, fallback to last timeline in local storage/default timeline
  const url = new URL(window.location.href)
  const timelineString = url.pathname.split('/')[2]
  const timeline = Object.values(Timelines).includes(timelineString as Timelines)
    ? (timelineString as Timelines)
    : selectedTimeline.value
  selectTimeline(timeline)
  // Initialize/insure timeline route
  history.replaceState({ selectedTimeline: timeline }, timeline, `/zelda-timelines/${timeline}`)

  // Default selected game is first game in the timeline
  selectedGame.value = gameNodes[0]
  // Observe mermaid container for resizing
  if (mermaidContainer.value) {
    resizeObserver.observe(mermaidContainer.value)
  }
})

// Listen for browser back/forward navigation
window.addEventListener('popstate', (event) => {
  if (event.state.selectedTimeline) selectTimeline(event.state.selectedTimeline)
})
</script>

<style scoped>
main {
  display: flex;
  background-color: var(--light-green);

  &.TB {
    & > section {
      width: 60vw;
    }
  }
  &.LR {
    flex-direction: column;
    & > section {
      height: var(--timeline-height-LR);
    }
  }

  & > section {
    box-sizing: border-box;
    display: flex;
    position: relative;

    & > .mermaid {
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
  }
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

:deep(foreignObject:hover h3) {
}

:deep(h3.title),
:deep(h3.fallback-title) {
  font-family: 'Spectral', serif;
  font-weight: bold;
  margin-top: 0.5rem;
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
  margin-top: 0.5rem;
  font-size: 1.5rem;
  width: 16rem;
  text-wrap: wrap;
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
