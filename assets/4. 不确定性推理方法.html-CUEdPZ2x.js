import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as n,a as s,o as t}from"./app-ChU1gMRF.js";const e={},m={class:"katex-block"},i={class:"katex-display"},r={class:"katex"},c={class:"katex-html","aria-hidden":"true"},h={class:"base"},o={class:"minner"},g={class:"mopen"},u={class:"delimsizing mult"},d={class:"vlist-t vlist-t2"},y={class:"vlist-r"},v={class:"vlist",style:{height:"2.35em"}},f={style:{top:"-2.192em"}},H={style:{height:"0.316em",width:"0.8889em"}},z={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"},b={style:{top:"-4.292em"}},F={style:{height:"0.316em",width:"0.8889em"}},C={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"};function _(x,a){return t(),l("div",null,[a[13]||(a[13]=n('<h1 id="不确定性推理" tabindex="-1"><a class="header-anchor" href="#不确定性推理"><span>不确定性推理</span></a></h1><h2 id="不确定性推理的基本问题" tabindex="-1"><a class="header-anchor" href="#不确定性推理的基本问题"><span>不确定性推理的基本问题</span></a></h2><p>不确定性的表示与度量</p><ol><li>知识不确定性的表示</li><li>证据不确定性的表示</li><li>不确定性的度量</li></ol><ul><li>信任函数</li><li>似然函数</li></ul><h2 id="可信度方法" tabindex="-1"><a class="header-anchor" href="#可信度方法"><span>可信度方法</span></a></h2><ul><li>可信度：根据经验对一个事物或现象为真的相信程度。</li><li>可信度带有较大的主观性和经验性，其准确性难以把握。</li><li>C－F模型：基于可信度表示的不确定性推理的基本方法。</li></ul><h3 id="_1-知识不确定性的表示" tabindex="-1"><a class="header-anchor" href="#_1-知识不确定性的表示"><span><strong>1.</strong> 知识不确定性的表示</span></a></h3><p>IF <em>E</em> THEN <em>H</em> (<em>CF</em>(<em>H</em> , <em>E</em>))</p><p><em>CF</em> ( <em>H</em> , <em>E</em> ) ：可信度因子（certainty factor），反映前提条件与结论的联系强度。</p><h3 id="_2-证据不确定性的表示" tabindex="-1"><a class="header-anchor" href="#_2-证据不确定性的表示"><span><strong>2.</strong> 证据不确定性的表示</span></a></h3><ul><li>静态强度CF(H, E)：知识的强度，即当 <em>E</em> 所对应的证据为真时对 <em>H</em> 的影响程度。</li><li>动态强度 <em>CF</em>（<em>E</em>）：证据 <em>E</em> 当前的不确定性程度。</li></ul><h3 id="_3-组合证据不确定性的算法" tabindex="-1"><a class="header-anchor" href="#_3-组合证据不确定性的算法"><span><strong>3.</strong> 组合证据不确定性的算法</span></a></h3><ul><li>合取 min</li><li>析取 max</li></ul><h3 id="_4-不确定性的传递算法" tabindex="-1"><a class="header-anchor" href="#_4-不确定性的传递算法"><span><strong>4.</strong> 不确定性的传递算法</span></a></h3><p>C－F模型中的不确定性推理：从不确定的初始证据出发，通过运用相关的不确定性知识，最终推出结论并求出结论的可信度值。</p><p>结论 <em>H</em> 的可信度由下式计算：</p><p><em>CF</em> (<em>H</em> ) =<em>CF</em> (<em>H</em> , <em>E</em>)× max{0, <em>CF</em> (<em>E</em>)}</p><h3 id="_5-结论不确定性的合成算法" tabindex="-1"><a class="header-anchor" href="#_5-结论不确定性的合成算法"><span><strong>5.</strong> 结论不确定性的合成算法</span></a></h3>',19)),s("p",m,[s("span",i,[s("span",r,[a[12]||(a[12]=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mrow",null,[s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"2")])]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null,"if "),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"≥"),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"≥"),s("mn",null,"0")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null,"if "),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mn",null,"0")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"min"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"{"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"∣"),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"∣"),s("mo",{stretchy:"false"},"}")])]),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null,"if "),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"1")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mi",null,"C"),s("msub",null,[s("mi",null,"F"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"H"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mn",null,"0")])])])])])])]),s("annotation",{encoding:"application/x-tex"}," CF_{1,2}(H) = \\begin{cases} CF_1(H) + CF_2(H) - CF_1(H)CF_2(H), &\\text{if } CF_1(H) \\geq 0, CF_2(H) \\geq 0 \\\\ CF_1(H) + CF_2(H) + CF_1(H)CF_2(H), &\\text{if } CF_1(H) < 0, CF_2(H) < 0 \\\\ \\frac{CF_1(H) + CF_2(H)}{1 - \\min\\{|CF_1(H)|, |CF_2(H)|\\}}, & \\text{if } CF_1(H)CF_2(H) < 0 \\\\ \\end{cases} ")])])],-1)),s("span",c,[a[11]||(a[11]=n('<span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span>',1)),s("span",h,[a[10]||(a[10]=s("span",{class:"strut",style:{height:"4.41em","vertical-align":"-1.955em"}},null,-1)),s("span",o,[s("span",g,[s("span",u,[s("span",d,[s("span",y,[s("span",v,[a[4]||(a[4]=s("span",{style:{top:"-2.2em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎩")])],-1)),s("span",f,[a[1]||(a[1]=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1)),s("span",H,[(t(),l("svg",z,a[0]||(a[0]=[s("path",{d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"},null,-1)])))])]),a[5]||(a[5]=s("span",{style:{top:"-3.15em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎨")])],-1)),s("span",b,[a[3]||(a[3]=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1)),s("span",F,[(t(),l("svg",C,a[2]||(a[2]=[s("path",{d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"},null,-1)])))])]),a[6]||(a[6]=s("span",{style:{top:"-4.6em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎧")])],-1))]),a[7]||(a[7]=s("span",{class:"vlist-s"},"​",-1))]),a[8]||(a[8]=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.85em"}},[s("span")])],-1))])])]),a[9]||(a[9]=n('<span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.455em;"><span style="top:-4.457em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mpunct">,</span></span></span><span style="top:-3.017em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mpunct">,</span></span></span><span style="top:-1.575em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">−</span><span class="mop mtight"><span class="mtight">m</span><span class="mtight">i</span><span class="mtight">n</span></span><span class="mopen mtight">{</span><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight">)</span><span class="mord mtight">∣</span><span class="mpunct mtight">,</span><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight">)</span><span class="mord mtight">∣</span><span class="mclose mtight">}</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight">)</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.955em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.455em;"><span style="top:-4.457em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span></span></span><span style="top:-3.017em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span></span></span><span style="top:-1.575em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.955em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span>',2))])])])])])]),a[14]||(a[14]=n('<h2 id="模糊推理方法" tabindex="-1"><a class="header-anchor" href="#模糊推理方法"><span>模糊推理方法</span></a></h2><p>基于模糊数学（前面的都是基于概率论的）</p><h3 id="模糊集合" tabindex="-1"><a class="header-anchor" href="#模糊集合"><span>模糊集合</span></a></h3><p>fuzzy set</p><p><strong>隶属度</strong>：某个元素属于一个集合的强度，[0, 1]</p><p>隶属函数：所有元素的隶属度构成的函数</p><h3 id="模糊关系" tabindex="-1"><a class="header-anchor" href="#模糊关系"><span>模糊关系</span></a></h3><h3 id="模糊推理" tabindex="-1"><a class="header-anchor" href="#模糊推理"><span>模糊推理</span></a></h3><p>模糊规则</p><h3 id="模糊决策" tabindex="-1"><a class="header-anchor" href="#模糊决策"><span>模糊决策</span></a></h3><h2 id="可信度方法-1" tabindex="-1"><a class="header-anchor" href="#可信度方法-1"><span>可信度方法</span></a></h2>',11))])}const k=p(e,[["render",_],["__file","4. 不确定性推理方法.html.vue"]]),A=JSON.parse(`{"path":"/education/bs/ai-tech/4.%20%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%80%A7%E6%8E%A8%E7%90%86%E6%96%B9%E6%B3%95.html","title":"不确定性推理","lang":"en-US","frontmatter":{"description":"不确定性推理 不确定性推理的基本问题 不确定性的表示与度量 知识不确定性的表示 证据不确定性的表示 不确定性的度量 信任函数 似然函数 可信度方法 可信度：根据经验对一个事物或现象为真的相信程度。 可信度带有较大的主观性和经验性，其准确性难以把握。 C－F模型：基于可信度表示的不确定性推理的基本方法。 1. 知识不确定性的表示 IF E THEN H ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/ai-tech/4.%20%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%80%A7%E6%8E%A8%E7%90%86%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"不确定性推理"}],["meta",{"property":"og:description","content":"不确定性推理 不确定性推理的基本问题 不确定性的表示与度量 知识不确定性的表示 证据不确定性的表示 不确定性的度量 信任函数 似然函数 可信度方法 可信度：根据经验对一个事物或现象为真的相信程度。 可信度带有较大的主观性和经验性，其准确性难以把握。 C－F模型：基于可信度表示的不确定性推理的基本方法。 1. 知识不确定性的表示 IF E THEN H ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"不确定性推理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"不确定性推理的基本问题","slug":"不确定性推理的基本问题","link":"#不确定性推理的基本问题","children":[]},{"level":2,"title":"可信度方法","slug":"可信度方法","link":"#可信度方法","children":[{"level":3,"title":"1. 知识不确定性的表示","slug":"_1-知识不确定性的表示","link":"#_1-知识不确定性的表示","children":[]},{"level":3,"title":"2. 证据不确定性的表示","slug":"_2-证据不确定性的表示","link":"#_2-证据不确定性的表示","children":[]},{"level":3,"title":"3. 组合证据不确定性的算法","slug":"_3-组合证据不确定性的算法","link":"#_3-组合证据不确定性的算法","children":[]},{"level":3,"title":"4. 不确定性的传递算法","slug":"_4-不确定性的传递算法","link":"#_4-不确定性的传递算法","children":[]},{"level":3,"title":"5. 结论不确定性的合成算法","slug":"_5-结论不确定性的合成算法","link":"#_5-结论不确定性的合成算法","children":[]}]},{"level":2,"title":"模糊推理方法","slug":"模糊推理方法","link":"#模糊推理方法","children":[{"level":3,"title":"模糊集合","slug":"模糊集合","link":"#模糊集合","children":[]},{"level":3,"title":"模糊关系","slug":"模糊关系","link":"#模糊关系","children":[]},{"level":3,"title":"模糊推理","slug":"模糊推理","link":"#模糊推理","children":[]},{"level":3,"title":"模糊决策","slug":"模糊决策","link":"#模糊决策","children":[]}]},{"level":2,"title":"可信度方法","slug":"可信度方法-1","link":"#可信度方法-1","children":[]}],"git":{"createdTime":1700646963000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.65,"words":495},"filePathRelative":"education/bs/ai-tech/4. 不确定性推理方法.md","localizedDate":"November 22, 2023","excerpt":"\\n<h2>不确定性推理的基本问题</h2>\\n<p>不确定性的表示与度量</p>\\n<ol>\\n<li>知识不确定性的表示</li>\\n<li>证据不确定性的表示</li>\\n<li>不确定性的度量</li>\\n</ol>\\n<ul>\\n<li>信任函数</li>\\n<li>似然函数</li>\\n</ul>\\n<h2>可信度方法</h2>\\n<ul>\\n<li>可信度：根据经验对一个事物或现象为真的相信程度。</li>\\n<li>可信度带有较大的主观性和经验性，其准确性难以把握。</li>\\n<li>C－F模型：基于可信度表示的不确定性推理的基本方法。</li>\\n</ul>\\n<h3><strong>1.</strong> 知识不确定性的表示</h3>","autoDesc":true}`);export{k as comp,A as data};
