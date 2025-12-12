# Shortest Path

BFS 最短路

- 无权图

- 01图，每条边的权值为0或1

- 状态转换问题

  状态转换问题的最短步骤数。图的节点表示状态，边表示状态之间的合法转换。每次转换可以视为一步，无需考虑权值。

  **示例问题：**

  - 八数码问题（求解从初始状态到目标状态的最少移动次数）。
  - 字梯问题（从一个单词转换到另一个单词，每次只能变更一个字母）。

  **方法：** 将状态看作图的节点，合法的状态转换看作边，用 BFS 搜索状态空间。

哈希表，图中存在环，同一个节点可能重复进入队列，为了避免重复入队，在入队前标记 visited

Java: HashMap / HashSet

Java 队列建议 new ArrayDeque (链表比数组慢)

## 无权图

Word Ladder

简单图最短路径

给出两个单词(start和end)和一个字典，找出从start到end的最短转换序列，输出最短序列的长度。

Knight Shortest Path

简单图最短路径，八个方向坐标变换

---

飞行棋I

从数组的最左侧跳到最右侧，**只能向右跳**，一步跳 1-6 格，有一些格子之间直接飞过去不耗费步数，问最少跳几步

> 只能向右跳->方向性 ->DP
>
> 如果没有这个信息的话，就不能DP但是可以用BFS+

问最少步数，可能是哪些算法?

A. BFS (高概率)
B. DP (次高概率)
C. DFS (几乎没有，最短路上复杂度太大不优)
D. Shortest Path Algorithm (标准最短路面试一般不考)

---

距离之和最短

### 矩阵 vs 图

图 Graph

N个点，M条边，M最大是 O(N^2) 的级别，图上BFS时间复杂度 = O(N + M)

- 说是O(M)问题也不大，因为M一般都比N大

所以最坏情况可能是 O(N^2)

矩阵 Matrix

R行C列，R*C个点，R*C*2 条边(每个点上下左右4条边，每条边被2个点共享)。 矩阵中BFS时间复杂度 = O(R * C)

矩阵根据题意可以是简单图也可以是复杂图，一般情况下是简单图一步一步走，那个球滚动到边界的题就是一个复杂图，每次滚动的距离不一定，且是一个隐式图

图上的例题

- 判断一个图是否是一棵树
- 搜索图中最近值为target的点
- 无向图连通块

矩阵上的例题

- 僵尸多少天吃掉所有人
- 建邮局问题 Build Post Office II

### 隐式图 Implicit Graph

隐式图：隐式图是**仅给出初始结点、目标结点以及生成子结点的约束条件**（题意隐含给出），要求按扩展规则应用于扩展结点的过程，找出其他结点，使得隐式图的足够大的一部分编程显式，直到包含目标结点为止。

抽象问题，没有明确告诉什么是点，什么是边：

**状态是点、二元关系是边**

矩阵是一个非常典型的隐式图，每次都按照拓展规则去找下一个访问的结点

单词接龙也是一个典型的隐式图

**隐式图**是仅给出初始结点、目标结点以及生成子结点的约束条件（题意隐含给出），要求按扩展规则应用于扩展结点的过程，找出其他结点，使得隐式图的足够大的一部分编程显式，直到包含目标结点为止。

推多米诺

### 时间模拟

按时间模拟

腐烂的橘子

可以多起点，多类目标同时模拟

eg. 逃离火灾

## 01图

0/1 BFS

如果某条边权值为 0，那么新拓展出的节点权值就和当前队头节点权值相同，也就自然可以作为下一次拓展的起点，所以，我们需要把它放在队头。而如果某条边的权值为 1，我们就把它正常地放在队尾。

在常规的广度优先搜索中，每个节点最多被添加进队列一次，而在 0-1 广度优先搜索中，每个节点最多被添加进双端队列两次（即队首一次，队尾一次）

---

在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。

- 对于边权为 0 的边 x→y，如果 dis[x]<dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。
- 对于边权为 1 的边 x→y，如果 dis[x]+1<dis[y]，更新 dis[y]=dis[x]+1，把 y 加到队尾。

问：为什么代码中没有使用 visit 数组？

