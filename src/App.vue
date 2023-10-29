<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Timeline from '@/components/Timeline.vue'
</script>

<template>
  <main>
    <navbar />
    <timeline />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex: 1;
  max-width: 100%;
  flex-direction: column;
}
</style>
