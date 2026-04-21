<template>
  <nav class="home-page-nav" aria-label="On this page">
    <a
      v-for="item in items"
      :key="item.href"
      class="home-page-nav__link"
      :href="item.href"
      @click.prevent="scrollToSection(item.href)"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
const items = [
  { href: "#about", label: "About" },
  { href: "#selected-impact", label: "Impact" },
  { href: "#selected-publications", label: "Publications" },
  { href: "#education", label: "Education" },
  { href: "#professional-experience", label: "Experience" },
  { href: "#tech-stack", label: "Tech stack" },
  { href: "#let-s-connect", label: "Connect" },
];

function scrollToSection(hash: string): void {
  if (typeof window === "undefined") return;

  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return;

  const navbarHeight = getCssLengthPx("--navbar-height", 60);
  const nav = document.querySelector(".home-page-nav");
  const navHeight = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 56;
  const extraGap = 6;
  const offset = navbarHeight + navHeight + extraGap;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.history.replaceState(null, "", hash);
  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

function getCssLengthPx(variableName: string, fallback: number): number {
  if (typeof window === "undefined") return fallback;

  const raw = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  if (!raw) return fallback;

  if (raw.endsWith("px")) {
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : fallback;
  }

  if (raw.endsWith("rem")) {
    const rem = Number.parseFloat(raw);
    const rootFontSize = Number.parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    if (Number.isFinite(rem) && Number.isFinite(rootFontSize)) {
      return rem * rootFontSize;
    }
  }

  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
}
</script>
