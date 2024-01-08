const t=JSON.parse(`{"key":"v-192873bd","path":"/cs/basic/os/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.html","title":"内存管理","lang":"en-US","frontmatter":{"description":"内存管理 虚拟内存、共享内存、常驻内存 top 命令可以看到如下参数 VIRT： 1、进程“需要的”虚拟内存大小，包括进程使用的库、代码、数据，以及malloc、new分配的堆空间和分配的栈空间等； 2、假如进程新申请10MB的内存，但实际只使用了1MB，那么它会增长10MB，而不是实际的1MB使用量。 3、VIRT = SWAP + RES RES： 1、进程当前使用的内存大小，包括使用中的malloc、new分配的堆空间和分配的栈空间，但不包括swap out量；","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内存管理"}],["meta",{"property":"og:description","content":"内存管理 虚拟内存、共享内存、常驻内存 top 命令可以看到如下参数 VIRT： 1、进程“需要的”虚拟内存大小，包括进程使用的库、代码、数据，以及malloc、new分配的堆空间和分配的栈空间等； 2、假如进程新申请10MB的内存，但实际只使用了1MB，那么它会增长10MB，而不是实际的1MB使用量。 3、VIRT = SWAP + RES RES： 1、进程当前使用的内存大小，包括使用中的malloc、new分配的堆空间和分配的栈空间，但不包括swap out量；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-06T03:47:09.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-04-06T03:47:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-06T03:47:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1680752829000,"updatedTime":1680752829000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"cs/basic/os/内存管理.md","localizedDate":"April 6, 2023","excerpt":"<h1> 内存管理</h1>\\n<p>虚拟内存、共享内存、常驻内存</p>\\n<p>top 命令可以看到如下参数</p>\\n<p>VIRT：</p>\\n<p>1、进程“需要的”虚拟内存大小，包括进程使用的库、代码、数据，以及malloc、new分配的堆空间和分配的栈空间等；</p>\\n<p>2、假如进程新申请10MB的内存，但实际只使用了1MB，那么它会增长10MB，而不是实际的1MB使用量。</p>\\n<p>3、VIRT = SWAP + RES</p>\\n<p>RES：</p>\\n<p>1、进程当前使用的内存大小，包括使用中的malloc、new分配的堆空间和分配的栈空间，但不包括swap out量；</p>","autoDesc":true}`);export{t as data};
