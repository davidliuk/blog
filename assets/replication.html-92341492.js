import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,d as l}from"./app-9107e99b.js";const r={},s=l('<h1 id="replication-主从复制" tabindex="-1"><a class="header-anchor" href="#replication-主从复制" aria-hidden="true">#</a> Replication：主从复制</h1><p>架构图</p><h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2><p>主负责写，从负责读</p><p>redis 读多写少，所以这样比较有效</p><p>就是主从复制，master以写为主，Slave以读为主</p><p>当master数据变化的时候，自动将新的数据异步同步到其它slave数据库</p><h2 id="能干嘛" tabindex="-1"><a class="header-anchor" href="#能干嘛" aria-hidden="true">#</a> 能干嘛</h2><ul><li>读写分离</li><li>容灾恢复</li><li>数据备份</li><li>水平扩容支持高并发</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>配从库不配主库</p><p>权限细节，重要</p><p>基本操作命令</p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><ul><li>info replication 可以查看复制节点的主从关系和</li><li>replicaof 主库IP 主库端口 （主从复制</li><li>slaveof 主库IP 主库端口 （改换门庭</li><li>slaveof no one 不做从库 （自立为王</li></ul><h2 id="复制原理-工作流程" tabindex="-1"><a class="header-anchor" href="#复制原理-工作流程" aria-hidden="true">#</a> 复制原理/工作流程</h2><ul><li><p>slave启动，同步初请</p><ul><li>slave启动成功连接到master后会发送一个sync命令</li><li>slave首次全新连接master,一次完全同步（全量复制）将被自动执行，slave自身原有数据会被master数据覆盖清</li></ul></li><li><p>首次连接，全量复制</p><ul><li>master节点收到sync命令后会开始在后台保存快照（即RDB持久化，主从复制时会触发RDB),同时收集所有接收到的用于修改数据集命令缓存起来，master节点执行RDB持久化完后，master将rdb快照文件和所有缓存的命令发送到所有slave,以完成一次完全同步</li><li>而slave服务在接收到数据库文件数据后，将其存盘并加载到内存中，从而完成复制初始化</li></ul></li><li><p>心跳持续，保持通信</p><p><code>repl-ping-replica-period 10</code>每10s发一次心跳包</p></li><li><p>进入平稳，增量复制</p><p>Master继续将新的所有收集到的修改命令自动依次传给slave,完成同步</p></li><li><p>从机下线，重连续传</p><p>master会检查backlog里面的offset，master和slave都会保存一个复制的offset还有一个masterId，offset是保存在backlog中的。Master只会把已经复制的offset后面的数据复制给Slave，类似断点续传</p></li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><p>复制延迟，信号衰减</p><p>matser挂了怎么办</p><ul><li>默认情况下，不会在slave节点中自动重选一个master</li><li>那每次都要人工干预？希望可以无人值守自动更换</li></ul>',21),t=[s];function p(d,h){return a(),i("div",null,t)}const c=e(r,[["render",p],["__file","replication.html.vue"]]);export{c as default};
