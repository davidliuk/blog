# Generative Models

- GAN (Generative Adversarial Networks)
- VAE (Variational Autoencoder)
- Diffusion Models
- ARM (Autoregressive Models)

The basic goal of AI is to develop intelligent machines.

This consists of many sub-goals:

- • Perception
  - Multimodal foundation models learn to answer questions about images (and text in images) 
  - Diffusion models can be used as zero-shot classifiers
- • Reasoning
  - LLMs are also (unexpectedly) good at certain reasoning tasks 
  - cf. Chain-of-Though Prompting (an ex. of in-context learning)
- • Control / Motion / Manipulation
  - DayDreamer learns a generative model of experiences for RL, i.e. a World Model, without simulation 
  - Quadruped robot learns to walk in under 1 hour
- • Planning
  - LLMs are already being used for grounded planning for embodied agents, c.f. LLMPlanner
- • Communication
  - Communication comprises the comprehension and generation of human language.
  - Large language models (LLMs) excel at both 
  - (Even though they are most often trained autoregressively, i.e. to generate a next word, given the previous ones)
- • Creativity
  - Text-to-image models [Midjourney’s Discord server has 18 million members (1.7 million were online this morning)] 
  - Text-to-music models [MusicGen capable of conditioning on text and audio sample]
- • Learning

Q: What does Generative AI have to do with any of these goals? 

A: It’s making in-roads into all of them.

---

ARM: next token prediction

Text-to-image

- Diffusion
- flow

过时的：GAN

normalizing flow

基于 masked 掩码方式的离散扩散模型

next token prediction: ARM

next frequency prediction: DM

next "set of token" prediction: MaskGiT

VAR

损失函数分离

- 基于对抗均衡 GAN
- 交叉熵：ARM


