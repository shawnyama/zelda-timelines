<template>
  <h2>
    <span>Zelda timelines</span>
    <Button @click="emit('toggle-about-modal')" icon text title="About">
      <Icon icon="ph:info-bold" height="1.5rem" />
    </Button>
  </h2>
  <nav>
    <div class="selected-timeline">
      <div class="options-wrapper">
        <ul>
          <li v-for="timeline in Timelines" :value="timeline">
            <a @click="emit('select-timeline', timeline)">
              <img :src="caret" alt="caret-icon" />
              <div>{{ timeline }}</div>
            </a>
          </li>
        </ul>
      </div>
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
    <div class="btn-group">
      <Button @click="emit('toggle-orientation')" icon text title="Toggle orientation">
        <Icon :icon="orientationIcon" height="1.5rem" />
      </Button>
      <Button @click="emit('zoom-out')" icon text v-tooltip.bottom="'Zoom out'">
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
  'jump-to-beginning',
  'jump-to-end',
  'zoom-out'
])

const orientationIcon = computed(() =>
  props.orientation === 'LR' ? 'ph:arrows-horizontal-bold' : 'ph:arrows-vertical-bold'
)
</script>

<style scoped>
:deep(.v-popper--theme-tooltip .v-popper__inner) {
  background: var(--dark-green);
  color: white;
}
h2,
nav,
.right-button {
  position: absolute;
  z-index: 1;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

h2 {
  color: var(--dark-green);
  padding: 0.25rem;
  backdrop-filter: blur(2px);
  & > span {
    margin-right: 0.25rem;
    pointer-events: none;
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
  width: 20rem;
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

  & > .selected-timeline {
    border-radius: 2rem;
    background-color: var(--navbar-bg);
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    color: white;
    overflow: visible;
    border: 0;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    backdrop-filter: blur(2px);
    position: relative;
    z-index: 2;

    & > .gear-group {
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
    display: none;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 3.5rem;

    & ul {
      /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
      border-radius: 1rem;
      padding: 0.5rem;
      background-color: var(--green);
      width: 25rem;
      animation: fade-in 0.2s ease-in-out;
      list-style: none;

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
