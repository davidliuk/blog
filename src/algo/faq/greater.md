# 前/后一个更大/小的位置

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

