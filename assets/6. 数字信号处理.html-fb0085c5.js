const s=JSON.parse(`{"key":"v-0238e40f","path":"/ai/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86.html","title":"数字信号处理","lang":"en-US","frontmatter":{"description":"数字信号处理 心电信号的频率范围一般为0.05～l00Hz，并且能量主要集中在0.25～35Hz。 互评，10分 心电滤波程序：MATLAB 请绘制对应的数轴式序列波形图： x[k]=3δ[k+1]+δ[k]+2δ[k−1]+2δ[k−2]","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/ai/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"数字信号处理"}],["meta",{"property":"og:description","content":"数字信号处理 心电信号的频率范围一般为0.05～l00Hz，并且能量主要集中在0.25～35Hz。 互评，10分 心电滤波程序：MATLAB 请绘制对应的数轴式序列波形图： x[k]=3δ[k+1]+δ[k]+2δ[k−1]+2δ[k−2]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/ai/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86.html"}]]},"headers":[{"level":3,"title":"序列基本运算","slug":"序列基本运算","link":"#序列基本运算","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.31,"words":93},"localizedDate":"May 17, 2023","filePathRelative":"ai/intel-elec/6. 数字信号处理.md","excerpt":"<h1> 数字信号处理</h1>\\n<p>心电信号的频率范围一般为0.05～l00Hz，并且能量主要集中在0.25～35Hz。</p>\\n<p>互评，10分</p>\\n<p>心电滤波程序：MATLAB</p>\\n<p>请绘制对应的数轴式序列波形图：</p>\\n<p><span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">x</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mclose\\">]</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">3</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03785em;\\">δ</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mclose\\">]</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03785em;\\">δ</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mclose\\">]</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03785em;\\">δ</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mclose\\">]</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03785em;\\">δ</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mclose\\">]</span></span></span></span></p>","autoDesc":true}`);export{s as data};
