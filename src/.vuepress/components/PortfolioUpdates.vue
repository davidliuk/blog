<template>
  <NewsTimeline subtitle="Selected milestones, newest first." :initial="5" :items="updates" />
</template>

<script setup lang="ts">
import { updates } from "../data/portfolio.js";
import NewsTimeline from "./NewsTimeline.vue";
</script>
