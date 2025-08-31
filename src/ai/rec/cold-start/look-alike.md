# Look-Alike

![image-20250825103643828](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825103643828.png)

- 如何计算两个用户的相似度？
  - UserCF:两个用户有共同的兴趣点。
  - Embedding：两个用户向量的cosine较大

Look-Alike人群扩散召回

- ,点击、点赞、收藏、转发一用户对笔记可能感兴趣。
- 把有交互的用户作为新笔记的种子用户。
- 用look-alike在相似用户中扩散。

新笔记召回

![image-20250825103744402](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825103744402.png)

- 近线更新特征向量（不需要实时更新，分钟级别即可）
- 特征向量是有交互的用户的向量的平均。
- 每当有用户交互该物品，更新笔记的特征向量。