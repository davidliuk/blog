# Redis Thread Model

线程模型笔记关注网络 I/O、命令执行、后台任务和持久化之间的分工。

## Notes

- [Execution Model](./线程模型.md)

“单线程”不是完整性能解释；还需要检查命令复杂度、数据规模、网络、fork 与后台 I/O。
