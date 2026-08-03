---
title: Design Patterns
description: Design patterns organized by the kind of change they isolate rather than as a memorization catalog.
icon: palette
---

# Design Patterns

设计模式是对重复设计问题的命名。使用模式前应先指出**变化点、稳定接口和需要保护的不变量**；如果普通函数或组合已经足够，就不需要额外模式。

<div class="section-card-grid">
  <a class="section-card" href="./creational/">
    <span class="section-card__eyebrow">Construction</span>
    <h3>Creational</h3>
    <p>隔离对象创建、生命周期和实例复用：Singleton、Prototype、Pool。</p>
  </a>
  <a class="section-card" href="./structural/">
    <span class="section-card__eyebrow">Composition</span>
    <h3>Structural</h3>
    <p>通过组合和接口转换连接已有组件：Adapter。</p>
  </a>
  <a class="section-card" href="./behavioral/">
    <span class="section-card__eyebrow">Collaboration</span>
    <h3>Behavioral</h3>
    <p>组织对象之间的通知、状态、策略与流程：Observer、State、Strategy、Template Method。</p>
  </a>
</div>

## Choose by the Source of Change

| 变化发生在哪里 | 常见候选 | 先问什么 |
| --- | --- | --- |
| 对象创建方式 | Factory, Builder, Prototype | 构造逻辑是否真的复杂或可变 |
| 不兼容接口 | Adapter | 是否需要隔离第三方或旧接口 |
| 可选行为 | Strategy | 行为是否需要运行时替换 |
| 状态驱动行为 | State | 条件分支是否围绕明确状态机 |
| 一对多通知 | Observer | 生命周期、顺序和失败如何处理 |
| 固定流程中的可变步骤 | Template Method | 继承是否优于组合 |

## Pattern Review

1. 没有模式时，代码具体会因为什么变化而恶化？
2. 模式引入的新接口和对象是否比原问题更容易理解？
3. 测试能否替换依赖、覆盖状态转换和失败路径？
4. 是否引入全局状态、隐式控制流或难以追踪的生命周期？

Reference: [Refactoring.Guru](https://refactoring.guru/design-patterns)
