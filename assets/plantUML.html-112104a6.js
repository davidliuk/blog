import{_ as l,V as r,W as o,X as e,Y as n,$ as a,E as s}from"./framework-e5d7a6b2.js";const i={},c=e("h1",{id:"plant-uml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plant-uml","aria-hidden":"true"},"#"),n(" Plant UML")],-1),d={href:"https://blog.csdn.net/vidar_li/article/details/86495811",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("img",{src:`https://g.gravizo.com/svg?
  digraph G {
    aize ="4,4";
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
  }`})],-1),_={href:"https://blog.csdn.net/fleaxin/article/details/104776154/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://plantuml.com/zh/stdlib",target:"_blank",rel:"noopener noreferrer"};function m(f,g){const t=s("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",d,[n("https://blog.csdn.net/vidar_li/article/details/86495811"),a(t)])]),p,e("p",null,[e("a",_,[n("https://blog.csdn.net/fleaxin/article/details/104776154/"),a(t)])]),e("p",null,[e("a",h,[n("https://plantuml.com/zh/stdlib"),a(t)])])])}const b=l(i,[["render",m],["__file","plantUML.html.vue"]]);export{b as default};
