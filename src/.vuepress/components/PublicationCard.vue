<template>
  <article
    :id="id"
    ref="cardEl"
    class="pub-card home-card-shell"
    :class="{ 'pub-card--no-image': !image }"
  >
    <div v-if="image" class="pub-head">
      <img
        :src="imgSrc"
        alt=""
        class="pub-img"
        :width="imageWidth"
        :height="imageHeight"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="pub-body">
      <h3 :id="titleId" class="pub-title">{{ title }}</h3>
      <div class="pub-meta">
        <div v-if="venue || alsoList.length || role || date" class="pub-meta-tags">
          <span v-if="venue" class="pub-meta-pill pub-venue">{{ venue }}</span>
          <span
            v-for="item in alsoList"
            :key="item"
            class="pub-meta-pill pub-venue-also"
          >{{ item }}</span>
          <span v-if="role" class="pub-meta-pill pub-role">{{ role }}</span>
          <span v-if="date" class="home-card-time pub-date">{{ date }}</span>
        </div>
        <span v-if="formattedAuthors.length" class="pub-authors">
          <template v-for="(a, i) in formattedAuthors" :key="i">
            <span :class="a.isMe ? 'me' : ''">{{ a.text }}</span
            ><span v-if="i < formattedAuthors.length - 1">, </span>
          </template>
        </span>
        <p v-if="note" class="pub-note">{{ note }}</p>
      </div>
      <div
        v-if="abstract"
        :id="abstractId"
        class="pub-abs"
        :class="{ 'pub-abs--expanded': expanded }"
        :role="expanded ? 'region' : undefined"
        :aria-label="expanded ? `Abstract for ${title}` : undefined"
      >
        <!-- One full-text paragraph; the collapsed state is a CSS line clamp so
             the DOM never swaps text and the height can animate. -->
        <p class="pub-abs__text">{{ abstract }}</p>
      </div>
      <div class="pub-links">
        <div class="pub-links-left">
          <a
            v-if="paper"
            :href="paper"
            target="_blank"
            rel="noopener"
            class="pub-action pub-action--paper"
            :aria-describedby="titleId"
          >
            <span>Paper</span>
          </a>
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener"
            class="pub-action pub-link-github"
            :aria-describedby="titleId"
          >
            <span class="pub-link-github-main">
              <svg
                class="pub-link-icon"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.67 0 8.2c0 3.63 2.29 6.7 5.47 7.78.4.08.55-.18.55-.4 0-.2-.01-.87-.01-1.58-2.01.38-2.53-.5-2.69-.95-.09-.23-.48-.95-.82-1.15-.28-.16-.68-.56-.01-.57.63-.01 1.08.59 1.23.84.72 1.27 1.87.91 2.33.69.07-.54.28-.91.5-1.12-1.78-.21-3.64-.92-3.64-4.08 0-.9.31-1.64.82-2.22-.08-.21-.36-1.05.08-2.19 0 0 .67-.22 2.2.85A7.38 7.38 0 0 1 8 3.72c.68 0 1.37.09 2.01.27 1.53-1.07 2.2-.85 2.2-.85.44 1.14.16 1.98.08 2.19.51.58.82 1.31.82 2.22 0 3.17-1.87 3.87-3.65 4.08.29.26.54.75.54 1.52 0 1.1-.01 1.98-.01 2.25 0 .22.15.49.55.4A8.23 8.23 0 0 0 16 8.2C16 3.67 12.42 0 8 0Z"
                />
              </svg>
              <span>GitHub</span>
            </span>
            <ClientOnly>
              <span v-if="formattedGithubStars" class="pub-link-github-badge">
                <svg
                  class="pub-link-star-icon"
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M8 1.2 9.83 4.9l4.08.59-2.95 2.88.7 4.07L8 10.53l-3.66 1.91.7-4.07L2.09 5.49l4.08-.59L8 1.2Z"
                  />
                </svg>
                <span class="sr-only">GitHub stars: </span>
                <span>{{ formattedGithubStars }}</span>
              </span>
            </ClientOnly>
          </a>
          <a
            v-if="website"
            :href="website"
            target="_blank"
            rel="noopener"
            class="pub-action pub-action--website"
            :aria-describedby="titleId"
          >
            <span>Website</span>
          </a>
          <CopyButton
            v-if="bibtex"
            size="sm"
            label="Cite"
            done-label="BibTeX copied"
            :text="bibtex"
            title="Copy BibTeX"
          />
        </div>
        <button
          v-if="abstract"
          type="button"
          class="abs-action"
          :aria-expanded="expanded"
          :aria-controls="abstractId"
          :aria-describedby="titleId"
          @click="toggleAbstract"
        >
          <span>{{ expanded ? "Show less" : "Read abstract" }}</span>
          <span
            class="abs-action__icon"
            :class="{ 'abs-action__icon--expanded': expanded }"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  </article>
