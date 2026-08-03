# Data Engineering for AI

数据不仅是训练输入，也是模型行为的 specification。一个数据系统必须解释来源、允许用途、Schema、质量、版本、标签过程和删除路径。

## Data Lifecycle

```text
source
  → collect
  → validate
  → clean / deduplicate
  → label / enrich
  → split / mix
  → train / evaluate
  → retain / delete
```

## Quality Dimensions

| Dimension | Question |
| --- | --- |
| Validity | 数据是否满足 type、range、format 和 semantic constraint？ |
| Coverage | 关键语言、用户、任务和边界是否被代表？ |
| Freshness | 数据是否仍反映当前环境和产品策略？ |
| Uniqueness | 近重复是否导致过拟合或 benchmark contamination？ |
| Label quality | 标注者是否理解 rubric，disagreement 怎样处理？ |
| Provenance | 每条数据从哪里来，授权和 transformation 是什么？ |

## Labeling System

- Rubric 提供 positive、negative 和 ambiguous example。
- Gold / sentinel case 监控标注质量，但不能替代真实 disagreement。
- 多标注者一致不等于正确；领域任务需要 expert adjudication。
- Preference data 记录比较对象、展示顺序和采样策略，避免位置偏差。
- 自动生成 label 需要 confidence、抽检和与 teacher model 的 lineage。

## Train–Serve Consistency

Offline feature computation 与 online feature path 必须共享 definition 或 contract。常见 skew 包括时区、缺失值、窗口边界、dictionary version 和 data availability。

## Privacy and Deletion

采集前定义 purpose 与 retention。PII、secret 和 copyrighted material 需要识别、最小化、访问控制和删除传播；删除不能只从原始表移除，还要考虑派生 dataset、index、checkpoint 和 cache。
