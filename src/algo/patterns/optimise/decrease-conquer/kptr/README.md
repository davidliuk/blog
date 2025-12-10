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
