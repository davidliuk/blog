import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as a,d as p}from"./app-9107e99b.js";const e={},t=p('<h1 id="代码质量" tabindex="-1"><a class="header-anchor" href="#代码质量" aria-hidden="true">#</a> 代码质量</h1><p>优化的逻辑：</p><ol><li>先想暴力的方法</li><li>看哪里有地方是浪费的</li></ol><h4 id="优秀的coding-quality" tabindex="-1"><a class="header-anchor" href="#优秀的coding-quality" aria-hidden="true">#</a> 优秀的Coding Quality</h4><ol><li><p>bug free</p></li><li><p>有边界检测和异常处理</p></li><li><p>代码风格：命名规范、空格、空行</p><ol><li><p>每一个逻辑Part之间一个空格划分</p><p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p></li><li><p>变量命名采用全称：1-2个单词，小驼峰</p></li><li><p>避免重复代码，不允许（泄露没有工程经验）</p></li><li><p>用不到的变量用_来命名</p></li><li><p>尽可能避免全局变量</p></li><li><p>缩进：java是4个</p></li><li><p>空格</p><ol><li>运算符前后要有</li><li>逗号、分号后面有</li></ol></li></ol></li></ol><p>写Python能大概减少10分钟的时间，如果是面试不限制语言的话，可以写Python</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-09 13.26.10.png" alt="" loading="lazy"></p><h3 id="独孤九剑-总决式" tabindex="-1"><a class="header-anchor" href="#独孤九剑-总决式" aria-hidden="true">#</a> 独孤九剑 - 总决式</h3><p>想做到bug free最重要的是优化code Quality</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-09 13.37.10.png" alt="" loading="lazy"></p><p>单元运算符：--, ++, !</p><p>多用continue少用if：减少大段代码的缩进</p><p>也可以尽量减少else，如果前面的if里面执行了return或者continue、break等，后面就不需要else if，直接普通的if，最后不需要else，直接普通的xxx</p><p>最好把嵌套式的改成并列的：好懂得多</p><p>typo：拼写错误</p>',15),o=[t];function n(c,r){return l(),a("div",null,o)}const s=i(e,[["render",n],["__file","3. 代码质量.html.vue"]]);export{s as default};
