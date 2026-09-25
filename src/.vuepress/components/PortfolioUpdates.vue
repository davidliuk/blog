<template>
  <NewsTimeline title="Selected milestones" subtitle="Newest first" :initial="6" :items="updates" />
</template>

<script setup lang="ts">
import { updates } from "../data/portfolio.js";
import NewsTimeline from "./NewsTimeline.vue";
</script>
