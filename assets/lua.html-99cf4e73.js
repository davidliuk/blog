import{_ as a,V as e,W as d,a0 as r}from"./framework-705b829b.js";const i={},h=r('<h1 id="原子性保证" tabindex="-1"><a class="header-anchor" href="#原子性保证" aria-hidden="true">#</a> 原子性保证</h1><p><strong>Redis 并不一定保证原子性</strong>（原子性：事务中的命令要不全部成功，要不全部失败）。</p><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><p><code>MULTI</code>：开启事务</p><p><code>EXEC</code>：执行事务</p><p><code>DISCARD</code>：取消事务（只是清空暂存的命令队列，不能起到回滚的作用）</p><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><h4 id="组队时错误" tabindex="-1"><a class="header-anchor" href="#组队时错误" aria-hidden="true">#</a> 组队时错误</h4><p>如下，我们在组队时输入错误的指令，redis会之间将所有指令都会失效，因为这是一个问题队列。</p><h4 id="执行时错误" tabindex="-1"><a class="header-anchor" href="#执行时错误" aria-hidden="true">#</a> 执行时错误</h4><p>执行时错误比较特殊，他在按序处理所有指令，遇到错误就按正常流程处理继续执行下去。</p><h4 id="不支持回滚原因" tabindex="-1"><a class="header-anchor" href="#不支持回滚原因" aria-hidden="true">#</a> 不支持回滚原因</h4><p>大概的意思是，作者不支持事务回滚的原因有以下两个：</p><ul><li>他认为 Redis 事务的执行时，错误通常都是编程错误造成的，这种错误通常只会出现在开发环境中，而很少会在实际的生产环境中出现，所以他认为没有必要为 Redis 开发事务回滚功能；</li><li>不支持事务回滚是因为这种复杂的功能和 Redis 追求的简单高效的设计主旨不符合。</li></ul><p>这里不支持事务回滚，指的是不支持事务运行时错误的事务回滚。</p><h2 id="lua" tabindex="-1"><a class="header-anchor" href="#lua" aria-hidden="true">#</a> lua</h2><p><strong>为什么建议 Redis+Lua 的方式？</strong> 主要有两点原因：</p><ul><li><strong>减少了网络开销</strong> ：我们可以利用 Lua 脚本来批量执行多条 Redis 命令，这些 Redis 命令会被提交到 Redis 服务器一次性执行完成，大幅减小了网络开销。</li><li><strong>原子性</strong> ：一段 Lua 脚本可以视作一条命令执行，一段 Lua 脚本执行过程中不会有其他脚本或 Redis 命令同时执行，保证了操作不会被其他指令插入或打扰。</li></ul>',19),s=[h];function n(t,c){return e(),d("div",null,s)}const l=a(i,[["render",n],["__file","lua.html.vue"]]);export{l as default};
