<template>
  <h2>
    <span>Zelda timelines</span>
    <Button @click="emit('toggle-about-modal')" icon text title="About">
      <Icon icon="ph:info-bold" height="1.5rem" />
    </Button>
  </h2>
  <nav>
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
        <h1>{{ selectedTimeline }}</h1>
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
              <div>{{ timeline }}</div>
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
        <Icon :icon="orientationIcon" height="1.5rem" />
      </Button>
      <Button @click="emit('zoom-out')" icon text title="Zoom out">
        <Icon icon="ph:arrows-out-bold" height="1.5rem" />
      </Button>
      <Button @click="emit('jump-to-beginning')" icon text title="Jump to beginning">
        <Icon icon="ph:rewind-bold" height="1.5rem" />
      </Button>
      <Button @click="emit('jump-to-end')" icon text title="Jump to end">
        <Icon icon="ph:fast-forward-bold" height="1.5rem" />
      </Button>
    </div>
  </nav>
  <!--TODO: Theme switcher (nice to have)-->
  <!-- <Button class="right-button" icon @click="emit('toggle-theme')">
    <Icon icon="ph:paint-brush-bold" height="1.75rem" />
  </Button> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Timelines } from '@/data/timelines'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'
import caret from '@/assets/icons/caret-left.svg'

const props = defineProps<{
  selectedTimeline: Timelines
  orientation: string
  isSmallScreen: boolean
}>()
const emit = defineEmits([
  'select-timeline',
  'toggle-orientation',
  'toggle-about-modal',
  'jump-to-beginning',
  'jump-to-end',
  'zoom-out'
])

const orientationIcon = computed(() =>
  props.orientation === 'LR' ? 'ph:arrows-horizontal-bold' : 'ph:arrows-vertical-bold'
)

const isOptionsVisible = ref(false)

function selectTimeline(timeline: Timelines) {
  emit('select-timeline', timeline)
  isOptionsVisible.value = false // Hides dropdown options after selecting a timeline
}
</script>

<style scoped>
h2,
nav,
.right-button {
  position: absolute;
  z-index: 1;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

h2 {
  display: flex;
  align-items: center;
  color: var(--dark-green);
  padding: 0.25rem;
  backdrop-filter: blur(2px);
  & > span {
    margin-right: 0.25rem;
    pointer-events: none;
  }
  & > button {
    margin-bottom: 0.4rem;
  }
}

.right-button {
  right: 0;
  border-radius: 0.5rem;
}

.btn-group {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  gap: 0.5rem;
  padding: 0.25rem;
  backdrop-filter: blur(2px);
  border-radius: 0.5rem;
}

nav {
  margin: 0.5rem 0; /* Removing left and right padding centers it properly */
  width: 20rem;
  max-width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  display: inline-block;

  & > .selected-timeline {
    color: white;
    overflow: visible;
    gap: 0.75rem;
    backdrop-filter: blur(2px);
    position: relative;
    z-index: 2;

    & > button {
      background-color: var(--navbar-bg);
      color: white;
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* Custom button padding required for triforce font to fit nice. */
      padding: 0.5rem 0 0 0;
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
    background-color: var(--green);
    border-radius: 1rem;
    width: 25rem;
    max-width: 95vw;
    /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); maybe do a glowing thing instead */

    & > h4 {
      text-align: center;
      border-bottom: 1.5px solid white;
      font-style: italic;
      padding-bottom: 0.25rem;
      animation: fade-in 0.2s ease-in-out;
      padding: 0.5rem;
      margin: 0 0.5rem;
    }

    & > ul {
      font-family: 'triforce', sans-serif;
      font-size: 2.25rem;
      animation: fade-in 0.2s ease-in-out;
      list-style: none;
      padding: 0.5rem;
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
            scale: 0.65;
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
}

@media screen and (max-width: 800px) {
  h2 {
    display: none;
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
