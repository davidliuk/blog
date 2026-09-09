import type { Page, Plugin } from "vuepress";

/** Target length of a generated meta description, before the ellipsis. */
const MAX_LENGTH = 160;

/**
 * Reduce raw Markdown to a single line of plain prose.
 *
 * The SEO plugin derives descriptions from the rendered HTML, which leaks
 * heading text, code, KaTeX markup and list bullets into the snippet. This
 * works from the source instead and drops everything that is not sentence
 * text.
 */
export const markdownToPlainText = (markdown: string): string =>
  markdown
    // frontmatter block
    .replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/u, "")
    // HTML comments (including <!-- more -->)
    .replace(/<!--[\s\S]*?-->/gu, " ")
    // fenced code (``` / ~~~), including mermaid and code-import fences
    .replace(/^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gmu, " ")
    // display and inline math
    .replace(/\$\$[\s\S]*?\$\$/gu, " ")
    .replace(/(?<!\\)\$[^$\n]+?(?<!\\)\$/gu, " ")
    // custom container fences (::: tip / :::) and [[toc]]
    .replace(/^[ \t]*:{3,}.*$/gmu, " ")
    .replace(/\[\[toc\]\]/giu, " ")
    // heading lines
    .replace(/^[ \t]*#{1,6}[ \t].*$/gmu, " ")
    // images, then links (keep the link text)
    .replace(/!\[[^\]]*\]\([^)]*\)/gu, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/gu, "$1")
    // HTML tags
    .replace(/<\/?[a-zA-Z][^>]*>/gu, " ")
    // table separator rows, then remaining pipes
    .replace(/^[ \t]*\|?[ \t:|-]+\|?[ \t]*$/gmu, " ")
    .replace(/\|/gu, " ")
    // list markers, blockquote markers, horizontal rules
    .replace(/^[ \t]*(?:[-*+]|\d+[.)])[ \t]+(?:\[[ xX]\][ \t]+)?/gmu, "")
    .replace(/^[ \t]*>[ \t]?/gmu, "")
    .replace(/^[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/gmu, " ")
    // inline code, emphasis, strikethrough, mark
    .replace(/`([^`\n]*)`/gu, "$1")
    .replace(/(\*\*|__)(?=\S)([\s\S]+?)(?<=\S)\1/gu, "$2")
    .replace(/(?<![\w*])(\*|_)(?=\S)([^*_\n]+?)(?<=\S)\1(?![\w*])/gu, "$2")
    .replace(/~~(?=\S)([\s\S]+?)(?<=\S)~~/gu, "$1")
    .replace(/==(?=\S)([\s\S]+?)(?<=\S)==/gu, "$1")
    // Markdown backslash escapes (\$9.50, \*, \_)
    .replace(/\\([\\`*_{}[\]()#+\-.!$~|<>])/gu, "$1")
    // common entities and whitespace
    .replace(/&nbsp;/gu, " ")
    .replace(/&amp;/gu, "&")
    .replace(/\s+/gu, " ")
    .trim();

/** Cut to MAX_LENGTH, preferring a word boundary for spaced text, and add an ellipsis. */
export const truncateDescription = (text: string): string => {
  if (text.length <= MAX_LENGTH) return text;

  let cut = text.slice(0, MAX_LENGTH);
  const lastSpace = cut.lastIndexOf(" ");

  // Only snap to a word boundary when it does not cost too much text (CJK
  // prose has no spaces and is cut hard).
  if (lastSpace > MAX_LENGTH - 24) cut = cut.slice(0, lastSpace);

  return `${cut.replace(/[\s,;:.!?，。；：、]+$/u, "")}…`;
};

/**
 * Two small page fixes:
 *
 * 1. Replace auto-generated descriptions (or fill in missing ones) with a
 *    clean plain-text excerpt of the Markdown source.
 * 2. Give the generated 404 page a real title and keep it out of search
 *    indexes.
 *
 * The theme's SEO plugin runs before user plugins, so when it has already
 * produced a description it marks the page with `data.autoDesc`, which is the
 * signal used here to know the text is safe to replace.
 */
export const cleanDescriptionPlugin = (): Plugin => ({
  name: "dl-clean-description",

  extendsPage: (page: Page): void => {
    if (page.path === "/404.html") {
      page.title = "Page not found";

      const head = Array.isArray(page.frontmatter.head) ? page.frontmatter.head : [];

      head.push(["meta", { name: "robots", content: "noindex" }]);
      // `page.title` is not applied to the generated 404 route's <title>;
      // a head entry wins (title tags are unique in VuePress head merging).
      head.push(["title", {}, "Page not found | David Liu"]);
      page.frontmatter.head = head;

      return;
    }

    const { description } = page.frontmatter;
    const isAuto = (page.data as { autoDesc?: boolean }).autoDesc === true;

    if (typeof description === "string" && description.trim() && !isAuto) return;

    const text = markdownToPlainText(page.content);

    if (!text) return;

    page.frontmatter.description = truncateDescription(text);
    (page.data as { autoDesc?: boolean }).autoDesc = true;
  },
});
