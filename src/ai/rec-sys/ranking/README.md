# Ranking

排序在有限候选集上估计用户—物品—上下文的效用。工业系统通常同时预测点击、时长、点赞、收藏、转化和负反馈，再通过价值函数把多个目标转化为一个可排序分数。

```text
candidate + user + context
              │
        feature interaction
              │
      shared representation
        ┌─────┼─────┐
      CTR   dwell   value
        └─────┼─────┘
         score fusion
              │
          ranked list
```

## 从概率到效用

单目标系统可直接按 $P(click\mid u,i,c)$ 排序；多目标系统常使用加权、乘法或约束优化：

$$
U(u,i)=\sum_k w_k\,g_k(\hat p_k)
$$

$g_k$ 负责校准、截断或非线性变换，$w_k$ 表达阶段性的产品价值。权重不是纯模型超参，而是产品策略的一部分，需要离线回放、在线实验和护栏共同确定。

## Multi-Task Learning

## 模型

![image-20250818104259163](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250818104259163.png)

- **Shared Bottom**：成本低、共享充分，但任务冲突会产生负迁移；
- **MMoE**：多个 expert 配合任务专属 gate，缓解任务差异；
- **PLE**：区分共享与任务专属 expert，显式建模迁移边界；
- **两阶段或多模型**：隔离更彻底，但特征和服务成本更高。

$CrossEntropy(y_1,p_1)=-(y_1\cdot\ln p_1+(1-y_1)\cdot\ln(1-p_1))$

总损失可写作：

$$
\mathcal L=\sum_{k=1}^{K}\alpha_k\mathcal L_k
$$

$\alpha_k$ 可以固定，也可以根据不确定性、梯度大小或训练阶段自适应。仅调损失权重并不能解决标签定义冲突、曝光偏差或某任务样本严重稀疏的问题。

## 样本与偏差

日志只包含被旧策略曝光后的反馈，因此训练数据不是自然分布。需要特别处理：

- **类别不平衡**：负样本降采样、focal loss 或困难样本挖掘；
- **位置偏差**：position feature、随机流量或 propensity correction；
- **选择偏差**：补充探索流量，防止模型只学习旧策略；
- **延迟反馈**：为转化类目标设置成熟窗口并修正右删失；
- **样本泄漏**：特征时间必须早于曝光和标签窗口。

## 预估值校准

若负样本以比例 $\alpha$ 降采样，训练集预测值不能直接解释为线上概率。设：

$$
p_{\mathrm{pred}}=\frac{n_+}{n_++\alpha n_-}
$$

则原始分布上的概率为：

$$
p_{\mathrm{true}}=
\frac{\alpha p_{\mathrm{pred}}}
{(1-p_{\mathrm{pred}})+\alpha p_{\mathrm{pred}}}
$$

实际还需按人群、位置和流量入口检查 reliability diagram、ECE/Brier Score，并在分布变化后重新校准。

## 线上约束

排序质量之外，还要控制特征新鲜度、训练—服务一致性、批量推理吞吐和尾延迟。候选数为 $N$ 时，复杂交互网络需执行 $N$ 次 item-conditioned 计算，因此应复用 user-side 表示、批处理候选，并把昂贵特征放在收益足够高的层级。

## 评估清单

- 离线：AUC、log loss、NDCG、校准度和分群切片；
- 线上：留存、时长、有效互动、转化和负反馈；
- 系统：P95/P99 延迟、超时率、特征缺失率和模型回退率；
- 生态：供给覆盖、创作者公平、内容多样性和重复率。

## 延伸阅读

- [Feature Engineering](./feature.md)
- [MMoE](./mmoe.md)
- [Score Blending](./blending.md)
- [Re-Ranking](../re-ranking/)
- [Recommendation Metrics](../metrics/)

## 参考

1. Xinran He et al.Practical lessons from predicting clicks on ads at Facebook.In the 8th International Workshop on Data Mining for Online Advertising.
