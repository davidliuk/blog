import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as m}from"./app-PqS9YW_3.js";const i={};function p(l,s){return m(),t("div",null,s[0]||(s[0]=[n('<h1 id="blending" tabindex="-1"><a class="header-anchor" href="#blending"><span>Blending</span></a></h1><h2 id="animation-guide" tabindex="-1"><a class="header-anchor" href="#animation-guide"><span>Animation Guide</span></a></h2><p>Problem – After playing an animation with root translation, the root joint will snap back to the initial position and orientation after playing the animation</p><p>Solution – Add a virtual joint called a “Guide” as a parent of root joint – As a result, root position and orientation transforms are now with respect to the guide frame of reference – At the end of each animation, update the guide joint position to the current position of the character in the world</p><h2 id="foot-ik" tabindex="-1"><a class="header-anchor" href="#foot-ik"><span>Foot IK</span></a></h2><p>Allows character to walk over uneven terrain</p><p>IK Targets – Update left and right foot target positions</p><ul><li>Lfoot_target = Lfoot + Lfoot_height</li><li>Rfoot_target = Rfoot + Rfoot_height</li></ul><p>Root Position</p><ul><li>Determine which foot is lower</li><li>root_offset = smaller of Lfoot_height and Rfoot_height</li><li>Update vertical position of root joint</li><li>y_root = y_root + root_offset</li></ul><p>Foot Position – Use Limb IK with Lfoot_target and Rfoot_target to position feet</p><h2 id="cross-dissolve" tabindex="-1"><a class="header-anchor" href="#cross-dissolve"><span>Cross Dissolve</span></a></h2><p>dissolve</p><h3 id="stand-to-walk" tabindex="-1"><a class="header-anchor" href="#stand-to-walk"><span>stand to walk</span></a></h3><p>We could have two independent animations playing (stand &amp; walk) and then gradually ramp up the ‘u’ value from 0 to 1</p><p>If the transition is reasonably quick (say &lt;0.5 second), it might look OK</p><p>Note: this is just a simple example of a dissolve and not necessarily the best way to make a character start walking…</p><h3 id="walk-to-run" tabindex="-1"><a class="header-anchor" href="#walk-to-run"><span>walk to run</span></a></h3><p>Blending from a walk to a run requires some additional consideration…</p><p>We want to make sure that the walk and run are in phase when we blend between them – That is, both should start when the left (or right foot) hits the ground</p><p>One could animate them in a consistent way so that the two clips both start at the same phase</p><p>But, let’s assume they are not in sync…</p><p>Store an offset for each animation clip that marks some synch point (say at the time when the left foot hits the ground)</p><p>Call these offsets owalk and orun</p><p>Since we want the walk and run animations to stay in phase, we need to <strong>synchronize</strong> them</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>s</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mo>=</mo><mi>L</mi><mi>e</mi><mi>r</mi><mi>p</mi><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mfrac><msub><mi>T</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><msub><mi>T</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow></msub></mfrac><mo separator="true">,</mo><mi>u</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">s_{walk}=Lerp(1,\\frac{T_{walk}}{T_{run}},u)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3393em;vertical-align:-0.4451em;"></span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8942em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4451em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">u</span><span class="mclose">)</span></span></span></span></p><ul><li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>t</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msubsup><mo>=</mo><msub><mi>s</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><msub><mi>t</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mo>=</mo><msub><mi>s</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mo stretchy="false">(</mo><msub><mi>o</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mo>+</mo><mi>t</mi><mo separator="true">,</mo><msub><mi>T</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">t&#39;_{walk}=s_{walk}t_{walk}=s_{walk}\\mod(o_{walk}+t,T_{walk})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.035em;vertical-align:-0.2831em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-2.4169em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2831em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7651em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li><li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>t</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msubsup><mo>=</mo><msub><mi>s</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><msub><mi>t</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>s</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mo stretchy="false">(</mo><msub><mi>o</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow></msub><mo>+</mo><mi>t</mi><mfrac><msub><mi>T</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow></msub><msub><mi>T</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub></mfrac><mo separator="true">,</mo><msub><mi>T</mi><mrow><mi>r</mi><mi>u</mi><mi>n</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">t&#39;_{run}=s_{walk}t_{run}=s_{walk}\\mod(o_{run}+t\\frac{T_{run}}{T_{walk}},T_{run})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9989em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7651em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.3393em;vertical-align:-0.4509em;"></span><span class="mord mathnormal">t</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8884em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4101em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4509em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li></ul><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>u</mi><mo>=</mo><mfrac><mi>t</mi><msub><mi>T</mi><mrow><mi>w</mi><mi>a</mi><mi>l</mi><mi>k</mi></mrow></msub></mfrac></mrow><annotation encoding="application/x-tex">u=\\frac{t}{T_{walk}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2754em;vertical-align:-0.4509em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8246em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:-0.1389em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4509em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><h2 id="bilinear-blend" tabindex="-1"><a class="header-anchor" href="#bilinear-blend"><span>bilinear blend</span></a></h2><hr><p>mirroring</p><p>need symmetrical or closed enough</p>',32)]))}const o=a(i,[["render",p],["__file","blending.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5620/animation/blending.html","title":"Blending","lang":"en-US","frontmatter":{"description":"Blending Animation Guide Problem – After playing an animation with root translation, the root joint will snap back to the initial position and orientation after playing the anim...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5620/animation/blending.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Blending"}],["meta",{"property":"og:description","content":"Blending Animation Guide Problem – After playing an animation with root translation, the root joint will snap back to the initial position and orientation after playing the anim..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Blending\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Animation Guide","slug":"animation-guide","link":"#animation-guide","children":[]},{"level":2,"title":"Foot IK","slug":"foot-ik","link":"#foot-ik","children":[]},{"level":2,"title":"Cross Dissolve","slug":"cross-dissolve","link":"#cross-dissolve","children":[{"level":3,"title":"stand to walk","slug":"stand-to-walk","link":"#stand-to-walk","children":[]},{"level":3,"title":"walk to run","slug":"walk-to-run","link":"#walk-to-run","children":[]}]},{"level":2,"title":"bilinear blend","slug":"bilinear-blend","link":"#bilinear-blend","children":[]}],"git":{"createdTime":1731131409000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"education/ms/5620/animation/blending.md","localizedDate":"November 9, 2024","excerpt":"\\n<h2>Animation Guide</h2>\\n<p>Problem  – After playing an animation with root translation, the root  joint will snap back to the initial position and orientation  after playing the animation</p>\\n<p>Solution – Add a virtual joint called a “Guide” as a parent of root joint  – As a result, root position and orientation transforms are  now with respect to the guide frame of reference  – At the end of each animation, update the guide joint  position to the current position of the character in the world</p>","autoDesc":true}`);export{o as comp,h as data};