答：第一个点出队后，更新邻居的 dis；等到第二个点出队时，由于邻居的 dis 已经更新过，它必不能更新邻居的 dis 值，无法产生任何影响，所以 visit 数组是多余的。

Dijkstra 算法也可以不要 visit 数组，在出堆时判断下，如果堆中存的 dis 超过了实际的 dis 值，可以直接 continue。

- [1368. 使网格图至少有一条有效路径的最小代价](https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
- [2290. 到达角落需要移除障碍物的最小数目](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/)

### [1197. Minimum Knight Moves](https://leetcode.com/problems/minimum-knight-moves/)

In an **infinite** chess board with coordinates from `-infinity` to `+infinity`, you have a **knight** at square `[0, 0]`.

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

![img](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

Return *the minimum number of steps needed to move the knight to the square* `[x, y]`. It is guaranteed the answer exists.

```java
// the offsets in the eight directions
int[][] offsets = { { 1, 2 }, { 2, 1 }, { 2, -1 }, { 1, -2 },
        { -1, -2 }, { -2, -1 }, { -2, 1 }, { -1, 2 } };

public int minKnightMoves(int x, int y) {
    // - Rather than using the inefficient HashSet, we use the bitmap
    //     otherwise we would run out of time for the test cases.
    // - We create a bitmap that is sufficient to cover all the possible
    //     inputs, according to the description of the problem.
    boolean[][] visited = new boolean[607][607];

    Deque<int[]> queue = new LinkedList<>();
    queue.addLast(new int[] { 0, 0 });
    int steps = 0;

    while (queue.size() > 0) {
        int currLevelSize = queue.size();
        // iterate through the current level
        for (int i = 0; i < currLevelSize; i++) {
            int[] curr = queue.removeFirst();
            if (curr[0] == x && curr[1] == y) {
                return steps;
            }

            for (int[] offset : offsets) {
                int[] next = new int[] { curr[0] + offset[0], curr[1] + offset[1] };
                // align the coordinate to the bitmap
                if (!visited[next[0] + 302][next[1] + 302]) {
                    visited[next[0] + 302][next[1] + 302] = true;
                    queue.addLast(next);
                }
            }
        }
        steps++;
    }
    // move on to the next level
    return steps;
}
```

```java
// Use record for immutable coordinate representation
private record Position(int x, int y) {}

// The offsets in the eight directions
private static final int[][] OFFSETS = {
        { 1, 2 }, { 2, 1 }, { 2, -1 }, { 1, -2 },
        { -1, -2 }, { -2, -1 }, { -2, 1 }, { -1, 2 }
};

public int minKnightMoves(int x, int y) {
    // Data structures for origin BFS
    Queue<Position> originQueue = new LinkedList<>();
    Map<Position, Integer> originDistance = new HashMap<>();
    Position origin = new Position(0, 0);
    originQueue.offer(origin);
    originDistance.put(origin, 0);

    // Data structures for target BFS  
    Queue<Position> targetQueue = new LinkedList<>();
    Map<Position, Integer> targetDistance = new HashMap<>();
    Position target = new Position(x, y);
    targetQueue.offer(target);
    targetDistance.put(target, 0);

    while (true) {
        // Process origin level
        Position currOrigin = originQueue.poll();
        if (targetDistance.containsKey(currOrigin)) {
            return originDistance.get(currOrigin) + targetDistance.get(currOrigin);
        }

        // Process target level
        Position currTarget = targetQueue.poll();
        if (originDistance.containsKey(currTarget)) {
            return targetDistance.get(currTarget) + originDistance.get(currTarget);
        }

        // Expand origin frontier
        for (int[] offset : OFFSETS) {
            Position nextOrigin = new Position(currOrigin.x + offset[0], currOrigin.y + offset[1]);
            if (!originDistance.containsKey(nextOrigin)) {
                originDistance.put(nextOrigin, originDistance.get(currOrigin) + 1);
                originQueue.offer(nextOrigin);
            }
        }

        // Expand target frontier
        for (int[] offset : OFFSETS) {
            Position nextTarget = new Position(currTarget.x + offset[0], currTarget.y + offset[1]);
            if (!targetDistance.containsKey(nextTarget)) {
                targetDistance.put(nextTarget, targetDistance.get(currTarget) + 1);
                targetQueue.offer(nextTarget);
            }
        }
    }
}
```

