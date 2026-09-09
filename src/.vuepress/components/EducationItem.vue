<template>
  <article class="education-item-wrapper home-card-shell">
    <div class="edu-left">
      <img
        :src="logoSrc"
        class="edu-logo"
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="edu-right">
      <div class="edu-header">
        <div class="edu-header__title">
          <p class="home-card-eyebrow">Education</p>
          <h3>{{ school }}</h3>
        </div>
        <div v-if="time || location" class="home-card-meta">
          <span v-if="time" class="home-card-time edu-time">{{ time }}</span>
          <span v-if="location" class="home-card-place">{{ location }}</span>
        </div>
      </div>
      <div class="edu-degree-line">
        <span v-if="abbr" class="edu-degree-abbr">{{ abbr }}</span>
        <span class="edu-degree-copy">
          <span class="edu-degree-title">{{ degree }}</span>
          <span v-if="major" class="edu-degree-tail"
            ><span class="edu-degree-separator" aria-hidden="true">/</span
            ><span class="edu-degree-major">{{ major }}</span></span
          >
        </span>
      </div>
      <div v-if="gpa || honorList.length" class="edu-meta">
        <div v-if="gpa" class="edu-gpa-row">
          <span class="home-card-label edu-gpa-label">GPA</span>
          <strong class="edu-gpa-value">{{ gpa }}</strong>
          <Badge v-if="rank" :text="rank" type="tip" vertical="top" />
        </div>
        <ul v-if="honorList.length" class="edu-honors-row" aria-label="Honors">
          <li
            v-for="(h, i) in honorList"
            :key="`${h.text}-${i}`"
            class="edu-honor"
            :class="[
              h.kind === 'honor' ? 'home-chip' : 'home-chip home-chip--award',
              `edu-honor--${h.kind}`,
            ]"
          >
            <span class="edu-honor__text">{{ h.text }}</span>
            <span v-if="h.note" class="edu-honor__note">{{ h.note }}</span>
          </li>
        </ul>
      </div>
      <div class="edu-details">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";

type HonorKind = "scholarship" | "annual" | "honor";

interface HonorInput {
  text: string;
  /** `scholarship` and `annual` take the gold award chip; `honor` (default) is neutral. */
  kind?: HonorKind;
  /** Small muted suffix inside the chip, e.g. "×3" or "annual". */
  note?: string;
}

const props = defineProps<{
  logo: string;
  school: string;
  time?: string;
  /** Long degree title, e.g. "Master of Science in Engineering". */
  degree: string;
  /** Short form shown as the accent chip, e.g. "M.S.E.". */
  abbr?: string;
  major?: string;
  location?: string;
  gpa?: string;
  rank?: string;
  /** Plain strings are treated as `{ text, kind: "honor" }`. */
  honors?: Array<string | HonorInput>;
}>();

const honorList = computed(() =>
  (props.honors ?? []).map((h) =>
    typeof h === "string"
      ? { text: h, kind: "honor" as HonorKind, note: undefined }
      : { text: h.text, kind: h.kind ?? ("honor" as HonorKind), note: h.note },
  ),
);

const logoSrc = computed(() => {
  if (!props.logo) return "";
  if (/^(https?:)?\/\//.test(props.logo) || props.logo.startsWith("data:")) return props.logo;
  return withBase(props.logo);
});
</script>

<style scoped>
.education-item-wrapper {
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr);
  gap: var(--dl-space-5);
  align-items: start;
  padding: 1.3rem 1.35rem;
  margin-bottom: var(--dl-space-4);
}

.education-item-wrapper:last-of-type {
  margin-bottom: 0;
}

.edu-left {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 7rem;
  padding: 0.65rem;
  box-sizing: border-box;
  border: 1px solid var(--dl-border);
  border-radius: var(--dl-radius-md);
  background: var(--dl-chip);
}

.edu-logo {
  width: 100%;
  height: 5.5rem;
  object-fit: contain;
  background-color: transparent;
  border-radius: var(--dl-radius-sm);
}

.edu-time {
  flex-shrink: 0;
}

.edu-right {
  min-width: 0;
}

.edu-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--dl-space-4);
  margin-bottom: 0.8rem;
}

.edu-header__title {
  min-width: 0;
}

.edu-right h3 {
  margin: 0;
  font-size: var(--home-type-title, 1.18rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  border: none;
}

.edu-degree-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.48rem 0.62rem;
  max-width: 100%;
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-2);
}

.edu-degree-abbr {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: var(--dl-chip-h-sm, 1.75rem);
  padding: 0.16rem var(--dl-chip-px-sm, 0.58rem);
  border-radius: 999px;
  border: 1px solid var(--dl-accent-line);
  background: var(--dl-accent-soft);
  color: var(--dl-accent-text, color-mix(in srgb, var(--vp-c-accent) 72%, var(--dl-ink)));
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.edu-degree-copy {
  flex: 1 1 12rem;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--dl-space-1);
  min-width: 0;
  font-size: var(--home-type-body, 1rem);
  line-height: 1.5;
}

.edu-degree-title {
  color: var(--vp-c-text-1);
  font-weight: 680;
}

.edu-degree-separator,
.edu-degree-major {
  color: var(--vp-c-text-2);
}

.edu-degree-separator {
  opacity: 0.5;
  /* Space belongs to the separator, not the markup, so the pair can be kept
     together without collapsing the gap. */
  margin-inline: 0.32rem 0.3rem;
}

/* The slash travels with the major it introduces; otherwise a wrap strands it
   at the end of the previous line. */
.edu-degree-tail {
  display: inline-block;
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: var(--dl-space-3);
  margin-bottom: 0.1rem;
}

.edu-gpa-row {
  display: flex;
  align-items: center;
  gap: var(--dl-space-2);
  font-weight: 600;
}

.edu-gpa-label {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-height: var(--dl-chip-h-sm, 1.75rem);
  padding: 0.18rem var(--dl-chip-px-sm, 0.58rem);
  border-radius: 999px;
  background: var(--dl-chip);
}

.edu-gpa-value {
  font-variant-numeric: tabular-nums;
}

.edu-honors-row {
  display: flex;
  gap: var(--dl-space-2);
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Chip colours come from the global `.home-chip` / `.home-chip--award`
   classes so the dark-mode gold ramp is shared with the project cards. */
.edu-honor {
  margin: 0;
  white-space: nowrap;
}

.edu-honor__note {
  margin-left: 0.42rem;
  padding-left: 0.42rem;
  border-left: 1px solid color-mix(in srgb, currentColor 36%, transparent);
  font-size: var(--home-type-eyebrow, 0.74rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.82;
}

.edu-details :deep(ul) {
  margin: 0;
  padding-left: 1.2rem;
}

.edu-details :deep(li) {
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

@media (max-width: 719px) {
  .education-item-wrapper {
    grid-template-columns: 1fr;
    gap: var(--dl-space-4);
    padding: 1.05rem 1rem;
  }

  .edu-left {
    width: 100%;
    min-height: 5.5rem;
  }

  .edu-logo {
    width: 6rem;
    height: 4.25rem;
  }

  .edu-right {
    width: 100%;
  }

  .edu-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--dl-space-2);
  }

  .edu-honor {
    flex-wrap: wrap;
    white-space: normal;
  }

  .edu-honor__note {
    flex-basis: 100%;
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }

  .edu-details {
    text-align: left;
  }
}
</style>
