import{_ as p,V as a,W as u,$ as i,Z as e,E as r}from"./framework-e5d7a6b2.js";const d={},h=e('<h1 id="前端设计" tabindex="-1"><a class="header-anchor" href="#前端设计" aria-hidden="true">#</a> 前端设计</h1><h2 id="界面设计" tabindex="-1"><a class="header-anchor" href="#界面设计" aria-hidden="true">#</a> 界面设计</h2><ul><li>用户和骑手优先保证移动端的界面，vant</li><li>管理界面只需要电脑端，arco design</li></ul><h3 id="用户端" tabindex="-1"><a class="header-anchor" href="#用户端" aria-hidden="true">#</a> 用户端</h3><h4 id="登录注册-刘" tabindex="-1"><a class="header-anchor" href="#登录注册-刘" aria-hidden="true">#</a> 登录注册（刘）</h4><ul><li>登录</li><li>账号密码登录</li><li>邮箱登录</li><li>注册 <ul><li>邮箱注册</li></ul></li></ul><h4 id="订单管理-我的订单" tabindex="-1"><a class="header-anchor" href="#订单管理-我的订单" aria-hidden="true">#</a> 订单管理/我的订单</h4><ul><li>下单（deng）</li><li>所有订单，查看已有的所有，这里可以（<strong>雷神</strong>） <ul><li>搜索</li><li>无限下拉，分页</li></ul></li><li>订单详情（<strong>雷神</strong>） <ul><li>订单信息（收货地址、收货人、发送时间、预计达到时间</li><li>订单状态</li><li>地图（假的，现实再那个城市）</li></ul></li></ul><h4 id="购物管理-冷" tabindex="-1"><a class="header-anchor" href="#购物管理-冷" aria-hidden="true">#</a> 购物管理（冷）</h4><ul><li>购物车管理 <ul><li>增加/删除/查商品入购物车</li><li>修改数量</li></ul></li><li>商品收藏，可以不做 <ul><li>增删改查</li></ul></li></ul><h4 id="地址管理-deng" tabindex="-1"><a class="header-anchor" href="#地址管理-deng" aria-hidden="true">#</a> 地址管理（deng）</h4><ul><li>地址的增删改查</li><li>设为默认</li></ul><h4 id="账户管理-刘" tabindex="-1"><a class="header-anchor" href="#账户管理-刘" aria-hidden="true">#</a> 账户管理（刘）</h4><ul><li>修改头像</li><li>修改资料</li><li>修改密码</li></ul><h4 id="首页-刘大维" tabindex="-1"><a class="header-anchor" href="#首页-刘大维" aria-hidden="true">#</a> 首页（刘大维）</h4><ul><li>上面广告</li><li>下面推荐商品列表</li><li>首页商品分类</li></ul><h4 id="商品-刘大维" tabindex="-1"><a class="header-anchor" href="#商品-刘大维" aria-hidden="true">#</a> 商品（刘大维）</h4><ul><li>商品搜索</li><li>商品详情</li></ul><h4 id="分类-冷" tabindex="-1"><a class="header-anchor" href="#分类-冷" aria-hidden="true">#</a> 分类（冷）</h4><p>获取所有商品分类</p><h4 id="搜索-刘大维" tabindex="-1"><a class="header-anchor" href="#搜索-刘大维" aria-hidden="true">#</a> 搜索（刘大维）</h4><p>根据什么排序，名称、类别</p><h3 id="配送端" tabindex="-1"><a class="header-anchor" href="#配送端" aria-hidden="true">#</a> 配送端</h3><ul><li>通知 <ul><li>到货通知</li><li>退货通知</li><li>催件通知</li></ul></li><li>我的任务单（yu）</li></ul><h3 id="管理端" tabindex="-1"><a class="header-anchor" href="#管理端" aria-hidden="true">#</a> 管理端</h3><p>按角色有不同</p><ul><li><p>调度管理员</p><ul><li><p>操作</p><ul><li><p>送货</p><ul><li>手动调度：订单</li></ul></li><li><p>退货</p><ul><li>手动调度：订单</li></ul></li></ul></li><li><p>页面</p><ul><li><p>订单列表</p><ul><li>手动调度，在商品详情页面里面，已支付和已调度 <ul><li>修改分站</li><li>修改物流公司</li><li>修改订单地址</li></ul></li></ul></li><li><p>库房商品查询</p><ul><li><p>商品库存列表，SKU_WARE</p><p>区域库房名称搜索框</p></li></ul></li><li><p>调拨单管理</p><p>调拨单的查看</p></li></ul></li></ul></li><li><p>系统管理员</p><ul><li>区域中心库房crud</li><li>权限管理 <ul><li>角色</li><li>权限</li></ul></li></ul></li><li><p>分站管理员</p><ul><li><p>操作</p><ul><li><p>送货</p><ul><li>入库：分发单</li><li>分配：给配送员派任务</li><li>打印：任务单（已分配的任务单）</li><li>录入：回执任务单</li></ul></li><li><p>退货</p><ul><li>退货入站</li><li>退货退回</li></ul></li></ul></li><li><p>页面</p><ul><li>任务单管理，分配、打印、回执录入</li><li>配送员列表</li><li>分发单列表，入库放这</li><li>库存单列表，</li><li>签收单列表</li><li>调拨单管理，退货退回</li></ul></li><li><p>有订单列表，</p><ul><li>安排配送员</li><li>退货确认xx</li></ul></li></ul></li><li><p>库房管理员（区域中心库房）</p><ul><li><p>补货</p></li><li><p>运输公司</p></li><li><p>操作</p><ul><li><p>购货</p><ul><li>入库：购货单入库</li></ul></li><li><p>送货</p><ul><li>出库：调拨单</li><li>打印：分发单</li></ul></li><li><p>退货</p><ul><li>退货入库</li></ul></li></ul></li><li><p>页面</p><ul><li>运输公司管理，crud</li><li>分发单管理，退货入库、打印</li><li>库存单管理：打印</li><li>调拨单管理：出库</li><li>购货单管理：购货入库</li><li>分站管理：crud下属分站库房</li><li>库存管理：相对于手动补货</li></ul></li></ul></li><li><p>商品管理员</p><ul><li><p>页面</p><ul><li><p>商品分类管理</p><ul><li><p>CRUD</p><p>C、U涉及到图片上传</p></li></ul></li><li><p>平台属性管理</p><p>attr_group，attr</p><ul><li>CRUD</li><li>详情：看到这个平台属性的所有属性</li></ul></li><li><p>商品管理</p><p>商品的新建：C基本信息、平台属性、商品图片、商品海报</p></li></ul></li></ul></li><li><p>进货管理员</p><ul><li><p>操作</p><ul><li>退货供应商</li><li>进货供应商</li></ul></li><li><p>页面</p><ul><li><p>供应商管理</p><p>crud</p></li><li><p>进货管理</p><p>做成分步表单/或都是下拉搜索框：选择库房、选择商品、选择数量</p></li><li><p>退货管理</p><p>退货给供应商，</p><p>商品库存列表，SKU_WARE，点击退货，选择退的数量</p></li></ul></li></ul></li><li><p>库房管理员</p><ul><li><p>操作</p></li><li><p>页面</p><ul><li><p>区域管理</p><ul><li>区域管理</li><li>区域与库房关联</li></ul></li><li><p>中心库房管理</p><p>CRUD</p><p>详情：</p><ul><li><p>弹出 modal 库房储备设置</p><p>SKU_WARE 列表</p></li><li><p>改库房名字、库房的管理员</p></li></ul></li><li><p>分站库房管理</p><p>CRUD</p></li><li><p>出入库/库存单查询</p><p>库存单的列表，只能查询</p></li></ul></li></ul></li><li><p>统计分析</p><ul><li>页面 <ul><li>订购排行榜，各个商品订购、退货、好评情况，可以按月按时间统计</li><li>分站配送情况、</li><li>客户满意度分析</li><li>财务分析</li></ul></li></ul></li><li><p>财务管理员</p><p>页面</p><ul><li>缴费查询：</li><li>发票管理：（未领用、领用、）作废</li><li>供应商结算：</li><li>配送员工作量管理</li><li>可视化 <ul><li>缴费查询：</li><li>配送员工作量管理</li></ul></li></ul></li><li><p>配送管理员</p><ul><li><p>操作</p><ul><li><p>购货</p><ul><li>入库：购货单入库</li></ul></li><li><p>送货</p><ul><li>出库：调拨单</li><li>打印：分发单</li></ul></li><li><p>退货</p><ul><li>退货给供应商</li></ul></li></ul></li><li><p>页面</p><ul><li><p>进货管理</p><ul><li><p>供应商管理</p></li><li><p>进货管理</p><p>做成分步表单/或都是下拉搜索框：选择库房、选择商品、选择数量</p></li><li></li></ul></li></ul></li><li><p>退货</p></li><li><p>商品上架/之类的crud</p><ul><li></li></ul></li><li><p>供应商管理</p><ul><li></li></ul></li></ul></li></ul><h4 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h4><h4 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h4><p>调度中心人工介入</p><h4 id="数据统计" tabindex="-1"><a class="header-anchor" href="#数据统计" aria-hidden="true">#</a> 数据统计</h4><ul><li><p>人员管理员</p><ul><li>权限</li><li>会员统计</li><li>工作量统计</li></ul></li><li><p>调度管理员</p><ul><li>运输公司</li><li>分站</li></ul></li><li><p>商品管理员</p><ul><li>商品统计</li></ul></li><li><p>库房管理员</p><ul><li>中心库房</li><li>分站库房</li></ul></li><li><p>中心库房</p><ul><li>库存量变动</li></ul></li><li><p>分站管理</p><ul><li>工作量统计</li><li>各种单的统计</li></ul></li><li><p>财务</p><ul><li>发票</li><li>订单统计</li></ul></li></ul><h2 id="分工" tabindex="-1"><a class="header-anchor" href="#分工" aria-hidden="true">#</a> 分工</h2><ul><li><h2 id="增改-分页查询" tabindex="-1"><a class="header-anchor" href="#增改-分页查询" aria-hidden="true">#</a> 增改（分页查询）</h2></li><li><h2 id="删查" tabindex="-1"><a class="header-anchor" href="#删查" aria-hidden="true">#</a> 删查</h2></li><li>接口定义连调</li><li>数据可视化</li><li>移动端</li></ul><p>单</p><ul><li>分发单</li><li>购货单</li><li>调拨单</li><li>配送单</li></ul>',36);function n(t,c){const l=r("Mermaid");return a(),u("div",null,[h,i(l,{id:"mermaid-1167",code:"eJxLL0osyFAIceFSAALH6Bf7Jj9tXfp8yopnHdufTuh9ur7t+YLGWAVdXTsFp+qXq3perG+ESD7Zv/BZ4/pasDYnkHzNs44JT7vm1yg4Rz+fMh/ICcnPTs2LBStwBhvgEv1i/5Sns+chGwCRdwLpf7pk44stS2sUXKOf9U94vmTXyykzX6yHKnAFG+DIBQDPwFHR"}),i(l,{id:"mermaid-1168",code:"eJxLL0osyFAIceFSAALH6JcNnc+6Vz6d2vZ0cmOsgq6unYITVOzZlG0vtix/OmfD07kNsWDVTmB5Z7j8+ie7ZzybtvPpnn6IvDNY3qX62eKGZ/OXPt01+enaGbVgGRegjAJE4Glr64ttm8EqXaOfdS5+2t4PkYCY4QqWcYt+PmX+s44JL9Yteto7FSLjBpZxjwZZumYfRAzJ3Cc7emHmekQ/65/wfMmu53t2AX0AUekBlnHkAgC51XMY"})])}const o=p(d,[["render",n],["__file","前端设计.html.vue"]]);export{o as default};
