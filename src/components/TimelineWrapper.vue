<template>
  <navbar
    v-if="timelineDiagramRef"
    :selectedTimeline="selectedTimeline"
    :orientation="orientation"
    :is-small-screen="isSmallScreen"
    :is-description-collapsed="isDescriptionCollapsed"
    @select-timeline="selectTimeline"
    @open-about-modal="emits('open-about-modal')"
    @open-create-modal="emits('open-create-modal')"
    @toggle-orientation="toggleOrientation"
    @open-references-modal="(timeline: Timelines) => emits('open-references-modal', timeline)"
    @jump-to-start="timelineDiagramRef.jumpToStart"
    @jump-to-end="timelineDiagramRef.jumpToEnd"
    @zoom-out="timelineDiagramRef.zoomOut"
  />
  <main :class="orientation">
    <template v-if="selectedGame">
      <description-modal
        v-if="isSmallScreen"
        :selected-game="selectedGame"
        @close-description-modal="selectGame(null)"
      />
      <description
        v-else
        :class="orientation"
        :game="selectedGame"
        :is-small-screen="isSmallScreen"
        :is-collapsed="isDescriptionCollapsed"
        @toggle="(state: boolean) => toggleDescription(state)"
      />
    </template>
    <timeline-diagram
      ref="timelineDiagramRef"
      :selected-game="selectedGame"
      :selected-timeline="selectedTimeline"
      :orientation="orientation"
      :is-small-screen="isSmallScreen"
      @select-game="selectGame"
      @close-description-modal="selectGame(null)"
      @update:is-small-screen="isSmallScreen = $event"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type ComponentPublicInstance } from 'vue'
import TimelineDiagram from './TimelineDiagram.vue'
import Navbar from '@/components/Navbar.vue'
import Description from './Description.vue'
import DescriptionModal from './DescriptionModal.vue'
import { Timelines } from '@/data/timelines'
import type { GameNode } from '@/data/games'

const emits = defineEmits(['open-about-modal', 'open-create-modal', 'open-references-modal'])

const timelineDiagramRef = ref<ComponentPublicInstance<typeof TimelineDiagram> | null>(null)
const isSmallScreen = ref(window.innerWidth < 800) // Will be updated by TimelineDiagram.vue

const isDescriptionCollapsed = ref(false)
const toggleDescription = (state: boolean) => {
  isDescriptionCollapsed.value = state
}

const selectedGame = ref<GameNode | null>(null)
function selectGame(gameNode: GameNode | null) {
  selectedGame.value = gameNode
  if (gameNode) localStorage.setItem('selectedGameId', gameNode.id)
}

function getLastSelectedTimeline(): Timelines {
  const lastSelectedTimeline = localStorage.getItem('selectedTimeline')
  const timelines = Object.values(Timelines) as string[]
  // Must check if timeline is valid since during development we could be changing the name or removing timelines
  if (lastSelectedTimeline && timelines.includes(lastSelectedTimeline)) {
    return lastSelectedTimeline as Timelines
  }
  return Timelines.Official
}
const selectedTimeline = ref(getLastSelectedTimeline())

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

  &.LR {
    flex-direction: column-reverse;
    &:deep(> figure) {
      height: calc(100svh - var(--description-height-LR) - 0.5rem);
    }
    &:deep(> aside.collapsed + figure) {
      height: 100svh;
    }
  }

  &.TB {
    flex-direction: row;
    &:deep(> figure) {
      margin-left: auto; /* So rendering message looks right */
      height: 100vh;
    }
  }
}

@media screen and (min-width: 800px) {
  .TB {
    &:deep(> figure) {
      width: 60vw;
    }
    &:deep(> aside.collapsed + figure) {
      width: 100vw;
    }
  }
}

@media screen and (max-width: 800px) {
  .TB:deep(> figure) {
    width: 100vw;
  }
}
</style>
