<script setup lang="ts">
import type { GameNode } from '@/data/games'
import Gamebox from './Gamebox.vue'

defineProps<{
  game: GameNode | null
  orientation: string
}>()
</script>

<template>
  <aside :class="orientation">
    <template v-if="game">
      <section>
        <Gamebox :game="game" />
        <ul>
          <li v-for="(platform, index) in game.platforms" :key="index">
            {{ platform }}
          </li>
        </ul>
      </section>
      <article>
        <h1>{{ game.title }}</h1>
        <p></p></article
    ></template>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  align-items: center;
  outline: 1px solid red;
  padding: 0.5rem;

  &.TB {
    flex-direction: column;
    width: 40%;
  }

  &.LR {
    height: 40%;
  }
}

section {
  display: flex;
  gap: 0.5rem;
  /* height: 100%; */
}

article {
  flex: 1;
  /* width: 75%; */
}

h1 {
  font-family: 'hylia_serif', sans-serif;
}

img {
  border-radius: 3px;
  /* max-height: 18rem; 
  this shouldn't overflow
  */
  /* max-width: 50rem; */
  height: 15rem;
  /* height: auto;
  width: auto; */
}

.landscape {
  /* max-height: 30rem;
  max-width: 18rem; */
}
</style>
