import{_ as a,V as e,W as p,Z as i}from"./framework-e5d7a6b2.js";const h={},r=i('<h1 id="索引结构" tabindex="-1"><a class="header-anchor" href="#索引结构" aria-hidden="true">#</a> 索引结构</h1><h2 id="索引结构分类" tabindex="-1"><a class="header-anchor" href="#索引结构分类" aria-hidden="true">#</a> 索引结构分类</h2><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.56.58.png" alt="截屏2022-07-28 20.56.58" loading="lazy"></p><p>支持情况</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.57.23.png" alt="截屏2022-07-28 20.57.23" loading="lazy"></p><h3 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树" aria-hidden="true">#</a> 二叉查找树</h3><p>缺点：</p><ul><li>不平衡，顺序插入时，形成链表（退化），查询性能大大降低。</li><li>大数据量情况下，层级较深，检索速度慢。</li></ul><h3 id="avl" tabindex="-1"><a class="header-anchor" href="#avl" aria-hidden="true">#</a> AVL</h3><p>缺点：旋转耗时</p><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h3><p>性质1. 结点是红色或黑色。</p><p>性质2. 根结点是黑色。</p><p>性质3. 所有叶子都是黑色。（叶子是NIL结点）</p><p>性质4. 每个红色结点的两个子结点都是黑色。（从每个叶子到根的所有路径上不能有两个连续的红色结点）</p><p>性质5. 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。</p><p>优点：相比于AVL树，无需频繁旋转，更加省时</p><p>缺点：大数据量情况下，层级仍然较深，检索速度慢</p><h3 id="b-tree" tabindex="-1"><a class="header-anchor" href="#b-tree" aria-hidden="true">#</a> B-Tree</h3><p>（多路平衡查找树）</p><p>以一颗最大度数(max-degree)为5阶的b-tree为例(每个节点最多存储4个key，5个指针)，中间元素向上分裂。</p><p>缺点</p><ul><li>每个节点均存数据，记录的子数有限，层数相对还是较深。</li></ul><h3 id="b-tree-1" tabindex="-1"><a class="header-anchor" href="#b-tree-1" aria-hidden="true">#</a> B+Tree</h3><p>所有的数据都会在叶子结点层</p><p>上面的元素只起索引的作用</p><p>叶子结点形成一个单向链表</p><p>中间元素向上分裂，同时会保留在右子树里</p><p>数据存储只在叶子结点中</p><p>MySQL中对B+Tree进行了优化，叶子层单向指针变成双向</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 21.19.21.png" alt="截屏2022-07-28 21.19.21" loading="lazy"></p><p>一页16k，上面层，每一个节点都只存key和指针，就可以存很多很多</p><blockquote><p>InnoDB主键索引B+tree高度估算：</p><p>一个页16k，一层大概有1171个指针</p><p>2层是2w数据，即使存2kw多的数据，也只有3层</p></blockquote><p>优点：</p><ul><li>更少的 IO 次数：B+树的非叶节点只包含键，而不包含真实数据，因此每个节点存储的记录个数比 B 数多很多（即阶 m 更大），因此 B+树的高度更低，访问时所需要的 IO 次数更少。此外，由于每个节点存储的记录数更多，所以对访问局部性原理的利用更好，缓存命中率更高。</li><li>更适于范围查询：在 B 树中进行范围查询时，首先找到要查找的下限，然后对 B 树进行中序遍历，直到找到查找的上限；而 B+树的范围查询，只需要对链表进行遍历即可。</li><li>更稳定的查询效率：B 树的查询时间复杂度在 1 到树高之间(分别对应记录在根节点和叶节点)，而 B+树的查询复杂度则稳定为树高，因为所有数据都在叶节点。</li></ul><p>劣势：由于键会重复出现，因此会占用更多的空间。但是与带来的性能优势相比，空间劣势往往可以接受，因此 B+树的在数据库中的使用比 B 树更加广泛。</p><h3 id="hash索引" tabindex="-1"><a class="header-anchor" href="#hash索引" aria-hidden="true">#</a> Hash索引</h3><p>特点：冲突时，就用链表存储</p><p>优点：查询效率高，O1</p><p>缺点：只支持等值匹配，不支持范围索引和排序操作</p><p>只有 Memory 引擎支持</p><p>而InnoDB中具有自适应Hash索引（内存结构 Buffer Pool），满足条件时，自动设计为Hash</p><p>##为什么MySQL采用B+</p><ul><li><p>相对于二叉树，层级更少，搜索效率高；</p></li><li><p>相对于B-tree，</p><ul><li><p>无论是叶子节点还是非叶子节点，都会存数据，这样导致一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低；</p></li><li><p>而且B+搜索效率稳定，而且最下层有双向链表，便于范围搜索和排序</p></li></ul></li><li><p>相比于Hash，B+支持范围索引（模糊查询）和排序操作</p></li></ul>',44),l=[r];function t(n,d){return e(),p("div",null,l)}const s=a(h,[["render",t],["__file","1. 索引结构.html.vue"]]);export{s as default};
