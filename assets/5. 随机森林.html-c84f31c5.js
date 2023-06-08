const s=JSON.parse(`{"key":"v-15eaf20e","path":"/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97.html","title":"随机森林","lang":"en-US","frontmatter":{"description":"随机森林 袋外错误率 Oob Error Rate 无需交叉认证或测试集，在训练过程中，每个样本被选中的概率为 1 - 1/e ≈ 63.2%。袋外样本的预测结果不会被用于训练，因此可以用来评估模型的泛化能力。 f6​(x)=∑i=1n​([xi​+0.5])2","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"随机森林"}],["meta",{"property":"og:description","content":"随机森林 袋外错误率 Oob Error Rate 无需交叉认证或测试集，在训练过程中，每个样本被选中的概率为 1 - 1/e ≈ 63.2%。袋外样本的预测结果不会被用于训练，因此可以用来评估模型的泛化能力。 f6​(x)=∑i=1n​([xi​+0.5])2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-08T07:41:54.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-06-08T07:41:54.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97.html"}]]},"headers":[],"git":{"createdTime":1686210114000,"updatedTime":1686210114000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"localizedDate":"June 8, 2023","filePathRelative":"course/deep-learning/5. 随机森林.md","excerpt":"<h1> 随机森林</h1>\\n<p>袋外错误率 Oob Error Rate</p>\\n<p>无需交叉认证或测试集，在训练过程中，每个样本被选中的概率为 1 - 1/e ≈ 63.2%。袋外样本的预测结果不会被用于训练，因此可以用来评估模型的泛化能力。</p>\\n<p><span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">6</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.104em;vertical-align:-0.2997em;\\"></span><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8043em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.2029em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2997em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">([</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">0.5</span><span class=\\"mclose\\">]</span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></p>","autoDesc":true}`);export{s as data};
