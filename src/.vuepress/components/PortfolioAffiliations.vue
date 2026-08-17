<template>
  <Teleport v-if="ready" :to="teleportTarget">
    <div class="home-affiliation-strip" aria-labelledby="home-affiliations-label">
      <span id="home-affiliations-label" class="home-affiliation-strip__eyebrow">Affiliations</span>
      <ul class="home-affiliation-strip__logos">
        <li
          v-for="item in items"
          :key="item.name"
          class="home-affiliation-strip__item"
        >
          <a
            class="home-affiliation-strip__link"
            :data-mark="item.shape"
            :href="item.href"
            :aria-label="item.name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="home-affiliation-strip__icon" :src="item.logoSrc" alt="" />
          </a>
        </li>
      </ul>
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

// `shape` drives optical sizing in the stylesheet. Capping every mark at the
// same height makes the square university crests look half the size of the
// wide wordmarks next to them, because the eye compares area, not height.
const items = computed(() =>
  [
    {
      name: "University of Pennsylvania",
      href: "https://www.cis.upenn.edu/",
      logo: "/UPenn_logo.svg",
      shape: "crest",
    },
    {
      name: "Northeastern University",
      href: "https://neu.edu.cn/",
      logo: "/NEU_logo.svg",
      shape: "crest",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/",
      logo: "/TikTok_logo.svg",
      shape: "wordmark",
    },
    {
      name: "Amazon",
      href: "https://www.aboutamazon.com/",
      logo: "/Amazon_logo.svg",
      shape: "wordmark",
    },
    {
      name: "JD.com",
      href: "https://www.jd.com/",
      logo: "/JD.com_logo.png",
      shape: "wordmark",
    },
  ].map((item) => ({ ...item, logoSrc: withBase(item.logo) })),
);
</script>
