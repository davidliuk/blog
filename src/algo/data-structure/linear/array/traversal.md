# Traversal

### [163. Missing Ranges](https://leetcode.com/problems/missing-ranges/)

You are given an inclusive range `[lower, upper]` and a **sorted unique** integer array `nums`, where all elements are within the inclusive range.

A number `x` is considered **missing** if `x` is in the range `[lower, upper]` and `x` is not in `nums`.

Return *the **shortest sorted** list of ranges that **exactly covers all the missing numbers***. That is, no element of `nums` is included in any of the ranges, and each missing number is covered by one of the ranges.

```java
public List<List<Integer>> findMissingRanges(
        int[] nums,
        int lower,
        int upper) {
    int n = nums.length;
    List<List<Integer>> ranges = new ArrayList<>();

    // Handle empty array case
    if (n == 0) {
        ranges.add(Arrays.asList(lower, upper));
        return ranges;
    }

    // Check for any missing numbers between the lower bound and nums[0].
    if (lower < nums[0]) {
        ranges.add(Arrays.asList(lower, nums[0] - 1));
    }

    // Check for any missing numbers between successive elements of nums.
    for (int i = 0; i < n - 1; i++) {
        // Skip if consecutive or same numbers
        if (nums[i + 1] <= nums[i] + 1) {
            continue;
        }
        ranges.add(Arrays.asList(nums[i] + 1, nums[i + 1] - 1));
    }

    // Check for any missing numbers between the last element of nums and the upper bound.
    if (upper > nums[n - 1]) {
        ranges.add(Arrays.asList(nums[n - 1] + 1, upper));
    }

    return ranges;
}
```

### [681. Next Closest Time](https://leetcode.com/problems/next-closest-time/)

Given a `time` represented in the format `"HH:MM"`, form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, `"01:34"`, `"12:09"` are all valid. `"1:34"`, `"12:9"` are all invalid.

```java
public String nextClosestTime(String time) {
    int start = 60 * Integer.parseInt(time.substring(0, 2));
    start += Integer.parseInt(time.substring(3));
    int ans = start;
    int elapsed = 24 * 60;
    Set<Integer> allowed = new HashSet();
    for (char c : time.toCharArray())
        if (c != ':') {
            allowed.add(c - '0');
        }

    for (int h1 : allowed)
        for (int h2 : allowed) {
            if (h1 * 10 + h2 >= 24) continue;
            for (int m1 : allowed)
                for (int m2 : allowed) {
                    if (m1 * 10 + m2 >= 60) continue;
                    int cur = 60 * (h1 * 10 + h2) + (m1 * 10 + m2);
                    int candElapsed = Math.floorMod(cur - start, 24 * 60);
                    if (0 < candElapsed && candElapsed < elapsed) {
                        ans = cur;
                        elapsed = candElapsed;
                    }
                }
        }

    return String.format("%02d:%02d", ans / 60, ans % 60);
}
```

