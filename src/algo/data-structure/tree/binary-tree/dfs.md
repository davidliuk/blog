# DFS

- 局部传值：本质上是在传递从根到当前节点的路径（栈）上的信息。

  - 有的是直接要栈本身或栈中的部分信息（比如祖父是谁）

    如，lc1315 祖父节点值为偶数的节点和


  - 有的是路径的聚合，比如路径上的最大值/最小值这些

- 全局传值：可与遍历顺序相关的，非父子传递的信息

### [366. Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree/)

Given the `root` of a binary tree, collect a tree's nodes as if you were doing this:

- Collect all the leaf nodes.
- Remove all the leaf nodes.
- Repeat until the tree is empty.

```java
int getHeight(TreeNode root, List<List<Integer>> results) {
    // return -1 for null nodes
    if (root == null) {
        return -1;
    }

    // first calculate the height of the left and right children
    int leftHeight = getHeight(root.left, results);
    int rightHeight = getHeight(root.right, results);

    int currHeight = Math.max(leftHeight, rightHeight) + 1;

    if (results.size() == currHeight) {
        results.add(new ArrayList<>());
    }

    results.get(currHeight).add(root.val);

    return currHeight;
}

List<List<Integer>> findLeaves(TreeNode root) {
    List<List<Integer>> results = new ArrayList<>();

    getHeight(root, results);

    return results;
}
```

### [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)

Given the `root` of a binary tree and an integer `targetSum`, return *all **root-to-leaf** paths where the sum of the node values in the path equals* `targetSum`*. Each path should be returned as a list of the node **values**, not node references*.

A **root-to-leaf** path is a path starting from the root and ending at any leaf node. A **leaf** is a node with no children.

```java
public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    List<List<Integer>> results = new ArrayList<>();

    dfs(root, targetSum, new ArrayDeque<>(), results);

    return results;
}

void dfs(TreeNode root, int targetSum, Deque<Integer> path, List<List<Integer>> results) {
    if (root == null) {
        return;
    }

    path.offerLast(root.val);
    targetSum -= root.val;

    if (targetSum == 0 && root.left == null && root.right == null) {
        results.add(new ArrayList<>(path));
    } else {
        dfs(root.left, targetSum, path, results);
        dfs(root.right, targetSum, path, results);
    }

    path.pollLast();
}
```



```java
record TreeInfo(int min, int, max, int count) {}
```

