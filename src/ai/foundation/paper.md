---
title: Reading AI Papers
description: A practical workflow for understanding, checking, and reproducing machine learning research papers.
icon: file-lines
---

# Reading AI Papers

论文阅读的目标不是把每一段都翻译出来，而是建立一份可以验证的模型：作者解决了什么问题、方法为什么可能有效、实验支持了哪些结论、结果在哪些条件下不成立。

## Three Passes

### Pass 1: Position the Work

先读标题、摘要、图 1、结论和引言，回答：

- 研究问题是什么？
- 与最接近的 baseline 相比，真正新增了什么？
- 主要结果用什么数据和指标衡量？
- 这篇论文是否值得继续投入时间？

### Pass 2: Reconstruct the Method

用自己的语言重新写出：

1. 输入与输出；
2. 模型或系统组件；
3. 训练目标与数据；
4. 推理或执行流程；
5. 关键复杂度与假设。

如果不能画出数据流或写出最小伪代码，通常说明方法还没有真正理解。

### Pass 3: Stress the Evidence

检查：

- baseline 是否足够强且设置公平；
- 指标是否对应论文声称解决的问题；
- ablation 是否隔离了关键组件；
- 结果是否跨数据、模型或随机种子稳定；
- 有没有失败案例、成本、安全或泛化限制；
- 公开材料是否足以复现核心结论。

## A Useful Note Template

| Field | Question |
| --- | --- |
| Problem | What exact failure or limitation is addressed? |
| Core idea | What is the smallest new mechanism? |
| Assumptions | What must be true for it to work? |
| Evidence | Which experiment supports each major claim? |
| Cost | What compute, data, latency, or complexity is added? |
| Failure modes | Where should the method stop working? |
| Reproduction | What is the smallest experiment that can verify the idea? |
| Connection | Which existing concepts or projects does it change? |

## Writing the Final Summary

一份好的论文笔记应明确区分：

- **paper claims**：作者明确声称并由实验支持的结论；
- **my interpretation**：基于论文产生的理解或推断；
- **open questions**：当前证据无法回答的问题；
- **actionable idea**：可以复现、比较或用于后续工作的具体步骤。
