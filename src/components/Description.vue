<template>
  <aside id="Description" :class="{ collapsed: isCollapsed }">
    <header>
      <h2>
        <span>{{ game.title }}</span>
        <Button
          v-if="!isSmallScreen"
          :title="isCollapsed ? 'Show description' : 'Hide description'"
          :icon="!isCollapsed"
          sm-rounded
          :style="{
            backgroundColor: isCollapsed ? 'hsl(0, 0%, 96%, 0.7)' : 'hsl(0, 0%, 96%, 0.3)'
          }"
          @click="isCollapsed = !isCollapsed"
        >
          <Icon
            :icon="isCollapsed ? 'ph:arrows-out-simple-bold' : 'ph:arrows-in-simple-bold'"
            height="1.4rem"
          />
          <template v-if="isCollapsed">Game description</template>
        </Button>
      </h2>
      <div class="border-top" />
      <img :src="icon" alt="art" />
    </header>
    <section>
      <Gamebox :game="game" :selected-platform="game.releases[0].platform" />
      <article>
        <p ref="pRef">{{ game.description }}</p>
        <footer>
          <Button
            v-for="(release, index) in game.releases"
            :key="index"
            rounded
            :style="{ backgroundColor: 'hsl(0, 0%, 96%, 0.7)' }"
          >
            {{ release.platform }} ({{ release.year }})
          </Button>
        </footer>
      </article>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, watch, useAttrs } from 'vue'
import type { GameNode } from '@/data/games'
import Gamebox from './Gamebox.vue'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'

const attrs = useAttrs()

const props = defineProps<{
  game: GameNode
  isSmallScreen?: boolean
}>()

const pRef = ref<HTMLElement | null>(null)
const isCollapsed = ref(false)

const icon = computed(() => {
  return props.game.useFallbackIcon
    ? `/assets/icons/games/fallback.svg`
    : `/assets/icons/games/${props.game.id}.svg`
})

watch(
  () => props.game.description,
  () => {
    if (pRef.value) pRef.value.scrollTop = 0
  }
)

watch(
  () => attrs.class,
  () => {
    isCollapsed.value = false
  }
)
</script>

<style scoped>
aside {
  z-index: 1;
  gap: 0.5rem;
  border: 3px solid white;
  border-top: none;
  border-radius: 1rem;
  backdrop-filter: blur(2px);
  display: flex;
  box-sizing: border-box;

  &.collapsed {
    border: none;
    &::before,
    &::after {
      display: none;
    }
    & header {
      margin: 0;
      width: fit-content;
      & > h2 {
        margin-left: auto;
      }
      & > h2 > span,
      & > .border-top,
      & > img {
        display: none;
      }
    }
    & section {
      display: none;
    }
    &.LR,
    &.TB {
      height: 0;
      position: absolute;
    }
    &.LR {
      bottom: 2.5rem;
      & header {
        margin: auto;
      }
    }
    &.TB {
      width: 0;
      top: -1.5rem;
      right: 12rem;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 3px solid white;
    border-bottom: none;
    width: 1rem;
    height: 1rem;
  }

  &::before {
    left: -3px;
    border-top-left-radius: 1rem;
    border-right: none;
  }

  &::after {
    right: -3px;
    border-top-right-radius: 1rem;
    border-left: none;
  }

  &.TB {
    container-type: inline-size;
    flex-direction: column;
    flex: 1;
    margin-top: 6rem;
    margin-bottom: 0.5rem;
    /* Alternative placement 
    margin-top: auto;
    margin-bottom: auto; 
    */
    margin-left: 0.5rem;
    height: fit-content;
    max-height: calc(100svh - 6.5rem);

    & > section {
      padding-top: 3rem;
      flex-direction: column;
      gap: 2rem;
      overflow: auto;
      overflow-x: hidden;
    }
  }
  &.LR {
    container-type: size;
    height: var(--description-height-LR);
    margin: 0.5rem;
    margin-top: 0;
    width: calc(100vw - 1rem);
    max-width: 90rem;
    align-self: center;
  }

  & > section {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 1rem;
    padding: 1rem;
    padding-top: 2rem;

    & > article {
      display: flex;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      /* Article covers as much space as possible while not breaking out of the description */
      min-height: 0;

      & > p {
        max-height: 100%;
        background-color: hsla(0, 0%, 96%, 0.75);
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        overflow: auto;
        /* Not sure about this */
        /* box-shadow:
          rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
      }

      & > footer {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
  }
}

header {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  margin: -1.5rem 1.25rem 0 1.5rem;
  display: flex;
  flex: 1;
  align-items: center;
  user-select: none;
  gap: 0.5rem;

  & > h2 {
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'hylia_serif', sans-serif;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-shadow: 0 0 6px var(--dark-green);
  }

  & > .border-top {
    flex-grow: 1;
    border-bottom: 3px solid white;
  }

  & > img {
    height: 3.25rem;
    filter: drop-shadow(0 1px 1px var(--dark-green));
  }
}

/*
Sizing and spacing adjustments for when the description modal is used in a mobile layout.
For base styles see DescriptionModal.vue.
*/
@media screen and (max-width: calc(600px + 1rem)) {
  aside.TB {
    margin-top: 1.25rem;
  }
}

@container (max-width: 600px) {
  header {
    margin-top: -1.15rem;
    & > h2 {
      font-size: 1.6rem;
    }
    & > img {
      height: 2.5rem;
    }
  }

  aside.TB > section {
    padding: 0.5rem;
    gap: 0;
    padding-top: 0.5rem;

    & > figure {
      scale: 0.75;
    }
    & > img {
      scale: 0.9;
    }
    & > article {
      gap: 0.5rem;
      & > p {
        font-size: 1rem;
      }
      & > footer {
        gap: 0.5rem;
        & > button {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@container (height < 300px) {
  aside.LR > section {
    & > figure {
      scale: 0.8;
    }
    & > img {
      scale: 0.8;
    }
  }
}
</style>
