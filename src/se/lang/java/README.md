---
title: Java
description: Java knowledge map from language basics and collections to concurrency, I/O, JVM, and application frameworks.
icon: mug-hot
---

# Java

Java 的学习主线是从语言语义进入 JVM 运行时，再进入并发、I/O 和框架。框架 API 会变化，但对象模型、内存可见性、类加载和资源管理是长期稳定的基础。

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./basic/">
    <span class="section-card__eyebrow">Language</span>
    <h3>Basics</h3>
    <p>类型、类、异常、关键字、泛型和代码规范。</p>
  </a>
  <a class="section-card" href="./collections/">
    <span class="section-card__eyebrow">Data structures</span>
    <h3>Collections</h3>
    <p>List、Set、Map 的语义、实现与复杂度。</p>
  </a>
  <a class="section-card" href="./JUC/">
    <span class="section-card__eyebrow">Concurrency</span>
    <h3>JUC</h3>
    <p>线程、锁、AQS、并发容器、异步任务和 Java Memory Model。</p>
  </a>
  <a class="section-card" href="./jvm/">
    <span class="section-card__eyebrow">Runtime</span>
    <h3>JVM</h3>
    <p>类文件、类加载、内存区域、GC、执行系统和并发语义。</p>
  </a>
  <a class="section-card" href="./io/">
    <span class="section-card__eyebrow">I/O</span>
    <h3>Input & Output</h3>
    <p>Stream、NIO、buffer、channel 与网络 I/O 模型。</p>
  </a>
  <a class="section-card" href="./framework/">
    <span class="section-card__eyebrow">Application ecosystem</span>
    <h3>Frameworks</h3>
    <p>Spring、ORM、Web、DI、security 和分布式组件。</p>
  </a>
  <a class="section-card" href="./feature/">
    <span class="section-card__eyebrow">Evolution</span>
    <h3>Language Features</h3>
    <p>记录 Java 版本演进中值得进入日常工程实践的能力。</p>
  </a>
</div>

## Explain a Java Performance Problem

1. 先区分 CPU、allocation、GC、lock、I/O 还是下游等待。
2. 用 metrics 确认时间窗口和影响范围，再采集 thread dump、heap 或 profile。
3. 从线程状态和调用栈定位等待点，不以单个瞬时样本下结论。
4. 修改后同时验证正确性、延迟分位数、吞吐和资源占用。

## Engineering Reference

- [Alibaba Java Coding Guidelines](https://alibaba.github.io/p3c/)
