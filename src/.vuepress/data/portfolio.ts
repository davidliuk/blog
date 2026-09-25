export interface Affiliation {
  name: string;
  href: string;
  logo: string;
  shape: "crest" | "wordmark";
  width: number;
  height: number;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface OpenSourceProject {
  id: string;
  title: string;
  role: string;
  date: string;
  note: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  paper: string;
  github: string;
  website?: string;
}

export interface EducationItem {
  /** Card eyebrow, e.g. "Graduate". */
  level: string;
  school: string;
  schemaName: string;
  schemaUrl: string;
  abbr: string;
  degree: string;
  major: string;
  location: string;
  time: string;
  logo: string;
  gpa: string;
  gpaNote?: string;
  rank?: string;
  honors: Array<{
    text: string;
    kind?: "scholarship" | "annual" | "honor";
    note?: string;
  }>;
}

export interface ExperienceItem {
  company: string;
  role: string;
  team: string;
  location: string;
  time: string;
  logo: string;
  summary: string;
  focus: string[];
  highlights?: string[];
  stints?: Array<{
    role: string;
    time: string;
    highlights: string[];
  }>;
}

export interface GlanceItem {
  label: string;
  text: string;
  meta: string;
  href: string;
  /** Opens in a new tab; the hero brief links in-page by default. */
  external?: boolean;
}

export interface UpdateItem {
  date: string;
  iso: string;
  tag: string;
  html: string;
  highlight?: boolean;
}

export const profile = {
  site: "https://davidliuk.github.io",
  name: "David Liu",
  alternateName: "Dawei Liu",
  welcome: "Hello, I'm",
  role: "AI Systems Researcher & Software Engineer",
  headline: "Reliable AI systems,",
  headlineEmphasis: "from research to real use.",
  // Meta description, link previews and the PWA manifest; keep it under ~160
  // characters so search results do not truncate it.
  description:
    "AI systems researcher and software engineer at ByteDance. Publishes as Dawei Liu on reliable agents, skill retrieval, evaluation, and AI infrastructure.",
  introduction:
    "I study how tool-using AI systems retrieve the right capabilities, execute reliably, and recover from failure—then build the harnesses, interfaces, and infrastructure that put those ideas to work.",
  location: "Seattle, Washington",
  locationShort: "Seattle, WA",
  avatar: "/avatar.webp",
  avatarAlt: "Portrait of David Liu",
  resume: "/resume/david-liu-resume.pdf",
  email: "mailto:davidliu02k@gmail.com",
  current: {
    company: "ByteDance",
    companyUrl: "https://www.bytedance.com/",
    role: "Software Engineer",
    team: "Commerce Ads",
    since: "Jun 2026",
  },
  research: {
    organization: "OpenLAIR",
    organizationUrl: "https://github.com/OpenLAIR",
    advisor: "Prof. Lichao Sun",
    focus: "Reliable agents, evaluation, and open research infrastructure",
  },
  latest: {
    label: "Dr. Claw: an AI scientist workspace",
    meta: "EMNLP 2026 System Demonstrations · Sep 2026",
    href: "#paper-dr-claw",
  },
} as const;

export const socialLinks = {
  GitHub: "https://github.com/davidliuk",
  LinkedIn: "https://www.linkedin.com/in/davidliuk/",
  "Google Scholar": "https://scholar.google.com/citations?user=RzdCL4AAAAAJ&hl=en",
  "Semantic Scholar": "https://www.semanticscholar.org/author/Dawei-Liu/50439123",
  OpenReview: "https://openreview.net/profile?id=%7EDawei_Liu6",
  DBLP: "https://dblp.org/pid/57/1575-5.html",
  Email: profile.email,
} as const;

export const affiliations: Affiliation[] = [
  {
    name: "University of Pennsylvania",
    href: "https://www.cis.upenn.edu/",
    logo: "/UPenn_logo.svg",
    shape: "crest",
    width: 30,
    height: 26,
  },
  {
    name: "Northeastern University",
    href: "https://neu.edu.cn/",
    logo: "/NEU_logo.svg",
    shape: "crest",
    width: 26,
    height: 26,
  },
  {
    name: "TikTok",
    href: profile.current.companyUrl,
    logo: "/TikTok_logo.svg",
    shape: "wordmark",
    width: 80,
    height: 20,
  },
  {
    name: "Amazon",
    href: "https://www.aboutamazon.com/",
    logo: "/Amazon_logo.svg",
    shape: "wordmark",
    width: 66,
    height: 20,
  },
  {
    name: "JD.com",
    href: "https://www.jd.com/",
    logo: "/JD.com_logo.png",
    shape: "wordmark",
    width: 44,
    height: 20,
  },
];

export const atAGlance: GlanceItem[] = [
  {
    label: "Now",
    text: `${profile.current.role} at ${profile.current.company}`,
    meta: `${profile.current.team} · ${profile.locationShort} · since ${profile.current.since}`,
    href: "#experience",
  },
  {
    label: "Research",
    text: profile.research.focus,
    meta: `${profile.research.organization} · advised by ${profile.research.advisor}`,
    // In-page like its neighbours; the About lead links OpenLAIR itself.
    href: "#research",
  },
  {
    label: "Latest",
    text: profile.latest.label,
    meta: profile.latest.meta,
    href: profile.latest.href,
  },
];

export const updates: UpdateItem[] = [
  {
    date: "Sep 2026",
    iso: "2026-09",
    tag: "Preprint",
    highlight: true,
    html: 'The <a href="https://arxiv.org/abs/2609.00365" target="_blank" rel="noopener">Dr. Claw</a> system paper, accepted to EMNLP 2026 System Demonstrations, is now on arXiv.',
  },
  {
    date: "Aug 2026",
    iso: "2026-08",
    tag: "Paper",
    highlight: true,
    html: "<strong>Graph-of-Skills</strong> accepted to the EMNLP 2026 Main Conference, after an earlier poster at the ACM CAIS 2026 Workshop AgentSkills.",
  },
  {
    date: "Jul 2026",
    iso: "2026-07",
    tag: "Paper",
    html: '<strong>COMFYCLAW</strong> accepted to the ECCV 2026 Workshop MUCG (<a href="https://arxiv.org/abs/2607.01709" target="_blank" rel="noopener">arXiv:2607.01709</a>).',
  },
  {
    date: "Jul 2026",
    iso: "2026-07",
    tag: "Benchmark",
    html: 'Contributed to <a href="https://github.com/zli12321/LHTB" target="_blank" rel="noopener">Long-Horizon Terminal-Bench</a>, a 46-task benchmark for long-running terminal agents released with the LAIR community.',
  },
  {
    date: "Jun 2026",
    iso: "2026-06",
    tag: "Career",
    highlight: true,
    html: `Joined <strong>${profile.current.company}</strong> full-time as a ${profile.current.role} on ${profile.current.team} in ${profile.locationShort.split(",")[0]}.`,
  },
  {
    date: "May 2026",
    iso: "2026-05",
    tag: "Degree",
    html: "Graduated from the <strong>University of Pennsylvania</strong> with an M.S.E. in Computer and Information Science.",
  },
  {
    date: "Apr 2026",
    iso: "2026-04",
    tag: "Preprint",
    html: '<strong>Graph-of-Skills</strong> preprint released (<a href="https://arxiv.org/abs/2604.05333" target="_blank" rel="noopener">arXiv:2604.05333</a>).',
  },
  {
    date: "Mar 2026",
    iso: "2026-03",
    tag: "Paper",
    html: "<strong>A Cookbook of 3D Vision</strong> accepted to the CVPR 2026 Workshop OpenSUN3D; <strong>Multimodal Video Generation Models with Audio</strong> accepted to the ACM MM 2026 Workshop JAV-CG.",
  },
  {
    date: "2026",
    iso: "2026",
    tag: "Award",
    highlight: true,
    html: "Named one of 350 <strong>Apple Swift Student Challenge 2026</strong> winners, from 37 countries and regions, for Aura Chef.",
  },
  {
    date: "2026",
    iso: "2026",
    tag: "Service",
    html: "Reviewed two submissions for the <strong>ACM CAIS 2026 Workshop AgentSkills</strong>.",
  },
  {
    date: "Jan 2023",
    iso: "2023-01",
    tag: "Paper",
    html: "<strong>TIMEDB</strong> published in <em>Nucleic Acids Research</em>; I built the visualization framework and several of its analyses.",
  },
  {
    date: "2022",
    iso: "2022",
    tag: "Award",
    html: "Led <strong>Trace Note</strong> to the National Final Second Prize (and Northeast Division First Prize) at the China Collegiate Computing Contest, and <strong>Juejin Clone</strong> to First Prize at ByteDance Youth Camp.",
  },
];

export const education: EducationItem[] = [
  {
    level: "Graduate",
    school: "University of Pennsylvania",
    schemaName: "University of Pennsylvania",
    schemaUrl: "https://www.upenn.edu/",
    abbr: "M.S.E.",
    degree: "Master of Science in Engineering",
    major: "Computer and Information Science",
    location: "Philadelphia, PA",
    time: "Aug 2024 – May 2026",
    logo: "/UPenn_logo.svg",
    gpa: "3.90 / 4.00",
    honors: [{ text: "Hagan International Scholarship", kind: "scholarship" }],
  },
  {
    level: "Undergraduate",
    school: "Northeastern University",
    schemaName: "Northeastern University (China)",
    schemaUrl: "https://www.neu.edu.cn/",
    abbr: "B.E.",
    degree: "Bachelor of Engineering",
    major: "Software Engineering",
    location: "Shenyang, China",
    time: "Sep 2020 – Jun 2024",
    logo: "/NEU_logo.svg",
    // Neither figure is from the final transcript: the GPA covers the first six
    // semesters and the rank is a September 2023 record (see the résumé's
    // EVIDENCE.md, which dates the rank the same way).
    gpa: "3.95 / 4.00",
    gpaNote: "first six semesters",
    rank: "Rank 5 / 396 (Sep 2023)",
    honors: [
      {
        text: "National Scholarship",
        kind: "scholarship",
        note: "Ministry of Education, 2020–2021",
      },
      { text: "Merit-based Scholarship", kind: "annual", note: "Awarded annually" },
      { text: "Outstanding Graduate" },
      { text: "Outstanding Student", note: "×3" },
      { text: "Outstanding Student Leader" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "ByteDance Inc.",
    role: profile.current.role,
    team: profile.current.team,
    location: profile.locationShort,
    time: "May 2025 – Present",
    logo: "/TikTok_logo.svg",
    summary:
      "Production systems for Shop Ads and AI-assisted engineering, including an evidence-grounded on-call agent, an interoperability layer for coding agents, and a resumable framework for controlled service validation.",
    focus: [
      "Production agents",
      "Agent interoperability",
      "Validation autonomy",
      "Reliability engineering",
    ],
    stints: [
      {
        role: profile.current.role,
        time: `${profile.current.since} – Present`,
        highlights: [
          "Architected and built a production on-call agent that triages alerts using SOPs, runtime telemetry, change history, and service-topology knowledge, pairing deterministic tools with a bounded LLM behind guardrails and an evaluation framework.",
          "Built a multi-protocol interoperability layer that connects an internal model platform to Claude Code-, Codex-, and Responses/Messages-compatible coding agents while preserving native tool execution, sandboxing, approval policies, multi-agent workflows, and reliable tool continuation.",
          "Architected a resumable, evidence-gated validation framework for online service changes with contract-defined gates, artifact and runtime checks, side-effect deduplication, auditable ledgers, and explicit human-escalation boundaries for controlled agent autonomy.",
        ],
      },
      {
        role: "Software Engineer Intern",
        time: "May 2025 – Dec 2025",
        highlights: [
          "Built the Image Selection system with posterior feature modeling, exploration-exploitation ranking, and multimodal LLM quality evaluation, driving 3.4%+ revenue uplift.",
          "Automated creative generation and enhancement for high-value products through scheduled workflows, Flink-backed asset persistence, and modular preview and diagnostics for rollout validation, contributing 12%+ revenue uplift.",
          "Optimized Product Handler serving reliability and tail latency through caching, asynchronous batch fetches, and offline computation, reducing p99 latency by 43.6% and cutting 80% of failure spikes during peak traffic.",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    team: "Global-Mile Team",
    location: "Beijing, China",
    time: "Jun 2024 – Aug 2024",
    logo: "/Amazon_logo.svg",
    summary:
      "Distributed observability infrastructure for tracing and telemetry across microservices and serverless environments, without invasive application changes.",
    focus: ["OpenTelemetry", "Java Agent", "Distributed tracing"],
    highlights: [
      "Developed a Java Agent on top of OpenTelemetry and ByteBuddy for non-intrusive runtime instrumentation and payload-aware tracing.",
      "Implemented a loosely linked tracing module that reconstructed end-to-end call chains with business IDs across partially instrumented systems.",
      "Added adaptive runtime delivery for Fargate and Lambda using reflection-based environment detection with Kinesis and SQS backends.",
      "Built a full-stack telemetry console with query, aggregation, pagination, and multiple trace views including tree, table, timeline, and payload inspection.",
    ],
  },
  {
    company: "JD Technology",
    role: "Software Engineer Intern",
    team: "Algorithm Tools Team",
    location: "Beijing, China",
    time: "Jul 2023 – Oct 2023",
    logo: "/JD.com_logo.png",
    summary:
      "Platform engineering for internal AI tooling, with an emphasis on automation, modular system design, and cloud-native delivery workflows.",
    focus: ["Platform engineering", "GitOps", "Multi-tenant delivery"],
    highlights: [
      "Redesigned the Kubernetes resource-management service with ConfigMap automation, Informers, asynchronous recalculation, observer-based updates, and sharded row locking, cutting cold-start time by 20x.",
      "Refactored campaign page generation using a modular Strategy pattern to improve maintainability and feature reuse.",
      "Introduced a GenAI-assisted content pipeline to automate campaign page section creation and reduce manual operations.",
      "Improved CI/CD with Argo Workflows, Argo CD, and Helm-based multi-tenant deployment tooling for hybrid-cloud delivery.",
    ],
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: "repo-graph-of-skills",
    title: "Graph-of-Skills",
    role: "First author · Maintainer",
    date: "2026",
    note:
      "The open-source reference implementation of the EMNLP 2026 paper. I proposed the dependency-graph formulation, built the retrieval system (hybrid semantic–lexical seeding, reverse-aware Personalized PageRank, and context-budgeted hydration), and led the evaluation.",
    image: "/publication/gos.webp",
    imageWidth: 800,
    imageHeight: 384,
    paper: "https://arxiv.org/abs/2604.05333",
    github: "https://github.com/davidliuk/graph-of-skills",
  },
  {
    id: "repo-dr-claw",
    title: "Dr. Claw",
    role: "Core contributor · Maintainer",
    date: "2026",
    note:
      "An open-source AI scientist workspace (EMNLP 2026 System Demonstrations). As a core contributor and active maintainer, I built the cross-platform Electron desktop app and its release pipeline, and implemented provider integrations, project and session workflows, and reliability fixes.",
    image: "/publication/drclaw.webp",
    imageWidth: 800,
    imageHeight: 388,
    paper: "https://arxiv.org/abs/2609.00365",
    github: "https://github.com/OpenLAIR/dr-claw",
  },
  {
    id: "repo-comfyclaw",
    title: "COMFYCLAW",
    role: "Co-first author",
    date: "2026",
    note:
      "A typed-graph harness for image-generation workflows, with validation, rollback, repair, visual verification, and skill evolution built into execution. I built the ComfyUI plugin, the core agent loop for typed edits to workflow graphs, and the experiment framework; I also ran two of the model evaluations and wrote the paper's first draft.",
    image: "/publication/comfyclaw.webp",
    imageWidth: 800,
    imageHeight: 508,
    paper: "https://arxiv.org/abs/2607.01709",
    github: "https://github.com/Moms-Organic-Agent-Lab/comfyclaw",
  },
  {
    id: "repo-lhtb",
    title: "Long-Horizon Terminal-Bench (LHTB)",
    role: "Contributor",
    date: "2026",
    note:
      "A 46-task benchmark of whether LLM agents can sustain useful work in a containerized terminal over hundreds of steps, scored with dense rewards by hidden verifiers that rebuild results from artifacts. Tasks span games and puzzles, multimodal analysis, software and reverse engineering, scientific computing, security and performance, and research reproduction.",
    image: "/publication/lhtb.webp",
    imageWidth: 800,
    imageHeight: 352,
    paper: "https://arxiv.org/abs/2607.08964",
    github: "https://github.com/zli12321/LHTB",
    website: "https://zli12321.github.io/LHTB/leaderboard.html",
  },
];
