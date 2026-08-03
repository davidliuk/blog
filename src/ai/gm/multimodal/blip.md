# BLIP

BLIP 系列围绕“如何用有限的高质量图文数据，把视觉表示接入语言生成”展开。BLIP 同时训练理解与生成任务；BLIP-2 则冻结已有视觉编码器和大语言模型，用轻量 Q-Former 建立二者之间的桥。

## BLIP 的数据闭环

网络图文对噪声很大。BLIP 使用 captioner 生成描述，再用 filter 判断图文是否匹配，从原始数据中产生更干净、多样的训练对。这说明多模态效果不仅由架构决定，数据清洗和合成策略同样关键。

## Q-Former

Q-Former 维护一组可学习 query token：

1. query 通过 cross-attention 从冻结图像编码器提取视觉信息；
2. self-attention 在 query 与文本之间建模；
3. 压缩后的固定数量视觉 token 被投射到 LLM 的输入空间。

它相当于一个信息瓶颈：显著减少送入 LLM 的视觉 token 数，但也可能损失细粒度空间信息。

## 两阶段训练

- **representation learning**：图文对比、图文匹配与条件生成，先学会抽取和对齐视觉语义；
- **vision-to-language generation**：把 query 输出映射到冻结 LLM，训练模型根据视觉条件生成文本。

## 分析维度

评估 BLIP-2 类系统时应分开看视觉编码器能力、Q-Former 压缩率、LLM 语言先验和 instruction data。通用问答分数高不代表 OCR、定位、计数或细粒度识别可靠。

参考：[BLIP](https://arxiv.org/abs/2201.12086) · [BLIP-2](https://arxiv.org/abs/2301.12597)
