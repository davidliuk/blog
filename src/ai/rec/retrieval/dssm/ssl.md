# 自监督学习

> 参考文献：Tiansheng Yao et al.Self-supervised Learning for Large-scale Item Recommendations. In CIKM 2021.

双塔模型的问题

- 推荐系统的头部效应严重：
  - 少部分物品占据大部分点击。
  - 大部分物品的点击次数不高。
- 高点击物品的表征学得好，长尾物品的表征学得不好
- 自监督学习：做data augmentation，更好地学习长尾物品的向量表征

## 自监督学习

### 正样本

对样本做随机变换，同物品的随机变换结果应该相似，不同物品的结果应该不相似

![image-20250825113845088](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825113845088.png)

### 负样本

![image-20250825110913059](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825110913059.png)

- 物品$i$的两个向量表征$b_i'$和$b_i''$有较高的相似度。
- 物品$i$和$j$的向量表征$b_i'$和$b_j''$有较低的相似度。
- 鼓励$\cos(b_i',b_i'')$尽量大，$\cos(b_i',b_j'')$尽量小。

## 特征变换

### Random Mask

随机选一些离散特征（比如类目），把它们遮住。

例：

- 某物品的类目特征是U={数码，摄影}。
- Mask后的类目特征是U'={default}

### Dropout

仅对多值离散特征生效

- 一个物品可以有多个类目，那么类目是一个多值离散特征。
- Dropout：随机丢弃特征中50%的值。
- 例：
  - 某物品的类目特征是U = {美妆，摄影}。
  - Dropout 后的类目特征是U' = {美妆}。

### Complementary

 互补特征

- 假设物品一共有4种特征：

  - ID,类目，关键词，城市

- 随机分成两组：

  - {D, 关键词}和{类目, 城市}

- {ID, default, 关键词, default} → 物品表征

- {default, 类目, default, 城市} → 物品表征

鼓励两个向量相似

### Mask 一组关联的特征

- 受众性别：U = 男，女，中性
- 类目：V = 美妆，数码，足球，摄影，科技，…
- u=女 和 V = 美妆 同时出现的概率$p(u,v)$大
- u=女 和 V = 数码 同时出现的概率$p(u,v)$小

例

- p(u)：某特征取值为u的概率
  - p(男性)=20%
  - p(女性)=30%
  - p(中性)=50%
- p(u,v)：某特征取值为u，另一个特征取值为v，同时发生的概率。
  - p(女性’美妆)=3%
  - p(女性’数码)=0.1%
- 离线计算特征两两之间的关联，用互信息（nutual information)衡量：
  - $MI(U,V)=\sum_{u\in U}\sum_{v\in V}p(u,v)\cdot \log\frac{p(u,v)}{p(u)\cdotp(v)}$



- 设一共有k种特征。离线计算特征两两之间MI，得到kXk的矩阵
- 随机选一个特征作为种子，找到种子最相关的k/2种特征。
- Mαsk种子及其相关的飞/2种特征’保留其余的k/2种特征。



- 好处：比random mask、dropout、互补特征等方法效果更好。
- 坏处：方法复杂，实现的难度大’不容易维护。

## 训练模型

- 从全体物品中均匀抽样’得到m个物品，作为一个batch
- 做两类特征变换，物品塔输出两组向量：
  - $b_1',b_2',\cdots,b_m'$ 和 $b_1'',b_2'',\cdots,b_m''$
- 第 $i$ 个物品的损失函数：
  - $L_{self}[i]=-\log(\frac{\exp(\cos(b_i',b_i''))}{\sum_{j=1}^m\exp(\cos(b_i',b_j''))})$
- 做梯度下降，减小损失函数：
  - $\frac{1}{m}\sum_{i=1}^nL_{self}[i]$


![image-20250825114536625](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825114536625.png)

训练模型

- 对点击做随机抽样，得到几对用户一物品二元组，作为一个 batch。
- 从全体物品中均匀抽样，得到m个物品，作为一个 batch。
- 做梯度下降，使得损失减小：
  - $\frac{1}{n}\sum_{i=1}^nL_{main}[i]+\alpha\cdot\frac{1}{m}\sum_{i=1}^nL_{self}[i]$
  - 双塔模型的损失，自监督学习的损失

## 总结

- 双塔模型学不好低曝光物品的向量表征。
- 自监督学习：
  - 对物品做随机特征变换
  - 特征向量$b_i'$和$b_i''$相似度高（相同物品）
  - 特征向量$b_i'$和$b_j''$相似度低（不同物品）
- 实验效果：低曝光物品、新物品的推荐变得更准
