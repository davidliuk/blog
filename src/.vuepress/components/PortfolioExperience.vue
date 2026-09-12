<template>
  <div class="experience-grid">
    <ExperienceCard
      v-for="item in experience"
      :key="item.company"
      :company="item.company"
      :role="item.role"
      :team="item.team"
      :location="item.location"
      :time="item.time"
      :logo="item.logo"
      :summary="item.summary"
      :focus="item.focus"
      :highlights="item.highlights"
      :stints="item.stints"
    />
  </div>
</template>

<script setup lang="ts">
import { experience } from "../data/portfolio.js";
import ExperienceCard from "./ExperienceCard.vue";
</script>
