---
title: Generative Recommenders
description: Generative recommendation through sequence modeling, item tokenization, list generation, constrained decoding, and evaluation.
icon: wand-magic-sparkles
---

# Generative Recommenders

生成式推荐把部分推荐任务改写为 sequence generation：根据用户历史、上下文和候选集合生成 item、slate、解释或下一步行为。它不必完全替代 retrieval → ranking → re-ranking 漏斗，也可以只增强其中一层。

## Task Forms

| Form | Generates | Main challenge |
| --- | --- | --- |
| Next-item generation | 下一个 item token / ID | 超大 item vocabulary、冷启动 |
| Slate generation | 有顺序的一组 item | 去重、约束、整体效用 |
| Intent generation | query、topic、user intent | 与真实消费行为对齐 |
| Explanation generation | 文本理由 | faithfulness 与安全 |
| Unified sequence modeling | 行为、内容和反馈序列 | tokenization 与长序列成本 |

## Representation Choices

- 直接使用 item ID 简单，但无法自然泛化到新 item。
- Semantic ID 或 codebook 压缩 item space，但需要保持语义和唯一性。
- 文本或多模态表示支持内容泛化，却增加编码与 serving 成本。

## Constrained Generation

推荐结果必须满足 catalog、库存、安全、业务规则和用户权限。常见做法包括 constrained decoding、candidate mask、post-filter 和生成后 re-ranking。

## Evaluation

除 Recall/NDCG 外，还需要检查：

- invalid、duplicate 与 out-of-catalog rate；
- slate diversity、coverage 与 long-term value；
- latency、token cost 和 cacheability；
- 新 item / 新用户 slice；
- offline improvement 是否转化为在线指标。

建议先理解 [Retrieval](../retrieval/)、[Ranking](../ranking/) 与 [Re-Ranking](../re-ranking/)，再判断生成式方法解决了哪一层的真实限制。
