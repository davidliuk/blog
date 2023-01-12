# 面向对象设计



### 类型划分

- 管理类
- 预定类
- 实物类
- 游戏类



### OOP三大特征

- 封装
- 继承
- 多态



### 设计原则

SOLID：

- S – Single responsibility principle

  一个类应该有且只有一个去改变他的理由，这意味着一个类应该只有一项工作。

- O – Open close principle

  对象或实体应该对扩展开放，对修改封闭 (Open to extension, close to modification)。

- L – Liskov substitution principle

  任何一个子类或派生类应该可以替换它们的基类或父类

- I – Interface segregation principle

  不应该强迫一个类实现它用不上的接口

- D – Dependency inversion principle

  抽象不应该依赖于具体实现，具体实现应该依赖于抽象 

  High-level的实体不应该依赖于low-level的实体





## 解题法

- Clarify
- Core objects
- Cases
- Classes
- Correctness





Clarify

说人话:通过和面试官交流，去除题目中的歧义，确定答题范围

Core objects 说人话:确定题目所涉及的类，以及类之间的映射关系

Cases 说人话:确定题目中所需要实现的场景和功能

Classes 说人话:通过类图的方式，具体填充题目中涉及的类

Correctness 说人话:检查自己的设计，是否满足关键点



### Correctness

- Validate use cases (检查是否支持所有的use case)
- Follow good practice (面试当中的加分项，展现一个程序员的经验)
- S.O.L.I.D
- Design pattern



并行VS串行

单线程 VS 多线程