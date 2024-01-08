const e=JSON.parse(`{"key":"v-52c50185","path":"/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.html","title":"类加载过程","lang":"en-US","frontmatter":{"description":"类加载过程 加载 “加载”(Loading)阶段是整个“类加载”(ClassLoading)过程中的一个阶段，希望读者没有混淆 这两个看起来很相似的名词。在加载阶段，Java 虚拟机需要完成以下三件事情： 通过一个类的全限定名来获取定义此类的二进制字节流。 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。 在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"类加载过程"}],["meta",{"property":"og:description","content":"类加载过程 加载 “加载”(Loading)阶段是整个“类加载”(ClassLoading)过程中的一个阶段，希望读者没有混淆 这两个看起来很相似的名词。在加载阶段，Java 虚拟机需要完成以下三件事情： 通过一个类的全限定名来获取定义此类的二进制字节流。 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。 在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"加载","slug":"加载","link":"#加载","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"解析","slug":"解析","link":"#解析","children":[]},{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1692613065000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":7.96,"words":2388},"filePathRelative":"se/lang/java/jvm/类加载/类加载过程.md","localizedDate":"March 29, 2023","excerpt":"<h1> 类加载过程</h1>\\n<h2> 加载</h2>\\n<p>“加载”(Loading)阶段是整个“类加载”(ClassLoading)过程中的一个阶段，希望读者没有混淆</p>\\n<p>这两个看起来很相似的名词。在加载阶段，Java 虚拟机需要完成以下三件事情：</p>\\n<ol>\\n<li>\\n<p>通过一个类的全限定名来获取定义此类的二进制字节流。</p>\\n</li>\\n<li>\\n<p>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。</p>\\n</li>\\n<li>\\n<p>在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口。</p>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};
