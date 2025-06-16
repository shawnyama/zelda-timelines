<template>
  <main :class="orientation">
    <section>
      <navbar
        v-if="timelineDiagram"
        :selectedTimeline="selectedTimeline"
        :orientation="orientation"
        :is-small-screen="isSmallScreen"
        @select-timeline="selectTimeline"
        @toggle-about-modal="$emit('toggle-about-modal')"
        @toggle-orientation="toggleOrientation"
        @jump-to-start="timelineDiagram.jumpToStart"
        @jump-to-end="timelineDiagram.jumpToEnd"
        @zoom-out="timelineDiagram.zoomOut"
      />
      <timeline-diagram
        ref="timelineDiagram"
        :selected-game="selectedGame"
        :selected-timeline="selectedTimeline"
        :orientation="orientation"
        :is-small-screen="isSmallScreen"
        @select-game="selectGame"
        @close-description-modal="selectGame(null)"
        @update:is-small-screen="isSmallScreen = $event"
      />
    </section>
    <template v-if="selectedGame">
      <description-modal
        v-if="isSmallScreen"
        :selected-game="selectedGame"
        @close-description-modal="selectGame(null)" />
      <description v-else :game="selectedGame" :class="orientation"
    /></template>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TimelineDiagram from './TimelineDiagram.vue'
import Navbar from '@/components/Navbar.vue'
import Description from './Description.vue'
import DescriptionModal from './DescriptionModal.vue'
import { Timelines } from '@/data/timelines'
import type { GameNode } from '@/data/games'

const timelineDiagram = ref()
const isSmallScreen = ref(window.innerWidth < 800) // Will be updated by TimelineDiagram.vue

const selectedGame = ref<GameNode | null>(null)
function selectGame(gameNode: GameNode | null) {
  selectedGame.value = gameNode
  localStorage.setItem('selectedGameId', gameNode ? gameNode.id : '')
}

const selectedTimeline = ref(
  (localStorage.getItem('selectedTimeline') as Timelines) ?? Timelines.Official
)
function selectTimeline(timeline: Timelines) {
  // Update selected timeline if it's different
  if (selectedTimeline.value === timeline) return
  selectedTimeline.value = timeline
  // Save broswer history and local storage
  history.pushState({ selectedTimeline: timeline }, timeline, `/${timeline}`)
  localStorage.setItem('selectedTimeline', timeline)
}

// Chosen orientation is used unless we are on mobile. Mobile forces TB orientation.
const chosenOrientation = ref<'LR' | 'TB'>(
  (localStorage.getItem('orientation') as 'LR' | 'TB') ?? 'LR'
)
const orientation = computed(() => (isSmallScreen.value ? 'TB' : chosenOrientation.value))
function toggleOrientation() {
  chosenOrientation.value = chosenOrientation.value === 'LR' ? 'TB' : 'LR'
  localStorage.setItem('orientation', chosenOrientation.value)
}

function handlePopState(event: PopStateEvent) {
  if (event.state?.selectedTimeline) selectTimeline(event.state.selectedTimeline as Timelines)
}

onMounted(() => {
  // If URL has a timeline, select it
  // Otherwise, fallback to last timeline in local storage/default timeline
  const url = new URL(window.location.href)
  const timelineString = url.pathname.split('/')[1]
  const timeline = Object.values(Timelines).includes(timelineString as Timelines)
    ? (timelineString as Timelines)
    : selectedTimeline.value
  selectTimeline(timeline)
  // Initialize/insure timeline route
  history.replaceState({ selectedTimeline: timeline }, timeline, `/${timeline}`)
  window.addEventListener('popstate', handlePopState)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<style scoped>
main {
  display: flex;

  & > section {
    box-sizing: border-box;
    display: flex;
    position: relative;
  }

  &.LR {
    flex-direction: column;
    & > section {
      height: var(--timeline-height-LR);
    }
  }

  &.TB > section {
    height: 100vh; /* Allows Rendering... message to be centered in TB */
  }
}

@media screen and (min-width: 800px) {
  .TB > section {
    width: 60vw;
  }
}
</style>
