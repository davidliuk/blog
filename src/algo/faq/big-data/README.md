# 海量数据处理

https://www.jiuzhang.com/course/56

大文件处理问题

[方法总结](https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/06.02.html)

海量数据处理算法与面试题全集

所谓海量数据处理，是指基于海量数据的存储、处理、和操作。正因为数据量太大，所以导致要么无法在较短时间内迅速解决，要么无法一次性装入内存。

时间问题，可以采用巧妙的算法搭配合适的数据结构（如布隆过滤器、哈希、位图、堆、数据库、倒排索引、Trie 树）来解决；

空间问题，可以采取分而治之（哈希映射）的方法，也就是说，把规模大的数据转化为规模小的，从而各个击破。

此外，针对常说的单机及集群问题，通俗来讲，单机就是指处理装载数据的机器有限（只要考虑 CPU、内存、和硬盘之间的数据交互），而集群的意思是指机器有多台，适合分布式处理或并行计算，更多考虑节点与节点之间的数据交互。

- 哈希分治；
- simhash 算法；
- 外排序；
- MapReduce；
- 多层划分；
- 位图 bitmap；
- 布隆过滤器 bloom filter；
- Trie 树；
- 数据库；
- 倒排索引

> [最好的分类的讲解](https://doocs.github.io/advanced-java/#/docs/big-data/find-top-1-ip)

海量数据大多数，分成小文件处理，分治

https://blog.csdn.net/wanger61/article/details/110004130

https://blog.csdn.net/v_JULY_v/article/details/7382693?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery

数据量太大，无法在短时间内迅速处理怎么办？
无法一次性装入内存怎么办？
文件太大怎么办，如何优化性能进行提速？

1. 分治法 DivConquer

2. 位图法 BitMap

   拓展：布隆过滤器

   布隆过滤器由「初始值都为 0 的位图数组」和「 N 个哈希函数」

   - 如果布隆过滤器判断一个元素**不在**一个集合中，那这个元素一定不在集合中。
   - 如果布隆过滤器判断一个元素**在**一个集合中，不一定在。

最高频 K 项问题

- 问题分析
- 最高频 K 项的离线算法
- 标准离线算法的提速
- 标准离线算法的空间优化
- 最高频 K 项的在线算法
- 标准在线算法的空间优化
- 相关面试题
  - 最近 7 天的热门歌曲
  - 访问 Baidu 次数最多的 IP

布隆过滤器（Bloom Filter）

- 标准布隆过滤器（Standard Bloom Filter）
- 计数布隆过滤器 Counting Bloom Filter

外排序算法

- 外排序算法的基本步骤
- 相关面试题

概率类的大数据问题

---

- 外排序算法(External Sorting)
- Map Reduce
- 近似算法 Approximation Algorithm
- 概率算法
- 哈希算法与哈希函数 Hash Function
- 哈希表 Hash Table
- 堆 Heap
- 布隆过滤器 BloomFilter
- 位图 Bitmap
