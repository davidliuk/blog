# 顺序顺序

这四种顺序是针对值传递而言的，因为每一种顺序都是传递一个具体值的

第一对顺序

1. 先序
2. 后序

第二对顺序

1. 访问
2. 邻接



## 先序/后序

从出发点考虑：即已有一个拓扑排序，是从已知到未知还是从未知到已知

### 先序

定义：已知点到未知点，即出发点和边界点相同

方式：DFS、BFS、FOR

实现：（对于DFS，通过参数列表）



### 后序

定义：未知点到已知点，即出发点和边界点相反

方式：DFS

实现：（对于DFS，通过返回值传递）



## 邻接/访问

通过临界还是访问去构建一个拓扑排序



### 邻接顺序

定义：一个点相邻，他的值传递（依赖于它临界节点的值）

实现：局部变量，参数+返回值（参数：父传子，返回值：子传父）

如dp[i]=dp[i-1]+dp[i-2]



### 访问顺序

定义：状态节点的访问，指DFS运行时栈和BFS的等待队列中节点的访问

实现：全局变量

如：index（或叫时间戳，二叉树里面一个节点唯一标识（根据访问的先后顺序递增））



## 顺序组合

四种组合



DFS四种顺序的组合在同一个代码块里面都可以出现，所以代码复杂性可能会很高



### 邻接 + 先序

实现：

- DFS，通过：

  - 参数列表：

    ```java
    void dfs(TreeNode root, int depth) {
        if (root == null) return;
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    ```

    简单变量可以父子传递，基本数据类型可以这样写，比较简单

  - 全局变量：回溯

    ```java
    int depth = 0;
    void dfs(TreeNode root) {
        if (root == null) return;
        depth++;
        dfs(root.left);
        dfs(root.right);
        depth--;
    }
    ```

    这样写可以节省开销



### 访问 + 先序

实现：通过：全局变量

```java
int prev = 0;
void dfs(TreeNode root) {
    if (root == null) return;
    // 先序
    prev++;
    dfs(root.left);
    dfs(root.right);
}
```





### 邻接 + 后序

实现：DFS，通过：返回值传递

```java
int dfs(TreeNode root) {
    if (root == null) return 0;
    
    return 1 + Math.max(dfs(root.left), dfs(root.right));
}
```





### 访问 + 后序

实现：DFS，通过：全局变量

```java
int post = 0;
void dfs(TreeNode root) {
    if (root == null) return;
    dfs(root.left);
    dfs(root.right);
    // 后序
    post++;
}
```





### 四种混合

```java
// 先序时间戳，后序时间戳，可以用来快速判断两个点直接的父子关系
int prev, post = 0;
int dfs(TreeNode root, List<TreeNode> path) {
    if (root == null) return 0;
    // 先序访问
    prev++;
    // 先序邻接
    path.add(root);
    dfs(root.left, path);
    dfs(root.right, path);
    path.remove(path.length - 1);
    // 后序访问
    post = prev;
    
    // 后序邻接
    return 1 + Math.max(dfs(root.left), dfs(root.right));
}
```





dfs和bfs搜索稠密图的区别（比如说矩阵）

