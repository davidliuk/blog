---
home: true
portfolio: true
avatar: /avatar.jpg
heroText: David's blog
avatarStyle:
  object-fit: cover
  display: block
name: Dawei Liu
titles:
  - Research Intern@Lehigh LAIR
  - MSE CIS@UPenn 26'
  - SWE Intern@TikTok 25'
  - SDE Intern@Amazon 24'
  - SDE Intern@JD.com 23'
welcome: Hello, I'm
content: portfolio
---

<PortfolioAffiliations />

<HomePageNav />

<div class="home-snapshot-grid">
  <section class="home-snapshot-card">
    <p class="home-snapshot-card__label">Current</p>
    <strong>Research Intern @ LAIR</strong>
    <span>Building AI research workflows and structural retrieval systems.</span>
  </section>
  <section class="home-snapshot-card">
    <p class="home-snapshot-card__label">Profile</p>
    <strong>M.S.E. @ UPenn</strong>
    <span>Research-engineering path across agent systems, ML infra, and backend platforms.</span>
  </section>
  <section class="home-snapshot-card">
    <p class="home-snapshot-card__label">Impact</p>
    <strong>10%+ revenue, 43.6% p99 latency reduction</strong>
    <span>Shipped measurable product and systems improvements at scale.</span>
  </section>
  <section class="home-snapshot-card">
    <p class="home-snapshot-card__label">Interested In</p>
    <strong>Agent infrastructure, RecSys, platform engineering</strong>
    <span>Especially work that connects ambitious ideas with deployable systems.</span>
  </section>
</div>

# About

<p class="home-lead">I build <strong>agentic systems</strong>, <strong>intelligent infrastructure</strong>, and <strong>production-grade ML platforms</strong>. My work lives at the intersection of AI research and large-scale engineering, with a focus on turning ambitious ideas into systems that are practical, measurable, and deployable.</p>

<div class="home-hero-grid">
  <section class="home-surface-card home-surface-card--story">
    <p class="home-card-eyebrow">Research x Engineering</p>
    <!-- <h2 class="home-card-title">From idea formation to scalable delivery, I care about systems that close the loop.</h2> -->
    <p class="home-card-copy">I am an M.S.E. student in <strong>Computer and Information Science</strong> at the <strong>University of Pennsylvania</strong> and hold a B.E. in <strong>Software Engineering</strong> from <strong>Northeastern University</strong>. I enjoy designing AI-native workflows, retrieval systems for agents, and backend platforms that remain reliable under real product constraints.</p>
    <div class="home-tag-row" aria-label="Primary focus areas">
      <span class="home-tag">Agentic Systems</span>
      <span class="home-tag">LLM Infrastructure</span>
      <span class="home-tag">Recommendation</span>
      <span class="home-tag">Systems Engineering</span>
    </div>
    <div class="home-story-meta" aria-label="Current profile highlights">
      <div class="home-story-meta__item">
        <span class="home-story-meta__label">Current Role</span>
        <strong>Research Intern @ LAIR</strong>
      </div>
      <div class="home-story-meta__item">
        <span class="home-story-meta__label">Current Study</span>
        <strong>M.S.E. in CIS @ UPenn</strong>
      </div>
    </div>
  </section>

  <section class="home-surface-card home-surface-card--focus">
    <p class="home-card-eyebrow">Current Focus</p>
    <ul class="home-focus-list">
      <li>Designing structural retrieval systems for massive agent skill libraries.</li>
      <li>Building end-to-end research automation workflows with strong UX and execution depth.</li>
      <li>Bridging research ideas with infrastructure that can survive scale, latency, and product complexity.</li>
    </ul>
  </section>
</div>

