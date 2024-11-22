# Substring

子串/子数组

可以考虑的算法

1. 前序型 DP
2. 子串型 DP（Kadane 算法）
3. 滑动窗口
   1. 滑动哈希 Robin Karp


eg. 718

https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n4/?envType=study-plan-v2&envId=coding-interviews-special

DP问题有两种很典型的问题：子数组和子序列。

- 求子数组时，一般是O(n)，因为我们求dp[i]时，只用考虑dp[i-1]。再往前就没法连续了。

- 求子序列时，一般是O(n^2)，我们需要考虑所有dp[j] (j<i)。如 300. 最长递增子序列

## 和积**最值**问题

> 第i位置的答案，一定由第i-1位置的答案发展而来，不用考虑i-2, i-3...
> 因此用坐标dp，可以做到O(n)。

1. 最大子数组和
  
  普通DP。因为它向前扩展必连上dp[i-1]，考虑dp[i-2]的话就不是连续子数组了。
  有一个更优解法判断 sum 是否大于0的，其实就是化简后的普通DP。
  
2. 乘积最大子数组
  
  可普通DP，同上。只不过是状态机DP。

## 和积**定值**问题

### 同向滑窗

> 双指针，以右边界为循环重心，每次+1；不满足条件时左边界收缩。
>  要求：右指针右移 和 左指针右移 效果相反。这样收缩左边界才可以抵消扩张右边界带来的作用。

剑指 Offer II 008. 和大于等于 target 的最短子数组

实用建议：推荐 建立窗口 和 移动窗口 写在一个循环中。不推荐滑窗先写个循环建立窗口，再写个循环向右滑动。建立窗口循环末尾容易漏掉这种情况：窗口盛满序列时，还需要移动窗口左边缘以达到最优解。

### 前缀和 + 哈希

前缀和数组，把子数组和问题转化为两数之差（类似 两数之和）问题。用哈希就欧了。

lc560. 和为 K 的子数组

这个题很多人直接滑窗然后错了。如果数据中没有负数，才能用滑窗。因为全正数的话，右指针右移 和 左指针右移 效果相反：前者使sum增加，后者使sum减小。

0 和 1 个数相同的子数组

这个题题解没人说为什么不能滑窗。但其实新手很容易想到滑窗，然后无法解决。一样的道理：左指针右移 和 右指针右移，并不能保证效果相反。右指针右移，可能导致增加一个0；此时收缩窗口，右移左指针，却不能保证减少一个0或增加一个1。

现在，我们确定不能滑窗。题解大多数上来就说把0换成-1即可，没有人说怎么想到这个思路。这个思路有没有一个通用的方法能让我们想出来呢？其实也是有的。横线下方即本题题解。进入题解之前，我们先思考一些有趣的内容，这有助于我们将方法迁移到更多的题目上。

## 等价转换
