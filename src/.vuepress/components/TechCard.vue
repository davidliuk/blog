<template>
  <div class="tech-card">
    <h4>{{ title }}</h4>
    <div class="tech-tags">
      <slot>
        <Badge v-for="(item, idx) in items" :key="idx" :text="item" :type="badgeType" />
      </slot>
    </div>
  </div>
  </template>

<script setup lang="ts">
defineProps<{
  title: string
  items?: string[]
  badgeType?: 'tip' | 'warning' | 'danger' | 'info' | 'note'
}>()
</script>

<style scoped>
</style>
