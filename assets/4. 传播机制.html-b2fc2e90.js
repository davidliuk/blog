import{_,V as e,W as i,Z as l}from"./framework-e5d7a6b2.js";const t={},a=l('<h1 id="传播机制" tabindex="-1"><a class="header-anchor" href="#传播机制" aria-hidden="true">#</a> 传播机制</h1><p>什么是事务的传播行为：事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。</p><p>分类</p><ul><li>PROPAGATION_REQUIRED 表示当前方法必须在一个具有事务的上下文中运行,如有客户端有事务在进行，那么被调用端将在该事务中运行，否则的话重新开启一个事务。( 如果被调用端发生异常,那么调用端和被调用端事务都将回滚)</li><li>PROPAGATION_SUPPORTS 表示当前方法不必需要具有一个事务上下文,但是如果有一个事务的话,它也可以在这个事务中运行</li><li>PROPAGATION_MANDATORY 表示当前方法必须在一个事务中运行，如果没有事务，将抛出异常</li><li>PROPAGATION_REQUIRES_NEW 总是开启一个新的事务。如果一个事务已经存在，则将这个存在的事务挂起。</li><li>PROPAGATION_NOT_SUPPORTED 总是非事务地执行，并挂起任何存在的事务。</li><li>PROPAGATION_NEVER 总是非事务地执行，如果存在一个活动事务，则抛出异常</li><li>PROPAGATION_NESTED 表示如果当前方法正有一个事务在运行中,则该方法应该运行在一个嵌套事务中 ,被嵌套的事务可以独立于被封装的事务中进行提交或者回滚。如果封装事务存在,并且外层事务抛出异常回滚，那么内层事务必须回滚,反之,内层事务并不影响外层事务。如果封装事务不存在,则同 propagation. required 的一样</li></ul>',4),r=[a];function c(o,O){return e(),i("div",null,r)}const n=_(t,[["render",c],["__file","4. 传播机制.html.vue"]]);export{n as default};
