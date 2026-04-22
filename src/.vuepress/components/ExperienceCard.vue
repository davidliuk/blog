<template>
  <article class="experience-card">
    <div class="experience-card__header">
      <div class="experience-card__brand">
        <div v-if="logoSrc" class="experience-card__logo-shell">
          <img :src="logoSrc" :alt="company" class="experience-card__logo" />
        </div>
        <div class="experience-card__title-group">
          <p class="experience-card__eyebrow">{{ company }}</p>
          <h3>{{ role }}</h3>
          <p v-if="team" class="experience-card__team">{{ team }}</p>
        </div>
      </div>

      <div class="experience-card__meta">
        <span v-if="time" class="experience-card__meta-pill">{{ time }}</span>
        <span v-if="location" class="experience-card__meta-pill">{{ location }}</span>
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
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 1rem;
  padding: 1.3rem 1.35rem;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  border-radius: 22px;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--vp-c-accent-soft) 68%, transparent), transparent 38%),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--vp-c-bg) 90%, var(--vp-c-bg-soft)) 0%,
      color-mix(in srgb, var(--vp-c-bg-soft) 96%, transparent) 100%
    );
  box-shadow:
    0 18px 38px rgba(15, 23, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.experience-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(
    180deg,
    var(--vp-c-accent),
    color-mix(in srgb, var(--vp-c-accent) 20%, transparent)
  );
}

.experience-card:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--vp-c-accent) 24%, var(--vp-c-divider));
  box-shadow:
    0 24px 46px rgba(15, 23, 42, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.experience-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.experience-card__brand {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
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
  border-radius: 16px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--vp-c-bg) 92%, transparent) 0%,
      color-mix(in srgb, var(--vp-c-bg-soft) 96%, transparent) 100%
    );
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
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.experience-card__title-group h3 {
  margin: 0;
  font-size: 1.12rem;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.experience-card__team {
  margin: 0.3rem 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.experience-card__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.45rem;
}

.experience-card__meta-pill {
  display: inline-flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.25rem 0.68rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  background: color-mix(in srgb, var(--vp-c-bg) 94%, transparent);
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.experience-card__summary {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.72;
}

.experience-card__focus {
  display: grid;
  gap: 0.55rem;
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
  gap: 0.45rem;
}

.experience-card__focus-tag {
  display: inline-flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.26rem 0.68rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-accent) 20%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-accent-soft) 62%, var(--vp-c-bg));
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
}

.experience-card__highlights {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.8rem;
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

[data-theme="dark"] .experience-card,
[data-theme="dark"] .experience-card__logo-shell {
  box-shadow:
    0 16px 34px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

@media (max-width: 719px) {
  .experience-card {
    padding: 1.1rem 1rem;
    border-radius: 20px;
  }

  .experience-card__header {
    flex-direction: column;
  }

  .experience-card__meta {
    justify-content: flex-start;
  }

  .experience-card__logo-shell {
    width: 3rem;
    height: 3rem;
  }
}
</style>
