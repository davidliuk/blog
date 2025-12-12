# K Pointers

多路归并

- 分治法
- 小根堆

经典问题：

- 多路归并（k-way merge）

- 丑数问题

- 最小区间

## 分治法

### [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

```java
public ListNode mergeKLists(ListNode[] lists) {
    int n = lists.length;
    if (n == 0) return null;

    for (int step = 1; step < n; step <<= 1) {
        for (int i = 0; i + step < n; i += step << 1) {
            lists[i] = merge(lists[i], lists[i + step]);
        }
    }
    return lists[0];
}
```

### [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)

```java
public void sortArray(int[] arr) {
    int n = arr.length;
    int[] temp = new int[n];

    for (int step = 1; step < n; step <<= 1) {
        for (int left = 0; left + step < n; left += step << 1) {
            int mid = left + step - 1;
            int right = Math.min(left + (step << 1) - 1, n - 1);

            merge(arr, temp, left, mid, right);
        }
    }
}
```

### Merge K Sorted Intervals

```java
int[][] mergeIntervalLists(int[][][] lists) {
    int n = lists.length;
    if (n == 0) return new int[0][0];

    // step = 1, 2, 4, 8 ...
    for (int step = 1; step < n; step <<= 1) {
        for (int i = 0; i + step < n; i += step << 1) {
            lists[i] = mergeTwoIntervals(lists[i], lists[i + step]);
        }
    }
    return lists[0];
}
```

## 小根堆

用堆来存储K指针，每次取权值最大/最小的指针，更新答案并把该指针后移并放入堆中

每次移动某一个最优的指针，在任意n轮操作时，堆中的元素始终是这k个序列中n轮操作时的最优切面（比较抽象但是可以通过最小区间问题来理解）

队列中

### [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

You are given two integer arrays `nums1` and `nums2` sorted in **non-decreasing order** and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Return *the* `k` *pairs* `(u1, v1), (u2, v2), ..., (uk, vk)` *with the smallest sums*.

```java
// 使用 record 定义堆中的元素，包含 sum 以避免重复计算
private record Node(int sum, int i, int j) implements Comparable<Node> {
    @Override
    public int compareTo(Node other) {
        return Integer.compare(this.sum, other.sum);
    }
}

public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
    List<List<Integer>> ans = new ArrayList<>();
    int m = nums1.length;
    int n = nums2.length;

    // 边界检查
    if (m == 0 || n == 0 || k == 0) {
        return ans;
    }

    // 优先级队列
    PriorityQueue<Node> minHeap = new PriorityQueue<>();

    // 优化点 1：只初始化 nums1 的前 k 个元素与 nums2[0] 的组合
    // 这样避免了后续复杂的去重逻辑
    // 注意：如果 m > k，我们只需要前 k 行，因为第 k+1 行的最小值肯定比前 k 行大
    for (int i = 0; i < Math.min(m, k); i++) {
        minHeap.offer(new Node(nums1[i] + nums2[0], i, 0));
    }

    // 主循环
    while (k-- > 0 && !minHeap.isEmpty()) {
        Node top = minHeap.poll();
        ans.add(List.of(nums1[top.i], nums2[top.j]));

        // 优化点 2：出队 (i, j) 后，只将 (i, j+1) 入队
        // 这种策略保证了每个节点只被访问一次，无需 visited set
        if (top.j + 1 < n) {
            minHeap.offer(new Node(nums1[top.i] + nums2[top.j + 1], top.i, top.j + 1));
        }
    }

    return ans;
}
```

