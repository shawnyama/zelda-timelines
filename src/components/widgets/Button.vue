<template>
  <button><slot /></button>
</template>

<script setup lang="ts">
defineProps<{
  rounded?: boolean
  outlined?: boolean
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
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
}
</style>
