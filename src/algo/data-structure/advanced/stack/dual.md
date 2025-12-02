# Dual Stack

## Calculator

### [772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, `'+'`, `'-'`, `'*'`, `'/'` operators, and open `'('` and closing parentheses `')'`. The integer division should **truncate toward zero**.

You may assume that the given expression is always valid. All intermediate results will be in the range of `[-231, 231 - 1]`.

**Note:** You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

```java

Map<Character, Integer> priorityMap = new HashMap<>() {
    {
        put('(', 0);
        put('-', 1);
        put('+', 1);
        put('*', 2);
        put('/', 2);
        //     put('%', 2);
        //     put('^', 3);
    }
};

public int calculate(String s) {
    // 将所有的空格去掉
    s = s.replaceAll(" ", "");
    char[] cs = s.toCharArray();
    int n = s.length();
    // 存放所有「非数字以外」的操作
    Deque<Character> ops = new ArrayDeque<>();
    // 存放所有数字的栈
    Deque<Integer> nums = new ArrayDeque<>();
    // 防止第一个数为负数，先往 nums 填充 0，
    // 如果没用上，最终也不会影响因为在栈底
    nums.push(0);
    for (int i = 0; i < n; i++) {
        char c = cs[i];
        if (c == '(') {
            // 是左括号，直接进入
            ops.push(c);
        } else if (c == ')') {
            // 是右括号，计算到最近一个左括号为止
            while (!ops.isEmpty() && ops.peek() != '(') {
                evaluate(nums, ops.pop());
            }
            if (ops.isEmpty()) {
                // 说明括号匹配不上
                return Integer.MAX_VALUE;
            }
            // 把左括号弹出
            ops.pop();
        } else if (Character.isDigit(c)) {
            int num = 0;
            // 连续数字整体取出
            while (i < n && Character.isDigit(cs[i])) {
                num = num * 10 + (cs[i++] - '0');
            }
            i--;
            nums.push(num);
        } else {
            // 前一位如果是运算符的话，说明当前运算符是+-号
            // 前面填充零
            if (i > 0 && (cs[i - 1] == '(' || cs[i - 1] == '+' || cs[i - 1] == '-')) {
                nums.push(0);
            }
            // 单调递增栈，把能运算的先运算
            while (!ops.isEmpty() && priorityMap.get(ops.peek()) >= priorityMap.get(c)) {
                evaluate(nums, ops.pop());
            }
            ops.push(c);
        }
    }
    // 将剩余的计算完
    while (!ops.isEmpty()) {
        evaluate(nums, ops.pop());
    }

    return nums.peek();
}

void evaluate(Deque<Integer> nums, char op) {
    if (nums.size() < 2) {
        return;
    }
    int b = nums.pop(), a = nums.pop();
    int ans = 0;
    switch (op) {
        case '+':
            ans = a + b;
            break;
        case '-':
            ans = a - b;
            break;
        case '*':
            ans = a * b;
            break;
        case '/':
            ans = a / b;
            break;
        case '^':
            ans = (int) Math.pow(a, b);
            break;
        case '%':
            ans = a % b;
            break;
    }

    nums.push(ans);
}
```

```java
public int calculate(String s) {
    Stack<String> stack = new Stack<>();
    String curr = "";
    char previousOperator = '+';
    s += "@";
    Set<String> operators = new HashSet<>(Arrays.asList("+", "-", "*", "/"));

    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            curr += c;
        } else if (c == '(') {
            stack.push("" + previousOperator); // convert char to string before pushing
            previousOperator = '+';
        } else {
            if (previousOperator == '*' || previousOperator == '/') {
                stack.push(evaluate(previousOperator, stack.pop(), curr));
            } else {
                stack.push(evaluate(previousOperator, curr, "0"));
            }

            curr = "";
            previousOperator = c;
            if (c == ')') {
                int currentTerm = 0;
                while (!operators.contains(stack.peek())) {
                    currentTerm += Integer.parseInt(stack.pop());
                }

                curr = Integer.toString(currentTerm);
                previousOperator = stack.pop().charAt(0); // convert string from stack back to char
            }
        }
    }

    int ans = 0;
    for (String num : stack) {
        ans += Integer.parseInt(num);
    }

    return ans;
}

String evaluate(char operator, String first, String second) {
    int x = Integer.parseInt(first);
    int y = Integer.parseInt(second);
    int res = 0;

    if (operator == '+') {
        res = x;
    } else if (operator == '-') {
        res = -x;
    } else if (operator == '*') {
        res = x * y;
    } else {
        res = x / y;
    }

    return Integer.toString(res);
}
```

## Other

### [394. Decode String](https://leetcode.com/problems/decode-string/)

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.

The test cases are generated so that the length of the output will never exceed `105`.

```java
public String decodeString(String s) {
    Deque<StringBuilder> strStack = new ArrayDeque<>();
    Deque<Integer> numStack = new ArrayDeque<>();

    StringBuilder str = new StringBuilder();
    int num = 0;
    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            num = num * 10 + (c - '0');
        } else if (c == '[') {
            strStack.push(str);
            numStack.push(num);
            str = new StringBuilder();
            num = 0;
        } else if (c == ']') {
            int count = numStack.pop();
            StringBuilder repeated = new StringBuilder();
            for (int i = 0; i < count; i++) {
                repeated.append(str);
            }
            str = strStack.pop().append(repeated);
        } else {
            str.append(c);
        }
    }

    return str.toString();
}
```

### [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)


Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:

- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

**Notes:**

- You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

```java
class MyQueue {
    private Deque<Integer> inStack;
    private Deque<Integer> outStack;
    public MyQueue() {
        inStack = new ArrayDeque<>();
        outStack = new ArrayDeque<>();
    }
    
    public void push(int x) {
        inStack.push(x);
    }
    
    public int pop() {
        if (outStack.isEmpty()) {
            inToOut();
        }
        return outStack.pop();
    }

    private void inToOut() {
        while (!inStack.isEmpty()) {
            outStack.push(inStack.pop());
        }
    }
    
    public int peek() {
        if (outStack.isEmpty()) {
            inToOut();
        }
        return outStack.peek();
    }
    
    public boolean empty() {
        return inStack.isEmpty() && outStack.isEmpty();
    }
}
```

均摊复杂度O1

## 对顶栈



```java
class TextEditor {
    private final StringBuilder left = new StringBuilder(); // 光标左侧字符
    private final StringBuilder right = new StringBuilder(); // 光标右侧字符

    public void addText(String text) {
        left.append(text); // 入栈
    }

    public int deleteText(int k) {
        k = Math.min(k, left.length());
        left.setLength(left.length() - k); // 出栈
        return k;
    }

    public String cursorLeft(int k) {
        while (k > 0 && !left.isEmpty()) {
            right.append(left.charAt(left.length() - 1)); // 左手倒右手
            left.setLength(left.length() - 1);
            k--;
        }
        return text();
    }

    public String cursorRight(int k) {
        while (k > 0 && !right.isEmpty()) {
            left.append(right.charAt(right.length() - 1)); // 右手倒左手
            right.setLength(right.length() - 1);
            k--;
        }
        return text();
    }

    private String text() {
        // 光标左边至多 10 个字符
        return left.substring(Math.max(left.length() - 10, 0));
    }
}
```

