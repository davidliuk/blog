import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as s,a as e,b as t,e as a}from"./app-9107e99b.js";const i={},c=e("h1",{id:"plant-uml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plant-uml","aria-hidden":"true"},"#"),t(" Plant UML")],-1),d={href:"https://blog.csdn.net/vidar_li/article/details/86495811",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("img",{src:`https://g.gravizo.com/svg?
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
  }`})],-1),_={href:"https://blog.csdn.net/fleaxin/article/details/104776154/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://plantuml.com/zh/stdlib",target:"_blank",rel:"noopener noreferrer"};function m(f,g){const n=l("ExternalLinkIcon");return o(),s("div",null,[c,e("p",null,[e("a",d,[t("https://blog.csdn.net/vidar_li/article/details/86495811"),a(n)])]),p,e("p",null,[e("a",_,[t("https://blog.csdn.net/fleaxin/article/details/104776154/"),a(n)])]),e("p",null,[e("a",h,[t("https://plantuml.com/zh/stdlib"),a(n)])])])}const x=r(i,[["render",m],["__file","plantUML.html.vue"]]);export{x as default};
