# Techniques

resnet

残差连接

激活函数（Activation Function）

常见的激活函数都是非线性的，因此也会给神经元引入非线性元素，使得神经网络可以逼近其他的任何非线性函数，这样可以使得神经网络应用到更多非线性模型中。

- **线性激活函数**（线性方程控制输入到输出的映射，如f(x)=x等）
- **非线性激活函数**（非线性方程控制输入到输出的映射，比如
  - Sigmoid、
  - Tanh、
  - ReLU、
    - LReLU
    - PReLU
    - Swish
  - Softmax 是用于多类分类问题的激活函数

attention

$attention(Q,K,V)=softmax(\frac{QK^T}{\sqrt d_k})V$

Attention机制是一种广泛应用于深度学习中的技术，最初用于解决神经机器翻译任务中的长序列问题，现在已经扩展到各种任务中。以下是常见的Attention机制分类和实现：

------

### **1. 按实现方法分类**

#### **1.1. 基于加法的Attention（Additive Attention）**

- 提出于Bahdanau Attention（2014）。

- 使用一个可训练的前馈神经网络（通常是一层全连接层）计算注意力得分。

- **公式**: $e_{ij} = \text{v}^T \tanh(W_1 h_i + W_2 s_j + b)$ 

  其中，$h_i$是输入序列的编码器隐藏状态，$s_j$是解码器隐藏状态。

#### **1.2. 基于点积的Attention（Dot-Product Attention）**

- 提出于Vaswani等人的Transformer模型（2017）。

- 通过计算Query和Key向量的点积来获得注意力得分。

- **公式**: $e_{ij} = Q_i \cdot K_j$ 

  点积的结果常使用Softmax归一化，并可加入缩放因子，称为**Scaled Dot-Product Attention**: 

  $\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$

#### **1.3. 多头Attention（Multi-Head Attention）**

- 将输入划分为多个头，每个头独立计算Attention，结果通过线性变换进行组合。
- **优点**: 增强模型的表示能力，捕获不同子空间的特征。

------

### **2. 按功能分类**

#### **2.1. 自注意力（Self-Attention）**

- Query、Key和Value都来源于同一个输入序列。
- 常用于序列建模，特别是在Transformer中。

#### **2.2. 跨注意力（Cross-Attention）**

- Query来自一个序列（如解码器），Key和Value来自另一个序列（如编码器）。
- 通常用于Encoder-Decoder架构中。

#### **2.3. 全局注意力（Global Attention）**

- 考虑整个输入序列作为注意力的计算范围。

#### **2.4. 局部注意力（Local Attention）**

- 只在输入序列中选取一个子窗口，减少计算量，适用于长序列。

------

### **3. 按架构改进分类**

#### **3.1. Transformer Attention**

- **核心特点**: Scaled Dot-Product Attention和Multi-Head Attention结合。
- 应用于自然语言处理、计算机视觉等任务中。

#### **3.2. Soft Attention 和 Hard Attention**

- **Soft Attention**: 通过Softmax函数得到注意力分布，可微，适合反向传播。
- **Hard Attention**: 选择单一注意力焦点，使用采样技术训练，非可微。

#### **3.3. Sparse Attention**

- 降低全局注意力的计算复杂度，仅关注部分输入。
- 例子：Longformer、BigBird。

#### **3.4. Memory-Augmented Attention**

- 引入外部记忆模块，帮助捕获更多上下文信息。
- 例子：Memory Networks。

#### **3.5. Low-Rank Attention**

- 使用低秩分解降低计算复杂度。
- 例子：Performer。

#### **3.6. Dynamic Attention**

- 根据上下文动态调整注意力计算范围和策略。
- 例子：Deformable Attention。

### **4. 应用场景中的变种**

#### **4.1. 自然语言处理**

- **BERT**: 基于双向Transformer的模型。
- **GPT**: 采用单向自回归Transformer。

#### **4.2. 计算机视觉**

- **Vision Transformer（ViT）**: 使用Self-Attention替代卷积操作。
- **Deformable DETR**: 使用可变形注意力提高目标检测的效率。

#### **4.3. 多模态学习**

- **CLIP**: 文本和图像跨模态对齐的Attention模型。
- **UNITER**: 多模态统一表征。

### **5. 未来方向**

- **Efficient Attention**: 专注于减少长序列中的计算量。
- **Hierarchical Attention**: 在不同层次上关注局部与全局特征。
- **Hybrid Models**: 与卷积网络等结合以提高模型性能。

如果你对某种具体Attention机制的细节实现感兴趣，可以深入讨论！
