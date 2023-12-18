<template>
  <nav>
    <h2>Zelda timelines</h2>
    <div class="dropdown">
      <button>{{ selectedTimeline }}</button>
      <div class="options-container">
        <ul>
          <li v-for="timeline in Timelines" :value="timeline" @click="selectNewTimeline(timeline)">
            {{ timeline }}
          </li>
        </ul>
      </div>
    </div>
    <button class="icon">?</button>
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
/**Use down button from zelda textboxes or those ticks that you see on the edges around options */

nav {
  background-color: var(--green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 0.5rem;
}

.dropdown {
  position: relative;
  display: inline-block;

  & > * {
    font-family: 'triforcetriforce', sans-serif;
    font-size: 2.5rem;
    cursor: pointer;
  }

  & > button {
    padding-top: 0.25rem;
    background-color: transparent;
    color: white;
    overflow: visible;
    background-color: transparent;
    border: 0;
    color: white;

    &:hover {
      /* do some fancy gradient thing or darker color? */
    }
  }

  &:hover .options-container {
    display: block;

    & > ul {
      animation: fade-in 0.2s ease-in-out; /* Add fadeIn animation */
    }
  }

  & .options-container {
    display: none;
    position: absolute;
    /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);

    & > ul {
      margin-top: 0.5rem;
      border-radius: 1rem;
      padding: 0.5rem;
      background-color: var(--green);
      min-width: 30vw;

      & > li {
        color: white;
        text-decoration: none;
        text-align: center;
        display: block;
        padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        border-radius: 0.75rem;

        &:not(:first-child):not(:last-child) {
          margin: 0.5rem 0;
        }

        &:hover {
          background-color: var(--dark-green);
        }
      }
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
