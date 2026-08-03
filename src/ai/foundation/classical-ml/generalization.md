# Generalization

Generalization 是模型在未见过、但属于目标使用分布的数据上保持有效的能力。高训练分数只说明模型解释了训练样本。

## Data Split

| Split | Purpose | Must not influence |
| --- | --- | --- |
| Train | 学习参数 | — |
| Validation | 选择模型、阈值和超参数 | 最终 test estimate |
| Test | 最终性能估计 | 训练与反复方案选择 |
| Shadow / online | 验证真实系统行为 | 用户决策，直到安全上线 |

时间、用户、session 或 entity 相关数据需要 group-aware / time-aware split，随机切分可能把未来或同一实体的信息泄漏到训练集。

## Bias and Variance

- **High bias**：训练与验证都差，模型或 feature 无法表达任务。
- **High variance**：训练好、验证差，对样本细节过度拟合。
- 增加模型容量通常降低 bias、提高 variance；更多高质量数据通常帮助 variance。

## Regularization

L1/L2、early stopping、dropout、data augmentation 和 model constraint 都在限制有效容量。是否有效要看 validation behavior，而不是因为“用了正则化”。

## Leakage Checklist

- feature 是否包含 outcome 之后才知道的信息？
- 统计量是否用全量数据计算后再切分？
- 同一用户、文档或近重复样本是否跨 split？
- label 生成流程是否间接使用模型预测？
- offline 特征是否在 online inference 时不可获得？

## Distribution Shift

区分 covariate shift、label shift、concept drift 和 policy-induced shift。监控输入分布变化只能提示风险，不能证明模型质量一定下降；仍需要 label、proxy outcome 或抽样审核。
