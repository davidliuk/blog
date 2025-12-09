# DFS

> jz6, 8, 23

Depth-first search

深搜：栈式搜索

枚举：访问的关注的是边

遍历：访问的关注的是点

## DFS

### 三大特点

- 回溯

- 宽树搜索：枚举

- 后序遍历

  如果需要自底向上的传值，则必须使用深搜

两类问题：

- 遍历

  在既定结构上进行遍历，如遍历图、树、线

  可以用回溯和后序遍历

- 枚举

  根据题意生成解空间，而非直接遍历原结构本身

  常见如枚举所有符合条件的答案/路径

### 解题步骤

1. 构造并画出搜索树
2. 研究需要哪些参数来表示一个搜索树上的节点 
3. 研究如何从父节点找到儿子节点(递归拆解)

第一步：构造并画出搜索树

DFS 实际上就是在遍历一棵搜索树

找到方案的构造路径和多个方案之间的变换关系，即可构造出这棵树

第二步：研究需要哪些参数来表示搜索树上的一个节点

n - 一共需要几对括号 

sequence - 当前括号序列 

leftParen - 当前左括号有几个了

第三步：研究如何从父亲节点找到儿子节点

+ 左括号去左儿子 
+ 右括号去右儿子

## Divide and Conquer

分治法不仅仅是将数组“一分为二”（如归并排序），它的核心在于 **“分而治之，最后合并”**。以下是常见的适用场景：

### 1. 结构化组合/构造问题

当一个大的结构（如括号序列、二叉树、表达式）可以被拆分为“左子结构”和“右子结构”，且这两个子结构互不干扰，最终通过某种规则（如根节点、运算符）连接起来时。

- **特征：** 代码中通常出现 `for (leftPart : divide(i)) { for (rightPart : divide(n-i)) { ... } }` 的双重循环结构。

**卡特兰数（Catalan Number）** 的一种构造方式

### 2. 数组/序列处理

需要处理整个数组的问题，可以通过处理左半边和右半边，然后合并结果来解决。

- **例子：** 归并排序（Merge Sort）、快速排序（Quick Sort）、最大子数组和。

### 3. 大整数/矩阵运算

为了降低时间复杂度，将大数或大矩阵拆解为小块运算。

- **例子：** Karatsuba 乘法算法、Strassen 矩阵乘法。

### 4. 几何问题

- **例子：** 平面最近点对（Closest Pair of Points）。

## 高频考法

1. 树的分治和遍历
2. 求所有方案
3. 求排列组合

### 树的分治和遍历

必须掌握：

- 树上的分治法 divide & conquer
- 前序 preorder、中序 inorder、后序postorder 遍历

必须背诵：前序遍历和中序遍历的非递归 (Iteration) 版本

#### 非递归遍历

前序遍历

```java
Stack<TreeNode> stack = new Stack<>();
List<Integer> preorder = new ArrayList<>();

if (root == null) {
    return inorder;
}

stack.push(root);
while (!stack.empty()) {
    TreeNode node = stack.pop();
    inorder.add(node.val);
    if (node.right != null) {
        stack.push(node.right);
    }
    if (node.left != null) {
        stack.push(node.left);
    }
}

return inorder;
```

中序遍历

```java
Stack<TreeNode> stack = new Stack<>();
List<Integer> inorder = new ArrayList<>();

while (root != null) {
	stack.push(root);
    root = root.left;
}

while (!stack.empty()) {
    TreeNode node = stack.peek();
    inorder.add(node.val);
    
    if (node.right == null) {
        // 删掉已经访问的结点
        do {
            node = stack.pop();
        } while (!stack.empty() && stack.peek().right == node);
        continue;
    }
    node = node.right;
    while (node != null) {
        stack.push(node);
        node = node.left;
    }
}

return inorder;
```

---

```java
Stack<TreeNode> stack = new Stack<>();
List<Integer> inorder = new ArrayList<>();

Consumer<TreeNode> pushLeftEnd = (node) -> {
    while (node != null) {
        stack.push(node);
        node = node.left;
    }
};

pushLeftEnd(root);

while (!stack.empty()) {
    TreeNode node = stack.peek();
    inorder.add(node.val);
    
    if (node.right != null) {
        node = node.right;
        pushLeftEnd(node);
    } else {
        // 删掉已经访问的结点
        do {
            node = stack.pop();
        } while (!stack.empty() && stack.peek().right == node);
    }
}

return inorder;
```

