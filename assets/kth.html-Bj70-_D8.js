import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as i,o as c}from"./app-ktFCNIob.js";const a={};function d(m,e){return c(),o("div",null,e[0]||(e[0]=[i('<h1 id="第-k-th-优解" tabindex="-1"><a class="header-anchor" href="#第-k-th-优解"><span>第 K th 优解</span></a></h1><p>对于求次优解、第K优解类的问题，如果相应的最优解问题能写出状态转移方程、用动态规划解决，那么求次优解往往可以相同的复杂度解决，第K优解则比求最优解的复杂度上多一个系数K。</p><p>其基本思想是将每个状态都表示成有序队列，将状态转移方程中的max/min转化成有序队列的合并。这里仍然以01背包为例讲解一下。</p><p>首先看01背包求最优解的状态转移方程：<code>f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}</code>。如果要求第K优解，那么状态<code>f[i][v]</code>就应该是一个大小为K的数组<code>f[i][v][1..K]</code>。其中<code>f[i][v][k]</code>表示前i个物品、背包大小为 v时，第k优解的值。“f[i][v]是一个大小为K的数组”这一句，熟悉C语言的同学可能比较好理解，或者也可以简单地理解为在原来的方程中加了一维。 显然f[i][v][1..K]这K个数是由大到小排列的，所以我们把它认为是一个有序队列。</p><p>然后原方程就可以解释为：<code>f[i][v]</code>这个有序队列是由<code>f[i-1][v]</code>和<code>f[i-1][v-c[i]]+w[i]</code>这两个有序队列合并得到的。有序队列<code>f[i-1][v]</code>即<code>f[i-1][v][1..K]</code>，<code>f[i-1][v-c[i]]+w[i]</code>则理解为在<code>f[i-1][v-c[i]] [1..K]</code>的每个数上加上<code>w[i]</code>后得到的有序队列。合并这两个有序队列并将结果的前K项储存到<code>f[i][v][1..K]</code>中的复杂度是O(K)。最后的答案是<code>f[N][V][K]</code>。总的复杂度是O(VNK)。</p><p>为什么这个方法正确呢？实际上，一个正确的状态转移方程的求解过程遍历了所有可用的策略，也就覆盖了问题的所有方案。只不过由于是求最优解，所以其 它在任何一个策略上达不到最优的方案都被忽略了。如果把每个状态表示成一个大小为K的数组，并在这个数组中有序的保存该状态可取到的前K个最优值。那么， 对于任两个状态的max运算等价于两个由大到小的有序队列的合并。</p><p>另外还要注意题目对于“第K优解”的定义，将策略不同但权值相同的两个方案是看作同一个解还是不同的解。如果是前者，则维护有序队列时要保证队列里的数没有重的。</p>',7)]))}const n=t(a,[["render",d],["__file","kth.html.vue"]]),l=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E8%BF%9B%E9%98%B6/kth.html","title":"第 K th 优解","lang":"en-US","frontmatter":{"description":"第 K th 优解 对于求次优解、第K优解类的问题，如果相应的最优解问题能写出状态转移方程、用动态规划解决，那么求次优解往往可以相同的复杂度解决，第K优解则比求最优解的复杂度上多一个系数K。 其基本思想是将每个状态都表示成有序队列，将状态转移方程中的max/min转化成有序队列的合并。这里仍然以01背包为例讲解一下。 首先看01背包求最优解的状态转移方...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E8%BF%9B%E9%98%B6/kth.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"第 K th 优解"}],["meta",{"property":"og:description","content":"第 K th 优解 对于求次优解、第K优解类的问题，如果相应的最优解问题能写出状态转移方程、用动态规划解决，那么求次优解往往可以相同的复杂度解决，第K优解则比求最优解的复杂度上多一个系数K。 其基本思想是将每个状态都表示成有序队列，将状态转移方程中的max/min转化成有序队列的合并。这里仍然以01背包为例讲解一下。 首先看01背包求最优解的状态转移方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-01T21:36:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T21:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 K th 优解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T21:36:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1735767391000,"updatedTime":1735767391000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"algo/summary/optimise/dynamic-programming/进阶/kth.md","localizedDate":"January 1, 2025","excerpt":"\\n<p>对于求次优解、第K优解类的问题，如果相应的最优解问题能写出状态转移方程、用动态规划解决，那么求次优解往往可以相同的复杂度解决，第K优解则比求最优解的复杂度上多一个系数K。</p>\\n<p>其基本思想是将每个状态都表示成有序队列，将状态转移方程中的max/min转化成有序队列的合并。这里仍然以01背包为例讲解一下。</p>\\n<p>首先看01背包求最优解的状态转移方程：<code>f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}</code>。如果要求第K优解，那么状态<code>f[i][v]</code>就应该是一个大小为K的数组<code>f[i][v][1..K]</code>。其中<code>f[i][v][k]</code>表示前i个物品、背包大小为 v时，第k优解的值。“f[i][v]是一个大小为K的数组”这一句，熟悉C语言的同学可能比较好理解，或者也可以简单地理解为在原来的方程中加了一维。 显然f[i][v][1..K]这K个数是由大到小排列的，所以我们把它认为是一个有序队列。</p>","autoDesc":true}`);export{n as comp,l as data};