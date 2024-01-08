const e=JSON.parse(`{"key":"v-ff7fd2ec","path":"/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.html","title":"记忆化搜索","lang":"en-US","frontmatter":{"description":"记忆化搜索 记忆化搜索复杂度分析 多少种组合*每层耗费 记忆化搜索 = 分治 + hashmap 会变化的参数放在hashmap里 函数的限制： 要有返回值（DC） 和Cache很像 函数的结果，只与输入的参数有关，与其他信息无关 叫做pure function（类似前端的纯函数，与其他全局变量无关） 重复计算 记忆化搜索 = 动态规划 （只是说是用搜索的方式实现的DP）","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"记忆化搜索"}],["meta",{"property":"og:description","content":"记忆化搜索 记忆化搜索复杂度分析 多少种组合*每层耗费 记忆化搜索 = 分治 + hashmap 会变化的参数放在hashmap里 函数的限制： 要有返回值（DC） 和Cache很像 函数的结果，只与输入的参数有关，与其他信息无关 叫做pure function（类似前端的纯函数，与其他全局变量无关） 重复计算 记忆化搜索 = 动态规划 （只是说是用搜索的方式实现的DP）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-15T03:19:11.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-01-15T03:19:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记忆化搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-15T03:19:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"博弈问题非常适合记忆化搜索","slug":"博弈问题非常适合记忆化搜索","link":"#博弈问题非常适合记忆化搜索","children":[]}],"git":{"createdTime":1673752751000,"updatedTime":1673752751000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"cs/algo/summary/九章算法/22. 记忆化搜索.md","localizedDate":"January 15, 2023","excerpt":"<h1> 记忆化搜索</h1>\\n<p>记忆化搜索复杂度分析</p>\\n<p>多少种组合*每层耗费</p>\\n<p>记忆化搜索 = 分治 + hashmap</p>\\n<p>会变化的参数放在hashmap里</p>\\n<p>函数的限制：</p>\\n<ol>\\n<li>\\n<p>要有返回值（DC）</p>\\n<p>和Cache很像</p>\\n</li>\\n<li>\\n<p>函数的结果，只与输入的参数有关，与其他信息无关</p>\\n<p>叫做pure function（类似前端的纯函数，与其他全局变量无关）</p>\\n</li>\\n</ol>\\n<p>重复计算</p>\\n<p>记忆化搜索 = 动态规划</p>\\n<p>（只是说是用搜索的方式实现的DP）</p>","autoDesc":true}`);export{e as data};
