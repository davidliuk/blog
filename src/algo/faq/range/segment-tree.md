# Segment Tree

https://leetcode.cn/problems/longest-increasing-subsequence-ii/solutions/1816920/by-lfool-f6vs/

线段树

区间求和：前缀和/线段树

但是前缀和无法应对数组频繁修改：离线查询

线段树

在线处理区间类问题

实用、稍显复杂的数据结构

---

离线算法：数组保持不变

在线算法：数组会动态变化修改

RMQ (Range Minimum/Maximum Query) 区间最值查询

- 线段树
- 树状数组
- ST 表

1. 每个节点代表一个区间，节点的值就是该区间的和
2. 节点的值可以根据题目要求换成自己满足 “区间加法” 的表示，例如
   1. 最大公因数 GCD：总 GCD = gcd (左区间 GCD，右区间 GCD)
   2. 最大值：总最大值 = max (左区间最大值，右区间最大值)
   3. 最小值：
3. 有些不符合 “区间加法” 的表示需要注意，例如：
   1. 众数：根据左右区间的众数不能求出总区间的众数
   2. 01 序列的最长连续零：根据左右区间的最长连续零，没法知道总的最长连续零
4. 根节点代表的区间是问题的总区间，例如上图中数据的长度就是 [0, 4]
5. 线段树是一棵近似的完全二叉树，如上图，但也有不是完全二叉树的情况
6. 建立线段树的过程就是不断把区间 “平分” 的过程，直到区间长度为 1

### 线段树简介

主要用途:

- 存放对应区间(线段)的信息

基本操作:

- 区间查询(如:区间极值等)

- 单点修改(修改某个点的值)

进阶操作:

- 区间修改(如:更新一段区间的所有值)

特点:

- 高度为 log(总区间长度)
- 树上节点个数量级为 区间大小 \* 2

---

### 线段树结构

线段数是一棵二叉树

线段树节点

- 非叶子节点:表示区间 [i, j]
- 叶子节点:表示单点 [i, i]

节点维护的值

- 左、右区间端点 [L, R]
- 左、右儿子
- 其他权值(如:区间和、区间极值等)

左右儿子表示的区间各为根节点的一半长

### 线段树构造

- 树上节点对应的区间已经给出
- 每个点的点权是?
- 对于 [i, i]:root.val = num[i]
- 对于 [i, j]:root.val = left.val + right.val
- 使用后序遍历一遍即可

递归函数体(数组，赋值区间起点，赋值区间终点)

- 声明新的线段树节点 node
- 更新 node 的管辖区间
- 左端点 == 右端点(递归出口)
  - 单点赋值:node.val = nums[start]
- 左端点 < 右端点
  - 求区间中点 mid
  - 递归 [start, mid] 和 [mid + 1, end] 获得儿子
  - 更新 node 的左右儿子
- 返回 node

---

分治法函数体(当前节点，待修改索引，修改值)

• 分(Divide):

• node.start == node.end(递归出口)

• 叶子节点修改:node.val = value

• node.start != node.end

• 待修改索引在当前节点的左子树 • 向左子树递归

• 待修改索引在当前节点的右子树 • 向右子树递归

• 治(Conquer):

• 非叶子节点修改:node.val = node.left.val + node.right.val

---

```java
class SegmentTreeNode {
    int start, end;
    SegmentTreeNode left, right;
    int sum;
}

class SegmentTree {
    SegmentTreeNode root;
    public SegmentTree(int[] nums, int start, int end) {
        root = construct(nums, start, end);
    }
}
```

### 区间修改

在 ZKW 线段树中实现区间修改（区间增加或区间赋值等操作）需要稍微修改树的结构和操作逻辑。区间修改通常涉及延迟传播（Lazy Propagation），这是一种优化技术，用于推迟更新操作直到真正需要这些更新的值时才执行。

延迟传播/动态开点

---

## 递推线段树

2n 大小，完全二叉树一个空间都不浪费（出了下标 0 的位置）

zkw 线段树也支持区间修改，但是由于很难做到`pushdown`，所以 zkw 线段树采用标记永久化的方式进行区间修改。

ZKW 线段树使用两倍数组长度的空间来存储所有元素，这足以容纳所有叶子节点和非叶子节点。这种存储方式的合理性和高效性源于 ZKW 线段树的特殊结构和构建方法。为了理解为什么两倍长度的空间就足够，让我们来看看 ZKW 线段树的特点和存储方式：

1. **叶子节点的存储**：在 ZKW 线段树中，所有叶子节点（即原始数组的元素）直接存储在数组的后半部分。如果原始数组的长度为 `n`，那么叶子节点就存储在索引 `n` 到 `2n - 1` 的位置。
2. **非叶子节点的存储**：非叶子节点（即用于表示区间信息的内部节点）存储在数组的前半部分，即索引 `1` 到 `n - 1` 的位置。这些节点是通过组合叶子节点的信息计算得出的。
3. **完全二叉树的性质**：线段树本质上是一棵完全二叉树。在完全二叉树中，叶子节点的数量大约等于所有内部节点的数量总和加一。由于 ZKW 线段树省略了树的最顶层（根节点）并且使用迭代而非递归，它只需要 `n - 1` 的空间来存储非叶子节点。
4. **空间需求**：因此，整个线段树需要的总空间大约是 `2n`：`n` 用于存储叶子节点，`n - 1` 用于存储非叶子节点，加上一个额外的空间作为根节点。这就是为什么使用两倍原始数组长度作为线段树数组长度的原因。

总结来说，ZKW 线段树之所以使用两倍长度的数组，是因为它结合了完全二叉树的性质和迭代构建方法的空间效率，确保了所有的叶子节点和非叶子节点都能被有效地存储和更新。

---

到目前为止 zkw 线段树还是比较简短的

可能有人觉得这个和树状数组有点像，这就对了

_zkw：树状数组究竟是什么？就是省掉一半空间后的线段树加上中序遍历_

这里我们采用**标记永久化**的思想（就是**不下推 lazy tag**~~让他彻底 lazy 下去 QwQ~~）

```cpp
int add[MAXN<<2]; //这个lazy tag表示当前节点已经更新完，需要更新子节点
```

我们需要在自底向上时更新节点的值，所以我们还需要一个变量记录该节点**包含元素的个数**

另外要注意**修改某个节点的标记时要更新上面的值**

https://zhuanlan.zhihu.com/p/656702623

https://www.luogu.com.cn/blog/82152/Introduction-of-zkwSegmentTree

```java
class SegmentTree {
    private final int n;
    private final int[] tree;

    SegmentTree(int size) {
        n = size;
        tree = new int[n * 4];
    }

    // 单点更新：tree[pos] = max(tree[pos], val)
    void update(int idx, int val) {
        update(1, 1, n, idx, val);
    }

    private void update(int node, int l, int r, int idx, int val) {
        if (l == r) {
            tree[node] = Math.max(tree[node], val);
            return;
        }
        int mid = (l + r) >> 1;
        if (idx <= mid) update(node << 1, l, mid, idx, val);
        else update(node << 1 | 1, mid + 1, r, idx, val);

        tree[node] = Math.max(tree[node << 1], tree[node << 1 | 1]);
    }

    // 查询区间最大值
    int query(int L, int R) {
        return query(1, 1, n, L, R);
    }

    private int query(int node, int l, int r, int L, int R) {
        if (R < l || r < L) return 0;
        if (L <= l && r <= R) return tree[node];
        int mid = (l + r) >> 1;
        return Math.max(query(node << 1, l, mid, L, R),
                        query(node << 1 | 1, mid + 1, r, L, R));
    }
}
```
