<template>
  <div>
    <section>
      <header>
        <Button @click="emit('close')">
          <Icon icon="heroicons:x-mark-16-solid" height="1.75rem" />
        </Button>
      </header>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['close'])
</script>

<style scoped>
div {
  position: fixed;
  z-index: 2;
  padding-top: 5rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

section {
  margin: auto;
  padding: 0.5rem;
  width: 50vw;
  min-width: 40rem;
  background-color: var(--navbar-bg);
  border-radius: 0.5rem;
}

header {
  display: flex;
  justify-content: flex-end;
}
</style>
