<template>
  <button :class="{ text, rounded, outlined }">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  rounded?: boolean
  outlined?: boolean
  text?: boolean
}>()
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  vertical-align: middle;
  line-height: 1;
  color: var(--dark-green);

  &:hover {
    filter: brightness(0.9);
  }

  &.text {
    background-color: transparent;
  }

  &.outlined {
    border: 1px solid var(--dark-green);
  }

  &.rounded {
    border-radius: 5rem;
  }
}
</style>
