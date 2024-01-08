import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as s,a as e,b as n,e as i}from"./app-9107e99b.js";const c={},l=e("h1",{id:"kubernetes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernetes","aria-hidden":"true"},"#"),n(" Kubernetes")],-1),d={href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[n("A workload is an application running on Kubernetes. Whether your workload is a single component or several that work"),e("br"),n(" together, on Kubernetes you run it inside a set of pods. In Kubernetes, a Pod represents a set of running containers on"),e("br"),n(" your cluster.")],-1),h=e("p",null,[n("Kubernetes pods have a defined lifecycle. For example, once a pod is running in your cluster then a critical fault on"),e("br"),n(" the node where that pod is running means that all the pods on that node fail. Kubernetes treats that level of failure as"),e("br"),n(" final: you would need to create a new Pod to recover, even if the node later becomes healthy.")],-1),f=e("p",null,[n("you don't need to manage each od directly. Instead, you can use workload resources that manage a set of pods on your"),e("br"),n(" behalf. These resources configure controllers that make sure the right number of the right kind of pod are running, to"),e("br"),n(" match the state you specified.")],-1);function p(_,b){const o=r("ExternalLinkIcon");return a(),s("div",null,[l,e("p",null,[e("a",d,[n("官方文档"),i(o)])]),u,h,f])}const g=t(c,[["render",p],["__file","index.html.vue"]]);export{g as default};
