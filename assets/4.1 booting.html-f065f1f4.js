import{_ as p,V as o,W as e,Z as t}from"./framework-e5d7a6b2.js";const i={},l=t('<h1 id="_4-booting-系统启动" tabindex="-1"><a class="header-anchor" href="#_4-booting-系统启动" aria-hidden="true">#</a> 4. Booting 系统启动</h1><p><code>boot loaders - grub</code></p><p>平时一般用 3，除了图形界面以为的都有，服务器一般就是这个</p><p>1 超级用户模式，</p><p>software stack，一个软件可能要启动多个进程，如 Spark 等</p><p>脚本</p><p>service 命令可以自动帮我们找脚本</p><p>符号链接：快捷方式</p><p>关机</p><ul><li><p>init 0</p></li><li><p>shutdown</p><p>-r 通知所有用户多长时间后关机</p><p>-h</p></li></ul><p>重启</p><ul><li><p>shutdown</p><p>-r 通知所有用户多长时间后关机</p></li><li><p>reboot</p></li><li><p>Init 6</p></li></ul><p>chkconfig --add 添加服务</p><p>chkconfig xxx on 在所有 level 打开 xx 服务</p><p>chkconfig xxx off 在所有 level 不启动 xx 服务（那就彻底不会开机启动了）</p><p>systemd</p>',16),n=[l];function c(r,a){return o(),e("div",null,n)}const _=p(i,[["render",c],["__file","4.1 booting.html.vue"]]);export{_ as default};
