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
  role: "AI Systems Researcher · Software Engineer",
  headline: "Reliable AI agents.",
  headlineEmphasis: "Beyond the demo.",
  description:
    "AI systems researcher and software engineer at ByteDance, building reliable infrastructure for tool-using AI agents. Structured notes on algorithms, AI systems, and computer science.",
  introduction:
    "I build infrastructure that helps AI agents retrieve the right skills, execute with confidence, and recover when things go wrong.",
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
    focus: "Reliable tool-using agents with LAIR",
  },
  latest: {
    label: "Dr. Claw preprint on arXiv",
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

export const atAGlance = [
  {
    label: "Now",
    text: `${profile.current.role}, ${profile.current.team} at ${profile.current.company}`,
    meta: `${profile.locationShort} · since ${profile.current.since}`,
    href: "#experience",
  },
  {
    label: "Research",
    text: profile.research.focus,
    meta: `${profile.research.organization} · advised by ${profile.research.advisor}`,
    href: profile.research.organizationUrl,
    external: true,
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
    html: 'The <a href="https://arxiv.org/abs/2609.00365" target="_blank" rel="noopener">Dr. Claw</a> system paper is on arXiv, accepted to EMNLP 2026 System Demonstrations.',
  },
  {
    date: "Aug 2026",
    iso: "2026-08",
    tag: "Paper",
    highlight: true,
    html: "<strong>Graph-of-Skills</strong> accepted to EMNLP 2026 (Main Conference); earlier accepted as a poster at the ACM CAIS 2026 Workshop AgentSkills.",
  },
  {
    date: "Jul 2026",
    iso: "2026-07",
    tag: "Paper",
    html: '<strong>COMFYCLAW</strong> accepted to the ECCV 2026 Workshop MUCG (<a href="https://arxiv.org/abs/2607.01709" target="_blank" rel="noopener">arXiv:2607.01709</a>); <a href="https://github.com/zli12321/LHTB" target="_blank" rel="noopener">Long-Horizon Terminal-Bench</a> released with the LAIR community.',
  },
  {
    date: "Jun 2026",
    iso: "2026-06",
    tag: "Career",
    highlight: true,
    html: `Joined <strong>${profile.current.company}</strong> in ${profile.locationShort.split(",")[0]} full-time as a ${profile.current.role} on ${profile.current.team}.`,
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
    html: "Named a <strong>Winner of the Apple Swift Student Challenge 2026</strong> for Aura Chef, one of 350 winners from 37 countries and regions.",
  },
  {
    date: "2026",
    iso: "2026",
    tag: "Service",
    html: "Reviewed manuscripts for the <strong>ACM CAIS 2026 Workshop AgentSkills</strong> through OpenReview.",
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
    school: "Northeastern University",
    schemaName: "Northeastern University (China)",
    schemaUrl: "https://www.neu.edu.cn/",
    abbr: "B.E.",
    degree: "Bachelor of Engineering",
    major: "Software Engineering",
    location: "Shenyang, China",
    time: "Sep 2020 – Jun 2024",
    logo: "/NEU_logo.svg",
    gpa: "3.95 / 4.00",
    rank: "5 / 396 (top 1.3%)",
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
      "Production ranking, creative, and serving systems for Shop Ads. Joined as a Software Engineer Intern and returned full-time after graduation.",
    focus: ["Ads ranking", "GenAI creative tooling", "Low-latency backend", "Observability"],
    stints: [
      {
        role: profile.current.role,
        time: `${profile.current.since} – Present`,
        highlights: [
          "Build and operate production commerce-ads backends across reliability, latency, observability, service integration, and controlled experiments, using AI-assisted workflows for development, testing, diagnosis, and operational efficiency.",
        ],
      },
      {
        role: "Software Engineer Intern",
        time: "May 2025 – Dec 2025",
        highlights: [
          "Built the Image Selection system with posterior feature modeling, exploration-exploitation ranking, and multimodal LLM quality evaluation, driving 3.4%+ revenue uplift.",
          "Developed a GenAI image enhancement and generation pipeline backed by Flink, TBase, and Forward Index, contributing 12%+ revenue uplift on high-value products.",
          "Designed a modular preview flow with unified diagnostics across Ad, Creative, SPU, and Image entities, making rollout debugging much faster.",
          "Redesigned cache and offline fetching paths in Product Handler, reducing p99 latency by 43.6% and cutting 80% of failure spikes during peak traffic.",
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
      "Distributed observability infrastructure: tracing and telemetry tools that worked across microservices and serverless environments without invasive code changes.",
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
    role: "Owner",
    date: "2026",
    note:
      "Dependency-aware retrieval for large skill libraries: an offline executable skill graph, hybrid seeding, reverse-aware Personalized PageRank, and context-budgeted hydration. The reference implementation behind the EMNLP 2026 paper, with the SkillsBench and ALFWorld experiments.",
    image: "/publication/gos.webp",
    imageWidth: 800,
    imageHeight: 384,
    paper: "https://arxiv.org/abs/2604.05333",
    github: "https://github.com/davidliuk/graph-of-skills",
  },
  {
    id: "repo-dr-claw",
    title: "Dr. Claw",
    role: "Core contributor",
    date: "2026",
    note:
      "An open-source AI scientist workspace that wraps coding-agent executors in an auditable, human-in-the-loop workflow. I shipped the Gemini and Codex providers, multi-session and isolated-project workflows, CLI and desktop access, reliability fixes, and cross-platform releases (4th by non-merge commits to main).",
    image: "/publication/drclaw.webp",
    imageWidth: 800,
    imageHeight: 388,
    paper: "https://arxiv.org/abs/2609.00365",
    github: "https://github.com/OpenLAIR/dr-claw",
  },
  {
    id: "repo-lhtb",
    title: "Long-Horizon Terminal-Bench (LHTB)",
    role: "Contributor",
    date: "Jul 2026",
    note:
      "A 46-task benchmark measuring how well LLM agents sustain useful work inside a containerized terminal over hundreds of steps, graded by hidden, rebuild-from-artifact verifiers under a dense reward scheme. Tasks span interactive games and puzzles, multimodal analysis, software and reverse engineering, scientific computing, security and performance, and research reproduction.",
    image: "/publication/lhtb.webp",
    imageWidth: 800,
    imageHeight: 352,
    paper: "https://arxiv.org/abs/2607.08964",
    github: "https://github.com/zli12321/LHTB",
    website: "https://zli12321.github.io/LHTB/leaderboard.html",
  },
];
