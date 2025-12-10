# Monotonic Stack

可以用模板，也可以不用，有的时候需要存额外信息，就不用用这个模板

单调栈模板

```java
class MonotonicStack<Integer> {
    Deque<Integer> stack = new ArrayDeque<>();
    BiPredicate<Integer, Integer> isValid;
    Optional<BiConsumer<Integer, Integer>> prev, next;

    public MonotonicStack(BiPredicate<Integer, Integer> isValid) {
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

[移除问题](https://leetcode.cn/problems/create-maximum-number/solutions/297892/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-7/)

## 前/后第一个更大/小的位置

前/后**最近的**一个更大/小的位置：单调栈

```java
public int largestRectangleArea(int[] heights) {
    int n = heights.length;
    int area = 0;
    // 单调递增栈
    Deque<Integer> stack = new ArrayDeque<>();
    stack.push(-1);
    for (int i = 0; i < n; i++) {
        while (stack.peek() != -1 && heights[stack.peek()] >= heights[i]) {
            // 左右两个小于栈顶的元素
            area = Math.max(area, heights[stack.pop()] * (i - stack.peek() - 1));
        }
        stack.push(i);
    }
    while (stack.peek() != -1) {
        area = Math.max(area, heights[stack.pop()] * (n - stack.peek() - 1));
    }
    return area;
}
```

前/后**最远的**一个更大/小的位置：后缀最值+双指针

```java
public int ansRamp(int[] nums) {
    int n = nums.length;
    int[] sufMax = new int[n];
    sufMax[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        sufMax[i] = Math.max(sufMax[i + 1], nums[i]);
    }

    int ans = 0;
    for (int i = 0, j = 0; j < n; j++) {
        while (i < j && nums[i] > sufMax[j]) {
            i++;
        }
        ans = Math.max(ans, j - i);
        // if (nums[i] < nums[j])
        // left[j] = i
    }

    return ans;
}
```
