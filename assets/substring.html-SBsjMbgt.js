import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as a}from"./app-ktFCNIob.js";const l={};function o(p,e){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="substring" tabindex="-1"><a class="header-anchor" href="#substring"><span>Substring</span></a></h1><p>子串/子数组</p><p>可以考虑的算法</p><ol><li>前序型 DP</li><li>子串型 DP（Kadane 算法）</li><li>滑动窗口 <ol><li>滑动哈希 Robin Karp</li></ol></li></ol><p>eg. 718</p><p><a href="https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n4/?envType=study-plan-v2&amp;envId=coding-interviews-special" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n4/?envType=study-plan-v2&amp;envId=coding-interviews-special</a></p><p>DP问题有两种很典型的问题：子数组和子序列。</p><ul><li><p>求子数组时，一般是O(n)，因为我们求dp[i]时，只用考虑dp[i-1]。再往前就没法连续了。</p></li><li><p>求子序列时，一般是O(n^2)，我们需要考虑所有dp[j] (j&lt;i)。如 300. 最长递增子序列</p></li></ul><h2 id="和积最值问题" tabindex="-1"><a class="header-anchor" href="#和积最值问题"><span>和积<strong>最值</strong>问题</span></a></h2><blockquote><p>第i位置的答案，一定由第i-1位置的答案发展而来，不用考虑i-2, i-3...<br> 因此用坐标dp，可以做到O(n)。</p></blockquote><ol><li>最大子数组和</li></ol><p>普通DP。因为它向前扩展必连上dp[i-1]，考虑dp[i-2]的话就不是连续子数组了。<br> 有一个更优解法判断 sum 是否大于0的，其实就是化简后的普通DP。</p><ol start="2"><li>乘积最大子数组</li></ol><p>可普通DP，同上。只不过是状态机DP。</p><h2 id="和积定值问题" tabindex="-1"><a class="header-anchor" href="#和积定值问题"><span>和积<strong>定值</strong>问题</span></a></h2><h3 id="同向滑窗" tabindex="-1"><a class="header-anchor" href="#同向滑窗"><span>同向滑窗</span></a></h3><blockquote><p>双指针，以右边界为循环重心，每次+1；不满足条件时左边界收缩。<br> 要求：右指针右移 和 左指针右移 效果相反。这样收缩左边界才可以抵消扩张右边界带来的作用。</p></blockquote><p>剑指 Offer II 008. 和大于等于 target 的最短子数组</p><p>实用建议：推荐 建立窗口 和 移动窗口 写在一个循环中。不推荐滑窗先写个循环建立窗口，再写个循环向右滑动。建立窗口循环末尾容易漏掉这种情况：窗口盛满序列时，还需要移动窗口左边缘以达到最优解。</p><h3 id="前缀和-哈希" tabindex="-1"><a class="header-anchor" href="#前缀和-哈希"><span>前缀和 + 哈希</span></a></h3><p>前缀和数组，把子数组和问题转化为两数之差（类似 两数之和）问题。用哈希就欧了。</p><p>lc560. 和为 K 的子数组</p><p>这个题很多人直接滑窗然后错了。如果数据中没有负数，才能用滑窗。因为全正数的话，右指针右移 和 左指针右移 效果相反：前者使sum增加，后者使sum减小。</p><p>0 和 1 个数相同的子数组</p><p>这个题题解没人说为什么不能滑窗。但其实新手很容易想到滑窗，然后无法解决。一样的道理：左指针右移 和 右指针右移，并不能保证效果相反。右指针右移，可能导致增加一个0；此时收缩窗口，右移左指针，却不能保证减少一个0或增加一个1。</p><p>现在，我们确定不能滑窗。题解大多数上来就说把0换成-1即可，没有人说怎么想到这个思路。这个思路有没有一个通用的方法能让我们想出来呢？其实也是有的。横线下方即本题题解。进入题解之前，我们先思考一些有趣的内容，这有助于我们将方法迁移到更多的题目上。</p><h2 id="等价转换" tabindex="-1"><a class="header-anchor" href="#等价转换"><span>等价转换</span></a></h2>',27)]))}const c=n(l,[["render",o],["__file","substring.html.vue"]]),d=JSON.parse(`{"path":"/algo/faq/substring.html","title":"Substring","lang":"en-US","frontmatter":{"description":"Substring 子串/子数组 可以考虑的算法 前序型 DP 子串型 DP（Kadane 算法） 滑动窗口 滑动哈希 Robin Karp eg. 718 https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/substring.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Substring"}],["meta",{"property":"og:description","content":"Substring 子串/子数组 可以考虑的算法 前序型 DP 子串型 DP（Kadane 算法） 滑动窗口 滑动哈希 Robin Karp eg. 718 https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Substring\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"和积最值问题","slug":"和积最值问题","link":"#和积最值问题","children":[]},{"level":2,"title":"和积定值问题","slug":"和积定值问题","link":"#和积定值问题","children":[{"level":3,"title":"同向滑窗","slug":"同向滑窗","link":"#同向滑窗","children":[]},{"level":3,"title":"前缀和 + 哈希","slug":"前缀和-哈希","link":"#前缀和-哈希","children":[]}]},{"level":2,"title":"等价转换","slug":"等价转换","link":"#等价转换","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":2.64,"words":791},"filePathRelative":"algo/faq/substring.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>子串/子数组</p>\\n<p>可以考虑的算法</p>\\n<ol>\\n<li>前序型 DP</li>\\n<li>子串型 DP（Kadane 算法）</li>\\n<li>滑动窗口\\n<ol>\\n<li>滑动哈希 Robin Karp</li>\\n</ol>\\n</li>\\n</ol>\\n<p>eg. 718</p>\\n<p><a href=\\"https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n4/?envType=study-plan-v2&amp;envId=coding-interviews-special\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://leetcode.cn/problems/A1NYOS/solutions/1287019/chang-jian-zi-shu-zu-wen-ti-tong-yong-ji-v0n4/?envType=study-plan-v2&amp;envId=coding-interviews-special</a></p>","autoDesc":true}`);export{c as comp,d as data};