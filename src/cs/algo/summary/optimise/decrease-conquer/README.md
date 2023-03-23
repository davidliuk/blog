# 减治

在广义“有序“的线性结构上搜索



### 四类减治问题

**反向排序**：两侧性质相反

- 二分查找：每次减一半
- 双指针：减少组合复杂度的空间

**结构排序**：每次减一半

- 基于二分查找存储化的结构
  - 数组：树状数组
  - 链表：跳表
  - 树：
    - B+树
    - 线段树
    - 分块树

**删除排序**：每次减的不一定

- 单调栈
- 单调队列

**自定排序**：减少排列和组合复杂度的空间

- 贪心法



如下的减治每一种都可以用在动规里面对动规进行优化
