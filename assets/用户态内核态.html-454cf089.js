const e=JSON.parse(`{"key":"v-939bf7f4","path":"/cs/basic/os/%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81.html","title":"内核态用户态","lang":"en-US","frontmatter":{"description":"内核态用户态 一、操作系统需要两种CPU状态 内核态（Kernel Mode）：运行操作系统程序，操作硬件 用户态（User Mode）：运行用户程序 二、指令划分 特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O 内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机 非特权指令：用户程序可以使用的指令。 举例：控制转移 算数运算 取数指令 访管指令（使用户程序从用户态陷入内核态） 三、特权级别 特权环：R0、R1、R2和R3","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内核态用户态"}],["meta",{"property":"og:description","content":"内核态用户态 一、操作系统需要两种CPU状态 内核态（Kernel Mode）：运行操作系统程序，操作硬件 用户态（User Mode）：运行用户程序 二、指令划分 特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O 内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机 非特权指令：用户程序可以使用的指令。 举例：控制转移 算数运算 取数指令 访管指令（使用户程序从用户态陷入内核态） 三、特权级别 特权环：R0、R1、R2和R3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-03T03:29:06.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-04-03T03:29:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内核态用户态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-03T03:29:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"一、操作系统需要两种CPU状态","slug":"一、操作系统需要两种cpu状态","link":"#一、操作系统需要两种cpu状态","children":[]},{"level":2,"title":"二、指令划分","slug":"二、指令划分","link":"#二、指令划分","children":[]},{"level":2,"title":"三、特权级别","slug":"三、特权级别","link":"#三、特权级别","children":[]},{"level":2,"title":"四、CPU状态之间的转换","slug":"四、cpu状态之间的转换","link":"#四、cpu状态之间的转换","children":[]},{"level":2,"title":"五、内核态与用户态的区别","slug":"五、内核态与用户态的区别","link":"#五、内核态与用户态的区别","children":[]},{"level":2,"title":"六、通常来说，以下三种情况会导致用户态到内核态的切换","slug":"六、通常来说-以下三种情况会导致用户态到内核态的切换","link":"#六、通常来说-以下三种情况会导致用户态到内核态的切换","children":[{"level":3,"title":"1、系统调用","slug":"_1、系统调用","link":"#_1、系统调用","children":[]},{"level":3,"title":"2、异常","slug":"_2、异常","link":"#_2、异常","children":[]},{"level":3,"title":"3、外围设备的中断","slug":"_3、外围设备的中断","link":"#_3、外围设备的中断","children":[]}]}],"git":{"createdTime":1680492546000,"updatedTime":1680492546000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1050},"filePathRelative":"cs/basic/os/用户态内核态.md","localizedDate":"April 3, 2023","excerpt":"<h1> 内核态用户态</h1>\\n<h2> 一、操作系统需要两种CPU状态</h2>\\n<p>内核态（Kernel Mode）：运行操作系统程序，操作硬件</p>\\n<p>用户态（User Mode）：运行用户程序</p>\\n<h2> 二、指令划分</h2>\\n<p>特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O 内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机</p>\\n<p>非特权指令：用户程序可以使用的指令。 举例：控制转移 算数运算 取数指令 <strong>访管指令</strong>（使用户程序从用户态陷入内核态）</p>\\n<h2> 三、特权级别</h2>\\n<p><strong>特权环：R0、R1、R2和R3</strong></p>","autoDesc":true}`);export{e as data};
