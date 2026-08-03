---
title: Software Testing
description: Notes on testing strategy, performance testing, and engineering quality feedback.
icon: vial
---

# Software Testing

测试的价值是降低变化的不确定性。一个有效的测试组合需要覆盖核心行为、关键集成和生产风险，同时保持反馈足够快。

## Test by Risk

| Layer | Protects | Typical failure |
| --- | --- | --- |
| Unit | 局部逻辑和边界条件 | 分支、状态转换、异常处理错误 |
| Integration | 数据库、消息与外部依赖 | 协议、Schema、事务语义不一致 |
| Contract | 服务之间的接口兼容 | 单方升级破坏消费者 |
| End-to-end | 核心用户路径 | 组件都正常但整体流程失败 |
| Performance | 延迟、吞吐和容量 | 饱和、排队、资源泄漏 |

## Notes

- [JMeter](./jmeter.md)：负载生成、场景编排和性能测试记录。

每次测试失败都应回答三个问题：这是产品缺陷、测试缺陷还是环境缺陷？失败能否稳定复现？怎样让它更早、更便宜地被发现？
