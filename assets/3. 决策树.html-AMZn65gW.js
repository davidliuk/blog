import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,o as e}from"./app-PqS9YW_3.js";const p={};function m(i,s){return e(),n("div",null,s[0]||(s[0]=[t('<h1 id="decision-tree-决策树" tabindex="-1"><a class="header-anchor" href="#decision-tree-决策树"><span>Decision Tree 决策树</span></a></h1><p>决策树是一种用于分类和回归任务的非参数监督学习算法。它是一种分层树形结构，由<strong>根节点、分支、内部节点和叶节点</strong>组成。每个内部节点表示一个属性上的测试，每个分支代表一个测试输出，每个叶节点代表一种类别。</p><h3 id="构造" tabindex="-1"><a class="header-anchor" href="#构造"><span>构造</span></a></h3><h3 id="剪枝" tabindex="-1"><a class="header-anchor" href="#剪枝"><span>剪枝</span></a></h3><p>剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p><blockquote><p>可以防止过拟合。</p></blockquote><h4 id="预剪枝" tabindex="-1"><a class="header-anchor" href="#预剪枝"><span>预剪枝</span></a></h4><p>预剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p><h4 id="后剪枝" tabindex="-1"><a class="header-anchor" href="#后剪枝"><span>后剪枝</span></a></h4><p>后剪枝是指先从训练集生成一棵完整的决策树，然后自底向上地对非叶节点进行考察，若将该节点对应的子树替换为叶节点能够带来决策树泛化性能的提升，则将该子树替换为叶节点。</p><p>纯度和信息墒</p><p>信息墒公式：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>p</mi><mi>i</mi></msub><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><msub><mi>p</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">H(X)=-\\sum_{i=1}^n p_i \\log_2 p_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.104em;vertical-align:-0.2997em;"></span><span class="mord">−</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p><h3 id="信息增益-id3算法" tabindex="-1"><a class="header-anchor" href="#信息增益-id3算法"><span>信息增益（ID3算法）：</span></a></h3><p>信息增益是指得知特征X的信息而使得类Y的信息的不确定性减少的程度。</p><p>信息增益公式：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo stretchy="false">(</mo><mi>D</mi><mo separator="true">,</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>H</mi><mo stretchy="false">(</mo><mi>D</mi><mo stretchy="false">)</mo><mo>−</mo><mi>H</mi><mo stretchy="false">(</mo><mi>D</mi><mi mathvariant="normal">∣</mi><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">g(D,A)=H(D)-H(D|A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord">∣</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span></p><h3 id="信息增益比-c4-5算法" tabindex="-1"><a class="header-anchor" href="#信息增益比-c4-5算法"><span>信息增益比（C4.5算法）：</span></a></h3><p>信息增益比是信息增益与训练集的经验熵的比值。</p><p>gini指数Gini(D,A) = 1 - \\sum_{i=1}^n p_i^2</p><h3 id="cart算法" tabindex="-1"><a class="header-anchor" href="#cart算法"><span>CART算法</span></a></h3><p>CART算法是一种二叉树算法，它的特点是只考虑二元划分，即每次划分只考虑一个特征的两种取值。</p>',20)]))}const c=a(p,[["render",m],["__file","3. 决策树.html.vue"]]),o=JSON.parse(`{"path":"/education/bs/deep-learning/3.%20%E5%86%B3%E7%AD%96%E6%A0%91.html","title":"Decision Tree 决策树","lang":"en-US","frontmatter":{"description":"Decision Tree 决策树 决策树是一种用于分类和回归任务的非参数监督学习算法。它是一种分层树形结构，由根节点、分支、内部节点和叶节点组成。每个内部节点表示一个属性上的测试，每个分支代表一个测试输出，每个叶节点代表一种类别。 构造 剪枝 剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/deep-learning/3.%20%E5%86%B3%E7%AD%96%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Decision Tree 决策树"}],["meta",{"property":"og:description","content":"Decision Tree 决策树 决策树是一种用于分类和回归任务的非参数监督学习算法。它是一种分层树形结构，由根节点、分支、内部节点和叶节点组成。每个内部节点表示一个属性上的测试，每个分支代表一个测试输出，每个叶节点代表一种类别。 构造 剪枝 剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Decision Tree 决策树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"构造","slug":"构造","link":"#构造","children":[]},{"level":3,"title":"剪枝","slug":"剪枝","link":"#剪枝","children":[]},{"level":3,"title":"信息增益（ID3算法）：","slug":"信息增益-id3算法","link":"#信息增益-id3算法","children":[]},{"level":3,"title":"信息增益比（C4.5算法）：","slug":"信息增益比-c4-5算法","link":"#信息增益比-c4-5算法","children":[]},{"level":3,"title":"CART算法","slug":"cart算法","link":"#cart算法","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"education/bs/deep-learning/3. 决策树.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>决策树是一种用于分类和回归任务的非参数监督学习算法。它是一种分层树形结构，由<strong>根节点、分支、内部节点和叶节点</strong>组成。每个内部节点表示一个属性上的测试，每个分支代表一个测试输出，每个叶节点代表一种类别。</p>\\n<h3>构造</h3>\\n<h3>剪枝</h3>\\n<p>剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p>\\n<blockquote>\\n<p>可以防止过拟合。</p>\\n</blockquote>\\n<h4>预剪枝</h4>\\n<p>预剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p>","autoDesc":true}`);export{c as comp,o as data};
