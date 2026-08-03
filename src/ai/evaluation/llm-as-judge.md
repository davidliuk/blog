# LLM-as-a-Judge

LLM judge 适合对开放输出执行 rubric-based 或 pairwise evaluation，但它本身也是一个有偏差、会被提示影响的模型。

## Judge Designs

| Design | Strength | Risk |
| --- | --- | --- |
| Absolute score | 易汇总 | scale 使用不稳定、分数集中 |
| Rubric dimensions | failure 更可诊断 | rubric 复杂、维度相关 |
| Pairwise comparison | 相对判断通常更容易 | position、style 与 identity bias |
| Reference-guided | 有明确证据边界 | reference 不完整或过度约束 |
| Multi-judge panel | 降低单一 blind spot | 成本与 correlated error |

## Rubric

每个维度包含：

- 定义与范围；
- positive / negative example；
- 不同 score 的 observable behavior；
- 不应考虑的风格因素；
- insufficient evidence 时的处理。

## Known Biases

- 偏好更长、更详细或更自信的答案；
- position / order bias；
- 偏好与 judge 自身输出风格相似的文本；
- 被答案中的 injection 或评分指令影响；
- 对 factual claim 进行无依据自信判断。

## Calibration

1. 建立多名人工审核者的 calibration set。
2. 分析 judge–human 和 human–human disagreement。
3. 按 task、language、length 和 score 分片。
4. 对高风险 case 保留人工 review。
5. Judge model、prompt 和 rubric 作为版本化组件。

## Robust Execution

- 输入与评分 instruction 分区，答案始终是不可信数据。
- 随机交换 pairwise 顺序并重复部分 case。
- 要求引用具体证据或 rubric 条款。
- 低 confidence / disagreement case 自动升级人工。
- Judge 只提供 evidence，不自动成为唯一 release authority。
