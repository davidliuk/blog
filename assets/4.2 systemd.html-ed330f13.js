const e=JSON.parse(`{"key":"v-d27165ae","path":"/se/devops/unix/basic/4.2%20systemd.html","title":"4.2. systemd","lang":"en-US","frontmatter":{"description":"4.2. systemd 目的 增加并发性、减少shell开发 争议 红帽的，来顶替init进程， 违法unix哲学，因为过于复杂，不单一职责 systemctl 可以控制systemd系统和服务管理 systemctl disable/enable xxx 关闭/打开开机自启动 systemctl start [name.service] systemctl stop [name.service] systemctl restart [name.service] systemctl reload [name.service] systemctl status [name.service] systemctl is-active [name.service] # 检查是否在运行 systemctl list-units --type [name.service] # equals to: chkconfig --list systemctl enable [name.service] # 打开开机自启动 systemctl disable [name.service] # 关闭开机自启动","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/4.2%20systemd.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"4.2. systemd"}],["meta",{"property":"og:description","content":"4.2. systemd 目的 增加并发性、减少shell开发 争议 红帽的，来顶替init进程， 违法unix哲学，因为过于复杂，不单一职责 systemctl 可以控制systemd系统和服务管理 systemctl disable/enable xxx 关闭/打开开机自启动 systemctl start [name.service] systemctl stop [name.service] systemctl restart [name.service] systemctl reload [name.service] systemctl status [name.service] systemctl is-active [name.service] # 检查是否在运行 systemctl list-units --type [name.service] # equals to: chkconfig --list systemctl enable [name.service] # 打开开机自启动 systemctl disable [name.service] # 关闭开机自启动"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-02T12:45:28.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-02T12:45:28.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/devops/unix/basic/4.2%20systemd.html"}]]},"headers":[{"level":3,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":3,"title":"争议","slug":"争议","link":"#争议","children":[]},{"level":3,"title":"systemctl","slug":"systemctl","link":"#systemctl","children":[]}],"git":{"createdTime":1672663528000,"updatedTime":1672663528000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"localizedDate":"January 2, 2023","filePathRelative":"se/devops/unix/basic/4.2 systemd.md","excerpt":"<h1> 4.2. systemd</h1>\\n<h3> 目的</h3>\\n<p>增加并发性、减少shell开发</p>\\n<h3> 争议</h3>\\n<p>红帽的，来顶替init进程，</p>\\n<p>违法unix哲学，因为过于复杂，不单一职责</p>\\n<h3> systemctl</h3>\\n<p>可以控制systemd系统和服务管理</p>\\n<p>systemctl disable/enable xxx 关闭/打开开机自启动</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>systemctl start <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\nsystemctl stop <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\nsystemctl restart <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\nsystemctl reload <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\nsystemctl status <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\nsystemctl is-active <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># 检查是否在运行</span>\\nsystemctl list-units <span class=\\"token parameter variable\\">--type</span> <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token comment\\"># equals to: chkconfig --list</span>\\nsystemctl <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># 打开开机自启动</span>\\nsystemctl disable <span class=\\"token punctuation\\">[</span>name.service<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># 关闭开机自启动</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
