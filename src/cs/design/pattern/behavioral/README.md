# Behavioral Patterns

行为型模式关注职责怎样分配、对象怎样通信，以及算法或状态变化怎样被隔离。

## Decision Map

| Change point | Pattern | Core idea |
| --- | --- | --- |
| 同一目标有多种算法 | Strategy | 把可替换行为封装为统一 contract |
| 行为随内部状态改变 | State | 用状态对象表达合法转换 |
| 一处变化通知多个订阅者 | Observer | 发布事件，解耦发送者与接收者 |
| 流程骨架稳定，部分步骤变化 | Template Method | 固定顺序，开放受控扩展点 |
| 请求需要排队、记录或撤销 | Command | 把操作变成对象 |
| 多个 handler 按顺序尝试 | Chain of Responsibility | 让请求沿处理链传播 |

## Review Questions

1. 真正变化的是算法、状态、流程还是接收者？
2. contract 是否明确输入、输出、错误和副作用？
3. 使用 event 后，顺序、重复、失败和生命周期怎样处理？
4. 多态是否减少条件分支，还是把控制流藏得更深？

模式的价值是让变化被局部化并可测试，而不是让 UML 更复杂。
