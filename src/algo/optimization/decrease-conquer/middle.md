# Meet in the middle 折半



### Equal 类

lc1. 两数之和

```java
// 并返回它们的数组下标，只会对应一个答案
public int[] twoSum(int[] nums, int target) {
    int n = nums.length;
    Map<Integer, Integer> valToIndex = new HashMap<>();
    for (int i = 0; i < n; i++) {
        if (valToIndex.containsKey(target - nums[i])) {
            return new int[]{i, valToIndex.get(target - nums[i])};
        }
        valToIndex.put(nums[i], i);
    }

    return new int[0];
}
```

### Closest 类

需要`TreeMap`/`TreeSet`，

lc16. 最接近的三数之和

```java
public int twoSumClosest(int[] nums, int start, int target) {
    int delta = Integer.MAX_VALUE;
    TreeSet<Integer> seen = new TreeSet<>();
    for (int i = start; i < nums.length; i++) {
        int a = nums[i];
        Integer ceil = seen.ceiling(target - a);
        Integer floor = seen.floor(target - a);

        if (ceil != null && Math.abs(a + ceil - target) < Math.abs(delta)) {
            delta = a + ceil - target;
        }
        if (floor != null && Math.abs(a + floor - target) < Math.abs(delta)) {
            delta = a + floor - target;
        }
        seen.add(nums[i]);
    }

    return target + delta;
}
```

lc363. 矩形区域不超过 K 的最大数值和

```java
public int maxSumSubmatrix(int[][] mat, int target) {
    int m = mat.length, n = mat[0].length;
    int[][] preSum = new int[m + 1][n + 1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + mat[i - 1][j - 1];
        }
    }
    // 固定的是否为右边界
    boolean isRight = n > m;
    int ans = Integer.MIN_VALUE;
    for (int i = 0; i < (isRight ? m : n); i++) {
        for (int j = i; j < (isRight ? m : n); j++) {
            TreeSet<Integer> seen = new TreeSet<>();
            seen.add(0); // 二维前缀和，所以需要先存一个0
            for (int k = 0; k < (isRight ? n : m); k++) {
                int a = isRight ? preSum[j + 1][k + 1] - preSum[i][k + 1] : preSum[k + 1][j + 1] - preSum[k + 1][i];
                Integer b = seen.ceiling(a - target);
                if (b != null) {
                    ans = Math.max(ans, a - b);
                }
                seen.add(a);
            }
        }
    }
    return ans;
}
```

