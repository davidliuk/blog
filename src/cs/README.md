---
title: CS Foundations
description: Computer science foundations covering operating systems, networks, object-oriented design, design patterns, and distributed system design.
icon: laptop-code
---

# CS Foundations

这一部分回答的是“软件为什么能这样运行，以及为什么要这样设计”。内容从单机资源管理与网络通信出发，逐步上升到代码结构、服务边界和分布式系统 tradeoff。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Computer Science Knowledge System</p>
  <h2>Understand the runtime, then design the system.</h2>
  <p>
    操作系统解释进程、内存、文件与 I/O；网络解释服务如何通信；
    OOD 和设计模式处理代码级结构；系统设计把这些约束组合成可扩展、可恢复的服务。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Operating Systems</span>
    <span class="section-pill">Computer Networks</span>
    <span class="section-pill">OOD</span>
    <span class="section-pill">Design Patterns</span>
    <span class="section-pill">Distributed Systems</span>
  </div>
</div>

## From Runtime to Architecture

<div class="knowledge-flow" aria-label="Computer science learning layers">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Runtime</strong>
    <p>进程、线程、调度、虚拟内存、文件系统和 I/O 决定单机行为。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Network</strong>
    <p>TCP、HTTP、DNS、RPC 与代理决定跨机器通信的语义和成本。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Software Design</strong>
    <p>对象、接口、模式和模块边界控制变化如何在代码中传播。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>System Design</strong>
    <p>容量、存储、一致性、可用性与安全共同决定系统架构。</p>
  </div>
</div>

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./core/os/">
    <span class="section-card__eyebrow">Runtime</span>
    <h3>Operating Systems</h3>
    <p>进程、内存、文件、设备、I/O、缓存与内核边界。</p>
  </a>
  <a class="section-card" href="./core/network/">
    <span class="section-card__eyebrow">Communication</span>
    <h3>Computer Networks</h3>
    <p>从 IP、TCP 和 QUIC 到 HTTP、RPC、DNS、WebSocket 与 CDN。</p>
  </a>
  <a class="section-card" href="./design/ood/">
    <span class="section-card__eyebrow">Object scale</span>
    <h3>Object-Oriented Design</h3>
    <p>从需求澄清到核心对象、用例、类图、接口和正确性验证。</p>
  </a>
  <a class="section-card" href="./design/pattern/">
    <span class="section-card__eyebrow">Change management</span>
    <h3>Design Patterns</h3>
    <p>识别变化点与稳定点，用创建、结构和行为模式表达协作关系。</p>
  </a>
  <a class="section-card" href="./design/system/">
    <span class="section-card__eyebrow">Service scale</span>
    <h3>System Design</h3>
    <p>需求、容量、API、数据、服务、扩展、可用性和演进路线。</p>
  </a>
  <a class="section-card" href="./design/system/distributed/">
    <span class="section-card__eyebrow">Distributed scale</span>
    <h3>Distributed Systems</h3>
    <p>复制、一致性、事务、故障与网络分区下的系统取舍。</p>
  </a>
</div>

## Choose a Learning Path

<div class="section-path-grid">
  <div class="section-path-card">
    <span class="section-card__eyebrow">Backend foundation</span>
    <h3>服务端基础路线</h3>
    <ol>
      <li><a href="./core/os/process/">Process & Concurrency</a></li>
      <li><a href="./core/os/memory/">Memory</a></li>
      <li><a href="./core/os/io/">I/O</a></li>
      <li><a href="./core/network/transport/TCP.md">TCP</a></li>
      <li><a href="./core/network/application/http/http.md">HTTP</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">Software design</span>
    <h3>代码设计路线</h3>
    <ol>
      <li><a href="./design/ood/">OOD & 5C</a></li>
      <li><a href="./design/pattern/">Design Patterns</a></li>
      <li>接口、依赖与模块边界</li>
      <li><a href="./design/system/module/">Reusable Modules</a></li>
      <li>从对象设计过渡到服务设计</li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">System interview</span>
    <h3>系统设计路线</h3>
    <ol>
      <li><a href="./design/system/concepts/">Core Concepts</a></li>
      <li><a href="./design/system/storage/">Storage</a></li>
      <li><a href="./design/system/availability/">Availability</a></li>
      <li><a href="./design/system/distributed/">Distributed Systems</a></li>
      <li><a href="./design/system/projects/">End-to-End Cases</a></li>
    </ol>
  </div>
</div>

## A System-Design Answer Should Connect

| 维度 | 必须回答的问题 |
| --- | --- |
| Requirements | 核心场景、范围、SLO 和不做什么是什么？ |
| Capacity | QPS、数据量、读写比、带宽和增长预期是什么？ |
| Interface | API、事件和服务边界如何表达业务语义？ |
| Data | 数据模型、索引、分区、缓存与一致性如何选择？ |
| Reliability | 故障如何检测、隔离、恢复和降级？ |
| Evolution | 方案如何从 working solution 演进，而不是一次性过度设计？ |

## How the Sections Connect

<div class="knowledge-crosslinks">
  <a href="../algo/">Algorithms explain the local computation inside each component →</a>
  <a href="../ai/">AI systems add model serving, evaluation, data, and agent execution constraints →</a>
  <a href="../se/">Engineering notes cover concrete languages, databases, middleware, and operations →</a>
</div>

## Maintenance Principle

- 目录页负责建立地图、阅读顺序和跨章节连接。
- 专题页负责完整解释一个问题，优先加入例子、约束和 tradeoff。
- 案例页负责把基础知识串成具体方案，不重复堆砌定义。
- 同一主题从不同角度出现时，使用交叉链接说明关系，而不是复制相同内容。