</template>

<!-- Shared state lives in a plain <script>: top-level code in <script setup>
     is compiled into setup() and would run once per card. -->
<script lang="ts">
import { withBase } from "vuepress/client";

const GITHUB_STAR_CACHE_TTL_MS = 1000 * 60 * 60 * 12;
const githubStarsMemoryCache = new Map<string, { stars: number; expiresAt: number }>();

type StarsTable = Record<string, { stars: number }>;

// Star counts come from a JSON snapshot written at build time by
// scripts/fetch-github-stars.mjs. The file is fetched once per page (this
// module-level promise is shared by every card) so the homepage no longer makes
// one unauthenticated api.github.com request per repository on every visit.
let starsPromise: Promise<StarsTable> | null = null;

function loadStarsSnapshot(): Promise<StarsTable> {
  if (!starsPromise) {
    starsPromise = fetch(withBase("/data/github-stars.json"), {
      headers: { Accept: "application/json" },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { repos?: Record<string, { stars?: unknown }> } | null) => {
        const table: StarsTable = {};
        for (const [name, entry] of Object.entries(data?.repos ?? {})) {
          if (typeof entry?.stars === "number") table[name.toLowerCase()] = { stars: entry.stars };
        }
        return table;
      })
      // A missing or malformed file is not an error for the page: every card
      // simply takes the API path instead.
      .catch((): StarsTable => ({}));
  }
  return starsPromise;
}

function parseGitHubRepo(url?: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "github.com" && parsed.hostname !== "www.github.com") return null;

    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return `${parts[0]}/${parts[1].replace(/\.git$/, "")}`;
  } catch {
    return null;
  }
}

function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: value >= 1000 ? 1 : 0,
  }).format(value);
}

function getGitHubStarCacheKey(repo: string): string {
  return `publication-card:github-stars:${repo}`;
}

function readCachedGitHubStars(repo: string): number | null {
  const now = Date.now();
  const memoryCached = githubStarsMemoryCache.get(repo);

  if (memoryCached && memoryCached.expiresAt > now) {
    return memoryCached.stars;
  }

  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(getGitHubStarCacheKey(repo));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { stars?: number; expiresAt?: number };
    if (typeof parsed.stars !== "number" || typeof parsed.expiresAt !== "number") return null;
    if (parsed.expiresAt <= now) {
      window.localStorage.removeItem(getGitHubStarCacheKey(repo));
      return null;
    }

    githubStarsMemoryCache.set(repo, { stars: parsed.stars, expiresAt: parsed.expiresAt });
    return parsed.stars;
  } catch {
    return null;
  }
}

function writeCachedGitHubStars(repo: string, stars: number): void {
  const expiresAt = Date.now() + GITHUB_STAR_CACHE_TTL_MS;
  githubStarsMemoryCache.set(repo, { stars, expiresAt });

  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      getGitHubStarCacheKey(repo),
      JSON.stringify({ stars, expiresAt }),
    );
  } catch {
    // Ignore storage failures (private mode, quota, etc).
  }
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref, useId } from "vue";
import { ClientOnly } from "vuepress/client";
import CopyButton from "./CopyButton.vue";

