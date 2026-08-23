---
home: true
portfolio: true
avatar: /avatar.jpg
description: David Liu builds reliable, resource-efficient infrastructure for tool-using AI agents and writes structured notes on algorithms, AI systems, and computer science.
avatarStyle:
  object-fit: cover
  display: block
name: David Liu
titles:
  - AI Systems Researcher & Software Engineer
welcome: Hello, I'm
content: portfolio
---

<PortfolioAffiliations />

<HomePageNav />

<section class="home-mission" aria-labelledby="home-mission-title">
  <div class="home-mission__copy">
    <p class="home-mission__eyebrow">AI systems · research & engineering</p>
    <h2 id="home-mission-title">I build infrastructure that helps AI agents work reliably beyond the demo.</h2>
    <p class="home-mission__lede">Most agents look capable when everything goes right. I care about the harder cases: thousands of available skills, long-running tool use, partial failures, and tight context or latency budgets. My work connects <strong>dependency-aware retrieval</strong>, <strong>execution validation</strong>, and <strong>failure recovery</strong>—then turns those ideas into open systems others can inspect, test, and extend.</p>
    <div class="home-mission__actions" aria-label="Primary links">
      <a class="home-mission__button home-mission__button--primary" href="#research-program">Explore my work</a>
      <a class="home-mission__button" href="#resume">Résumé</a>
    </div>
  </div>
  <aside class="home-mission__loop" aria-label="My research loop">
    <p class="home-mission__loop-label">My research loop</p>
    <ol>
      <li>
        <span class="home-mission__step">01</span>
        <div><strong>Retrieve</strong><p>Find a small, complete set of capabilities—dependencies included.</p></div>
      </li>
      <li>
        <span class="home-mission__step">02</span>
        <div><strong>Execute</strong><p>Make tool use observable, bounded, and verifiable as work unfolds.</p></div>
      </li>
      <li>
        <span class="home-mission__step">03</span>
        <div><strong>Recover</strong><p>Turn errors and feedback into repairs and reusable experience.</p></div>
      </li>
    </ol>
  </aside>
</section>

## About

<p class="home-lead">I am an AI systems researcher and software engineer. The thread through my work—from scientific visualization and distributed tracing to recommendation and agent infrastructure—is a desire to make complex technology <strong>useful, inspectable, and dependable</strong>.</p>

<div class="home-hero-grid">
  <section class="home-surface-card home-surface-card--story">
    <p class="home-card-eyebrow">The throughline</p>
    <h3 class="home-card-title">Research ideas become valuable when people can actually use and improve them.</h3>
    <p class="home-card-copy">I enjoy the unglamorous middle between a promising prototype and a dependable system: evaluation, interfaces, observability, latency, failure handling, and the thousand small decisions that make software hold together. That mindset now shapes my work on agent skill retrieval, reliable execution, and AI-native research workflows.</p>
    <div class="home-tag-row" aria-label="Primary focus areas">
      <span class="home-tag">Tool-using Agents</span>
      <span class="home-tag">Skill Retrieval</span>
      <span class="home-tag">Execution Reliability</span>
      <span class="home-tag">Open Infrastructure</span>
    </div>
    <div class="home-story-meta" aria-label="Current profile highlights">
      <div class="home-story-meta__item">
        <span class="home-story-meta__label">Based in</span>
        <strong>Seattle, Washington</strong>
      </div>
      <div class="home-story-meta__item">
        <span class="home-story-meta__label">Current chapter</span>
        <strong>TikTok + OpenLAIR</strong>
      </div>
    </div>
  </section>

  <section class="home-surface-card home-surface-card--focus">
    <p class="home-card-eyebrow">What I’m pursuing</p>
    <ul class="home-focus-list">
      <li>Help agents select the right skills without loading an entire library into context.</li>
      <li>Make tool execution easier to validate, diagnose, and recover when something goes wrong.</li>
      <li>Release reproducible code, evaluations, and research artifacts that others can adapt.</li>
    </ul>
  </section>
</div>

