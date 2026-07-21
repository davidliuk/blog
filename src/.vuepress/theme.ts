import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://davidliuk.github.io",

  author: {
    name: "David Liu",
    url: "https://github.com/davidliuk",
  },

  // iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "davidliuk/davidliuk.github.io",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://github.com/davidliuk",
      LinkedIn: "https://www.linkedin.com/in/davidliuk/",
      // The theme only accepts an http(s) URL or an inline `<svg>` string as a
      // custom media icon, so these are inlined to avoid an external dependency.
      "Google Scholar": {
        link: "https://scholar.google.com/citations?user=lrHQxmkAAAAJ&hl=en",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon google-scholar-icon" viewBox="0 0 512 512"><g><path fill="#4285f4" d="M256 411.12L0 202.667 256 0z"/><path fill="#356ac3" d="M256 411.12l256-208.453L256 0z"/><circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333"/><path fill="#76a7fa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/></g></svg>',
      },
      "Semantic Scholar": {
        link: "https://www.semanticscholar.org/author/Dawei-Liu/50439123",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon semantic-scholar-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1857b6"/><g transform="translate(12 12) scale(0.74) translate(-12 -12)"><path fill="#fff" d="M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z"/></g></svg>',
      },
      Email: "davidliu02k@gmail.com",
      // Gitee: "https://gitee.com/da-wei-liu",
      // BiliBili: "https://example.com",
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "David's Blog",

      displayFooter: true,

      blog: {
        description:
          "SWE@TikTok, Research Intern@Lehigh LAIR, dr claw (OpenLAIR), MSE CIS@UPenn 26', ex-Amazon, ex-JD.com",
        intro: "/me",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: " David's Blog",

    //   displayFooter: true,

    //   blog: {
    //     description: "CS@UPenn 26', SDE Intern@TikTok, Amazon, JD.com",
    //     intro: "/zh/intro.html",
    //   },

    //   // page meta
    //   metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    //   },
    // },
  },

  encrypt: {
    config: {
      "/apply/program": ["dawei.app"],
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
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

    chartjs: true,
    echarts: true,
    mermaid: true,
    markmap: true,
    plantuml: true,

    align: true,
    attrs: true,
    mark: true,
    sub: true,
    sup: true,

    include: true,

    demo: true,
    playground: {
      presets: ["ts", "vue"],
    },
    vuePlayground: true,

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
      // autoExcerpt: true,
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
      favicon: "/logo.png",
      cacheHTML: false,
      maxSize: 4608,
      // cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/196.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/196.png",
            sizes: "196x196",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
