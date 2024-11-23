import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as l,o as p}from"./app-CrF8c6p-.js";const i={};function o(r,n){return p(),e("div",null,n[0]||(n[0]=[l('<h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>Sort</span></a></h1><p>排序</p><p>快速排序、归并排序</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2><p>按时间复杂度分类</p><ul><li><p>O(n)</p><p>如，基数排序、桶排序、计数排序</p></li><li><p>O(nlogn)</p><p>如，快速排序、归并排序、堆排序</p></li><li><p>O(n2)</p><p>如，插入排序、简单选择排序、简单希尔排序</p></li><li><p>其他</p><p>优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳</p></li></ul><p>按排序方式分类</p><ul><li><p>基于交换类</p><p>效率的上限就是Onlogn</p></li><li><p>非交换类</p><p>效率的上限可以是On</p></li></ul><p>按稳定性分类</p><ul><li><p>稳定排序</p><p>如，归并排序、桶排序</p></li><li><p>非稳定排序</p><p>如，快速排序、堆排序</p></li></ul><h2 id="分类-1" tabindex="-1"><a class="header-anchor" href="#分类-1"><span>分类</span></a></h2><ul><li><p><strong>稳定</strong>：如果 A 原本在 B 前面，而 A=B，排序之后 A 仍然在 B 的前面。</p><ul><li>On2: Bubble Sort, Insertion Sort</li><li>Onlogn: Merge Sort</li><li>On: Counting Sort, Radix Sort, Bucket Sort</li></ul></li><li><p><strong>不稳定</strong>：如果 A 原本在 B 的前面，而 A=B，排序之后 A 可能会出现在 B 的后面。</p><ul><li>On2: Selection Sort, Shell Sort</li><li>Onlogn: Quick Sort, Heap Sort</li></ul></li><li><p><strong>内排序</strong>：所有排序操作都在内存中完成。</p></li><li><p><strong>外排序</strong>：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行。</p></li></ul>',12)]))}const u=t(i,[["render",o],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/algo/summary/structure/linear/array/sort/","title":"Sort","lang":"en-US","frontmatter":{"description":"Sort 排序 快速排序、归并排序 分类 按时间复杂度分类 O(n) 如，基数排序、桶排序、计数排序 O(nlogn) 如，快速排序、归并排序、堆排序 O(n2) 如，插入排序、简单选择排序、简单希尔排序 其他 优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳 按排序方式分类 基于交换类 效率的上限就是Onlogn 非交换...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/linear/array/sort/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Sort"}],["meta",{"property":"og:description","content":"Sort 排序 快速排序、归并排序 分类 按时间复杂度分类 O(n) 如，基数排序、桶排序、计数排序 O(nlogn) 如，快速排序、归并排序、堆排序 O(n2) 如，插入排序、简单选择排序、简单希尔排序 其他 优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳 按排序方式分类 基于交换类 效率的上限就是Onlogn 非交换..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T22:15:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T22:15:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sort\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T22:15:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":2,"title":"分类","slug":"分类-1","link":"#分类-1","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732400159000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":1,"words":300},"filePathRelative":"algo/summary/structure/linear/array/sort/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>排序</p>\\n<p>快速排序、归并排序</p>\\n<h2>分类</h2>\\n<p>按时间复杂度分类</p>\\n<ul>\\n<li>\\n<p>O(n)</p>\\n<p>如，基数排序、桶排序、计数排序</p>\\n</li>\\n<li>\\n<p>O(nlogn)</p>\\n<p>如，快速排序、归并排序、堆排序</p>\\n</li>\\n<li>\\n<p>O(n2)</p>\\n<p>如，插入排序、简单选择排序、简单希尔排序</p>\\n</li>\\n<li>\\n<p>其他</p>\\n<p>优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳</p>\\n</li>\\n</ul>\\n<p>按排序方式分类</p>\\n<ul>\\n<li>\\n<p>基于交换类</p>\\n<p>效率的上限就是Onlogn</p>\\n</li>\\n<li>\\n<p>非交换类</p>\\n<p>效率的上限可以是On</p>\\n</li>\\n</ul>","autoDesc":true}`);export{u as comp,c as data};
