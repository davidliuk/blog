---
title: Model Alignment
description: Model alignment through instruction tuning, preference learning, reward signals, verification, and behavioral evaluation.
icon: scale-balanced
---

# Model Alignment

Alignment 把“模型能生成什么”转化为“在特定目标、规则和用户上下文下应该生成什么”。它不是单一算法，而是 specification、data、optimization 和 evaluation 的闭环。

## Alignment Loop

```text
behavior specification
  → demonstrations / preferences / verifiers
  → supervised or preference optimization
  → behavioral evaluation
  → failure data and next iteration
```

## Main Paradigms

| Paradigm | Signal | Strength | Risk |
| --- | --- | --- | --- |
| SFT | 高质量 demonstration | 稳定、直接建立行为格式 | 受示例覆盖和 imitation ceiling 限制 |
| Preference optimization | 成对或排序偏好 | 学习细粒度行为取舍 | 偏好噪声、长度或风格 shortcut |
| RLHF | learned reward + policy optimization | 可优化复杂的人类偏好 | reward hacking、训练与实现复杂 |
| RLVR | 自动可验证结果 | 可扩展到代码、数学和工具任务 | 只优化结果可能产生错误过程 |

## Outcome and Process Rewards

- **Outcome Reward Model (ORM)**：只评价最终结果，信号清晰但不约束推理路径。
- **Process Reward Model (PRM)**：评价中间步骤，可提供更密集反馈，但标注和验证更困难。

过程监督是否有价值取决于中间状态能否被可靠观察与判断；无法验证的“思维过程标签”可能引入新的噪声。

## Alignment Is Multi-Objective

帮助性、正确性、安全、风格、拒答和任务完成率可能互相冲突。单一 aggregate score 会隐藏 trade-off，应保留 capability、safety 和 product slice。

## Evaluation Questions

1. 行为 specification 是否明确到可以产生相反例？
2. 数据由真实 failure 还是人工想象构成？
3. reward 是否存在长度、格式或容易投机的 shortcut？
4. 新行为是否破坏 base capability 或增加过度拒答？
5. 结果能否在 unseen task、不同语言和真实工具环境中迁移？

## Notes

- [Reinforcement Learning](./rl.md)
- [Prompting & Context](./prompt/)
- [Evaluation](/ai/evaluation/)
