import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://davidliuk.github.io",

  author: {
    name: "David Liu",
    url: "https://github.com/davidliuk",
  },

  // iconAssets: "iconfont",

  logo: "/logo-ai-v4.png",

  repo: "davidliuk/blog",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://github.com/davidliuk",
      LinkedIn: "https://www.linkedin.com/in/davidliuk/",
      // The theme only accepts an http(s) URL or an inline `<svg>` string as a
      // custom media icon, so these are inlined to avoid an external dependency.
      "Google Scholar": {
        link: "https://scholar.google.com/citations?user=RzdCL4AAAAAJ&hl=en",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon google-scholar-icon" viewBox="0 0 512 512"><g><path fill="#4285f4" d="M256 411.12L0 202.667 256 0z"/><path fill="#356ac3" d="M256 411.12l256-208.453L256 0z"/><circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333"/><path fill="#76a7fa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/></g></svg>',
      },
      "Semantic Scholar": {
        link: "https://www.semanticscholar.org/author/Dawei-Liu/50439123",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon semantic-scholar-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1857b6"/><g transform="translate(12 12) scale(0.74) translate(-12 -12)"><path fill="#fff" d="M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z"/></g></svg>',
      },
      OpenReview: {
        link: "https://openreview.net/profile?id=%7EDawei_Liu6",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon openreview-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8c1b13"/><path fill="#fff" d="M6 5.75c0-.69.56-1.25 1.25-1.25h6.62L18 8.63v9.62c0 .69-.56 1.25-1.25 1.25h-9.5C6.56 19.5 6 18.94 6 18.25V5.75Zm2 1v10.5h8V9.5h-3V6.75H8Zm1.5 5.25h5v1.5h-5V12Zm0 3h5v1.5h-5V15Z"/></svg>',
      },
      // A lettermark badge rather than a copy of dblp's own logo: the icon row
      // is desaturated at rest, so what has to survive is the four letters.
      DBLP: {
        link: "https://dblp.org/pid/57/1575-5.html",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon dblp-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#12457a"/><text x="12" y="15.6" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="9.2" font-weight="700" letter-spacing="-0.5" fill="#fff">dblp</text></svg>',
      },
      // Needs the scheme: a bare address is treated as a relative path, so the
      // hero's mail icon linked to /davidliu02k@gmail.com on the site root.
      Email: "mailto:davidliu02k@gmail.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "David Liu · AI Systems & Infrastructure",

      displayFooter: true,

      blog: {
        description:
          "AI systems researcher and software engineer building reliable agents and maintaining structured notes on algorithms, AI, computer science, and production engineering.",
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
    },

    icon: {
      // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
      assets: "fontawesome",
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "davidliuk/davidliuk.github.io",
      repoId: "R_kgDOIgJd8g",
      category: "Announcements",
      categoryId: "DIC_kwDOIgJd8s4CY4CF",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    pwa: {
      favicon: "/assets/icon/favicon-v4.png",
      themeColor: "#17352f",
      cacheHTML: false,
      maxSize: 4608,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-touch-icon-180-v4.png",
        statusBarColor: "black",
      },
      manifest: {
        name: "David Liu — AI Systems",
        short_name: "David Liu",
        description:
          "Research and engineering for reliable, resource-efficient tool-using AI agents.",
        theme_color: "#17352f",
        background_color: "#f5f1e8",
        icons: [
          {
            src: "/assets/icon/maskable-512-v4.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/maskable-192-v4.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo-ai-v4.png",
            sizes: "512x512",
            purpose: "any",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-192-v4.png",
            sizes: "192x192",
            purpose: "any",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Research",
            short_name: "Research",
            description: "Explore David Liu's research program and publications.",
            url: "/#research-program",
          },
          {
            name: "Algorithms",
            short_name: "Algorithms",
            description: "Open the algorithm knowledge map.",
            url: "/algo/",
          },
          {
            name: "AI Systems",
            short_name: "AI",
            description: "Open the AI systems knowledge map.",
            url: "/ai/",
          },
          {
            name: "CS Foundations",
            short_name: "CS",
            description: "Open the computer science knowledge map.",
            url: "/cs/",
          },
          {
            name: "Software Engineering",
            short_name: "Engineering",
            description: "Open the software engineering knowledge map.",
            url: "/se/",
          },
          {
            name: "Test Preparation",
            short_name: "Test Prep",
            description: "Open the TOEFL and GRE study system.",
            url: "/test/",
          },
        ],
      },
    },
  },
});
