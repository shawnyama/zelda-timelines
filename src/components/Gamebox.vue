<template>
  <figure>
    <div
      ref="img"
      class="game-box"
      :class="{ 'spine-on-bottom': isSpineOnBottom }"
      @mouseenter="startRotate"
      @mousemove="rotate"
    >
      <div class="top">Top</div>
      <div class="bottom">Bottom</div>
      <div class="left">Left</div>
      <div class="right">Right</div>
      <div class="front">Front</div>
      <div class="back">Back</div>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GameNode } from '@/data/games'
import { Platforms, gameBoxDimensions, gameBoxColors, spineOnBottom } from '@/data/platforms'

const props = defineProps<{
  game: GameNode | null
  selectedPlatform: Platforms
}>()

const img = ref<HTMLImageElement | null>(null)

const imageUrl = computed(() =>
  props.game
    ? `url(${new URL(`../assets/cover-art/${props.game.id}.jpg`, import.meta.url).href}`
    : `url()`
)
const height = computed(() => `${gameBoxDimensions[props.selectedPlatform].height}px` ?? '200px')
const width = computed(() => `${gameBoxDimensions[props.selectedPlatform].width}px` ?? '200px')
const depth = computed(() => `${gameBoxDimensions[props.selectedPlatform].depth}px` ?? '200px')
const boxColor = computed(() => gameBoxColors[props.selectedPlatform] ?? 'darkgrey')
const isSpineOnBottom = computed(() => spineOnBottom.includes(props.selectedPlatform))

// let startX = 0
// let startY = 0
// let x = 0
// let y = 0

function startRotate(event: MouseEvent) {
  // startX = event.clientX - x
  // startY = event.clientY - y
}

function rotate(event: MouseEvent) {
  // if (event.buttons !== 1 || !img.value) return // Only rotate when left mouse button is pressed
  // x = event.clientX - startX
  // y = event.clientY - startY
  // img.value.style.transform = `rotateY(${x / 5}deg) rotateX(${y / 5}deg)`
}
</script>

<style scoped>
figure {
  perspective: 1200px;
  display: flex;
  margin-left: 1rem;
  min-width: v-bind(width);
  min-height: v-bind(height);
}

.game-box {
  position: relative;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 0, 35deg);
  animation: float 3s ease-in-out infinite;
  transform-origin: center;
  perspective-origin: center;
  cursor: grab;
  user-select: none;
  /* Comment the below line for debugging */
  color: transparent;

  &:active {
    cursor: grabbing;
  }

  /* Image configuration */
  & > .front,
  & > .back,
  &:not(.spine-on-bottom) > .left,
  &.spine-on-bottom > .bottom {
    background-image: v-bind(imageUrl);
  }
  &:not(.spine-on-bottom) {
    & > .front {
      background-position: bottom right;
    }
    & > .back {
      background-position: top left;
    }
    & > .left {
      background-position: top;
    }
    & > .front,
    & > .back,
    & > .left {
      background-size: calc(v-bind(width) * 2 + v-bind(depth)) v-bind(height);
    }
  }
  &.spine-on-bottom {
    & > .front {
      background-position: top left;
    }
    & > .back {
      background-position: bottom right;
    }
    & > .bottom {
      background-position: left;
    }
    & > .front,
    & > .back,
    & > .bottom {
      background-size: v-bind(width) calc(v-bind(height) * 2 + v-bind(depth));
    }
  }

  /* General */
  & > div {
    background-color: v-bind(boxColor);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    /* border: 1px solid black; */
    /* opacity: 0.5; */
    /*
    margin-left: 100px; half of the width of the box
    backface-visibility: hidden; */

    /* Transformations */
    &.front {
      transform: translateZ(calc(v-bind(depth) / 2));
    }
    &.back {
      transform: rotateY(180deg) translateZ(calc(v-bind(depth) / 2));
    }
    &.front,
    &.back {
      width: v-bind(width);
      height: v-bind(height);
    }
    &.left {
      transform: rotateY(-90deg) translateZ(calc(v-bind(width) / 2));
    }
    &.right {
      transform: rotateY(90deg) translateZ(calc(v-bind(width) / 2));
    }
    &.left,
    &.right {
      left: calc(v-bind(width) / 2 - v-bind(depth) / 2);
      width: v-bind(depth);
      height: v-bind(height);
    }
    &.top {
      transform: rotateX(90deg) translateZ(calc(v-bind(height) / 2));
    }
    &.bottom {
      transform: rotateX(-90deg) translateZ(calc(v-bind(height) / 2));
    }
    &.top,
    &.bottom {
      top: calc(v-bind(height) / 2 - v-bind(depth) / 2);
      width: v-bind(width);
      height: v-bind(depth);
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
