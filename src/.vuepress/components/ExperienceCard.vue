<template>
  <article class="experience-card home-card-shell">
    <div class="experience-card__header">
      <div class="experience-card__brand">
        <div v-if="logoSrc" class="experience-card__logo-shell">
          <img
            :src="logoSrc"
            :alt="company"
            class="experience-card__logo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="experience-card__title-group">
          <p class="experience-card__eyebrow">{{ company }}</p>
          <h3>{{ role }}</h3>
          <p v-if="team" class="experience-card__team">{{ team }}</p>
        </div>
      </div>

      <div class="experience-card__meta">
        <span v-if="time" class="experience-card__meta-item">{{ time }}</span>
        <span v-if="location" class="experience-card__meta-item">{{ location }}</span>
      </div>
    </div>

    <p class="experience-card__summary">{{ summary }}</p>

    <div v-if="focus.length" class="experience-card__focus">
      <span class="experience-card__focus-label">Themes</span>
      <div class="experience-card__focus-tags">
        <span
          v-for="item in focus"
          :key="item"
          class="experience-card__focus-tag"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <ul v-if="highlights.length" class="experience-card__highlights">
      <li v-for="item in highlights" :key="item">
        {{ item }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";

const props = defineProps<{
  company: string;
  role: string;
  team?: string;
  location?: string;
  time?: string;
  logo?: string;
  summary: string;
  focus?: string[];
  highlights?: string[];
}>();

const focus = computed(() => props.focus ?? []);
const highlights = computed(() => props.highlights ?? []);

const logoSrc = computed(() => {
  if (!props.logo) return "";
  if (/^(https?:)?\/\//.test(props.logo) || props.logo.startsWith("data:")) return props.logo;
  return withBase(props.logo);
});
</script>

<style scoped>
.experience-card {
  display: grid;
  gap: var(--dl-space-4);
  padding: 1.3rem 1.35rem;
}

.experience-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--dl-space-4);
}

.experience-card__brand {
  display: flex;
  align-items: flex-start;
  gap: var(--dl-space-4);
  min-width: 0;
}

.experience-card__logo-shell {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.3rem;
  height: 3.3rem;
  padding: 0.55rem;
  border-radius: var(--dl-radius-md);
  border: 1px solid var(--dl-border);
  background: var(--dl-surface);
}

.experience-card__logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.experience-card__title-group {
  min-width: 0;
}

.experience-card__eyebrow {
  margin: 0 0 0.2rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.experience-card__title-group h3 {
  margin: 0;
  font-size: clamp(1.08rem, 1.4vw, 1.18rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.experience-card__team {
  margin: 0.3rem 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.experience-card__meta {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.15rem;
  padding-top: 0.15rem;
  max-width: 40%;
  text-align: right;
}

.experience-card__meta-item {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  font-weight: 550;
  line-height: 1.45;
}

.experience-card__summary {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.72;
}

.experience-card__focus {
  display: grid;
  gap: var(--dl-space-2);
}

.experience-card__focus-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.experience-card__focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dl-space-1);
}

.experience-card__focus-tag {
  display: inline-flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.26rem 0.68rem;
  border-radius: 999px;
  border: 1px solid var(--dl-accent-line);
  background: var(--dl-accent-soft);
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
}

.experience-card__highlights {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--dl-space-3);
}

.experience-card__highlights li {
  position: relative;
  margin: 0;
  padding-left: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.experience-card__highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.68rem;
  width: 0.46rem;
  height: 0.46rem;
  border-radius: 999px;
  background: var(--vp-c-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--vp-c-accent-soft) 80%, transparent);
}

@media (max-width: 719px) {
  .experience-card {
    padding: 1.05rem 1rem;
  }

  .experience-card__header {
    flex-direction: column;
  }

  .experience-card__meta {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.15rem 0.5rem;
    max-width: 100%;
    text-align: start;
  }

  .experience-card__logo-shell {
    width: 3rem;
    height: 3rem;
  }
}
</style>
