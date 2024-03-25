<template>
  <section>
    <div ref="img" class="game-box">
      <div class="top">Top</div>
      <div class="bottom">Bottom</div>
      <div class="left">Left</div>
      <div class="right">Right</div>
      <div class="front">Front</div>
      <div class="back">Back</div>
      <!-- <div :style="backStyle">back</div> -->
      <!-- <div :style="spineStyle">spine</div> -->
      <!-- <div :style="frontStyle">front</div> -->
    </div>
  </section>
  <!-- <img :class="imgOrientation"  :src="imageUrl" alt="Box art" /> -->
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GameNode } from '@/data/games'
import { Platforms, gameBoxDimensions, gameBoxColors } from '@/data/platforms'

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
</script>

<style scoped>
section {
  perspective: 1000px;
  width: v-bind(width);
  height: v-bind(height);
}

.game-box {
  position: relative;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 0, 35deg);
  /* perspective-origin: center; */
  /* Comment the below line for debugging */
  color: transparent;

  & > div {
    /* width: v-bind(width);
    height: v-bind(height); */
    background: v-bind(boxColor);
    /* border: 1px solid black; */
    position: absolute;
    /* opacity: 0.5; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    /* 
    transform-origin: 0 0;
    margin-left: 100px; half of the width of the box
    backface-visibility: hidden; */

    &.front,
    &.back,
    &.left {
      background-image: v-bind(imageUrl);
    }
    &.front {
      transform: translateZ(calc(v-bind(depth) / 2));
      background-position: calc((v-bind(width) + v-bind(depth)) * -1) 0;
    }
    &.back {
      transform: rotateY(180deg) translateZ(calc(v-bind(depth) / 2));
      background-position: 0 0;
    }
    &.front,
    &.back {
      width: v-bind(width);
      height: v-bind(height);
      background-size: calc(v-bind(width) * 2 + v-bind(depth)) v-bind(height);
    }
    &.left {
      transform: rotateY(-90deg) translateZ(calc(v-bind(width) / 2));
      background-size: calc(v-bind(width) * 2 + v-bind(depth)) v-bind(height);
      background-position: calc(v-bind(width) * -1) 0;
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
</style>
