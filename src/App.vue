<template>
  <timeline-wrapper
    @toggle-about-modal="toggleAboutModal"
    @toggle-references-modal="toggleReferencesModal"
  />
  <about-modal v-if="showAboutModal" @toggle-about-modal="toggleAboutModal" />
  <references-modal v-if="showReferencesModal" @toggle-references-modal="toggleReferencesModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimelineWrapper from './components/TimelineWrapper.vue'
import AboutModal from './components/AboutModal.vue'
import ReferencesModal from './components/ReferencesModal.vue'

const showAboutModal = ref(false)
const showReferencesModal = ref(false)

function toggleAboutModal() {
  showAboutModal.value = !showAboutModal.value
}

function toggleReferencesModal() {
  showReferencesModal.value = !showReferencesModal.value
}
</script>
