# Reinforcement Learning

## PPO (Proximal Policy Optimization)

经典的 Actor-Critic 框架

PPO 最初由 OpenAI 提出，是 RLHF（基于人类反馈的强化学习）的标准算法。它是一个**在线（On-policy）**算法，意味着模型需要不断地进行采样并获取即时反馈。

### 核心机制

PPO 采用 **Actor-Critic** 架构，在训练时通常需要同时维护四个模型：

1. **Policy (Actor) Model**: 正在训练的模型，负责生成回答。
2. **Value (Critic) Model**: 预测当前状态的价值（打分），协助 Actor 更新。
3. **Reward Model**: 预先训练好的评分器，给 Actor 的输出打分。
4. **Reference Model**: 冻结权重的基座模型，用来计算 KL 散度，防止模型跑偏。

### 数学直觉

PPO 的核心是**裁剪（Clipping）**目标函数，防止模型参数更新过快导致崩溃：



$$L^{CLIP}(\theta) = \hat{\mathbb{E}}_t \left[ \min \left( r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right]$$



其中 $r_t(\theta)$ 是新旧策略的概率比，$\hat{A}_t$ 是优势函数（Advantage Function）。

- **优点**：理论完备，上限高，能学到训练数据之外的探索能力。
- **缺点**：**极度消耗显存**。同时跑 4 个模型（即使部分冻结）对硬件要求极高，且超参数（如 KL 惩罚系数）极难调试。

## DPO (Direct Preference Optimization)

离线对比学习

DPO 由斯坦福团队提出，它的核心思想是：**绕过强化学习，直接通过对比学习实现对齐。**

### 核心机制

DPO 发现，Reward Model 和最优策略之间存在数学上的闭式解关系。因此，我们可以直接利用偏好数据 $(x, y_w, y_l)$（即：问题、好的回答、差的回答）来训练模型，而**不需要**显式的 Reward Model 和 Critic Model。

### 数学直觉

DPO 的损失函数非常简洁，本质上是在拉大“好答案”和“坏答案”在当前模型与参考模型之间的概率差：

$$
L_{DPO} = -\mathbb{E} \left[ \log \sigma \left( \beta \log \frac{\pi_{\theta}(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_{\theta}(y_l|x)}{\pi_{ref}(y_l|x)} \right) \right]
$$

通过这个 Log-Likelihood 的比值，模型被强制学向人类偏好的方向。

- **优点**：**训练极其稳定且高效**。只需要 Actor 和 Reference 两个模型，显存占用比 PPO 少得多，是目前工业界微调最常用的手段。
- **缺点**：它是一个离线算法，只能从现有的数据对中学习。如果数据中没有出现的解题路径，模型很难通过“自我探索”发现。

## GRPO (Group Relative Policy Optimization) 

GRPO 是 DeepSeek 在 R1 模型中提出的关键算法，专门为**提升推理能力**和**降低计算成本**设计。

### 核心机制

GRPO 的天才之处在于它干掉了 Critic 模型。

在 PPO 中，Critic 模型的作用是估计基准分（Baseline），从而计算“优势值”。GRPO 改用“组内相对排名”来代替 Critic：

1. 对于同一个 Prompt，让模型生成 $G$ 个不同的回答（一组采样）。
2. 给这 $G$ 个回答打分（通过可验证的规则 Reward，如数学题对错）。
3. 计算这组分数的平均值和标准差，利用组内排名作为优势信号。

### 数学直觉

优势值 $A_i$ 直接通过组内归一化得到：
$$
A_i = \frac{r_i - \text{mean}(r_1, \dots, r_G)}{\text{std}(r_1, \dots, r_G)}
$$
这省去了训练庞大 Critic 模型的开销。

- **优点**：**大幅节省显存**（约减少 50%）。它允许在相同的硬件上使用更多的采样（$G$ 越大，梯度越准），非常适合处理数学、代码等逻辑性极强的任务。
- **应用场景**：DeepSeek R1 能够涌现出长链思维（CoT）和自我反思，很大程度上归功于 GRPO 支持的大规模强化学习。

| **模型角色**             | PPO               | GRPO              | 说明                                                    |
| ------------------------ | ----------------- | ----------------- | ------------------------------------------------------- |
| **Policy Model (Actor)** | ✅ **加载** (训练) | ✅ **加载** (训练) | 正在被优化的“主角”。                                    |
| **Reference Model**      | ✅ **加载** (冻结) | ✅ **加载** (冻结) | 基准模型，用来算 KL 散度，防止模型跑偏变“傻”。          |
| **Critic Model**         | ✅ **加载** (训练) | ❌ **不需要**      | **关键区别！** GRPO 用组内排名代替了它。                |
| **Reward Model**         | ✅ **加载** (冻结) | ⚠️ 可选            | 在 RLVR（如数学、代码）中，它是**外挂程序**，不占显存。 |
