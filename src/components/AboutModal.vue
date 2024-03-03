<template>
  <modal @close="emit('toggle-about-modal')">sds</modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'

const emit = defineEmits(['toggle-about-modal'])
</script>

<style scoped></style>
