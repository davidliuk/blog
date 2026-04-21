<template>
  <div class="tech-card">
    <div class="tech-card__header">
      <h4>{{ title }}</h4>
      <span v-if="itemCount" class="tech-card__count">{{ itemCount }}</span>
    </div>
    <div class="tech-tags">
      <slot>
        <Badge v-for="(item, idx) in items" :key="idx" :text="item" :type="badgeType" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  title: string
  items?: string[]
  badgeType?: 'tip' | 'warning' | 'danger' | 'info' | 'note'
}>()

const itemCount = computed(() => props.items?.length ?? 0)
</script>

<style scoped>
</style>
