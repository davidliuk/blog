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

## Weighted Union-Find Set

```java
class UnionFind {
    int[] f;
    double[] w;
    public UnionFind(int n) {
        f = new int[n];
        w = new double[n];
        Arrays.fill(w, 1.0);
        for (int i = 0; i < n; i++) {
            f[i] = i;
        }
    }

    public double isConnected(int x, int y) {
        int fx = find(x), fy = find(y);
        if (fx == fy) {
            return w[x] / w[y];
        }
        return -1;
    }

    public boolean union(int x, int y, double val) {
        int fx = find(x), fy = find(y);
        if (fx == fy) {
            return false;
        }

        f[fx] = fy;
        w[fx] = val * w[y] / w[x];

        return true;
    }

    public int find(int x) {
        if (f[x] == x) {
            return f[x];
        }
        int father = find(f[x]);
        w[x] = w[x] * w[f[x]];
        return f[x] = father;
    }
}
```

| **题目编号** | **题目名称**                     | **难度** | **场景/权重 w[i] 含义**                           |
| ------------ | -------------------------------- | -------- | ------------------------------------------------- |
| **399**      | **除法求值** (Evaluate Division) | 中等     | $w[i]$ 存储变量 $i$ 到其根变量 $r$ 的比值 $i/r$。 |
| **1631**     | **水壶问题 II** (Similar to an implicit version) | 困难     | 某些路径最短问题中，并查集可用于判断连通性并维护相对差值（常用于优化）。 |
| **LCP 41**            | **弱智数问题** (LeetCode Contests) | 困难     | 维护节点到根节点的相对关系，常用于判断三元组关系等。 |
| **剑指 Offer II 118** | **多余的边** (变种应用)            | 困难     | 用于维护图的连通性同时约束边的性质。                 |
| **1197**     | **跳马问题** (Implicit Graph Traversal) | 困难     | 虽然不是直接的带权并查集，但其思想与维护相对关系相似。 |
