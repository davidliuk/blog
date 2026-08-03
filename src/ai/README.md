---
title: AI Systems
description: A complete AI knowledge system covering foundations, foundation models, engineering, applications, evaluation, and safety.
icon: brain
---

# AI Systems

这里把 AI 看成一个完整生命周期，而不只是一组模型：数据和目标定义问题，学习算法获得能力，训练与推理系统交付能力，应用把能力连接到用户与环境，评估和安全机制再把真实反馈带回下一轮。

<div class="ai-hero knowledge-hero">
  <p class="ai-eyebrow">AI Knowledge System</p>
  <h2>From foundations and models to reliable systems and real products.</h2>
  <p>
    内容按六个领域组织：<strong>Foundations</strong>、<strong>Foundation Models</strong>、
    <strong>AI Engineering</strong>、<strong>Applied AI</strong>、
    <strong>Evaluation</strong> 与 <strong>Safety</strong>。
    每个专题都尽量连接原理、实现、失败条件和验证方法。
  </p>
  <div class="ai-pill-row">
    <span class="ai-pill">Deep Learning</span>
    <span class="ai-pill">Foundation Models</span>
    <span class="ai-pill">Inference</span>
    <span class="ai-pill">Agents</span>
    <span class="ai-pill">Recommendation</span>
    <span class="ai-pill">Evaluation</span>
    <span class="ai-pill">Safety</span>
  </div>
</div>

## The Learning–Delivery Loop

<div class="knowledge-flow knowledge-flow--ai" aria-label="AI system layers">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Specify</strong>
    <p>定义任务、数据、标签、目标、约束和可接受风险。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Learn</strong>
    <p>用经典 ML、深度学习、预训练、微调和对齐获得能力。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Deliver</strong>
    <p>通过训练平台、推理服务、RAG、Agent 和产品工作流交付能力。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Evaluate</strong>
    <p>用离线 case、在线实验、安全控制和生产反馈持续修正系统。</p>
  </div>
</div>

## Knowledge Map

<div class="ai-card-grid">
  <a class="ai-card" href="./foundation/">
    <span class="ai-card__eyebrow">Layer 1 · Foundation</span>
    <h3>Foundations</h3>
    <p>数学、深度学习、语言模型、强化学习与参数高效适配。</p>
  </a>
  <a class="ai-card" href="./gm/">
    <span class="ai-card__eyebrow">Layer 2 · Model</span>
    <h3>Generative AI</h3>
    <p>Text、fine-tuning、alignment、inference、multimodal、RAG 与 agents。</p>
  </a>
  <a class="ai-card" href="./pytorch/">
    <span class="ai-card__eyebrow">Layer 3 · Implementation</span>
    <h3>PyTorch</h3>
    <p>Tensor、autograd、训练循环和实验组织，把概念变成可调试代码。</p>
  </a>
  <a class="ai-card" href="./engineering/">
    <span class="ai-card__eyebrow">Cross-layer · Production</span>
    <h3>AI Engineering</h3>
    <p>Data、experimentation、pipelines、deployment、monitoring 和 reproducibility。</p>
  </a>
  <a class="ai-card" href="./rec-sys/">
    <span class="ai-card__eyebrow">Layer 4 · Decision system</span>
    <h3>Recommender Systems</h3>
    <p>召回、粗排、精排、重排、指标与冷启动组成的工业决策链路。</p>
  </a>
  <a class="ai-card" href="./search/">
    <span class="ai-card__eyebrow">Layer 4 · Intent system</span>
    <h3>Search Systems</h3>
    <p>从显式 query 出发理解检索、相关性排序与搜索推荐的共性。</p>
  </a>
  <a class="ai-card" href="./evaluation/">
    <span class="ai-card__eyebrow">Cross-layer · Evidence</span>
    <h3>AI Evaluation</h3>
    <p>Specification、datasets、scoring、agent trajectories、failure slices 与生产反馈闭环。</p>
  </a>
  <a class="ai-card" href="./safety/">
    <span class="ai-card__eyebrow">Cross-layer · Risk</span>
    <h3>Safety & Governance</h3>
    <p>Threat model、privacy、agent authority、security、release gate 和 incident response。</p>
  </a>
  <a class="ai-card" href="./gm/application/agent/">
    <span class="ai-card__eyebrow">Current focus</span>
    <h3>Agents & Tool Use</h3>
    <p>模型如何检索能力、调用工具、管理上下文并完成长程任务。</p>
  </a>
