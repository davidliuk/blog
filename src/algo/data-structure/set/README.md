# Set

集合这一块最核心的问题不是“怎么遍历”，而是三件事：

1. 某个元素是否存在
2. 某个元素出现了多少次
3. 如何在 `O(1)` 左右时间里完成查找、插入、删除

很多题看起来是数组题、字符串题或者图题，但只要你第一反应是“要不要去重”“要不要记录频次”“要不要快速判断访问过没有”，本质上就已经进入 `set / hash` 的语境了。

## What This Section Solves

- 去重：某个值是否已经出现过
- 计数：某个值出现了几次
- 映射：一个 key 如何快速找到对应 value
- 原地哈希：当值域和下标能建立映射时，如何不用额外空间

## Mental Model

- `HashSet`: 只关心存不存在
- `HashMap`: 关心 `key -> value` 的映射
- `frequency map`: `key -> count`
- `in-place hash`: 把数组下标本身当作“桶”

## Typical Signals

- “是否重复”“是否访问过”“是否在词典中”
- Two Sum / group by / frequency counting
- 图搜索里的 `visited`
- 需要把值映射到下标、位置、前驱、次数、最近一次出现位置

## In This Folder

- [Hash](./hash.md): 原地哈希与哈希类问题的基础思路

## High-Frequency Use Cases

- 数组 / 字符串去重
- 统计频次最高 / Top K
- 判断环、访问标记、连通性搜索
- LRU、RandomizedSet 这类数据结构设计题

## Common Mistakes

- 明明只需要判断存在，却上来就排序，浪费掉 `O(n)` 解法
- 只用 `HashSet`，却忘了题目真正需要的是次数或位置
- 在图搜索里标记访问过的时机太晚，导致重复入队或重复递归