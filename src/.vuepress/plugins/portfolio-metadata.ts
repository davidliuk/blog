import type { PluginFunction } from "vuepress/core";

import { profile } from "../data/portfolio.js";

/** Keep the homepage's VuePress metadata on the same interface as its UI and SEO. */
export const portfolioMetadataPlugin = (): PluginFunction => () => ({
  name: "portfolio-metadata",
  extendsPage: (page) => {
    if (page.path !== "/") return;

    const metadata = {
      title: `${profile.name} — ${profile.role.replace(" · ", " & ")}`,
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

    // The SEO plugin has already filled in an excerpt and flagged it
    // `autoDesc`, so the clean-description plugin replaced this description
    // with the first Markdown text ("Research focus Built for the hard
    // cases…"). Clearing the flag keeps the written one for search and
    // link previews.
    (page.data as { autoDesc?: boolean }).autoDesc = false;

    // The theme renders `<page title> | <site title>`, which repeated the name
    // here. A head title entry wins, as on the 404 page.
    const head = Array.isArray(page.frontmatter.head) ? page.frontmatter.head : [];
    head.push(["title", {}, metadata.title]);
    page.frontmatter.head = head;

    page.data.frontmatter = page.frontmatter;
  },
});
