<template>
  <h2>Zelda timelines</h2>
  <nav class="dropdown">
    <div class="selected-timeline">
      <!--How about using an hourglass?-->
      <div class="gear-group">
        <Icon icon="heroicons:cog-20-solid" height="1.75rem" />
        <Icon icon="heroicons:cog-16-solid" height="1.25rem" />
      </div>
      <span>{{ selectedTimeline }}</span>
      <div class="gear-group">
        <Icon icon="heroicons:cog-20-solid" height="1.75rem" />
        <Icon icon="heroicons:cog-16-solid" height="1.25rem" />
      </div>
    </div>
    <div class="options-container">
      <ul>
        <li
          v-for="timeline in Timelines"
          :value="timeline"
          @click="emit('select-timeline', timeline)"
        >
          <img :src="caret" alt="caret-icon" />
          <div>{{ timeline }}</div>
        </li>
      </ul>
    </div>
  </nav>
  <div class="btn-group">
    <Button @click="emit('toggle-about-modal')" icon>
      <Icon icon="ph:info-bold" height="1.75rem" />
    </Button>
    <Button @click="emit('toggle-theme')" icon>
      <Icon :icon="themeIcon" height="1.75rem" />
    </Button>
    <!--TODO: Add start and end icons-->
    <Button @click="emit('reset-view')" icon>
      <Icon icon="ph:crosshair-bold" height="1.75rem" />
    </Button>
    <Button @click="emit('zoom-out')" icon>
      <Icon icon="ph:arrows-out-bold" height="1.75rem" />
    </Button>
    <Button @click="emit('toggle-orientation')" icon>
      <Icon :icon="orientationIcon" height="1.75rem" />
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
  'select-timeline',
  'toggle-orientation',
  'toggle-theme',
  'toggle-about-modal',
  'reset-view',
  'zoom-out'
])

const orientationIcon = computed(() =>
  props.orientation === 'LR' ? 'ph:arrows-horizontal-bold' : 'ph:arrows-vertical-bold'
)
</script>

<style scoped>
/**Use down button from zelda textboxes or those ticks that you see on the edges around options */

h2,
.dropdown,
.btn-group {
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(2px);
  margin: 0.5rem;
  border-radius: 0.5rem;
}

/* nav {
  display: flex;
  color: white;
  padding: 0 0.5rem;
  width: 100%; */
h2 {
  color: var(--dark-green);
  padding: 0.25rem;
  pointer-events: none;
}

.btn-group {
  background-color: var(--navbar-bg);
  right: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-content: end;
}

.dropdown {
  background-color: var(--navbar-bg);
  width: 20rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  display: inline-block;
  border-radius: 2rem;

  & > * {
    font-family: 'triforce', sans-serif;
    /* font-style: italic; */
    font-size: 2.25rem;
    cursor: pointer;
  }

  & > .selected-timeline {
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    background-color: transparent;
    color: white;
    overflow: visible;
    background-color: transparent;
    border: 0;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > * {
      padding: 0 0.5rem;
    }

    & > .gear-group {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--dark-green);

      &:last-child {
        flex-direction: row-reverse;
      }

      & > *:first-child {
        animation: rotate-animation 3s linear infinite;
        margin-bottom: 0.6rem;
      }
      & > *:last-child {
        animation: rotate-ccw-animation 3s linear infinite;
      }
    }
  }

  &:hover {
    & .gear-group {
      & > *:first-child {
        animation: rotate-animation 1.25s linear infinite;
      }
      & > *:last-child {
        animation: rotate-ccw-animation 1.25s linear infinite;
      }
    }

    & .options-container {
      display: block;

      & > ul {
        animation: fade-in 0.2s ease-in-out; /* Add fadeIn animation */
      }
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
      width: 25rem;

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
          scale: 0.7;
          rotate: 180deg;
          bottom: 0.2rem;
        }

        &:hover {
          background-color: var(--dark-green);

          & > img {
            display: block;
            margin-left: 0.25rem;
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

@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-ccw-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
