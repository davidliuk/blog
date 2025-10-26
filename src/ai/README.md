# Artificial Intelligence

[papers with code](https://paperswithcode.com/)

深度学习 $=$ 神经网络 $\in$ 机器学习 $\in$ 人工智能

## 顶会

- ICLR
- NeurIPS
- CVPR
- ICCV
- ACL
- ECCV

## 1. 总体分类

### 1. 基础层（算法与模型）

> 研究如何**表示、学习和推理**智能。

#### 💡 1.1 机器学习（Machine Learning）

- 监督学习（Supervised Learning）
- 无监督学习（Unsupervised Learning）
- 半监督学习（Semi-supervised Learning）
- 自监督学习（Self-supervised Learning）

  - 对比学习

- 强化学习（Reinforcement Learning, RL）
- 元学习（Meta-learning）
- 联邦学习（Federated Learning）

#### 💡 1.2 深度学习（Deep Learning）

- 卷积神经网络（CNN）
- 循环神经网络（RNN, LSTM, GRU）
- 图神经网络（Graph Neural Network, GNN）
- Transformer、注意力机制（Attention Mechanism）
- 多模态学习（Multimodal Learning）

#### 💡 1.3 生成模型（Generative Models）

- 生成对抗网络（GAN）
- 变分自编码器（VAE）
- 自回归模型（Autoregressive Models）
- Diffusion Models（扩散模型）
- NeRF、Neural Fields

#### 💡 1.4 概率与决策理论

- 贝叶斯方法（Bayesian Methods）
- 马尔可夫决策过程（MDP）
- 多臂老虎机、多智能体系统

### 2. 感知层（理解世界）

#### 👁️ 2.1 计算机视觉（Computer Vision）

- 图像分类、目标检测、语义分割、实例分割
- 姿态估计、三维重建（SLAM、NeRF）
- 视频理解、图像生成
- 多视图几何与三维感知（3D Vision）

#### 🗣️ 2.2 自然语言处理（Natural Language Processing）

- 语言模型（GPT、BERT、T5）
- 文本生成与理解
- 情感分析、问答系统、对话系统
- 信息抽取与知识图谱

#### 🔊 2.3 语音与音频（Speech & Audio）

- 自动语音识别（ASR）
- 文本转语音（TTS）
- 声纹识别、声音生成、声音事件检测

### 3. 决策层（做出行动）

#### 🧠 3.1 强化学习与控制（RL & Planning）

- 深度强化学习（DQN, PPO, A3C）
- 多智能体系统（MARL）
- 模型预测控制（MPC）
- 机器人导航与路径规划

#### 🕹️ 3.2 人工智能游戏（Game AI）

- AlphaGo、AlphaZero、MuZero
- 游戏中的策略学习、多智能体博弈

## 🔹 二、交叉与新兴方向

### 🤝 多模态智能（Multimodal AI）

> 图文、视听、视频+文本的联合学习（如 CLIP、GPT-4V、SAM）

### 🧠 大模型与通用人工智能（LLM & AGI）

> GPT、Gemini、Claude 等，研究模型对齐、提示工程、能力迁移。

### 🧩 解释性与可解释 AI（XAI）

> 为什么模型做出某个决策，如何增强透明度与信任。

### 📚 知识图谱与因果推理

> 结构化知识管理、因果关系建模、科学发现。

### 🌐 联邦学习与隐私保护（FL & Privacy-preserving ML）

> 在保证数据隐私的前提下训练模型。

### 👥 人工智能伦理与社会影响（AI Ethics & Safety）

> 对齐问题、偏见检测、人工智能治理、AIGC 风险。

## 3. 应用层分类

- 医疗 AI（Medical AI）
- 金融 AI（金融风控、智能投顾）
- 教育 AI（智能辅导、知识追踪）
- 无人驾驶（Autonomous Driving）
- 人机交互（Human-AI Interaction）
- 具身智能/智能机器人（Embodied AI）
- AIGC（AI Generated Content）
- 智能制造、工业 4.0

## 其他分类

**基于学习策略的分类**:

- 监督学习 Supervised Learning

  1）线性回归（Linear Regression）：线性回归用于建立输入特征与连续数值目标之间的线性关系模型。它通过拟合一条直线或超平面来进行预测。

  2）逻辑回归（Logistic Regression）：逻辑回归适用于分类问题，其中目标变量是离散的。它使用逻辑函数（如 sigmoid 函数）来建立输入特征与目标类别之间的关系模型。

  3）决策树（Decision Trees）：决策树通过构建一系列决策规则来进行分类或回归。它根据特征的不同分割数据，并构建一个树状结构来进行预测。

  4）支持向量机（Support Vector Machines，SVM）：SVM 是一种用于分类和回归的监督学习算法。它通过寻找一个最优的超平面或者非线性变换，将不同类别的数据样本分隔开。

  5）随机森林（Random Forest）：随机森林是一种集成学习算法，它结合了多个决策树进行分类或回归。每个决策树基于随机选择的特征子集进行训练，并通过投票或平均来获得最终预测结果。

  6）神经网络（Neural Networks）：在监督学习中，神经网络接收一组输入数据，并将其传递到网络中的多个神经元层中进行处理。每个神经元都有一组权重，用于加权输入数据。然后，输入数据通过激活函数进行非线性变换，并传递到下一层。这个过程被称为前向传播。在前向传播后，网络产生一个输出，与预期的目标输出进行比较。然后，通过使用损失函数来度量预测输出与目标输出之间的差异。损失函数的目标是最小化预测输出与目标输出之间的误差。接下来，网络使用反向传播算法来更新权重，以减小损失函数。反向传播通过计算损失函数相对于每个权重的梯度，然后沿着梯度的方向更新权重。这个过程不断迭代，直到网络的性能达到满意的程度。

- 无监督学习 Unsupervised Learning

  1）K 均值聚类（K-means Clustering）：K 均值聚类是一种常见的聚类算法，用于将数据点划分为预先定义的 K 个簇。算法通过迭代地将数据点分配到最近的质心，并更新质心位置来优化聚类结果。K 均值聚类适用于发现数据中的紧密聚集模式。

  2）层次聚类（Hierarchical Clustering）：层次聚类是一种将数据点组织成树状结构的聚类方法。它可以基于数据点之间的相似性逐步合并或分割聚类簇。层次聚类有两种主要方法：凝聚层次聚类（自底向上）和分裂层次聚类（自顶向下）。层次聚类适用于发现不同层次的聚类结构。

  3）主成分分析（Principal Component Analysis，PCA）：主成分分析是一种降维技术，用于从高维数据中提取最重要的特征。它通过找到数据中的主要方差方向，并将数据投影到这些方向上的低维空间中来实现降维。PCA 广泛应用于数据可视化、噪声过滤和特征提取等领域。

  4）关联规则学习（Association Rule Learning）：关联规则学习用于发现数据集中的项集之间的关联关系。它通过识别频繁项集并生成关联规则来实现。关联规则通常采用"If-Then"的形式，表示数据项之间的关联性。关联规则学习可应用于市场篮子分析、推荐系统等领域。

- 半监督学习

- 强化学习
- 自监督学习
- 元学习
- 联邦学习

基于形式

- 深度学习

  DNN 深度神经网络 $\in$ ANN 人工神经网络 = DL 深度学习

  - CNN 卷积神经网络
  - RNN 循环神经网络 LSTM, GRU
  - 注意力机制 Transformer, Attention
  - GNN 土神经网络
  - 多模态学习 Multimodal Learning

- 传统机器学习

- 生成模型（Generative Models）

  - 生成对抗网络（GAN）
  - 变分自编码器（VAE）
  - 自回归模型（Autoregressive Models）
  - Diffusion Models（扩散模型
  - NeRF、Neural Fields

---

ML Workflow

1. Problem formulation

2. Collect & process data
3. Train & tune models
4. Deploy models
5. Monitor

Challenges

1. Formulate problem:focus on the most impactful industrial problems(self-service supermarket, self-driving cars)
2. Data:high-quality data is scarce,privacy issues
3. Train models:models are more and more complex,data-hungry,expensive
4. Deploy models:heavy computation is not suitable for real-time inference
5. Monitor: data distributions shifts, fairness issues

---

Machine Learning≈Looking for Function

## Different types of Functions

Regression: The function outputs a scalar.

Classification: Given options(classes),the function outputs the correct one.

Structured Learning: create something with structure (image, document)

## Framework of ML

Training data:

Testing data:

Training

1. Function with Unknown Parameters

   1. Define Loss from Training Data
      1. Loss is a function of parameters L(b,w)
      2. Loss: how good a set of values is.
         1. $L=\frac{1}{n}\sum\limits_n e_n$
            1. MAE: $e=|y-\hat y|$
            2. MSE: $e=(y-\hat y)^2$
         2. If y and are both probability distributions Cross-entropy

1. Optimization: $\theta^*=\arg\min\limits_{\theta}L$

   Gradient Descent

   1. (Randomly) Pick an initial value $\theta^0$
   2. Compute $g=\nabla L(\theta^0)=\frac{\part L}{\part w}|_{w=w^0}$
   3. $\eta\frac{\part L}{\part w}|_{w=w^0}$, $\eta$: learning rate (hyper parameters)
   4. **Update** $w$ for each batch $\theta^1=\theta^0-\eta\vec g$

   Does local minima truly cause the problem?

   - Local minima
   - global minima

**Model Bias**: Linear models have severe limitation

All Piecewise Linear Curves = constant + sum of a set of (unlinear)

- Sigmoid: $sigmoid=\frac{1}{1+e^{(b+wx)}}$

![image-20250905101009749](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250905101009749.png)

Activation Function

- Sigmoid
- Rectified Linear Unit (ReLU)

Neuron

Neuron Network

Deep Learning

Deep = Many hidden layers

Overfitting

General Guide

![image-20250905104528162](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250905104528162.png)

Fully-connected

CNN

- Less parameters, sharing parameters
- Less features
- Early stopping
- Regularization
- Dropout

Cross Validation

Training Set

- Training Set
- Validation Set
