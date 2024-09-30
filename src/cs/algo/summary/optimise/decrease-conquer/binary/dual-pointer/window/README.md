# 滑窗双指针

核心：维护窗口内部的一个性质，使该窗口符合给定的条件

如窗口内元素的和小于x

约束分类

- 端点
- 频次
- 累积

窗口分类

- 定长窗口
- 变长窗口

目标分类

- 最大
- 最小
- 子串数量
- 点对数量

### 核心模板

window始终维护`[i, j]`之间的一个性质

```java
void windowPtr(
    int start, int end, int len,
    BiPredicate<Integer, Integer> isValid,
    IntConsumer in, IntConsumer out,
    Optional<BiConsumer<Integer, Integer>> prev,
    Optional<BiConsumer<Integer, Integer>> next
) {
    
    // [i, j]版本，这种模板也方便处理单纯的数对问题
    for (int i = start, j = i + len - 1; j < end; j++) {
        in.accept(j);
        while (i < j - len + 1 && !isValid.test(i, j)) {
            next.ifPresent(consumer -> consumer.accept(i, j));
            out.accept(i);
            i++;
        }
        prev.ifPresent(consumer -> consumer.accept(i, j));
    }
}
```

约束

- 窗口长度
- 元素种类
- 元素频率

---

## 约束类

「当确定了窗口内所包含的字符数量时，区间重新具有了二段性质」。这是本题的滑动窗口解法和迄今为止做的滑动窗口题目的最大不同，本题需要手动增加限制，即限制窗口内字符种类。

【补充】这里解释一下「为什么需要先枚举 26 种可能性」：

首先我们知道「答案子串的左边界左侧的字符以及右边界右侧的字符一定不会出现在子串中，否则就不会是最优解」。

但如果我们只从该性质出发的话，朴素解法应该是使用一个滑动窗口，不断的调整滑动窗口的左右边界，使其满足「左边界左侧的字符以及右边界右侧的字符一定不会出现在窗口中」，这实际上就是双指针解法，但是如果不先敲定（枚举）出答案所包含的字符数量的话，这里的双指针是不具有单调性的。

换句话说，只利用这一性质是没法完成逻辑的。

这时候我们面临的问题是：性质是正确的，但是还无法直接利用。

因此我们需要先利用字符数量有限性（可枚举）作为切入点，使得「答案子串的左边界左侧的字符以及右边界右侧的字符一定不会出现在子串中」这一性质在双指针的实现下具有单调性。也就是题解说的「让区间重新具有二段性质」。

然后遍历 26 种可能性（答案所包含的字符种类数量），对每种可能性应用滑动窗口（由上述性质确保正确），可以得到每种可能性的最大值（局部最优），由所有可能性的最大值可以得出答案（全局最优）。

```java
public int partition(int[] nums, int start, int end) {
    int left = start, right = end;
    // 随机化
    swap(nums, start, new Random().nextInt(end - start + 1) + start);
    int pivot = nums[start];
    
    while (left < right) {
        // 必须先从右往左找，
        while (left < right && nums[right] > pivot) {
            right--;
        }
        // 一个大于，一个小于等于，这个<=来让start这个位置保护起来
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        swap(nums, left, right);
    }
    swap(nums, start, left);
    return start;
}

public int partition(int[] nums, int i, int j) {
    int pivot = nums[i];
    while (i < j) {
        // 必须先从右往左找，
        while (i < j && nums[j] > pivot) {
            j--;
        }
        // 一个大于，一个小于等于，这个<=来让start这个位置保护起来
        while (i < j && nums[i] <= pivot) {
            i++;
        }
        swap(nums, i, j);
    }
    swap(nums, i, j);
    return i;
}

int partition(int[] nums, int i, int j, int p) {
    int pivot = nums[p];
    swap(nums, p, j);
    p = i;
    for (; i < j; i++) {
        if (nums[i] > pivot) {
            swap(nums, i, p++);
        }
    }
    swap(nums, j, p);
    return p;
}
```

