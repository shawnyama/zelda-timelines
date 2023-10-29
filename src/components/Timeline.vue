<script setup lang="ts">
import { ref } from 'vue'
import Description from './Description.vue'
import { nodes } from '@/data/games'
import type { GameNode } from '@/data/games'

const chosenGame = ref<GameNode | null>(null)
</script>

<template>
  <main>
    <section>
      <div v-for="({ name }, key) in nodes" :key="key" @click="chosenGame = nodes[key]">
        {{ name }}
      </div>
    </section>
    <description :game="chosenGame" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  background-color: var(--light-green);
}

div {
  margin: 0.25rem;
  padding: 0.25rem;
  background-color: burlywood;
  cursor: pointer;
}

section {
  height: 500px;
  overflow: scroll;
}
</style>
