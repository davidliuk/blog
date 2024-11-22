import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as l,e as i,o as s,r}from"./app-C8HRrJwL.js";const n={};function a(c,p){const e=r("Mermaid");return s(),t("div",null,[p[0]||(p[0]=l('<h1 id="_6-进程控制" tabindex="-1"><a class="header-anchor" href="#_6-进程控制"><span>6. 进程控制</span></a></h1><p>fork 复制当前进程，状态和 pc 也完全一样，执行 fork 后面部分的程序</p><p>换代码、execute 操作</p><p>Linux 里面子进程的创建</p><p>cow 写时复制</p><p>redis 持久化：fork 下来复制，然后主线程的修改，写时复制</p><h2 id="进程死亡的方式" tabindex="-1"><a class="header-anchor" href="#进程死亡的方式"><span>进程死亡的方式</span></a></h2><ul><li><p>自行死亡</p><p>执行完毕，如，c 的 main 函数，返回值是进程返回值，返回给父进程看</p></li><li><p>被杀死</p><p>kill，软中断</p><p>kill -l 可以看到所有的信号，谁杀的、怎么死的</p><p>kill -9 xxx</p></li><li><p>出错没了，call down</p></li></ul><h2 id="多进程编程" tabindex="-1"><a class="header-anchor" href="#多进程编程"><span>多进程编程</span></a></h2><p>fork 的返回值是子进程的 pid，-1 说明创建失败</p><p>wait()可以等待子进程回来，也可以看看子进程怎么没的，而且还可以给子进程收尸</p><p>wait 低 7 位是 signumber，高 8 位是</p><p>父进程不看子进程的 return value （wait）的返回，</p><p>内存泄漏，不可避免，</p><p>中断处理函数</p><p>sigkill 和 sig</p><h2 id="信号" tabindex="-1"><a class="header-anchor" href="#信号"><span>信号</span></a></h2><p>Ctrl c 2 号</p><p>Ctrl z 挂起进程，然后再杀死</p><p>ps：process status</p><blockquote><p>-l long</p><p>UID，哪个用户运行的</p><p>PID，进程号</p><p>PPID，父进程号</p><p>S，进程状态</p><ul><li>S：sleep，进程挂起</li><li>R：running，正在运行</li><li>Z：zombie。子进程死了，父进程不看，就会变成僵尸，只保留一个死的状态；有多种解决方案</li></ul><p>PRI：优先级，小的优先级高，不能直接修改</p><p>NI：nice number，只能变大不能变小（只有 root 可以用），[-20, 19]，会加到原来的 PRI 上</p></blockquote>',21)),i(e,{id:"mermaid-126",code:"eJxLL0osyFDwCeJSAALH6Kcds5/u3hWroKtrp+AU/WL/hBcLe2LBck5gMefo53MXPp+zACLmDFGHxHaJfrKj92n/+ic71j6btvb5rBZk5S4QI5CMc41+2jjn2dpFEHlXsJhb9NPmrU837IjlAgBsXDko"}),i(e,{id:"mermaid-127",code:"eJxLL0osyFDwCeJSAALH6Kcds5/u3hWroKtrp+CkofF0w8bnu1dpaoJlncCiztXPZqx/OmHZszmdT5e0PJ/Q9nTmimfTt72cvuV5Z3stWKEzUKECUB6s3iX6xf4JLxb2xCJJTV8AsQAs5AJmu0KNfb628+m+1ie7up/s3gYxzRWsZcZ6sDK3aGQFT9f1POuYADHZDWIbQgvQMLCQO9RkiOJnncuBjoGY7I5sskf0890dz9YugpgGloKZ4MIFAD1Jd8A="}),i(e,{id:"mermaid-128",code:"eJxdj7FOwzAQhvc+xUlsKJEqRiMxQNhggW6IwbEv8QnHrnynhL49sZuEtpKn///u8x2LFmxI90kPOwCwlNAIxQBvH7scaGMOJB4VHBwxzE8c5hSZqfUIktuFbJBN+id1uARtLumY5cVsvGZusIMQ5T2OFHroyHs1OZIi3IAhjjhgEOhikJrlNK9Doj2Zxyuu1fZZ29exoFl11+33lYk+prO1KoIJqXei2uhtxZLiD9YTWXHq4fi7BOqE3sep7Pl1/w11/QSfkpVKbevmsoSlnrHr4AzNA+v6uV4O3Xw32UvS7G5G1uzyuvXDPzS5kzs="}),p[1]||(p[1]=l('<p>&amp;符号可以让进程在后台运行</p><p>killall 可以根据命令名去杀所有的这个命令带出来的进程</p><p><code>ps -el</code> 传统 UNIX 风格，可以看到所有的前台后台的进程</p><p><code>ps -l</code>，可以看到当前 shell 下面的进程</p><p><code>ps aux</code>, a 表示所有的，u 表示 user，x 表示所有的进程</p><p>top</p><p>swap 磁盘空间，内存管理里面的会提</p><p>uptime，可以嵌入到脚本里面</p><p>strace，观察一个进程进行的所有的系统调用，来看他在做什么，需要了解各种 system call</p><p>lsof，list open file</p><blockquote><p>Lsof -u uid 看用户打开的文件</p><p>Lsof -p pid 看进程打开的文件</p></blockquote><p>指令</p><ul><li><p><code>ps -el，</code></p></li><li><p><code>strace</code>，看一个进程的所有的系统调用、对信号非常清楚</p><p>如果对系统调用不熟悉，可以用 man 2 看系统调用</p></li><li><p><code>lsof</code></p></li></ul><p>如果父进程被杀死了，他的子进程会变成孤儿进程，PID 变成 1（init 1 或者 systemd）</p><p>僵尸进程与孤儿进程</p><p>动态链接库</p><p>.so 的东西都是动态链接库（Windows 下又 dll）</p><p>动态链接：库不要放在程序里面，防止程序太大</p><p>如果别人 load 过了，就在内存里面直接使用（叫做动态链接）</p><p>生僻库编译的时候建议用静态链接，</p><p>根目录下别碰，usr 下随便弄，安装也安装在 usr 下最好</p><p>现在新的红帽下，根目录下的文件都是符号链接到 usr 下的了</p><p>动态链接放到 usr/bin 里面就可以了</p><p>redis epoll，fork 持久化</p><p>redis in action（redis 实战）</p><p>CPU 饱和（burst）没事，性能线性下降，就是排队时间增长就可以了</p><p>内存饱和很可怕，内存满了就要页置换，大家都在调页，CPU 利用率断崖式下跌</p><p>copy on write</p><p>如何解决内存泄漏问题</p><p>ps top</p><h3 id="前后台调度" tabindex="-1"><a class="header-anchor" href="#前后台调度"><span>前后台调度</span></a></h3><p>前台：占用终端了</p><p>后台：运行的时候 + <code>&amp;</code>符，这样就在后台不占用终端了、或者 tmux</p><p>Ctrl + z：让进程到后台，并且发出 sigstop，让进程挂起</p><p><code>fg</code>: foreground，把后台进程放到前台执行</p><p><code>bg</code>: 把一个挂起的程序放到后台执行</p><p><code>jobs</code>: 可以看到后台运行了哪些</p><p>前台切换到后台：</p><ul><li>在前台运行的程序可以通过按下组合键 Ctrl + Z 将其暂停，并将其移到后台运行。这会将进程暂停并将其放入后台任务队列中。</li><li>使用命令 bg 将最近被暂停的进程转移到后台继续运行。</li></ul><p>后台切换到前台：</p><ul><li>使用命令 jobs 查看当前后台运行的任务列表，并确定需要切换到前台的任务的标识符。</li><li>使用命令 fg %任务标识符将指定的后台任务切换到前台运行。</li></ul><p>注意：</p><ul><li>如果在执行 Ctrl + Z 或 bg 命令之后重新打开终端或关闭当前终端，后台运行的进程将会停止。为了避免这种情况，可以使用工具如 nohup 或 disown 将进程与终端分离。</li><li>通过 Ctrl + C 可以终止前台运行的进程，但无法终止后台运行的进程。如果需要终止后台进程，可以使用 kill 命令。</li></ul>',43))])}const m=o(n,[["render",a],["__file","6. process-ctrl.html.vue"]]),h=JSON.parse(`{"path":"/se/devops/unix/basic/6.%20process-ctrl.html","title":"6. 进程控制","lang":"en-US","frontmatter":{"description":"6. 进程控制 fork 复制当前进程，状态和 pc 也完全一样，执行 fork 后面部分的程序 换代码、execute 操作 Linux 里面子进程的创建 cow 写时复制 redis 持久化：fork 下来复制，然后主线程的修改，写时复制 进程死亡的方式 自行死亡 执行完毕，如，c 的 main 函数，返回值是进程返回值，返回给父进程看 被杀死 k...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/6.%20process-ctrl.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"6. 进程控制"}],["meta",{"property":"og:description","content":"6. 进程控制 fork 复制当前进程，状态和 pc 也完全一样，执行 fork 后面部分的程序 换代码、execute 操作 Linux 里面子进程的创建 cow 写时复制 redis 持久化：fork 下来复制，然后主线程的修改，写时复制 进程死亡的方式 自行死亡 执行完毕，如，c 的 main 函数，返回值是进程返回值，返回给父进程看 被杀死 k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6. 进程控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"进程死亡的方式","slug":"进程死亡的方式","link":"#进程死亡的方式","children":[]},{"level":2,"title":"多进程编程","slug":"多进程编程","link":"#多进程编程","children":[]},{"level":2,"title":"信号","slug":"信号","link":"#信号","children":[{"level":3,"title":"前后台调度","slug":"前后台调度","link":"#前后台调度","children":[]}]}],"git":{"createdTime":1669446166000,"updatedTime":1715153702000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":5},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1350},"filePathRelative":"se/devops/unix/basic/6. process-ctrl.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>fork 复制当前进程，状态和 pc 也完全一样，执行 fork 后面部分的程序</p>\\n<p>换代码、execute 操作</p>\\n<p>Linux 里面子进程的创建</p>\\n<p>cow 写时复制</p>\\n<p>redis 持久化：fork 下来复制，然后主线程的修改，写时复制</p>\\n<h2>进程死亡的方式</h2>\\n<ul>\\n<li>\\n<p>自行死亡</p>\\n<p>执行完毕，如，c 的 main 函数，返回值是进程返回值，返回给父进程看</p>\\n</li>\\n<li>\\n<p>被杀死</p>\\n<p>kill，软中断</p>\\n<p>kill -l 可以看到所有的信号，谁杀的、怎么死的</p>\\n<p>kill -9 xxx</p>\\n</li>\\n<li>\\n<p>出错没了，call down</p>\\n</li>\\n</ul>","autoDesc":true}`);export{m as comp,h as data};
