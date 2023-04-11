const e=JSON.parse(`{"key":"v-6063ff37","path":"/se/devops/unix/basic/3.%20shell.html","title":"3. Shell 编程","lang":"en-US","frontmatter":{"description":"3. Shell 编程 （Linux 课讲的是系统编程不是 shell） 基本 #是注释 shell 脚本的第一行 文件的前 16 个 bit（前两个字节/英文字符）是 magic number， 来说明是啥，然后用后面的东西解释（sh 可以 ls 也可以，都行，但是能做的内容不一样多） ”符号链接“待会讲 #!/bin/sh","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/3.%20shell.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"3. Shell 编程"}],["meta",{"property":"og:description","content":"3. Shell 编程 （Linux 课讲的是系统编程不是 shell） 基本 #是注释 shell 脚本的第一行 文件的前 16 个 bit（前两个字节/英文字符）是 magic number， 来说明是啥，然后用后面的东西解释（sh 可以 ls 也可以，都行，但是能做的内容不一样多） ”符号链接“待会讲 #!/bin/sh"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/devops/unix/basic/3.%20shell.html"}]]},"headers":[{"level":3,"title":"基本","slug":"基本","link":"#基本","children":[]},{"level":3,"title":"条件测试","slug":"条件测试","link":"#条件测试","children":[]},{"level":2,"title":"循环语句","slug":"循环语句","link":"#循环语句","children":[{"level":3,"title":"foreach","slug":"foreach","link":"#foreach","children":[]},{"level":3,"title":"命令替换：","slug":"命令替换","link":"#命令替换","children":[]},{"level":3,"title":"for","slug":"for","link":"#for","children":[]},{"level":3,"title":"while & until loop","slug":"while-until-loop","link":"#while-until-loop","children":[]}]},{"level":2,"title":"I/O","slug":"i-o","link":"#i-o","children":[]},{"level":2,"title":"重定向","slug":"重定向","link":"#重定向","children":[]},{"level":2,"title":"引号","slug":"引号","link":"#引号","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]}],"git":{"createdTime":1672663528000,"updatedTime":1681208623000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":2.42,"words":727},"localizedDate":"January 2, 2023","filePathRelative":"se/devops/unix/basic/3. shell.md","excerpt":"<h1> 3. Shell 编程</h1>\\n<p>（Linux 课讲的是系统编程不是 shell）</p>\\n<h3> 基本</h3>\\n<ol>\\n<li>#是注释</li>\\n</ol>\\n<p>shell 脚本的第一行</p>\\n<p>文件的前 16 个 bit（前两个字节/英文字符）是 magic number，</p>\\n<p>来说明是啥，然后用后面的东西解释（sh 可以 ls 也可以，都行，但是能做的内容不一样多）</p>\\n<blockquote>\\n<p>”符号链接“待会讲</p>\\n</blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/sh</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