### 求所有方案

找到所有的方案
找到所有满足某个条件的具体方案
找到所有满足某个条件的方案总数

生成括号、课程表 IV、单词拆分 II

### 求排列组合

求出所有满足某个条件的排列或组合
求出某个满足条件的排列或组合
求出某个最优的排列或组合

单词矩阵

## 优化

面试官可能会要求你对 DFS 的代码进行进一步的效率优化 通常的优化方法有三种:

1. 可行性剪枝

2. 最优性剪枝

   Sliding Puzzle II

3. 搜索顺序的优化

   Sudoku Solver

4. 记忆化搜索

### DFS vs BFS

凡是可以 BFS 的都要 BFS 而不应该使用 DFS，典型例子: 找连通的节点

Why?

一些应该用 BFS 但很容易让人觉得用 DFS 的案例

- https://www.lintcode.com/problem/driving-problem/description
- https://www.lintcode.com/problem/similar-string-groups/description
- https://www.lintcode.com/problem/keys-and-rooms/description
- https://www.lintcode.com/problem/tree/description
- https://www.lintcode.com/problem/number-of-islands/description

以上问题都是求连通性的问题，求连通性问题必用 BFS!不用 DFS!

---

### 关键连接

找图的关键连接，可以用tarjan，但是可能需要两个小时看懂，但是过几天忘了又得两个小时看懂

如果原始图不连通，就把所有边都返回即可

需要把所有环删掉

dfs序：遍历的时候处于的层数

```java
// 如果没有环返回的是n-1，有环的话，返回的就是环的入口，所以也可以判环
int dfs(int node, int depth, int[] rank, List<Integer>[] graph, Set<int[]> ans, int n) {
    if (rank[node] != -1) {
        return rank[node];
    }
    
    rank[node] = depth;
    int minDepth = n;
    for (int neighbor : graph[node]) {
        // 回边
        if (rank[neighbor] == depth -1) {
            continue;
        }
        
        int dfsDepth = dfs(neighbor, depth + 1, rank, graph, ans, n);
        // 找到环了，返回的环里最小的dfs深度
        if (dfsDepth <= depth) {
            // 删掉这个边
        }
        
        minDepth = Math.min(minDepth, dfsDepth);
    }
    
    return minDepth;
}

// 如果没有环返回的是n-1，有环的话，返回的就是环的入口，所以也可以判环
int dfs(int node, int depth, int[] rank, List<Integer>[] graph, Set<int[]> ans, int n) {
    if (rank[node] != -1) {
        return rank[node];
    }
    
    rank[node] = depth;
    int minDepth = n;
    for (int neighbor : graph[node]) {
        // 回边
        if (rank[neighbor] == depth -1) {
            continue;
        }
        
        int dfsDepth = dfs(neighbor, depth + 1, rank, graph, ans, n);
        // 找到环了，返回的环里最小的dfs深度
        if (dfsDepth > depth) {
            
        }
        
        minDepth = Math.min(minDepth, dfsDepth);
    }
    
    return minDepth;
}
```

tarjan

- 强连通分量，双连通分量，割点和桥，求最近公共祖先（LCA）等问题。

割边：非环的边均为割边

割点：非环的点+环的入口

## 递归构造思路

**分治法解决递归方程（Master Theorem）**

- 用于分析分治算法的复杂度，例如 T(n) = aT(n/b) + O(n^d)，应用于归并排序、最近点对等问题。

**分治算法**：

- 特点：将一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单直接求解，原问题的解即子问题的解的合并。
- 适用场景：问题可以被分解为独立的子问题。
- 例子：归并排序、快速排序等。

### **分治算法的适用条件**

分治算法适用于以下场景：

1. **问题可以分解为子问题**，且子问题与原问题形式相同或类似。
2. 子问题之间**相互独立**，即解决一个子问题的结果不依赖于另一个子问题的结果。
3. 原问题的解可以通过**合并子问题的解**得到。