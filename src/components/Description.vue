<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GameNode } from '@/data/games'

const props = defineProps<{
  game: GameNode | null
}>()

const img = ref<HTMLImageElement | null>(null)

const imageUrl = computed(() =>
  props.game
    ? new URL(`../assets/cover-art/${props.game.name}.jpg`, import.meta.url).href
    : undefined
)

const imgOrientation = computed(() =>
  img.value && img.value.width < img.value.height ? 'landscape' : 'portrait'
)
</script>

<template>
  <main>
    <section>
      <img :class="imgOrientation" ref="img" :src="imageUrl" />
      <ul>
        <li>console icons</li>
      </ul>
    </section>
    <article>
      <div v-if="img">{{ img.width }}<br />{{ img.height }}</div>
    </article>
  </main>
</template>

<style scoped>
main {
  /* display: flex;
  align-items: center; */
  padding: 0.5rem;
  height: 35%;
  max-height: 35%;
  overflow: scroll;
  outline: 1px solid black;
}

section {
  display: flex;
  gap: 0.5rem;
  height: 100%;
}

article {
  /* width: 75%; */
}

img {
  border-radius: 3px;
  /* max-height: 18rem; 
  this shouldn't overflow
  */
  max-width: 50rem;
  height: auto;
  width: auto;
}

.landscape {
  /* max-height: 30rem;
  max-width: 18rem; */
}
</style>
