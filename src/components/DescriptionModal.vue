<template>
  <modal is-custom @close="emit('close-description-modal')">
    <description :game="selectedGame" class="TB" />
    <Button @click="emit('close-description-modal')" rounded>
      <Icon icon="heroicons:x-mark-16-solid" height="1.75rem" />Close
    </Button>
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import Description from './Description.vue'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'
import type { GameNode } from '@/data/games'

defineProps<{
  selectedGame: GameNode
}>()

const emit = defineEmits(['close-description-modal'])
</script>

<style scoped>
button {
  align-self: center;
  z-index: 2;
  position: absolute;
  bottom: 2.5rem;
}

:deep(main) {
  overflow: none;
  padding-top: 0;
}
</style>
