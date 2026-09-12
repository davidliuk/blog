import type { Page } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import { profile, socialLinks } from "./data/portfolio.js";
import { enNavbar } from "./navbar/index.js";
import { PERSON_ID, SITE, SITE_DESCRIPTION, person } from "./seo/person.js";
import { enSidebar } from "./sidebar/index.js";

const OG_IMAGE = `${SITE}/og.jpg`;
const HOME_OG_TITLE = "David Liu — Reliable AI agents, beyond the demo";

/** ISO timestamp of the page's first commit, when the git plugin has recorded one. */
const gitCreatedTime = (page: { data: unknown }): string | null => {
  const git = (page.data as { git?: { createdTime?: number } }).git;

  return git?.createdTime ? new Date(git.createdTime).toISOString() : null;
};

/** Directory index pages (README.md → /algo/) are section landings, not notes. */
const isNote = (page: Page): boolean =>
  Boolean(page.filePathRelative) &&
  !page.frontmatter.home &&
  page.frontmatter.article !== false &&
  !page.path.endsWith("/");

// Styled by `.site-footer*` rules in styles/index.scss.
const footerColumn = (label: string, links: Array<[string, string]>, external = false): string =>
  `<div class="site-footer__col"><span class="site-footer__label">${label}</span>${links
    .map(
      ([text, href]) =>
        `<a href="${href}"${external && !href.startsWith("mailto:") ? ' target="_blank" rel="me noopener noreferrer"' : ""}>${text}</a>`,
    )
    .join("")}</div>`;

