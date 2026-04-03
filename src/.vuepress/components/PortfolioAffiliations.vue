<template>
  <Teleport v-if="ready" :to="teleportTarget">
    <div class="home-affiliation-strip" role="list" aria-label="Schools and employers">
      <span class="home-affiliation-strip__eyebrow">Affiliations</span>
      <div class="home-affiliation-strip__logos">
        <a
          v-for="item in items"
          :key="item.name"
          role="listitem"
          class="home-affiliation-strip__link"
          :href="item.href"
          :title="item.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="home-affiliation-strip__icon" :src="item.logoSrc" alt="" />
        </a>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { withBase } from "vuepress/client";

const teleportTarget = ".vp-portfolio-home #portfolio .vp-portfolio-info";
const ready = ref(false);

onMounted(() => {
  let attempts = 0;
  const max = 24;
  const tick = () => {
    if (document.querySelector(teleportTarget)) {
      ready.value = true;
      return;
    }
    if (attempts++ < max) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});

const items = computed(() =>
  [
    {
      name: "University of Pennsylvania",
      href: "https://www.cis.upenn.edu/",
      logo: "/UPenn_logo.svg",
    },
    {
      name: "Northeastern University",
      href: "https://www.northeastern.edu/",
      logo: "/NEU_logo.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/",
      logo: "/TikTok_logo.svg",
    },
    {
      name: "Amazon",
      href: "https://www.aboutamazon.com/",
      logo: "/Amazon_logo.svg",
    },
    {
      name: "JD.com",
      href: "https://www.jd.com/",
      logo: "/JD.com_logo.png",
    },
  ].map((item) => ({ ...item, logoSrc: withBase(item.logo) })),
);
</script>
