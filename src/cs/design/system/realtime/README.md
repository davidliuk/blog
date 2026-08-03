---
title: Realtime Delivery
description: Realtime updates through polling, long polling, SSE, WebSocket, ordering, backpressure, and reconnection.
icon: bolt
---

# Realtime Delivery

“实时”需要先量化：允许多少延迟、连接数量多大、消息能否丢失、是否要求顺序，以及断线后怎样恢复。协议只是这些语义的载体。

## Delivery Models

| Model | Direction | Best for | Cost |
| --- | --- | --- | --- |
| Polling | client → server | 更新稀少、实现简单 | 空请求与延迟 |
| Long polling | server holds response | 中低频通知、兼容 HTTP | 连接轮换与状态管理 |
| SSE | server → client | 文本事件、浏览器订阅 | 单向、连接和代理限制 |
| WebSocket | bidirectional | 聊天、协作、交互控制 | 长连接、心跳、背压与状态恢复 |

## End-to-End Path

```text
source of truth → event/log → fan-out service
  → connection gateway → client buffer → UI state
```

## Reliability Questions

- 每个事件是否有稳定 ID 和 per-stream sequence？
- 客户端重连时从 last seen、snapshot 还是 full refresh 恢复？
- 慢客户端导致 buffer 增长时，丢弃、合并还是断开？
- presence 和 connection state 是否被误当作持久业务状态？
- 跨设备、跨 region 的顺序和重复怎样定义？

## Notes

- [Comet](./comet.md)
- [WebSocket](../../../core/network/application/websocket.md)
- [Feed Module](../module/feed.md)
