# Recommendation Features

特征把用户、内容、上下文和历史行为转化为模型可以消费的信号。

<div class="ai-card-grid">
  <a class="ai-card" href="./cross/">
    <span class="ai-card__eyebrow">Interaction</span>
    <h3>Feature Cross</h3>
    <p>显式或隐式建模用户、物品和上下文之间的高阶交互。</p>
  </a>
  <a class="ai-card" href="./lastn/">
    <span class="ai-card__eyebrow">Behavior sequence</span>
    <h3>Last-N Features</h3>
    <p>从近期行为序列提取兴趣、相似度和注意力信号。</p>
  </a>
</div>

评价特征时同时检查信息增益、时效性、泄漏风险、线上可用性和计算成本。

## 特征版图

| 类别 | 例子 | 主要用途 |
| --- | --- | --- |
| User | 活跃度、偏好分布、长期画像 | 表达稳定兴趣与价值 |
| Item | 类目、作者、质量、内容 embedding | 表达候选语义与供给属性 |
| Context | 时间、位置、入口、设备、网络 | 刻画当前决策条件 |
| Interaction | 历史点击、停留、跳过、关注 | 建模显式与隐式反馈 |
| Cross | user×item、query×item、scene×item | 表达匹配关系 |
| Sequence | Last-N、session、时间间隔 | 捕获短期意图和兴趣漂移 |

## 从定义到上线

每个特征都应拥有统一定义、事件时间、数据源、缺省值、回填策略、离线统计和线上服务方式。训练集必须以样本时刻执行 point-in-time join，防止使用“未来才知道”的数据。上线时则需要验证：

1. 离线与在线变换逻辑是否一致；
2. 缺失率、延迟和分布是否在预期范围；
3. 特征不可用时模型能否安全回退；
4. 增量收益能否覆盖存储、网络和推理成本；
5. 是否引入敏感属性、代理变量或不合理偏差。

强特征不只是提升离线 AUC，还应跨时间和人群稳定，并能在生产延迟预算内可靠获取。
