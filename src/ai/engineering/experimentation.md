# AI Experimentation

实验的目标是减少决策不确定性，而不是积累运行次数。每个 run 都应对应一个明确假设，并产生可比较的证据。

## Experiment Contract

| Field | Example |
| --- | --- |
| Question | 新 retrieval strategy 是否提高长尾任务 recall？ |
| Change | 唯一主变量与必要依赖 |
| Fixed context | data snapshot、base model、evaluation set |
| Success | primary metric、guardrail 和最小效果 |
| Budget | compute、time、samples、API cost |
| Decision | adopt、reject、iterate 或 collect more evidence |

## Reproducibility

至少记录：

- code commit 与 dependency lock；
- dataset / feature / label version；
- base checkpoint、tokenizer、prompt template；
- hyperparameter、seed、hardware 与 parallel configuration；
- exact evaluation suite 与 scoring version；
- output artifact、logs 和 failure cases。

Deterministic execution 并非总能实现，重点是量化 variance，并让差异可以解释。

## Compare Fairly

1. 先验证 evaluation pipeline 能区分明显好坏的 baseline。
2. 避免同时改变 data、model、prompt 和 metric 后归因给单一因素。
3. 对 stochastic system 报告多次运行或 confidence interval。
4. Aggregate metric 与关键 slice 同时比较。
5. 失败 case 需要阅读，不能只看 dashboard。

## Decision Log

记录选择、证据、已知限制和复查条件。模型迭代很快时，decision log 比完整保留每个中间 notebook 更能防止重复试错。
