<script setup lang="ts">
import { computed } from 'vue'
import type { GameNode } from '@/data/games'
import Gamebox from './Gamebox.vue'
import Button from './widgets/Button.vue'

const props = defineProps<{
  game: GameNode | null
  orientation: string
}>()

const icon = computed(() => {
  return props.game
    ? new URL(`../assets/icons/games/${props.game.id}.svg`, import.meta.url).href
    : ''
})
</script>

<template>
  <aside :class="orientation">
    <template v-if="game">
      <header>
        <h1>{{ game.title }}</h1>
        <img :src="icon" alt="art" />
      </header>
      <!--TODO: Add icon here as a background image-->
      <section>
        <Gamebox :game="game" :selected-platform="game.releases[0].platform" />
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac lacinia
            ultrices, odio nunc ultricies nunc, id aliquam nisl nunc id nunc. Sed euismod, nisl at
            lacinia tincidunt, nunc nunc lacinia lectus, vitae consectetur nunc nunc id nunc. Sed
            euismod, nisl at lacinia tincidunt, nunc nunc lacinia lectus, vitae consectetur nunc
            nunc id nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
            nisl ac lacinia ultrices, odio nunc ultricies nunc, id aliquam nisl nunc id nunc. Sed
            euismod, nisl at lacinia tincidunt, nunc nunc lacinia lectus, vitae consectetur nunc
            nunc id nunc. Sed euismod, nisl at lacinia tincidunt, nunc nunc lacinia lectus, vitae
            consectetur nunc nunc id nunc.
          </p>
          <footer>
            <Button v-for="(release, index) in game.releases" :key="index" disabled rounded>
              {{ release.platform }} ({{ release.year }})
            </Button>
          </footer>
        </article>
      </section>
    </template>
  </aside>
</template>

<style scoped>
aside {
  z-index: 1;
  border-radius: 0.5rem;
  position: relative;
  gap: 0.5rem;
  padding: 2rem 1rem;
  border: 2px solid white;
  backdrop-filter: blur(2px);
  display: flex;
  box-sizing: border-box;
  max-height: 100vh;

  &.TB {
    flex-direction: column;
    width: 40vw;
    min-width: 25rem;
    margin: 2rem 0.5rem 0.5rem 0;

    & > section {
      flex-direction: column;
      height: 100%;
      gap: 2rem;
    }
  }
  &.LR {
    height: var(--description-height);
    margin: 0.5rem;
    margin-top: 0;
    width: fit-content;
    align-self: center;
  }

  & > section {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > article {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      max-width: 60rem;
      gap: 1rem;

      & > p {
        height: 100%;
        background-color: hsla(0, 0%, 96%, 0.75);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        overflow: auto;
      }

      & > footer {
        display: flex;
        gap: 1rem;
      }
    }
  }
}

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: -1.75rem 1rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > img {
    height: 3.25rem;
  }
}
</style>
