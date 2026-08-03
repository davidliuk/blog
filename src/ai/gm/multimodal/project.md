# Multimodal Project Playbook

多模态项目应先定义输入、输出和失败边界，再决定模型。一个视觉问答 demo 与可上线的文档理解系统，差别主要在数据、评估、延迟和错误治理。

## 架构起点

常见起点是冻结视觉编码器与 LLM，只训练 linear/MLP projector；若对齐不足，再引入 Q-Former、cross-attention 或 LoRA。全量微调应建立在明确增益上，因为它显著增加训练成本与能力回归风险。

## 数据阶段

1. **alignment data**：caption、图文对和区域—短语，建立模态对应；
2. **instruction data**：问答、OCR、grounding、多图和流程任务；
3. **hard cases**：低清晰度、遮挡、歧义、无答案与冲突信息；
4. **safety cases**：敏感图像、隐私、错误识别和拒答边界。

few-shot 数据适合快速验证接口，真正上线前需要覆盖目标流量的长尾分布。

## 评估

不要只使用一个综合 benchmark。分别测试 perception、OCR、spatial reasoning、counting、knowledge、instruction following 和 hallucination，并加入 image-blind baseline、图像替换、局部遮挡等反事实检查。

## 服务

预计算可复用的视觉 embedding；按分辨率和图片数设置 token 预算；记录图像预处理、vision encoder、projector、LLM 与 prompt template 的完整版本。生产监控还需包括解码失败、视觉 token 数、首 token 延迟和人工申诉。
