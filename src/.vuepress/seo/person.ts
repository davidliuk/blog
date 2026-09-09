/**
 * Site-wide identity used by the SEO hooks in theme.ts (JSON-LD, canonical
 * URLs, Open Graph fallbacks) and by config.ts / the PWA manifest.
 *
 * Every claim here must be traceable to the résumé; do not add numbers,
 * venues or dates from memory.
 */
export const SITE = "https://davidliuk.github.io";

export const PERSON_ID = `${SITE}/#person`;

export const SITE_DESCRIPTION =
  "AI systems researcher and software engineer at TikTok, building reliable infrastructure for tool-using AI agents. Structured notes on algorithms, AI systems, and computer science.";

/**
 * schema.org Person node. It is emitted inside the homepage `@graph` (without
 * its own `@context`) and referenced by `@id` from article JSON-LD.
 */
export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "David Liu",
  alternateName: "Dawei Liu",
  url: `${SITE}/`,
  image: `${SITE}/avatar.jpg`,
  jobTitle: "AI Systems Researcher · Software Engineer",
  email: "mailto:davidliu02k@gmail.com",
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
  award: [
    "Winner, Apple Swift Student Challenge 2026",
    "National Scholarship for Undergraduate Students (Ministry of Education, China), 2020–2021",
    "Hagan International Scholarship, University of Pennsylvania",
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
};
