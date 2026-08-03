---
title: Foundation Model Training
description: A training-system map covering objective, data, optimization, distributed execution, adaptation, alignment, and evaluation.
icon: graduation-cap
---

# Foundation Model Training

训练不是一次 optimizer loop，而是六个相互约束的系统：目标定义模型学什么，数据决定模型能看到什么，优化决定如何更新，分布式执行决定能否在资源预算内完成，评估决定何时相信结果。

## Training Stack

<div class="knowledge-flow" aria-label="Foundation model training stack">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Objective</strong>
    <p>把期望行为转换成可计算 loss、reward 或 preference signal。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Data</strong>
    <p>控制来源、质量、去重、污染、混合比例和 curriculum。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Optimize</strong>
    <p>管理 gradient、learning rate、regularization、stability 与 convergence。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Execute</strong>
    <p>用 data、tensor、pipeline 等并行方式映射到计算和通信资源。</p>
  </div>
</div>

## Main Branches

- [Fine-Tuning](./fine-tuning/)：full fine-tuning、SFT 与 parameter-efficient adaptation。
- [Alignment](./alignment/)：用 preference、reward 或 verifiable feedback 改变行为。
- [Frameworks](./framework.md)：训练引擎、并行和 checkpoint orchestration。
- [Efficiency](./efficiency.md)：memory、communication、throughput 与 cost。
- [Evaluation](/ai/evaluation/)：能力、行为、可靠性和回归验证。

## Failure Modes

| Symptom | Possible cause | Evidence |
| --- | --- | --- |
| Loss spike / NaN | 数值范围、异常 batch、optimizer state | gradient norm、activation、batch sample |
| Training improves, eval stalls | overfit、data mismatch、metric saturation | slice metrics、train/eval gap |
| Capability regression | data mixture 或 objective interference | benchmark delta、behavior slice |
| Throughput drop | input stall、communication、straggler | profiler、step-time breakdown |
| Good aggregate, bad product | metric misalignment、distribution shift | production trace、human review |

## Experiment Contract

每次训练记录 base checkpoint、code commit、data snapshot、objective、hyperparameters、parallel config、random seed、evaluation suite 和 artifact lineage。没有可追溯性，指标提升无法被可靠复现。
