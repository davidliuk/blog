import { education, profile, socialLinks } from "../data/portfolio.js";

/** Site-wide identity derived from the portfolio's single source of truth. */
export const SITE = profile.site;

export const PERSON_ID = `${SITE}/#person`;

export const SITE_DESCRIPTION = profile.description;

/**
 * schema.org Person node. It is emitted inside the homepage `@graph` (without
 * its own `@context`) and referenced by `@id` from article JSON-LD.
 */
export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  alternateName: profile.alternateName,
  url: `${SITE}/`,
  image: `${SITE}${profile.avatar}`,
  jobTitle: profile.role,
  email: profile.email,
  worksFor: {
    "@type": "Organization",
    name: profile.current.company,
    url: profile.current.companyUrl,
  },
  alumniOf: education.map((item) => ({
    "@type": "CollegeOrUniversity",
    name: item.schemaName,
    url: item.schemaUrl,
  })),
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
  sameAs: Object.entries(socialLinks)
    .filter(([name]) => name !== "Email")
    .map(([, href]) => href),
};
