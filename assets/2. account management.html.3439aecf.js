import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,f as o}from"./app.b6c2567d.js";const e={},t=o("<p>root下的所有目录</p><ul><li>Home一般用户的工作目录</li><li>root是管理员用户的目录</li><li>bin</li><li>sbin 系统管理命令</li><li><strong>etc</strong>：所有的配置文件</li></ul><p>用root可以看到shadow</p><p>Unix下用:做分割</p><p>用户在etc下的passwd里面</p><ol><li>用户名</li><li>x，密码存的地方（x代表别处，在shallow下面）</li><li>用户id</li><li>用户组id</li><li>完整名字</li><li>主目录</li><li>启动时使用的shell</li></ol><p>让用户登录不上</p><p>su切换用户，如果不写就是切换超级用户</p><p>#是超级用户</p><p>$是普通用户</p><p>闲着没事别用root</p><p>只有真的要用系统管理时再用root，用完赶快退，不然root下被跑个木马都完蛋</p><p>备份：一般用.dist来命名</p><p>username不重要，重要的是id</p><p>系统管理，基本上都是修改etc下的文件</p><p>useradd</p><p>userdel 默认保留文件，但是删掉passwd和shadow里面的文件，加r删文件</p><p>usermod</p><blockquote><p>User modify</p></blockquote><p>锁用户的方式</p><ul><li>设置密码过期</li><li></li></ul><p>su - jim （-是环境）</p><p>exit</p><p>不要直接修改系统文件，要用指令工具</p><p>sudo可以给用户加自己的超级权限</p>",25),s=[t];function r(c,n){return l(),i("div",null,s)}const u=p(e,[["render",r],["__file","2. account management.html.vue"]]);export{u as default};
