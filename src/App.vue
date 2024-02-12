<script setup lang="ts">
import { ref } from 'vue'
import { Timelines } from '@/data/timelines'
import Navbar from '@/components/Navbar.vue'
import Timeline from '@/components/Timeline.vue'

const selectedTimeline = ref(
  (localStorage.getItem('selectedTimeline') as Timelines) ?? Timelines.Official
)
</script>

<template>
  <navbar v-model:selectedTimeline="selectedTimeline" />
  <timeline :selected-timeline="selectedTimeline" />
</template>
