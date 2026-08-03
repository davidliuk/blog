---
title: Object-Oriented Design
description: A practical 5C framework for clarifying requirements, identifying objects, modeling use cases, designing classes, and validating correctness.
icon: cubes-stacked
---

# Object-Oriented Design

OOD 把模糊需求转化成对象、职责、接口和协作关系。重点不是画出最多的类，而是让核心用例能够被清楚实现，并让未来变化集中在合理边界内。

## The 5C Framework

<div class="knowledge-flow">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Clarify</strong>
    <p>确认范围、角色、规则、异常场景和不需要支持的能力。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Core Objects</strong>
    <p>从关键名词与状态生命周期中识别必要对象和所有权关系。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Cases</strong>
    <p>把需求写成可验证的 use cases，明确成功和失败语义。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Classes</strong>
    <p>为每个用例分配职责、方法、数据和依赖，形成最小类图。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">05</span>
    <strong>Correctness</strong>
    <p>逐个回放用例，检查扩展性、并发、异常和 SOLID 风险。</p>
  </div>
</div>

## 1. Clarify

围绕题目中的名词和规则提问：

- 谁使用系统？他们分别能做什么？
- 核心实体有哪些状态，状态如何转换？
- 并发请求、重复操作、取消和失败如何处理？
- 需要持久化吗？是否要求线程安全？
- 面试时间内必须完成哪些 use cases？

## 2. Core Objects

对象不是数据库表的机械映射。一个好对象应拥有明确职责和生命周期。常见关系包括：

- **has-a / composition**：生命周期由拥有者控制；
- **association**：对象协作但各自独立；
- **is-a / inheritance**：只有满足可替换语义时才使用；
- **dependency**：短期使用，通过接口注入更容易测试。

## 3. Use Cases

用一句话描述每个用例的参与者、操作和结果，例如：

> Passenger submits an external request; ElevatorSystem selects an eligible elevator and records whether the request was accepted.

返回值和异常应表达业务语义。`boolean` 只能区分成功失败；当调用者需要采取不同恢复动作时，应使用结果类型或有意义的异常。

## 4. Classes and Interfaces

对每个用例逐步分配职责：

1. 谁接收请求？
2. 谁拥有完成决策所需的数据？
3. 哪些策略可能变化，应该抽象为可替换接口？
4. 哪些状态必须封装，避免外部绕过不变量？
5. 并发访问由谁串行化或保护？

## 5. Correctness Review

- 所有核心用例是否都能从入口走到结果？
- 对象职责是否出现循环或“万能管理类”？
- 失败后状态是否仍然有效？
- 继承是否满足 Liskov substitution？
- 是否为了展示模式而增加了无意义抽象？

## Practice Categories

- [管理类](./管理类.md)
- [预定类](./预定类.md)
- [实物类](./实物类.md)
- [游戏类](./游戏类.md)

完成对象级设计后，可进入 [Design Patterns](../pattern/) 和 [System Design](../system/)。
