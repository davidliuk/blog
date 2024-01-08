const e=JSON.parse(`{"key":"v-66c9f1a6","path":"/cs/algo/framework/parameter/","title":"传参","lang":"en-US","frontmatter":{"description":"传参 传参设计 局部变量传递 父传子 非引用类型需要函数传参（BFS节点），如深度信息可以直接父传子depth + 1 引用类型变量需要结合回溯来实现。 子传父 DFS通过返回值将子问题结果传递给父问题。 全局变量传递 邻接：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间 访问：序号、前后序时间戳、访问前驱、访问后继，需要全局参数传递，因为不再是父子相传","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/framework/parameter/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"传参"}],["meta",{"property":"og:description","content":"传参 传参设计 局部变量传递 父传子 非引用类型需要函数传参（BFS节点），如深度信息可以直接父传子depth + 1 引用类型变量需要结合回溯来实现。 子传父 DFS通过返回值将子问题结果传递给父问题。 全局变量传递 邻接：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间 访问：序号、前后序时间戳、访问前驱、访问后继，需要全局参数传递，因为不再是父子相传"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-03T07:46:32.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-02-03T07:46:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"传参\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-03T07:46:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"传参设计","slug":"传参设计","link":"#传参设计","children":[{"level":3,"title":"局部变量传递","slug":"局部变量传递","link":"#局部变量传递","children":[]},{"level":3,"title":"全局变量传递","slug":"全局变量传递","link":"#全局变量传递","children":[]}]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"值类型","slug":"值类型","link":"#值类型","children":[]},{"level":3,"title":"引用类型","slug":"引用类型","link":"#引用类型","children":[]}]},{"level":2,"title":"传参类型","slug":"传参类型","link":"#传参类型","children":[{"level":3,"title":"值传递","slug":"值传递","link":"#值传递","children":[]},{"level":3,"title":"引用传递","slug":"引用传递","link":"#引用传递","children":[]},{"level":3,"title":"数组的引用传递","slug":"数组的引用传递","link":"#数组的引用传递","children":[]},{"level":3,"title":"修改实例和修改引用","slug":"修改实例和修改引用","link":"#修改实例和修改引用","children":[]},{"level":3,"title":"递归三要素","slug":"递归三要素","link":"#递归三要素","children":[]}]}],"git":{"createdTime":1675007490000,"updatedTime":1675410392000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"cs/algo/framework/parameter/README.md","localizedDate":"January 29, 2023","excerpt":"<h1> 传参</h1>\\n<h2> 传参设计</h2>\\n<h3> 局部变量传递</h3>\\n<p>父传子</p>\\n<ul>\\n<li>非引用类型需要函数传参（BFS节点），如深度信息可以直接父传子depth + 1</li>\\n<li>引用类型变量需要结合回溯来实现。</li>\\n</ul>\\n<p>子传父</p>\\n<ul>\\n<li>DFS通过返回值将子问题结果传递给父问题。</li>\\n</ul>\\n<h3> 全局变量传递</h3>\\n<p>邻接：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间</p>\\n<p>访问：序号、前后序时间戳、访问前驱、访问后继，需要全局参数传递，因为不再是父子相传</p>","autoDesc":true}`);export{e as data};
