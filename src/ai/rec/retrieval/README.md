# Retrieval

召回链路：协同过滤、双塔模型、关注的作者等

几亿-》几百

粗排、精排

用户特征、物品特征、统计特征

ItemCF

召回通道

- ItemCF
- swing
- UserCF
- DSSM
- deep retrieval
- 地理位置召回
  - GeoHash 召回
  - 同城召回
- 作者召回
  - 作者召回
  - 有交互的作者召回
  - 相似作者召回
- 缓存召回：复用前 n 次推荐精排的结果
  - lru

---

- 统计类，热度，LBS；
- 协同过滤类，UserCF、ItemCF；
- U2T2I，如基于 user tag 召回；
- I2I 类，如 Embedding（Word2Vec、FastText），GraphEmbedding（Node2Vec、DeepWalk、EGES）；
- U2I 类，如 DSSM、YouTube DNN、Sentence Bert
