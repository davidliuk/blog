---
home: true
portfolio: true
avatar: /avatar.jpg
avatarStyle: "width: 50%; display: block; margin: auto;"
heroText: David's blog
name: Dawei Liu
titles: 

 - CS@UPenn 26'
 - SDE Intern@TikTok 25'
 - SDE Intern@Amazon 24'
 - SDE Intern@JD.com 23'
---

# About Me

I’m **Dawei Liu**, a graduate student in **Computer and Information Science (CIS)** at the **University of Pennsylvania**, expected to graduate in **May 2026**. I hold a **Bachelor’s degree in Software Engineering** from **Northeastern University (NEU)**.

Currently, I’m an **SDE Intern at TikTok**, working on the **Commerce Ads team**, where I focus on **Ads delivery**, **recommendation infrastructure** and **performance optimization** for large-scale ads delivery systems. Previously, I interned at **Amazon** and **JD.com**, where I contributed to the distributed systems observability and AI platforms. I was honored to receive **2026 full-time return offers** from both **TikTok and Amazon** for my internship performance.

I enjoy working at the intersection of **AI infrastructure and systems performance**, and I’m passionate about solving large-scale engineering problems that demand both **scalability and efficiency**.

---

## 🎓 Education

### 🔹 University of Pennsylvania – M.S.E in Computer and Information Science 

::: tip Aug 2024 – May 2026
:::

- **GPA**: 3.88 / 4.00
- **Awards**:
  - Hagan International Scholarship

### 🔹 Northeastern University – B.E. in Software Engineering 

::: tip Sep 2020 – Jul 2024
:::
- **GPA**: 3.95 / 4.00
- **Awards**: 
  - National Scholarship
  - Merit-based Scholarship
  - Outstanding Student Leader
  - Outstanding Graduate

---

## 💼 Professional Experience

### 🔹 TikTok – SWE Intern, Commerce Ads

::: tip May 2025 - Dec 2025
:::

At TikTok, I focused on building **scalable and fault-tolerant recommendation infrastructure** for Commerce Ads. I designed and optimized systems to support **high-throughput, low-latency Ads delivery**, including a debugging and verfication framework for new ad formats, cache restructuring that improved stability under heavy traffic, and real-time Flink features for ranking and creative selection. My work directly enhanced the platform’s **resilience, efficiency, and rollout velocity** at global scale.

- Built **Modular Preview Flow**, a framework enabling stage-level entity injection (Ad group, Creative, SPU) across all delivery funnel stages with **unified filtering log**, improving **debugging** and **verification** efficiency for new ad formats and region rollout.
- Enhanced **product handler stability** by redesigning **cache mechanism** and applying **async batch fetching** with **Folly Future**, mitigating **80% of failure spikes** in high-traffic scenarios. Migrated online product value call to **offline**, reducing **13% latency.**
- Merged default and retrieval clusters of product handler by improving **stability**, reducing **latency** and extracting **filter logic**.
- Developed a **realtime feature** for PSA Carousel Image Selection with posterior **impression/click events** gourped by image **URI**.
- Integrated **offline** **AIGC** pipeline for **high-GMV** products, backfilling images into **TBase** and updating index service with **Flink**.

---

### 🔹 Amazon – SDE Intern, Global Mile

::: tip Jun 2024 - Sep 2024
:::

At Amazon, I developed a **custom Java Agent** to extend OpenTelemetry’s tracing, enabling **end-to-end observability** across distributed microservices and Lambda environments. I built full-stack tools for trace visualization and implemented a **Loosely Link module** that logically connected services without direct invocations. By improving **traceability, reliability, and developer tooling**, I enhanced the debugging and monitoring experience for complex distributed systems.

- Developed a **Java Agent** that extends **OpenTelemetry**. Leveraged **ByteBuddy** to enhance methods annotated with **@WithSpan, @Input, and @Output**, enabling **automatic** **tracing** and **payload** **collection**.
- Implemented **frontend UI** and **backend APIs**, with filters, aggregation, fuzzy search, pagination, and trace details **visualizations** including tree plot, table, timeline, end-to-end hyper process and span **payloads** (inputs, outputs and errors).
- Enhanced **end-to-end traceability** with **Loosely Link module** that dynamically connects relevant services using **business IDs** and **timestamps**, enabling **logical linkage** even without **direct calls** (e.g., async **MQ** or **partial service onboarding**).
- Utilized **reflection** to detect **Lambda environments**, and employed a lightweight **Kinesis SDK**. Implemented **connection pooling**, **retry** and **flush sync** mechanisms to ensure **reliable** data streaming within Lambda **size constraints**.

---

### 🔹 JD – SDE Intern, Algorithm Tools

::: tip Jul 2023 - Oct 2023
:::

At JD.com, I worked on platform engineering for internal AI tooling. I redesigned a **resource management service** using Kubernetes' `Informer` + observer pattern, reducing start-up time by 20x. I introduced **GitOps + Argo Workflows** for cloud-native CI/CD, built Helm charts for privatized deployments, and improved code modularity for activity page generation using **AIGC pipelines**. My work enabled faster and more maintainable delivery of algorithmic components.

- Refactored the **resource management service** with **ConfigMap** for automated and configurable **resource-splitting solutions**.
- Utilized the Kubernetes **Informer** mechanism, **observer** pattern, **async** processing, row locking, and discard policies, to improve platform **resource recalculation efficiency** and achieve a **20x** faster service startup speed. 
- Enhanced the **CI/CD** toolchain with cloud-native CI workflows using **Argo Workflows** and **GitOps** to trigger **Argo CD**.
- Developed **Helm charts** to support robust **on-premise** and client-tailored **deployments**, enabling flexible private cloud delivery.
- Refactored the **campaign page generation service** with the **strategy pattern**, improving **modularity** and **reusability**.
- Designed generation pipelines integrated with AIGC services for automated creation of campaign page sections.

---

## 🛠️ Tech Stack

- **Language**: Java, C/C++, JavaScript/TypeScript, HTML/CSS, Go, Python, Swift, SQL
- **Backend**: Spring Framework, Guice, Coral, Thrift, Protobuf, MyBatis, MySQL, Redis, RabbitMQ, ElasticSearch, OpenTelemetry
- **Frontend**: React, Vue, Vite, ECharts, AWS UI, Arco Design; iOS: Swift, SwiftUI, ARKit
- **AI/ML**: PyTorch, LLM (Transformer, RLHF, Token Pruning, CLIP), RecSys (ItemCF, Two-/Three-Tower, MTL)
- **Graphics**: OpenGL, GLSL, Unity, Qt, Maya API (Plugin Development), Auto-Rigging (RigNet)
- **DevOps**: Unix/Linux, Docker, Kubernetes, Helm, AWS (DynamoDB, Kinesis, S3, Load Balancer, CodePipeline, CDK)
- **Tools**: Git, Vim, SSH, CI/CD, Shell, Markdown, LaTeX, Mermaid, VuePress

---

## 💬 Let’s Connect

Whether you're into **recommendation systems**, **AI infra**, or **excellent engineering**, I'd love to connect and chat. Thanks for stopping by!
