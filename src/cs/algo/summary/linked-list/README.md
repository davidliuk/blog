# 链表



### 主要技巧：

- 虚拟头节点

  使用场景：

  - 头节点不确定时，如创建一个新的链表（初始时无法判断是否为空）
    - 合并链表（到一个新的链表）merge
    - 划分链表（到两个新的链表）partition
  - 头节点可能被变动时，如添加、删除、移动
    - 删除节点
      - 链表去重
      - 删除值为x的节点
    - 移动
      - 反转链表
      - 交换链表节点

- 双指针

  技巧分类及使用场景：

  - 快慢双指针
    - 链表中点：middle
    - 链表求环：circle
  - 同向双指针
    - 反转链表：reverse
    - 链表去重：deduplication
  - 平行双指针
    - 合并链表：merge
    - 划分链表：partition





### 边界条件：

1. 当循环内出现移动两步时：

   ```java
   while (curr != null && curr.next != null) 
   ```

   如，快慢指针、两两交换链表中的节点

2. 要取下一个节点的值，或可能移除或移动下一个节点时：

   ```java
   while (curr.next != null)
   ```
   
   如，反转链表
   
   这种需要在最开始的地方判断curr这个节点是否为空（往往为`curr == null`）
   
3. 仅用到当前节点的值时，

   ```java
   while (p != null)
   ```

   如，partition

4. 当平行双指针时，

   ```java
   while (p1 != null && p2 != null)
   ```

   如，merge



