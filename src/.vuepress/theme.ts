import { hopeTheme } from "vuepress-theme-hope";

import { profile } from "./data/portfolio.js";
import { enNavbar } from "./navbar/index.js";
import { SITE, SITE_DESCRIPTION } from "./seo/person.js";
import { enSidebar } from "./sidebar/index.js";
import { footerHtml } from "./theme/footer.js";
import { socialMedia } from "./theme/media.js";
import { pwaOptions } from "./theme/pwa.js";
import { searchOptions } from "./theme/search.js";
import { seoOptions } from "./theme/seo.js";

export default hopeTheme({
  hostname: SITE,

  author: {
    name: profile.name,
    url: `${SITE}/`,
  },

  logo: "/logo-ai-v4-96.png",

  repo: "davidliuk/blog",

  docsDir: "src",

  pageInfo: ["ReadingTime", "Word"],

  blog: {
    avatar: profile.avatar,
    description: SITE_DESCRIPTION,
    articleInfo: ["ReadingTime"],
    medias: socialMedia,
  },

  locales: {
    "/": {
      navbar: enNavbar,

      sidebar: enSidebar,

      footer: footerHtml,

      displayFooter: true,

      copyright: `Copyright © 2026 ${profile.name}`,

      blog: {
        description: SITE_DESCRIPTION,
        intro: "/",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  /**
   * V2 theme options: markdown features live under `markdown`, not `plugins.mdEnhance` / `plugins.markdown*`.
   * @see https://theme-hope.vuejs.press/config/markdown/intro.html
   */
  markdown: {
    gfm: true,
    vPre: true,
    component: true,

    tabs: true,
    codeTabs: true,

    hint: true,

    imgLazyload: true,
    imgSize: true,
    imgMark: true,

    math: {
      type: "katex",
    },

    mermaid: true,

    align: true,
    attrs: true,
    mark: true,
    sub: true,
    sup: true,

    include: true,

    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
  },

  plugins: {
    blog: {
      // Keep route metadata compact. Article bodies are already loaded per
      // route; embedding rendered excerpts (especially highlighted code) in
      // the global route table makes every visitor download unrelated pages.
      excerpt: false,
      // Directory index pages are section landings; keep them out of /article/.
      filter: (page) =>
        page.frontmatter.article !== false &&
        !page.path.endsWith("/") &&
        page.path !== "/404.html",
    },

    slimsearch: searchOptions,

    icon: {
      // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
      assets: "fontawesome",
    },

    // Giscus is not installed on davidliuk/davidliuk.github.io, so the widget
    // rendered a 403 error box on every note page. Re-enable after installing
    // the giscus GitHub app on that repository and regenerating repoId /
    // categoryId from https://giscus.app.
    comment: false,

    seo: seoOptions as never,

    sitemap: {
      changefreq: "monthly",
    },

    pwa: pwaOptions as never,
  },
});
