# AI

这部分是我对机器学习、语言模型、推荐系统与模型系统化落地的笔记整理。现在把入口改成了“先定位，再深入”的结构: 先知道每块在解决什么问题，再顺着阅读路径往下钻。

<div class="ai-hero">
  <p class="ai-eyebrow">AI Knowledge Map</p>
  <h2>从基础模型到 LLM 系统，再到推荐链路</h2>
  <p>
    如果你是第一次进入这个 section，建议先看 <a href="./foundation/">Foundation</a> 建立公共语言，
    再根据兴趣进入 <a href="./gm/">Generative Models</a> 或
    <a href="./rec-sys/">Recommender System</a>。想补工程手感，可以穿插看
    <a href="./pytorch/">PyTorch</a> 和 <a href="./search/">Search</a>。
  </p>
  <div class="ai-pill-row">
    <span class="ai-pill">Foundation</span>
    <span class="ai-pill">Transformer</span>
    <span class="ai-pill">LLM</span>
    <span class="ai-pill">Multimodal</span>
    <span class="ai-pill">RecSys</span>
    <span class="ai-pill">Inference</span>
  </div>
</div>

## Topic Map

<div class="ai-card-grid">
  <a class="ai-card" href="./foundation/">
    <span class="ai-card__eyebrow">Start here</span>
    <h3>Foundation</h3>
    <p>机器学习、深度学习、语言模型、强化学习与 PEFT 的基础主线。</p>
  </a>
  <a class="ai-card" href="./gm/">
    <span class="ai-card__eyebrow">Modeling</span>
    <h3>Generative Models</h3>
    <p>围绕训练、对齐、推理、多模态与应用，理解 LLM 系统是怎么跑起来的。</p>
  </a>
  <a class="ai-card" href="./rec-sys/">
    <span class="ai-card__eyebrow">Production</span>
    <h3>Recommender System</h3>
    <p>从召回、粗排、精排到重排与指标，理解工业推荐链路的关键模块。</p>
  </a>
  <a class="ai-card" href="./pytorch/">
    <span class="ai-card__eyebrow">Hands-on</span>
    <h3>PyTorch</h3>
    <p>把模型概念变成代码实验，补 tensor、workflow、graph 等实践视角。</p>
  </a>
  <a class="ai-card" href="./search/">
    <span class="ai-card__eyebrow">Adjacent system</span>
    <h3>Search</h3>
    <p>理解 query、retrieval、ranking，与推荐系统的边界和共通之处。</p>
  </a>
</div>

## Recommended Paths

<div class="ai-path-grid">
  <div class="ai-path-card">
    <h3>Path 1: Build the Core Mental Model</h3>
    <ol>
      <li><a href="./foundation/ml/linear-algebra.md">Linear Algebra</a> / <a href="./foundation/ml/probability.md">Probability</a></li>
      <li><a href="./foundation/dl/">Deep Learning</a></li>
      <li><a href="./foundation/lm/">Language Model</a></li>
      <li><a href="./foundation/lm/transformer/">Transformer</a></li>
      <li><a href="./gm/inference/">Inference</a></li>
    </ol>
  </div>
  <div class="ai-path-card">
    <h3>Path 2: LLM and Multimodal</h3>
    <ol>
      <li><a href="./gm/training/fine-tuning/">Fine-tuning</a></li>
      <li><a href="./gm/training/alignment/">Alignment</a></li>
      <li><a href="./gm/text/">Text Models</a></li>
      <li><a href="./gm/multimodal/">Multimodal</a></li>
      <li><a href="./gm/application/">Application</a></li>
    </ol>
  </div>
  <div class="ai-path-card">
    <h3>Path 3: Recommendation Pipeline</h3>
    <ol>
      <li><a href="./rec-sys/retrieval/">Retrieval</a></li>
      <li><a href="./rec-sys/pre-ranking/">Pre-Ranking</a></li>
      <li><a href="./rec-sys/ranking/">Ranking</a></li>
      <li><a href="./rec-sys/re-ranking/">Re-Ranking</a></li>
      <li><a href="./rec-sys/metrics/">Metrics</a> / <a href="./rec-sys/cold-start/">Cold Start</a></li>
    </ol>
  </div>
</div>

## What Lives Where

- `Foundation`: 基础概念和核心模型，适合补齐术语、公式和架构图。
- `Generative Models`: 聚焦 LLM / diffusion / multimodal 的训练、推理与应用系统。
- `Recommender System`: 偏工业链路，适合带着业务目标理解建模和实验。
- `PyTorch`: 偏代码实践，适合把上面的概念转成实验与实现。
- `Search`: 偏分发系统，帮助把搜索和推荐放在一张图里理解。

## Quick Links

- 经典结构: [Transformer](./foundation/lm/transformer/), [CNN](./foundation/dl/cnn/), [RL](./foundation/rl/)
- LLM 系统: [Fine-tuning](./gm/training/fine-tuning/), [Alignment](./gm/training/alignment/), [KV Cache](./gm/inference/kv-cache.md)
- 多模态: [Vision Encoder](./gm/multimodal/vision-encoder.md), [MAE](./gm/multimodal/mae.md), [LLaVA](./gm/multimodal/llava.md)
- 推荐系统: [DSSM](./rec-sys/retrieval/dssm/), [MMOE](./rec-sys/ranking/mmoe.md), [Cold Start](./rec-sys/cold-start/traffic.md)

## References

- [Papers with Code](https://paperswithcode.com/)
- 顶会索引: ICLR, NeurIPS, CVPR, ICCV, ACL, ECCV
