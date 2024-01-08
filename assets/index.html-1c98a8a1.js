import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-9107e99b.js";const i={},c=e(`<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h1><p>Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。</p><p>Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用SON作为文档序列化的格式，比如下面这条用户数据：</p><p>10.1.2索引(Index)</p><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。</p><p>能搜索的数据必须索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。</p><p>Elasticsearch索引的精髓：一切设计都是为了提高搜索的性能。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create es-net

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> elasticsearch <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /appdata/es/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /appdata/es/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
    <span class="token parameter variable">--privileged</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> es-net <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
	elasticsearch:7.8.0

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> kibana <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> es-net <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601  <span class="token punctuation">\\</span>
    kibana:7.8.0

<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> kibana

<span class="token comment">#进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kibana /bin/bash

<span class="token comment">#进入配置文件目录</span>
<span class="token builtin class-name">cd</span> /usr/share/kibana/config

<span class="token comment">#编辑文件kibana.yml</span>
<span class="token function">vi</span> kibana.yml

<span class="token comment">#在最后一行添加如下配置</span>
i18n.locale: zh-CN

<span class="token comment">#保存退出</span>
<span class="token builtin class-name">exit</span>

<span class="token comment">#并重启容器</span>
<span class="token function">docker</span> restart kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p><ul><li><code>--network itmentu-net</code> ：加入一个名为<code>itmentu-net</code>的网络中，与<code>elasticsearch</code>在同一个网络中</li><li><code>-e ELASTICSEARCH_HOSTS=http://192.168.211.130:9200&quot;</code>：设置<code>elasticsearch</code>的地址，因为<code>kibana</code>已经与<code>elasticsearch</code>在一个网络，因此可以用容器名直接访问<code>elasticsearch</code>，也可以写IP地址实现访问。</li><li><code>-p 5601:5601</code>：端口映射配置</li></ul>`,11),l=[c];function t(p,r){return a(),s("div",null,l)}const u=n(i,[["render",t],["__file","index.html.vue"]]);export{u as default};
