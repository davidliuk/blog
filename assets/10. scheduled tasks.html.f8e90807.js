import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as s}from"./app.b6c2567d.js";const r={},c=s('<p>自动化运维：遇到问题，写程序，可以复用</p><p>at：在指定时间做一次的</p><p>cron：周期性的</p><p>anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行</p><p>At ...</p><p>atq</p><p>atrm</p><p>batch以低优先级运行命令</p><p>var下面放的都是常变的内容，比如说who命令，他的内容写在var/run/uxxx下面写得</p><p>spool</p><p>需要at daemon，每分钟检查一次</p><h4 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h4><ul><li>Service atd start</li><li>Service atd stop</li></ul><h4 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h4><ul><li>systemctl start atd.service</li><li>systemctl stop atd.service</li></ul><p>ctrl d：eof</p><p>stty -a：看终端快捷键配置</p><p>他可以发邮件</p><h3 id="access-control-of-at" tabindex="-1"><a class="header-anchor" href="#access-control-of-at" aria-hidden="true">#</a> Access Control of &quot;at&quot;</h3><p>可以设置权限来控制谁可以使用</p><p>etc下的at.deny或者at.allow</p><p>一般就是只有其中的一个：黑名单和白名单模式，只有这个文件里面的可以/不可以使用</p>',22),o=[c];function p(i,d){return e(),a("div",null,o)}const h=t(r,[["render",p],["__file","10. scheduled tasks.html.vue"]]);export{h as default};
