import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as i}from"./app-DIqbhby7.js";const o={};function r(l,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="object-oriented-programming" tabindex="-1"><a class="header-anchor" href="#object-oriented-programming"><span>Object-Oriented Programming</span></a></h1><p>面向对象</p><h3 id="三大特征" tabindex="-1"><a class="header-anchor" href="#三大特征"><span>三大特征</span></a></h3><h4 id="封装-encapsulation" tabindex="-1"><a class="header-anchor" href="#封装-encapsulation"><span>封装 Encapsulation</span></a></h4><h4 id="继承-inheritance" tabindex="-1"><a class="header-anchor" href="#继承-inheritance"><span>继承 Inheritance</span></a></h4><p><strong>关于继承如下 3 点请记住：</strong></p><ol><li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，<strong>只是拥有</strong>。</li><li>子类可以拥有自己属性和方法，即子类可以对父类进行扩展。</li><li>子类可以用自己的方式实现父类的方法。（以后介绍）。</li></ol><h4 id="多态-polymorphism" tabindex="-1"><a class="header-anchor" href="#多态-polymorphism"><span>多态 Polymorphism</span></a></h4><p>多态，表示一个对象具有多种的状态，具体表现为<strong>父类的引用指向子类的实例</strong>。</p><p><strong>多态的特点:</strong></p><ul><li>对象类型和引用类型之间具有继承（类）/实现（接口）的关系；</li><li>引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；</li><li>多态不能调用“只在子类存在但在父类不存在”的方法；</li><li>如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。</li></ul><h3 id="深拷贝和浅拷贝区别了解吗-什么是引用拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝区别了解吗-什么是引用拷贝"><span>深拷贝和浅拷贝区别了解吗？什么是引用拷贝？</span></a></h3><p>关于深拷贝和浅拷贝区别，我这里先给结论：</p><ul><li><strong>浅拷贝</strong>：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。</li><li><strong>深拷贝</strong> ：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象。</li></ul><p>上面的结论没有完全理解的话也没关系，我们来看一个具体的案例！</p><p><strong>浅拷贝</strong></p><p>浅拷贝的示例代码如下，我们这里实现了 <code>Cloneable</code> 接口，并重写了 <code>clone()</code> 方法。</p><p><code>clone()</code> 方法的实现很简单，直接调用的是父类 <code>Object</code> 的 <code>clone()</code> 方法。</p>',18)]))}const p=t(o,[["render",r],["__file","面向对象.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/basic/class/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"Object-Oriented Programming","lang":"en-US","frontmatter":{"description":"Object-Oriented Programming 面向对象 三大特征 封装 Encapsulation 继承 Inheritance 关于继承如下 3 点请记住： 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，只是拥有。 子类可以拥有自己属性和方法，即子类可以对父类进行扩展。 子类可以用自己...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/class/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Object-Oriented Programming"}],["meta",{"property":"og:description","content":"Object-Oriented Programming 面向对象 三大特征 封装 Encapsulation 继承 Inheritance 关于继承如下 3 点请记住： 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，只是拥有。 子类可以拥有自己属性和方法，即子类可以对父类进行扩展。 子类可以用自己..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:01:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Object-Oriented Programming\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"三大特征","slug":"三大特征","link":"#三大特征","children":[]},{"level":3,"title":"深拷贝和浅拷贝区别了解吗？什么是引用拷贝？","slug":"深拷贝和浅拷贝区别了解吗-什么是引用拷贝","link":"#深拷贝和浅拷贝区别了解吗-什么是引用拷贝","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1732240892000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"se/lang/java/basic/class/面向对象.md","localizedDate":"March 29, 2023","excerpt":"\\n<p>面向对象</p>\\n<h3>三大特征</h3>\\n<h4>封装 Encapsulation</h4>\\n<h4>继承 Inheritance</h4>\\n<p><strong>关于继承如下 3 点请记住：</strong></p>\\n<ol>\\n<li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，<strong>只是拥有</strong>。</li>\\n<li>子类可以拥有自己属性和方法，即子类可以对父类进行扩展。</li>\\n<li>子类可以用自己的方式实现父类的方法。（以后介绍）。</li>\\n</ol>\\n<h4>多态 Polymorphism</h4>","autoDesc":true}`);export{p as comp,d as data};
