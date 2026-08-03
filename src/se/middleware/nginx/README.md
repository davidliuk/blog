---
title: Nginx
description: Nginx as a reverse proxy and traffic boundary covering routing, load balancing, buffering, timeouts, and observability.
icon: route
---

# Nginx

Nginx 常作为客户端与应用之间的 traffic boundary：终止连接、匹配路由、代理请求、平衡 upstream，并执行缓存、限流或静态内容交付。

## Request Path

```text
client
  → listen / TLS
  → server and location match
  → rewrite / access policy
  → proxy or static handler
  → upstream
  → buffering / response
```

## Reverse Proxy Questions

- 原始 scheme、host、client IP 和 trace header 怎样传递？
- connect、send、read 与 total deadline 怎样协调？
- request / response body 是缓冲还是流式？
- upstream failure 能否安全重试，操作是否幂等？
- health check、connection reuse 和 slow upstream 怎样影响流量？

## Load Balancing

Round-robin、least-connections 和 hash 类策略解决不同分配问题。Sticky routing 可能改善 session locality，也会制造热点和故障迁移问题。

## Operations

- 配置变更先验证 syntax，再 graceful reload。
- access log 同时保留 request time 与 upstream time。
- 监控 active connections、status distribution、upstream errors 和 body size。
- rate limit 按共享资源与用户身份设计，避免误伤所有流量。
- 静态资源使用明确 cache header 和 content hash。
