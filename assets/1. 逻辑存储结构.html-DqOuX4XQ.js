import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as p,o as i}from"./app-Cv-jMnVl.js";const t={};function l(o,e){return i(),n("div",null,e[0]||(e[0]=[p('<h1 id="逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构"><span>逻辑存储结构</span></a></h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png" alt="img" loading="lazy"></p><ul><li><p>表空间 Tablespace</p><p>系统、独立、通用、撤销、临时表空间</p></li><li><p>段 Segment：</p></li><li><p>区 Extent：一个区 1M，64 个连续的页</p></li><li><p>页 Page：每个页大小 16k，存储引擎磁盘管理的最小单元</p><ul><li>数据页</li><li>溢出页</li><li>Undo 页</li></ul></li><li><p>行 Row</p></li></ul><h2 id="表空间文件结构" tabindex="-1"><a class="header-anchor" href="#表空间文件结构"><span>表空间文件结构</span></a></h2><h3 id="结构概述" tabindex="-1"><a class="header-anchor" href="#结构概述"><span>结构概述</span></a></h3><h4 id="行-row" tabindex="-1"><a class="header-anchor" href="#行-row"><span>行（row）</span></a></h4><p>数据库表中的记录都是按行（row）进行存放的，每行记录根据不同的行格式，有不同的存储结构。</p><p>后面我们详细介绍 InnoDB 存储引擎的行格式，也是本文重点介绍的内容。</p><h4 id="页-page" tabindex="-1"><a class="header-anchor" href="#页-page"><span>页（page）</span></a></h4><p>记录是按照行来存储的，但是数据库的读取并不以「行」为单位，否则一次读取（也就是一次 I/O 操作）只能处理一行数据，效率会非常低。</p><p>因此，<strong>InnoDB 的数据是按「页」为单位来读写的</strong>，也就是说，当需要读一条记录的时候，并不是将这个行记录从磁盘读出来，而是以页为单位，将其整体读入内存。</p><p><strong>默认每个页的大小为 16KB</strong>，也就是最多能保证 16KB 的连续存储空间。</p><p><strong>页是 InnoDB 存储引擎磁盘管理的最小单元</strong>，意味着数据库每次读写都是以 16KB 为单位的，一次最少从磁盘中读取 16K 的内容到内存中，一次最少把内存中的 16K 内容刷新到磁盘中。</p><p>页的类型有很多，常见的有数据页、undo 日志页、溢出页等等。数据表中的行记录是用「数据页」来管理的.</p><p>总之知道表中的记录存储在「数据页」里面就行。</p><h4 id="区-extent" tabindex="-1"><a class="header-anchor" href="#区-extent"><span>区（extent）</span></a></h4><p>我们知道 InnoDB 存储引擎是用 B+ 树来组织数据的。</p><p>B+ 树中每一层都是通过双向链表连接起来的，如果是以页为单位来分配存储空间，那么链表中相邻的两个页之间的物理位置并不是连续的，可能离得非常远，那么磁盘查询时就会有大量的随机 I/O，随机 I/O 是非常慢的。</p><p>解决这个问题也很简单，就是让链表中相邻的页的物理位置也相邻，这样就可以使用顺序 I/O 了，那么在范围查询（扫描叶子节点）的时候性能就会很高。</p><p>那具体怎么解决呢？</p><p><strong>在表中数据量大的时候，为某个索引分配空间的时候就不再按照页为单位分配了，而是按照区（extent）为单位分配。每个区的大小为 1MB，对于 16KB 的页来说，连续的 64 个页会被划为一个区，这样就使得链表中相邻的页的物理位置也相邻，就能使用顺序 I/O 了</strong>。</p><h4 id="段-segment" tabindex="-1"><a class="header-anchor" href="#段-segment"><span>段（segment）</span></a></h4><p>表空间是由各个段（segment）组成的，段是由多个区（extent）组成的。段一般分为数据段、索引段和回滚段等。</p><ul><li>索引段：存放 B + 树的非叶子节点的区的集合；</li><li>数据段：存放 B + 树的叶子节点的区的集合；</li><li>回滚段：存放的是回滚数据的区的集。</li></ul><p>好了，终于说完表空间的结构了。接下来，就具体讲一下 InnoDB 的行格式了。</p><p>之所以要绕一大圈才讲行记录的格式，主要是想让大家知道行记录是存储在哪个文件，以及行记录在这个表空间文件中的哪个区域，有一个从上往下切入的视角，这样理解起来不会觉得很抽象。</p><h2 id="行格式" tabindex="-1"><a class="header-anchor" href="#行格式"><span>行格式</span></a></h2><h3 id="种类" tabindex="-1"><a class="header-anchor" href="#种类"><span>种类</span></a></h3><p>行格式（row_format），就是一条记录的存储结构。</p><p>InnoDB 提供了 4 种行格式，分别是</p><ul><li>Redundant、</li><li>Compact、</li><li>Dynamic</li><li>Compressed</li></ul><hr><ul><li>Redundant 是很古老的行格式了， MySQL 5.0 版本之前用的行格式，现在基本没人用了。Redundant 不是一种紧凑的行格式。</li><li>所以 MySQL 5.0 之后引入了 Compact 行记录存储方式，Compact 是一种紧凑的行格式，设计的初衷就是为了让一个数据页中可以存放更多的行记录，从 MySQL 5.1 版本之后，行格式默认设置成 Compact。</li><li>Dynamic 和 Compressed 两个都是紧凑的行格式，它们的行格式都和 Compact 差不多，因为都是基于 Compact 改进一点东西。从 MySQL5.7 版本之后，默认使用 Dynamic 行格式。</li></ul><p>介绍 Compact 行格式，因为 Dynamic 和 Compressed 跟 Compact 非常像。</p><p>所以，弄懂了 Compact 行格式，之后你们在去了解其他行格式，很快也能看懂。</p><h3 id="compact" tabindex="-1"><a class="header-anchor" href="#compact"><span>COMPACT</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/COMPACT.drawio.png" alt="img" loading="lazy"></p><p>一条完整的记录分为「记录的额外信息」和「记录的真实数据」两个部分。</p><h4 id="额外信息" tabindex="-1"><a class="header-anchor" href="#额外信息"><span>额外信息</span></a></h4><p>记录的额外信息包含 3 个部分：变长字段长度列表、NULL 值列表、记录头信息(Record Header)。</p><h5 id="_1-变长字段长度列表" tabindex="-1"><a class="header-anchor" href="#_1-变长字段长度列表"><span>1. 变长字段长度列表</span></a></h5><p>varchar(n) 和 char(n) 的区别是什么，相信大家都非常清楚，char 是定长的，varchar 是变长的，变长字段实际存储的数据的长度（大小）不固定的。</p><p>所以，在存储数据的时候，也要把数据占用的大小存起来，存到「变长字段长度列表」里面，读取数据的时候才能根据这个「变长字段长度列表」去读取对应长度的数据。其他 TEXT、BLOB 等变长字段也是这么实现的。</p><blockquote><p>为什么「变长字段长度列表」的信息要按照逆序存放？</p></blockquote><p>这个设计是有想法的，主要是因为「记录头信息」中指向下一个记录的指针，指向的是下一条记录的「记录头信息」和「真实数据」之间的位置，这样的好处是向左读就是记录头信息，向右读就是真实数据，比较方便。</p><p>「变长字段长度列表」中的信息之所以要逆序存放，是因为这样可以<strong>使得位置靠前的记录的真实数据和数据对应的字段长度信息可以同时在一个 CPU Cache Line 中，这样就可以提高 CPU Cache 的命中率</strong>。</p><p>同样的道理， NULL 值列表的信息也需要逆序存放。</p><blockquote><p>每个数据库表的行格式都有「变长字段字节数列表」吗？</p></blockquote><p>其实变长字段字节数列表不是必须的。</p><p><strong>当数据表没有变长字段的时候，比如全部都是 int 类型的字段，这时候表里的行格式就不会有「变长字段长度列表」了</strong>，因为没必要，不如去掉以节省空间。</p><p>所以「变长字段长度列表」只出现在数据表有变长字段的时候。</p><h5 id="_2-null-值列表" tabindex="-1"><a class="header-anchor" href="#_2-null-值列表"><span>2. NULL 值列表</span></a></h5><p>表中的某些列可能会存储 NULL 值，如果把这些 NULL 值都放到记录的真实数据中会比较浪费空间，所以 Compact 行格式把这些值为 NULL 的列存储到 NULL 值列表中。</p><p>如果存在允许 NULL 值的列，则每个列对应一个二进制位（bit），二进制位按照列的顺序逆序排列。</p><ul><li>二进制位的值为<code>1</code>时，代表该列的值为 NULL。</li><li>二进制位的值为<code>0</code>时，代表该列的值不为 NULL。</li></ul><p>另外，NULL 值列表必须用整数个字节的位表示（1 字节 8 位），如果使用的二进制位个数不足整数个字节，则在字节的高位补 <code>0</code>。</p><blockquote><p>每个数据库表的行格式都有「NULL 值列表」吗？</p></blockquote><p>NULL 值列表也不是必须的。</p><p><strong>当数据表的字段都定义成 NOT NULL 的时候，这时候表里的行格式就不会有 NULL 值列表了</strong>。</p><p>所以在设计数据库表的时候，通常都是建议将字段设置为 NOT NULL，这样可以至少节省 1 字节的空间（NULL 值列表至少占用 1 字节空间）。</p><blockquote><p>「NULL 值列表」是固定 1 字节空间吗？如果这样的话，一条记录有 9 个字段值都是 NULL，这时候怎么表示？</p></blockquote><p>「NULL 值列表」的空间不是固定 1 字节的。</p><p>当一条记录有 9 个字段值都是 NULL，那么就会创建 2 字节空间的「NULL 值列表」，以此类推。</p><h5 id="_3-记录头信息-record-header" tabindex="-1"><a class="header-anchor" href="#_3-记录头信息-record-header"><span>3. 记录头信息(Record Header)</span></a></h5><p>记录头信息中包含的内容很多，我就不一一列举了，这里说几个比较重要的：</p><ul><li>delete_mask ：标识此条数据是否被删除。从这里可以知道，我们执行 detele 删除记录的时候，并不会真正的删除记录，只是将这个记录的 delete_mask 标记为 1。</li><li>next_record：下一条记录的位置。从这里可以知道，记录与记录之间是通过链表组织的。在前面我也提到了，指向的是下一条记录的「记录头信息」和「真实数据」之间的位置，这样的好处是向左读就是记录头信息，向右读就是真实数据，比较方便。</li><li>record_type：表示当前记录的类型，0 表示普通记录，1 表示 B+树非叶子节点记录，2 表示最小记录，3 表示最大记录</li><li>heap_no：表示数据在堆中的序列号</li></ul><h4 id="真实数据" tabindex="-1"><a class="header-anchor" href="#真实数据"><span>真实数据</span></a></h4><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/记录的真实数据.png" alt="img" loading="lazy"></p><p>记录真实数据部分：</p><ul><li><p>定义字段</p></li><li><p>隐藏字段</p><ul><li><p>row_id</p><p>如果我们建表的时候指定了主键或者唯一约束列，那么就没有 row_id 隐藏字段了。如果既没有指定主键，又没有唯一约束，那么 InnoDB 就会为记录添加 row_id 隐藏字段。row_id 不是必需的，占用 6 个字节。</p></li><li><p>trx_id</p><p>表示这个数据是由哪个事务生成的。 trx_id 是必需的，占用 6 个字节。</p></li><li><p>roll_pointer</p><p>这条记录上一个版本的指针。roll_pointer 是必需的，占用 7 个字节。</p></li></ul></li></ul><p>如果你熟悉 MVCC 机制，你应该就清楚 trx_id 和 roll_pointer 的作用了.</p><h2 id="数据页" tabindex="-1"><a class="header-anchor" href="#数据页"><span>数据页</span></a></h2><p>不同的存储引擎，存储数据的方式也不同，下面 InnoDB 是如何存储数据的。</p><p>记录是按照行来存储的，但是数据库的读取并不以「行」为单位，否则一次读取（也就是一次 I/O 操作）只能处理一行数据，效率会非常低。</p><p><strong>InnoDB 的数据是按「数据页」为单位来读写的</strong>，也就是说，当需要读一条记录的时候，并不是将这个记录本身从磁盘读出来，而是以页为单位，将其整体读入内存。</p><p>数据库的 I/O 操作的最小单位是页，<strong>InnoDB 数据页的默认大小是 16KB</strong>，意味着数据库每次读写都是以 16KB 为单位的，一次最少从磁盘中读取 16K 的内容到内存中，一次最少把内存中的 16K 内容刷新到磁盘中。</p><h3 id="数据页结构" tabindex="-1"><a class="header-anchor" href="#数据页结构"><span>数据页结构</span></a></h3><p>数据页包括七个部分，结构如下图：</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/fabd6dadd61a0aa342d7107213955a72.png" alt="图片" loading="lazy"></p><p>在 File Header 中有两个指针，分别指向上一个数据页和下一个数据页，连接起来的页相当于一个双向的链表。</p><p>采用链表的结构是让数据页之间不需要是物理上的连续的，而是逻辑上的连续。</p><p>数据页的主要作用是存储记录，也就是数据库的数据，所以重点说一下数据页中的 User Records 是怎么组织数据的。</p><p><strong>数据页中的记录按照「主键」顺序组成单向链表</strong>，单向链表的特点就是插入、删除非常方便，但是检索效率不高，最差的情况下需要遍历链表上的所有节点才能完成检索。</p><p>因此，数据页中有一个<strong>页目录</strong>，起到记录的索引作用，就像我们书那样，针对书中内容的每个章节设立了一个目录，想看某个章节的时候，可以查看目录，快速找到对应的章节的页数，而数据页中的页目录就是为了能快速找到记录。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/261011d237bec993821aa198b97ae8ce.png" alt="图片" loading="lazy"></p><p>页目录创建的过程如下：</p><ol><li>将所有的记录划分成几个组，这些记录包括最小记录和最大记录，但不包括标记为“已删除”的记录；</li><li>每个记录组的最后一条记录就是组内最大的那条记录，并且最后一条记录的头信息中会存储该组一共有多少条记录，作为 n_owned 字段（上图中粉红色字段）</li><li>页目录用来存储每组最后一条记录的地址偏移量，这些地址偏移量会按照先后顺序存储起来，每组的地址偏移量也被称之为槽（slot），<strong>每个槽相当于指针指向了不同组的最后一个记录</strong>。</li></ol><p>从图可以看到，<strong>页目录就是由多个槽组成的，槽相当于分组记录的索引</strong>。然后，因为记录是按照「主键值」从小到大排序的，所以<strong>我们通过槽查找记录时，可以使用二分法快速定位要查询的记录在哪个槽（哪个记录分组），定位到槽后，再遍历槽内的所有记录，找到对应的记录</strong>，无需从最小记录开始遍历整个页中的记录链表。</p>',88)]))}const s=a(t,[["render",l],["__file","1. 逻辑存储结构.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/mysql/engine/innodb/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html","title":"逻辑存储结构","lang":"en-US","frontmatter":{"description":"逻辑存储结构 img 表空间 Tablespace 系统、独立、通用、撤销、临时表空间 段 Segment： 区 Extent：一个区 1M，64 个连续的页 页 Page：每个页大小 16k，存储引擎磁盘管理的最小单元 数据页 溢出页 Undo 页 行 Row 表空间文件结构 结构概述 行（row） 数据库表中的记录都是按行（row）进行存放的，每行...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/innodb/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"逻辑存储结构"}],["meta",{"property":"og:description","content":"逻辑存储结构 img 表空间 Tablespace 系统、独立、通用、撤销、临时表空间 段 Segment： 区 Extent：一个区 1M，64 个连续的页 页 Page：每个页大小 16k，存储引擎磁盘管理的最小单元 数据页 溢出页 Undo 页 行 Row 表空间文件结构 结构概述 行（row） 数据库表中的记录都是按行（row）进行存放的，每行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E8%A1%A8%E7%A9%BA%E9%97%B4%E7%BB%93%E6%9E%84.drawio.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逻辑存储结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E8%A1%A8%E7%A9%BA%E9%97%B4%E7%BB%93%E6%9E%84.drawio.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/COMPACT.drawio.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E8%AE%B0%E5%BD%95%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%95%B0%E6%8D%AE.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/fabd6dadd61a0aa342d7107213955a72.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/261011d237bec993821aa198b97ae8ce.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"表空间文件结构","slug":"表空间文件结构","link":"#表空间文件结构","children":[{"level":3,"title":"结构概述","slug":"结构概述","link":"#结构概述","children":[]}]},{"level":2,"title":"行格式","slug":"行格式","link":"#行格式","children":[{"level":3,"title":"种类","slug":"种类","link":"#种类","children":[]},{"level":3,"title":"COMPACT","slug":"compact","link":"#compact","children":[]}]},{"level":2,"title":"数据页","slug":"数据页","link":"#数据页","children":[{"level":3,"title":"数据页结构","slug":"数据页结构","link":"#数据页结构","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":11.21,"words":3364},"filePathRelative":"cs/database/mysql/engine/innodb/1. 逻辑存储结构.md","localizedDate":"January 3, 2023","excerpt":"\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png\\" alt=\\"img\\" loading=\\"lazy\\"></p>\\n<ul>\\n<li>\\n<p>表空间 Tablespace</p>\\n<p>系统、独立、通用、撤销、临时表空间</p>\\n</li>\\n<li>\\n<p>段 Segment：</p>\\n</li>\\n<li>\\n<p>区 Extent：一个区 1M，64 个连续的页</p>\\n</li>\\n<li>\\n<p>页 Page：每个页大小 16k，存储引擎磁盘管理的最小单元</p>\\n<ul>\\n<li>数据页</li>\\n<li>溢出页</li>\\n<li>Undo 页</li>\\n</ul>\\n</li>\\n<li>\\n<p>行 Row</p>\\n</li>\\n</ul>","autoDesc":true}`);export{s as comp,c as data};
