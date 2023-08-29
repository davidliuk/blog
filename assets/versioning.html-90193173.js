import{_ as l,V as i,W as e,Z as a}from"./framework-e5d7a6b2.js";const t={},r=a('<h1 id="版本号设计" tabindex="-1"><a class="header-anchor" href="#版本号设计" aria-hidden="true">#</a> 版本号设计</h1><h2 id="版本号命名规则指南" tabindex="-1"><a class="header-anchor" href="#版本号命名规则指南" aria-hidden="true">#</a> 版本号命名规则指南</h2><p>版本号的格式为 <code>X.Y.Z</code>(又称 Major.Minor.Patch)，递增的规则为：</p><ul><li>X 表示主版本号，当 API 的兼容性变化时，X 需递增。</li><li>Y 表示次版本号，当增加功能时(不影响 API 的兼容性)，Y 需递增。</li><li>Z 表示修订号，当做 Bug 修复时(不影响 API 的兼容性)，Z 需递增。 详细的规则如下：</li></ul><ol><li>X, Y, Z 必须为非负整数，且不得包含前导零，必须按数值递增，如 1.9.0 -&gt; 1.10.0 -&gt; 1.11.0</li><li>0.Y.Z 的版本号表明软件处于初始开发阶段，意味着 API 可能不稳定；1.0.0 表明版本已有稳定的 API。</li><li>当 API 的兼容性变化时，X 必须递增，Y 和 Z 同时设置为 0；当新增功能(不影响 API 的兼容性)或者 API 被标记为 Deprecated 时，Y 必须递增，同时 Z 设置为 0；当进行 bug fix 时，Z 必须递增。</li><li>先行版本号(Pre-release)意味该版本不稳定，可能存在兼容性问题，其格式为：<code>X.Y.Z.[a-c][正整数]</code>，如 1.0.0.a1，1.0.0.b99，1.0.0.c1000。</li><li>开发版本号常用于 CI-CD，格式为 <code>X.Y.Z.dev[正整数]</code>，如 1.0.1.dev4。</li><li>版本号的排序规则为依次比较主版本号、次版本号和修订号的数值，如 1.0.0 &lt; 1.0.1 &lt; 1.1.1 &lt; 2.0.0；对于先行版本号和开发版本号，有：1.0.0.a100 &lt; 1.0.0，2.1.0.dev3 &lt; 2.1.0；当存在字母时，以 ASCII 的排序来比较，如 1.0.0.a1 &lt; 1.0.0.b1。</li><li>注意：版本一经发布，不得修改其内容，任何修改必须在新版本发布！</li></ol><h2 id="一些修饰的词" tabindex="-1"><a class="header-anchor" href="#一些修饰的词" aria-hidden="true">#</a> 一些修饰的词</h2><ul><li>alpha：内测版，BUG 多，开发人员开发过程中使用，希腊字母 α，第一，指最初版</li><li>beta：测试版，有缺陷，没有严重 BUG，可能加入新功能，进一步开发完善</li><li>demo：演示版</li><li>enhance：增强版</li><li>free：自由版</li><li>full version：完整版，即正式版</li><li>lts：长期维护版本</li><li>snapshot：快照版本</li><li>release：发行版，官方推荐使用此版本</li><li>rc：即将作为正式版发布</li><li>standard：标准版</li><li>ultimate：旗舰版</li><li>upgrade：升级版</li></ul>',7),d=[r];function c(o,n){return i(),e("div",null,d)}const h=l(t,[["render",c],["__file","versioning.html.vue"]]);export{h as default};
