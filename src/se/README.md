---
title: Software Engineering
description: A practical software engineering knowledge base covering languages, data systems, middleware, delivery, observability, and engineering tools.
icon: gears
---

# Software Engineering

软件工程关心的不是“代码能不能跑”，而是一个系统能否被持续构建、交付、观察和演进。这里把语言、数据库、中间件、DevOps、测试与工具放进同一条工程链路中。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Engineering Knowledge System</p>
  <h2>Build the service. Manage the state. Connect the system. Operate it with confidence.</h2>
  <p>
    从语言与运行时出发，把业务状态放进合适的数据系统，通过中间件连接服务，
    再用自动化交付、测试和可观测性建立稳定的生产反馈回路。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Languages</span>
    <span class="section-pill">Databases</span>
    <span class="section-pill">Middleware</span>
    <span class="section-pill">DevOps</span>
    <span class="section-pill">Observability</span>
    <span class="section-pill">Testing</span>
  </div>
</div>

## The Engineering Loop

<div class="knowledge-flow" aria-label="Software engineering lifecycle">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Build</strong>
    <p>用合适的语言、运行时和框架表达领域模型，并保持接口和代码边界清晰。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Store</strong>
    <p>围绕一致性、访问模式、延迟和成本选择数据模型、索引与缓存策略。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Integrate</strong>
    <p>通过消息、搜索、代理和服务治理解耦组件，明确失败与恢复语义。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Operate</strong>
    <p>自动化测试和交付，用日志、指标与追踪观察系统，并从事故中持续改进。</p>
  </div>
</div>

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./lang/">
    <span class="section-card__eyebrow">01 · Build</span>
    <h3>Languages & Runtimes</h3>
    <p>Java、Python、Go、C++、Rust 与前端：类型、并发、内存、运行时和工程生态。</p>
  </a>
  <a class="section-card" href="./database/">
    <span class="section-card__eyebrow">02 · State</span>
    <h3>Data Systems</h3>
    <p>SQL、MySQL、Redis、MongoDB 与 HBase：事务、索引、持久化、缓存和高可用。</p>
  </a>
  <a class="section-card" href="./middleware/">
    <span class="section-card__eyebrow">03 · Integration</span>
    <h3>Middleware</h3>
    <p>Kafka、RabbitMQ、Elasticsearch、Nginx 与 Canal：消息、搜索、流量和数据同步。</p>
  </a>
  <a class="section-card" href="./devops/">
    <span class="section-card__eyebrow">04 · Delivery</span>
    <h3>DevOps & Infrastructure</h3>
    <p>Unix、Docker、Kubernetes 与 CI/CD：从开发环境到可重复、可回滚的生产交付。</p>
  </a>
  <a class="section-card" href="./monitor/">
    <span class="section-card__eyebrow">05 · Feedback</span>
    <h3>Observability</h3>
    <p>Metrics、logs、traces 与 profiling：从用户症状定位到资源、代码和依赖根因。</p>
  </a>
  <a class="section-card" href="./test/">
    <span class="section-card__eyebrow">06 · Confidence</span>
    <h3>Software Testing</h3>
    <p>测试层次、性能测试与质量反馈，让系统变化变得可验证、可重复。</p>
  </a>
  <a class="section-card" href="./app/">
    <span class="section-card__eyebrow">Product surface</span>
    <h3>Application Engineering</h3>
    <p>Native、Web 与跨平台技术的边界、共享策略和产品交付取舍。</p>
  </a>
  <a class="section-card" href="./tools/">
    <span class="section-card__eyebrow">Developer leverage</span>
    <h3>Engineering Tools</h3>
    <p>Git、UML、文档与站点工具：减少协作摩擦，保留可复用的工程上下文。</p>
  </a>
</div>

## Choose a Learning Path

<div class="section-path-grid">
  <div class="section-path-card">
    <span class="section-card__eyebrow">Backend engineer</span>
    <h3>后端工程路线</h3>
    <ol>
      <li><a href="./lang/java/">Java & JVM</a></li>
      <li><a href="./database/mysql/">MySQL</a> 与事务</li>
      <li><a href="./database/redis/">Redis</a> 与缓存</li>
      <li><a href="./middleware/">Messaging & Search</a></li>
      <li><a href="./monitor/">Observability</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">Production systems</span>
    <h3>生产系统路线</h3>
    <ol>
      <li><a href="./devops/unix/">Unix</a> 与进程、文件、网络</li>
      <li><a href="./devops/docker/">Docker</a></li>
      <li><a href="./devops/k8s/">Kubernetes</a></li>
      <li><a href="./devops/cicd/">CI/CD</a></li>
      <li><a href="./monitor/">Metrics, Logs & Traces</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">Language depth</span>
    <h3>语言与运行时路线</h3>
    <ol>
      <li><a href="./lang/">Language Models</a></li>
      <li>类型系统、内存模型与错误处理</li>
      <li>并发原语与 I/O 模型</li>
      <li>标准库、包管理与构建系统</li>
      <li>Profiling 与性能诊断</li>
    </ol>
  </div>
</div>

## Questions Before Choosing a Technology

| 维度 | 先问什么 | 常见误区 |
| --- | --- | --- |
| Workload | 读写比例、数据规模、延迟目标是什么？ | 先选产品，再找问题 |
| Correctness | 哪些状态必须一致，哪些可以最终一致？ | 把所有数据都设成同一一致性等级 |
| Failure | 超时、重试、重复、乱序和部分失败怎样处理？ | 只设计成功路径 |
| Operations | 怎样发布、回滚、扩容和排障？ | 把运维留到上线前 |
| Evolution | Schema、API 与数据如何兼容演进？ | 把第一次设计当成最终设计 |

## How the Sections Connect

<div class="knowledge-crosslinks">
  <a href="../cs/">CS Foundations explains the runtime and distributed-system principles underneath these tools →</a>
  <a href="../ai/">AI Systems shows where data, serving, evaluation, and observability meet model behavior →</a>
  <a href="../algo/">Algorithms supplies the data structures and complexity reasoning used inside every system →</a>
</div>
