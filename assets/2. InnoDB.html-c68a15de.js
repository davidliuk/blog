import{_ as e,V as a,W as n,a0 as i}from"./framework-705b829b.js";const r={},t=i('<h1 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h1><p>兼顾高可靠性和高性能的通用存储引擎</p><p>MySQL5.5后默认InnoDB</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li>DML操作遵循ACID，支持事务</li><li>行级锁，提高并发访问性能</li><li>支持外键foreign key约束，保证数据的完整性和正确性</li></ol><h2 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h2><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3><ul><li><p>xxx.ibd: xxx是表名，innoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p><p>ibd是二进制文件，无法直接打开，但是可以输入指令ibd2sdi得到可查看的JSON</p></li><li><p>frm ，<strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p></li></ul><h3 id="逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构" aria-hidden="true">#</a> 逻辑存储结构</h3><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png" alt="img" loading="lazy"></p><ul><li>表空间Tablespace</li><li>段Segment</li><li>区Extent</li><li>页Page</li><li>行Row</li></ul><h4 id="_1、行-row" tabindex="-1"><a class="header-anchor" href="#_1、行-row" aria-hidden="true">#</a> 1、行（row）</h4><p>数据库表中的记录都是按行（row）进行存放的，每行记录根据不同的行格式，有不同的存储结构。</p><p>后面我们详细介绍 InnoDB 存储引擎的行格式，也是本文重点介绍的内容。</p><h4 id="_2、页-page" tabindex="-1"><a class="header-anchor" href="#_2、页-page" aria-hidden="true">#</a> 2、页（page）</h4><p>记录是按照行来存储的，但是数据库的读取并不以「行」为单位，否则一次读取（也就是一次 I/O 操作）只能处理一行数据，效率会非常低。</p><p>因此，<strong>InnoDB 的数据是按「页」为单位来读写的</strong>，也就是说，当需要读一条记录的时候，并不是将这个行记录从磁盘读出来，而是以页为单位，将其整体读入内存。</p><p><strong>默认每个页的大小为 16KB</strong>，也就是最多能保证 16KB 的连续存储空间。</p><p><strong>页是 InnoDB 存储引擎磁盘管理的最小单元</strong>，意味着数据库每次读写都是以 16KB 为单位的，一次最少从磁盘中读取 16K 的内容到内存中，一次最少把内存中的 16K 内容刷新到磁盘中。</p><p>页的类型有很多，常见的有数据页、undo 日志页、溢出页等等。数据表中的行记录是用「数据页」来管理的.</p><p>总之知道表中的记录存储在「数据页」里面就行。</p><h4 id="_3、区-extent" tabindex="-1"><a class="header-anchor" href="#_3、区-extent" aria-hidden="true">#</a> 3、区（extent）</h4><p>我们知道 InnoDB 存储引擎是用 B+ 树来组织数据的。</p><p>B+ 树中每一层都是通过双向链表连接起来的，如果是以页为单位来分配存储空间，那么链表中相邻的两个页之间的物理位置并不是连续的，可能离得非常远，那么磁盘查询时就会有大量的随机I/O，随机 I/O 是非常慢的。</p><p>解决这个问题也很简单，就是让链表中相邻的页的物理位置也相邻，这样就可以使用顺序 I/O 了，那么在范围查询（扫描叶子节点）的时候性能就会很高。</p><p>那具体怎么解决呢？</p><p><strong>在表中数据量大的时候，为某个索引分配空间的时候就不再按照页为单位分配了，而是按照区（extent）为单位分配。每个区的大小为 1MB，对于 16KB 的页来说，连续的 64 个页会被划为一个区，这样就使得链表中相邻的页的物理位置也相邻，就能使用顺序 I/O 了</strong>。</p><h4 id="_4、段-segment" tabindex="-1"><a class="header-anchor" href="#_4、段-segment" aria-hidden="true">#</a> 4、段（segment）</h4><p>表空间是由各个段（segment）组成的，段是由多个区（extent）组成的。段一般分为数据段、索引段和回滚段等。</p><ul><li>索引段：存放 B + 树的非叶子节点的区的集合；</li><li>数据段：存放 B + 树的叶子节点的区的集合；</li><li>回滚段：存放的是回滚数据的区的集。</li></ul><p>好了，终于说完表空间的结构了。接下来，就具体讲一下 InnoDB 的行格式了。</p><p>之所以要绕一大圈才讲行记录的格式，主要是想让大家知道行记录是存储在哪个文件，以及行记录在这个表空间文件中的哪个区域，有一个从上往下切入的视角，这样理解起来不会觉得很抽象。</p>',32),d=[t];function h(l,o){return a(),n("div",null,d)}const s=e(r,[["render",h],["__file","2. InnoDB.html.vue"]]);export{s as default};
