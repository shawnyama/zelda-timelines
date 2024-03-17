<template>
  <div @click="emit('close')">
    <section @click.stop>
      <header>
        <code>{{ title }}</code>
        <Button @click="emit('close')" text>
          <Icon icon="heroicons:x-mark-16-solid" height="1.75rem" />
        </Button>
      </header>
      <main>
        <slot />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
}>()

const emit = defineEmits(['close'])
</script>

<style scoped>
div {
  position: fixed;
  z-index: 2;
  padding-top: 1rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

section {
  margin: auto;
  width: 50vw;
  min-width: 50rem;
  background-color: var(--description-bg);
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
  max-height: 80vh;
  overflow: auto;
  font-size: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
