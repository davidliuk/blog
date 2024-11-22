# 二分搜索

核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False

**二值性**

### 使用条件

- 连续的解空间

  通常是连续的非负整数区间，通常表示：

  - 坐标或者索引，如数组中查找一个元素、隔板插入的空隙
  - 资源或者能力，如最小或最大的花费、最大可重复的子数组长度

- 某一函数/性质，在该解空间上，呈现两段，一边都为True，一边都为False

  二分搜索就是找到这两段临界的那两个节点，故分类为

  - 寻找符合条件的最左侧
  - 寻找符合条件的最右侧

### 算法步骤

<iframe width="800" height="600" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20java.util.function.IntPredicate%3B%0A%0Apublic%20class%20BinarySearch%20%7B%0A%20%20%20%20public%20static%20int%20searchFirst%28int%20start,%20int%20end,%20IntPredicate%20isValid%29%20%7B%0A%20%20%20%20%20%20%20%20while%20%28start%20%3C%20end%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20int%20mid%20%3D%20start%20%2B%20%28end%20-%20start%29%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28isValid.test%28mid%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%20%3D%20mid%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%20%3D%20mid%20%2B%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20return%20start%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20int%5B%5D%20nums%20%3D%20new%20int%5B%5D%7B1,%202,%203,%203,%203,%204,%205%7D%3B%0A%20%20%20%20%20%20%20%20searchFirst%280,%20nums.length%20-%201,%20%28mid%29%20-%3E%20nums%5Bmid%5D%20%3E%3D%203%29%3B%0A%20%20%20%20%7D%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=35&heapPrimitives=nevernest&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

### 算法模板

所有整数上的二分问题都可以套用到如下两种模板上：

#### 寻找符合条件的最小/前/左的

```java
int searchMin(int start, int end, IntPredicate isValid) {
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

1. `start < end`，这样在退出的时候，start==end，都是答案易于理解。
2. `end = mid`，因为是搜索最靠前的一个，所以在mid符合条件时，因为右侧的符合条件的都大于mid，所以mid右侧的都可以排除，只需要在[start, mid]找
3. `start = mid + 1`，mid不符合条件，本身可以排除，且结合第四条可以避免死循环
4. `mid = start + (end - start) / 2`，
   - 这样写是向下取整，由于在循环内部时start<end，这样可以保证mid小于end，这样end=mid可以缩小区间，start=mid+1也可以缩小区间避免死循环。
   - 这样写可以避免整数溢出
5. `searchMin`中mid向下取整，mid永远不会等于末尾，传入的end可作为哨兵

用途：

- 符合条件的最小值（如求最小花费）

#### 寻找符合条件的最大/后/右的

```java
int searchMax(int start, int end, IntPredicate isValid) {
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

1. `start < end`，这样在退出的时候，start==end，都是答案易于理解。
2. `start = mid`，因为是搜索最靠后的一个，所以在mid符合条件时，因为左侧的符合条件的都小于mid，所以mid左侧的都可以排除，只需要在[mid, end]找
3. `end = mid - 1`，mid不符合条件，本身可以排除，且结合第四条可以避免死循环
4. `mid = start + (end - start) / 2 + 1`，
   - 这样写是向上取整，由于在循环内部时start<end，这样可以保证mid大于start，这样start=mid可以缩小区间，end=mid - 1也可以缩小区间避免死循环。
   - 这样写可以避免整数溢出（当`start=0, end=Integer.MAX_VALUE`，如果在括号内+1进行向上取整会溢出）
5. `searchMax`中mid向上取整，mid永远不会等于开头，传入的start可作为哨兵

用途：

- 符合条件的最大值（如求最大价值）

### 寻找符合条件的浮点数

所有浮点数上的二分问题都可以归到如下模板：

```java
// 如 double eps = 1e-6;
double search(double start, double end, double eps, DoublePredicate isValid) {
    while (start + eps < end) {
        double mid = start + (end - start) / 2;
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

