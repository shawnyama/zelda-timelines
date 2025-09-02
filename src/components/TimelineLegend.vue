<template>
  <section>
    <header>
      <Icon icon="ph:list-dashes-bold" height="1.5rem" />
      <h4>Legend</h4>
      <Button @click="emits('collapse')" rounded icon>
        <Icon icon="ph:arrows-in-simple-bold" height="1.4rem" />
      </Button>
    </header>
    <div>
      <span class="edge">Regular</span>
      <span class="thick-edge">Same Hero</span>
      <span class="dashed-edge">Vast time gap</span>
    </div>
    <div>
      <h4 class="title major-event">Timesplit event</h4>
      <h4 class="title major-event what-if">What-if event</h4>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'

const emits = defineEmits(['collapse'])
</script>

<style scoped>
section {
  padding: 1rem;
  padding-top: 0.5rem;
  border-radius: 0.75rem;
  font-family: 'calamity', sans-serif;
  color: var(--dark-green);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(0, 0%, 96%, 0.7);
  max-width: calc(100vw - 3rem);
}

header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--dark-green);
}

button {
  background-color: hsl(0, 0%, 96%, 0.7);
  margin-left: auto;
  margin-bottom: 0.5rem;
}

div {
  text-align: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.edge,
.thick-edge,
.dashed-edge {
  font-size: 0.9rem;
  height: 1.5rem;
  width: 7rem;
}

.edge {
  border-bottom: 2px solid var(--dark-green);
}

.thick-edge {
  border-bottom: 4px solid var(--dark-green);
}

.dashed-edge {
  border-bottom: 2px dashed var(--dark-green);
}
</style>
