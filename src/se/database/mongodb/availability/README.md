# MongoDB Availability

MongoDB 的高可用由复制提供故障冗余，由分片提供容量扩展；两者解决的问题不同，也会共同增加一致性和运维复杂度。

## Notes

- [Replication](./replication.md)：副本角色、选举、读写关注和故障切换。
- [Sharding](./sharding.md)：分片键、路由、数据均衡与热点。

设计时先说明恢复时间、可接受的数据损失、读一致性和分片键分布，再选择具体拓扑。
