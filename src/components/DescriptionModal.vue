<template>
  <modal is-custom @close="emit('close-description-modal')">
    <description class="TB" :game="selectedGame" is-small-screen />
    <template #extra-space>
      <Icon icon="heroicons:arrow-left-16-solid" height="1.25rem" />
      <span>Back</span>
    </template>
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import Description from './Description.vue'
import type { GameNode } from '@/data/games'
import { Icon } from '@iconify/vue'

defineProps<{
  selectedGame: GameNode
}>()

const emit = defineEmits(['close-description-modal'])
</script>

<style scoped>
:deep(.extra-space) {
  font-family: 'calamity', sans-serif;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  user-select: none;
}

/* 
Styles for the modal version of the description regardless of width.
Rules for smaller width are in Description.vue. 
*/
:deep(main) {
  padding: 0;
  width: 100%;
  overflow: visible;
}

:deep(section) {
  margin-top: 0;
  background-color: transparent;
}

aside.TB {
  max-height: 80svh;
  margin-right: 0;

  &:deep(> section) {
    background-color: var(--modal-bg-alt);
    border-radius: 1rem;
  }
}
</style>
