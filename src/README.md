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
  - MSE CIS@UPenn 26'
  - SWE Intern@TikTok 25'
  - SDE Intern@Amazon 24'
  - SDE Intern@JD.com 23'
welcome: Hello, I'm
content: portfolio
---

<PortfolioAffiliations />

<nav class="home-page-nav" aria-label="On this page">
  <a class="home-page-nav__link" href="#about">About</a>
  <a class="home-page-nav__link" href="#📚-publications">Publications</a>
  <a class="home-page-nav__link" href="#🎓-education">Education</a>
  <a class="home-page-nav__link" href="#💼-professional-experience">Experience</a>
  <a class="home-page-nav__link" href="#🛠️-tech-stack">Tech stack</a>
</nav>

# About

<p class="home-lead">Master’s student in <strong>Computer and Information Science</strong> at the <strong>University of Pennsylvania</strong> (2026), with a B.E. in <strong>Software Engineering</strong> from <strong>Northeastern University</strong>. I work across <strong>large-scale ads systems</strong>, <strong>AI infrastructure</strong>, and <strong>research</strong> on agents and multimodal learning.</p>

Recently, I worked at **TikTok** (Shop Ads), where I joined as an SDE Intern and was converted to a **Software Engineer** within 12 weeks. During my **8**-month tenure, I worked on closed-loop Ads delivery, Image Selection with **exploration and exploitation** strategy, **Multimodal LLM-based** image understanding, **GenAI image** integration, and recommendation infrastructure optimization.

Previously, I contributed to **observability** frameworks as an SDE Intern at **Amazon**. I also optimized **AI** computing platform **infra** and **AIGC marketing** workflows as a Backend SDE Intern at **JD.com**.

I’m passionate about building **scalable, efficient, and intelligent** systems at the intersection of **AI infrastructure** and **engineering excellence**, solving complex problems that push the boundaries of system performance and reliability.

---

## 📚 Publications

