# PyTorch

这里放的是偏实践的一层: 用代码把上面那些模型概念跑起来，理解 tensor、计算图、训练 workflow 和实验组织方式。

## Why This Exists

- `Foundation` 负责讲概念和结构。
- `PyTorch` 负责把这些概念翻译成可以调试、可以实验、可以复现的代码。

## Focus Areas

<div class="ai-card-grid">
  <a class="ai-card" href="./tensor.md">
    <span class="ai-card__eyebrow">Basics</span>
    <h3>Tensor</h3>
    <p>PyTorch 的第一语言，所有模型、梯度和 batch 都建立在 tensor 之上。</p>
  </a>
  <a class="ai-card" href="./workflow.md">
    <span class="ai-card__eyebrow">Training loop</span>
    <h3>Workflow</h3>
    <p>从数据、模型、loss 到优化器和验证流程，形成最小可用训练闭环。</p>
  </a>
  <a class="ai-card" href="./graph.md">
    <span class="ai-card__eyebrow">Autograd</span>
    <h3>Graph</h3>
    <p>理解计算图、自动求导和为什么反向传播能自动工作。</p>
  </a>
  <a class="ai-card" href="./classification.md">
    <span class="ai-card__eyebrow">Example</span>
    <h3>Classification</h3>
    <p>用一个最典型的监督学习任务把模型训练过程串起来。</p>
  </a>
  <a class="ai-card" href="./distributed.md">
    <span class="ai-card__eyebrow">Scale</span>
    <h3>Distributed Training</h3>
    <p>Data parallel、collective communication、sharding、checkpoint 和 failure。</p>
  </a>
  <a class="ai-card" href="./debugging.md">
    <span class="ai-card__eyebrow">Reliability</span>
    <h3>Debugging & Performance</h3>
    <p>Shape、device、gradient、memory、data loader 和 profiler 的系统排查。</p>
  </a>
</div>

## Suggested Reading Order

1. [Tensor](./tensor.md)
2. [Graph](./graph.md)
3. [Workflow](./workflow.md)
4. [Classification](./classification.md)
5. [Distributed Training](./distributed.md)
6. [Debugging & Performance](./debugging.md)

## External Reference

- [Learn PyTorch](http://learnpytorch.io)
