# Feedforward Neural Network

> FNN, **前馈神经网络**

**前馈神经网络（FNN）** 是一个更广义的概念，指**所有神经元按层排列、信息单向从前向后传播、无环路**的神经网络。

- MLP 是 FNN 的一种特例。
- 但 FNN 还可以包含：
  - 卷积层（CNN 也是前馈的！）
  - 归一化层（LayerNorm、BatchNorm）
  - 残差连接（ResNet 的主干仍是前馈）

> ✅ 所有 **Transformer、MLP、CNN（不含 RNN/循环）** 都属于前馈神经网络。

### 与“反馈网络”的对比

- **前馈（Feedforward）**：无时间/状态依赖，输入 → 输出（如图像分类）
- **反馈/循环（Recurrent）**：有记忆或循环连接（如 RNN、LSTM）

## 全连接层（Fully Connected Layer）

**全连接层（Fully Connected Layer, FC 层）** 是神经网络中最基础的线性变换模块。

- 每个输入神经元都与每个输出神经元相连。

- 数学形式：
  $$
  \mathbf{y} = \mathbf{W} \mathbf{x} + \mathbf{b}
  $$

  - $\mathbf{x} \in \mathbb{R}^{d_{\text{in}}}$：输入向量
  - $\mathbf{W} \in \mathbb{R}^{d_{\text{out}} \times d_{\text{in}}}$：可学习权重矩阵
  - $\mathbf{b} \in \mathbb{R}^{d_{\text{out}}}$：偏置项
  - $\mathbf{y} \in \mathbb{R}^{d_{\text{out}}}$：输出向量

### 特点

- **线性变换**（无非线性）
- 通常后面会接一个**激活函数**（如 ReLU、GELU）来引入非线性
- 在 PyTorch 中对应 `nn.Linear`

> ✅ 全连接层是构建 MLP 和更复杂网络的基本“积木”。

## 多层感知机（Multilayer Perceptron）

### **1. 定义**

**MLP（Multilayer Perceptron）** 是由**多个全连接层堆叠而成**的前馈神经网络，**至少包含一个隐藏层**，并且**每层之间使用非线性激活函数**。

例如一个 2 层 MLP：

$\text{MLP}(\mathbf{x}) = \mathbf{W}_2 \cdot \sigma(\mathbf{W}_1 \mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2$

- \sigma 是激活函数（如 ReLU、Tanh、GELU）
- 第一层是**隐藏层**，第二层是**输出层**

### **2. 关键特性**

- **前馈**：信息单向流动，无循环或反馈
- **全连接**：层内神经元全连接（但现代 MLP 也可能用其他连接方式）
- **通用逼近器**：理论上，一个足够宽的单隐藏层 MLP 可以逼近任意连续函数（Universal Approximation Theorem）

### **3. 应用举例**

- LLaVA 中的 **Projector**：将视觉特征映射到语言空间（如 `Linear(768→4096) + GELU + Linear(4096→4096)`）
- 分类头（Classification Head）：图像分类最后的 FC 层
- 推荐系统中的 DNN 部分

