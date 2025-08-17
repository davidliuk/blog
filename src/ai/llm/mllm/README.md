# Multimodal Large Language Model

Visual Language Model

视觉基础模型

骨干网络：ViT、MoCo v3

自监督基础模型：DINO(对比式)、MAE(生成式)

分割基础模型：SAM

- CLIP

CV很多方法都是源于NLP的思路

- 图像 Encoder: DINO, MAE

- 图像文本 Pair Encoder：CLIP

---

自监督学习 (Self-supervised Learning)

定义：Predict parts of input data from other parts, using the data's inherent structure instead of explicit labels

- 基于前置任务
  - 位置预测（上下文）
  - 旋转预测
  - 上色
  - 聚类预测
- 基于对比学习
  - 创建pair样本
- 基于掩码重建

![image-20250705104155396](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250705104155396.png)