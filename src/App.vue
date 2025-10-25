<template>
  <timeline-wrapper
    @open-about-modal="toggleAboutModal(true)"
    @open-create-modal="toggleCreateModal(true)"
    @open-references-modal="(timeline: Timelines) => toggleReferencesModal(timeline)"
  />
  <about-modal v-if="showAboutModal" @close="toggleAboutModal(false)" />
  <references-modal
    v-if="timelineReferencesToScrollTo"
    :timeline-to-scroll-to="timelineReferencesToScrollTo"
    @close="toggleReferencesModal(null)"
  />
  <create-modal v-if="showCreateModal" @close="toggleCreateModal(false)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimelineWrapper from './components/TimelineWrapper.vue'
import AboutModal from './components/AboutModal.vue'
import ReferencesModal from './components/ReferencesModal.vue'
import CreateModal from './components/CreateModal.vue'
import { Timelines } from '@/data/timelines'

const showAboutModal = ref(false)
const showCreateModal = ref(false)
const timelineReferencesToScrollTo = ref<Timelines | null>(null)

function toggleAboutModal(state: boolean) {
  showAboutModal.value = state
}

function toggleCreateModal(state: boolean) {
  showCreateModal.value = state
}

function toggleReferencesModal(timeline: Timelines | null) {
  timelineReferencesToScrollTo.value = timeline
}
</script>