<PublicationList>
  <PublicationCard
    title="Graph of Skills: Dependency-Aware Structural Retrieval for Massive Agent Skills"
    :authors="['Dawei Liu*','Zongxia Li*','Hongyang Du','Xiyang Wu','Shihang Gui','Yongbei Kuang','Lichao Sun']"
    image="/publication/gos.png"
    venue="Preprint"
    date="Mar 2026"
    abstract="Skill usage has become a core component of modern agent systems and can substantially improve agents' ability to complete complex tasks. In real-world settings, where agents must monitor and interact with numerous personal applications, web browsers, and other environment interfaces, skill libraries can scale to thousands of reusable skills. Scaling to larger skill sets introduces two key challenges. First, loading the full skill set saturates the context window, driving up token costs, hallucination, and latency. In this paper, we present Graph of Skills (GoS), an inference-time structural retrieval layer for large skill libraries. GoS constructs an executable skill graph offline from skill packages, then at inference time retrieves a bounded, dependency-aware skill bundle through hybrid semantic-lexical seeding, reverse-weighted Personalized PageRank, and context-budgeted hydration. On SkillsBench and ALFWorld, GoS improves average reward by 43.6% over the vanilla full skill-loading baseline while reducing input tokens by 37.8%, and generalizes across three model families: Claude Sonnet, GPT-5.2 Codex, and MiniMax. Additional ablation studies across skill libraries ranging from 200 to 2,000 skills further demonstrate that GoS consistently outperforms both vanilla skills loading and simple vector retrieval in balancing reward, token efficiency, and runtime."
    github="https://github.com/davidliuk/graph-of-skills"
  />

  <PublicationCard
    title="Multimodal Video Generation Models with Audio: Present and Future"
    :authors="['Zongxia Li','Hongyang Du','Dawei Liu','Xiyang Wu','Lantao Yu','Jingxi Chen','Fuxiao Liu','Xiaomin Wu','Jing Xie','Chengsong Huang','Yicheng He','Guangyao Shi']"
    image="/publication/vgm.jpeg"
    venue="Preprint"
    date="Feb 2026"
    abstract="Video generation models have advanced rapidly and are now widely used across entertainment, advertising, filmmaking, and robotics applications such as world modeling and simulation. However, visual content alone is often insufficient for realistic and engaging media experiences—audio is also a key component of immersion and semantic coherence. As AI-generated videos become increasingly prevalent in everyday content, demand has grown for systems that can generate synchronized sound alongside visuals. This trend has driven rising interest in multimodal video generation, which jointly models video and audio to produce more complete, coherent, and appealing outputs. Since late 2025, a wave of multimodal video generation models has emerged, with releases including Veo 3.1, Sora 2, Kling 2.6, Wan 2.6, OVI, and LTX 2. As multimodal generation technology advances, its impact expands across both daily consumer and industrial domains—revolutionizing daily entertainment while enabling more sophisticated world simulation for training embodied AI systems. In this paper, we provide a comprehensive overview of the multimodal video generation model literature covering the major topics: evolution and common architectures of multimodal video generation models; common post-training methods and evaluation; applications and active research areas of video generation; limitations and challenges of multimodal video generation."
    paper="https://www.researchgate.net/publication/401388352_Multimodal_Video_Generation_Models_with_Audio_Present_and_Future"
    github="https://github.com/zli12321/Multimodal-VIdeo-Generation-Collections-Video-and-Audio"
  />

  <PublicationCard
    title="A Cookbook of 3D Vision: Data, Learning Paradigms, and Application"
    :authors="['Hongyang Du*','Zongxia Li*','Dawei Liu*','Runhao Li*','Haoyuan Song','Qingyu Zhang','Yubo Wang','Jingcheng Ni','Shihang Gui','Congchao Dong','Tao Hu']"
    image="/publication/3dv.jpeg"
    venue="CVPR 2026 Workshop (OpenSUN3D)"
    date="Mar 2026"
    abstract="3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representations and benchmarks, making it difficult to develop unified perspectives on efficiency, fidelity, and scalability. This work provides a data-centric taxonomy of 3D vision that connects geometric representations, datasets, learning frameworks, and applications within a single conceptual map. We begin by surveying the principal structural representations of 3D data—point clouds, meshes, voxels, and 3D Gaussians—along with their acquisition pipelines. We then examine how dataset design, benchmark construction, and supervision regimes shape recent advances, spanning 2D-supervised 3D learning, implicit neural representations, and 4D world modeling. Through this integrative lens, we clarify the relationships among representations, learning paradigms, and downstream tasks in reconstruction, generation, and video modeling, offering a consolidated view of emerging trends toward balancing efficiency and fidelity and toward multimodal geometric grounding."
    github="https://github.com/Hongyang-Du/awesome-3d-datasets"
  />

  <PublicationCard
    title="TIMEDB: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization"
    :authors="['Xueying Wang*','Lingxi Chen*','Wei Liu','Yuanzheng Zhang','Dawei Liu','Chenxin Zhou','Shuai Shi','Jiajie Dong','Zhengtao Lai','Bingran Zhao','Wenjingyu Zhang','Haoyue Cheng','Shuaicheng Li']"
    image="/publication/timedb.png"
    venue="Nucleic Acids Research"
    date="Jan 2023"
    abstract="Deciphering the cell-type composition in the tumor immune microenvironment (TIME) can significantly increase the efficacy of cancer treatment and improve the prognosis of cancer. Such a task has benefited from microarrays and RNA sequencing technologies, resulting in extensive expression profiles with clinical phenotypes across multiple cancers. Current tools infer cell-type composition from bulk expression profiles, enabling investigation of inter- and intra-heterogeneity of TIME across cancer types. TIMEDB is an online database for human TIME cell-type composition estimated from bulk expression profiles, storing curated expression and composition profiles with clinical information for 39,706 samples from 546 datasets across 43 cancer types, equipped with online tools for automatic analysis and interactive visualization."
    paper="https://doi.org/10.1093/nar/gkac1006"
    website="https://timedb.deepomics.org"
    github="https://github.com/deepomicslab/TIMEDB"
  />
</PublicationList>

---

## 🎓 Education

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

## 💼 Professional Experience

### <VPIcon icon="/TikTok_logo.svg" size="2rem" verticalAlign="middle"/> - Software Engineer <Badge text="Intern" type="info" vertical="top" /> <Badge text="2026 FTE Return Offer" type="tip" vertical="top"/>

::: right
**Shop Ads Team** | _Seattle, WA_
May 2025 – Dec 2025
:::

::: tabs

@tab 📈 Business Impact

I worked on the intelligence layer that powers TikTok Shop Ads’ PSA Carousel effectiveness. By designing the Image Selection system with posterior feature modeling, exploration–exploitation ranking, and multimodal LLM-based quality scoring, I helped the platform consistently surface high-performing creatives—resulting in a **20%+ ad revenue uplift**. I also integrated GenAI enhancement and generation pipelines, enabling automated creative production for the **top 90% of cost-driving products**, significantly expanding high-quality supply for advertisers.

@tab 🧱 Delivery Foundation

Beyond image selection work, I contributed to the core **delivery foundation** that supports global ad serving. I built the **Modular Preview Flow**, a flexible injection and verification framework across the entire delivery funnel (Ad → Creative → SPU → Image). This unified filtering log and stage-level previewing capability **accelerated debugging**, increased **format rollout confidence**, and enabled smoother expansion into new regions and surfaces. I also delivered Flink-based real-time features and end-to-end creative sync workflows (TBase → Forward Index), strengthening the reliability of ads delivery pipelines.

@tab ⚙️ Engineering Excellence

