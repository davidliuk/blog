import{_ as o,V as e,W as d,Z as c}from"./framework-e5d7a6b2.js";const r={},l=c('<h1 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h1><p><code>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code>binlog</code>（归档日志）和事务日志 <code>redo log</code>（重做日志）和 <code>undo log</code>（回滚日志）。</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/01.png" alt="img" style="zoom:50%;"><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p><strong>InnoDB 引擎特有</strong>的，让 MySQL 具有崩溃恢复的能力。</p><p>比如 <code>MySQL</code> 实例挂了或宕机了，重启时，<code>InnoDB</code>存储引擎会使用<code>redo log</code>恢复数据，保证数据的持久性与完整性。</p><p><code>MySQL</code> 中数据是以页为单位，你查询一条记录，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，会放入到 <code>Buffer Pool</code> 中。</p><p>后续的查询都是先从 <code>Buffer Pool</code> 中找，没有命中再去硬盘加载，减少硬盘 <code>IO</code> 开销，提升性能。</p><p>更新表数据的时候，也是如此，发现 <code>Buffer Pool</code> 里存在要更新的数据，就直接在 <code>Buffer Pool</code> 里更新。</p><p>然后会把“在某个数据页上做了什么修改”记录到重做日志缓存（<code>redo log buffer</code>）里，接着刷盘到 <code>redo log</code> 文件里。</p><p>小贴士：每条 redo 记录由“表空间号+数据页号+偏移量+修改数据长度+具体修改的数据”组成</p><p>理想情况，事务一提交就会进行刷盘操作，但实际上，刷盘的时机是根据策略来进行的。</p><h3 id="写入机制" tabindex="-1"><a class="header-anchor" href="#写入机制" aria-hidden="true">#</a> 写入机制</h3><h4 id="刷盘时机" tabindex="-1"><a class="header-anchor" href="#刷盘时机" aria-hidden="true">#</a> 刷盘时机</h4><p>缓存在 redo log buffer 里的 redo log 还是在内存中，它刷新到磁盘主要有下面几个时机：</p><ul><li>MySQL 正常关闭时；</li><li>当 redo log buffer 中记录的写入量大于 redo log buffer 内存空间的一半时，会触发落盘；</li><li>InnoDB 的后台线程每隔 1 秒，将 redo log buffer 持久化到磁盘。</li><li>每次事务提交时都将缓存在 redo log buffer 里的 redo log 直接持久化到磁盘（这个策略可由 innodb_flush_log_at_trx_commit 参数控制，下面会说）。</li></ul><blockquote><p>由于后台线程每隔 1 秒一次刷盘，redo log 在事物执行的过程中是在不断更新的</p></blockquote><h4 id="刷盘策略" tabindex="-1"><a class="header-anchor" href="#刷盘策略" aria-hidden="true">#</a> 刷盘策略</h4><p><code>InnoDB</code> 存储引擎为 <code>redo log</code> 的刷盘策略提供了 <code>innodb_flush_log_at_trx_commit</code> 参数，它支持三种策略：</p><ul><li><strong>0</strong> ：设置为 0 的时候，表示每次事务提交时不进行刷盘操作</li><li><strong>1</strong> ：设置为 1 的时候，表示每次事务提交时都将进行刷盘操作（默认值）</li><li><strong>2</strong> ：设置为 2 的时候，表示每次事务提交时都只把 redo log buffer 内容写入 page cache</li></ul><p><code>innodb_flush_log_at_trx_commit</code> 参数默认为 1 ，也就是说当事务提交时会调用 <code>fsync</code> 对 redo log 进行刷盘</p><p>另外，<code>InnoDB</code> 存储引擎有一个后台线程，每隔<code>1</code> 秒，就会把 <code>redo log buffer</code> 中的内容写到文件系统缓存（<code>page cache</code>），然后调用 <code>fsync</code> 刷盘。</p><h4 id="日志文件组" tabindex="-1"><a class="header-anchor" href="#日志文件组" aria-hidden="true">#</a> 日志文件组</h4><p>在重做日志组中，每个 redo log File 的大小是固定且一致的，假设每个 redo log File 设置的上限是 1 GB，那么总共就可以记录 2GB 的操作。</p><p>重做日志文件组是以<strong>循环写</strong>的方式工作的，从头开始写，写到末尾就又回到开头，相当于一个环形。</p><p>所以 InnoDB 存储引擎会先写 ib_logfile0 文件，当 ib_logfile0 文件被写满的时候，会切换至 ib_logfile1 文件，当 ib_logfile1 文件也被写满时，会切换回 ib_logfile0 文件。</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/checkpoint.png" alt="img" style="zoom:25%;"><p>图中的：</p><ul><li>write pos 和 checkpoint 的移动都是顺时针方向；</li><li>write pos ～ checkpoint 之间的部分（图中的红色部分），用来记录新的更新操作；</li><li>check point ～ write pos 之间的部分（图中蓝色部分）：待落盘的脏数据页记录；</li></ul><p>如果 write pos 追上了 checkpoint，就意味着 <strong>redo log 文件满了，这时 MySQL 不能再执行新的更新操作，也就是说 MySQL 会被阻塞</strong>（<em>因此所以针对并发量大的系统，适当设置 redo log 的文件大小非常重要</em>），此时<strong>会停下来将 Buffer Pool 中的脏页刷新到磁盘中，然后标记 redo log 哪些记录可以被擦除，接着对旧的 redo log 记录进行擦除，等擦除完旧记录腾出了空间，checkpoint 就会往后移动（图中顺时针）</strong>，然后 MySQL 恢复正常运行，继续执行新的更新操作。</p><p>所以，一次 checkpoint 的过程就是脏页刷新到磁盘中变成干净页，然后标记 redo log 哪些记录可以被覆盖的过程。</p><h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h2><p><code>redo log</code> 它是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 <code>InnoDB</code> 存储引擎。</p><p>而 <code>binlog</code> 是逻辑日志，记录内容是语句的原始逻辑，类似于“给 ID=2 这一行的 c 字段加 1”，属于<code>MySQL Server</code>层。</p><p>不管用什么存储引擎，只要发生了表数据更新，都会产生 <code>binlog</code> 日志。</p><p>那 <code>binlog</code> 到底是用来干嘛的？</p><p>可以说<code>MySQL</code>数据库的<strong>数据备份、主备、主主、主从</strong>都离不开<code>binlog</code>，需要依靠<code>binlog</code>来同步数据，保证数据一致性。</p><h3 id="记录格式" tabindex="-1"><a class="header-anchor" href="#记录格式" aria-hidden="true">#</a> 记录格式</h3><p><code>binlog</code> 日志有三种格式，可以通过<code>binlog_format</code>参数指定。</p><ul><li><strong>statement</strong></li><li><strong>row</strong></li><li><strong>mixed</strong></li></ul><p>指定<code>statement</code>，记录的内容是<code>SQL</code>语句原文，比如执行一条<code>update T set update_time=now() where id=1</code>，记录的内容如下。</p><p>指定为<code>row</code>，记录的内容不再是简单的<code>SQL</code>语句了，还包含操作的具体数据，记录内容如下。但是这种格式，需要更大的容量来记录，比较占用空间，恢复与同步时会更消耗<code>IO</code>资源，影响执行速度。</p><p>指定为<code>mixed</code>，记录的内容是前两者的混合。<code>MySQL</code>会判断这条<code>SQL</code>语句是否可能引起数据不一致，如果是，就用<code>row</code>格式，否则就用<code>statement</code>格式。</p><h3 id="写入机制-1" tabindex="-1"><a class="header-anchor" href="#写入机制-1" aria-hidden="true">#</a> 写入机制</h3><p><code>binlog</code>的写入时机也非常简单，事务执行过程中，先把日志写到<code>binlog cache</code>，事务提交的时候，再把<code>binlog cache</code>写到<code>binlog</code>文件中。</p><p>因为一个事务的<code>binlog</code>不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为<code>binlog cache</code>。</p><p>我们可以通过<code>binlog_cache_size</code>参数控制单个线程 binlog cache 大小，如果存储内容超过了这个参数，就要暂存到磁盘（<code>Swap</code>）。</p><p><code>binlog</code>日志刷盘流程如下</p><h2 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h2><p><code>redo log</code>（重做日志）让<code>InnoDB</code>存储引擎拥有了崩溃恢复能力。</p><p><code>binlog</code>（归档日志）保证了<code>MySQL</code>集群架构的数据一致性。</p><p>虽然它们都属于持久化的保证，但是侧重点不同。</p><p>在执行更新语句过程，会记录<code>redo log</code>与<code>binlog</code>两块日志，以基本的事务为单位，<code>redo log</code>在事务执行过程中可以不断写入，而<code>binlog</code>只有在提交事务时才写入，所以<code>redo log</code>与<code>binlog</code>的写入时机不一样。</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/01-20220305234816065.png" alt="img" style="zoom:50%;"><p>可以看到，在持久化 redo log 和 binlog 这两份日志的时候，如果出现半成功的状态，就会造成主从环境的数据不一致性。这是因为 redo log 影响主库的数据，binlog 影响从库的数据，所以 redo log 和 binlog 必须保持一致才能保证主从数据一致。</p><p><strong>MySQL 为了避免出现两份日志之间的逻辑不一致的问题，使用了「两阶段提交」来解决</strong>，两阶段提交其实是分布式事务一致性协议，它可以保证多个逻辑操作要不全部成功，要不全部失败，不会出现半成功的状态。</p><p>原理很简单，将<code>redo log</code>的写入拆成了两个步骤<code>prepare</code>和<code>commit</code>，这就是<strong>两阶段提交</strong>。</p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/how_update/两阶段提交.drawio.png?image_process=watermark,text_5YWs5LyX5Y-377ya5bCP5p6XY29kaW5n,type_ZnpsdHpoaw,x_10,y_10,g_se,size_20,color_0000CD,t_70,fill_0" alt="两阶段提交" style="zoom:50%;"><p><strong>两阶段提交把单个事务的提交拆分成了 2 个阶段，分别是「准备（Prepare）阶段」和「提交（Commit）阶段」</strong>，每个阶段都由协调者（Coordinator）和参与者（Participant）共同完成。注意，不要把提交（Commit）阶段和 commit 语句混淆了，commit 语句执行的时候，会包含提交（Commit）阶段。</p><ul><li><strong>prepare 阶段</strong>：将 XID（内部 XA 事务的 ID） 写入到 redo log，同时将 redo log 对应的事务状态设置为 prepare，然后将 redo log 持久化到磁盘（innodb_flush_log_at_trx_commit = 1 的作用）；</li><li><strong>commit 阶段</strong>：把 XID 写入到 binlog，然后将 binlog 持久化到磁盘（sync_binlog = 1 的作用），接着调用引擎的提交事务接口，将 redo log 状态设置为 commit，此时该状态并不需要持久化到磁盘，只需要 write 到文件系统的 page cache 中就够了，因为只要 binlog 写磁盘成功，就算 redo log 的状态还是 prepare 也没有关系，一样会被认为事务已经执行成功；</li></ul><h3 id="情况分析" tabindex="-1"><a class="header-anchor" href="#情况分析" aria-hidden="true">#</a> 情况分析</h3><p>写入<code>binlog</code>时发生异常也不会有影响，因为<code>MySQL</code>根据<code>redo log</code>日志恢复数据时，发现<code>redo log</code>还处于<code>prepare</code>阶段，并且没有对应<code>binlog</code>日志，就会回滚该事务。</p><p><code>redo log</code>设置<code>commit</code>阶段发生异常，并不会回滚事务，它会执行上图框住的逻辑，虽然<code>redo log</code>是处于<code>prepare</code>阶段，但是能通过事务<code>id</code>找到对应的<code>binlog</code>日志，所以<code>MySQL</code>认为是完整的，就会提交事务恢复数据。</p><p>所以说，<strong>两阶段提交是以 binlog 写成功为事务提交成功的标识</strong>，因为 binlog 写成功了，就意味着能在 binlog 中查找到与 redo log 相同的 XID。</p><blockquote><p>处于 prepare 阶段的 redo log 加上完整 binlog，重启就提交事务，MySQL 为什么要这么设计?</p></blockquote><p>binlog 已经写入了，之后就会被从库（或者用这个 binlog 恢复出来的库）使用。</p><p>所以，在主库上也要提交这个事务。采用这个策略，主库和备库的数据就保证了一致性。</p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>两阶段提交虽然保证了两个日志文件的数据一致性，但是性能很差，主要有两个方面的影响：</p><ul><li><strong>磁盘 I/O 次数高</strong>：对于“双1”配置，每个事务提交都会进行两次 fsync（刷盘），一次是 redo log 刷盘，另一次是 binlog 刷盘。</li><li><strong>锁竞争激烈</strong>：两阶段提交虽然能够保证「单事务」两个日志的内容一致，但在「多事务」的情况下，却不能保证两者的提交顺序一致，因此，在两阶段提交的流程基础上，还需要加一个锁来保证提交的原子性，从而保证多事务的情况下，两个日志的提交顺序一致。</li></ul><h3 id="组提交" tabindex="-1"><a class="header-anchor" href="#组提交" aria-hidden="true">#</a> 组提交</h3><p><strong>MySQL 引入了 binlog 组提交（group commit）机制，当有多个事务提交的时候，会将多个 binlog 刷盘操作合并成一个，从而减少磁盘 I/O 的次数</strong>，如果说 10 个事务依次排队刷盘的时间成本是 10，那么将这 10 个事务一次性一起刷盘的时间成本则近似于 1。</p><p>引入了组提交机制后，prepare 阶段不变，只针对 commit 阶段，将 commit 阶段拆分为三个过程：</p><ul><li><strong>flush 阶段</strong>：多个事务按进入的顺序将 binlog 从 cache 写入文件（不刷盘）；</li><li><strong>sync 阶段</strong>：对 binlog 文件做 fsync 操作（多个事务的 binlog 合并一次刷盘）；</li><li><strong>commit 阶段</strong>：各个事务按顺序做 InnoDB commit 操作；</li></ul><p>上面的<strong>每个阶段都有一个队列</strong>，每个阶段有锁进行保护，因此保证了事务写入的顺序，第一个进入队列的事务会成为 leader，leader领导所在队列的所有事务，全权负责整队的操作，完成后通知队内其他事务操作结束。</p><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2><p>每当 InnoDB 引擎对一条记录进行操作（修改、删除、新增）时，要把回滚时需要的信息都记录到 undo log 里，比如：</p><ul><li>在<strong>插入</strong>一条记录时，要把这条记录的主键值记下来，这样之后回滚时只需要把这个主键值对应的记录<strong>删掉</strong>就好了；</li><li>在<strong>删除</strong>一条记录时，要把这条记录中的内容都记下来，这样之后回滚时再把由这些内容组成的记录<strong>插入</strong>到表中就好了；</li><li>在<strong>更新</strong>一条记录时，要把被更新的列的旧值记下来，这样之后回滚时再把这些列<strong>更新为旧值</strong>就好了。</li></ul><p>在发生回滚时，就读取 undo log 里的数据，然后做原先相反操作。比如当 delete 一条记录时，undo log 中会把记录中的内容都记下来，然后执行回滚操作的时候，就读取 undo log 里的数据，然后进行 insert 操作。</p><p>不同的操作，需要记录的内容也是不同的，所以不同类型的操作（修改、删除、新增）产生的 undo log 的格式也是不同的，具体的每一个操作的 undo log 的格式我就不详细介绍了，感兴趣的可以自己去查查。</p><p>一条记录的每一次更新操作产生的 undo log 格式都有一个 roll_pointer 指针和一个 trx_id 事务 id：</p><ul><li>通过 trx_id 可以知道该记录是被哪个事务修改的；</li><li>通过 roll_pointer 指针可以将这些 undo log 串成一个链表，这个链表就被称为版本链；</li></ul><p>因此，undo log 两大作用：</p><ul><li><strong>实现事务回滚，保障事务的原子性</strong>。事务处理过程中，如果出现了错误或者用户执 行了 ROLLBACK 语句，MySQL 可以利用 undo log 中的历史数据将数据恢复到事务开始之前的状态。</li><li><strong>实现 MVCC（多版本并发控制）关键因素之一</strong>。MVCC 是通过 ReadView + undo log 实现的。undo log 为每条记录保存多份历史数据，MySQL 在执行快照读（普通 select 语句）的时候，会根据事务的 Read View 里的信息，顺着 undo log 的版本链找到满足其可见性的记录。</li></ul><h3 id="写入机制-2" tabindex="-1"><a class="header-anchor" href="#写入机制-2" aria-hidden="true">#</a> 写入机制</h3><p>很多人疑问 undo log 是如何刷盘（持久化到磁盘）的？</p><p>undo log 和数据页的刷盘策略是一样的，都需要通过 redo log 保证持久化。</p><p>buffer pool 中有 undo 页，对 undo 页的修改也都会记录到 redo log。redo log 会每秒刷盘，提交事务时也会刷盘，数据页和 undo 页都是靠这个机制保证持久化的。</p><p>其实在逻辑层和物理层都能回滚。而 undo log 帮你做的是逻辑上的数据回滚，而不是物理（数据页）上是数据回滚。</p><p>那，你有没有想过为什么 undo 回滚的层面要设置在逻辑层而不是物理层的数据页级别？</p><p>原因你可以这样想：假如一个数据页中存了 300 行数据，而你的 update 语句其实可能仅仅是更新了这个数据页中的一行。但是数据库可不一定是你自己在用！很可能有其他的用户也在使用并且修改了该数据页中的另外 200 行。那这时如果你基于数据页层面回滚，岂不是会将别人的不想回滚的数据给改错？</p>',91),i=[l];function n(g,t){return e(),d("div",null,i)}const p=o(r,[["render",n],["__file","index.html.vue"]]);export{p as default};
