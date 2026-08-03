---
title: Transport Layer
description: Transport protocols through reliability, ordering, flow control, congestion control, and connection setup.
icon: arrows-left-right-to-line
---

# Transport Layer

传输层在应用进程之间提供通信语义。协议选择不是“可靠或不可靠”二选一，而是在握手、顺序、重传、拥塞控制、多路复用和应用可控性之间取舍。

## Protocol Map

| Protocol | Service model | Good fit | Application responsibility |
| --- | --- | --- | --- |
| [TCP](./TCP.md) | 可靠、有序 byte stream | Web、数据库、通用 RPC | framing、deadline、重试与幂等 |
| [UDP](./UDP.md) | 无连接 datagram | DNS、实时媒体、自定义传输 | 丢包、顺序、拥塞和安全 |
| [QUIC](./quic.md) | 基于 UDP 的加密多路传输 | HTTP/3、移动网络、快速恢复 | stream 设计与应用错误语义 |

## Reliability Pipeline

```text
sequence → acknowledge → detect loss → retransmit → reorder → deliver
```

- **Flow control** 防止发送方淹没接收方。
- **Congestion control** 防止连接淹没网络路径。
- **Retransmission** 修复丢失，但会增加 tail latency。
- **Ordering** 简化应用，却可能造成 head-of-line blocking。

## Notes

- [Congestion Control](./congestion.md)

## Debug a Slow Connection

1. DNS、connect、TLS、request 和 response 分别耗时多少？
2. 是否存在 packet loss、retransmission 或窗口受限？
3. 应用是在等待网络、连接池、服务端处理还是队列？
4. 长连接是否因 NAT、负载均衡或空闲超时被回收？
5. retry 是否放大拥塞并制造重复请求？
