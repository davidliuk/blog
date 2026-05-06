# System Design

系统设计关注的是：给定一个业务目标，在约束条件下如何做出一个可工作的方案，并清楚说明 tradeoff。

## 目录

- `./concepts/`：系统设计中的通用概念
- `./module/`：可复用的功能模块
- `./projects/`：完整案例
- `./availability/`：高可用与故障处理
- `./distributed/`：分布式事务与一致性
- `./security/`：认证、授权与安全基础
- `./storage/`：SQL / NoSQL 等存储选型
- `./realtime/`：实时推送与连接模型
- `./interview/`：场景题与开放题
- `./resources/`：延伸阅读
- `./ddd/`：领域驱动设计

## 核心关注点

- Reliability
- Scalability
- Maintainability

## 常见问题形式

- 设计一个完整系统
  - Design Twitter
  - Design Uber
  - Design WhatsApp
  - 设计短链系统
- 设计一个系统中的某个功能
  - 限流
  - 评论
  - 监控
  - News Feed

## OOD vs SD

- OOD 更偏微观，关注类、对象、接口与协作关系
- SD 更偏宏观，关注服务、存储、容量、可用性与演进路线

## 4S 分析法

Work solution first, not perfect solution first.

### 1. Scenario

先问清楚：

- 需要哪些核心功能
- 流量规模多大
- 接口怎么暴露
- 哪些需求是 must-have，哪些是 nice-to-have

### 2. Service

把系统拆成服务时，核心是：

- 一类逻辑放进一个服务
- 服务边界清楚
- 不要过早过度微服务化

### 3. Storage

存储设计通常要回答：

- 数据结构是什么
- 用 SQL 还是 NoSQL
- 是否需要缓存
- 哪些数据适合冗余存储

### 4. Scale

扩展阶段主要看：

- 高并发
- 高性能
- 高可用
- 特殊流量场景

## 评分标准

> 避免只讲关键词

- 可行解 Work Solution
- 特定问题 Special Case
- 分析能力 Analysis
- 权衡 Tradeoff
- 知识储备 Knowledge Base

## 设计原则

- Ask before design
- No more, no less
- Work solution first
- Analysis is more important than memorizing 答案
