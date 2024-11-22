import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as t}from"./app-DtA_0glx.js";const n={};function l(h,e){return t(),a("div",null,e[0]||(e[0]=[s(`<h1 id="_12-软件管理" tabindex="-1"><a class="header-anchor" href="#_12-软件管理"><span>12. 软件管理</span></a></h1><h2 id="分发软件的格式" tabindex="-1"><a class="header-anchor" href="#分发软件的格式"><span>分发软件的格式</span></a></h2><ul><li>.tar.gz</li><li>.rpm (RHEL, CentOS, Fedora, SUSE, OEL ..) yum</li><li>.deb (debian, Ubuntu)</li></ul><h2 id="包管理器" tabindex="-1"><a class="header-anchor" href="#包管理器"><span>包管理器</span></a></h2><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm"><span>RPM</span></a></h3><p>Redhat Package management</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>缺的依赖还得一个一个自己下，非常不方便</p><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum"><span>yum</span></a></h3><p>RHEL 的</p><p>yum + 安装包名，</p><p>自动下载缺的依赖</p><p>安装的软件，会分到很多地方都有，usr/bin, etc, ...好多</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://www.likecs.com/show-305689800.html" target="_blank" rel="noopener noreferrer">https://www.likecs.com/show-305689800.html</a></p><p>默认源非常旧，所以一般需要配置源，如下 city-fan 是一种内容都很新的源</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel7/x86_64/city-fan.org-release-2-2.rhel7.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> city-fan.org-release-2-2.rhel7.noarch.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/just_lion/article/details/7797009" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/just_lion/article/details/7797009</a></p><p>git yum 源：<a href="https://zhuanlan.zhihu.com/p/534957630" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/534957630</a></p><p><code>yum-utils</code> package (which provides the <code>yum-config-manager</code> utility)</p><p>Centos yum 命令提示 failed to set locale, defaulting to C</p><p>出现这个问题是由于系统没有正确设置 locale 环境, 而 locale 是用于设置本地环境的比如：语言、时区、数字等</p><p>解决方案</p><p>方案一：设置系统环境变量</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;export LC_ALL=en_US.UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt;&gt;  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/profile</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二：设置个人环境变量</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;export LC_ALL=en_US.UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt;&gt;  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.bashrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dnf" tabindex="-1"><a class="header-anchor" href="#dnf"><span>dnf</span></a></h3><p>大多数指令与 yum 兼容，内存管理更好，效率更高</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="apt" tabindex="-1"><a class="header-anchor" href="#apt"><span>apt</span></a></h3><p>Debian 的</p><p>Advanced package tool</p><p>apt-get 现在比 yum 好（版本更新一些）</p><p>深度学习、机器学习用 Ubuntu 更好，apt-get 维护的更好一些</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>configuration</span></a></h3><p>安装</p><p>更多的时候给源码，需要 Makefile</p><h3 id="brew" tabindex="-1"><a class="header-anchor" href="#brew"><span>brew</span></a></h3><p><a href="https://blog.csdn.net/CaptainJava/article/details/109132783" target="_blank" rel="noopener noreferrer">配置镜像</a></p>`,40)]))}const p=i(n,[["render",l],["__file","12. software-management.html.vue"]]),o=JSON.parse(`{"path":"/se/devops/unix/basic/12.%20software-management.html","title":"12. 软件管理","lang":"en-US","frontmatter":{"description":"12. 软件管理 分发软件的格式 .tar.gz .rpm (RHEL, CentOS, Fedora, SUSE, OEL ..) yum .deb (debian, Ubuntu) 包管理器 RPM Redhat Package management 缺的依赖还得一个一个自己下，非常不方便 yum RHEL 的 yum + 安装包名， 自动下载缺的...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/12.%20software-management.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"12. 软件管理"}],["meta",{"property":"og:description","content":"12. 软件管理 分发软件的格式 .tar.gz .rpm (RHEL, CentOS, Fedora, SUSE, OEL ..) yum .deb (debian, Ubuntu) 包管理器 RPM Redhat Package management 缺的依赖还得一个一个自己下，非常不方便 yum RHEL 的 yum + 安装包名， 自动下载缺的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-14T10:15:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-14T10:15:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. 软件管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-14T10:15:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"分发软件的格式","slug":"分发软件的格式","link":"#分发软件的格式","children":[]},{"level":2,"title":"包管理器","slug":"包管理器","link":"#包管理器","children":[{"level":3,"title":"RPM","slug":"rpm","link":"#rpm","children":[]},{"level":3,"title":"yum","slug":"yum","link":"#yum","children":[]},{"level":3,"title":"dnf","slug":"dnf","link":"#dnf","children":[]},{"level":3,"title":"apt","slug":"apt","link":"#apt","children":[]},{"level":3,"title":"configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"brew","slug":"brew","link":"#brew","children":[]}]}],"git":{"createdTime":1669446166000,"updatedTime":1694686552000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"se/devops/unix/basic/12. software-management.md","localizedDate":"November 26, 2022","excerpt":"\\n<h2>分发软件的格式</h2>\\n<ul>\\n<li>.tar.gz</li>\\n<li>.rpm (RHEL, CentOS, Fedora, SUSE, OEL ..) yum</li>\\n<li>.deb (debian, Ubuntu)</li>\\n</ul>\\n<h2>包管理器</h2>\\n<h3>RPM</h3>\\n<p>Redhat Package management</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">rpm</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nam</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">e&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,o as data};
