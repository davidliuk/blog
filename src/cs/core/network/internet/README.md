---
title: Internet Layer
description: IP addressing, routing, forwarding, fragmentation, NAT, and end-to-end connectivity.
icon: route
---

# Internet Layer

Internet layer 负责把 packet 从源主机送到目标主机。它提供 best-effort delivery：路径中的路由器可以丢包、重复、乱序或改变延迟，端到端可靠性由更高层建立。

## Forwarding Path

```text
application data
  → transport segment
  → IP packet
  → longest-prefix route
  → next hop
  → repeated until destination
```

## Topics

- [IP](./IP.md)：地址、子网、路由、TTL、MTU 与 packet forwarding。
- [NAT](./NAT.md)：地址转换、连接状态和端到端可达性影响。

## Key Distinctions

| Concept | Meaning |
| --- | --- |
| Routing | 控制面计算哪些路径可达 |
| Forwarding | 数据面按表把当前 packet 送到 next hop |
| Address | 标识网络位置，不等同于长期身份 |
| MTU | 单个链路可承载的最大 packet，路径中最小值形成约束 |
| NAT | 改写地址或端口，需要维护映射状态 |

## Related Topics

- [TCP](../transport/TCP.md) / [UDP](../transport/UDP.md)
- [DNS](../application/dns.md)

排查连接问题时按 local host → subnet/gateway → route → NAT/firewall → destination 的顺序缩小边界。
