const e=JSON.parse(`{"key":"v-086de7a7","path":"/se/lang/java/basic/type/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html","title":"类型转换 Type Casting","lang":"en-US","frontmatter":{"description":"类型转换 Type Casting 类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。 类型转换 自动类型转换 Widening 自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。 强制类型转换 强制类型转换我们再清楚不过了，即强制显示的把一个数据类型转换为另外一种数据类型。 如： short s = 199; int i = s;// 199 double d = 10.24; long ll = (long) d;// 10 int a = 30; char c = (char) a;","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/type/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"类型转换 Type Casting"}],["meta",{"property":"og:description","content":"类型转换 Type Casting 类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。 类型转换 自动类型转换 Widening 自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。 强制类型转换 强制类型转换我们再清楚不过了，即强制显示的把一个数据类型转换为另外一种数据类型。 如： short s = 199; int i = s;// 199 double d = 10.24; long ll = (long) d;// 10 int a = 30; char c = (char) a;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型转换 Type Casting\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[{"level":3,"title":"自动类型转换","slug":"自动类型转换","link":"#自动类型转换","children":[]},{"level":3,"title":"强制类型转换","slug":"强制类型转换","link":"#强制类型转换","children":[]},{"level":3,"title":"类型提升","slug":"类型提升","link":"#类型提升","children":[]}]},{"level":2,"title":"转型 Casting","slug":"转型-casting","link":"#转型-casting","children":[{"level":3,"title":"向上转型","slug":"向上转型","link":"#向上转型","children":[]},{"level":3,"title":"向下转型","slug":"向下转型","link":"#向下转型","children":[]}]},{"level":2,"title":"类型对齐","slug":"类型对齐","link":"#类型对齐","children":[]}],"git":{"createdTime":1704683174000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"se/lang/java/basic/type/类型转换.md","localizedDate":"January 8, 2024","excerpt":"<h1> 类型转换 Type Casting</h1>\\n<p>类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。</p>\\n<h2> 类型转换</h2>\\n<h3> 自动类型转换</h3>\\n<p>Widening</p>\\n<p>自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。</p>\\n<h3> 强制类型转换</h3>\\n<p>强制类型转换我们再清楚不过了，即强制显示的把一个数据类型转换为另外一种数据类型。</p>\\n<p>如：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>short s = 199;\\nint i = s;// 199\\n\\ndouble d = 10.24;\\nlong ll = (long) d;// 10\\n\\nint a = 30;\\nchar c = (char) a;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
