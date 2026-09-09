<template>
  <nav
    ref="navElement"
    class="home-page-nav"
    aria-label="On this page"
    :data-scroll-end="scrollEnd ? 'true' : 'false'"
  >
    <a
      v-for="item in items"
      :key="item.href"
      class="home-page-nav__link"
      :class="{ 'is-active': activeHref === item.href }"
      :aria-current="activeHref === item.href ? 'location' : undefined"
      :href="item.href"
      @click.prevent="onLinkClick(item.href)"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

interface NavItem {
  href: string;
  label: string;
}

interface Section {
  href: string;
  navHref: string;
}

interface Target extends Section {
  el: HTMLElement;
  /** `scroll-margin-top` of the heading, in px; the one source of truth for offsets. */
  offset: number;
}

const items: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#updates", label: "Updates" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#knowledge-base", label: "Knowledge Base" },
  { href: "#resume", label: "Résumé" },
  { href: "#contact", label: "Contact" },
];

// Every section hash stays addressable; the rail groups a few of them under
// one pill (open source under publications, education under experience,
// tech stack under the knowledge base).
const sections: Section[] = [
  { href: "#about", navHref: "#about" },
  { href: "#updates", navHref: "#updates" },
  { href: "#research", navHref: "#research" },
  { href: "#publications", navHref: "#publications" },
  { href: "#open-source", navHref: "#publications" },
  { href: "#education", navHref: "#experience" },
  { href: "#experience", navHref: "#experience" },
  { href: "#projects", navHref: "#projects" },
  { href: "#knowledge-base", navHref: "#knowledge-base" },
  { href: "#tech-stack", navHref: "#knowledge-base" },
  { href: "#resume", navHref: "#resume" },
  { href: "#contact", navHref: "#contact" },
];

const activeHref = ref(items[0].href);
// True when the rail is scrolled to (or has no) trailing overflow, so CSS can
// fade the right edge only while more pills are hidden.
const scrollEnd = ref(true);
const navElement = ref<HTMLElement | null>(null);
let cleanup: (() => void) | null = null;

watch(activeHref, () => {
  void nextTick(ensureActiveLinkVisible);
});

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function onLinkClick(hash: string): void {
  if (typeof window === "undefined") return;

  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  activeHref.value = getNavHref(hash);
  // `scroll-margin-top` on the heading (set in index.scss) already accounts for
  // the fixed navbar and the sticky rail, so no offset is computed here.
  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", hash);
  focusTarget(target);
}

function focusTarget(target: HTMLElement): void {
  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
    target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
  }
  target.focus({ preventScroll: true });
}

onMounted(() => {
  if (typeof window === "undefined") return;

  const nav = navElement.value;

  // Resolve the section elements once; reading them inside the scroll handler
  // forced layout on every event and made scrolling feel like it was catching.
  const targets: Target[] = sections
    .map((section) => ({ ...section, el: document.querySelector<HTMLElement>(section.href), offset: 0 }))
    .filter((entry): entry is Target => entry.el instanceof HTMLElement);

  const measureOffsets = (): void => {
    for (const target of targets) {
      target.offset = Number.parseFloat(getComputedStyle(target.el).scrollMarginTop || "0") || 0;
    }
  };

  const updateActiveSection = (): void => {
    let current = items[0].href;
    for (const { navHref, el, offset } of targets) {
      if (el.getBoundingClientRect().top <= offset + 8) current = navHref;
    }
    // At the very bottom the last section is the reader's section even when it
    // is shorter than the viewport and its heading never reaches the probe.
    const last = targets[targets.length - 1];
    if (last && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = last.navHref;
    }
    // Scroll position wins over the hash: clicking a pill writes the hash via
    // `replaceState`, and honouring it here froze the highlight on that pill.
    activeHref.value = current;
  };

  const updateScrollEnd = (): void => {
    if (!nav) return;
    scrollEnd.value = nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 1;
  };

  let frame = 0;
  const onScroll = (): void => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      updateActiveSection();
    });
  };

  const onResize = (): void => {
    measureOffsets();
    updateActiveSection();
    updateScrollEnd();
  };

  const onHashChange = (): void => {
    const hash = normalizeHash(window.location.hash);
    if (hash) activeHref.value = getNavHref(hash);
    else updateActiveSection();
  };

  measureOffsets();
  const initialHash = normalizeHash(window.location.hash);
  if (initialHash) activeHref.value = getNavHref(initialHash);
  else updateActiveSection();
  updateScrollEnd();
  void nextTick(ensureActiveLinkVisible);

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("hashchange", onHashChange);
  nav?.addEventListener("scroll", updateScrollEnd, { passive: true });
  // Web fonts change the rail's intrinsic width after first paint.
  document.fonts?.ready.then(updateScrollEnd).catch(() => {});

  cleanup = () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("hashchange", onHashChange);
    nav?.removeEventListener("scroll", updateScrollEnd);
  };
});

onBeforeUnmount(() => {
  cleanup?.();
  cleanup = null;
});

function normalizeHash(hash: string): string {
  return sections.some((section) => section.href === hash) ? hash : "";
}

function getNavHref(hash: string): string {
  return sections.find((section) => section.href === hash)?.navHref ?? items[0].href;
}

function ensureActiveLinkVisible(): void {
  const nav = navElement.value;
  if (!nav) return;

  const active = Array.from(nav.querySelectorAll<HTMLElement>(".home-page-nav__link")).find(
    (link) => link.getAttribute("href") === activeHref.value,
  );
  if (!active) return;

  const padding = 12;
  const visibleLeft = nav.scrollLeft + padding;
  const visibleRight = nav.scrollLeft + nav.clientWidth - padding;
  const itemLeft = active.offsetLeft;
  const itemRight = itemLeft + active.offsetWidth;

  if (itemLeft < visibleLeft) nav.scrollLeft = Math.max(0, itemLeft - padding);
  else if (itemRight > visibleRight) nav.scrollLeft = itemRight - nav.clientWidth + padding;
}
</script>
