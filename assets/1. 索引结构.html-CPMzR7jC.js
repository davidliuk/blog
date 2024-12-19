import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as t,o as i}from"./app-PqS9YW_3.js";const p={};function n(o,e){return i(),l("div",null,e[0]||(e[0]=[t('<h1 id="索引结构" tabindex="-1"><a class="header-anchor" href="#索引结构"><span>索引结构</span></a></h1><h2 id="索引结构分类" tabindex="-1"><a class="header-anchor" href="#索引结构分类"><span>索引结构分类</span></a></h2><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.56.58.png" alt="截屏2022-07-28 20.56.58" loading="lazy"></p><p>支持情况</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.57.23.png" alt="截屏2022-07-28 20.57.23" loading="lazy"></p><h3 id="bst-二叉查找树" tabindex="-1"><a class="header-anchor" href="#bst-二叉查找树"><span>BST 二叉查找树</span></a></h3><p>缺点：</p><ul><li>不平衡，顺序插入时，形成链表（退化），查询性能大大降低。</li><li>大数据量情况下，层级较深，检索速度慢。</li></ul><h3 id="avl-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#avl-平衡二叉树"><span>AVL 平衡二叉树</span></a></h3><p>优点：始终保持平衡，操作都是稳定logn复杂度</p><p>缺点：旋转耗时</p><h3 id="rbt-红黑树" tabindex="-1"><a class="header-anchor" href="#rbt-红黑树"><span>RBT 红黑树</span></a></h3><p>性质 ：</p><ol><li><p>结点是红色或黑色。</p></li><li><p>根结点是黑色。</p></li><li><p>所有叶子都是黑色。</p><p>（叶子是 NIL 结点）</p></li><li><p>每个红色结点的两个子结点都是黑色。</p><p>（从每个叶子到根的所有路径上不能有两个连续的红色结点）</p></li><li><p>从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。</p></li></ol><p>优点：相比于 AVL 树，无需频繁旋转，更加省时</p><p>缺点：大数据量情况下，层级仍然较深，检索速度慢</p><h3 id="b-tree" tabindex="-1"><a class="header-anchor" href="#b-tree"><span>B-Tree</span></a></h3><blockquote><p>多路平衡查找树</p></blockquote><p>B树也称B-树（其中-不是减号），是为磁盘等辅存设备设计的多路平衡查找树，与二叉树相比，B树的每个非叶节点可以有多个子树。因此，当总节点数量相同时，B树的高度远远小于AVL树和红黑树(B树是一颗“矮胖子”)，磁盘IO次数大大减少。</p><p>定义B树最重要的概念是阶数(Order),对于一颗m阶B树，需要满足以下条件：</p><p>以一颗最大度数(max-degree)为 5 阶的 b-tree 为例(每个节点最多存储 4 个 key，5 个指针)，中间元素<strong>向上分裂</strong>。</p><p>缺点：</p><ul><li>每个节点均存数据，可以记录的子树有限，层数相对还是较深。</li></ul><h3 id="b-tree-1" tabindex="-1"><a class="header-anchor" href="#b-tree-1"><span>B+Tree</span></a></h3><p>数据存储只在叶子结点中</p><p>非叶结点只起索引的作用，叶子结点形成一个单向链表</p><p>中间元素向上分裂，同时会保留在右子树里</p><p>MySQL 中对 B+Tree 进行了优化，叶子层单向指针变成双向，更加便于范围查询</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 21.19.21.png" alt="截屏2022-07-28 21.19.21" loading="lazy"></p><p>一页 16k，上面层，每一个节点都只存 key 和指针，就可以存很多很多</p><blockquote><p>InnoDB 主键索引 B+tree 高度估算：</p><p>一个页 16k，一层大概有 1171 个指针</p><p>2 层是 2w 数据，即使存 2kw 多的数据，也只有 3 层，B+树一般是2-4层</p></blockquote><p>优点：</p><ul><li><p>更少的 IO 次数：B+树的非叶节点只包含键，而不包含真实数据，因此每个节点存储的记录个数比 B 数多很多（即阶 m 更大），因此 B+树的高度更低，访问时所需要的 IO 次数更少。此外，由于每个节点存储的记录数更多，所以对访问局部性原理的利用更好，缓存命中率更高。</p></li><li><p>更适于范围查询：</p><ul><li>B 树中进行范围查询时，首先找到要查找的下限，然后对 B 树进行中序遍历，直到找到查找的上限；</li><li>B+树的范围查询，只需要对链表进行遍历即可。</li></ul></li><li><p>更稳定的查询效率：</p><ul><li>B 树的查询时间复杂度在 1 到树高之间(分别对应记录在根节点和叶节点)</li><li>B+树的查询复杂度则稳定为树高，因为所有数据都在叶节点。</li></ul></li></ul><p>劣势：由于键会重复出现，因此会占用更多的空间。但是与带来的性能优势相比，空间劣势往往可以接受，因此 B+树的在数据库中的使用比 B 树更加广泛。</p><h3 id="hash-索引" tabindex="-1"><a class="header-anchor" href="#hash-索引"><span>Hash 索引</span></a></h3><p>特点：冲突时，就用链表存储</p><p>优点：查询效率高，O1</p><p>缺点：只支持等值匹配，不支持范围索引和排序操作</p><p>只有 Memory 引擎支持</p><p>而 InnoDB 中具有自适应 Hash 索引（内存结构 Buffer Pool），满足条件时，自动设计为 Hash</p><h2 id="为什么采用-b-树" tabindex="-1"><a class="header-anchor" href="#为什么采用-b-树"><span>为什么采用 B+ 树</span></a></h2><ul><li><p>相对于二叉树，层级更少，搜索效率高；</p></li><li><p>相对于 B-tree，</p><ul><li>无论是叶子节点还是非叶子节点，都会存数据，这样导致一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低；</li></ul></li><li><p>而且 B+搜索效率稳定，而且最下层有双向链表，便于范围搜索和排序</p></li><li><p>相比于 Hash，B+支持范围索引（模糊查询）和排序操作</p></li></ul>',42)]))}const h=a(p,[["render",n],["__file","1. 索引结构.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/mysql/index/1.%20%E7%B4%A2%E5%BC%95%E7%BB%93%E6%9E%84.html","title":"索引结构","lang":"en-US","frontmatter":{"description":"索引结构 索引结构分类 截屏2022-07-28 20.56.58 支持情况 截屏2022-07-28 20.57.23 BST 二叉查找树 缺点： 不平衡，顺序插入时，形成链表（退化），查询性能大大降低。 大数据量情况下，层级较深，检索速度慢。 AVL 平衡二叉树 优点：始终保持平衡，操作都是稳定logn复杂度 缺点：旋转耗时 RBT 红黑树 性质 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/1.%20%E7%B4%A2%E5%BC%95%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"索引结构"}],["meta",{"property":"og:description","content":"索引结构 索引结构分类 截屏2022-07-28 20.56.58 支持情况 截屏2022-07-28 20.57.23 BST 二叉查找树 缺点： 不平衡，顺序插入时，形成链表（退化），查询性能大大降低。 大数据量情况下，层级较深，检索速度慢。 AVL 平衡二叉树 优点：始终保持平衡，操作都是稳定logn复杂度 缺点：旋转耗时 RBT 红黑树 性质 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2020.56.58.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引结构\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2020.56.58.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2020.57.23.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2021.19.21.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"索引结构分类","slug":"索引结构分类","link":"#索引结构分类","children":[{"level":3,"title":"BST 二叉查找树","slug":"bst-二叉查找树","link":"#bst-二叉查找树","children":[]},{"level":3,"title":"AVL 平衡二叉树","slug":"avl-平衡二叉树","link":"#avl-平衡二叉树","children":[]},{"level":3,"title":"RBT 红黑树","slug":"rbt-红黑树","link":"#rbt-红黑树","children":[]},{"level":3,"title":"B-Tree","slug":"b-tree","link":"#b-tree","children":[]},{"level":3,"title":"B+Tree","slug":"b-tree-1","link":"#b-tree-1","children":[]},{"level":3,"title":"Hash 索引","slug":"hash-索引","link":"#hash-索引","children":[]}]},{"level":2,"title":"为什么采用 B+ 树","slug":"为什么采用-b-树","link":"#为什么采用-b-树","children":[]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"cs/database/mysql/index/1. 索引结构.md","localizedDate":"January 3, 2023","excerpt":"\\n<h2>索引结构分类</h2>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.56.58.png\\" alt=\\"截屏2022-07-28 20.56.58\\" loading=\\"lazy\\"></p>\\n<p>支持情况</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.57.23.png\\" alt=\\"截屏2022-07-28 20.57.23\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{h as comp,c as data};
