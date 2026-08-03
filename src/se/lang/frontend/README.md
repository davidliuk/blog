---
title: Frontend Engineering
description: Frontend engineering through semantic HTML, CSS layout, JavaScript runtime, accessibility, performance, and delivery.
icon: browser
---

# Frontend Engineering

前端是运行在用户设备上的分布式系统边缘：它既要表达内容与交互，也要处理网络、缓存、状态、兼容性、可访问性和性能。

## Platform Layers

| Layer | Responsibility |
| --- | --- |
| [HTML](./html/) | 内容语义、表单、文档结构和可访问基础 |
| [CSS](./css/) | layout、cascade、responsive design 和视觉状态 |
| [JavaScript](./js/) | 行为、异步 I/O、状态转换和浏览器 API |
| Network | HTTP、cache、streaming、offline 和 error recovery |
| Tooling | build、type check、test、bundle 和 deployment |

## Rendering Path

```text
HTML → DOM
CSS → CSSOM
DOM + CSSOM → layout → paint → composite
```

JavaScript 可以触发 style、layout 和 paint；性能分析需要找到真正发生的阶段，而不是泛化为“DOM 慢”。

## Product Quality

- semantic structure 与 keyboard navigation；
- loading、empty、error、offline 和 partial state；
- Core user path 的 latency 与 responsiveness；
- 不同 viewport、input method 和 language；
- client state 与 server state 的 ownership；
- telemetry、error boundary 和 release rollback。
