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

## Template

### Union-Find Set

```java
class UnionFind {
    int[] p;
    int[] size;

    public UnionFind(int n) {
        p = new int[n];
        size = new int[n];
        for (int i = 0; i < n; i++) {
            p[i] = i;
            size[i] = 1;
        }
    }

    public boolean union(int i, int j) {
        int pi = find(i), pj = find(j);

        if (pi == pj) {
            return false;
        }
        if (size[pi] < size[pj]) {
            p[pi] = pj;
            size[pj] += size[pi];
        } else {
            p[pj] = pi;
            size[pi] += size[pj];
        }

        return true;
    }

    public int find(int i) {
        if (p[i] == i) {
            return i;
        }

        return p[i] = find(p[i]);
    }
}
```

### Weighted Union-Find Set

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

## Union-Find Set

### [1101. The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)

There are n people in a social group labeled from `0` to `n - 1`. You are given an array `logs` where `logs[i] = [timestampi, xi, yi]` indicates that `xi` and `yi` will be friends at the time `timestampi`.

Friendship is **symmetric**. That means if `a` is friends with `b`, then `b` is friends with `a`. Also, person `a` is acquainted with a person `b` if `a` is friends with `b`, or `a` is a friend of someone acquainted with `b`.

Return *the earliest time for which every person became acquainted with every other person*. If there is no such earliest time, return `-1`.

```java
public int earliestAcq(int[][] logs, int n) {
    Arrays.sort(logs, (a, b) -> a[0] - b[0]);

    UnionFind uf = new UnionFind(n);
    for (int[] log : logs) {
        if (uf.union(log[1], log[2])) {
            if (--n == 1) {
                return log[0];
            }
        }
    }

    return -1;
}
```

### [737. Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/)

We can represent a sentence as an array of words, for example, the sentence `"I am happy with leetcode"` can be represented as `arr = ["I","am",happy","with","leetcode"]`.

Given two sentences `sentence1` and `sentence2` each represented as a string array and given an array of string pairs `similarPairs` where `similarPairs[i] = [xi, yi]` indicates that the two words `xi` and `yi` are similar.

Return `true` *if `sentence1` and `sentence2` are similar, or* `false` *if they are not similar*.

Two sentences are similar if:

- They have **the same length** (i.e., the same number of words)
- `sentence1[i]` and `sentence2[i]` are similar.

Notice that a word is always similar to itself, also notice that the similarity relation is transitive. For example, if the words `a` and `b` are similar, and the words `b` and `c` are similar, then `a` and `c` are **similar**.

```java
boolean areSentencesSimilarTwo(String[] sentence1, String[] sentence2, List<List<String>> similarPairs) {
    if (sentence1.length != sentence2.length) {
        return false;
    }

    // Collect all unique words
    Set<String> allWords = new HashSet<>();
    for (String word : sentence1) {
        allWords.add(word);
    }
    for (String word : sentence2) {
        allWords.add(word);
    }
    for (List<String> pair : similarPairs) {
        allWords.add(pair.get(0));
        allWords.add(pair.get(1));
    }

    // Map each word to an integer index
    Map<String, Integer> wordToIdx = new HashMap<>();
    int index = 0;
    for (String word : allWords) {
        wordToIdx.put(word, index++);
    }

    // Initialize UnionFind with integer indices
    UnionFind uf = new UnionFind(allWords.size());

    // Union similar pairs using indices
    for (List<String> pair : similarPairs) {
        int idx1 = wordToIdx.get(pair.get(0));
        int idx2 = wordToIdx.get(pair.get(1));
        uf.union(idx1, idx2);
    }

    // Check sentence similarity
    for (int i = 0; i < sentence1.length; i++) {
        if (sentence1[i].equals(sentence2[i])) {
            continue;
        }

        // If either word is not in our mapping, they can't be similar
        if (!wordToIdx.containsKey(sentence1[i]) || !wordToIdx.containsKey(sentence2[i])) {
            return false;
        }

        int idx1 = wordToIdx.get(sentence1[i]);
        int idx2 = wordToIdx.get(sentence2[i]);
        if (uf.find(idx1) != uf.find(idx2)) {
            return false;
        }
    }

    return true;
}
```

