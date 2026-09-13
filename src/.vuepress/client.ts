import { useSSRContext, watchEffect } from "vue";
import { defineClientConfig, onContentUpdated, usePageLang } from "vuepress/client";
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";

/**
 * Site-wide client behaviour. Everything here is additive: the page is
 * complete without JavaScript, and every effect is skipped when the reader has
 * asked for reduced motion.
 */

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Count the hero statistics up from zero the first time they scroll into
 * view. Keeps any prefix/suffix ("+", "%", "K") and the decimals as written.
 */
function attachCountUp(): () => void {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(".vp-portfolio-home .home-mission__signals dt"),
  );
  if (!nodes.length || prefersReducedMotion() || !("IntersectionObserver" in window)) {
    return () => {};
  }

  const parsed = nodes
    .map((el) => {
      const text = el.textContent?.trim() ?? "";
      const match = text.match(/^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
      if (!match) return null;
      const raw = match[2].replace(/,/g, "");
      const decimals = (raw.split(".")[1] ?? "").length;
      const grouped = match[2].includes(",");
      return { el, prefix: match[1], suffix: match[3], value: Number(raw), decimals, grouped, text };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
  if (!parsed.length) return () => {};

  const format = (n: number, decimals: number, grouped: boolean): string =>
    grouped
      ? n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : n.toFixed(decimals);

  let frame = 0;
  const run = (): void => {
    const start = performance.now();
    const duration = 900;
    const tick = (now: number): void => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      for (const { el, prefix, suffix, value, decimals, grouped } of parsed) {
        el.textContent = `${prefix}${format(value * eased, decimals, grouped)}${suffix}`;
      }
      if (t < 1) frame = window.requestAnimationFrame(tick);
      else for (const { el, text } of parsed) el.textContent = text;
    };
    frame = window.requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      run();
    },
    { threshold: 0.4 },
  );
  observer.observe(parsed[0].el.closest(".home-mission__signals") ?? parsed[0].el);

  return () => {
    observer.disconnect();
    if (frame) window.cancelAnimationFrame(frame);
    for (const { el, text } of parsed) el.textContent = text;
  };
}

/**
 * One hidden "Opens in a new tab" hint that every target="_blank" link points
 * at, instead of editing dozens of anchors by hand.
 */
function annotateNewTabLinks(): void {
  let hint = document.getElementById("dl-new-tab-hint");
  if (!hint) {
    hint = document.createElement("span");
    hint.id = "dl-new-tab-hint";
    hint.className = "sr-only";
    hint.textContent = "Opens in a new tab";
    document.body.append(hint);
  }
  for (const link of document.querySelectorAll<HTMLAnchorElement>(
    'a[target="_blank"]:not([aria-describedby])',
  )) {
    link.setAttribute("aria-describedby", "dl-new-tab-hint");
  }
}

/**
 * The theme's back-to-top button always scrolls smoothly; under reduced motion
 * that is a ten-thousand-pixel animation. Capture the click first and jump.
 */
