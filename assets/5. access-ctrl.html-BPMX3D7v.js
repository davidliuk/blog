import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as t}from"./app-Cv-jMnVl.js";const c={};function r(p,e){return t(),i("div",null,e[0]||(e[0]=[o('<h1 id="_5-访问控制" tabindex="-1"><a class="header-anchor" href="#_5-访问控制"><span>5. 访问控制</span></a></h1><p>文件权限：rwx</p><ul><li>r: read</li><li>w: write</li><li>x: executable</li></ul><p>每 3 位是一个组的权限：所有者（user）、所属组（group）和其他用户（others） 三个组的控制权限</p><p>RBAC：role based access control</p><p>SELinux：安全强化，模型：least-privilege，什么都改不了就安全</p><p>access control list (ACL) 访问控制列表</p><p>Real-World Access Control</p><h3 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>sudo</span></a></h3><p>sudo</p><p>visudo 指令可以做检查，语法错了不给存</p><blockquote><p>Vi sudo 来给用户配置一些命令超级用户权限</p></blockquote><p>Linux 提供了多种访问控制机制来保护系统和数据的安全。以下是一些常见的 Linux 访问控制机制：</p><ol><li><p>用户和组权限：</p><ul><li>Linux 使用文件和目录的所有者、组和其他用户的权限位来控制对文件和目录的访问。</li><li><code>chmod</code>命令用于更改文件和目录的权限。</li><li><code>chown</code>和<code>chgrp</code>命令用于更改文件和目录的所有者和组。</li></ul></li><li><p>文件系统权限：</p><ul><li>Linux 文件系统（如 ext4）支持权限控制，可以设置文件和目录的访问权限。</li><li><code>chmod</code>命令用于更改文件和目录的权限。</li><li><code>chown</code>和<code>chgrp</code>命令用于更改文件和目录的所有者和组。</li></ul></li><li><p>访问控制列表（ACL）：</p><ul><li>ACL 是一种高级权限机制，允许更细粒度地控制文件和目录的访问。</li><li>使用<code>setfacl</code>命令可以为文件和目录设置 ACL。</li></ul></li><li><p>sudo：</p><ul><li><code>sudo</code>（superuser do）允许普通用户以特权用户（通常是 root）的身份执行特定的命令。</li><li>系统管理员可以配置<code>sudo</code>以授予或限制用户的特权访问。</li></ul></li><li><p>SELinux：</p><ul><li>SELinux（Security-Enhanced Linux）是 Linux 内核的一个安全子系统，提供了强制访问控制（MAC）机制。</li><li>SELinux 通过为每个进程和文件分配安全上下文来实施访问策略。</li></ul></li><li><p>防火墙：</p><ul><li>Linux 中的防火墙（如 iptables 或 nftables）可用于控制网络访问。</li><li>配置防火墙规则可以限制特定端口、IP 地址或协议的访问。</li></ul></li></ol><p>这些是 Linux 中常见的访问控制机制，它们可以根据需求和安全要求进行配置和使用。</p><h3 id="用户和组权限" tabindex="-1"><a class="header-anchor" href="#用户和组权限"><span>用户和组权限</span></a></h3><p>在 Linux 系统中，用户和组权限是一种基本的访问控制机制，用于控制对文件和目录的访问。每个文件和目录都有一个所有者和一个所属组，并且可以为所有者、所属组和其他用户分别设置不同的权限。</p><p>以下是用户和组权限的基本概念和常用命令：</p><ol><li><p>文件和目录权限：</p><ul><li>Linux 中的文件和目录权限分为三个类别：所有者（user）、所属组（group）和其他用户（others）。</li><li>权限位包括读取（r）、写入（w）和执行（x）权限。</li><li><code>ls -l</code>命令可以显示文件和目录的权限。</li></ul></li><li><p>更改权限：</p><ul><li><code>chmod</code>命令用于更改文件和目录的权限。</li><li>使用数字表示法或符号表示法来指定权限的变更。</li><li>例如，<code>chmod u+r file.txt</code>将给文件所有者添加读取权限，<code>chmod g-w file.txt</code>将从文件所属组中移除写入权限。</li></ul></li><li><p>更改所有者和组：</p><ul><li><code>chown</code>命令用于更改文件和目录的所有者。</li><li><code>chgrp</code>命令用于更改文件和目录的所属组。</li><li>例如，<code>chown user1 file.txt</code>将文件的所有者更改为 user1，<code>chgrp group1 file.txt</code>将文件的所属组更改为 group1。</li></ul></li><li><p>默认权限和 umask：</p><ul><li>默认情况下，新创建的文件和目录会继承创建者的默认权限。</li><li><code>umask</code>命令用于设置默认权限掩码，以确定新创建的文件和目录的默认权限。</li><li><code>umask 022</code>将设置默认权限掩码为 022，这意味着新创建的文件所有者具有读写权限，而所属组和其他用户只有读权限。</li></ul></li></ol><p>通过适当设置用户和组权限，可以控制谁可以读取、写入和执行文件，以及限制对敏感数据和系统文件的访问。</p>',20)]))}const d=l(c,[["render",r],["__file","5. access-ctrl.html.vue"]]),n=JSON.parse(`{"path":"/se/devops/unix/basic/5.%20access-ctrl.html","title":"5. 访问控制","lang":"en-US","frontmatter":{"description":"5. 访问控制 文件权限：rwx r: read w: write x: executable 每 3 位是一个组的权限：所有者（user）、所属组（group）和其他用户（others） 三个组的控制权限 RBAC：role based access control SELinux：安全强化，模型：least-privilege，什么都改不了就安全 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/5.%20access-ctrl.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"5. 访问控制"}],["meta",{"property":"og:description","content":"5. 访问控制 文件权限：rwx r: read w: write x: executable 每 3 位是一个组的权限：所有者（user）、所属组（group）和其他用户（others） 三个组的控制权限 RBAC：role based access control SELinux：安全强化，模型：least-privilege，什么都改不了就安全 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-21T07:49:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T07:49:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5. 访问控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T07:49:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"sudo","slug":"sudo","link":"#sudo","children":[]},{"level":3,"title":"用户和组权限","slug":"用户和组权限","link":"#用户和组权限","children":[]}],"git":{"createdTime":1669446166000,"updatedTime":1695282571000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":5},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.4,"words":1021},"filePathRelative":"se/devops/unix/basic/5. access-ctrl.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>文件权限：rwx</p>\\n<ul>\\n<li>r: read</li>\\n<li>w: write</li>\\n<li>x: executable</li>\\n</ul>\\n<p>每 3 位是一个组的权限：所有者（user）、所属组（group）和其他用户（others） 三个组的控制权限</p>\\n<p>RBAC：role based access control</p>\\n<p>SELinux：安全强化，模型：least-privilege，什么都改不了就安全</p>\\n<p>access control list (ACL) 访问控制列表</p>\\n<p>Real-World Access Control</p>","autoDesc":true}`);export{d as comp,n as data};
