import{_ as t,V as l,W as n,X as s,Y as a,Z as e}from"./framework-e5d7a6b2.js";const i={},h=s("h1",{id:"动态规划",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#动态规划","aria-hidden":"true"},"#"),a(" 动态规划")],-1),p=s("h3",{id:"问题分类",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#问题分类","aria-hidden":"true"},"#"),a(" 问题分类")],-1),c=s("p",null,[a("P问题：多项式时间复杂度，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"n"),s("mi",null,"m")])]),s("annotation",{encoding:"application/x-tex"},"n^m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])])])])])])])]),a("复杂度")],-1),r=s("p",null,"N-P问题：非多项式复杂度，不可解",-1),m=s("ul",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",{stretchy:"false"},"!")]),s("annotation",{encoding:"application/x-tex"},"n!")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!")])])]),a("，排列问题")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"2^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])])]),a("，组合问题")])],-1),o=e('<h2 id="动态规划-解决np问题" tabindex="-1"><a class="header-anchor" href="#动态规划-解决np问题" aria-hidden="true">#</a> 动态规划：解决NP问题</h2><p>把NP问题变成P问题</p><h3 id="排列问题" tabindex="-1"><a class="header-anchor" href="#排列问题" aria-hidden="true">#</a> 排列问题</h3><ul><li>排列，可能是连续性的</li><li>博弈，（需要换序）可能是非连续性的（但一定收敛）</li></ul><h3 id="组合问题" tabindex="-1"><a class="header-anchor" href="#组合问题" aria-hidden="true">#</a> 组合问题</h3><ul><li><p>组合（无序）</p><p>如：背包问题</p></li><li><p>选择（定序）</p><p>如：LIS</p></li><li><p>分割（定序），本质上是对分割点的选择</p><p>如：分割成几个符合条件的子数组之类的问题</p></li></ul><p>串起来的线索：有序</p><p>本质上这五大类型就是建DAG图最主要的五种方式</p>',8),d=[h,p,c,r,m,o];function u(_,x){return l(),n("div",null,d)}const w=t(i,[["render",u],["__file","动态规划.html.vue"]]);export{w as default};
