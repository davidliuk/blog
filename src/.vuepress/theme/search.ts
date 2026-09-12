import type { Page } from "vuepress";

export const searchOptions = {
  indexContent: false,
  suggestion: true,
  queryHistoryCount: 5,
  resultHistoryCount: 5,
  customFields: [
    {
      getter: (page: Page) => page.frontmatter.description as string | undefined,
      formatter: "Summary: $content",
    },
    {
      getter: (page: Page) => page.frontmatter.category as string | string[] | undefined,
      formatter: "Category: $content",
    },
    {
      getter: (page: Page) => page.frontmatter.tag as string | string[] | undefined,
      formatter: "Tag: $content",
    },
  ],
  indexOptions: {
    tokenize: (text: string, fieldName?: string): string[] => {
      if (fieldName === "id") return [text];
      const segmenter = new Intl.Segmenter(["zh-CN", "en-US"], { granularity: "word" });

      return [...segmenter.segment(text)]
        .filter(({ isWordLike, segment }) => isWordLike || /\p{Script=Han}/u.test(segment))
        .map(({ segment }) => segment.trim())
        .filter(Boolean);
    },
  },
};
