import { profile, socialLinks } from "../data/portfolio.js";

const column = (label: string, links: Array<[string, string]>, external = false): string =>
  `<div class="site-footer__col"><span class="site-footer__label">${label}</span>${links
    .map(
      ([text, href]) =>
        `<a href="${href}"${external && !href.startsWith("mailto:") ? ' target="_blank" rel="me noopener noreferrer"' : ""}>${text}</a>`,
    )
    .join("")}</div>`;

/** Theme Hope accepts footer markup, so centralize its data-driven rendering. */
export const footerHtml = [
  '<div class="site-footer">',
  `<div class="site-footer__col site-footer__col--brand"><strong>${profile.name}</strong><p>${profile.role} in ${profile.location}. Research, engineering, and open infrastructure for reliable AI systems.</p></div>`,
  column("On this site", [
    ["Research", "/#research"],
    ["Publications", "/#publications"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Knowledge base", "/#knowledge-base"],
    ["Résumé", "/#resume"],
  ]),
  column("Notes", [
    ["Algorithms", "/algo/"],
    ["AI Systems", "/ai/"],
    ["CS Foundations", "/cs/"],
    ["Software Engineering", "/se/"],
    ["All notes", "/article/"],
  ]),
  column(
    "Elsewhere",
    Object.entries(socialLinks).filter(([name]) => name !== "Semantic Scholar"),
    true,
  ),
  "</div>",
].join("");
