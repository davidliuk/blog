<template>
  <article
    :id="id"
    class="pub-card home-card-shell"
    :class="{ 'pub-card--no-image': !image }"
  >
    <div v-if="image" class="pub-head">
      <img
        :src="imgSrc"
        alt=""
        class="pub-img"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="pub-body">
      <h3 class="pub-title">{{ title }}</h3>
      <div class="pub-meta">
        <div v-if="venue || date" class="pub-meta-tags">
          <span v-if="venue" class="pub-meta-pill pub-venue">{{ venue }}</span>
          <span v-if="date" class="home-card-time pub-date">{{ date }}</span>
        </div>
        <span v-if="formattedAuthors.length" class="pub-authors">
          <template v-for="(a, i) in formattedAuthors" :key="i">
            <span :class="a.isMe ? 'me' : ''">{{ a.text }}</span
            ><span v-if="i < formattedAuthors.length - 1">, </span>
          </template>
        </span>
      </div>
      <div
        v-if="abstract"
        :id="abstractId"
        class="pub-abs"
        :role="expanded ? 'region' : undefined"
        :aria-label="expanded ? `Abstract for ${title}` : undefined"
      >
        <p :class="{ clamp: !expanded }">{{ expanded ? abstract : abstractPreview }}</p>
      </div>
      <div class="pub-links">
        <div class="pub-links-left">
          <a
            v-if="paper"
            :href="paper"
            target="_blank"
            rel="noopener"
            class="pub-action pub-action--paper"
          >
            <span>Paper</span>
            <span class="pub-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener"
            class="pub-action pub-link-github"
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
            <span
              v-if="formattedGithubStars"
              class="pub-link-github-badge"
              :aria-label="`${githubStars} GitHub stars`"
            >
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
              <span>{{ formattedGithubStars }}</span>
            </span>
            <span class="pub-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            v-if="website"
            :href="website"
            target="_blank"
            rel="noopener"
            class="pub-action pub-action--website"
          >
            <span>Website</span>
            <span class="pub-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <button
          v-if="abstract"
          type="button"
          class="abs-action"
          :aria-expanded="expanded"
          :aria-controls="abstractId"
          @click="expanded = !expanded"
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

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { withBase } from "vuepress/client";

const GITHUB_STAR_CACHE_TTL_MS = 1000 * 60 * 60 * 12;
const githubStarsMemoryCache = new Map<string, { stars: number; expiresAt: number }>();

const props = defineProps<{
  id?: string;
  title: string;
  image?: string;
  date?: string;
  authors?: string[];
  abstract?: string;
  venue?: string;
  paper?: string;
  github?: string;
  website?: string;
}>();

const expanded = ref(false);
const githubStars = ref<number | null>(null);
const abstractPreview = computed(() => {
  const text = props.abstract?.trim() ?? "";
  const limit = 240;
  if (text.length <= limit) return text;

  const wordBoundary = text.lastIndexOf(" ", limit);
  const end = wordBoundary >= 180 ? wordBoundary : limit;
  return `${text.slice(0, end).trimEnd()}…`;
});
const abstractId = computed(() => {
  const base = props.id ?? props.title;
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `publication-abstract-${slug || "item"}`;
});

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

onMounted(async () => {
  const repo = githubRepo.value;
  if (!repo) return;

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

function parseGitHubRepo(url?: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "github.com" && parsed.hostname !== "www.github.com") return null;

    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return `${parts[0]}/${parts[1]}`;
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

<style scoped>
.pub-abs {
  position: relative;
  margin: 0.75rem 0 0.9rem;
}
.pub-abs p {
  margin: 0 0 6px 0;
}
.pub-abs p.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pub-meta {
  display: grid;
  gap: 0.55rem;
  margin-bottom: 0;
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
  min-height: 1.75rem;
  padding: 0.25rem 0.58rem;
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
  color: var(--vp-c-accent);
}
.pub-date {
  flex-shrink: 0;
}
.pub-authors {
  display: block;
  line-height: 1.5;
}
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
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color var(--vp-t-color);
}
.pub-action::after {
  content: none !important;
}
.pub-action--paper {
  border-color: var(--dl-accent-line);
  background: var(--dl-accent-soft);
  color: var(--vp-c-accent);
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
  align-self: stretch;
  gap: 0.28rem;
  min-height: 0;
  padding: 0 0.52rem;
  border-left: 1px solid var(--dl-border);
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  white-space: nowrap;
  color: inherit;
}
.pub-link-icon,
.pub-link-star-icon {
  flex-shrink: 0;
}
.pub-link-star-icon {
  color: #8a6914;
}
.pub-link-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0.9rem;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  opacity: 0.7;
  transform: translateY(-0.04rem);
}
.pub-action:hover {
  border-color: var(--dl-accent-line-strong);
  transform: translateY(-1px);
  box-shadow: var(--dl-shadow-1);
  text-decoration: none;
}
[data-theme="dark"] .pub-link-star-icon {
  color: #d29922;
}
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
  color: var(--vp-c-accent);
  font: inherit;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color var(--vp-t-color);
}
.abs-action:hover {
  border-color: var(--dl-accent-line);
  background: var(--dl-accent-soft);
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
.pub-action:focus-visible,
.abs-action:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

@media (max-width: 719px) {
  .pub-meta {
    gap: 0.6rem;
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
    height: 2.45rem;
    min-height: 2.45rem;
  }
  .abs-action {
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 2.45rem;
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
  .pub-link-arrow {
    margin-left: auto;
  }
  .pub-link-github {
    padding-right: 0.72rem;
  }
}
</style>
