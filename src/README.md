---
home: true
portfolio: true
avatar: /avatar.jpg
avatarStyle: "width: 50%; display: block; margin: auto;"
heroText: David's blog
name: Dawei Liu
titles:
  - MSE CIS@UPenn 26'
  - SWE Intern@TikTok 25'
  - SDE Intern@Amazon 24'
  - SDE Intern@JD.com 23'
---

# About Me

I’m **Dawei Liu**, a Master’s student in **Computer and Information Science** (CIS) at the **University of Pennsylvania** (Class of 2026), with a B.E. in **Software Engineering** from **Northeastern University**.

Recently, I worked at **TikTok** (Shop Ads), where I joined as an SDE Intern and was converted to a **Software Engineer** within 12 weeks. During my **8**-month tenure, I worked on closed-loop Ads delivery, Image Selection with **exploration and exploitation** strategy, **Multimodal LLM-based** image understanding, **GenAI image** integration, and recommendation infrastructure optimization.

Previously, I contributed to **observability** frameworks as an SDE Intern at **Amazon**. I also optimized **AI** computing platform **infra** and **AIGC marketing** workflows as a Backend SDE Intern at **JD.com**.

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

### 🔹 TikTok – SWE Intern, Shop Ads

::: tip May 19, 2025 - Dec 05, 2025
:::

#### **📈 Business Impact — Driving Creative Performance & Revenue Lift**

I worked on the intelligence layer that powers TikTok Shop Ads’ PSA Carousel effectiveness. By designing the Image Selection system with posterior feature modeling, exploration–exploitation ranking, and multimodal LLM-based quality scoring, I helped the platform consistently surface high-performing creatives—resulting in a **20%+ advv uplift**. I also integrated GenAI enhancement and generation pipelines, enabling automated creative production for the **top 90% of cost-driving products**, significantly expanding high-quality supply for advertisers.

------

#### **🧱 Delivery Foundation — Scaling Global Ad Serving & Rollout Velocity**

Beyond model/feature work, I contributed to the core **delivery foundation** that supports global ad serving. I built the **Modular Preview Flow**, a flexible injection and verification framework across the entire delivery funnel (Ad → Creative → SPU → Image). This unified filtering log and stage-level previewing capability **accelerated debugging**, increased **format rollout confidence**, and enabled smoother expansion into new regions and surfaces. I also delivered Flink-based real-time features and end-to-end creative sync workflows (TBase → Forward Index), strengthening the reliability of ads delivery pipelines.

------

#### **⚙️ Engineering Excellence — High Reliability, Low Latency Systems**

To ensure Shop Ads Carousel could withstand global scale growing traffic (300k+ QPS), I focused on engineering excellence: redesigning the product handler’s caching architecture, introducing async batch fetching with Folly Future, and shifting product-value computations offline. These improvements reduced **p99 latency by 43.6%** and eliminated **80% of failure spikes** during high-traffic surges—directly enhancing the stability and resilience of the ads serving stack.

- Built the Shop Ads **Image Selection** system, modeling image posterior features, applying **exploration–exploitation** ranking, and integrating **multimodal LLM**–based image quality evaluation, to serve high-performing images, driving a **20%+** **advv** uplift.
- Integrate **GenAI** image enhancement and generation, auto-producing for all products via delivery stream and running weekly scheduling to produce the **top 90%** **cost**-coverage products. Persisted assets in **TBase** and synced to **Forward Index** via **Flink**.
- Built **Modular Preview Flow**, a framework enabling stage-level entity injection (Ad, Creative, SPU, Image) across the delivery funnel with **unified filtering log**, improving **debugging** and **verification** efficiency for new ad formats and region rollouts.
- Optimized **product handler stability** and **latency** by redesigning local **cache**, applying **async batch fetching** with **Folly Future**, and migrating online product value call to offline, reducing **43.6**% p99 latency and **80**% of failure spikes in high-traffic scenarios.

---

