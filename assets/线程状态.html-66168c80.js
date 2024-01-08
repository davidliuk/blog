import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as e}from"./app-9107e99b.js";const i={},l=e(`<h1 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h1><h2 id="状态转换图" tabindex="-1"><a class="header-anchor" href="#状态转换图" aria-hidden="true">#</a> 状态转换图</h2><h3 id="java-六种状态" tabindex="-1"><a class="header-anchor" href="#java-六种状态" aria-hidden="true">#</a> JAVA 六种状态</h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 22.49.41.png" alt="截屏2023-02-01 22.49.41" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png" alt="Java 线程状态变迁图" loading="lazy"></p><p>Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个：</p><ul><li><p>NEW：初始状态，线程被创建出来但没有被调用 <code>start()</code> 。</p><p>此状态只是一个 java 对象，并没有与 cpu 中的一个线程关联，start 以后可运行以后关联。</p></li><li><p>RUNNABLE：运行状态，线程被调用了 <code>start()</code>等待运行的状态。</p></li><li><p>BLOCKED：阻塞状态，需要等待锁释放。</p></li><li><p>WAITING：等待状态，表示该线程需要等待其他线程做出一些特定动作（通知或中断）。</p></li><li><p>TIME_WAITING：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</p></li><li><p>TERMINATED：终止状态，表示该线程已经运行完毕。</p></li></ul><p>线程在生命周期中并不是固定处于某一个状态而是随着代码的执行在不同状态之间切换。</p><blockquote><p>控制线程先后执行次序的技巧：Debug 模式，在主线程和分线程分别打好断点，控制两个端点哪个先执行。</p></blockquote><h3 id="os-五种状态及转化图" tabindex="-1"><a class="header-anchor" href="#os-五种状态及转化图" aria-hidden="true">#</a> OS 五种状态及转化图</h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 23.34.50.png" alt="截屏2023-02-01 23.34.50" loading="lazy"></p><ul><li><p>RUNNING：运行状态，有资格且正在运行</p></li><li><p>READY：就绪状态，有资格但还没有运行</p></li><li><p>BLOCKED：阻塞状态，暂时没有资格分到 CPU 时间（特殊的阻塞 I/O 不需要 CPU 时间片是磁盘在处理的，也归到阻塞，但是实际上是在运行的）</p></li></ul><p>Java 中的 RUNNABLE 涵盖了就绪、运行、阻塞 I/O</p><h2 id="转换指令" tabindex="-1"><a class="header-anchor" href="#转换指令" aria-hidden="true">#</a> 转换指令</h2><h3 id="终止线程" tabindex="-1"><a class="header-anchor" href="#终止线程" aria-hidden="true">#</a> 终止线程</h3><p>在 Java 中，有几种方法可以终止线程，包括：</p><ol><li><p>使用标志变量：在线程中使用标志变量，当标志变量为 true 时，线程终止执行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> running <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>running<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 线程执行的代码</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stopRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        running <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包含一个名为 running 的标志变量。在 run()方法中，线程会不断地检查 running 变量的值，如果 running 为 true，则继续执行线程的代码。当需要终止线程时，可以调用 stopRunning()方法将 running 变量设置为 false，从而终止线程的执行。</p><p>需要注意的是，running 变量必须使用 volatile 关键字进行修饰，以确保多个线程之间对该变量的可见性。否则，可能会出现一个线程修改了 running 变量的值，但是其他线程并没有立即看到这个变化的情况。</p></li><li><p>使用<code>interrupt()</code>方法：调用线程的<code>interrupt()</code>方法可以中断线程的执行。线程可以通过检查自身的中断状态来判断是否应该终止执行。</p></li><li><p>使用<code>stop()</code>方法：调用线程的<code>stop()</code>方法可以强制终止线程的执行。但是，<code>stop()</code>方法已经被标记为不安全的方法，因为它可能会导致线程在不安全的状态下停止执行，从而导致数据不一致或其他问题。</p></li></ol><p><code>stop()</code>方法不安全的原因是，它会立即停止线程的执行，而不会给线程完成清理工作的机会。这可能会导致线程在执行过程中持有锁或其他资源，从而导致其他线程无法访问这些资源。此外，<code>stop()</code>方法可能会在任何时候停止线程的执行，从而导致线程在不一致的状态下停止执行。</p><p>因此，建议使用<code>interrupt()</code>方法来终止线程的执行，因为它可以安全地中断线程的执行，并且可以让线程完成清理工作。</p><h3 id="sleep-vs-wait" tabindex="-1"><a class="header-anchor" href="#sleep-vs-wait" aria-hidden="true">#</a> sleep vs wait</h3><h4 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点" aria-hidden="true">#</a> 共同点</h4><p>效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态</p><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4><h5 id="方法归属不同" tabindex="-1"><a class="header-anchor" href="#方法归属不同" aria-hidden="true">#</a> 方法归属不同</h5><ul><li>sleep(long)上 Thread 的静态方法</li><li>wait(), wait(long)都是 Object 的成员方法，每个对象都有（即任意对象都可以有锁）</li></ul><h5 id="醒来时机不同" tabindex="-1"><a class="header-anchor" href="#醒来时机不同" aria-hidden="true">#</a> 醒来时机不同</h5><ul><li>执行 sleep(long), wait(long)的线程都会在等待相应毫秒后醒来</li><li>wait(), wait(long)还可以蓓 notify 唤醒，wait()如果不唤醒就一直等下去</li><li>他们都可以被 interrupt 直接唤醒（抛出 InterruptException）</li></ul><h5 id="锁的特性不同" tabindex="-1"><a class="header-anchor" href="#锁的特性不同" aria-hidden="true">#</a> 锁的特性不同</h5><ul><li>wait 方法的调用，必须先获取 wait 对象的锁，而 sleep 则无此限制</li><li>wait 方法执行后会释放对象锁，允许其他线程获取该对象锁（我放弃，但你们还可以用）</li><li>sleep 如果在 synchronize 代码块中执行，并不会释放对象锁（我放弃，你们也用不了）</li></ul>`,29),p=[l];function t(o,c){return n(),s("div",null,p)}const u=a(i,[["render",t],["__file","线程状态.html.vue"]]);export{u as default};