Recently, I’m a **Research Intern** at **Lehigh University** with [**LAIR**](https://github.com/OpenLAIR), advised by **Prof. Lichao Sun**. As one of the **top three** core contributors, I help build [**Dr. Claw**](https://github.com/OpenLAIR/dr-claw), a general-purpose **AI Research Assistant** for end-to-end research workflows, from idea formation and experimentation to paper-ready outputs.

Before that, I worked on **TikTok Shop Ads**, where I joined as an SDE Intern and was converted to a **Software Engineer** within 12 weeks. Across **TikTok**, **Amazon**, and **JD.com**, I shipped systems spanning recommendation, observability, AI tooling, backend architecture, and developer infrastructure.

---

## Selected Impact

<div class="home-highlight-grid">
  <section class="home-highlight-card">
    <p class="home-highlight-kicker">Research Systems</p>
    <h3>Building AI research workspaces that reduce workflow friction.</h3>
    <p>At LAIR, I contribute to <strong>Dr. Claw</strong>, an open-source AI research assistant that keeps ideation, experiments, writing, and iteration inside one cohesive workspace.</p>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker">Product Impact</p>
    <h3>Shipped ranking and creative intelligence with measurable business lift.</h3>
    <p>At TikTok Shop Ads, I built image selection, GenAI creative integration, and delivery tooling that contributed to <strong>10%+</strong> revenue uplift on PSA Carousel effectiveness.</p>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker">Systems Performance</p>
    <h3>Focused on robust backend design, observability, and latency engineering.</h3>
    <p>I enjoy turning fragile systems into dependable foundations, from reducing <strong>p99 latency by 43.6%</strong> to extending tracing across heterogeneous microservice and serverless environments.</p>
  </section>
</div>

---

## Selected Publications

<p class="home-section-intro">My recent work spans agent skill retrieval, AI research tooling, multimodal generation, 3D vision, and biomedical data systems.</p>

<PublicationList>
  <PublicationCard
    title="Graph of Skills: Dependency-Aware Structural Retrieval for Massive Agent Skills"
    :authors="['Dawei Liu*','Zongxia Li*','Hongyang Du','Xiyang Wu','Shihang Gui','Yongbei Kuang','Lichao Sun']"
    image="/publication/gos.png"
    venue="Preprint"
    date="Apr 2026"
    abstract="Skill usage has become a core component of modern agent systems and can substantially improve agents' ability to complete complex tasks. In real-world settings, where agents must monitor and interact with numerous personal applications, web browsers, and other environment interfaces, skill libraries can scale to thousands of reusable skills. Scaling to larger skill sets introduces two key challenges. First, loading the full skill set saturates the context window, driving up token costs, hallucination, and latency. In this paper, we present Graph of Skills (GoS), an inference-time structural retrieval layer for large skill libraries. GoS constructs an executable skill graph offline from skill packages, then at inference time retrieves a bounded, dependency-aware skill bundle through hybrid semantic-lexical seeding, reverse-weighted Personalized PageRank, and context-budgeted hydration. On SkillsBench and ALFWorld, GoS improves average reward by 43.6% over the vanilla full skill-loading baseline while reducing input tokens by 37.8%, and generalizes across three model families: Claude Sonnet, GPT-5.2 Codex, and MiniMax. Additional ablation studies across skill libraries ranging from 200 to 2,000 skills further demonstrate that GoS consistently outperforms both vanilla skills loading and simple vector retrieval in balancing reward, token efficiency, and runtime."
    paper="https://arxiv.org/abs/2604.05333"
    github="https://github.com/davidliuk/graph-of-skills"
  />

  <PublicationCard
    title="Dr. Claw: An AI Research Workspace from Idea to Paper"
    :authors="['Dingjie Song','Hanrong Zhang','Dawei Liu','Yixin Liu','Zongxia Li','Zhengqing Yuan','Siqi Zhang','Lichao Sun']"
    image="https://raw.githubusercontent.com/OpenLAIR/dr-claw/main/public/screenshots/screenshot_v1_2.png"
    venue="Software"
    date="Mar 2026"
    abstract="Dr. Claw is a general-purpose AI research assistant designed to help researchers and builders execute end-to-end projects across different domains. From shaping an initial idea to running experiments and preparing publication-ready outputs, Dr. Claw keeps the full workflow in one place so teams can focus on research quality and iteration speed."
    github="https://github.com/OpenLAIR/dr-claw"
  />

  <PublicationCard
    title="Multimodal Video Generation Models with Audio: Present and Future"
    :authors="['Zongxia Li','Hongyang Du','Dawei Liu','Xiyang Wu','Lantao Yu','Jingxi Chen','Fuxiao Liu','Xiaomin Wu','Jing Xie','Chengsong Huang','Yicheng He','Guangyao Shi']"
    image="/publication/vgm.jpeg"
    venue="Preprint"
    date="Feb 2026"
    abstract="Video generation models have advanced rapidly and are now widely used across entertainment, advertising, filmmaking, and robotics applications such as world modeling and simulation. However, visual content alone is often insufficient for realistic and engaging media experiences; audio is also a key component of immersion and semantic coherence. As AI-generated videos become increasingly prevalent in everyday content, demand has grown for systems that can generate synchronized sound alongside visuals. This trend has driven rising interest in multimodal video generation, which jointly models video and audio to produce more complete, coherent, and appealing outputs. Since late 2025, a wave of multimodal video generation models has emerged, with releases including Veo 3.1, Sora 2, Kling 2.6, Wan 2.6, OVI, and LTX 2. As multimodal generation technology advances, its impact expands across both consumer and industrial domains, revolutionizing entertainment while enabling more sophisticated world simulation for embodied AI systems. In this paper, we provide a comprehensive overview of the literature covering common architectures, post-training methods, evaluation, applications, and open challenges."
    paper="https://www.researchgate.net/publication/401388352_Multimodal_Video_Generation_Models_with_Audio_Present_and_Future"
    github="https://github.com/zli12321/Multimodal-VIdeo-Generation-Collections-Video-and-Audio"
  />

  <PublicationCard
    title="A Cookbook of 3D Vision: Data, Learning Paradigms, and Application"
    :authors="['Hongyang Du*','Zongxia Li*','Dawei Liu*','Runhao Li*','Haoyuan Song','Qingyu Zhang','Yubo Wang','Jingcheng Ni','Shihang Gui','Congchao Dong','Tao Hu']"
    image="/publication/3dv.jpeg"
    venue="CVPR 2026 Workshop"
    date="Mar 2026"
    abstract="3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representations and benchmarks, making it difficult to develop unified perspectives on efficiency, fidelity, and scalability. This work provides a data-centric taxonomy of 3D vision that connects geometric representations, datasets, learning frameworks, and applications within a single conceptual map. We survey principal structural representations of 3D data, then examine how dataset design, benchmark construction, and supervision regimes shape recent advances spanning 2D-supervised 3D learning, implicit neural representations, and 4D world modeling."
    github="https://github.com/Hongyang-Du/awesome-3d-datasets"
  />

  <PublicationCard
    title="TIMEDB: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization"
    :authors="['Xueying Wang*','Lingxi Chen*','Wei Liu','Yuanzheng Zhang','Dawei Liu','Chenxin Zhou','Shuai Shi','Jiajie Dong','Zhengtao Lai','Bingran Zhao','Wenjingyu Zhang','Haoyue Cheng','Shuaicheng Li']"
    image="/publication/timedb.png"
    venue="Nucleic Acids Research"
    date="Jan 2023"
    abstract="TIMEDB is an online database for analyzing human tumor immune microenvironment cell-type composition from bulk expression profiles. It curates expression and composition profiles with clinical information for 39,706 samples from 546 datasets across 43 cancer types, and provides automatic analysis with interactive visualization."
    paper="https://doi.org/10.1093/nar/gkac1006"
    website="https://timedb.deepomics.org"
    github="https://github.com/deepomicslab/TIMEDB"
  />
</PublicationList>

---

## Education

<p class="home-section-intro">A research-oriented training path grounded in both systems engineering and applied AI.</p>

<EducationItem
  school="University of Pennsylvania"
  degree="M.S.E. in Computer and Information Science"
  time="Aug 2024 – May 2026"
  logo="/UPenn_logo.svg"
  gpa="3.88 / 4.00"
  :honors="['Hagan International Scholarship']"
  major="Computer and Information Science" />

<EducationItem
  school="Northeastern University"
  degree="B.E. in Software Engineering"
  time="Sep 2020 – Jul 2024"
  logo="/NEU_logo.svg"
  gpa="3.95 / 4.00"
  :honors="['National Scholarship','Outstanding Graduate','Annual Merit-based Scholarship','Annual Outstanding Student']"
  rank="Top 1%"
  major="Software Engineering" />

---

## Professional Experience

<p class="home-section-intro">I like roles where modeling, infrastructure, and product rigor intersect. The common thread across these teams has been building reliable systems that move real metrics.</p>

<div class="experience-grid">
  <ExperienceCard
    company="TikTok"
    role="Software Engineer Intern"
    team="Shop Ads Team"
    location="Seattle, WA"
    time="May 2025 – Dec 2025"
    logo="/TikTok_logo.svg"
    summary="Worked on ranking, creative intelligence, and delivery tooling for Shop Ads; received a 2026 full-time return offer after shipping systems tied to real business lift."
    :focus="['Ads ranking','GenAI creative tooling','Low-latency backend']"
    :highlights="[
      'Built the Image Selection system with posterior feature modeling, exploration-exploitation ranking, and multimodal LLM quality evaluation, driving 3.4%+ revenue uplift.',
      'Developed a GenAI image enhancement and generation pipeline backed by Flink, TBase, and Forward Index, contributing 12%+ revenue uplift on high-value products.',
      'Designed a modular preview flow with unified diagnostics across Ad, Creative, SPU, and Image entities, making rollout debugging much faster.',
      'Redesigned cache and offline fetching paths in Product Handler, reducing p99 latency by 43.6% and cutting 80% of failure spikes during peak traffic.'
    ]"
  />

  <ExperienceCard
    company="Amazon"
    role="Software Development Engineer Intern"
    team="Global-Mile Team"
    location="Beijing, China"
    time="Jun 2024 – Aug 2024"
    logo="/Amazon_logo.svg"
    summary="Focused on distributed observability infrastructure, building tracing and telemetry tools that worked across microservices and serverless environments without invasive code changes."
    :focus="['OpenTelemetry','Java Agent','Distributed tracing']"
    :highlights="[
      'Developed a Java Agent on top of OpenTelemetry and ByteBuddy for non-intrusive runtime instrumentation and payload-aware tracing.',
      'Implemented a loosely linked tracing module that reconstructed end-to-end call chains with business IDs across partially instrumented systems.',
      'Added adaptive runtime delivery for Fargate and Lambda using reflection-based environment detection with Kinesis and SQS backends.',
      'Built a full-stack telemetry console with query, aggregation, pagination, and multiple trace views including tree, table, timeline, and payload inspection.'
    ]"
  />

  <ExperienceCard
    company="JD.com"
    role="Software Development Engineer Intern"
    team="Algorithm Tools Team"
    location="Beijing, China"
    time="Jul 2023 – Oct 2023"
    logo="/JD.com_logo.png"
    summary="Worked on platform engineering for internal AI tooling, with an emphasis on automation, modular system design, and cloud-native delivery workflows."
    :focus="['Platform engineering','GitOps','Multi-tenant delivery']"
    :highlights="[
      'Redesigned the resource management service with ConfigMap automation, Kubernetes Informers, async recalculation, and sharded row locking, cutting cold-start time by 20x.',
      'Refactored campaign page generation using a modular Strategy pattern to improve maintainability and feature reuse.',
      'Introduced a GenAI-assisted content pipeline to automate campaign page section creation and reduce manual operations.',
      'Improved CI/CD with Argo Workflows, Argo CD, and Helm-based multi-tenant deployment tooling for hybrid-cloud delivery.'
    ]"
  />
