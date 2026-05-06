# Foundation

这部分是整个 AI section 的地基。目标不是把所有细节一次讲完，而是先把常见概念放到一张一致的知识地图里: 数学基础是什么，模型怎么学，语言模型为什么成为主线，RL 和 PEFT 又分别解决什么问题。

## Start Here

<div class="ai-card-grid">
  <a class="ai-card" href="./ml/linear-algebra.md">
    <span class="ai-card__eyebrow">Prerequisite</span>
    <h3>Math for ML</h3>
    <p>线性代数、概率与微积分，负责建立模型表达与优化的公共语言。</p>
  </a>
  <a class="ai-card" href="./dl/">
    <span class="ai-card__eyebrow">Representation</span>
    <h3>Deep Learning</h3>
    <p>从神经元、反向传播到 CNN / RNN / Transformer，理解表征学习的核心。</p>
  </a>
  <a class="ai-card" href="./lm/">
    <span class="ai-card__eyebrow">Sequence modeling</span>
    <h3>Language Model</h3>
    <p>从 n-gram 到神经语言模型，再过渡到 Transformer 时代。</p>
  </a>
  <a class="ai-card" href="./rl/">
    <span class="ai-card__eyebrow">Decision making</span>
    <h3>Reinforcement Learning</h3>
    <p>奖励、策略、价值函数，以及为什么 RL 在 LLM 对齐里重新变重要。</p>
  </a>
  <a class="ai-card" href="./peft/">
    <span class="ai-card__eyebrow">Efficient adaptation</span>
    <h3>PEFT</h3>
    <p>LoRA 一类方法如何让大模型适配下游任务，同时控制训练成本。</p>
  </a>
  <a class="ai-card" href="./paper.md">
    <span class="ai-card__eyebrow">Reading</span>
    <h3>Paper Notes</h3>
    <p>放一些论文阅读与方法整理，适合和主题笔记交叉阅读。</p>
  </a>
</div>

## Suggested Reading Order

1. 先补 `ML math -> DL basics`，建立损失函数、优化、表征学习这些通用概念。
2. 再进 `Language Model -> Transformer`，这是后面 LLM / multimodal / inference 的共同底座。
3. 如果你更关心“模型怎么做决策”，走 `RL` 这条线。
4. 如果你更关心“如何低成本适配大模型”，继续看 `PEFT`。

## Core Subtopics

- `ml/`: 概率、线代、微积分这些最常被默认掌握的前置知识。
- `dl/`: 深度学习通用组件、训练技巧、经典结构。
- `lm/`: 语言模型基础，以及 `transformer/` 这一条最重要的现代主线。
- `rl/`: 强化学习范式、应用场景和 2025 年前后的趋势。
- `peft/`: 参数高效微调，衔接到 LLM 工程实践。

## High-Value Links

- [Deep Learning](./dl/)
- [Transformer](./lm/transformer/)
- [Feed-Forward Network](./lm/transformer/ffn.md)
- [Optimizer](./dl/optimizer.md)
- [FlyLoRA](./peft/fly-lora.md)

阅读顺序

1. 标题+作者
2. 摘要
3. 结论
4. 导言
5. 相关工作
6. 模型
7. 实验
   - 消融实验 ablations
8. 评论