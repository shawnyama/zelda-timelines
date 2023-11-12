<template>
  <nav>
    <h2>Zelda timelines</h2>
    <select
      :value="selectedTimeline"
      @input="selectNewTimeline(($event.target as HTMLInputElement)?.value as Timelines)"
    >
      <option v-for="timeline in Timelines" :value="timeline">
        {{ timeline }}
      </option>
    </select>
  </nav>
</template>

<script setup lang="ts">
import { Timelines } from '@/data/games'
defineProps<{ selectedTimeline: Timelines }>()
const emit = defineEmits(['update:selectedTimeline'])

function selectNewTimeline(timeline: Timelines) {
  emit('update:selectedTimeline', timeline)
  localStorage.setItem('selectedTimeline', timeline)
}
</script>

<style scoped>
nav {
  background-color: var(--green);
  display: flex;
  color: white;
  padding: 0.2rem;
  padding-top: 0.4rem;
  height: 30px;
}

h2 {
  font-family: 'triforcetriforce', sans-serif;
  padding-left: 0.5rem;
}
</style>
