# Grafana

Grafana 是观测入口，不是数据本身。Dashboard 应围绕用户结果、服务边界和调查路径组织，而不是把所有指标铺在同一页。

## Dashboard Layers

1. **Service overview**：traffic、errors、latency、saturation 与 SLO。
2. **Dependency view**：数据库、缓存、消息与下游服务。
3. **Resource view**：CPU、memory、disk、network、runtime。
4. **Diagnostic drill-down**：按 region、version、endpoint、tenant 等维度切分。

## Panel Design

- 标题表达问题，例如“请求是否因下游超时失败”，而非只写指标名。
- 展示单位、聚合方式、时间窗口和关键阈值。
- 同时展示 request rate，避免低流量比例造成误判。
- 高基数 label 先治理，不能把查询成本转移给 dashboard。
- 发布、配置变化和事故事件应能叠加到时间线。

## Alert and Dashboard

Alert 用于触发行动，dashboard 用于支持调查。一个 panel 值得告警，不代表所有波动都需要通知；告警必须连接 owner、影响和第一步操作。