### 🔹 Amazon – SDE Intern, Global Mile

::: tip Jun 11, 2024 - Sep 06, 2024
:::

At Amazon, I developed a **custom Java Agent** to extend OpenTelemetry’s tracing, enabling **end-to-end observability** across microservices and Lambda environments. I built full-stack tools for trace visualization and implemented a **Loosely Link module** that surfaced hidden cross-service relationships, improved on-call tracing clarity, and enabled reliable instrumentation in heterogeneous runtime environments.

- Developed a **Java Agent** that extends **OpenTelemetry**. Leveraged **ByteBuddy** to enhance methods annotated with **@WithSpan, @Input, and @Output**, enabling **automatic** **tracing** and **payload** **collection**.
- Implemented **Loosely Linked Tracing** module to reconstruct cross-service call chains via business IDs and timestamps, enabling trace **aggregation** even when intermediate services **lack instrumentation**. (e.g., **MQ** or **partial** service onboarding).
- Extended the Java Agent to support both AWS **Fargate** and **Lambda**, using **reflection**-based runtime detection to adapt data delivery via **Kinesis** (high-throughput) or **SQS** (event-driven tasks), ensuring reliability and efficiency across environments.
- Built a **full-stack** telemetry console with React **frontend** and Java **backend**, supporting flexible querying (filters, aggregation, fuzzy search, pagination) and multi-view trace **visualization** (tree, table, timeline, and span **payloads**).

---

### 🔹 JD – SDE Intern, Algorithm Tools

::: tip Jul 24, 2023 - Oct 24, 2023
:::

At JD.com, I worked on platform engineering for internal AI tooling. I redesigned a **resource management service** using Kubernetes' `Informer` + observer pattern, reducing start-up time by 20x. I introduced **GitOps + Argo Workflows** for cloud-native CI/CD, built Helm charts for privatized deployments, and improved code modularity for activity page generation using **AIGC pipelines**. My work enabled faster and more maintainable delivery of algorithmic components.

- Redesigned resource management service with **ConfigMap**-based **automation** and Kubernetes **Informers**; introduced async **resource recalculation**, observer pattern, and sharded row locking, cutting service cold-start time by **20×**.
- Refactored campaign page generation service with the **Strategy pattern**, improving module reusability and maintainability.
- Designed **AIGC**-integrated generation pipelines for automated creation of campaign page sections, reducing manual workload.
- Enhanced CI/CD pipelines with cloud-native GitOps workflows built on **Argo Workflows** and **Argo CD**, improving automation.
- Developed **Helm charts** for **multi-tenant** deployments, enabling client-specific delivery in hybrid-cloud environments.

---

## 🛠️ Tech Stack

- **Language**: C/C++, Java, Go, Python, JavaScript/TypeScript, HTML/CSS, SQL
- **Backend**: Spring Framework, Guice, Coral, Thrift/Protobuf, MySQL, Redis, Kafka, RabbitMQ, ElasticSearch, OpenTelemetry
- **Frontend**: React, Vue, Vite, ECharts, AWS UI, Arco Design; iOS: Swift, SwiftUI, ARKit
- **AI/ML**: A/B Testing, PyTorch, RecSys (ItemCF, Two-/Tri-Tower, exploration–exploitation strategy), LLM (Transformer, Token Pruning, CLIP)
- **Graphics**: OpenGL, GLSL, Unity, Qt, Maya API (Plugin Development), Auto-Rigging (RigNet)
- **DevOps**: Unix/Linux, Docker, Kubernetes, Grafana, Helm, AWS (DynamoDB, Kinesis, SQS, S3, CDK, Lambda)
- **Tools**: Git, Vim, SSH, CI/CD, Shell, Markdown, LaTeX, Mermaid, VuePress

---

## 💬 Let’s Connect

Whether you're into **Ads Delivery**, **recommendation systems**, **AI infra**, or **excellent engineering**, I'd love to connect and chat. Thanks for stopping by!
