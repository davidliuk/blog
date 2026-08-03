# Retrieval

召回的任务是在严格延迟预算内，从百万乃至十亿级物品中选出数百到数千个“值得进一步计算”的候选。它首先解决覆盖问题，其次才是在有限容量内提升相关性。

## 多路召回架构

```text
user + context
      │
      ├─ collaborative: ItemCF / UserCF / Swing
      ├─ semantic: two-tower / ANN / graph embedding
      ├─ relation: followed authors / friends / subscriptions
      ├─ context: location / time / device / current session
      ├─ exploration: new items / long tail / randomization
      └─ fallback: popular / cached / editorial
                         │
                 merge → deduplicate → quota → filter
                         │
                     pre-ranking
```

一条成熟的召回路径需要明确：

- **candidate source**：从什么索引、图或缓存取候选；
- **intent**：覆盖长期兴趣、短期意图、社交关系还是探索需求；
- **quota**：最多贡献多少候选，是否随用户状态动态变化；
- **freshness**：索引更新频率和新内容进入路径的延迟；
- **fallback**：特征缺失、索引超时或冷启动时如何降级；
- **attribution**：候选被哪条路径召回，以便离线和线上归因。

## 方法地图

| 家族 | 代表方法 | 长处 | 主要风险 |
| --- | --- | --- | --- |
| 统计与规则 | 热门、地域、作者、标签 | 简单稳定、可解释 | 个性化弱、容易头部化 |
| 协同过滤 | [ItemCF](./itemcf.md)、[UserCF](./usercf.md)、[Swing](./swing.md) | 利用群体行为，训练成本低 | 稀疏性、流行度偏差 |
| 表示学习 | [DSSM / 双塔](./dssm/)、ANN | 可统一处理多模态与上下文 | 负样本和索引一致性敏感 |
| 图与路径 | DeepWalk、Node2Vec、U2T2I | 适合关系与多跳兴趣 | 图更新和在线查询成本 |
| 序列与生成式 | sequence-to-item、generative retrieval | 能表达动态意图 | 训练、约束与服务复杂 |

## 双塔召回

双塔分别把用户与物品映射到同一向量空间：

$$
s(u,i)=\operatorname{sim}(f_\theta(u),g_\phi(i))
$$

物品向量可离线构建 ANN 索引，线上只需计算用户向量并执行近邻检索。效果往往取决于：

1. 正样本是否代表真实偏好，而不只是曝光机制；
2. 随机负样本、困难负样本和同批负样本的比例；
3. 训练时相似度与线上 ANN 距离是否一致；
4. 物品向量、过滤属性和索引版本是否原子发布；
5. 向量更新延迟能否满足内容新鲜度。

## 合并与配额

简单并集会让高产路径支配候选集。常见策略包括固定配额、按用户状态动态配额、分数归一化后混排，以及先分桶再去重。去重不能只看 item ID，还可能需要作者、主题、事件或近重复内容级约束。

## 如何评估

离线至少观察 Recall@K、Hit Rate、覆盖率、新颖性、候选重复率和分人群表现；线上同时看最终业务指标、下游排序增益、召回路径利用率、索引新鲜度、P95/P99 延迟和 fallback 比例。详见[召回指标](../metrics/retrieval.md)。

## 延伸阅读

- [Retrieval Paths](./path/)
- [Filtering](./filter.md)
- [Matrix Completion](./matrix-completion.md)
- [Cold Start](../cold-start/)
- [Generative Recommendation](../gen-rec/)
