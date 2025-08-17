# EPIC Lab

## 方向

### 在研

模型优化

- LLM 大模型

  扩散大语言模型

  可以多模态 LLaDA-V，做 token 压缩，正在做这个刚开

  DeepSeek-VL2，多模态 MoE 大模型

  MoE 剪枝，

- VLM 多模态大模型，token pruning

  ViT+LLM，一般是压缩LLM，目前在考虑在ViT部分压缩，需要算力

  - KV Cache
  - 已经做了三四篇了，最近做的人太多了😭不想硬卷换赛道
  - 做专门领域的更好：Video, Steaming, *Audio*, UI Agent, 自动驾驶, *AI4Science* 方向的
  - 找哪个场景

  ViT的压缩还有很大可以优化的点

- 文、视频生成

数据集压缩

- Qwen 30T token => 3T token
- 怎么样抽取最关键的数据

### 未来

Multi-Agent 多智能体优化

- Multi-Agent
- 准确率
- 沟通效率更高，花费更小
- UI Agent

VLA 具身智能

---

模型压缩

专用

LLaDA-v token 肯定能做，刚刚开始做，已经 3个人

MMaDA

MoE

mllm moe 压缩，可压缩可不压缩，但是了解不多，暂时还没有人开始做

fastvlm 

---

基础的Idea，蓝海方向

AFFlow，蒙特卡洛搜索，解决数学任务，在强化学习做的

EvoFlow 定义成图问题，边上做遗传算法

这些一般是数学上求解

随机搜索应该也能搞定

效果一定可以比baseline好

优化点：

- 主要关注 Cost token数量，
- 可以新的考虑，端到端的时间延迟，通过交流的并发性来优化，作为新的优化指标，线下可以调用大量，国产的卡（跑训练有问题，但是推理没问题），先在小模型上做测试，4o-mini做好实验代码