</div>


## Tech Stack

<p class="home-section-intro">A practical toolkit shaped by backend engineering, ML experimentation, and product-facing system design.</p>

<div class="tech-stack-summary">
  <div class="tech-stack-summary__item">
    <span class="tech-stack-summary__label">Build</span>
    <strong>Backend systems, ML tooling, and production-facing infra</strong>
  </div>
  <div class="tech-stack-summary__item">
    <span class="tech-stack-summary__label">Bias</span>
    <strong>Reliability, latency, observability, and scalable delivery</strong>
  </div>
  <div class="tech-stack-summary__item">
    <span class="tech-stack-summary__label">Context</span>
    <strong>Applied AI, recommender systems, and research platforms</strong>
  </div>
</div>

:::: tabs

@tab Language

<TechGrid>
  <TechCard title="Systems" :items="['C/C++','Java','Go']" badge-type="tip" />
  <TechCard title="Scripting" :items="['Python','JavaScript','TypeScript']" />
  <TechCard title="Query & Markup" :items="['SQL','HTML','CSS']" />
</TechGrid>

@tab AI / ML

<TechGrid>
  <TechCard title="Agent Systems" :items="['Skills','Harness','Research Automation','RAG']" badge-type="tip" />
  <TechCard title="LLM & Multimodal" :items="['Transformer','CLIP','Token Pruning']" />
  <TechCard title="RecSys & Ranking" :items="['ItemCF','Two-Tower','Tri-Tower','Exploration-Exploitation']" />
  <TechCard title="Training & Eval" :items="['PyTorch','A/B Testing','Offline Metrics','Error Analysis']" />
