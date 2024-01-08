import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-9107e99b.js";const t={},o=e(`<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h1><p>引言：</p><p>力扣上很多树的题目都是可以用递归很快地解决的，而这一系列递归解法中蕴含了一种很强大的递归思维：对称性递归(symmetric recursion)<br> 什么是对称性递归？就是对一个对称的数据结构（这里指二叉树）从整体的对称性思考，把大问题分解成子问题进行递归，即不是单独考虑一部分(比如树的左子树)，而是同时考虑对称的两部分(左右子树)，从而写出对称性的递归代码</p><h3 id="题型分类" tabindex="-1"><a class="header-anchor" href="#题型分类" aria-hidden="true">#</a> 题型分类：</h3><p>可以用对称性递归解决的二叉树问题大多是判断性问题(bool 类型函数),这一类问题又可以分为以下两类：</p><ol><li><p>不需要构造辅助函数。</p><p>这一类题目有两种情况：</p><ul><li>第一种是单树问题，且不需要用到子树的某一部分(比如根节点左子树的右子树)，只要利用根节点左右子树的对称性即可进行递归。</li><li>第二种是双树问题，即本身题目要求比较两棵树，那么不需要构造新函数。</li></ul><p>该类型题目如下：</p><ol start="100"><li>相同的树</li><li>翻转二叉树</li><li>二叉树的最大深度</li><li>平衡二叉树</li><li>二叉树的直径</li><li>合并二叉树</li><li>另一个树的子树</li><li>单值二叉树</li></ol></li><li><p>需要构造辅助函数。</p><p>这类题目通常只用根节点子树对称性无法完全解决问题，必须要用到子树的某一部分进行递归，即要调用辅助函数比较两个部分子树。形式上主函数参数列表只有一个根节点，辅助函数参数列表有两个节点。该类型题目如下：</p><ol start="101"><li>对称二叉树</li></ol><p>剑指 Offer 26. 树的子结构</p></li></ol><h3 id="解题模板" tabindex="-1"><a class="header-anchor" href="#解题模板" aria-hidden="true">#</a> 解题模板</h3><p>下面给出二叉树对称性递归的解题模板</p><p>1、递归结束条件：特殊情况的判断</p><p>如果是单树问题，一般来说只要进行以下判断：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token operator">/</span>递归函数<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token operator">/</span>递归函数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是双树问题(根节点分别为 p,q)，一般来说进行以下判断：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">||</span> <span class="token operator">!</span>q<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也不完全是这些情况，比如有的需要加上节点值的判断，需要具体问题需要具体分析</p><p>2、返回值</p><p>通常对称性递归的返回值是多个条件的复合判断语句<br> 可能是以下几种条件判断的组合：<br> 节点非空的判断<br> 节点值比较判断<br> (单树)调用根节点左右子树的递归函数进行递归判断<br> (双树)调用两棵树的左右子树的递归函数进行判断</p><h3 id="题目解读" tabindex="-1"><a class="header-anchor" href="#题目解读" aria-hidden="true">#</a> 题目解读</h3><p>空谈比较抽象，下面我们就对具体题目进行分析以及代码呈现</p><ol start="100"><li>相同的树</li></ol><p>相同的树：比较两棵树是否相同<br> 特殊判断：如果两棵树都是空树那么必然相同；如果两棵树其中只有一棵树为空树那么必不相同<br> 返回值：两棵树都非空+根节点值相同+左子树相同+右子树相同</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>bool <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p <span class="token operator">&amp;&amp;</span> q <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>val <span class="token operator">==</span> q<span class="token operator">-&gt;</span>val <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> q<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> q<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> p <span class="token operator">==</span> q<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> p<span class="token punctuation">.</span>val <span class="token operator">==</span> q<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> q<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> q<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="104"><li>二叉树的最大深度</li></ol><p>求二叉树最大深度<br> 特殊判断：空树的最大深度为 0</p><p>返回值：树非空，那么最大深度就是左子树最大深度和右子树最大深度的较大者加上根节点的 1</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">height</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token operator">*</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">height</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="110"><li>平衡二叉树</li></ol><p>判断一棵树是不是平衡二叉树</p><ul><li>平衡二叉树定义：左右子树最大高度差&lt;=1</li><li>特殊判断：空树是平衡树</li></ul><p>返回值：根节点的左右子树高度差&lt;=1 + 左子树是平衡二叉树 +右子树是平衡二叉树</p><p>代码如下：(height 函数即上一题的代码)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool isBalanced(TreeNode*&amp;root)
{
    if (!root)
        return true;
    return (abs(height(root-&gt;left) - height(root-&gt;right)) &lt;= 1) &amp;&amp; isBalanced(root-&gt;left) &amp;&amp; isBalanced(root-&gt;right);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="965"><li>单值二叉树<br> 单值二叉树：所有节点值均相等<br> 特殊判断：1、空树是单值二叉树 2、如果左子树非空且根节点的值异与左子节点值(即根节点与左子节点不同)，返回 false,右子树同理<br> 返回值：左子树是单值二叉树+右子树是单值二叉树<br> 代码如下：</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool isUnivalTree(TreeNode*root)
{
    if (!root)
        return true;
    if ((root-&gt;left &amp;&amp; root-&gt;left-&gt;val != root-&gt;val) || (root-&gt;right &amp;&amp; root-&gt;right-&gt;val != root-&gt;val))
        return false;
    return isUnivalTree(root-&gt;left) &amp;&amp; isUnivalTree(root-&gt;right);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="572"><li>另一个树的子树<br> 判断一个数是不是另一颗树的子树<br> 特殊判断：有一颗树为空就不成立<br> 这道题的思路比较特殊，先判断两棵树是否是相同，如果相同那么就是满足题意的，<br> 然后判断一棵树的左子树是否是另一颗树的子树/一棵树的右子树是否是另一颗树的子树</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool isSubtree(TreeNode*root1, TreeNode*root2)
{
    if (!root1 || !root2)
        return false;
    if (isSameTree(root1, root2))
        return true;
    return isSubtree(root1-&gt;left, root2) || isSubtree(root1-&gt;right, root2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="226"><li>翻转二叉树<br> 将一棵二叉树镜像翻转<br> 特殊判断：空树的镜像翻转树仍然是本身<br> 思路：翻转左子树后替换右子树，翻转右子树后替换左子树<br> 代码：</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>TreeNode* invertTree(TreeNode*root)
{
    if (!root)
        return nullptr;
    TreeNode*left = invertTree(root-&gt;left);
    TreeNode*right = invertTree(root-&gt;right);
    root-&gt;left = right;
    root-&gt;right = left;
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="617"><li>合并二叉树<br> 合并二叉树：将两个二叉树合并<br> 思路：1、都是空树返回 nullptr 2、其中有一个空返回另一个树的根节点<br> 3、都不空的话先把两棵树根节点值相加，然后递归合并左右子树(以第一棵树为合并后的树)<br> 代码如下：</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>TreeNod* mergeTrees(TreeNode*root1, TreeNode*root2)
{
    if (!root1)
        return root2;
    if (!root2)
        return root1;
    if (root1 &amp;&amp; root2)
        root1-&gt;val += root2-&gt;val;
    root1-&gt;left = mergeTrees(root1-&gt;left, root2-&gt;left);    //递归合并左子树
    root1-&gt;right = mergeTrees(root1-&gt;right, root2-&gt;right); //递归合并右子树
    return root1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剑指 Offer 28. 对称的二叉树<br> 判断一棵树是否为对称二叉树<br> 思路：构造一个辅助函数判断两棵树是否是镜像对称的，然后题目只要判断两棵这个树是否镜像对称<br> 而比较两棵树是否镜像对称，即一棵树的左子树和另一棵树的右子树，以及一棵树的右子树和另一棵树的左子树是否镜像对称<br> 特殊判断：都是空树满足条件；其中有一棵空树不满足条件<br> 代码如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool isSymmetric(TreeNode*root)
{
    return isMirror(root, root);
}

bool isMirror(TreeNode*p, TreeNode*q)
{
    if (!p &amp;&amp; !q)
        return true;
    if (!p || !q)
        return false;
    return (p-&gt;val == q-&gt;val) &amp;&amp; (isMirror(p-&gt;left, q-&gt;right)) &amp;&amp; (isMirror(p-&gt;right, q-&gt;left));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剑指 Offer 26. 树的子结构<br> 判断一棵树是否是另一棵树的子结构，注意子结构与子树的区别<br> 子结构不能只利用根节点进行对称性递归，需要构造辅助函数，判断当两棵树根节点值相同时一棵树是否为另一棵树子结构</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// hasSubStructure函数是判断如果A,B根节点相同，B是不是A的子结构
bool hasSubStructure(TreeNode*A, TreeNode*B)
{
    if (!B)        //递归结束条件1：A的一个节点B的对应位置没有,可以认为是子结构
        return true;
    if (!A || A-&gt;val != B-&gt;val)  //递归结束条件2：B的一个节点A的对应位置没有 / A,B对应位置节点值不同，此时必然不可能是子结构
        return false;
    return hasSubStructure(A-&gt;left, B-&gt;left) &amp;&amp; hasSubStructure(A-&gt;right, B-&gt;right); //返回值：继续在对应位置递归判断
}

bool isSubStructure1(TreeNode&lt;T&gt; *A, TreeNode&lt;T&gt; *B)
{
    if (!A || !B)   //特殊判断
        return false;
    // 根节点相同的话直接进入比较，根节点不相同看B是不是A的左/右子树的子结构
    return hasSubStructure(A, B) || isSubStructure1(A-&gt;left, B) || isSubStructure1(A-&gt;right, B);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此大部分递归题目都已经解决了，如果你觉得写的好的话，别忘了点个赞哦<br> 有什么想留言的可以在评论区写出</p>`,45),i=[o];function l(r,p){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","二叉树.html.vue"]]);export{d as default};