<div class="home-about-context" aria-label="Current work and background">
  <p>I’m currently a <strong>Software Engineer at TikTok</strong> in Seattle, working on Shop Ads ranking, creative intelligence, and delivery systems. Production engineering keeps my research honest: useful ideas still have to survive scale, latency, noisy inputs, incomplete observability, and real users.</p>
  <p>In parallel, I collaborate with <a href="https://github.com/OpenLAIR"><strong>LAIR</strong></a>, advised by <strong>Prof. Lichao Sun</strong>, and contribute to <a href="https://github.com/OpenLAIR/dr-claw"><strong>Dr. Claw</strong></a>. I hold an M.S.E. from the <strong>University of Pennsylvania</strong> and a B.E. from <strong>Northeastern University</strong>.</p>
</div>

## Research Program

<div class="home-highlight-grid">
  <section class="home-highlight-card">
    <p class="home-highlight-kicker">01 · Retrieve</p>
    <h3>Load less context without losing the dependencies that make a skill usable.</h3>
    <p><strong>Graph-of-Skills</strong> explores structural retrieval for massive skill libraries. On SkillsBench, its strongest setting improved reward by <strong>25.55%</strong> while reducing total tokens by <strong>56.72%</strong> against full skill loading.</p>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker">02 · Execute & recover</p>
    <h3>Give agents structure for acting, checking their work, and repairing failures.</h3>
    <p><strong>COMFYCLAW</strong>, accepted to the 2nd MUCG Workshop at ECCV 2026, combines typed workflow editing, stage-aware tools, rollback, visual verification, and skill evolution to make executable image-generation workflows more reliable.</p>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker">03 · Build in the open</p>
    <h3>Turn agent research into workspaces that researchers can use every day.</h3>
    <p>As a core contributor to <strong>Dr. Claw</strong>, I work across provider integrations, multi-session workflows, desktop distribution, project isolation, and the reliability details behind long-running research tasks.</p>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker">04 · Test against reality</p>
    <h3>Let production constraints sharpen the questions research needs to answer.</h3>
    <p>Work across <strong>TikTok, Amazon, and JD.com</strong> taught me to treat latency, observability, experimentation, and failure handling as design inputs—not cleanup after a prototype succeeds.</p>
  </section>
</div>

## Selected Publications

<p class="home-section-intro">These publications mark a path from research platforms and multimodal systems toward my current focus: reliable, resource-efficient infrastructure for tool-using agents.</p>
<p class="home-publication-legend"><strong>*</strong> Contribution role follows the cited paper.</p>

