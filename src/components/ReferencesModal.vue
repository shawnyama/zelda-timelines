<template>
  <modal title="References" @close="emit('close')">
    <h1>{{ timelineTitle }}</h1>
    <p>Timeline creator: {{ timelineCreator }}</p>
    <h4>Sources:</h4>
    <ul>
      <li v-for="source in sources" :key="source.url">
        <a :href="source.url" target="_blank" rel="noopener noreferrer">
          {{ source.label }}
        </a>
      </li>
    </ul>
    <div class="contributor">
      <p>Submitted by: {{ submittedBy }}</p>
      <p>
        Submitted on: <time>{{ submittedOn }}</time>
      </p>
      <p>
        Last updated: <time>{{ lastUpdatedOn }}</time>
      </p>
    </div>
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import { Icon } from '@iconify/vue'
import { timelineData, Timelines } from '@/data/timelines'

const props = defineProps<{
  timeline: Timelines
}>()

const { timelineTitle, timelineCreator, submittedBy, submittedOn, lastUpdatedOn, sources } =
  timelineData[props.timeline].metadata

const emit = defineEmits(['close'])
</script>

<style scoped>
h1 {
  color: var(--dark-green);
  text-transform: lowercase;
  border-bottom: var(--dark-green) 1px solid;
}

h4,
.contributor {
  margin-top: 1rem;
}
</style>
