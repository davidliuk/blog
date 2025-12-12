# Divide and Conquer

## Catalan

### [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

```java
Map<Integer, List<String>> memo = new HashMap<>();

public List<String> generateParenthesis(int n) {
    if (memo.containsKey(n)) {
        return memo.get(n);
    }

    List<String> answer = new ArrayList<>();
    if (n == 0) {
        answer.add("");
    } else {
        for (int left = 0; left < n; left++) {
            for (String leftString : generateParenthesis(left)) {
                for (String rightString : generateParenthesis(n - 1 - left)) {
                    answer.add("(" + leftString + ")" + rightString);
                }
            }
        }
    }

    memo.put(n, answer);
    return answer;
}
```

### [95. Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)



形状 memo

```java
// 缓存：Key 是"树的长度(节点数)"，Value 是该长度对应的 1...k 的所有 BST 模板
private Map<Integer, List<TreeNode>> memo = new HashMap<>();

public List<TreeNode> generateTrees(int n) {
    // 1. 查缓存：如果这个长度的树结构算过了，直接返回
    if (memo.containsKey(n)) {
        return memo.get(n);
    }

    List<TreeNode> res = new ArrayList<>();

    // Base Case: 长度为 0，返回含有一个 null 的列表
    if (n == 0) {
        res.add(null);
        return res;
    }

    // 2. 枚举根节点的值 i (在 1...n 的范围内)
    for (int i = 0; i < n; i++) {
        // 左子树长度：i
        // 左子树的值域本来就是 1...i，正好匹配 memo 中的定义，不需要偏移！
        List<TreeNode> leftSubTrees = generateTrees(i);

        // 右子树长度：len - 1 - i
        // 右子树的值域需要是 (i+1)...len，但 generateTrees 返回的是 1...(n-i)
        // 所以后面拼接时需要 "clone + offset"
        List<TreeNode> rightSubTrees = generateTrees(n - 1 - i);

        // 3. 组合
        for (TreeNode left : leftSubTrees) {
            for (TreeNode right : rightSubTrees) {
                TreeNode root = new TreeNode(i + 1);

                // 左边：直接复用 (引用共享)，因为值域匹配
                root.left = left;

                // 右边：必须深拷贝并加上偏移量 i
                // 原本是 1, 加上 i 变成 i+1
                root.right = cloneAndOffset(right, i + 1);

                res.add(root);
            }
        }
    }

    // 4. 存缓存
    memo.put(n, res);
    return res;
}

// 辅助函数：深拷贝一棵树，并将所有节点值加上 offset
private TreeNode cloneAndOffset(TreeNode node, int offset) {
    if (node == null) {
        return null;
    }
    TreeNode newNode = new TreeNode(node.val + offset);
    newNode.left = cloneAndOffset(node.left, offset);
    newNode.right = cloneAndOffset(node.right, offset);
    return newNode;
}
```

### [241. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)

Given a string `expression` of numbers and operators, return *all possible results from computing all the different possible ways to group numbers and operators*. You may return the answer in **any order**.

The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed `104`.

```java
public List<Integer> diffWaysToCompute(String expression) {
    // Initialize memoization array to store results of subproblems
    List<Integer>[][] memo = new ArrayList[expression.length()][expression.length()];
    // Solve for the entire expression
    return computeResults(expression, memo, 0, expression.length() - 1);
}

private List<Integer> computeResults(
        String expression,
        List<Integer>[][] memo,
        int start,
        int end) {
    // If result is already memoized, return it
    if (memo[start][end] != null) {
        return memo[start][end];
    }

    List<Integer> results = new ArrayList<>();

    // Base case: single digit
    if (start == end) {
        results.add(expression.charAt(start) - '0');
        return results;
    }

    // Base case: two-digit number
    if (end - start == 1 && Character.isDigit(expression.charAt(start))) {
        int tens = expression.charAt(start) - '0';
        int ones = expression.charAt(end) - '0';
        results.add(10 * tens + ones);
        return results;
    }

    // Recursive case: split the expression at each operator
    for (int i = start; i <= end; i++) {
        char currentChar = expression.charAt(i);
        if (Character.isDigit(currentChar)) {
            continue;
        }

        List<Integer> leftResults = computeResults(
                expression,
                memo,
                start,
                i - 1);
        List<Integer> rightResults = computeResults(
                expression,
                memo,
                i + 1,
                end);

        // Combine results from left and right subexpressions
        for (int leftValue : leftResults) {
            for (int rightValue : rightResults) {
                switch (currentChar) {
                    case '+':
                        results.add(leftValue + rightValue);
                        break;
                    case '-':
                        results.add(leftValue - rightValue);
                        break;
                    case '*':
                        results.add(leftValue * rightValue);
                        break;
                }
            }
        }
    }

    // Memoize the result for this subproblem
    memo[start][end] = results;

    return results;
}
```

