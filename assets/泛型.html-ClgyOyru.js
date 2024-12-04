import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as r,o as a}from"./app-CybQbXIt.js";const l={};function o(n,e){return a(),i("div",null,e[0]||(e[0]=[r('<h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h1><p>Generics</p><p>JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。</p><p>编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 <code>ArrayList&lt;Persion&gt; persons = new ArrayList&lt;Persion&gt;() </code>这行代码就指明了该 ArrayList 对象只能传入 Persion 对象，如果传入其他类型的对象就会报错。</p><ul><li>泛型类</li><li>泛型接口</li><li>泛型方法</li></ul><h2 id="泛型擦除" tabindex="-1"><a class="header-anchor" href="#泛型擦除"><span>泛型擦除</span></a></h2><p>Java 的泛型是伪泛型，这是因为 Java 在编译期间，所有的泛型信息都会被擦掉，这也就是通常所说类型擦除 。</p><p>编译器会在编译期间会动态地将泛型 T 擦除为 Object 或将 T extends xxx 擦除为其限定类型 xxx 。</p><p>因此，泛型本质上其实还是编译器的行为，为了保证引入泛型机制但不创建新的类型，减少虚拟机的运行开销，编译器通过擦除将泛型类转化为一般类。</p><p>eg. 由于泛型擦除原理带来的一些特性：</p><ol><li>泛型容器在编译期间添加不同类型会报错，但是运行期间通过反射可以添加</li><li>由于泛型擦除机制，泛型导致的重载方法会报错</li></ol><h3 id="既然编译器要把泛型擦除-那为什么还要用泛型呢-用-object-代替不行吗" tabindex="-1"><a class="header-anchor" href="#既然编译器要把泛型擦除-那为什么还要用泛型呢-用-object-代替不行吗"><span>既然编译器要把泛型擦除，那为什么还要用泛型呢？用 Object 代替不行吗？</span></a></h3><p>这个问题其实在变相考察泛型的作用：</p><ul><li>使用泛型可在编译期间进行类型检测。</li><li>使用 Object 类型需要手动添加强制类型转换，降低代码可读性，提高出错概率。</li><li>泛型可以使用自限定类型如 <code>T extends Comparable </code>。</li></ul><h3 id="桥方法-bridge-method" tabindex="-1"><a class="header-anchor" href="#桥方法-bridge-method"><span>桥方法(Bridge Method)</span></a></h3><p>用于继承泛型类时保证多态，桥方法为编译器自动生成。</p><h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h3><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3><ul><li>extends</li><li>super</li></ul><hr><ul><li>假设你有一个 <code>List&lt;Integer&gt;</code>，并且你尝试将其赋值给一个 <code>List&lt;? extends Number&gt;</code> 类型的变量。从类型的角度来看，这是允许的，因为 <code>Integer</code> 是 <code>Number</code> 的子类型。</li><li>现在，如果 <code>List&lt;? extends Number&gt;</code> 允许添加任何 <code>Number</code> 的子类型，例如 <code>Double</code>，那么你将能够将 <code>Double</code> 添加到原本只能包含 <code>Integer</code> 的列表中。这显然是类型不安全的。</li></ul><p>因此，为了防止这种类型不匹配的情况发生，Java 在使用通配符上界时禁止往这样的列表中添加元素（除了 <code>null</code>，因为 <code>null</code> 可以代表任何类型）。</p>',22)]))}const c=t(l,[["render",o],["__file","泛型.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/basic/type/%E6%B3%9B%E5%9E%8B.html","title":"泛型","lang":"en-US","frontmatter":{"description":"泛型 Generics JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。 编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 ArrayList<Persion> persons = new ArrayList<Persion>() 这行代码就指明了该 ArrayList 对象只能传入 Persio...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/type/%E6%B3%9B%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"泛型"}],["meta",{"property":"og:description","content":"泛型 Generics JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。 编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 ArrayList<Persion> persons = new ArrayList<Persion>() 这行代码就指明了该 ArrayList 对象只能传入 Persio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"泛型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"泛型擦除","slug":"泛型擦除","link":"#泛型擦除","children":[{"level":3,"title":"既然编译器要把泛型擦除，那为什么还要用泛型呢？用 Object 代替不行吗？","slug":"既然编译器要把泛型擦除-那为什么还要用泛型呢-用-object-代替不行吗","link":"#既然编译器要把泛型擦除-那为什么还要用泛型呢-用-object-代替不行吗","children":[]},{"level":3,"title":"桥方法(Bridge Method)","slug":"桥方法-bridge-method","link":"#桥方法-bridge-method","children":[]},{"level":3,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":3,"title":"通配符","slug":"通配符","link":"#通配符","children":[]}]}],"git":{"createdTime":1704683174000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"se/lang/java/basic/type/泛型.md","localizedDate":"January 8, 2024","excerpt":"\\n<p>Generics</p>\\n<p>JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。</p>\\n<p>编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 <code>ArrayList&lt;Persion&gt; persons = new ArrayList&lt;Persion&gt;() </code>这行代码就指明了该 ArrayList 对象只能传入 Persion 对象，如果传入其他类型的对象就会报错。</p>\\n<ul>\\n<li>泛型类</li>\\n<li>泛型接口</li>\\n<li>泛型方法</li>\\n</ul>\\n<h2>泛型擦除</h2>","autoDesc":true}`);export{c as comp,p as data};
