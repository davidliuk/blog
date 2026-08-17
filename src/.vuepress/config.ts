import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import viteBundler from "@vuepress/bundler-vite";
import { createLogger } from "vite";
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = import.meta.dirname || getDirname(import.meta.url)
const viteLogger = createLogger();
const viteWarn = viteLogger.warn.bind(viteLogger);

viteLogger.warn = (message, options) => {
  // On a documentation corpus this large, Markdown/Vue transforms are
  // expected to dominate compilation. Preserve all actionable warnings while
  // filtering only Rolldown's relative plugin-timing advisory.
  if (message.includes("[PLUGIN_TIMINGS]")) return;
  viteWarn(message, options);
};

const personStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://davidliuk.github.io/#person",
  name: "David Liu",
  alternateName: "Dawei Liu",
  url: "https://davidliuk.github.io/",
  image: "https://davidliuk.github.io/avatar.jpg",
  jobTitle: "AI Systems Researcher and Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "TikTok",
    url: "https://www.tiktok.com/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Pennsylvania",
      url: "https://www.upenn.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University (China)",
      url: "https://www.neu.edu.cn/",
    },
  ],
  knowsAbout: [
    "Reliable AI agents",
    "Agent skill retrieval",
    "Execution validation and failure recovery",
    "Multimodal AI systems",
    "Distributed systems",
  ],
  sameAs: [
    "https://github.com/davidliuk",
    "https://www.linkedin.com/in/davidliuk/",
    "https://scholar.google.com/citations?user=RzdCL4AAAAAJ&hl=en",
    "https://www.semanticscholar.org/author/Dawei-Liu/50439123",
    "https://openreview.net/profile?id=%7EDawei_Liu6",
    "https://dblp.org/pid/57/1575-5.html",
  ],
});

export default defineUserConfig({
  base: "/",

  head: [
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:title",
        content: "David Liu — Reliable AI Agents, Beyond the Demo",
      },
    ],
    ["meta", { property: "og:url", content: "https://davidliuk.github.io/" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://davidliuk.github.io/og.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://davidliuk.github.io/og.png",
      },
    ],
    ["script", { type: "application/ld+json" }, personStructuredData],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "David Liu",
      description:
        "David Liu builds reliable AI agent infrastructure and maintains structured notes on algorithms, AI systems, computer science, and software engineering.",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "David的博客",
    //   description: "一名涉猎广泛的开发者😊",
    // },
  },

  bundler: viteBundler({
    viteOptions: {
      customLogger: viteLogger,
      build: {
        // With 1,500+ routes, Vite's dependency-preload table becomes a
        // multi-megabyte entry chunk. Route components are already lazy, so
        // let native dynamic imports load their shared dependencies on demand.
        modulePreload: false,
      },
    },
    vuePluginOptions: {},
  }),

  theme,

  shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
});
