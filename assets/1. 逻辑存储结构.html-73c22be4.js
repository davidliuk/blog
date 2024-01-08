const e=JSON.parse(`{"key":"v-074f1f5b","path":"/cs/database/mysql/engine/innodb-principle/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html","title":"逻辑存储结构","lang":"en-US","frontmatter":{"description":"逻辑存储结构 表空间 Tablespace 系统、独立、通用、撤销、临时表空间 段 Segment： 区 Extent：一个区 1M，64 个连续的页 页 Page：存储引擎磁盘管理的最小单元，每个页大小 16k 数据页、溢出页，Undo 页 行 Row","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/innodb-principle/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"逻辑存储结构"}],["meta",{"property":"og:description","content":"逻辑存储结构 表空间 Tablespace 系统、独立、通用、撤销、临时表空间 段 Segment： 区 Extent：一个区 1M，64 个连续的页 页 Page：存储引擎磁盘管理的最小单元，每个页大小 16k 数据页、溢出页，Undo 页 行 Row"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逻辑存储结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-11T10:23:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"表空间文件结构","slug":"表空间文件结构","link":"#表空间文件结构","children":[{"level":3,"title":"结构概述","slug":"结构概述","link":"#结构概述","children":[]}]},{"level":2,"title":"InnoDB 行格式","slug":"innodb-行格式","link":"#innodb-行格式","children":[{"level":3,"title":"种类","slug":"种类","link":"#种类","children":[]},{"level":3,"title":"COMPACT 行格式长什么样？","slug":"compact-行格式长什么样","link":"#compact-行格式长什么样","children":[]}]},{"level":2,"title":"InnoDB 数据页","slug":"innodb-数据页","link":"#innodb-数据页","children":[{"level":3,"title":"数据页结构","slug":"数据页结构","link":"#数据页结构","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1681208623000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":11.77,"words":3531},"filePathRelative":"cs/database/mysql/engine/innodb-principle/1. 逻辑存储结构.md","localizedDate":"January 3, 2023","excerpt":"<h1> 逻辑存储结构</h1>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 16.45.38.png\\" alt=\\"逻辑存储结构\\" loading=\\"lazy\\"></p>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png\\" alt=\\"img\\" loading=\\"lazy\\"></p>\\n<ul>\\n<li>\\n<p>表空间 Tablespace</p>\\n<p>系统、独立、通用、撤销、临时表空间</p>\\n</li>\\n<li>\\n<p>段 Segment：</p>\\n</li>\\n<li>\\n<p>区 Extent：一个区 1M，64 个连续的页</p>\\n</li>\\n<li>\\n<p>页 Page：存储引擎磁盘管理的最小单元，每个页大小 16k</p>\\n<p>数据页、溢出页，Undo 页</p>\\n</li>\\n<li>\\n<p>行 Row</p>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};
