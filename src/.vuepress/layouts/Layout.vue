<script setup lang="ts">
/**
 * Keep the theme's page and navigation, with a server-rendered portfolio
 * introduction. The portrait lives beside the introduction in reading order,
 * rather than in the theme's separate absolutely positioned avatar slot.
 */
import { Layout } from "vuepress-theme-hope/client";
import { usePageFrontmatter, withBase } from "vuepress/client";

const frontmatter = usePageFrontmatter<{ avatar?: string; avatarAlt?: string }>();

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

</script>

<template>
  <Layout>
    <template #portfolioAvatar><!----></template>

    <template #portfolioInfo="{ name, welcome, titles }">
      <div class="portfolio-intro">
        <div class="portfolio-intro__copy">
          <p class="portfolio-intro__eyebrow"><span aria-hidden="true"></span> Research · Engineering · Open source</p>
          <h1 id="main-title" class="portfolio-intro__name"><span aria-hidden="true">{{ welcome }}</span> {{ name }}<span class="portfolio-intro__period" aria-hidden="true">.</span></h1>
          <p class="portfolio-intro__role">{{ titles[0] }}</p>
          <p class="portfolio-intro__statement">Reliable AI agents.<br /><em>Beyond the demo.</em></p>
          <p class="portfolio-intro__description">I build infrastructure that helps AI agents retrieve the right skills, execute with confidence, and recover when things go wrong.</p>
          <nav class="portfolio-intro__actions" aria-label="Primary links">
            <a class="portfolio-intro__button portfolio-intro__button--primary" href="#publications">Explore my research <span aria-hidden="true">↗</span></a>
            <a class="portfolio-intro__button" :href="withBase('/resume/david-liu-resume.pdf')" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
          </nav>
          <div class="portfolio-intro__socials"><SocialMedias /></div>
        </div>

        <aside class="portfolio-profile" aria-label="Portrait and current work">
          <figure class="portfolio-profile__portrait">
            <img
              v-if="frontmatter.avatar"
              :src="withBase(frontmatter.avatar)"
              :alt="frontmatter.avatarAlt || `Portrait of ${name}`"
              width="360"
              height="360"
              fetchpriority="high"
              decoding="async"
            />
            <figcaption><span aria-hidden="true">↗</span> Based in Seattle, WA</figcaption>
          </figure>
          <div class="portfolio-profile__now">
            <p class="portfolio-profile__label">Currently</p>
            <a href="#experience">Software Engineer at TikTok <span aria-hidden="true">↗</span></a>
            <p>Commerce Ads · Seattle, WA</p>
          </div>
        </aside>

        <div class="portfolio-intro__footer">
          <div class="home-affiliation-strip" role="group" aria-labelledby="home-affiliations-label">
            <span id="home-affiliations-label" class="home-affiliation-strip__eyebrow">Along the way</span>
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
          <p class="portfolio-intro__footnote">From research ideas<br />to systems people can use.</p>
        </div>
      </div>
      <div class="portfolio-brief" role="group" aria-label="At a glance">
        <a
          v-for="item in now"
          :key="item.label"
          :href="item.href"
          class="portfolio-brief__item"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
        >
          <span class="portfolio-brief__label">{{ item.label }}</span>
          <span class="portfolio-brief__text">{{ item.text }} <span aria-hidden="true">↗</span></span>
          <span class="portfolio-brief__meta">{{ item.meta }}</span>
        </a>
      </div>
    </template>
  </Layout>
</template>
