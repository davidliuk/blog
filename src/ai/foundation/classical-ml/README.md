---
title: Classical Machine Learning
description: Classical machine learning through problem formulation, supervised and unsupervised learning, generalization, and model selection.
icon: chart-simple
---

# Classical Machine Learning

经典机器学习提供了现代 AI 仍然依赖的基本语言：怎样把业务问题定义为预测任务、怎样从有限样本泛化、怎样选择指标，以及怎样识别数据泄漏和分布变化。

## Learning Paradigms

<div class="ai-card-grid">
  <a class="ai-card" href="./supervised.md">
    <span class="ai-card__eyebrow">Labeled outcomes</span>
    <h3>Supervised Learning</h3>
    <p>分类、回归、排序，以及 linear model、tree、ensemble 和 margin method。</p>
  </a>
  <a class="ai-card" href="./unsupervised.md">
    <span class="ai-card__eyebrow">Structure discovery</span>
    <h3>Unsupervised Learning</h3>
    <p>聚类、降维、密度估计和 representation discovery。</p>
  </a>
  <a class="ai-card" href="./generalization.md">
    <span class="ai-card__eyebrow">Reliable evidence</span>
    <h3>Generalization</h3>
    <p>数据划分、bias–variance、regularization、leakage 和 distribution shift。</p>
  </a>
</div>

## Problem Formulation

| Question | Example |
| --- | --- |
| Unit of prediction | 用户、请求、item、时间窗口还是 pair？ |
| Target | 未来事件、人工标签、proxy metric 还是长期价值？ |
| Available features | 推理时真正可获得哪些信息？ |
| Decision | 预测如何被 threshold、ranking 或 policy 使用？ |
| Cost | false positive 与 false negative 的业务代价是否相同？ |

## Modeling Loop

1. 建立简单 baseline，验证数据和 metric pipeline。
2. 用 error slice 找到模型真正失败的区域。
3. 先改数据、特征和目标，再增加模型复杂度。
4. 用 validation 选择方案，用 untouched test set 做最终估计。
5. 发布后监控输入、预测、决策和 outcome 的共同变化。

深度学习改变了 representation 的获得方式，但没有取消 task definition、generalization 和 causal leakage 这些基本问题。
