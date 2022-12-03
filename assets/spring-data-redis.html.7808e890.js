import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,f as e}from"./app.b9f89aa5.js";const t={},i=e(`<h1 id="spring-data-redis" tabindex="-1"><a class="header-anchor" href="#spring-data-redis" aria-hidden="true">#</a> Spring Data Redis</h1><p>操作API分组</p><ul><li>opsForValue</li><li>opsForHash</li><li>opsForList</li><li>opsForSet</li><li>opsForZSet</li></ul><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>spring-data-redis

common-pool2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
	<span class="token key atrule">redis</span><span class="token punctuation">:</span>
		<span class="token key atrule">host</span><span class="token punctuation">:</span> xxx
		<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
		<span class="token key atrule">password</span><span class="token punctuation">:</span> xxx
		<span class="token key atrule">lettuce</span><span class="token punctuation">:</span>
			<span class="token key atrule">pool</span><span class="token punctuation">:</span> 
				<span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">8</span> <span class="token comment"># 最大连接</span>
				<span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">8</span> <span class="token comment"># 最大空闲连接</span>
				<span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># 最小空闲连接</span>
				<span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 连接等待时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-serializer" tabindex="-1"><a class="header-anchor" href="#redis-serializer" aria-hidden="true">#</a> Redis Serializer</h2><p>默认会当做Object去存</p><p>key一般用StringRedisSerializer</p><p>value一般用Jackson2</p><p>字节码额外存了class，占用额外空间，所以不要用</p><p>统一使用String，value也是，然后手动序列化，用ObjectMapper</p>`,13),l=[i];function p(r,c){return s(),n("div",null,l)}const u=a(t,[["render",p],["__file","spring-data-redis.html.vue"]]);export{u as default};
