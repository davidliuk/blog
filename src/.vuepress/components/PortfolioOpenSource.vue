<template>
  <PublicationList class="publications-open-source">
    <PublicationCard
      v-for="project in openSourceProjects"
      :id="project.id"
      :key="project.id"
      :title="project.title"
      :role="project.role"
      :date="project.date"
      :note="project.note"
      :image="project.image"
      :image-width="project.imageWidth"
      :image-height="project.imageHeight"
      :paper="project.paper"
      :github="project.github"
      :website="project.website"
    />
  </PublicationList>
</template>

<script setup lang="ts">
import { openSourceProjects } from "../data/portfolio.js";
import PublicationCard from "./PublicationCard.vue";
import PublicationList from "./PublicationList.vue";
</script>
