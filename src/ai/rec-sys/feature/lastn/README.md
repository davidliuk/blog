# Last N

用户历史行为序列建模

引入就一定会涨指标

![image-20250824161651826](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824161651826.png)

- LastN：用户最近的 n 次交互（点击、点赞等)的物品 ID
- 对 LastN 物品 ID 做 embedding，得到 n 个向量。
- 把几个向量取平均，作为用户的一种特征。
- 适用于召回双塔模型、粗排三塔模型、精排模型。

参考文献：

- Covington,Adams,and Sargin.Deep neural networks for YouTube recommendations.In ACM Conference on Recommender Systems,2016.

![image-20250824161612514](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824161612514.png)
