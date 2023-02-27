import{_ as a,V as s,W as t,X as e,Y as n}from"./framework-705b829b.js";const o={},c=e("h1",{id:"hashtable-vs-concurrenthashmap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hashtable-vs-concurrenthashmap","aria-hidden":"true"},"#"),n(" HashTable vs ConcurrentHashMap")],-1),h=e("p",null,"共同点",-1),r=e("p",null,"HashTable 与 ConcurrentHashMap 都是线程安全的Map集合",-1),l=e("p",null,"HashTable 并发度低，整个 HashTable 对应一把锁，只能有一个线程操作它",-1),_=e("p",null,"1.8之前 ConcurrentHashMap 使用了 Segment + 数组 + 链表，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突",-1),d=e("p",null,"1.8开始 ConcurrentHashMap 将数组的每个头节点作为锁（这个时候结构也是数组加链表或红黑树），如果多个线程访问的头节点不同，则不会冲突。",-1),u=[c,h,r,l,_,d];function i(p,H){return s(),t("div",null,u)}const f=a(o,[["render",i],["__file","HTvsCHM.html.vue"]]);export{f as default};
