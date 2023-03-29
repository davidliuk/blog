import{_ as i,V as e,W as a,Z as n}from"./framework-e5d7a6b2.js";const l={},r=n('<h1 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h1><p>兼顾高可靠性和高性能的通用存储引擎</p><p>MySQL5.5后默认InnoDB</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li>DML操作遵循ACID，支持事务</li><li>行级锁，提高并发访问性能</li><li>支持外键foreign key约束，保证数据的完整性和正确性</li></ol><h2 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h2><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3><ul><li><p>xxx.ibd: xxx是表名，innoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p><p>ibd是二进制文件，无法直接打开，但是可以输入指令ibd2sdi得到可查看的JSON</p></li><li><p>frm ，<strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p></li></ul><h3 id="逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构" aria-hidden="true">#</a> 逻辑存储结构</h3><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png" alt="img" loading="lazy"></p><ul><li>表空间Tablespace</li><li>段Segment</li><li>区Extent</li><li>页Page</li><li>行Row</li></ul>',11),d=[r];function t(h,o){return e(),a("div",null,d)}const c=i(l,[["render",t],["__file","2. InnoDB.html.vue"]]);export{c as default};
