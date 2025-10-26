# DCN 深度交叉网络

代替简单全连接网络

## Cross Layer

![image-20250824154404476](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824154404476.png)

Skip Connection (Residual connection)

![image-20250824155306745](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824155306745.png)

$x_{i+1}=X_i\circ (W_ix_i b_i)+x_i$

## Cross Network

![image-20250824155606970](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824155606970.png)

参考文献

1. Ruoxi Wang et al.**DCN V2**:Improved Deep Cross Network and Practical Lessons for Web-scale Learning to Rank Systems.In WWW,2021.
2. _Ruoxi Wang et al.Deep Cross Network for Ad Click Predictions.In ADKDD,2017._

## DCN

> 业界普遍使用，既可以召回也可以排序

![image-20250824155819979](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824155819979.png)
