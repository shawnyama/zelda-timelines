<template>
  <modal title="README.md" @close="emit('toggle-about-modal')">
    <div v-html="markdownIt().render(readme)" />
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import markdownIt from 'markdown-it'
import readme from '/README.md?raw'

const emit = defineEmits(['toggle-about-modal'])
</script>

<style scoped>
:deep(h1),
:deep(h2),
:deep(h3) {
  color: var(--dark-green);
  margin-bottom: 0.5rem;
}

:deep(h2) {
  border-bottom: 1px solid var(--dark-green);
  font-size: 1.5rem;
}

:deep(h3) {
  margin-left: 0.5rem;
  font-size: 1.25rem;
}

:deep(h2),
:deep(h3) {
  font-family: 'Spectral', sans-serif;
  font-weight: bold;
}

:deep(h1 + p) {
  padding-left: 0;
  padding-right: 0;
}

:deep(p),
:deep(pre) {
  padding: 0 0.5rem;
}

:deep(p),
:deep(ul),
:deep(pre) {
  margin-bottom: 0.5rem;
}

:deep(pre) {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  width: fit-content;
  background-color: var(--green);
}
</style>
