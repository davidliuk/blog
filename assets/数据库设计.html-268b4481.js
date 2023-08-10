import{_ as i,V as l,W as e,Z as d}from"./framework-e5d7a6b2.js";const r={},t=d('<h1 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h1><h3 id="用户相关" tabindex="-1"><a class="header-anchor" href="#用户相关" aria-hidden="true">#</a> 用户相关</h3><p>user, 用户</p><ul><li>id, ID</li><li>username, 用户名</li><li>password, 密码</li><li>name, 姓名</li><li>id_card, 身份证号</li><li>employer, 工作单位名称</li><li>phone, 移动电话</li><li>ware_id, 仓库id（0代表普通用户，配送员为具体分站id）</li><li>email, 电子邮箱地址</li><li>create_time, 创建时间</li><li>update_time, 更新时间</li><li>Is_deleted, 删除标记（0:不可用，1:可用）</li></ul><p>role 角色</p><ul><li>id, ID</li><li>role_name, 角色名称</li><li>role_code, 角色名称</li><li>description, 角色描述</li><li>create_time, 创建时间</li><li>update_time, 更新时间</li><li>Is_deleted, 删除标记（0:不可用，1:可用）</li></ul><p>perimission 权限</p><ul><li>id, ID</li><li>pid, 所属上级</li><li>name, 权限名称</li><li>description, 权限描述</li><li>create_time, 创建时间</li><li>update_time, 更新时间</li><li>Is_deleted, 删除标记（0:不可用，1:可用）</li></ul><p>user_role 用户-角色</p><ul><li>id, ID</li><li>user_id, 用户ID</li><li>role_id, 角色ID</li><li>create_time, 创建时间</li><li>update_time, 更新时间</li><li>Is_deleted, 删除标记（0:不可用，1:可用）</li></ul><p>role_permission 角色-权限</p><ul><li>id, ID</li><li>role_id, 角色ID</li><li>perimission_id, 权限ID</li><li>create_time, 创建时间</li><li>update_time, 更新时间</li><li>Is_deleted, 删除标记（0:不可用，1:可用）</li></ul><p>address 收货地址</p><ul><li>id, ID</li><li>user_id, 用户ID</li><li>name, 姓名</li><li>phone, 手机号</li><li>address, 地址</li><li>province, 省份</li><li>city, 城市</li><li>district, 区域</li><li>detailAddress, 详细地址</li><li>postcode, 邮编</li><li>longitude, 经度</li><li>latitude, 纬度</li><li>is_default, 是否为默认地址</li><li>create_date, 创建日期</li><li>update_date, 修改日期</li></ul><h3 id="库房相关" tabindex="-1"><a class="header-anchor" href="#库房相关" aria-hidden="true">#</a> 库房相关</h3><p>ware 分区中心库房</p><p>(regional_center_warehouse)</p><ul><li>id, ID</li><li>name, 名称</li><li>description, 描述</li><li>address, 地址</li><li>max_capacity, 最大容量</li><li>capacity, 当前容量</li></ul><p>substation 分站库房</p><ul><li>id, ID</li><li>description, 描述</li><li>name, 名称</li><li>address, 地址</li></ul><p>分站库房-配送员</p><ul><li>分站ID</li><li>用户ID</li><li>日期</li></ul><p>分区中心库房-商品</p><ul><li>分区中心库房ID</li><li>商品ID</li><li>库存数量</li><li>补货阈值</li></ul><h3 id="商品相关" tabindex="-1"><a class="header-anchor" href="#商品相关" aria-hidden="true">#</a> 商品相关</h3><p>commodity 商品</p><ul><li>id, ID</li><li>supplier_id, 供货商ID</li><li>name, 名称</li><li>description, 详情</li><li>unit, 单位</li><li>price, 价格/单位</li></ul><p>supplier 供货商</p><ul><li>name, 名称、</li><li>address, 地址、</li><li>liaison, 联系人、</li><li>phone, 联系电话、</li><li>bank, 开户行、</li><li>account, 银行帐号、</li><li><em>fax, 传真、</em></li><li>postcode, 邮编、</li><li>legal_person, 法人、</li><li>notes, 备注</li></ul><h3 id="信息流相关" tabindex="-1"><a class="header-anchor" href="#信息流相关" aria-hidden="true">#</a> 信息流相关</h3><ul><li><strong>order</strong> 订单</li><li><strong>Invoice</strong> 发票</li><li>receipt 签收单</li><li><strong>check order</strong> 分发/验货单（仓库-&gt;物流公司、分站）</li><li><strong>storage order</strong> 出/入库单</li><li><strong>Purchase order</strong> 购货单（供应商-&gt;仓库）</li><li><strong>transfer order</strong> 调拨单（仓库-&gt;分站）</li><li><strong>delivery order</strong> 配送任务单（配送-&gt;用户）</li></ul><p>订单</p><ul><li>ID，订单号</li><li>订购人ID，外键用户ID</li><li>收货人姓名</li><li>收货人地址</li><li>收货人手机号</li><li>商品ID</li><li>商品数量</li><li>计量单位</li><li>订单类型</li><li>订单状态</li><li>发票ID</li><li>日期</li></ul><p><strong>发票</strong></p><ul><li>ID，发票号、</li><li>批次、</li><li>订单ID、</li><li>金额（一个订单、一张发票）、</li><li>使用人姓名（即投递员）、</li><li>日期（录入日期）</li></ul><p><em>验货单</em>（与分发单内容相同，需要改名）DistributionBill改名为checkOrder</p><ul><li>ID</li><li>分站库房ID</li><li>出库时间</li><li>商品ID</li><li>商品数量</li><li>计量单位</li><li>。。。</li></ul><p>配送任务单</p><ul><li>ID</li><li>分站ID</li><li>配送员ID</li><li>收货人姓名</li><li>收货人地址</li><li>收货人手机号</li><li>任务类型（送货收款、送货、收款、换货、退货）</li><li>商品ID</li><li>商品数量</li><li>计量单位</li></ul><p>调拨单 Transfer Order</p><ul><li>ID，调拨单号、</li><li>出库中心库房ID、</li><li>入库分站库房ID、</li><li>商品ID、</li><li>商品数量、</li><li>状态（1未出库、2已出库、3已入库）</li><li>计划出库时间、</li><li>实际出库时间</li><li>计划入库时间、</li><li>实际入库时间</li><li>订单ID、</li><li>任务单ID</li><li>等信息</li></ul><p>购货单</p><ul><li>ID，购货单号、</li><li>ware_id, 区域中心库房ID</li><li>sku_id, 商品代码、</li><li>商品名称、</li><li>计量单位、</li><li>入库数量、</li><li>日期</li></ul><p>入/出库单 storage order</p><ul><li>ID、单号</li><li>区域中心库房ID、</li><li>关联单号（购货单/调拨单）</li><li>商品ID、</li><li>商品名称、</li><li>数量、</li><li>计量单位、</li><li>时间、</li><li>类型（出/入）</li><li>备注</li></ul><p>签收单 receipt</p><ul><li>ID，签收单号、</li><li>任务号、</li><li>客户姓名、</li><li>联系电话、</li><li>邮编、</li><li>送货地址、</li><li>送货日期、</li><li>送货要求、</li><li>送货分站、</li><li>分站地址、</li><li>分站电话、</li><li>是否要发票、</li><li>商品名称、</li><li>单价、</li><li>商品数量、</li><li>商品总价、</li><li>任务类型、</li><li>备注、</li><li>客户反馈、</li><li>客户签名</li></ul><p><em>缺货单</em>（暂时取消）</p><ul><li>id, ID</li><li>regional_id, 区域中心库房ID</li><li>commodity_id, 商品代码、</li><li>amount, 商品数量、</li><li>unit, 计量单位、</li><li>create_date, 生成日期</li></ul><p>任务单（取消，其实就是配送任务单）</p><ul><li>任务号、</li><li>客户姓名、</li><li>投递地址、</li><li>商品名称、</li><li>商品数量、</li><li>要求完成日期、</li><li>任务类型、</li><li>任务状态。</li></ul><p>说明：</p><p>任务类型：收款、送货收款、送货、退货、换货 任务状态：可调度、可分配、已分配、已领货、完成、失败等（详细的请参见任务状态转化表) 失败状态，做“退货”处理 任务号：可通过链接查询任务信息</p><p>根据“要求完成日期”、“任务类型”、“任务状态”、“选择分站”查询符合条件的任务单。结果包含以下内容：</p><p>订单号、任务单、客户姓名、投递地址、商品名称、商品数量、要求完成日期、任务类型、任务状态。</p><p>说明：</p><ul><li>任务类型：收款、送货收款、送货、退货、换货</li><li>任务状态：已调度、可分配、已分配、已领货、完成、失败（参见任务状态转化表）</li><li>任务单：可通过链接查询任务信息</li><li>订单号：可通过链接查询订单信息</li></ul><p>回执任务单</p><p>若任务为送货收款，回执内容包含如下：</p><p>任务单号、姓名、联系电话、任务分站、任务类型、送货地址、配送员、商品名称、单价、商品数量、总额、任务状态、发票号、客户满意度、备注</p><p>说明：</p><p>任务状态：任务实际的完成状态，包括：完成、部分完成、失败。</p><p>若任务是换货、送货，回执内容包含如下：</p><p>任务单号、姓名、联系电话、任务分站、任务类型、送货地址、商品名称、商品数量、任务状态、客户满意度、备注</p><p>若任务是退货、退款，回执内容包含如下：</p><p>任务单号、姓名、联系电话、任务分站、任务类型、退货地址、退货商品名称、退货数量、原销售价、任务状态、退货金额、客户满意度、备注</p><h2 id="分库设计" tabindex="-1"><a class="header-anchor" href="#分库设计" aria-hidden="true">#</a> 分库设计</h2><h3 id="acl" tabindex="-1"><a class="header-anchor" href="#acl" aria-hidden="true">#</a> acl</h3><p>admin(<u>id</u>, username, password, name, phone, ware_id, create_time, update_time, is_deleted)</p><p>role(<u>id</u>, role_name, role_code, remark, create_time, update_time, is_deleted)</p><p>permission(<u>id</u>, pid, name, name, to_code, type, status, create_time, update_time, is_deleted)</p><p>admin_role(<u>id</u>, role_id, admin_id, remark, create_time, update_time, is_deleted)</p><p>role_permission(<u>id</u>, role_id, permission_id, create_time, update_time, is_deleted)</p><p>admin_login_log(<u>id</u>, admin_id, ip, address, user_agent, create_time, update_time, is_deleted)</p><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><p>user(<u>id</u>, username, password, user_type, photo_url, nick_name, id_no, gender, phone, remark, open_id, union_id, is_new, create_time, update_time, is_deleted)</p><p>address(<u>id</u>, user_id, is_default, receiver_name, receiver_phone, receiver_post_code, receiver_province, receiver_city, receiver_district, receiver_adress, create_time, update_time, is_deleted)</p><p>courier_info(<u>id</u>, user_id, station_id, name, phone, id_no, id_no_url1, id_no_url2, create_time, update_time, is_deleted)</p><p>logistics(<u>id</u>, ware_id, name, phone, create_time, update_time, is_deleted)</p><p>user_login_log(<u>id</u>, user_id, ip, address, user_agent, create_time, update_time, is_deleted)</p><p>invoice(id, user_id, courier_id, order_id, total_amount, create_time, update_time, is_deleted)</p><ol><li>admin(id, username, password, name, phone, ware_id, create_time, update_time, is_deleted)</li><li>role(id, role_name, role_code, remark, create_time, update_time, is_deleted)</li><li>permission(id, pid, name, name, to_code, type, status, create_time, update_time, is_deleted)</li><li>admin_role(id, role_id, admin_id, remark, create_time, update_time, is_deleted)</li><li>role_permission(id, role_id, permission_id, create_time, update_time, is_deleted)</li><li>admin_login_log(id, admin_id, ip, address, user_agent, create_time, update_time, is_deleted)</li><li>user(id, username, password, user_type, photo_url, nick_name, id_no, gender, phone, remark, open_id, union_id, is_new, create_time, update_time, is_deleted)</li><li>address(id, user_id, is_default, receiver_name, receiver_phone, receiver_post_code, receiver_province, receiver_city, receiver_district, receiver_adress, create_time, update_time, is_deleted)</li><li>courier_info(id, user_id, station_id, name, phone, id_no, id_no_url1, id_no_url2, create_time, update_time, is_deleted)</li><li>logistics(id, ware_id, name, phone, create_time, update_time, is_deleted)</li><li>user_login_log(id, user_id, ip, address, user_agent, create_time, update_time, is_deleted)</li></ol>',82),a=[t];function _(s,p){return l(),e("div",null,a)}const n=i(r,[["render",_],["__file","数据库设计.html.vue"]]);export{n as default};
