# Top K

Dual Queeu or Dual TreeSet

- Queue
- TreeSet

### [3321. Find X-Sum of All K-Long Subarrays II](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/)

You are given an array `nums` of `n` integers and two integers `k` and `x`.

The **x-sum** of an array is calculated by the following procedure:

- Count the occurrences of all elements in the array.
- Keep only the occurrences of the top `x` most frequent elements. If two elements have the same number of occurrences, the element with the **bigger** value is considered more frequent.
- Calculate the sum of the resulting array.

**Note** that if an array has less than `x` distinct elements, its **x-sum** is the sum of the array.

Return an integer array `answer` of length `n - k + 1` where `answer[i]` is the **x-sum** of the subarray `nums[i..i + k - 1]`.

```java
record Pair(int f, int v) {}

private static final Comparator<Pair> DESC = (a, b) -> {
    if (a.f != b.f)
        return Integer.compare(b.f, a.f);
    return Integer.compare(b.v, a.v);
};

private Map<Integer, Integer> cnt;
private TreeSet<Pair> top, rest;
private long topSum;

private void pull(int v, int f) {
    Pair key = new Pair(f, v);
    if (top.remove(key)) {
        topSum -= 1L * f * v;
    } else {
        rest.remove(key);
    }
}

private void pushToTop(int v, int f) {
    top.add(new Pair(f, v));
    topSum += 1L * f * v;
}

private void insertVal(int v, int x) {
    int f = cnt.getOrDefault(v, 0);
    if (f > 0)
        pull(v, f);
    f += 1;
    cnt.put(v, f);
    pushToTop(v, f);
    if (top.size() > x) {
        Pair worst = top.last();
        top.remove(worst);
        topSum -= 1L * worst.f * worst.v;
        rest.add(worst);
    }
}

private void eraseVal(int v, int x) {
    Integer F = cnt.get(v);
    if (F == null || F == 0)
        return;
    int f = F;
    pull(v, f);
    f -= 1;
    if (f == 0)
        cnt.remove(v);
    else {
        cnt.put(v, f);
        rest.add(new Pair(f, v));
    }
    if (top.size() < x && !rest.isEmpty()) {
        Pair best = rest.first();
        rest.remove(best);
        top.add(best);
        topSum += 1L * best.f * best.v;
    }
}

public long[] findXSum(int[] nums, int k, int x) {
    int n = nums.length;
    long[] ans = new long[n - k + 1];
    cnt = new HashMap<>(Math.max(16, n * 2));
    top = new TreeSet<>(DESC);
    rest = new TreeSet<>(DESC);
    topSum = 0;

    for (int i = 0; i < k; ++i)
        insertVal(nums[i], x);
    ans[0] = topSum;

    for (int i = k; i < n; ++i) {
        eraseVal(nums[i - k], x);
        insertVal(nums[i], x);
        ans[i - k + 1] = topSum;
    }
    return ans;
}
```

