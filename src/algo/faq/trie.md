# Trie

字典树的基本操作

- 插入单词
- 前缀计数
- 查找单词
- 查找前缀

字典树的题型

- 直接操作字典树

- 在字典树上深度优先搜索

- 使用字典树加速其他算法，DP eg. k edit distance

字典树中的相同前缀越多字典树的优化效果越明显
每次添加字符串，查询字符串复杂度最优均为O(L)
最坏情况仍然需要遍历整棵树来得到结果

|                           LeetCode                           |                             力扣                             | 难度 |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
| [1804. Implement Trie II (Prefix Tree)open in new window](https://leetcode.com/problems/implement-trie-ii-prefix-tree/)🔒 | [1804. 实现 Trie （前缀树） IIopen in new window](https://leetcode.cn/problems/implement-trie-ii-prefix-tree/)🔒 |  🟠   |
| [208. Implement Trie (Prefix Tree)open in new window](https://leetcode.com/problems/implement-trie-prefix-tree/) | [208. 实现 Trie (前缀树)open in new window](https://leetcode.cn/problems/implement-trie-prefix-tree/) |  🟠   |
| [211. Design Add and Search Words Data Structureopen in new window](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | [211. 添加与搜索单词 - 数据结构设计open in new window](https://leetcode.cn/problems/design-add-and-search-words-data-structure/) |  🟠   |
| [648. Replace Wordsopen in new window](https://leetcode.com/problems/replace-words/) | [648. 单词替换open in new window](https://leetcode.cn/problems/replace-words/) |  🟠   |
| [677. Map Sum Pairsopen in new window](https://leetcode.com/problems/map-sum-pairs/) | [677. 键值映射open in new window](https://leetcode.cn/problems/map-sum-pairs/) |  🟠   |
|                              -                               | [剑指 Offer II 062. 实现前缀树open in new window](https://leetcode.cn/problems/QC3q1f/) |  🟠   |
|                              -                               | [剑指 Offer II 063. 替换单词open in new window](https://leetcode.cn/problems/UhWRSj/) |  🟠   |
|                              -                               | [剑指 Offer II 066. 单词之和](https://leetcode.cn/problems/z1R5dt/) |      |

---

单词的添加于查找

---

识别字符串

---

单词搜索 II

---

拼图游戏

---

利用字符串的公共前缀来减少查询时间
最大限度减少无谓字符串的比较
操作时间复杂度均为O(L)

---

字典树的适用场景
使用字典树求解最长、最短的公共前缀
查询前缀问题

- 如何避免重复运算
- 前缀长度增加与字典树指针下移
- 辅助动态规划：K步编辑
- 辅助复杂DFS:单词搜索川

使用字典树解决单词矩阵

---

最大距离

后序遍历，多叉树最长路径