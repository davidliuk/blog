# Structural Patterns

结构型模式处理接口和对象组合：让不兼容组件协作、在边界增加行为，或把复杂子系统暴露为更稳定的接口。

## Decision Map

| Need | Pattern direction |
| --- | --- |
| 转换第三方或旧接口 | [Adapter](./adapter.md) |
| 为对象动态叠加职责 | Decorator |
| 为复杂子系统提供简单入口 | Facade |
| 控制访问、延迟创建或远程调用 | Proxy |
| 把抽象与平台实现独立演进 | Bridge |
| 统一处理树状组合 | Composite |

## Boundary Questions

- 不兼容的是 method shape、data model、lifecycle 还是 failure semantics？
- 转换应该发生在领域内部还是外部 integration boundary？
- wrapper 是否保持原对象的重要 contract？
- 新层次是在隔离变化，还是只增加转发代码？

优先定位变化边界，再选择模式名称。
