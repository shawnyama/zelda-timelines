<template>
  <h1>
    <span>Zelda timelines</span>
    <Button @click="emit('toggle-about-modal')" icon text title="About">
      <Icon icon="ph:info-bold" height="1.5rem" />
    </Button>
  </h1>
  <nav :class="orientation">
    <div class="selected-timeline" @mouseleave="isOptionsVisible = false">
      <Button
        class="custom"
        rounded
        @touchstart="isOptionsVisible = !isOptionsVisible"
        @mouseenter="isOptionsVisible = true"
      >
        <div class="gear-group">
          <Icon icon="heroicons:cog-20-solid" height="1.75rem" />
          <Icon icon="heroicons:cog-16-solid" height="1.25rem" />
        </div>
        <label class="timeline-name">{{ selectedTimeline.replace(/-/g, ' ') }}</label>
        <div class="gear-group">
          <Icon icon="heroicons:cog-20-solid" height="1.75rem" />
          <Icon icon="heroicons:cog-16-solid" height="1.25rem" />
        </div>
      </Button>
      <div v-if="isOptionsVisible" class="options-wrapper">
        <h4>Select a timeline</h4>
        <ul>
          <li v-for="timeline in Timelines" :value="timeline">
            <a @click="selectTimeline(timeline)">
              <img :src="caret" alt="caret-icon" />
              <div>{{ timeline.replace(/-/g, ' ') }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn-group">
      <Button v-if="isSmallScreen" @click="emit('toggle-about-modal')" icon text title="About">
        <Icon icon="ph:info-bold" height="1.5rem" />
      </Button>
      <Button v-else @click="emit('toggle-orientation')" icon text title="Toggle orientation">
        <Icon icon="ph:device-rotate-bold" height="1.5rem" />
      </Button>
      <Button @click="emit('zoom-out')" icon text title="Zoom out">
        <Icon icon="ph:arrows-out-bold" height="1.5rem" />
      </Button>
      <Button @click="emit('jump-to-start')" icon text title="Jump to start">
        <Icon icon="ph:rewind-bold" height="1.5rem" />
      </Button>
      <Button @click="emit('jump-to-end')" icon text title="Jump to end">
        <Icon icon="ph:fast-forward-bold" height="1.5rem" />
      </Button>
    </div>
  </nav>
  <div :class="['right', orientation]">
    <Button v-if="!isLegendExpanded" class="create-button" sm-rounded @click="openStackBlitz">
      <Icon icon="ph:file-plus-bold" height="1.5rem" />
      Create
    </Button>
    <Button v-if="!isLegendExpanded" sm-rounded @click="isLegendExpanded = true">
      <Icon icon="ph:list-dashes-bold" height="1.5rem" />
      Legend
    </Button>
    <TimelineLegend v-else-if="isLegendExpanded" @collapse="isLegendExpanded = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Timelines } from '@/data/timelines'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'
import caret from '@/assets/caret-left.svg'
import TimelineLegend from '@/components/TimelineLegend.vue'

defineProps<{
  selectedTimeline: Timelines
  orientation: string
  isSmallScreen: boolean
}>()
const emit = defineEmits([
  'select-timeline',
  'toggle-orientation',
  'toggle-about-modal',
  'jump-to-start',
  'jump-to-end',
  'zoom-out'
])

const isLegendExpanded = ref(false)
const isOptionsVisible = ref(false)

function selectTimeline(timeline: Timelines) {
  emit('select-timeline', timeline)
  isOptionsVisible.value = false // Hides dropdown options after selecting a timeline
}

function openStackBlitz() {
  window.open(
    'https://stackblitz.com/~/github.com/shawnyama/zelda-timelines?file=src/data/GUIDE.md',
    '_blank',
    'noopener,noreferrer'
  )
}
</script>

<style scoped>
h1,
nav,
.right {
  z-index: 2;
}

h1 {
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--dark-green);
  padding: 0.75rem 0.25rem 0.1rem 1rem;
  border-bottom-right-radius: 1rem;

  & > span {
    margin-right: 0.25rem;
    pointer-events: none;
  }
  & > button {
    margin-bottom: 0.4rem;
  }
}

h1,
.btn-group,
.right {
  backdrop-filter: blur(6px);
}

.timeline-name {
  font-family: 'triforce', sans-serif;
  font-size: 2.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.right {
  position: fixed;
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.75rem;
  &.LR {
    right: 0rem;
  }
  &.TB {
    flex-direction: column;
    bottom: 0;
  }
}

.create-button {
  color: white;
  background: radial-gradient(ellipse at center, var(--dark-green) 0%, rgba(0, 0, 0, 0.2) 100%);
}

.btn-group {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  gap: 0.5rem;
  padding: 0.25rem;
  padding-top: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

nav {
  position: absolute;
  margin: 0.5rem 0; /* Removing left and right padding centers it properly */
  max-width: 45vw;
  min-width: 20rem;
  justify-content: center;
  display: inline-block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  & > .selected-timeline {
    color: white;
    overflow: visible;
    gap: 0.75rem;
    backdrop-filter: blur(2px);
    position: relative;
    z-index: 2;

    & > button {
      background: linear-gradient(var(--green), var(--green-alt));
      animation: breathing-brightness 3s ease-in-out infinite;
      color: white;
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* Custom button padding required for triforce font to fit nice. */
      padding: 0.5rem 0 0.2rem 0;
      box-shadow:
        rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    & .gear-group {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--dark-green);
      padding: 0 0.5rem;

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

    &:hover {
      & .gear-group {
        & > *:first-child {
          animation: rotate-animation 1.25s linear infinite;
        }
        & > *:last-child {
          animation: rotate-ccw-animation 1.25s linear infinite;
        }
      }

      & .options-wrapper {
        display: block;
      }
    }
  }

  /* Wrapper is needed so the transformX doesn't conflict with the ul animation */
  & .options-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 3.25rem;
    background: linear-gradient(var(--green-alt), var(--green));
    border-radius: 1rem;
    width: 25rem;
    max-width: 95vw;
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    & > h4 {
      text-align: center;
      border-bottom: 1.5px solid white;
      font-style: italic;
      font-weight: bold;
      padding-bottom: 0.25rem;
      animation: fade-in 0.2s ease-in-out;
      padding: 0.5rem;
      margin: 0 0.5rem;
    }

    & > ul {
      font-family: 'triforce', sans-serif;
      font-size: 2rem;
      animation: fade-in 0.2s ease-in-out;
      list-style: none;
      padding: 0.5rem;
      padding-bottom: 0.65rem;
      /* Helps dropdown still appear if mouse is located in the gap between the selector and the dropdown list */
      &::before {
        content: '';
        font-size: 1.5rem;
        height: 1rem;
        width: 100%;
        position: absolute;
        top: -1rem;
        left: 0;
      }

      & > li {
        cursor: pointer;
        & > a {
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
            scale: 0.6;
            rotate: 180deg;
            bottom: 0.1rem;
          }

          &:hover {
            background: radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.1) 100%
            );

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
}

@media screen and (max-width: 800px) {
  h1 {
    display: none;
  }

  nav {
    max-width: 95vw;
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

@keyframes breathing-brightness {
  0%,
  100% {
    filter: brightness(0.95);
  }
  50% {
    filter: brightness(1.05);
  }
}
</style>
