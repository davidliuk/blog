# LIS



### [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)

> 一维 LIS

子序型 DP，On2

```java
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] f = new int[n];
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] <= nums[j]) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += 1;
        ans = Math.max(ans, f[i]);
    }
    return ans;
}
```

Patient Sort，二分优化，Onlogn

```java
public int lengthOfLIS(int[] nums) {
    int len = 0;
    for (int num : nums) {
        int j = searchMin(0, len, i -> nums[i] >= num);
        if (j == len) { // >=x 的 g[j] 不存在
            len++;
        }
        nums[j] = num;
    }
    return len;
}
```

### MaxOfLIS

> 最值，要用动态开点线段树才可以优化

```java
public int maxOfLIS(int[] nums) {
    int n = nums.length;
    int[] f = new int[n];
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] <= nums[j]) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += nums[i];
        ans = Math.max(ans, f[i]);
    }
    return ans;
}
```

### [2407. 最长递增子序列 II](https://leetcode.cn/problems/longest-increasing-subsequence-ii/)

> 一维 LIS + 限制

子序型 DP，On2

```java
public int lengthOfLIS(int[] nums, int k) {
    int n = nums.length;
    int[] f = new int[n];
    // base case：f 数组全都初始化为 1
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j] && 
                nums[i] - nums[j] <= k) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += 1;
        ans = Math.max(ans, f[i]);
    }

    return ans;
}
```

### [354. 俄罗斯套娃信封问题](https://leetcode.cn/problems/russian-doll-envelopes/)

> 二维 LIS
>
> **前 d−1 维升序 + 最后一维降序 + LIS**

```java
// envelopes = [[w, h], [w, h]...]
public int maxEnvelopes(int[][] envelopes) {
    int n = envelopes.length;
    // 按宽度升序排列，如果宽度一样，则按高度降序排列
    Arrays.sort(envelopes, (a, b) -> {
        if (a[0] != b[0]) a[0] - b[0];
        return  b[1] - a[1];
    });
    // 对高度数组寻找 LIS
    int[] nums = new int[n];
    for (int i = 0; i < n; i++) {
        nums[i] = envelopes[i][1];
    }

    return lengthOfLIS(nums);
}
```

### [1626. 无矛盾的最佳球队](https://leetcode.cn/problems/best-team-with-no-conflicts/)

```java
int bestTeamScore(int[] scores, int[] ages) {
    int n = scores.length, ans = 0;
    var ids = new Integer[n];
    for (int i = 0; i < n; i++) {
        ids[i] = i;
    }
    Arrays.sort(ids, (i, j) -> {
        if (scores[i] != scores[j]) return scores[i] - scores[j];
        return ages[i] - ages[j];
    });

    var f = new int[n + 1];
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (ages[ids[j]] <= ages[ids[i]]) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += scores[ids[i]];
        ans = Math.max(ans, f[i]);
    }
    return ans;
}
```



```java
int bestTeamScore(int[] scores, int[] ages) {
    int n = scores.length, maxAge = 0, ans = 0;
    var ids = new Integer[n];
    for (int i = 0; i < n; ++i) {
        ids[i] = i;
        maxAge = Math.max(maxAge, ages[i]);
    }
    Arrays.sort(ids, (i, j) -> {
        if (scores[i] != scores[j]) return scores[i] - scores[j];
        return ages[i] - ages[j];
    });

    var maxSum = new int[maxAge + 1];
    for (int i : ids) {
        int age = ages[i];
        for (int j = 1; j <= age; ++j)
            maxSum[age] = Math.max(maxSum[age], maxSum[j]);
        maxSum[age] += scores[i];
        ans = Math.max(ans, maxSum[age]);
    }
    return ans;
}
```

### [1691. Maximum Height by Stacking Cuboids ](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/)

> 三维 LIS

```java
public int maxHeight(int[][] cuboids) {
    int n = cuboids.length;
    for (int[] c : cuboids) {
        Arrays.sort(c);
    }
    Arrays.sort(cuboids, (a, b) -> {
        if (a[0] != b[0]) return a[0] - b[0];
        if (a[1] != b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });

    int[] f = new int[n];
    int ans = 0;
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            // cuboids[j][0] <= cuboids[i][0] 成立
            if (cuboids[j][1] <= cuboids[i][1] &&
                cuboids[j][2] <= cuboids[i][2]) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += cuboids[i][2];
        ans = Math.max(ans, f[i]);
    }
    return ans;
}
```

