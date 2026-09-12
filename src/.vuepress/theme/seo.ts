import type { Page } from "vuepress";

import { profile } from "../data/portfolio.js";
import { PERSON_ID, SITE, person } from "../seo/person.js";

const OG_IMAGE = `${SITE}/og.jpg`;
const HOME_OG_TITLE = `${profile.name} — Reliable AI agents, beyond the demo`;

const gitCreatedTime = (page: { data: unknown }): string | null => {
  const git = (page.data as { git?: { createdTime?: number } }).git;
  return git?.createdTime ? new Date(git.createdTime).toISOString() : null;
};

const isNote = (page: Page): boolean =>
  Boolean(page.filePathRelative) &&
  !page.frontmatter.home &&
  page.frontmatter.article !== false &&
  !page.path.endsWith("/");

export const seoOptions = {
  canonical: SITE,
  fallBackImage: OG_IMAGE,
  isArticle: isNote,
  ogp: (ogp: Record<string, string>, page: Page) => {
    const isHome = page.path === "/";
    const title = isHome ? HOME_OG_TITLE : ogp["og:title"];
    const image = ogp["og:image"];
    const published = ogp["article:published_time"] ?? gitCreatedTime(page);

    return {
      ...ogp,
      ...(isHome ? { "og:title": title } : {}),
      ...(image === OG_IMAGE
        ? { "og:image:width": "1200", "og:image:height": "630", "og:image:type": "image/jpeg" }
        : {}),
      "og:image:alt": title,
      "twitter:card": "summary_large_image",
      "twitter:image": image,
      "twitter:image:alt": title,
      ...(published && ogp["og:type"] === "article"
        ? { "article:published_time": published }
        : {}),
    };
  },
  jsonLd: (jsonLd: Record<string, unknown>, page: Page) => {
    if (page.path === "/") {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": `${SITE}/#profile`,
            url: `${SITE}/`,
            name: page.title || profile.name,
            description: page.frontmatter.description,
            mainEntity: { "@id": PERSON_ID },
          },
          person,
        ],
      };
    }

    if (jsonLd["@type"] !== "Article") return jsonLd;
    const published = jsonLd.datePublished ?? gitCreatedTime(page);

    return {
      ...jsonLd,
      mainEntityOfPage: `${SITE}${page.path}`,
      ...(published ? { datePublished: published } : {}),
      author: [{ "@type": "Person", "@id": PERSON_ID, name: profile.name, url: `${SITE}/` }],
    };
  },
};
