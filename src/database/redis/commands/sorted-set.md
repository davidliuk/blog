# Sorted Set



类似Java TreeSet，都排序了，不过Java是红黑树实现的，这里的是跳表+Hash

每一个元素带有一个score



特性：

- 可排序
- 元素不重复
- 查询速度快



因为SortedSet的可排序特征，经常被用来实现排行榜这样的功能。



## 常见命令

zadd

zrem

zscore 获取指定元素的score值

zrank 获取指定元素的排名

zcard 获取元素个数

zcount

zincrby 让指定元素自增

zrange key min max 按照score升序排序后，获取指定排名范围内的元素

zrevrange key min max 按照score降序排序后，获取指定排名范围内的元素

zrangebyscore key min max 按照score排序后，获取指定score范围内的元素

zdiff, zinter, zunion 求差集、交集、并集



