<template>
  <h2>Zelda timelines</h2>
  <div class="dropdown">
    <button>
      <img :src="caret" alt="caret-icon" />
      <span>{{ selectedTimeline }}</span>
      <img :src="caret" alt="caret-icon" />
    </button>
    <div class="options-container">
      <ul>
        <li v-for="timeline in Timelines" :value="timeline" @click="selectNewTimeline(timeline)">
          <img :src="caret" alt="caret-icon" />
          <div>{{ timeline }}</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <Button @click="emit('toggle-about-modal')">
      <Icon icon="ph:info-bold" height="1.75rem" />
    </Button>
    <Button @click="emit('toggle-orientation')">
      <Icon :icon="orientationIcon" height="1.75rem" />
    </Button>
    <Button @click="emit('toggle-theme')">
      <Icon :icon="themeIcon" height="1.75rem" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Timelines } from '@/data/timelines'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'
import caret from '@/assets/icons/caret-left.svg'

const props = defineProps<{ selectedTimeline: Timelines; orientation: string; themeIcon: string }>()
const emit = defineEmits([
  'update:selectedTimeline',
  'toggle-orientation',
  'toggle-theme',
  'toggle-about-modal'
])

const orientationIcon = computed(() =>
  props.orientation === 'LR' ? 'ph:arrows-horizontal-bold' : 'ph:arrows-vertical-bold'
)

function selectNewTimeline(timeline: Timelines) {
  emit('update:selectedTimeline', timeline)
  localStorage.setItem('selectedTimeline', timeline)
}
</script>

<style scoped>
/**Use down button from zelda textboxes or those ticks that you see on the edges around options */

h2,
.dropdown,
.btn-group {
  position: absolute;
  z-index: 1;
  background-color: var(--navbar-bg);
  backdrop-filter: blur(2px);
  margin: 0.25rem;
}

/* nav {
  display: flex;
  color: white;
  padding: 0 0.5rem;
  width: 100%; */

.btn-group {
  right: 0;
  border-radius: 0.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-content: end;
}

.dropdown {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  display: inline-block;

  & > * {
    font-family: 'triforce', sans-serif;
    /* font-style: italic; */
    font-size: 2.25rem;
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
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > img {
      height: 1.25rem;
      rotate: -90deg;
    }

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
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);

    & > ul {
      /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
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
        position: relative;
        padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        border-radius: 0.75rem;

        & > img {
          display: none;
          position: absolute;
          scale: 0.75;
          rotate: 180deg;
          bottom: 0.2rem;
        }

        &:not(:first-child):not(:last-child) {
          margin: 0.5rem 0;
        }

        &:hover {
          background-color: var(--dark-green);

          & > img {
            display: block;
            animation: arrow-animation 1s;
            animation-iteration-count: infinite;
          }
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

@keyframes arrow-animation {
  0% {
    left: 7px;
  }
  50% {
    left: 12px;
  }
  100% {
    left: 7px;
  }
}
</style>
