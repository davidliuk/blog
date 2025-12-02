# Difference Array

假设有一个数组 nums，我们构造一个差分数组 diff，使得：

$$diff[i] = nums[i] - nums[i-1]$$

(其中 diff[0] = nums[0])

由此可得，原数组 nums[i] 就是差分数组的前缀和：

$$nums[i] = \sum_{k=0}^{i} diff[k]$$

#### 核心操作：区间更新 $O(1)$

如果你想让 `nums` 在区间 `[L, R]` 内的所有元素都加上一个值 `val`，你不需要遍历整个区间，只需要修改 `diff` 数组的两个位置：

1. `diff[L] += val`：意味着从 `L` 开始，之后的所有元素（在还原前缀和时）都会多加上 `val`。
2. `diff[R + 1] -= val`：意味着从 `R + 1` 开始，抵消掉之前加上的 `val`，使得影响仅停留在 `R` 为止。

**总结：**

- **修改区间 `[L, R]`**：时间复杂度 $O(1)$。
- **还原原数组**：时间复杂度 $O(N)$。

### [1526. Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)

You are given an integer array `target`. You have an integer array `initial` of the same size as `target` with all elements initially zeros.

In one operation you can choose **any** subarray from `initial` and increment each value by one.

Return *the minimum number of operations to form a* `target` *array from* `initial`.

The test cases are generated so that the answer fits in a 32-bit integer.

```java
public int minNumberOperations(int[] target) {
    int n = target.length;
    int ans = target[0];
    for (int i = 1; i < n; ++i) {
        ans += Math.max(target[i] - target[i - 1], 0);
    }
    return ans;
}
```

### [2528. Maximize the Minimum Powered City](https://leetcode.com/problems/maximize-the-minimum-powered-city/)

You are given a **0-indexed** integer array `stations` of length `n`, where `stations[i]` represents the number of power stations in the `ith` city.

Each power station can provide power to every city in a fixed **range**. In other words, if the range is denoted by `r`, then a power station at city `i` can provide power to all cities `j` such that `|i - j| <= r` and `0 <= i, j <= n - 1`.

- Note that `|x|` denotes **absolute** value. For example, `|7 - 5| = 2` and `|3 - 10| = 7`.

The **power** of a city is the total number of power stations it is being provided power from.

The government has sanctioned building `k` more power stations, each of which can be built in any city, and have the same range as the pre-existing ones.

Given the two integers `r` and `k`, return *the **maximum possible minimum power** of a city, if the additional power stations are built optimally.*

**Note** that you can build the `k` power stations in multiple cities.

```java
long maxPower(int[] stations, int r, int k) {
    int n = stations.length;
    long[] power = new long[n];
    long windowSum = 0, min = Long.MAX_VALUE;
    for (int i = 0; i < r; i++) {
        windowSum += stations[i];
    }
    for (int i = 0; i < n; i++) {
        windowSum += i + r >= n ? 0 : stations[i + r];
        power[i] = windowSum;
        windowSum -= i - r < 0 ? 0 : stations[i - r];
        min = Math.min(min, power[i]);
    }
    return searchMax(min, min + k, minPower -> {
        long[] diff = new long[n + 1]; // 差分数组
        long preSumDiff = 0, need = 0;
        for (int i = 0; i < n; ++i) {
            preSumDiff += diff[i]; // 累加差分值
            long delta = minPower - power[i] - preSumDiff;
            if (delta > 0) { // 需要 delta 个供电站
                need += delta;
                if (need > k)
                    return false;
                // Apply greedy strategy: place stations as far right as possible
                preSumDiff += delta; // 差分更新
                int rightBound = Math.min(i + 2 * r + 1, n);
                diff[rightBound] -= delta; // 差分更新
            }
        }
        return true;
    });
}
```

