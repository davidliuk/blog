---
title: Feature Interaction
description: Recommendation feature interaction from manual crosses to factorization, cross networks, and adaptive feature weighting.
icon: diagram-project
---

# Feature Interaction

单个 feature 往往没有足够含义，推荐决策依赖组合关系，例如“用户兴趣 × 内容主题 × 当前场景”。Feature interaction 的目标是在可控参数量和 latency 下学习这些组合。

## Method Map

| Method | Interaction bias | Strength | Cost |
| --- | --- | --- | --- |
| Manual cross | 人工指定组合 | 可解释、精确注入领域知识 | 覆盖有限、维护成本高 |
| [Factorization Machines](./fm.md) | 低秩二阶交互 | 稀疏场景参数共享 | 高阶表达有限 |
| [Deep & Cross Network](./dcn.md) | 显式 bounded-degree cross | 可控地增加交互阶数 | 结构和宽度需调节 |
| [SENet](./senet.md) | 动态 feature reweighting | 学习样本相关的重要性 | 不等同于显式组合 |
| [LHUC](./lhuc.md) | 个性化 hidden-unit scaling | 低成本适配人群或用户 | 依赖稳定条件信号 |

## Review a Cross Module

1. 输入是 raw field、embedding 还是已经混合的 representation？
2. 模块能表达到哪一阶交互，是否有明确归纳偏置？
3. 参数和计算随 field 数怎样增长？
4. 高频 feature 是否压制长尾 feature？
5. 在线新增、缺失或漂移 feature 时怎样退化？

离线提升需要结合 calibration、线上 latency 和 feature freshness 验证，不能假设“更复杂交互一定更好”。
