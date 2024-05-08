# 滑窗双指针

核心：维护窗口内部的组成的一个性质，使该窗口复合一个给定的条件，如窗口内元素的和小于x

### 核心模板

window始终维护`[left, right]`之间的一个性质

```java
void windowPtr(
    int start, int end,
    BiPredicate<Integer, Integer> isValid,
    IntConsumer in, IntConsumer out,
    BiConsumer<Integer, Integer> prev,
    BiConsumer<Integer, Integer> next
) {
    // [left, right]版本，这种模板也方便处理单纯的数对问题
    int left = start, right = start; 
    while (right < end) {
        in.accept(right);
        while (left <= right && !isValid.test(left, right)) {
            if (next != null) {
                next.accept(left, right);
            }
            out.accept(left);
            left++;
        }
        if (prev != null) {
            prev.accept(left, right);
        }
        right++;
    }
}
```



特殊类

「当确定了窗口内所包含的字符数量时，区间重新具有了二段性质」。这是本题的滑动窗口解法和迄今为止做的滑动窗口题目的最大不同，本题需要手动增加限制，即限制窗口内字符种类。

【补充】这里解释一下「为什么需要先枚举 26 种可能性」：

首先我们知道「答案子串的左边界左侧的字符以及右边界右侧的字符一定不会出现在子串中，否则就不会是最优解」。

但如果我们只从该性质出发的话，朴素解法应该是使用一个滑动窗口，不断的调整滑动窗口的左右边界，使其满足「左边界左侧的字符以及右边界右侧的字符一定不会出现在窗口中」，这实际上就是双指针解法，但是如果不先敲定（枚举）出答案所包含的字符数量的话，这里的双指针是不具有单调性的。

换句话说，只利用这一性质是没法完成逻辑的。

这时候我们面临的问题是：性质是正确的，但是还无法直接利用。

因此我们需要先利用字符数量有限性（可枚举）作为切入点，使得「答案子串的左边界左侧的字符以及右边界右侧的字符一定不会出现在子串中」这一性质在双指针的实现下具有单调性。也就是题解说的「让区间重新具有二段性质」。

然后遍历 26 种可能性（答案所包含的字符种类数量），对每种可能性应用滑动窗口（由上述性质确保正确），可以得到每种可能性的最大值（局部最优），由所有可能性的最大值可以得出答案（全局最优）。

