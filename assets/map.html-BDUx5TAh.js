import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as l}from"./app-ktFCNIob.js";const n={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h1 id="map-接口" tabindex="-1"><a class="header-anchor" href="#map-接口"><span>Map 接口</span></a></h1><p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。</p><p>当我们只需要存放元素值时，就选择实现 Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口的集合比如 TreeSet 或 HashSet，不需要就选择实现 List 接口的比如 ArrayList 或 LinkedList ，然后再根据实现这些接口的集合的特点来选用。</p><h2 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap"><span>HashMap</span></a></h2><p>capacity，factor</p><p>capacity 是初始元素个数，factor 只有构造的时候考虑（容量初始设置比 capacity/factor 大的第一个 2^n），后面还是按 3/4。</p><h3 id="扰动函数-hash" tabindex="-1"><a class="header-anchor" href="#扰动函数-hash"><span>扰动函数：hash</span></a></h3><p>HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) &amp; hash 判断当前元素存放的位置 (这里的 n 指的是数组的⻓度)，如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同，直接覆盖，不相同就通过拉链法解决冲突。</p><p>所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法换句话说使用扰动函数之后可以减少碰撞。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(key </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (h </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (h </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。</p><p>所谓 “拉链法” 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表。</p><h3 id="扩容机制-resize" tabindex="-1"><a class="header-anchor" href="#扩容机制-resize"><span>扩容机制：resize</span></a></h3><p>loadFactor 负载因子默认0.75。一般来说，默认的负载因子(0.75)在时间和空间成本之间提供了很好的权衡。更高的值减少了空间开销，但增加了查找成本(反映在HashMap类的大多数操作中，包括get和put)。</p><p><code>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。并且， <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小。</p><ul><li>java1.8 以后，满 3/4 时扩容（loadFactor 负载因子），尾插法</li><li>java1.7 以前，超 3/4 时扩容（loadFactor 负载因子），头插法</li></ul><p>扩容的时候，从后往前迁移</p><p>迁移的时候划分区间来迁移</p><p>进行扩容，会伴随着一次重新 hash 分配，并且会遍历 hash 表中所有的元素，是非常耗时的。在编写程序中，要尽量避免 resize。</p><p>为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648 到 2147483647，前后加起来大概 40 亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个 40 亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是 <code>(n - 1) &amp; hash</code>。（n 代表数组长度）。这也就解释了 HashMap 的长度为什么是 2 的幂次方。</p><p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了：<strong>“取余(%)操作中如果除数是 2 的幂次则等价于与其除数减一的与(&amp;)操作（也就是说 hash%length==hash&amp;(length-1)的前提是 length 是 2 的 n 次方；）。”</strong> 并且<strong>采用二进制位操作 &amp;，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是 2 的幂次方。</strong></p><h3 id="树形哈希-treeifybin" tabindex="-1"><a class="header-anchor" href="#树形哈希-treeifybin"><span>树形哈希：treeifyBin</span></a></h3><p>当链表长度大于阈值（默认为 8）时，会首先调用 <code>treeifyBin()</code>方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 <code>resize()</code> 方法对数组扩容。</p><h3 id="遍历方式" tabindex="-1"><a class="header-anchor" href="#遍历方式"><span>遍历方式</span></a></h3><p>HashMap 4 大类遍历方式：</p><ul><li>iterator 迭代器</li><li>for</li><li>lambda</li><li>stream</li></ul><p>具体为 7 种遍历方法，除了 Stream 的并行循环，其他几种遍历方法的性能差别不大，但从简洁性和优雅性上来看，Lambda 和 Stream 无疑是最适合的遍历方式。</p><p>除此之外我们还从「安全性」方面测试了 4 大类遍历结果，从安全性来讲，我们应该使用迭代器提供的 iterator.remove() 方法或 removeIf 来进行删除，这种方式是安全的在遍历中删除集合的方式，或者使用 Stream 中的 filter 过滤掉要删除的数据再进行循环，也是安全的操作方式。</p><p>我们不能在遍历中使用集合 map.remove() 来删除数据，这是非安全的操作方式，但我们可以使用迭代器的 iterator.remove() 的方法来删除数据，这是安全的删除集合的方式。同样的我们也可以使用 Lambda 中的 removeIf 来提前删除数据，或者是使用 Stream 中的 filter 过滤掉要删除的数据进行循环，这样都是安全的，当然我们也可以在 for 循环前删除数据在遍历也是线程安全的。</p><p>1.使用迭代器(Iterator)。<br> 2.使用keySet获取键的集合，然后通过增强的for循环遍历键。<br> 3.使用entrySet() 获取键值对的集合，然后通过增强的fo循环遍历键值对。<br> 4.使用Java8+的Lambda。表达式和流。</p><p>以上遍历方式的孰优孰劣，在《阿里巴巴开发手册》中写道：</p><p>【推荐】使用entrySet遍历Map类集合KV,而不是keySet方式进行遍历。<br> 说明：keySet其实是遍历了2次，一次是转为Iterator对象，另一次是从hashMap中取出key所对应的value。而entrySet只是遍历了一次就把key和value都放到了entry中，效率更高。如果是JDK8,使用Map.forEach方法。</p><p>正例：values返回的是V值集合，是一个list集合对象；keySet()返回的是K值集合，是一个Set集合对象；entrySet()返回的是K-V值组合集合。</p><p>这里推荐使用的是entrySet进行遍历，在Java8中推荐使用Map.forEach()。给出的理由是遍历次数上的不同。</p><p>1.keySet遍历，需要经过两次遍历。<br> 2.entrySeti遍历，只需要一次遍历。</p><p>其中keySet遍历了两次，一次是转为Iterator对象，另一次是从hashMap中取出key所对应的value。</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><h4 id="对象-key" tabindex="-1"><a class="header-anchor" href="#对象-key"><span>对象 key</span></a></h4><blockquote><p>需要重写对象的 hashcode 和 equals 方法</p></blockquote><p>先用 hashcode 放入 node 的位置，如果 hash 冲突，就是放入这个位置链表的末端（如果遍历的时候 equals 方法发现元素已经存在则不放）（1.7的时候是头插法）</p><p>判断相等的过程是：先判断两个对象的 HashCode 的值是否相等，若相等，再进行 <code>equals()</code> 判断。若 HashCode 不相等，则判断两个对象不相等，直接加入到容器中，不再进行 <code>equals()</code> 比较。</p><p>例如：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> o) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (o </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> student</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Student) o;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组-key" tabindex="-1"><a class="header-anchor" href="#数组-key"><span>数组 key</span></a></h4><blockquote><p>存放的是其地址，无法重写 hashcode 等</p></blockquote><p>所以一般不能把数组作为 key，因为无法重写 hashcode 和 equals</p><ul><li>TreeMap 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。</li></ul><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树"><span>红黑树</span></a></h3><p>红黑树是一种特化的 AVL 树（平衡二叉树），都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而保证较高的查找性能。</p><p>它虽然是复杂的，但它的最坏情况运行时间也是非常良好的，并且在实践中是高效的： 它可以在 O(log n) 时间内做查找，插入和删除</p><ul><li>性质 1. 结点是红色或黑色。</li><li>性质 2. 根结点是黑色。</li><li>性质 3. 所有叶子都是黑色。（叶子是 NIL 结点）</li><li>性质 4. 每个红色结点的两个子结点都是黑色。（从每个叶子到根的所有路径上不能有两个连续的红色结点）</li><li>性质 5. 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。</li></ul><h3 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧"><span>使用技巧</span></a></h3><p>用 merge，来简化统计频率</p><p>它将新的值赋值到 key （如果不存在）或更新给定的key 值对应的 value</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">occurrences1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(word, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Integer</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 旧的版本</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">occurrences1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(word, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> occurrences1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOrDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(word, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 computeIfAbsent，来简化value为集合类型的情况下的一些操作</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">idToEmails</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">computeIfAbsent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id, k </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;()).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(email);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 三行代码版本</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> account </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> indexToEmails</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOrDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(index, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;());</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">account</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(email);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">indexToEmails</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(index, account);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>putIfAbsent</p><p>getOrDefault</p><p>hashmap.compute(K key, BiFunction remappingFunction)</p><p>遍历</p><ul><li>keySet()</li><li>entrySet()</li><li>values()</li></ul><h3 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题"><span>并发问题</span></a></h3><h4 id="死循环" tabindex="-1"><a class="header-anchor" href="#死循环"><span>死循环</span></a></h4><blockquote><p>阿里面试题，会导致cpu100%</p></blockquote><p>JDK1.7 前，在多线程环境下，由于是头插法（resize调用的transfer方法），会出现链表倒置， <code>HashMap</code> 扩容会造成死循环。put时会造成数据丢失的问题。1.8以后不会了。</p><p>死循环是因为并发 HashMap <strong>扩容</strong>时链表倒置导致的，并发扩容的第一步，线程 T1 和线程 T2 要对 HashMap 进行扩容操作，此时 T1 和 T2 指向的是链表的头结点元素 A，而 T1 和 T2 的下一个节点，也就是 T1.next 和 T2.next 指向的是 B 节点，如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec59c82beef478a8b0b6e193eb66ec3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="image.png" loading="lazy"></p><p>死循环的第二步操作是，线程 T2 时间片用完进入休眠状态，而线程 T1 开始执行扩容操作，一直到线程 T1 扩容完成后，线程 T2 才被唤醒，扩容之后的场景如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4e95d00237d4cbabaabe00928ac17ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="image.png" loading="lazy"></p><p>线程 T1 执行之后，因为是头插法，所以 HashMap 的顺序已经发生了改变，但线程 T2 对于发生的一切是不可知的，所以它的指向元素依然没变，如上图展示的那样，T2 指向的是 A 元素，T2.next 指向的节点是 B 元素。</p><p>当线程 T1 执行完，而线程 T2 恢复执行时，死循环就建立了，如下图：</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/394e8a022f6e4050898a797edb0bf02e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="img" loading="lazy"></p><p>因为 T1 执行完扩容之后 B 节点的下一个节点是 A，而 T2 线程指向的首节点是 A，第二个节点是 B，这个顺序刚好和 T1 扩完容完之后的节点顺序是相反的。<strong>T1 执行完之后的顺序是 B 到 A，而 T2 的顺序是 A 到 B，这样 A 节点和 B 节点就形成死循环了</strong>，这就是 HashMap 死循环导致的原因。</p><h4 id="数据覆盖" tabindex="-1"><a class="header-anchor" href="#数据覆盖"><span>数据覆盖</span></a></h4><p>多个键值对可能会被分配到同一个桶（bucket），并以链表或红黑树的形式存储。多个线程对 <code>HashMap</code> 的 <code>put</code> 操作会导致线程不安全，会有数据覆盖的风险。</p><p>两个线程 1,2 同时进行 put 操作，并且发生了哈希冲突（hash 函数计算出的插入下标是相同的）。</p><p>不同的线程可能在不同的时间片获得 CPU 执行的机会，当前线程 1 执行完哈希冲突判断后，由于时间片耗尽挂起。线程 2 先完成了插入操作。</p><p>随后，线程 1 获得时间片，由于之前已经进行过 hash 碰撞的判断，所有此时会直接进行插入，这就导致线程 2 插入的数据被线程 1 覆盖了。</p><hr><p>两个线程同时 <code>put</code> 操作导致 <code>size</code> 的值不正确，进而导致数据覆盖问题：</p><ol><li>线程 1 执行 <code>if(++size &gt; threshold)</code> 判断时，假设获得 <code>size</code> 的值为 10，由于时间片耗尽挂起。</li><li>线程 2 执行 <code>if(++size &gt; threshold)</code> 判断，获得 <code>size</code> 的值也为 10，并将元素插入到该桶位中，并将 <code>size</code> 的值更新为 11。</li><li>线程 1 获得时间片，它也将元素放入桶位中，并将 size 的值更新为 11。</li><li>线程 1、2 都执行了一次 <code>put</code> 操作，但是 <code>size</code> 的值只增加了 1，也就导致实际上只有一个元素被添加到了 <code>HashMap</code> 中。</li></ol><h2 id="hashtable" tabindex="-1"><a class="header-anchor" href="#hashtable"><span>HashTable</span></a></h2><ul><li><strong>线程是否安全：</strong> <code>HashMap</code> 是非线程安全的，<code>Hashtable</code> 是线程安全的,因为 <code>Hashtable</code> 内部的方法基本都经过<code>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 <code>ConcurrentHashMap</code>）</li><li><strong>效率：</strong> 因为线程安全的问题，<code>HashMap</code> 要比 <code>Hashtable</code> 效率高一点。另外，<code>Hashtable</code> 基本被淘汰，不要在代码中使用它；</li><li><strong>对 Null key 和 Null value 的支持：</strong><ol><li><code>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个； <ul><li>key <ul><li>hash 方法<code>(key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);</code></li><li>equals 方法调用前都有判断是否为 null</li></ul></li><li>value 不作规定（也不会调用他的什么方法，所以不会 NPE）</li></ul></li><li>Hashtable 不允许有 null 键和 null 值，否则会抛出 <code>NullPointerException</code>。 <ul><li>put 方法先检查 value 是否为 null，抛出 NPE</li><li>put 方法中调用<code>int hash = key.hashCode();</code>如果 Key 为 null 则 NPE</li></ul></li></ol></li><li><strong>初始容量大小和每次扩充容量大小的不同 ：</strong><ol><li>创建时如果不指定容量初始值，<code>Hashtable</code> 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。<code>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。</li><li>创建时如果给定了容量初始值，那么 <code>Hashtable</code> 会直接使用你给定的大小，而 <code>HashMap</code> 会将其扩充为 2 的幂次方大小（<code>HashMap</code> 中的<code>tableSizeFor()</code>方法保证，下面给出了源代码）。也就是说 <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小，后面会介绍到为什么是 2 的幂次方。</li></ol></li><li><strong>底层数据结构：</strong> JDK1.8 以后的 <code>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间。<code>Hashtable</code> 没有这样的机制。</li></ul><p>在允许key - value为null的情况下，考虑下面一个场景：</p><p>map.get(key) 的返回结果是null，那么是因为不存在对应的key是null呢，还是key对应的value就是null；</p><p>对于单线程来讲，这个问题是可以解决的，通过map.contains(key)就可以判断，但是对于多线程来讲，要解决这个问题就很复杂了，必须由外部保证contains 与 get操作的原子性，正是出于对这个问题考虑，所以不允许value为null；（实际上HashTable中并没有提供contains方法，也是因为这个原因）</p><p>那么为什么key也不能是null呢？</p><p>由于null不是对象，因此不能在其上调用.equals（）或.hashCode（），因此Hashtable无法将其计算哈希值以用作键。但是HashMap对此做了特殊处理；</p><p>我们先以ConcurrentHashMap为例进行讲解，给ConcurrentHashMap中插入 null （空）值会存在歧义。我们可以假设ConcurrentHashMap允许插入 null（空） 值，那么，我们取值的时候会出现两种结果：</p><p>值没有在集合中，所以返回的结果就是 null （空）；<br> 值就是 null（空），所以返回的结果就是它原本的 null（空） 值。</p><h2 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap"><span>TreeMap</span></a></h2><h3 id="hashmap-和-treemap-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-treemap-区别"><span>HashMap 和 TreeMap 区别</span></a></h3><p><code>TreeMap</code> 和<code>HashMap</code> 都继承自<code>AbstractMap</code> ，但是需要注意的是<code>TreeMap</code>它还实现了<code>NavigableMap</code>接口和<code>SortedMap</code>接口。</p><p>实现 <code>NavigableMap</code> 接口让 <code>TreeMap</code> 有了对集合内元素的搜索的能力。</p><p>实现<code>SortedMap</code>接口让 <code>TreeMap</code> 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序，不过我们也可以指定排序的比较器。</p><p><strong>相比于<code>HashMap</code>来说 <code>TreeMap</code> 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力，同时也提供了范围查找的可行性。</strong></p><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h3><p><code>firstKey()</code></p><p><code>firstEntry()</code></p><p><code>lastKey()</code></p><p><code>lastEntry()</code></p><p><code>floorKey()</code>第一个小于等于</p><p><code>lowerKey()</code>第一个小于</p><p><code>ceilingKey()</code>第一个大于等于</p><p><code>higherKey()</code>第一个大于</p>`,106)]))}const d=s(n,[["render",h],["__file","map.html.vue"]]),r=JSON.parse(`{"path":"/se/lang/java/collections/map.html","title":"Map 接口","lang":"en-US","frontmatter":{"description":"Map 接口 主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。 当我们只需要存放元素值时，就选择实现 Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/collections/map.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Map 接口"}],["meta",{"property":"og:description","content":"Map 接口 主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。 当我们只需要存放元素值时，就选择实现 Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec59c82beef478a8b0b6e193eb66ec3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Map 接口\\",\\"image\\":[\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec59c82beef478a8b0b6e193eb66ec3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp\\",\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4e95d00237d4cbabaabe00928ac17ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/394e8a022f6e4050898a797edb0bf02e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"HashMap","slug":"hashmap","link":"#hashmap","children":[{"level":3,"title":"扰动函数：hash","slug":"扰动函数-hash","link":"#扰动函数-hash","children":[]},{"level":3,"title":"扩容机制：resize","slug":"扩容机制-resize","link":"#扩容机制-resize","children":[]},{"level":3,"title":"树形哈希：treeifyBin","slug":"树形哈希-treeifybin","link":"#树形哈希-treeifybin","children":[]},{"level":3,"title":"遍历方式","slug":"遍历方式","link":"#遍历方式","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"红黑树","slug":"红黑树","link":"#红黑树","children":[]},{"level":3,"title":"使用技巧","slug":"使用技巧","link":"#使用技巧","children":[]},{"level":3,"title":"并发问题","slug":"并发问题","link":"#并发问题","children":[]}]},{"level":2,"title":"HashTable","slug":"hashtable","link":"#hashtable","children":[]},{"level":2,"title":"TreeMap","slug":"treemap","link":"#treemap","children":[{"level":3,"title":"HashMap 和 TreeMap 区别","slug":"hashmap-和-treemap-区别","link":"#hashmap-和-treemap-区别","children":[]},{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliu","email":"liudawei47@jd.com","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":14.11,"words":4232},"filePathRelative":"se/lang/java/collections/map.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。</p>\\n<p>当我们只需要存放元素值时，就选择实现 Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口的集合比如 TreeSet 或 HashSet，不需要就选择实现 List 接口的比如 ArrayList 或 LinkedList ，然后再根据实现这些接口的集合的特点来选用。</p>\\n<h2>HashMap</h2>\\n<p>capacity，factor</p>","autoDesc":true}`);export{d as comp,r as data};
