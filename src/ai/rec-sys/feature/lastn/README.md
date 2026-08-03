# Last-N Behavior Modeling

Last-N 特征用用户最近 $N$ 次行为描述当前兴趣。它通常比全量历史更敏感于兴趣漂移，但并不保证提升：错误的行为定义、时间泄漏、过长序列和反馈噪声都可能使效果变差。

![image-20250824161651826](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824161651826.png)

- **序列元素**：item、作者、类目、query 或多模态内容；
- **行为类型**：曝光、点击、停留、跳过、点赞、收藏等；
- **时间信息**：发生时间、相邻间隔、距当前请求的时间；
- **上下文**：当时入口、设备、位置与 session。

## 聚合方法

最简单的做法是平均池化：

$$
h_u=\frac{1}{N}\sum_{t=1}^{N}e_{i_t}
$$

它计算稳定、适合双塔召回，但丢失顺序和行为强度。更强的方案包括：

- 按行为类型或时间衰减加权；
- 用 target-aware attention 衡量历史 item 与当前候选的相关性；
- 用 RNN、CNN 或 Transformer 建模顺序与多兴趣；
- 把长短期序列分开编码，再由 gate 融合。

## 工程边界

构建序列时只允许使用样本曝光前的事件。需要定义曝光是否进入序列、重复行为如何合并、无效或删除内容如何处理，以及服务端特征最长允许多旧。序列长度 $N$ 是效果、延迟、显存与噪声之间的折中，不应默认越长越好。

## 评估

除整体 AUC/NDCG 外，应按活跃度、历史长度、新老用户和兴趣漂移程度切片；同时观察缓存命中、序列特征缺失率、P99 延迟及 attention 分布。若只对高活用户有效，可以按人群启用更长或更复杂的编码器。

适用层级包括双塔召回、粗排和精排；层级越靠后，越适合使用 candidate-aware 的交互。

参考文献：

- Covington,Adams,and Sargin.Deep neural networks for YouTube recommendations.In ACM Conference on Recommender Systems,2016.

![image-20250824161612514](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824161612514.png)
