# 图

按节点与边的属性分类

- **多重图（Multigraph）**
  两个节点之间可以存在多条边。
  **示例**: 城市之间可能有多个航班。
- **简单图（Simple Graph）**
  每对节点之间最多只有一条边，且无自环。
  **示例**: 学生关系网络。
- **自环图（Graph with Loops）**
  节点可以有指向自身的边。
  **示例**: 状态转移图中可能存在某状态的自环。

按动态变化分类

- **静态图（Static Graph）**
  图的结构（节点和边）固定不变。
  **示例**: 地图数据。
- **动态图（Dynamic Graph）**
  图的结构可以动态变化（节点和边可能增加或删除）。
  **示例**: 社交网络中的好友关系图。

权值

- 无权图
- 加权图

方向

- 无向图
- 有向图

存储

- 显式图

- 隐式图

  按照扩展规则逐步扩展邻接的点
  
  - The Maze
  - Sliding puzzle

图可以先生成好再遍历，也可以边遍历边生成（推荐变遍历边生成）

dfs 时有的时候需要记录 parent/from 防止出现平凡环/走回头路

**编号**：图是一个抽象的结构，要为图中每一个节点赋值一个唯一的编号。

- 一般来说，题目上给的节点是按照数组给的有一个默认编号 0 到 n-1或 1 到 n（这个时候也要注意-1来映射），或String本身也可以做唯一标识

- 没有的情况下，需要用哈希表来记录元素到编号

  如合并账户、除法求值

在我们开始实际执行深度优先搜索之前，让我们快速地判断用什么存储图，

1. 邻接表，是这个问题的最佳表示
2. 邻接矩阵 ，通常只有当边数大大高于节点数时，我们才会使用邻接矩阵。
3. 链表，将实际节点作为对象的 链表表示法 是一种过于复杂的表示法，可能会向面试官暗示您对邻接列表和邻接矩阵的了解有限。它们在面试问题中并不常用。

## 图的存储

- 邻接矩阵

  二维数组`graph[i][j]`，表示i, j之间的距离。

  好处：

  1. O1判断两点距离和是否之间相连
  2. 求最大网络秩
  3. 写起来比较简单

- 邻接表 adjacencyList

  有一个有 `n` 个节点的有向图，节点按 `0` 到 `n - 1` 编号。

  图由一个 **索引从 0 开始** 的 2D 数组 `graph`表示， `graph[i]`是与节点 `i` 相邻的节点的整数数组，这意味着从节点 `i` 到 `graph[i]`中的每个节点都有一条边。

  `List<Integer>[] next = new List[n]`

  `List<Integer>[] adjacencyList = new List[n]`

  `List<List<Integer>> adjacencyList = new ArrayList<>()`

  `Map<Integer, Set<Integer>> adjacencyList = new HashMap<>()`

  `List<int[]>[] e = new List[n];` 存储带权图，数组存结点编号和权 lc1466

  好处：节省空间，便于遍历

  方便存多层图，如不同类别的边不同处理逻辑的时候，可以拆成多层图

- 边存储

  一个边的数组，每个元素都是起点、终点的二元组（如果带权图则为三元组）

  给你一个 **有向无环图** ， `n` 个节点编号为 `0` 到 `n-1` ，以及一个边数组 `edges` ，其中 `edges[i] = [fromi, toi]` 表示一条从点 `fromi` 到点 `toi` 的有向边。

  eg. [[0, 1], [0, 2], [1, 2]]

  有 `n` 个城市通过一些航班连接。给你一个数组 `flights` ，其中 `flights[i] = [fromi, toi, pricei]` ，表示该航班都从城市 `fromi` 开始，以价格 `pricei` 抵达 `toi`。

  好处：
  
  1. 题目一般是给一组边，然后用户根据题意选择合适的方式建图
  2. 适合用并查集，
  3. 统计indegree, outdegree

## 图分类

