# Large Language Model

Pre-train 预训练范式

- ARM (Auto-Regressive Model)
- MDM (Masked Diffusion Model)
- AE (Auto-Encoding)

**大规模数据 + Transformer + 自监督学习 + 自回归/自编码目标 + 泛化能力优先**

1. 预训练（Pre-training） 
2. 后训练/对齐（post-training/Alignment）
   1. 监督/指令微调（Supervised/Instruction Fine-Tuning）
   2. 人类偏好对齐/强化学习 （Alignment）
      1. RLHF
      2. DPO
      3. PPO (Proximal Policy Optimization)
         1. GRPO (Group Relative Policy Optimization)
      4. RLAIF
         1. Reward Model
   3. 对齐与安全机制（Alignment & Safety Tuning）
