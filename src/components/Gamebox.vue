<template>
  <div ref="img" class="game-box">
    <div :style="backStyle">back</div>
    <div :style="spineStyle">spine</div>
    <div :style="frontStyle">front</div>
  </div>
  <!-- <img :class="imgOrientation"  :src="imageUrl" alt="Box art" /> -->
</template>

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

const backStyle = computed(() => ({
  backgroundImage: `url(${imageUrl.value})`,
  backgroundPosition: '0 0',
  backgroundSize: '420px 300px',
  width: '200px',
  transform: 'rotateX(20deg) rotateY(50deg) translateX(200px)'
}))

const spineStyle = computed(() => ({
  backgroundImage: `url(${imageUrl.value})`,
  backgroundPosition: '-200px 0',
  backgroundSize: '420px 300px',
  width: '20px',
  transform: 'rotateX(20deg) rotateY(-50deg) translateX(-100px)'
}))

const frontStyle = computed(() => ({
  backgroundImage: `url(${imageUrl.value})`,
  backgroundPosition: '-220px 0',
  backgroundSize: '420px 300px',
  width: '200px',
  transform: 'rotateX(20deg)'
}))
</script>

<style scoped>
.game-box {
  display: flex;
  /* perspective: 2000px; */
  transform-style: preserve-3d;
  width: 420px; /* width of front cover + spine + back cover */
  height: 300px; /* height of the box */

  & > div {
    height: 100%;
    backface-visibility: hidden;
  }
}

.front,
.spine,
.back {
  background-size: 420px 300px; /* total width and height of the box */
  height: 100%;
}

.front {
  width: 200px; /* width of the front cover */
  background-position: 0 0;
}

.spine {
  width: 20px; /* width of the spine */
  background-position: -200px 0;
}

.back {
  width: 200px; /* width of the back cover */
  background-position: -220px 0;
}

/* Make dimensions for N64 boxes, gamebox should now have flex direction column*/
.game-box {
  /*  width: 300px; width of front cover + spine + back cover 
  height: 200px;  height of the box
  flex-direction: column; */
}

.front,
.spine,
.back {
  background-size: 300px 200px; /* total width and height of the box */
  width: 100%;
}

.front {
  height: 100px; /* height of the front cover */
  background-position: 0 0;
}

.spine {
  height: 20px; /* height of the spine */
  background-position: 0 -100px;
}

.back {
  height: 100px; /* height of the back cover */
  background-position: 0 -120px;
}
</style>
