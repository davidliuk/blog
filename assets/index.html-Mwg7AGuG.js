import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-CybQbXIt.js";const l={};function n(h,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>git config 命令的–global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。</p><h3 id="查看-git-配置信息" tabindex="-1"><a class="header-anchor" href="#查看-git-配置信息"><span>查看 git 配置信息</span></a></h3><p><code>$ git config --list</code></p><h3 id="查看-git-用户名、密码、邮箱的配置" tabindex="-1"><a class="header-anchor" href="#查看-git-用户名、密码、邮箱的配置"><span>查看 git 用户名、密码、邮箱的配置</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.name</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.password</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.email</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置用户名密码" tabindex="-1"><a class="header-anchor" href="#设置用户名密码"><span>设置用户名密码</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">用户</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">密</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">码&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">邮</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">箱&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-git-alias" tabindex="-1"><a class="header-anchor" href="#设置-git-alias"><span>设置 git alias</span></a></h3><p>使用 git alias 可以极大地提高效率，我常用的有</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global alias.co checkout</span></span>
<span class="line"><span>git config --global alias.br branch</span></span>
<span class="line"><span>git config --global alias.ci commit</span></span>
<span class="line"><span>git config --global alias.st status</span></span>
<span class="line"><span>git config --global alias.unstage &#39;reset HEAD --&#39;</span></span>
<span class="line"><span>git config --global alias.last &#39;log -1 HEAD&#39;</span></span>
<span class="line"><span>git config --global alias.logl &#39;log --oneline&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跑完上面的指令，查看 <code>~/.gitconfig</code> 是否包含以下内容</p><p><a href="https://www.zhihu.com/people/freewheel-lee" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/people/freewheel-lee</a></p>`,14)]))}const r=s(l,[["render",n],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/se/tools/git/","title":"Git","lang":"en-US","frontmatter":{"description":"Git 配置 git config 命令的–global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。 查看 git 配置信息 $ git config --list 查看 git 用户名、密码、邮箱的配置 设置用户名密码 设置 git alias 使用 git a...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/tools/git/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"Git 配置 git config 命令的–global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。 查看 git 配置信息 $ git config --list 查看 git 用户名、密码、邮箱的配置 设置用户名密码 设置 git alias 使用 git a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"查看 git 配置信息","slug":"查看-git-配置信息","link":"#查看-git-配置信息","children":[]},{"level":3,"title":"查看 git 用户名、密码、邮箱的配置","slug":"查看-git-用户名、密码、邮箱的配置","link":"#查看-git-用户名、密码、邮箱的配置","children":[]},{"level":3,"title":"设置用户名密码","slug":"设置用户名密码","link":"#设置用户名密码","children":[]},{"level":3,"title":"设置 git alias","slug":"设置-git-alias","link":"#设置-git-alias","children":[]}]}],"git":{"createdTime":1672663528000,"updatedTime":1731124512000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"se/tools/git/README.md","localizedDate":"January 2, 2023","excerpt":"\\n<h2>配置</h2>\\n<p>git config 命令的–global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。</p>\\n<h3>查看 git 配置信息</h3>\\n<p><code>$ git config --list</code></p>\\n<h3>查看 git 用户名、密码、邮箱的配置</h3>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.name</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.password</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.email</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,g as data};
