import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as n,o as l}from"./app-ktFCNIob.js";const i={};function a(o,e){return l(),r("div",null,e[0]||(e[0]=[n('<h1 id="字典树" tabindex="-1"><a class="header-anchor" href="#字典树"><span>字典树</span></a></h1><p>字典树的基本操作</p><ul><li>插入单词</li><li>前缀计数</li><li>查找单词</li><li>查找前缀</li></ul><p>字典树的题型</p><ul><li><p>直接操作字典树</p></li><li><p>在字典树上深度优先搜索</p></li><li><p>使用字典树加速其他算法，DP eg. k edit distance</p></li></ul><p>字典树中的相同前缀越多字典树的优化效果越明显<br> 每次添加字符串，查询字符串复杂度最优均为O(L)<br> 最坏情况仍然需要遍历整棵树来得到结果</p><table><thead><tr><th style="text-align:center;">LeetCode</th><th style="text-align:center;">力扣</th><th style="text-align:center;">难度</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://leetcode.com/problems/implement-trie-ii-prefix-tree/" target="_blank" rel="noopener noreferrer">1804. Implement Trie II (Prefix Tree)open in new window</a>🔒</td><td style="text-align:center;"><a href="https://leetcode.cn/problems/implement-trie-ii-prefix-tree/" target="_blank" rel="noopener noreferrer">1804. 实现 Trie （前缀树） IIopen in new window</a>🔒</td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;"><a href="https://leetcode.com/problems/implement-trie-prefix-tree/" target="_blank" rel="noopener noreferrer">208. Implement Trie (Prefix Tree)open in new window</a></td><td style="text-align:center;"><a href="https://leetcode.cn/problems/implement-trie-prefix-tree/" target="_blank" rel="noopener noreferrer">208. 实现 Trie (前缀树)open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;"><a href="https://leetcode.com/problems/design-add-and-search-words-data-structure/" target="_blank" rel="noopener noreferrer">211. Design Add and Search Words Data Structureopen in new window</a></td><td style="text-align:center;"><a href="https://leetcode.cn/problems/design-add-and-search-words-data-structure/" target="_blank" rel="noopener noreferrer">211. 添加与搜索单词 - 数据结构设计open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;"><a href="https://leetcode.com/problems/replace-words/" target="_blank" rel="noopener noreferrer">648. Replace Wordsopen in new window</a></td><td style="text-align:center;"><a href="https://leetcode.cn/problems/replace-words/" target="_blank" rel="noopener noreferrer">648. 单词替换open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;"><a href="https://leetcode.com/problems/map-sum-pairs/" target="_blank" rel="noopener noreferrer">677. Map Sum Pairsopen in new window</a></td><td style="text-align:center;"><a href="https://leetcode.cn/problems/map-sum-pairs/" target="_blank" rel="noopener noreferrer">677. 键值映射open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://leetcode.cn/problems/QC3q1f/" target="_blank" rel="noopener noreferrer">剑指 Offer II 062. 实现前缀树open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://leetcode.cn/problems/UhWRSj/" target="_blank" rel="noopener noreferrer">剑指 Offer II 063. 替换单词open in new window</a></td><td style="text-align:center;">🟠</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://leetcode.cn/problems/z1R5dt/" target="_blank" rel="noopener noreferrer">剑指 Offer II 066. 单词之和</a></td><td style="text-align:center;"></td></tr></tbody></table><hr><p>单词的添加于查找</p><hr><p>识别字符串</p><hr><p>单词搜索 II</p><hr><p>拼图游戏</p><hr><p>利用字符串的公共前缀来减少查询时间<br> 最大限度减少无谓字符串的比较<br> 操作时间复杂度均为O(L)</p><hr><p>字典树的适用场景<br> 使用字典树求解最长、最短的公共前缀<br> 查询前缀问题</p><ul><li>如何避免重复运算</li><li>前缀长度增加与字典树指针下移</li><li>辅助动态规划：K步编辑</li><li>辅助复杂DFS:单词搜索川</li></ul><p>使用字典树解决单词矩阵</p><hr><p>最大距离</p><p>后序遍历，多叉树最长路径</p>',24)]))}const s=t(i,[["render",a],["__file","trie.html.vue"]]),c=JSON.parse(`{"path":"/algo/faq/trie.html","title":"字典树","lang":"en-US","frontmatter":{"description":"字典树 字典树的基本操作 插入单词 前缀计数 查找单词 查找前缀 字典树的题型 直接操作字典树 在字典树上深度优先搜索 使用字典树加速其他算法，DP eg. k edit distance 字典树中的相同前缀越多字典树的优化效果越明显 每次添加字符串，查询字符串复杂度最优均为O(L) 最坏情况仍然需要遍历整棵树来得到结果 单词的添加于查找 识别字符串 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/trie.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"字典树"}],["meta",{"property":"og:description","content":"字典树 字典树的基本操作 插入单词 前缀计数 查找单词 查找前缀 字典树的题型 直接操作字典树 在字典树上深度优先搜索 使用字典树加速其他算法，DP eg. k edit distance 字典树中的相同前缀越多字典树的优化效果越明显 每次添加字符串，查询字符串复杂度最优均为O(L) 最坏情况仍然需要遍历整棵树来得到结果 单词的添加于查找 识别字符串 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字典树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"algo/faq/trie.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>字典树的基本操作</p>\\n<ul>\\n<li>插入单词</li>\\n<li>前缀计数</li>\\n<li>查找单词</li>\\n<li>查找前缀</li>\\n</ul>\\n<p>字典树的题型</p>\\n<ul>\\n<li>\\n<p>直接操作字典树</p>\\n</li>\\n<li>\\n<p>在字典树上深度优先搜索</p>\\n</li>\\n<li>\\n<p>使用字典树加速其他算法，DP eg. k edit distance</p>\\n</li>\\n</ul>\\n<p>字典树中的相同前缀越多字典树的优化效果越明显<br>\\n每次添加字符串，查询字符串复杂度最优均为O(L)<br>\\n最坏情况仍然需要遍历整棵树来得到结果</p>\\n","autoDesc":true}`);export{s as comp,c as data};
