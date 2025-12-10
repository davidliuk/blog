# Quick Sort 快速排序

先序遍历

应用

1. partition
2. quick select

## Partition

- 划分型

  单纯把数组划分成两段：一半大于等于，一半小于等于 pivot

- 寻找型

  在划分数组的同时，找到 pivot 元素最终位置

优化：

- 三路划分

  将数组划分成：`<, =, >` pivot 三段，并找到 pivot 段的两个端点

  优势：在重复元素较多时，可以更快的排序完毕，一次可以同时处理掉很多位置

- 多枢划分

  如，Java 快排源码，使用了两个 Pivot 进行划分

[三种 partition 参考](https://wenku.baidu.com/view/2cc7720e4873f242336c1eb91a37f111f1850db1.htm)

[Lomuto Partition](https://blog.csdn.net/qq_42902997/article/details/115773598)

### horse 划分

划分型，无法找到 pivot 元素最终位置，且无法优化达到这个目的。Hoare 分区不保证 nums[p] 是排好序后的为止

```java
// quick sort horse partition
public int partition(int[] nums, int l, int r) {
    int pivot = nums[l], i = l - 1, j = r + 1;
    while (i < j) {
        do i++; while (nums[i] < pivot);
        do j--; while (nums[j] > pivot);
        if (i < j) swap(nums, i, j);
    }
    return j;
}
```

### lomato 划分

寻找型，单向遍历，可以改写成链表 partition

```java
// [l, i)内 <= pivot
public int partition(int[] nums, int l, int r) {
    int pivot = nums[r], i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }
    swap(nums, i, r);
    return i;
}
```

### 挖坑法

挖坑法

```java
int partition(int[] nums, int start, int end) {
    int i = start, j = end;
    int pivot = nums[start];

    while (i < j) {
        while (i < j && nums[j] >= pivot) j--;
        while (i < j && nums[i] <= pivot) i++;
        swap(nums, i, j);
    }
    swap(nums, start, i);
    return i;
}
```

### 三路划分

寻找型，找到了一个等于 pivot 的区间，速度可以快 6 倍

```java
// quick sort three way partition
int[] partition(int[] nums, int start, int end) {
    int pivot = nums[(end - start) / 2 + start];
    int i = start;
    while (i <= end) {
        if (nums[i] > pivot) swap(nums, i, end--);
        else if (nums[i] < pivot) swap(nums, i++, start++);
        else i++;
    }
    return new int[]{start, end};
}
```

```java
// 写法一：二重循环，三指针
public int[] partition(int[] nums, int start, int end) {
    int pivot = nums[(end - start) / 2 + start];
    for (int i = start; i <= end; i++) {
        // 把左侧比p大的放到右边，这样写确保右侧换过来的那个<=p
        while (i <= end && nums[i] > pivot) swap(nums, i, end--);
        if (nums[i] < pivot) swap(nums, i, start++);
    }
    return new int[]{start, end};
}
```

### 多枢划分

dualPivotQuickSort

```java
// write a dualPivotQuickSort partition
// [l, i) <= pivot1
// [i, k) >= pivot1 && <= pivot2
// [k, j) unknown
// [j, r] >= pivot2
public void dualPivotQuickSort(int[] nums, int l, int r) {
    if (l >= r) return;
    int pivot1 = nums[l], pivot2 = nums[r];
    int i = l, k = l + 1, j = r;
    while (k < j) {
        if (nums[k] < pivot1) {
            i++;
            swap(nums, i, k);
            k++;
        } else if (nums[k] >= pivot1 && nums[k] <= pivot2) {
            k++;
        } else {
            while (nums[--j] > pivot2) {
                if (j <= k) break;
            }
            if (nums[j] >= pivot1 && nums[j] <= pivot2) {
                swap(nums, k, j);
                k++;
            } else {
                i++;
                swap(nums, j, k);
                swap(nums, i, k);
                k++;
            }
        }
    }
    swap(nums, l, i);
    swap(nums, r, j);
    dualPivotQuickSort(nums, l, i - 1);
    dualPivotQuickSort(nums, i + 1, j - 1);
    dualPivotQuickSort(nums, j + 1, r);
}
```

## Quick Select

### [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array `nums` and an integer `k`, return _the_ `kth` _largest element in the array_.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can you solve it without sorting?

```java
public int findKthLargest(int[] nums, int k) {
    if (nums == null || nums.length < k) {
        return -1;
    }

    int n = nums.length;
    int i = 0, j = n - 1;
    while (i < j) {
        int[] p = partition(nums, i, j);
        if (p[0] <= n - k && n - k <= p[1]) return nums[n - k];
        else if (p[0] > n - k) j = p[0] - 1;
        else i = p[1] + 1;
    }

    return nums[n - k];
}
```

```java
public int findKthLargest(int[] nums, int k) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int n = nums.length;

    return quickSelect(nums, 0, n - 1, n - k);
}
int quickSelect(int[] nums, int i, int j, int k) {
    if (i == j) {
        return nums[i];
    }

    int[] p = partition(nums, i, j);
    if (k < p[0]) {
        return quickSelect(nums, i, p[0] - 1, k);
    }
    if (k > p[1]) {
        return quickSelect(nums, p[1] + 1, j, k);
    }

    return nums[p[0]];
}

int[] partition(int[] nums, int l, int r) {
    int pivot = nums[l + rand.nextInt(r - l + 1)];
    int i = l;
    while (i <= r) {
        if (nums[i] > pivot) swap(nums, i, r--);
        else if (nums[i] < pivot) swap(nums, i++, l++);
        else i++;
    }
    return new int[]{l, r};
}


private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```

### [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.
