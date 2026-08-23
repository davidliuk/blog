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
        <div>
          <p class="home-card-eyebrow">Education</p>
          <h3>{{ school }}</h3>
        </div>
        <span class="edu-time home-card-time">{{ time }}</span>
      </div>
      <div class="edu-degree-line" :aria-label="degree">
        <span class="edu-degree-abbr">{{ degreeAbbr }}</span>
        <span class="edu-degree-copy">
          <span class="edu-degree-title">{{ degreeTitle }}</span>
          <span v-if="major" class="edu-degree-tail"
            ><span class="edu-degree-separator" aria-hidden="true">/</span
            ><span class="edu-degree-major">{{ major }}</span></span
          >
        </span>
      </div>
      <div v-if="gpa || honorBadges.length" class="edu-meta">
        <div v-if="gpa" class="edu-gpa-row">
          <span class="home-card-label edu-gpa-label">GPA</span>
          <strong>{{ gpa }}</strong>
          <Badge v-if="rank" :text="rank" type="tip" vertical="top" />
        </div>
        <div v-if="honorBadges.length" class="edu-honors-row">
          <span
            v-for="(h, i) in honorBadges"
            :key="i"
            class="edu-honor"
            :class="`edu-honor--${h.type}`"
          >
            {{ h.text }}
          </span>
        </div>
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

const props = defineProps<{
  logo: string;
  school: string;
  time: string;
  degree: string;
  gpa?: string;
  honors?: string[];
  major?: string;
  rank?: string;
}>();

const honorBadges = computed(() => {
  return (props.honors ?? []).map((t) => ({
    text: t,
    // "Outstanding Student Leader" was a one-time award, so it must not fall
    // into the "annual" bucket that appends the "Awarded Annually" suffix.
    type: /Outstanding Student Leader/i.test(t)
      ? "honor"
      : /Merit.based Scholarship|Outstanding Student/i.test(t)
        ? "annual"
        : /Scholarship/i.test(t)
          ? "scholarship"
          : "honor",
  }));
});

const degreeAbbr = computed(() => {
  if (/M\.?S\.?E/i.test(props.degree) || /\bMSE\b/i.test(props.degree))
    return "M.S.E.";
  if (/B\.?E/i.test(props.degree) || /\bBE\b/i.test(props.degree)) return "B.E.";
  return props.degree;
});

const degreeTitle = computed(() => {
  if (degreeAbbr.value === "M.S.E.") return "Master of Science in Engineering";
  if (degreeAbbr.value === "B.E.") return "Bachelor of Engineering";
  return props.degree;
});

const major = computed(() => {
  if (props.major) return props.major;
  const m = props.degree.match(/in\s+(.+)/i);
  return m ? m[1] : "";
});

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
  white-space: nowrap;
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


.edu-right h3 {
  margin: 0;
  font-size: var(--home-type-title, 1.18rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  border: none;
}

.edu-degree-line {
  display: inline-flex;
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
  min-height: 1.72rem;
  padding: 0.16rem 0.58rem;
  border-radius: 999px;
  border: 1px solid var(--dl-accent-line);
  background: var(--dl-accent-soft);
  color: var(--vp-c-accent);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.edu-degree-copy {
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
  min-height: 1.75rem;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: var(--dl-chip);
}
.edu-honors-row {
  display: flex;
  gap: var(--dl-space-2);
  flex-wrap: wrap;
  align-items: center;
}
.edu-honor {
  display: inline-flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.24rem 0.68rem;
  border-radius: 999px;
  border: 1px solid var(--dl-border);
  background: var(--dl-chip);
  color: var(--vp-c-text-2);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 650;
  line-height: 1.2;
}
.edu-honor--scholarship,
.edu-honor--annual {
  border-color: color-mix(in srgb, #d29922 32%, var(--vp-c-divider));
  background: color-mix(in srgb, #f9d66d 16%, var(--vp-c-bg));
  color: color-mix(in srgb, #8a5f00 80%, var(--vp-c-text-1));
}
.edu-honor--annual::after {
  content: "Awarded Annually";
  margin-left: 0.42rem;
  padding-left: 0.42rem;
  border-left: 1px solid color-mix(in srgb, #d29922 36%, transparent);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 800;
  letter-spacing: 0.08em;
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

  .edu-details {
    text-align: left;
  }
}
</style>
