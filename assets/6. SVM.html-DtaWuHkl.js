import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as m,a as s,o as l}from"./app-ktFCNIob.js";const p={};function e(i,a){return l(),t("div",null,a[0]||(a[0]=[m('<h1 id="svm" tabindex="-1"><a class="header-anchor" href="#svm"><span>SVM</span></a></h1><p>支持向量机</p><p>深度学习火起来以前，最火的，分类最好的算法就是 SVM 和随机森林</p><p>对于分界线上的元素，遵循公平性原则</p><p>线性分类器：可以画超平面去分类为两类</p><p>线性函数，计算简单，易于求解</p><p>间隔最大化：分类超平面和两类数据直接的间隔尽可能的大，两边都保持尽量远（保证公平性）</p><p>正样本、负样本</p><h3 id="核函数" tabindex="-1"><a class="header-anchor" href="#核函数"><span>核函数</span></a></h3><ul><li>线性核函数</li><li>多项式核函数</li><li>高斯核函数</li></ul><p>CNN：卷积神经网络</p><ul><li>特征提取很</li></ul><p>RNN：循环神经网络</p><ul><li>容易遗忘以前的特征</li></ul><p>LSTM：指长短期记忆人工神经网络</p><ul><li>记忆好</li></ul><p>GNN：图卷积网络</p><p>g(z)=-1, +1 （门函数）（如果是sigmoid，0的地方就是0有距离为0，不希望出现这样情况）</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>θ</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><msup><mi>θ</mi><mi>T</mi></msup><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">h_\\theta(x)=g(\\theta^Tx)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0913em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mrow><mi>w</mi><mo separator="true">,</mo><mi>b</mi></mrow></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><msup><mi>w</mi><mi>T</mi></msup><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">h_{w,b}(x)=g(w^Tx+b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">b</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0913em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span></p><p>函数间隔：类似法线距离：</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mover accent="true"><mi>l</mi><mo>^</mo></mover><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo>=</mo><msup><mi>y</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>w</mi><msup><mi>x</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo>+</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\hat l^{{(i)}}=y^{{(i)}}(wx^{{(i)}}+b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9579em;"></span><span class="mord"><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9579em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span><span style="top:-3.2634em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1667em;"><span class="mord">^</span></span></span></span></span></span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">i</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">i</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">i</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span></p><p>（缺点：如果两个函数同样乘k，不会改变函数距离，但是他们位置确实变了，所以引入下面的几何间隔）</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><munder><mrow><mi>max</mi><mo>⁡</mo></mrow><mrow><mi>w</mi><mo separator="true">,</mo><mi>b</mi></mrow></munder><mi>l</mi><mo separator="true">,</mo><msup><mi>y</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><msup><mi>w</mi><mi>T</mi></msup><msup><mi>x</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo>+</mo><mi>b</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>l</mi></mrow><annotation encoding="application/x-tex">\\max\\limits_{w,b}l,y^{(i)}(w^Tx^{(i)}+b)\\ge l</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.7762em;vertical-align:-0.8882em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.3479em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">b</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">max</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8882em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">i</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">i</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span></span></span></p><p>且<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mi>w</mi><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">||w||=1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣∣</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord">∣∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p><p>公式三：</p>',26),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("munder",null,[s("mrow",null,[s("mi",null,"max"),s("mo",null,"⁡")]),s("mrow",null,[s("mi",null,"w"),s("mo",{separator:"true"},","),s("mi",null,"b")])]),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"2")]),s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"w"),s("mi",{mathvariant:"normal"},"∣"),s("msup",null,[s("mi",{mathvariant:"normal"},"∣"),s("mn",null,"2")]),s("mo",{separator:"true"},","),s("mspace",{linebreak:"newline"}),s("mi",null,"s"),s("mi",{mathvariant:"normal"},"."),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"."),s("msup",null,[s("mi",null,"y"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")])]),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"w"),s("mi",null,"T")]),s("msup",null,[s("mi",null,"x"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")])]),s("mo",null,"+"),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mo",null,"≥"),s("mi",null,"l")]),s("annotation",{encoding:"application/x-tex"}," \\max\\limits_{w,b}\\frac{1}{2}||w||^2,\\\\ s.t.y^{(i)}(w^Tx^{(i)}+b)\\ge l ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2097em","vertical-align":"-0.8882em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4306em"}},[s("span",{style:{top:"-2.3479em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mpunct mtight"},","),s("span",{class:"mord mathnormal mtight"},"b")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},"max")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8882em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord"},"∣∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mpunct"},",")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.188em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord"},"."),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"."),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.938em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mclose mtight"},")")])])])])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8913em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.938em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mclose mtight"},")")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l")])])])])],-1),s("p",null,"SVM是欧式距离（欧式空间）下最好的分类器",-1),s("p",null,"KKT条件",-1),s("p",null,"只和特征向量样本内积有关",-1)]))}const o=n(p,[["render",e],["__file","6. SVM.html.vue"]]),h=JSON.parse(`{"path":"/education/bs/deep-learning/6.%20SVM.html","title":"SVM","lang":"en-US","frontmatter":{"description":"SVM 支持向量机 深度学习火起来以前，最火的，分类最好的算法就是 SVM 和随机森林 对于分界线上的元素，遵循公平性原则 线性分类器：可以画超平面去分类为两类 线性函数，计算简单，易于求解 间隔最大化：分类超平面和两类数据直接的间隔尽可能的大，两边都保持尽量远（保证公平性） 正样本、负样本 核函数 线性核函数 多项式核函数 高斯核函数 CNN：卷积神...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/deep-learning/6.%20SVM.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"SVM"}],["meta",{"property":"og:description","content":"SVM 支持向量机 深度学习火起来以前，最火的，分类最好的算法就是 SVM 和随机森林 对于分界线上的元素，遵循公平性原则 线性分类器：可以画超平面去分类为两类 线性函数，计算简单，易于求解 间隔最大化：分类超平面和两类数据直接的间隔尽可能的大，两边都保持尽量远（保证公平性） 正样本、负样本 核函数 线性核函数 多项式核函数 高斯核函数 CNN：卷积神..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SVM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"核函数","slug":"核函数","link":"#核函数","children":[]}],"git":{"createdTime":1679578424000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"education/bs/deep-learning/6. SVM.md","localizedDate":"March 23, 2023","excerpt":"\\n<p>支持向量机</p>\\n<p>深度学习火起来以前，最火的，分类最好的算法就是 SVM 和随机森林</p>\\n<p>对于分界线上的元素，遵循公平性原则</p>\\n<p>线性分类器：可以画超平面去分类为两类</p>\\n<p>线性函数，计算简单，易于求解</p>\\n<p>间隔最大化：分类超平面和两类数据直接的间隔尽可能的大，两边都保持尽量远（保证公平性）</p>\\n<p>正样本、负样本</p>\\n<h3>核函数</h3>\\n<ul>\\n<li>线性核函数</li>\\n<li>多项式核函数</li>\\n<li>高斯核函数</li>\\n</ul>\\n<p>CNN：卷积神经网络</p>\\n<ul>\\n<li>特征提取很</li>\\n</ul>","autoDesc":true}`);export{o as comp,h as data};
