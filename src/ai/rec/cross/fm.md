# Factorized Machine (FM)

> 现在用的已经不多

## 线性模型

- 有d个特征，记作x=[x1,…,xa]。
- 线性模型：$p=b+\sum_{i=1}^dw_ix_i$
- 模型有$d+1$个参数：$w=[w_1,…,w_d]$和$b$
- 预测是特征的加权和。（只有加，没有乘。)

## 二阶交叉特征

- 有$d$个特征，记作$X=[x1,…,xa$

- 线性模型+二阶交叉特征：

  - $p=b+\sum_{i=1}^d w_ix_i+\sum_{i=1}^d\sum_{j=i+1}^du_{ij}x_ix_j$

- 模型有$O(d^2)$个参数。

  > 参数太多！

## FM

用低秩矩阵来近似$u_{ij}$

- $p=b+\sum_{i=1}^d w_ix_i+\sum_{i=1}^d\sum_{j=i+1}^d(v_i^Tv_j)x_ix_j$

- 模型有$O(kd)$个参数。(k<<d)

  > k是超参数

![image-20250824154039091](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824154039091.png)

## 总结

- FM是线性模型的替代品，能用线性回归、逻辑回归的场景’都可以用FM。
- FM使用二阶交叉特征，表达能力比线性模型更强·
- 通过做近似u≈Vy,FM把二阶交叉权重的数量从O(d2)降低到O(kd)

参考文献：

Steffen Rendle.Factorization machines.In ICDM,2010.