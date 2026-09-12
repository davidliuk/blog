<script setup lang="ts">
/**
 * Keep the theme's page and navigation, with a server-rendered portfolio
 * introduction. The portrait lives beside the introduction in reading order,
 * rather than in the theme's separate absolutely positioned avatar slot.
 */
import { Layout } from "vuepress-theme-hope/client";
import { usePageFrontmatter, withBase } from "vuepress/client";

import { affiliations, atAGlance, profile } from "../data/portfolio.js";

const frontmatter = usePageFrontmatter<{ avatar?: string; avatarAlt?: string }>();
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
          <p class="portfolio-intro__statement">{{ profile.headline }}<br /><em>{{ profile.headlineEmphasis }}</em></p>
          <p class="portfolio-intro__description">{{ profile.introduction }}</p>
          <nav class="portfolio-intro__actions" aria-label="Primary links">
            <a class="portfolio-intro__button portfolio-intro__button--primary" href="#publications">Explore my research <span aria-hidden="true">↗</span></a>
            <a class="portfolio-intro__button" :href="withBase(profile.resume)" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
          </nav>
          <div class="portfolio-intro__socials"><SocialMedias /></div>
        </div>

        <aside class="portfolio-profile" aria-label="Portrait and current work">
          <figure class="portfolio-profile__portrait">
            <img
              v-if="frontmatter.avatar"
              :src="withBase(frontmatter.avatar)"
              :alt="frontmatter.avatarAlt || profile.avatarAlt"
              width="360"
              height="360"
              fetchpriority="high"
              decoding="async"
            />
            <figcaption><span aria-hidden="true">↗</span> Based in {{ profile.locationShort }}</figcaption>
          </figure>
          <div class="portfolio-profile__now">
            <p class="portfolio-profile__label">Currently</p>
            <a href="#experience">{{ profile.current.role }} at {{ profile.current.company }} <span aria-hidden="true">↗</span></a>
            <p>{{ profile.current.team }} · {{ profile.locationShort }}</p>
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
          v-for="item in atAGlance"
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
