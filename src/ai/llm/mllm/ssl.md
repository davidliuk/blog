# Self-supervised Learning

自监督学习

Predict

无需人工标签

- 基于前置任务
- **基于对比学习**
- **基于掩码重建**

![image-20250705104155396](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250705104155396.png)

## 前置任务

位置预测

- 掩码语言模型：下一句预测
- 自回归语言建模



## 对比学习

构造正负样本，互相对比学习

x -(数据增强)> xi+, xj+

$l_{infoNCE}=-\log\frac{\exp(sim(z_i,z^+)/\tau)}{\sum_{j=1}^k\exp(sim(z_i,z_j)/\tau)}$

$sim(z_i,z_j)=\frac{z_i\cdot z_j}{\|z_i\|\cdot\|z_j\|}$

### **SimCLR**

![image-20250705230255403](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250705230255403.png)

### MoCo

![image-20250705231321429](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250705231321429.png)

## 掩码重建

mask 掉一部分

Beit

自监督学习

定义：Predict parts of input data from other parts, using the data's inherent structure instead of explicit labels

- 基于前置任务
  - 位置预测（上下文）
  - 旋转预测
  - 上色
  - 聚类预测
- 基于对比学习
  - 创建 pair 样本
- 基于掩码重建
