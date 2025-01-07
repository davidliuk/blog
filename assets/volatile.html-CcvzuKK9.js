import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as t,o as i}from"./app-ChU1gMRF.js";const o={};function n(d,e){return i(),l("div",null,e[0]||(e[0]=[t('<h1 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile"><span>volatile</span></a></h1><h2 id="可见性" tabindex="-1"><a class="header-anchor" href="#可见性"><span>可见性</span></a></h2><p>在 Java 中，<code>volatile</code> 关键字可以保证变量的可见性，如果我们将变量声明为 <strong><code>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。</p><p>当一个变量被声明为<code>volatile</code>时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。</p><h3 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h3><ol><li>线程 A 将工作内存的 data 更改后，强制将 data 值刷回主内存</li><li>如果线程 B 的工作内存中有 data 变量的缓存时，会强制让这个 data 变量缓存失效</li><li>当线程 B 需要读取 data 变量的值时，先从工作内存中读，发现已经过期，就会从主内存中加载 data 变量的最新值了</li></ol><h3 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h3><p>JIT 有的时候会优化，对执行过多的重点语句，有些就从物理内存中抽出来弄成一个局部的了，这样就会造成后续对这个变量改变对这句话不可见，如果给这个变量加 volatile，就不会被优化，可以保证可见性。</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li><code>volatile</code> 修饰引用类型，<code>volatile</code>只能保证对象引用的可见性，并不能保证对象引用指向的对象的可见性，即如果改变对象的属性，并不具有可见性。</li></ul><h2 id="有序性" tabindex="-1"><a class="header-anchor" href="#有序性"><span>有序性</span></a></h2><p>有序性：写变量，一定要让 volatile 变量在最下面；读变量，一定在最上面</p><p>内存屏障：</p><ul><li>对 volatile 变量写操作之前有向上的内存屏障，防止前面的语句越过屏障</li><li>对 volatile 变量读操作之后有向下的内存屏障，防止后面的语句越过屏障</li></ul>',14)]))}const s=a(o,[["render",n],["__file","volatile.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/JUC/safe/volatile.html","title":"volatile","lang":"en-US","frontmatter":{"description":"volatile 可见性 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。 当一个变量被声明为volatile时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。 过程...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/safe/volatile.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"volatile"}],["meta",{"property":"og:description","content":"volatile 可见性 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。 当一个变量被声明为volatile时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。 过程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"volatile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"可见性","slug":"可见性","link":"#可见性","children":[{"level":3,"title":"过程","slug":"过程","link":"#过程","children":[]},{"level":3,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"有序性","slug":"有序性","link":"#有序性","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"se/lang/java/JUC/safe/volatile.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>可见性</h2>\\n<p>在 Java 中，<code>volatile</code> 关键字可以保证变量的可见性，如果我们将变量声明为 <strong><code>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。</p>\\n<p>当一个变量被声明为<code>volatile</code>时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。</p>\\n<h3>过程</h3>\\n<ol>\\n<li>线程 A 将工作内存的 data 更改后，强制将 data 值刷回主内存</li>\\n<li>如果线程 B 的工作内存中有 data 变量的缓存时，会强制让这个 data 变量缓存失效</li>\\n<li>当线程 B 需要读取 data 变量的值时，先从工作内存中读，发现已经过期，就会从主内存中加载 data 变量的最新值了</li>\\n</ol>","autoDesc":true}`);export{s as comp,p as data};
