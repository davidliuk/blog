# Storage 图的存储

## Adjacency Matrix 邻接矩阵

二维数组`graph[i][j]`，表示i, j之间的距离。

好处：O1判断两结点是否连接（且写起来比较简单）

缺点：稀疏图上非常浪费空间，且只能存储简单图（不能有重边）

用途：

1. 最大网络秩
2. 二分图匹配，匈牙利算法
3. Floyd算法求多源最短路n3

## Adjacency List 邻接表

有一个有 `n` 个节点的有向图，节点按 `0` 到 `n - 1` 编号。

图由一个 **索引从 0 开始** 的 2D 整数数组 `graph`表示， `graph[i]`是与节点 `i` 相邻的节点的整数数组，这意味着从节点 `i` 到 `graph[i]`中的每个节点都有一条边。

### 无权图

`Map<Node, Set<Node>>`，这样既可存稀疏图，又可O1判断是否连接

`List<Integer>[] next = new List[n]`

👍`List<Integer>[] adjacencyList = new List[n]`

`List<List<Integer>> adjacencyList = new ArrayList<>()`

### 带权图

👍`Map<Node, Map<Node, Integer>>`，这样既可存稀疏图，又可O1判断是否连接

`List<int[]>[] e = new List[n];` 存储带权图，数组存[结点编号, 权] lc1466

`List<Integer>[] g = new List[n];` g[i]存储结点i对应的边的序号，是邻接表和边存储的结合。

边可以用int[]，也可以用Edge结构体

好处：节省空间，便于遍历

用途：

1. 一般的图遍历
2. 网络流等

方便存多层图，如不同类别的边不同处理逻辑的时候，可以拆成多层图

## Edge 边存储

一个边的数组，每个元素都是起点、终点的二元组（如果带权图则为三元组）

`List<int[]> edges`

给你一个 **有向无环图** ， `n` 个节点编号为 `0` 到 `n-1` ，以及一个边数组 `edges` ，其中 `edges[i] = [fromi, toi]` 表示一条从点 `fromi` 到点 `toi` 的有向边。

eg. [[0, 1], [0, 2], [1, 2]]

有 `n` 个城市通过一些航班连接。给你一个数组 `flights` ，其中 `flights[i] = [fromi, toi, pricei]` ，表示该航班都从城市 `fromi` 开始，以价格 `pricei` 抵达 `toi`。

用途：

- 题目一般是给一组边，然后用户根据题意选择合适的方式建图
- 最小生成树 Kruskal
- 适合用并查集，有向图DP