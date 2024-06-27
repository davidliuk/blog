# 优化

1. **贪心算法**：
   - 特点：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。
   - 适用场景：问题满足贪心选择性质（局部最优解能决定全局最优解）和最优子结构。
   - 例子：霍夫曼编码、最小生成树、Dijkstra。
2. **动态规划**：
   - 特点：将复杂问题分解成简单子问题，以递归的方式解决子问题。不同于分治，动态规划会保存子问题的解，避免重复计算。
   - 适用场景：问题具有最优子结构，且子问题重叠（不是互斥的）。
   - 例子：斐波那契数列、背包问题等。
3. **分治算法**：
   - 特点：将一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单直接求解，原问题的解即子问题的解的合并。
   - 适用场景：问题可以被分解为独立的子问题。
   - 例子：归并排序、快速排序等。
4. **减治法**：
   - 特点：与分治法相似，但在每一步仅解决问题的一部分，减小问题规模，直到问题简单到可以直接求解。
   - 适用场景：问题可以通过减少一部分来简化。
   - 例子：插入排序、最大堆构建等。

**联系与区别**：

- **联系**：它们都是通过分解问题来简化问题求解的方法。
- 区别：
  - 贪心算法在每步只考

---

空间换时间：