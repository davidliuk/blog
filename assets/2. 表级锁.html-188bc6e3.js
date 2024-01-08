import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,d as t}from"./app-9107e99b.js";const l={},s=t(`<h1 id="表级锁" tabindex="-1"><a class="header-anchor" href="#表级锁" aria-hidden="true">#</a> 表级锁</h1><p>每次操作锁住整张表。锁定粒度大，发生锁冲突的概率最高，并发度最低。应用在 MyISAM、InnoDB、BDB。</p><p>对于表级锁，主要分为以下三类：</p><ul><li>表锁 Table Lock</li><li>元数据锁 MDL</li><li>意向锁 IL</li><li>自增锁 AUTO-INC</li></ul><h3 id="表锁" tabindex="-1"><a class="header-anchor" href="#表锁" aria-hidden="true">#</a> 表锁</h3><p>对于表锁，分为两类：</p><ol><li><p>表共享读锁（read lock）（S）</p><p>加锁以后可以自己读，但是不可以写（会拒绝执行）</p><p>不会阻塞其他客户端的读，会阻塞其他客户端的写</p></li><li><p>表独占写锁（write lock）（X）</p><p>加锁以后自己可以读写</p><p>但是会阻塞别的客户端的读写</p></li></ol><h4 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h4><ol><li><p>加锁：</p><p><code>lock tables &lt;表名, ...&gt; read/write</code></p></li><li><p>释放锁：</p><ul><li><code>unlock tables</code></li><li>客户端断开连接</li></ul></li></ol><h3 id="元数据锁-mdl" tabindex="-1"><a class="header-anchor" href="#元数据锁-mdl" aria-hidden="true">#</a> 元数据锁（MDL）</h3><p>目的：避免执行 DML 和 DDL 语句的冲突问题。</p><p>不用手动加，加锁过程是系统自动控制，无需显示使用，在访问一张表的时候会自动加上。</p><ul><li>对一张表进行 CRUD 操作（DML）的时候，加的是 <strong>MDL 读锁</strong>；</li><li>对一张表做结构变更操作（DDL）的时候，加的是 <strong>MDL 写锁</strong>；</li></ul><p>MDL 是为了保证当用户对表执行 CRUD 操作时，防止其他线程对这个表结构做了变更。</p><p>MDL 是在事务提交后才会释放，这意味着<strong>事务执行期间，MDL 是一直持有的</strong>。</p><p>那如果数据库有一个长事务（所谓的长事务，就是开启了事务，但是一直还没提交），那在对表结构做变更操作的时候，可能会发生意想不到的事情，比如下面这个顺序的场景：</p><p>这是因为申请 MDL 锁的操作会形成一个队列，队列中<strong>写锁获取优先级高于读锁</strong>，一旦出现 MDL 写锁等待，会阻塞后续该表的所有 CRUD 操作。</p><p>所以为了能安全的对表结构进行变更，在对表结构变更前，先要看看数据库中的长事务，是否有事务已经对表加上了 MDL 读锁，如果可以考虑 kill 掉这个长事务，然后再做表结构的变更。</p><h3 id="意向锁" tabindex="-1"><a class="header-anchor" href="#意向锁" aria-hidden="true">#</a> 意向锁</h3><p>目的：规避行锁和表锁之间在加锁时的冲突问题，避免表锁在加锁的时候逐行地去检查这张表行锁的情况。</p><p>不用手动加，是系统自动控制</p><ul><li><p>意向共享锁 IS</p><p>与表锁共享锁（read）兼容，与表锁排他锁互斥</p></li><li><p>意向排他锁 IX</p></li></ul><p>意向锁之间不互斥</p><ul><li>在使用 InnoDB 引擎的表里对某些记录加上「共享锁」之前，需要先在表级别加上一个「意向共享锁」；</li><li>在使用 InnoDB 引擎的表里对某些纪录加上「独占锁」之前，需要先在表级别加上一个「意向独占锁」；</li></ul><p>也就是，当执行插入、更新、删除操作，需要先对表加上「意向独占锁」，然后对该记录加独占锁。</p><p>而普通的 select 是不会加行级锁的，普通的 select 语句是利用 MVCC 实现一致性读，是无锁的。</p><p>不过，select 也是可以对记录加共享锁和独占锁的，具体方式如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//先在表上加上意向共享锁，然后对读取的记录加共享锁</span>
<span class="token keyword">select</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">lock</span> <span class="token operator">in</span> <span class="token keyword">share</span> <span class="token keyword">mode</span><span class="token punctuation">;</span>

<span class="token comment">//先表上加上意向独占锁，然后对读取的记录加独占锁</span>
<span class="token keyword">select</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自增锁-auto-inc" tabindex="-1"><a class="header-anchor" href="#自增锁-auto-inc" aria-hidden="true">#</a> 自增锁（AUTO-INC）</h3><p>目的：实现<code>AUTO_INCREMENT</code>的列自增</p><p>如果一个事务正在插入数据到有自增列的表时，会先获取自增锁，拿不到就可能会被阻塞住。这里的阻塞行为只是自增锁行为的其中一种，可以理解为自增锁就是一个接口，其具体的实现有多种。具体的配置项为 <code>innodb_autoinc_lock_mode</code> （MySQL 5.1.22 引入），可以选择的值如下：</p><table><thead><tr><th style="text-align:left;">innodb_autoinc_lock_mode</th><th style="text-align:left;">介绍</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">传统模式</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">连续模式（MySQL 8.0 之前默认）</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">交错模式(MySQL 8.0 之后默认)</td></tr></tbody></table><p>交错模式下，所有的“INSERT-LIKE”语句（所有的插入语句，包括： <code>INSERT</code>、<code>REPLACE</code>、<code>INSERT…SELECT</code>、<code>REPLACE…SELECT</code>、<code>LOAD DATA</code>等）都不使用表级锁，使用的是轻量级互斥锁实现，多条插入语句可以并发执行，速度更快，扩展性也更好。</p><p>不过，如果你的 MySQL 数据库有主从同步需求并且 Binlog 存储格式为 Statement 的话，不要将 InnoDB 自增锁模式设置为交叉模式，不然会有数据不一致性问题。这是因为并发情况下插入语句的执行顺序就无法得到保障。</p><h4 id="自增不连续的情况" tabindex="-1"><a class="header-anchor" href="#自增不连续的情况" aria-hidden="true">#</a> 自增不连续的情况</h4><p>从上述表结构可以看到，表定义里面出现了一个 <code>AUTO_INCREMENT=2</code>，表示下一次插入数据时，如果需要自动生成自增值，会生成 id = 2。</p><p>但需要注意的是，自增值并不会保存在这个表结构也就是 <code>.frm</code> 文件中，不同的引擎对于自增值的保存策略不同：</p><p>1）MyISAM 引擎的自增值保存在数据文件中</p><p>2）InnoDB 引擎的自增值，其实是保存在了内存里，并没有持久化。第一次打开表的时候，都会去找自增值的最大值 <code>max(id)</code>，然后将 <code>max(id)+1</code> 作为这个表当前的自增值。</p><p>举个例子：我们现在表里当前数据行里最大的 id 是 1，AUTO_INCREMENT=2，对吧。这时候，我们删除 id=1 的行，AUTO_INCREMENT 还是 2。</p><p>但如果马上重启 MySQL 实例，重启后这个表的 AUTO_INCREMENT 就会变成 1。\uFEFF 也就是说，MySQL 重启可能会修改一个表的 AUTO_INCREMENT 的值。</p><p>以上，是在我本地 MySQL 5.x 版本的实验，实际上，<strong>到了 MySQL 8.0 版本后，自增值的变更记录被放在了 redo log 中，提供了自增值持久化的能力</strong> ，也就是实现了“如果发生重启，表的自增值可以根据 redo log 恢复为 MySQL 重启前的值”</p><p>也就是说对于上面这个例子来说，重启实例后这个表的 AUTO_INCREMENT 仍然是 2。</p><p>理解了 MySQL 自增值到底保存在哪里以后，我们再来看看自增值的修改机制，并以此引出第一种自增值不连续的场景。</p><p>自增值不连续的 4 个场景：</p><ol><li>自增初始值和自增步长设置不为 1</li><li>唯一键冲突</li><li>事物回滚：在这种事务回滚的情况下，自增值并没有同样发生回滚</li><li>批量插入（如 <code>insert...select</code> 语句）</li></ol>`,46),o=[s];function p(i,d){return a(),n("div",null,o)}const h=e(l,[["render",p],["__file","2. 表级锁.html.vue"]]);export{h as default};
