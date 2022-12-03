import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "David's Blog",
      description: "a developer of multiple interests",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "David的博客",
      description: "一名涉猎广泛的开发者",
    },
  },

  theme,

  shouldPrefetch: false,
});
