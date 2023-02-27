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





