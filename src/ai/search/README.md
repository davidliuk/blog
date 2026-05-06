# Search Engine

搜索和推荐很像，都在做 `retrieval + ranking`；不同的是搜索通常从一个显式 query 出发，而推荐更多从长期兴趣和上下文状态出发。

## This Section Is About

- `query`: 用户如何表达意图，系统如何理解 query。
- `SUG`: 搜索前的意图补全和 query reformulation。
- `retrieval`: 先从大索引里取候选，再交给后续模型做精细判断。
- `ranking`: 在相关性、时效性、商业目标之间做平衡。

## How to Read It

1. 先把搜索看成“有 query 的分发系统”。
2. 再把它和 [Recommender System](../rec-sys/) 对照着看。
3. 重点比较两者在召回、排序和目标函数上的异同。

## Quick Links

- [Recommender Retrieval](../rec-sys/retrieval/)
- [Recommender Ranking](../rec-sys/ranking/)