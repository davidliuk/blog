<template>
  <article class="tech-card">
    <div class="tech-card__header">
      <span v-if="index" class="tech-card__index">{{ index }}</span>
      <span v-if="eyebrow" class="tech-card__eyebrow">{{ eyebrow }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p v-if="description" class="tech-card__description">{{ description }}</p>
    <div class="tech-tags">
      <slot>
        <span v-for="item in items" :key="item" class="tech-tag">{{ item }}</span>
      </slot>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  index?: string
  eyebrow?: string
  description?: string
  items?: string[]
}>()
</script>

<style scoped>
</style>
