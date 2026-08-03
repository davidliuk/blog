---
title: Spring Cloud
description: A service-infrastructure map for configuration, discovery, routing, resilience, and observability.
icon: cloud
---

# Spring Cloud

Spring Cloud 把服务发现、配置、网关、负载均衡和容错等分布式系统能力接入 Spring 应用。框架提供机制，但服务边界、失败语义和数据一致性仍需要业务设计。

## Capability Map

| Capability | Question |
| --- | --- |
| Configuration | 配置由谁拥有，怎样版本化、刷新和回滚？ |
| Discovery | 实例怎样注册、摘除并避免把流量送到未就绪节点？ |
| Gateway | 身份、路由、限流和协议转换在哪个边界完成？ |
| Client balancing | 实例列表、健康状态和重试怎样影响请求分布？ |
| Resilience | timeout、retry、circuit breaker 和 bulkhead 怎样组合？ |
| Observability | trace context、错误和业务属性怎样跨服务传播？ |

## Failure Budget

每次远程调用都必须显式决定：

- 总 deadline，而不只是单次 socket timeout。
- 哪些错误可以重试，最多几次，是否加入 jitter。
- 请求是否幂等，重复执行会产生什么副作用。
- 下游变慢时如何限流、隔离或降级。
- 调用链上谁拥有最终错误语义。

## Notes

- [Nacos](./nacos/)

服务拆分的收益来自独立演进和故障隔离；如果数据、发布和团队边界没有分开，只增加网络调用通常会放大复杂度。
