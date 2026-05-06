# PEFT

PEFT (Parameter-Efficient Fine-Tuning) 关注的问题很直接: 当基础模型已经很大时，怎样在不全量更新参数的前提下完成下游适配。

## Why It Matters

- 全量微调成本高，显存和训练时间都容易失控。
- 许多场景只需要“适配能力”，而不是重训整个模型。
- PEFT 把大模型工程从“能不能调”变成“怎么高效调”。

## In This Folder

- [FlyLoRA](./fly-lora.md): 一种围绕低秩适配和路由设计展开的方法笔记。

## Suggested Connection

- 先看 [Fine-tuning](../../gm/training/fine-tuning/) 了解 PEFT 在整个微调体系中的位置。
- 再回来看具体方法，比如 LoRA / QLoRA / FlyLoRA 这种“如何省参数”的实现思路。
