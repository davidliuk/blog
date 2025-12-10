# Monotonic Queue

单调队列模板

```java
class MonotonicDeque extends ArrayDeque<Integer> {
    BiPredicate<Integer, Integer> isValid;
    Optional<BiConsumer<Integer, Integer>> prev, next;

    public MonotonicDeque(BiPredicate<Integer, Integer> isValid) {
        this.isValid = isValid;
    }

    public void push(int n) {
        while (!isEmpty() && !isValid.test(peek(), n)) {
            next.ifPresent(f -> f.accept(pop(), n));
        }
        prev.ifPresent(f -> f.accept(peek(), n));
        super.push(n);
    }
    
    public int max() {
        return peekLast();
    }
    
    public void pollLast(int n) {
        if (n == max()) {
            pollLast();
        }
    }
}
```

可以用模板，也可以不用，有的时候需要存额外信息，就不用用这个模板

[例题四合一](https://leetcode.cn/problems/create-maximum-number/solutions/297892/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-7/)

- [316. 去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/)（困难）
- [321. 拼接最大数](https://leetcode-cn.com/problems/create-maximum-number/)（困难）
- [402. 移掉 K 位数字](https://leetcode-cn.com/problems/remove-k-digits/)（中等）
- [1081. 不同字符的最小子序列](https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/)（中等）

### 字典序最大的子序列

[牛客](https://ac.nowcoder.com/acm/contest/20960/1036)

给定字符串s，s只包含小写字母，请求出字典序最大的子序列。

请通过代码实现题目，过程中的输入输出处理方式请参考题目输入输出描述或查看语言环境详情。

