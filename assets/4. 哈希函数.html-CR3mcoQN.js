import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as t,o as p}from"./app-B3ooTv29.js";const e={};function m(l,s){return p(),n("div",null,s[0]||(s[0]=[t('<h1 id="哈希函数" tabindex="-1"><a class="header-anchor" href="#哈希函数"><span>哈希函数</span></a></h1><h2 id="hash函数" tabindex="-1"><a class="header-anchor" href="#hash函数"><span>Hash函数</span></a></h2><p>哈希函数</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mo>:</mo><mo stretchy="false">{</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><msup><mo stretchy="false">}</mo><mo>∗</mo></msup><mo>→</mo><mo stretchy="false">{</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><msup><mo stretchy="false">}</mo><mi>k</mi></msup><mo separator="true">,</mo><mi>k</mi><mo>∈</mo><msup><mi>N</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">H: \\{0,1\\}^*\\rightarrow\\{0,1\\}^k,k\\in N^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7713em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7713em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></p><p>可以把任意长度的输入，映射到固定长度上的输出</p><p>性质：</p><ul><li>collision-resistant 抗碰撞</li><li>hiding 隐藏</li><li>Puzzle- friendly</li></ul><h3 id="collision-resistant-抗碰撞" tabindex="-1"><a class="header-anchor" href="#collision-resistant-抗碰撞"><span>collision- resistant 抗碰撞</span></a></h3><p>定义：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∀</mi><mi>x</mi><mi mathvariant="normal">¬</mi><mi mathvariant="normal">∃</mi><mi>y</mi><mo mathvariant="normal">≠</mo><mi>x</mi><mo separator="true">,</mo><mi>H</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>H</mi><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\forall x\\neg\\exist y\\ne x,H(x)=H(y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mord">¬∃</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span></p><p>即x与H(x)是绑定关系，</p><p>如迅雷文件下面有一个MD5, SHA1, SHA256，来保证下载的文件与上传的文件相同</p><p>牵一发而动全身，任何轻微的改动，都会对MD5值造成重大的改变</p><p>任何大小的文件，都能映射到一个固定长度的字符串上</p><ul><li>用的比较多的就是：SHA-256</li><li>MD、SHA-1被淘汰，被破解了</li></ul><p>hash as message digest 信息摘要，不用担心内容溢出</p><h3 id="hiding-隐藏性" tabindex="-1"><a class="header-anchor" href="#hiding-隐藏性"><span>Hiding 隐藏性</span></a></h3><p>给H(x)很难找到x</p><p>预测股票哪支大涨</p><p>承诺</p><p>让大家看部分，证明确实有答案，但是不能全让看</p><p>知道花钱的事实，但是不知道花了多少钱</p><p>每次给看部分，验证正确性，然后，</p><p>在不让别人知道答案的情况下，证明我知道解法。</p><p><strong>零知识证明 zero-knowledge proof</strong></p><h3 id="puzzle-friendly" tabindex="-1"><a class="header-anchor" href="#puzzle-friendly"><span>Puzzle- friendly</span></a></h3><p>对每个可能输出值y，如果k是</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mo stretchy="false">(</mo><mi>k</mi><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">H(k||x)=y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">∣∣</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span></p><p>比特币要求每10分钟出一块</p><p>挖矿x是一个随机数，</p><p>k是父区块的哈希，x是随机数</p><p>难度：t，要求前t位是0</p><p>要求前</p><h2 id="哈希指针和数据结构" tabindex="-1"><a class="header-anchor" href="#哈希指针和数据结构"><span>哈希指针和数据结构</span></a></h2><p>哈希函数抗碰撞，用哈希函数来作为指针，找到下一位区块</p><p>两类节点</p><ul><li>权节点：需要记录所有的交易信息</li><li>轻节点：只保留一个哈希，这个哈希就可以囊括整个链所有的信息</li></ul><p>根节点哈希值会包含所有</p><p>实验有这个默克尔哈希树，自己构建</p><p>随便选去一个哈希函数，然后可以拿数组实现这个算法</p><p>证明元素不存在于默克尔树的方法：对data排序，就可以看到这个元素是否在里面</p><p>Tree holds many items but just need to remember the root hash</p><p>Can verify membership in O(log n) time/space</p><p>Variant: sorted Merkle tree can verify non-membership in O(log n)</p><p>(show items before, after the missing one)</p><p>操作记录存在data里面，</p><p>merkle tree不可篡改，根节点保留了一个摘要，高度保存了整个数的信息</p><p>如果需要证明一个点存在</p><p>只有hash的摘要，我有整个所有的信息要验证</p><h3 id="验证一个节点存在" tabindex="-1"><a class="header-anchor" href="#验证一个节点存在"><span>验证一个节点存在</span></a></h3><p>Merkle tree 可以用来验证一个节点是否存在于数据集合中，方法是通过计算这个节点的哈希值，然后与 Merkle tree 的根节点比较¹。具体步骤如下：</p><ol><li>首先，找到这个节点在 Merkle tree 中的位置，也就是它的叶子节点。</li><li>然后，沿着 Merkle tree 向上遍历，每次取出这个节点的兄弟节点（相邻的另一个叶子节点），并与之进行哈希运算，得到一个新的哈希值。</li><li>重复第二步，直到到达根节点，这时得到的哈希值就是 Merkle tree 的根哈希。</li><li>最后，将这个根哈希与给定的 Merkle tree 的根哈希进行比较，如果相同，则说明这个节点存在于数据集合中；如果不同，则说明不存在或者数据被篡改了¹。</li></ol><p>Merkle tree 的优点是可以用很少的信息来验证一个大量的数据³。只需要知道 Merkle tree 的根哈希和一些中间节点的哈希值，就可以验证任意一个叶子节点是否存在³。这样可以节省网络传输和存储空间³。</p><blockquote><p>纪委的项目非常常用这个的技术，数字取证</p></blockquote><h3 id="验证一个节点不存在" tabindex="-1"><a class="header-anchor" href="#验证一个节点不存在"><span>验证一个节点不存在</span></a></h3><p>验证者只有根节点hash值，试证者有整棵树的内容</p><p>遍历法可以但是是不好的方式，如何优化</p><h4 id="方式一-二叉搜索树" tabindex="-1"><a class="header-anchor" href="#方式一-二叉搜索树"><span>方式一：二叉搜索树</span></a></h4><p>把叶子结点排序，构造一棵有序的二叉搜索树</p><p>证明节点不存在：</p><ul><li>证明比他小的元素和大的元素存在且相邻，logn</li></ul><p>（这种方法既可以证明存在也可以证明不存在）</p><h4 id="方式二-累加器" tabindex="-1"><a class="header-anchor" href="#方式二-累加器"><span>方式二：累加器</span></a></h4><p>利用多项式做加密函数，每个节点就是一个根</p><p>且可以有重复元素</p><p>（多重集合）</p><p>很多币就是这样设计的</p><p>统计分析：</p><ul><li>把这个多项式展开，n-1次幂的系数就是交易总合</li><li>除以最高次就是平均额</li></ul><p>可以用hash函数对这个多项式做隐藏，然后实现零知识证明</p><p>没有扩张，只需要给多项式系数即可，没有额外扩张</p><p>merkle tree缺点</p><ul><li>增加很难，又添加高度</li><li>删除很难，后续元素往前填，上层的树需要重构</li></ul><p>比特币是merkle，只能证明存在但是没法做统计分析，只能再有第三方的代理但是很麻烦，也需要有区块链的性质</p><p>块头，块身</p><h3 id="bitcoin数据结构" tabindex="-1"><a class="header-anchor" href="#bitcoin数据结构"><span>Bitcoin数据结构</span></a></h3><p>父区块哈希||MerkleRoot</p><p>一旦验证通过，大家就终止了，这个验证的人就是记账的人</p><p>区块链系统里面，第一块交易就是转给自己的（铸币交易coinbase ）</p><p>清节点只需要保留区块头，下面的交易不需要存</p><p>交易额的0.05%作为奖励，这种不太好，小交易没人记了</p><p>难度值两周调一次</p><p>测验题：</p><p>每十分钟出一个区块，每次有一定奖励，一开始奖励50BTC，后面每4年奖励减少一半，求总的数量（无穷级数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>4*365*24*60/10*50*2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>21024000块</p><table><thead><tr><th>字节</th><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>4</td><td>版本</td><td>区块版本号，表示本区块遵守的验证规则</td></tr><tr><td>32</td><td>父区块头哈希值</td><td>前一区块的哈希值，使用SHA256(SHA256(父区块头))计算</td></tr><tr><td>32</td><td>Merkle根</td><td>该区块中交易的Merkle树根的哈希值，同样采用SHA256(SHA256())计算</td></tr><tr><td>4</td><td>时间戳</td><td>该区块产生的近似时间，精确到秒的UNIX时间戳，必须严格大于前11个区块时间 的中值，同时全节点也会拒绝那些超出自己2个小时时间戳的区块</td></tr><tr><td>4</td><td>难度目标</td><td><code>该区块工作量证明算法的难度目标，已经使用特定算法编码 </code></td></tr><tr><td>4</td><td>Nonce</td><td>为了找到满足难度目标所设定的随机数，为了解决32位随机数在算力飞升的情况下 不够用的问题，规定时间戳和coinbase交易信息均可更改，以此扩展nonce的位数</td></tr></tbody></table><p>UTXO、工作量证明</p><p>签名的特征：</p><ol><li>不可复制、不可伪造（安全需求）</li><li>认可、个人行为（私钥）</li><li>消息知情（公开）</li><li>公开验证（公钥）</li></ol><h2 id="digital-signature-数字签名" tabindex="-1"><a class="header-anchor" href="#digital-signature-数字签名"><span>Digital Signature：数字签名</span></a></h2><p>过程</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mi>e</mi><mi>u</mi><mi>G</mi><mi>e</mi><mi>n</mi><mo stretchy="false">(</mo><mi>λ</mi><mo stretchy="false">)</mo><mo>→</mo><mo stretchy="false">(</mo><mi>p</mi><mi>k</mi><mo separator="true">,</mo><mi>s</mi><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">keuGen(\\lambda)\\rightarrow (pk,sk)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">u</span><span class="mord mathnormal">G</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">λ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span>，非确定性算法</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mi>i</mi><mi>g</mi><mi>n</mi><mo stretchy="false">(</mo><mi>m</mi><mo separator="true">,</mo><mi>s</mi><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>σ</mi></mrow><annotation encoding="application/x-tex">Sign(m,sk)\\rightarrow \\sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span></span></span></span>，非确定性算法</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mi>e</mi><mi>r</mi><mi>i</mi><mi>f</mi><mi>y</mi><mo stretchy="false">(</mo><mi>σ</mi><mo separator="true">,</mo><mi>s</mi><mi>k</mi><mo separator="true">,</mo><mi>m</mi><mo stretchy="false">)</mo><mo>→</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">Verify(\\sigma,sk,m)\\rightarrow 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，确定性算法</p><p>缺点：</p><ol><li><p>m越大，计算开销越大</p><p>解决：对m做哈希，然后将哈希值做Sign</p></li></ol><p>比特币用的是ECDSA，椭圆曲线</p>',97)]))}const c=a(e,[["render",m],["__file","4. 哈希函数.html.vue"]]),o=JSON.parse(`{"path":"/education/bs/block-chain/4.%20%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0.html","title":"哈希函数","lang":"en-US","frontmatter":{"description":"哈希函数 Hash函数 哈希函数 H:{0,1}∗→{0,1}k,k∈N+ 可以把任意长度的输入，映射到固定长度上的输出 性质： collision-resistant 抗碰撞 hiding 隐藏 Puzzle- friendly collision- resistant 抗碰撞 定义：∀x¬∃y=x,H(x)=H(y) 即x与H(x)是绑定关系， ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/block-chain/4.%20%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"哈希函数"}],["meta",{"property":"og:description","content":"哈希函数 Hash函数 哈希函数 H:{0,1}∗→{0,1}k,k∈N+ 可以把任意长度的输入，映射到固定长度上的输出 性质： collision-resistant 抗碰撞 hiding 隐藏 Puzzle- friendly collision- resistant 抗碰撞 定义：∀x¬∃y=x,H(x)=H(y) 即x与H(x)是绑定关系， ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"哈希函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Hash函数","slug":"hash函数","link":"#hash函数","children":[{"level":3,"title":"collision- resistant 抗碰撞","slug":"collision-resistant-抗碰撞","link":"#collision-resistant-抗碰撞","children":[]},{"level":3,"title":"Hiding 隐藏性","slug":"hiding-隐藏性","link":"#hiding-隐藏性","children":[]},{"level":3,"title":"Puzzle- friendly","slug":"puzzle-friendly","link":"#puzzle-friendly","children":[]}]},{"level":2,"title":"哈希指针和数据结构","slug":"哈希指针和数据结构","link":"#哈希指针和数据结构","children":[{"level":3,"title":"验证一个节点存在","slug":"验证一个节点存在","link":"#验证一个节点存在","children":[]},{"level":3,"title":"验证一个节点不存在","slug":"验证一个节点不存在","link":"#验证一个节点不存在","children":[]},{"level":3,"title":"Bitcoin数据结构","slug":"bitcoin数据结构","link":"#bitcoin数据结构","children":[]}]},{"level":2,"title":"Digital Signature：数字签名","slug":"digital-signature-数字签名","link":"#digital-signature-数字签名","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":6,"words":1800},"filePathRelative":"education/bs/block-chain/4. 哈希函数.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>Hash函数</h2>\\n<p>哈希函数</p>\\n<p><span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>H</mi><mo>:</mo><mo stretchy=\\"false\\">{</mo><mn>0</mn><mo separator=\\"true\\">,</mo><mn>1</mn><msup><mo stretchy=\\"false\\">}</mo><mo>∗</mo></msup><mo>→</mo><mo stretchy=\\"false\\">{</mo><mn>0</mn><mo separator=\\"true\\">,</mo><mn>1</mn><msup><mo stretchy=\\"false\\">}</mo><mi>k</mi></msup><mo separator=\\"true\\">,</mo><mi>k</mi><mo>∈</mo><msup><mi>N</mi><mo>+</mo></msup></mrow><annotation encoding=\\"application/x-tex\\">H: \\\\{0,1\\\\}^*\\\\rightarrow\\\\{0,1\\\\}^k,k\\\\in N^+</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.08125em;\\">H</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">:</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">{</span><span class=\\"mord\\">0</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mclose\\"><span class=\\"mclose\\">}</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6887em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mbin mtight\\">∗</span></span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">→</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0991em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">{</span><span class=\\"mord\\">0</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mclose\\"><span class=\\"mclose\\">}</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8491em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">∈</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7713em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.7713em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mbin mtight\\">+</span></span></span></span></span></span></span></span></span></span></span></p>","autoDesc":true}`);export{c as comp,o as data};
