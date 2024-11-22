import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as e}from"./app-B6s9NXTg.js";const h={};function l(n,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="collection-接口" tabindex="-1"><a class="header-anchor" href="#collection-接口"><span>Collection 接口</span></a></h1><h2 id="list-接口" tabindex="-1"><a class="header-anchor" href="#list-接口"><span>List 接口</span></a></h2><ul><li><p>Vector，List 接口旧的实现，是线程安全的，方法前都加了 synchronized</p><p>Stack 是继承自 Vector 的类，但是一般不推荐使用，ArrayDeque 更快</p></li><li><p>ArrayList</p></li><li><p>LinkedList</p></li></ul><h3 id="arraylist" tabindex="-1"><a class="header-anchor" href="#arraylist"><span>ArrayList</span></a></h3><h4 id="初始容量" tabindex="-1"><a class="header-anchor" href="#初始容量"><span>初始容量</span></a></h4><p>如果是无参构造，初始容量是 0，加入第一个元素的时候会扩容成 10。</p><h4 id="扩容机制" tabindex="-1"><a class="header-anchor" href="#扩容机制"><span>扩容机制</span></a></h4><p>当装满的时候，会扩容数组大小为 1.5 倍。</p><p><strong><code>int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1)</code>,所以 ArrayList 每次扩容之后容量都会变为原来的 1.5 倍（oldCapacity 为 1.5 倍向下取整）</strong></p><p>比如：10+10/2 = 15, 33+33/2=49。如果是奇数的话会丢掉小数。</p><h3 id="vector" tabindex="-1"><a class="header-anchor" href="#vector"><span>Vector</span></a></h3><p><code>Vector</code> 是 <code>List</code> 的古老实现类，底层使用<code>Object[]</code> 存储，线程安全的。</p><p><code>Stack</code> 是 <code>Vector</code> 的子类，线程安全的。但是现在更多用 <code>ArrayDeque</code> 来实现 Stack</p><h2 id="queue-deque-接口" tabindex="-1"><a class="header-anchor" href="#queue-deque-接口"><span>Queue/Deque 接口</span></a></h2><p>PriorityQueue</p><p>LinkedList</p><h3 id="arraydeque" tabindex="-1"><a class="header-anchor" href="#arraydeque"><span>ArrayDeque</span></a></h3><p>底层基于可变长的数组和双指针实现双端队列。</p><p>不支持null值，因为poll出null意味着空队列，如果允许存null则产生歧义。</p><h2 id="set-接口" tabindex="-1"><a class="header-anchor" href="#set-接口"><span>Set 接口</span></a></h2><ul><li>HashSet</li><li>LinkedHashSet</li><li>TreeSet</li></ul><p>都是用对应的 HashMap 实现的，val 都是 null</p><h3 id="treeset" tabindex="-1"><a class="header-anchor" href="#treeset"><span>TreeSet</span></a></h3><ol><li><strong>范围操作：</strong> 提供了一些范围操作方法，如 <code>subSet()</code>, <code>headSet()</code>, <code>tailSet()</code> 等，用于获取集合的子集。</li><li><strong>第一个和最后一个元素：</strong> 可以通过 <code>first()</code> 和 <code>last()</code> 方法访问集合中的最小和最大元素。</li></ol><h3 id="比较-hashset、linkedhashset-和-treeset" tabindex="-1"><a class="header-anchor" href="#比较-hashset、linkedhashset-和-treeset"><span>比较 HashSet、LinkedHashSet 和 TreeSet</span></a></h3><ul><li>HashSet 是 Set 接口的主要实现类 ，HashSet 的底层是 HashMap，线程不安全的，可以存储 null 值;</li><li>LinkedHashSet 是 HashSet 的子类，能够按照添加的顺序遍历;</li><li>TreeSet 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。</li></ul><h2 id="collection-与-转换" tabindex="-1"><a class="header-anchor" href="#collection-与-转换"><span>Collection 与 [] 转换</span></a></h2><h3 id="基本类型数组" tabindex="-1"><a class="header-anchor" href="#基本类型数组"><span>基本类型数组</span></a></h3><p>在Java中，将<code>int[]</code>数组和<code>ArrayList&lt;Integer&gt;</code>之间进行转换是一种常见的操作。以下是这两种数据结构之间转换的一些优雅的方法：</p><h4 id="int-转-list-integer" tabindex="-1"><a class="header-anchor" href="#int-转-list-integer"><span><code>int[]</code> 转 <code>List&lt;Integer&gt;</code></span></a></h4><p>由于<code>int[]</code>是基本类型数组，你不能直接使用<code>Arrays.asList()</code>，因为它会将整个数组作为一个元素。你需要手动遍历数组并逐个添加元素：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> arrayList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> array) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用 Java 8 的流（Streams）：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(array).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">boxed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Collectors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toCollection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(ArrayList</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arraylist-integer-转-int" tabindex="-1"><a class="header-anchor" href="#arraylist-integer-转-int"><span><code>ArrayList&lt;Integer&gt;</code> 转 <code>int[]</code></span></a></h4><p>将<code>ArrayList&lt;Integer&gt;</code>转换为<code>int[]</code>时，可以使用循环或者Java 8流：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ArrayList</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> arrayList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    array[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Java 8 流：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ArrayList</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> arrayList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mapToInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toArray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这两种情况下，使用 Java 8 流可以提供更简洁的代码，但是在处理非常大的数据集时，手动循环可能会有更好的性能。</p><h3 id="对象数组" tabindex="-1"><a class="header-anchor" href="#对象数组"><span>对象数组</span></a></h3><p>将<code>String[]</code>数组和<code>ArrayList&lt;String&gt;</code>之间进行转换是一个相对简单且常见的操作。以下是一些优雅的方法来实现这两种类型之间的转换：</p><h4 id="string-转-arraylist-string" tabindex="-1"><a class="header-anchor" href="#string-转-arraylist-string"><span><code>String[]</code> 转 <code>ArrayList&lt;String&gt;</code></span></a></h4><p>由于<code>String[]</code>是对象数组，你可以直接使用<code>Arrays.asList()</code>，然后构造一个新的<code>ArrayList</code>：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Apple&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Banana&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Cherry&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> arrayList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(array)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arraylist-string-转-string" tabindex="-1"><a class="header-anchor" href="#arraylist-string-转-string"><span><code>ArrayList&lt;String&gt;</code> 转 <code>String[]</code></span></a></h4><p>要将<code>ArrayList&lt;String&gt;</code>转换为<code>String[]</code>，你可以使用<code>ArrayList</code>的<code>toArray()</code>方法：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> arrayList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Apple&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Banana&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Cherry&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> arrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toArray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code>new String[0]</code>是作为数组类型的模板，确保<code>toArray()</code>方法返回<code>String[]</code>类型的数组。Java 8及以上版本中，使用<code>new String[0]</code>比指定确切大小的数组更高效，因为内部实现会自动调整数组的大小。</p><p>sort 方法稳定性：</p><ul><li><code>Arrays.sort(T[],Comparator&lt;? super T&gt; c)</code>内部采用的归并排序，因此是稳定的。</li><li><code>Arrays.sort(int[] a)</code>内部采用的快速排序，因此是不稳定的。</li><li><code>Collections.sort(List&lt;T&gt; list)</code>、和<code>Collections.sort(List&lt;T&gt; list，Comparator&lt;？super T&gt; c)</code>采用的都是稳定的排序，采用的何种排序方式，需要核实。</li></ul>`,51)]))}const p=s(h,[["render",l],["__file","collection.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/collections/collection.html","title":"Collection 接口","lang":"en-US","frontmatter":{"description":"Collection 接口 List 接口 Vector，List 接口旧的实现，是线程安全的，方法前都加了 synchronized Stack 是继承自 Vector 的类，但是一般不推荐使用，ArrayDeque 更快 ArrayList LinkedList ArrayList 初始容量 如果是无参构造，初始容量是 0，加入第一个元素的时候会扩...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/collections/collection.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Collection 接口"}],["meta",{"property":"og:description","content":"Collection 接口 List 接口 Vector，List 接口旧的实现，是线程安全的，方法前都加了 synchronized Stack 是继承自 Vector 的类，但是一般不推荐使用，ArrayDeque 更快 ArrayList LinkedList ArrayList 初始容量 如果是无参构造，初始容量是 0，加入第一个元素的时候会扩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T17:26:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T17:26:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collection 接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T17:26:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"List 接口","slug":"list-接口","link":"#list-接口","children":[{"level":3,"title":"ArrayList","slug":"arraylist","link":"#arraylist","children":[]},{"level":3,"title":"Vector","slug":"vector","link":"#vector","children":[]}]},{"level":2,"title":"Queue/Deque 接口","slug":"queue-deque-接口","link":"#queue-deque-接口","children":[{"level":3,"title":"ArrayDeque","slug":"arraydeque","link":"#arraydeque","children":[]}]},{"level":2,"title":"Set 接口","slug":"set-接口","link":"#set-接口","children":[{"level":3,"title":"TreeSet","slug":"treeset","link":"#treeset","children":[]},{"level":3,"title":"比较 HashSet、LinkedHashSet 和 TreeSet","slug":"比较-hashset、linkedhashset-和-treeset","link":"#比较-hashset、linkedhashset-和-treeset","children":[]}]},{"level":2,"title":"Collection 与 [] 转换","slug":"collection-与-转换","link":"#collection-与-转换","children":[{"level":3,"title":"基本类型数组","slug":"基本类型数组","link":"#基本类型数组","children":[]},{"level":3,"title":"对象数组","slug":"对象数组","link":"#对象数组","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1731173219000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"se/lang/java/collections/collection.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>List 接口</h2>\\n<ul>\\n<li>\\n<p>Vector，List 接口旧的实现，是线程安全的，方法前都加了 synchronized</p>\\n<p>Stack 是继承自 Vector 的类，但是一般不推荐使用，ArrayDeque 更快</p>\\n</li>\\n<li>\\n<p>ArrayList</p>\\n</li>\\n<li>\\n<p>LinkedList</p>\\n</li>\\n</ul>\\n<h3>ArrayList</h3>\\n<h4>初始容量</h4>\\n<p>如果是无参构造，初始容量是 0，加入第一个元素的时候会扩容成 10。</p>\\n<h4>扩容机制</h4>\\n<p>当装满的时候，会扩容数组大小为 1.5 倍。</p>","autoDesc":true}`);export{p as comp,d as data};
