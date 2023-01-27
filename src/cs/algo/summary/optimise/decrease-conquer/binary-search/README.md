# 二分搜索

核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False



### 使用条件

- 连续的解空间

  往往是一个连续的整数区间，通常表示：

  - 坐标位置或索引，如数组中查找一个元素、隔板插入的空隙
  - 一种资源或者能力，如最小或最大的花费、最大重复的子数组长度

- 对于一个函数，在该解空间上，一边为True，一边为False，我们二分搜索就是找到这两段临界的那两个节点，故分类为寻找符合条件的最左侧的，和寻找符合条件的最右侧的这两种情况



### 算法模板

所有整数上的二分问题都可以套用到如下两种模板上：

#### 寻找符合条件的最靠前的

```java
int searchFirst(int start, int end, IntPredicate isValid) {
    while (start < end) {
        int mid = start + (end - start) / 2;
        if (isValid.test(mid)) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
}
```

要点：

1. `start < end`，这样在退出的时候，start=end，都是我们的答案易于理解。
2. `end = mid`，因为是搜索最靠前的一个，所以在mid符合条件时，因为右侧的符合条件的都大于mid，所以mid右侧的都可以排除，只需要在[start, mid]找
3. `start = mid + 1`，mid不符合条件，本身可以排出，且这样写结合第四条可以避免死循环
4. `mid = start + (end - start) / 2`，
   - 这样写可以避免整数溢出
   - 这样写是向下取整，由于在循环内部时start<end，这样可以保证mid小于end，这样end=mid可以缩小区间范围，start=mid+1也可以缩小区间范围避免死循环。

用途：

- 符合条件的最小值（如求最小花费）



#### 寻找符合条件的最靠后的

```java
int searchLast(int start, int end, IntPredicate isValid) {
    while (start < end) {
        int mid = start + (end - start) / 2 + 1;
        if (isValid.test(mid)) {
            start = mid;
        } else {
            end = mid - 1;
        }
    }

    return start;
}
```

要点：

1. `start < end`，这样在退出的时候，start=end，都是我们的答案易于理解。
2. `start = mid`，因为是搜索最靠后的一个，所以在mid符合条件时，因为左侧的符合条件的都小于mid，所以mid左侧的都可以排除，只需要在[mid, end]找
3. `end = mid - 1`，mid不符合条件，本身可以排出，且这样写结合第四条可以避免死循环
4. `mid = start + (end - start) / 2 + 1`，
   - 这样写是向上取整，由于在循环内部时start<end，这样可以保证mid大于start，这样start=mid缩小区间范围，end=mid - 1可以也可以缩小区间范围避免死循环。
   - 这样写可以避免整数溢出（有的时候start=0，end=Int的最大值，如果在括号内+1进行向上取整会溢出）

用途：

- 符合条件的最大值（如求最大价值）



所有浮点数上的二分问题都可以归到如下模板：

### 寻找符合条件的浮点数

```java
// 如 double eps = 1e-6;
int searchFirst(double start, double end, double eps, DoublePredicate isValid) {
    while (start + eps < end) {
        int mid = start + (end - start) / 2;
        if (isValid.test(mid)) {
            end = mid;
        } else {
            start = mid;
        }
    }

    return start;
}
```



用途，在给定精度的情况下：

- 求平方根
- 求立方根



