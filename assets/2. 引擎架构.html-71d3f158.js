import{_ as l,V as t,W as d,X as e,Y as r,$ as i,Z as o,E as h}from"./framework-e5d7a6b2.js";const n={},s=o('<h1 id="引擎架构" tabindex="-1"><a class="header-anchor" href="#引擎架构" aria-hidden="true">#</a> 引擎架构</h1><p>整体架构图</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-05 20.23.31.png" alt="截屏2023-04-05 20.23.31" style="zoom:50%;"><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 18.42.23.png" alt="截屏2023-01-03 18.42.23" loading="lazy"></p><h2 id="in-memory-structure" tabindex="-1"><a class="header-anchor" href="#in-memory-structure" aria-hidden="true">#</a> In-Memory Structure</h2><p>内存结构</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 17.26.28.png" alt="截屏2023-01-03 17.26.28" style="zoom:25%;"><h3 id="buffer-pool-缓冲池" tabindex="-1"><a class="header-anchor" href="#buffer-pool-缓冲池" aria-hidden="true">#</a> Buffer Pool 缓冲池</h3><p>缓冲池是主内存中的一个区域，里面可以缓存磁盘上经常操作的真实数据，在执行增删改查操作时，先操作缓冲池中的数据（若缓冲池没有数据，则从磁盘加载并缓存），然后再以一定频率刷新到磁盘，从而减小磁盘 IO，加快处理速度。</p><p>缓冲池以<strong>Page</strong>页为单位，底层采用链表数据结构管理 Page。根据状态，将 Page 分为三种类型：</p><ul><li>free page：空闲 page，未被使用</li><li>clean page：被使用 page，数据没有被修改过</li><li>dirty page：脏页，被使用 page，数据被修改过，其中数据与磁盘的数据产生了不一致</li></ul><h3 id="change-buffer" tabindex="-1"><a class="header-anchor" href="#change-buffer" aria-hidden="true">#</a> Change Buffer</h3><p>8.0 以后引入的，之前版本是 insert buffer</p><p>主要针对非唯一的二级索引</p><p>Change Buffer:更改缓冲区（针对于非唯一二级索引页），在执行 DML 语句时，如果这些数据 Page 没有在 Buffer Pool 中，不会直接操作磁盘，而会将数据变更存在更改缓冲区 Change Buffer 中，在未来数据被读取时，再将数据合并恢复到 Buffer Pool 中，再将合并后的数据刷新到磁盘中。</p><p>与聚集索引不同，二级索引通常是非唯一的，并且以相对随机的顺序插入二级索引。同样，删除和更新可能会影响索引树中不相邻的二级索引页，如果每一次都操作磁盘，会造成大量的磁盘 IO。有了 ChangeBuffer 之后，我们可以在缓冲池中进行合并处理，减少磁盘 IO。</p><h3 id="adaptive-hash-index" tabindex="-1"><a class="header-anchor" href="#adaptive-hash-index" aria-hidden="true">#</a> Adaptive Hash Index</h3><p>自动优化产生 hash 索引，提高效率</p><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><p><code>adaptive_hash_index</code>: 控制是否开启自适应哈希索引</p><h3 id="log-buffer" tabindex="-1"><a class="header-anchor" href="#log-buffer" aria-hidden="true">#</a> Log Buffer</h3><p>存储包括如下两种 log：</p><ul><li><p>redo log</p></li><li><p>undo log</p></li></ul><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><ul><li><p><code>innodb_log_buffer_size</code>: 缓冲区大小，默认 16MB</p></li><li><p><code>Innodb_flush_log_at_trx_commit</code>: 日志刷新到磁盘的时机</p><ul><li>1: 每次事务提交时，写入并刷新到磁盘</li><li>0: 没秒将日志写入并刷新到磁盘一次</li><li>2: 日志在每次提及后写入，并每秒刷新到磁盘一次</li></ul></li></ul><blockquote><p>如果 MySQL 是一台单独的服务器，一般 80%的内存都会给 MySQL 的缓冲区</p></blockquote><h2 id="on-disk-structure" tabindex="-1"><a class="header-anchor" href="#on-disk-structure" aria-hidden="true">#</a> On-Disk Structure</h2><p>磁盘结构</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 18.43.06.png" alt="截屏2023-01-03 18.43.06" style="zoom:33%;"><h3 id="system-tablespace" tabindex="-1"><a class="header-anchor" href="#system-tablespace" aria-hidden="true">#</a> System Tablespace</h3><p>系统表空间</p><p><code>innodb_data_file_path</code>:</p><h3 id="file-per-table-tablespaces" tabindex="-1"><a class="header-anchor" href="#file-per-table-tablespaces" aria-hidden="true">#</a> File-Per-Table Tablespaces</h3><p>独立表空间，即每个表的表空间</p><p><code>innodb_file_per_path</code>:</p><h3 id="general-tablespaces" tabindex="-1"><a class="header-anchor" href="#general-tablespaces" aria-hidden="true">#</a> General Tablespaces</h3><p>通用表空间</p><p>默认没有，可以通过<code>create tablespace</code>来创建。</p><p>在创建表时，可以指定该表空间<code>create table xxx tablespaces xx</code>。</p><h3 id="undo-tablespaces" tabindex="-1"><a class="header-anchor" href="#undo-tablespaces" aria-hidden="true">#</a> Undo Tablespaces</h3><p>撤销表空间</p><h3 id="temporary-tablespaces" tabindex="-1"><a class="header-anchor" href="#temporary-tablespaces" aria-hidden="true">#</a> Temporary Tablespaces</h3><p>临时表空间</p><h3 id="doublewrite-buffer-files" tabindex="-1"><a class="header-anchor" href="#doublewrite-buffer-files" aria-hidden="true">#</a> Doublewrite Buffer Files</h3><p>双写缓冲区</p><p>Doublewrite Buffer Files：双写缓冲区，innoDB 引擎将数据页从 Buffer Pool 刷新到磁盘前，先将数据页写入双写缓冲区文件中，便于系统异常时恢复数据。</p><h3 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> Redo Log</h3><p>重做日志</p><p>两个文件，循环写入，来覆盖事务提交后无用的 redo log</p><h2 id="后台线程" tabindex="-1"><a class="header-anchor" href="#后台线程" aria-hidden="true">#</a> 后台线程</h2><h3 id="matser-thread" tabindex="-1"><a class="header-anchor" href="#matser-thread" aria-hidden="true">#</a> Matser Thread</h3><p>作用：</p><ol><li>脏页刷新</li><li>合并 insert buffer</li><li>undo page clean</li></ol><h3 id="io-thread" tabindex="-1"><a class="header-anchor" href="#io-thread" aria-hidden="true">#</a> IO Thread</h3><p>MySQL 有很多后台线程，其中包括了负责 IO 的相关线程 IO THREAD</p><ol><li>参数 innodb_write_io_threads 写线程 默认四个，负责数据块的写入</li><li>参数 innodb_read_io_threads 读线程 默认四个，负责数据块的读取</li><li>insert buffer thread</li><li>redo-log thread</li></ol><p>上面两个参数高并发下，可以设置为 8.</p><h3 id="purge-thread" tabindex="-1"><a class="header-anchor" href="#purge-thread" aria-hidden="true">#</a> Purge Thread</h3><p><strong>作用: 真正的删除记录和删除 undo log</strong></p><ol><li>清理删除后的数据页的空间(因为之前的删除只是打上删除标签,并没有正真删除),</li><li>清理 undo log</li></ol><p>举例：表 tb1 中有记录 pk=1，2，3; 此时 delete from tb1 where pk=1;</p><ol><li>pk=1 的记录标记为删除(delete-mark，info bits)，数据库中 pk=1 的记录此时还是存在的，空间并没有被释放，该操作为同步操作(SQL 执行完，也就标记完成了)。</li><li>purge ，该部分为后台线程(purge 线程)异步操作，会真正的删除该记录，且空间被释放。<strong>purge 线程是系统自动的，无法人工控制。</strong></li></ol><p><strong>标记为已删除的原因:</strong></p><ol><li>该事物可能需要回滚，先作保留。</li><li>当事物 1 去删除 pk=1 且没有提交时， 事物 2 应该要能看到 pk=1 的记录(事物的隔离性)。</li></ol>',64),p={href:"https://www.cnblogs.com/wy123/p/9203254.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://blog.csdn.net/qq_41453285/article/details/104095240",target:"_blank",rel:"noopener noreferrer"};function u(f,b){const a=h("ExternalLinkIcon");return t(),d("div",null,[s,e("blockquote",null,[e("p",null,[e("a",p,[r("https://www.cnblogs.com/wy123/p/9203254.html"),i(a)])]),e("p",null,[e("a",c,[r("https://blog.csdn.net/qq_41453285/article/details/104095240"),i(a)])])])])}const _=l(n,[["render",u],["__file","2. 引擎架构.html.vue"]]);export{_ as default};
