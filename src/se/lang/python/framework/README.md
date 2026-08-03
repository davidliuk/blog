# Python Web Frameworks

框架选择取决于应用规模、同步或异步依赖、数据模型、团队约定和长期维护，而不是 benchmark 排名。

## Framework Map

| Framework | Strength | Trade-off |
| --- | --- | --- |
| Django / DRF | batteries-included、ORM、admin、成熟约定 | 较重，定制需理解完整生命周期 |
| Flask | 核心小、扩展灵活 | 项目需要自行建立结构与约定 |
| FastAPI | type-driven API、async support、自动 contract | async 不会让 blocking dependency 变成 non-blocking |

## Request Lifecycle

```text
server → middleware → routing → validation
  → handler → data / service → serialization → response
```

## Engineering Checklist

- 输入验证与 domain validation 分离。
- 数据库 session / transaction 生命周期跟随请求边界。
- async handler 中不执行阻塞 I/O。
- 错误响应、request ID、logging 和 metrics 统一。
- production server、worker 数、timeout 和 graceful shutdown 明确。
- contract、integration 和核心业务逻辑分别测试。
