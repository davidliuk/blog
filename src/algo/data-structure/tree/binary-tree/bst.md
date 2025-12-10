# Binary Search Tree

> 二叉搜索树

中序遍历是有序数组，且可以二分搜索（for循环非递归）

TreeMap 的 Entry 是 LinkedTreeNode 有左右儿子和父亲节点

---

### [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

```java
TreeNode prev;
public boolean isValidBST(TreeNode root) {
    if (root == null) {
        return true;
    }

    if (!isValidBST(root.left)) {
        return false;
    }
    if (prev != null && root.val <= prev.val) {
        return false;
    }
    prev = root;
    return isValidBST(root.right);
}
```

```java
public boolean isValidBST(TreeNode root) {
    return validate(root, null, null);
}

boolean validate(TreeNode node, Integer min, Integer max) {
    if (node == null) {
        return true;
    }

    if ((min != null && node.val <= min) || 
        (max != null && node.val >= max)) {
        return false;
    }

    // Recursively validate left and right subtrees with updated bounds
    return validate(node.left, min, node.val) && 
           validate(node.right, node.val, max);
}
```

### [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a* ***height-balanced*** *binary search tree*.

```java
int idx;

public TreeNode sortedArrayToBST(int[] nums) {
    idx = 0;
    return buildTree(0, nums.length - 1, nums);
}

public TreeNode buildTree(int left, int right, int[] nums) {
    if (left > right) {
        return null;
    }

    int mid = left + (right - left) / 2;
    TreeNode root = new TreeNode();
    root.left = buildTree(left, mid - 1, nums);

    root.val = nums[idx];
    idx++;

    root.right = buildTree(mid + 1, right, nums);

    return root;
}
```

```java
TreeNode helper(int[] nums, int left, int right) {
    if (left > right) {
        return null;
    }

    // always choose left middle node as a root
    int p = left + (right - left) / 2;

    // preorder traversal: node -> left -> right
    TreeNode root = new TreeNode(nums[p]);
    root.left = helper(nums, left, p - 1);

    root.right = helper(nums, p + 1, right);

    return root;
}

public TreeNode sortedArrayToBST(int[] nums) {
    return helper(nums, 0, nums.length - 1);
}
```

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

Given the `head` of a singly linked list where elements are sorted in **ascending order**, convert *it to a* ***height-balanced*** *binary search tree*.

```java
ListNode p;

public TreeNode sortedListToBST(ListNode head) {
    p = head;
    int length = getLength(head);
    return buildTree(0, length - 1);
}

public int getLength(ListNode head) {
    int length = 0;
    while (head != null) {
        length++;
        head = head.next;
    }
    return length;
}

public TreeNode buildTree(int left, int right) {
    if (left > right) {
        return null;
    }

    int mid = (left + right) / 2;
    TreeNode root = new TreeNode();
    root.left = buildTree(left, mid - 1);

    root.val = p.val;
    p = p.next;

    root.right = buildTree(mid + 1, right);

    return root;
}
```

### [255. Verify Preorder Sequence in Binary Search Tree](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/)

Given an array of **unique** integers `preorder`, return `true` *if it is the correct preorder traversal sequence of a binary search tree*.

```java
public boolean verifyPreorder(int[] preorder) {
    int[] i = { 0 };
    return helper(preorder, i, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

public boolean helper(int[] preorder, int[] i, int min, int max) {
    if (i[0] == preorder.length) {
        return true;
    }

    int root = preorder[i[0]];
    if (root <= min || root >= max) {
        return false;
    }

    i[0]++;
    return helper(preorder, i, min, root) ||
            helper(preorder, i, root, max);
}
```

### [449. Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/)

Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a **binary search tree**. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

**The encoded string should be as compact as possible.**

```java
public class Codec {

    static class Identifier {
        // 代表分隔符的字符
        static String SEP = ",";
        // 代表 null 空指针的字符
    }

    /* 主函数，将二叉树序列化为字符串 */
    String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serialize(root, sb);
        return sb.toString();
    }

    void serialize(TreeNode root, StringBuilder sb) {
        if (root == null) {
            return;
        }

        sb.append(root.val).append(Identifier.SEP);

        serialize(root.left, sb);
        serialize(root.right, sb);
    }

    int idx;
    public TreeNode deserialize(String data) {
        if (data.isEmpty()) {
            return null;
        }
        String[] nums = data.split(",");
        idx = 0;
        return construct(Integer.MIN_VALUE, Integer.MAX_VALUE, nums);
    }

    // 前序位置构建当前结点，后序记录子树结果
    TreeNode construct(int lower, int upper, String[] nums) {
        // 说明这里不是二叉搜索树的结点
        if (idx == nums.length) {
            return null;
        }
        // 前序
        int val = Integer.parseInt(nums[idx]);
        if (val < lower || val > upper) {
            return null;
        }
        idx++;
        TreeNode root = new TreeNode(val);
        root.left = construct(lower, val, nums);
        root.right = construct(val, upper, nums);
        
        return root;
    }
}
```

