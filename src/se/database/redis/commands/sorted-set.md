# Sorted Set

有序，类似 Java TreeSet ，不过 Java 是红黑树实现，这里的是跳表+Hash

每一个元素带有一个 score

特性：

- 可排序
- 元素不重复
- 查询速度快

因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。

## 常见命令

- `zadd` 增

- `zrem` 删

- `zscore` 获取指定元素的 score 值

- `zrank` 获取指定元素的排名

- `zcard` 获取元素个数

- `zcount` 指定范围内元素个数

- `zincrby` 让指定元素的分值自增

- `zrange` key min max 按照 score 升序排序后，获取指定排名范围内的元素

- `zrevrange` key min max 按照 score 降序排序后，获取指定排名范围内的元素

- `zrangebyscore` key min max 按照 score 排序后，获取指定 score 范围内的元素

- `zdiff` , zinter, zunion 求差集、交集、并集

