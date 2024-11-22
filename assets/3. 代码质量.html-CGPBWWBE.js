import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as t,o as n}from"./app-UiaY2OnX.js";const p={};function a(o,i){return n(),e("div",null,i[0]||(i[0]=[t('<h1 id="代码质量" tabindex="-1"><a class="header-anchor" href="#代码质量"><span>代码质量</span></a></h1><p>优化的逻辑：</p><ol><li>先想暴力的方法</li><li>看哪里有地方是浪费的</li></ol><h3 id="优秀的-coding-quality" tabindex="-1"><a class="header-anchor" href="#优秀的-coding-quality"><span>优秀的 Coding Quality</span></a></h3><ol><li><p>bug free</p></li><li><p>边界检测和异常处理</p></li><li><p>代码风格：命名、空格、空行</p><ol><li><p>每个逻辑 Part 之间一个空行划分</p><p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p></li><li><p>变量命名采用全称：1-2个单词，小驼峰</p></li><li><p>避免重复代码（泄露没有工程经验）</p></li><li><p>用不到的变量用_来命名（python、js和go注意）</p></li><li><p>尽可能避免全局变量</p></li><li><p>缩进：java是4个</p></li><li><p>空格</p><ol><li>运算符的前后要有</li><li>逗号、分号后面有</li></ol></li></ol></li></ol><p>写 Python 能大概减少10分钟的时间，如果是面试不限制语言的话，可以写Python</p><h3 id="独孤九剑-总决式" tabindex="-1"><a class="header-anchor" href="#独孤九剑-总决式"><span>独孤九剑 - 总决式</span></a></h3><p>想做到 bug free 最重要的是优化code Quality</p><p>单元运算符：--, ++, !</p><p>多用 continue 少用if：减少大段代码的缩进</p><p>尽量减少 else，如果前面的if里面执行了return或者continue、break等，后面就不需要else if，直接普通的if，最后不需要else，直接普通的xxx</p><p>最好把嵌套式的改成并列的：好懂得多</p><p>typo：拼写错误</p><p>Coding Style 相关:</p><ul><li>二元运算符两边加空格，单元运算符不加空格</li><li>花括号和 for, if 之间要加空格(Java)，圆括号和 if 之间要加空格</li><li>用空行分隔开不同的逻辑块</li><li>逗号后面加空格</li></ul><p>Readability 相关</p><ul><li>函数名和变量名用1-2个单词作为名称</li><li>确保一个函数内部不超过 3 层缩进(indention)</li><li>多用子函数来减少入口函数的代码量</li><li>多用 continue 少用 if</li></ul><p>Bug Free 相关</p><ul><li>不管有没有可能出问题，都要对入口函数的参数进行异常检测</li><li>访问一个下标的时候，一定要确保这个下标不会越界</li><li>访问一个对象的属性或者方法时，一定要确保这个对象不是空</li><li>不用全局变量</li></ul>',19)]))}const c=l(p,[["render",a],["__file","3. 代码质量.html.vue"]]),s=JSON.parse(`{"path":"/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/3.%20%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F.html","title":"代码质量","lang":"en-US","frontmatter":{"description":"代码质量 优化的逻辑： 先想暴力的方法 看哪里有地方是浪费的 优秀的 Coding Quality bug free 边界检测和异常处理 代码风格：命名、空格、空行 每个逻辑 Part 之间一个空行划分 如异常判断、主体逻辑、结果返回，这些part之间一个分行 变量命名采用全称：1-2个单词，小驼峰 避免重复代码（泄露没有工程经验） 用不到的变量用_来...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/3.%20%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"代码质量"}],["meta",{"property":"og:description","content":"代码质量 优化的逻辑： 先想暴力的方法 看哪里有地方是浪费的 优秀的 Coding Quality bug free 边界检测和异常处理 代码风格：命名、空格、空行 每个逻辑 Part 之间一个空行划分 如异常判断、主体逻辑、结果返回，这些part之间一个分行 变量命名采用全称：1-2个单词，小驼峰 避免重复代码（泄露没有工程经验） 用不到的变量用_来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码质量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"优秀的 Coding Quality","slug":"优秀的-coding-quality","link":"#优秀的-coding-quality","children":[]},{"level":3,"title":"独孤九剑 - 总决式","slug":"独孤九剑-总决式","link":"#独孤九剑-总决式","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"algo/summary/九章算法/3. 代码质量.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>优化的逻辑：</p>\\n<ol>\\n<li>先想暴力的方法</li>\\n<li>看哪里有地方是浪费的</li>\\n</ol>\\n<h3>优秀的 Coding Quality</h3>\\n<ol>\\n<li>\\n<p>bug free</p>\\n</li>\\n<li>\\n<p>边界检测和异常处理</p>\\n</li>\\n<li>\\n<p>代码风格：命名、空格、空行</p>\\n<ol>\\n<li>\\n<p>每个逻辑 Part 之间一个空行划分</p>\\n<p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p>\\n</li>\\n<li>\\n<p>变量命名采用全称：1-2个单词，小驼峰</p>\\n</li>\\n<li>\\n<p>避免重复代码（泄露没有工程经验）</p>\\n</li>\\n<li>\\n<p>用不到的变量用_来命名（python、js和go注意）</p>\\n</li>\\n<li>\\n<p>尽可能避免全局变量</p>\\n</li>\\n<li>\\n<p>缩进：java是4个</p>\\n</li>\\n<li>\\n<p>空格</p>\\n<ol>\\n<li>运算符的前后要有</li>\\n<li>逗号、分号后面有</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ol>","autoDesc":true}`);export{c as comp,s as data};
