<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import * as d3 from 'd3'
import endent from 'endent'
import Description from './Description.vue'
import { nodes, links, Timelines, Games } from '@/data/games'
import type { Node, Link } from '@/data/games'

const props = defineProps<{
  selectedTimeline: Timelines
}>()

let width = 0
let height = 0

const mermaidContainer = ref()

const year = ref(new Date().getFullYear())
const isDrawingDiagram = ref(false)
const selectedGame = ref<Node | null>(null)
const orientation = 'LR'

const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  isDrawingDiagram.value = true

  const generateNode = ({ id, title }: Node) => {
    const imagePath = new URL(`../assets/icons/games/${id}.svg`, import.meta.url).href
    if (!imagePath.includes('undefined')) {
      return endent`${id}[<img src='${imagePath}' alt='Icon' width='120' height='120'></img><h3 class='title'>${title}</h3>]`
    }
    return endent`${id}[<div class='fallback-icon'>k</div><h3 class='fallback-title'>${title}</h3>]`
  }

  const linkDesign = '======'

  const generateLink = ({ source, target, label }: Link) =>
    `${source} ${linkDesign}${!!label ? `|${label}|` : ''} ${target}`

  const generateClick = ({ id }: Node) => `click ${id}`

  // Remove nodes that aren't used in links
  const timelineLinks = links[props.selectedTimeline]
  const nodesToDisplay = nodes.filter(
    ({ id, releaseYear }) =>
      (timelineLinks.map(({ source }) => source).includes(id) ||
        timelineLinks.map(({ target }) => target).includes(id)) &&
      year.value >= releaseYear
  )

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
  ${nodesToDisplay.map(generateClick).join('\n ')}
  `
  // console.log(nodesToDisplay)
  // console.log(diagram)

  isDrawingDiagram.value = false
  return diagram
}

function selectGame(nodeId: Games) {
  selectedGame.value = nodes.find(({ id }) => id === nodeId) ?? null
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
  () => {
    // FIXME: It seems like something has to be waited for in order for the zoom to be applied properly
    // Maybe related to waiting for the diagram to be drawn?
    setTimeout(() => {
      updateDimensions()
    }, 1)
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
  /* width: 300px;
  height: 300px; */
  overflow: visible;
}

:deep(foreignObject:hover h3) {
  color: red;
}

:deep(h3.title),
:deep(h3.fallback-title) {
  font-family: 'Franklin Gothic', sans-serif;
  font-weight: bold;
  font-style: italic;
  margin-top: 0.5rem;
  font-size: 1.25rem;
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
