# Data Structure

### 物理结构

- 顺序存储 Sequential

  把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，结点之间的逻辑关系由存储单元的邻接关系来体现（逻辑与物理统一），要求内存中可用的存储单元的地址必须是连续的。

  - 优点：存储密度大，存储空间利用概率高。
  - 缺点：插入或删除元素时不方便。

- 链式存储 Linked Storage Structure

  它不要求逻辑上相邻的元素在物理位置上也相邻。

  - 优点：因此它没有[顺序存储结构](https://baike.baidu.com/item/顺序存储结构/0?fromModule=lemma_inlink)所具有的弱点，
  - 缺点：失去了[顺序表](https://baike.baidu.com/item/顺序表/9664274?fromModule=lemma_inlink)可[随机存取](https://baike.baidu.com/item/随机存取/4610937?fromModule=lemma_inlink)的优点。

- 散列存储 Hash

- 索引存储 Indexed

### 逻辑结构

- 线性
- 树形
- 图形
- 集合

### Traversal

顺序存储遍历

```java
void traverse(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        // 迭代访问 arr[i]
    }
}
```

链式存储遍历

```java
/* 基本的单链表节点 */
class ListNode {
    int val;
    ListNode next;
}

void traverse(ListNode head) {
    for (ListNode p = head; p != null; p = p.next) {
        // 迭代访问 p.val
    }
}

void traverse(ListNode head) {
    // 递归访问 head.val
    traverse(head.next);
}
```

---

```java
void traverse(int head, int[] next) {
    for (int p = head; p != -1; p = next[p]) {
        // 迭代访问 p.val
    }
}
```

用 next[n] 表示单链表

条件：压缩映射
即：值域 是 定义域 子集，即next中元素的取值在[0, n-1]之间
则：i -> next[i]
i指向next[i]，next[i]表示i节点下一个元素的位置

i即节点标号，链表头节点可以从入度为0的点开始（即没有取值的元素）
想要点的权值或者大小的话，再辅助一个val[n]
val[i] 表示i节点的值

这个next数组上可能同时存在多条链表

常见的用途：
1. 并查集，parent[i]，表示i的父亲节点是哪个标号
2. 链式前向星，edge[i]，表示第i条边的下一条边是哪个标号
3. 原地哈希
4. 记录答案路径，如LIS获取LIS对应的这个序列时prev[n]

相当于用数组模拟链表，数组里面存的是下一个元素的下标，则p.next即nums[p]

相当于这里吗的nums[]相当于数组模拟链表里的next[]

由于数字从1开始计数，0这个位置不可能被其它位置的数字指向，所以0位置不可能在环内，所以从0开始遍历一定会指向某个包含重复数字的环，

变形：数字从0计数到n-1，那就得从n开始遍历了，少了哪个数就从哪开始遍历

一直觉得当i=nums[i]的时候，就动不了了，但0不会出现这种情况。其他的位置如果是自环，如果不是重复的位置，根本进不去，一旦进去了，就说明有位置的可以指向i。

本质上可以看作是寻找入度为0的节点作为起始节点，而节点的入度等于该节点值在数组值中出现的次数
