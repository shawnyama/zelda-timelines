<template>
  <modal title="References" @close="emit('close')">
    <div v-for="timeline in Timelines" :key="timeline" :id="`references-${timeline}`">
      <h1 :class="{ 'blink-on-open': timeline === timelineToScrollTo }">
        {{ timelineData[timeline].metadata.timelineTitle }}
      </h1>
      <p>
        <template v-if="timelineData[timeline].metadata.timelineCreator?.includes(',')">
          Timeline creators:
        </template>
        <template v-else> Timeline creator: </template>
        {{ timelineData[timeline].metadata.timelineCreator ?? 'Unknown' }}
      </p>
      <h4>Sources:</h4>
      <ul>
        <li v-if="timelineData[timeline].metadata.sources.length === 0">No sources provided</li>
        <li v-else v-for="{ label, url } in timelineData[timeline].metadata.sources" :key="url">
          <span v-if="!url">{{ label }}</span>
          <a v-else :href="url" target="_blank" rel="noopener noreferrer">
            {{ label }}
          </a>
        </li>
      </ul>
      <div class="contribution">
        <p>
          Submitted by:
          {{ timelineData[timeline].metadata.submittedBy ?? 'Anonymous' }}
        </p>
        <p>Submitted on: {{ formatDate(timelineData[timeline].metadata.submittedOn) }}</p>
        <p>Last updated: {{ formatDate(timelineData[timeline].metadata.lastUpdatedOn) }}</p>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import Modal from './widgets/Modal.vue'
import { timelineData, Timelines } from '@/data/timelines'

const props = defineProps<{
  timelineToScrollTo: Timelines
}>()

const emit = defineEmits(['close'])

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(async () => {
  await nextTick()
  const targetElement = document.getElementById(`references-${props.timelineToScrollTo}`)
  if (!targetElement) return

  targetElement.scrollIntoView({ block: 'start' })
})
</script>

<style scoped>
h1 {
  color: var(--dark-green);
  text-transform: lowercase;
  border-bottom: var(--dark-green) 1px solid;
  padding-top: 0.25rem;
}

h4 {
  margin-top: 1rem;
}

div[id^='references-'] {
  scroll-margin-top: 1rem;
  &:not(:first-child) {
    margin-top: 1rem;
  }
}

.contribution {
  margin-top: 1rem;
}

.blink-on-open {
  animation: blink 0.75s;
}

@keyframes blink {
  0%,
  50%,
  100% {
    background-color: transparent;
    color: var(--dark-green);
  }
  25%,
  75% {
    background-color: var(--dark-green);
    color: var(--modal-bg);
  }
}
</style>
