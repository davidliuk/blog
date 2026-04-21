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

### <VPIcon icon="/TikTok_logo.svg" size="2rem" verticalAlign="middle"/> - Software Engineer Intern <Badge text="2026 FTE Return Offer" type="tip" vertical="top"/>

:::: right
**Shop Ads Team** | _Seattle, WA_
May 2025 – Dec 2025
::::

- Built the Shop Ads **Image Selection** system, modeling image posterior features, applying **exploration-exploitation** ranking, and integrating **multimodal LLM**-based image quality evaluation to serve high-performing images, driving a **3.4%+ revenue** uplift.
- Developed a **GenAI** image enhancement and generation pipeline, generating assets for items via the delivery stream and weekly scheduling for high-value products, persisting assets in **TBase** and **Forward Index** via **Flink**, driving a **12%+ revenue** uplift.
- Built **Modular Preview Flow**, a framework enabling stage-level entity injection (Ad, Creative, SPU, Image) across the delivery funnel with a **unified diagnostic log**, accelerating **debugging** and **verification** for new ad formats and region-specific rollouts.
- Optimized **Product Handler stability** and **latency** by redesigning local **cache**, applying async batch fetching with **Folly Future**, and migrating online product value calls offline, reducing **43.6%** p99 latency and **80%** of failure spikes during peak traffic.

---

### <VPIcon icon="/Amazon_logo.svg" size="2rem" verticalAlign="middle"/> - Software Development Engineer Intern <Badge text="2026 FTE Return Offer" type="tip" vertical="top"/>

:::: right
**Global-Mile Team** | _Beijing, China_
Jun 2024 - Aug 2024
::::

At Amazon, I developed a **Java Agent** extending **OpenTelemetry** for non-intrusive instrumentation across microservices and Lambda environments. I also built a full-stack telemetry console and a **Loosely Linked Tracing** module to improve distributed observability in heterogeneous runtime environments.

- Developed a **Java Agent** extending **OpenTelemetry** using **ByteBuddy** for **non-intrusive instrumentation**; enabled automatic payload collection and tracing by intercepting method execution at runtime without code modification.
- Implemented a **Loosely Linked Tracing** module to reconstruct **distributed call chains** via business IDs, ensuring trace continuity across uninstrumented services such as legacy message queues and partial service onboardings.
- Extended the Java Agent to support both AWS **Fargate** and **Lambda**, using **reflection**-based runtime detection to adapt data delivery via **Kinesis** (high-throughput) or **SQS** (event-driven tasks), ensuring reliability and efficiency across environments.
- Built a **full-stack** telemetry console with React **frontend** and Java **backend**, supporting flexible querying (filters, aggregation, fuzzy search, pagination) and multi-view trace **visualization** (tree, table, timeline, and span **payloads**).

---

### <VPIcon icon="/JD.com_logo.png" size="2rem" verticalAlign="middle"/> - Software Development Engineer Intern

:::: right
**Algorithm Tools Team** | _Beijing, China_
Jul 2023 - Oct 2023
::::

At JD.com, I worked on platform engineering for internal AI tooling. I redesigned the resource management service, improved modularity in campaign page generation, introduced cloud-native GitOps workflows, and built deployment tooling for multi-tenant delivery.

- Redesigned the resource management service with **ConfigMap**-based automation and Kubernetes **Informers**; introduced async **resource recalculation**, the observer pattern, and sharded row locking, cutting service cold-start time by **20x**.
- Refactored the campaign page generation service with a modular **Strategy pattern**, decoupling business logic to improve reusability.
- Designed a **GenAI**-integrated pipeline to automate the creation of campaign page sections, significantly reducing manual workload.
- Enhanced CI/CD pipelines with cloud-native GitOps workflows built on **Argo Workflows** and **Argo CD**, improving automation.
- Developed **Helm charts** for **multi-tenant** deployments, enabling client-specific delivery in hybrid-cloud environments.

---

## Tech Stack

<p class="home-section-intro">A practical toolkit shaped by backend engineering, ML experimentation, and product-facing system design.</p>

:::: tabs

@tab Language

<TechGrid>
  <TechCard title="General" :items="['C/C++','Java','Go']" badge-type="tip" />
  <TechCard title="Scripting" :items="['Python','JavaScript','TypeScript']" />
  <TechCard title="Data & Markup" :items="['SQL','HTML','CSS']" />
</TechGrid>

@tab Backend

<TechGrid>
  <TechCard title="Frameworks" :items="['Spring','Guice','Coral']" badge-type="tip" />
  <TechCard title="RPC / IDL" :items="['Thrift','Protobuf']" />
  <TechCard title="Storage" :items="['MySQL','Redis','ElasticSearch']" badge-type="warning" />
  <TechCard title="Messaging" :items="['Kafka','RabbitMQ']" />
  <TechCard title="Observability" :items="['OpenTelemetry']" />
</TechGrid>

@tab Frontend

<TechGrid>
  <TechCard title="Web" :items="['React','Vue','Vite']" badge-type="tip" />
  <TechCard title="DataViz & UI" :items="['ECharts','AWS UI','Arco Design']" />
  <TechCard title="iOS" :items="['Swift','SwiftUI','ARKit']" />
</TechGrid>

@tab AI / ML

<TechGrid>
  <TechCard title="Frameworks" :items="['PyTorch']" badge-type="tip" />
  <TechCard title="RecSys" :items="['ItemCF','Two-Tower','Tri-Tower','Exploration-Exploitation']" />
  <TechCard title="LLM" :items="['Transformer','Token Pruning','CLIP']" />
  <TechCard title="Experimentation" :items="['A/B Testing']" />
</TechGrid>

@tab Graphics

<TechGrid>
  <TechCard title="Engine & Shader" :items="['OpenGL','GLSL','Unity']" badge-type="tip" />
  <TechCard title="Toolkits" :items="['Qt','Maya API','RigNet']" />
</TechGrid>

@tab DevOps

<TechGrid>
  <TechCard title="Platforms" :items="['Unix/Linux','Docker','Kubernetes']" badge-type="tip" />
  <TechCard title="Observability & Ops" :items="['Grafana','Helm']" />
  <TechCard title="AWS" :items="['DynamoDB','Kinesis','SQS','S3','CDK','Lambda']" />
</TechGrid>

@tab Tools

<TechGrid>
  <TechCard title="Dev" :items="['Git','Vim','SSH','Shell']" badge-type="tip" />
  <TechCard title="Docs & Diagrams" :items="['Markdown','LaTeX','Mermaid','VuePress']" />
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