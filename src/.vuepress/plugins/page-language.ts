import type { PluginFunction } from "vuepress/core";

const HAN_CHARACTER = /\p{Script=Han}/gu;
const LATIN_CHARACTER = /[A-Za-z]/g;

/**
 * Mark predominantly Chinese notes for browsers, screen readers and search.
 * An explicit frontmatter `lang` always wins; mixed and English pages retain
 * the site's `en-US` default.
 */
export const pageLanguagePlugin = (): PluginFunction => () => ({
  name: "page-language",
  extendsPage: (page) => {
    if (typeof page.frontmatter.lang === "string") return;

    const content = page.content
      .replace(/^---[\s\S]*?---/u, "")
      .replace(/```[\s\S]*?```/gu, "");
    const hanCount = content.match(HAN_CHARACTER)?.length ?? 0;
    const latinCount = content.match(LATIN_CHARACTER)?.length ?? 0;

    if (hanCount > 100 && hanCount > latinCount * 0.35) {
      page.frontmatter.lang = "zh-CN";
      page.lang = "zh-CN";
      page.data.lang = "zh-CN";
    }
  },
});
