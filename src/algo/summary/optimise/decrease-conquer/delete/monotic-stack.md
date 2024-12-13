# 单调栈

可以用模板，也可以不用，有的时候需要存额外信息，就不用用这个模板

单调栈模板

```java
class MonoticStack<Integer> {
    Deque<Integer> stack = new ArrayDeque<>();
    BiPredicate<Integer, Integer> isValid;
    Optional<BiConsumer<Integer, Integer>> prev, next;

    public MonoticStack(BiPredicate<Integer, Integer> isValid) {
        this.isValid = isValid;
        stack.push(-1);
    }

    public void push(int i) {
        while (stack.peek() != -1 && !isValid.test(stack.peek(), i)) {
            next.ifPresent(f -> f.accept(stack.pop(), i));
        }
        prev.ifPresent(f -> f.accept(stack.peek(), i));
        stack.push(n);
    }
    
    public int max() {
        return stack.peekLast();
    }
}
```

[例题四合一](https://leetcode.cn/problems/create-maximum-number/solutions/297892/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-7/)

- [316. 去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/)（困难）
- [321. 拼接最大数](https://leetcode-cn.com/problems/create-maximum-number/)（困难）
- [402. 移掉 K 位数字](https://leetcode-cn.com/problems/remove-k-digits/)（中等）
- [1081. 不同字符的最小子序列](https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/)（中等）

### 柱状图中最大的矩形

```java
public int largestRectangleArea(int[] heights) {
    int n = heights.length;

    var stack = new ArrayDeque<Integer>();
    stack.push(-1);

    int maxArea = 0;
    for (int i = 0; i < n; i++) {
        while (stack.peek() != -1 && heights[stack.peek()] > heights[i]) {
            maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack.peek() - 1));
        }
        stack.push(i);
    }
    while (stack.peek() != -1) {
        maxArea = Math.max(maxArea, heights[stack.pop()] * (n - stack.peek() - 1));
    }

    return maxArea;
}
```



### 每日温度

```java
int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;

    int[] ans = new int[n];
    var stack = new ArrayDeque<Integer>();
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
            ans[stack.peek()] = i - stack.pop();
        }
        stack.push(i);
    }

    return ans;
}
```



### 最大二叉树

```java
TreeNode constructMaximumBinaryTree(int[] nums) {
    int n = nums.length;
    TreeNode[] nodes = new TreeNode[n];

    var stack = new ArrayDeque<Integer>();
    for (int i = 0; i < n; i++) {
        nodes[i] = new TreeNode(nums[i]);
        while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
            nodes[i].left = nodes[stack.pop()];
        }
        if (!stack.isEmpty()) {
            nodes[stack.peek()].right = nodes[i];
        }
        stack.push(i);
    }
    
    return nodes[stack.peekLast()];
}
```

