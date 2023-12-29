<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Node } from '@/data/games'

const props = defineProps<{
  game: Node | null
}>()

const img = ref<HTMLImageElement | null>(null)

const imageUrl = computed(() =>
  props.game ? new URL(`../assets/cover-art/${props.game.id}.jpg`, import.meta.url).href : undefined
)

const imgOrientation = computed(() =>
  img.value && img.value.width < img.value.height ? 'landscape' : 'portrait'
)
</script>

<template>
  <aside>
    <section>
      <img :class="imgOrientation" ref="img" :src="imageUrl" alt="Box art" />
      <!-- <ul>
        <li>console icons</li>
      </ul> -->
    </section>
    <article>
      <h3>{{ game?.title }}</h3>
      <div v-if="img">{{ img.width }}<br />{{ img.height }}</div>
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
