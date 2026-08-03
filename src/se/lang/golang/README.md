---
title: Go
description: Go notes on language semantics, concurrency, runtime scheduling, tooling, engineering, and diagnosis.
icon: code
---

# Go

Go 以小型语言核心、明确工具链和轻量并发支持服务端工程。学习重点是 interface、error、goroutine、channel、调度与内存行为。

## Notes

- [Language](./语法.md)
- [Concurrency](./并发.md)
- [Concurrency Safety](./并发安全.md)
- [G-M-P Scheduler](./MPG.md)
- [Toolchain](./tool-chain.md)
- [Engineering Guidelines](./工程规范.md)
- [Optimization](./优化.md)
- [Diagnosis](./排查.md)

并发设计先写出 goroutine 的生命周期、共享状态、取消路径和背压，再决定 channel、mutex 或其他原语。
