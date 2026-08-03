# Decoding

Decoding 把模型给出的 next-token distribution 转成具体输出。它不仅改变“随机程度”，也影响 repetition、diversity、structured correctness、latency 和可复现性。

## Methods

| Method | Behavior | Good fit |
| --- | --- | --- |
| Greedy | 每步选择最高概率 token | 确定性 baseline、结构明确任务 |
| Temperature sampling | 调整分布尖锐程度后采样 | 开放生成与多样性控制 |
| Top-k | 只在概率最高的 k 个 token 中采样 | 限制低概率 tail |
| Top-p | 选择累计概率达到 p 的最小集合 | 动态 candidate size |
| Beam search | 保留多个高概率 sequence | 部分 conditional generation |
| Constrained decoding | 只允许满足 grammar / schema 的 token | JSON、SQL、tool call、catalog ID |

## Temperature

对 logit $z_i$：

$$
p_i = \operatorname{softmax}(z_i / T)
$$

- $T < 1$ 让分布更尖锐。
- $T > 1$ 增加多样性。
- Temperature 不能修复错误知识或错误 task specification。

## Stop and Length

Stop sequence、EOS、max tokens 和 minimum length 会影响截断与重复。结构化输出应由 parser / schema 验证，不依赖模型“自觉停止”。

## Reproducibility

固定 seed 不一定保证跨 hardware、kernel、batching 或 serving version 完全一致。需要可重复 comparison 时，保存完整 decoding config 和系统版本。

## Evaluate

不同任务使用不同 decoding：事实问答关注 correctness / groundedness，创作关注 diversity，tool call 关注 schema validity，代码关注 executable tests。不存在一个通用最佳 temperature。
