---
title: Rust
description: Rust fundamentals through ownership, borrowing, lifetimes, types, errors, concurrency, and Cargo.
icon: gear
---

# Rust

Rust 用 ownership 和 borrowing 在编译期约束内存与并发安全，同时保留对 layout、allocation 和系统资源的控制。

## Core Model

| Concept | Question |
| --- | --- |
| Ownership | 哪个 binding 负责值的生命周期和释放？ |
| Borrowing | 能否在不转移 ownership 的情况下临时访问？ |
| Lifetime | 多个 reference 的有效期关系是什么？ |
| Move / Copy | 赋值和传参后旧 binding 是否仍可用？ |
| Trait | 类型通过什么行为 contract 参与泛型代码？ |
| Result / Option | 失败和缺失怎样被类型显式表达？ |

## Notes

- [Types](./type.md)

## Cargo Workflow

Cargo 同时承担 package metadata、dependency resolution、build、test、benchmark 和 publish 等职责。一个可维护 crate 应明确 public API、feature flag、unsafe boundary 和最低支持环境。

## Concurrency

Rust 不保证并发逻辑自动正确，但会阻止许多 data race。`Send`、`Sync`、ownership transfer 和同步原语共同决定状态能否跨线程共享。

学习时优先解释 compiler error 保护了哪条 invariant，而不是只寻找让代码通过的语法。
