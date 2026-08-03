# Redis Commands

命令笔记按数据结构组织。使用前同时检查时间复杂度、返回语义、原子性、阻塞风险和 key 的最大规模。

## Notes

- [Generic](./generic.md)
- [String](./string.md)
- [Hash](./hash.md)
- [List](./list.md)
- [Set](./set.md)
- [Sorted Set](./sorted-set.md)

批量命令减少网络往返，但也可能放大单次执行时间和内存峰值。
