# Graph

Computational Graph 计算图

描述运算的有向无环图

- 节点 Node

  数据：向量、矩阵、张量

- 边 Edge

  运算：加减乘除卷积等

---

根据计算图的搭建方式，可以划分为：

- Daynamic Computational Graphs  动态图：运算与搭建同时进行（pytorch）

  灵活、易调节

- Static Computational Graphs 静态图：先搭建图，后运算（tensorflow）

  高效、不灵活

---

autograd