const props = withDefaults(
  defineProps<{
    /** Anchor id for the card (`#paper-…` links). */
    id?: string;
    title: string;
    /** Thumbnail, absolute URL or a site path such as `/publication/gos.png`. */
    image?: string;
    /** Intrinsic thumbnail size, written to the `<img>` to reserve space. */
    imageWidth?: number;
    imageHeight?: number;
    date?: string;
    authors?: string[];
    abstract?: string;
    /** Primary venue (accent pill). */
    venue?: string;
    /** Secondary venues only (neutral pills): a workshop re-presentation, a
     *  poster track. Use `role` for the author's part in a project. */
    also?: string | string[];
    /** Author's part in the work, e.g. "Contributor" (dashed neutral chip). */
    role?: string;
    /** One short line under the author list, e.g. what David built. */
    note?: string;
    /** BibTeX entry; renders a "Cite" copy button when present. */
    bibtex?: string;
    paper?: string;
    github?: string;
    website?: string;
  }>(),
  { imageWidth: 800, imageHeight: 450 },
);

// `also` accepts a single venue or a list, so a paper with one workshop
// appearance does not need array syntax at the call site.
const alsoList = computed(() => {
  const raw = props.also;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
});

// `useId()` is stable across SSR and hydration, unlike anything derived from
// the title or a counter.
const uid = useId();
const titleId = `${uid}-title`;
const abstractId = `${uid}-abstract`;

const cardEl = ref<HTMLElement | null>(null);
const expanded = ref(false);
const githubStars = ref<number | null>(null);

const formattedAuthors = computed(() => {
  const list = props.authors ?? [];
  return list.map((t) => ({ text: t, isMe: /Dawei\s+Liu/i.test(t) }));
});

const githubRepo = computed(() => parseGitHubRepo(props.github));
const formattedGithubStars = computed(() =>
  githubStars.value === null ? "" : formatCompactNumber(githubStars.value),
);

const imgSrc = computed(() => {
  if (!props.image) return "";
  if (/^(https?:)?\/\//.test(props.image) || props.image.startsWith("data:")) return props.image;
  return withBase(props.image);
});

function toggleAbstract(): void {
  expanded.value = !expanded.value;
  if (expanded.value) return;

  // Collapsing a long abstract can leave the reader far below the card. If the
  // card's top is out of view (or hidden under the sticky navbar and rail —
  // the same offset `scroll-margin-top` uses), bring it back.
  const card = cardEl.value;
  if (!card || typeof window === "undefined") return;

  const offset = parseFloat(window.getComputedStyle(card).scrollMarginTop) || 0;
  if (card.getBoundingClientRect().top >= offset) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  card.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
}

onMounted(async () => {
  const repo = githubRepo.value;
  if (!repo) return;

  const snapshot = (await loadStarsSnapshot())[repo.toLowerCase()];
  if (snapshot) {
    githubStars.value = snapshot.stars;
    return;
  }

  // Repository missing from the snapshot: fall back to the live API, cached in
  // localStorage so a visitor triggers at most one request per repo per 12h.
  const cached = readCachedGitHubStars(repo);
  if (cached !== null) {
    githubStars.value = cached;
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });
    if (!response.ok) return;

    const data = (await response.json()) as { stargazers_count?: number };
    if (typeof data.stargazers_count !== "number") return;

    githubStars.value = data.stargazers_count;
    writeCachedGitHubStars(repo, data.stargazers_count);
  } catch {
    // Fail silently so the card still renders even if GitHub is unavailable.
  }
});
</script>

<style scoped>
/* ------------------------------------------------------------------------
   Card frame. `.home-card-shell` (global) paints the surface, border, radius
   and shadow; everything below is layout and content owned by this file.
   ------------------------------------------------------------------------ */
.pub-card {
  display: grid;
  grid-template-columns: 168px 1fr;
  gap: var(--dl-space-4);
  align-items: flex-start;
  padding: 1.3rem 1.35rem;
  /* Collapsing an abstract scrolls the card back into view; land it below the
     sticky navbar + section rail, the same offset the anchor links use. */
  scroll-margin-top: var(--home-anchor-offset, 9rem);
}

.pub-card--no-image {
  grid-template-columns: 1fr;
}

.pub-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.pub-head {
  border: 0;
  border-radius: var(--dl-radius-md);
  background: transparent;
  padding: 0;
}

/* Thumbnails are cropped from the top-left, where a figure's title or the
   first panel sits, instead of letterboxed on a grey well. The white ground
   matches the paper figures' own background so the crop edge disappears. */