<PublicationList>
  <PublicationCard
    id="paper-comfyclaw"
    title="COMFYCLAW: Self-Evolving Skill Harnesses for Image Generation Workflows"
    :authors="['Zongxia Li*','Dawei Liu*','Fuxiao Liu','Yuhang Zhou','Xiyang Wu','Jingxi Chen','Jing Xie','Xiaomin Wu','Lichao Sun']"
    image="/publication/comfyclaw.png"
    venue="MUCG Workshop · ECCV 2026"
    date="Jul 2026"
    paper="https://arxiv.org/abs/2607.01709"
    github="https://github.com/Moms-Organic-Agent-Lab/comfyclaw"
    abstract="Agents are increasingly used to control executable workflows rather than only answer questions. This makes reliability depend on both execution-time scaffolding and the ability to reuse experience from past runs. We study this problem in workflow-based image generation and introduce COMFYCLAW, an agentic harness that controls an unmodified ComfyUI runtime. COMFYCLAW represents workflow construction as typed graph editing, gates tools by construction stage, rolls back invalid edits, and uses a region-level vision-language model (VLM) verifier to turn visual failures into repair suggestions. It also evolves a progressively disclosed skill library, where trajectories, execution errors, and verifier feedback are distilled into reusable Agent Skills after held-out validation. Across four benchmark splits, three agent models, and two image backbones, COMFYCLAW achieves the best average score in all six agent–backbone settings, improving the strongest setting from 61.09 to 76.34 over a verifier-only baseline without skill evolution. Human annotations further show that annotators prefer COMFYCLAW over variants without skill evolution."
  />

  <PublicationCard
    id="paper-dr-claw"
    title="Dr. Claw: A Unified System for the Vibe Research Paradigm"
    :authors="['Dingjie Song','Hanrong Zhang','Dawei Liu','Yixin Liu','Zongxia Li','Zhengqing Yuan','Siqi Zhang','Henry Peng Zou','Zhiling Yan','Yuxuan Zhang','Yanfang Ye','Philip S. Yu','Lichao Sun']"
    image="/publication/drclaw.png"
    venue="EMNLP 2026 System Demonstration"
    date="Jul 2026"
    github="https://github.com/OpenLAIR/dr-claw"
    abstract="Command-line coding agents (e.g., Claude Code, Gemini CLI) can already read and write files and sustain long sessions, yet end-to-end research still fragments across chat tools, IDEs, terminals, and writing environments, and the decisions that make it auditable are rarely preserved. We present Dr. Claw, an open-source workspace that wraps existing coding-agent executors in a controllable and auditable human-in-the-loop workflow rather than introducing another autonomous agent. Persistent state objects, a reusable skill library, and multi-executor coordination link human decisions to AI execution, turning planning, execution, and writing into one traceable, recoverable loop. We demonstrate Dr. Claw through an interactive three-view scenario and a failure-recovery walkthrough, and evaluate it against a bare command-line agent sharing the same backend executor, isolating the orchestration layer&#39;s effect on context-switching, intervention, and auditability. Holding the executor fixed, Dr. Claw outperforms the bare agent on research completeness while persisting an auditable, recoverable process trail."
  />

  <PublicationCard
    title="Graph-of-Skills: Dependency-Aware Structural Retrieval for Massive Agent Skills"
    :authors="['Dawei Liu','Zongxia Li','Hongyang Du','Xiyang Wu','Shihang Gui','Yongbei Kuang','Lichao Sun']"
    image="/publication/gos.png"
    venue="EMNLP 2026"
    also="Agent Skills Workshop · ACM CAIS 2026"
    date="Apr 2026"
    abstract="Modern LLM agents increasingly rely on reusable skills, and as they interact with personal applications, web browsers, and other interfaces, skill libraries can scale to thousands of skills. Scaling to larger skill sets introduces two key challenges. First, loading the full skill set saturates the context window, driving up token costs, hallucination, and latency. Second, semantic retrieval surfaces topically relevant skills but misses their prerequisite chain of upstream and downstream skills, creating a prerequisite gap that leaves the retrieved bundle execution-incomplete. In this paper, we present Graph-of-Skills (GoS), an inference-time structural retrieval layer for large skill libraries. GoS constructs an executable skill graph offline from skill packages, then at inference time retrieves a bounded, dependency-aware skill bundle through hybrid semantic-lexical seeding, reverse-aware Personalized PageRank, and context-budgeted hydration. On SkillsBench and ALFWorld, GoS consistently delivers substantial reward improvements and token savings across three model families (Claude Sonnet 4.5, MiniMax M2.7, and GPT-5.2 Codex). On SkillsBench, GoS achieves a peak reward increase of 25.55% while reducing total tokens by 56.72% over the vanilla full skill-loading baseline using GPT-5.2 Codex. Ablations confirm this pattern across skill libraries from 200 to 2,000 skills."
    paper="https://arxiv.org/abs/2604.05333"
    github="https://github.com/davidliuk/graph-of-skills"
  />

  <PublicationCard
    title="A Cookbook of 3D Vision: Data, Learning Paradigms, and Application"
    :authors="['Hongyang Du*','Zongxia Li*','Dawei Liu*','Runhao Li*','Haoyuan Song','Qingyu Zhang','Yubo Wang','Jingcheng Ni','Shihang Gui','Congchao Dong','Tao Hu']"
    image="/publication/3dv.jpeg"
    venue="OpenSUN3D Workshop · CVPR 2026"
    date="Mar 2026"
    paper="https://openaccess.thecvf.com/content/CVPR2026W/OpenSUN3D/html/Du_A_Cookbook_of_3D_Vision_Data_Learning_Paradigms_and_Application_CVPRW_2026_paper.html"
    abstract="3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representations and benchmarks, making it difficult to develop unified perspectives on efficiency, fidelity, and scalability. This work provides a data-centric taxonomy of 3D vision that connects geometric representations, datasets, learning frameworks, and applications within a single conceptual map. We survey principal structural representations of 3D data, then examine how dataset design, benchmark construction, and supervision regimes shape recent advances spanning 2D-supervised 3D learning, implicit neural representations, and 4D world modeling."
    github="https://github.com/Hongyang-Du/awesome-3d-datasets"
  />

  <PublicationCard
    id="paper-multimodal-video"
    title="Multimodal Video Generation Models with Audio: Present and Future"
    :authors="['Zongxia Li','Hongyang Du','Dawei Liu','Xiyang Wu','Lantao Yu','Jingxi Chen','Fuxiao Liu','Xiaomin Wu','Jing Xie','Chengsong Huang','Yicheng He','Guangyao Shi']"
    image="/publication/vgm.jpeg"
    venue="JAV-CG Workshop · ACM Multimedia 2026"
    date="Mar 2026"
    abstract="Video generation models have advanced rapidly and are now widely used across entertainment, advertising, filmmaking, and robotics applications such as world modeling and simulation. However, visual content alone is often insufficient for realistic and engaging media experiences; audio is also a key component of immersion and semantic coherence. As AI-generated videos become increasingly prevalent in everyday content, demand has grown for systems that can generate synchronized sound alongside visuals. This trend has driven rising interest in multimodal video generation, which jointly models video and audio to produce more complete, coherent, and appealing outputs. Since late 2025, a wave of multimodal video generation models has emerged, with releases including Veo 3.1, Sora 2, Kling 2.6, Wan 2.6, OVI, and LTX 2. As multimodal generation technology advances, its impact expands across both consumer and industrial domains, revolutionizing entertainment while enabling more sophisticated world simulation for embodied AI systems. In this paper, we provide a comprehensive overview of the literature covering common architectures, post-training methods, evaluation, applications, and open challenges."
    paper="https://www.researchgate.net/publication/401388352_Multimodal_Video_Generation_Models_with_Audio_Present_and_Future"
    github="https://github.com/zli12321/Multimodal-VIdeo-Generation-Collections-Video-and-Audio"
  />

  <PublicationCard
    title="TIMEDB: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization"
    :authors="['Xueying Wang*','Lingxi Chen*','Wei Liu*','Yuanzheng Zhang','Dawei Liu','Chenxin Zhou','Shuai Shi','Jiajie Dong','Zhengtao Lai','Bingran Zhao','Wenjingyu Zhang','Haoyue Cheng','Shuaicheng Li']"
    image="/publication/timedb.png"
    venue="Nucleic Acids Research"
    date="Jan 2023"
    abstract="TIMEDB is an online database for analyzing human tumor immune microenvironment cell-type composition from bulk expression profiles. It curates expression and composition profiles with clinical information for 39,706 samples from 546 datasets across 43 cancer types, and provides automatic analysis with interactive visualization."
    paper="https://doi.org/10.1093/nar/gkac1006"
    website="https://timedb.deepomics.org"
    github="https://github.com/deepomicslab/TIMEDB"
  />
