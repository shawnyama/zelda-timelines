<template>
  <main :class="orientation">
    <section>
      <navbar
        :selectedTimeline="selectedTimeline"
        :orientation="orientation"
        :theme-icon="themeIcon"
        :is-small-screen="isSmallScreen"
        @select-timeline="selectTimeline"
        @toggle-about-modal="$emit('toggle-about-modal')"
        @toggle-orientation="toggleOrientation"
        @toggle-theme="toggleTheme"
        @jump-to-beginning="timelineDiagram?.jumpToBeginning"
        @jump-to-end="timelineDiagram?.jumpToEnd"
        @zoom-out="timelineDiagram?.zoomOut"
      />
      <timeline-diagram
        ref="timelineDiagram"
        :selected-game="selectedGame"
        :selected-timeline="selectedTimeline"
        :orientation="orientation"
        :year="year"
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
      <description :game="selectedGame" :orientation="orientation"
    /></template>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
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
}

const selectedTimeline = ref(
  (localStorage.getItem('selectedTimeline') as Timelines) ?? Timelines.Official
)
function selectTimeline(timeline: Timelines) {
  selectedTimeline.value = timeline
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

const themeIcon = ref('ph:sun-bold')
function toggleTheme() {
  themeIcon.value = themeIcon.value === 'ph:sun-bold' ? 'ph:moon-bold' : 'ph:sun-bold'
}

const year = ref(new Date().getFullYear())

watch(
  () => selectedTimeline.value,
  () => {
    history.pushState(
      { selectedTimeline: selectedTimeline.value },
      selectedTimeline.value,
      `/zelda-timelines/${selectedTimeline.value}`
    )
    localStorage.setItem('selectedTimeline', selectedTimeline.value)
    // console.log('switch to', selectedTimeline.value, 'timeline')
    // console.log(history)
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
}

@media screen and (min-width: 800px) {
  .TB > section {
    width: 60vw;
  }
}
</style>
