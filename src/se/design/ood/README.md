# 面向对象设计

Viability 可行性

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

  对象或实体应该对扩展开放，对修改封闭

  (Open to extension, close to modification)。

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

Clarify 通过和面试官交流，去除题目中的歧义，确定答题范围

Core objects 确定题目所涉及的类，以及类之间的映射关系

Cases 确定题目中所需要实现的场景和功能

Classes 通过类图的方式，具体填充题目中涉及的类

Correctness 检查自己的设计，是否满足关键点

### Clarify

What

针对题目中的**关键字**来提问，帮助自己更好的确定答题范围。

> 大多数的关键字为名词，通过名词的属性来考虑

How

针对问题主题的规则来提问，帮助自己明确解题方向。

> 此类问题没有标准答案，你可以提出一些解决方法，通过面试官的反应， 选择一个你比较有信心(简单)的方案

### Core Object

为了完成设计，需要哪些类?

- 这是和面试官初步的纸面 contract
- 承上启下，来自于Clarify的结果，成为Use case的依据
- 为画类图打下基础

如何定义Core Object ?

- 以一个Object作为基础，**线性思考**

  有进有出，从哪来到哪去

- 确定Objects之间的映射关系

### Cases

- 什么是 Use case ?

  在你设计的系统中，需要支持哪些功能?

- 为什么要写 Use cases ?

  - 这是你和面试官白纸黑字达成的第二份共识，把你将要实现的功能列在白板上
  - 帮助你在解题过程中，理清条例，一个一个Case实现
  - 作为检查的标准

- 如何写 Use cases ?

  - 利用定义的Core Object, 列举出每个Object对应产生的use case.
  - 每个use case只需要先用一句简单的话来描述即可
  

### Class

- 什么是类图?

- 为什么要画类图? 

  - 可交付，Minimal Viable Product
  - 节省时间，不容易在 Coding 上挣扎
  - 建立在Use case上，和之前的步骤层层递进，条例清晰，便于交流和修 改
  - 如果时间允许/面试官要求，便于转化成Code

- 怎么画类图?

  - 遍历你所列出的use cases

  - 对于每一个use case，更加详细的描述这个use case在做什么事情

    例如：take external request -> ElevatorSystem takes an external request, and decide to push this request to an appropriate elevator

  - 针对这个描述，在已有的Core objects里填充进所需要的信息


如何知道一个函数，是否成功完成任务？

地下一层电梯关闭，这时有人在地下一层按了向上的按钮，会发生什么?

Use boolean instead of void

成功的话返回true, 否则返回false

如何知道是什么地方出错?

Use exceptions

并行 VS 串行

单线程 VS 多线程

### Correctness

- Validate use cases (检查是否支持所有的 use case)
- Follow good practice (面试当中的加分项，展现一个程序员的经验)
- S.O.L.I.D
- Design pattern

## Good Practice

Access modifier

- package

  如果什么都不声明，变量和函数都是package level visible的，在同一个package内的其他类都可以访问

- public

  如果声明为public，变量和函数都是public level visible的，任何其他的类都可以访问；在类图中，用”+”表示一个变量或者函数为public

- private

  如果声明为private，变量和函数都是class level visible的，这是所有access modifier中限制最多的一个。仅有定义这些变量和函数的类自己可以访问。

  private也是OOD当中实现封装的重要手段。

  在类图中，用”-”表示一个变量或者函数为private

- protected

  如果声明为protected，变量和函数在能被定义他们的类访问的基础上，还能够被该类的子类所访问。

  protected也是OOD当中实现继承的重要手段。

  在类图中，用”#”表示一个变量或者函数为protected

Use exceptions

继承

检查你的设计中，是否有重复的类，可以采用继承的方式来表现

Design Pattern

- Strategy
- Singleton
- ensure a class has only one instance, and provide a global point of access to it

---

- Clean and elegant
- Keep code extendable
- Safe
- Show off your skills !

---

LoD(Law of Demeter)

"Each unit should have only limited knowledge about other units:only units "closely"related to the current unit.Each unit should only talk to its friends;don't talk to strangers." 

Only talk to you immediate friends 
Don't talk to strangers

## 经典题

设计电梯系统

设计停车系统

### 设计电梯系统

Clarity

- What 关键词

   1. Elevator

      所有电梯厢均为相同规格

   2. Building

      每层仅一处能搭乘，所有电梯均可响应

- How 规则

   1. 如何判断电梯是否超重?

      \- Passenger class包含重量
      \- 电梯能够自动感应当前重量

   2. 当按下按钮时，哪一台电梯会相应?

      \- 同方向>静止>反向

      - 一半负责奇数楼层，一半负责偶数楼层

   3. 当电梯在运行时，哪些按键可以响应?

规则:

对于本题：同向 > 静止 > 反向，当运行时不能按下反向的楼层

信息：电梯至少需要三种状态，并且要知道当前在哪一层

Core Object

- ElevatorSystem

  - Handle request
- Request
- Elevator
  - Take external request
  - Take internal request 一手微信study322 九章都有
  - Open gate
  - Close gate
  - Check weight
- ElevatorButton
