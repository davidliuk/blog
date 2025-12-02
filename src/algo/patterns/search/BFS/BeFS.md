# Best-First Search

- A\*
- Dijkstra

https://www.geeksforgeeks.org/best-first-search-informed-search/

## A \* 算法

A \* search algorithm，简称 A\* 算法，是一种在图形平面上，对于有多个节点的路径求出最低通过成本的算法。它属于图遍历（Graph traversal）和最佳优先搜索算法（Best-first search），亦是 BFS 的改进。

A\*算法是综合上面这些算法的特点于一身的。A\*算法通过下面这个函数来计算每个节点的优先级。

$$
f(n)=g(n)+h(n)
$$

- f(n) 是起点 s 到终点 t 的预估长度，是节点 n 的综合优先级。当我们选择下一个要遍历的节点时，我们总会选取综合优先级最高（值最小）的节点。
- g(n) 是节点 n 距离起点 s 的代价。
- h\*(n) 是节点 n 距离终点 t 的代价。搜索过程中很难准确的知道这个代价。
- h(n) 是节点 n 距离终点 t 的预估代价。采用预计代价，是 A\*算法的启发函数。

A\*算法在运算过程中，每次从优先队列中选取 f(n)值最小（优先级最高）的节点作为下一个待遍历的节点。

另外，A\*算法使用两个集合来表示：

- `open_set`：待遍历的节点
- `close_set`：已经遍历过的节点

我们知道，A\*的时间复杂度是和节点数量以及起始点难度呈幂函数正相关的。

