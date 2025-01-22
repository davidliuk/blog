import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as n,o as e}from"./app-ktFCNIob.js";const r={};function l(s,t){return e(),i("div",null,t[0]||(t[0]=[n('<h1 id="divide-conquer" tabindex="-1"><a class="header-anchor" href="#divide-conquer"><span>Divide &amp; Conquer</span></a></h1><p>分治（divide and conquer），全称分而治之，是一种非常重要且常见的算法策略。分治通常基于递归实现，包括“分”和“治”两个步骤。</p><ol><li><strong>分（划分阶段）</strong>：递归地将原问题分解为两个或多个子问题，直至到达最小子问题时终止。</li><li><strong>治（合并阶段）</strong>：从已知解的最小子问题开始，从底至顶地将子问题的解进行合并，从而构建出原问题的解。</li></ol><p>如图 12-1 所示，“归并排序”是分治策略的典型应用之一。</p><ol><li><strong>分</strong>：递归地将原数组（原问题）划分为两个子数组（子问题），直到子数组只剩一个元素（最小子问题）。</li><li><strong>治</strong>：从底至顶地将有序的子数组（子问题的解）进行合并，从而得到有序的原数组（原问题的解）。</li></ol><p>一个问题是否适合使用分治解决，通常可以参考以下几个判断依据。</p><ol><li><strong>问题可以分解</strong>：原问题可以分解成规模更小、类似的子问题，以及能够以相同方式递归地进行划分。</li><li><strong>子问题是独立的</strong>：子问题之间没有重叠，互不依赖，可以独立解决。</li><li><strong>子问题的解可以合并</strong>：原问题的解通过合并子问题的解得来。</li></ol><p>显然，归并排序满足以上三个判断依据。</p><ol><li><strong>问题可以分解</strong>：递归地将数组（原问题）划分为两个子数组（子问题）。</li><li><strong>子问题是独立的</strong>：每个子数组都可以独立地进行排序（子问题可以独立进行求解）。</li><li><strong>子问题的解可以合并</strong>：两个有序子数组（子问题的解）可以合并为一个有序数组（原问题的解）。</li></ol><h2 id="分治常见应用" tabindex="-1"><a class="header-anchor" href="#分治常见应用"><span>分治常见应用</span></a></h2><p>一方面，分治可以用来解决许多经典算法问题。</p><ul><li><strong>寻找最近点对</strong>：该算法首先将点集分成两部分，然后分别找出两部分中的最近点对，最后找出跨越两部分的最近点对。</li><li><strong>大整数乘法</strong>：例如 Karatsuba 算法，它将大整数乘法分解为几个较小的整数的乘法和加法。</li><li><strong>矩阵乘法</strong>：例如 Strassen 算法，它将大矩阵乘法分解为多个小矩阵的乘法和加法。</li><li><strong>汉诺塔问题</strong>：汉诺塔问题可以通过递归解决，这是典型的分治策略应用。</li><li><strong>求解逆序对</strong>：在一个序列中，如果前面的数字大于后面的数字，那么这两个数字构成一个逆序对。求解逆序对问题可以利用分治的思想，借助归并排序进行求解。</li></ul><p>另一方面，分治在算法和数据结构的设计中应用得非常广泛。</p><ul><li><strong>二分查找</strong>：二分查找是将有序数组从中点索引处分为两部分，然后根据目标值与中间元素值比较结果，决定排除哪一半区间，并在剩余区间执行相同的二分操作。</li><li><strong>归并排序</strong>：本节开头已介绍，不再赘述。</li><li><strong>快速排序</strong>：快速排序是选取一个基准值，然后把数组分为两个子数组，一个子数组的元素比基准值小，另一子数组的元素比基准值大，再对这两部分进行相同的划分操作，直至子数组只剩下一个元素。</li><li><strong>桶排序</strong>：桶排序的基本思想是将数据分散到多个桶，然后对每个桶内的元素进行排序，最后将各个桶的元素依次取出，从而得到一个有序数组。</li><li><strong>树</strong>：例如二叉搜索树、AVL 树、红黑树、B 树、B+ 树等，它们的查找、插入和删除等操作都可以视为分治策略的应用。</li><li><strong>堆</strong>：堆是一种特殊的完全二叉树，其各种操作，如插入、删除和堆化，实际上都隐含了分治的思想。</li><li><strong>哈希表</strong>：虽然哈希表并不直接应用分治，但某些哈希冲突解决方案间接应用了分治策略，例如，链式地址中的长链表会被转化为红黑树，以提升查询效率。</li></ul><p>可以看出，<strong>分治是一种“润物细无声”的算法思想</strong>，隐含在各种算法与数据结构之中。</p>',15)]))}const d=o(r,[["render",l],["__file","div-conq.html.vue"]]),p=JSON.parse(`{"path":"/algo/faq/div-conq.html","title":"Divide & Conquer","lang":"en-US","frontmatter":{"description":"Divide & Conquer 分治（divide and conquer），全称分而治之，是一种非常重要且常见的算法策略。分治通常基于递归实现，包括“分”和“治”两个步骤。 分（划分阶段）：递归地将原问题分解为两个或多个子问题，直至到达最小子问题时终止。 治（合并阶段）：从已知解的最小子问题开始，从底至顶地将子问题的解进行合并，从而构建出原问题的解...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/div-conq.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Divide & Conquer"}],["meta",{"property":"og:description","content":"Divide & Conquer 分治（divide and conquer），全称分而治之，是一种非常重要且常见的算法策略。分治通常基于递归实现，包括“分”和“治”两个步骤。 分（划分阶段）：递归地将原问题分解为两个或多个子问题，直至到达最小子问题时终止。 治（合并阶段）：从已知解的最小子问题开始，从底至顶地将子问题的解进行合并，从而构建出原问题的解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T01:45:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T01:45:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Divide & Conquer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T01:45:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"分治常见应用","slug":"分治常见应用","link":"#分治常见应用","children":[]}],"git":{"createdTime":1734054342000,"updatedTime":1734054342000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.71,"words":1113},"filePathRelative":"algo/faq/div-conq.md","localizedDate":"December 13, 2024","excerpt":"\\n<p>分治（divide and conquer），全称分而治之，是一种非常重要且常见的算法策略。分治通常基于递归实现，包括“分”和“治”两个步骤。</p>\\n<ol>\\n<li><strong>分（划分阶段）</strong>：递归地将原问题分解为两个或多个子问题，直至到达最小子问题时终止。</li>\\n<li><strong>治（合并阶段）</strong>：从已知解的最小子问题开始，从底至顶地将子问题的解进行合并，从而构建出原问题的解。</li>\\n</ol>\\n<p>如图 12-1 所示，“归并排序”是分治策略的典型应用之一。</p>\\n<ol>\\n<li><strong>分</strong>：递归地将原数组（原问题）划分为两个子数组（子问题），直到子数组只剩一个元素（最小子问题）。</li>\\n<li><strong>治</strong>：从底至顶地将有序的子数组（子问题的解）进行合并，从而得到有序的原数组（原问题的解）。</li>\\n</ol>","autoDesc":true}`);export{d as comp,p as data};
