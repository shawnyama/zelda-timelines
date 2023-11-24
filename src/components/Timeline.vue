<script setup lang="ts">
import { ref } from 'vue'
import VueMermaidString from 'vue-mermaid-string'
import endent from 'endent'
import Description from './Description.vue'
import { nodes, links, Timelines, Games } from '@/data/games'
import type { Node, Link } from '@/data/games'
import skywardSwordIcon from '@/assets/icons/skyward-sword.svg'

const props = defineProps<{
  selectedTimeline: Timelines
}>()

const year = ref(new Date().getFullYear())
const selectedGame = ref<Node | null>(null)
const orientation = 'LR'

const formatLabel = (...strings: string[]) => `"\`${strings.join('')}\`"`

function generateDiagram() {
  const generateNode = ({ id, title }: Node) => id
  // endent`${id}[<img :src="skywardSwordIcon" alt='Icon' width='40' height='80'/><div>${title}</div>]`

  const generateLink = ({ source, target, label }: Link) =>
    `${source} -->${!!label ? `|${label}|` : ''} ${target}`

  const generateClick = ({ id }: Node) => `click ${id}`

  // Remove nodes that aren't used in links
  const timelineLinks = links[props.selectedTimeline]
  const nodesToDisplay = nodes.filter(
    ({ id, releaseYear }) =>
      (timelineLinks.map(({ source }) => source).includes(id) ||
        timelineLinks.map(({ target }) => target).includes(id)) &&
      year.value >= releaseYear
  )

  const diagram = endent`flowchart ${orientation} 
  ${nodesToDisplay.map(generateNode).join('\n ')}
  ${timelineLinks.map(generateLink).join('\n ')}
  ${nodesToDisplay.map(generateClick).join('\n ')}
  `
  // console.log(nodesToDisplay)
  console.log(diagram)

  return diagram
}

function selectGame(nodeId: Games) {
  selectedGame.value = nodes.find(({ id }) => id === nodeId) ?? null
}
</script>

<template>
  <main>
    <section>
      <!-- 
        <ul>
        <li v-for="({ name }, key) in nodes" :key="key" @click="selectedGame = nodes[key]">
        {{ name }}
      </li> 
    </ul>-->
      <vue-mermaid-string class="mermaid" :value="generateDiagram()" @node-click="selectGame" />
      <!-- <div>
        <input type="range" min="1986" :max="new Date().getFullYear()" v-model="year" />
        <input type="number" min="1986" :max="new Date().getFullYear()" v-model="year" />
      </div> -->
    </section>
    <description :game="selectedGame" />
    <img :src="skywardSwordIcon" alt="Icon" width="40" height="80" />
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

.mermaid {
  height: 100%;
  display: flex;
  align-items: center;
}

section {
  flex: 1;
  overflow: auto;
}
</style>
