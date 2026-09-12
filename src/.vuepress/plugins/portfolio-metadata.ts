import type { PluginFunction } from "vuepress/core";

import { profile } from "../data/portfolio.js";

/** Keep the homepage's VuePress metadata on the same interface as its UI and SEO. */
export const portfolioMetadataPlugin = (): PluginFunction => () => ({
  name: "portfolio-metadata",
  extendsPage: (page) => {
    if (page.path !== "/") return;

    const metadata = {
      title: `${profile.name} — AI Systems Researcher & Software Engineer`,
      shortTitle: profile.name,
      description: profile.description,
      avatar: profile.avatar,
      avatarAlt: profile.avatarAlt,
      name: profile.name,
      titles: [profile.role],
      welcome: profile.welcome,
    };

    Object.assign(page.frontmatter, metadata);
    page.title = metadata.title;
    page.data.title = metadata.title;
    page.data.frontmatter = page.frontmatter;
  },
});