</PublicationList>

<p class="home-section-outro">Six selected here. The complete, continuously updated record lives on <a href="https://scholar.google.com/citations?user=RzdCL4AAAAAJ&amp;hl=en" target="_blank" rel="me noopener noreferrer">Google Scholar</a> and <a href="https://dblp.org/pid/57/1575-5.html" target="_blank" rel="me noopener noreferrer">DBLP</a>.</p>

## Open Source

<p class="home-section-intro">I prefer research that leaves behind something people can run. Alongside <a href="#paper-dr-claw">Dr. Claw</a> above, this is the evaluation work I contribute to with the LAIR community.</p>

<PublicationList>
  <PublicationCard
    title="Long-Horizon Terminal-Bench (LHTB)"
    also="Contributor"
    date="Jul 2026"
    image="/publication/lhtb.png"
    abstract="LHTB is a 46-task benchmark measuring how well LLM agents sustain useful work inside a containerized terminal over hundreds of steps. Unlike short-horizon coding benchmarks, it drops agents into a stateful environment and grades them with hidden, rebuild-from-artifact verifiers under a dense reward scheme, so self-reported progress does not count. Tasks span interactive games and puzzles, multimodal analysis, software and reverse engineering, scientific computing, security and performance, and research reproduction. I contribute task design and harness work to the project."
    paper="https://arxiv.org/abs/2607.08964"
    github="https://github.com/zli12321/LHTB"
    website="https://zli12321.github.io/LHTB/leaderboard.html"
  />
