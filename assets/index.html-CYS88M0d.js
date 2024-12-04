import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as s,o as l}from"./app-CybQbXIt.js";const t={};function n(o,i){return l(),e("div",null,i[0]||(i[0]=[s(`<h1 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h1><p>Java 集合的架构如下</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/java-collection-hierarchy.png" alt="Java 集合框架概览" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-16 21.15.43.png" alt="截屏2023-03-16 21.15.43" loading="lazy"></p><p>内容大概分为如下三个部分：</p><ul><li>Collaction 接口</li><li>Map 接口</li><li>线程安全集合</li></ul><h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><p>有序性</p><h3 id="comparable-和-comparator-的区别" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator-的区别"><span>Comparable 和 Comparator 的区别</span></a></h3><ul><li><p>Comparable 接口 java.lang 包</p><p>需要实现接口，它有<code>compareTo(Object obj)</code>方法用来排序</p></li><li><p>Comparator 接口 java.util 包</p><p>作为函数参数，它有<code>compare(Object obj1, Object obj2)</code> 方法用来排序</p></li></ul><p>一般我们需要对一个集合使用自定义排序时，我们就要重写 <code>compareTo() </code>方法或 compare() 方法， 当我们需要对某一个集合实现两种排序方式，比如一个 Song 对象中的歌名和歌手名分别采用一种排序方法的话，我们可以重写 <code>compareTo()</code> 方法和使用自制的 Comparator 方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 Collections.sort().</p><h3 id="无序性和不可重复性" tabindex="-1"><a class="header-anchor" href="#无序性和不可重复性"><span>无序性和不可重复性</span></a></h3><ol><li>无序性：无序性不等于随机性，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。</li><li>不可重复性：不可重复性是指添加的元素按照 <code>equals()</code> 判断时 ，返回 false，需要同时重写 <code>equals()</code> 方法和 HashCode()方法。</li></ol><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h2><ul><li><code>java.util</code>包下面的所有的集合类都是 fail-fast 的，</li><li><code>java.util.concurrent</code>包下面的所有的类都是 fail-safe 的。</li></ul><h3 id="快速失败-fail-fast" tabindex="-1"><a class="header-anchor" href="#快速失败-fail-fast"><span>快速失败 fail-fast</span></a></h3><p>快速失败(fail-fast) 是 Java 集合的一种错误检测机制。导致抛出 ConcurrentModificationException 异常。</p><ol><li>在使用迭代器对集合进行遍历的时候，我们在多线程下操作非安全失败(fail-safe)的集合类可能就会触发 fail-fast 机制。</li><li>在单线程下，如果在遍历过程中对集合对象的内容进行了修改的话也会触发 fail-fast 机制。</li></ol><blockquote><p>注：增强 for 循环也是借助迭代器进行遍历。</p><p>list是不能简单的用 for() 来删除数据的，因为每次删除一个位，该位后面的数据便会往前移一位。如果非要用 for() 可以考虑逆序删除。</p></blockquote><p>举个例子：</p><ol><li>多线程下，如果线程 1 正在对集合进行遍历，此时线程 2 对集合进行修改(增加、删除、 修改)</li><li>线程 1 在遍历过程中对集合进行修改</li></ol><p>都会导致线程 1 抛出 ConcurrentModificationException 异常。</p><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4><ul><li><p>modCount 是 ArrayList 中的一个成员变量，它表示集合实际被修改的次数，当ArrayList被创建时就存在了，初始值为0。</p></li><li><p>expectedModCount 是iterator中的一个成员变量，而iterator是ArrayList的一个内部类，当ArrayList调用<code>iterator()</code>方法获取一个迭代器时，会创建一个iterator，并且将expectedModCount 初始化为modCount的值。只有通过该迭代器修改了集合，expectedModCount 才会修改。</p></li></ul><p>每当迭代器使用 hashNext() / next() 遍历下一个元素之前，都会检测 modCount 变量是否为 expectedModCount 值，是的话就返回遍历；否则抛出异常，终止遍历。</p><p>如果我们在集合被遍历期间，直接对其进行修改的话，就会改变 modCount 的值，导致 modCount ≠ expectedModCount ，进而抛出 ConcurrentModificationException 异常。</p><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h4><p><strong>Iterator#remove()</strong></p><p>通过 Iterator 的 remove()方法修改集合的话会修改到 expectedModCount 的值，所以不会抛出异常。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">iterator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hasNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;aa&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">iterator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">())</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        iterator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Collection#removeIf()</strong></p><p>Java8 可以使用 <code>Collection#removeIf()</code>方法删除满足特定条件的元素</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">removeIf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(filter </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> filter </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>增强 for 循环 + break</strong></p><p>在一个集合中，某个即将删除的元素最多只包含一个的话， 可以使用增强for循环，只要在删除之后，立刻结束循环体，不要再继续进行遍历就可以了，也就是说不让代码执行到下一次的next方法。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> str </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> strList) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;aa&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(str)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        strList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(str);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安全失败-fail-safe" tabindex="-1"><a class="header-anchor" href="#安全失败-fail-safe"><span>安全失败 fail-safe</span></a></h3><p>采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是<strong>先复制</strong>原有集合内容，在拷⻉的集合上进行遍历。所以，在遍历过程中对原集合所作的修改并不能被迭代器检测到，故不会抛 ConcurrentModificationException 异常。</p><p>缺点：</p><ol><li>内存占用问题：因为要复制集合对象，导致内存开销大</li><li>数据一致性问题：CopyOnWrite容器只能保证数据的最终一致性，不能保证数据的实时一致性。所以如果你希望写入的的数据，马上能读到，请不要使用CopyOnWrite容器。</li></ol><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>null</span></a></h2><p>不允许加入null的集合</p><ul><li><p>排序集合：TreeMap、TreeSet</p><p>这些集合在默认的排序行为下不接受<code>null</code>键或元素，因为它们需要对元素进行比较，而<code>null</code>通常无法与其他对象进行比较。</p><p>但是，如果提供了自定义的比较器，并且该比较器能够处理<code>null</code>，则<code>TreeSet</code>和<code>TreeMap</code>可能会接受<code>null</code>。</p></li><li><p>集合工厂：<strong>Java 9及更高版本中的方法创建的集合</strong>：</p><ul><li><code>List.of()</code></li><li><code>Set.of()</code></li><li><code>Map.of()</code> 和 <code>Map.ofEntries()</code></li><li>这些工厂方法创建的集合是不可变的，并且不接受<code>null</code>元素。</li></ul></li><li><p><strong><code>ConcurrentHashMap</code></strong>：</p><ul><li><p>不接受<code>null</code>作为键（key）或值（value）。</p></li><li><p>在并发环境中使用时，以防止某些操作的歧义。</p><p>get返回null说明不存在</p></li></ul></li><li><p><strong><code>CopyOnWriteArrayList</code>和<code>CopyOnWriteArraySet</code></strong>：</p><ul><li>这些线程安全的集合类不接受<code>null</code>元素。</li><li>主要用于替代<code>ArrayList</code>和<code>HashSet</code>，以避免并发修改异常。</li></ul></li><li><p><strong><code>PriorityQueue</code>, <code>ArrayDeque</code></strong></p><p><code>ArrayDeque</code> 实现了 <code>Deque</code> 接口，而 <code>Deque</code> 的 API 使用 <code>null</code> 来表示特殊的返回值（例如，当队列为空时，<code>poll</code> 方法返回 <code>null</code>）。</p><p>为了避免歧义，<code>ArrayDeque</code> 和其他一些 <code>Deque</code> 实现不允许插入 <code>null</code>。PriorityQueue 同理，但是 LinkedList 继承的 Queue 可以。</p></li><li><p><code>Hashtable</code></p></li></ul><p><code>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个</p><p>list、set、vector 等集合类型都是可以存放null的。</p>`,45)]))}const d=a(t,[["render",n],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/se/lang/java/collections/","title":"集合","lang":"en-US","frontmatter":{"description":"集合 Java 集合的架构如下 Java 集合框架概览 截屏2023-03-16 21.15.43 内容大概分为如下三个部分： Collaction 接口 Map 接口 线程安全集合 性质 有序性 Comparable 和 Comparator 的区别 Comparable 接口 java.lang 包 需要实现接口，它有compareTo(Objec...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/collections/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"集合"}],["meta",{"property":"og:description","content":"集合 Java 集合的架构如下 Java 集合框架概览 截屏2023-03-16 21.15.43 内容大概分为如下三个部分： Collaction 接口 Map 接口 线程安全集合 性质 有序性 Comparable 和 Comparator 的区别 Comparable 接口 java.lang 包 需要实现接口，它有compareTo(Objec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/java-collection-hierarchy.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/java-collection-hierarchy.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-16%2021.15.43.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[{"level":3,"title":"Comparable 和 Comparator 的区别","slug":"comparable-和-comparator-的区别","link":"#comparable-和-comparator-的区别","children":[]},{"level":3,"title":"无序性和不可重复性","slug":"无序性和不可重复性","link":"#无序性和不可重复性","children":[]}]},{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"快速失败 fail-fast","slug":"快速失败-fail-fast","link":"#快速失败-fail-fast","children":[]},{"level":3,"title":"安全失败 fail-safe","slug":"安全失败-fail-safe","link":"#安全失败-fail-safe","children":[]}]},{"level":2,"title":"null","slug":"null","link":"#null","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":5.11,"words":1532},"filePathRelative":"se/lang/java/collections/README.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>Java 集合的架构如下</p>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/java-collection-hierarchy.png\\" alt=\\"Java 集合框架概览\\" loading=\\"lazy\\"></p>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-16 21.15.43.png\\" alt=\\"截屏2023-03-16 21.15.43\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{d as comp,h as data};
