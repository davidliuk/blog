const e=JSON.parse(`{"key":"v-896b5f1e","path":"/se/devops/unix/basic/8.%20Storage.html","title":"8. 存储","lang":"en-US","frontmatter":{"description":"8. 存储 Logical Volume Management (LVM) 这样有逻辑上的统一调配 服务器，跨盘文件传输非常慢， 通过虚拟化解决，逻辑上组合成一个硬盘，这样i节点就不用动了 扩容一般好，动态扩容，不需要停机 支持卷快照 一直在变，快照不太好做，但是LVM可以直接做到 在线备份，真备份不放在一块的，防止一起被烧毁 操作 pv：Physical Volume vg：volume group lv：logical volume","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/8.%20Storage.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"8. 存储"}],["meta",{"property":"og:description","content":"8. 存储 Logical Volume Management (LVM) 这样有逻辑上的统一调配 服务器，跨盘文件传输非常慢， 通过虚拟化解决，逻辑上组合成一个硬盘，这样i节点就不用动了 扩容一般好，动态扩容，不需要停机 支持卷快照 一直在变，快照不太好做，但是LVM可以直接做到 在线备份，真备份不放在一块的，防止一起被烧毁 操作 pv：Physical Volume vg：volume group lv：logical volume"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-02T12:45:28.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-02T12:45:28.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/devops/unix/basic/8.%20Storage.html"}]]},"headers":[{"level":3,"title":"Logical Volume Management (LVM)","slug":"logical-volume-management-lvm","link":"#logical-volume-management-lvm","children":[]},{"level":3,"title":"volume snapshot","slug":"volume-snapshot","link":"#volume-snapshot","children":[]}],"git":{"createdTime":1672663528000,"updatedTime":1672663528000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.2,"words":360},"localizedDate":"January 2, 2023","filePathRelative":"se/devops/unix/basic/8. Storage.md","excerpt":"<h1> 8. 存储</h1>\\n<h3> Logical Volume Management (LVM)</h3>\\n<p>这样有逻辑上的统一调配</p>\\n<p>服务器，跨盘文件传输非常慢，</p>\\n<p>通过虚拟化解决，逻辑上组合成一个硬盘，这样i节点就不用动了</p>\\n<p>扩容一般好，动态扩容，不需要停机</p>\\n<p>支持卷快照</p>\\n<p>一直在变，快照不太好做，但是LVM可以直接做到</p>\\n<p>在线备份，真备份不放在一块的，防止一起被烧毁</p>\\n<p>操作</p>\\n<p>pv：Physical Volume</p>\\n<p>vg：volume group</p>\\n<p>lv：logical volume</p>","autoDesc":true}`);export{e as data};
