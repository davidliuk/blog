---
home: true
portfolio: true
avatar: /avatar.jpg
avatarStyle: "width: 50%; display: block; margin: auto;"
heroText: David's blog
name: Dawei Liu
titles:
  - MSE CIS@UPenn 26'
  - SDE Intern@TikTok 25'
  - SDE Intern@Amazon 24'
  - SDE Intern@JD.com 23'
---

# About Me

I’m **Dawei Liu**, a Master’s student in **Computer and Information Science** (CIS) at the **University of Pennsylvania** (Class of 2026), with a B.E. in **Software Engineering** from **Northeastern University**.

Currently, I’m an **SDE Intern** at **TikTok** (Shop Ads), working on **Ads delivery**, **recommendation infrastructure**, and **performance optimization** for large-scale distributed systems. Previously, I interned at **Amazon** and **JD.com**, contributing to observability frameworks, AI pipelines, and cloud-native deployment platforms. My work has been recognized with **2026 full-time return offers** from both **TikTok** and **Amazon**.

I’m passionate about building **scalable, efficient, and intelligent** systems at the intersection of **AI infrastructure** and **engineering excellence**, solving complex problems that push the boundaries of system performance and reliability.

---

## 🎓 Education

### 🔹 University of Pennsylvania – M.S.E. in Computer and Information Science

::: tip Aug 27, 2024 – May 18, 2026
:::

- **GPA**: 3.88 / 4.00
- **Awards**:
  - Hagan International Scholarship

### 🔹 Northeastern University – B.E. in Software Engineering

::: tip Sep 01, 2020 – Jul 01, 2024
:::

- **GPA**: 3.95 / 4.00
- **Awards**:
  - National Scholarship
  - Merit-based Scholarship
  - Outstanding Student Leader
  - Outstanding Graduate

### 🔹 Zhengzhou foreign language School

::: tip Sep 01, 2017 – Jul 01, 2020
:::

---

## 💼 Professional Experience

### 🔹 TikTok – SWE Intern, Commerce Ads

::: tip May 19, 2025 - Dec 05, 2025
:::

At TikTok, I focused on building **scalable and fault-tolerant recommendation infrastructure** for Commerce Ads. I designed and optimized systems to support **high-throughput, low-latency Ads delivery**, including a debugging and verfication framework for new ad formats, cache restructuring that improved stability under heavy traffic, and real-time Flink features for ranking and creative selection. My work directly enhanced the platform’s **resilience, efficiency, and rollout velocity** at global scale.

- Built the Shop Ads **Image Selection** system, modeling image posterior features, applying **exploration–exploitation** ranking, and integrating **multimodal LLM**–based image quality evaluation, to serve high-performing images, driving a **20–30%** **advv** uplift.
- Built a multi-strategy **AIGC** image generation pipeline, auto-triggering updates for incremental SPUs via delivery stream and running daily scheduling to improve the **top 90%** **cost**-contributing SPUs. Synced results to **TBase** and index service via **Flink**.
- Built **Modular Preview Flow**, a framework enabling stage-level entity injection (Ad, Creative, SPU, Image) across all delivery funnel stages with **unified filtering log**, improving **debugging** and **verification** efficiency for new ad formats and region rollout.
- Enhanced **product handler stability** by redesigning **cache mechanism** and applying **async batch fetching** with **Folly Future**, mitigating **80% of failure spikes** in high-traffic scenarios. Migrated online product value call to offline, reducing 13% latency.

---

### 🔹 Amazon – SDE Intern, Global Mile

::: tip Jun 11, 2024 - Sep 06, 2024
:::

At Amazon, I developed a **custom Java Agent** to extend OpenTelemetry’s tracing, enabling **end-to-end observability** across distributed microservices and Lambda environments. I built full-stack tools for trace visualization and implemented a **Loosely Link module** that logically connected services without direct invocations. By improving **traceability, reliability, and developer tooling**, I enhanced the debugging and monitoring experience for complex distributed systems.

- Developed a **Java Agent** that extends **OpenTelemetry**. Leveraged **ByteBuddy** to enhance methods annotated with **@WithSpan, @Input, and @Output**, enabling **automatic** **tracing** and **payload** **collection**.
- Implemented **frontend UI** and **backend APIs**, with filters, aggregation, fuzzy search, pagination, and trace details **visualizations** including tree plot, table, timeline, end-to-end hyper process and span **payloads** (inputs, outputs and errors).
- Enhanced **end-to-end traceability** with **Loosely Link module** that dynamically connects relevant services using **business IDs** and **timestamps**, enabling **logical linkage** even without **direct calls** (e.g., async **MQ** or **partial service onboarding**).
- Utilized **reflection** to detect **Lambda environments**, and employed a lightweight **Kinesis SDK**. Implemented **connection pooling**, **retry** and **flush sync** mechanisms to ensure **reliable** data streaming within Lambda **size constraints**.

---

### 🔹 JD – SDE Intern, Algorithm Tools

::: tip Jul 24, 2023 - Oct 24, 2023
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

- **Language**: Java, C/C++, Go, Python, JavaScript/TypeScript, HTML/CSS, Swift, SQL
- **Backend**: Spring Framework, Guice, Coral, Thrift, Protobuf, MyBatis, MySQL, Redis, Kafka, RabbitMQ, ElasticSearch, OpenTelemetry
- **Frontend**: React, Vue, Vite, ECharts, AWS UI, Arco Design; iOS: Swift, SwiftUI, ARKit
- **AI/ML**: PyTorch, LLM (Transformer, RLHF, Token Pruning, CLIP), RecSys (ItemCF, Two-/Three-Tower, MTL)
- **Graphics**: OpenGL, GLSL, Unity, Qt, Maya API (Plugin Development), Auto-Rigging (RigNet)
- **DevOps**: Unix/Linux, Docker, Kubernetes, Helm, AWS (DynamoDB, Kinesis, S3, Load Balancer, CodePipeline, CDK)
- **Tools**: Git, Vim, SSH, CI/CD, Shell, Markdown, LaTeX, Mermaid, VuePress

---

## 💬 Let’s Connect

Whether you're into **Ads Delivery**, **recommendation systems**, **AI infra**, or **excellent engineering**, I'd love to connect and chat. Thanks for stopping by!
