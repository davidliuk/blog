# LLM Pretraining

预训练通过大规模自监督目标学习 token distribution、representation 和可迁移能力。模型规模只是一个变量；data mixture、token budget、optimization 和 architecture 共同决定结果。

## Pipeline

```text
source collection
  → license / privacy / safety filtering
  → normalize / language identify
  → quality score / deduplicate
  → tokenize / pack
  → data mixture and curriculum
  → distributed training
  → checkpoint evaluation
```

## Data Mixture

| Source type | Potential value | Risk |
| --- | --- | --- |
| Web | 覆盖广、语言多 | 噪声、重复、版权、隐私 |
| Code | 结构化、可执行反馈 | license、secret、benchmark contamination |
| Books / papers | 长文本和高质量知识 | 权利、时效和领域偏差 |
| Conversation | 指令与交互模式 | 隐私、风格偏差、合成循环 |
| Synthetic data | 可控难度与覆盖 | teacher error、mode collapse、低多样性 |

Quality filtering 也会改变价值观、语言和领域分布，因此需要 slice-level audit。

## Objective

Autoregressive loss：

$$
\mathcal{L}(\theta) = - \sum_{t=1}^{T} \log p_\theta(x_t \mid x_{<t})
$$

它优化 token prediction，不直接优化事实正确、帮助性或安全。这些行为需要数据、post-training、tools 和 evaluation 共同塑造。

## Scaling Decisions

- 参数量决定 model capacity，但增加 optimizer state 和 communication。
- 训练 token 决定模型看到的样本量与重复程度。
- Sequence length 改变 attention compute、packing 和长文档学习。
- Batch 与 learning rate 影响 optimization stability 和 throughput。
- Checkpoint 频率在恢复成本、存储和评估速度之间取舍。

## Contamination

Benchmark、答案解析或近重复进入 pretraining 会夸大 evaluation。检测需要 exact / fuzzy matching、时间和来源 metadata，并使用新鲜或动态 case 验证迁移。

## Evidence to Preserve

Data manifest、filter version、mixture、tokenizer、training config、checkpoint lineage、loss curve、gradient / system health 和 evaluation snapshot。