</PublicationList>

## Education

<p class="home-section-intro">A research-oriented training path grounded in both systems engineering and applied AI.</p>

<EducationItem
  school="University of Pennsylvania"
  degree="M.S.E. in Computer and Information Science"
  time="Aug 2024 – May 2026"
  logo="/UPenn_logo.svg"
  gpa="3.90 / 4.00"
  :honors="['Hagan International Scholarship']"
  major="Computer and Information Science" />

<EducationItem
  school="Northeastern University"
  degree="B.E. in Software Engineering"
  time="Sep 2020 – Jul 2024"
  logo="/NEU_logo.svg"
  gpa="3.95 / 4.00"
  :honors="['National Scholarship','Outstanding Graduate','Merit-based Scholarship','Outstanding Student ×3','Outstanding Student Leader']"
  rank="Top 1%"
  major="Software Engineering" />

## Professional Experience

<p class="home-section-intro">I like roles where modeling, infrastructure, and product rigor meet. Across these teams, I have learned how ranking, observability, platform engineering, and backend reliability behave under real constraints.</p>

<div class="experience-grid">
  <ExperienceCard
    company="TikTok"
    role="Software Engineer"
    team="Shop Ads Team"
    location="Seattle, WA"
    time="Jun 2026 – Present · Intern May 2025 – Dec 2025"
    logo="/TikTok_logo.svg"
    summary="Work on ranking, creative intelligence, and delivery tooling for Shop Ads. Joined as an SDE Intern, converted to a full-time Software Engineer within 12 weeks, and returned full-time after graduation."
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

## Award-Winning Projects

<p class="home-section-intro">Competition projects where I led the build, from spatial interaction on Apple platforms to recommendation-driven web products.</p>

<div class="project-grid">
  <ProjectCard
    name="Aura Chef"
    role="Solo Developer"
    award="Winner · Swift Student Challenge 2026"
    time="2026"
    summary="A touchless cooking assistant for iPad that removes the “digital friction” of swiping recipes with messy hands, using on-device computer vision so the device fades into the background."
    :highlights="[
      'Tracked 21 hand joints with the Vision framework and a custom low-pass filter to separate intentional gestures from sensor noise.',
      'Designed a Dual Confirmation Ring and large-scale palm gestures for accessibility, with voice control and text-to-speech as fallback modalities.',
      'Built an AI Visibility Bar that monitors lighting and distance in real time, plus a hand-skeleton PIP so users can see how the model reads their intent.'
    ]"
    :tech="['SwiftUI','Vision','Combine','Speech','AVFoundation']"
  />

  <ProjectCard
    name="Trace Note"
    role="Team Leader"
    award="2nd Prize · Mobile Application Innovation Contest 2022"
    time="2022"
    summary="An AR social app, co-hosted by Apple and Zhejiang University, that lets users anchor and share geo-tagged notes in physical space and earn tokens through daily check-ins."
    :highlights="[
      'Optimized spatial trace retrieval with Redis Geo for real-time nearby queries and distance-based ranking.',
      'Used Lua scripts for atomic inventory pre-checks, preventing overselling and enforcing a one-order-per-user policy.',
      'Handled async order creation and timeout-based cancellation via RabbitMQ delayed message exchange.'
    ]"
    :tech="['Swift','ARKit','Redis Geo','RabbitMQ','Lua']"
  />

  <ProjectCard
    name="Juejin Clone"
    role="Team Leader"
    award="1st Prize · ByteDance Youth Camp 2022"
    time="2022"
    summary="A rebuilt developer community web app with a personalized “For You” feed, post interactions, and responsive design."
    :highlights="[
      'Built the personalized feed with TrustSVD plus timeline signals to address cold start in recommendation.',
      'Automated daily data refresh and model retraining with Spring Scheduler to keep recommendations fresh.',
      'Implemented JWT and RBAC with Sa-Token for fine-grained access control and session management.'
    ]"
    :tech="['React','Spring','TrustSVD','Sa-Token']"
  />
