import{_ as t,V as s,W as o,X as e,Y as n}from"./framework-705b829b.js";const a={},c=e("h1",{id:"http",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),n(" HTTP")],-1),_=e("p",null,"HTTP 协是基于 TCP协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。",-1),r=e("p",null,"另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。",-1),T=[c,_,r];function d(i,l){return s(),o("div",null,T)}const p=t(a,[["render",d],["__file","HTTP.html.vue"]]);export{p as default};
