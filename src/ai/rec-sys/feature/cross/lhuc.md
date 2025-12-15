# LHUC

> 仅用于精排

Learning Hidden Unit Contributions (LHUC)

- LHUC 起源于语音识别[1]。
- 快手将 LHUC 应用在推荐精排[2]，称作 PPNet。

参考文献：

1. Pawel Swietojanski,Jinyu Li,Steve Renals.Learning hidden unit contributions for unsupervised acoustic model adaptation.IEEE ACM Transactions on Audio, Speech,and Language Processing,2016.
2. 快手落地万亿参数推荐精排模型，2021。链接：https://ai.51cto.com/art/202102/644214.html

## 语音识别的 LHUC

[多个全连接层]→[Sigmoid 乘以 2] （0-2）

有的特征放大，有的特征缩小，实现个性化

![image-20250824160115155](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824160115155.png)