```java
class UnionFind {
    Map<String, String> parent = new HashMap<>();
    Map<String, Integer> rank = new HashMap<>();

    public void addWord(String x) {
        if (!parent.containsKey(x)) {
            parent.put(x, x);
            rank.put(x, 0);
        }
    }

    public boolean isWordPresent(String x) {
        if (parent.containsKey(x)) {
            return true;
        }
        return false;
    }

    public String find(String x) {
        if (parent.get(x) != x)
            parent.put(x, find(parent.get(x)));
        return parent.get(x);
    }

    public void union(String x, String y) {
        String xset = find(x), yset = find(y);
        if (xset == yset) {
            return;
        } else if (rank.get(xset) < rank.get(yset)) {
            parent.put(xset, yset);
        } else if (rank.get(xset) > rank.get(yset)) {
            parent.put(yset, xset);
        } else {
            parent.put(yset, xset);
            rank.put(xset, rank.get(xset) + 1);
        }
    }
}

class Solution {
    public boolean areSentencesSimilarTwo(String[] sentence1, String[] sentence2,
            List<List<String>> similarPairs) {
        if (sentence1.length != sentence2.length) {
            return false;
        }

        UnionFind dsu = new UnionFind();
        for (List<String> pair : similarPairs) {
            // Create the graph using the hashed values of the similarPairs.
            dsu.addWord(pair.get(0));
            dsu.addWord(pair.get(1));
            dsu.union(pair.get(0), pair.get(1));
        }

        for (int i = 0; i < sentence1.length; i++) {
            if (sentence1[i].equals(sentence2[i])) {
                continue;
            }
            if (dsu.isWordPresent(sentence1[i]) && dsu.isWordPresent(sentence2[i]) &&
                    dsu.find(sentence1[i]) == dsu.find(sentence2[i])) {
                continue;
            }
            return false;
        }
        return true;
    }
}
```

## Weighted Union-Find Set

### [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `jth` query where you must find the answer for `Cj / Dj = ?`.

Return *the answers to all queries*. If a single answer cannot be determined, return `-1.0`.

**Note:** The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

**Note:** The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

```java
double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
    // 为变量标记编号
    int nIdx = 0;
    Map<String, Integer> strToIdx = new HashMap<>();

    int n = equations.size();
    for (int i = 0; i < n; i++) {
        if (!strToIdx.containsKey(equations.get(i).get(0))) {
            strToIdx.put(equations.get(i).get(0), nIdx++);
        }
        if (!strToIdx.containsKey(equations.get(i).get(1))) {
            strToIdx.put(equations.get(i).get(1), nIdx++);
        }
    }

    UnionFind uf = new UnionFind(nIdx);

    for (int i = 0; i < n; i++) {
        int va = strToIdx.get(equations.get(i).get(0));
        int vb = strToIdx.get(equations.get(i).get(1));
        uf.union(va, vb, values[i]);
    }
    int queriesCount = queries.size();
    double[] ret = new double[queriesCount];
    for (int i = 0; i < queriesCount; i++) {
        List<String> query = queries.get(i);
        double result = -1.0;
        if (strToIdx.containsKey(query.get(0)) && strToIdx.containsKey(query.get(1))) {
            int ia = strToIdx.get(query.get(0)), ib = strToIdx.get(query.get(1));
            result = uf.isConnected(ia, ib);
        }
        ret[i] = result;
    }
    return ret;
}

private static final double EPSILON = 1e-6;

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
            if (Math.abs(val - w[x] / w[y]) > EPSILON) {
                return false;
            }
            return true;
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

