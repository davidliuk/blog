# 面向对象设计

Viability

### 类型划分

- 管理类
- 预定类
- 实物类
- 游戏类

### 三大特征

OOP

- 封装

  `Class`, `Object`

- 继承

  `extends`, `implements`

- 多态

Exception

- Checked Exception(IO Exception,Compile time exception)
- Unchecked Exception(Runtime Exception,NPE)

Enum

枚举变量

### 设计原则 SOLID

- S – Single responsibility principle 单一责任原则

  一个类应该有且只有一个去改变他的理由，这意味着一个类应该只有一项工作。

- O – Open close principle 开放封闭原则

  对象或实体应该对扩展开放，对修改封闭 (Open to extension, close to modification)。

- L – Liskov substitution principle 里氏替换原则

  任何一个子类或派生类应该可以替换它们的基类或父类

- I – Interface segregation principle 接口分离原则

  不应该强迫一个类实现它用不上的接口

- D – Dependency inversion principle 依赖反转原则

  抽象不应该依赖于具体实现，具体实现应该依赖于抽象

  High-level 的实体不应该依赖于 low-level 的实体

## 解题法 5C

- Clarify
- Core objects
- Cases
- Classes
- Correctness

Clarify 说人话:通过和面试官交流，去除题目中的歧义，确定答题范围

Core objects 说人话:确定题目所涉及的类，以及类之间的映射关系

Cases 说人话:确定题目中所需要实现的场景和功能

Classes 说人话:通过类图的方式，具体填充题目中涉及的类

Correctness 说人话:检查自己的设计，是否满足关键点

### Clarify

What

针对题目中的关键字来提问，帮助自己更好的确定答题范围。

*大多数的关键字为名词，通过名词的属性来考虑

How

### Correctness

- Validate use cases (检查是否支持所有的 use case)
- Follow good practice (面试当中的加分项，展现一个程序员的经验)
- S.O.L.I.D
- Design pattern

并行 VS 串行

单线程 VS 多线程

## Good Practice

Access modifier

- package
- public
- private
- protected

Cases

- 什么是Use case ?
- 为什么要写Use cases ?
- 如何写Use cases ?

## 经典题

设计电梯系统

设计停车系统

### 设计电梯系统

Clarity

1. What

   1. Elevator

      所有电梯厢均为相同规格

   2. Building

      每层仅一处能搭乘，所有电梯均可响应

2. How

   1. 

3. s
