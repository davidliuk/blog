---
title: Middleware
description: Messaging, search, traffic, and data synchronization systems used to connect services.
icon: network-wired
---

# Middleware

中间件位于业务代码与基础设施之间，用统一的通信、缓冲、检索和流量能力降低系统耦合。它的价值来自明确的语义，而不是简单“接入一个组件”。

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./mq/kafka/">
    <span class="section-card__eyebrow">Event log</span>
    <h3>Kafka</h3>
    <p>分区、复制、消费进度和再处理，适合高吞吐事件流。</p>
  </a>
  <a class="section-card" href="./mq/rabbitmq/">
    <span class="section-card__eyebrow">Message broker</span>
    <h3>RabbitMQ</h3>
    <p>路由、确认、重试和死信，适合丰富的消息投递语义。</p>
  </a>
  <a class="section-card" href="./es/">
    <span class="section-card__eyebrow">Search</span>
    <h3>Elasticsearch</h3>
    <p>倒排索引、分页、查询优化和集群可用性。</p>
  </a>
  <a class="section-card" href="./nginx/">
    <span class="section-card__eyebrow">Traffic</span>
    <h3>Nginx</h3>
    <p>反向代理、负载均衡、静态资源和流量入口。</p>
  </a>
  <a class="section-card" href="./canal/">
    <span class="section-card__eyebrow">Change data capture</span>
    <h3>Canal</h3>
    <p>从数据库变更日志捕获事件，连接缓存、搜索和下游系统。</p>
  </a>
</div>

## Reliability Questions

1. 消息能否丢失、重复或乱序？
2. 生产者和消费者如何确认处理结果？
3. 重试是否有上限、退避和死信出口？
4. 重放历史数据是否会破坏幂等性？
5. 积压、热点分区或下游故障怎样被发现？
