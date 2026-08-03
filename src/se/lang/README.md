---
title: Languages & Runtimes
description: A comparative programming-language map focused on type systems, memory, concurrency, runtime, and engineering ecosystems.
icon: code
---

# Languages & Runtimes

学习一门语言不应止于语法。更稳定的比较框架是：类型何时被检查、值怎样表示、资源由谁管理、并发如何协调、代码如何构建和部署。

## Comparison Framework

| Dimension | Questions |
| --- | --- |
| Type system | 类型在编译期还是运行时检查？是否有推断、泛型、空安全和代数数据类型？ |
| Execution | 源码经过解释、字节码、JIT 还是原生编译？启动与稳态性能如何？ |
| Memory | 栈、堆和对象布局怎样工作？由 GC、所有权还是手动管理回收？ |
| Concurrency | 线程、协程、事件循环、actor 或 async/await 的语义是什么？ |
| Errors | 异常、错误值和类型化结果怎样传播？资源释放是否结构化？ |
| Ecosystem | 包管理、构建、测试、格式化、静态分析和发布是否形成闭环？ |

## Language Map

<div class="section-card-grid">
  <a class="section-card" href="./java/">
    <span class="section-card__eyebrow">Managed runtime</span>
    <h3>Java</h3>
    <p>JVM、JIT、GC、JUC、I/O 与企业框架生态。</p>
  </a>
  <a class="section-card" href="./python/">
    <span class="section-card__eyebrow">Dynamic productivity</span>
    <h3>Python</h3>
    <p>对象模型、迭代器、装饰器、并发、包管理与工程实践。</p>
  </a>
  <a class="section-card" href="./golang/">
    <span class="section-card__eyebrow">Service simplicity</span>
    <h3>Go</h3>
    <p>Goroutine、channel、调度器、工具链与服务端工程。</p>
  </a>
  <a class="section-card" href="./cpp/">
    <span class="section-card__eyebrow">Systems control</span>
    <h3>C++</h3>
    <p>对象生命周期、引用、内存、构建系统和高性能库。</p>
  </a>
  <a class="section-card" href="./rust/">
    <span class="section-card__eyebrow">Safe systems</span>
    <h3>Rust</h3>
    <p>所有权、借用、生命周期和零成本抽象。</p>
  </a>
  <a class="section-card" href="./frontend/">
    <span class="section-card__eyebrow">Web platform</span>
    <h3>Frontend</h3>
    <p>HTML、CSS、JavaScript 与浏览器运行时。</p>
  </a>
  <a class="section-card" href="./kotlin/">
    <span class="section-card__eyebrow">JVM evolution</span>
    <h3>Kotlin</h3>
    <p>空安全、表达式、协程和 JVM 互操作。</p>
  </a>
</div>

## Learn a Language Through One Service

1. 实现一个包含配置、日志、测试和持久化的小服务。
2. 加入并发请求，观察线程、协程或事件循环行为。
3. 制造 CPU、内存和 I/O 瓶颈，并用 profiler 定位。
4. 打包为可部署产物，记录依赖、启动和关闭语义。
5. 再比较另一门语言实现同一任务时的复杂度与取舍。
