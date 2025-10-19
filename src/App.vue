<template>
  <timeline-wrapper
    @open-about-modal="toggleAboutModal(true)"
    @open-references-modal="(timeline: Timelines) => toggleReferencesModal(timeline)"
  />
  <about-modal v-if="showAboutModal" @close="toggleAboutModal(false)" />
  <references-modal
    v-if="timelineReferencesToShow"
    :timeline="timelineReferencesToShow"
    @close="toggleReferencesModal(null)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimelineWrapper from './components/TimelineWrapper.vue'
import AboutModal from './components/AboutModal.vue'
import ReferencesModal from './components/ReferencesModal.vue'
import { Timelines } from '@/data/timelines'

const showAboutModal = ref(false)
const timelineReferencesToShow = ref<Timelines | null>(null)

function toggleAboutModal(state: boolean) {
  showAboutModal.value = state
}

function toggleReferencesModal(timeline: Timelines | null) {
  timelineReferencesToShow.value = timeline
}
</script>
