import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,d as c}from"./app-9107e99b.js";const o={},a=c('<h1 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h1><p>代表：AtomicInteger，使用 cas（Unsafe）来保证原子性</p><ul><li>核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功</li><li>由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换</li><li>它需要多核 cpu 支持，且核心数不应超过 cpu 核数</li></ul><p>缺点：</p><ul><li>只能保证一个变量的原子操作</li><li>解决：AtomicReference</li></ul><p>1、乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读取新值修改后重试更新。（自旋锁就是一种乐观锁）</p><p>3、自旋锁：循环使用 cup 时间，尝试 cas 操作直至成功返回 true，不然一直循环。（比较内存值与线程旧值是否一致，一致则更新，不然则循环）</p><h2 id="cas-算法" tabindex="-1"><a class="header-anchor" href="#cas-算法" aria-hidden="true">#</a> CAS 算法</h2><p>问题：</p><ol><li><p>ABA 问题</p><p>解决：时间戳/版本号，如 AtomicStampedReference</p><p>如果一个变量 V 初次读取的时候是 A 值，并且在准备赋值的时候检查到它仍然是 A 值，那我们就能说明它的值没有被其他线程修改过了吗？很明显是不能的，因为在这段时间它的值可能被改为其他值，然后又改回 A，那 CAS 操作就会误认为它从来没有被修改过。这个问题被称为 CAS 操作的 <strong>&quot;ABA&quot;问题。</strong></p><p>ABA 问题的解决思路是在变量前面追加上<strong>版本号或者时间戳</strong>。JDK 1.5 以后的 <code>AtomicStampedReference</code>类就是用来解决 ABA 问题的，其中的 <code>compareAndSet()</code> 方法就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p></li><li><p>循环时间长开销大</p><p>CAS 经常会用到自旋操作来进行重试，也就是不成功就一直循环执行直到成功。如果长时间不成功，会给 CPU 带来非常大的执行开销。</p><p>解决：CLH 降低粒度，或 AQS 改为阻塞</p></li><li><p>只能保证一个共享变量的原子操作</p></li></ol><p>CAS 涉及到三个操作数：</p><ul><li><strong>V</strong> ：要更新的变量值(Var)</li><li><strong>E</strong> ：预期值(Expected)</li><li><strong>N</strong> ：拟写入的新值(New)</li></ul><p>当且仅当 V 的值等于 E 时，CAS 通过原子方式用新值 N 来更新 V 的值。如果不等，说明已经有其它线程更新了 V，则当前线程放弃更新。</p><p>当多个线程同时使用 CAS 操作一个变量时，只有一个会胜出，并成功更新，其余均会失败，但失败的线程并不会被挂起，仅是被告知失败，并且允许再次尝试，当然也允许失败的线程放弃操作。</p><p><code>AtomicStampedReference</code>：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。</p><h2 id="atomic" tabindex="-1"><a class="header-anchor" href="#atomic" aria-hidden="true">#</a> Atomic</h2>',16),p=[a];function r(l,n){return t(),i("div",null,p)}const A=e(o,[["render",r],["__file","乐观锁.html.vue"]]);export{A as default};
