import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as e,o as s}from"./app-ChU1gMRF.js";const c={};function r(l,a){return s(),i("div",null,a[0]||(a[0]=[e("h1",{id:"elasticsearch-集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-集群"},[e("span",null,"Elasticsearch 集群")])],-1),e("p",null,"Elasticsearch 集群是什么？有什么用？",-1),e("p",null,"单台 Elasticsearch 服务器负载能力和存储能力有限，很多时候通过增加服务器配置也没办法满足我们的要求。并且，单个 Elasticsearch 节点会存在单点风险，没有做到高可用。为此，我们需要搭建 Elasticsearch 集群。",-1),e("p",null,"Elasticsearch 集群说白了就是多个 Elasticsearch 节点的集合，这些节点共同协作，一起提供服务，这样就可以解决单台 Elasticsearch 服务器无法处理的搜索需求和数据存储需求。出于高可用方面的考虑，集群中节点数量建议 3 个以上，并且其中至少两个节点不是仅投票主节点（后文会介绍到）。",-1)]))}const p=t(c,[["render",r],["__file","availability.html.vue"]]),h=JSON.parse(`{"path":"/cs/middleware/es/availability.html","title":"Elasticsearch 集群","lang":"en-US","frontmatter":{"description":"Elasticsearch 集群 Elasticsearch 集群是什么？有什么用？ 单台 Elasticsearch 服务器负载能力和存储能力有限，很多时候通过增加服务器配置也没办法满足我们的要求。并且，单个 Elasticsearch 节点会存在单点风险，没有做到高可用。为此，我们需要搭建 Elasticsearch 集群。 Elasticsear...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/es/availability.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Elasticsearch 集群"}],["meta",{"property":"og:description","content":"Elasticsearch 集群 Elasticsearch 集群是什么？有什么用？ 单台 Elasticsearch 服务器负载能力和存储能力有限，很多时候通过增加服务器配置也没办法满足我们的要求。并且，单个 Elasticsearch 节点会存在单点风险，没有做到高可用。为此，我们需要搭建 Elasticsearch 集群。 Elasticsear..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244781000,"updatedTime":1732244781000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"cs/middleware/es/availability.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>Elasticsearch 集群是什么？有什么用？</p>\\n<p>单台 Elasticsearch 服务器负载能力和存储能力有限，很多时候通过增加服务器配置也没办法满足我们的要求。并且，单个 Elasticsearch 节点会存在单点风险，没有做到高可用。为此，我们需要搭建 Elasticsearch 集群。</p>\\n<p>Elasticsearch 集群说白了就是多个 Elasticsearch 节点的集合，这些节点共同协作，一起提供服务，这样就可以解决单台 Elasticsearch 服务器无法处理的搜索需求和数据存储需求。出于高可用方面的考虑，集群中节点数量建议 3 个以上，并且其中至少两个节点不是仅投票主节点（后文会介绍到）。</p>","autoDesc":true}`);export{p as comp,h as data};
