# 算法总结

特殊条件：

- 有序

  - 二分法
  - 双指针

- 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内

  原地交换（哈希映射）

- 子串/子数组

  - 滑动窗口
  - 区间型动态规划
  - 前缀和/差分数组

- 子序列


## 按时间复杂度区分

a, max

```java
int max = a[0];
for(int i = 0; i < a.length; i++) {
	max = Math.max(max, a[i])
}
```

1 2 3 4 5

12[345]678



3

1 2 3 4 5 6



2

2 1 3 4 2 3 5 3 6

   |  |     





A k



4

1 2 3 4 5

|     |



### On

- 打擂台，求max或者min

- 双指针

  - 背向双指针，回文串

    1 2 3 4 3 2 1

    ​          II

  - 同向双指针

    - 快慢指针（一个一步、一个两步）

      链表，求中点、求交点、判求环

    - 滑动窗口

      - 大小恒定的窗口

        连续的k个数中的最值、中位数

      - 大小不定的窗口（待学）

    - 归并排序的merge算法

      合并两个有序数组或链表

  - 相向双指针

    - 快速排序的partition算法
    - 两数之和

- 快速选择

- 所有链表问题


### Onlogn

- 归并、快速排序

- n次logn的运算

  n次二分

  n次插入堆

### <On





#### BFS

#### DFS





## 按算法类型区分



### BS二分查找

logn

用途



- 有序数组中找一个元素

  2

  1 2 3 4 5

- 二分答案

  0 max

- 非排序序数组中找一个元素



### 遍历

线性的：数组、链表

- 迭代遍历
- 递归遍历

数组 for

链表 





```java
while(node != null) {
    访问node;
    node = node.next;
}

// 1 -> 2 -> 3
void traverse(Node node) {
    if (node != null) {
        return;
    }
    // 先序访问node;
    traverse(node.next);
    // 后序访问node;
}
```



树形的：二叉树、多叉树



```java
// 1 -> 2 -> 3
void traverse(TreeNode node) {
    if (node != null) {
        return;
    }
    // 先序访问node;
    traverse(node.left);
    // 中序访问node;
    traverse(node.right);
    // 后序访问node;
}
```



```java
// 1 -> 2 -> 3
class TreeNode {
    int val;
    ArrayList<TreeNode> chilren;
}

void traverse(TreeNode node) {
    if (node != null) {
        return;
    }
    // 先序访问node;
    for (TreeNode child: node.children) {
        traverse(child);
    }
    // 后序访问node;
}
```

### DFS



### BFS

宽度优先搜索

---

- 二分法: 传统2分/翻转2分/Sqrt/median of 2 sorted arrays
- HashTable: 2 sum/isomorphic string/group anagram
- 动态规划(DP): 漆房子/Coin Change2小ump Ga
- BFS: Number of Island, BT Level order traversal
- DFS: Subsets/Combo Sum/Permutation/Phone Combination
- 其他: Add String Numbers/Multiply String Numbers/Remove Nth node from Linked List/Product of Array Except Self
