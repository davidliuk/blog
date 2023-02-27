# HashMap



capacity，factor

capacity是元素个数，factor只有构造的时候考虑（容量初始设置比capacity/factor大的第一个2^n），后面还是按3/4



扩容：

- 1.8及以后，满3/4时就扩容
- 1.8以前，超3/4时扩容





扩容的时候，从后往前迁移

迁移的时候划分区间来迁移



