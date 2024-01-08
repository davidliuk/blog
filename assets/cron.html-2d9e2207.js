import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-9107e99b.js";const t={},p=e(`<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h1><h2 id="单体定时任务" tabindex="-1"><a class="header-anchor" href="#单体定时任务" aria-hidden="true">#</a> 单体定时任务</h2><h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> Thread</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSameThing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timer" tabindex="-1"><a class="header-anchor" href="#timer" aria-hidden="true">#</a> Timer</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Timer</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
timer<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSomething&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scheduledexecutorservice" tabindex="-1"><a class="header-anchor" href="#scheduledexecutorservice" aria-hidden="true">#</a> ScheduledExecutorService</h3><p>可以做定时操作</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ScheduledExecutorService</span> scheduledExecutorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scheduledExecutorService<span class="token punctuation">.</span><span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSomething&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ScheduledExecutorService 是 JDK1.5+版本引进的定时任务，该类位于 java.util.concurrent 并发包下。</p><p>ScheduledExecutorService 是基于多线程的，设计的初衷是为了解决 Timer 单线程执行，多个任务之间会互相影响的问题。</p><p>它主要包含 4 个方法：</p><ul><li><code>schedule(Runnable command,long delay,TimeUnit unit)</code> ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕。</li><li><code>schedule(Callable&lt;V&gt; callable,long delay,TimeUnit unit)</code> ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕，并且可以获取执行结果。</li><li><code>scheduleAtFixedRate</code> ，表示以固定频率执行的任务，如果当前任务耗时较多，超过定时周期 period，则当前任务结束后会立即执行。</li><li><code>scheduleWithFixedDelay</code> ，表示以固定延时执行任务，延时是相对当前任务结束为起点计算开始时间。</li></ul><h3 id="spring-task" tabindex="-1"><a class="header-anchor" href="#spring-task" aria-hidden="true">#</a> Spring Task</h3><p>支持<strong>cron 表达式</strong></p><p>定时任务的需求所谓是数不胜数，其中实现方式也是百花齐放，用得最多的大概率为 Springboot 中的 @Scheduled(cron = “0 0 1 1 * ?”) 注解，或者是定时任务 XXL-JOB 框架，这两者我接触的比较多，除此之外还有，Quartz 、elastic-job、但这两个在分布式领域而言，和 XXL-JOBB 比较，XXL-JOB 更为受欢迎。无论是这些框架或者是 springboot 自带的定时任务组件，基本上都能满足固定定时任务的需求。</p><h2 id="分布式定时任务" tabindex="-1"><a class="header-anchor" href="#分布式定时任务" aria-hidden="true">#</a> 分布式定时任务</h2><h3 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job" aria-hidden="true">#</a> xxl-job</h3><h3 id="elastic-job" tabindex="-1"><a class="header-anchor" href="#elastic-job" aria-hidden="true">#</a> elastic-job</h3><h2 id="动态定时任务" tabindex="-1"><a class="header-anchor" href="#动态定时任务" aria-hidden="true">#</a> 动态定时任务</h2><h3 id="mq-延迟队列" tabindex="-1"><a class="header-anchor" href="#mq-延迟队列" aria-hidden="true">#</a> MQ 延迟队列</h3><h2 id="操作系统任务" tabindex="-1"><a class="header-anchor" href="#操作系统任务" aria-hidden="true">#</a> 操作系统任务</h2><h3 id="linux-crontab" tabindex="-1"><a class="header-anchor" href="#linux-crontab" aria-hidden="true">#</a> Linux crontab</h3><p>优缺点：</p><ul><li>优点：方便修改定时规则，支持一些较复杂的定时规则，通过文件可以统一管理配好的各种定时脚本。</li><li>缺点：如果定时任务非常多，不太好找，而且必须要求操作系统是 linux ，否则无法执行。</li></ul>`,25),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","cron.html.vue"]]);export{d as default};
