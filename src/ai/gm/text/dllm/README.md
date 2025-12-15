# Diffusion Large Language Model

相比于 LLM AR(Auto-Regression)

[Gemini Diffusion](https://deepmind.google/models/gemini-diffusion/#what-is-a-diffusion-model)

[LLaDA](https://ml-gsai.github.io/LLaDA-demo/)

LLaDA-V

[MMaDA](https://github.com/Gen-Verse/MMaDA), Princeton, SEED

[Fast-dllm](http://arxiv.org/abs/2505.22618), NVIDIA：引入KV-Cache

速度很快，但是效果一般

Traditional autoregressive language models generate text one word – or token – at a time. This sequential process can be slow, and limit the quality and coherence of the output.

Diffusion models work differently. Instead of predicting text directly, they learn to generate outputs by refining noise, step-by-step. This means they can iterate on a solution very quickly and error correct during the generation process. This helps them excel at tasks like editing, including in the context of math and code.

缺点

- 无 Cache
- 定长

变长思路：Block Diffusion

---

双向注意力机制，可以看到上下文，做修改是非常合适的场景

加速

- Cache
- Sampling

> 损失少量精度，提高大量速度

ARM

- 量化，也是精度损失

长序列

采样策略

- 自回归

- 半自回归（Block Diffusion）

LLaDA

问题：

- scaling
- 训练过程中很难scale长度
