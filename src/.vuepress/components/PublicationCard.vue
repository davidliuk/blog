<template>
  <div class="pub-card">
    <div class="pub-head">
      <img v-if="image" :src="imgSrc" class="pub-img" />
    </div>
    <div class="pub-body">
      <h4 class="pub-title">{{ title }}</h4>
      <div class="pub-meta">
        <Badge v-if="venue" :text="venue" type="info" />
        <span v-if="date" class="pub-date">{{ date }}</span>
        <span v-if="formattedAuthors.length" class="pub-authors">
          <template v-for="(a, i) in formattedAuthors" :key="i">
            <span :class="a.isMe ? 'me' : ''">{{ a.text }}</span
            ><span v-if="i < formattedAuthors.length - 1">, </span>
          </template>
        </span>
      </div>
      <div v-if="abstract" class="pub-abs">
        <p :class="{ clamp: !expanded }">{{ abstract }}</p>
      </div>
      <div class="pub-links">
        <div class="pub-links-left">
          <a v-if="paper" :href="paper" target="_blank" rel="noopener">Paper</a>
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener"
            class="pub-link-github"
          >
            <span class="pub-link-github-main" aria-label="Open GitHub repository">
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
          </a>
          <a
            v-if="website"
            :href="website"
            target="_blank"
            rel="noopener"
            >Website</a
          >
        </div>
        <div class="spacer"></div>
        <div class="pub-links-right">
          <span class="abs-action" @click="expanded = !expanded">{{
            expanded ? "Hide abstract" : "Read more"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { withBase } from "vuepress/client";

const GITHUB_STAR_CACHE_TTL_MS = 1000 * 60 * 60 * 12;
const githubStarsMemoryCache = new Map<string, { stars: number; expiresAt: number }>();

const props = defineProps<{
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
}
.pub-abs p {
  margin: 0 0 6px 0;
}
.pub-abs p.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pub-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.pub-meta {
  margin-bottom: 0.25rem;
}
.pub-date {
  font-weight: 600;
}
.pub-authors {
  line-height: 1.5;
}
.pub-links-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.pub-links-left a {
  margin-right: 0;
}
.pub-link-github {
  gap: 0;
  padding: 0.2rem 0.28rem 0.2rem 0.7rem !important;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent) !important;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 94%, var(--vp-c-bg)) !important;
  color: #24292f !important;
}
.pub-link-github-main {
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
  min-height: 1.7rem;
  padding: 0.08rem 0.58rem 0.08rem 0;
  color: inherit;
}
.pub-link-github-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.34rem;
  min-height: 1.7rem;
  margin-left: 0.4rem;
  padding: 0.08rem 0.36rem 0.08rem 0.72rem;
  border-left: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  font-size: 0.84rem;
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
.pub-link-github:hover {
  border-color: color-mix(in srgb, var(--vp-c-accent) 35%, var(--vp-c-divider));
  transform: translateY(-1px);
  color: #111827 !important;
}
[data-theme="dark"] .pub-link-github {
  background: color-mix(in srgb, var(--vp-c-bg-soft) 86%, var(--vp-c-bg));
  color: #e6edf3;
}
[data-theme="dark"] .pub-link-star-icon {
  color: #d29922;
}
.spacer {
  flex: 1;
}
.pub-links-right {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.abs-action {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.28rem 0.72rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, var(--vp-c-bg));
  color: var(--vp-c-text-2);
  font-weight: 600;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.abs-action:hover {
  color: var(--vp-c-accent);
  border-color: color-mix(in srgb, var(--vp-c-accent) 35%, var(--vp-c-divider));
  transform: translateY(-1px);
}

@media (max-width: 719px) {
  .pub-links-right {
    margin-left: 0;
  }
}
</style>