</div>

## Knowledge Base

<p class="home-section-intro">I keep a long-running technical knowledge base alongside my research and engineering work. The goal is not to collect definitions, but to connect first principles, problem-solving methods, and production tradeoffs.</p>

<div class="knowledge-atlas-grid">
  <a class="knowledge-atlas-card knowledge-atlas-card--algo" href="/algo/">
    <span class="knowledge-atlas-card__index">01</span>
    <p class="knowledge-atlas-card__eyebrow">Model · Explore · Optimize · Verify</p>
    <h3>Algorithms</h3>
    <p>Data structures, search, dynamic programming, optimization, correctness, and interview problem solving.</p>
    <span class="knowledge-atlas-card__link">Open algorithm map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--ai" href="/ai/">
    <span class="knowledge-atlas-card__index">02</span>
    <p class="knowledge-atlas-card__eyebrow">Foundation · Model · System · Product</p>
    <h3>AI Systems</h3>
    <p>Deep learning, language models, inference, agents, recommendation, search, and evaluation.</p>
    <span class="knowledge-atlas-card__link">Open AI map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--cs" href="/cs/">
    <span class="knowledge-atlas-card__index">03</span>
    <p class="knowledge-atlas-card__eyebrow">Runtime · Network · Design · Distributed</p>
    <h3>CS Foundations</h3>
    <p>Operating systems, computer networks, OOD, design patterns, and scalable system design.</p>
    <span class="knowledge-atlas-card__link">Open CS map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--se" href="/se/">
    <span class="knowledge-atlas-card__index">04</span>
    <p class="knowledge-atlas-card__eyebrow">Build · Store · Integrate · Operate</p>
    <h3>Software Engineering</h3>
    <p>Languages, data systems, middleware, delivery, observability, testing, and production practice.</p>
    <span class="knowledge-atlas-card__link">Open engineering map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--test" href="/test/">
    <span class="knowledge-atlas-card__index">05</span>
    <p class="knowledge-atlas-card__eyebrow">Diagnose · Drill · Simulate · Review</p>
    <h3>Test Preparation</h3>
    <p>A personal TOEFL and GRE study system built around skills, evidence, deliberate practice, and review.</p>
    <span class="knowledge-atlas-card__link">Open study map →</span>
  </a>
</div>

<div class="knowledge-atlas-note">
  <strong>How I write these notes</strong>
  <div>
    <p>Directory pages build the map. Topic pages explain one complete idea. Case studies connect concepts under realistic constraints. When the same subject appears in multiple areas, I prefer cross-links over duplicated definitions.</p>
    <p class="knowledge-atlas-note__links"><a href="/education/">Course archive →</a><a href="/hobby/">Personal notes →</a><a href="/article/">All articles →</a></p>
  </div>
</div>

## Tech Stack

<p class="home-section-intro">My toolkit is organized around the systems I build, not a flat inventory of technologies. These four working layers connect research prototypes to observable, production-facing products.</p>

<TechGrid>
  <TechCard
    index="01"
    eyebrow="Intelligence layer"
    title="AI & Agent Systems"
    description="Model, retrieve, evaluate, and operate tool-using systems under real context and latency constraints."
    :items="['PyTorch','Transformers','Agent Harnesses','Skill Retrieval','RAG','Evaluation','Recommender Systems']" />
  <TechCard
    index="02"
    eyebrow="Service layer"
    title="Backend & Distributed Systems"
    description="Build typed services, ranking paths, streaming jobs, and the interfaces that keep them evolvable."
    :items="['Java','Python','Go','Spring','Thrift / Protobuf','Kafka / Flink','OpenTelemetry']" />
  <TechCard
    index="03"
    eyebrow="Platform layer"
    title="Data & Infrastructure"
    description="Design storage and delivery foundations with explicit tradeoffs around scale, failure, and observability."
    :items="['MySQL','Redis','Elasticsearch','Docker','Kubernetes','AWS','Grafana']" />
  <TechCard
    index="04"
    eyebrow="Experience layer"
    title="Product & Interfaces"
    description="Turn systems into usable research workspaces, web products, visual tools, and spatial experiences."
    :items="['TypeScript','React','Vue / Vite','Swift / SwiftUI','ARKit','ECharts','C/C++ / OpenGL']" />
