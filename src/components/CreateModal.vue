<template>
  <modal title="Create a timeline" @close="$emit('close')">
    <p>
      The following button will take you to StackBlitz which is an online development environment.
      There, you will be editing a file that describes your timeline.
    </p>
    <p>
      Once you open StackBlitz please wait a few moments for the environment to load. The first file
      opened is GUIDE.md which contains instructions on how to create and submit your timeline. In
      order to read the guide in a readable format click the Preview icon button on the top right of
      the editor panel: <Icon class="open-preview" icon="codicon:open-preview" height="1.25rem" />.
      If you don't see the button it's because the environment has not fully loaded yet.
    </p>
    <p class="send-off">
      It's dangerous to go alone...but if you have the courage to etch your mark and the wisdom to
      follow GUIDE.md, then you have the power to create history!
    </p>
    <Button class="alt" sm-rounded @click="openStackBlitz">
      Open editor
      <Icon icon="ph:arrow-square-out-bold" height="1.5rem" />
    </Button>
  </modal>
</template>

<script setup lang="ts">
import Modal from './widgets/Modal.vue'
import Button from './widgets/Button.vue'
import { Icon } from '@iconify/vue'

function openStackBlitz() {
  window.open(
    'https://stackblitz.com/~/github.com/shawnyama/zelda-timelines/tree/submission-mode?file=src/data/GUIDE.md',
    '_blank',
    'noopener,noreferrer'
  )
}
</script>

<style scoped>
p {
  margin-bottom: 1rem;
}

.send-off {
  font-style: italic;
}
.open-preview {
  transform: scaleX(-1);
  color: white;
  background-color: rgb(32, 35, 39);
  padding: 0.1rem;
  border-radius: 0.25rem;
  vertical-align: middle;
}

button {
  margin: auto;
}
</style>
