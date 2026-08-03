# AI Metrics and Evaluation Datasets

Metric 是 task contract 的可计算近似。先定义什么行为有价值、什么错误不可接受，再选择 metric；反过来从现有 benchmark 推导目标，容易优化错误问题。

## Metric Layers

| Layer | Example |
| --- | --- |
| Component | retrieval recall、tool schema validity、latency |
| Task | answer correctness、code tests、workflow completion |
| Behavior | groundedness、refusal、calibration、style |
| Risk | privacy、unsafe action、bias、security violation |
| Product | acceptance、correction、time saved、retention |

## Dataset Composition

- Representative set：接近真实 workload 分布。
- Challenge set：稀有但高风险、困难或对抗 case。
- Regression set：历史事故和已修复 failure。
- Fresh set：在模型与 prompt 选择后新采样，降低过拟合。
- Dynamic set：可生成或随环境更新，降低静态 benchmark 饱和。

## Aggregate and Slice

总分用于快速比较，slice 用于行动。至少按 task、language、difficulty、risk、tool、customer segment 和 context length 分片。

## Uncertainty

有限 case 下，微小分数差异可能只是 sampling noise。报告样本数、置信区间或 bootstrap estimate；对 stochastic model 重复执行关键 case。

## Threshold

Release threshold 由风险和产品需求决定：

- 核心 capability 允许多大 regression？
- 高严重度 safety failure 是否为 zero-tolerance？
- 低频 slice 是否需要更大样本或人工 review？
- latency / cost guardrail 是否影响用户价值？

## Contamination

如果 evaluation case 进入训练、prompt example 或反复人工调试，结果会高估 generalization。保存 case provenance、访问范围和首次评估时间。
