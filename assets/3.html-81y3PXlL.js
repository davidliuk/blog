import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as e,a as s,o as l}from"./app-ktFCNIob.js";const i={};function m(p,a){return l(),n("div",null,a[0]||(a[0]=[e('<h1 id="concept-questions-for-hw03" tabindex="-1"><a class="header-anchor" href="#concept-questions-for-hw03"><span>Concept Questions for HW03</span></a></h1><p>(2 pts) What are the three different configuration cases when determining the intersection of a pixel row with a triangle edge? In all three cases, what simple criterion can one use to determine whether the triangle edge overlaps the pixel row at all?</p><p>(3 pts) How might one use barycentric interpolation to determine whether or not a given point in space lies within the bounds of a triangle? In rasterization, would this method be more efficient than row bound checking for determining which pixels lie within a triangle? Why or why not?</p><p>(5 pts) Describe in detail the sequence of transformations that must occur in order to project a set of triangles given in 3D world space into the coordinate system of the pixelized screen.</p><h2 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1"><span>Question 1</span></a></h2><h3 id="three-different-configuration-cases" tabindex="-1"><a class="header-anchor" href="#three-different-configuration-cases"><span>three different configuration cases</span></a></h3><ul><li>Point-slope equation solving alone does not account for the triangle’s bounds</li><li>The edge is colinear to the pixel row being tested (perfectly horizontal, Slope of the triangle edge is 0.)</li><li>Slope of the triangle edge is undefined (i.e. it’s perfectly vertical)</li></ul><h3 id="simple-criterion" tabindex="-1"><a class="header-anchor" href="#simple-criterion"><span>simple criterion</span></a></h3><p>If the pixel row’s Y coord is between the Y coords of an edge’s endpoints, it will overlap the edge within the bounding box.</p><h2 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2"><span>Question 2</span></a></h2><h3 id="determine" tabindex="-1"><a class="header-anchor" href="#determine"><span>Determine</span></a></h3><p>If</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>+</mo><msub><mi>S</mi><mn>3</mn></msub><mo>&gt;</mo><mi>S</mi></mrow><annotation encoding="application/x-tex">S_1+S_2+S_3&gt;S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span></span></span></span></p><p>Where</p>',14),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mo",null,"="),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"P"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"2")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"}),s("msub",null,[s("mi",null,"S"),s("mn",null,"1")]),s("mo",null,"="),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"2")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"}),s("msub",null,[s("mi",null,"S"),s("mn",null,"2")]),s("mo",null,"="),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"3")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"1")]),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"}),s("msub",null,[s("mi",null,"S"),s("mn",null,"3")]),s("mo",null,"="),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"P"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"})]),s("annotation",{encoding:"application/x-tex"}," S=area(P_1,P_2,P_3)\\\\ S_1=area(P,P_2,P_3)\\\\ S_2=area(P,P_3,P_1)\\\\ S_3=area(P,P_1,P_2)\\\\ ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"})])])])],-1),e('<h3 id="vs-row-bound-checking" tabindex="-1"><a class="header-anchor" href="#vs-row-bound-checking"><span>vs. Row bound checking</span></a></h3><p>No, barycentric interpolation is generally less efficient for rasterization because it checks <strong>individual points</strong>. On the other hand, row-bound checking is faster, as it operates by scanning across pixel rows and only checking for <strong>intersections</strong>.</p><h2 id="question-3" tabindex="-1"><a class="header-anchor" href="#question-3"><span>Question 3</span></a></h2><ol><li><strong>View Transformation</strong>: Converts vertices from world space to camera space by applying the inverse of the camera&#39;s position and orientation with View Orient Matrix and View Translate Matrix. This aligns the scene to the camera&#39;s perspective.</li><li><strong>Projection Transformation</strong>: Project objects from 3D space into the screen’s 2D space with projection matrix.</li><li><strong>Perspective Divide</strong>: Divide each vertex in P with <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>U</mi><mi>w</mi></msub></mrow><annotation encoding="application/x-tex">U_w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> (where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>U</mi><mi>w</mi></msub><mo>=</mo><msub><mi>C</mi><mi>z</mi></msub></mrow><annotation encoding="application/x-tex">U_w=C_z</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>), to make unhomogenized screen space homogenized. The transformation divides by the Z-coordinate, creating the depth illusion (perspective divide).</li><li><strong>Viewport Transformation</strong>: Maps NDC (Normalized Device Coordinates) coordinates to the pixel grid on the screen. The NDC space (which ranges from -1 to 1) is scaled and translated to fit the screen resolution.</li></ol>',4)]))}const o=t(i,[["render",m],["__file","3.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/cq/3.html","title":"Concept Questions for HW03","lang":"en-US","frontmatter":{"description":"Concept Questions for HW03 (2 pts) What are the three different configuration cases when determining the intersection of a pixel row with a triangle edge? In all three cases, wh...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/3.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Concept Questions for HW03"}],["meta",{"property":"og:description","content":"Concept Questions for HW03 (2 pts) What are the three different configuration cases when determining the intersection of a pixel row with a triangle edge? In all three cases, wh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concept Questions for HW03\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Question 1","slug":"question-1","link":"#question-1","children":[{"level":3,"title":"three different configuration cases","slug":"three-different-configuration-cases","link":"#three-different-configuration-cases","children":[]},{"level":3,"title":"simple criterion","slug":"simple-criterion","link":"#simple-criterion","children":[]}]},{"level":2,"title":"Question 2","slug":"question-2","link":"#question-2","children":[{"level":3,"title":"Determine","slug":"determine","link":"#determine","children":[]},{"level":3,"title":"vs. Row bound checking","slug":"vs-row-bound-checking","link":"#vs-row-bound-checking","children":[]}]},{"level":2,"title":"Question 3","slug":"question-3","link":"#question-3","children":[]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"education/ms/5600/cq/3.md","localizedDate":"September 30, 2024","excerpt":"\\n<p>(2 pts) What are the three different configuration cases when determining the intersection of a pixel row with a triangle edge? In all three cases, what simple criterion can one use to determine whether the triangle edge overlaps the pixel row at all?</p>\\n<p>(3 pts) How might one use barycentric interpolation to determine whether or not a given point in space lies within the bounds of a triangle? In rasterization, would this method be more efficient than row bound checking for determining which pixels lie within a triangle? Why or why not?</p>","autoDesc":true}`);export{o as comp,h as data};