.pub-img {
  display: block;
  width: 100%;
  height: 120px;
  padding: 0;
  box-sizing: border-box;
  object-fit: cover;
  object-position: left top;
  border: 1px solid var(--dl-border);
  border-radius: var(--dl-radius-sm);
  background: #fff;
}

[data-theme="dark"] .pub-img {
  filter: brightness(0.86) contrast(1.05);
}

.pub-title {
  margin: 0 0 8px 0;
  font-size: var(--home-type-title, 1.18rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  text-wrap: balance;
}

/* ------------------------------------------------------------------------
   Meta: venue pills, date chip, authors, note
   ------------------------------------------------------------------------ */
.pub-meta {
  display: grid;
  gap: 0.55rem;
  margin-bottom: 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-meta, 0.9rem);
}

.pub-meta-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.pub-meta-pill {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-height: var(--dl-chip-h-sm, 1.75rem);
  padding-block: 0.25rem;
  padding-inline: var(--dl-chip-px-sm, 0.58rem);
  border: 1px solid var(--dl-border);
  border-radius: 999px;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.pub-venue {
  border-color: var(--dl-accent-line);
  background: var(--dl-accent-soft);
  /* `--dl-accent-text` is the accent darkened for AA on tinted fills. */
  color: var(--dl-accent-text, var(--vp-c-accent));
}

/* Secondary venues: same pill, neutral fill, so the primary venue keeps the
   accent and the eye reads a clear first/second. */
.pub-venue-also {
  border-color: var(--dl-border);
  background: var(--dl-chip);
  color: var(--vp-c-text-2);
}

/* Role in the project ("Contributor"): dashed and unfilled, so it reads as a
   status rather than a venue. */
.pub-role {
  border: 1px dashed var(--dl-border);
  background: transparent;
  color: var(--vp-c-text-2);
}

.pub-date {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.pub-authors {
  display: block;
  line-height: 1.5;
}

.pub-authors .me {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.pub-note {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: var(--home-type-meta, 0.9rem);
  line-height: 1.5;
}

/* ------------------------------------------------------------------------
   Abstract: one paragraph, clamped to three lines until expanded
   ------------------------------------------------------------------------ */
.pub-abs {
  position: relative;
  margin: 0.75rem 0 0.9rem;
  /* Lets `max-height: max-content` interpolate where supported (progressive:
     other browsers snap between the two heights). */
  interpolate-size: allow-keywords;
}

.pub-abs__text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: 0;
  max-height: calc(3 * 1.62em);
  color: var(--vp-c-text-2);
  font-size: var(--home-type-body, 1rem);
  line-height: 1.62;
  transition-property: max-height, -webkit-line-clamp;
  transition-duration: 0.3s, 0s;
  transition-timing-function: ease, linear;
  /* Re-apply the clamp only once the height has finished shrinking, so the
     collapse animates too instead of snapping to three lines at t=0. */
  transition-delay: 0s, 0.3s;
  transition-behavior: allow-discrete;
}

.pub-abs--expanded .pub-abs__text {
  -webkit-line-clamp: none;
  max-height: max-content;
  /* Opening: drop the clamp immediately so the text is there while the box grows. */
  transition-property: max-height;
  transition-duration: 0.3s;
  transition-delay: 0s;
}

/* ------------------------------------------------------------------------
   Actions row: Paper / GitHub / Website / Cite on the left, abstract toggle
   on the right
   ------------------------------------------------------------------------ */
.pub-links {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.7rem 1rem;
  margin-top: 0.15rem;
}

.pub-links-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.pub-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 2.5rem;
  min-height: 2.5rem;
  margin-right: 0;
  padding: 0 0.82rem;
  gap: 0.42rem;
  border: 1px solid var(--dl-border);
  border-radius: 999px;
  background: var(--dl-chip);
  color: var(--vp-c-text-1);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  /* The theme paints its external-link arrow as `::after` on every
     `target=_blank` link; tint it with the button text so the page has one
     arrow style (résumé card, home actions, these). */
  --external-link-c-icon: currentColor;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color var(--vp-t-color);
}

.pub-action:hover,
.pub-action:focus-visible {
  text-decoration: none;
}

.pub-action--paper {
  border-color: var(--dl-accent-line);
  background: var(--dl-accent-soft);
  color: var(--dl-accent-text, var(--vp-c-accent));
}

.pub-action--website {
  color: var(--vp-c-text-2);
}

.pub-link-github {
  gap: 0;
  padding: 0 0.42rem 0 0.76rem;
}

.pub-link-github-main {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  height: 100%;
  padding-right: 0.58rem;
  color: inherit;
}

.pub-link-github-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  gap: 0.28rem;
  min-width: 3.2rem;
  min-height: 0;
  padding: 0 0.52rem;
  border-left: 1px solid var(--dl-border);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: inherit;
  animation: pub-badge-in 0.2s ease both;
}

