---
title: HTTP
description: HTTP semantics, caching, security, multiplexing, and protocol evolution from HTTP/1.1 to HTTP/3.
icon: globe
---

# HTTP

HTTP 先是一套 request/response 语义，然后才是具体传输版本。method、status、header、cache 和 representation 决定应用行为；连接复用和多路复用决定交付效率。

## Reading Order

1. [HTTP/1.1](./http.md)：message semantics、连接复用和 framing。
2. [HTTPS](./https.md)：TLS 身份、机密性和完整性。
3. [HTTP/2](./http2.md)：binary framing、stream multiplexing 与 header compression。
4. [HTTP/3](./http3.md)：HTTP semantics over QUIC。

## Stable Semantics

| Concern | Design question |
| --- | --- |
| Method | 操作是否 safe、idempotent，重试会发生什么？ |
| Status | 客户端能否区分输入错误、认证、冲突、限流和服务故障？ |
| Representation | media type、encoding 和 version 怎样协商？ |
| Cache | 谁可以缓存、缓存多久、怎样验证或失效？ |
| Connection | 复用、并发和 head-of-line blocking 怎样影响 latency？ |

## One Request Timeline

```text
DNS → connection → TLS → request headers/body
    → server queue/work → response headers/body
```

端到端性能优化先拆分时间线，再决定处理 DNS、连接池、压缩、缓存、服务端计算或传输。

## Failure-Oriented Design

- 设置 end-to-end deadline，不让每一层独立消耗完整超时。
- 只自动重试可安全重复的操作，并加入退避和 jitter。
- 使用 request ID / trace context 连接客户端、网关和服务端证据。
- 大 body 使用流式处理与背压，避免无界缓冲。
- 缓存策略必须说明 freshness、validation 和 invalidation。
