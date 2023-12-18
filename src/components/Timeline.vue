<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import * as d3 from 'd3'
import endent from 'endent'
import Description from './Description.vue'
import { nodes, links, Timelines, Games } from '@/data/games'
import type { Node, Link } from '@/data/games'

const props = defineProps<{
  selectedTimeline: Timelines
}>()

const mermaidContainer = ref()

const year = ref(new Date().getFullYear())
const selectedGame = ref<Node | null>(null)
const orientation = 'LR'

const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) =>
    endent`${id}[<img src='http://localhost:5173/src/assets/icons/${id}.svg' alt='Icon' width='120' height='120'></img><h3 class='title'>${title}</h3>]`

  const generateLink = ({ source, target, label }: Link) =>
    `${source} ======${!!label ? `|${label}|` : ''} ${target}`

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
  console.log(nodesToDisplay)
  console.log(diagram)

  return diagram
}

function selectGame(nodeId: Games) {
  selectedGame.value = nodes.find(({ id }) => id === nodeId) ?? null
}

// const resizeObserver = new ResizeObserver(() => {
//   width.value = mermaidContainer.value?.clientWidth ?? 0
//   height.value = mermaidContainer.value?.clientHeight ?? 0
// })

const diagramPadding = 150

onMounted(() => {
  const width = mermaidContainer.value?.clientWidth ?? 0
  const height = mermaidContainer.value?.clientHeight ?? 0

  // Apply pan/zoom
  // if (mermaidContainer.value) resizeObserver.observe(mermaidContainer.value)
  // console.log(width.value, height.value, mermaidContainer.value)
  const svg = d3.select('.mermaid > svg').style('height', height)
  const inner = svg.select('g')
  console.log(inner, svg)
  const zoom = d3
    .zoom()
    .translateExtent([
      [-diagramPadding, -height + diagramPadding],
      [Infinity, height + diagramPadding] // x1 may have to vary depending on width of diagram
    ])
    .scaleExtent([1, 5])
    .on('zoom', (event) => {
      inner.attr('transform', event.transform)
    })
  svg.call(zoom as any).on('dblclick.zoom', null)
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

:deep(foreignObject:hover h3.title) {
  color: red;
}

:deep(h3.title) {
  font-family: 'Franklin Gothic', sans-serif;
  font-weight: bold;
  font-style: italic;
  margin-top: 0.5rem;
  font-size: 1.25rem;
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

  & > svg {
  }
}
</style>
