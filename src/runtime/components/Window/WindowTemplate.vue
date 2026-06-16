<script setup lang="ts">
defineProps<{
  window?: any
  config?: any
}>()
</script>

<template>
  <DesktopWindow :window="window" :config="config" :content="{ padded: true }">
    Hello! I'm an empty window.
  </DesktopWindow>
</template>

<style scoped lang="scss"></style>
