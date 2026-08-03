---
title: Observability
description: Observability notes on metrics, logs, traces, profiling, dashboards, and incident diagnosis.
icon: chart-line
---

# Observability

Monitoring 告诉我“已知问题是否发生”，observability 帮助我用系统输出解释“未知问题为什么发生”。有效的可观测体系围绕用户结果和服务边界组织，而不是围绕工具数量组织。

## Signals

| Signal | Best for | Typical question |
| --- | --- | --- |
| Metrics | 趋势、告警、容量和 SLO | 何时开始、影响多大、是否仍在恶化？ |
| Logs | 离散事件和上下文 | 哪个请求、状态或错误分支触发了问题？ |
| Traces | 跨服务因果路径 | 延迟和失败发生在哪个依赖边界？ |
| Profiles | CPU、内存和锁的代码归因 | 资源究竟花在哪个函数或调用栈？ |

## Notes

- [Prometheus](./prometheus.md)：指标采集、查询和告警。
- [Grafana](./grafana.md)：仪表盘与观测入口。
- [SkyWalking](./skywalking.md)：分布式追踪与服务拓扑。
- [Arthas](./arthas.md)：Java 运行时诊断。

## Design an Alert

1. 从用户可感知的失败或 SLO 风险开始。
2. 确保告警有明确 owner 和可以执行的第一步。
3. 用持续时间、分位数或 burn rate 抑制瞬时噪声。
4. Dashboard 用于调查，alert 用于行动；不要把每条曲线都变成告警。
5. 事故结束后检查：告警是否及时、是否提供了足够上下文？

OpenTelemetry 可以统一 traces、metrics 和 logs 的采集语义，具体存储与分析后端仍可独立选择。
