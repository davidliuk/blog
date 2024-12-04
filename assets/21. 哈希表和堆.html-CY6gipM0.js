import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as p,o as n}from"./app-CybQbXIt.js";const i={};function s(h,a){return n(),t("div",null,a[0]||(a[0]=[p('<h1 id="数据结构-哈希表与堆" tabindex="-1"><a class="header-anchor" href="#数据结构-哈希表与堆"><span>数据结构：哈希表与堆</span></a></h1><p>数据结构类面试问题的三种考法</p><p>考法1：问某种数据结构的基本原理，并要求实现<br> 例题：说一下Hash的原理并实现一个Hash表</p><p>考法2：使用某种数据结构完成事情<br> 例题：归并K个有序数组</p><p>考法3：多个数据结构配合在一起使用，提供一些特定的功能<br> 例题：LRU</p><h3 id="set-hashset" tabindex="-1"><a class="header-anchor" href="#set-hashset"><span>Set / HashSet</span></a></h3><p>特点：数据无重复，且无序</p><p>应用：去重，快速查找某数据是否存在</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 21.11.56.png" alt="截屏2022-08-08 21.11.56" loading="lazy"></p><p>应用：分类计数，存储且快速找到key所对应的value</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 21.13.48.png" alt="截屏2022-08-08 21.13.48" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 21.13.09.png" alt="截屏2022-08-08 21.13.09" loading="lazy"></p><p>链表：</p><p>dummy点的作用:</p><blockquote><p>dummy点为头结点的前一个节点</p><p>如果没有dummy点，头结点就没有前一个节点</p><p>而其他点都有前一个节点，所以需要分类讨论，逻辑复杂</p></blockquote><h2 id="数据结构设计题" tabindex="-1"><a class="header-anchor" href="#数据结构设计题"><span>数据结构设计题</span></a></h2><h3 id="常见解决线性表缺陷的方法" tabindex="-1"><a class="header-anchor" href="#常见解决线性表缺陷的方法"><span>常见解决线性表缺陷的方法</span></a></h3><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表"><span>链表</span></a></h3><p>迅速找到链表中要被删的元素：</p><ul><li><p>用HashMap</p><p>如LRU中，keyToPrev</p></li></ul><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>ArrayList插入和删除加速，如果不关心顺序：</p><ul><li><p>插入只插到末尾O1</p><p>（如堆的底层实现）</p></li><li><p>删除中间元素时，把中间元素用末尾元素覆盖，然后删掉末尾O1</p><p>（如堆的底层实现）</p></li></ul><h3 id="设计lru-cache" tabindex="-1"><a class="header-anchor" href="#设计lru-cache"><span>设计LRU Cache</span></a></h3><p>映射</p><p>LinkedList</p><p>HashMap：keyToPrev</p><p>顺序非常重要，</p><p>有LinkedHashMap（Order），也可以直接用这个</p><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 22.55.36.png" alt="截屏2022-08-08 22.55.36" loading="lazy"></p><p>第n个丑数</p><h3 id="离线算法-vs-在线算法" tabindex="-1"><a class="header-anchor" href="#离线算法-vs-在线算法"><span>离线算法 vs 在线算法</span></a></h3><p>普通算法问题，数据结构设计类问题</p><p>数据给定，数据流问题</p><p>一次输入输出，多次输入和输出</p><p>离线找到最小的k个元素</p><p>时空复杂度最低的方法是：最大堆NlogK（或者快速选择平均On但最差On2）</p><p>在线找到最大的k个元素</p><p>最大的k元素用小堆，最小的k元素用大堆，</p><h3 id="数据结构考点" tabindex="-1"><a class="header-anchor" href="#数据结构考点"><span>数据结构考点</span></a></h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 23.34.58.png" alt="截屏2022-08-08 23.34.58" loading="lazy"></p>',42)]))}const o=e(i,[["render",s],["__file","21. 哈希表和堆.html.vue"]]),r=JSON.parse(`{"path":"/algo/jiuzhang/21.%20%E5%93%88%E5%B8%8C%E8%A1%A8%E5%92%8C%E5%A0%86.html","title":"数据结构：哈希表与堆","lang":"en-US","frontmatter":{"description":"数据结构：哈希表与堆 数据结构类面试问题的三种考法 考法1：问某种数据结构的基本原理，并要求实现 例题：说一下Hash的原理并实现一个Hash表 考法2：使用某种数据结构完成事情 例题：归并K个有序数组 考法3：多个数据结构配合在一起使用，提供一些特定的功能 例题：LRU Set / HashSet 特点：数据无重复，且无序 应用：去重，快速查找某数据...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/jiuzhang/21.%20%E5%93%88%E5%B8%8C%E8%A1%A8%E5%92%8C%E5%A0%86.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"数据结构：哈希表与堆"}],["meta",{"property":"og:description","content":"数据结构：哈希表与堆 数据结构类面试问题的三种考法 考法1：问某种数据结构的基本原理，并要求实现 例题：说一下Hash的原理并实现一个Hash表 考法2：使用某种数据结构完成事情 例题：归并K个有序数组 考法3：多个数据结构配合在一起使用，提供一些特定的功能 例题：LRU Set / HashSet 特点：数据无重复，且无序 应用：去重，快速查找某数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2021.11.56.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据结构：哈希表与堆\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2021.11.56.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2021.13.48.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2021.13.09.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2022.55.36.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-08%2023.34.58.png\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Set / HashSet","slug":"set-hashset","link":"#set-hashset","children":[]},{"level":2,"title":"数据结构设计题","slug":"数据结构设计题","link":"#数据结构设计题","children":[{"level":3,"title":"常见解决线性表缺陷的方法","slug":"常见解决线性表缺陷的方法","link":"#常见解决线性表缺陷的方法","children":[]},{"level":3,"title":"链表","slug":"链表","link":"#链表","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"设计LRU Cache","slug":"设计lru-cache","link":"#设计lru-cache","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"离线算法 vs 在线算法","slug":"离线算法-vs-在线算法","link":"#离线算法-vs-在线算法","children":[]},{"level":3,"title":"数据结构考点","slug":"数据结构考点","link":"#数据结构考点","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"algo/jiuzhang/21. 哈希表和堆.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>数据结构类面试问题的三种考法</p>\\n<p>考法1：问某种数据结构的基本原理，并要求实现<br>\\n例题：说一下Hash的原理并实现一个Hash表</p>\\n<p>考法2：使用某种数据结构完成事情<br>\\n例题：归并K个有序数组</p>\\n<p>考法3：多个数据结构配合在一起使用，提供一些特定的功能<br>\\n例题：LRU</p>\\n<h3>Set / HashSet</h3>\\n<p>特点：数据无重复，且无序</p>\\n<p>应用：去重，快速查找某数据是否存在</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 21.11.56.png\\" alt=\\"截屏2022-08-08 21.11.56\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{o as comp,r as data};