- 有向图

  - 有向无环图 DAG

    无需 visited 数组，因为不会走回头路；可以拓扑排序；可以动态规划

    - 森林
    - 树
    - 多段图，可以划分成若干阶段，每个阶段只能从上一个阶段所决定

  - 基环树 pseudo tree

    基环树是指其具有 n 个点 n 条边的联通块，

    - 「内向」是指树中任意节点有且只有一条出边
    - 「外向」是指树中任意节点有且只有一条入边

    可以用FOR来遍历，可以用数组存储（类似链式next数组或prev数组或链式前向星的head数组）

    - [2127. 参加会议的最多员工数](https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting/)
    - [2359. 找到离给定两个节点最近的节点](https://leetcode.cn/problems/find-closest-node-to-given-two-nodes/)
    - [2360. 图中的最长环](https://leetcode.cn/problems/longest-cycle-in-a-graph/)
    - [2836. 在传球游戏中最大化函数值](https://leetcode.cn/problems/maximize-value-of-function-in-a-ball-passing-game)

- 无向图

- 隐式图

  根据连接规则来生成，边遍历边生成，无需提前生成完

  - 矩阵图（比如一个二维棋盘、二维矩阵）
  - 单词接龙

- 二部图

  **二分图**定义：如果能将一个图的节点集合分割成两个独立的子集 `A` 和 `B` ，并使图中的每一条边的两个节点一个来自 `A` 集合，一个来自 `B` 集合，就将这个图称为 **二分图**。

- 欧拉图

  一笔画问题，不重复遍历所有边

  欧拉回路：Hierholzer算法求解欧拉回路

  欧拉通路：Hierholzer算法求解欧拉通路

  - 欧拉图
  - 半欧拉图

- 哈密尔顿图

  一笔画问题，不重复遍历所有点

  > 判断一个图是否是哈密顿图是一个NP完全问题，它是可解的。到目前为止, 还没有找到一个简明可行的条件作为一个图是否为哈密顿图的充要条件。

### 树

树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

无向图 G 是树，的充要条件（当且仅当）满足以下两个条件：

1. G 完全连通。换句话说，对于 G 中的每一对点，都有一条路径连接彼此。
2. G 不包含环。换句话说，对于 G 中的每一对点只有一条路径连接彼此。

或者当且仅当：

1. 检查是否是`n-1`条边。如果没有，则返回 `false`。
2. 完全连通：检查该图是否完全连通。如果是，则返回 `true`，否则返回 `false`。

- 无根树
- 有根树

有根树指满足以下条件的**有向图**。

- 该树只有一个根节点，所有其他节点都是该根节点的后继。（用拓扑排序）
- 该树除根节点外的每一个节点都有且只有一个父节点，而根节点没有父节点。

## 图的遍历

遍历过程中要有 visited 数组/表或标识（如dfn, color等）防止一个点重复遍历

- 深度优先搜索

  好处：代码简短多种类型的状态好存，有先序后序

- 广度优先搜索

  好处：可用于无权图的最短路径问题，便于求解拓扑排序序列

## 连通性

### 染色法

三色标记法，判断二分图和带环图

根据题意，若起始节点位于一个环内，或者能到达一个环，则该节点不是安全的。否则，该节点是安全的。

我们可以使用深度优先搜索来找环，并在深度优先搜索时，用三种颜色对节点进行标记，标记的规则如下：

白色（用 0 表示）：该节点尚未被访问；
灰色（用 1 表示）：该节点位于递归栈中，或者在某个环上；
黑色（用 2 表示）：该节点搜索完毕，是一个安全节点。

**二分图**定义：如果能将一个图的节点集合分割成两个独立的子集 `A` 和 `B` ，并使图中的每一条边的两个节点一个来自 `A` 集合，一个来自 `B` 集合，就将这个图称为 **二分图**。

### 环

平凡环：无向图里面A->B, B->A构成一个平凡环

自环：一个节点有一条指向自己的边

判环：

- 三色标记法
- 拓扑排序
- tarjan 算法
- 并查集：边集合

### 点连通性

在无向图中，若从顶点$V_i$到顶点$V_j$有路径（当然反过来也一定有路径），则称$V_i$和$V_j$是连通的。


### 连通图

若$V(G)$中任意两个不同的顶点$V_i$和$V_j$都连通（即有路径），则称$G$为连通图(Connected Graph)。

### 强连通图

1. 弱连通：有向图的底图（无向图）是连通图，则是弱连通图。
2. 单向连通：有向图中，任意结点对中，至少从一个到另一个是可达的，就是单向连通。
3. 强连通：有向图中，强连通图是任意对中都互相可达。

**有向图**G中，若$V(G)$中任意两个不同的顶点$V_i$和$V_j$都连通（即双向可达），则称$G$为强连通图(Connected Graph)。

### 连通分量 CC

无向图G的极大连通子图称为G的连通分量。任何连通图的连通分量只有一个，即是其自身，非连通的无向图有多个连通分量。

### BFS



### 并查集

一般是无向无权图的连通分量，也可以拓展至有向带权图（需要一个额外dist数组，如除法求值）

用一个集合中的某个元素来代表这个集合

是一种树形的数据结构，用于解决不相交（disjoint）集合的合并及查询问题，包含两种操作：

并查集是一种树形结构，它用一棵树来表示一个集合，不同的集合其实就构成了一个森林。

但是路径压缩会破坏树的结构，在一些情况下是不能使用的，按秩合并则不会

两种优化可以同时进行，查询操作几乎可以降到O1

我们可以将每一个变量看作图中的一个节点，把相等的关系 == 看作是连接两个节点的边，那么由于表示相等关系的等式方程具有传递性，即如果 `a==b` 和 `b==c` 成立，则 `a==c` 也成立。也就是说，所有相等的变量属于同一个连通分量。因此，我们可以使用并查集来维护这种连通分量的关系。

### 强连通分量 SCC

Tarjan 算法

https://blog.csdn.net/csyifanZhang/article/details/105370924

Tarjan 是著名计算机科学家。Tarjan 算法基于 dfs，可以解决很多连通性问题，比如

- 无向图的割点（关键点）Cut Vertex
- 无向图的割边（关键边、桥）
- 无向图的双连通分量 BCC(Biconnected Component)
- 有向图的强连通分量 **SCC**(Strong Connected Component)
- 缩点（把一个强连通分量缩成一个点）

用于不同问题时，写法略有区别。

Tarjan 算法的关键点有二：在 dfs 的过程中，

- 前序，记录每个节点初次被访问的时间戳
- 后序，计算每个节点能访问到的节点的最小时间戳。

## 最短路

### BFS

简单图/无权图最短路

### Dijkstra

带权图最短路

Dijkstra 用于找到给定加权图（图的边表示节点之间的距离）中从任何起始节点到任何目标节点的最短路径。

该算法包括以下步骤：

1. 为每个节点分配一个临时距离值：对于我们的起始节点，将其设置为零，对于所有其他节点，将其设置为无穷大。

2. 将起始节点设置为当前节点。标记它为已访问。

3. 对于当前节点，考虑其所有相邻节点并计算它们的临时距离。将新计算的临时距离与当前分配的值进行比较，并将较小的值分配给所有相邻节点。

   例如，如果当前节点 A 的距离标记为 6，并且与相邻节点B相连的边长为 2，则到B(通过A)的距离将为 6 + 2 = 8。如果 B 之前标记的距离大于 8，则将其改为 8。否则，保留当前值。

4. 当我们完成考虑当前节点的所有相邻节点时，将当前节点标记为已访问。已访问的节点将不再被检查。

5. 如果目标节点已标记为已访问，或者所有剩余节点中最小的临时距离为无穷大(表示无法到达目标节点)，则停止。算法已完成。

6. 否则，选择标记为未访问的节点中具有最小临时距离的节点，并将其设置为新的当前节点，然后返回到步骤 3。

可以通过两个简单的示例来了解该算法的工作原理。首先，考虑下面的节点集。

### A*

启发函数（估计当前结点到终点的距离）

## 生成树

### Kruskal

初始时，图中每个点都为一个连通分量。

1. 将所有边按权值升序排序
2. 升序考虑所有边，如果连接这条边能使图的连通分支减少，就连接，否则不连接

最后得到的就是最小生成树，复杂度与边有关，适合边稀疏图

## 网络流

最大流

增广路

最小割最大流

最小费用最大流

## 一笔画

本题和「753. 破解保险箱」类似，是力扣平台上为数不多的求解欧拉回路 / 欧拉通路的题目。读者可以配合着进行练习。

我们化简本题题意：给定一个 n 个点 m 条边的图，要求从指定的顶点出发，经过所有的边恰好一次（可以理解为给定起点的「一笔画」问题），使得路径的字典序最小。

这种「一笔画」问题与欧拉图或者半欧拉图有着紧密的联系，下面给出定义：

- 通过图中所有边恰好一次且行遍所有顶点的通路称为欧拉通路；
- 通过图中所有边恰好一次且行遍所有顶点的回路称为欧拉回路；
- 具有欧拉回路的无向图称为欧拉图；
- 具有欧拉通路但不具有欧拉回路的无向图称为半欧拉图。

因为本题保证至少存在一种合理的路径，也就告诉了我们，这张图是一个欧拉图或者半欧拉图。我们只需要输出这条欧拉通路的路径即可。

----

如果没有保证至少存在一种合理的路径，我们需要判别这张图是否是欧拉图或者半欧拉图，具体地：

- 对于无向图 G，G 是欧拉图当且仅当 G 是连通的且没有奇度顶点。

- 对于无向图 G，G 是半欧拉图当且仅当 G 是连通的且 G 中恰有 0 个或 2 个奇度顶点。
- 对于有向图 G，G 是欧拉图当且仅当 G 的所有顶点属于同一个强连通分量且每个顶点的入度和出度相同。
- 对于有向图 G，G 是半欧拉图当且仅当
  - 如果将 G 中的所有有向边退化为无向边时，那么 G 的所有顶点属于同一个强连通分量；
  - 最多只有一个顶点的出度与入度差为 1；
  - 最多只有一个顶点的入度与出度差为 1；
  - 所有其他顶点的入度和出度相同。

---

Hierholzer 算法

用于在连通图中寻找欧拉路径，其流程如下：

1. 从起点出发，进行深度优先搜索。
2. 每次沿着某条边从某个顶点移动到另外一个顶点的时候，都需要删除这条边。
3. 如果没有可移动的路径，则将所在节点加入到栈中，并返回。