</TechGrid>

@tab Backend

<TechGrid>
  <TechCard title="Frameworks" :items="['Spring','Guice','Coral']" badge-type="tip" />
  <TechCard title="APIs & Schemas" :items="['Thrift','Protobuf']" />
  <TechCard title="Data & Search" :items="['MySQL','Redis','ElasticSearch']" badge-type="warning" />
  <TechCard title="Streaming & MQ" :items="['Kafka','RabbitMQ','Flink']" />
  <TechCard title="Observability" :items="['OpenTelemetry']" />
</TechGrid>

@tab Frontend

<TechGrid>
  <TechCard title="Web Apps" :items="['React','Vue','Vite']" badge-type="tip" />
  <TechCard title="UI & DataViz" :items="['ECharts','AWS UI','Arco Design']" />
  <TechCard title="Apple" :items="['Swift','SwiftUI','ARKit']" />
</TechGrid>

@tab Graphics

<TechGrid>
  <TechCard title="Real-Time & Shader" :items="['OpenGL','GLSL','Unity']" badge-type="tip" />
  <TechCard title="Toolkits" :items="['Qt','Maya API','RigNet']" />
</TechGrid>

@tab DevOps

<TechGrid>
  <TechCard title="Runtime & Containers" :items="['Unix/Linux','Docker','Kubernetes']" badge-type="tip" />
  <TechCard title="Platform Ops" :items="['Grafana','Helm','CDK']" />
  <TechCard title="AWS" :items="['DynamoDB','Kinesis','SQS','S3','Lambda']" />
</TechGrid>

@tab Tools

<TechGrid>
  <TechCard title="Developer Workflow" :items="['Git','Vim','SSH','Shell']" badge-type="tip" />
  <TechCard title="Writing & Docs" :items="['Markdown','LaTeX','Mermaid','VuePress']" />
</TechGrid>

::::

---

## Let's Connect

<div class="home-connect-panel">
  <p class="home-connect">Interested in <strong>Ads delivery</strong>, <strong>Recommendation Systems</strong>, <strong>Agentic Systems</strong>, or <strong>engineering at scale</strong>. I'm always happy to connect with researchers, engineers, and teams working on ambitious, high-leverage problems.</p>
  <div class="home-tag-row" aria-label="Topics to discuss">
    <span class="home-tag">Research collaboration</span>
    <span class="home-tag">ML infrastructure</span>
    <span class="home-tag">Backend systems</span>
    <span class="home-tag">Applied AI products</span>
  </div>
</div>