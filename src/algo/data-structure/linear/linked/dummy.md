# Dummy Head

> 虚拟头节点

### 基本使用

定义：

```java
ListNode dummy = new ListNode(-1, head);
```

使用：

```java
// 取得头节点，所有最后需要返回head的情况下都要用这个
dummy.next;
// 删除头节点，如删除符合条件节点时
dummy.next = dummy.next.next;
// 插入头节点，如反转链表时
node.next = dummy.next;
dummy.next = node;
```

好处：

- 增加和删除节点的时候不需要对头处进行特判
- 创建一个新的链表，初始无法判断是否为空时，无需讨论是否一个空head
- head 频繁变更时，随时获取最终的head

### 使用场景

1. 头节点不确定时，如创建一个新的链表，初始时无法判断是否为空
   - 合并链表（到一个新的链表）merge
   - 划分链表（到两个新的链表）partition
2. 头节点可能被变动时，如添加、删除、移动
   - 删除节点
     - 链表去重
     - 删除值为x的节点
   - 移动
     - 反转链表
     - 交换链表节点



