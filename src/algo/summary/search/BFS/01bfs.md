# 0/1 BFS

在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。

- 
  对于边权为 0 的边 x→y，如果 dis[x]<dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。
- 对于边权为 1 的边 x→y，如果 dis[x]+1<dis[y]，更新 dis[y]=dis[x]+1，把 y 加到队尾。

问：为什么代码中没有使用 visit 数组？

答：第一个点出队后，更新邻居的 dis；等到第二个点出队时，由于邻居的 dis 已经更新过，它必不能更新邻居的 dis 值，无法产生任何影响，所以 visit 数组是多余的。

Dijkstra 算法也可以不要 visit 数组，在出堆时判断下，如果堆中存的 dis 超过了实际的 dis 值，可以直接 continue。

- [1368. 使网格图至少有一条有效路径的最小代价](https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
- [2290. 到达角落需要移除障碍物的最小数目](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/)
