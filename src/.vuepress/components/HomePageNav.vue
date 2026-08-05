<template>
  <nav class="home-page-nav" aria-label="On this page">
    <a
      v-for="item in items"
      :key="item.href"
      class="home-page-nav__link"
      :class="{ 'is-active': activeHref === item.href }"
      :href="item.href"
      @click.prevent="scrollToSection(item.href)"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const items = [
  { href: "#about", label: "Story" },
  { href: "#research-program", label: "Research" },
  { href: "#selected-publications", label: "Papers" },
  { href: "#open-source", label: "Open source" },
  // The page has ten sections; this list had nine. Education was the one you
  // could not jump to.
  { href: "#education", label: "Education" },
  { href: "#professional-experience", label: "Experience" },
  { href: "#award-winning-projects", label: "Projects" },
  { href: "#knowledge-base", label: "Notes" },
  { href: "#tech-stack", label: "Toolkit" },
  { href: "#let-s-connect", label: "Connect" },
];

const activeHref = ref(items[0]?.href ?? "");
let cleanupActiveSectionListeners: (() => void) | null = null;
let cleanupInitialHashAlignment: (() => void) | null = null;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function scrollToSection(hash: string, behavior?: ScrollBehavior): void {
  if (typeof window === "undefined") return;

  // A deliberate navigation takes ownership from the cold-load alignment
  // observer described below.
  if (behavior === undefined) cleanupInitialHashAlignment?.();

  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return;

  const top = target.getBoundingClientRect().top + window.scrollY - getSectionOffset();
  activeHref.value = hash;
  window.history.replaceState(null, "", hash);
  window.scrollTo({
    top: Math.max(0, top),
    behavior: behavior ?? (prefersReducedMotion() ? "auto" : "smooth"),
  });
}

onMounted(() => {
  if (typeof window === "undefined") return;

  // Resolved once. The previous version ran nine `querySelector` calls and read
  // `offsetTop` on each of them inside an unthrottled scroll handler, so every
  // scroll event forced a synchronous layout nine times over — enough to make
  // the page feel like it was catching on something as you scrolled.
  const targets = items
    .map((item) => ({ href: item.href, el: document.querySelector(item.href) }))
    .filter((entry): entry is { href: string; el: HTMLElement } =>
      entry.el instanceof HTMLElement,
    );

  const updateActiveSection = (): void => {
    const probe = window.scrollY + getSectionOffset() + 8;

    let current = items[0]?.href ?? "";
    for (const { href, el } of targets) {
      if (el.getBoundingClientRect().top + window.scrollY <= probe) current = href;
    }

    // Scroll position wins. This used to read
    // `normalizeHash(location.hash) || current`, and since clicking a pill
    // writes the hash via `replaceState`, the first click froze the highlight
    // on that section forever — it stopped following the reader.
    activeHref.value = current;
  };

  let frame = 0;
  const onScroll = (): void => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      updateActiveSection();
    });
  };

  const onHashChange = (): void => {
    const hash = normalizeHash(window.location.hash);
    if (hash) activeHref.value = hash;
    else updateActiveSection();
  };

  // On a cold load with a hash, honour it until the reader scrolls.
  const initialHash = normalizeHash(window.location.hash);
  if (initialHash) {
    activeHref.value = initialHash;
    // Vue renders the portfolio body after the browser's native fragment pass,
    // and its async custom cards continue changing the page height for several
    // frames. A cold load at `/#tech-stack` would otherwise stop thousands of
    // pixels early. Follow those layout changes until the reader interacts.
    void nextTick(() => {
      const content = document.querySelector("#markdown-content");
      if (!(content instanceof HTMLElement)) return;

      let frame = 0;
      let settleTimer = 0;
      const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
      const stopAlignment = (): void => {
        if (frame) window.cancelAnimationFrame(frame);
        if (settleTimer) window.clearTimeout(settleTimer);
        observer.disconnect();
        for (const event of interactionEvents) window.removeEventListener(event, stopAlignment);
        if (cleanupInitialHashAlignment === stopAlignment) cleanupInitialHashAlignment = null;
      };
      const alignToHash = (): void => {
        if (normalizeHash(window.location.hash) !== initialHash) {
          stopAlignment();
          return;
        }
        if (frame) window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          scrollToSection(initialHash, "auto");
        });
      };
      const observer = new ResizeObserver(alignToHash);

      cleanupInitialHashAlignment = stopAlignment;
      observer.observe(content);
      for (const event of interactionEvents) {
        window.addEventListener(event, stopAlignment, { passive: true });
      }
      alignToHash();
      // Registered custom components hydrate after this child component's
      // mounted hook. The final pass catches that one-time expansion; the
      // observer handles any earlier incremental changes without polling.
      settleTimer = window.setTimeout(() => {
        alignToHash();
        window.requestAnimationFrame(stopAlignment);
      }, 1200);
    });
  } else updateActiveSection();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", onHashChange);
  cleanupActiveSectionListeners = () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("hashchange", onHashChange);
  };
});

onBeforeUnmount(() => {
  cleanupActiveSectionListeners?.();
  cleanupInitialHashAlignment?.();
});

function getSectionOffset(): number {
  const navbarHeight = getCssLengthPx("--navbar-height", 60);
  const nav = document.querySelector(".home-page-nav");
  const navHeight =
    nav instanceof HTMLElement && getComputedStyle(nav).position === "sticky"
      ? nav.getBoundingClientRect().height
      : 0;
  return navbarHeight + navHeight + 6;
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

function normalizeHash(hash: string): string {
  return items.some((item) => item.href === hash) ? hash : "";
}
</script>
