---
title: AI Engineering
description: Production AI engineering across data, experiments, pipelines, deployment, monitoring, and reproducibility.
icon: gears
---

# AI Engineering

AI engineering 把模型实验变成可持续运行的产品能力。它同时管理普通软件变化和 statistical behavior：代码可能没变，但数据、用户和反馈策略变化后，系统仍会退化。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Production AI Lifecycle</p>
  <h2>Version the inputs. Reproduce the experiment. Promote the artifact. Monitor the decision.</h2>
  <p>
    可靠 AI 系统需要追踪 data、code、model、prompt、tool、environment 和 evaluation；
    发布后同时观察服务 SLO、模型行为和产品 outcome，并允许快速回滚与重新训练。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Data</span>
    <span class="section-pill">Experiments</span>
    <span class="section-pill">Pipelines</span>
    <span class="section-pill">Deployment</span>
    <span class="section-pill">Monitoring</span>
  </div>
</div>

## Knowledge Map

<div class="ai-card-grid">
  <a class="ai-card" href="./data.md">
    <span class="ai-card__eyebrow">Input system</span>
    <h3>Data Engineering</h3>
    <p>来源、Schema、label、quality、lineage、privacy 和 train–serve consistency。</p>
  </a>
  <a class="ai-card" href="./experimentation.md">
    <span class="ai-card__eyebrow">Evidence</span>
    <h3>Experimentation</h3>
    <p>Baseline、configuration、artifact、reproducibility 和 decision log。</p>
  </a>
  <a class="ai-card" href="./deployment.md">
    <span class="ai-card__eyebrow">Delivery</span>
    <h3>Deployment</h3>
    <p>Registry、compatibility、shadow、canary、rollback 和 pipeline promotion。</p>
  </a>
  <a class="ai-card" href="./monitoring.md">
    <span class="ai-card__eyebrow">Feedback</span>
    <h3>Monitoring</h3>
    <p>服务、数据、模型、Agent 和产品 outcome 的分层观测。</p>
  </a>
</div>

## Versioned Artifact Graph

```text
source data + labels + code + configuration
  → training run
  → model / adapter / prompt artifact
  → evaluation report
  → deployment
  → prediction / trace / outcome
```

任何线上结果都应能追溯到这个图中的具体版本。

## Operational Principles

- Data pipeline 是生产代码，需要 contract、test 和 owner。
- Experiment tracker 记录事实，decision log 解释为什么选择某个方案。
- Model registry 保存 lineage、evaluation 和 approval，不只是文件地址。
- Shadow / canary 验证真实 workload，同时限制用户风险。
- Training–serving skew、feedback delay 和 silent failure 是 AI 特有的高风险区域。

## References

- [A Brief Guide to Running ML Systems in Production](https://research.google/pubs/a-brief-guide-to-running-ml-systems-in-production/)
- [Data Management Challenges in Production Machine Learning](https://research.google/pubs/data-management-challenges-in-production-machine-learning/)
