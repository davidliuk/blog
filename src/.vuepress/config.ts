import viteBundler from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { createLogger } from "vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import { profile } from "./data/portfolio.js";
import { cleanDescriptionPlugin } from "./plugins/clean-description.js";
import { pageLanguagePlugin } from "./plugins/page-language.js";
import { portfolioMetadataPlugin } from "./plugins/portfolio-metadata.js";
import { SITE_DESCRIPTION } from "./seo/person.js";
import theme from "./theme.js";

const __dirname = import.meta.dirname || getDirname(import.meta.url);
const viteLogger = createLogger();
const viteWarn = viteLogger.warn.bind(viteLogger);

viteLogger.warn = (message, options) => {
  // On a documentation corpus this large, Markdown/Vue transforms are
  // expected to dominate compilation. Preserve all actionable warnings while
  // filtering only Rolldown's relative plugin-timing advisory.
  if (message.includes("[PLUGIN_TIMINGS]")) return;
  viteWarn(message, options);
};

export default defineUserConfig({
  base: "/",

  // Open Graph / Twitter tags and the Person JSON-LD are emitted per page by
  // the theme's SEO plugin (see `plugins.seo` in theme.ts and seo/person.ts);
  // a global copy here would duplicate them on every note page. A dark-mode
  // `theme-color` cannot live here either: VuePress dedupes <meta> tags by
  // name, so a second theme-color entry is always dropped.

  locales: {
    "/": {
      lang: "en-US",
      title: profile.name,
      description: SITE_DESCRIPTION,
    },
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
    portfolioMetadataPlugin(),
    pageLanguagePlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    cleanDescriptionPlugin(),
  ],
});
