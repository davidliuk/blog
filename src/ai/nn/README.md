# Neural Network 神经网络

深度学习（英語：deep learning）是机器学习的分支，是一種以人工神经网络为结构，对数据进行表征学习的算法。深度学习中的形容词“深度”是指在网络中使用多层。 早期的工作表明，线性感知器不能成为通用分类器，但具有非多项式激活函数和一个无限宽度隐藏层的网络可以成为通用分类器。

将1974年提出的标准反向传播算法应用于深度神经网络


## 问题

梯度消失、梯度爆炸

resnet：残差连接

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

CNN

RNN

seq2seq

- LSTM架构

Transformer

- Bert
- GPT

Transformer是更广义的MLP， 其中一个原因是它在处理input的时候，创造性的引入了query, key和value的概念。而CNN，RNN又属于MLP的特殊情况。GNN感觉则是CNN在图网络结构的一种应用而已。所以Transformer看着像CNN, RNN, GNN, MLP.

这个问题现在争议不大了吧，我自己遵守的一条好用的黄金法则是

有大量数据，用transformer；允许pretrain，用transformer；小数据from scratch，分类用CNN，标注和生成用RNN。

对于上述情况的中间地带，看个人调参能力吧，个人实践经验来说，哪个调的用心哪个就更好一些，喜欢无脑套默认超参的还是RNN更容易上性能，不过是真的慢。

---

我们首先区分一个概念：广义Transformer和狭义Transformer，

- 狭义Transformer指Attention is all you need那个结构，包含一个encoder一个decoder；
- 广义Transformer指self-attention机制的各种应用。

下面是我个人一些理解，感觉可能有不对或者不完整的

1. 狭义Transformer在大数据的情况下超过RNN一点问题没有，而且是显著的超，目前在很多大数据任务都验证了，比如WMT数据集的机器翻译，BERT，以及最近的TTS。

2. 狭义的Transformer在跑中等数据集（一百万）或者小数据（几万或者几千）和RNN谁好谁坏不一定，可能靠调，不是那种一个默认参数就会比RNN好，我简单的跑过中等数据集的对话（Twitter）和摘要（CNN DailyMail），感觉没好多少。小数据反而更容易过拟合，按照一些paper报的结果反而RNN好

3. 广义的Transformer又是另一个故事了，我个人理解self attention机制几乎在所有任务上好好调都有用，比如分类，阅读理解（QANet），小规模s2s（Universal Transformer）。比如QAnet和Universal Transformer大家如果有兴趣可以看一看，通过自己的Recurrent机制，能给性能带来很大的增益。Multi head attention和简单的Self attention都是很有用的结构上的trick

4. 我忘了是ACL的哪篇文章了，做过一个实验。RNN对于50个词之前的词顺序就不敏感了，而对于100个词之前的就完全忘了，所以RNN在长序列上肯定是有问题的。不过Transformer的位置信息只靠Position Embedding，我个人觉得可能也有提升空间。

---

下面是我个人一些理解，感觉可能有不对或者不完整的

主要特点是：

1. 非顺序处理：句子是整体处理，而不是逐字处理
2. 单个的Transformer Block主要由**两部分**组成：
   1. 多头注意力机制(Multi-Head Attention)
   2. 前馈神经网络(Feed Forward)，
3. Transformer Block代替了LSTM和CNN结构作为了我们的特征提取器，使得Transformer不依赖于过去的隐藏状态来捕获对先前单词的依赖性，而是整体上处理一个句子，以便允许并行计算，减少训练时间，并减少由于长期依赖性而导致的性能下降
