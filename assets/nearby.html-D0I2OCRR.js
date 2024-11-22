import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as p}from"./app-UiaY2OnX.js";const c={};function d(n,e){return p(),i("div",null,e[0]||(e[0]=[o('<h1 id="附近" tabindex="-1"><a class="header-anchor" href="#附近"><span>附近</span></a></h1><p>基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET</p><ul><li><p><code>GEOADD</code>，key，(x, y, member)，member 建议存数据库里面的 id</p></li><li><p><code>GEOPOS</code></p></li><li><p><code>GEOHASH</code>，</p></li><li><p><code>GEODIST</code>，两个 key 之间的距离，返回的单位都是 km</p></li><li><p><code>GEORADIUS</code>，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功能，6.2 以后废弃，替换为 GEOSEARCH</p></li><li><p><code>GEOSEARCH</code>，不仅支持圆形，还支持方形等，拓展性更好，其他方面与上面那个相同，半径长度的单位是 km</p></li><li><p><code>GEOSEARCHSTORE</code>，不返回，只是讲搜索结果存储到一个指定的 key</p></li></ul><p>不会的时候可以<code>help GEOSEARCH</code></p><p>距离单位：KM，坐标单位：经纬度</p><p>key 的设计</p><ul><li><code>typeId</code> 作为 key 存入同一个 GEO 集合</li></ul>',7)]))}const l=t(c,[["render",d],["__file","nearby.html.vue"]]),m=JSON.parse(`{"path":"/cs/database/redis/practice/design/nearby.html","title":"附近","lang":"en-US","frontmatter":{"description":"附近 基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET GEOADD，key，(x, y, member)，member 建议存数据库里面的 id GEOPOS GEOHASH， GEODIST，两个 key 之间的距离，返回的单位都是 km GEORADIUS，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/design/nearby.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"附近"}],["meta",{"property":"og:description","content":"附近 基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET GEOADD，key，(x, y, member)，member 建议存数据库里面的 id GEOPOS GEOHASH， GEODIST，两个 key 之间的距离，返回的单位都是 km GEORADIUS，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"附近\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T11:46:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1680090419000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"cs/database/redis/practice/design/nearby.md","localizedDate":"March 29, 2023","excerpt":"\\n<p>基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET</p>\\n<ul>\\n<li>\\n<p><code>GEOADD</code>，key，(x, y, member)，member 建议存数据库里面的 id</p>\\n</li>\\n<li>\\n<p><code>GEOPOS</code></p>\\n</li>\\n<li>\\n<p><code>GEOHASH</code>，</p>\\n</li>\\n<li>\\n<p><code>GEODIST</code>，两个 key 之间的距离，返回的单位都是 km</p>\\n</li>\\n<li>\\n<p><code>GEORADIUS</code>，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功能，6.2 以后废弃，替换为 GEOSEARCH</p>\\n</li>\\n<li>\\n<p><code>GEOSEARCH</code>，不仅支持圆形，还支持方形等，拓展性更好，其他方面与上面那个相同，半径长度的单位是 km</p>\\n</li>\\n<li>\\n<p><code>GEOSEARCHSTORE</code>，不返回，只是讲搜索结果存储到一个指定的 key</p>\\n</li>\\n</ul>","autoDesc":true}`);export{l as comp,m as data};
