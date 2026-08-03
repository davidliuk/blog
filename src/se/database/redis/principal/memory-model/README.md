# Redis Memory Model

Redis 内存治理需要同时考虑对象占用、过期删除、淘汰策略、碎片率和持久化时的峰值。

## Notes

- [Expiration](./过期删除策略.md)
- [Eviction](./内存淘汰策略.md)

策略选择取决于数据能否重建、不同 key 的价值和超出内存预算时的降级方式。
