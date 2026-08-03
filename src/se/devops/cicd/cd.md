# Continuous Delivery

Continuous Delivery 保证主干上的每个候选版本都具备可部署性；Continuous Deployment 则进一步自动把满足条件的版本送入生产。两者共同依赖可信制品、环境声明、渐进发布和结果验证。

## GitOps Mental Model

以 Argo CD 一类工具为例：

1. Git 保存目标状态，而不是临时操作步骤。
2. 控制器持续比较 desired state 与 live state。
3. 差异经过同步策略被修复，并留下审计记录。
4. 健康状态与同步状态是两个维度：配置一致不代表业务正常。

## Rollout Strategies

| Strategy | Best for | Main risk |
| --- | --- | --- |
| Rolling | 一般无状态服务 | 新旧版本同时运行时的兼容性 |
| Blue-green | 快速整体切换 | 双环境成本与状态切换 |
| Canary | 用小流量验证真实结果 | 指标噪声、样本偏差和路由复杂度 |
| Feature flag | 解耦代码发布与功能开放 | flag 生命周期和组合爆炸 |

## Deployment Contract

- 制品不可变，配置和密钥通过外部注入。
- 启动、就绪、存活和优雅终止的语义明确。
- 数据迁移向前兼容，并能在混合版本期间工作。
- 验证包含用户结果，不只检查容器数量。
- 自动化必须保留暂停、人工接管和审计能力。
