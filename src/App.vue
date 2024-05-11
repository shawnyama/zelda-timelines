<template>
  <timeline-wrapper @toggle-about-modal="toggleAboutModal" />
  <about-modal v-if="showAboutModal" @toggle-about-modal="toggleAboutModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimelineWrapper from './components/TimelineWrapper.vue'
import AboutModal from './components/AboutModal.vue'

const showAboutModal = ref(false)

function toggleAboutModal() {
  showAboutModal.value = !showAboutModal.value
}
</script>
