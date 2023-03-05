import{_ as e,V as t,W as c,a0 as a}from"./framework-705b829b.js";const o={},r=a('<h1 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h1><ul><li><code>${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于静态文本替换，比如${driver}会被静态替换为<code>com.mysql.jdbc. Driver</code>。</li><li><code>#{}</code>是 sql 的参数占位符，MyBatis 会将 sql 中的<code>#{}</code>替换为? 号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的? 号占位符设置参数值，比如 ps.setInt(0, parameterValue)，<code>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 <code>param.getItem().getName()</code>。</li></ul>',2),d=[r];function s(l,i){return t(),c("div",null,d)}const _=e(o,[["render",s],["__file","参数.html.vue"]]);export{_ as default};