const FOOTER_HTML = [
  '<div class="site-footer">',
  `<div class="site-footer__col site-footer__col--brand"><strong>${profile.name}</strong><p>${profile.role} in ${profile.location}. Reliable infrastructure for tool-using AI agents.</p></div>`,
  footerColumn("On this site", [
    ["Research", "/#research"],
    ["Publications", "/#publications"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Knowledge base", "/#knowledge-base"],
    ["Résumé", "/#resume"],
  ]),
  footerColumn("Notes", [
    ["Algorithms", "/algo/"],
    ["AI Systems", "/ai/"],
    ["CS Foundations", "/cs/"],
    ["Software Engineering", "/se/"],
    ["All notes", "/article/"],
  ]),
  footerColumn(
    "Elsewhere",
    Object.entries(socialLinks).filter(([name]) => name !== "Semantic Scholar"),
    true,
  ),
  "</div>",
].join("");

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
    medias: {
      GitHub: socialLinks.GitHub,
      LinkedIn: socialLinks.LinkedIn,
      // The theme only accepts an http(s) URL or an inline `<svg>` string as a
      // custom media icon, so these are inlined to avoid an external dependency.
      "Google Scholar": {
        link: socialLinks["Google Scholar"],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon google-scholar-icon" viewBox="0 0 512 512"><g><path fill="#4285f4" d="M256 411.12L0 202.667 256 0z"/><path fill="#356ac3" d="M256 411.12l256-208.453L256 0z"/><circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333"/><path fill="#76a7fa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/></g></svg>',
      },
      "Semantic Scholar": {
        link: socialLinks["Semantic Scholar"],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon semantic-scholar-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1857b6"/><g transform="translate(12 12) scale(0.74) translate(-12 -12)"><path fill="#fff" d="M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z"/></g></svg>',
      },
      OpenReview: {
        link: socialLinks.OpenReview,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon openreview-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8c1b13"/><path fill="#fff" d="M6 5.75c0-.69.56-1.25 1.25-1.25h6.62L18 8.63v9.62c0 .69-.56 1.25-1.25 1.25h-9.5C6.56 19.5 6 18.94 6 18.25V5.75Zm2 1v10.5h8V9.5h-3V6.75H8Zm1.5 5.25h5v1.5h-5V12Zm0 3h5v1.5h-5V15Z"/></svg>',
      },
      // A lettermark badge rather than a copy of dblp's own logo: the icon row
      // is desaturated at rest, so what has to survive is the four letters.
      DBLP: {
        link: socialLinks.DBLP,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon dblp-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#12457a"/><text x="12" y="15.6" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="9.2" font-weight="700" letter-spacing="-0.5" fill="#fff">dblp</text></svg>',
      },
      // Needs the scheme: a bare address is treated as a relative path, so the
      // hero's mail icon linked to /davidliu02k@gmail.com on the site root.
      Email: socialLinks.Email,
    },
  },

  locales: {
    "/": {
      navbar: enNavbar,

      sidebar: enSidebar,

      footer: FOOTER_HTML,

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

    slimsearch: {
      // Index titles, headings and compact metadata rather than duplicating
      // the complete 120k-line corpus into a global worker payload.
      indexContent: false,
      suggestion: true,
      queryHistoryCount: 5,
      resultHistoryCount: 5,
      customFields: [
        {
          getter: (page) => page.frontmatter.description as string | undefined,
          formatter: "Summary: $content",
        },
        {
          getter: (page) => page.frontmatter.category as string | string[] | undefined,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | string[] | undefined,
          formatter: "Tag: $content",
        },
      ],
      indexOptions: {
        tokenize: (text, fieldName) => {
          if (fieldName === "id") return [text];
          const segmenter = new Intl.Segmenter(["zh-CN", "en-US"], {
            granularity: "word",
          });

          return [...segmenter.segment(text)]
            .filter(({ isWordLike, segment }) => isWordLike || /\p{Script=Han}/u.test(segment))
            .map(({ segment }) => segment.trim())
            .filter(Boolean);
        },
      },
    },

    icon: {
      // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
      assets: "fontawesome",
    },

    // Giscus is not installed on davidliuk/davidliuk.github.io, so the widget
    // rendered a 403 error box on every note page. Re-enable after installing
    // the giscus GitHub app on that repository and regenerating repoId /
    // categoryId from https://giscus.app.
    comment: false,

    seo: {
      canonical: SITE,
      fallBackImage: OG_IMAGE,
      isArticle: isNote,
      ogp: (ogp, page) => {
        const isHome = page.path === "/";
        const title = isHome ? HOME_OG_TITLE : ogp["og:title"];
        const image = ogp["og:image"];
        // A frontmatter `date` (already in ogp) wins; git fills the gap.
        const published = ogp["article:published_time"] ?? gitCreatedTime(page);

        return {
          ...ogp,
          ...(isHome ? { "og:title": title } : {}),
          ...(image === OG_IMAGE
            ? {
                "og:image:width": "1200",
                "og:image:height": "630",
                "og:image:type": "image/jpeg",
              }
            : {}),
          "og:image:alt": title,
          "twitter:card": "summary_large_image",
          "twitter:image": image,
          "twitter:image:alt": title,
          ...(published && ogp["og:type"] === "article"
            ? { "article:published_time": published }
            : {}),
        } as typeof ogp;
      },
      jsonLd: (jsonLd, page) => {
        if (page.path === "/") {
          return {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfilePage",
                "@id": `${SITE}/#profile`,
                url: `${SITE}/`,
                name: page.title || "David Liu",
                description: page.frontmatter.description,
                mainEntity: { "@id": PERSON_ID },
              },
              person,
            ],
          } as unknown as typeof jsonLd;
        }

        if (jsonLd["@type"] !== "Article") return jsonLd;

        const published = jsonLd.datePublished ?? gitCreatedTime(page);

        return {
          ...jsonLd,
          mainEntityOfPage: `${SITE}${page.path}`,
          ...(published ? { datePublished: published } : {}),
          author: [
            { "@type": "Person", "@id": PERSON_ID, name: profile.name, url: `${SITE}/` },
          ],
        } as typeof jsonLd;
      },
    },

    sitemap: {
      changefreq: "monthly",
    },

    pwa: {
      favicon: "/assets/icon/favicon-v4.png",
      themeColor: "#17352f",
      cacheHTML: false,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-touch-icon-180-v4.png",
        statusBarColor: "black",
      },
      generateSWConfig: {
        // Precache only the shell; note chunks are cached on demand (runtimeCaching).
        globPatterns: [
          "index.html",
          "404.html",
          "manifest.webmanifest",
          "assets/app-*.js",
          "assets/framework-*.js",
          "assets/style-*.css",
          "assets/icon/*.png",
        ],
        runtimeCaching: [
          {
            urlPattern: /\/assets\/.*\.(?:js|css)$/u,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "dl-assets",
              expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|woff2?)$/u,
            handler: "CacheFirst",
            options: {
              cacheName: "dl-media",
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "dl-pages",
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 60 },
            },
          },
        ],
      },
      manifest: {
        name: `${profile.name} — Reliable AI agents`,
        short_name: profile.name,
        description: SITE_DESCRIPTION,
        theme_color: "#17352f",
        background_color: "#f5f4f0",
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
            url: "/#research",
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
