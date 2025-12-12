# BFS

分类

- 狭义 BFS：Breadth-first search (BFS)

  结点只能入队一次

- 扩展 BFS：Best-first search (BeFS)

  结点可以入队多次（根据规则）

如果可以预先计算出每个节点到终点的距离，则可以利用这个信息更快的到达终点。

其原理与 Dijkstra 算法类似，我们也使用一个优先队列，但此时以每个节点到达终点的距离作为优先级，每次始终选取到终点移动代价最小（离终点最近）的节点作为下一个遍历的节点。这种算法称之为最佳优先（Best First）算法。

### BFS 实现

常见有三种写法：

- dummy、
- BiQueue 双队列
- Queue 单队列

## 高频考法

1. 连通块问题
2. 分层遍历
3. 拓扑排序

### 连通块问题

- 通过图中一个点找到其他所有连通的点

- 找到所有方案问题的一种非递归实现方式

  DFS vs BFS 在连通块问题上的优劣

### 分层遍历

- 图的层级遍历

  一层一层的遍历一个图、树、矩阵

- 无权图图最短路径问题

  - 简单图：只有权值都一样，或者说是无权图

    简单图中，层级=最短路

    简单图中：第几层访问到该节点=到达该节点的最短路径

  - 复杂图最短路径有什么算法

    SPFA、Dijkstra

    复杂图中：我可能通过三层访问到比通过两层访问到的路径更短

  - 最长路径用什么算法

  - 什么是隐式图

  - 通用的 BFS 模板

  - 80%的人都会写错的 BFS 写法

### 拓扑排序

- DFS vs BFS 在拓扑排序上的优劣

  实现容易度远超过 DFS

- 拓扑排序的五个考点

  - 问有没有拓扑排序
  - 求任意一个拓扑排序
  - 求最小的拓扑排序
  - 求拓扑排序是否唯一

---

原则：能 BFS 的别 DFS(除非面试官特别要求)

（其实连通块问题用 dfs 写起来又短又快，且效率往往更高）

- Recursion 版本的 DFS 有 StackOverflow 的风险
- Non-Recursion 版本的 DFS 容易错+面试官未必看得懂

## 模版

### BFS

屡试不爽的 BFS 代码模板，刷题效率直接翻倍

应该在哪里做访问标记？入队之前标记 visited/distance 防止重复入队

矩阵坐标变换数组（如果是矩阵坐标 visited 可以不必 hashmap，二维数组即可）

- deltaX, deltaY
- inBound / isValid

```java
ReturnType bfs(Node startNode, [Node endNode]) {
    Queue<Node> queue = new ArrayDeque<>();
    // hashmap 两个作用，一个是记录一个点是否被丢进过队列了，避免重复访问
    // 另外一个是记录 startNode 到其他所有节点的最短距离
    // 如果只求连通性的话，可以换成 HashSet 就行
    // node 做 key 的时候比较的是内存地址
    // 如果是二维坐标可以用二维数组来记录
    Map<Node, Integer> distance = new HashMap<>();
    // 把起点放进队列和哈希表里，如果有多个起点，都放进去
    queue.offer(startNode);
    distance.put(startNode, 0); // or 1  if necessary
    // while 队列不空，不停的从队列里拿出一个点，拓展邻居节点放到队列中
    while (!queue.isEmpty)) {
        Node node = queue.poll();
        // 遍历点的时候，出队后更新
        // 如果有明确的终点可以在这里加终点的判断
        if (node is endNode) {
        	break or return something;
        }
        for (Node neighbor : node.getNeighbors()) {
            if (distance.containsKey(neighbor)) {
            	continue;
            }
            // 若不满足条件，跳过
            // 这里可以判断边和点的条件
            if (!isValid(neighbor)) {
	            continue;
            }
            queue.offer(neighbor);
            // 遍历边的时候，入队前更新
            // 遍历点的时候也可以，但是建议上面
            // 防止重复入队/访问，同时记录层次信息
            distance.put(neighbor, distance.get(node) + 1);
        }
    }
    // 如果带要返回所有点离起点的距离，就 return hashmap
    return distance;
    // 如果需要返回所有连通的节点，就 return HashMap 里的所有点
    return distance.keySet();
    // 如果需要返回离终点的最短距离
    return distance.get(endNode);
}
```

### BeFS

```pseudocode
Best-First-Search(Graph g, Node start)
    1) Create an empty PriorityQueue
       PriorityQueue pq;
    2) Insert "start" in pq.
       pq.insert(start)
    3) Until PriorityQueue is empty
          u = PriorityQueue.DeleteMin
          If u is the goal
             Exit
          Else
             Foreach neighbor v of u
                If v "Unvisited"
                    Mark v "Visited"                    
                    pq.insert(v)
             Mark u "Examined"                    
End procedure
```

## 例题

实际面试围绕 BFS 所涉及算法和数据结构

二叉树
拓扑排序算法
堆
宽度优先搜素
深度优先搜索
动态规划
字符串处理

---

搞定 BFS 知识点，你可以刷这些高频题

- 二叉树的层次遍历 I, II
- 二叉树的最大深度
- 二叉树的右视图
- 克隆图
- 岛屿的个数
- 单词接龙 I, II
- 墙和门
- 拓扑排序
- 外星人字典

样例，每个题做完相当于啃下 3-5 道类似题

## 进阶

- BFS 解决最短路径问题时可能产生的各类变化
- 宽度优先搜索代码模板
- BFS 两种实现方式

  - 在不同情况下各自的优劣对比

- 图的邻接表(Adjacency List)存储方法
- 使用 SPFA 算法解决复杂图最短路径问题
- 双向宽度优先搜索代码模板
- 双向宽度优先搜索到底带来多大的优化?
- 如何记录 BFS 求出的最短路径的具体方案

