import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as t,a as s,b as a,o as i}from"./app-Cv-jMnVl.js";const m={};function p(r,l){return i(),e("div",null,l[0]||(l[0]=[t('<h1 id="shamir-秘密共享" tabindex="-1"><a class="header-anchor" href="#shamir-秘密共享"><span>Shamir 秘密共享</span></a></h1><blockquote><p>基本思想：</p><p>一元 k 次多项式函数</p><p>只要有 k+1 个点，就可以求出来整个函数</p></blockquote><h2 id="门限秘密共享方案" tabindex="-1"><a class="header-anchor" href="#门限秘密共享方案"><span>门限秘密共享方案</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p>秘密 s 通过某种方式被分成 n 个部分，每个部分称为份额(share)， 每个份额由一个参与者持有，使得：</p><ul><li>由 t 个或多于 t 个参与者所持有的份额可重构秘密 s;</li><li>由少于 t 个参与者所持有的份额则无法重构秘密 s;</li></ul><p>称该方案为(t,n)门限秘密共享方案， t 称为门限值。少于 t 个参与者所持有的份额得不到关于秘密 s 的任何信息则 称该方案是完善的。</p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><ul><li>导弹的发射控制</li><li>银行或政府机要库门的开启</li><li>核设施启动</li></ul><h2 id="shamir-门限方案" tabindex="-1"><a class="header-anchor" href="#shamir-门限方案"><span>Shamir 门限方案</span></a></h2><p>eg. 复旦树洞<a href="https://github.com/treehollow/treehollow-v3-encryption-doc" target="_blank" rel="noopener noreferrer">https://github.com/treehollow/treehollow-v3-encryption-doc</a></p><p>二维空间</p><p>多项式函数：然后拿拉格朗日差值就可以求出秘密</p><h3 id="构造思路" tabindex="-1"><a class="header-anchor" href="#构造思路"><span>构造思路</span></a></h3>',14),s("ul",null,[s("li",null,[a("设 GF(q) 为大素数 q 生成的有限域，其中"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"q"),s("mo",null,"≥"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"q \\ge n+1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8304em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a("。")]),s("li",null,"秘密 s 是 GF(q)/{0}上均匀选取的随机数。"),s("li",null,[a("在 GF(q)上构建一个(t-1)次多项式 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("msub",null,[s("mi",null,"a"),s("mrow",null,[s("mi",null,"t"),s("mo",null,"−"),s("mn",null,"1")])]),s("msup",null,[s("mi",null,"x"),s("mrow",null,[s("mi",null,"t"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("msub",null,[s("mi",null,"a"),s("mn",null,"1")]),s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"a"),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"f(x) = a_{t-1}x^{t-1}+ ...+a_1x_1+a_0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0224em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("，其中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"a"),s("mn",null,"0")]),s("mo",null,"="),s("mi",null,"s"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"a"),s("mi",null,"i")]),s("mo",null,"∈"),s("mi",null,"G"),s("mi",null,"F"),s("mo",{stretchy:"false"},"("),s("mi",null,"q"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mo",{stretchy:"false"},"{"),s("mn",null,"0"),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"a_0 = s, a_i \\in GF(q)/\\{0\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"GF"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},"/"),s("span",{class:"mopen"},"{"),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"}")])])]),a("。")]),s("li",null,"n 个参与者中第 i 个参与者的份额为 f (i) 。"),s("li",null,[a("任意"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"},"t")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal"},"t")])])]),a("个参与者想要得到秘密 s，可使用利用 Lagrange 插值公式："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"n")]),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("msubsup",null,[s("mo",null,"∏"),s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mspace",{linebreak:"newline"}),s("mi",null,"j"),s("mo",{mathvariant:"normal"},"≠"),s("mi",null,"i")]),s("mi",null,"n")]),s("mfrac",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"−"),s("msub",null,[s("mi",null,"x"),s("mi",null,"j")])]),s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",null,"−"),s("msub",null,[s("mi",null,"x"),s("mi",null,"j")])])]),s("mspace"),s("mspace",{width:"0.6667em"}),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mtext",null," "),s("mtext",null," "),s("mi",null,"q")]),s("annotation",{encoding:"application/x-tex"},"f(x) = \\sum_{i=1}^n y_i \\prod_{j=1,\\\\j\\neq i}^n \\frac{x-x_j}{x_i-x_j}\\mod q")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.458em","vertical-align":"-0.5423em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8043em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∏"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8043em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1"),s("span",{class:"mpunct mtight"},","),s("span",{class:"mspace mtight newline"}),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},[s("span",{class:"mrel mtight"},[s("span",{class:"mord vbox mtight"},[s("span",{class:"thinbox mtight"},[s("span",{class:"rlap mtight"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"inner"},[s("span",{class:"mord mtight"},[s("span",{class:"mrel mtight"},"")])]),s("span",{class:"fix"})])])])]),s("span",{class:"mrel mtight"},"=")]),s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4358em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9157em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])]),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2819em"}},[s("span")])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.5073em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2819em"}},[s("span")])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5423em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.6667em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q")])])])])],-1),t(`<h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>26-11/(6-1)=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(26-19)/2=7/2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>23-19/1=4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AB: 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BD: 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AD: 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>y=3x+8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c 错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>密码是8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试会有一道这个题</strong></p><p>找错的人，然后求秘密</p><h2 id="blakley-方案" tabindex="-1"><a class="header-anchor" href="#blakley-方案"><span>Blakley 方案</span></a></h2><p>t 维空间</p><p>t 维空间多个平面，交点与秘密 s</p><p>可以构造 t 元 1 次方程</p><p>如果有人用了假的份额，求出来的秘密就会出错，</p><p>对称加密的东西加进来，就可以解决这个问题</p><p>恢复出来的</p><p>si，ci 发给每一个人</p><p>密码重构阶段，验证是否存在假的秘密</p>`,13)]))}const o=n(m,[["render",p],["__file","3. 秘密共享.html.vue"]]),g=JSON.parse(`{"path":"/education/bs/block-chain/3.%20%E7%A7%98%E5%AF%86%E5%85%B1%E4%BA%AB.html","title":"Shamir 秘密共享","lang":"en-US","frontmatter":{"description":"Shamir 秘密共享 基本思想： 一元 k 次多项式函数 只要有 k+1 个点，就可以求出来整个函数 门限秘密共享方案 定义 秘密 s 通过某种方式被分成 n 个部分，每个部分称为份额(share)， 每个份额由一个参与者持有，使得： 由 t 个或多于 t 个参与者所持有的份额可重构秘密 s; 由少于 t 个参与者所持有的份额则无法重构秘密 s; 称...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/block-chain/3.%20%E7%A7%98%E5%AF%86%E5%85%B1%E4%BA%AB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Shamir 秘密共享"}],["meta",{"property":"og:description","content":"Shamir 秘密共享 基本思想： 一元 k 次多项式函数 只要有 k+1 个点，就可以求出来整个函数 门限秘密共享方案 定义 秘密 s 通过某种方式被分成 n 个部分，每个部分称为份额(share)， 每个份额由一个参与者持有，使得： 由 t 个或多于 t 个参与者所持有的份额可重构秘密 s; 由少于 t 个参与者所持有的份额则无法重构秘密 s; 称..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shamir 秘密共享\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"门限秘密共享方案","slug":"门限秘密共享方案","link":"#门限秘密共享方案","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]},{"level":2,"title":"Shamir 门限方案","slug":"shamir-门限方案","link":"#shamir-门限方案","children":[{"level":3,"title":"构造思路","slug":"构造思路","link":"#构造思路","children":[]},{"level":3,"title":"例题","slug":"例题","link":"#例题","children":[]}]},{"level":2,"title":"Blakley 方案","slug":"blakley-方案","link":"#blakley-方案","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.79,"words":536},"filePathRelative":"education/bs/block-chain/3. 秘密共享.md","localizedDate":"March 20, 2023","excerpt":"\\n<blockquote>\\n<p>基本思想：</p>\\n<p>一元 k 次多项式函数</p>\\n<p>只要有 k+1 个点，就可以求出来整个函数</p>\\n</blockquote>\\n<h2>门限秘密共享方案</h2>\\n<h3>定义</h3>\\n<p>秘密 s 通过某种方式被分成 n 个部分，每个部分称为份额(share)， 每个份额由一个参与者持有，使得：</p>\\n<ul>\\n<li>由 t 个或多于 t 个参与者所持有的份额可重构秘密 s;</li>\\n<li>由少于 t 个参与者所持有的份额则无法重构秘密 s;</li>\\n</ul>\\n<p>称该方案为(t,n)门限秘密共享方案， t 称为门限值。少于 t 个参与者所持有的份额得不到关于秘密 s 的任何信息则 称该方案是完善的。</p>","autoDesc":true}`);export{o as comp,g as data};
