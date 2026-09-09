<template>
  <div class="pub-grid">
    <slot />
  </div>
</template>

<style scoped>
.pub-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--dl-space-4);
}
</style>
