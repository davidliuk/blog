# Binary Tree

二叉树

力扣上很多树的题目都是可以用递归很快地解决的，而这一系列递归解法中蕴含了一种很强大的递归思维：对称性递归(symmetric recursion)

什么是对称性递归？就是对一个对称的数据结构（这里指二叉树）从整体的对称性思考，把大问题分解成子问题进行递归，即不是单独考虑一部分(比如树的左子树)，而是同时考虑对称的两部分(左右子树)，从而写出对称性的递归代码

### 题型分类：

可以用对称性递归解决的二叉树问题大多是判断性问题(bool 类型函数),这一类问题又可以分为以下两类：

1. 不需要构造辅助函数。

   这一类题目有两种情况：

   - 第一种是单树问题，且不需要用到子树的某一部分(比如根节点左子树的右子树)，只要利用根节点左右子树的对称性即可进行递归。
   - 第二种是双树问题，即本身题目要求比较两棵树，那么不需要构造新函数。

   该类型题目如下：

   100. 相同的树
   101. 翻转二叉树
   102. 二叉树的最大深度
   103. 平衡二叉树
   104. 二叉树的直径
   105. 合并二叉树
   106. 另一个树的子树
   107. 单值二叉树

2. 需要构造辅助函数。

   这类题目通常只用根节点子树对称性无法完全解决问题，必须要用到子树的某一部分进行递归，即要调用辅助函数比较两个部分子树。形式上主函数参数列表只有一个根节点，辅助函数参数列表有两个节点。该类型题目如下：

   101. 对称二叉树

   剑指 Offer 26. 树的子结构

### 解题模板

下面给出二叉树对称性递归的解题模板

1、递归结束条件：特殊情况的判断

如果是单树问题，一般来说只要进行以下判断：

```java
if(!root) return true/false;
if(!root->left) return true/false/递归函数;
if(!root->right) return true/false/递归函数;
```

如果是双树问题(根节点分别为 p,q)，一般来说进行以下判断：

```java
if(!p && !q) return true/false;
if(!p || !q) return true/false;
```

当然也不完全是这些情况，比如有的需要加上节点值的判断，需要具体问题需要具体分析

2、返回值

通常对称性递归的返回值是多个条件的复合判断语句
可能是以下几种条件判断的组合：
节点非空的判断
节点值比较判断
(单树)调用根节点左右子树的递归函数进行递归判断
(双树)调用两棵树的左右子树的递归函数进行判断

### 题目解读

空谈比较抽象，下面我们就对具体题目进行分析以及代码呈现

100. 相同的树

相同的树：比较两棵树是否相同
特殊判断：如果两棵树都是空树那么必然相同；如果两棵树其中只有一棵树为空树那么必不相同
返回值：两棵树都非空+根节点值相同+左子树相同+右子树相同

```java
bool isSameTree(TreeNode*p, TreeNode*q) {
    if (!p && !q)
        return true;
    return p && q && p->val == q->val && (isSameTree(p->left, q->left)) && (isSameTree(p->right, q->right));
}

bool isSameTree(TreeNode*p, TreeNode*q) {
    if (p == null || q == null) {
        return p == q;
    }

    return p.val == q.val &&
        (isSameTree(p->left, q->left)) &&
        (isSameTree(p->right, q->right));
}
```

104. 二叉树的最大深度

求二叉树最大深度
特殊判断：空树的最大深度为 0

返回值：树非空，那么最大深度就是左子树最大深度和右子树最大深度的较大者加上根节点的 1

代码如下：

```java
int height(TreeNode*root) {
    if (root == null)
        return 0;

    return max(height(root->left), height(root->right)) + 1;
}
```

110. 平衡二叉树

判断一棵树是不是平衡二叉树

- 平衡二叉树定义：左右子树最大高度差<=1
- 特殊判断：空树是平衡树

返回值：根节点的左右子树高度差<=1 + 左子树是平衡二叉树 +右子树是平衡二叉树

代码如下：(height 函数即上一题的代码)

```c++
bool isBalanced(TreeNode*&root)
{
    if (!root)
        return true;
    return (abs(height(root->left) - height(root->right)) <= 1) && isBalanced(root->left) && isBalanced(root->right);
}
```

