# Union Find Set

连通性，用一个集合中的某个元素来代表这个集合

是一种树形的数据结构，用于解决不相交（disjoint）集合的合并及查询问题。

1. 一般是无向无权图的连通分量，
2. 也可以拓展至有向带权图（需要一个额外dist数组，如除法求值）

并查集是树形结构，它用一棵树来表示一个集合，不同的集合其实就构成了一个森林。

优化方法：

1. 按秩合并
2. 路径压缩

路径压缩会破坏树的结构，在一些情况下是不能使用的，按秩合并则不会

两种优化可以同时进行，查询操作几乎可以降到O1

---

我们可以将每一个变量看作图中的一个节点，把相等的关系 == 看作是连接两个节点的边，那么由于表示相等关系的等式方程具有传递性，即如果 `a==b` 和 `b==c` 成立，则 `a==c` 也成立。也就是说，所有相等的变量属于同一个连通分量。因此，我们可以使用并查集来维护这种连通分量的关系。