# RabbitMQ Failure Patterns

可靠消息设计必须覆盖生产、Broker、网络和消费四个阶段的失败。

## Notes

- [Idempotency](./幂等性.md)
- [Message Loss](./消息丢失.md)
- [Backlog](./消息积压.md)
- [Compensation](./补偿机制.md)

恢复方案不能只依赖无限重试；应包含退避、上限、死信、人工出口和可观测状态。
