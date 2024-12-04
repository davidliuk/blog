import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,o as r}from"./app-CybQbXIt.js";const i={};function l(o,e){return r(),n("div",null,e[0]||(e[0]=[t('<h1 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span>引用类型</span></a></h1><h2 id="强引用" tabindex="-1"><a class="header-anchor" href="#强引用"><span>强引用</span></a></h2><p>普通变量赋值即为强引用，如</p><p><code>A a = new A();</code></p><h3 id="回收特点" tabindex="-1"><a class="header-anchor" href="#回收特点"><span>回收特点</span></a></h3><p>当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠回收具有强引用的对象，来解决内存不足的问题。通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收。</p><p>如果想中断或者回收强引用对象可以显式地将引用赋值为 null(a=null)，这样的话 JVM 就会在合适的时间，进行垃圾回收。</p><h2 id="软引用" tabindex="-1"><a class="header-anchor" href="#软引用"><span>软引用</span></a></h2><p>引用和对象通过<code>SoftReference</code>建立关联</p><p><code>SoftReference a = new SoftReference(new A());</code></p><h3 id="回收特点-1" tabindex="-1"><a class="header-anchor" href="#回收特点-1"><span>回收特点</span></a></h3><p><strong>“内存不够就回收，内存充足不回收”</strong></p><p>“适合做缓存”</p><p>2、当系统内存够用就保留不回收（及时发生了 GC），内存不足时，会被回收</p><p>3、软引用自身不会被垃圾回收，因为 GC Root 还引用着，软引用自身需要配合引用队列来释放。</p><p>软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收器回收，Java 虚拟机就会把这个软引用加入到与之关联的引用队列中。</p><p>4、软引用适合缓存使用的场景，当内存不够的时候，对象是被回收的。</p><h3 id="应用案例" tabindex="-1"><a class="header-anchor" href="#应用案例"><span>应用案例</span></a></h3><p>缓存：</p><h2 id="弱引用" tabindex="-1"><a class="header-anchor" href="#弱引用"><span>弱引用</span></a></h2><p><code>WeakReference a = new WeakReference(new A());</code></p><h3 id="回收特点-2" tabindex="-1"><a class="header-anchor" href="#回收特点-2"><span>回收特点</span></a></h3><p><strong>“只要发生 GC，一定被回收”</strong></p><p>2、如果仅有弱引用引用该对象时，只要发生垃圾回收，就会释放该对象</p><p>3、当一个对象仅仅被 weak reference 指向, 而没有任何其他 strong reference 指向的时候, 如果 GC 运行, 那么这个对象就会被回收。如果存在强引用同时与之关联，则进行垃圾回收时也不会回收该对象。</p><p>4、ThreadLocal 和 WeakHashMap 内部都是使用了弱引用，用来保证那些不被用到的 key 值，在垃圾回收的时候可以被回收掉。</p><h3 id="应用案例-1" tabindex="-1"><a class="header-anchor" href="#应用案例-1"><span>应用案例</span></a></h3><p>ThreadLocal</p><h2 id="虚引用" tabindex="-1"><a class="header-anchor" href="#虚引用"><span>虚引用</span></a></h2><p><code>PhantomReference a = new PhantomReference(new A(), referenceQueue);</code></p><ol><li>也称为幽灵引用或者幻影引用，它是最弱的引用关系。无法通过虚引用来取得一个对象实例。</li><li>为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知。PhantomReference 类来实现虚引用。</li><li>必须配合引用队列一起使用，当虚引用所引用的对象被回收时（a 对象、b 对象），由 Reference Handler 线程将虚引用对象入队，这样就可以知道哪些对象被回收，从而对它们关联的资源做进一步处理</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>1、对于强引用，平时在编写代码时会经常使用。</p><p>2、而其他三种类型的引用，使用得最多就是软引用和弱引用，这两种既有相似之处又有区别，他们都来描述非必须对象。</p><p>3、被软引用关联的对象只有在内存不足时才会被回收，而被弱引用关联的对象在 JVM 进行垃圾回收时总会被回收。</p><p>4、Java 中 4 种引用的级别由高到低依次为：强引用 &gt; 软引用 &gt; 弱引用 &gt; 虚引用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d -p 8848:8848 -e MODE=standalone -e PREFER_HOST_MODE=hostname -v /appdata/nacos/init.d/custom.properties:/home/nacos/init.d/custom.properties -v /appdata/nacos/logs:/home/nacos/logs --restart always --name nacos nacos/nacos-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',37)]))}const c=a(i,[["render",l],["__file","引用类型.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B.html","title":"引用类型","lang":"en-US","frontmatter":{"description":"引用类型 强引用 普通变量赋值即为强引用，如 A a = new A(); 回收特点 当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠回收具有强引用的对象，来解决内存不足的问题。通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收。 如果想中断或者回收强引用对象可以显式地将引用...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"引用类型"}],["meta",{"property":"og:description","content":"引用类型 强引用 普通变量赋值即为强引用，如 A a = new A(); 回收特点 当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠回收具有强引用的对象，来解决内存不足的问题。通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收。 如果想中断或者回收强引用对象可以显式地将引用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"引用类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"强引用","slug":"强引用","link":"#强引用","children":[{"level":3,"title":"回收特点","slug":"回收特点","link":"#回收特点","children":[]}]},{"level":2,"title":"软引用","slug":"软引用","link":"#软引用","children":[{"level":3,"title":"回收特点","slug":"回收特点-1","link":"#回收特点-1","children":[]},{"level":3,"title":"应用案例","slug":"应用案例","link":"#应用案例","children":[]}]},{"level":2,"title":"弱引用","slug":"弱引用","link":"#弱引用","children":[{"level":3,"title":"回收特点","slug":"回收特点-2","link":"#回收特点-2","children":[]},{"level":3,"title":"应用案例","slug":"应用案例-1","link":"#应用案例-1","children":[]}]},{"level":2,"title":"虚引用","slug":"虚引用","link":"#虚引用","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1681208623000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2.89,"words":868},"filePathRelative":"se/lang/java/jvm/内存管理/垃圾回收/引用类型.md","localizedDate":"April 11, 2023","excerpt":"\\n<h2>强引用</h2>\\n<p>普通变量赋值即为强引用，如</p>\\n<p><code>A a = new A();</code></p>\\n<h3>回收特点</h3>\\n<p>当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠回收具有强引用的对象，来解决内存不足的问题。通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收。</p>\\n<p>如果想中断或者回收强引用对象可以显式地将引用赋值为 null(a=null)，这样的话 JVM 就会在合适的时间，进行垃圾回收。</p>\\n<h2>软引用</h2>\\n<p>引用和对象通过<code>SoftReference</code>建立关联</p>","autoDesc":true}`);export{c as comp,d as data};
