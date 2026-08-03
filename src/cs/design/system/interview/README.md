---
title: System Design Interviews
description: A repeatable framework for requirements, estimates, APIs, data, architecture, deep dives, and failure analysis.
icon: comments
---

# System Design Interviews

系统设计面试评估的是在不完整信息下建立模型、澄清权衡和逐步收敛的能力。图画得复杂不代表设计更好；每个组件都需要对应一个明确约束。

## A 45-Minute Flow

1. **Clarify**：用户、核心操作、范围外需求和成功指标。
2. **Estimate**：QPS、对象大小、带宽、存储、读写比例和峰值。
3. **Contract**：关键 API、event 和 data model。
4. **Baseline**：先给出最小端到端系统，让主流程可运行。
5. **Scale**：只针对已确认瓶颈加入 cache、queue、replica 或 partition。
6. **Deep dive**：选择一致性、热点、Feed、搜索等最关键部分深入。
7. **Failure**：讨论 timeout、retry、降级、恢复、观测和安全。

## Communication Rules

- 先说假设，再基于假设设计。
- 每次增加组件都说明它解决的瓶颈和新增成本。
- 区分 correctness requirement 与 performance optimization。
- 用数据流和失败路径连接方框，不只罗列技术名。
- 时间不足时优先完成一个闭环，而不是打开更多分支。

## Notes

- [Interview Questions](./iq.md)
- [System Design Framework](../)
