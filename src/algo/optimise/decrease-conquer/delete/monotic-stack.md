# Monotic Stack

使用场景

- 场景 1：找最近的更大/更小元素 (Next Greater Element)：单调栈主要有两种：**单调递增栈**（找第一个更小的）和**单调递减栈**（找第一个更大的）。
  - [739. Daily Temperatures (每日温度)](https://leetcode.com/problems/daily-temperatures/)
- 场景 2：求以当前元素为最值的区间范围 (Histogram Area)：这是进阶用法。你需要知道如果你是最小值，你的“势力范围”能向左向右延伸多远。
  - [84. Largest Rectangle in Histogram (柱状图中最大的矩形)](https://leetcode.com/problems/largest-rectangle-in-histogram/)
  - [907. Sum of Subarray Minimums (子数组的最小值之和)](https://leetcode.com/problems/sum-of-subarray-minimums/)
- 场景 3：字典序最小/最大子序列 (Lexicographical)：这种通常涉及到“移除 k 个数字”或者“保留顺序构建最小数”。
  - [402. Remove K Digits (移掉 K 位数字)](https://leetcode.com/problems/remove-k-digits/)
  - [316. Remove Duplicate Letters (去除重复字母)](https://leetcode.com/problems/remove-duplicate-letters/)

可以用模板，也可以不用，有的时候需要存额外信息，就不用用这个模板

单调栈模板

```java
Deque<Integer> stack = new ArrayDeque<>();
int[] res = new int[nums.length];

for (int i = 0; i < nums.length; i++) {
    // 只要栈不空，且当前元素比栈顶大 -> 说明当前元素就是栈顶的“Next Greater”
    while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
        int idx = stack.pop();
        res[idx] = nums[i]; // 记录答案
    }
    stack.push(i); // 当前元素入栈，等待它的Next Greater出现
}
```

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

### [1944. Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)

```java
public int[] canSeePersonsCount(int[] heights) {
    int n = heights.length;

    int[] res = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();
    for (int i = 0; i < n; i++) {
        int h = heights[i];
        while (!stack.isEmpty() && heights[stack.peek()] < h) {
            res[stack.pop()]++;
        }
        if (!stack.isEmpty()) {
            res[stack.peek()]++;
        }
        stack.push(i);
    }
    
    return res;
}
```

[3542. Minimum Operations to Convert All Elements to Zero](https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/)

You are given an array `nums` of size `n`, consisting of **non-negative** integers. Your task is to apply some (possibly zero) operations on the array so that **all** elements become 0.

In one operation, you can select a subarray `[i, j]` (where `0 <= i <= j < n`) and set all occurrences of the **minimum** **non-negative** integer in that subarray to 0.

Return the **minimum** number of operations required to make all elements in the array 0.

```java
public int minOperations(int[] nums) {
    Deque<Integer> incr = new ArrayDeque<>();
    int res = 0;
    for (int num : nums) {
        while (!incr.isEmpty() && incr.peek() > num) {
            incr.pop();
        }
        if (num == 0) {
            continue;
        }
        if (incr.isEmpty() || incr.peek() < num) {
            res++;
            incr.push(num);
        }
    }
    return res;
}
```