To ensure Shop Ads Carousel could withstand global scale growing traffic (300k+ QPS), I focused on engineering excellence: redesigning the product handler’s caching architecture, introducing async batch fetching with Folly Future, and shifting product-value computations offline. These improvements reduced **p99 latency by 43.6%** and eliminated **80% of failure spikes** during high-traffic surges—directly enhancing the stability and resilience of the ads serving stack.

:::

- Built the Shop Ads **Image Selection** system, modeling image posterior features, applying **exploration–exploitation** ranking, and integrating **multimodal LLM**–based image quality evaluation, to serve high-performing images, driving a **20%+** **Revenue** uplift.
- Integrated **GenAI** image enhancement and generation ability, producing for all products via delivery stream and running weekly scheduling to produce the **top 90%** cost-coverage products. Persisted assets in **TBase** and synced to **Forward Index** via **Flink**.
- Built **Modular Preview Flow**, a framework enabling stage-level entity injection (Ad, Creative, SPU, Image) across the delivery funnel with **unified filtering log**, improving **debugging** and **verification** efficiency for new ad formats and region rollouts.
- Optimized **product handler stability** and **latency** by redesigning local **cache**, applying **async batch fetching** with **Folly Future**, and migrating online product value call to offline, reducing **43.6**% p99 latency and **80**% of failure spikes in high-traffic scenarios.

---

### <VPIcon icon="/Amazon_logo.svg" size="2rem" verticalAlign="middle"/> – Software Development Engineer <Badge text="Intern" type="info" vertical="top" /> <Badge text="2026 FTE Return Offer" type="tip" vertical="top"/>

::: right
**Global Mile Team** | _Beijing, China_
Jun 2024 - Sep 2024
:::

At Amazon, I developed a **custom Java Agent** to extend OpenTelemetry’s tracing, enabling **end-to-end observability** across microservices and Lambda environments. I built full-stack tools for trace visualization and implemented a **Loosely Linked module** that surfaced hidden cross-service relationships, improved on-call tracing clarity, and enabled reliable instrumentation in heterogeneous runtime environments.

- Developed a **Java Agent** that extends **OpenTelemetry**. Leveraged **ByteBuddy** to enhance methods annotated with **@WithSpan, @Input, and @Output**, enabling **automatic** **tracing** and **payload** **collection**.
- Implemented **Loosely Linked Tracing** module to reconstruct cross-service call chains via business IDs and timestamps, enabling trace **aggregation** even when intermediate services **lack instrumentation**. (e.g. **MQ** or **partial** service onboarding).
- Extended the Java Agent to support both AWS **Fargate** and **Lambda**, using **reflection**-based runtime detection to adapt data delivery via **Kinesis** (high-throughput) or **SQS** (event-driven tasks), ensuring reliability and efficiency across environments.
- Built a **full-stack** telemetry console with React **frontend** and Java **backend**, supporting flexible querying (filters, aggregation, fuzzy search, pagination) and multi-view trace **visualization** (tree, table, timeline, and span **payloads**).

---

### <VPIcon icon="/JD.com_logo.png" size="2rem" verticalAlign="middle"/> – Software Development Engineer <Badge text="Intern" type="info" vertical="top" />

::: right
**Algorithm Tools Team** | _Beijing, China_
Jul 2023 - Oct 2023
:::

At JD.com, I worked on platform engineering for internal AI tooling. I redesigned a **resource management service** using Kubernetes' `Informer` + observer pattern, reducing start-up time by 20x. I introduced **GitOps + Argo Workflows** for cloud-native CI/CD, built Helm charts for privatized deployments, and improved code modularity for activity page generation using **AIGC pipelines**. My work enabled faster and more maintainable delivery of algorithmic components.

- Redesigned resource management service with **ConfigMap**-based **automation** and Kubernetes **Informers**; introduced async **resource recalculation**, observer pattern, and sharded row locking, cutting service cold-start time by **20×**.
- Refactored campaign page generation service with the **Strategy pattern**, improving module reusability and maintainability.
- Designed **AIGC**-integrated generation pipelines for automated creation of campaign page sections, reducing manual workload.
- Enhanced CI/CD pipelines with cloud-native GitOps workflows built on **Argo Workflows** and **Argo CD**, improving automation.
- Developed **Helm charts** for **multi-tenant** deployments, enabling client-specific delivery in hybrid-cloud environments.

---

## 🛠️ Tech Stack

::: tabs

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
  <TechCard title="RecSys" :items="['ItemCF','Two-Tower','Tri-Tower','Exploration–Exploitation']" />
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

:::

---

## 💬 Let’s Connect

<p class="home-connect">Interested in <strong>ads delivery</strong>, <strong>recommendation systems</strong>, <strong>AI infra</strong>, or <strong>engineering at scale</strong>. I’m always happy to connect — reach out via the links above or email.</p>
