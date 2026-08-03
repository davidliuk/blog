# Reusable System Modules

完整系统往往由一组可复用模块构成。这里按功能模块整理常见设计问题。

## Core Modules

- Identity: [User](./user.md)
- Traffic: [Rate Limiter](./rate-limiter.md), [Flash Sale](./flash-sale.md)
- Content: [Feed](./feed.md), [Comment](./comment.md), [Search](./search.md)
- Data: [Big Table](./big-table.md), [Distributed File](./distributed-file.md)
- Platform: [Monitor](./monitor.md), [Crawler](./crawler.md)
- Product: [Coupon](./coupon.md), [Nearby](./nearby.md), [Tiny URL](./tiny-url.md)

每个模块都应说明接口、数据模型、关键路径、扩展方式和故障处理。
