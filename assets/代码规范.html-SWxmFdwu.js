import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o as n}from"./app-B6s9NXTg.js";const o={};function i(r,t){return n(),a("div",null,t[0]||(t[0]=[l('<h1 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范"><span>代码规范</span></a></h1><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h2><p><a href="https://blog.csdn.net/csdn_life18/article/details/126335665" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/csdn_life18/article/details/126335665</a></p><p><a href="http://t.zoukankan.com/leon618-p-7469638.html" target="_blank" rel="noopener noreferrer">http://t.zoukankan.com/leon618-p-7469638.html</a></p><h2 id="常量规范" tabindex="-1"><a class="header-anchor" href="#常量规范"><span>常量规范</span></a></h2><h2 id="类定义和接口定义常量对比" tabindex="-1"><a class="header-anchor" href="#类定义和接口定义常量对比"><span>类定义和接口定义常量对比</span></a></h2><p>类定义常量和接口定义常量:</p><ol><li>类定义常量, 需要定义成 final 且定义一个 private 的构造方法, 这样做是为了不让其他类继承, 禁止实例化此类,</li></ol><p>调用时直接以&quot;类.常量&quot;的方式调用.</p><ol start="2"><li>接口中定义的&quot;变量&quot;, 其实就是常量, 接口中的&quot;变量&quot;默认都是 &quot;public static final&quot;类型, 即为常量,</li></ol><p>因此接口可以省略&quot;public static final&quot;而直接写成 &quot;type variable&quot;.</p><ol start="3"><li><p>用如上的类定义常量, 不能实例化也不能被继承, 看起了完美无缺;</p></li><li><p>接口定义常量, 虽不能实例化, 确可以被其他类实现;</p></li></ol><p>因此有这么一种设计模式&quot;The constant interface pattern&quot;. 所谓的&quot;常量接口模式&quot;, 就是其他类要使用接口中定义的常量,</p><p>就实现该接口. 我认为这是对接口的烂用. 接口中定义的常量应为所有类频繁使用的常量, 但并不是每个类都使用了接口中定义的所有常量,</p><p>因而导入了不必要的常量到这个类中, 并且导入后这个类的子类也会基础导入的常量, 这样会导致混乱, 应当避免此种用法.</p><ol start="5"><li>在 interface 和 class 中定义相同的常量, interface 生成的 class 文件比 class 生成的 class 文件会更小, 而且更简洁, 效率更高</li></ol><p>所以我更喜欢把常量定义在接口中。</p>',17)]))}const s=e(o,[["render",i],["__file","代码规范.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/basic/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html","title":"代码规范","lang":"en-US","frontmatter":{"description":"代码规范 命名规范 https://blog.csdn.net/csdn_life18/article/details/126335665 http://t.zoukankan.com/leon618-p-7469638.html 常量规范 类定义和接口定义常量对比 类定义常量和接口定义常量: 类定义常量, 需要定义成 final 且定义一个 priv...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"代码规范"}],["meta",{"property":"og:description","content":"代码规范 命名规范 https://blog.csdn.net/csdn_life18/article/details/126335665 http://t.zoukankan.com/leon618-p-7469638.html 常量规范 类定义和接口定义常量对比 类定义常量和接口定义常量: 类定义常量, 需要定义成 final 且定义一个 priv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码规范\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":2,"title":"常量规范","slug":"常量规范","link":"#常量规范","children":[]},{"level":2,"title":"类定义和接口定义常量对比","slug":"类定义和接口定义常量对比","link":"#类定义和接口定义常量对比","children":[]}],"git":{"createdTime":1678024743000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"se/lang/java/basic/代码规范.md","localizedDate":"March 5, 2023","excerpt":"\\n<h2>命名规范</h2>\\n<p><a href=\\"https://blog.csdn.net/csdn_life18/article/details/126335665\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/csdn_life18/article/details/126335665</a></p>\\n<p><a href=\\"http://t.zoukankan.com/leon618-p-7469638.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://t.zoukankan.com/leon618-p-7469638.html</a></p>","autoDesc":true}`);export{s as comp,d as data};