@keyframes pub-badge-in {
  from {
    opacity: 0;
  }
}

.pub-link-icon,
.pub-link-star-icon {
  flex-shrink: 0;
}

.pub-link-star-icon {
  color: var(--dl-award-text, #8a6914);
}

/* ------------------------------------------------------------------------
   Abstract toggle
   ------------------------------------------------------------------------ */
.abs-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0 0.5rem 0 0.72rem;
  gap: 0.38rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--dl-accent-text, var(--vp-c-accent));
  font: inherit;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color var(--vp-t-color);
}

.abs-action__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--dl-accent-soft);
  transition: transform 0.2s ease;
}

.abs-action__icon::before {
  content: "";
  width: 0.34rem;
  height: 0.34rem;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: translateY(-0.08rem) rotate(45deg);
}

.abs-action__icon--expanded {
  transform: rotate(180deg);
}

/* ------------------------------------------------------------------------
   Interaction states: lift only for a real pointer, press for everyone
   ------------------------------------------------------------------------ */
@media (hover: hover) and (pointer: fine) {
  .pub-action:hover {
    border-color: var(--dl-accent-line-strong);
    transform: translateY(-1px);
    box-shadow: var(--dl-shadow-1);
  }

  .abs-action:hover {
    border-color: var(--dl-accent-line);
    background: var(--dl-accent-soft);
  }
}

.pub-action:active,
.abs-action:active {
  transform: translateY(0) scale(0.985);
  box-shadow: none;
  transition-duration: 0.08s;
}

.pub-action:focus-visible,
.abs-action:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

/* ------------------------------------------------------------------------
   Responsive
   ------------------------------------------------------------------------ */
@media (max-width: 719px) {
  .pub-card {
    grid-template-columns: 1fr;
    gap: var(--dl-space-4);
    padding: 1.05rem 1rem;
  }

  .pub-head {
    max-width: 100%;
  }

  .pub-img {
    height: auto;
    aspect-ratio: 2 / 1;
    max-height: 11rem;
  }

  .pub-meta {
    gap: 0.6rem;
  }

  /* Long venue names wrap inside the pill instead of overflowing the card. */
  .pub-meta-pill {
    max-width: 100%;
    line-height: 1.25;
    text-align: left;
    white-space: normal;
  }

  .pub-links {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.7rem;
  }

  .pub-links-left {
    width: 100%;
    gap: 0.5rem;
  }

  .pub-action {
    height: auto;
    min-height: 2.75rem;
  }

  .abs-action {
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 2.75rem;
    padding: 0.7rem 0 0.05rem;
    border: 0;
    border-top: 1px solid var(--dl-border);
    border-radius: 0;
  }

  .abs-action:hover {
    border-color: var(--dl-border);
    background: transparent;
  }
}

@media (max-width: 359px) {
  .pub-links-left {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  .pub-action {
    justify-content: flex-start;
    width: 100%;
  }

  /* Full-width rows: label on the left, the badge and the theme's arrow on
     the right. */
  .pub-action > :first-child {
    margin-inline-end: auto;
  }

  .pub-link-github {
    padding-right: 0.72rem;
  }

  .pub-links-left > :deep(.copy-button) {
    justify-content: flex-start;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pub-action,
  .abs-action,
  .abs-action__icon,
  .pub-abs__text {
    transition: none;
  }

  .pub-link-github-badge {
    animation: none;
  }
}
</style>
