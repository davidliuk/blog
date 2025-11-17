# Subarray

**子数组问题核心在于连续性**，解法大体可分为：

- **滑动窗口**（正数 长度/≥/≤）
  - **单调队列**（最短/最长子数组 / sum ≥ k / 最大最小值）
- **前缀 + HashMap**（精确 sum / 异或 / 奇偶）
- **动态规划**（最大和 / 最大乘积 / 长度）

| 类别                                | 典型题                                                       | 核心思路                                                     |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **固定滑动窗口**                    | 3. Longest Substring Without Repeating Characters (变为子数组) | 滑动窗口，固定长度或动态长度，维护窗口内状态（集合 / map）   |
| **动态滑动窗口 / 至少/至多 K 条件** | 209. Minimum Size Subarray Sum, 1248. Count Number of Nice Subarrays, 992. Subarrays with K Different Integers, 674. Longest Continuous Increasing Subsequence | 滑动窗口 + 双指针 → expand / shrink → 更新最优解或计数       |
| **和类问题**                        | 560. Subarray Sum Equals K, 325. Maximum Size Subarray Sum Equals k | **前缀和 + HashMap** 或 **前缀和 + 单调队列**（支持 sum ≥ k） |
| **最大/最小值类**                   | 239. Sliding Window Maximum                                  | **单调队列**（递减/递增队列）维护窗口最值                    |
| **乘积类**                          | 152. Maximum Product Subarray                                | **动态规划** → 记录 max/min product，处理负数翻转            |
| **异或/位操作类**                   | 1240. Tiling a Rectangle (可以类比)                          | **前缀异或 + HashMap**，类似前缀和                           |
| **和/乘积满足条件的连续子数组计数** | 560. Subarray Sum Equals K, 1248. Count Number of Nice Subarrays | **前缀和/前缀计数 + HashMap** 或 **单调队列**                |
| **滑窗 DP / 优化 DP**               | 862. Shortest Subarray with Sum at Least K                   | **前缀和 + 单调队列**                                        |
| **循环数组**                        | 503. Next Greater Element II (循环滑窗)                      | **扩展数组 + 单调栈 / 队列**                                 |
| **最优子数组长度**                  | 325, 209, 1004, 862                                          | 滑动窗口 / 单调队列 / 前缀和                                 |



| 技术                           | 使用场景                               | 特点                                          |
| ------------------------------ | -------------------------------------- | --------------------------------------------- |
| **滑动窗口**                   | 子数组满足“长度 / 条件 / 至多 K / ≥ k” | 双指针，expand / shrink，适合非负数或单调条件 |
| **前缀和 + HashMap**           | 子数组和 / 异或 = k / 特定条件         | 支持负数，O(n)                                |
| **单调队列 / 双端队列**        | 滑窗最值 / 子数组 sum ≥ k              | O(n) 时间维护最优左边界或最大/最小值          |
| **动态规划**                   | 最大乘积 / 最大和 / 最大长度子数组     | 记录状态（如 max/min）                        |
| **排序 / 树状结构 / 有序集合** | sum ≥ k，含负数                        | 用 TreeMap 查询 ≤ 某值前缀和个数，O(n log n)  |
| **前缀计数**                   | 特定统计问题（奇偶、异或）             | 前缀计数 + HashMap 快速统计                   |



1. **滑动窗口模式（窗口可收缩）**

- 条件：元素非负、窗口 sum 单调
- 思路：expand → 满足条件 → shrink → 更新最优解
- 题型：
  - 209. Minimum Size Subarray Sum
  - 1. Count Number of Nice Subarrays（奇数 ≥ k）
  - 1. Max Consecutive Ones III

------

1. **前缀和 + HashMap（精确匹配）**

- 条件：可以正负数

- 思路：

  ```
  prefix[i] - prefix[j] = target → prefix[j] = prefix[i] - target
  ```

- 题型：

  - 560. Subarray Sum Equals K
  - 1. Maximum Size Subarray Sum Equals k
  - 异或 / 奇偶统计题

------

1. **前缀和 + 单调队列（≥ 或 ≤ 条件）**

- 条件：求 sum ≥ k / 最短子数组长度
- 思路：
  - 队列维护递增前缀和
  - 队首存最优左边界
  - 窗口滑动 + 出队 / 入队更新最短长度
- 题型：
  - 209 负数扩展
  - 1. Shortest Subarray with Sum at Least K
  - LC 560 ≥ k 改造

------

1. **动态规划模式**

- 条件：最大 / 最小 / 最长
- 思路：
  - dp[i] = f(nums[i], dp[i-1])
  - 对负数乘积、最大和、长度优化
- 题型：
  - 152. Maximum Product Subarray
  - 1. Maximum Subarray
  - 1000+ 连续子数组长度题

------

1. **单调栈 / 队列辅助模式**

- 条件：需要快速找到窗口内最值或前缀最优值
- 思路：单调递增/递减队列，窗口滑动
- 题型：
  - 239. Sliding Window Maximum
  - 1. Shortest Subarray with Sum at Least K

------

## 实战技巧

1. **先分析条件**
   - 元素是否为正 → 滑动窗口可行
   - 有负数 → 考虑前缀和 / 单调队列 / TreeMap
2. **确定目标**
   - 求长度 → 窗口 / 单调队列
   - 求个数 → 前缀和计数 + HashMap
3. **窗口收缩原则**
   - 满足条件 → 尝试收缩 → 更新答案
   - 不满足 → 扩大窗口
4. **前缀和 + 单调队列**
   - 用队首表示最优左边界
   - 队尾维护递增（保证最短长度 / 最优解）
5. **前缀计数 / HashMap**
   - sum 精确匹配 → O(n)
   - sum ≥ target → 需要有序结构 / 单调队列

