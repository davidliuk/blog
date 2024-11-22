import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as r,o}from"./app-DtA_0glx.js";const a={};function l(n,e){return o(),i("div",null,e[0]||(e[0]=[r('<h1 id="预定类-reservation" tabindex="-1"><a class="header-anchor" href="#预定类-reservation"><span>预定类 reservation</span></a></h1><p>预定类面试题型特点分析<br> 实战面试真题：</p><ul><li>酒店预订系统设计 Hotel Reservation</li><li>航空机票预订系统设计 Airline/Flight/Bus/Train Ticket Reservation</li><li>Restaurant reservation system</li><li><a href="http://Booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a></li></ul><p>频率：中</p><p>难度：高</p><p>解题思路</p><p>What</p><ul><li><p>考虑预定的东西</p><p>例子：机票，机舱/座位号/...</p></li></ul><p>Use case</p><ul><li><p>Search</p></li><li><p>Select</p></li><li><p>Cancel</p></li></ul><p><code>Search criteria -&gt; Search() -&gt; List&lt;Result&gt; -&gt; Select() -&gt; Receipt</code></p><p>有哪些需要和面试官统一的contract?</p><p><strong>Search criteria</strong> -&gt; Search() -&gt; <strong><code>List&lt;Result&gt;</code></strong> -&gt; Select() -&gt; <strong>Receipt</strong></p><h3 id="restaurant-reservation-system" tabindex="-1"><a class="header-anchor" href="#restaurant-reservation-system"><span>Restaurant reservation system</span></a></h3><p><strong>Search criteria</strong></p><ul><li>人数：无拼桌，每张桌子大小相同，不会有超过桌子大小的人数</li><li>日期：是否允许预定多日以后的? - 允许</li><li>时间：是否所有时间都允许预定?- 24/7</li><li>Design: FindTableForReservation(Timeslot t)</li><li>Timeslot contains Date and time</li></ul><p><code>List&lt;Result&gt;</code></p><ul><li><p>当选择的时间段可以/不行时，系统应该给出什么反馈?</p><p>Error</p></li><li><p>做法一:</p><p>Result == Timeslot</p><ul><li>Design: <code>List&lt;Timeslot&gt; findTableForReservation(Timeslot t)</code></li><li>Possible Challenge: 跟面试官讨论如何获得这个List</li></ul></li><li><p>做法二:</p><ul><li><p>可以预定:直接进入Confirm阶段</p></li><li><p>不能预定:Throw exception / Show message</p></li><li><p>Design: Pair&lt;Table, Timeslot&gt; findTableForReservation(Time slot) throws NoTableForReservationException</p></li><li><p>Design: void confirmReservation(Pair&lt;Table, Timeslot&gt; reservation)</p></li></ul><p>为什么我们可以跳过<code>List&lt;Result&gt;</code>这个步骤?</p><p>因为 Table 是一样的，用户不用选择也不会知道是订1号桌还是2号桌</p></li></ul>',18)]))}const c=t(a,[["render",l],["__file","预定类.html.vue"]]),m=JSON.parse(`{"path":"/se/design/ood/%E9%A2%84%E5%AE%9A%E7%B1%BB.html","title":"预定类 reservation","lang":"en-US","frontmatter":{"description":"预定类 reservation 预定类面试题型特点分析 实战面试真题： 酒店预订系统设计 Hotel Reservation 航空机票预订系统设计 Airline/Flight/Bus/Train Ticket Reservation Restaurant reservation system Booking.com 频率：中 难度：高 解题思路 Wh...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/ood/%E9%A2%84%E5%AE%9A%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"预定类 reservation"}],["meta",{"property":"og:description","content":"预定类 reservation 预定类面试题型特点分析 实战面试真题： 酒店预订系统设计 Hotel Reservation 航空机票预订系统设计 Airline/Flight/Bus/Train Ticket Reservation Restaurant reservation system Booking.com 频率：中 难度：高 解题思路 Wh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"预定类 reservation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Restaurant reservation system","slug":"restaurant-reservation-system","link":"#restaurant-reservation-system","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"se/design/ood/预定类.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>预定类面试题型特点分析<br>\\n实战面试真题：</p>\\n<ul>\\n<li>酒店预订系统设计 Hotel Reservation</li>\\n<li>航空机票预订系统设计 Airline/Flight/Bus/Train Ticket Reservation</li>\\n<li>Restaurant reservation system</li>\\n<li><a href=\\"http://Booking.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Booking.com</a></li>\\n</ul>\\n<p>频率：中</p>\\n<p>难度：高</p>","autoDesc":true}`);export{c as comp,m as data};