function onBackToTopClick(event: MouseEvent): void {
  const button = (event.target as Element | null)?.closest(".vp-back-to-top-button");
  if (!button || !prefersReducedMotion()) return;
  event.stopPropagation();
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

/**
 * A second, media-scoped theme-color for dark mode. It cannot come from the
 * site `head` config because VuePress dedupes <meta> tags by name.
 */
function ensureDarkThemeColor(): void {
  if (document.querySelector('meta[name="theme-color"][media]')) return;
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.media = "(prefers-color-scheme: dark)";
  meta.content = "#14161a";
  document.head.append(meta);
}

/**
 * Promote the active child route to its top-level navbar item. Theme Hope
 * marks links inside dropdowns, but it does not expose that state on the
 * dropdown trigger itself, so readers otherwise lose their current section.
 */
function syncNavbarRouteState(): void {
  const items = document.querySelectorAll<HTMLElement>(
    "#navbar .vp-nav-links > .vp-nav-item:not(.vp-action)",
  );

  for (const item of items) {
    const directLink = item.querySelector<HTMLAnchorElement>(":scope > .auto-link");
    const dropdownTitle = item.querySelector<HTMLButtonElement>(
      ":scope > .vp-dropdown-wrapper > .vp-dropdown-title",
    );
    const active = Boolean(item.querySelector(".auto-link.route-link-active"));

    item.toggleAttribute("data-route-active", active);
    if (directLink) {
      if (active) directLink.setAttribute("aria-current", "page");
      else directLink.removeAttribute("aria-current");
    }
    if (dropdownTitle) {
      if (active) dropdownTitle.setAttribute("aria-current", "location");
      else dropdownTitle.removeAttribute("aria-current");
    }
  }
}

/** Keep dropdown keyboard state explicit and let Escape reliably close it. */
function attachNavbarInteractions(): () => void {
  const navbar = document.getElementById("navbar");
  if (!navbar) return () => {};

  const syncExpandedState = (): void => {
    for (const wrapper of navbar.querySelectorAll<HTMLElement>(".vp-dropdown-wrapper")) {
      const title = wrapper.querySelector<HTMLButtonElement>(":scope > .vp-dropdown-title");
      title?.setAttribute("aria-expanded", String(wrapper.classList.contains("open")));
    }
  };

  const onKeydown = (event: KeyboardEvent): void => {
    if (event.key !== "Escape") return;
    const wrapper = navbar.querySelector<HTMLElement>(".vp-dropdown-wrapper.open");
    const title = wrapper?.querySelector<HTMLButtonElement>(":scope > .vp-dropdown-title");
    if (!title) return;
    title.click();
    title.focus();
  };

  const observer = new MutationObserver(syncExpandedState);
  observer.observe(navbar, { attributes: true, subtree: true, attributeFilter: ["class"] });
  navbar.addEventListener("keydown", onKeydown);
  syncNavbarRouteState();
  syncExpandedState();

  return () => {
    observer.disconnect();
    navbar.removeEventListener("keydown", onKeydown);
  };
}

export default defineClientConfig({
  layouts: { Layout, NotFound },

  enhance({ router }) {
    if (typeof window === "undefined") return;

    // The theme wraps the router's scrollBehavior so it waits for the page to
    // render; keep that, and fix two things on top of its result:
    //   * `#hash` targets: vue-router positions the element at the very top,
    //     ignoring CSS `scroll-margin-top`, so headings landed under the fixed
    //     navbar and the sticky section rail. Use the element's own margin.
    //   * restored / top-of-page positions: with the theme's global
    //     `scroll-behavior: smooth`, Back from a note animated across the whole
    //     homepage. Those jumps are instant; only hash targets stay smooth.
    const previous = router.options.scrollBehavior;
    router.options.scrollBehavior = async (to, from, saved) => {
      const result = previous ? await previous(to, from, saved) : undefined;
      if (result && typeof result === "object" && "el" in result && typeof result.el === "string") {
        let target: Element | null = null;
        try {
          target = document.querySelector(result.el);
        } catch {
          target = document.getElementById(decodeURIComponent(result.el.slice(1)));
        }
        const margin = target ? Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0 : 0;
        return { ...result, top: margin, behavior: prefersReducedMotion() ? "instant" : "smooth" } as never;
      }
      if (result && typeof result === "object" && "top" in result) {
        return { ...result, behavior: "instant" } as never;
      }
      return result as never;
    };

    let cleanup: Array<() => void> = [];
    let attachedPath = "";
    const detach = (): void => {
      for (const fn of cleanup) fn();
      cleanup = [];
      attachedPath = "";
    };
    // One attachment per page path; hash-only navigations keep the current
    // observers (re-attaching would hide cards the reader has already seen).
    const attach = (path: string): void => {
      if (attachedPath === path) return;
      detach();
      attachedPath = path;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (attachedPath !== path) return;
          cleanup = [attachCountUp(), attachNavbarInteractions()];
          annotateNewTabLinks();
          syncNavbarRouteState();
        });
      });
    };

    router.afterEach((to) => attach(to.path));
    void router.isReady().then(() => {
      attach(router.currentRoute.value.path);
      ensureDarkThemeColor();
      document.addEventListener("click", onBackToTopClick, true);
    });

    router.afterEach(() => {
      window.requestAnimationFrame(syncNavbarRouteState);
    });
  },

  setup() {
    const pageLang = usePageLang();
    const ssrContext = useSSRContext();

    // VuePress keeps page language in route data, but its Vite SSR context
    // defaults to English and hydration can restore that default. Keep both
    // render paths synchronized with the active page.
    watchEffect(() => {
      if (ssrContext) ssrContext.lang = pageLang.value;
      else if (typeof document !== "undefined") document.documentElement.lang = pageLang.value;
    });

    onContentUpdated(() => {
      if (typeof window === "undefined") return;
      annotateNewTabLinks();
    });
  },
});
