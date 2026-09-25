<template>
  <article class="experience-card home-card-shell">
    <div class="experience-card__header">
      <div class="experience-card__brand">
        <div v-if="logoSrc" class="experience-card__logo-shell">
          <img
            :src="logoSrc"
            alt=""
            class="experience-card__logo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="experience-card__title-group">
          <p class="home-card-eyebrow">{{ company }}</p>
          <!-- The company sits in the eyebrow above; say it in the heading too,
               so heading navigation does not list three bare job titles. -->
          <h3>{{ role }}<span class="sr-only">, {{ company }}</span></h3>
          <p v-if="team" class="experience-card__team">{{ team }}</p>
        </div>
      </div>

      <div v-if="time || location" class="home-card-meta">
        <span v-if="time" class="home-card-time">{{ time }}</span>
        <span v-if="location" class="home-card-place">{{ location }}</span>
      </div>
    </div>

    <p class="experience-card__summary">{{ summary }}</p>

    <div v-if="focus.length" class="experience-card__focus">
      <span class="home-card-label experience-card__focus-label">Themes</span>
      <div class="experience-card__focus-tags">
        <span v-for="item in focus" :key="item" class="home-chip">{{ item }}</span>
      </div>
    </div>

    <!-- One employer, several roles: each stint is a labelled group so the
         intern and full-time bullets stop reading as one undated list. -->
    <div v-if="stints.length" class="experience-card__stints">
      <div
        v-for="(stint, i) in stints"
        :key="`${stint.role}-${stint.time}-${i}`"
        class="experience-card__stint"
      >
        <h4 class="experience-card__stint-head">
          <span class="experience-card__stint-role">{{ stint.role }}</span>
          <span v-if="stint.time" class="home-card-time experience-card__stint-time">{{ stint.time }}</span>
        </h4>
        <ul v-if="stint.highlights.length" class="experience-card__highlights">
          <li v-for="item in stint.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <ul v-else-if="highlights.length" class="experience-card__highlights">
      <li v-for="item in highlights" :key="item">{{ item }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";

interface Stint {
  role: string;
  time: string;
  highlights?: string[];
}

const props = defineProps<{
  company: string;
  /** Current (or most recent) title; shown in the header. */
  role: string;
  team?: string;
  location?: string;
  /** Overall span, e.g. "May 2025 – Present"; shown in the header. */
  time?: string;
  logo?: string;
  summary: string;
  focus?: string[];
  /** Flat bullet list; ignored when `stints` is given. */
  highlights?: string[];
  /** Per-role groups (role + time + bullets), newest first. */
  stints?: Stint[];
}>();

const focus = computed(() => props.focus ?? []);
const highlights = computed(() => props.highlights ?? []);
const stints = computed(() =>
  (props.stints ?? []).map((stint) => ({ ...stint, highlights: stint.highlights ?? [] })),
);

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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--dl-space-4);
}

.experience-card__brand {
  /* Below ~20rem of title measure the header wraps and the metadata takes its
     own row, rather than the brand column collapsing to one word per line. */
  flex: 1 1 20rem;
  display: flex;
  align-items: flex-start;
  gap: var(--dl-space-4);
  min-width: 0;
}

/* Wordmarks are black-lettered; the well tokens flip to a light fill in dark
   mode so TikTok/Amazon stay legible without filtering brand colours. */
.experience-card__logo-shell {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.3rem;
  height: 3.3rem;
  padding: 0.55rem;
  box-sizing: border-box;
  border-radius: var(--dl-radius-md);
  border: 1px solid var(--dl-logo-well-line, var(--dl-border));
  background: var(--dl-logo-well, var(--dl-surface));
}

.experience-card__logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.experience-card__title-group {
  min-width: 0;
}

.experience-card__title-group h3 {
  margin: 0;
  font-size: var(--home-type-title, 1.18rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.experience-card__team {
  margin: 0.3rem 0 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-body, 1rem);
  line-height: 1.55;
}

.experience-card__summary {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-body, 1rem);
  line-height: 1.72;
}

.experience-card__focus {
  display: grid;
  gap: var(--dl-space-2);
}

.experience-card__focus .experience-card__focus-label {
  font-size: var(--home-type-eyebrow, 0.74rem);
}

.experience-card__focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dl-space-1);
}

.experience-card__stints {
  display: grid;
  gap: var(--dl-space-4);
}

.experience-card__stint {
  display: grid;
  gap: var(--dl-space-3);
}

.experience-card__stint + .experience-card__stint {
  padding-top: var(--dl-space-4);
  border-top: 1px dashed var(--dl-border);
}

.experience-card__stint-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--dl-space-2);
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--vp-c-text-1);
  font-size: var(--home-type-body, 1rem);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.experience-card__stint-role {
  min-width: 0;
}

.experience-card__stint-time {
  flex-shrink: 0;
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
  font-size: var(--home-type-body, 1rem);
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

  .experience-card__brand {
    flex: 0 1 auto;
  }

  .experience-card__logo-shell {
    width: 3rem;
    height: 3rem;
  }
}
</style>
