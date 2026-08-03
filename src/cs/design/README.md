---
title: Software and System Design
description: Design from object responsibilities and patterns to service boundaries and distributed system tradeoffs.
icon: pen-ruler
---

# Software & System Design

设计的目标不是展示多少模式，而是控制变化的成本：需求变化时，影响范围是否清晰；依赖失败时，系统是否可理解；规模增长时，结构是否允许渐进演进。

<div class="section-card-grid">
  <a class="section-card" href="./ood/">
    <span class="section-card__eyebrow">Object scale</span>
    <h3>Object-Oriented Design</h3>
    <p>从需求澄清、核心对象和用例出发，定义职责、接口与协作关系。</p>
  </a>
  <a class="section-card" href="./pattern/">
    <span class="section-card__eyebrow">Collaboration patterns</span>
    <h3>Design Patterns</h3>
    <p>通过创建、结构和行为模式表达稳定边界与可替换变化点。</p>
  </a>
  <a class="section-card" href="./system/">
    <span class="section-card__eyebrow">Service scale</span>
    <h3>System Design</h3>
    <p>在功能、容量、可靠性、数据、安全和成本约束下设计可演进系统。</p>
  </a>
</div>

## One Design Spectrum

| 层级 | 主要对象 | 关键问题 |
| --- | --- | --- |
| Function | 输入、输出、状态 | 语义是否清晰，边界是否完整 |
| Object | 职责、接口、协作 | 变化是否局部，依赖是否可替换 |
| Module | API、数据与生命周期 | 内聚性、复用和所有权 |
| Service | 请求、存储、故障 | 容量、可用性、一致性 |
| Distributed System | 节点、网络、复制 | 部分失败、恢复与全局不变量 |

## Principles as Questions

- **Single Responsibility**：这个单元有几个独立的变化原因？
- **Open/Closed**：新增行为需要修改稳定核心，还是增加可替换实现？
- **Liskov Substitution**：替换实现后，调用者依赖的语义仍成立吗？
- **Interface Segregation**：调用者是否被迫依赖不使用的能力？
- **Dependency Inversion**：高层策略能否独立于基础设施细节测试和演进？

设计原则是诊断工具，不是为了让每个类都套上接口。
