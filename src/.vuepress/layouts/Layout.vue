<script setup lang="ts">
/**
 * Site layout: the theme's Layout with the portfolio hero replaced through its
 * own slots.
 *
 * The stock PortfolioHero renders the welcome line as an <h6>, types the
 * tagline into an empty <h2> after mount (so pre-rendered HTML has no tagline,
 * crawlers see nothing, and the typing ignores prefers-reduced-motion), and
 * the affiliation strip used to be teleported in after hydration, which moved
 * the whole page down by ~96px. Everything below is static markup rendered on
 * the server: one <h1>, plain paragraphs for the captions, the affiliations in
 * reading order, and a small "Now" panel that gives the empty right half of
 * the hero something to say.
 */
import { onMounted, ref } from "vue";
import { Layout } from "vuepress-theme-hope/client";
import { withBase } from "vuepress/client";

interface Affiliation {
  name: string;
  href: string;
  logo: string;
  /** Drives optical sizing: square crests read smaller than wide wordmarks. */
  shape: "crest" | "wordmark";
  width: number;
  height: number;
}

const affiliations: Affiliation[] = [
  { name: "University of Pennsylvania", href: "https://www.cis.upenn.edu/", logo: "/UPenn_logo.svg", shape: "crest", width: 30, height: 26 },
  { name: "Northeastern University", href: "https://neu.edu.cn/", logo: "/NEU_logo.svg", shape: "crest", width: 26, height: 26 },
  { name: "TikTok", href: "https://www.tiktok.com/", logo: "/TikTok_logo.svg", shape: "wordmark", width: 80, height: 20 },
  { name: "Amazon", href: "https://www.aboutamazon.com/", logo: "/Amazon_logo.svg", shape: "wordmark", width: 66, height: 20 },
  { name: "JD.com", href: "https://www.jd.com/", logo: "/JD.com_logo.png", shape: "wordmark", width: 44, height: 20 },
];

interface NowItem {
  label: string;
  text: string;
  meta: string;
  href?: string;
  external?: boolean;
}

// Facts mirror the résumé (Aug 2026) and the homepage sections they link to.
const now: NowItem[] = [
  {
    label: "Now",
    text: "Software Engineer, Commerce Ads at TikTok",
    meta: "Seattle · since Jun 2026",
    href: "#experience",
  },
  {
    label: "Research",
    text: "Reliable tool-using agents with LAIR",
    meta: "OpenLAIR · advised by Prof. Lichao Sun",
    href: "https://github.com/OpenLAIR",
    external: true,
  },
  {
    label: "Latest",
    text: "Dr. Claw preprint on arXiv",
    meta: "EMNLP 2026 System Demonstrations · Sep 2026",
    href: "#paper-dr-claw",
  },
];

// The tagline types itself in once per browser session; on later visits to
// the homepage it is simply there. The class is applied after mount, so the
// server-rendered markup and the first client render agree.
const typed = ref(false);

onMounted(() => {
  try {
    if (window.sessionStorage.getItem("dl-hero-typed")) typed.value = true;
    else window.sessionStorage.setItem("dl-hero-typed", "1");
  } catch {
    // Storage can be unavailable (private mode); the animation simply plays.
  }
});
</script>

<template>
  <Layout>
    <template #portfolioAvatar="{ avatar, alt, style }">
      <div class="vp-portfolio-avatar home-hero__avatar">
        <img
          v-if="avatar"
          :src="avatar"
          :alt="alt"
          :style="style"
          width="148"
          height="148"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </template>

    <template #portfolioInfo="{ name, welcome, titles }">
      <div class="vp-portfolio-info home-hero" :class="{ 'home-hero--typed': typed }">
        <div class="home-hero__identity">
          <p class="vp-portfolio-welcome">{{ welcome }}</p>
          <h1 id="main-title" class="vp-portfolio-name">{{ name }}</h1>
          <p class="vp-portfolio-title">
            <span class="home-hero__tagline" :style="{ '--tagline-chars': String(titles[0]?.length ?? 0) }">{{ titles[0] }}</span>
          </p>

          <div class="home-affiliation-strip" role="group" aria-labelledby="home-affiliations-label">
            <span id="home-affiliations-label" class="home-affiliation-strip__eyebrow">Affiliations</span>
            <ul class="home-affiliation-strip__logos">
              <li v-for="item in affiliations" :key="item.name" class="home-affiliation-strip__item">
                <a
                  class="home-affiliation-strip__link no-external-link-icon"
                  :data-mark="item.shape"
                  :href="item.href"
                  :aria-label="item.name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="home-affiliation-strip__icon"
                    :src="withBase(item.logo)"
                    :width="item.width"
                    :height="item.height"
                    alt=""
                    decoding="async"
                  />
                </a>
              </li>
            </ul>
          </div>

          <SocialMedias />
        </div>

        <aside class="home-hero__now" aria-labelledby="home-now-label">
          <p id="home-now-label" class="home-hero__now-label">At a glance</p>
          <ul class="home-hero__now-list">
            <li v-for="item in now" :key="item.label">
              <span class="home-hero__now-key">{{ item.label }}</span>
              <span class="home-hero__now-body">
                <a
                  v-if="item.href"
                  :href="item.href"
                  class="home-hero__now-text"
                  :class="{ 'no-external-link-icon': !item.external }"
                  :target="item.external ? '_blank' : undefined"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                >{{ item.text }}</a>
                <span v-else class="home-hero__now-text">{{ item.text }}</span>
                <span class="home-hero__now-meta">{{ item.meta }}</span>
              </span>
            </li>
          </ul>
          <a class="home-hero__now-cta" href="#contact">Get in touch</a>
        </aside>
      </div>
    </template>
  </Layout>
</template>
