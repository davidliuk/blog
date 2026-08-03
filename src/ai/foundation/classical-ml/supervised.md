# Supervised Learning

监督学习从输入 $x$ 和标签 $y$ 学习函数 $f_\theta(x)$。真正的设计工作集中在 target、loss、features、sampling 和 decision rule，而不只是模型名称。

## Task Types

| Task | Output | Typical objective |
| --- | --- | --- |
| Regression | 连续值 | squared、absolute、quantile loss |
| Binary classification | 概率或 score | log loss、hinge loss |
| Multiclass classification | 类别分布 | cross-entropy |
| Ranking | item order | pointwise、pairwise、listwise objective |
| Structured prediction | 序列、图或组合结构 | token / sequence / task-specific loss |

## Model Families

- **Linear / logistic model**：强 baseline，可解释，适合稀疏高维特征。
- **Tree**：自动学习非线性 split，对 feature scaling 不敏感。
- **Bagging / random forest**：降低单树 variance，提供稳健非线性 baseline。
- **Boosting**：逐步拟合残差或 gradient，表格数据上常有很强表现。
- **SVM / margin method**：通过 margin 控制 decision boundary。
- **Neural network**：联合学习 representation 与 predictor，适合高维非结构化数据。

## Loss Is Not the Product Metric

训练 loss 必须可优化，产品 metric 可能不可微、延迟反馈或受策略影响。需要记录：

```text
business objective
  → measurable outcome
  → offline metric
  → trainable surrogate loss
```

每个箭头都是潜在失真来源。

## Class Imbalance

- 使用 precision–recall 而不只看 accuracy。
- sampling 改变训练分布后，检查 calibration。
- threshold 由成本与容量决定，不等于 0.5。
- hard negative 应代表真实决策边界，而不是人为制造的极端样本。

## Error Analysis

按 label source、time、population、feature availability 和 confidence 分片。模型整体提升但关键人群退化，通常比平均分不变更值得处理。
