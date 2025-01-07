import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,a as s,o as e}from"./app-ChU1gMRF.js";const p={},i={class:"katex-block"},m={class:"katex-display"},o={class:"katex"},r={class:"katex-html","aria-hidden":"true"},c={class:"base"},h={class:"mord"},g={class:"mtable"},d={class:"col-align-r"},u={class:"vlist-t vlist-t2"},y={class:"vlist-r"},v={class:"vlist",style:{height:"2.7062em"}},w={style:{top:"-4.7287em"}},b={class:"mord"},f={class:"mord"},_={class:"mord accent"},x={class:"vlist-t"},z={class:"vlist-r"},M={class:"vlist",style:{height:"0.9774em"}},k={style:{top:"-3.2634em"}},S={class:"accent-body",style:{left:"-0.2355em"}},G={class:"overlay",style:{height:"0.714em",width:"0.471em"}},C={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},F={class:"col-align-l"},H={class:"vlist-t vlist-t2"},q={class:"vlist-r"},Q={class:"vlist",style:{height:"2.7062em"}},P={style:{top:"-4.7287em"}},A={class:"mord"},B={class:"mord"},L={class:"mord accent"},T={class:"vlist-t"},Y={class:"vlist-r"},D={class:"vlist",style:{height:"0.9774em"}},J={style:{top:"-3.2634em"}},R={class:"accent-body",style:{left:"-0.2355em"}},Z={class:"overlay",style:{height:"0.714em",width:"0.471em"}},I={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},N={style:{top:"-3.0913em"}},O={class:"mord"},V={class:"mord"},W={class:"mord accent"},j={class:"vlist-t"},U={class:"vlist-r"},X={class:"vlist",style:{height:"0.9774em"}},E={style:{top:"-3.2634em"}},K={class:"accent-body",style:{left:"-0.2355em"}},$={class:"overlay",style:{height:"0.714em",width:"0.471em"}},ss={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},as={style:{top:"-1.4538em"}},ts={class:"mord"},ns={class:"mord accent"},es={class:"vlist-t"},ls={class:"vlist-r"},ps={class:"vlist",style:{height:"0.714em"}},is={style:{top:"-3em"}},ms={class:"accent-body",style:{left:"-0.2355em"}},os={class:"overlay",style:{height:"0.714em",width:"0.471em"}},rs={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},cs={class:"mord"},hs={class:"mord accent"},gs={class:"vlist-t"},ds={class:"vlist-r"},us={class:"vlist",style:{height:"0.9774em"}},ys={style:{top:"-3.2634em"}},vs={class:"accent-body",style:{left:"-0.2355em"}},ws={class:"overlay",style:{height:"0.714em",width:"0.471em"}},bs={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"};function fs(_s,a){return e(),n("div",null,[a[34]||(a[34]=t('<h1 id="cq1" tabindex="-1"><a class="header-anchor" href="#cq1"><span>CQ1</span></a></h1><blockquote><p>Sep. 10</p></blockquote><p>Older 2D games are of great help in understanding the core fundamental concepts that we learn in the CIS4620/5620 Computer Animation class. Let&#39;s use this short clip from Capcom’s Megaman X4 as a reference for our first Conceptual Question of the semester:</p><p>In the clip above, we can see a rudimentary application of rotation and translation:</p><ol><li>Megaman just ‘translates’ (moves) left/right and up/down,</li><li>The green beam rotates around the gun.</li></ol><p>Note how the beam keeps rotating about the gun, even when the gun/Megaman is moving(‘translating’).</p><p>Now, consider the following snapshot from the clip and a hypothetical configuration:</p><p><img src="https://canvas.upenn.edu/courses/1814497/files/137886255/preview?verifier=FPvqSbP6SC9GPQHdY9w3vFJCb3a6p3WobVMiJ9QM" alt="cq1_image2_fixed.jpeg" loading="lazy"></p><p>Given:</p><ul><li>The global frame of reference of the world F0 represented by axes (x0, y0, z0).</li><li>Megaman’s local frame of reference is FM , which is at the tip of the gun, is represented by axes (xM, yM, zM). The FM axes are aligned with F0 and just translated by the vector <strong>m</strong>.</li><li>the gun’s local frame of reference FG is also at the tip of the gun and is represented by (xG, yG, zG) with axis xG pointing in the direction of the beam.</li><li>the beam length is 5 units.</li></ul><p><strong>Question: What sequence of transformations can be used to compute the tip of the beam’s target point b in the world coordinate system?</strong></p><p>Your answer should be in terms of a sequence of homogeneous transformation matrices, each representing either a pure rotation or pure translation. That is, homogeneous transformation matrices of the form <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mrow><mi>r</mi><mi>o</mi><mi>t</mi></mrow></msub><mo stretchy="false">(</mo><mi>a</mi><mi>x</mi><mi>i</mi><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mi>n</mi><mi>g</mi><mi>l</mi><mi>e</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">H_{rot}(axis, angle)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ro</span><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mord mathnormal">i</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">an</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">e</span><span class="mclose">)</span></span></span></span> or<br><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mrow><mi>t</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>s</mi></mrow></msub><mo stretchy="false">(</mo><mi>d</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">H_{trans}(d)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">an</span><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">d</span><span class="mclose">)</span></span></span></span>. When multiplied together, the sequence of transformation matrices should transform the tip of the beam <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>b</mi><mi>G</mi></msup></mrow><annotation encoding="application/x-tex">b^G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8413em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span></span></span></span></span></span></span></span> expressed in the G coordinate system to its equivalent representation <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>b</mi><mn>0</mn></msup></mrow><annotation encoding="application/x-tex">b^0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span> in the world coordinate system.</p><p><strong>Answer</strong></p>',13)),s("p",i,[s("span",m,[s("span",o,[a[33]||(a[33]=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("msup",null,[s("mover",{accent:"true"},[s("mi",null,"b"),s("mo",null,"⃗")]),s("mn",null,"0")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("msubsup",null,[s("mi",null,"F"),s("mi",null,"G"),s("mn",null,"0")]),s("msup",null,[s("mover",{accent:"true"},[s("mi",null,"b"),s("mo",null,"⃗")]),s("mi",null,"G")])])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("msubsup",null,[s("mi",null,"F"),s("mi",null,"M"),s("mn",null,"0")]),s("msubsup",null,[s("mi",null,"F"),s("mi",null,"G"),s("mi",null,"M")]),s("msup",null,[s("mover",{accent:"true"},[s("mi",null,"b"),s("mo",null,"⃗")]),s("mi",null,"G")])])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("msub",null,[s("mi",null,"H"),s("mtext",null,"trans")]),s("mo",{stretchy:"false"},"("),s("mover",{accent:"true"},[s("mi",null,"m"),s("mo",null,"⃗")]),s("mo",{stretchy:"false"},")"),s("msub",null,[s("mi",null,"H"),s("mtext",null,"rot")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"Z"),s("mi",null,"M")]),s("mo",{separator:"true"},","),s("mi",null,"θ"),s("mo",{stretchy:"false"},")"),s("msup",null,[s("mover",{accent:"true"},[s("mi",null,"b"),s("mo",null,"⃗")]),s("mi",null,"G")])])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{aligned} \\vec{b}^0 &= F_G^0 \\vec{b}^G \\\\ &= F_M^0 F_G^M \\vec{b}^G \\\\ &= H_{\\text{trans}}(\\vec{m}) H_{\\text{rot}}(Z_M, \\theta) \\vec{b}^G \\end{aligned} ")])])],-1)),s("span",r,[s("span",c,[a[32]||(a[32]=s("span",{class:"strut",style:{height:"4.9123em","vertical-align":"-2.2062em"}},null,-1)),s("span",h,[s("span",g,[s("span",d,[s("span",u,[s("span",y,[s("span",v,[s("span",w,[a[4]||(a[4]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",b,[s("span",f,[s("span",_,[s("span",x,[s("span",z,[s("span",M,[a[2]||(a[2]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"b")],-1)),s("span",k,[a[1]||(a[1]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",S,[s("span",G,[(e(),n("svg",C,a[0]||(a[0]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])]),a[3]||(a[3]=t('<span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span>',1))])])]),a[5]||(a[5]=t('<span style="top:-3.0913em;"><span class="pstrut" style="height:3em;"></span><span class="mord"></span></span><span style="top:-1.4538em;"><span class="pstrut" style="height:3em;"></span><span class="mord"></span></span>',2))]),a[6]||(a[6]=s("span",{class:"vlist-s"},"​",-1))]),a[7]||(a[7]=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.2062em"}},[s("span")])],-1))])]),s("span",F,[s("span",H,[s("span",q,[s("span",Q,[s("span",P,[a[13]||(a[13]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",A,[a[12]||(a[12]=t('<span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span>',5)),s("span",B,[s("span",L,[s("span",T,[s("span",Y,[s("span",D,[a[10]||(a[10]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"b")],-1)),s("span",J,[a[9]||(a[9]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",R,[s("span",Z,[(e(),n("svg",I,a[8]||(a[8]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])]),a[11]||(a[11]=t('<span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span></span></span></span>',1))])])]),s("span",N,[a[19]||(a[19]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",O,[a[18]||(a[18]=t('<span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">M</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">M</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span>',6)),s("span",V,[s("span",W,[s("span",j,[s("span",U,[s("span",X,[a[16]||(a[16]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"b")],-1)),s("span",E,[a[15]||(a[15]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",K,[s("span",$,[(e(),n("svg",ss,a[14]||(a[14]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])]),a[17]||(a[17]=t('<span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span></span></span></span>',1))])])]),s("span",as,[a[29]||(a[29]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",ts,[a[27]||(a[27]=t('<span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">trans</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span>',6)),s("span",ns,[s("span",es,[s("span",ls,[s("span",ps,[a[22]||(a[22]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"m")],-1)),s("span",is,[a[21]||(a[21]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",ms,[s("span",os,[(e(),n("svg",rs,a[20]||(a[20]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])]),a[28]||(a[28]=t('<span class="mclose">)</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">rot</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">M</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span>',8)),s("span",cs,[s("span",hs,[s("span",gs,[s("span",ds,[s("span",us,[a[25]||(a[25]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"b")],-1)),s("span",ys,[a[24]||(a[24]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",vs,[s("span",ws,[(e(),n("svg",bs,a[23]||(a[23]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])]),a[26]||(a[26]=t('<span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span></span></span></span>',1))])])])]),a[30]||(a[30]=s("span",{class:"vlist-s"},"​",-1))]),a[31]||(a[31]=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.2062em"}},[s("span")])],-1))])])])])])])])])])])}const Ms=l(p,[["render",fs],["__file","1.html.vue"]]),ks=JSON.parse(`{"path":"/education/ms/5620/cq/1.html","title":"CQ1","lang":"en-US","frontmatter":{"description":"CQ1 Sep. 10 Older 2D games are of great help in understanding the core fundamental concepts that we learn in the CIS4620/5620 Computer Animation class. Let's use this short clip...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5620/cq/1.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CQ1"}],["meta",{"property":"og:description","content":"CQ1 Sep. 10 Older 2D games are of great help in understanding the core fundamental concepts that we learn in the CIS4620/5620 Computer Animation class. Let's use this short clip..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://canvas.upenn.edu/courses/1814497/files/137886255/preview?verifier=FPvqSbP6SC9GPQHdY9w3vFJCb3a6p3WobVMiJ9QM"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CQ1\\",\\"image\\":[\\"https://canvas.upenn.edu/courses/1814497/files/137886255/preview?verifier=FPvqSbP6SC9GPQHdY9w3vFJCb3a6p3WobVMiJ9QM\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.12,"words":336},"filePathRelative":"education/ms/5620/cq/1.md","localizedDate":"September 30, 2024","excerpt":"\\n<blockquote>\\n<p>Sep. 10</p>\\n</blockquote>\\n<p>Older 2D games are of great help in understanding the core fundamental concepts that we learn in the CIS4620/5620 Computer Animation class. Let's use this short clip from Capcom’s Megaman X4 as a reference for our first Conceptual Question of the semester:</p>","autoDesc":true}`);export{Ms as comp,ks as data};
