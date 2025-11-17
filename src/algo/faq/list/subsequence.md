# Subsequence

> Continuous Subsequence 即 Subarray，参考 Subarray 问题

**子序列问题核心在于元素顺序保持、不要求连续**，解法大体可分为：

- **DP**（LIS / LCS / 编辑距离 / 子序列计数）
- **贪心 + 二分**（LIS）
- **双指针**（匹配子序列）
- **递归 + 状态压缩 / 记忆化**（组合 / 多条件子序列）

## **1️⃣ 子序列问题分类**

子序列是 **原数组/字符串中删除若干元素（可为 0）后形成的新序列**，元素相对顺序不变。按题目特征，可分为以下几类：

| 类别                                | 典型题                                                       | 核心思路                                                  |
| ----------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| **最长递增/非递增子序列**           | 300. Longest Increasing Subsequence, 674. Longest Continuous Increasing Subsequence | DP（状态 dp[i] 表示以 i 结尾的 LIS）/ 二分优化 O(n log n) |
| **最长公共子序列**                  | 1143. Longest Common Subsequence, 1092. Shortest Common Supersequence | DP[i][j] 表示 s1[0..i-1] 和 s2[0..j-1] 的 LCS 长度        |
| **最大和 / 最优子序列**             | 53. Maximum Subarray（连续子数组）→ 子序列变体               | DP / 贪心（sum 最优）                                     |
| **特定和 / 条件子序列**             | 646. Maximum Length of Pair Chain, 1048. Longest String Chain | DP + 排序 / 贪心                                          |
| **子序列计数**                      | 115. Distinct Subsequences                                   | DP[i][j] 表示 s1 前 i 个匹配 s2 前 j 个的方式数           |
| **子序列匹配 / 编辑距离**           | 72. Edit Distance, 392. Is Subsequence                       | 双指针 / DP                                               |
| **特殊序列问题（位操作/状态压缩）** | 879. Profitable Schemes, 691. Stickers to Spell Word         | DP + 状态压缩 / bitmask                                   |

------

## **2️⃣ 常用算法 / 技术**

| 技术                  | 使用场景                          | 特点                                    |
| --------------------- | --------------------------------- | --------------------------------------- |
| **动态规划（DP）**    | LIS / LCS / 编辑距离 / 子序列计数 | 核心：定义 dp[i] 或 dp[i][j] → 状态转移 |
| **贪心 + 二分优化**   | LIS / 最大递增链                  | O(n log n) 时间优化 LIS                 |
| **双指针**            | 判断子序列 / 匹配子序列           | s2 是 s1 的子序列，指针 i,j 同步移动    |
| **状态压缩 / 位运算** | 多维状态 / 多条件约束             | 用 bitmask 记录使用状态                 |
| **递归 + 记忆化**     | 子序列计数 / 匹配问题             | 避免重复计算，复杂度从指数降到多项式    |

------

## **3️⃣ 常见模式总结**

1. **最长递增子序列（LIS）模式**

- **问题**：求长度、最大和、或实际序列
- **思路**：
  1. DP[i] = LIS 以 nums[i] 结尾的长度
  2. 状态转移：`dp[i] = max(dp[j] + 1 | j < i && nums[j] < nums[i])`
- **优化**：维护一个递增数组 tails + 二分 → O(n log n)
- **题型**：
  - 300. LIS
  - 1. Longest Continuous Increasing Subsequence
  - 1. Maximum Length of Pair Chain

------

1. **最长公共子序列（LCS）模式**

- **问题**：求两个序列的最长公共子序列

- **思路**：

  - dp[i][j] = LCS(s1[0..i-1], s2[0..j-1])

  - 转移：

    ```
    if s1[i-1] == s2[j-1]:
        dp[i][j] = dp[i-1][j-1] + 1
    else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    ```

- **空间优化**：滚动数组 → O(min(m,n))

- **题型**：

  - 1143. LCS
  - 1. Shortest Common Supersequence
  - 1. Distinct Subsequences

------

1. **子序列计数 / 匹配模式**

- **问题**：统计子序列数量或判断是否匹配
- **思路**：
  - DP[i][j] = 前 i 个 s1 匹配前 j 个 s2 的方法数
  - 遍历 s1，更新 dp
- **题型**：
  - 115. Distinct Subsequences
  - 1. Is Subsequence（双指针）

------

1. **连续子序列 / 滑动窗口模式**

- **问题**：求连续子序列满足某条件（长度 / sum / max）
- **思路**：
  - 滑动窗口 → expand / shrink
  - 可用单调队列维护最值或 sum
- **题型**：
  - 674. Longest Continuous Increasing Subsequence
  - 1. Shortest Subarray with Sum at Least K（连续）

------

1. **递归 + 状态压缩模式**

- **问题**：多条件约束、组合子序列
- **思路**：
  - 递归枚举选择/不选择
  - 记忆化或 bitmask 压缩状态
- **题型**：
  - 879. Profitable Schemes
  - 1. Stickers to Spell Word

------

## **4️⃣ 实战技巧**

1. **先明确连续 vs 不连续**
   - 连续 → 滑动窗口 / 单调队列 / DP
   - 不连续 → LIS / LCS / 子序列计数 DP
2. **确定目标**
   - 长度 → LIS / LCS / DP
   - 数量 → 子序列计数 / HashMap
   - 匹配 → 双指针或 DP
3. **优化思路**
   - LIS → 二分优化 O(n log n)
   - LCS → 滚动数组节省空间
   - 子序列计数 → 递归 + 记忆化
   - 连续条件 → 滑动窗口 / 单调队列

我可以帮你画一张 **子序列问题解法图**，把 **题型 → 技术 → 模板 → 典型题** 全部整理成一张图表，非常适合面试复盘。

你希望我画吗？