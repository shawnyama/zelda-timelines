<template>
  <modal title="References" @close="emit('close-references-modal')">
    <template #extra-space>
      <Icon icon="heroicons:arrow-left-16-solid" height="1.25rem" />
      <span>Back</span>
    </template>
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import { Icon } from '@iconify/vue'
</script>
