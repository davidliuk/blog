<template>
  <article class="project-card home-card-shell">
    <div class="project-card__header">
      <div class="project-card__title-group">
        <p class="home-card-eyebrow">{{ role || "Project" }}</p>
        <h3>
          <a v-if="link" :href="link" target="_blank" rel="noopener">{{ name }}</a>
          <template v-else>{{ name }}</template>
        </h3>
      </div>
      <span v-if="time" class="project-card__time home-card-time">{{ time }}</span>
    </div>

    <p v-if="award" class="home-chip home-chip--award project-card__award">
      <svg class="project-card__award-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 1.2 9.83 4.9l4.08.59-2.95 2.88.7 4.07L8 10.53l-3.66 1.91.7-4.07L2.09 5.49l4.08-.59L8 1.2Z"
        />
      </svg>
      <span>{{ award }}</span>
    </p>

    <p class="project-card__summary">{{ summary }}</p>

    <ul v-if="highlights.length" class="project-card__highlights">
      <li v-for="item in highlights" :key="item">{{ item }}</li>
    </ul>

    <div v-if="tech.length" class="project-card__tech">
      <span v-for="item in tech" :key="item" class="home-chip home-chip--accent">{{ item }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  role?: string;
  award?: string;
  time?: string;
  summary: string;
  tech?: string[];
  highlights?: string[];
  link?: string;
}>();

const tech = computed(() => props.tech ?? []);
const highlights = computed(() => props.highlights ?? []);
</script>

<style scoped>
.project-card {
  display: grid;
  gap: var(--dl-space-4);
  align-content: start;
  padding: 1.3rem 1.35rem;
  background: var(--dl-surface);
}

.project-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--dl-space-3);
}

.project-card__title-group {
  min-width: 0;
}

.project-card__title-group h3 {
  margin: 0;
  font-size: var(--home-type-title, 1.18rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.project-card__title-group h3 a {
  color: inherit;
}

.project-card__time {
  flex-shrink: 0;
  white-space: nowrap;
}

.project-card__award {
  width: fit-content;
  margin: 0;
}

.project-card__award-icon {
  flex-shrink: 0;
}

.project-card__summary {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-body, 1rem);
  line-height: 1.7;
}

.project-card__highlights {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: var(--dl-space-1);
  color: var(--vp-c-text-2);
  line-height: 1.65;
  font-size: var(--home-type-body, 1rem);
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dl-space-1);
}

@media (max-width: 719px) {
  .project-card {
    padding: 1.05rem 1rem;
  }

  .project-card__header {
    flex-direction: column;
    gap: var(--dl-space-2);
  }
}
</style>
