<template>
  <aside id="Description">
    <header>
      <h1>{{ game.title }}</h1>
      <img :src="icon" alt="art" />
    </header>
    <!--TODO: Add icon here as a background image-->
    <section>
      <Gamebox :game="game" :selected-platform="game.releases[0].platform" />
      <article>
        <p ref="pRef">{{ game.description }}</p>
        <footer>
          <Button v-for="(release, index) in game.releases" :key="index" disabled rounded>
            {{ release.platform }} ({{ release.year }})
          </Button>
        </footer>
      </article>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { GameNode } from '@/data/games'
import Gamebox from './Gamebox.vue'
import Button from './widgets/Button.vue'

const props = defineProps<{
  game: GameNode
}>()

const pRef = ref<HTMLElement | null>(null)

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
</script>

<style scoped>
aside {
  z-index: 1;
  border-radius: 0.5rem;
  position: relative;
  gap: 0.5rem;
  border: 2px solid white;
  backdrop-filter: blur(2px);
  display: flex;
  box-sizing: border-box;

  &.TB {
    flex-direction: column;
    min-width: 25rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    height: fit-content;
    max-height: calc(100vh - 2.5rem);

    & > section {
      padding-top: 3rem;
      flex-direction: column;
      gap: 2rem;
      overflow: auto;
      /* & p {
       max-height: 45vh; TODO: Prevent overflow in vertical orientation
      } */
    }
  }
  &.LR {
    height: var(--description-height);
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

      & > p {
        max-height: 100%;
        background-color: hsla(0, 0%, 96%, 0.75);
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        overflow: auto;
        text-wrap: pretty;
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
  margin: -1.75rem 1rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;

  & > * {
    /* FIXME: Somehow make the backfrop-filter effecct the first half of the text */
    /* backdrop-filter: blur(2px); */
    background: linear-gradient(
      to bottom,
      transparent calc(50% - 1px),
      var(--light-green) calc(50% - 2px),
      var(--light-green) calc(50% + 2px),
      transparent calc(50% + 1px)
    );
    padding: 0 0.5rem;
  }

  & > h1 {
    font-family: 'hylia_serif', sans-serif;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-shadow: 0 0 0.5rem var(--dark-green);
  }

  & > img {
    height: 3.25rem;
  }
}

@media screen and (min-width: 800px) {
  aside.TB {
    width: 40vw;
    margin-right: 0.5rem;
  }
}
</style>
