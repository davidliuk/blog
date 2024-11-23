import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as o,o as t}from"./app-Cv-jMnVl.js";const c={};function r(i,e){return t(),n("div",null,e[0]||(e[0]=[o('<h1 id="并发容器" tabindex="-1"><a class="header-anchor" href="#并发容器"><span>并发容器</span></a></h1><p>Vector, Stack, HashTable 都是全局锁，每个方法都在同一个锁上同步</p><ul><li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code>，<code>ConcurrentHashMap</code>并不是将每个方法都在同一个锁上同步并使得每次只能有一个线程访问容器，而是使用一种粒度更细的加锁机制—<strong>分段锁</strong>来实现更大程度的共享。1.8以后是每个 Node 一把锁</li><li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li><li><strong><code>ConcurrentSkipListSet</code></strong> : 跳表的实现。这是一个 Set，使用跳表的数据结构进行快速查找。</li><li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li><li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li><li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li><li><strong><code>CopyOnWriteArraySet</code></strong> : 线程安全的 <code>Set</code>，在读多写少的场合性能非常好。</li></ul><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map</span></a></h2><h3 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap"><span>ConcurrentHashMap</span></a></h3><h4 id="java-8" tabindex="-1"><a class="header-anchor" href="#java-8"><span>Java 8</span></a></h4><p>对 Node 加锁</p><p><img src="https://oss.javaguide.cn/github/javaguide/java/collection/java8_concurrenthashmap.png" alt="Java8 ConcurrentHashMap 存储结构" loading="lazy"></p><p>Java8 的 ConcurrentHashMap 相对于 Java7 来说变化较大，不再是之前的 <strong>Segment 数组 + HashEntry 数组 + 链表</strong>，而是 <strong>Node 数组 + 链表 / 红黑树</strong>。当冲突链表达到一定长度时，链表会转换成红黑树。</p><h5 id="inittable" tabindex="-1"><a class="header-anchor" href="#inittable"><span>initTable</span></a></h5><p>从源码中可以发现 <code>ConcurrentHashMap</code> 的初始化是通过<strong>自旋和 CAS</strong> 操作完成的。里面需要注意的是变量 <code>sizeCtl</code> ，它的值决定着当前的初始化状态。</p><ol><li>-1 说明正在初始化</li><li>-N 说明有 N-1 个线程正在进行扩容</li><li>0 表示 table 初始化大小，如果 table 没有初始化</li><li>&gt;0 表示 table 扩容的阈值，如果 table 已经初始化。</li></ol><h4 id="java-7" tabindex="-1"><a class="header-anchor" href="#java-7"><span>Java 7</span></a></h4><p>对段加锁</p><p><img src="https://oss.javaguide.cn/github/javaguide/java/collection/java7_concurrenthashmap.png" alt="Java7 ConcurrentHashMap 存储结构" loading="lazy"></p><p>Java7 中 <code>ConcurrentHashMap</code> 使用的分段锁，也就是每一个 Segment 上同时只有一个线程可以操作，每一个 <code>Segment</code> 都是一个类似 <code>HashMap</code> 数组的结构 hashEntry，它可以扩容，它的冲突会转化为链表。但是 <code>Segment</code> 的个数一但初始化就不能改变。</p><p><code>Segment</code> 继承了 <code>ReentrantLock</code>，所以 <code>Segment</code> 是一种可重入锁，扮演锁的角色。<code>HashEntry</code> 用于存储键值对数据。</p><p>一个 <code>ConcurrentHashMap</code> 里包含一个 <code>Segment</code> 数组，<code>Segment</code> 的个数一旦<strong>初始化就不能改变</strong>。 <code>Segment</code> 数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。</p><p><code>Segment</code> 的结构和 <code>HashMap</code> 类似，是一种数组和链表结构，一个 <code>Segment</code> 包含一个 <code>HashEntry</code> 数组，每个 <code>HashEntry</code> 是一个链表结构的元素，每个 <code>Segment</code> 守护着一个 <code>HashEntry</code> 数组里的元素，当对 <code>HashEntry</code> 数组的数据进行修改时，必须首先获得对应的 <code>Segment</code> 的锁。也就是说，对同一 <code>Segment</code> 的并发写入会被阻塞，不同 <code>Segment</code> 的写入是可以并发执行的。</p><h4 id="hashtable-vs-concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#hashtable-vs-concurrenthashmap"><span>HashTable vs ConcurrentHashMap</span></a></h4><p>共同点：HashTable 与 ConcurrentHashMap 都是线程安全的 Map 集合</p><p>不同点：</p><ul><li><p>HashTable 并发度低，整个 HashTable 对应一把锁，只能有一个线程操作它</p></li><li><p>1.8 之前 ConcurrentHashMap 使用了 Segment + 数组 + 链表，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突</p></li><li><p>1.8 开始 ConcurrentHashMap 将数组的每个头节点作为锁（这个时候结构也是数组加链表或红黑树），如果多个线程访问的头节点不同，则不会冲突。</p></li></ul><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4><p>ConcurrentHashMap 是 Java 中线程安全的哈希表实现，常用于以下场景：</p><ol><li><p>高并发场景：ConcurrentHashMap 支持高并发的读写操作，可以在多线程环境下保证数据的一致性和线程安全性。</p></li><li><p>缓存场景：ConcurrentHashMap 可以用于缓存数据，提高数据的访问速度和响应速度。</p></li><li><p>分布式场景：ConcurrentHashMap 可以用于分布式环境下的数据共享和同步，例如多个节点之间共享数据、同步数据等。</p></li><li><p>数据统计场景：ConcurrentHashMap 可以用于数据统计，例如统计网站的访问量、用户的在线时长等。</p></li></ol><p>总的来说，ConcurrentHashMap 适用于多线程环境下的高并发场景，可以用于缓存、分布式、数据统计等场景。需要注意的是，ConcurrentHashMap 虽然是线程安全的，但是在使用时需要注意一些细节，例如避免死锁、避免竞争等问题。</p><h3 id="concurrentskiplistmap" tabindex="-1"><a class="header-anchor" href="#concurrentskiplistmap"><span>ConcurrentSkipListMap</span></a></h3><h3 id="线程安全的使用" tabindex="-1"><a class="header-anchor" href="#线程安全的使用"><span>线程安全的使用</span></a></h3><p>使用 Colletcions 这个工具类 sync 方法类创建个线程安全的 set.</p><p><code>Set&lt;String&gt; synSet = Collections.synchronizedSet(new HashSet&lt;&gt;())</code></p><p>实现比较粗暴，就是在每个方法前加 synchronized</p><h2 id="collection" tabindex="-1"><a class="header-anchor" href="#collection"><span>Collection</span></a></h2><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h3><p><code>ConcurrentSkipListSet</code></p><p><strong><code>CopyOnWriteArraySet</code></strong></p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>List</span></a></h3><h4 id="copyonwritearraylist" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist"><span>CopyOnWriteArrayList</span></a></h4><h4 id="concurrentlinkedqueue" tabindex="-1"><a class="header-anchor" href="#concurrentlinkedqueue"><span>ConcurrentLinkedQueue</span></a></h4><h3 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue"><span>BlockingQueue</span></a></h3><ul><li><code>ArrayBlockingQueue</code>、</li><li><code>LinkedBlockingQueue</code>、</li><li><code>PriorityBlockingQueue</code></li></ul><p>blocked queue 双向链表</p><p>waiting queue 单向链表，0-多个</p><p>在等待队列里面的线程获取锁是有顺序的，外面的线程就是无序的可以直接插队先执行</p><p>tryLock(时间)这种会尊从创建锁的时候的公平非公平</p><p>无参的 tryLock，不管创建的锁是什么样，他都是非公平执行</p><h4 id="条件变量-condition" tabindex="-1"><a class="header-anchor" href="#条件变量-condition"><span>条件变量 Condition</span></a></h4><p>然后就会进入等待队列</p><ul><li>notEmpty</li><li>notFull</li></ul><p>Lock 唤醒 waiting queue 的线程时，会放入 block queue 的尾部</p><p>synchronized 唤醒 waiting queue 的线程时，到 blockde queue 中优先级更高一些</p>',51)]))}const d=a(c,[["render",r],["__file","Concurrent.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/collections/Concurrent.html","title":"并发容器","lang":"en-US","frontmatter":{"description":"并发容器 Vector, Stack, HashTable 都是全局锁，每个方法都在同一个锁上同步 ConcurrentHashMap : 线程安全的 HashMap，ConcurrentHashMap并不是将每个方法都在同一个锁上同步并使得每次只能有一个线程访问容器，而是使用一种粒度更细的加锁机制—分段锁来实现更大程度的共享。1.8以后是每个 Nod...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/collections/Concurrent.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"并发容器"}],["meta",{"property":"og:description","content":"并发容器 Vector, Stack, HashTable 都是全局锁，每个方法都在同一个锁上同步 ConcurrentHashMap : 线程安全的 HashMap，ConcurrentHashMap并不是将每个方法都在同一个锁上同步并使得每次只能有一个线程访问容器，而是使用一种粒度更细的加锁机制—分段锁来实现更大程度的共享。1.8以后是每个 Nod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/java/collection/java8_concurrenthashmap.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发容器\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/java/collection/java8_concurrenthashmap.png\\",\\"https://oss.javaguide.cn/github/javaguide/java/collection/java7_concurrenthashmap.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"ConcurrentHashMap","slug":"concurrenthashmap","link":"#concurrenthashmap","children":[]},{"level":3,"title":"ConcurrentSkipListMap","slug":"concurrentskiplistmap","link":"#concurrentskiplistmap","children":[]},{"level":3,"title":"线程安全的使用","slug":"线程安全的使用","link":"#线程安全的使用","children":[]}]},{"level":2,"title":"Collection","slug":"collection","link":"#collection","children":[{"level":3,"title":"Set","slug":"set","link":"#set","children":[]},{"level":3,"title":"List","slug":"list","link":"#list","children":[]},{"level":3,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[]}]}],"git":{"createdTime":1675410392000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":4},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1349},"filePathRelative":"se/lang/java/collections/Concurrent.md","localizedDate":"February 3, 2023","excerpt":"\\n<p>Vector, Stack, HashTable 都是全局锁，每个方法都在同一个锁上同步</p>\\n<ul>\\n<li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code>，<code>ConcurrentHashMap</code>并不是将每个方法都在同一个锁上同步并使得每次只能有一个线程访问容器，而是使用一种粒度更细的加锁机制—<strong>分段锁</strong>来实现更大程度的共享。1.8以后是每个 Node 一把锁</li>\\n<li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>\\n<li><strong><code>ConcurrentSkipListSet</code></strong> : 跳表的实现。这是一个 Set，使用跳表的数据结构进行快速查找。</li>\\n<li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li>\\n<li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>\\n<li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li>\\n<li><strong><code>CopyOnWriteArraySet</code></strong> : 线程安全的 <code>Set</code>，在读多写少的场合性能非常好。</li>\\n</ul>","autoDesc":true}`);export{d as comp,p as data};
