const e=JSON.parse(`{"key":"v-1e2d9eaa","path":"/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html","title":"类加载器","lang":"en-US","frontmatter":{"description":"类加载器 从上面的介绍可以看出: 类加载器是一个负责加载类的对象，用于实现类加载过程中的加载这一步。 每个 Java 类都有一个引用指向加载它的 ClassLoader。 数组类不是通过 ClassLoader 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。 类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些:比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"类加载器"}],["meta",{"property":"og:description","content":"类加载器 从上面的介绍可以看出: 类加载器是一个负责加载类的对象，用于实现类加载过程中的加载这一步。 每个 Java 类都有一个引用指向加载它的 ClassLoader。 数组类不是通过 ClassLoader 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。 类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些:比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html"}]]},"headers":[{"level":3,"title":"类加载器加载规则","slug":"类加载器加载规则","link":"#类加载器加载规则","children":[]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[{"level":3,"title":"三层类加载器","slug":"三层类加载器","link":"#三层类加载器","children":[]},{"level":3,"title":"双亲委派模型","slug":"双亲委派模型-1","link":"#双亲委派模型-1","children":[]},{"level":3,"title":"双亲委派模型的好处","slug":"双亲委派模型的好处","link":"#双亲委派模型的好处","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1681208623000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":8.24,"words":2473},"localizedDate":"March 29, 2023","filePathRelative":"se/lang/java/jvm/类加载/类加载器.md","excerpt":"<h1> 类加载器</h1>\\n<p>从上面的介绍可以看出:</p>\\n<ul>\\n<li>类加载器是一个负责加载类的对象，用于实现类加载过程中的加载这一步。</li>\\n<li>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li>\\n<li>数组类不是通过 <code>ClassLoader</code> 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。</li>\\n</ul>\\n<p>类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些:比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。</p>","autoDesc":true}`);export{e as data};
