const t=JSON.parse(`{"key":"v-48443ca0","path":"/cs/algo/summary/optimise/dynamic-programming/","title":"动态规划","lang":"en-US","frontmatter":{"description":"动态规划 1、遍历的过程中，所需的状态必须是已经计算出来的。 2、遍历结束后，存储结果的那个位置必须已经被计算出来。 对动态规划进行降维打击 dp定义： 子序列问题定义： dp[i]：以num[i]为结尾的值 优化： 空间：滚动数组优化 多开一个位置，然后%，可以减少rotate的时间，时间空间优化很大 如果仅以来于上一层，甚至可以滚动数组都无需开，但是需要注意顺序： 倒序更新，如01背包问题、三角形路径问题 正序更新，如完全背包问题、矩阵路径问题 时间：斜率优化","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/optimise/dynamic-programming/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"动态规划"}],["meta",{"property":"og:description","content":"动态规划 1、遍历的过程中，所需的状态必须是已经计算出来的。 2、遍历结束后，存储结果的那个位置必须已经被计算出来。 对动态规划进行降维打击 dp定义： 子序列问题定义： dp[i]：以num[i]为结尾的值 优化： 空间：滚动数组优化 多开一个位置，然后%，可以减少rotate的时间，时间空间优化很大 如果仅以来于上一层，甚至可以滚动数组都无需开，但是需要注意顺序： 倒序更新，如01背包问题、三角形路径问题 正序更新，如完全背包问题、矩阵路径问题 时间：斜率优化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-20T14:10:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-20T14:10:49.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/algo/summary/optimise/dynamic-programming/"}]]},"headers":[],"git":{"createdTime":1674813807000,"updatedTime":1679321449000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.11,"words":334},"localizedDate":"January 27, 2023","filePathRelative":"cs/algo/summary/optimise/dynamic-programming/README.md","excerpt":"<h1> 动态规划</h1>\\n<p><strong>1、遍历的过程中，所需的状态必须是已经计算出来的</strong>。</p>\\n<p><strong>2、遍历结束后，存储结果的那个位置必须已经被计算出来</strong>。</p>\\n<p>对动态规划进行降维打击</p>\\n<p>dp定义：</p>\\n<ul>\\n<li>\\n<p>子序列问题定义：</p>\\n<p>dp[i]：以num[i]为结尾的值</p>\\n</li>\\n</ul>\\n<p>优化：</p>\\n<ul>\\n<li>\\n<p>空间：滚动数组优化</p>\\n<p>多开一个位置，然后%，可以减少rotate的时间，时间空间优化很大</p>\\n<p>如果仅以来于上一层，甚至可以滚动数组都无需开，但是需要注意顺序：</p>\\n<ul>\\n<li>倒序更新，如01背包问题、三角形路径问题</li>\\n<li>正序更新，如完全背包问题、矩阵路径问题</li>\\n</ul>\\n</li>\\n<li>\\n<p>时间：斜率优化</p>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
