<template>
  <section ref="rootEl" class="news-timeline home-card-shell" :aria-labelledby="labelId">
    <div class="news-timeline__head">
      <p :id="labelId" class="home-card-eyebrow news-timeline__eyebrow">Updates</p>
      <p v-if="subtitle" class="news-timeline__subtitle">{{ subtitle }}</p>
    </div>
    <ol :id="listId" class="news-timeline__list">
      <li
        v-for="(item, i) in visibleItems"
        :key="`${item.iso ?? item.date}-${i}`"
        class="news-timeline__item"
        :class="{ 'news-timeline__item--highlight': item.highlight }"
      >
        <time v-if="item.iso" class="news-timeline__date" :datetime="item.iso">{{ item.date }}</time>
        <span v-else class="news-timeline__date">{{ item.date }}</span>
        <div class="news-timeline__body">
          <span v-if="item.tag" class="news-timeline__tag">{{ item.tag }}</span>
          <span class="news-timeline__text" v-html="item.html"></span>
        </div>
      </li>
    </ol>
    <button
      v-if="hiddenCount > 0 || expanded"
      type="button"
      class="news-timeline__toggle"
      :aria-expanded="expanded"
      :aria-controls="listId"
      @click="toggle"
    >
      {{ expanded ? "Show fewer" : `Show ${hiddenCount} older ${hiddenCount === 1 ? "update" : "updates"}` }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useId } from "vue";

interface NewsItem {
  /** Display date, e.g. "Sep 2026" or "2022". */
  date: string;
  /** Machine-readable date for `<time datetime>`, e.g. "2026-09". */
  iso?: string;
  /** Inline HTML: keep to <a>, <strong>, <em>. */
  html: string;
  /** Short category chip, e.g. "Paper", "Award". */
  tag?: string;
  /** Fills the timeline node with the accent colour. */
  highlight?: boolean;
}

const props = withDefaults(
  defineProps<{
    items: NewsItem[];
    /** Entries shown before the "older updates" toggle. */
    initial?: number;
    subtitle?: string;
  }>(),
  { initial: 5, subtitle: "" },
);

const uid = useId();
const labelId = `${uid}-label`;
const listId = `${uid}-list`;

const rootEl = ref<HTMLElement | null>(null);
const expanded = ref(false);
const visibleItems = computed(() =>
  expanded.value ? props.items : props.items.slice(0, props.initial),
);
const hiddenCount = computed(() => Math.max(0, props.items.length - props.initial));

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

async function toggle(): Promise<void> {
  const collapsing = expanded.value;
  expanded.value = !expanded.value;
  if (!collapsing) return;

  // Collapsing a long list can leave the reader far below the card; bring the
  // card head back only when it has left the viewport.
  await nextTick();
  const root = rootEl.value;
  if (!root) return;
  const offset = Number.parseFloat(getComputedStyle(root).scrollMarginTop || "0") || 0;
  if (root.getBoundingClientRect().top < offset) {
    root.scrollIntoView({
      block: "start",
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }
}
</script>

<style scoped>
.news-timeline {
  padding: 1.25rem 1.35rem 1.15rem;
  scroll-margin-top: var(--home-anchor-offset, 9rem);
}

.news-timeline__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.4rem 1rem;
  margin-bottom: 0.65rem;
}

.news-timeline__head .news-timeline__eyebrow {
  margin: 0;
  font-size: var(--home-type-eyebrow, 0.74rem);
}

.news-timeline__subtitle {
  margin: 0;
  color: var(--vp-c-text-3);
  font-size: var(--home-type-meta, 0.9rem);
}

.news-timeline__list {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.news-timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 6.25rem minmax(0, 1fr);
  gap: var(--dl-space-3);
  align-items: start;
  margin: 0;
  padding: 0.62rem 0 0.62rem 1.35rem;
}

.news-timeline__item + .news-timeline__item {
  border-top: 1px solid var(--dl-border);
}

/* Rail and node. The rail runs through the padding so it reads as one line. */
.news-timeline__item::before {
  content: "";
  position: absolute;
  left: 0.36rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--dl-border);
}

.news-timeline__item:first-child::before {
  top: 0.95rem;
}

.news-timeline__item:last-child::before {
  bottom: auto;
  height: 0.95rem;
}

.news-timeline__item::after {
  content: "";
  position: absolute;
  left: 0.12rem;
  top: 0.72rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--dl-surface);
  border: 1.5px solid var(--dl-accent-line-strong);
  box-sizing: border-box;
}

.news-timeline__item--highlight::after {
  background: var(--vp-c-accent);
  border-color: var(--vp-c-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--vp-c-accent-soft) 85%, transparent);
}

.news-timeline__date {
  padding-top: 0.08rem;
  color: var(--vp-c-text-3);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.news-timeline__body {
  min-width: 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-body, 1rem);
  line-height: 1.6;
}

.news-timeline__tag {
  display: inline-flex;
  align-items: center;
  margin: 0 0.45rem 0 0;
  padding: 0.1rem 0.5rem;
  border: 1px solid var(--dl-accent-line);
  border-radius: 999px;
  background: var(--dl-accent-soft);
  color: var(--dl-accent-text, color-mix(in srgb, var(--vp-c-accent) 72%, var(--dl-ink)));
  font-size: var(--home-type-eyebrow, 0.74rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  vertical-align: 0.12em;
}

.news-timeline__text :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 650;
}

.news-timeline__text :deep(a) {
  font-weight: 650;
}

.news-timeline__toggle {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-height: var(--dl-button-h, 2.5rem);
  margin-top: 0.6rem;
  padding: 0 0.95rem;
  border: 1px solid var(--dl-border);
  border-radius: 999px;
  background: var(--dl-chip);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

@media (hover: hover) and (pointer: fine) {
  .news-timeline__toggle:hover {
    border-color: var(--dl-accent-line-strong);
    background: var(--dl-accent-soft);
    box-shadow: var(--dl-shadow-1);
    transform: translateY(-1px);
  }
}

.news-timeline__toggle:active {
  transform: translateY(0) scale(0.985);
  box-shadow: none;
  transition-duration: 0.08s;
}

.news-timeline__toggle:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

@media (max-width: 719px) {
  .news-timeline {
    padding: 1.05rem 1rem 1rem;
  }

  .news-timeline__item {
    grid-template-columns: 1fr;
    gap: 0.15rem;
    padding-left: 1.2rem;
  }

  .news-timeline__toggle {
    min-height: 2.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .news-timeline__toggle {
    transition: none;
  }
}
</style>
