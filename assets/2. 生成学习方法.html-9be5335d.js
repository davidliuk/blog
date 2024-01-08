const a=JSON.parse(`{"key":"v-17cf18c3","path":"/course/deep-learning/2.%20%E7%94%9F%E6%88%90%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.html","title":"生成学习方法","lang":"en-US","frontmatter":{"description":"生成学习方法 机器学习的两个分支： 判别学习方法 对条件概率P(y∣x)P(y|x)P(y∣x)进行建模，然后就可以根据学习结果对数据进行分类 生成学习方法 P(x∣y),P(y)⇒P(y∣x)P(x|y), P(y)\\\\Rightarrow P(y|x)P(x∣y),P(y)⇒P(y∣x) 对先验概率进行建模，然后利用贝叶斯法求后验概率 对条件概率建模，需要的假设更多","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/course/deep-learning/2.%20%E7%94%9F%E6%88%90%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"生成学习方法"}],["meta",{"property":"og:description","content":"生成学习方法 机器学习的两个分支： 判别学习方法 对条件概率P(y∣x)P(y|x)P(y∣x)进行建模，然后就可以根据学习结果对数据进行分类 生成学习方法 P(x∣y),P(y)⇒P(y∣x)P(x|y), P(y)\\\\Rightarrow P(y|x)P(x∣y),P(y)⇒P(y∣x) 对先验概率进行建模，然后利用贝叶斯法求后验概率 对条件概率建模，需要的假设更多"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:56:03.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:56:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生成学习方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-22T09:56:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"高斯判别分析 GDA","slug":"高斯判别分析-gda","link":"#高斯判别分析-gda","children":[{"level":3,"title":"条件","slug":"条件","link":"#条件","children":[]},{"level":3,"title":"建模","slug":"建模","link":"#建模","children":[]}]},{"level":2,"title":"朴素贝叶斯法 NBM","slug":"朴素贝叶斯法-nbm","link":"#朴素贝叶斯法-nbm","children":[]}],"git":{"createdTime":1686210114000,"updatedTime":1700646963000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":5.69,"words":1708},"filePathRelative":"course/deep-learning/2. 生成学习方法.md","localizedDate":"June 8, 2023","excerpt":"<h1> 生成学习方法</h1>\\n<p>机器学习的两个分支：</p>\\n<ul>\\n<li>\\n<p>判别学习方法</p>\\n<p>对条件概率<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>y</mi><mi mathvariant=\\"normal\\">∣</mi><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">P(y|x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mord\\">∣</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>进行建模，然后就可以根据学习结果对数据进行分类</p>\\n</li>\\n<li>\\n<p>生成学习方法</p>\\n<p><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mi mathvariant=\\"normal\\">∣</mi><mi>y</mi><mo stretchy=\\"false\\">)</mo><mo separator=\\"true\\">,</mo><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>y</mi><mo stretchy=\\"false\\">)</mo><mo>⇒</mo><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>y</mi><mi mathvariant=\\"normal\\">∣</mi><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">P(x|y), P(y)\\\\Rightarrow P(y|x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mord\\">∣</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mclose\\">)</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">⇒</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mord\\">∣</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span></p>\\n<p>对先验概率进行建模，然后利用贝叶斯法求后验概率</p>\\n<p>对条件概率建模，需要的假设更多</p>\\n</li>\\n</ul>","autoDesc":true}`);export{a as data};
