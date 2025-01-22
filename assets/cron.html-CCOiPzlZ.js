import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-ktFCNIob.js";const l={};function h(t,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h1><h2 id="单体定时任务" tabindex="-1"><a class="header-anchor" href="#单体定时任务"><span>单体定时任务</span></a></h2><h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread"><span>Thread</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;doSameThing&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 60</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(e);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">})</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timer" tabindex="-1"><a class="header-anchor" href="#timer"><span>Timer</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Timer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> timer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Timer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">schedule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;doSomething&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scheduledexecutorservice" tabindex="-1"><a class="header-anchor" href="#scheduledexecutorservice"><span>ScheduledExecutorService</span></a></h3><p>可以做定时操作</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ScheduledExecutorService</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> scheduledExecutorService </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Executors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newScheduledThreadPool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">scheduledExecutorService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scheduleAtFixedRate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;doSomething&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">TimeUnit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">MILLISECONDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ScheduledExecutorService 是 JDK1.5+版本引进的定时任务，该类位于 java.util.concurrent 并发包下。</p><p>ScheduledExecutorService 是基于多线程的，设计的初衷是为了解决 Timer 单线程执行，多个任务之间会互相影响的问题。</p><p>它主要包含 4 个方法：</p><ul><li><code>schedule(Runnable command,long delay,TimeUnit unit)</code> ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕。</li><li><code>schedule(Callable&lt;V&gt; callable,long delay,TimeUnit unit)</code> ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕，并且可以获取执行结果。</li><li><code>scheduleAtFixedRate</code> ，表示以固定频率执行的任务，如果当前任务耗时较多，超过定时周期 period，则当前任务结束后会立即执行。</li><li><code>scheduleWithFixedDelay</code> ，表示以固定延时执行任务，延时是相对当前任务结束为起点计算开始时间。</li></ul><h3 id="spring-task" tabindex="-1"><a class="header-anchor" href="#spring-task"><span>Spring Task</span></a></h3><p>支持<strong>cron 表达式</strong></p><p>定时任务的需求所谓是数不胜数，其中实现方式也是百花齐放，用得最多的大概率为 Springboot 中的 @Scheduled(cron = “0 0 1 1 * ?”) 注解，或者是定时任务 XXL-JOB 框架，这两者我接触的比较多，除此之外还有，Quartz 、elastic-job、但这两个在分布式领域而言，和 XXL-JOBB 比较，XXL-JOB 更为受欢迎。无论是这些框架或者是 springboot 自带的定时任务组件，基本上都能满足固定定时任务的需求。</p><h2 id="分布式定时任务" tabindex="-1"><a class="header-anchor" href="#分布式定时任务"><span>分布式定时任务</span></a></h2><h3 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job"><span>xxl-job</span></a></h3><h3 id="elastic-job" tabindex="-1"><a class="header-anchor" href="#elastic-job"><span>elastic-job</span></a></h3><h2 id="动态定时任务" tabindex="-1"><a class="header-anchor" href="#动态定时任务"><span>动态定时任务</span></a></h2><h3 id="mq-延迟队列" tabindex="-1"><a class="header-anchor" href="#mq-延迟队列"><span>MQ 延迟队列</span></a></h3><h2 id="操作系统任务" tabindex="-1"><a class="header-anchor" href="#操作系统任务"><span>操作系统任务</span></a></h2><h3 id="linux-crontab" tabindex="-1"><a class="header-anchor" href="#linux-crontab"><span>Linux crontab</span></a></h3><p>优缺点：</p><ul><li>优点：方便修改定时规则，支持一些较复杂的定时规则，通过文件可以统一管理配好的各种定时脚本。</li><li>缺点：如果定时任务非常多，不太好找，而且必须要求操作系统是 linux ，否则无法执行。</li></ul>`,25)]))}const r=s(l,[["render",h],["__file","cron.html.vue"]]),d=JSON.parse(`{"path":"/se/design/system/cron.html","title":"定时任务","lang":"en-US","frontmatter":{"description":"定时任务 单体定时任务 Thread Timer ScheduledExecutorService 可以做定时操作 ScheduledExecutorService 是 JDK1.5+版本引进的定时任务，该类位于 java.util.concurrent 并发包下。 ScheduledExecutorService 是基于多线程的，设计的初衷是为了解决...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/cron.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"定时任务"}],["meta",{"property":"og:description","content":"定时任务 单体定时任务 Thread Timer ScheduledExecutorService 可以做定时操作 ScheduledExecutorService 是 JDK1.5+版本引进的定时任务，该类位于 java.util.concurrent 并发包下。 ScheduledExecutorService 是基于多线程的，设计的初衷是为了解决..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定时任务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"单体定时任务","slug":"单体定时任务","link":"#单体定时任务","children":[{"level":3,"title":"Thread","slug":"thread","link":"#thread","children":[]},{"level":3,"title":"Timer","slug":"timer","link":"#timer","children":[]},{"level":3,"title":"ScheduledExecutorService","slug":"scheduledexecutorservice","link":"#scheduledexecutorservice","children":[]},{"level":3,"title":"Spring Task","slug":"spring-task","link":"#spring-task","children":[]}]},{"level":2,"title":"分布式定时任务","slug":"分布式定时任务","link":"#分布式定时任务","children":[{"level":3,"title":"xxl-job","slug":"xxl-job","link":"#xxl-job","children":[]},{"level":3,"title":"elastic-job","slug":"elastic-job","link":"#elastic-job","children":[]}]},{"level":2,"title":"动态定时任务","slug":"动态定时任务","link":"#动态定时任务","children":[{"level":3,"title":"MQ 延迟队列","slug":"mq-延迟队列","link":"#mq-延迟队列","children":[]}]},{"level":2,"title":"操作系统任务","slug":"操作系统任务","link":"#操作系统任务","children":[{"level":3,"title":"Linux crontab","slug":"linux-crontab","link":"#linux-crontab","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"se/design/system/cron.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>单体定时任务</h2>\\n<h3>Thread</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">new</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Thread</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(() </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    while</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        try</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">            System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">out</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">println</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"doSameThing\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">            Thread</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sleep</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1000</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> *</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 60</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> *</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 5</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        } </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">catch</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Exception</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\"> e</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">            log</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">error</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(e);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">})</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">start</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};