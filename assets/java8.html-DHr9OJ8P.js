import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as l}from"./app-Cv-jMnVl.js";const n={};function c(o,a){return l(),t("div",null,a[0]||(a[0]=[i(`<h1 id="java-8" tabindex="-1"><a class="header-anchor" href="#java-8"><span>Java 8</span></a></h1><h2 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h2><p>java 新增了 <code>java.util.stream</code> 包，它和之前的流大同小异。之前接触最多的是资源流，比如<code>java.io.FileInputStream</code>，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何<em>CRUD</em>。</p><p><code>Stream</code>依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据、包括筛选、排序、统计、计数等。可以想象成是 Sql 语句。</p><p>它的源数据可以是 <code>Collection</code>、<code>Array</code> 等。由于它的方法参数都是函数式接口类型，所以一般和 Lambda 配合使用。</p><h2 id="interface-方法修饰" tabindex="-1"><a class="header-anchor" href="#interface-方法修饰"><span>Interface 方法修饰</span></a></h2><p>为了解决接口的修改与现有的实现不兼容的问题。新 interface 的方法可以用<code>default</code> 或 <code>static</code>修饰，这样就可以有方法体，实现类也不必重写此方法。</p><p>一个 interface 中可以有多个方法被它们修饰，这 2 个修饰符的区别主要也是普通方法和静态方法的区别。</p><ol><li><code>default</code>修饰的方法，是普通实例方法，可以用<code>this</code>调用，可以被子类继承、重写。</li><li><code>static</code>修饰的方法，使用上和一般类静态方法一样。但它不能被子类继承，只能用<code>Interface</code>调用。</li></ol><p><strong>在 Java 8 ，接口和抽象类有什么区别的？</strong></p><p>很多小伙伴认为：“既然 interface 也可以有自己的方法实现，似乎和 abstract class 没多大区别了。”</p><p>其实它们还是有区别的</p><ol><li>interface 和 class 的区别，好像是废话，主要有： <ul><li>接口多实现，类单继承</li><li>接口的方法是 public abstract 修饰，变量是 public static final 修饰。 abstract class 可以用其他修饰符</li></ul></li><li>interface 的方法是更像是一个扩展插件。而 abstract class 的方法是要继承的。</li></ol><p>interface 新增<code>default</code>和<code>static</code>修饰的方法，为了解决接口的修改与现有的实现不兼容的问题，并不是为了要替代<code>abstract class</code>。在使用上，该用 abstract class 的地方还是要用 abstract class，不要因为 interface 的新特性而将之替换。</p><p><strong>记住接口永远和类不一样。</strong></p><h2 id="functional-interface-函数式接口" tabindex="-1"><a class="header-anchor" href="#functional-interface-函数式接口"><span>functional interface 函数式接口</span></a></h2><p><strong>定义</strong>：也称 SAM 接口，即 Single Abstract Method interfaces，有且只有一个抽象方法，但可以有多个非抽象方法的接口。</p><p>在 java 8 中专门有一个包放函数式接口<code>java.util.function</code>，该包下的所有接口都有 <code>@FunctionalInterface</code> 注解，提供函数式编程。</p><p>在其他包中也有函数式接口，其中一些没有<code>@FunctionalInterface</code> 注解，但是只要符合函数式接口的定义就是函数式接口，与是否有</p><p><code>@FunctionalInterface</code>注解无关，注解只是在编译时起到强制规范定义的作用。其在 Lambda 表达式中有广泛的应用。</p><h2 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式"><span>Lambda 表达式</span></a></h2><p>接下来谈众所周知的 Lambda 表达式。它是推动 Java 8 发布的最重要新特性。是继泛型(<code>Generics</code>)和注解(<code>Annotation</code>)以来最大的变化。</p><p>使用 Lambda 表达式可以使代码变的更加简洁紧凑。让 java 也能支持简单的<em>函数式编程</em>。</p><blockquote><p>Lambda 表达式是一个匿名函数，java 8 允许把函数作为参数传递进方法中。</p></blockquote><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(parameters) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> expression 或</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(parameters) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{ statements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda-实战" tabindex="-1"><a class="header-anchor" href="#lambda-实战"><span>Lambda 实战</span></a></h3><p>我们用常用的实例来感受 Lambda 带来的便利</p><h4 id="替代匿名内部类" tabindex="-1"><a class="header-anchor" href="#替代匿名内部类"><span>替代匿名内部类</span></a></h4><p>过去给方法传动态参数的唯一方法是使用内部类。</p><h2 id="optional" tabindex="-1"><a class="header-anchor" href="#optional"><span>Optional</span></a></h2><p>防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：</p><ol><li><p>返回类型为基本数据类型，return 包装数据类型的对象时，自动拆箱有可能产生 NPE。</p><p>反例：public int f() { return Integer 对象}， 如果为 null，自动解箱抛 NPE。</p></li><li><p>数据库的查询结果可能为 null。</p></li><li><p>集合里的元素即使 isNotEmpty，取出的数据元素也可能为 null。</p></li><li><p>远程调用返回对象时，一律要求进行空指针判断，防止 NPE。</p></li><li><p>对于 Session 中获取的数据，建议进行 NPE 检查，避免空指针。</p></li><li><p>级联调用 obj.getA().getB().getC()；一连串调用，易产生 NPE。</p><p>正例：使用 JDK8 的 Optional 类来防止 NPE 问题。</p></li></ol><h2 id="date-time-api" tabindex="-1"><a class="header-anchor" href="#date-time-api"><span>Date-Time API</span></a></h2><p>现在 jdbc 时间类型和 java8 时间类型对应关系是</p><ol><li><code>Date</code> ---&gt; <code>LocalDate</code></li><li><code>Time</code> ---&gt; <code>LocalTime</code></li><li><code>Timestamp</code> ---&gt; <code>LocalDateTime</code></li></ol><p>而之前统统对应 <code>Date</code>，也只有 <code>Date</code>。</p>`,37)]))}const r=e(n,[["render",c],["__file","java8.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/feature/java8.html","title":"Java 8","lang":"en-US","frontmatter":{"description":"Java 8 Stream java 新增了 java.util.stream 包，它和之前的流大同小异。之前接触最多的是资源流，比如java.io.FileInputStream，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何CRUD。 Stream依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/feature/java8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Java 8"}],["meta",{"property":"og:description","content":"Java 8 Stream java 新增了 java.util.stream 包，它和之前的流大同小异。之前接触最多的是资源流，比如java.io.FileInputStream，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何CRUD。 Stream依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 8\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[]},{"level":2,"title":"Interface 方法修饰","slug":"interface-方法修饰","link":"#interface-方法修饰","children":[]},{"level":2,"title":"functional interface 函数式接口","slug":"functional-interface-函数式接口","link":"#functional-interface-函数式接口","children":[]},{"level":2,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[{"level":3,"title":"语法格式","slug":"语法格式","link":"#语法格式","children":[]},{"level":3,"title":"Lambda 实战","slug":"lambda-实战","link":"#lambda-实战","children":[]}]},{"level":2,"title":"Optional","slug":"optional","link":"#optional","children":[]},{"level":2,"title":"Date-Time API","slug":"date-time-api","link":"#date-time-api","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1095},"filePathRelative":"se/lang/java/feature/java8.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>Stream</h2>\\n<p>java 新增了 <code>java.util.stream</code> 包，它和之前的流大同小异。之前接触最多的是资源流，比如<code>java.io.FileInputStream</code>，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何<em>CRUD</em>。</p>\\n<p><code>Stream</code>依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据、包括筛选、排序、统计、计数等。可以想象成是 Sql 语句。</p>\\n<p>它的源数据可以是 <code>Collection</code>、<code>Array</code> 等。由于它的方法参数都是函数式接口类型，所以一般和 Lambda 配合使用。</p>","autoDesc":true}`);export{r as comp,p as data};
