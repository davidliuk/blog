import{_ as e,V as o,W as i,Z as l}from"./framework-e5d7a6b2.js";const p={},c=l('<h1 id="_2-用户管理" tabindex="-1"><a class="header-anchor" href="#_2-用户管理" aria-hidden="true">#</a> 2. 用户管理</h1><p>root下的所有目录</p><ul><li>Home 一般用户的工作目录</li><li>root 是管理员用户的目录</li><li>bin</li><li>sbin 系统管理命令</li><li><strong>etc</strong>：所有的配置文件</li></ul><p>用root可以看到shadow</p><p>Unix下用<code>:</code>做内容分割</p><p>用户在etc下的passwd里面</p><ol><li>用户名</li><li>x，密码存的地方（x代表别处，在shallow下面）</li><li>用户id</li><li>用户组id</li><li>完整名字</li><li>主目录</li><li>启动时使用的shell</li></ol><p>让用户登录不上</p><p>su切换用户，如果不写就是切换超级用户</p><p>#是超级用户</p><p>$是普通用户</p><blockquote><p>闲着没事别用root</p><p>只有真的要用系统管理时再用root，用完赶快退，不然root下被跑个木马都完蛋</p></blockquote><p>备份：一般用<code>.dist</code>后缀来命名</p><p>username不重要，重要的是id</p><p>系统管理，基本上都是修改etc下的文件</p><h3 id="用户指令" tabindex="-1"><a class="header-anchor" href="#用户指令" aria-hidden="true">#</a> 用户指令</h3><p><code>useradd</code>：新建用户</p><p><code>userdel</code>：删除用户，默认保留用户文件，但是删掉passwd和shadow里面的文件，加r删文件</p><p><code>usermod</code>：修改用户</p><blockquote><p>User modify</p></blockquote><p>锁定用户的方式</p><ul><li>设置密码过期</li></ul><p><code>su</code>：切换用户</p><p>su - jim （-是环境）</p><p><code>exit</code>：退出</p><p>不要直接修改系统文件，要用指令工具</p><p><code>sudo</code>：可以给用户加自己的超级权限</p>',27),d=[c];function t(a,s){return o(),i("div",null,d)}const n=e(p,[["render",t],["__file","2. account-management.html.vue"]]);export{n as default};
