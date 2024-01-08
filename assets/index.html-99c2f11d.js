import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,d as r}from"./app-9107e99b.js";const a={},n=r('<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h1><p>二叉树解题的思维模式分两类：</p><ol><li>是否可以通过遍历一遍二叉树得到答案？如果可以，用一个 traverse 函数配合外部变量来实现，这叫「遍历」的思维模式。</li><li>是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案？如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值，这叫「分解问题」的思维模式。</li></ol><p>无论使用哪种思维模式，你都需要思考：</p><p>如果单独抽出一个二叉树节点，它需要做什么事情？需要在什么时候（前/中/后序位置）做？其他的节点不用你操心，递归函数会帮你在所有节点上执行相同的操作。</p><p>前序位置的代码只能从函数参数中获取父节点传递来的数据，而后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据。</p><p><strong>那么换句话说，一旦你发现题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码了</strong>。</p>',7),c=[n];function i(s,l){return t(),o("div",null,c)}const p=e(a,[["render",i],["__file","index.html.vue"]]);export{p as default};
