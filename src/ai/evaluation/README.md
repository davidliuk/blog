---
title: AI Evaluation
description: An end-to-end evaluation system for models and agents covering specifications, datasets, execution, scoring, diagnosis, and production feedback.
icon: clipboard-check
---

# AI Evaluation

Evaluation 不是发布前跑一次 benchmark，而是把“系统应该做什么”转换为持续证据。好的评估能区分能力缺失、行为偏差、工具故障、环境变化和指标失真。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Evaluation System</p>
  <h2>Specify the behavior. Build representative cases. Execute reproducibly. Diagnose every failure.</h2>
  <p>
    从任务 contract 出发，构建覆盖真实分布和高风险边界的 case；
    用可复现 harness 执行模型或 agent；把 aggregate score 拆成可行动的 failure slice，
    再由生产反馈推动下一轮数据、系统和模型改进。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Capability</span>
    <span class="section-pill">Reliability</span>
    <span class="section-pill">Safety</span>
    <span class="section-pill">Agents</span>
    <span class="section-pill">Online Feedback</span>
  </div>
</div>

## Evaluation Pipeline

<div class="knowledge-flow" aria-label="AI evaluation pipeline">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Specify</strong>
    <p>定义任务、成功条件、允许变化和不可接受的副作用。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Sample</strong>
    <p>覆盖真实流量、关键人群、长尾边界、对抗输入和历史故障。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Execute</strong>
    <p>固定模型、prompt、工具、环境和随机性，保存完整 trace 与 artifact。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Diagnose</strong>
    <p>把分数拆成 failure taxonomy、slice 和 regression，连接下一步改进。</p>
  </div>
</div>

## What to Measure

| Dimension | Example evidence |
| --- | --- |
| Task quality | exact result、rubric、human preference、domain metric |
| Reliability | variance、retry recovery、timeout、partial failure |
| Grounding | citation validity、evidence coverage、unsupported claim |
| Safety | policy violation、privacy、permission boundary、harmful action |
| Efficiency | latency、tokens、tool calls、GPU / API cost |
| Product value | completion、acceptance、retention、human correction |

## Deep Dives

<div class="ai-card-grid">
  <a class="ai-card" href="./metrics.md">
    <span class="ai-card__eyebrow">Measurement design</span>
    <h3>Metrics & Datasets</h3>
    <p>Task contract、sampling、slice、uncertainty、regression 和 contamination。</p>
  </a>
  <a class="ai-card" href="./llm-as-judge.md">
    <span class="ai-card__eyebrow">Open-ended scoring</span>
    <h3>LLM-as-a-Judge</h3>
    <p>Rubric、pairwise comparison、bias calibration 和 adversarial robustness。</p>
  </a>
  <a class="ai-card" href="./agent-evaluation.md">
    <span class="ai-card__eyebrow">Interactive systems</span>
    <h3>Agent Evaluation</h3>
    <p>Outcome、trajectory、tool use、recovery、side effect 和 efficiency。</p>
  </a>
</div>

## Scoring Methods

- **Deterministic checker**：适合代码、结构、格式和可验证答案。
- **Reference comparison**：适合有明确 gold answer 的任务，但要允许等价表达。
- **Rubric-based judge**：适合开放输出；rubric 应拆分维度并校准 judge bias。
- **Pairwise preference**：比较两个结果，通常比绝对打分稳定。
- **Human review**：用于高风险、主观或自动评分不可靠的 slice。

任何 judge 都需要用人工样本校准，记录 disagreement，并防止被表面格式或长度 shortcut 欺骗。

## Agent Evaluation

Agent 的最终答案正确，不代表执行可靠。需要同时评估：

1. **Outcome**：目标是否完成，artifact 是否有效。
2. **Trajectory**：是否选择正确工具、使用有效证据并避免无效循环。
3. **Recovery**：工具失败、权限不足或状态变化后能否正确处理。
4. **Side effects**：外部写入是否在授权范围，是否重复或不可恢复。
5. **Efficiency**：完成任务消耗多少步骤、时间、tokens 和外部调用。

## Dataset Design

- 使用 production distribution 建立代表性 base set。
- 用历史事故、人工 red team 和边界组合建立 challenge set。
- 避免训练/测试污染，保存来源、时间与版本。
- Case 需要稳定 ID，允许长期跟踪 regression。
- Aggregate 之外保留 language、task、risk、tool 和 customer slice。

## Offline to Online

离线 evaluation 提供可控比较，在线实验验证真实用户与环境影响。两者之间应建立 metric map：离线指标为什么可能预测在线结果，在哪些 slice 会失效，以及何时需要人工审核。

## Release Gate

一次 AI 变更在发布前至少回答：

- 核心能力是否提高，哪些能力回退？
- 高风险 failure 是否被覆盖，严重度是否可接受？
- latency 与 cost 是否仍满足预算？
- production monitoring 能否发现离线未覆盖的问题？
- 出现回归时能否定位模型、prompt、tool、data 或 runtime 版本？

## Reference

- [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
