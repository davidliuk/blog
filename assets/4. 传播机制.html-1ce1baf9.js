const t=JSON.parse(`{"key":"v-70e72ec0","path":"/cs/database/mysql/transaction/4.%20%E4%BC%A0%E6%92%AD%E6%9C%BA%E5%88%B6.html","title":"传播机制","lang":"en-US","frontmatter":{"description":"传播机制 什么是事务的传播行为：事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。 分类 PROPAGATION_REQUIRED 表示当前方法必须在一个具有事务的上下文中运行,如有客户端有事务在进行，那么被调用端将在该事务中运行，否则的话重新开启一个事务。( 如果被调用端发生异常,那么调用端和被调用端事务都将回滚) PROPAGATION_SUPPORTS 表示当前方法不必需要具有一个事务上下文,但是如果有一个事务的话,它也可以在这个事务中运行 PROPAGATION_MANDATORY 表示当前方法必须在一个事务中运行，如果没有事务，将抛出异常 PROPAGATION_REQUIRES_NEW 总是开启一个新的事务。如果一个事务已经存在，则将这个存在的事务挂起。 PROPAGATION_NOT_SUPPORTED 总是非事务地执行，并挂起任何存在的事务。 PROPAGATION_NEVER 总是非事务地执行，如果存在一个活动事务，则抛出异常 PROPAGATION_NESTED 表示如果当前方法正有一个事务在运行中,则该方法应该运行在一个嵌套事务中 ,被嵌套的事务可以独立于被封装的事务中进行提交或者回滚。如果封装事务存在,并且外层事务抛出异常回滚，那么内层事务必须回滚,反之,内层事务并不影响外层事务。如果封装事务不存在,则同 propagation. required 的一样","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/transaction/4.%20%E4%BC%A0%E6%92%AD%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"传播机制"}],["meta",{"property":"og:description","content":"传播机制 什么是事务的传播行为：事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。 分类 PROPAGATION_REQUIRED 表示当前方法必须在一个具有事务的上下文中运行,如有客户端有事务在进行，那么被调用端将在该事务中运行，否则的话重新开启一个事务。( 如果被调用端发生异常,那么调用端和被调用端事务都将回滚) PROPAGATION_SUPPORTS 表示当前方法不必需要具有一个事务上下文,但是如果有一个事务的话,它也可以在这个事务中运行 PROPAGATION_MANDATORY 表示当前方法必须在一个事务中运行，如果没有事务，将抛出异常 PROPAGATION_REQUIRES_NEW 总是开启一个新的事务。如果一个事务已经存在，则将这个存在的事务挂起。 PROPAGATION_NOT_SUPPORTED 总是非事务地执行，并挂起任何存在的事务。 PROPAGATION_NEVER 总是非事务地执行，如果存在一个活动事务，则抛出异常 PROPAGATION_NESTED 表示如果当前方法正有一个事务在运行中,则该方法应该运行在一个嵌套事务中 ,被嵌套的事务可以独立于被封装的事务中进行提交或者回滚。如果封装事务存在,并且外层事务抛出异常回滚，那么内层事务必须回滚,反之,内层事务并不影响外层事务。如果封装事务不存在,则同 propagation. required 的一样"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-06T03:47:09.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-04-06T03:47:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"传播机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-06T03:47:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1680752829000,"updatedTime":1680752829000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"cs/database/mysql/transaction/4. 传播机制.md","localizedDate":"April 6, 2023","excerpt":"<h1> 传播机制</h1>\\n<p>什么是事务的传播行为：事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。</p>\\n<p>分类</p>\\n<ul>\\n<li>PROPAGATION_REQUIRED 表示当前方法必须在一个具有事务的上下文中运行,如有客户端有事务在进行，那么被调用端将在该事务中运行，否则的话重新开启一个事务。( 如果被调用端发生异常,那么调用端和被调用端事务都将回滚)</li>\\n<li>PROPAGATION_SUPPORTS 表示当前方法不必需要具有一个事务上下文,但是如果有一个事务的话,它也可以在这个事务中运行</li>\\n<li>PROPAGATION_MANDATORY 表示当前方法必须在一个事务中运行，如果没有事务，将抛出异常</li>\\n<li>PROPAGATION_REQUIRES_NEW 总是开启一个新的事务。如果一个事务已经存在，则将这个存在的事务挂起。</li>\\n<li>PROPAGATION_NOT_SUPPORTED 总是非事务地执行，并挂起任何存在的事务。</li>\\n<li>PROPAGATION_NEVER 总是非事务地执行，如果存在一个活动事务，则抛出异常</li>\\n<li>PROPAGATION_NESTED 表示如果当前方法正有一个事务在运行中,则该方法应该运行在一个嵌套事务中 ,被嵌套的事务可以独立于被封装的事务中进行提交或者回滚。如果封装事务存在,并且外层事务抛出异常回滚，那么内层事务必须回滚,反之,内层事务并不影响外层事务。如果封装事务不存在,则同 propagation. required 的一样</li>\\n</ul>","autoDesc":true}`);export{t as data};