[网址](http://qiao.github.io/PathFinding.js/visual/)很好的演示了双向 A\*的效果，我们来看一看。

绿色表示起点，红色表示终点，灰色是墙面。稍浅的两种绿色分别代表 open 节点和 close 节点：

针对 A\*算法的节点多导致搜索时间太长作了一定的改进

1. 估价函数采用两点之间的欧式距离

2. 交替进行前向和后向搜寻

3. 设置搜寻阈值，当超过这一阈值时，设定方向点的为阈值临界点，只有目标点在阈值范围内时再进行搜寻

### 对 h 的估计

它是 A\*算法中的最特别之处，是“启发式”体现的核心，也是与 Dijkstra 算法相比，差别最大的部分。

令$\hat h(n)$为$h(n)$的一个估计。估计$\hat h(n)$的过程通常被称为**试探法**，因为估计过程是从当前节点向终点（尚未探测到的节点）的一种估计。估计的准确度依赖于问题域中可用的信息数。

迪杰斯特拉算法在寻找下个点时，选择标准为：

open 列表中，距离起点最近的点。即：起点到该点的距离最短

最佳优先搜索算法在寻找下个点时，选择标准为：

open 列表中，距离终点最近的点。即：起点到该点的距离最短

A\*算法在寻找下个点时，选择标准为：

open 列表中，起点到该点的距离 + 该点到终点的直线距离 之和 最短。

从下表可知，选择一个好的启发函数是重要的。

| 情况                    | 函数                                    | 结果                                   |
| ----------------------- | --------------------------------------- | -------------------------------------- |
| $\hat h(n)=0$           | 退化为 Dijkstra 算法                    | 保证能找到一条最短路径                 |
| $\hat h(n)< h(n)$       | $\hat h(n)$越小，扩展的越多，运行的越慢 | 保证能找到一条最短路径，但运算更快了   |
| $\hat h(n)= h(n)$       | 仅寻找最佳路径，而不扩展任何别的节点。  | 保证能找到一条最短路径，并且运算非常快 |
| $\hat h(n)> h(n)$       | 寻找最佳路径且扩展别的任何节点          | 不能保证找到一条最短路径，但运算更快了 |
| $\hat h(n)\gg\hat g(n)$ | 退化为 BFS 算法                         | 不能保证找到一条最短路径，但运算非常快 |

所以得到一个很有趣的情况，那就是可以决定想要从 A\*中获得什么。

理想情况下，我们想最快地得到最短路径；但如果目标太低，仍会得到最短路径，不过速度变慢了；如果目标太高，那就放弃了最短路径，但它运行得更快。

### 启发函数

常见估价函数（用距离）

- 曼哈顿距离：xy 距离绝对值的和

  不能斜着走

- 切比雪夫距离：xy 距离绝对值的最大值

  可以斜着走的时候

- 欧几里得距离：直线距离

  一般不行

---

- `openSet`: `queue`
- `closeSet`: `visited`, `seen`, `dist`

### 过程

* 初始化open_set和close_set；
* 将起点加入open_set中，并设置优先级为0（优先级最高）；
* 如果open_set不为空，则从open_set中选取优先级最高的节点n：
  * 如果节点n为终点，则：
    * 从终点开始逐步追踪parent节点，一直达到起点；
    * 返回找到的结果路径，算法结束；
  * 如果节点n不是终点，则：
    * 将节点n从open_set中删除，并加入close_set中；
    * 遍历节点n所有的邻近节点：
      * 如果邻近节点m在close_set中，则：
        * 跳过，选取下一个邻近节点
      * 如果邻近节点m在open_set中，则：
        * 判断节点n到节点m的 F(n) + cost[n,m] 值是否 < 节点m的 F(m) 。来尝试更新该点，重新设置f值和父节点等数据
      * 如果邻近节点m也不在open_set中，则：
        * 设置节点m的parent为节点n
        * 计算节点m的优先级
        * 将节点m加入open_set中

---

## Dijkstra

```java
int dijkstra(
    int[][] grid, 
    int startX, int startY, 
    int targetX, int targetY
) {
    var pq = new PriorityQueue<int[]>((a, b) -> a[2] - b[2]);
    boolean[][] seen = new boolean[m][n];

    distance[startX][startY] = 1;
    pq.offer(new int[]{startX, startY, 1});

    while (!pq.imEmpty()) {
        int[] curr = pq.poll();
        int i = curr[0], j = curr[1];
        if (seen[i][j]) {
            continue;
        }
        seen[i][j] = true;
        if (i == targetX && j == targetY) {
            return distance[i][j];
        }
        for (int[] dir : dirs) {
            int ni = i + dir[0], nj = j + dir[1];
            if (ni < 0 || ni >= m || nj < 0 || nj >= n
                || grid[ni][nj] != 0 || seen[ni][nj]
                || distance[ni][nj] <= distance[i][j] + 1) {
                continue;
            }
            distance[ni][nj] = distance[i][j] + 1;
            pq.add(new int[]{ni, nj, distance[ni][nj]});
        }
    }
    return -1;
}
```

A\*

```java
int aStar(
    int[][] grid, 
    int startX, int startY, 
    int targetX, int targetY
) {
    var pq = new PriorityQueue<int[]>((a, b) -> f(a, targetX, targetY) - f(b, targetX, targetY));
    boolean[][] seen = new boolean[m][n];

    distance[startX][startY] = 1;
    pq.offer(new int[]{startX, startY, 1});

    while (!pq.imEmpty()) {
        int[] curr = pq.poll();
        int i = curr[0], j = curr[1];
        if (seen[i][j]) {
            continue;
        }
        seen[i][j] = true;
        if (i == targetX && j == targetY) {
            return distance[i][j];
        }
        for (int[] dir : dirs) {
            int ni = i + dir[0], nj = j + dir[1];
            if (ni < 0 || ni >= m || nj < 0 || nj >= n
                || grid[ni][nj] != 0 || seen[ni][nj]
                || distance[ni][nj] <= distance[i][j] + 1) {
                continue;
            }
            distance[ni][nj] = distance[i][j] + 1;
            pq.add(new int[]{ni, nj, distance[ni][nj]});
        }
    }
    return -1;
}

int f(int[] a, targetX, targetY) {
    return a[2] + h(a[0], [1], targetX, targetY);
}

int h(int i, int j, int targetX, int targetY) {
    return Math.abs(targetX - i) + Math.abs(targetY - j);
}
```

