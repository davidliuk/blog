# 双向 BFS

slidingPuzzle

相关问题

1. 是否有解：

   逆序对数，mergeSort

2. 最优解：BFS/A*

求最少操作次数
最少操作次数=最短步数=简单图最短路径=BFS
图中的点是什么？如何表示？

进一步优化
同时知道起点和终点
可以进行双向宽度优先搜索算法
Bi-directional BFS

变成根号t

- word ladder
- knight shortest path I, II
- sliding puzzle III

---

面试的时候不要上来就写BiBFS，要由易到难

先问一下可以写单向bfs吗？

- ok的话，先把单项的写完，写完一定过
- 如果不ok，再写双向bfs

---

最短路径：

- 简单图：BFS
- 复杂图
  - SPFA 版本 BFS
  - 也可以进一步用heapq/PriorityQueue代替deque/ArrayDeque
- 求路径的具体值
  - 可以将具体的路径同时放在queue或者distance里

同时给出起点和终点？

- 双向BFS