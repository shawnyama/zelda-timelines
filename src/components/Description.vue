<script setup lang="ts">
import type { Node } from '@/data/games'
import Gamebox from './Gamebox.vue'

const props = defineProps<{
  game: Node | null
}>()
</script>

<template>
  <aside>
    <Gamebox :game="props.game" />
    <section>console icons</section>
    <article>
      <h3>{{ game?.title }}</h3>
      <!-- <div v-if="img">{{ img.width }}<br />{{ img.height }}</div> -->
    </article>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  align-items: center;
  outline: 1px solid red;
  /* max-height: 40%; */
  height: 40%;
  padding: 0.5rem;
  /* box-sizing: content-box; */
}

section {
  display: flex;
  gap: 0.5rem;
  /* height: 100%; */
}

article {
  /* width: 75%; */
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
