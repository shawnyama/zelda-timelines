<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import * as d3 from 'd3'
import endent from 'endent'
import Description from './Description.vue'
import { gameNodes } from '@/data/games'
import { links, Timelines } from '@/data/timelines'
import { LinkDesigns } from '@/data/link-designs'
import { GameIds } from '@/data/events'
import type { Events, TimeSplitEvents, Eras } from '@/data/events'
import type { GameNode, Node } from '@/data/games'
import type { Link } from '@/data/timelines'

const props = defineProps<{
  selectedTimeline: Timelines
}>()

let width = 0
let height = 0

const mermaidContainer = ref()

const year = ref(new Date().getFullYear())
const isDrawingDiagram = ref(false)
const selectedGame = ref<GameNode | null>(null)
const orientation = 'LR'

const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => {
    // Check if id is a game
    if (Object.values(GameIds).includes(id as GameIds)) {
      const imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
      // FIXME: Make the divs generated here the same width
      if (!imagePath.includes('undefined')) {
        return endent`${id}[<img src='${imagePath}' alt='Icon' width='240' height='180'></img><h3 class='title'>${title}</h3>]`
      }
      return endent`${id}[<div class='fallback-icon'>k</div><h3 class='fallback-title'>${title}</h3>]`
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
      connection = `subgraph ${subgraphStart.replace(
        /\s+/g,
        ''
      )}\ndirection ${orientation}\n${connection}`
      console.log(connection)
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
  const timelineLinks = links[props.selectedTimeline]

  // Hold all events, games, etc. that are in the timeline
  const timelineContent = Array.from(
    new Set(timelineLinks.map(({ source, target }) => [source, target]).flat())
  )
  const gameContent = timelineContent.filter((id) => Object.values(GameIds).includes(id as GameIds))
  const eventContent = timelineContent.filter((id) => !gameContent.includes(id))
  // Collect game nodes that belong in the timeline
  const gameNodesToDisplay: GameNode[] = gameNodes.filter(
    ({ id, releaseYear }) => gameContent.includes(id as GameIds) && year.value >= releaseYear
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
  flowchart ${orientation}
  ${nodesToDisplay.map(generateNode).join('\n ')}
  ${timelineLinks.map(generateLink).join('\n ')}
  ${gameNodesToDisplay.map(generateClick).join('\n ')}
  `
  // Game nodes are only clickable for now

  console.log(diagram)

  isDrawingDiagram.value = false
  return diagram
}

function selectGame(nodeId: GameIds) {
  selectedGame.value = gameNodes.find(({ id }) => id === nodeId) ?? null
}

const diagramPadding = 150

function updateDimensions() {
  width = mermaidContainer.value?.clientWidth ?? window.innerWidth
  height = mermaidContainer.value?.clientHeight ?? window.innerHeight

  // Apply pan/zoom
  const svg = d3.select('.mermaid > svg').attr('height', height) //.style('height', height)
  const inner = svg.select('g')

  const zoom = d3
    .zoom()
    .translateExtent([
      [-diagramPadding, -height + diagramPadding],
      [Infinity, height * 2 + diagramPadding] // x1 may have to vary depending on width of diagram
    ])
    .scaleExtent([1, 5])
    .on('zoom', (event) => {
      inner.attr('transform', event.transform)
    })

  svg.call(zoom as any).on('dblclick.zoom', null)
  svg.call(zoom.transform as any, d3.zoomIdentity.scale(2).translate(diagramPadding, height / 10)) // Initial position

  // console.log(props.selectedTimeline,svg)
  console.log(width, height)
}

const resizeObserver = new ResizeObserver(() => {
  // This may sometimes run when the selectedTimeline changes
  // However this is meant for window resize
  updateDimensions()
  console.log('window resize')
})

watch(
  () => props.selectedTimeline,
  async () => {
    await nextTick()
    updateDimensions()
    console.log('switch to', props.selectedTimeline, 'timeline')
  }
)

onMounted(() => {
  if (mermaidContainer.value) {
    resizeObserver.observe(mermaidContainer.value)
  }
})
</script>

<template>
  <main>
    <section ref="mermaidContainer">
      <vue-mermaid-string class="mermaid" :value="generateDiagram()" @node-click="selectGame" />
    </section>
    <description :game="selectedGame" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  background-color: var(--light-green);
  flex-direction: column;
  height: calc(100vh - 30px);
}

li {
  margin: 0.25rem;
  padding: 0.25rem;
  background-color: burlywood;
  cursor: pointer;
}

section {
  display: flex;
  flex: 1;
  height: 60%;
}

:deep(foreignObject) {
  overflow: visible;
}

:deep(foreignObject:hover h3) {
  color: red;
}

:deep(h3.title),
:deep(h3.fallback-title) {
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-style: italic;
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

.mermaid {
  display: flex;
  align-items: center;
  flex: 1;
  overflow: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  & > :deep(svg) {
    /* max-height: 100%; */
  }

  /* & :deep(svg > g > .root > .nodes > g) {
    width: 100px;
  } */
}
</style>
