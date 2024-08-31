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
}

:deep(h2) {
  border-bottom: 1px solid var(--dark-green);
}

:deep(h2),
:deep(h3) {
  text-transform: lowercase;
}

:deep(h3) {
  margin-left: 0.5rem;
}

:deep(h1 + p) {
  padding: 0;
  padding-bottom: 0.25rem;
}

:deep(p),
:deep(pre) {
  padding: 0 0.5rem;
}

:deep(p),
:deep(ul),
:deep(pre) {
  padding-bottom: 0.25rem;
}
</style>
