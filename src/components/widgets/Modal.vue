<template>
  <div class="overlay" @click="emit('close')">
    <section @click.stop>
      <header v-if="!isCustom">
        <code>{{ title }}</code>
        <Button @click="emit('close')" text icon>
          <Icon icon="heroicons:x-mark-16-solid" height="1.75rem" />
        </Button>
      </header>
      <main>
        <slot />
      </main>
    </section>
    <div class="extra-space">
      <slot name="extra-space" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import { Icon } from '@iconify/vue'

defineProps<{
  title?: string
  isCustom?: boolean
}>()

const emit = defineEmits(['close'])
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 2;
  padding-top: 0.5rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
}

section {
  margin: 0 auto;
  width: 60rem;
  max-width: calc(100vw - 1rem);
  background-color: var(--modal-bg);
  border-radius: 0.5rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--green);
  padding: 0.25rem 0.5rem;
  padding-left: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

main {
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-height: calc(100vh - 6rem);
}
</style>