</div>

## Choose a Learning Path

<div class="ai-path-grid">
  <div class="ai-path-card">
    <span class="ai-card__eyebrow">Model builder</span>
    <h3>模型基础路线</h3>
    <ol>
      <li><a href="./foundation/ml/">Math for ML</a></li>
      <li><a href="./foundation/dl/">Deep Learning</a></li>
      <li><a href="./foundation/lm/">Language Models</a></li>
      <li><a href="./foundation/lm/transformer/">Transformer</a></li>
      <li><a href="./gm/training/">Training & Alignment</a></li>
      <li><a href="./evaluation/">Evaluation</a></li>
    </ol>
  </div>
  <div class="ai-path-card">
    <span class="ai-card__eyebrow">AI systems</span>
    <h3>LLM 系统路线</h3>
    <ol>
      <li><a href="./pytorch/">PyTorch Workflow</a></li>
      <li><a href="./gm/inference/">Inference</a></li>
      <li><a href="./gm/inference/kv-cache.md">KV Cache</a></li>
      <li><a href="./gm/application/rag/">RAG</a></li>
      <li><a href="./gm/application/agent/">Agents</a></li>
      <li><a href="./evaluation/">Evaluation</a></li>
      <li><a href="./engineering/">Deployment & Monitoring</a></li>
    </ol>
  </div>
  <div class="ai-path-card">
    <span class="ai-card__eyebrow">Applied ML</span>
    <h3>推荐与搜索路线</h3>
    <ol>
      <li><a href="./rec-sys/retrieval/">Retrieval</a></li>
      <li><a href="./rec-sys/ranking/">Ranking</a></li>
      <li><a href="./rec-sys/re-ranking/">Re-Ranking</a></li>
      <li><a href="./rec-sys/metrics/">Metrics & A/B Testing</a></li>
      <li><a href="./search/">Search Systems</a></li>
      <li><a href="./evaluation/">Online Evaluation</a></li>
    </ol>
  </div>
  <div class="ai-path-card">
    <span class="ai-card__eyebrow">Responsible systems</span>
    <h3>可靠与安全路线</h3>
    <ol>
      <li><a href="./evaluation/">Evaluation System</a></li>
      <li><a href="./safety/threat-model.md">Threat Modeling</a></li>
      <li><a href="./safety/agent-security.md">Agent Security</a></li>
      <li><a href="./engineering/monitoring.md">Production Monitoring</a></li>
      <li><a href="./safety/governance.md">Governance</a></li>
    </ol>
  </div>
</div>

## Coverage Matrix

| 领域 | 核心问题 | 关键证据 |
| --- | --- | --- |
| Data & Objective | 信号是否代表真实需求，数据是否覆盖目标分布？ | provenance、coverage、label quality |
| Learning | 模型、loss 和 inductive bias 是否适合任务？ | validation、generalization、calibration |
| Foundation Models | 预训练、post-training 和 context 怎样塑造能力？ | capability、robustness、contamination |
| Systems | 如何在 latency、cost 和 reliability 约束下执行？ | SLO、goodput、recovery、lineage |
| Applied AI | 模型能力能否转化为用户和业务结果？ | online lift、acceptance、long-term value |
| Evaluation & Safety | 如何发现回归、风险和不可接受副作用？ | slice、red team、incident、audit |

## How the Sections Connect

<div class="knowledge-crosslinks">
  <a href="../algo/">Algorithms provide the language for search, optimization, and efficient computation →</a>
  <a href="../cs/">CS foundations explain memory, networking, concurrency, and distributed serving →</a>
  <a href="./engineering/">AI Engineering connects experiments to production operation →</a>
  <a href="./safety/">Safety constrains capability with authority, evidence, and recovery →</a>
  <a href="./rec-sys/">Recommendation shows how models, systems, metrics, and feedback become one loop →</a>
</div>

## External References

- [Papers with Code](https://paperswithcode.com/)
- [Hugging Face Papers](https://huggingface.co/papers)
- Major venues: NeurIPS, ICML, ICLR, ACL, EMNLP, CVPR, ICCV