965. 单值二叉树
     单值二叉树：所有节点值均相等
     特殊判断：1、空树是单值二叉树 2、如果左子树非空且根节点的值异与左子节点值(即根节点与左子节点不同)，返回 false,右子树同理
     返回值：左子树是单值二叉树+右子树是单值二叉树
     代码如下：

```c++
bool isUnivalTree(TreeNode*root)
{
    if (!root)
        return true;
    if ((root->left && root->left->val != root->val) || (root->right && root->right->val != root->val))
        return false;
    return isUnivalTree(root->left) && isUnivalTree(root->right);
}
```

572. 另一个树的子树
     判断一个数是不是另一颗树的子树
     特殊判断：有一颗树为空就不成立
     这道题的思路比较特殊，先判断两棵树是否是相同，如果相同那么就是满足题意的，
     然后判断一棵树的左子树是否是另一颗树的子树/一棵树的右子树是否是另一颗树的子树

```c++
bool isSubtree(TreeNode*root1, TreeNode*root2)
{
    if (!root1 || !root2)
        return false;
    if (isSameTree(root1, root2))
        return true;
    return isSubtree(root1->left, root2) || isSubtree(root1->right, root2);
}
```

226. 翻转二叉树
     将一棵二叉树镜像翻转
     特殊判断：空树的镜像翻转树仍然是本身
     思路：翻转左子树后替换右子树，翻转右子树后替换左子树
     代码：

```c++
TreeNode* invertTree(TreeNode*root)
{
    if (!root)
        return nullptr;
    TreeNode*left = invertTree(root->left);
    TreeNode*right = invertTree(root->right);
    root->left = right;
    root->right = left;
    return root;
}
```

617. 合并二叉树
     合并二叉树：将两个二叉树合并
     思路：1、都是空树返回 nullptr 2、其中有一个空返回另一个树的根节点
     3、都不空的话先把两棵树根节点值相加，然后递归合并左右子树(以第一棵树为合并后的树)
     代码如下：

```c++
TreeNod* mergeTrees(TreeNode*root1, TreeNode*root2)
{
    if (!root1)
        return root2;
    if (!root2)
        return root1;
    if (root1 && root2)
        root1->val += root2->val;
    root1->left = mergeTrees(root1->left, root2->left);    //递归合并左子树
    root1->right = mergeTrees(root1->right, root2->right); //递归合并右子树
    return root1;
}
```

剑指 Offer 28. 对称的二叉树
判断一棵树是否为对称二叉树
思路：构造一个辅助函数判断两棵树是否是镜像对称的，然后题目只要判断两棵这个树是否镜像对称
而比较两棵树是否镜像对称，即一棵树的左子树和另一棵树的右子树，以及一棵树的右子树和另一棵树的左子树是否镜像对称
特殊判断：都是空树满足条件；其中有一棵空树不满足条件
代码如下：

```c++
bool isSymmetric(TreeNode*root)
{
    return isMirror(root, root);
}

bool isMirror(TreeNode*p, TreeNode*q)
{
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    return (p->val == q->val) && (isMirror(p->left, q->right)) && (isMirror(p->right, q->left));
}
```

剑指 Offer 26. 树的子结构
判断一棵树是否是另一棵树的子结构，注意子结构与子树的区别
子结构不能只利用根节点进行对称性递归，需要构造辅助函数，判断当两棵树根节点值相同时一棵树是否为另一棵树子结构

```c++
// hasSubStructure函数是判断如果A,B根节点相同，B是不是A的子结构
bool hasSubStructure(TreeNode*A, TreeNode*B)
{
    if (!B)        //递归结束条件1：A的一个节点B的对应位置没有,可以认为是子结构
        return true;
    if (!A || A->val != B->val)  //递归结束条件2：B的一个节点A的对应位置没有 / A,B对应位置节点值不同，此时必然不可能是子结构
        return false;
    return hasSubStructure(A->left, B->left) && hasSubStructure(A->right, B->right); //返回值：继续在对应位置递归判断
}

bool isSubStructure1(TreeNode<T> *A, TreeNode<T> *B)
{
    if (!A || !B)   //特殊判断
        return false;
    // 根节点相同的话直接进入比较，根节点不相同看B是不是A的左/右子树的子结构
    return hasSubStructure(A, B) || isSubStructure1(A->left, B) || isSubStructure1(A->right, B);
}
```

