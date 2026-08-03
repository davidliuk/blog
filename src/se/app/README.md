---
title: Application Engineering
description: Notes on native, web, and cross-platform application architecture.
icon: mobile-screen
---

# Application Engineering

应用技术选型的核心不是“能否跨平台”，而是产品体验、平台能力、团队技能、共享边界和长期维护成本之间的平衡。

## Delivery Models

| Model | Strength | Cost |
| --- | --- | --- |
| Native | 最直接的平台 API、性能与交互一致性 | 多平台需要独立实现和同步演进 |
| Web | 发布快、覆盖广、内容和业务流程复用高 | 受浏览器能力、网络和运行时约束 |
| Cross-platform UI | 共享 UI 与业务逻辑，团队集中 | 桥接、插件、包体和平台细节仍需处理 |
| Shared domain layer | 保留原生 UI，只共享模型、网络和规则 | 架构边界更复杂，收益取决于业务重合度 |

## Architecture Questions

1. 哪些体验必须遵循平台原生习惯？
2. 业务规则、数据层和 UI 各有多少可以稳定共享？
3. 离线、同步、推送、权限和后台任务有什么平台差异？
4. 性能瓶颈位于渲染、计算、网络还是启动？
5. 发布节奏和故障修复是否受应用商店审核约束？

常见选择包括 Android/Kotlin、iOS/Swift、Web、Flutter、React Native、Kotlin Multiplatform 和 Compose Multiplatform。技术名称只是结果，决策依据应记录在前面的约束里。
