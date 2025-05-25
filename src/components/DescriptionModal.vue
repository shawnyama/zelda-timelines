<template>
  <modal is-custom @close="emit('close-description-modal')">
    <description :game="selectedGame" class="TB" />
    <template #extra-space>
      <Icon icon="heroicons:arrow-left-16-solid" height="1.75rem" />
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
:deep(main) {
  padding-top: 0;
}

aside.TB {
  max-height: calc(100vh - 10rem);
  margin-left: 0.5rem;
  width: calc(100% - 1rem);
}

:deep(.extra-space) {
  font-family: 'calamity', sans-serif;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  user-select: none;
}
</style>
