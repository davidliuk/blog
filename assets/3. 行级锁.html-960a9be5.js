import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,d as t}from"./app-9107e99b.js";const r={},o=t(`<h1 id="行级锁" tabindex="-1"><a class="header-anchor" href="#行级锁" aria-hidden="true">#</a> 行级锁</h1><p>操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低</p><p>在 Innodb 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ，</p><p>查看目前加的锁</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> object_schema<span class="token punctuation">,</span> object_name<span class="token punctuation">,</span> index_name<span class="token punctuation">,</span> lock_type<span class="token punctuation">,</span> lock_mode<span class="token punctuation">,</span> lock_data <span class="token keyword">from</span> performance_schema<span class="token punctuation">.</span>data_locks

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> performance_schema<span class="token punctuation">.</span>data_locks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行级锁分类" tabindex="-1"><a class="header-anchor" href="#行级锁分类" aria-hidden="true">#</a> 行级锁分类</h2><p>对于行级锁，主要分为以下三类：</p><ul><li><p>行锁 Record Lock</p><p>S, X, REC_NOT_GAP</p></li><li><p>间隙锁 Gap Lock</p><p>S, GAP</p></li><li><p>临键锁 next-key lock</p><p>临键锁 = 行锁 + 间隙锁</p><p>NEXT_KEY</p></li><li><p>插入意向锁 INSERT_INTENTION</p><p>相当于特殊的</p><p>X, INSERT_INTEN</p></li></ul><h3 id="行锁" tabindex="-1"><a class="header-anchor" href="#行锁" aria-hidden="true">#</a> 行锁</h3><p>InnoDB 实现了以下两种类型的行锁：</p><ol><li>共享锁（S）：允许一个事务去读一行，阻止其他事物获得相同数据集的排他锁</li><li>排他锁（X）：允许获取排他锁的事物更新数据，阻止其他事物获取相同数据集的共享锁和排他锁</li></ol><p>共享锁于共享锁直接兼容，其他情况均冲突</p><p>执行 SQL 时的锁：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-02 23.57.41.png" alt="截屏2023-01-02 23.57.41" loading="lazy"></p><p>默认情况下，InnoDB 在 RR 事物隔离级别运行，InnoDB 使用 next-key 锁进行搜索和索引扫描，以防止幻读。</p><ol><li>针对唯一索引进行检索时，对以存在的记录进行等值匹配时，将会自动优化为行锁。</li><li>InnoDB 的行锁是针对于索引加的锁，不通过索引条件检索数据，那么 InnoDB 将对表中所有的记录加锁，此时就会升级为表锁。</li></ol><h3 id="间隙锁" tabindex="-1"><a class="header-anchor" href="#间隙锁" aria-hidden="true">#</a> 间隙锁</h3><p>间隙锁是锁住两个元素中间一个空隙的共享锁（目的：防止别的事物在间隙插入出现幻读现象）</p><blockquote><p><strong>间隙锁的意义只在于阻止区间被插入</strong>，因此是<strong>可以共存</strong>的。<strong>一个事务获取的间隙锁不会阻止另一个事务获取同一个间隙范围的间隙锁</strong>，共享（S 型）和排他（X 型）的间隙锁是没有区别的，他们相互不冲突，且功能相同。</p></blockquote><h3 id="临键锁" tabindex="-1"><a class="header-anchor" href="#临键锁" aria-hidden="true">#</a> 临键锁</h3><p>Next-Key Lock 称为临键锁，是 Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。</p><p>默认情况下，InnoDB 在 RR 事物隔离级别运行，InnoDB 使用 next-key 锁进行搜索和索引扫描，以防止幻读。</p><ol><li>索引上的等值查询（唯一索引），给不存在的记录加锁时，优化为间隙锁。</li><li>索引上的等值查询（普通索引），向右遍历时，最后一个值不满足查询需求时，next-key lock 退化成间隙锁。</li><li>索引上的范围查询（唯一索引），会访问到不满足条件的第一个值为止。（会加上对应的临键锁）</li></ol><blockquote><p><strong>间隙锁之间是兼容的，即两个事务可以同时持有包含共同间隙范围的间隙锁，并不存在互斥关系，因为间隙锁的目的是防止插入幻影记录而提出的</strong>。</p></blockquote><h3 id="隐式锁" tabindex="-1"><a class="header-anchor" href="#隐式锁" aria-hidden="true">#</a> 隐式锁</h3><p>nsert 语句在正常执行时是不会生成锁结构的，它是靠聚簇索引记录自带的 trx_id 隐藏列来作为<strong>隐式锁</strong>来保护记录的。</p><blockquote><p>什么是隐式锁？</p></blockquote><p>当事务需要加锁的时，如果这个锁不可能发生冲突，InnoDB 会跳过加锁环节，这种机制称为隐式锁。隐式锁是 InnoDB 实现的一种延迟加锁机制，其特点是只有在可能发生冲突时才加锁，从而减少了锁的数量，提高了系统整体性能。</p><p>隐式锁就是在 Insert 过程中不加锁，只有在特殊情况下，才会将隐式锁转换为显示锁，这里我们列举两个场景。</p><ul><li>如果记录之间加有间隙锁，为了避免幻读，此时是不能插入记录的；</li><li>如果 Insert 的记录和已有记录存在唯一键冲突，此时也不能插入记录；</li></ul><h3 id="插入意向锁" tabindex="-1"><a class="header-anchor" href="#插入意向锁" aria-hidden="true">#</a> 插入意向锁</h3><p>INSERT_INTENTION</p><p>一个事务在插入一条记录的时候，需要判断插入位置是否已被<strong>其他事务</strong>加了间隙锁（next-key lock 也包含间隙锁）。</p><blockquote><p>本事务在插入位置有间隙锁并不会影响本事务内后续的插入操作，不会产生插入意向锁。</p></blockquote><p>如果有的话，插入操作就会发生<strong>阻塞</strong>，直到拥有间隙锁的那个事务提交为止（释放间隙锁的时刻），在此期间会生成一个<strong>插入意向锁</strong>，表明有事务想在某个区间插入新记录，但是现在处于等待状态。</p><p>插入意向锁名字虽然有意向锁，但是它并<strong>不是意向锁，它是一种特殊的间隙锁，属于行级别锁</strong>。</p><p>与间隙锁的<strong>差别</strong>是：</p><ul><li>如果说间隙锁锁住的是一个区间，那么「插入意向锁」锁住的就是一个点。因而从这个角度来说，插入意向锁确实是一种特殊的间隙锁。</li><li>尽管「插入意向锁」也属于间隙锁，但两个事务却不能在同一时间内，一个拥有间隙锁，另一个拥有该间隙区间内的插入意向锁（当然，插入意向锁如果不在间隙锁区间内则是可以的）。</li></ul><p>插入意向锁的生成时机：</p><ul><li>每插入一条新记录，都需要看一下待插入记录的下一条记录上是否已经被加了间隙锁，如果已加间隙锁，此时会生成一个插入意向锁，然后锁的状态设置为等待状态（<em>PS：MySQL 加锁时，是先生成锁结构，然后设置锁的状态，如果锁状态是等待状态，并不是意味着事务成功获取到了锁，只有当锁状态为正常状态时，才代表事务成功获取到了锁</em>），现象就是 Insert 语句会被阻塞。</li></ul><h2 id="加锁过程" tabindex="-1"><a class="header-anchor" href="#加锁过程" aria-hidden="true">#</a> 加锁过程</h2><h3 id="加锁-解锁时机" tabindex="-1"><a class="header-anchor" href="#加锁-解锁时机" aria-hidden="true">#</a> 加锁/解锁时机</h3><ul><li>加锁时机：当前读/锁定读的时候</li><li>解锁时机：行锁的释放时机是在事务提交（commit）后，锁就会被释放，并不是一条语句执行完就释放行锁。</li></ul><h3 id="唯一索引加锁" tabindex="-1"><a class="header-anchor" href="#唯一索引加锁" aria-hidden="true">#</a> 唯一索引加锁</h3><h4 id="等值查询" tabindex="-1"><a class="header-anchor" href="#等值查询" aria-hidden="true">#</a> 等值查询</h4><ul><li><p>当查询的记录是「存在」的，在索引树上定位到这一条记录后，将该记录的索引中的 next-key lock 会<strong>退化成「记录锁」</strong>。</p><blockquote><p>原因就是在唯一索引等值查询并且查询记录存在的场景下，仅靠记录锁也能避免幻读的问题。</p></blockquote></li><li><p>当查询的记录是「不存在」的，在索引树找到第一条大于该查询记录的记录后，将该记录的索引中的 next-key lock 会<strong>退化成「间隙锁」</strong>。</p><blockquote><p>原因就是在唯一索引等值查询并且查询记录不存在的场景下，仅靠间隙锁就能避免幻读的问题。</p></blockquote></li></ul><h4 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h4><ul><li>针对「大于等于」的范围查询，因为存在等值查询的条件，那么如果等值查询的记录是存在于表中，那么该记录的索引中的 next-key 锁会<strong>退化成记录锁</strong>。</li><li>针对「小于或者小于等于」的范围查询，要看条件值的记录是否存在于表中： <ul><li>当条件值的记录不在表中，那么不管是「小于」还是「小于等于」条件的范围查询，<strong>扫描到终止范围查询的记录时，该记录的索引的 next-key 锁会退化成间隙锁</strong>，其他扫描到的记录，都是在这些记录的索引上加 next-key 锁。</li><li>当条件值的记录在表中，如果是「小于」条件的范围查询，<strong>扫描到终止范围查询的记录时，该记录的索引的 next-key 锁会退化成间隙锁</strong>，其他扫描到的记录，都是在这些记录的索引上加 next-key 锁；如果「小于等于」条件的范围查询，扫描到终止范围查询的记录时，该记录的索引 next-key 锁不会退化成间隙锁。其他扫描到的记录，都是在这些记录的索引上加 next-key 锁。</li></ul></li></ul><p>（注意这个流程图是针对「主键索引」的，如果是二级索引的唯一索引，除了流程图中对二级索引的加锁规则之外，还会对查询到的记录的主键索引项加「记录锁」，流程图没有提示这一个点，所以在这里用文字补充说明下）</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/唯一索引加锁流程.jpeg" alt="img" loading="lazy"></p><h3 id="非唯一索引加锁" tabindex="-1"><a class="header-anchor" href="#非唯一索引加锁" aria-hidden="true">#</a> 非唯一索引加锁</h3><h4 id="等值查询-1" tabindex="-1"><a class="header-anchor" href="#等值查询-1" aria-hidden="true">#</a> 等值查询</h4><p>针对非唯一索引等值查询时，查询的记录存不存在，加锁的规则也会不同：</p><ul><li>当查询的记录「存在」时，由于不是唯一索引，所以肯定存在索引值相同的记录，于是<strong>非唯一索引等值查询的过程是一个扫描的过程，直到扫描到第一个不符合条件的二级索引记录就停止扫描，然后在扫描的过程中，对扫描到的二级索引记录加的是 next-key 锁，而对于第一个不符合条件的二级索引记录，该二级索引的 next-key 锁会退化成间隙锁。同时，在符合查询条件的记录的主键索引上加记录锁</strong>。</li><li>当查询的记录「不存在」时，<strong>扫描到第一条不符合条件的二级索引记录，该二级索引的 next-key 锁会退化成间隙锁。因为不存在满足查询条件的记录，所以不会对主键索引加锁</strong>。</li></ul><h4 id="范围查询-1" tabindex="-1"><a class="header-anchor" href="#范围查询-1" aria-hidden="true">#</a> 范围查询</h4><p>非唯一索引和主键索引的范围查询的加锁也有所不同，不同之处在于<strong>非唯一索引范围查询，索引的 next-key lock 不会有退化为间隙锁和记录锁的情况</strong>，也就是非唯一索引进行范围查询时，对二级索引记录加锁都是加 next-key 锁。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/非唯一索引加锁流程.jpeg" alt="img" loading="lazy"></p><h3 id="insert-语句加锁" tabindex="-1"><a class="header-anchor" href="#insert-语句加锁" aria-hidden="true">#</a> insert 语句加锁</h3><h4 id="正常执行时" tabindex="-1"><a class="header-anchor" href="#正常执行时" aria-hidden="true">#</a> 正常执行时</h4><p>Insert 语句在正常执行时是不会生成锁结构的，它是靠聚簇索引记录自带的 trx_id 隐藏列来作为<strong>隐式锁</strong>来保护记录的。如果后续遇到别的事物的 X 操作，则隐式锁会升级为 X 型记录锁。</p><h4 id="记录间有间隙锁时" tabindex="-1"><a class="header-anchor" href="#记录间有间隙锁时" aria-hidden="true">#</a> 记录间有间隙锁时</h4><p>加 X 型的锁，插入意向锁</p><h4 id="遇到唯一键冲突时" tabindex="-1"><a class="header-anchor" href="#遇到唯一键冲突时" aria-hidden="true">#</a> 遇到唯一键冲突时</h4><p>如果在插入新记录时，插入了一个与「已有的记录的主键或者唯一二级索引列值相同」的记录（不过可以有多条记录的唯一二级索引列的值同时为 NULL，这里不考虑这种情况），此时插入就会失败，然后对于这条记录加上了 <strong>S 型的锁</strong>。</p><ul><li>如果主键索引重复，插入新记录的事务会给已存在的主键值重复的聚簇索引记录<strong>添加 S 型记录锁</strong>。</li><li>如果唯一二级索引重复，插入新记录的事务都会给已存在的二级索引列值重复的二级索引记录<strong>添加 S 型 next-key 锁</strong>。</li></ul><h3 id="没有加索引" tabindex="-1"><a class="header-anchor" href="#没有加索引" aria-hidden="true">#</a> 没有加索引</h3><p><strong>如果锁定读查询语句，没有使用索引列作为查询条件，或者查询语句没有走索引查询，导致扫描是全表扫描。那么，每一条记录的索引上都会加 next-key 锁，这样就相当于锁住的全表，这时如果其他事务对该表进行增、删、改操作的时候，都会被阻塞</strong>。</p><p>不只是锁定读查询语句不加索引才会导致这种情况，update 和 delete 语句如果查询条件不加索引，那么由于扫描的方式是全表扫描，于是就会对每一条记录的索引上都会加 next-key 锁，这样就相当于锁住的全表。</p><p>因此，<strong>在线上在执行 update、delete、select ... for update 等具有加锁性质的语句，一定要检查语句是否走了索引，如果是全表扫描的话，会对每一个索引加 next-key 锁，相当于把整个表锁住了</strong>，这是挺严重的问题。</p><h2 id="死锁分析" tabindex="-1"><a class="header-anchor" href="#死锁分析" aria-hidden="true">#</a> 死锁分析</h2><h3 id="产生条件" tabindex="-1"><a class="header-anchor" href="#产生条件" aria-hidden="true">#</a> 产生条件</h3><p>四个必要条件：<strong>互斥、占有且等待、不可强占用、循环等待</strong></p><p>只要系统发生死锁，这些条件必然成立，但是只要破坏任意一个条件就死锁就不会成立。</p><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4><blockquote><p>表中没有id=19的字段，AB两个人在如下时刻进行操作</p></blockquote><p>A:</p><p>T1: <code>select * from tb where id = 19 for update;</code></p><p>T3: <code>insert into tb(id, name) value(19, &#39;david&#39;);</code></p><p>B:</p><p>T2: <code>select * from tb where id = 19 for update;</code></p><p>T4: <code>insert into tb(id, name) value(19, &#39;david&#39;);</code></p><p>两者的插入意向锁都在等待对方的间隙锁</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><h4 id="被动策略" tabindex="-1"><a class="header-anchor" href="#被动策略" aria-hidden="true">#</a> 被动策略</h4><ul><li><p><strong>设置事务等待锁的超时时间</strong>。当一个事务的等待时间超过该值后，就对这个事务进行回滚，于是锁就释放了，另一个事务就可以继续执行了。在 InnoDB 中，参数 <code>innodb_lock_wait_timeout</code> 是用来设置超时时间的，默认值时 50 秒。</p><p>但这个方案会存在超时续期的问题。</p></li><li><p><strong>开启主动死锁检测</strong>。主动死锁检测在发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 <code>innodb_deadlock_detect</code> 设置为 on，表示开启这个逻辑，默认就开启。</p></li></ul><h4 id="主动策略" tabindex="-1"><a class="header-anchor" href="#主动策略" aria-hidden="true">#</a> 主动策略</h4><p>我们可以回归业务的角度来预防死锁，对订单做幂等性校验的目的是为了保证不会出现重复的订单，那我们可以直接将 order_no 字段设置为唯一索引列，利用它的唯一性来保证订单表不会出现重复的订单，不过有一点不好的地方就是在我们插入一个已经存在的订单记录时就会抛出异常。</p>`,87),i=[o];function s(d,l){return a(),n("div",null,i)}const c=e(r,[["render",s],["__file","3. 行级锁.html.vue"]]);export{c as default};
