---
home: true
portfolio: true
avatar: /avatar.jpg
heroText: David's blog
avatarStyle:
  max-width: 50%
  border-radius: 50%
  box-shadow: 0 4px 15px rgba(0,0,0,0.2)
  display: block
  margin: auto
name: Dawei Liu
titles:
  - MSE CIS@UPenn 26'
  - SWE Intern@TikTok 25'
  - SDE Intern@Amazon 24'
  - SDE Intern@JD.com 23'
welcome: 👋 Hi there, I am
content: portfolio
---

:::: center
[🧑‍💻 About](#about) | [📚 Publications](#📚-publications) | [🎓 Education](#🎓-education) | [💼 Experience](#💼-professional-experience) | [🛠️ Tech Stack](#🛠️-tech-stack)
::::

# About

I’m **Dawei Liu**, a Master’s student in **Computer and Information Science** (CIS) at the **University of Pennsylvania** (Class of 2026), with a B.E. in **Software Engineering** from **Northeastern University**.

Recently, I worked at **TikTok** (Shop Ads), where I joined as an SDE Intern and was converted to a **Software Engineer** within 12 weeks. During my **8**-month tenure, I worked on closed-loop Ads delivery, Image Selection with **exploration and exploitation** strategy, **Multimodal LLM-based** image understanding, **GenAI image** integration, and recommendation infrastructure optimization.

Previously, I contributed to **observability** frameworks as an SDE Intern at **Amazon**. I also optimized **AI** computing platform **infra** and **AIGC marketing** workflows as a Backend SDE Intern at **JD.com**.

I’m passionate about building **scalable, efficient, and intelligent** systems at the intersection of **AI infrastructure** and **engineering excellence**, solving complex problems that push the boundaries of system performance and reliability.

---

## 📚 Publications

<PublicationList>
  <PublicationCard
    title="TIMEDB: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization"
    :authors="['Xueying Wang','Lingxi Chen','Wei Liu','Yuanzheng Zhang','Dawei Liu','Chenxin Zhou','Shuai Shi','Jiajie Dong','Zhengtao Lai','Bingran Zhao','Wenjingyu Zhang','Haoyue Cheng','Shuaicheng Li']"
    image="/publication/timedb.png"
    venue="Nucleic Acids Research"
    date="Jan 2023"
    abstract="Deciphering the cell-type composition in the tumor immune microenvironment (TIME) can significantly increase the efficacy of cancer treatment and improve the prognosis of cancer. Such a task has benefited from microarrays and RNA sequencing technologies, resulting in extensive expression profiles with clinical phenotypes across multiple cancers. Current tools infer cell-type composition from bulk expression profiles, enabling investigation of inter- and intra-heterogeneity of TIME across cancer types. TIMEDB is an online database for human TIME cell-type composition estimated from bulk expression profiles, storing curated expression and composition profiles with clinical information for 39,706 samples from 546 datasets across 43 cancer types, equipped with online tools for automatic analysis and interactive visualization."
    paper="https://doi.org/10.1093/nar/gkac1006"
    website="https://timedb.deepomics.org"
    github="https://github.com/deepomicslab/TIMEDB"
  />

<PublicationCard
    title="A Data-Centric Taxonomy for 3D Vision: Linking Representations, Augmentation, and State-of-the-Art Learning Paradigms"
    :authors="['Hongyang Du*','Runhao Li*','Dawei Liu*','Haoyuan Song','Qingyu Zhang','Yubo Wang','Jingcheng Ni','Shihang Gui','Congchao Dong','Tao Hu','Dang-Quang Tran']"
    image="/publication/3dv.jpeg"
    venue="Preprint"
    date="Oct 2025"
    abstract="3D vision has rapidly evolved with diverse data modalities, learning paradigms, and modeling strategies, yet remains fragmented across representations and benchmarks. This work provides a data-centric taxonomy connecting geometric representations, datasets, and learning frameworks, analyzing trade-offs among point clouds, meshes, voxels, implicit fields, and 3D Gaussians, and how benchmarks and supervision regimes shape advances like 2D-supervised 3D learning, implicit neural representations, and 4D world modeling. It clarifies relationships between representations and downstream applications in reconstruction, generation, and video modeling, offering a consolidated view toward efficiency–fidelity balance and multimodal geometric grounding."
    paper="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=lrHQxmkAAAAJ&citation_for_view=lrHQxmkAAAAJ:u-x6o8ySG0sC"
    github="https://github.com/Hongyang-Du/awesome-3d-datasets"
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
- Implemented **Loosely Linked Tracing** module to reconstruct cross-service call chains via business IDs and timestamps, enabling trace **aggregation** even when intermediate services **lack instrumentation**. (e.g., **MQ** or **partial** service onboarding).
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

Whether you're into **Ads Delivery**, **Recommendation Systems**, **AI Infra**, or **Excellent Engineering**, I'd love to connect and chat. Thanks for stopping by!
