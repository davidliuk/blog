# Spring WebFlux

WebFlux 是 reactive Web stack。它适合大量并发、主要等待异步 I/O，并且整条依赖链都能保持 non-blocking 的 workload；它不会让 CPU-bound 工作自动更快。

## Execution Model

```text
request
  → small event-loop pool
  → asynchronous dependency
  → signal callback
  → response stream
```

少量 event-loop 线程处理许多连接，因此在 event loop 中执行 blocking I/O 或长时间 CPU 工作会阻塞大量请求。

## Reactive Streams

- `Publisher` 产生数据。
- `Subscriber` 接收 signal。
- backpressure 让消费方表达可处理的 demand。
- cancellation 必须传播到上游，释放连接和计算。

## When to Use

| Good fit | Poor fit |
| --- | --- |
| streaming、gateway、高并发 I/O | 依赖主要是 blocking API |
| 端到端 reactive driver | 简单 CRUD 且团队更熟悉 servlet |
| 需要 backpressure 的数据流 | 大量 CPU 工作仍在 event loop |

## Debugging

Reactive chain 会跨异步边界，需保留 context、trace 和 assembly information。排查时检查 blocking call、scheduler 切换、未订阅 pipeline、错误被吞和 cancellation 未传播。
