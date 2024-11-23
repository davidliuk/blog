# 快速排序

先序遍历

应用

1. partition
2. quick select

## Partition

- 划分型
  
  单纯把数组划分成两段：一半大于等于，一半小于等于 pivot
- 寻找型
  
  在划分数组的同时，找到pivot元素最终位置

优化：

- 三路划分
  
  将数组划分成：`<, =, >` pivot三段，并找到pivot段的两个端点
  
  优势：在重复元素较多时，可以更快的排序完毕，一次可以同时处理掉很多位置
- 多枢划分
  
  如，Java快排源码，使用了两个Pivot进行划分

[三种partition参考](https://wenku.baidu.com/view/2cc7720e4873f242336c1eb91a37f111f1850db1.htm)

[Lomuto Partition](https://blog.csdn.net/qq_42902997/article/details/115773598)

### lomato划分

寻找型

```java
// quick sort lomato partition
// [l, i)内 <= pivot
public int partition(int[] nums, int l, int r) {
    int x = nums[r], i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= x) {
            swap(nums, i, j);
            i++;
        }
    }
    swap(nums, i, r);
    return i;
}
```

### horse划分
划分型（仅适合此），无法找到pivot元素最终位置，且无法优化达到这个目的
```java
// quick sort horse partition
public int partition(int[] nums, int l, int r) {
    int x = nums[l], i = l - 1, j = r + 1;
    while (i < j) {
        do i++; while (nums[i] < x);
        do j--; while (nums[j] > x);
        if (i < j) swap(nums, i, j);
    }
    return j;
}
```

### 经典划分
寻找型
```java
public int partition(int[] nums, int start, int end) {
    int left = start, right = end;
    int pivot = nums[start];

    while (left < right) {
        while (left < right && nums[right] >= pivot) right--;
        while (left < right && nums[left] <= pivot) left++;
        swap(nums, left, right);
    }
    swap(nums, start, left);
    return left;
}
```

### 三路划分

寻找型，甚至找到了一个区间，速度可以快6倍

```java
// quick sort three way partition
public int[] partition(int[] nums, int start, int end) {
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
