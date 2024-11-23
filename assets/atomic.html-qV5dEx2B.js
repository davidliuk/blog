import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as n}from"./app-CrF8c6p-.js";const s={};function l(r,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="原子性保证" tabindex="-1"><a class="header-anchor" href="#原子性保证"><span>原子性保证</span></a></h1><p><strong>Redis 并不保证原子性</strong>。但是 Redis中有一些原子操作。</p><ul><li><p>原子性：事务中的命令要不全部成功，要不全部失败并回滚。</p></li><li><p>原子操作：原子操作是指在多线程或并发编程中，一个无法或不需要进一步分割的最小的操作单元。这种操作要么完全执行，要么完全不执行，且其执行过程中<strong>不会被其他线程或操作打断</strong>。原子操作是并发控制中用于防止竞态条件的重要概念。</p><p>原子操作本身的定义主要关注于其<strong>不可分割</strong>的性质，并不直接包括错误处理或回滚机制。并<strong>不保证出错会回滚</strong></p><ul><li><strong>硬件级原子操作</strong>：如处理器指令实现的原子操作，如果发生错误（例如内存访问错误），这类操作通常不会执行任何回滚操作。</li></ul></li><li><p><strong>软件级原子操作</strong>：在软件层面，原子操作通常通过锁或其他同步机制实现。如果这些操作在执行过程中遇到错误，它们不会自动回滚之前的操作，但是可以由程序员设计错误处理逻辑来决定如何响应错误。这可能包括释放获取的锁，记录错误信息，或者重试操作。</p></li></ul><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><p><code>MULTI</code>：开启事务</p><p><code>EXEC</code>：执行事务</p><p><code>DISCARD</code>：取消事务（只是清空暂存的命令队列，不能起到回滚的作用）</p><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><h4 id="组队时错误" tabindex="-1"><a class="header-anchor" href="#组队时错误"><span>组队时错误</span></a></h4><p>如下，我们在组队时输入错误的指令，redis会之间将所有指令都会失效，因为这是一个问题队列。</p><h4 id="执行时错误" tabindex="-1"><a class="header-anchor" href="#执行时错误"><span>执行时错误</span></a></h4><p>执行时错误比较特殊，他在按序处理所有指令，遇到错误就按正常流程处理继续执行下去。</p><h4 id="不支持回滚原因" tabindex="-1"><a class="header-anchor" href="#不支持回滚原因"><span>不支持回滚原因</span></a></h4><p>大概的意思是，作者不支持事务回滚的原因有以下两个：</p><ul><li>Redis 事务的执行时，错误通常都是编程错误造成的，这种错误通常只会出现在开发环境中，而很少会在实际的生产环境中出现，所以他认为没有必要为 Redis 开发事务回滚功能；</li><li>不支持事务回滚是因为这种复杂的功能和 Redis 追求的简单高效的设计主旨不符合。</li></ul><p>我认为还可以再加一点：redis并没有严格的保证了数据的原子性操作，这样的好处在于redis不需要像数据库一样还要保存回滚日志等，可以让redis执行的更快。</p><p>这里不支持事务回滚，指的是不支持事务运行时错误的事务回滚。</p><h2 id="lua" tabindex="-1"><a class="header-anchor" href="#lua"><span>Lua</span></a></h2><p><strong>为什么建议 Redis+Lua 的方式？</strong> 主要有两点原因：</p><ul><li><strong>减少了网络开销</strong> ：我们可以利用 Lua 脚本来批量执行多条 Redis 命令，这些 Redis 命令会被提交到 Redis 服务器一次性执行完成，大幅减小了网络开销。</li><li><strong>原子性</strong> ：一段 Lua 脚本可以视作一条命令执行，一段 Lua 脚本执行过程中不会有其他脚本或 Redis 命令同时执行，保证了操作不会被其他指令插入或打扰。</li></ul><p>使用lua脚本可以在执行一串redis命令时, 实现一定原子性(lua脚本中多条指令执行过程中不会被插入新的指令), 但是并不能在命令执行出错时回滚之前的结果</p><p>出现错误会立即停止，然后返回一个错误码</p><hr><p>Lua 脚本同样支持批量操作多条命令。一段 Lua 脚本可以视作一条命令执行，可以看作是 <strong>原子操作</strong> 。也就是说，一段 Lua 脚本执行过程中不会有其他脚本或 Redis 命令同时执行，保证了操作不会被其他指令插入或打扰，这是 pipeline 所不具备的。</p><p>并且，Lua 脚本中支持一些简单的逻辑处理比如使用命令读取值并在 Lua 脚本中进行处理，这同样是 pipeline 所不具备的。</p><p>不过， Lua 脚本依然存在下面这些缺陷：</p><ul><li>如果 Lua 脚本运行时出错并中途结束，之后的操作不会进行，但是之前已经发生的写操作不会撤销，所以即使使用了 Lua 脚本，也不能实现类似数据库回滚的原子性。</li><li>Redis Cluster 下 Lua 脚本的原子操作也无法保证了，原因同样是无法保证所有的 key 都在同一个 <strong>hash slot</strong>（哈希槽）上。</li><li>无法持久化</li></ul><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>Function</span></a></h2>',29)]))}const d=a(s,[["render",l],["__file","atomic.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/practice/problem/atomic.html","title":"原子性保证","lang":"en-US","frontmatter":{"description":"原子性保证 Redis 并不保证原子性。但是 Redis中有一些原子操作。 原子性：事务中的命令要不全部成功，要不全部失败并回滚。 原子操作：原子操作是指在多线程或并发编程中，一个无法或不需要进一步分割的最小的操作单元。这种操作要么完全执行，要么完全不执行，且其执行过程中不会被其他线程或操作打断。原子操作是并发控制中用于防止竞态条件的重要概念。 原子操...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/atomic.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"原子性保证"}],["meta",{"property":"og:description","content":"原子性保证 Redis 并不保证原子性。但是 Redis中有一些原子操作。 原子性：事务中的命令要不全部成功，要不全部失败并回滚。 原子操作：原子操作是指在多线程或并发编程中，一个无法或不需要进一步分割的最小的操作单元。这种操作要么完全执行，要么完全不执行，且其执行过程中不会被其他线程或操作打断。原子操作是并发控制中用于防止竞态条件的重要概念。 原子操..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原子性保证\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]},{"level":2,"title":"Lua","slug":"lua","link":"#lua","children":[]},{"level":2,"title":"Function","slug":"function","link":"#function","children":[]}],"git":{"createdTime":1679578424000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1187},"filePathRelative":"cs/database/redis/practice/problem/atomic.md","localizedDate":"March 23, 2023","excerpt":"\\n<p><strong>Redis 并不保证原子性</strong>。但是 Redis中有一些原子操作。</p>\\n<ul>\\n<li>\\n<p>原子性：事务中的命令要不全部成功，要不全部失败并回滚。</p>\\n</li>\\n<li>\\n<p>原子操作：原子操作是指在多线程或并发编程中，一个无法或不需要进一步分割的最小的操作单元。这种操作要么完全执行，要么完全不执行，且其执行过程中<strong>不会被其他线程或操作打断</strong>。原子操作是并发控制中用于防止竞态条件的重要概念。</p>\\n<p>原子操作本身的定义主要关注于其<strong>不可分割</strong>的性质，并不直接包括错误处理或回滚机制。并<strong>不保证出错会回滚</strong></p>\\n<ul>\\n<li><strong>硬件级原子操作</strong>：如处理器指令实现的原子操作，如果发生错误（例如内存访问错误），这类操作通常不会执行任何回滚操作。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>软件级原子操作</strong>：在软件层面，原子操作通常通过锁或其他同步机制实现。如果这些操作在执行过程中遇到错误，它们不会自动回滚之前的操作，但是可以由程序员设计错误处理逻辑来决定如何响应错误。这可能包括释放获取的锁，记录错误信息，或者重试操作。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