</TechGrid>

<p class="home-section-outro">This is a curated working set rather than a proficiency checklist. I choose tools by the constraints of the system and keep the deeper implementation notes in the <a href="/ai/">AI</a>, <a href="/cs/">CS</a>, and <a href="/se/">software engineering</a> knowledge maps.</p>

## Résumé

<div class="home-resume">
  <a class="home-resume__spread" href="/resume/david-liu-resume.pdf" target="_blank" rel="noopener" aria-label="Open the full résumé PDF">
    <img src="/resume/david-liu-resume-p1.jpg" alt="Page 1 of David Liu's research résumé: education, research and open-source experience, professional experience" width="773" height="1000" loading="lazy" decoding="async" />
    <img src="/resume/david-liu-resume-p2.jpg" alt="Page 2 of David Liu's research résumé: selected publications, honors, research impact and service" width="773" height="1000" loading="lazy" decoding="async" />
  </a>
  <div class="home-resume__body">
    <p class="home-card-eyebrow">Two pages</p>
    <h3 class="home-card-title">A research résumé, kept in sync with this page.</h3>
    <p class="home-card-copy">Education, agent-infrastructure research and the four engineering roles behind it on the first page; publications, honors, and research impact on the second. The same record as the sections above, in the form people ask for it. Typeset from source, so it is regenerated rather than edited by hand.</p>
    <div class="home-resume__actions">
      <a class="home-action home-action--primary" href="/resume/david-liu-resume.pdf" target="_blank" rel="noopener">Open résumé</a>
      <a class="home-action" href="/resume/david-liu-resume.pdf" download>Download PDF</a>
    </div>
    <p class="home-resume__note">PDF · 2 pages · Updated Aug 2026</p>
  </div>
</div>

## Let's Connect

<div class="home-connect-panel">
  <p class="home-connect">I’m always glad to meet researchers and engineers thinking seriously about <strong>agent reliability</strong>, <strong>skill retrieval</strong>, <strong>research automation</strong>, or <strong>AI systems at production scale</strong>. If you are building something where the demo is the easy part, we will probably have a useful conversation.</p>
  <div class="home-tag-row" aria-label="Topics to discuss">
    <span class="home-tag">Research collaboration</span>
    <span class="home-tag">ML infrastructure</span>
    <span class="home-tag">Backend systems</span>
    <span class="home-tag">Applied AI products</span>
  </div>
  <div class="home-connect-actions">
    <a class="home-action home-action--primary" href="mailto:davidliu02k@gmail.com">Email me</a>
    <a class="home-action" href="https://www.linkedin.com/in/davidliuk/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>
    <a class="home-action" href="https://github.com/davidliuk" target="_blank" rel="me noopener noreferrer">GitHub</a>
  </div>
  <nav id="academic-profiles" class="home-profile-row" aria-label="Academic profiles">
    <span class="home-profile-row__label">Research profiles</span>
    <div class="home-tag-row">
      <a class="home-tag home-tag--link" href="https://scholar.google.com/citations?user=RzdCL4AAAAAJ&amp;hl=en" target="_blank" rel="me noopener noreferrer">Google Scholar</a>
      <a class="home-tag home-tag--link" href="https://www.semanticscholar.org/author/Dawei-Liu/50439123" target="_blank" rel="me noopener noreferrer">Semantic Scholar</a>
      <a class="home-tag home-tag--link" href="https://openreview.net/profile?id=%7EDawei_Liu6" target="_blank" rel="me noopener noreferrer">OpenReview</a>
      <a class="home-tag home-tag--link" href="https://dblp.org/pid/57/1575-5.html" target="_blank" rel="me noopener noreferrer">DBLP</a>
    </div>
  </nav>
</div>
