<template>
  <figure>
    <div ref="img" class="game-box">
      <div class="top" />
      <div class="bottom">
        <Image
          v-if="isSpineOnBottom"
          :src="imagePathWebp"
          alt="Spine"
          layout="fixed"
          :height="depth"
          :width="width"
          @error="onImageError"
        />
      </div>
      <div class="left">
        <Image
          v-if="!isSpineOnBottom"
          :src="imagePathWebp"
          alt="Spine"
          layout="fixed"
          :height="height"
          :width="depth"
          @error="onImageError"
        />
      </div>
      <div class="right" />
      <div class="front">
        <Image
          :src="imagePathWebp"
          alt="Front"
          layout="fixed"
          :height="height"
          :width="width"
          :priority="true"
          @error="onImageError"
        />
      </div>
      <!--No need to render the back of the box-->
      <!--Maybe revisit if we want a dedicated box viewer where you can rotate the box-->
      <!-- <div class="back"> 
       <Image :src="imagePath" alt="Back" layout="fixed" :height="height" :width="width" /> 
     </div> -->
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GameNode } from '@/data/games'
import { Platforms, gameBoxDimensions, gameBoxColors, spineOnBottom } from '@/data/platforms'
import { Image } from '@unpic/vue'

const props = defineProps<{
  game: GameNode | null
  selectedPlatform: Platforms
}>()

const img = ref<HTMLImageElement | null>(null)

const imagePathWebp = computed(() => `/assets/cover-art/${props.game?.id}.webp`)
const imagePathJpg = computed(() => `/assets/cover-art/${props.game?.id}.jpg`)

function onImageError(event: Event) {
  ;(event.target as HTMLImageElement).src = imagePathJpg.value
}

const height = computed(() => gameBoxDimensions[props.selectedPlatform].height * 1.5)
const width = computed(() => gameBoxDimensions[props.selectedPlatform].width * 1.5)
const depth = computed(() => gameBoxDimensions[props.selectedPlatform].depth * 1.5)
const heightCSS = computed(() => `${height.value}px`)
const widthCSS = computed(() => `${width.value}px`)
const depthCSS = computed(() => `${depth.value}px`)
const boxColor = computed(() => gameBoxColors[props.selectedPlatform] ?? 'darkgrey')
const isSpineOnBottom = computed(() => spineOnBottom.includes(props.selectedPlatform))

/* TODO: Box rotation on drag? */
// @mouseenter="startRotate" @mousemove="rotate"
// let startX = 0
// let startY = 0
// let x = 0
// let y = 0

// function startRotate(event: MouseEvent) {
//   startX = event.clientX - x
//   startY = event.clientY - y
// }

// function rotate(event: MouseEvent) {
//   if (event.buttons !== 1 || !img.value) return // Only rotate when left mouse button is pressed
//   x = event.clientX - startX
//   y = event.clientY - startY
//   img.value.style.transform = `rotateY(${x / 5}deg) rotateX(${y / 5}deg)`
// }
</script>

<style scoped>
figure {
  perspective: 1200px;
  display: flex;
  margin-left: 1rem;
  min-width: v-bind(widthCSS);
  min-height: v-bind(heightCSS);
}

.game-box {
  position: relative;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 0, 35deg);
  animation: float 3s ease-in-out infinite;
  transform-origin: center;
  perspective-origin: center;
  /* cursor: grab; */
  user-select: none;
  /* Comment the below line for debugging */
  color: transparent;

  /* &:active {
    cursor: grabbing;
  } */

  /* General */
  & > div {
    background-color: v-bind(boxColor);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    /* outline: 1px solid red; */
    /* opacity: 0.5; */

    /* Image configuration */
    & img {
      object-fit: cover;
      -webkit-user-drag: none;
    }
    &.front > img {
      object-position: top right;
    }
    &.back > img {
      object-position: bottom left;
      height: calc(v-bind(heightCSS));
    }

    /* Transformations */
    &.front {
      transform: translateZ(calc(v-bind(depthCSS) / 2));
    }
    &.back {
      transform: rotateY(180deg) translateZ(calc(v-bind(depthCSS) / 2));
    }
    &.front,
    &.back {
      width: v-bind(widthCSS);
      height: v-bind(heightCSS);
    }
    &.left {
      transform: rotateY(-90deg) translateZ(calc(v-bind(widthCSS) / 2));
    }
    &.right {
      transform: rotateY(90deg) translateZ(calc(v-bind(widthCSS) / 2));
    }
    &.left,
    &.right {
      left: calc(v-bind(widthCSS) / 2 - v-bind(depthCSS) / 2);
      width: v-bind(depthCSS);
      height: v-bind(heightCSS);
    }
    &.top {
      transform: rotateX(90deg) translateZ(calc(v-bind(heightCSS) / 2));
    }
    &.bottom {
      transform: rotateX(-90deg) translateZ(calc(v-bind(heightCSS) / 2));
    }
    &.top,
    &.bottom {
      top: calc(v-bind(heightCSS) / 2 - v-bind(depthCSS) / 2);
      width: v-bind(widthCSS);
      height: v-bind(depthCSS);
    }
  }
}

@keyframes float {
  0% {
    transform: translate3d(0, -10px, 0) rotate3d(1, 1, 0, 35deg);
  }
  50% {
    transform: translate3d(0, -20px, 0) rotate3d(1, 1, 0, 35deg);
  }
  100% {
    transform: translate3d(0, -10px, 0) rotate3d(1, 1, 0, 35deg);
  }
}
</style>
