<template>
  <button :class="{ text, rounded, outlined, icon }">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  rounded?: boolean
  outlined?: boolean
  text?: boolean
  icon?: boolean
}>()
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  vertical-align: middle;
  line-height: 1;
  color: var(--dark-green);
  font-family: 'calamity', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    transition: filter 0.3s;
    filter: brightness(1.2);
  }

  &.icon {
    padding: 0.25rem;
  }

  &.text {
    background-color: transparent;
    &:hover {
      background-color: hsla(0, 0%, 96%, 0.3);
    }
  }

  &.outlined {
    border: 1px solid var(--dark-green);
  }

  &.rounded {
    border-radius: 5rem;
  }
}
</style>
