import{_ as e,V as d,W as a,a0 as i}from"./framework-705b829b.js";const l={},t=i('<h1 id="事务原理" tabindex="-1"><a class="header-anchor" href="#事务原理" aria-hidden="true">#</a> 事务原理</h1><p>事务性质与</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-24 23.15.51.png" alt="截屏2023-02-24 23.15.51" loading="lazy"></p><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p>保证：持久性</p><p>该日志文件由两部分组成：</p><ul><li>重做日志缓冲(redo log buffer)</li><li>重做日志文件(redo log file)</li></ul><p>前者是在内存中，后者在磁盘中。当事务提交之后会把所有修改信息都存到该日志文件中，用于在刷新脏页到磁盘，发生错误时，进行数据恢复使用。</p><p>WAL，先写日志，再往磁盘写，这样可以先记录下来</p><p>保证刷新脏页发生错误时，可以恢复数据</p><p>物理日志：存操作的指令</p><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2><p>保证：原子性</p><p>作用：</p><ul><li>提供回滚</li><li>MVCC</li></ul><p>逻辑日志：存操作的指令的反向操作</p><ul><li>Undo log销毁：undo log在事务执行时产生，事务提交时，并不会立即别除undo log,因为这些日志可能还用于MVCC。</li><li>Undo log存储：undo log采用段的方式进行管理和记录，存放在前面介绍的rollback segment回滚段中，内部包含1024个undo log segment。</li></ul><h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2><p>隔离级别</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><h4 id="当前读-读取的记录是最新版本-加锁防止别人修改。" tabindex="-1"><a class="header-anchor" href="#当前读-读取的记录是最新版本-加锁防止别人修改。" aria-hidden="true">#</a> 当前读：读取的记录是最新版本，加锁防止别人修改。</h4><ul><li><code>select xxx lock in share mode</code></li><li>for update</li><li>update</li><li>insert</li><li>delete</li></ul><h4 id="快照读" tabindex="-1"><a class="header-anchor" href="#快照读" aria-hidden="true">#</a> 快照读</h4><p>快照读</p><p>简单的select(不加锁)就是快照读，快照读，读取的是记录数据的可见版本，有可能是历史数据，不加锁，是非阻塞读。</p><ul><li>Read Committed:每次select,都生成一个快照读。</li><li>Repeatable Read:开启事务后第一个selecti语句才是快照读的地方。</li><li>Serializable:快照读会退化为当前读。</li></ul><h4 id="mvcc-1" tabindex="-1"><a class="header-anchor" href="#mvcc-1" aria-hidden="true">#</a> MVCC</h4><p>全称Multi--Version Concurrency Control，多版本并发控制。指维护一个数据的多个版本，使得读写操作没有冲突，快照读为MySQL实现。</p><p>MvCC提供了一个非阻塞读功能。MVCC的具体实现，还需要依赖于：</p><ul><li>数据库记录中的三个隐式字段、</li><li>undo log日志、</li><li>readview。</li></ul><h3 id="隐藏字段" tabindex="-1"><a class="header-anchor" href="#隐藏字段" aria-hidden="true">#</a> 隐藏字段</h3><ul><li><code>DB_TRX_ID</code>：最近修改事务ID</li><li><code>DB_ROLL_PTR</code>：回滚指针，指向这条记录的上一个版本（在undo log中），配合undo log，指向上一个版本</li><li><code>DB_ROW_ID</code>：隐藏主键，如果表本身没有指定主键，将会生成该隐藏字段</li></ul><p><code>ibd2sdi xxx.ibd</code>可以查看这张表的定义格式，可以看到所有的字段包括隐藏字段</p><h3 id="undo-log-1" tabindex="-1"><a class="header-anchor" href="#undo-log-1" aria-hidden="true">#</a> undo log</h3><p>回滚日志，在insert、update、delete的时候产生的便于数据回滚的日志。</p><ul><li>当insert的时候，产生的undo log日志只在回滚时需要，在事务提交后，可被立即删除。</li><li>而update、delete的时候，产生的undo log日志不仅在回滚时需要，在快照读时也需要，不会立即被删除。</li></ul><p>undo log中是一个版本链（链表）</p><p>不同事务或相同事务对同一条记录进行修改，会导致该记录的undolog生成一条记录版本链表，链表的头部是最新的1旧记录，链表尾部是最早的旧记录。</p><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> readview</h3><p>读视图，是快照读SQL执行时MVCC提取数据的依据，记录并维护系统当前活动的事务（未提交的）id。确定当前快照读应该读哪个版本</p><p>ReadView中包含了四个核心字段：</p><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>m_ids</td><td>当前活跃的事务ID集合</td></tr><tr><td>min_trx_id</td><td>最小活跃事务ID</td></tr><tr><td>max_trx_id</td><td>预分配事务D,当前最大事务ID+1(因为事务ID是自增的)</td></tr><tr><td>creator_trx_id</td><td>ReadView创建者的事务ID</td></tr></tbody></table><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-25 13.01.59.png" alt="截屏2023-02-25 13.01.59" loading="lazy"></p><p>不同的隔离级别，生成Readview的时机不同：</p><ul><li>READ COMMITTED：在事务中每一次执行快照读时生成ReadView。</li><li>REPEATABLE READ：仅在事务中第一次执行快照读时生成Readview，后续复用该Readview,</li></ul>',45),r=[t];function o(h,n){return d(),a("div",null,r)}const u=e(l,[["render",o],["__file","3. 事务原理.html.vue"]]);export{u as default};
