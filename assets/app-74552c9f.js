import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$6,k as isLinkHttp,l as removeLeadingSlash,m as inject,u as unref,w as watch,n as getCurrentInstance,p as nextTick,q as getCurrentScope,s as onScopeDispose,t as shallowRef,v as watchEffect,x as camelize,y as capitalize,z as isFunction$1,T as Transition,A as useRouter,B as onBeforeUnmount,C as useRoute,D as provide,E as resolveComponent,F as toRef,R as RouterLink,G as isLinkMailto,H as isLinkTel,I as ensureEndingSlash,J as isPlainObject,K as isLinkExternal,L as TransitionGroup,M as removeEndingSlash,N as useLink,O as createSSRApp,P as RouterView,Q as createRouter,S as START_LOCATION_NORMALIZED,U as createWebHistory}from"./framework-e5d7a6b2.js";const scriptRel="modulepreload",assetsURL=function(b){return"/blog/"+b},seen={},__vitePreload=function($,j,Z){if(!j||j.length===0)return $();const U=document.getElementsByTagName("link");return Promise.all(j.map(Y=>{if(Y=assetsURL(Y),Y in seen)return;seen[Y]=!0;const ee=Y.endsWith(".css"),ae=ee?'[rel="stylesheet"]':"";if(!!Z)for(let ie=U.length-1;ie>=0;ie--){const oe=U[ie];if(oe.href===Y&&(!ee||oe.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${Y}"]${ae}`))return;const se=document.createElement("link");if(se.rel=ee?"stylesheet":scriptRel,ee||(se.as="script",se.crossOrigin=""),se.href=Y,document.head.appendChild(se),ee)return new Promise((ie,oe)=>{se.addEventListener("load",ie),se.addEventListener("error",()=>oe(new Error(`Unable to preload CSS for ${Y}`)))})})).then(()=>$())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-31abfce0.js"),[]).then(({data:b})=>b),"v-184f4da6":()=>__vitePreload(()=>import("./intro.html-c769c27d.js"),[]).then(({data:b})=>b),"v-b9c2d34a":()=>__vitePreload(()=>import("./index.html-22dbecb3.js"),[]).then(({data:b})=>b),"v-0dd5d98e":()=>__vitePreload(()=>import("./论文.html-30bfbf4e.js"),[]).then(({data:b})=>b),"v-439cccae":()=>__vitePreload(()=>import("./index.html-908c68a3.js"),[]).then(({data:b})=>b),"v-2d0ad528":()=>__vitePreload(()=>import("./index.html-5a1c4463.js"),[]).then(({data:b})=>b),"v-858cfdd6":()=>__vitePreload(()=>import("./intro.html-fb18d6b3.js"),[]).then(({data:b})=>b),"v-269ae70f":()=>__vitePreload(()=>import("./slides.html-a659fca5.js"),[]).then(({data:b})=>b),"v-e394a960":()=>__vitePreload(()=>import("./1. 区块链发展.html-ee7f2a13.js"),[]).then(({data:b})=>b),"v-1c105e2a":()=>__vitePreload(()=>import("./2. 密码学基础.html-68f1d530.js"),[]).then(({data:b})=>b),"v-524dd07d":()=>__vitePreload(()=>import("./3. 秘密共享.html-d75fde71.js"),[]).then(({data:b})=>b),"v-39134fda":()=>__vitePreload(()=>import("./4. 哈希函数.html-62d86d0d.js"),[]).then(({data:b})=>b),"v-37115d34":()=>__vitePreload(()=>import("./5. 数字货币.html-879c9f3f.js"),[]).then(({data:b})=>b),"v-ad51a322":()=>__vitePreload(()=>import("./6. 共识机制.html-98277a7d.js"),[]).then(({data:b})=>b),"v-11c61338":()=>__vitePreload(()=>import("./7. pow.html-ab8deed4.js"),[]).then(({data:b})=>b),"v-6e0be950":()=>__vitePreload(()=>import("./8. Fabric.html-b9185607.js"),[]).then(({data:b})=>b),"v-408c76ae":()=>__vitePreload(()=>import("./index.html-65b0cc6c.js"),[]).then(({data:b})=>b),"v-9c8a184c":()=>__vitePreload(()=>import("./1. 判别学习方法.html-777e2c1e.js"),[]).then(({data:b})=>b),"v-17cf18c3":()=>__vitePreload(()=>import("./2. 生成学习方法.html-1e206c62.js"),[]).then(({data:b})=>b),"v-2aeb94c0":()=>__vitePreload(()=>import("./3. 决策树.html-04ca85f5.js"),[]).then(({data:b})=>b),"v-169528f7":()=>__vitePreload(()=>import("./4. 集成学习.html-91318f50.js"),[]).then(({data:b})=>b),"v-15eaf20e":()=>__vitePreload(()=>import("./5. 随机森林.html-c84f31c5.js"),[]).then(({data:b})=>b),"v-44446262":()=>__vitePreload(()=>import("./6. SVM.html-5d696c05.js"),[]).then(({data:b})=>b),"v-ae5df412":()=>__vitePreload(()=>import("./7. CNN.html-c6cba5b9.js"),[]).then(({data:b})=>b),"v-a4f4a4ee":()=>__vitePreload(()=>import("./8. RNN.html-0f1eef88.js"),[]).then(({data:b})=>b),"v-26fa744b":()=>__vitePreload(()=>import("./index.html-859b8259.js"),[]).then(({data:b})=>b),"v-758e153b":()=>__vitePreload(()=>import("./1. 课程引入.html-0ab637a2.js"),[]).then(({data:b})=>b),"v-caba3efa":()=>__vitePreload(()=>import("./2. 电路分析.html-f92fa2cb.js"),[]).then(({data:b})=>b),"v-a2c6403c":()=>__vitePreload(()=>import("./3. 传感器.html-a996c3fd.js"),[]).then(({data:b})=>b),"v-15123ac3":()=>__vitePreload(()=>import("./4. 逻辑电路.html-d4676581.js"),[]).then(({data:b})=>b),"v-7be0c5c5":()=>__vitePreload(()=>import("./5. 信息处理.html-776d487f.js"),[]).then(({data:b})=>b),"v-3e6b0702":()=>__vitePreload(()=>import("./6. 数字信号处理.html-52351a83.js"),[]).then(({data:b})=>b),"v-6f144404":()=>__vitePreload(()=>import("./7. 数字图像处理.html-4dbecfce.js"),[]).then(({data:b})=>b),"v-ede14f50":()=>__vitePreload(()=>import("./index.html-ab57421c.js"),[]).then(({data:b})=>b),"v-038a238a":()=>__vitePreload(()=>import("./1.html-1fecfdea.js"),[]).then(({data:b})=>b),"v-5f917da2":()=>__vitePreload(()=>import("./11. Docker.html-00fff901.js"),[]).then(({data:b})=>b),"v-51ba0f86":()=>__vitePreload(()=>import("./13. Cloud.html-52223baa.js"),[]).then(({data:b})=>b),"v-76758d33":()=>__vitePreload(()=>import("./15.html-a54a9b18.js"),[]).then(({data:b})=>b),"v-053efc29":()=>__vitePreload(()=>import("./2.html-5483b4d0.js"),[]).then(({data:b})=>b),"v-426d42b4":()=>__vitePreload(()=>import("./3. Spring.html-9508f709.js"),[]).then(({data:b})=>b),"v-7f4986f6":()=>__vitePreload(()=>import("./4. Spring.html-071d9d86.js"),[]).then(({data:b})=>b),"v-77e76ddc":()=>__vitePreload(()=>import("./5. SpringBoot.html-9a353787.js"),[]).then(({data:b})=>b),"v-7b7b747c":()=>__vitePreload(()=>import("./index.html-d2923d96.js"),[]).then(({data:b})=>b),"v-3f37697a":()=>__vitePreload(()=>import("./index.html-161744bc.js"),[]).then(({data:b})=>b),"v-4d98b8f6":()=>__vitePreload(()=>import("./index.html-bbe4e446.js"),[]).then(({data:b})=>b),"v-61ad84b0":()=>__vitePreload(()=>import("./network-dynamics.html-18569add.js"),[]).then(({data:b})=>b),"v-44ec96d0":()=>__vitePreload(()=>import("./1. VR.html-8772da88.js"),[]).then(({data:b})=>b),"v-8feca790":()=>__vitePreload(()=>import("./2. VRML.html-65546682.js"),[]).then(({data:b})=>b),"v-0544da66":()=>__vitePreload(()=>import("./3. 计算机图形学基础.html-035c7782.js"),[]).then(({data:b})=>b),"v-d3b6a002":()=>__vitePreload(()=>import("./4. 3ds.html-958d4a3e.js"),[]).then(({data:b})=>b),"v-75b582f6":()=>__vitePreload(()=>import("./5. VR应用设计.html-4cc99acf.js"),[]).then(({data:b})=>b),"v-05eb9b21":()=>__vitePreload(()=>import("./index.html-d11a3bad.js"),[]).then(({data:b})=>b),"v-1be737d6":()=>__vitePreload(()=>import("./index.html-4f241e45.js"),[]).then(({data:b})=>b),"v-77b52ea4":()=>__vitePreload(()=>import("./index.html-5ef8a627.js"),[]).then(({data:b})=>b),"v-4f59b344":()=>__vitePreload(()=>import("./寒假学习计划.html-59ebea0e.js"),[]).then(({data:b})=>b),"v-e410df86":()=>__vitePreload(()=>import("./英语学习计划.html-75d38f1f.js"),[]).then(({data:b})=>b),"v-10591812":()=>__vitePreload(()=>import("./主管面.html-2c0644a7.js"),[]).then(({data:b})=>b),"v-e4de8f16":()=>__vitePreload(()=>import("./反问.html-4f6279a3.js"),[]).then(({data:b})=>b),"v-1c5516a4":()=>__vitePreload(()=>import("./总结.html-8f5525db.js"),[]).then(({data:b})=>b),"v-e7fcc674":()=>__vitePreload(()=>import("./工作总结.html-7a73db58.js"),[]).then(({data:b})=>b),"v-16cbeb16":()=>__vitePreload(()=>import("./技术栈.html-d2a7eda2.js"),[]).then(({data:b})=>b),"v-7559fca0":()=>__vitePreload(()=>import("./投递.html-b04e0d85.js"),[]).then(({data:b})=>b),"v-76befe12":()=>__vitePreload(()=>import("./程序员简历指南.html-361a018d.js"),[]).then(({data:b})=>b),"v-13fa91a7":()=>__vitePreload(()=>import("./自我介绍.html-95f9dae4.js"),[]).then(({data:b})=>b),"v-15b61052":()=>__vitePreload(()=>import("./面试经验.html-809c076f.js"),[]).then(({data:b})=>b),"v-584aef61":()=>__vitePreload(()=>import("./jmeter.html-288a0659.js"),[]).then(({data:b})=>b),"v-17903938":()=>__vitePreload(()=>import("./index.html-bda9cf7c.js"),[]).then(({data:b})=>b),"v-59a7c044":()=>__vitePreload(()=>import("./index.html-2aa0fc79.js"),[]).then(({data:b})=>b),"v-62ae8cb0":()=>__vitePreload(()=>import("./index.html-8ed253c6.js"),[]).then(({data:b})=>b),"v-4eeecf07":()=>__vitePreload(()=>import("./计划.html-ab29fbd5.js"),[]).then(({data:b})=>b),"v-a7be60d0":()=>__vitePreload(()=>import("./BL.html-77ad8337.js"),[]).then(({data:b})=>b),"v-5cca2bb4":()=>__vitePreload(()=>import("./PHB.html-84c9ab15.js"),[]).then(({data:b})=>b),"v-55f6c938":()=>__vitePreload(()=>import("./PHD.html-21482a14.js"),[]).then(({data:b})=>b),"v-58f3d4b0":()=>__vitePreload(()=>import("./文书.html-162a7a5f.js"),[]).then(({data:b})=>b),"v-2b64e284":()=>__vitePreload(()=>import("./index.html-06ec66cf.js"),[]).then(({data:b})=>b),"v-c1942916":()=>__vitePreload(()=>import("./disable.html-e36d6d21.js"),[]).then(({data:b})=>b),"v-65c00218":()=>__vitePreload(()=>import("./encrypt.html-55ff1cec.js"),[]).then(({data:b})=>b),"v-36295574":()=>__vitePreload(()=>import("./markdown.html-2cbf0d7e.js"),[]).then(({data:b})=>b),"v-62ced1a6":()=>__vitePreload(()=>import("./page.html-b5427bb6.js"),[]).then(({data:b})=>b),"v-9ef49308":()=>__vitePreload(()=>import("./cherry.html-cb50a291.js"),[]).then(({data:b})=>b),"v-3fbd497c":()=>__vitePreload(()=>import("./dragonfruit.html-97d91573.js"),[]).then(({data:b})=>b),"v-46587e86":()=>__vitePreload(()=>import("./strawberry.html-e1655123.js"),[]).then(({data:b})=>b),"v-56a32aab":()=>__vitePreload(()=>import("./tomato.html-6ccb7291.js"),[]).then(({data:b})=>b),"v-cb925366":()=>__vitePreload(()=>import("./大纲.html-0c1df137.js"),[]).then(({data:b})=>b),"v-65fed5a9":()=>__vitePreload(()=>import("./期末.html-36f29d3b.js"),[]).then(({data:b})=>b),"v-eda53cb6":()=>__vitePreload(()=>import("./资料.html-30eada1d.js"),[]).then(({data:b})=>b),"v-8580ea64":()=>__vitePreload(()=>import("./实验1.html-8735df6c.js"),[]).then(({data:b})=>b),"v-82173926":()=>__vitePreload(()=>import("./实验2.html-554046e0.js"),[]).then(({data:b})=>b),"v-7ead87e8":()=>__vitePreload(()=>import("./实验3.html-29fbbdec.js"),[]).then(({data:b})=>b),"v-19e12e64":()=>__vitePreload(()=>import("./测验1.html-8d8bf519.js"),[]).then(({data:b})=>b),"v-16777d26":()=>__vitePreload(()=>import("./测验2.html-6b0be4f3.js"),[]).then(({data:b})=>b),"v-7a39bf00":()=>__vitePreload(()=>import("./大作业.html-e9e69d79.js"),[]).then(({data:b})=>b),"v-806780e0":()=>__vitePreload(()=>import("./讲稿.html-d54a8d8c.js"),[]).then(({data:b})=>b),"v-881a2a42":()=>__vitePreload(()=>import("./作业1.html-68d63fe7.js"),[]).then(({data:b})=>b),"v-84b07904":()=>__vitePreload(()=>import("./作业2.html-1590b5fe.js"),[]).then(({data:b})=>b),"v-8146c7c6":()=>__vitePreload(()=>import("./作业3.html-1b953416.js"),[]).then(({data:b})=>b),"v-7ddd1688":()=>__vitePreload(()=>import("./作业4.html-f34244e8.js"),[]).then(({data:b})=>b),"v-7ff1e5e5":()=>__vitePreload(()=>import("./期末.html-171c8db1.js"),[]).then(({data:b})=>b),"v-6869cf82":()=>__vitePreload(()=>import("./测验.html-61d0cdb3.js"),[]).then(({data:b})=>b),"v-edfa1c3e":()=>__vitePreload(()=>import("./文献汇总.html-e7bb551e.js"),[]).then(({data:b})=>b),"v-444e8e82":()=>__vitePreload(()=>import("./翻转课堂.html-826b8c81.js"),[]).then(({data:b})=>b),"v-01fbf701":()=>__vitePreload(()=>import("./问答.html-f3815305.js"),[]).then(({data:b})=>b),"v-dadd1a02":()=>__vitePreload(()=>import("./报告.html-00c1c632.js"),[]).then(({data:b})=>b),"v-21be9004":()=>__vitePreload(()=>import("./文档.html-01d3992a.js"),[]).then(({data:b})=>b),"v-1e28a188":()=>__vitePreload(()=>import("./问题.html-d44bf9a8.js"),[]).then(({data:b})=>b),"v-0b82bae4":()=>__vitePreload(()=>import("./系统分析.html-78e9a99d.js"),[]).then(({data:b})=>b),"v-4bfca452":()=>__vitePreload(()=>import("./前端设计.html-c82c9874.js"),[]).then(({data:b})=>b),"v-55484202":()=>__vitePreload(()=>import("./后端设计.html-262fdd82.js"),[]).then(({data:b})=>b),"v-40277606":()=>__vitePreload(()=>import("./工作贡献统计.html-fc345573.js"),[]).then(({data:b})=>b),"v-dd640a06":()=>__vitePreload(()=>import("./测试.html-edd2a7c5.js"),[]).then(({data:b})=>b),"v-a4194498":()=>__vitePreload(()=>import("./系统设计.html-95418bbd.js"),[]).then(({data:b})=>b),"v-be0f4bc2":()=>__vitePreload(()=>import("./实训总结报告.html-4e0d35ac.js"),[]).then(({data:b})=>b),"v-2aaaa1f4":()=>__vitePreload(()=>import("./PPT.html-20d5ae26.js"),[]).then(({data:b})=>b),"v-0257c685":()=>__vitePreload(()=>import("./要求.html-9f967de2.js"),[]).then(({data:b})=>b),"v-72740c8a":()=>__vitePreload(()=>import("./视频.html-49a169e5.js"),[]).then(({data:b})=>b),"v-2ba863a6":()=>__vitePreload(()=>import("./功能设计.html-9d4558fd.js"),[]).then(({data:b})=>b),"v-55ae513c":()=>__vitePreload(()=>import("./数据库设计.html-137e5c65.js"),[]).then(({data:b})=>b),"v-2c74f45a":()=>__vitePreload(()=>import("./作业1 HMD.html-5cca9b8d.js"),[]).then(({data:b})=>b),"v-b175398e":()=>__vitePreload(()=>import("./作业2 技术天花板.html-bc533a56.js"),[]).then(({data:b})=>b),"v-4901312d":()=>__vitePreload(()=>import("./作业3 产品定位.html-a58921ac.js"),[]).then(({data:b})=>b),"v-783750bb":()=>__vitePreload(()=>import("./作业4 互评.html-94bc82fb.js"),[]).then(({data:b})=>b),"v-3e024300":()=>__vitePreload(()=>import("./作业4 产品设计与互评.html-1ae2e11d.js"),[]).then(({data:b})=>b),"v-7b4c535c":()=>__vitePreload(()=>import("./作业5 草图场景与原型设计.html-f72ccaaf.js"),[]).then(({data:b})=>b),"v-6628a39c":()=>__vitePreload(()=>import("./作业6 大作业.html-d70be720.js"),[]).then(({data:b})=>b),"v-7b52310e":()=>__vitePreload(()=>import("./评语.html-d7206e16.js"),[]).then(({data:b})=>b),"v-c2aa5004":()=>__vitePreload(()=>import("./1. 算法面试高频知识点与技巧.html-b075da7b.js"),[]).then(({data:b})=>b),"v-61d5087f":()=>__vitePreload(()=>import("./14. 字典树.html-9205ee0a.js"),[]).then(({data:b})=>b),"v-69cd4508":()=>__vitePreload(()=>import("./17. 单调栈.html-dc02b07b.js"),[]).then(({data:b})=>b),"v-6274d0d4":()=>__vitePreload(()=>import("./2. 同向双指针.html-bd29431f.js"),[]).then(({data:b})=>b),"v-28741391":()=>__vitePreload(()=>import("./3. 拓展知识.html-ad2cd12f.js"),[]).then(({data:b})=>b),"v-30ade360":()=>__vitePreload(()=>import("./4. 滑窗型双指针与隔板法.html-f0be216e.js"),[]).then(({data:b})=>b),"v-392996a2":()=>__vitePreload(()=>import("./index.html-e77d6fdc.js"),[]).then(({data:b})=>b),"v-2d506fa0":()=>__vitePreload(()=>import("./大文件处理.html-b6b2df3b.js"),[]).then(({data:b})=>b),"v-31ec3247":()=>__vitePreload(()=>import("./index.html-08529c51.js"),[]).then(({data:b})=>b),"v-fcf961c2":()=>__vitePreload(()=>import("./index.html-35f15ec9.js"),[]).then(({data:b})=>b),"v-ca789fae":()=>__vitePreload(()=>import("./HTTP.html-897502ae.js"),[]).then(({data:b})=>b),"v-0cc211d4":()=>__vitePreload(()=>import("./HTTPS.html-f00bd825.js"),[]).then(({data:b})=>b),"v-08b6dbb0":()=>__vitePreload(()=>import("./index.html-98a0bb77.js"),[]).then(({data:b})=>b),"v-79f5d040":()=>__vitePreload(()=>import("./TCP.html-626692fb.js"),[]).then(({data:b})=>b),"v-4a61e36c":()=>__vitePreload(()=>import("./IO多路复用.html-4cf2c3cc.js"),[]).then(({data:b})=>b),"v-74546404":()=>__vitePreload(()=>import("./index.html-080a9042.js"),[]).then(({data:b})=>b),"v-192873bd":()=>__vitePreload(()=>import("./内存管理.html-daf6077f.js"),[]).then(({data:b})=>b),"v-35dbe43a":()=>__vitePreload(()=>import("./操作系统.html-111c8274.js"),[]).then(({data:b})=>b),"v-1cb2880a":()=>__vitePreload(()=>import("./文件管理.html-7b9eb361.js"),[]).then(({data:b})=>b),"v-939bf7f4":()=>__vitePreload(()=>import("./用户态内核态.html-b856aae7.js"),[]).then(({data:b})=>b),"v-95a2e48c":()=>__vitePreload(()=>import("./线程进程.html-12471ca3.js"),[]).then(({data:b})=>b),"v-5b97dc51":()=>__vitePreload(()=>import("./0. 安装使用.html-43d381c9.js"),[]).then(({data:b})=>b),"v-d51afb96":()=>__vitePreload(()=>import("./1. 概念.html-5f3fe3dc.js"),[]).then(({data:b})=>b),"v-a877b200":()=>__vitePreload(()=>import("./2. 使用.html-ef354505.js"),[]).then(({data:b})=>b),"v-dc59fc0a":()=>__vitePreload(()=>import("./index.html-a8d8c2b4.js"),[]).then(({data:b})=>b),"v-cd8b0f7c":()=>__vitePreload(()=>import("./index.html-f1a9abf4.js"),[]).then(({data:b})=>b),"v-26094462":()=>__vitePreload(()=>import("./index.html-1ceef185.js"),[]).then(({data:b})=>b),"v-7435acea":()=>__vitePreload(()=>import("./index.html-7489f6e0.js"),[]).then(({data:b})=>b),"v-3372119a":()=>__vitePreload(()=>import("./index.html-374fc6b5.js"),[]).then(({data:b})=>b),"v-6805b83a":()=>__vitePreload(()=>import("./为什么用.html-0052493c.js"),[]).then(({data:b})=>b),"v-1700c95b":()=>__vitePreload(()=>import("./延迟队列.html-54905607.js"),[]).then(({data:b})=>b),"v-0da42f26":()=>__vitePreload(()=>import("./死信队列.html-224caa06.js"),[]).then(({data:b})=>b),"v-3e315581":()=>__vitePreload(()=>import("./消息应答.html-0e280a78.js"),[]).then(({data:b})=>b),"v-588edf1b":()=>__vitePreload(()=>import("./消息模型.html-a9e37586.js"),[]).then(({data:b})=>b),"v-2479638a":()=>__vitePreload(()=>import("./消息转换器.html-e7055337.js"),[]).then(({data:b})=>b),"v-8db72a40":()=>__vitePreload(()=>import("./SNK.html-1e75df5e.js"),[]).then(({data:b})=>b),"v-3747c200":()=>__vitePreload(()=>import("./产品运营.html-65c671cc.js"),[]).then(({data:b})=>b),"v-528188e2":()=>__vitePreload(()=>import("./京东.html-9da07fb2.js"),[]).then(({data:b})=>b),"v-4b860994":()=>__vitePreload(()=>import("./京东科技.html-041f57b5.js"),[]).then(({data:b})=>b),"v-3d59908d":()=>__vitePreload(()=>import("./京东科技一面.html-93bc0301.js"),[]).then(({data:b})=>b),"v-7d2d82d5":()=>__vitePreload(()=>import("./面经汇总.html-abf59f62.js"),[]).then(({data:b})=>b),"v-61f32f65":()=>__vitePreload(()=>import("./4.26 笔试.html-a7e4e7a9.js"),[]).then(({data:b})=>b),"v-27a7aebc":()=>__vitePreload(()=>import("./华为.html-3c7eda85.js"),[]).then(({data:b})=>b),"v-417d8c70":()=>__vitePreload(()=>import("./综合面.html-48cc314b.js"),[]).then(({data:b})=>b),"v-5d5862b1":()=>__vitePreload(()=>import("./图形推理.html-28a874c9.js"),[]).then(({data:b})=>b),"v-238ca5f1":()=>__vitePreload(()=>import("./3.30.html-49db4381.js"),[]).then(({data:b})=>b),"v-4fb9770f":()=>__vitePreload(()=>import("./4.11.html-22f21bf9.js"),[]).then(({data:b})=>b),"v-8694b6bc":()=>__vitePreload(()=>import("./阿里.html-01c9eaa4.js"),[]).then(({data:b})=>b),"v-1696696a":()=>__vitePreload(()=>import("./掘金.html-fac801a5.js"),[]).then(({data:b})=>b),"v-224320df":()=>__vitePreload(()=>import("./自我.html-e0a4ba61.js"),[]).then(({data:b})=>b),"v-59260c34":()=>__vitePreload(()=>import("./讲稿.html-6bbceed3.js"),[]).then(({data:b})=>b),"v-6b7d4df0":()=>__vitePreload(()=>import("./雁过留痕.html-2c04c86d.js"),[]).then(({data:b})=>b),"v-b1951358":()=>__vitePreload(()=>import("./项目亮点总结.html-b3b0f2ea.js"),[]).then(({data:b})=>b),"v-4a7c9956":()=>__vitePreload(()=>import("./项目提问准备.html-f753f8a1.js"),[]).then(({data:b})=>b),"v-0bff3a50":()=>__vitePreload(()=>import("./index.html-fccad780.js"),[]).then(({data:b})=>b),"v-432219a8":()=>__vitePreload(()=>import("./Untitled.html-94b642d3.js"),[]).then(({data:b})=>b),"v-36873900":()=>__vitePreload(()=>import("./index.html-12959b9a.js"),[]).then(({data:b})=>b),"v-5af053ea":()=>__vitePreload(()=>import("./cron.html-57c2b17f.js"),[]).then(({data:b})=>b),"v-1c03b80a":()=>__vitePreload(()=>import("./seckill.html-003f8e1c.js"),[]).then(({data:b})=>b),"v-c5e43a24":()=>__vitePreload(()=>import("./user.html-ff52bbd6.js"),[]).then(({data:b})=>b),"v-4b40d03a":()=>__vitePreload(()=>import("./index.html-aff7de42.js"),[]).then(({data:b})=>b),"v-35285eb9":()=>__vitePreload(()=>import("./ci.html-6ed7ba8c.js"),[]).then(({data:b})=>b),"v-204dfcb5":()=>__vitePreload(()=>import("./makefile.html-37276c95.js"),[]).then(({data:b})=>b),"v-8515fffe":()=>__vitePreload(()=>import("./index.html-ffb3498f.js"),[]).then(({data:b})=>b),"v-d121411e":()=>__vitePreload(()=>import("./docker-file.html-8bf6a9a5.js"),[]).then(({data:b})=>b),"v-209719ec":()=>__vitePreload(()=>import("./network.html-d8fa4b37.js"),[]).then(({data:b})=>b),"v-62dda79b":()=>__vitePreload(()=>import("./persistence.html-cf3e2c90.js"),[]).then(({data:b})=>b),"v-0ab26f57":()=>__vitePreload(()=>import("./index.html-c70a3ef0.js"),[]).then(({data:b})=>b),"v-926c3a2a":()=>__vitePreload(()=>import("./archetecture.html-e40c5f00.js"),[]).then(({data:b})=>b),"v-a3c5ff30":()=>__vitePreload(()=>import("./installation.html-890674c2.js"),[]).then(({data:b})=>b),"v-4c40d619":()=>__vitePreload(()=>import("./index.html-88cc41e9.js"),[]).then(({data:b})=>b),"v-cd98a0ac":()=>__vitePreload(()=>import("./Untitled.html-e02c78b4.js"),[]).then(({data:b})=>b),"v-779a1f7a":()=>__vitePreload(()=>import("./index.html-3a8f793c.js"),[]).then(({data:b})=>b),"v-5c068491":()=>__vitePreload(()=>import("./常见问题.html-42ef1a01.js"),[]).then(({data:b})=>b),"v-134b021f":()=>__vitePreload(()=>import("./oss.html-c8698de6.js"),[]).then(({data:b})=>b),"v-0906aead":()=>__vitePreload(()=>import("./index.html-3791593c.js"),[]).then(({data:b})=>b),"v-4899202c":()=>__vitePreload(()=>import("./设计模式.html-deebeb53.js"),[]).then(({data:b})=>b),"v-2dabab05":()=>__vitePreload(()=>import("./index.html-cd74fd31.js"),[]).then(({data:b})=>b),"v-3ee5a1d1":()=>__vitePreload(()=>import("./MPG.html-f31d3f56.js"),[]).then(({data:b})=>b),"v-48946111":()=>__vitePreload(()=>import("./tool-chain.html-738b78e9.js"),[]).then(({data:b})=>b),"v-fd8baddc":()=>__vitePreload(()=>import("./语法.html-f965a80a.js"),[]).then(({data:b})=>b),"v-56daac70":()=>__vitePreload(()=>import("./index.html-0dca6b93.js"),[]).then(({data:b})=>b),"v-13dd7056":()=>__vitePreload(()=>import("./index.html-cd1353e4.js"),[]).then(({data:b})=>b),"v-821201d6":()=>__vitePreload(()=>import("./index.html-ecf8bb70.js"),[]).then(({data:b})=>b),"v-47fd2db2":()=>__vitePreload(()=>import("./latex运算符.html-d4a69179.js"),[]).then(({data:b})=>b),"v-ef4200a4":()=>__vitePreload(()=>import("./alist.html-ee1389a5.js"),[]).then(({data:b})=>b),"v-414df76c":()=>__vitePreload(()=>import("./xdm.html-a3db88a5.js"),[]).then(({data:b})=>b),"v-f09f22fa":()=>__vitePreload(()=>import("./mermaid.html-33861ef9.js"),[]).then(({data:b})=>b),"v-58b8a846":()=>__vitePreload(()=>import("./plantUML.html-ba092b44.js"),[]).then(({data:b})=>b),"v-aae0d1cc":()=>__vitePreload(()=>import("./index.html-cb8a24d0.js"),[]).then(({data:b})=>b),"v-d02da8bc":()=>__vitePreload(()=>import("./vuepress.html-508bd1cd.js"),[]).then(({data:b})=>b),"v-764e75cc":()=>__vitePreload(()=>import("./index.html-be0b06c9.js"),[]).then(({data:b})=>b),"v-74902a86":()=>__vitePreload(()=>import("./代数.html-574d3814.js"),[]).then(({data:b})=>b),"v-e108a058":()=>__vitePreload(()=>import("./数论.html-0477be0d.js"),[]).then(({data:b})=>b),"v-1cc0ba47":()=>__vitePreload(()=>import("./index.html-0affd435.js"),[]).then(({data:b})=>b),"v-bc0877a2":()=>__vitePreload(()=>import("./1. 中心逻辑精听法.html-4d103690.js"),[]).then(({data:b})=>b),"v-6bbae1e2":()=>__vitePreload(()=>import("./2. 题型.html-c09c9a85.js"),[]).then(({data:b})=>b),"v-9f54ba94":()=>__vitePreload(()=>import("./3. 笔记法.html-9e5c88e3.js"),[]).then(({data:b})=>b),"v-7bd55f08":()=>__vitePreload(()=>import("./4. 对话串联法.html-c570ae51.js"),[]).then(({data:b})=>b),"v-28d0a65b":()=>__vitePreload(()=>import("./5. 讲座分层法.html-933d40e9.js"),[]).then(({data:b})=>b),"v-2e162ac8":()=>__vitePreload(()=>import("./index.html-db60f856.js"),[]).then(({data:b})=>b),"v-2822df36":()=>__vitePreload(()=>import("./基础.html-422c906b.js"),[]).then(({data:b})=>b),"v-310c2e4d":()=>__vitePreload(()=>import("./真题营.html-bcdf6e21.js"),[]).then(({data:b})=>b),"v-ff501fce":()=>__vitePreload(()=>import("./积累.html-cd55a764.js"),[]).then(({data:b})=>b),"v-535cace4":()=>__vitePreload(()=>import("./1. 阅读方法论.html-50740f6f.js"),[]).then(({data:b})=>b),"v-3a8ea346":()=>__vitePreload(()=>import("./2. 六选三.html-3cd6fce0.js"),[]).then(({data:b})=>b),"v-5c362ade":()=>__vitePreload(()=>import("./3. 文章段落.html-b682002d.js"),[]).then(({data:b})=>b),"v-9d6a2c94":()=>__vitePreload(()=>import("./4. 逻辑考点.html-e624296f.js"),[]).then(({data:b})=>b),"v-1d780b38":()=>__vitePreload(()=>import("./5. 文章结构.html-00d08632.js"),[]).then(({data:b})=>b),"v-62c284eb":()=>__vitePreload(()=>import("./index.html-6b43ec50.js"),[]).then(({data:b})=>b),"v-61d84292":()=>__vitePreload(()=>import("./index.html-96d668bd.js"),[]).then(({data:b})=>b),"v-11c01b04":()=>__vitePreload(()=>import("./task1.html-709a18f2.js"),[]).then(({data:b})=>b),"v-1374f3a3":()=>__vitePreload(()=>import("./task2.html-2ea96c61.js"),[]).then(({data:b})=>b),"v-1529cc42":()=>__vitePreload(()=>import("./task3.html-e82e47fb.js"),[]).then(({data:b})=>b),"v-16dea4e1":()=>__vitePreload(()=>import("./task4.html-89c7ab50.js"),[]).then(({data:b})=>b),"v-a39b8410":()=>__vitePreload(()=>import("./读音.html-58ed875c.js"),[]).then(({data:b})=>b),"v-a1b1fbce":()=>__vitePreload(()=>import("./1. 结构.html-4c1d7a9c.js"),[]).then(({data:b})=>b),"v-b3d1d064":()=>__vitePreload(()=>import("./2. 主体段.html-41b70fca.js"),[]).then(({data:b})=>b),"v-00409b10":()=>__vitePreload(()=>import("./3. 语料1.html-cb6d5574.js"),[]).then(({data:b})=>b),"v-2ae46f98":()=>__vitePreload(()=>import("./4. 语料2.html-d1864876.js"),[]).then(({data:b})=>b),"v-585111ff":()=>__vitePreload(()=>import("./5. 综合写作.html-18c33bac.js"),[]).then(({data:b})=>b),"v-2861a49b":()=>__vitePreload(()=>import("./index.html-ff959305.js"),[]).then(({data:b})=>b),"v-042b12ec":()=>__vitePreload(()=>import("./改革.html-1e025424.js"),[]).then(({data:b})=>b),"v-a67d5778":()=>__vitePreload(()=>import("./PH.html-2d4c3684.js"),[]).then(({data:b})=>b),"v-d8cf28cc":()=>__vitePreload(()=>import("./新通.html-589296a1.js"),[]).then(({data:b})=>b),"v-252112bc":()=>__vitePreload(()=>import("./保底.html-fa34118b.js"),[]).then(({data:b})=>b),"v-f9b0b4de":()=>__vitePreload(()=>import("./信息.html-1bce8b92.js"),[]).then(({data:b})=>b),"v-0689dc16":()=>__vitePreload(()=>import("./避坑.html-494b9995.js"),[]).then(({data:b})=>b),"v-57c14fa1":()=>__vitePreload(()=>import("./项目.html-0eb02bac.js"),[]).then(({data:b})=>b),"v-6e6c1b81":()=>__vitePreload(()=>import("./1.html-7bb9a691.js"),[]).then(({data:b})=>b),"v-7020f420":()=>__vitePreload(()=>import("./2.html-34973f89.js"),[]).then(({data:b})=>b),"v-71d5ccbf":()=>__vitePreload(()=>import("./3.html-fdaac680.js"),[]).then(({data:b})=>b),"v-738aa55e":()=>__vitePreload(()=>import("./4.html-253c6c9b.js"),[]).then(({data:b})=>b),"v-49be79ce":()=>__vitePreload(()=>import("./1.html-2ce5a05c.js"),[]).then(({data:b})=>b),"v-4b73526d":()=>__vitePreload(()=>import("./2.html-a3c3787f.js"),[]).then(({data:b})=>b),"v-4d282b0c":()=>__vitePreload(()=>import("./3.html-8784fb44.js"),[]).then(({data:b})=>b),"v-4edd03ab":()=>__vitePreload(()=>import("./4.html-e6b42884.js"),[]).then(({data:b})=>b),"v-6371899c":()=>__vitePreload(()=>import("./index.html-83e0cfcd.js"),[]).then(({data:b})=>b),"v-6c1da50c":()=>__vitePreload(()=>import("./index.html-73dcb241.js"),[]).then(({data:b})=>b),"v-84294778":()=>__vitePreload(()=>import("./index.html-5c448c3f.js"),[]).then(({data:b})=>b),"v-34a08d44":()=>__vitePreload(()=>import("./减治优化.html-f9207330.js"),[]).then(({data:b})=>b),"v-72cecc71":()=>__vitePreload(()=>import("./动态规划.html-83d08738.js"),[]).then(({data:b})=>b),"v-783883a8":()=>__vitePreload(()=>import("./index.html-a165a658.js"),[]).then(({data:b})=>b),"v-66c9f1a6":()=>__vitePreload(()=>import("./index.html-ca72d8c0.js"),[]).then(({data:b})=>b),"v-6665310a":()=>__vitePreload(()=>import("./BFS.html-d5e65522.js"),[]).then(({data:b})=>b),"v-36278ac8":()=>__vitePreload(()=>import("./DFS.html-ca935cd1.js"),[]).then(({data:b})=>b),"v-3f65bda0":()=>__vitePreload(()=>import("./FOR.html-029fd4b9.js"),[]).then(({data:b})=>b),"v-4c1d4f60":()=>__vitePreload(()=>import("./index.html-e9a247ce.js"),[]).then(({data:b})=>b),"v-3c560536":()=>__vitePreload(()=>import("./单向递归.html-f9b355ec.js"),[]).then(({data:b})=>b),"v-876872ba":()=>__vitePreload(()=>import("./index.html-f0dc27e5.js"),[]).then(({data:b})=>b),"v-f5efc878":()=>__vitePreload(()=>import("./0. 总结.html-f26c04de.js"),[]).then(({data:b})=>b),"v-77daaac4":()=>__vitePreload(()=>import("./1. 真实案例.html-10bab8b5.js"),[]).then(({data:b})=>b),"v-7fed26e2":()=>__vitePreload(()=>import("./11. BFS.html-402efc04.js"),[]).then(({data:b})=>b),"v-99436756":()=>__vitePreload(()=>import("./12. 递归、遍历、分治.html-dba1b8d7.js"),[]).then(({data:b})=>b),"v-037780e0":()=>__vitePreload(()=>import("./13. 二叉树非递归遍历.html-b993241e.js"),[]).then(({data:b})=>b),"v-033cbaee":()=>__vitePreload(()=>import("./14. BFS性价比之王.html-0a5f0728.js"),[]).then(({data:b})=>b),"v-c004b79e":()=>__vitePreload(()=>import("./15. 分治法求二叉树.html-2fe64fb5.js"),[]).then(({data:b})=>b),"v-000087f0":()=>__vitePreload(()=>import("./16. 组合类DFS.html-5449bb02.js"),[]).then(({data:b})=>b),"v-0cb7951b":()=>__vitePreload(()=>import("./17. 排列式DFS.html-707e605d.js"),[]).then(({data:b})=>b),"v-1decc628":()=>__vitePreload(()=>import("./18. 哈希表.html-899cbdcc.js"),[]).then(({data:b})=>b),"v-26f515e6":()=>__vitePreload(()=>import("./19. Heap.html-2fd5dc96.js"),[]).then(({data:b})=>b),"v-7d6856f3":()=>__vitePreload(()=>import("./2. 最长回文子串.html-bfd187dc.js"),[]).then(({data:b})=>b),"v-49c3f183":()=>__vitePreload(()=>import("./21. 哈希表和堆.html-a39bfdaa.js"),[]).then(({data:b})=>b),"v-ff7fd2ec":()=>__vitePreload(()=>import("./22. 记忆化搜索.html-5ed67706.js"),[]).then(({data:b})=>b),"v-057d6f7c":()=>__vitePreload(()=>import("./23. 动态规划.html-9582d5bb.js"),[]).then(({data:b})=>b),"v-768b6a8d":()=>__vitePreload(()=>import("./24. 动态规划使用场景.html-effb5062.js"),[]).then(({data:b})=>b),"v-1cd5019a":()=>__vitePreload(()=>import("./25. 动态规划：背包型.html-002ea775.js"),[]).then(({data:b})=>b),"v-5dfec8e3":()=>__vitePreload(()=>import("./27. 动态规划优化.html-d225ace5.js"),[]).then(({data:b})=>b),"v-14aae730":()=>__vitePreload(()=>import("./29. 双指针.html-eb230d87.js"),[]).then(({data:b})=>b),"v-6d66a52e":()=>__vitePreload(()=>import("./3. 代码质量.html-1bf8649f.js"),[]).then(({data:b})=>b),"v-3c42b9a8":()=>__vitePreload(()=>import("./30. 二分法实战.html-d9b5ab6b.js"),[]).then(({data:b})=>b),"v-3753d956":()=>__vitePreload(()=>import("./31. 低于On的算法.html-d0f04dec.js"),[]).then(({data:b})=>b),"v-1a561374":()=>__vitePreload(()=>import("./32. 全子集问题.html-c18ed9a2.js"),[]).then(({data:b})=>b),"v-1f61ac84":()=>__vitePreload(()=>import("./33. BFS双向.html-17279856.js"),[]).then(({data:b})=>b),"v-ab058a38":()=>__vitePreload(()=>import("./37. DFS.html-73036952.js"),[]).then(({data:b})=>b),"v-41151cf4":()=>__vitePreload(()=>import("./38. 数据结构设计.html-2bbfff6a.js"),[]).then(({data:b})=>b),"v-20b84030":()=>__vitePreload(()=>import("./39. 外排序算法与数组合并类.html-3328fc0f.js"),[]).then(({data:b})=>b),"v-7bc8de14":()=>__vitePreload(()=>import("./4. 复杂度理论.html-9b5f8a21.js"),[]).then(({data:b})=>b),"v-5b0fec5f":()=>__vitePreload(()=>import("./40. 动态规划：区间型.html-5a9e7475.js"),[]).then(({data:b})=>b),"v-151b7b10":()=>__vitePreload(()=>import("./5. 排序.html-3957be56.js"),[]).then(({data:b})=>b),"v-495b1b82":()=>__vitePreload(()=>import("./6. 递归.html-a9795074.js"),[]).then(({data:b})=>b),"v-448f8146":()=>__vitePreload(()=>import("./7. 二分法三重境界.html-8fe3c118.js"),[]).then(({data:b})=>b),"v-5b2bda71":()=>__vitePreload(()=>import("./配置.html-0082aba6.js"),[]).then(({data:b})=>b),"v-67d5af29":()=>__vitePreload(()=>import("./分库分表.html-806c3370.js"),[]).then(({data:b})=>b),"v-458d213f":()=>__vitePreload(()=>import("./读写分离.html-621f5dfd.js"),[]).then(({data:b})=>b),"v-19bd4e76":()=>__vitePreload(()=>import("./1. 体系结构.html-c421cb90.js"),[]).then(({data:b})=>b),"v-0df9788a":()=>__vitePreload(()=>import("./2. 存储引擎.html-d40c57b1.js"),[]).then(({data:b})=>b),"v-ff7c9288":()=>__vitePreload(()=>import("./1. 索引结构.html-d66f7bf8.js"),[]).then(({data:b})=>b),"v-70059fca":()=>__vitePreload(()=>import("./2. 索引分类.html-4f669625.js"),[]).then(({data:b})=>b),"v-02f6cb50":()=>__vitePreload(()=>import("./3. 性能分析.html-eaef8416.js"),[]).then(({data:b})=>b),"v-2b707058":()=>__vitePreload(()=>import("./4. 使用规则.html-c24a5d40.js"),[]).then(({data:b})=>b),"v-24f44b58":()=>__vitePreload(()=>import("./index.html-b53dea42.js"),[]).then(({data:b})=>b),"v-7126edee":()=>__vitePreload(()=>import("./1. 全局锁.html-247d15e1.js"),[]).then(({data:b})=>b),"v-434af5a2":()=>__vitePreload(()=>import("./2. 表级锁.html-69b87ee9.js"),[]).then(({data:b})=>b),"v-2060c73c":()=>__vitePreload(()=>import("./3. 行级锁.html-10301d45.js"),[]).then(({data:b})=>b),"v-015be349":()=>__vitePreload(()=>import("./index.html-5b877aa8.js"),[]).then(({data:b})=>b),"v-e7235c34":()=>__vitePreload(()=>import("./index.html-69846686.js"),[]).then(({data:b})=>b),"v-6a840a26":()=>__vitePreload(()=>import("./Buffer Pool.html-40f705bc.js"),[]).then(({data:b})=>b),"v-98b322f4":()=>__vitePreload(()=>import("./存储过程.html-06219cc9.js"),[]).then(({data:b})=>b),"v-43096280":()=>__vitePreload(()=>import("./查询过程.html-8878f1f7.js"),[]).then(({data:b})=>b),"v-2b9b6ca2":()=>__vitePreload(()=>import("./1. ACID.html-a88543c6.js"),[]).then(({data:b})=>b),"v-4e6e7a49":()=>__vitePreload(()=>import("./2. 并发问题.html-87cb3e9a.js"),[]).then(({data:b})=>b),"v-bac30082":()=>__vitePreload(()=>import("./3. 隔离级别.html-6f552a68.js"),[]).then(({data:b})=>b),"v-70e72ec0":()=>__vitePreload(()=>import("./4. 传播机制.html-24266284.js"),[]).then(({data:b})=>b),"v-3f4a6a8c":()=>__vitePreload(()=>import("./index.html-90a8a003.js"),[]).then(({data:b})=>b),"v-51a91932":()=>__vitePreload(()=>import("./index.html-7b5757c2.js"),[]).then(({data:b})=>b),"v-3dff3951":()=>__vitePreload(()=>import("./cluster.html-63aefcc8.js"),[]).then(({data:b})=>b),"v-531aadbf":()=>__vitePreload(()=>import("./replication.html-923dde11.js"),[]).then(({data:b})=>b),"v-1523f743":()=>__vitePreload(()=>import("./sentinel.html-9434f809.js"),[]).then(({data:b})=>b),"v-430c5169":()=>__vitePreload(()=>import("./index.html-623b48e0.js"),[]).then(({data:b})=>b),"v-052b696f":()=>__vitePreload(()=>import("./jedis.html-e01474e1.js"),[]).then(({data:b})=>b),"v-f9a399ac":()=>__vitePreload(()=>import("./spring-data-redis.html-df6cae42.js"),[]).then(({data:b})=>b),"v-0405ee87":()=>__vitePreload(()=>import("./generic.html-6617a86a.js"),[]).then(({data:b})=>b),"v-e67a2cf4":()=>__vitePreload(()=>import("./hash.html-90447309.js"),[]).then(({data:b})=>b),"v-315833f6":()=>__vitePreload(()=>import("./list.html-8d56af69.js"),[]).then(({data:b})=>b),"v-5df2755c":()=>__vitePreload(()=>import("./set.html-9179e63f.js"),[]).then(({data:b})=>b),"v-26bb2f82":()=>__vitePreload(()=>import("./sorted-set.html-0707daf6.js"),[]).then(({data:b})=>b),"v-12e03cba":()=>__vitePreload(()=>import("./string.html-4385aa90.js"),[]).then(({data:b})=>b),"v-68faa95e":()=>__vitePreload(()=>import("./feature.html-f13f040c.js"),[]).then(({data:b})=>b),"v-01dd35c2":()=>__vitePreload(()=>import("./AOF.html-65757586.js"),[]).then(({data:b})=>b),"v-cf651cb2":()=>__vitePreload(()=>import("./RDB.html-e5b4bc48.js"),[]).then(({data:b})=>b),"v-24f0391e":()=>__vitePreload(()=>import("./index.html-66585688.js"),[]).then(({data:b})=>b),"v-fe71849e":()=>__vitePreload(()=>import("./function.html-83160c12.js"),[]).then(({data:b})=>b),"v-15b42f9f":()=>__vitePreload(()=>import("./join.html-3fca919d.js"),[]).then(({data:b})=>b),"v-7155f962":()=>__vitePreload(()=>import("./null.html-1a9469f6.js"),[]).then(({data:b})=>b),"v-50f44bf2":()=>__vitePreload(()=>import("./set.html-c1ef65ac.js"),[]).then(({data:b})=>b),"v-32713fab":()=>__vitePreload(()=>import("./sort.html-08919469.js"),[]).then(({data:b})=>b),"v-b61bc5fe":()=>__vitePreload(()=>import("./subquery.html-18faf736.js"),[]).then(({data:b})=>b),"v-26f64b8a":()=>__vitePreload(()=>import("./设计.html-cdcee8c4.js"),[]).then(({data:b})=>b),"v-15c7c82c":()=>__vitePreload(()=>import("./index.html-4b19ffb3.js"),[]).then(({data:b})=>b),"v-1c4e6234":()=>__vitePreload(()=>import("./慢查询.html-4b895879.js"),[]).then(({data:b})=>b),"v-18f5becc":()=>__vitePreload(()=>import("./幂等性.html-26e75dca.js"),[]).then(({data:b})=>b),"v-fa02c2e6":()=>__vitePreload(()=>import("./消息丢失.html-b7f1bc48.js"),[]).then(({data:b})=>b),"v-6e6759ec":()=>__vitePreload(()=>import("./trace-note.html-84bef0f9.js"),[]).then(({data:b})=>b),"v-4ed44f29":()=>__vitePreload(()=>import("./DNS-DRBD-network.html-72ce0838.js"),[]).then(({data:b})=>b),"v-7be630bb":()=>__vitePreload(()=>import("./index.html-27d39f41.js"),[]).then(({data:b})=>b),"v-f2e33722":()=>__vitePreload(()=>import("./load-assessment-and-tuning.html-92f151cb.js"),[]).then(({data:b})=>b),"v-6a7521df":()=>__vitePreload(()=>import("./optimize-server-and-topology.html-d4810ecf.js"),[]).then(({data:b})=>b),"v-0e336dfc":()=>__vitePreload(()=>import("./redundancy-and-load-balancing.html-f7633474.js"),[]).then(({data:b})=>b),"v-5d436f67":()=>__vitePreload(()=>import("./1.1 basic-cmd.html-b7482a0a.js"),[]).then(({data:b})=>b),"v-aa563614":()=>__vitePreload(()=>import("./1.2. vi.html-f2b00054.js"),[]).then(({data:b})=>b),"v-46f8812b":()=>__vitePreload(()=>import("./1.3 三剑客.html-b2f68fdd.js"),[]).then(({data:b})=>b),"v-1aa52699":()=>__vitePreload(()=>import("./10. scheduled-tasks.html-d605cc39.js"),[]).then(({data:b})=>b),"v-102b7812":()=>__vitePreload(()=>import("./11. backups.html-1d90f0ad.js"),[]).then(({data:b})=>b),"v-6f9a0880":()=>__vitePreload(()=>import("./12. software-management.html-fd95f0ad.js"),[]).then(({data:b})=>b),"v-135edba9":()=>__vitePreload(()=>import("./2. account-management.html-8556b426.js"),[]).then(({data:b})=>b),"v-6063ff37":()=>__vitePreload(()=>import("./3. shell.html-7fd94ee4.js"),[]).then(({data:b})=>b),"v-69de2c8f":()=>__vitePreload(()=>import("./4.1 booting.html-9d3f8a2b.js"),[]).then(({data:b})=>b),"v-d27165ae":()=>__vitePreload(()=>import("./4.2 systemd.html-adc9ad79.js"),[]).then(({data:b})=>b),"v-308f7b35":()=>__vitePreload(()=>import("./5. access-ctrl.html-9f7a4c62.js"),[]).then(({data:b})=>b),"v-e9f43e02":()=>__vitePreload(()=>import("./6. process-ctrl.html-9f384132.js"),[]).then(({data:b})=>b),"v-4b9d149c":()=>__vitePreload(()=>import("./7. Filesystem.html-8eb8adb9.js"),[]).then(({data:b})=>b),"v-896b5f1e":()=>__vitePreload(()=>import("./8. Storage.html-03152ab2.js"),[]).then(({data:b})=>b),"v-53ada9b3":()=>__vitePreload(()=>import("./9. Disk Quota.html-cacd6d75.js"),[]).then(({data:b})=>b),"v-690bd11a":()=>__vitePreload(()=>import("./index.html-0e3fd26f.js"),[]).then(({data:b})=>b),"v-091b4a7d":()=>__vitePreload(()=>import("./network-management.html-a4c2ea96.js"),[]).then(({data:b})=>b),"v-517e3dfc":()=>__vitePreload(()=>import("./network-services.html-775364bf.js"),[]).then(({data:b})=>b),"v-341199cc":()=>__vitePreload(()=>import("./rescue.html-1489c107.js"),[]).then(({data:b})=>b),"v-9374ca82":()=>__vitePreload(()=>import("./security.html-e59a23c8.js"),[]).then(({data:b})=>b),"v-4e118aef":()=>__vitePreload(()=>import("./knife4j.html-73bf25fc.js"),[]).then(({data:b})=>b),"v-91c74a40":()=>__vitePreload(()=>import("./swagger.html-40c30771.js"),[]).then(({data:b})=>b),"v-041e4908":()=>__vitePreload(()=>import("./参数.html-fd6d006e.js"),[]).then(({data:b})=>b),"v-2ca4e71c":()=>__vitePreload(()=>import("./查询.html-03ae6de0.js"),[]).then(({data:b})=>b),"v-bfc74c5c":()=>__vitePreload(()=>import("./标签.html-4d03f133.js"),[]).then(({data:b})=>b),"v-bed94cb8":()=>__vitePreload(()=>import("./条件查询.html-2a71a9cf.js"),[]).then(({data:b})=>b),"v-3a2a6658":()=>__vitePreload(()=>import("./查询投影.html-a5e91d45.js"),[]).then(({data:b})=>b),"v-7a74ce20":()=>__vitePreload(()=>import("./index.html-74b19dc0.js"),[]).then(({data:b})=>b),"v-1a0953b3":()=>__vitePreload(()=>import("./Spring MVC.html-c9c9477c.js"),[]).then(({data:b})=>b),"v-c8e33b14":()=>__vitePreload(()=>import("./servlet.html-e974b64c.js"),[]).then(({data:b})=>b),"v-d68d8200":()=>__vitePreload(()=>import("./index.html-11fb8d58.js"),[]).then(({data:b})=>b),"v-501c4172":()=>__vitePreload(()=>import("./index.html-fe378a6b.js"),[]).then(({data:b})=>b),"v-073fc5c3":()=>__vitePreload(()=>import("./代码规范.html-f2f1f05e.js"),[]).then(({data:b})=>b),"v-1c5df1d3":()=>__vitePreload(()=>import("./关键字.html-e0aacf6d.js"),[]).then(({data:b})=>b),"v-6789a301":()=>__vitePreload(()=>import("./异常.html-ebfab2a4.js"),[]).then(({data:b})=>b),"v-47173f46":()=>__vitePreload(()=>import("./运算符.html-f4e6a8cb.js"),[]).then(({data:b})=>b),"v-cb799b10":()=>__vitePreload(()=>import("./Concurrent.html-2ceec0ee.js"),[]).then(({data:b})=>b),"v-b9dfdcac":()=>__vitePreload(()=>import("./index.html-26302c98.js"),[]).then(({data:b})=>b),"v-dbf1abde":()=>__vitePreload(()=>import("./collection.html-dcea0fa3.js"),[]).then(({data:b})=>b),"v-c85546b2":()=>__vitePreload(()=>import("./map.html-d26ed482.js"),[]).then(({data:b})=>b),"v-50d81d6c":()=>__vitePreload(()=>import("./java8.html-d4121ed2.js"),[]).then(({data:b})=>b),"v-d7518ca6":()=>__vitePreload(()=>import("./jmm.html-40b27e32.js"),[]).then(({data:b})=>b),"v-e76cd190":()=>__vitePreload(()=>import("./问题排查.html-b4d98f4e.js"),[]).then(({data:b})=>b),"v-1331a2fc":()=>__vitePreload(()=>import("./index.html-af0e893d.js"),[]).then(({data:b})=>b),"v-08870d52":()=>__vitePreload(()=>import("./单词.html-408a936e.js"),[]).then(({data:b})=>b),"v-7161413e":()=>__vitePreload(()=>import("./句子.html-2a144beb.js"),[]).then(({data:b})=>b),"v-98bd41e4":()=>__vitePreload(()=>import("./段落.html-7ad64f2a.js"),[]).then(({data:b})=>b),"v-2760f36f":()=>__vitePreload(()=>import("./对话练习.html-2e8c0de0.js"),[]).then(({data:b})=>b),"v-7a3b5784":()=>__vitePreload(()=>import("./讲座练习.html-51846f17.js"),[]).then(({data:b})=>b),"v-1196072b":()=>__vitePreload(()=>import("./1.html-c3ce0ae1.js"),[]).then(({data:b})=>b),"v-134adfca":()=>__vitePreload(()=>import("./2.html-10c393aa.js"),[]).then(({data:b})=>b),"v-14ffb869":()=>__vitePreload(()=>import("./3.html-1ca51827.js"),[]).then(({data:b})=>b),"v-442d7e7b":()=>__vitePreload(()=>import("./刷题答案.html-e9b81ed1.js"),[]).then(({data:b})=>b),"v-070b4ce4":()=>__vitePreload(()=>import("./1. 六选三.html-0bc18a4b.js"),[]).then(({data:b})=>b),"v-c7814346":()=>__vitePreload(()=>import("./2. 词汇题.html-4c109ba0.js"),[]).then(({data:b})=>b),"v-3a5e6193":()=>__vitePreload(()=>import("./3. 指代题.html-6bd6d423.js"),[]).then(({data:b})=>b),"v-999605fc":()=>__vitePreload(()=>import("./4. 句子简化题.html-5d3081c6.js"),[]).then(({data:b})=>b),"v-0cc106d2":()=>__vitePreload(()=>import("./5. 句子插入题.html-8dc49ab2.js"),[]).then(({data:b})=>b),"v-73efc5e4":()=>__vitePreload(()=>import("./6. 细节题.html-6f3e7f50.js"),[]).then(({data:b})=>b),"v-4febd898":()=>__vitePreload(()=>import("./8. 推断题.html-cc4de976.js"),[]).then(({data:b})=>b),"v-6838aa16":()=>__vitePreload(()=>import("./9. 目的题.html-0d157967.js"),[]).then(({data:b})=>b),"v-6b616070":()=>__vitePreload(()=>import("./1.html-ea91c8c0.js"),[]).then(({data:b})=>b),"v-76b158ca":()=>__vitePreload(()=>import("./10..html-7eb6fda2.js"),[]).then(({data:b})=>b),"v-f9914250":()=>__vitePreload(()=>import("./12.html-a4080c77.js"),[]).then(({data:b})=>b),"v-1b966efe":()=>__vitePreload(()=>import("./14. .html-1dbc2298.js"),[]).then(({data:b})=>b),"v-ef542e96":()=>__vitePreload(()=>import("./15.html-1020692c.js"),[]).then(({data:b})=>b),"v-ebea7d58":()=>__vitePreload(()=>import("./16.html-94bf6bcb.js"),[]).then(({data:b})=>b),"v-e880cc1a":()=>__vitePreload(()=>import("./17.html-0d4b29d9.js"),[]).then(({data:b})=>b),"v-e5171adc":()=>__vitePreload(()=>import("./18.html-50a85e33.js"),[]).then(({data:b})=>b),"v-e1ad699e":()=>__vitePreload(()=>import("./19.html-990e859e.js"),[]).then(({data:b})=>b),"v-96982e4a":()=>__vitePreload(()=>import("./20.html-5458398e.js"),[]).then(({data:b})=>b),"v-932e7d0c":()=>__vitePreload(()=>import("./21.html-4c7ece3b.js"),[]).then(({data:b})=>b),"v-8c5b1a90":()=>__vitePreload(()=>import("./23.html-41148ec1.js"),[]).then(({data:b})=>b),"v-88f16952":()=>__vitePreload(()=>import("./24.html-413b928a.js"),[]).then(({data:b})=>b),"v-8587b814":()=>__vitePreload(()=>import("./25.html-0410e5c1.js"),[]).then(({data:b})=>b),"v-821e06d6":()=>__vitePreload(()=>import("./26.html-845e4050.js"),[]).then(({data:b})=>b),"v-7eb45598":()=>__vitePreload(()=>import("./27.html-966afe0c.js"),[]).then(({data:b})=>b),"v-7b4aa45a":()=>__vitePreload(()=>import("./28.html-dc5b8240.js"),[]).then(({data:b})=>b),"v-77e0f31c":()=>__vitePreload(()=>import("./29.html-c234bd62.js"),[]).then(({data:b})=>b),"v-2b9ef426":()=>__vitePreload(()=>import("./7. .html-0d24031d.js"),[]).then(({data:b})=>b),"v-5a792faa":()=>__vitePreload(()=>import("./9. .html-593ecded.js"),[]).then(({data:b})=>b),"v-c3160f00":()=>__vitePreload(()=>import("./index.html-0449526f.js"),[]).then(({data:b})=>b),"v-53bc634a":()=>__vitePreload(()=>import("./task2.html-7b4d7abd.js"),[]).then(({data:b})=>b),"v-fcbb4718":()=>__vitePreload(()=>import("./1.html-1e8fffcb.js"),[]).then(({data:b})=>b),"v-9a479324":()=>__vitePreload(()=>import("./10.html-f91c08a6.js"),[]).then(({data:b})=>b),"v-f95195da":()=>__vitePreload(()=>import("./2.html-b59f418c.js"),[]).then(({data:b})=>b),"v-f5e7e49c":()=>__vitePreload(()=>import("./3.html-29886e7c.js"),[]).then(({data:b})=>b),"v-f27e335e":()=>__vitePreload(()=>import("./4.html-2e78cf0c.js"),[]).then(({data:b})=>b),"v-ef148220":()=>__vitePreload(()=>import("./5.html-937fb09a.js"),[]).then(({data:b})=>b),"v-ebaad0e2":()=>__vitePreload(()=>import("./6.html-26451593.js"),[]).then(({data:b})=>b),"v-e8411fa4":()=>__vitePreload(()=>import("./7.html-99dd439d.js"),[]).then(({data:b})=>b),"v-e4d76e66":()=>__vitePreload(()=>import("./8.html-2a3109bd.js"),[]).then(({data:b})=>b),"v-e16dbd28":()=>__vitePreload(()=>import("./9.html-24e51982.js"),[]).then(({data:b})=>b),"v-6d735e26":()=>__vitePreload(()=>import("./1. .html-d49ce12a.js"),[]).then(({data:b})=>b),"v-84e07be8":()=>__vitePreload(()=>import("./2. .html-ebcf84a6.js"),[]).then(({data:b})=>b),"v-0f462a55":()=>__vitePreload(()=>import("./再来人.html-0e50f803.js"),[]).then(({data:b})=>b),"v-604b10c2":()=>__vitePreload(()=>import("./index.html-f38e531a.js"),[]).then(({data:b})=>b),"v-48443ca0":()=>__vitePreload(()=>import("./index.html-ba9a9c2b.js"),[]).then(({data:b})=>b),"v-1c4985c6":()=>__vitePreload(()=>import("./index.html-970a44c9.js"),[]).then(({data:b})=>b),"v-315ce8e2":()=>__vitePreload(()=>import("./index.html-c0cc724c.js"),[]).then(({data:b})=>b),"v-074f1f5b":()=>__vitePreload(()=>import("./1. 逻辑存储结构.html-38108ce7.js"),[]).then(({data:b})=>b),"v-9c53d84a":()=>__vitePreload(()=>import("./2. 引擎架构.html-661cb035.js"),[]).then(({data:b})=>b),"v-840effd6":()=>__vitePreload(()=>import("./3. 事务原理.html-c1637d28.js"),[]).then(({data:b})=>b),"v-1b05a52c":()=>__vitePreload(()=>import("./index.html-f2f277d7.js"),[]).then(({data:b})=>b),"v-3f3cb95e":()=>__vitePreload(()=>import("./批处理优化.html-8b69af7f.js"),[]).then(({data:b})=>b),"v-504e2eb4":()=>__vitePreload(()=>import("./服务端优化.html-ef0dd487.js"),[]).then(({data:b})=>b),"v-23567452":()=>__vitePreload(()=>import("./键值设计.html-86f98dbc.js"),[]).then(({data:b})=>b),"v-7443bfa7":()=>__vitePreload(()=>import("./集群.html-6a9b9202.js"),[]).then(({data:b})=>b),"v-41cd53a5":()=>__vitePreload(()=>import("./distributed-lock.html-94153632.js"),[]).then(({data:b})=>b),"v-9a82766e":()=>__vitePreload(()=>import("./follow.html-cc5f5ad5.js"),[]).then(({data:b})=>b),"v-15bb7bd3":()=>__vitePreload(()=>import("./global-id.html-54d202e1.js"),[]).then(({data:b})=>b),"v-3314e6bb":()=>__vitePreload(()=>import("./nearby.html-af62de6d.js"),[]).then(({data:b})=>b),"v-5301653a":()=>__vitePreload(()=>import("./rate.html-5ab39020.js"),[]).then(({data:b})=>b),"v-827df3ae":()=>__vitePreload(()=>import("./seckill.html-c4305eaf.js"),[]).then(({data:b})=>b),"v-f40c5306":()=>__vitePreload(()=>import("./sign.html-b95c679d.js"),[]).then(({data:b})=>b),"v-429e53da":()=>__vitePreload(()=>import("./uvpv.html-c88e0bcb.js"),[]).then(({data:b})=>b),"v-bd3feee8":()=>__vitePreload(()=>import("./atomic.html-60f0181b.js"),[]).then(({data:b})=>b),"v-3f5d7d5a":()=>__vitePreload(()=>import("./cache-preheat.html-432186ed.js"),[]).then(({data:b})=>b),"v-df376572":()=>__vitePreload(()=>import("./cache-problem.html-5f2bb378.js"),[]).then(({data:b})=>b),"v-72755b99":()=>__vitePreload(()=>import("./consistency-update-strategy.html-9c0fb886.js"),[]).then(({data:b})=>b),"v-abcd1588":()=>__vitePreload(()=>import("./index.html-cae99861.js"),[]).then(({data:b})=>b),"v-0d277b0b":()=>__vitePreload(()=>import("./基本类型.html-b9c94ba5.js"),[]).then(({data:b})=>b),"v-62b1adbc":()=>__vitePreload(()=>import("./数据结构.html-96a9a206.js"),[]).then(({data:b})=>b),"v-110262e4":()=>__vitePreload(()=>import("./特殊类型.html-61534597.js"),[]).then(({data:b})=>b),"v-0faf468c":()=>__vitePreload(()=>import("./内存淘汰策略.html-9a0915d7.js"),[]).then(({data:b})=>b),"v-0befbfde":()=>__vitePreload(()=>import("./过期删除策略.html-b1170c44.js"),[]).then(({data:b})=>b),"v-1668525e":()=>__vitePreload(()=>import("./线程模型.html-edfe95f9.js"),[]).then(({data:b})=>b),"v-23892914":()=>__vitePreload(()=>import("./应用场景.html-5dcae9ad.js"),[]).then(({data:b})=>b),"v-3678f3e0":()=>__vitePreload(()=>import("./概念.html-91380067.js"),[]).then(({data:b})=>b),"v-ff34970a":()=>__vitePreload(()=>import("./用法.html-d582aadb.js"),[]).then(({data:b})=>b),"v-5f46ee29":()=>__vitePreload(()=>import("./后处理器.html-b0de13cb.js"),[]).then(({data:b})=>b),"v-2a5deb4c":()=>__vitePreload(()=>import("./基本概念.html-4912c113.js"),[]).then(({data:b})=>b),"v-31055127":()=>__vitePreload(()=>import("./循环依赖.html-4e2938d4.js"),[]).then(({data:b})=>b),"v-75f558e2":()=>__vitePreload(()=>import("./生命周期.html-2476a3c1.js"),[]).then(({data:b})=>b),"v-29eadb9e":()=>__vitePreload(()=>import("./ioc.html-2a434083.js"),[]).then(({data:b})=>b),"v-dbc33718":()=>__vitePreload(()=>import("./事务.html-e5a01792.js"),[]).then(({data:b})=>b),"v-136d231a":()=>__vitePreload(()=>import("./forkjoin.html-c192d4a0.js"),[]).then(({data:b})=>b),"v-7101117c":()=>__vitePreload(()=>import("./future.html-d141cc09.js"),[]).then(({data:b})=>b),"v-18234947":()=>__vitePreload(()=>import("./乐观锁.html-1303a3e2.js"),[]).then(({data:b})=>b),"v-5517b052":()=>__vitePreload(()=>import("./对比.html-572802a3.js"),[]).then(({data:b})=>b),"v-845e9762":()=>__vitePreload(()=>import("./悲观锁.html-fc48a936.js"),[]).then(({data:b})=>b),"v-7f0bc75b":()=>__vitePreload(()=>import("./index.html-13dbad59.js"),[]).then(({data:b})=>b),"v-70a587ea":()=>__vitePreload(()=>import("./jmm.html-0ccd813e.js"),[]).then(({data:b})=>b),"v-a49aad7c":()=>__vitePreload(()=>import("./volatile.html-c97d2da2.js"),[]).then(({data:b})=>b),"v-4f4311a3":()=>__vitePreload(()=>import("./AQS.html-f77fbc16.js"),[]).then(({data:b})=>b),"v-02071af9":()=>__vitePreload(()=>import("./CountDownLatch.html-6b27c86f.js"),[]).then(({data:b})=>b),"v-83e03870":()=>__vitePreload(()=>import("./CyclicBarrier.html-0bd54c29.js"),[]).then(({data:b})=>b),"v-2b6c26fc":()=>__vitePreload(()=>import("./Semaphore.html-d02ddea5.js"),[]).then(({data:b})=>b),"v-d2b5ffd4":()=>__vitePreload(()=>import("./threadlocal.html-ce27543d.js"),[]).then(({data:b})=>b),"v-4f81662d":()=>__vitePreload(()=>import("./线程.html-b8db0e2a.js"),[]).then(({data:b})=>b),"v-e189f522":()=>__vitePreload(()=>import("./线程池.html-22db6b88.js"),[]).then(({data:b})=>b),"v-4fda0a50":()=>__vitePreload(()=>import("./线程状态.html-7f55e29c.js"),[]).then(({data:b})=>b),"v-dcc7ce0c":()=>__vitePreload(()=>import("./内部类.html-56b63757.js"),[]).then(({data:b})=>b),"v-917eeb5c":()=>__vitePreload(()=>import("./工具类.html-b7e5c6c7.js"),[]).then(({data:b})=>b),"v-67db80ff":()=>__vitePreload(()=>import("./常见类.html-2c3b52dd.js"),[]).then(({data:b})=>b),"v-57aa1d68":()=>__vitePreload(()=>import("./面向对象.html-9a2038b1.js"),[]).then(({data:b})=>b),"v-b610beba":()=>__vitePreload(()=>import("./基本类型.html-3998f8f6.js"),[]).then(({data:b})=>b),"v-63ce032a":()=>__vitePreload(()=>import("./数组.html-a8b92218.js"),[]).then(({data:b})=>b),"v-1df68cd2":()=>__vitePreload(()=>import("./内存区域.html-89c4eba3.js"),[]).then(({data:b})=>b),"v-09e365e1":()=>__vitePreload(()=>import("./内存泄漏.html-11afadf9.js"),[]).then(({data:b})=>b),"v-63a3cb8f":()=>__vitePreload(()=>import("./垃圾回收算法.html-6a7b34ce.js"),[]).then(({data:b})=>b),"v-e441e7a2":()=>__vitePreload(()=>import("./垃圾收集器.html-dc4088f4.js"),[]).then(({data:b})=>b),"v-212567eb":()=>__vitePreload(()=>import("./对象死亡判定.html-a3100922.js"),[]).then(({data:b})=>b),"v-8abf6c9c":()=>__vitePreload(()=>import("./引用类型.html-332518c3.js"),[]).then(({data:b})=>b),"v-1e2d9eaa":()=>__vitePreload(()=>import("./类加载器.html-c0fabdd7.js"),[]).then(({data:b})=>b),"v-97c49406":()=>__vitePreload(()=>import("./类加载时机.html-0bd580ae.js"),[]).then(({data:b})=>b),"v-52c50185":()=>__vitePreload(()=>import("./类加载过程.html-f4e861be.js"),[]).then(({data:b})=>b),"v-d0d15838":()=>__vitePreload(()=>import("./2. 长难句.html-7264a300.js"),[]).then(({data:b})=>b),"v-ea34918a":()=>__vitePreload(()=>import("./3. 单句功能判断方法论.html-963567a9.js"),[]).then(({data:b})=>b),"v-6d8096fe":()=>__vitePreload(()=>import("./4. 句间关系与句子功能.html-b33e24fd.js"),[]).then(({data:b})=>b),"v-0fbed879":()=>__vitePreload(()=>import("./6. 全文结构与主旨题.html-6833cab0.js"),[]).then(({data:b})=>b),"v-43154c5b":()=>__vitePreload(()=>import("./7. 功能线综合练习.html-f961f605.js"),[]).then(({data:b})=>b),"v-4f0993bc":()=>__vitePreload(()=>import("./8. 高效信息提取与信息题.html-39020125.js"),[]).then(({data:b})=>b),"v-ed6ad178":()=>__vitePreload(()=>import("./9. 功能与信息线综合.html-30926b31.js"),[]).then(({data:b})=>b),"v-5cd31434":()=>__vitePreload(()=>import("./index.html-432225d6.js"),[]).then(({data:b})=>b),"v-631280a5":()=>__vitePreload(()=>import("./1. 事实信息题.html-3fa10fc0.js"),[]).then(({data:b})=>b),"v-2c848bba":()=>__vitePreload(()=>import("./10. 归纳与解释.html-b08a2a7c.js"),[]).then(({data:b})=>b),"v-7f1c40a5":()=>__vitePreload(()=>import("./2.0 主旨题.html-71409f55.js"),[]).then(({data:b})=>b),"v-41488cf8":()=>__vitePreload(()=>import("./2.1 句子作用题.html-952ea065.js"),[]).then(({data:b})=>b),"v-4b0be9ad":()=>__vitePreload(()=>import("./2.2 信息目的题.html-4512c61f.js"),[]).then(({data:b})=>b),"v-7c7306e3":()=>__vitePreload(()=>import("./3. 推断题.html-75c809e8.js"),[]).then(({data:b})=>b),"v-0a3572c0":()=>__vitePreload(()=>import("./4. 可多选题.html-4a21700d.js"),[]).then(({data:b})=>b),"v-1d0812fd":()=>__vitePreload(()=>import("./5. 态度题.html-e8f60852.js"),[]).then(({data:b})=>b),"v-21ff79cf":()=>__vitePreload(()=>import("./7. 类比题.html-7212974b.js"),[]).then(({data:b})=>b),"v-52ee249c":()=>__vitePreload(()=>import("./8. 否定事实信息题.html-8a854c08.js"),[]).then(({data:b})=>b),"v-96b71298":()=>__vitePreload(()=>import("./9. 词汇题.html-535256b2.js"),[]).then(({data:b})=>b),"v-c796c7da":()=>__vitePreload(()=>import("./index.html-55cd210e.js"),[]).then(({data:b})=>b),"v-9db00862":()=>__vitePreload(()=>import("./index.html-287b17c1.js"),[]).then(({data:b})=>b),"v-6ef4e9e0":()=>__vitePreload(()=>import("./index.html-f06f22f6.js"),[]).then(({data:b})=>b),"v-502d46de":()=>__vitePreload(()=>import("./index.html-57a0d54f.js"),[]).then(({data:b})=>b),"v-670668a4":()=>__vitePreload(()=>import("./index.html-320cf18e.js"),[]).then(({data:b})=>b),"v-215ec3a6":()=>__vitePreload(()=>import("./1. 虚拟头节点.html-3c11d827.js"),[]).then(({data:b})=>b),"v-373a2774":()=>__vitePreload(()=>import("./2. 基本技巧.html-709c53b2.js"),[]).then(({data:b})=>b),"v-5f92dfbb":()=>__vitePreload(()=>import("./3. 反转链表.html-a978b6ab.js"),[]).then(({data:b})=>b),"v-4f3994ec":()=>__vitePreload(()=>import("./4. 链表中点.html-e4f91ce3.js"),[]).then(({data:b})=>b),"v-64b49b30":()=>__vitePreload(()=>import("./5. 链表求环.html-2b928025.js"),[]).then(({data:b})=>b),"v-ac829028":()=>__vitePreload(()=>import("./index.html-649b60ad.js"),[]).then(({data:b})=>b),"v-5c15b7e2":()=>__vitePreload(()=>import("./index.html-bec61bea.js"),[]).then(({data:b})=>b),"v-09c20ff4":()=>__vitePreload(()=>import("./index.html-42bb6d88.js"),[]).then(({data:b})=>b),"v-f9d5596c":()=>__vitePreload(()=>import("./index.html-21b24ea4.js"),[]).then(({data:b})=>b),"v-2feabdf0":()=>__vitePreload(()=>import("./浮点数.html-6860b579.js"),[]).then(({data:b})=>b),"v-4e1b354c":()=>__vitePreload(()=>import("./答案集.html-fe5d2dea.js"),[]).then(({data:b})=>b),"v-28281b72":()=>__vitePreload(()=>import("./输入集.html-04a7dc7b.js"),[]).then(({data:b})=>b),"v-12108c54":()=>__vitePreload(()=>import("./index.html-b05f715d.js"),[]).then(({data:b})=>b),"v-675b1dd5":()=>__vitePreload(()=>import("./股票问题.html-2a21b914.js"),[]).then(({data:b})=>b),"v-2a47af17":()=>__vitePreload(()=>import("./分割.html-34bea6e7.js"),[]).then(({data:b})=>b),"v-05848cc6":()=>__vitePreload(()=>import("./组合.html-53a3ffe0.js"),[]).then(({data:b})=>b),"v-5ad3f066":()=>__vitePreload(()=>import("./选择.html-06d9c28f.js"),[]).then(({data:b})=>b),"v-cd92eada":()=>__vitePreload(()=>import("./index.html-75e2394d.js"),[]).then(({data:b})=>b),"v-703fbedc":()=>__vitePreload(()=>import("./划分方法.html-399f8be2.js"),[]).then(({data:b})=>b),"v-36bfb854":()=>__vitePreload(()=>import("./index.html-98456985.js"),[]).then(({data:b})=>b),"v-0659a534":()=>__vitePreload(()=>import("./index.html-47900ee3.js"),[]).then(({data:b})=>b),"v-06cc4f6b":()=>__vitePreload(()=>import("./index.html-f338f903.js"),[]).then(({data:b})=>b),"v-3706649a":()=>__vitePreload(()=>import("./404.html-4fe108a5.js"),[]).then(({data:b})=>b),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-4ba5aa3e.js"),[]).then(({data:b})=>b),"v-744d024e":()=>__vitePreload(()=>import("./index.html-cc6244f6.js"),[]).then(({data:b})=>b),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-2486cd8a.js"),[]).then(({data:b})=>b),"v-75ed4ea4":()=>__vitePreload(()=>import("./index.html-ad0b1183.js"),[]).then(({data:b})=>b),"v-d804e652":()=>__vitePreload(()=>import("./index.html-8fd03f67.js"),[]).then(({data:b})=>b),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-8351a9d6.js"),[]).then(({data:b})=>b),"v-01560935":()=>__vitePreload(()=>import("./index.html-c0d9922e.js"),[]).then(({data:b})=>b),"v-fbb94a6e":()=>__vitePreload(()=>import("./index.html-2f876940.js"),[]).then(({data:b})=>b),"v-540234fd":()=>__vitePreload(()=>import("./index.html-ebf3880d.js"),[]).then(({data:b})=>b),"v-54d7ff21":()=>__vitePreload(()=>import("./index.html-a17b3c03.js"),[]).then(({data:b})=>b),"v-1ad78213":()=>__vitePreload(()=>import("./index.html-bafa897d.js"),[]).then(({data:b})=>b),"v-5b30cfc6":()=>__vitePreload(()=>import("./index.html-ae46df66.js"),[]).then(({data:b})=>b),"v-2c3ee7f5":()=>__vitePreload(()=>import("./index.html-1e2ba75f.js"),[]).then(({data:b})=>b),"v-27b02be6":()=>__vitePreload(()=>import("./index.html-96662101.js"),[]).then(({data:b})=>b),"v-2a32a3a8":()=>__vitePreload(()=>import("./index.html-6af2b025.js"),[]).then(({data:b})=>b),"v-03ba1c5a":()=>__vitePreload(()=>import("./index.html-b3a95f74.js"),[]).then(({data:b})=>b),"v-16890533":()=>__vitePreload(()=>import("./index.html-e9e4428d.js"),[]).then(({data:b})=>b),"v-05bf9c12":()=>__vitePreload(()=>import("./index.html-0b6c262c.js"),[]).then(({data:b})=>b),"v-d28a2a8a":()=>__vitePreload(()=>import("./index.html-a9a7cc5a.js"),[]).then(({data:b})=>b),"v-2e14b8c3":()=>__vitePreload(()=>import("./index.html-83f18c81.js"),[]).then(({data:b})=>b),"v-1397518c":()=>__vitePreload(()=>import("./index.html-8466c1f7.js"),[]).then(({data:b})=>b),"v-d4827004":()=>__vitePreload(()=>import("./index.html-429db426.js"),[]).then(({data:b})=>b),"v-41412eae":()=>__vitePreload(()=>import("./index.html-cfe5afe2.js"),[]).then(({data:b})=>b),"v-ac203710":()=>__vitePreload(()=>import("./index.html-0dd0e7bb.js"),[]).then(({data:b})=>b),"v-d908375e":()=>__vitePreload(()=>import("./index.html-13cc5534.js"),[]).then(({data:b})=>b),"v-03d1f283":()=>__vitePreload(()=>import("./index.html-f18df2ba.js"),[]).then(({data:b})=>b),"v-072edc12":()=>__vitePreload(()=>import("./index.html-4351095d.js"),[]).then(({data:b})=>b),"v-331fe9d7":()=>__vitePreload(()=>import("./index.html-8fa2febe.js"),[]).then(({data:b})=>b),"v-6905c52d":()=>__vitePreload(()=>import("./index.html-ec1648a3.js"),[]).then(({data:b})=>b),"v-24d008e3":()=>__vitePreload(()=>import("./index.html-67940211.js"),[]).then(({data:b})=>b),"v-31a38f34":()=>__vitePreload(()=>import("./index.html-c68399ec.js"),[]).then(({data:b})=>b),"v-58bb7b92":()=>__vitePreload(()=>import("./index.html-6274d2bf.js"),[]).then(({data:b})=>b),"v-012340a5":()=>__vitePreload(()=>import("./index.html-71fa0998.js"),[]).then(({data:b})=>b),"v-78e0ca6a":()=>__vitePreload(()=>import("./index.html-c9d9c52a.js"),[]).then(({data:b})=>b)},siteData$1=JSON.parse(`{"base":"/blog/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/blog/favicon.ico"}],["link",{"rel":"icon","href":"/blog/assets/icon/512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/blog/assets/icon/196.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/blog/assets/icon/512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/blog/assets/icon/196.png","type":"image/png","sizes":"196x196"}],["link",{"rel":"manifest","href":"/blog/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"/blog/assets/icon/152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"/blog/assets/icon/144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"en-US","title":"David's Blog","description":"a developer of multiple interests"},"/zh/":{"lang":"zh-CN","title":"David的博客","description":"一名涉猎广泛的开发者"}}}`),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-66a7db7f.js"),["assets/index.html-66a7db7f.js","assets/framework-e5d7a6b2.js"])),"v-184f4da6":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-dc0a0da0.js"),["assets/intro.html-dc0a0da0.js","assets/framework-e5d7a6b2.js"])),"v-b9c2d34a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-92c28264.js"),["assets/index.html-92c28264.js","assets/framework-e5d7a6b2.js"])),"v-0dd5d98e":defineAsyncComponent(()=>__vitePreload(()=>import("./论文.html-b3da22ff.js"),["assets/论文.html-b3da22ff.js","assets/framework-e5d7a6b2.js"])),"v-439cccae":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6c3192b5.js"),["assets/index.html-6c3192b5.js","assets/framework-e5d7a6b2.js"])),"v-2d0ad528":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-638e548b.js"),["assets/index.html-638e548b.js","assets/framework-e5d7a6b2.js"])),"v-858cfdd6":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-3f8e0807.js"),["assets/intro.html-3f8e0807.js","assets/framework-e5d7a6b2.js"])),"v-269ae70f":defineAsyncComponent(()=>__vitePreload(()=>import("./slides.html-821a913b.js"),["assets/slides.html-821a913b.js","assets/framework-e5d7a6b2.js"])),"v-e394a960":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 区块链发展.html-7a31d08a.js"),["assets/1. 区块链发展.html-7a31d08a.js","assets/framework-e5d7a6b2.js"])),"v-1c105e2a":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 密码学基础.html-c0fc50c7.js"),["assets/2. 密码学基础.html-c0fc50c7.js","assets/framework-e5d7a6b2.js"])),"v-524dd07d":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 秘密共享.html-dce487c0.js"),["assets/3. 秘密共享.html-dce487c0.js","assets/framework-e5d7a6b2.js"])),"v-39134fda":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 哈希函数.html-f0beaaab.js"),["assets/4. 哈希函数.html-f0beaaab.js","assets/framework-e5d7a6b2.js"])),"v-37115d34":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 数字货币.html-3af1c584.js"),["assets/5. 数字货币.html-3af1c584.js","assets/framework-e5d7a6b2.js"])),"v-ad51a322":defineAsyncComponent(()=>__vitePreload(()=>import("./6. 共识机制.html-3a561ebb.js"),["assets/6. 共识机制.html-3a561ebb.js","assets/framework-e5d7a6b2.js"])),"v-11c61338":defineAsyncComponent(()=>__vitePreload(()=>import("./7. pow.html-748f36cf.js"),["assets/7. pow.html-748f36cf.js","assets/framework-e5d7a6b2.js"])),"v-6e0be950":defineAsyncComponent(()=>__vitePreload(()=>import("./8. Fabric.html-7d56c58b.js"),["assets/8. Fabric.html-7d56c58b.js","assets/framework-e5d7a6b2.js"])),"v-408c76ae":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1800bb3d.js"),["assets/index.html-1800bb3d.js","assets/framework-e5d7a6b2.js"])),"v-9c8a184c":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 判别学习方法.html-e4de8ea2.js"),["assets/1. 判别学习方法.html-e4de8ea2.js","assets/framework-e5d7a6b2.js"])),"v-17cf18c3":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 生成学习方法.html-dc4eaf3f.js"),["assets/2. 生成学习方法.html-dc4eaf3f.js","assets/framework-e5d7a6b2.js"])),"v-2aeb94c0":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 决策树.html-f1b89c93.js"),["assets/3. 决策树.html-f1b89c93.js","assets/framework-e5d7a6b2.js"])),"v-169528f7":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 集成学习.html-4ca9f794.js"),["assets/4. 集成学习.html-4ca9f794.js","assets/framework-e5d7a6b2.js"])),"v-15eaf20e":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 随机森林.html-50accfce.js"),["assets/5. 随机森林.html-50accfce.js","assets/framework-e5d7a6b2.js"])),"v-44446262":defineAsyncComponent(()=>__vitePreload(()=>import("./6. SVM.html-feb80fa1.js"),["assets/6. SVM.html-feb80fa1.js","assets/framework-e5d7a6b2.js"])),"v-ae5df412":defineAsyncComponent(()=>__vitePreload(()=>import("./7. CNN.html-fffd7556.js"),["assets/7. CNN.html-fffd7556.js","assets/framework-e5d7a6b2.js"])),"v-a4f4a4ee":defineAsyncComponent(()=>__vitePreload(()=>import("./8. RNN.html-9d56fc1d.js"),["assets/8. RNN.html-9d56fc1d.js","assets/framework-e5d7a6b2.js"])),"v-26fa744b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-248a8091.js"),["assets/index.html-248a8091.js","assets/framework-e5d7a6b2.js"])),"v-758e153b":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 课程引入.html-d73c452d.js"),["assets/1. 课程引入.html-d73c452d.js","assets/framework-e5d7a6b2.js"])),"v-caba3efa":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 电路分析.html-db6a98f1.js"),["assets/2. 电路分析.html-db6a98f1.js","assets/framework-e5d7a6b2.js"])),"v-a2c6403c":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 传感器.html-11a3211e.js"),["assets/3. 传感器.html-11a3211e.js","assets/framework-e5d7a6b2.js"])),"v-15123ac3":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 逻辑电路.html-3266ef94.js"),["assets/4. 逻辑电路.html-3266ef94.js","assets/framework-e5d7a6b2.js"])),"v-7be0c5c5":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 信息处理.html-df8112c7.js"),["assets/5. 信息处理.html-df8112c7.js","assets/framework-e5d7a6b2.js"])),"v-3e6b0702":defineAsyncComponent(()=>__vitePreload(()=>import("./6. 数字信号处理.html-9b954c3b.js"),["assets/6. 数字信号处理.html-9b954c3b.js","assets/framework-e5d7a6b2.js"])),"v-6f144404":defineAsyncComponent(()=>__vitePreload(()=>import("./7. 数字图像处理.html-d0a1b1f9.js"),["assets/7. 数字图像处理.html-d0a1b1f9.js","assets/framework-e5d7a6b2.js"])),"v-ede14f50":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-774a7aa9.js"),["assets/index.html-774a7aa9.js","assets/framework-e5d7a6b2.js"])),"v-038a238a":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-8564d0ea.js"),["assets/1.html-8564d0ea.js","assets/framework-e5d7a6b2.js"])),"v-5f917da2":defineAsyncComponent(()=>__vitePreload(()=>import("./11. Docker.html-27bbd983.js"),["assets/11. Docker.html-27bbd983.js","assets/framework-e5d7a6b2.js"])),"v-51ba0f86":defineAsyncComponent(()=>__vitePreload(()=>import("./13. Cloud.html-c280342d.js"),["assets/13. Cloud.html-c280342d.js","assets/framework-e5d7a6b2.js"])),"v-76758d33":defineAsyncComponent(()=>__vitePreload(()=>import("./15.html-f7a9b9bd.js"),["assets/15.html-f7a9b9bd.js","assets/framework-e5d7a6b2.js"])),"v-053efc29":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-1fb7fc70.js"),["assets/2.html-1fb7fc70.js","assets/framework-e5d7a6b2.js"])),"v-426d42b4":defineAsyncComponent(()=>__vitePreload(()=>import("./3. Spring.html-1bcab9c9.js"),["assets/3. Spring.html-1bcab9c9.js","assets/framework-e5d7a6b2.js"])),"v-7f4986f6":defineAsyncComponent(()=>__vitePreload(()=>import("./4. Spring.html-4569d518.js"),["assets/4. Spring.html-4569d518.js","assets/framework-e5d7a6b2.js"])),"v-77e76ddc":defineAsyncComponent(()=>__vitePreload(()=>import("./5. SpringBoot.html-b10fe84d.js"),["assets/5. SpringBoot.html-b10fe84d.js","assets/framework-e5d7a6b2.js"])),"v-7b7b747c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-14496b50.js"),["assets/index.html-14496b50.js","assets/framework-e5d7a6b2.js"])),"v-3f37697a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5499c789.js"),["assets/index.html-5499c789.js","assets/framework-e5d7a6b2.js"])),"v-4d98b8f6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2dbed5a6.js"),["assets/index.html-2dbed5a6.js","assets/framework-e5d7a6b2.js"])),"v-61ad84b0":defineAsyncComponent(()=>__vitePreload(()=>import("./network-dynamics.html-94c55bb4.js"),["assets/network-dynamics.html-94c55bb4.js","assets/framework-e5d7a6b2.js"])),"v-44ec96d0":defineAsyncComponent(()=>__vitePreload(()=>import("./1. VR.html-ae930e6f.js"),["assets/1. VR.html-ae930e6f.js","assets/framework-e5d7a6b2.js"])),"v-8feca790":defineAsyncComponent(()=>__vitePreload(()=>import("./2. VRML.html-f4f3cf71.js"),["assets/2. VRML.html-f4f3cf71.js","assets/framework-e5d7a6b2.js"])),"v-0544da66":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 计算机图形学基础.html-c4c08c81.js"),["assets/3. 计算机图形学基础.html-c4c08c81.js","assets/framework-e5d7a6b2.js"])),"v-d3b6a002":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 3ds.html-91ecff7e.js"),["assets/4. 3ds.html-91ecff7e.js","assets/framework-e5d7a6b2.js"])),"v-75b582f6":defineAsyncComponent(()=>__vitePreload(()=>import("./5. VR应用设计.html-a805d759.js"),["assets/5. VR应用设计.html-a805d759.js","assets/framework-e5d7a6b2.js"])),"v-05eb9b21":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1902bf29.js"),["assets/index.html-1902bf29.js","assets/framework-e5d7a6b2.js"])),"v-1be737d6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3325ced1.js"),["assets/index.html-3325ced1.js","assets/framework-e5d7a6b2.js"])),"v-77b52ea4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ac14327d.js"),["assets/index.html-ac14327d.js","assets/framework-e5d7a6b2.js"])),"v-4f59b344":defineAsyncComponent(()=>__vitePreload(()=>import("./寒假学习计划.html-e8acd5e9.js"),["assets/寒假学习计划.html-e8acd5e9.js","assets/framework-e5d7a6b2.js"])),"v-e410df86":defineAsyncComponent(()=>__vitePreload(()=>import("./英语学习计划.html-aa9a8f06.js"),["assets/英语学习计划.html-aa9a8f06.js","assets/framework-e5d7a6b2.js"])),"v-10591812":defineAsyncComponent(()=>__vitePreload(()=>import("./主管面.html-06839506.js"),["assets/主管面.html-06839506.js","assets/framework-e5d7a6b2.js"])),"v-e4de8f16":defineAsyncComponent(()=>__vitePreload(()=>import("./反问.html-cabfba63.js"),["assets/反问.html-cabfba63.js","assets/framework-e5d7a6b2.js"])),"v-1c5516a4":defineAsyncComponent(()=>__vitePreload(()=>import("./总结.html-630e0c90.js"),["assets/总结.html-630e0c90.js","assets/framework-e5d7a6b2.js"])),"v-e7fcc674":defineAsyncComponent(()=>__vitePreload(()=>import("./工作总结.html-7d6ec249.js"),["assets/工作总结.html-7d6ec249.js","assets/framework-e5d7a6b2.js"])),"v-16cbeb16":defineAsyncComponent(()=>__vitePreload(()=>import("./技术栈.html-794d5d3d.js"),["assets/技术栈.html-794d5d3d.js","assets/framework-e5d7a6b2.js"])),"v-7559fca0":defineAsyncComponent(()=>__vitePreload(()=>import("./投递.html-cb032892.js"),["assets/投递.html-cb032892.js","assets/framework-e5d7a6b2.js"])),"v-76befe12":defineAsyncComponent(()=>__vitePreload(()=>import("./程序员简历指南.html-139a984c.js"),["assets/程序员简历指南.html-139a984c.js","assets/framework-e5d7a6b2.js"])),"v-13fa91a7":defineAsyncComponent(()=>__vitePreload(()=>import("./自我介绍.html-dea0ec8d.js"),["assets/自我介绍.html-dea0ec8d.js","assets/framework-e5d7a6b2.js"])),"v-15b61052":defineAsyncComponent(()=>__vitePreload(()=>import("./面试经验.html-35d8c458.js"),["assets/面试经验.html-35d8c458.js","assets/framework-e5d7a6b2.js"])),"v-584aef61":defineAsyncComponent(()=>__vitePreload(()=>import("./jmeter.html-75d4f161.js"),["assets/jmeter.html-75d4f161.js","assets/framework-e5d7a6b2.js"])),"v-17903938":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a883eb86.js"),["assets/index.html-a883eb86.js","assets/framework-e5d7a6b2.js"])),"v-59a7c044":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b0f9f6c1.js"),["assets/index.html-b0f9f6c1.js","assets/framework-e5d7a6b2.js"])),"v-62ae8cb0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5e7c587d.js"),["assets/index.html-5e7c587d.js","assets/framework-e5d7a6b2.js"])),"v-4eeecf07":defineAsyncComponent(()=>__vitePreload(()=>import("./计划.html-7d9d5dc6.js"),["assets/计划.html-7d9d5dc6.js","assets/framework-e5d7a6b2.js"])),"v-a7be60d0":defineAsyncComponent(()=>__vitePreload(()=>import("./BL.html-d728a050.js"),["assets/BL.html-d728a050.js","assets/framework-e5d7a6b2.js"])),"v-5cca2bb4":defineAsyncComponent(()=>__vitePreload(()=>import("./PHB.html-cd274f4c.js"),["assets/PHB.html-cd274f4c.js","assets/framework-e5d7a6b2.js"])),"v-55f6c938":defineAsyncComponent(()=>__vitePreload(()=>import("./PHD.html-698617f4.js"),["assets/PHD.html-698617f4.js","assets/framework-e5d7a6b2.js"])),"v-58f3d4b0":defineAsyncComponent(()=>__vitePreload(()=>import("./文书.html-3747b1db.js"),["assets/文书.html-3747b1db.js","assets/framework-e5d7a6b2.js"])),"v-2b64e284":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a0a63999.js"),["assets/index.html-a0a63999.js","assets/framework-e5d7a6b2.js"])),"v-c1942916":defineAsyncComponent(()=>__vitePreload(()=>import("./disable.html-43e86445.js"),["assets/disable.html-43e86445.js","assets/framework-e5d7a6b2.js"])),"v-65c00218":defineAsyncComponent(()=>__vitePreload(()=>import("./encrypt.html-b057fa98.js"),["assets/encrypt.html-b057fa98.js","assets/framework-e5d7a6b2.js"])),"v-36295574":defineAsyncComponent(()=>__vitePreload(()=>import("./markdown.html-c5be2597.js"),["assets/markdown.html-c5be2597.js","assets/framework-e5d7a6b2.js"])),"v-62ced1a6":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-ea34f609.js"),["assets/page.html-ea34f609.js","assets/framework-e5d7a6b2.js"])),"v-9ef49308":defineAsyncComponent(()=>__vitePreload(()=>import("./cherry.html-6c7651b1.js"),["assets/cherry.html-6c7651b1.js","assets/framework-e5d7a6b2.js"])),"v-3fbd497c":defineAsyncComponent(()=>__vitePreload(()=>import("./dragonfruit.html-368fc578.js"),["assets/dragonfruit.html-368fc578.js","assets/framework-e5d7a6b2.js"])),"v-46587e86":defineAsyncComponent(()=>__vitePreload(()=>import("./strawberry.html-26286c43.js"),["assets/strawberry.html-26286c43.js","assets/framework-e5d7a6b2.js"])),"v-56a32aab":defineAsyncComponent(()=>__vitePreload(()=>import("./tomato.html-afb122d6.js"),["assets/tomato.html-afb122d6.js","assets/framework-e5d7a6b2.js"])),"v-cb925366":defineAsyncComponent(()=>__vitePreload(()=>import("./大纲.html-37671a10.js"),["assets/大纲.html-37671a10.js","assets/framework-e5d7a6b2.js"])),"v-65fed5a9":defineAsyncComponent(()=>__vitePreload(()=>import("./期末.html-0e5f55f2.js"),["assets/期末.html-0e5f55f2.js","assets/framework-e5d7a6b2.js"])),"v-eda53cb6":defineAsyncComponent(()=>__vitePreload(()=>import("./资料.html-b54800f0.js"),["assets/资料.html-b54800f0.js","assets/framework-e5d7a6b2.js"])),"v-8580ea64":defineAsyncComponent(()=>__vitePreload(()=>import("./实验1.html-b98b2a55.js"),["assets/实验1.html-b98b2a55.js","assets/framework-e5d7a6b2.js"])),"v-82173926":defineAsyncComponent(()=>__vitePreload(()=>import("./实验2.html-48881087.js"),["assets/实验2.html-48881087.js","assets/framework-e5d7a6b2.js"])),"v-7ead87e8":defineAsyncComponent(()=>__vitePreload(()=>import("./实验3.html-f82c33d9.js"),["assets/实验3.html-f82c33d9.js","assets/framework-e5d7a6b2.js"])),"v-19e12e64":defineAsyncComponent(()=>__vitePreload(()=>import("./测验1.html-ff40df53.js"),["assets/测验1.html-ff40df53.js","assets/framework-e5d7a6b2.js"])),"v-16777d26":defineAsyncComponent(()=>__vitePreload(()=>import("./测验2.html-90a8809a.js"),["assets/测验2.html-90a8809a.js","assets/framework-e5d7a6b2.js"])),"v-7a39bf00":defineAsyncComponent(()=>__vitePreload(()=>import("./大作业.html-8cf9bb2a.js"),["assets/大作业.html-8cf9bb2a.js","assets/framework-e5d7a6b2.js"])),"v-806780e0":defineAsyncComponent(()=>__vitePreload(()=>import("./讲稿.html-347ac6af.js"),["assets/讲稿.html-347ac6af.js","assets/framework-e5d7a6b2.js"])),"v-881a2a42":defineAsyncComponent(()=>__vitePreload(()=>import("./作业1.html-9cd01d0f.js"),["assets/作业1.html-9cd01d0f.js","assets/framework-e5d7a6b2.js"])),"v-84b07904":defineAsyncComponent(()=>__vitePreload(()=>import("./作业2.html-9ad4230b.js"),["assets/作业2.html-9ad4230b.js","assets/framework-e5d7a6b2.js"])),"v-8146c7c6":defineAsyncComponent(()=>__vitePreload(()=>import("./作业3.html-6e83dbb4.js"),["assets/作业3.html-6e83dbb4.js","assets/framework-e5d7a6b2.js"])),"v-7ddd1688":defineAsyncComponent(()=>__vitePreload(()=>import("./作业4.html-2486504c.js"),["assets/作业4.html-2486504c.js","assets/framework-e5d7a6b2.js"])),"v-7ff1e5e5":defineAsyncComponent(()=>__vitePreload(()=>import("./期末.html-e1646792.js"),["assets/期末.html-e1646792.js","assets/framework-e5d7a6b2.js"])),"v-6869cf82":defineAsyncComponent(()=>__vitePreload(()=>import("./测验.html-a481696e.js"),["assets/测验.html-a481696e.js","assets/framework-e5d7a6b2.js"])),"v-edfa1c3e":defineAsyncComponent(()=>__vitePreload(()=>import("./文献汇总.html-4d83c605.js"),["assets/文献汇总.html-4d83c605.js","assets/framework-e5d7a6b2.js"])),"v-444e8e82":defineAsyncComponent(()=>__vitePreload(()=>import("./翻转课堂.html-0dd50aa3.js"),["assets/翻转课堂.html-0dd50aa3.js","assets/framework-e5d7a6b2.js"])),"v-01fbf701":defineAsyncComponent(()=>__vitePreload(()=>import("./问答.html-2eb6c5f5.js"),["assets/问答.html-2eb6c5f5.js","assets/framework-e5d7a6b2.js"])),"v-dadd1a02":defineAsyncComponent(()=>__vitePreload(()=>import("./报告.html-0f87ec78.js"),["assets/报告.html-0f87ec78.js","assets/framework-e5d7a6b2.js"])),"v-21be9004":defineAsyncComponent(()=>__vitePreload(()=>import("./文档.html-8fa2da8f.js"),["assets/文档.html-8fa2da8f.js","assets/framework-e5d7a6b2.js"])),"v-1e28a188":defineAsyncComponent(()=>__vitePreload(()=>import("./问题.html-c400e38e.js"),["assets/问题.html-c400e38e.js","assets/framework-e5d7a6b2.js"])),"v-0b82bae4":defineAsyncComponent(()=>__vitePreload(()=>import("./系统分析.html-62ff9b30.js"),["assets/系统分析.html-62ff9b30.js","assets/framework-e5d7a6b2.js"])),"v-4bfca452":defineAsyncComponent(()=>__vitePreload(()=>import("./前端设计.html-25a92576.js"),["assets/前端设计.html-25a92576.js","assets/framework-e5d7a6b2.js"])),"v-55484202":defineAsyncComponent(()=>__vitePreload(()=>import("./后端设计.html-5ba4f4e3.js"),["assets/后端设计.html-5ba4f4e3.js","assets/framework-e5d7a6b2.js"])),"v-40277606":defineAsyncComponent(()=>__vitePreload(()=>import("./工作贡献统计.html-8efc051e.js"),["assets/工作贡献统计.html-8efc051e.js","assets/framework-e5d7a6b2.js"])),"v-dd640a06":defineAsyncComponent(()=>__vitePreload(()=>import("./测试.html-e10588d9.js"),["assets/测试.html-e10588d9.js","assets/framework-e5d7a6b2.js"])),"v-a4194498":defineAsyncComponent(()=>__vitePreload(()=>import("./系统设计.html-da7ae213.js"),["assets/系统设计.html-da7ae213.js","assets/framework-e5d7a6b2.js"])),"v-be0f4bc2":defineAsyncComponent(()=>__vitePreload(()=>import("./实训总结报告.html-cb7ba2f6.js"),["assets/实训总结报告.html-cb7ba2f6.js","assets/framework-e5d7a6b2.js"])),"v-2aaaa1f4":defineAsyncComponent(()=>__vitePreload(()=>import("./PPT.html-c8ff17b9.js"),["assets/PPT.html-c8ff17b9.js","assets/framework-e5d7a6b2.js"])),"v-0257c685":defineAsyncComponent(()=>__vitePreload(()=>import("./要求.html-029df664.js"),["assets/要求.html-029df664.js","assets/framework-e5d7a6b2.js"])),"v-72740c8a":defineAsyncComponent(()=>__vitePreload(()=>import("./视频.html-55e8145c.js"),["assets/视频.html-55e8145c.js","assets/framework-e5d7a6b2.js"])),"v-2ba863a6":defineAsyncComponent(()=>__vitePreload(()=>import("./功能设计.html-849c8376.js"),["assets/功能设计.html-849c8376.js","assets/framework-e5d7a6b2.js"])),"v-55ae513c":defineAsyncComponent(()=>__vitePreload(()=>import("./数据库设计.html-268b4481.js"),["assets/数据库设计.html-268b4481.js","assets/framework-e5d7a6b2.js"])),"v-2c74f45a":defineAsyncComponent(()=>__vitePreload(()=>import("./作业1 HMD.html-80c7af43.js"),["assets/作业1 HMD.html-80c7af43.js","assets/framework-e5d7a6b2.js"])),"v-b175398e":defineAsyncComponent(()=>__vitePreload(()=>import("./作业2 技术天花板.html-81c6e02e.js"),["assets/作业2 技术天花板.html-81c6e02e.js","assets/framework-e5d7a6b2.js"])),"v-4901312d":defineAsyncComponent(()=>__vitePreload(()=>import("./作业3 产品定位.html-472db401.js"),["assets/作业3 产品定位.html-472db401.js","assets/framework-e5d7a6b2.js"])),"v-783750bb":defineAsyncComponent(()=>__vitePreload(()=>import("./作业4 互评.html-31804da5.js"),["assets/作业4 互评.html-31804da5.js","assets/framework-e5d7a6b2.js"])),"v-3e024300":defineAsyncComponent(()=>__vitePreload(()=>import("./作业4 产品设计与互评.html-6778697a.js"),["assets/作业4 产品设计与互评.html-6778697a.js","assets/framework-e5d7a6b2.js"])),"v-7b4c535c":defineAsyncComponent(()=>__vitePreload(()=>import("./作业5 草图场景与原型设计.html-0c1a7649.js"),["assets/作业5 草图场景与原型设计.html-0c1a7649.js","assets/framework-e5d7a6b2.js"])),"v-6628a39c":defineAsyncComponent(()=>__vitePreload(()=>import("./作业6 大作业.html-1f7f0d5a.js"),["assets/作业6 大作业.html-1f7f0d5a.js","assets/framework-e5d7a6b2.js"])),"v-7b52310e":defineAsyncComponent(()=>__vitePreload(()=>import("./评语.html-9635fb76.js"),["assets/评语.html-9635fb76.js","assets/framework-e5d7a6b2.js"])),"v-c2aa5004":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 算法面试高频知识点与技巧.html-4edf21c9.js"),["assets/1. 算法面试高频知识点与技巧.html-4edf21c9.js","assets/framework-e5d7a6b2.js"])),"v-61d5087f":defineAsyncComponent(()=>__vitePreload(()=>import("./14. 字典树.html-d1d9f1e1.js"),["assets/14. 字典树.html-d1d9f1e1.js","assets/framework-e5d7a6b2.js"])),"v-69cd4508":defineAsyncComponent(()=>__vitePreload(()=>import("./17. 单调栈.html-7ce0f22f.js"),["assets/17. 单调栈.html-7ce0f22f.js","assets/framework-e5d7a6b2.js"])),"v-6274d0d4":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 同向双指针.html-0a0473e1.js"),["assets/2. 同向双指针.html-0a0473e1.js","assets/framework-e5d7a6b2.js"])),"v-28741391":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 拓展知识.html-8087eae6.js"),["assets/3. 拓展知识.html-8087eae6.js","assets/framework-e5d7a6b2.js"])),"v-30ade360":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 滑窗型双指针与隔板法.html-15afe601.js"),["assets/4. 滑窗型双指针与隔板法.html-15afe601.js","assets/framework-e5d7a6b2.js"])),"v-392996a2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a56356ac.js"),["assets/index.html-a56356ac.js","assets/framework-e5d7a6b2.js"])),"v-2d506fa0":defineAsyncComponent(()=>__vitePreload(()=>import("./大文件处理.html-99aa098b.js"),["assets/大文件处理.html-99aa098b.js","assets/framework-e5d7a6b2.js"])),"v-31ec3247":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eddd0164.js"),["assets/index.html-eddd0164.js","assets/framework-e5d7a6b2.js"])),"v-fcf961c2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2c445c3c.js"),["assets/index.html-2c445c3c.js","assets/framework-e5d7a6b2.js"])),"v-ca789fae":defineAsyncComponent(()=>__vitePreload(()=>import("./HTTP.html-7b86b862.js"),["assets/HTTP.html-7b86b862.js","assets/framework-e5d7a6b2.js"])),"v-0cc211d4":defineAsyncComponent(()=>__vitePreload(()=>import("./HTTPS.html-6c8f3147.js"),["assets/HTTPS.html-6c8f3147.js","assets/framework-e5d7a6b2.js"])),"v-08b6dbb0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c5e49ec8.js"),["assets/index.html-c5e49ec8.js","assets/framework-e5d7a6b2.js"])),"v-79f5d040":defineAsyncComponent(()=>__vitePreload(()=>import("./TCP.html-4b5a27e3.js"),["assets/TCP.html-4b5a27e3.js","assets/framework-e5d7a6b2.js"])),"v-4a61e36c":defineAsyncComponent(()=>__vitePreload(()=>import("./IO多路复用.html-6a4213ad.js"),["assets/IO多路复用.html-6a4213ad.js","assets/framework-e5d7a6b2.js"])),"v-74546404":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cc325a98.js"),["assets/index.html-cc325a98.js","assets/framework-e5d7a6b2.js"])),"v-192873bd":defineAsyncComponent(()=>__vitePreload(()=>import("./内存管理.html-599be0c0.js"),["assets/内存管理.html-599be0c0.js","assets/framework-e5d7a6b2.js"])),"v-35dbe43a":defineAsyncComponent(()=>__vitePreload(()=>import("./操作系统.html-95c87184.js"),["assets/操作系统.html-95c87184.js","assets/framework-e5d7a6b2.js"])),"v-1cb2880a":defineAsyncComponent(()=>__vitePreload(()=>import("./文件管理.html-0b26172e.js"),["assets/文件管理.html-0b26172e.js","assets/framework-e5d7a6b2.js"])),"v-939bf7f4":defineAsyncComponent(()=>__vitePreload(()=>import("./用户态内核态.html-e70e4576.js"),["assets/用户态内核态.html-e70e4576.js","assets/framework-e5d7a6b2.js"])),"v-95a2e48c":defineAsyncComponent(()=>__vitePreload(()=>import("./线程进程.html-0c8a07f1.js"),["assets/线程进程.html-0c8a07f1.js","assets/framework-e5d7a6b2.js"])),"v-5b97dc51":defineAsyncComponent(()=>__vitePreload(()=>import("./0. 安装使用.html-6c1d0575.js"),["assets/0. 安装使用.html-6c1d0575.js","assets/framework-e5d7a6b2.js"])),"v-d51afb96":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 概念.html-9cd55f0d.js"),["assets/1. 概念.html-9cd55f0d.js","assets/framework-e5d7a6b2.js"])),"v-a877b200":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 使用.html-a4bfee97.js"),["assets/2. 使用.html-a4bfee97.js","assets/framework-e5d7a6b2.js"])),"v-dc59fc0a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-299a3ab1.js"),["assets/index.html-299a3ab1.js","assets/framework-e5d7a6b2.js"])),"v-cd8b0f7c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-423e4e4a.js"),["assets/index.html-423e4e4a.js","assets/framework-e5d7a6b2.js"])),"v-26094462":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-776d4c94.js"),["assets/index.html-776d4c94.js","assets/framework-e5d7a6b2.js"])),"v-7435acea":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c3e3a0a4.js"),["assets/index.html-c3e3a0a4.js","assets/framework-e5d7a6b2.js"])),"v-3372119a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4f28bd54.js"),["assets/index.html-4f28bd54.js","assets/framework-e5d7a6b2.js"])),"v-6805b83a":defineAsyncComponent(()=>__vitePreload(()=>import("./为什么用.html-d3fbbd49.js"),["assets/为什么用.html-d3fbbd49.js","assets/framework-e5d7a6b2.js"])),"v-1700c95b":defineAsyncComponent(()=>__vitePreload(()=>import("./延迟队列.html-bafa3c48.js"),["assets/延迟队列.html-bafa3c48.js","assets/framework-e5d7a6b2.js"])),"v-0da42f26":defineAsyncComponent(()=>__vitePreload(()=>import("./死信队列.html-25943672.js"),["assets/死信队列.html-25943672.js","assets/framework-e5d7a6b2.js"])),"v-3e315581":defineAsyncComponent(()=>__vitePreload(()=>import("./消息应答.html-fdd049eb.js"),["assets/消息应答.html-fdd049eb.js","assets/framework-e5d7a6b2.js"])),"v-588edf1b":defineAsyncComponent(()=>__vitePreload(()=>import("./消息模型.html-d7a6430d.js"),["assets/消息模型.html-d7a6430d.js","assets/framework-e5d7a6b2.js"])),"v-2479638a":defineAsyncComponent(()=>__vitePreload(()=>import("./消息转换器.html-2f46466d.js"),["assets/消息转换器.html-2f46466d.js","assets/framework-e5d7a6b2.js"])),"v-8db72a40":defineAsyncComponent(()=>__vitePreload(()=>import("./SNK.html-2af9090f.js"),["assets/SNK.html-2af9090f.js","assets/framework-e5d7a6b2.js"])),"v-3747c200":defineAsyncComponent(()=>__vitePreload(()=>import("./产品运营.html-3cfb30d9.js"),["assets/产品运营.html-3cfb30d9.js","assets/framework-e5d7a6b2.js"])),"v-528188e2":defineAsyncComponent(()=>__vitePreload(()=>import("./京东.html-0cb9e83c.js"),["assets/京东.html-0cb9e83c.js","assets/framework-e5d7a6b2.js"])),"v-4b860994":defineAsyncComponent(()=>__vitePreload(()=>import("./京东科技.html-b3102b44.js"),["assets/京东科技.html-b3102b44.js","assets/framework-e5d7a6b2.js"])),"v-3d59908d":defineAsyncComponent(()=>__vitePreload(()=>import("./京东科技一面.html-103253b9.js"),["assets/京东科技一面.html-103253b9.js","assets/framework-e5d7a6b2.js"])),"v-7d2d82d5":defineAsyncComponent(()=>__vitePreload(()=>import("./面经汇总.html-e478fa2b.js"),["assets/面经汇总.html-e478fa2b.js","assets/framework-e5d7a6b2.js"])),"v-61f32f65":defineAsyncComponent(()=>__vitePreload(()=>import("./4.26 笔试.html-f1d3a8a0.js"),["assets/4.26 笔试.html-f1d3a8a0.js","assets/framework-e5d7a6b2.js"])),"v-27a7aebc":defineAsyncComponent(()=>__vitePreload(()=>import("./华为.html-183cceca.js"),["assets/华为.html-183cceca.js","assets/framework-e5d7a6b2.js"])),"v-417d8c70":defineAsyncComponent(()=>__vitePreload(()=>import("./综合面.html-09da2fcf.js"),["assets/综合面.html-09da2fcf.js","assets/framework-e5d7a6b2.js"])),"v-5d5862b1":defineAsyncComponent(()=>__vitePreload(()=>import("./图形推理.html-375a9b84.js"),["assets/图形推理.html-375a9b84.js","assets/framework-e5d7a6b2.js"])),"v-238ca5f1":defineAsyncComponent(()=>__vitePreload(()=>import("./3.30.html-521b988a.js"),["assets/3.30.html-521b988a.js","assets/framework-e5d7a6b2.js"])),"v-4fb9770f":defineAsyncComponent(()=>__vitePreload(()=>import("./4.11.html-ecada7fc.js"),["assets/4.11.html-ecada7fc.js","assets/framework-e5d7a6b2.js"])),"v-8694b6bc":defineAsyncComponent(()=>__vitePreload(()=>import("./阿里.html-a3496505.js"),["assets/阿里.html-a3496505.js","assets/framework-e5d7a6b2.js"])),"v-1696696a":defineAsyncComponent(()=>__vitePreload(()=>import("./掘金.html-9002f211.js"),["assets/掘金.html-9002f211.js","assets/framework-e5d7a6b2.js"])),"v-224320df":defineAsyncComponent(()=>__vitePreload(()=>import("./自我.html-e43b4bd7.js"),["assets/自我.html-e43b4bd7.js","assets/framework-e5d7a6b2.js"])),"v-59260c34":defineAsyncComponent(()=>__vitePreload(()=>import("./讲稿.html-2df1507e.js"),["assets/讲稿.html-2df1507e.js","assets/framework-e5d7a6b2.js"])),"v-6b7d4df0":defineAsyncComponent(()=>__vitePreload(()=>import("./雁过留痕.html-2f5500c4.js"),["assets/雁过留痕.html-2f5500c4.js","assets/framework-e5d7a6b2.js"])),"v-b1951358":defineAsyncComponent(()=>__vitePreload(()=>import("./项目亮点总结.html-11b3a887.js"),["assets/项目亮点总结.html-11b3a887.js","assets/framework-e5d7a6b2.js"])),"v-4a7c9956":defineAsyncComponent(()=>__vitePreload(()=>import("./项目提问准备.html-06044776.js"),["assets/项目提问准备.html-06044776.js","assets/framework-e5d7a6b2.js"])),"v-0bff3a50":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3a05bc48.js"),["assets/index.html-3a05bc48.js","assets/framework-e5d7a6b2.js"])),"v-432219a8":defineAsyncComponent(()=>__vitePreload(()=>import("./Untitled.html-4d5206af.js"),["assets/Untitled.html-4d5206af.js","assets/framework-e5d7a6b2.js"])),"v-36873900":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-da543bf4.js"),["assets/index.html-da543bf4.js","assets/framework-e5d7a6b2.js"])),"v-5af053ea":defineAsyncComponent(()=>__vitePreload(()=>import("./cron.html-516008d9.js"),["assets/cron.html-516008d9.js","assets/framework-e5d7a6b2.js"])),"v-1c03b80a":defineAsyncComponent(()=>__vitePreload(()=>import("./seckill.html-fff488ac.js"),["assets/seckill.html-fff488ac.js","assets/framework-e5d7a6b2.js"])),"v-c5e43a24":defineAsyncComponent(()=>__vitePreload(()=>import("./user.html-1c7465e1.js"),["assets/user.html-1c7465e1.js","assets/framework-e5d7a6b2.js"])),"v-4b40d03a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8b762fe7.js"),["assets/index.html-8b762fe7.js","assets/framework-e5d7a6b2.js"])),"v-35285eb9":defineAsyncComponent(()=>__vitePreload(()=>import("./ci.html-823606c1.js"),["assets/ci.html-823606c1.js","assets/framework-e5d7a6b2.js"])),"v-204dfcb5":defineAsyncComponent(()=>__vitePreload(()=>import("./makefile.html-059bac78.js"),["assets/makefile.html-059bac78.js","assets/framework-e5d7a6b2.js"])),"v-8515fffe":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-22cb462d.js"),["assets/index.html-22cb462d.js","assets/framework-e5d7a6b2.js"])),"v-d121411e":defineAsyncComponent(()=>__vitePreload(()=>import("./docker-file.html-452a747a.js"),["assets/docker-file.html-452a747a.js","assets/framework-e5d7a6b2.js"])),"v-209719ec":defineAsyncComponent(()=>__vitePreload(()=>import("./network.html-4b2971c8.js"),["assets/network.html-4b2971c8.js","assets/framework-e5d7a6b2.js"])),"v-62dda79b":defineAsyncComponent(()=>__vitePreload(()=>import("./persistence.html-a6d7a6a9.js"),["assets/persistence.html-a6d7a6a9.js","assets/framework-e5d7a6b2.js"])),"v-0ab26f57":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5aa21323.js"),["assets/index.html-5aa21323.js","assets/framework-e5d7a6b2.js"])),"v-926c3a2a":defineAsyncComponent(()=>__vitePreload(()=>import("./archetecture.html-53cf782c.js"),["assets/archetecture.html-53cf782c.js","assets/framework-e5d7a6b2.js"])),"v-a3c5ff30":defineAsyncComponent(()=>__vitePreload(()=>import("./installation.html-141cffd0.js"),["assets/installation.html-141cffd0.js","assets/framework-e5d7a6b2.js"])),"v-4c40d619":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4463bf8d.js"),["assets/index.html-4463bf8d.js","assets/framework-e5d7a6b2.js"])),"v-cd98a0ac":defineAsyncComponent(()=>__vitePreload(()=>import("./Untitled.html-8df1d9a2.js"),["assets/Untitled.html-8df1d9a2.js","assets/framework-e5d7a6b2.js"])),"v-779a1f7a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b7065702.js"),["assets/index.html-b7065702.js","assets/framework-e5d7a6b2.js"])),"v-5c068491":defineAsyncComponent(()=>__vitePreload(()=>import("./常见问题.html-f9fac71e.js"),["assets/常见问题.html-f9fac71e.js","assets/framework-e5d7a6b2.js"])),"v-134b021f":defineAsyncComponent(()=>__vitePreload(()=>import("./oss.html-ac142fa7.js"),["assets/oss.html-ac142fa7.js","assets/framework-e5d7a6b2.js"])),"v-0906aead":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3d5a26f2.js"),["assets/index.html-3d5a26f2.js","assets/framework-e5d7a6b2.js"])),"v-4899202c":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式.html-5fd1f955.js"),["assets/设计模式.html-5fd1f955.js","assets/framework-e5d7a6b2.js"])),"v-2dabab05":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5b7657ab.js"),["assets/index.html-5b7657ab.js","assets/framework-e5d7a6b2.js"])),"v-3ee5a1d1":defineAsyncComponent(()=>__vitePreload(()=>import("./MPG.html-35a7a4c7.js"),["assets/MPG.html-35a7a4c7.js","assets/framework-e5d7a6b2.js"])),"v-48946111":defineAsyncComponent(()=>__vitePreload(()=>import("./tool-chain.html-a4e2a9b9.js"),["assets/tool-chain.html-a4e2a9b9.js","assets/framework-e5d7a6b2.js"])),"v-fd8baddc":defineAsyncComponent(()=>__vitePreload(()=>import("./语法.html-8dd562f1.js"),["assets/语法.html-8dd562f1.js","assets/framework-e5d7a6b2.js"])),"v-56daac70":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dd0d9da1.js"),["assets/index.html-dd0d9da1.js","assets/framework-e5d7a6b2.js"])),"v-13dd7056":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9754a8d0.js"),["assets/index.html-9754a8d0.js","assets/framework-e5d7a6b2.js"])),"v-821201d6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-19b2fce7.js"),["assets/index.html-19b2fce7.js","assets/framework-e5d7a6b2.js"])),"v-47fd2db2":defineAsyncComponent(()=>__vitePreload(()=>import("./latex运算符.html-68ee37a9.js"),["assets/latex运算符.html-68ee37a9.js","assets/framework-e5d7a6b2.js"])),"v-ef4200a4":defineAsyncComponent(()=>__vitePreload(()=>import("./alist.html-878bed93.js"),["assets/alist.html-878bed93.js","assets/framework-e5d7a6b2.js"])),"v-414df76c":defineAsyncComponent(()=>__vitePreload(()=>import("./xdm.html-8878c7a9.js"),["assets/xdm.html-8878c7a9.js","assets/framework-e5d7a6b2.js"])),"v-f09f22fa":defineAsyncComponent(()=>__vitePreload(()=>import("./mermaid.html-6a10f6a0.js"),["assets/mermaid.html-6a10f6a0.js","assets/framework-e5d7a6b2.js"])),"v-58b8a846":defineAsyncComponent(()=>__vitePreload(()=>import("./plantUML.html-112104a6.js"),["assets/plantUML.html-112104a6.js","assets/framework-e5d7a6b2.js"])),"v-aae0d1cc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-55ea11c2.js"),["assets/index.html-55ea11c2.js","assets/framework-e5d7a6b2.js"])),"v-d02da8bc":defineAsyncComponent(()=>__vitePreload(()=>import("./vuepress.html-c54f77fb.js"),["assets/vuepress.html-c54f77fb.js","assets/framework-e5d7a6b2.js"])),"v-764e75cc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-de1922fe.js"),["assets/index.html-de1922fe.js","assets/framework-e5d7a6b2.js"])),"v-74902a86":defineAsyncComponent(()=>__vitePreload(()=>import("./代数.html-378beaa3.js"),["assets/代数.html-378beaa3.js","assets/framework-e5d7a6b2.js"])),"v-e108a058":defineAsyncComponent(()=>__vitePreload(()=>import("./数论.html-cdac8001.js"),["assets/数论.html-cdac8001.js","assets/framework-e5d7a6b2.js"])),"v-1cc0ba47":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f90bd2c1.js"),["assets/index.html-f90bd2c1.js","assets/framework-e5d7a6b2.js"])),"v-bc0877a2":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 中心逻辑精听法.html-8502f2b2.js"),["assets/1. 中心逻辑精听法.html-8502f2b2.js","assets/framework-e5d7a6b2.js"])),"v-6bbae1e2":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 题型.html-b2d53e97.js"),["assets/2. 题型.html-b2d53e97.js","assets/framework-e5d7a6b2.js"])),"v-9f54ba94":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 笔记法.html-34a872f4.js"),["assets/3. 笔记法.html-34a872f4.js","assets/framework-e5d7a6b2.js"])),"v-7bd55f08":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 对话串联法.html-c45255da.js"),["assets/4. 对话串联法.html-c45255da.js","assets/framework-e5d7a6b2.js"])),"v-28d0a65b":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 讲座分层法.html-cb5e4de1.js"),["assets/5. 讲座分层法.html-cb5e4de1.js","assets/framework-e5d7a6b2.js"])),"v-2e162ac8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4a600bfa.js"),["assets/index.html-4a600bfa.js","assets/framework-e5d7a6b2.js"])),"v-2822df36":defineAsyncComponent(()=>__vitePreload(()=>import("./基础.html-bc592562.js"),["assets/基础.html-bc592562.js","assets/framework-e5d7a6b2.js"])),"v-310c2e4d":defineAsyncComponent(()=>__vitePreload(()=>import("./真题营.html-081998d0.js"),["assets/真题营.html-081998d0.js","assets/framework-e5d7a6b2.js"])),"v-ff501fce":defineAsyncComponent(()=>__vitePreload(()=>import("./积累.html-98162a03.js"),["assets/积累.html-98162a03.js","assets/framework-e5d7a6b2.js"])),"v-535cace4":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 阅读方法论.html-a51d7faf.js"),["assets/1. 阅读方法论.html-a51d7faf.js","assets/framework-e5d7a6b2.js"])),"v-3a8ea346":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 六选三.html-c87358a5.js"),["assets/2. 六选三.html-c87358a5.js","assets/framework-e5d7a6b2.js"])),"v-5c362ade":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 文章段落.html-1b38fa50.js"),["assets/3. 文章段落.html-1b38fa50.js","assets/framework-e5d7a6b2.js"])),"v-9d6a2c94":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 逻辑考点.html-73aea00d.js"),["assets/4. 逻辑考点.html-73aea00d.js","assets/framework-e5d7a6b2.js"])),"v-1d780b38":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 文章结构.html-ee0a7a65.js"),["assets/5. 文章结构.html-ee0a7a65.js","assets/framework-e5d7a6b2.js"])),"v-62c284eb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e4b77fd0.js"),["assets/index.html-e4b77fd0.js","assets/framework-e5d7a6b2.js"])),"v-61d84292":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1f0d571c.js"),["assets/index.html-1f0d571c.js","assets/framework-e5d7a6b2.js"])),"v-11c01b04":defineAsyncComponent(()=>__vitePreload(()=>import("./task1.html-0fe4a7a4.js"),["assets/task1.html-0fe4a7a4.js","assets/framework-e5d7a6b2.js"])),"v-1374f3a3":defineAsyncComponent(()=>__vitePreload(()=>import("./task2.html-9f456387.js"),["assets/task2.html-9f456387.js","assets/framework-e5d7a6b2.js"])),"v-1529cc42":defineAsyncComponent(()=>__vitePreload(()=>import("./task3.html-d3abaa3d.js"),["assets/task3.html-d3abaa3d.js","assets/framework-e5d7a6b2.js"])),"v-16dea4e1":defineAsyncComponent(()=>__vitePreload(()=>import("./task4.html-edc75521.js"),["assets/task4.html-edc75521.js","assets/framework-e5d7a6b2.js"])),"v-a39b8410":defineAsyncComponent(()=>__vitePreload(()=>import("./读音.html-5ea8104d.js"),["assets/读音.html-5ea8104d.js","assets/framework-e5d7a6b2.js"])),"v-a1b1fbce":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 结构.html-c153eb62.js"),["assets/1. 结构.html-c153eb62.js","assets/framework-e5d7a6b2.js"])),"v-b3d1d064":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 主体段.html-9146f4da.js"),["assets/2. 主体段.html-9146f4da.js","assets/framework-e5d7a6b2.js"])),"v-00409b10":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 语料1.html-f6543776.js"),["assets/3. 语料1.html-f6543776.js","assets/framework-e5d7a6b2.js"])),"v-2ae46f98":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 语料2.html-fa1c9433.js"),["assets/4. 语料2.html-fa1c9433.js","assets/framework-e5d7a6b2.js"])),"v-585111ff":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 综合写作.html-9a408e88.js"),["assets/5. 综合写作.html-9a408e88.js","assets/framework-e5d7a6b2.js"])),"v-2861a49b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-602a7515.js"),["assets/index.html-602a7515.js","assets/framework-e5d7a6b2.js"])),"v-042b12ec":defineAsyncComponent(()=>__vitePreload(()=>import("./改革.html-b9e966c5.js"),["assets/改革.html-b9e966c5.js","assets/framework-e5d7a6b2.js"])),"v-a67d5778":defineAsyncComponent(()=>__vitePreload(()=>import("./PH.html-8e85d944.js"),["assets/PH.html-8e85d944.js","assets/framework-e5d7a6b2.js"])),"v-d8cf28cc":defineAsyncComponent(()=>__vitePreload(()=>import("./新通.html-72a218ee.js"),["assets/新通.html-72a218ee.js","assets/framework-e5d7a6b2.js"])),"v-252112bc":defineAsyncComponent(()=>__vitePreload(()=>import("./保底.html-a12c8369.js"),["assets/保底.html-a12c8369.js","assets/framework-e5d7a6b2.js"])),"v-f9b0b4de":defineAsyncComponent(()=>__vitePreload(()=>import("./信息.html-2e96cc28.js"),["assets/信息.html-2e96cc28.js","assets/framework-e5d7a6b2.js"])),"v-0689dc16":defineAsyncComponent(()=>__vitePreload(()=>import("./避坑.html-18ada595.js"),["assets/避坑.html-18ada595.js","assets/framework-e5d7a6b2.js"])),"v-57c14fa1":defineAsyncComponent(()=>__vitePreload(()=>import("./项目.html-9fd60ddf.js"),["assets/项目.html-9fd60ddf.js","assets/framework-e5d7a6b2.js"])),"v-6e6c1b81":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-43e7e3fa.js"),["assets/1.html-43e7e3fa.js","assets/framework-e5d7a6b2.js"])),"v-7020f420":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-ac664178.js"),["assets/2.html-ac664178.js","assets/framework-e5d7a6b2.js"])),"v-71d5ccbf":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-566ff60d.js"),["assets/3.html-566ff60d.js","assets/framework-e5d7a6b2.js"])),"v-738aa55e":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-078f442b.js"),["assets/4.html-078f442b.js","assets/framework-e5d7a6b2.js"])),"v-49be79ce":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-a6ba0a66.js"),["assets/1.html-a6ba0a66.js","assets/framework-e5d7a6b2.js"])),"v-4b73526d":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-d818f3e9.js"),["assets/2.html-d818f3e9.js","assets/framework-e5d7a6b2.js"])),"v-4d282b0c":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-149e6705.js"),["assets/3.html-149e6705.js","assets/framework-e5d7a6b2.js"])),"v-4edd03ab":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-84687801.js"),["assets/4.html-84687801.js","assets/framework-e5d7a6b2.js"])),"v-6371899c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1e290302.js"),["assets/index.html-1e290302.js","assets/framework-e5d7a6b2.js"])),"v-6c1da50c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-39afec01.js"),["assets/index.html-39afec01.js","assets/framework-e5d7a6b2.js"])),"v-84294778":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dcbf22a8.js"),["assets/index.html-dcbf22a8.js","assets/framework-e5d7a6b2.js"])),"v-34a08d44":defineAsyncComponent(()=>__vitePreload(()=>import("./减治优化.html-b1ea7922.js"),["assets/减治优化.html-b1ea7922.js","assets/framework-e5d7a6b2.js"])),"v-72cecc71":defineAsyncComponent(()=>__vitePreload(()=>import("./动态规划.html-1ea14c26.js"),["assets/动态规划.html-1ea14c26.js","assets/framework-e5d7a6b2.js"])),"v-783883a8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-23bd38fd.js"),["assets/index.html-23bd38fd.js","assets/framework-e5d7a6b2.js"])),"v-66c9f1a6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-395ccdc8.js"),["assets/index.html-395ccdc8.js","assets/framework-e5d7a6b2.js"])),"v-6665310a":defineAsyncComponent(()=>__vitePreload(()=>import("./BFS.html-36f602c2.js"),["assets/BFS.html-36f602c2.js","assets/framework-e5d7a6b2.js"])),"v-36278ac8":defineAsyncComponent(()=>__vitePreload(()=>import("./DFS.html-50629066.js"),["assets/DFS.html-50629066.js","assets/framework-e5d7a6b2.js"])),"v-3f65bda0":defineAsyncComponent(()=>__vitePreload(()=>import("./FOR.html-cf95930a.js"),["assets/FOR.html-cf95930a.js","assets/framework-e5d7a6b2.js"])),"v-4c1d4f60":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1d518530.js"),["assets/index.html-1d518530.js","assets/framework-e5d7a6b2.js"])),"v-3c560536":defineAsyncComponent(()=>__vitePreload(()=>import("./单向递归.html-f8cd9ddf.js"),["assets/单向递归.html-f8cd9ddf.js","assets/framework-e5d7a6b2.js"])),"v-876872ba":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bf86ea62.js"),["assets/index.html-bf86ea62.js","assets/framework-e5d7a6b2.js"])),"v-f5efc878":defineAsyncComponent(()=>__vitePreload(()=>import("./0. 总结.html-a0b0fb7d.js"),["assets/0. 总结.html-a0b0fb7d.js","assets/framework-e5d7a6b2.js"])),"v-77daaac4":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 真实案例.html-de7f98c7.js"),["assets/1. 真实案例.html-de7f98c7.js","assets/framework-e5d7a6b2.js"])),"v-7fed26e2":defineAsyncComponent(()=>__vitePreload(()=>import("./11. BFS.html-b911f951.js"),["assets/11. BFS.html-b911f951.js","assets/framework-e5d7a6b2.js"])),"v-99436756":defineAsyncComponent(()=>__vitePreload(()=>import("./12. 递归、遍历、分治.html-1c015afa.js"),["assets/12. 递归、遍历、分治.html-1c015afa.js","assets/framework-e5d7a6b2.js"])),"v-037780e0":defineAsyncComponent(()=>__vitePreload(()=>import("./13. 二叉树非递归遍历.html-e4aede11.js"),["assets/13. 二叉树非递归遍历.html-e4aede11.js","assets/framework-e5d7a6b2.js"])),"v-033cbaee":defineAsyncComponent(()=>__vitePreload(()=>import("./14. BFS性价比之王.html-a7e76848.js"),["assets/14. BFS性价比之王.html-a7e76848.js","assets/framework-e5d7a6b2.js"])),"v-c004b79e":defineAsyncComponent(()=>__vitePreload(()=>import("./15. 分治法求二叉树.html-b23717e2.js"),["assets/15. 分治法求二叉树.html-b23717e2.js","assets/framework-e5d7a6b2.js"])),"v-000087f0":defineAsyncComponent(()=>__vitePreload(()=>import("./16. 组合类DFS.html-556d6daa.js"),["assets/16. 组合类DFS.html-556d6daa.js","assets/framework-e5d7a6b2.js"])),"v-0cb7951b":defineAsyncComponent(()=>__vitePreload(()=>import("./17. 排列式DFS.html-c566e9ed.js"),["assets/17. 排列式DFS.html-c566e9ed.js","assets/framework-e5d7a6b2.js"])),"v-1decc628":defineAsyncComponent(()=>__vitePreload(()=>import("./18. 哈希表.html-41f6d9cc.js"),["assets/18. 哈希表.html-41f6d9cc.js","assets/framework-e5d7a6b2.js"])),"v-26f515e6":defineAsyncComponent(()=>__vitePreload(()=>import("./19. Heap.html-3195fde7.js"),["assets/19. Heap.html-3195fde7.js","assets/framework-e5d7a6b2.js"])),"v-7d6856f3":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 最长回文子串.html-0e503eef.js"),["assets/2. 最长回文子串.html-0e503eef.js","assets/framework-e5d7a6b2.js"])),"v-49c3f183":defineAsyncComponent(()=>__vitePreload(()=>import("./21. 哈希表和堆.html-6fb4ca7c.js"),["assets/21. 哈希表和堆.html-6fb4ca7c.js","assets/framework-e5d7a6b2.js"])),"v-ff7fd2ec":defineAsyncComponent(()=>__vitePreload(()=>import("./22. 记忆化搜索.html-50d7c9a3.js"),["assets/22. 记忆化搜索.html-50d7c9a3.js","assets/framework-e5d7a6b2.js"])),"v-057d6f7c":defineAsyncComponent(()=>__vitePreload(()=>import("./23. 动态规划.html-5dc9b734.js"),["assets/23. 动态规划.html-5dc9b734.js","assets/framework-e5d7a6b2.js"])),"v-768b6a8d":defineAsyncComponent(()=>__vitePreload(()=>import("./24. 动态规划使用场景.html-9a513c77.js"),["assets/24. 动态规划使用场景.html-9a513c77.js","assets/framework-e5d7a6b2.js"])),"v-1cd5019a":defineAsyncComponent(()=>__vitePreload(()=>import("./25. 动态规划：背包型.html-27283407.js"),["assets/25. 动态规划：背包型.html-27283407.js","assets/framework-e5d7a6b2.js"])),"v-5dfec8e3":defineAsyncComponent(()=>__vitePreload(()=>import("./27. 动态规划优化.html-6edb7759.js"),["assets/27. 动态规划优化.html-6edb7759.js","assets/framework-e5d7a6b2.js"])),"v-14aae730":defineAsyncComponent(()=>__vitePreload(()=>import("./29. 双指针.html-db691948.js"),["assets/29. 双指针.html-db691948.js","assets/framework-e5d7a6b2.js"])),"v-6d66a52e":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 代码质量.html-4232113f.js"),["assets/3. 代码质量.html-4232113f.js","assets/framework-e5d7a6b2.js"])),"v-3c42b9a8":defineAsyncComponent(()=>__vitePreload(()=>import("./30. 二分法实战.html-47d028e0.js"),["assets/30. 二分法实战.html-47d028e0.js","assets/framework-e5d7a6b2.js"])),"v-3753d956":defineAsyncComponent(()=>__vitePreload(()=>import("./31. 低于On的算法.html-bddab988.js"),["assets/31. 低于On的算法.html-bddab988.js","assets/framework-e5d7a6b2.js"])),"v-1a561374":defineAsyncComponent(()=>__vitePreload(()=>import("./32. 全子集问题.html-64c249d9.js"),["assets/32. 全子集问题.html-64c249d9.js","assets/framework-e5d7a6b2.js"])),"v-1f61ac84":defineAsyncComponent(()=>__vitePreload(()=>import("./33. BFS双向.html-646c9f8d.js"),["assets/33. BFS双向.html-646c9f8d.js","assets/framework-e5d7a6b2.js"])),"v-ab058a38":defineAsyncComponent(()=>__vitePreload(()=>import("./37. DFS.html-2d64dff0.js"),["assets/37. DFS.html-2d64dff0.js","assets/framework-e5d7a6b2.js"])),"v-41151cf4":defineAsyncComponent(()=>__vitePreload(()=>import("./38. 数据结构设计.html-0f978e91.js"),["assets/38. 数据结构设计.html-0f978e91.js","assets/framework-e5d7a6b2.js"])),"v-20b84030":defineAsyncComponent(()=>__vitePreload(()=>import("./39. 外排序算法与数组合并类.html-1b36dec1.js"),["assets/39. 外排序算法与数组合并类.html-1b36dec1.js","assets/framework-e5d7a6b2.js"])),"v-7bc8de14":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 复杂度理论.html-2045de31.js"),["assets/4. 复杂度理论.html-2045de31.js","assets/framework-e5d7a6b2.js"])),"v-5b0fec5f":defineAsyncComponent(()=>__vitePreload(()=>import("./40. 动态规划：区间型.html-340046ef.js"),["assets/40. 动态规划：区间型.html-340046ef.js","assets/framework-e5d7a6b2.js"])),"v-151b7b10":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 排序.html-7ec8c17f.js"),["assets/5. 排序.html-7ec8c17f.js","assets/framework-e5d7a6b2.js"])),"v-495b1b82":defineAsyncComponent(()=>__vitePreload(()=>import("./6. 递归.html-1aef5f76.js"),["assets/6. 递归.html-1aef5f76.js","assets/framework-e5d7a6b2.js"])),"v-448f8146":defineAsyncComponent(()=>__vitePreload(()=>import("./7. 二分法三重境界.html-459eb5a4.js"),["assets/7. 二分法三重境界.html-459eb5a4.js","assets/framework-e5d7a6b2.js"])),"v-5b2bda71":defineAsyncComponent(()=>__vitePreload(()=>import("./配置.html-e7a0ea85.js"),["assets/配置.html-e7a0ea85.js","assets/framework-e5d7a6b2.js"])),"v-67d5af29":defineAsyncComponent(()=>__vitePreload(()=>import("./分库分表.html-efc3da8a.js"),["assets/分库分表.html-efc3da8a.js","assets/framework-e5d7a6b2.js"])),"v-458d213f":defineAsyncComponent(()=>__vitePreload(()=>import("./读写分离.html-be4452a8.js"),["assets/读写分离.html-be4452a8.js","assets/framework-e5d7a6b2.js"])),"v-19bd4e76":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 体系结构.html-1ca3f26f.js"),["assets/1. 体系结构.html-1ca3f26f.js","assets/framework-e5d7a6b2.js"])),"v-0df9788a":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 存储引擎.html-b3529c99.js"),["assets/2. 存储引擎.html-b3529c99.js","assets/framework-e5d7a6b2.js"])),"v-ff7c9288":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 索引结构.html-62000c1d.js"),["assets/1. 索引结构.html-62000c1d.js","assets/framework-e5d7a6b2.js"])),"v-70059fca":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 索引分类.html-3d0c0160.js"),["assets/2. 索引分类.html-3d0c0160.js","assets/framework-e5d7a6b2.js"])),"v-02f6cb50":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 性能分析.html-658d4e55.js"),["assets/3. 性能分析.html-658d4e55.js","assets/framework-e5d7a6b2.js"])),"v-2b707058":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 使用规则.html-d0880866.js"),["assets/4. 使用规则.html-d0880866.js","assets/framework-e5d7a6b2.js"])),"v-24f44b58":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-31a37eb6.js"),["assets/index.html-31a37eb6.js","assets/framework-e5d7a6b2.js"])),"v-7126edee":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 全局锁.html-9f216652.js"),["assets/1. 全局锁.html-9f216652.js","assets/framework-e5d7a6b2.js"])),"v-434af5a2":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 表级锁.html-05455d14.js"),["assets/2. 表级锁.html-05455d14.js","assets/framework-e5d7a6b2.js"])),"v-2060c73c":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 行级锁.html-75a5c873.js"),["assets/3. 行级锁.html-75a5c873.js","assets/framework-e5d7a6b2.js"])),"v-015be349":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4e7e94af.js"),["assets/index.html-4e7e94af.js","assets/framework-e5d7a6b2.js"])),"v-e7235c34":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-65e96998.js"),["assets/index.html-65e96998.js","assets/framework-e5d7a6b2.js"])),"v-6a840a26":defineAsyncComponent(()=>__vitePreload(()=>import("./Buffer Pool.html-c4983f38.js"),["assets/Buffer Pool.html-c4983f38.js","assets/framework-e5d7a6b2.js"])),"v-98b322f4":defineAsyncComponent(()=>__vitePreload(()=>import("./存储过程.html-b50589a8.js"),["assets/存储过程.html-b50589a8.js","assets/framework-e5d7a6b2.js"])),"v-43096280":defineAsyncComponent(()=>__vitePreload(()=>import("./查询过程.html-7d1c8704.js"),["assets/查询过程.html-7d1c8704.js","assets/framework-e5d7a6b2.js"])),"v-2b9b6ca2":defineAsyncComponent(()=>__vitePreload(()=>import("./1. ACID.html-6c5b878c.js"),["assets/1. ACID.html-6c5b878c.js","assets/framework-e5d7a6b2.js"])),"v-4e6e7a49":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 并发问题.html-0caa8651.js"),["assets/2. 并发问题.html-0caa8651.js","assets/framework-e5d7a6b2.js"])),"v-bac30082":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 隔离级别.html-fdf16ada.js"),["assets/3. 隔离级别.html-fdf16ada.js","assets/framework-e5d7a6b2.js"])),"v-70e72ec0":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 传播机制.html-b2fc2e90.js"),["assets/4. 传播机制.html-b2fc2e90.js","assets/framework-e5d7a6b2.js"])),"v-3f4a6a8c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-83a376c5.js"),["assets/index.html-83a376c5.js","assets/framework-e5d7a6b2.js"])),"v-51a91932":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-95862b8b.js"),["assets/index.html-95862b8b.js","assets/framework-e5d7a6b2.js"])),"v-3dff3951":defineAsyncComponent(()=>__vitePreload(()=>import("./cluster.html-c9ea6f53.js"),["assets/cluster.html-c9ea6f53.js","assets/framework-e5d7a6b2.js"])),"v-531aadbf":defineAsyncComponent(()=>__vitePreload(()=>import("./replication.html-5e9bbed1.js"),["assets/replication.html-5e9bbed1.js","assets/framework-e5d7a6b2.js"])),"v-1523f743":defineAsyncComponent(()=>__vitePreload(()=>import("./sentinel.html-00076d0f.js"),["assets/sentinel.html-00076d0f.js","assets/framework-e5d7a6b2.js"])),"v-430c5169":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-86b6803e.js"),["assets/index.html-86b6803e.js","assets/framework-e5d7a6b2.js"])),"v-052b696f":defineAsyncComponent(()=>__vitePreload(()=>import("./jedis.html-15b4156b.js"),["assets/jedis.html-15b4156b.js","assets/framework-e5d7a6b2.js"])),"v-f9a399ac":defineAsyncComponent(()=>__vitePreload(()=>import("./spring-data-redis.html-f8412d14.js"),["assets/spring-data-redis.html-f8412d14.js","assets/framework-e5d7a6b2.js"])),"v-0405ee87":defineAsyncComponent(()=>__vitePreload(()=>import("./generic.html-d1053d70.js"),["assets/generic.html-d1053d70.js","assets/framework-e5d7a6b2.js"])),"v-e67a2cf4":defineAsyncComponent(()=>__vitePreload(()=>import("./hash.html-a34526c2.js"),["assets/hash.html-a34526c2.js","assets/framework-e5d7a6b2.js"])),"v-315833f6":defineAsyncComponent(()=>__vitePreload(()=>import("./list.html-918cfa7a.js"),["assets/list.html-918cfa7a.js","assets/framework-e5d7a6b2.js"])),"v-5df2755c":defineAsyncComponent(()=>__vitePreload(()=>import("./set.html-0ac0c469.js"),["assets/set.html-0ac0c469.js","assets/framework-e5d7a6b2.js"])),"v-26bb2f82":defineAsyncComponent(()=>__vitePreload(()=>import("./sorted-set.html-7ca7dfb8.js"),["assets/sorted-set.html-7ca7dfb8.js","assets/framework-e5d7a6b2.js"])),"v-12e03cba":defineAsyncComponent(()=>__vitePreload(()=>import("./string.html-39be95f7.js"),["assets/string.html-39be95f7.js","assets/framework-e5d7a6b2.js"])),"v-68faa95e":defineAsyncComponent(()=>__vitePreload(()=>import("./feature.html-5241065d.js"),["assets/feature.html-5241065d.js","assets/framework-e5d7a6b2.js"])),"v-01dd35c2":defineAsyncComponent(()=>__vitePreload(()=>import("./AOF.html-20fa3d0f.js"),["assets/AOF.html-20fa3d0f.js","assets/framework-e5d7a6b2.js"])),"v-cf651cb2":defineAsyncComponent(()=>__vitePreload(()=>import("./RDB.html-b0764d50.js"),["assets/RDB.html-b0764d50.js","assets/framework-e5d7a6b2.js"])),"v-24f0391e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5afb5cd1.js"),["assets/index.html-5afb5cd1.js","assets/framework-e5d7a6b2.js"])),"v-fe71849e":defineAsyncComponent(()=>__vitePreload(()=>import("./function.html-fbf80d85.js"),["assets/function.html-fbf80d85.js","assets/framework-e5d7a6b2.js"])),"v-15b42f9f":defineAsyncComponent(()=>__vitePreload(()=>import("./join.html-c29b6433.js"),["assets/join.html-c29b6433.js","assets/framework-e5d7a6b2.js"])),"v-7155f962":defineAsyncComponent(()=>__vitePreload(()=>import("./null.html-25b1e5d5.js"),["assets/null.html-25b1e5d5.js","assets/framework-e5d7a6b2.js"])),"v-50f44bf2":defineAsyncComponent(()=>__vitePreload(()=>import("./set.html-0b82a9c6.js"),["assets/set.html-0b82a9c6.js","assets/framework-e5d7a6b2.js"])),"v-32713fab":defineAsyncComponent(()=>__vitePreload(()=>import("./sort.html-83386899.js"),["assets/sort.html-83386899.js","assets/framework-e5d7a6b2.js"])),"v-b61bc5fe":defineAsyncComponent(()=>__vitePreload(()=>import("./subquery.html-ccf633ac.js"),["assets/subquery.html-ccf633ac.js","assets/framework-e5d7a6b2.js"])),"v-26f64b8a":defineAsyncComponent(()=>__vitePreload(()=>import("./设计.html-1418b180.js"),["assets/设计.html-1418b180.js","assets/framework-e5d7a6b2.js"])),"v-15c7c82c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f6bbb247.js"),["assets/index.html-f6bbb247.js","assets/framework-e5d7a6b2.js"])),"v-1c4e6234":defineAsyncComponent(()=>__vitePreload(()=>import("./慢查询.html-9731bcc3.js"),["assets/慢查询.html-9731bcc3.js","assets/framework-e5d7a6b2.js"])),"v-18f5becc":defineAsyncComponent(()=>__vitePreload(()=>import("./幂等性.html-9176e8c2.js"),["assets/幂等性.html-9176e8c2.js","assets/framework-e5d7a6b2.js"])),"v-fa02c2e6":defineAsyncComponent(()=>__vitePreload(()=>import("./消息丢失.html-7ea0cd53.js"),["assets/消息丢失.html-7ea0cd53.js","assets/framework-e5d7a6b2.js"])),"v-6e6759ec":defineAsyncComponent(()=>__vitePreload(()=>import("./trace-note.html-d787af3d.js"),["assets/trace-note.html-d787af3d.js","assets/framework-e5d7a6b2.js"])),"v-4ed44f29":defineAsyncComponent(()=>__vitePreload(()=>import("./DNS-DRBD-network.html-2f7a17d1.js"),["assets/DNS-DRBD-network.html-2f7a17d1.js","assets/framework-e5d7a6b2.js"])),"v-7be630bb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5740bc69.js"),["assets/index.html-5740bc69.js","assets/framework-e5d7a6b2.js"])),"v-f2e33722":defineAsyncComponent(()=>__vitePreload(()=>import("./load-assessment-and-tuning.html-0a9f9185.js"),["assets/load-assessment-and-tuning.html-0a9f9185.js","assets/framework-e5d7a6b2.js"])),"v-6a7521df":defineAsyncComponent(()=>__vitePreload(()=>import("./optimize-server-and-topology.html-1d70695e.js"),["assets/optimize-server-and-topology.html-1d70695e.js","assets/framework-e5d7a6b2.js"])),"v-0e336dfc":defineAsyncComponent(()=>__vitePreload(()=>import("./redundancy-and-load-balancing.html-5eacb502.js"),["assets/redundancy-and-load-balancing.html-5eacb502.js","assets/framework-e5d7a6b2.js"])),"v-5d436f67":defineAsyncComponent(()=>__vitePreload(()=>import("./1.1 basic-cmd.html-70946680.js"),["assets/1.1 basic-cmd.html-70946680.js","assets/framework-e5d7a6b2.js"])),"v-aa563614":defineAsyncComponent(()=>__vitePreload(()=>import("./1.2. vi.html-2ae94215.js"),["assets/1.2. vi.html-2ae94215.js","assets/framework-e5d7a6b2.js"])),"v-46f8812b":defineAsyncComponent(()=>__vitePreload(()=>import("./1.3 三剑客.html-d7321022.js"),["assets/1.3 三剑客.html-d7321022.js","assets/framework-e5d7a6b2.js"])),"v-1aa52699":defineAsyncComponent(()=>__vitePreload(()=>import("./10. scheduled-tasks.html-11840280.js"),["assets/10. scheduled-tasks.html-11840280.js","assets/framework-e5d7a6b2.js"])),"v-102b7812":defineAsyncComponent(()=>__vitePreload(()=>import("./11. backups.html-5768564f.js"),["assets/11. backups.html-5768564f.js","assets/framework-e5d7a6b2.js"])),"v-6f9a0880":defineAsyncComponent(()=>__vitePreload(()=>import("./12. software-management.html-c3d19611.js"),["assets/12. software-management.html-c3d19611.js","assets/framework-e5d7a6b2.js"])),"v-135edba9":defineAsyncComponent(()=>__vitePreload(()=>import("./2. account-management.html-b4272bfb.js"),["assets/2. account-management.html-b4272bfb.js","assets/framework-e5d7a6b2.js"])),"v-6063ff37":defineAsyncComponent(()=>__vitePreload(()=>import("./3. shell.html-d250525a.js"),["assets/3. shell.html-d250525a.js","assets/framework-e5d7a6b2.js"])),"v-69de2c8f":defineAsyncComponent(()=>__vitePreload(()=>import("./4.1 booting.html-d3bd5975.js"),["assets/4.1 booting.html-d3bd5975.js","assets/framework-e5d7a6b2.js"])),"v-d27165ae":defineAsyncComponent(()=>__vitePreload(()=>import("./4.2 systemd.html-2bb50d1a.js"),["assets/4.2 systemd.html-2bb50d1a.js","assets/framework-e5d7a6b2.js"])),"v-308f7b35":defineAsyncComponent(()=>__vitePreload(()=>import("./5. access-ctrl.html-c013dc61.js"),["assets/5. access-ctrl.html-c013dc61.js","assets/framework-e5d7a6b2.js"])),"v-e9f43e02":defineAsyncComponent(()=>__vitePreload(()=>import("./6. process-ctrl.html-8bcfac9c.js"),["assets/6. process-ctrl.html-8bcfac9c.js","assets/framework-e5d7a6b2.js"])),"v-4b9d149c":defineAsyncComponent(()=>__vitePreload(()=>import("./7. Filesystem.html-b8e126dd.js"),["assets/7. Filesystem.html-b8e126dd.js","assets/framework-e5d7a6b2.js"])),"v-896b5f1e":defineAsyncComponent(()=>__vitePreload(()=>import("./8. Storage.html-ecf4089b.js"),["assets/8. Storage.html-ecf4089b.js","assets/framework-e5d7a6b2.js"])),"v-53ada9b3":defineAsyncComponent(()=>__vitePreload(()=>import("./9. Disk Quota.html-d0ace464.js"),["assets/9. Disk Quota.html-d0ace464.js","assets/framework-e5d7a6b2.js"])),"v-690bd11a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b164aa45.js"),["assets/index.html-b164aa45.js","assets/framework-e5d7a6b2.js"])),"v-091b4a7d":defineAsyncComponent(()=>__vitePreload(()=>import("./network-management.html-8e221669.js"),["assets/network-management.html-8e221669.js","assets/framework-e5d7a6b2.js"])),"v-517e3dfc":defineAsyncComponent(()=>__vitePreload(()=>import("./network-services.html-63628b52.js"),["assets/network-services.html-63628b52.js","assets/framework-e5d7a6b2.js"])),"v-341199cc":defineAsyncComponent(()=>__vitePreload(()=>import("./rescue.html-012df5b5.js"),["assets/rescue.html-012df5b5.js","assets/framework-e5d7a6b2.js"])),"v-9374ca82":defineAsyncComponent(()=>__vitePreload(()=>import("./security.html-93332de6.js"),["assets/security.html-93332de6.js","assets/framework-e5d7a6b2.js"])),"v-4e118aef":defineAsyncComponent(()=>__vitePreload(()=>import("./knife4j.html-cbcac81d.js"),["assets/knife4j.html-cbcac81d.js","assets/framework-e5d7a6b2.js"])),"v-91c74a40":defineAsyncComponent(()=>__vitePreload(()=>import("./swagger.html-086d7ba8.js"),["assets/swagger.html-086d7ba8.js","assets/framework-e5d7a6b2.js"])),"v-041e4908":defineAsyncComponent(()=>__vitePreload(()=>import("./参数.html-380f22dc.js"),["assets/参数.html-380f22dc.js","assets/framework-e5d7a6b2.js"])),"v-2ca4e71c":defineAsyncComponent(()=>__vitePreload(()=>import("./查询.html-6af8f1a3.js"),["assets/查询.html-6af8f1a3.js","assets/framework-e5d7a6b2.js"])),"v-bfc74c5c":defineAsyncComponent(()=>__vitePreload(()=>import("./标签.html-5a8df814.js"),["assets/标签.html-5a8df814.js","assets/framework-e5d7a6b2.js"])),"v-bed94cb8":defineAsyncComponent(()=>__vitePreload(()=>import("./条件查询.html-a74aaeaa.js"),["assets/条件查询.html-a74aaeaa.js","assets/framework-e5d7a6b2.js"])),"v-3a2a6658":defineAsyncComponent(()=>__vitePreload(()=>import("./查询投影.html-d456e63f.js"),["assets/查询投影.html-d456e63f.js","assets/framework-e5d7a6b2.js"])),"v-7a74ce20":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-37cc7d8a.js"),["assets/index.html-37cc7d8a.js","assets/framework-e5d7a6b2.js"])),"v-1a0953b3":defineAsyncComponent(()=>__vitePreload(()=>import("./Spring MVC.html-8b2f0510.js"),["assets/Spring MVC.html-8b2f0510.js","assets/framework-e5d7a6b2.js"])),"v-c8e33b14":defineAsyncComponent(()=>__vitePreload(()=>import("./servlet.html-0042b211.js"),["assets/servlet.html-0042b211.js","assets/framework-e5d7a6b2.js"])),"v-d68d8200":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-24c71c86.js"),["assets/index.html-24c71c86.js","assets/framework-e5d7a6b2.js"])),"v-501c4172":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1d08a1e0.js"),["assets/index.html-1d08a1e0.js","assets/framework-e5d7a6b2.js"])),"v-073fc5c3":defineAsyncComponent(()=>__vitePreload(()=>import("./代码规范.html-6b52460b.js"),["assets/代码规范.html-6b52460b.js","assets/framework-e5d7a6b2.js"])),"v-1c5df1d3":defineAsyncComponent(()=>__vitePreload(()=>import("./关键字.html-aff41e70.js"),["assets/关键字.html-aff41e70.js","assets/framework-e5d7a6b2.js"])),"v-6789a301":defineAsyncComponent(()=>__vitePreload(()=>import("./异常.html-99dc3d55.js"),["assets/异常.html-99dc3d55.js","assets/framework-e5d7a6b2.js"])),"v-47173f46":defineAsyncComponent(()=>__vitePreload(()=>import("./运算符.html-c9cf8804.js"),["assets/运算符.html-c9cf8804.js","assets/framework-e5d7a6b2.js"])),"v-cb799b10":defineAsyncComponent(()=>__vitePreload(()=>import("./Concurrent.html-60995c89.js"),["assets/Concurrent.html-60995c89.js","assets/framework-e5d7a6b2.js"])),"v-b9dfdcac":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-588d1b7a.js"),["assets/index.html-588d1b7a.js","assets/framework-e5d7a6b2.js"])),"v-dbf1abde":defineAsyncComponent(()=>__vitePreload(()=>import("./collection.html-e49ce95b.js"),["assets/collection.html-e49ce95b.js","assets/framework-e5d7a6b2.js"])),"v-c85546b2":defineAsyncComponent(()=>__vitePreload(()=>import("./map.html-e0c0d3d2.js"),["assets/map.html-e0c0d3d2.js","assets/framework-e5d7a6b2.js"])),"v-50d81d6c":defineAsyncComponent(()=>__vitePreload(()=>import("./java8.html-9862e6aa.js"),["assets/java8.html-9862e6aa.js","assets/framework-e5d7a6b2.js"])),"v-d7518ca6":defineAsyncComponent(()=>__vitePreload(()=>import("./jmm.html-1ad74cd4.js"),["assets/jmm.html-1ad74cd4.js","assets/framework-e5d7a6b2.js"])),"v-e76cd190":defineAsyncComponent(()=>__vitePreload(()=>import("./问题排查.html-3f2dc7b8.js"),["assets/问题排查.html-3f2dc7b8.js","assets/framework-e5d7a6b2.js"])),"v-1331a2fc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b419447d.js"),["assets/index.html-b419447d.js","assets/framework-e5d7a6b2.js"])),"v-08870d52":defineAsyncComponent(()=>__vitePreload(()=>import("./单词.html-34397a5e.js"),["assets/单词.html-34397a5e.js","assets/framework-e5d7a6b2.js"])),"v-7161413e":defineAsyncComponent(()=>__vitePreload(()=>import("./句子.html-44d15933.js"),["assets/句子.html-44d15933.js","assets/framework-e5d7a6b2.js"])),"v-98bd41e4":defineAsyncComponent(()=>__vitePreload(()=>import("./段落.html-77621bb5.js"),["assets/段落.html-77621bb5.js","assets/framework-e5d7a6b2.js"])),"v-2760f36f":defineAsyncComponent(()=>__vitePreload(()=>import("./对话练习.html-1f4c0bbb.js"),["assets/对话练习.html-1f4c0bbb.js","assets/framework-e5d7a6b2.js"])),"v-7a3b5784":defineAsyncComponent(()=>__vitePreload(()=>import("./讲座练习.html-eca5a0d2.js"),["assets/讲座练习.html-eca5a0d2.js","assets/framework-e5d7a6b2.js"])),"v-1196072b":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-43dfc24d.js"),["assets/1.html-43dfc24d.js","assets/framework-e5d7a6b2.js"])),"v-134adfca":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-d3abb615.js"),["assets/2.html-d3abb615.js","assets/framework-e5d7a6b2.js"])),"v-14ffb869":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-ce747ad4.js"),["assets/3.html-ce747ad4.js","assets/framework-e5d7a6b2.js"])),"v-442d7e7b":defineAsyncComponent(()=>__vitePreload(()=>import("./刷题答案.html-f8c1d729.js"),["assets/刷题答案.html-f8c1d729.js","assets/framework-e5d7a6b2.js"])),"v-070b4ce4":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 六选三.html-c07a1c39.js"),["assets/1. 六选三.html-c07a1c39.js","assets/framework-e5d7a6b2.js"])),"v-c7814346":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 词汇题.html-78318174.js"),["assets/2. 词汇题.html-78318174.js","assets/framework-e5d7a6b2.js"])),"v-3a5e6193":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 指代题.html-5ae9982d.js"),["assets/3. 指代题.html-5ae9982d.js","assets/framework-e5d7a6b2.js"])),"v-999605fc":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 句子简化题.html-6d198e61.js"),["assets/4. 句子简化题.html-6d198e61.js","assets/framework-e5d7a6b2.js"])),"v-0cc106d2":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 句子插入题.html-f991fe90.js"),["assets/5. 句子插入题.html-f991fe90.js","assets/framework-e5d7a6b2.js"])),"v-73efc5e4":defineAsyncComponent(()=>__vitePreload(()=>import("./6. 细节题.html-7f1180d8.js"),["assets/6. 细节题.html-7f1180d8.js","assets/framework-e5d7a6b2.js"])),"v-4febd898":defineAsyncComponent(()=>__vitePreload(()=>import("./8. 推断题.html-377b8b5e.js"),["assets/8. 推断题.html-377b8b5e.js","assets/framework-e5d7a6b2.js"])),"v-6838aa16":defineAsyncComponent(()=>__vitePreload(()=>import("./9. 目的题.html-07366392.js"),["assets/9. 目的题.html-07366392.js","assets/framework-e5d7a6b2.js"])),"v-6b616070":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-781bafed.js"),["assets/1.html-781bafed.js","assets/framework-e5d7a6b2.js"])),"v-76b158ca":defineAsyncComponent(()=>__vitePreload(()=>import("./10..html-913ea0d3.js"),["assets/10..html-913ea0d3.js","assets/framework-e5d7a6b2.js"])),"v-f9914250":defineAsyncComponent(()=>__vitePreload(()=>import("./12.html-57cae31d.js"),["assets/12.html-57cae31d.js","assets/framework-e5d7a6b2.js"])),"v-1b966efe":defineAsyncComponent(()=>__vitePreload(()=>import("./14. .html-ff8b6cb2.js"),["assets/14. .html-ff8b6cb2.js","assets/framework-e5d7a6b2.js"])),"v-ef542e96":defineAsyncComponent(()=>__vitePreload(()=>import("./15.html-fca96a29.js"),["assets/15.html-fca96a29.js","assets/framework-e5d7a6b2.js"])),"v-ebea7d58":defineAsyncComponent(()=>__vitePreload(()=>import("./16.html-3e01197c.js"),["assets/16.html-3e01197c.js","assets/framework-e5d7a6b2.js"])),"v-e880cc1a":defineAsyncComponent(()=>__vitePreload(()=>import("./17.html-6f338f30.js"),["assets/17.html-6f338f30.js","assets/framework-e5d7a6b2.js"])),"v-e5171adc":defineAsyncComponent(()=>__vitePreload(()=>import("./18.html-8a69e4f6.js"),["assets/18.html-8a69e4f6.js","assets/framework-e5d7a6b2.js"])),"v-e1ad699e":defineAsyncComponent(()=>__vitePreload(()=>import("./19.html-0af522ea.js"),["assets/19.html-0af522ea.js","assets/framework-e5d7a6b2.js"])),"v-96982e4a":defineAsyncComponent(()=>__vitePreload(()=>import("./20.html-b6881b93.js"),["assets/20.html-b6881b93.js","assets/framework-e5d7a6b2.js"])),"v-932e7d0c":defineAsyncComponent(()=>__vitePreload(()=>import("./21.html-6edf74ca.js"),["assets/21.html-6edf74ca.js","assets/framework-e5d7a6b2.js"])),"v-8c5b1a90":defineAsyncComponent(()=>__vitePreload(()=>import("./23.html-28fbd0da.js"),["assets/23.html-28fbd0da.js","assets/framework-e5d7a6b2.js"])),"v-88f16952":defineAsyncComponent(()=>__vitePreload(()=>import("./24.html-3c7ec718.js"),["assets/24.html-3c7ec718.js","assets/framework-e5d7a6b2.js"])),"v-8587b814":defineAsyncComponent(()=>__vitePreload(()=>import("./25.html-1430433e.js"),["assets/25.html-1430433e.js","assets/framework-e5d7a6b2.js"])),"v-821e06d6":defineAsyncComponent(()=>__vitePreload(()=>import("./26.html-108062dc.js"),["assets/26.html-108062dc.js","assets/framework-e5d7a6b2.js"])),"v-7eb45598":defineAsyncComponent(()=>__vitePreload(()=>import("./27.html-5618165a.js"),["assets/27.html-5618165a.js","assets/framework-e5d7a6b2.js"])),"v-7b4aa45a":defineAsyncComponent(()=>__vitePreload(()=>import("./28.html-6c9c811f.js"),["assets/28.html-6c9c811f.js","assets/framework-e5d7a6b2.js"])),"v-77e0f31c":defineAsyncComponent(()=>__vitePreload(()=>import("./29.html-e0ef0e93.js"),["assets/29.html-e0ef0e93.js","assets/framework-e5d7a6b2.js"])),"v-2b9ef426":defineAsyncComponent(()=>__vitePreload(()=>import("./7. .html-04108821.js"),["assets/7. .html-04108821.js","assets/framework-e5d7a6b2.js"])),"v-5a792faa":defineAsyncComponent(()=>__vitePreload(()=>import("./9. .html-e949b342.js"),["assets/9. .html-e949b342.js","assets/framework-e5d7a6b2.js"])),"v-c3160f00":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c260617a.js"),["assets/index.html-c260617a.js","assets/framework-e5d7a6b2.js"])),"v-53bc634a":defineAsyncComponent(()=>__vitePreload(()=>import("./task2.html-5c8015d0.js"),["assets/task2.html-5c8015d0.js","assets/framework-e5d7a6b2.js"])),"v-fcbb4718":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-f21bae82.js"),["assets/1.html-f21bae82.js","assets/framework-e5d7a6b2.js"])),"v-9a479324":defineAsyncComponent(()=>__vitePreload(()=>import("./10.html-319d1e99.js"),["assets/10.html-319d1e99.js","assets/framework-e5d7a6b2.js"])),"v-f95195da":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-98aea948.js"),["assets/2.html-98aea948.js","assets/framework-e5d7a6b2.js"])),"v-f5e7e49c":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-5a56c1d6.js"),["assets/3.html-5a56c1d6.js","assets/framework-e5d7a6b2.js"])),"v-f27e335e":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-56cfcaa6.js"),["assets/4.html-56cfcaa6.js","assets/framework-e5d7a6b2.js"])),"v-ef148220":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-bf83f9e0.js"),["assets/5.html-bf83f9e0.js","assets/framework-e5d7a6b2.js"])),"v-ebaad0e2":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-eaa58758.js"),["assets/6.html-eaa58758.js","assets/framework-e5d7a6b2.js"])),"v-e8411fa4":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-f303e078.js"),["assets/7.html-f303e078.js","assets/framework-e5d7a6b2.js"])),"v-e4d76e66":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-f52bda19.js"),["assets/8.html-f52bda19.js","assets/framework-e5d7a6b2.js"])),"v-e16dbd28":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-f089f286.js"),["assets/9.html-f089f286.js","assets/framework-e5d7a6b2.js"])),"v-6d735e26":defineAsyncComponent(()=>__vitePreload(()=>import("./1. .html-0cf99616.js"),["assets/1. .html-0cf99616.js","assets/framework-e5d7a6b2.js"])),"v-84e07be8":defineAsyncComponent(()=>__vitePreload(()=>import("./2. .html-025e66a7.js"),["assets/2. .html-025e66a7.js","assets/framework-e5d7a6b2.js"])),"v-0f462a55":defineAsyncComponent(()=>__vitePreload(()=>import("./再来人.html-f8d8adba.js"),["assets/再来人.html-f8d8adba.js","assets/framework-e5d7a6b2.js"])),"v-604b10c2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-41e0a848.js"),["assets/index.html-41e0a848.js","assets/framework-e5d7a6b2.js"])),"v-48443ca0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-39d1f685.js"),["assets/index.html-39d1f685.js","assets/framework-e5d7a6b2.js"])),"v-1c4985c6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6717d613.js"),["assets/index.html-6717d613.js","assets/framework-e5d7a6b2.js"])),"v-315ce8e2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4951d995.js"),["assets/index.html-4951d995.js","assets/framework-e5d7a6b2.js"])),"v-074f1f5b":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 逻辑存储结构.html-268cf304.js"),["assets/1. 逻辑存储结构.html-268cf304.js","assets/framework-e5d7a6b2.js"])),"v-9c53d84a":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 引擎架构.html-71d3f158.js"),["assets/2. 引擎架构.html-71d3f158.js","assets/framework-e5d7a6b2.js"])),"v-840effd6":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 事务原理.html-e67bfdad.js"),["assets/3. 事务原理.html-e67bfdad.js","assets/framework-e5d7a6b2.js"])),"v-1b05a52c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-28b4ed0b.js"),["assets/index.html-28b4ed0b.js","assets/framework-e5d7a6b2.js"])),"v-3f3cb95e":defineAsyncComponent(()=>__vitePreload(()=>import("./批处理优化.html-fe751122.js"),["assets/批处理优化.html-fe751122.js","assets/framework-e5d7a6b2.js"])),"v-504e2eb4":defineAsyncComponent(()=>__vitePreload(()=>import("./服务端优化.html-7b927fba.js"),["assets/服务端优化.html-7b927fba.js","assets/framework-e5d7a6b2.js"])),"v-23567452":defineAsyncComponent(()=>__vitePreload(()=>import("./键值设计.html-9f82b21a.js"),["assets/键值设计.html-9f82b21a.js","assets/framework-e5d7a6b2.js"])),"v-7443bfa7":defineAsyncComponent(()=>__vitePreload(()=>import("./集群.html-66378e0d.js"),["assets/集群.html-66378e0d.js","assets/framework-e5d7a6b2.js"])),"v-41cd53a5":defineAsyncComponent(()=>__vitePreload(()=>import("./distributed-lock.html-b532af97.js"),["assets/distributed-lock.html-b532af97.js","assets/framework-e5d7a6b2.js"])),"v-9a82766e":defineAsyncComponent(()=>__vitePreload(()=>import("./follow.html-21c9c774.js"),["assets/follow.html-21c9c774.js","assets/framework-e5d7a6b2.js"])),"v-15bb7bd3":defineAsyncComponent(()=>__vitePreload(()=>import("./global-id.html-cf8ce59a.js"),["assets/global-id.html-cf8ce59a.js","assets/framework-e5d7a6b2.js"])),"v-3314e6bb":defineAsyncComponent(()=>__vitePreload(()=>import("./nearby.html-db0ba14e.js"),["assets/nearby.html-db0ba14e.js","assets/framework-e5d7a6b2.js"])),"v-5301653a":defineAsyncComponent(()=>__vitePreload(()=>import("./rate.html-9c88b22f.js"),["assets/rate.html-9c88b22f.js","assets/framework-e5d7a6b2.js"])),"v-827df3ae":defineAsyncComponent(()=>__vitePreload(()=>import("./seckill.html-072dd361.js"),["assets/seckill.html-072dd361.js","assets/framework-e5d7a6b2.js"])),"v-f40c5306":defineAsyncComponent(()=>__vitePreload(()=>import("./sign.html-1702a25b.js"),["assets/sign.html-1702a25b.js","assets/framework-e5d7a6b2.js"])),"v-429e53da":defineAsyncComponent(()=>__vitePreload(()=>import("./uvpv.html-8a1c5f75.js"),["assets/uvpv.html-8a1c5f75.js","assets/framework-e5d7a6b2.js"])),"v-bd3feee8":defineAsyncComponent(()=>__vitePreload(()=>import("./atomic.html-821b6ecf.js"),["assets/atomic.html-821b6ecf.js","assets/framework-e5d7a6b2.js"])),"v-3f5d7d5a":defineAsyncComponent(()=>__vitePreload(()=>import("./cache-preheat.html-99b68bc2.js"),["assets/cache-preheat.html-99b68bc2.js","assets/framework-e5d7a6b2.js"])),"v-df376572":defineAsyncComponent(()=>__vitePreload(()=>import("./cache-problem.html-23e999a0.js"),["assets/cache-problem.html-23e999a0.js","assets/framework-e5d7a6b2.js"])),"v-72755b99":defineAsyncComponent(()=>__vitePreload(()=>import("./consistency-update-strategy.html-1266feec.js"),["assets/consistency-update-strategy.html-1266feec.js","assets/framework-e5d7a6b2.js"])),"v-abcd1588":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-407d80a2.js"),["assets/index.html-407d80a2.js","assets/framework-e5d7a6b2.js"])),"v-0d277b0b":defineAsyncComponent(()=>__vitePreload(()=>import("./基本类型.html-3a770c85.js"),["assets/基本类型.html-3a770c85.js","assets/framework-e5d7a6b2.js"])),"v-62b1adbc":defineAsyncComponent(()=>__vitePreload(()=>import("./数据结构.html-cf4f44a1.js"),["assets/数据结构.html-cf4f44a1.js","assets/framework-e5d7a6b2.js"])),"v-110262e4":defineAsyncComponent(()=>__vitePreload(()=>import("./特殊类型.html-658f81dd.js"),["assets/特殊类型.html-658f81dd.js","assets/framework-e5d7a6b2.js"])),"v-0faf468c":defineAsyncComponent(()=>__vitePreload(()=>import("./内存淘汰策略.html-9fd48a70.js"),["assets/内存淘汰策略.html-9fd48a70.js","assets/framework-e5d7a6b2.js"])),"v-0befbfde":defineAsyncComponent(()=>__vitePreload(()=>import("./过期删除策略.html-14c1a16b.js"),["assets/过期删除策略.html-14c1a16b.js","assets/framework-e5d7a6b2.js"])),"v-1668525e":defineAsyncComponent(()=>__vitePreload(()=>import("./线程模型.html-1bda6b3d.js"),["assets/线程模型.html-1bda6b3d.js","assets/framework-e5d7a6b2.js"])),"v-23892914":defineAsyncComponent(()=>__vitePreload(()=>import("./应用场景.html-6b81a391.js"),["assets/应用场景.html-6b81a391.js","assets/framework-e5d7a6b2.js"])),"v-3678f3e0":defineAsyncComponent(()=>__vitePreload(()=>import("./概念.html-3e9462d7.js"),["assets/概念.html-3e9462d7.js","assets/framework-e5d7a6b2.js"])),"v-ff34970a":defineAsyncComponent(()=>__vitePreload(()=>import("./用法.html-f594b525.js"),["assets/用法.html-f594b525.js","assets/framework-e5d7a6b2.js"])),"v-5f46ee29":defineAsyncComponent(()=>__vitePreload(()=>import("./后处理器.html-8c6abcd9.js"),["assets/后处理器.html-8c6abcd9.js","assets/framework-e5d7a6b2.js"])),"v-2a5deb4c":defineAsyncComponent(()=>__vitePreload(()=>import("./基本概念.html-2f90243d.js"),["assets/基本概念.html-2f90243d.js","assets/framework-e5d7a6b2.js"])),"v-31055127":defineAsyncComponent(()=>__vitePreload(()=>import("./循环依赖.html-1f05e41e.js"),["assets/循环依赖.html-1f05e41e.js","assets/framework-e5d7a6b2.js"])),"v-75f558e2":defineAsyncComponent(()=>__vitePreload(()=>import("./生命周期.html-771c56f8.js"),["assets/生命周期.html-771c56f8.js","assets/framework-e5d7a6b2.js"])),"v-29eadb9e":defineAsyncComponent(()=>__vitePreload(()=>import("./ioc.html-8791eef8.js"),["assets/ioc.html-8791eef8.js","assets/framework-e5d7a6b2.js"])),"v-dbc33718":defineAsyncComponent(()=>__vitePreload(()=>import("./事务.html-a757b012.js"),["assets/事务.html-a757b012.js","assets/framework-e5d7a6b2.js"])),"v-136d231a":defineAsyncComponent(()=>__vitePreload(()=>import("./forkjoin.html-7be15eb4.js"),["assets/forkjoin.html-7be15eb4.js","assets/framework-e5d7a6b2.js"])),"v-7101117c":defineAsyncComponent(()=>__vitePreload(()=>import("./future.html-3bcec429.js"),["assets/future.html-3bcec429.js","assets/framework-e5d7a6b2.js"])),"v-18234947":defineAsyncComponent(()=>__vitePreload(()=>import("./乐观锁.html-686b376f.js"),["assets/乐观锁.html-686b376f.js","assets/framework-e5d7a6b2.js"])),"v-5517b052":defineAsyncComponent(()=>__vitePreload(()=>import("./对比.html-79ad8526.js"),["assets/对比.html-79ad8526.js","assets/framework-e5d7a6b2.js"])),"v-845e9762":defineAsyncComponent(()=>__vitePreload(()=>import("./悲观锁.html-a453d134.js"),["assets/悲观锁.html-a453d134.js","assets/framework-e5d7a6b2.js"])),"v-7f0bc75b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-06bf4cf1.js"),["assets/index.html-06bf4cf1.js","assets/framework-e5d7a6b2.js"])),"v-70a587ea":defineAsyncComponent(()=>__vitePreload(()=>import("./jmm.html-3575240f.js"),["assets/jmm.html-3575240f.js","assets/framework-e5d7a6b2.js"])),"v-a49aad7c":defineAsyncComponent(()=>__vitePreload(()=>import("./volatile.html-1f693c67.js"),["assets/volatile.html-1f693c67.js","assets/framework-e5d7a6b2.js"])),"v-4f4311a3":defineAsyncComponent(()=>__vitePreload(()=>import("./AQS.html-186f295a.js"),["assets/AQS.html-186f295a.js","assets/framework-e5d7a6b2.js"])),"v-02071af9":defineAsyncComponent(()=>__vitePreload(()=>import("./CountDownLatch.html-29718d08.js"),["assets/CountDownLatch.html-29718d08.js","assets/framework-e5d7a6b2.js"])),"v-83e03870":defineAsyncComponent(()=>__vitePreload(()=>import("./CyclicBarrier.html-4334401c.js"),["assets/CyclicBarrier.html-4334401c.js","assets/framework-e5d7a6b2.js"])),"v-2b6c26fc":defineAsyncComponent(()=>__vitePreload(()=>import("./Semaphore.html-3729ee23.js"),["assets/Semaphore.html-3729ee23.js","assets/framework-e5d7a6b2.js"])),"v-d2b5ffd4":defineAsyncComponent(()=>__vitePreload(()=>import("./threadlocal.html-1f6004cd.js"),["assets/threadlocal.html-1f6004cd.js","assets/framework-e5d7a6b2.js"])),"v-4f81662d":defineAsyncComponent(()=>__vitePreload(()=>import("./线程.html-af89b5dc.js"),["assets/线程.html-af89b5dc.js","assets/framework-e5d7a6b2.js"])),"v-e189f522":defineAsyncComponent(()=>__vitePreload(()=>import("./线程池.html-0e3fa341.js"),["assets/线程池.html-0e3fa341.js","assets/framework-e5d7a6b2.js"])),"v-4fda0a50":defineAsyncComponent(()=>__vitePreload(()=>import("./线程状态.html-1a08529f.js"),["assets/线程状态.html-1a08529f.js","assets/framework-e5d7a6b2.js"])),"v-dcc7ce0c":defineAsyncComponent(()=>__vitePreload(()=>import("./内部类.html-20871482.js"),["assets/内部类.html-20871482.js","assets/framework-e5d7a6b2.js"])),"v-917eeb5c":defineAsyncComponent(()=>__vitePreload(()=>import("./工具类.html-e465f5af.js"),["assets/工具类.html-e465f5af.js","assets/framework-e5d7a6b2.js"])),"v-67db80ff":defineAsyncComponent(()=>__vitePreload(()=>import("./常见类.html-edb81d94.js"),["assets/常见类.html-edb81d94.js","assets/framework-e5d7a6b2.js"])),"v-57aa1d68":defineAsyncComponent(()=>__vitePreload(()=>import("./面向对象.html-0d4a3beb.js"),["assets/面向对象.html-0d4a3beb.js","assets/framework-e5d7a6b2.js"])),"v-b610beba":defineAsyncComponent(()=>__vitePreload(()=>import("./基本类型.html-0b61d198.js"),["assets/基本类型.html-0b61d198.js","assets/framework-e5d7a6b2.js"])),"v-63ce032a":defineAsyncComponent(()=>__vitePreload(()=>import("./数组.html-0ee57173.js"),["assets/数组.html-0ee57173.js","assets/framework-e5d7a6b2.js"])),"v-1df68cd2":defineAsyncComponent(()=>__vitePreload(()=>import("./内存区域.html-37fca855.js"),["assets/内存区域.html-37fca855.js","assets/framework-e5d7a6b2.js"])),"v-09e365e1":defineAsyncComponent(()=>__vitePreload(()=>import("./内存泄漏.html-b3dcf78a.js"),["assets/内存泄漏.html-b3dcf78a.js","assets/framework-e5d7a6b2.js"])),"v-63a3cb8f":defineAsyncComponent(()=>__vitePreload(()=>import("./垃圾回收算法.html-dc774e22.js"),["assets/垃圾回收算法.html-dc774e22.js","assets/framework-e5d7a6b2.js"])),"v-e441e7a2":defineAsyncComponent(()=>__vitePreload(()=>import("./垃圾收集器.html-1cc84cb6.js"),["assets/垃圾收集器.html-1cc84cb6.js","assets/framework-e5d7a6b2.js"])),"v-212567eb":defineAsyncComponent(()=>__vitePreload(()=>import("./对象死亡判定.html-a544a64a.js"),["assets/对象死亡判定.html-a544a64a.js","assets/framework-e5d7a6b2.js"])),"v-8abf6c9c":defineAsyncComponent(()=>__vitePreload(()=>import("./引用类型.html-006da25e.js"),["assets/引用类型.html-006da25e.js","assets/framework-e5d7a6b2.js"])),"v-1e2d9eaa":defineAsyncComponent(()=>__vitePreload(()=>import("./类加载器.html-7bf2442b.js"),["assets/类加载器.html-7bf2442b.js","assets/framework-e5d7a6b2.js"])),"v-97c49406":defineAsyncComponent(()=>__vitePreload(()=>import("./类加载时机.html-5f8c9731.js"),["assets/类加载时机.html-5f8c9731.js","assets/framework-e5d7a6b2.js"])),"v-52c50185":defineAsyncComponent(()=>__vitePreload(()=>import("./类加载过程.html-b4435460.js"),["assets/类加载过程.html-b4435460.js","assets/framework-e5d7a6b2.js"])),"v-d0d15838":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 长难句.html-572ecc29.js"),["assets/2. 长难句.html-572ecc29.js","assets/framework-e5d7a6b2.js"])),"v-ea34918a":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 单句功能判断方法论.html-0eb0c749.js"),["assets/3. 单句功能判断方法论.html-0eb0c749.js","assets/framework-e5d7a6b2.js"])),"v-6d8096fe":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 句间关系与句子功能.html-820a6462.js"),["assets/4. 句间关系与句子功能.html-820a6462.js","assets/framework-e5d7a6b2.js"])),"v-0fbed879":defineAsyncComponent(()=>__vitePreload(()=>import("./6. 全文结构与主旨题.html-6727ebeb.js"),["assets/6. 全文结构与主旨题.html-6727ebeb.js","assets/framework-e5d7a6b2.js"])),"v-43154c5b":defineAsyncComponent(()=>__vitePreload(()=>import("./7. 功能线综合练习.html-c76b8d69.js"),["assets/7. 功能线综合练习.html-c76b8d69.js","assets/framework-e5d7a6b2.js"])),"v-4f0993bc":defineAsyncComponent(()=>__vitePreload(()=>import("./8. 高效信息提取与信息题.html-fc5b499c.js"),["assets/8. 高效信息提取与信息题.html-fc5b499c.js","assets/framework-e5d7a6b2.js"])),"v-ed6ad178":defineAsyncComponent(()=>__vitePreload(()=>import("./9. 功能与信息线综合.html-51adeb40.js"),["assets/9. 功能与信息线综合.html-51adeb40.js","assets/framework-e5d7a6b2.js"])),"v-5cd31434":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5de4be83.js"),["assets/index.html-5de4be83.js","assets/framework-e5d7a6b2.js"])),"v-631280a5":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 事实信息题.html-dfdcbee5.js"),["assets/1. 事实信息题.html-dfdcbee5.js","assets/framework-e5d7a6b2.js"])),"v-2c848bba":defineAsyncComponent(()=>__vitePreload(()=>import("./10. 归纳与解释.html-fbe4c20e.js"),["assets/10. 归纳与解释.html-fbe4c20e.js","assets/framework-e5d7a6b2.js"])),"v-7f1c40a5":defineAsyncComponent(()=>__vitePreload(()=>import("./2.0 主旨题.html-1fbc4874.js"),["assets/2.0 主旨题.html-1fbc4874.js","assets/framework-e5d7a6b2.js"])),"v-41488cf8":defineAsyncComponent(()=>__vitePreload(()=>import("./2.1 句子作用题.html-cb28509c.js"),["assets/2.1 句子作用题.html-cb28509c.js","assets/framework-e5d7a6b2.js"])),"v-4b0be9ad":defineAsyncComponent(()=>__vitePreload(()=>import("./2.2 信息目的题.html-f78c0625.js"),["assets/2.2 信息目的题.html-f78c0625.js","assets/framework-e5d7a6b2.js"])),"v-7c7306e3":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 推断题.html-c1b888ac.js"),["assets/3. 推断题.html-c1b888ac.js","assets/framework-e5d7a6b2.js"])),"v-0a3572c0":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 可多选题.html-d9ccf4ed.js"),["assets/4. 可多选题.html-d9ccf4ed.js","assets/framework-e5d7a6b2.js"])),"v-1d0812fd":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 态度题.html-b6613749.js"),["assets/5. 态度题.html-b6613749.js","assets/framework-e5d7a6b2.js"])),"v-21ff79cf":defineAsyncComponent(()=>__vitePreload(()=>import("./7. 类比题.html-19256630.js"),["assets/7. 类比题.html-19256630.js","assets/framework-e5d7a6b2.js"])),"v-52ee249c":defineAsyncComponent(()=>__vitePreload(()=>import("./8. 否定事实信息题.html-62bc0892.js"),["assets/8. 否定事实信息题.html-62bc0892.js","assets/framework-e5d7a6b2.js"])),"v-96b71298":defineAsyncComponent(()=>__vitePreload(()=>import("./9. 词汇题.html-acaf7b45.js"),["assets/9. 词汇题.html-acaf7b45.js","assets/framework-e5d7a6b2.js"])),"v-c796c7da":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6bf0b5f0.js"),["assets/index.html-6bf0b5f0.js","assets/framework-e5d7a6b2.js"])),"v-9db00862":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9fcbcd1f.js"),["assets/index.html-9fcbcd1f.js","assets/framework-e5d7a6b2.js"])),"v-6ef4e9e0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b9729e7d.js"),["assets/index.html-b9729e7d.js","assets/framework-e5d7a6b2.js"])),"v-502d46de":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b4793ca6.js"),["assets/index.html-b4793ca6.js","assets/framework-e5d7a6b2.js"])),"v-670668a4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5f9173df.js"),["assets/index.html-5f9173df.js","assets/framework-e5d7a6b2.js"])),"v-215ec3a6":defineAsyncComponent(()=>__vitePreload(()=>import("./1. 虚拟头节点.html-263837f6.js"),["assets/1. 虚拟头节点.html-263837f6.js","assets/framework-e5d7a6b2.js"])),"v-373a2774":defineAsyncComponent(()=>__vitePreload(()=>import("./2. 基本技巧.html-ac3fb656.js"),["assets/2. 基本技巧.html-ac3fb656.js","assets/framework-e5d7a6b2.js"])),"v-5f92dfbb":defineAsyncComponent(()=>__vitePreload(()=>import("./3. 反转链表.html-6381d61b.js"),["assets/3. 反转链表.html-6381d61b.js","assets/framework-e5d7a6b2.js"])),"v-4f3994ec":defineAsyncComponent(()=>__vitePreload(()=>import("./4. 链表中点.html-dd3e1dc9.js"),["assets/4. 链表中点.html-dd3e1dc9.js","assets/framework-e5d7a6b2.js"])),"v-64b49b30":defineAsyncComponent(()=>__vitePreload(()=>import("./5. 链表求环.html-45b7a31c.js"),["assets/5. 链表求环.html-45b7a31c.js","assets/framework-e5d7a6b2.js"])),"v-ac829028":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a152c649.js"),["assets/index.html-a152c649.js","assets/framework-e5d7a6b2.js"])),"v-5c15b7e2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-52540c18.js"),["assets/index.html-52540c18.js","assets/framework-e5d7a6b2.js"])),"v-09c20ff4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d1cd2e5c.js"),["assets/index.html-d1cd2e5c.js","assets/framework-e5d7a6b2.js"])),"v-f9d5596c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-692ac90c.js"),["assets/index.html-692ac90c.js","assets/framework-e5d7a6b2.js"])),"v-2feabdf0":defineAsyncComponent(()=>__vitePreload(()=>import("./浮点数.html-a764a4d3.js"),["assets/浮点数.html-a764a4d3.js","assets/framework-e5d7a6b2.js"])),"v-4e1b354c":defineAsyncComponent(()=>__vitePreload(()=>import("./答案集.html-a10d36e6.js"),["assets/答案集.html-a10d36e6.js","assets/framework-e5d7a6b2.js"])),"v-28281b72":defineAsyncComponent(()=>__vitePreload(()=>import("./输入集.html-79985fbf.js"),["assets/输入集.html-79985fbf.js","assets/framework-e5d7a6b2.js"])),"v-12108c54":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b74e8d19.js"),["assets/index.html-b74e8d19.js","assets/framework-e5d7a6b2.js"])),"v-675b1dd5":defineAsyncComponent(()=>__vitePreload(()=>import("./股票问题.html-1530a353.js"),["assets/股票问题.html-1530a353.js","assets/framework-e5d7a6b2.js"])),"v-2a47af17":defineAsyncComponent(()=>__vitePreload(()=>import("./分割.html-c3f74b43.js"),["assets/分割.html-c3f74b43.js","assets/framework-e5d7a6b2.js"])),"v-05848cc6":defineAsyncComponent(()=>__vitePreload(()=>import("./组合.html-e538dd10.js"),["assets/组合.html-e538dd10.js","assets/framework-e5d7a6b2.js"])),"v-5ad3f066":defineAsyncComponent(()=>__vitePreload(()=>import("./选择.html-3381687b.js"),["assets/选择.html-3381687b.js","assets/framework-e5d7a6b2.js"])),"v-cd92eada":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eed8dee1.js"),["assets/index.html-eed8dee1.js","assets/framework-e5d7a6b2.js"])),"v-703fbedc":defineAsyncComponent(()=>__vitePreload(()=>import("./划分方法.html-6b20d19f.js"),["assets/划分方法.html-6b20d19f.js","assets/framework-e5d7a6b2.js"])),"v-36bfb854":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-41fbf7f5.js"),["assets/index.html-41fbf7f5.js","assets/framework-e5d7a6b2.js"])),"v-0659a534":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5c5a4dc8.js"),["assets/index.html-5c5a4dc8.js","assets/framework-e5d7a6b2.js"])),"v-06cc4f6b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b7fc7070.js"),["assets/index.html-b7fc7070.js","assets/framework-e5d7a6b2.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-97154a90.js"),["assets/404.html-97154a90.js","assets/framework-e5d7a6b2.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-821a4298.js"),["assets/index.html-821a4298.js","assets/framework-e5d7a6b2.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-128b77a9.js"),["assets/index.html-128b77a9.js","assets/framework-e5d7a6b2.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f4d1001f.js"),["assets/index.html-f4d1001f.js","assets/framework-e5d7a6b2.js"])),"v-75ed4ea4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1b19d60a.js"),["assets/index.html-1b19d60a.js","assets/framework-e5d7a6b2.js"])),"v-d804e652":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3855d5e9.js"),["assets/index.html-3855d5e9.js","assets/framework-e5d7a6b2.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-500389e1.js"),["assets/index.html-500389e1.js","assets/framework-e5d7a6b2.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7dd2b242.js"),["assets/index.html-7dd2b242.js","assets/framework-e5d7a6b2.js"])),"v-fbb94a6e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0bf7d35b.js"),["assets/index.html-0bf7d35b.js","assets/framework-e5d7a6b2.js"])),"v-540234fd":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8e955eec.js"),["assets/index.html-8e955eec.js","assets/framework-e5d7a6b2.js"])),"v-54d7ff21":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7250500e.js"),["assets/index.html-7250500e.js","assets/framework-e5d7a6b2.js"])),"v-1ad78213":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-15028d50.js"),["assets/index.html-15028d50.js","assets/framework-e5d7a6b2.js"])),"v-5b30cfc6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-98d753c4.js"),["assets/index.html-98d753c4.js","assets/framework-e5d7a6b2.js"])),"v-2c3ee7f5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c9c239f5.js"),["assets/index.html-c9c239f5.js","assets/framework-e5d7a6b2.js"])),"v-27b02be6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a56de660.js"),["assets/index.html-a56de660.js","assets/framework-e5d7a6b2.js"])),"v-2a32a3a8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-aaef1dad.js"),["assets/index.html-aaef1dad.js","assets/framework-e5d7a6b2.js"])),"v-03ba1c5a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bc3cc0ea.js"),["assets/index.html-bc3cc0ea.js","assets/framework-e5d7a6b2.js"])),"v-16890533":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4aa47e9b.js"),["assets/index.html-4aa47e9b.js","assets/framework-e5d7a6b2.js"])),"v-05bf9c12":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1e297dd0.js"),["assets/index.html-1e297dd0.js","assets/framework-e5d7a6b2.js"])),"v-d28a2a8a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c117050e.js"),["assets/index.html-c117050e.js","assets/framework-e5d7a6b2.js"])),"v-2e14b8c3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-868e33f8.js"),["assets/index.html-868e33f8.js","assets/framework-e5d7a6b2.js"])),"v-1397518c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-66487adf.js"),["assets/index.html-66487adf.js","assets/framework-e5d7a6b2.js"])),"v-d4827004":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7ae9136e.js"),["assets/index.html-7ae9136e.js","assets/framework-e5d7a6b2.js"])),"v-41412eae":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a9e1d681.js"),["assets/index.html-a9e1d681.js","assets/framework-e5d7a6b2.js"])),"v-ac203710":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-824e8cee.js"),["assets/index.html-824e8cee.js","assets/framework-e5d7a6b2.js"])),"v-d908375e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f9fdd884.js"),["assets/index.html-f9fdd884.js","assets/framework-e5d7a6b2.js"])),"v-03d1f283":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-74e8ea41.js"),["assets/index.html-74e8ea41.js","assets/framework-e5d7a6b2.js"])),"v-072edc12":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bbcd6142.js"),["assets/index.html-bbcd6142.js","assets/framework-e5d7a6b2.js"])),"v-331fe9d7":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e525ec38.js"),["assets/index.html-e525ec38.js","assets/framework-e5d7a6b2.js"])),"v-6905c52d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-decfb181.js"),["assets/index.html-decfb181.js","assets/framework-e5d7a6b2.js"])),"v-24d008e3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f2b87de8.js"),["assets/index.html-f2b87de8.js","assets/framework-e5d7a6b2.js"])),"v-31a38f34":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c409afcd.js"),["assets/index.html-c409afcd.js","assets/framework-e5d7a6b2.js"])),"v-58bb7b92":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e642a6e3.js"),["assets/index.html-e642a6e3.js","assets/framework-e5d7a6b2.js"])),"v-012340a5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-505231e3.js"),["assets/index.html-505231e3.js","assets/framework-e5d7a6b2.js"])),"v-78e0ca6a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-11457fd3.js"),["assets/index.html-11457fd3.js","assets/framework-e5d7a6b2.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const b=inject(pageFrontmatterSymbol);if(!b)throw new Error("usePageFrontmatter() is called without provider.");return b},pageHeadSymbol=Symbol(""),usePageHead=()=>{const b=inject(pageHeadSymbol);if(!b)throw new Error("usePageHead() is called without provider.");return b},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const b=inject(pageHeadTitleSymbol);if(!b)throw new Error("usePageHeadTitle() is called without provider.");return b},pageLangSymbol=Symbol(""),usePageLang=()=>{const b=inject(pageLangSymbol);if(!b)throw new Error("usePageLang() is called without provider.");return b},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const b=inject(pageLayoutSymbol);if(!b)throw new Error("usePageLayout() is called without provider.");return b},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const b=inject(routeLocaleSymbol);if(!b)throw new Error("useRouteLocale() is called without provider.");return b},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const b=inject(siteLocaleDataSymbol);if(!b)throw new Error("useSiteLocaleData() is called without provider.");return b},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:b=>b.reduce(($,j)=>({...$,...j.layouts}),{}),resolvePageData:async b=>{const $=pagesData.value[b];return await($==null?void 0:$())??pageDataEmpty},resolvePageFrontmatter:b=>b.frontmatter,resolvePageHead:(b,$,j)=>{const Z=isString$1($.description)?$.description:j.description,U=[...isArray($.head)?$.head:[],...j.head,["title",{},b],["meta",{name:"description",content:Z}]];return dedupeHead(U)},resolvePageHeadTitle:(b,$)=>`${b.title?`${b.title}`:""}${$.title?` | ${$.title}`:""}`,resolvePageLang:b=>b.lang||"en",resolvePageLayout:(b,$)=>{let j;if(b.path){const Z=b.frontmatter.layout;isString$1(Z)?j=Z:j=LAYOUT_NAME_DEFAULT}else j=LAYOUT_NAME_NOT_FOUND;return $[j]},resolveRouteLocale:(b,$)=>resolveLocalePath(b,$),resolveSiteLocaleData:(b,$)=>({...b,...b.locales[$]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(b,$){const j=ref(!1);return onMounted(()=>{j.value=!0}),()=>{var Z,U;return j.value?(U=(Z=$.slots).default)==null?void 0:U.call(Z):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(b){const $=usePageData(),j=computed(()=>pagesComponents[b.pageKey||$.value.key]);return()=>j.value?h$6(j.value):h$6("div","404 Not Found")}}),defineClientConfig=(b={})=>b,withBase=b=>isLinkHttp(b)?b:`/blog/${removeLeadingSlash(b)}`;const hopeInject="",clientConfig0={};var _a$1;const isClient=typeof window<"u",isFunction=b=>typeof b=="function",isString=b=>typeof b=="string",noop=()=>{};isClient&&((_a$1=window==null?void 0:window.navigator)!=null&&_a$1.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(b){return typeof b=="function"?b():unref(b)}function createFilterWrapper(b,$){function j(...Z){b(()=>$.apply(this,Z),{fn:$,thisArg:this,args:Z})}return j}const bypassFilter=b=>b();function debounceFilter(b,$={}){let j,Z;return Y=>{const ee=resolveUnref(b),ae=resolveUnref($.maxWait);if(j&&clearTimeout(j),ee<=0||ae!==void 0&&ae<=0)return Z&&(clearTimeout(Z),Z=null),Y();ae&&!Z&&(Z=setTimeout(()=>{j&&clearTimeout(j),Z=null,Y()},ae)),j=setTimeout(()=>{Z&&clearTimeout(Z),Z=null,Y()},ee)}}function throttleFilter(b,$=!0,j=!0){let Z=0,U,Y=!0;const ee=()=>{U&&(clearTimeout(U),U=void 0)};return ne=>{const se=resolveUnref(b),ie=Date.now()-Z;if(ee(),se<=0)return Z=Date.now(),ne();ie>se&&(j||!Y)?(Z=Date.now(),ne()):$&&(U=setTimeout(()=>{Z=Date.now(),Y=!0,ee(),ne()},se-ie)),!j&&!U&&(U=setTimeout(()=>Y=!0,se)),Y=!1}}function pausableFilter(b=bypassFilter){const $=ref(!0);function j(){$.value=!1}function Z(){$.value=!0}return{isActive:$,pause:j,resume:Z,eventFilter:(...Y)=>{$.value&&b(...Y)}}}function identity(b){return b}function tryOnScopeDispose(b){return getCurrentScope()?(onScopeDispose(b),!0):!1}function useDebounceFn(b,$=200,j={}){return createFilterWrapper(debounceFilter($,j),b)}function useThrottleFn(b,$=200,j=!1,Z=!0){return createFilterWrapper(throttleFilter($,j,Z),b)}function resolveRef(b){return typeof b=="function"?computed(b):ref(b)}function tryOnMounted(b,$=!0){getCurrentInstance()?onMounted(b):$?b():nextTick(b)}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(b,$)=>{var j={};for(var Z in b)__hasOwnProp$6.call(b,Z)&&$.indexOf(Z)<0&&(j[Z]=b[Z]);if(b!=null&&__getOwnPropSymbols$6)for(var Z of __getOwnPropSymbols$6(b))$.indexOf(Z)<0&&__propIsEnum$6.call(b,Z)&&(j[Z]=b[Z]);return j};function watchWithFilter(b,$,j={}){const Z=j,{eventFilter:U=bypassFilter}=Z,Y=__objRest$5(Z,["eventFilter"]);return watch(b,createFilterWrapper(U,$),Y)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(b,$,j)=>$ in b?__defProp$2(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues$2=(b,$)=>{for(var j in $||($={}))__hasOwnProp$2.call($,j)&&__defNormalProp$2(b,j,$[j]);if(__getOwnPropSymbols$2)for(var j of __getOwnPropSymbols$2($))__propIsEnum$2.call($,j)&&__defNormalProp$2(b,j,$[j]);return b},__spreadProps$2=(b,$)=>__defProps$2(b,__getOwnPropDescs$2($)),__objRest$1=(b,$)=>{var j={};for(var Z in b)__hasOwnProp$2.call(b,Z)&&$.indexOf(Z)<0&&(j[Z]=b[Z]);if(b!=null&&__getOwnPropSymbols$2)for(var Z of __getOwnPropSymbols$2(b))$.indexOf(Z)<0&&__propIsEnum$2.call(b,Z)&&(j[Z]=b[Z]);return j};function watchPausable(b,$,j={}){const Z=j,{eventFilter:U}=Z,Y=__objRest$1(Z,["eventFilter"]),{eventFilter:ee,pause:ae,resume:ne,isActive:se}=pausableFilter(U);return{stop:watchWithFilter(b,$,__spreadProps$2(__spreadValues$2({},Y),{eventFilter:ee})),pause:ae,resume:ne,isActive:se}}function unrefElement(b){var $;const j=resolveUnref(b);return($=j==null?void 0:j.$el)!=null?$:j}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0;isClient&&window.navigator;isClient&&window.location;function useEventListener(...b){let $,j,Z,U;if(isString(b[0])||Array.isArray(b[0])?([j,Z,U]=b,$=defaultWindow):[$,j,Z,U]=b,!$)return noop;Array.isArray(j)||(j=[j]),Array.isArray(Z)||(Z=[Z]);const Y=[],ee=()=>{Y.forEach(ie=>ie()),Y.length=0},ae=(ie,oe,le)=>(ie.addEventListener(oe,le,U),()=>ie.removeEventListener(oe,le,U)),ne=watch(()=>unrefElement($),ie=>{ee(),ie&&Y.push(...j.flatMap(oe=>Z.map(le=>ae(ie,oe,le))))},{immediate:!0,flush:"post"}),se=()=>{ne(),ee()};return tryOnScopeDispose(se),se}function onClickOutside(b,$,j={}){const{window:Z=defaultWindow,ignore:U=[],capture:Y=!0,detectIframe:ee=!1}=j;if(!Z)return;let ae=!0,ne;const se=re=>U.some(ce=>{if(typeof ce=="string")return Array.from(Z.document.querySelectorAll(ce)).some(pe=>pe===re.target||re.composedPath().includes(pe));{const pe=unrefElement(ce);return pe&&(re.target===pe||re.composedPath().includes(pe))}}),ie=re=>{Z.clearTimeout(ne);const ce=unrefElement(b);if(!(!ce||ce===re.target||re.composedPath().includes(ce))){if(re.detail===0&&(ae=!se(re)),!ae){ae=!0;return}$(re)}},oe=[useEventListener(Z,"click",ie,{passive:!0,capture:Y}),useEventListener(Z,"pointerdown",re=>{const ce=unrefElement(b);ce&&(ae=!re.composedPath().includes(ce)&&!se(re))},{passive:!0}),useEventListener(Z,"pointerup",re=>{if(re.button===0){const ce=re.composedPath();re.composedPath=()=>ce,ne=Z.setTimeout(()=>ie(re),50)}},{passive:!0}),ee&&useEventListener(Z,"blur",re=>{var ce;const pe=unrefElement(b);((ce=Z.document.activeElement)==null?void 0:ce.tagName)==="IFRAME"&&!(pe!=null&&pe.contains(Z.document.activeElement))&&$(re)})].filter(Boolean);return()=>oe.forEach(re=>re())}function useSupported(b,$=!1){const j=ref(),Z=()=>j.value=Boolean(b());return Z(),tryOnMounted(Z,$),j}function useMediaQuery(b,$={}){const{window:j=defaultWindow}=$,Z=useSupported(()=>j&&"matchMedia"in j&&typeof j.matchMedia=="function");let U;const Y=ref(!1),ee=()=>{U&&("removeEventListener"in U?U.removeEventListener("change",ae):U.removeListener(ae))},ae=()=>{Z.value&&(ee(),U=j.matchMedia(resolveRef(b).value),Y.value=U.matches,"addEventListener"in U?U.addEventListener("change",ae):U.addListener(ae))};return watchEffect(ae),tryOnScopeDispose(()=>ee()),Y}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(b,$){return handlers[b]||$}function guessSerializerType(b){return b==null?"any":b instanceof Set?"set":b instanceof Map?"map":b instanceof Date?"date":typeof b=="boolean"?"boolean":typeof b=="string"?"string":typeof b=="object"?"object":Number.isNaN(b)?"any":"number"}var __defProp$j=Object.defineProperty,__getOwnPropSymbols$l=Object.getOwnPropertySymbols,__hasOwnProp$l=Object.prototype.hasOwnProperty,__propIsEnum$l=Object.prototype.propertyIsEnumerable,__defNormalProp$j=(b,$,j)=>$ in b?__defProp$j(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues$j=(b,$)=>{for(var j in $||($={}))__hasOwnProp$l.call($,j)&&__defNormalProp$j(b,j,$[j]);if(__getOwnPropSymbols$l)for(var j of __getOwnPropSymbols$l($))__propIsEnum$l.call($,j)&&__defNormalProp$j(b,j,$[j]);return b};const StorageSerializers={boolean:{read:b=>b==="true",write:b=>String(b)},object:{read:b=>JSON.parse(b),write:b=>JSON.stringify(b)},number:{read:b=>Number.parseFloat(b),write:b=>String(b)},any:{read:b=>b,write:b=>String(b)},string:{read:b=>b,write:b=>String(b)},map:{read:b=>new Map(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b.entries()))},set:{read:b=>new Set(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b))},date:{read:b=>new Date(b),write:b=>b.toISOString()}};function useStorage(b,$,j,Z={}){var U;const{flush:Y="pre",deep:ee=!0,listenToStorageChanges:ae=!0,writeDefaults:ne=!0,mergeDefaults:se=!1,shallow:ie,window:oe=defaultWindow,eventFilter:le,onError:re=me=>{console.error(me)}}=Z,ce=(ie?shallowRef:ref)($);if(!j)try{j=getSSRHandler("getDefaultStorage",()=>{var me;return(me=defaultWindow)==null?void 0:me.localStorage})()}catch(me){re(me)}if(!j)return ce;const pe=resolveUnref($),ue=guessSerializerType(pe),ve=(U=Z.serializer)!=null?U:StorageSerializers[ue],{pause:de,resume:_e}=watchPausable(ce,()=>be(ce.value),{flush:Y,deep:ee,eventFilter:le});return oe&&ae&&useEventListener(oe,"storage",fe),fe(),ce;function be(me){try{if(me==null)j.removeItem(b);else{const ke=ve.write(me),Pe=j.getItem(b);Pe!==ke&&(j.setItem(b,ke),oe&&(oe==null||oe.dispatchEvent(new StorageEvent("storage",{key:b,oldValue:Pe,newValue:ke,storageArea:j}))))}}catch(ke){re(ke)}}function ge(me){const ke=me?me.newValue:j.getItem(b);if(ke==null)return ne&&pe!==null&&j.setItem(b,ve.write(pe)),pe;if(!me&&se){const Pe=ve.read(ke);return isFunction(se)?se(Pe,pe):ue==="object"&&!Array.isArray(Pe)?__spreadValues$j(__spreadValues$j({},pe),Pe):Pe}else return typeof ke!="string"?ke:ve.read(ke)}function fe(me){if(!(me&&me.storageArea!==j)){if(me&&me.key==null){ce.value=pe;return}if(!(me&&me.key!==b)){de();try{ce.value=ge(me)}catch(ke){re(ke)}finally{me?nextTick(_e):_e()}}}}}function usePreferredDark(b){return useMediaQuery("(prefers-color-scheme: dark)",b)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(b,$={}){const{document:j=defaultDocument,autoExit:Z=!1}=$,U=b||(j==null?void 0:j.querySelector("html")),Y=ref(!1);let ee=functionsMap[0];const ae=useSupported(()=>{if(j){for(const pe of functionsMap)if(pe[1]in j)return ee=pe,!0}else return!1;return!1}),[ne,se,ie,,oe]=ee;async function le(){ae.value&&(j!=null&&j[ie]&&await j[se](),Y.value=!1)}async function re(){if(!ae.value)return;await le();const pe=unrefElement(U);pe&&(await pe[ne](),Y.value=!0)}async function ce(){Y.value?await le():await re()}return j&&useEventListener(j,oe,()=>{Y.value=!!(j!=null&&j[ie])},!1),Z&&tryOnScopeDispose(le),{isSupported:ae,isFullscreen:Y,enter:re,exit:le,toggle:ce}}var SwipeDirection;(function(b){b.UP="UP",b.RIGHT="RIGHT",b.DOWN="DOWN",b.LEFT="LEFT",b.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));function useSessionStorage(b,$,j={}){const{window:Z=defaultWindow}=j;return useStorage(b,$,Z==null?void 0:Z.sessionStorage,j)}let _id=0;function useStyleTag(b,$={}){const j=ref(!1),{document:Z=defaultDocument,immediate:U=!0,manual:Y=!1,id:ee=`vueuse_styletag_${++_id}`}=$,ae=ref(b);let ne=()=>{};const se=()=>{if(!Z)return;const oe=Z.getElementById(ee)||Z.createElement("style");oe.isConnected||(oe.type="text/css",oe.id=ee,$.media&&(oe.media=$.media),Z.head.appendChild(oe)),!j.value&&(ne=watch(ae,le=>{oe.textContent=le},{immediate:!0}),j.value=!0)},ie=()=>{!Z||!j.value||(ne(),Z.head.removeChild(Z.getElementById(ee)),j.value=!1)};return U&&!Y&&tryOnMounted(se),Y||tryOnScopeDispose(ie),{id:ee,css:ae,unload:ie,load:se,isLoaded:readonly(j)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(b,$,j)=>$ in b?__defProp(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues=(b,$)=>{for(var j in $||($={}))__hasOwnProp.call($,j)&&__defNormalProp(b,j,$[j]);if(__getOwnPropSymbols)for(var j of __getOwnPropSymbols($))__propIsEnum.call($,j)&&__defNormalProp(b,j,$[j]);return b};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const badge="",t$2=({type:b="info",text:$="",vertical:j="top",color:Z},{slots:U})=>{var Y;return h$6("span",{class:["badge",b,{diy:Z}],style:{verticalAlign:j,...Z?{backgroundColor:Z}:{}}},$||((Y=U.default)==null?void 0:Y.call(U)))};t$2.displayName="Badge";const i$5=({icon:b="",color:$,size:j})=>b?h$6("span",{class:["icon",`iconfont icon-${b}`],...$||j?{style:{...$?{color:$}:{},...j?{"font-size":`${j}px`}:{}}}:{}}):null;i$5.displayName="FontIcon",i$5.props={icon:String,color:String,size:Number};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(b,$){for(var j=new u16(31),Z=0;Z<31;++Z)j[Z]=$+=1<<b[Z-1];for(var U=new u32(j[30]),Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)U[Y]=Y-j[Z]<<5|Z;return[j,U]},_a=freb(fleb,2),fl=_a[0],revfl=_a[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$4=0;i$4<32768;++i$4){var x$1=(i$4&43690)>>>1|(i$4&21845)<<1;x$1=(x$1&52428)>>>2|(x$1&13107)<<2,x$1=(x$1&61680)>>>4|(x$1&3855)<<4,rev[i$4]=((x$1&65280)>>>8|(x$1&255)<<8)>>>1}var hMap=function(b,$,j){for(var Z=b.length,U=0,Y=new u16($);U<Z;++U)b[U]&&++Y[b[U]-1];var ee=new u16($);for(U=0;U<$;++U)ee[U]=ee[U-1]+Y[U-1]<<1;var ae;if(j){ae=new u16(1<<$);var ne=15-$;for(U=0;U<Z;++U)if(b[U])for(var se=U<<4|b[U],ie=$-b[U],oe=ee[b[U]-1]++<<ie,le=oe|(1<<ie)-1;oe<=le;++oe)ae[rev[oe]>>>ne]=se}else for(ae=new u16(Z),U=0;U<Z;++U)b[U]&&(ae[U]=rev[ee[b[U]-1]++]>>>15-b[U]);return ae},flt=new u8(288);for(var i$4=0;i$4<144;++i$4)flt[i$4]=8;for(var i$4=144;i$4<256;++i$4)flt[i$4]=9;for(var i$4=256;i$4<280;++i$4)flt[i$4]=7;for(var i$4=280;i$4<288;++i$4)flt[i$4]=8;var fdt=new u8(32);for(var i$4=0;i$4<32;++i$4)fdt[i$4]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(b){for(var $=b[0],j=1;j<b.length;++j)b[j]>$&&($=b[j]);return $},bits=function(b,$,j){var Z=$/8|0;return(b[Z]|b[Z+1]<<8)>>($&7)&j},bits16=function(b,$){var j=$/8|0;return(b[j]|b[j+1]<<8|b[j+2]<<16)>>($&7)},shft=function(b){return(b+7)/8|0},slc=function(b,$,j){($==null||$<0)&&($=0),(j==null||j>b.length)&&(j=b.length);var Z=new(b.BYTES_PER_ELEMENT==2?u16:b.BYTES_PER_ELEMENT==4?u32:u8)(j-$);return Z.set(b.subarray($,j)),Z},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(b,$,j){var Z=new Error($||ec[b]);if(Z.code=b,Error.captureStackTrace&&Error.captureStackTrace(Z,err),!j)throw Z;return Z},inflt=function(b,$,j){var Z=b.length;if(!Z||j&&j.f&&!j.l)return $||new u8(0);var U=!$||j,Y=!j||j.i;j||(j={}),$||($=new u8(Z*3));var ee=function($e){var ze=$.length;if($e>ze){var Fe=new u8(Math.max(ze*2,$e));Fe.set($),$=Fe}},ae=j.f||0,ne=j.p||0,se=j.b||0,ie=j.l,oe=j.d,le=j.m,re=j.n,ce=Z*8;do{if(!ie){ae=bits(b,ne,1);var pe=bits(b,ne+1,3);if(ne+=3,pe)if(pe==1)ie=flrm,oe=fdrm,le=9,re=5;else if(pe==2){var _e=bits(b,ne,31)+257,be=bits(b,ne+10,15)+4,ge=_e+bits(b,ne+5,31)+1;ne+=14;for(var fe=new u8(ge),me=new u8(19),ke=0;ke<be;++ke)me[clim[ke]]=bits(b,ne+ke*3,7);ne+=be*3;for(var Pe=max(me),Le=(1<<Pe)-1,Ce=hMap(me,Pe,1),ke=0;ke<ge;){var Ne=Ce[bits(b,ne,Le)];ne+=Ne&15;var ue=Ne>>>4;if(ue<16)fe[ke++]=ue;else{var Be=0,he=0;for(ue==16?(he=3+bits(b,ne,3),ne+=2,Be=fe[ke-1]):ue==17?(he=3+bits(b,ne,7),ne+=3):ue==18&&(he=11+bits(b,ne,127),ne+=7);he--;)fe[ke++]=Be}}var Ee=fe.subarray(0,_e),ye=fe.subarray(_e);le=max(Ee),re=max(ye),ie=hMap(Ee,le,1),oe=hMap(ye,re,1)}else err(1);else{var ue=shft(ne)+4,ve=b[ue-4]|b[ue-3]<<8,de=ue+ve;if(de>Z){Y&&err(0);break}U&&ee(se+ve),$.set(b.subarray(ue,de),se),j.b=se+=ve,j.p=ne=de*8,j.f=ae;continue}if(ne>ce){Y&&err(0);break}}U&&ee(se+131072);for(var Ae=(1<<le)-1,De=(1<<re)-1,Te=ne;;Te=ne){var Be=ie[bits16(b,ne)&Ae],Ie=Be>>>4;if(ne+=Be&15,ne>ce){Y&&err(0);break}if(Be||err(2),Ie<256)$[se++]=Ie;else if(Ie==256){Te=ne,ie=null;break}else{var Re=Ie-254;if(Ie>264){var ke=Ie-257,we=fleb[ke];Re=bits(b,ne,(1<<we)-1)+fl[ke],ne+=we}var Oe=oe[bits16(b,ne)&De],Se=Oe>>>4;Oe||err(3),ne+=Oe&15;var ye=fd[Se];if(Se>3){var we=fdeb[Se];ye+=bits16(b,ne)&(1<<we)-1,ne+=we}if(ne>ce){Y&&err(0);break}U&&ee(se+131072);for(var xe=se+Re;se<xe;se+=4)$[se]=$[se-ye],$[se+1]=$[se+1-ye],$[se+2]=$[se+2-ye],$[se+3]=$[se+3-ye];se=xe}}j.l=ie,j.p=Te,j.b=se,j.f=ae,ie&&(ae=1,j.m=le,j.d=oe,j.n=re)}while(!ae);return se==$.length?$:slc($,0,se)},et=new u8(0),zlv=function(b){((b[0]&15)!=8||b[0]>>>4>7||(b[0]<<8|b[1])%31)&&err(6,"invalid zlib data"),b[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(b,$){return inflt((zlv(b),b.subarray(2,-4)),$)}var te=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch{}var dutf8=function(b){for(var $="",j=0;;){var Z=b[j++],U=(Z>127)+(Z>223)+(Z>239);if(j+U>b.length)return[$,slc(b,j-1)];U?U==3?(Z=((Z&15)<<18|(b[j++]&63)<<12|(b[j++]&63)<<6|b[j++]&63)-65536,$+=String.fromCharCode(55296|Z>>10,56320|Z&1023)):U&1?$+=String.fromCharCode((Z&31)<<6|b[j++]&63):$+=String.fromCharCode((Z&15)<<12|(b[j++]&63)<<6|b[j++]&63):$+=String.fromCharCode(Z)}};function strToU8(b,$){if($){for(var j=new u8(b.length),Z=0;Z<b.length;++Z)j[Z]=b.charCodeAt(Z);return j}if(te)return te.encode(b);for(var U=b.length,Y=new u8(b.length+(b.length>>1)),ee=0,ae=function(ie){Y[ee++]=ie},Z=0;Z<U;++Z){if(ee+5>Y.length){var ne=new u8(ee+8+(U-Z<<1));ne.set(Y),Y=ne}var se=b.charCodeAt(Z);se<128||$?ae(se):se<2048?(ae(192|se>>6),ae(128|se&63)):se>55295&&se<57344?(se=65536+(se&1023<<10)|b.charCodeAt(++Z)&1023,ae(240|se>>18),ae(128|se>>12&63),ae(128|se>>6&63),ae(128|se&63)):(ae(224|se>>12),ae(128|se>>6&63),ae(128|se&63))}return slc(Y,0,ee)}function strFromU8(b,$){if($){for(var j="",Z=0;Z<b.length;Z+=16384)j+=String.fromCharCode.apply(null,b.subarray(Z,Z+16384));return j}else{if(td)return td.decode(b);var U=dutf8(b),Y=U[0],ee=U[1];return ee.length&&err(8),Y}}const st=({name:b="",color:$="currentColor"},{slots:j})=>{var Z;return h$6("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${b}-icon`],viewBox:"0 0 1024 1024",fill:$,"aria-label":`${b} icon`},(Z=j.default)==null?void 0:Z.call(j))};st.displayName="IconBase";const wt=(b,{slots:$})=>{var j;return((j=$.default)==null?void 0:j.call($))||null},St=b=>{const $=getCurrentInstance();return typeof($==null?void 0:$.appContext.components)=="object"&&(b in $.appContext.components||camelize(b)in $.appContext.components||capitalize(camelize(b))in $.appContext.components)},Mt=b=>{const $=useRouteLocale();return computed(()=>b[$.value])},Ut=(b,$)=>{let j=1;for(let Z=0;Z<b.length;Z++)j+=b.charCodeAt(Z),j+=j<<10,j^=j>>6;return j+=j<<3,j^=j>>11,j%$};class kt{constructor(){this.messageElements={};const $="message-container",j=document.getElementById($);j?this.containerElement=j:(this.containerElement=document.createElement("div"),this.containerElement.id=$,document.body.appendChild(this.containerElement))}pop($,j=2e3){const Z=document.createElement("div"),U=Date.now();return Z.className="message move-in",Z.innerHTML=$,this.containerElement.appendChild(Z),this.messageElements[U]=Z,j>0&&setTimeout(()=>{this.close(U)},j),U}close($){if($){const j=this.messageElements[$];j.className=j.className.replace("move-in",""),j.className+="move-out",j.addEventListener("animationend",()=>{j.remove(),delete this.messageElements[$]})}else Object.keys(this.messageElements).forEach(j=>this.close(Number(j)))}destroy(){document.body.removeChild(this.containerElement)}}const ot=/#.*$/u,at=b=>{const $=ot.exec(b);return $?$[0]:""},G=b=>decodeURI(b).replace(ot,"").replace(/(index)?\.(md|html)$/,""),Ht=(b,$)=>{if($===void 0)return!1;const j=G(b.path),Z=G($),U=at($);return U?U===b.hash&&(!Z||j===Z):j===Z},Lt=b=>{const $=atob(b);return strFromU8(unzlibSync(strToU8($,!0)))},ut=(b,...$)=>{const j=b.resolve(...$),Z=j.matched[j.matched.length-1];if(!(Z!=null&&Z.redirect))return j;const{redirect:U}=Z,Y=isFunction$1(U)?U(j):U,ee=isString$1(Y)?{path:Y}:Y;return ut(b,{hash:j.hash,query:j.query,params:j.params,...ee})};var J$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct={exports:{}};(function(b,$){(function(j,Z){b.exports=Z()})(J$1,function(){var j=1e3,Z=6e4,U=36e5,Y="millisecond",ee="second",ae="minute",ne="hour",se="day",ie="week",oe="month",le="quarter",re="year",ce="date",pe="Invalid Date",ue=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ve=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,de={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Be){var he=["th","st","nd","rd"],Ee=Be%100;return"["+Be+(he[(Ee-20)%10]||he[Ee]||he[0])+"]"}},_e=function(Be,he,Ee){var ye=String(Be);return!ye||ye.length>=he?Be:""+Array(he+1-ye.length).join(Ee)+Be},be={s:_e,z:function(Be){var he=-Be.utcOffset(),Ee=Math.abs(he),ye=Math.floor(Ee/60),Ae=Ee%60;return(he<=0?"+":"-")+_e(ye,2,"0")+":"+_e(Ae,2,"0")},m:function Be(he,Ee){if(he.date()<Ee.date())return-Be(Ee,he);var ye=12*(Ee.year()-he.year())+(Ee.month()-he.month()),Ae=he.clone().add(ye,oe),De=Ee-Ae<0,Te=he.clone().add(ye+(De?-1:1),oe);return+(-(ye+(Ee-Ae)/(De?Ae-Te:Te-Ae))||0)},a:function(Be){return Be<0?Math.ceil(Be)||0:Math.floor(Be)},p:function(Be){return{M:oe,y:re,w:ie,d:se,D:ce,h:ne,m:ae,s:ee,ms:Y,Q:le}[Be]||String(Be||"").toLowerCase().replace(/s$/,"")},u:function(Be){return Be===void 0}},ge="en",fe={};fe[ge]=de;var me=function(Be){return Be instanceof Ce},ke=function Be(he,Ee,ye){var Ae;if(!he)return ge;if(typeof he=="string"){var De=he.toLowerCase();fe[De]&&(Ae=De),Ee&&(fe[De]=Ee,Ae=De);var Te=he.split("-");if(!Ae&&Te.length>1)return Be(Te[0])}else{var Ie=he.name;fe[Ie]=he,Ae=Ie}return!ye&&Ae&&(ge=Ae),Ae||!ye&&ge},Pe=function(Be,he){if(me(Be))return Be.clone();var Ee=typeof he=="object"?he:{};return Ee.date=Be,Ee.args=arguments,new Ce(Ee)},Le=be;Le.l=ke,Le.i=me,Le.w=function(Be,he){return Pe(Be,{locale:he.$L,utc:he.$u,x:he.$x,$offset:he.$offset})};var Ce=function(){function Be(Ee){this.$L=ke(Ee.locale,null,!0),this.parse(Ee)}var he=Be.prototype;return he.parse=function(Ee){this.$d=function(ye){var Ae=ye.date,De=ye.utc;if(Ae===null)return new Date(NaN);if(Le.u(Ae))return new Date;if(Ae instanceof Date)return new Date(Ae);if(typeof Ae=="string"&&!/Z$/i.test(Ae)){var Te=Ae.match(ue);if(Te){var Ie=Te[2]-1||0,Re=(Te[7]||"0").substring(0,3);return De?new Date(Date.UTC(Te[1],Ie,Te[3]||1,Te[4]||0,Te[5]||0,Te[6]||0,Re)):new Date(Te[1],Ie,Te[3]||1,Te[4]||0,Te[5]||0,Te[6]||0,Re)}}return new Date(Ae)}(Ee),this.$x=Ee.x||{},this.init()},he.init=function(){var Ee=this.$d;this.$y=Ee.getFullYear(),this.$M=Ee.getMonth(),this.$D=Ee.getDate(),this.$W=Ee.getDay(),this.$H=Ee.getHours(),this.$m=Ee.getMinutes(),this.$s=Ee.getSeconds(),this.$ms=Ee.getMilliseconds()},he.$utils=function(){return Le},he.isValid=function(){return this.$d.toString()!==pe},he.isSame=function(Ee,ye){var Ae=Pe(Ee);return this.startOf(ye)<=Ae&&Ae<=this.endOf(ye)},he.isAfter=function(Ee,ye){return Pe(Ee)<this.startOf(ye)},he.isBefore=function(Ee,ye){return this.endOf(ye)<Pe(Ee)},he.$g=function(Ee,ye,Ae){return Le.u(Ee)?this[ye]:this.set(Ae,Ee)},he.unix=function(){return Math.floor(this.valueOf()/1e3)},he.valueOf=function(){return this.$d.getTime()},he.startOf=function(Ee,ye){var Ae=this,De=!!Le.u(ye)||ye,Te=Le.p(Ee),Ie=function(Fe,Ve){var Me=Le.w(Ae.$u?Date.UTC(Ae.$y,Ve,Fe):new Date(Ae.$y,Ve,Fe),Ae);return De?Me:Me.endOf(se)},Re=function(Fe,Ve){return Le.w(Ae.toDate()[Fe].apply(Ae.toDate("s"),(De?[0,0,0,0]:[23,59,59,999]).slice(Ve)),Ae)},we=this.$W,Oe=this.$M,Se=this.$D,xe="set"+(this.$u?"UTC":"");switch(Te){case re:return De?Ie(1,0):Ie(31,11);case oe:return De?Ie(1,Oe):Ie(0,Oe+1);case ie:var $e=this.$locale().weekStart||0,ze=(we<$e?we+7:we)-$e;return Ie(De?Se-ze:Se+(6-ze),Oe);case se:case ce:return Re(xe+"Hours",0);case ne:return Re(xe+"Minutes",1);case ae:return Re(xe+"Seconds",2);case ee:return Re(xe+"Milliseconds",3);default:return this.clone()}},he.endOf=function(Ee){return this.startOf(Ee,!1)},he.$set=function(Ee,ye){var Ae,De=Le.p(Ee),Te="set"+(this.$u?"UTC":""),Ie=(Ae={},Ae[se]=Te+"Date",Ae[ce]=Te+"Date",Ae[oe]=Te+"Month",Ae[re]=Te+"FullYear",Ae[ne]=Te+"Hours",Ae[ae]=Te+"Minutes",Ae[ee]=Te+"Seconds",Ae[Y]=Te+"Milliseconds",Ae)[De],Re=De===se?this.$D+(ye-this.$W):ye;if(De===oe||De===re){var we=this.clone().set(ce,1);we.$d[Ie](Re),we.init(),this.$d=we.set(ce,Math.min(this.$D,we.daysInMonth())).$d}else Ie&&this.$d[Ie](Re);return this.init(),this},he.set=function(Ee,ye){return this.clone().$set(Ee,ye)},he.get=function(Ee){return this[Le.p(Ee)]()},he.add=function(Ee,ye){var Ae,De=this;Ee=Number(Ee);var Te=Le.p(ye),Ie=function(Oe){var Se=Pe(De);return Le.w(Se.date(Se.date()+Math.round(Oe*Ee)),De)};if(Te===oe)return this.set(oe,this.$M+Ee);if(Te===re)return this.set(re,this.$y+Ee);if(Te===se)return Ie(1);if(Te===ie)return Ie(7);var Re=(Ae={},Ae[ae]=Z,Ae[ne]=U,Ae[ee]=j,Ae)[Te]||1,we=this.$d.getTime()+Ee*Re;return Le.w(we,this)},he.subtract=function(Ee,ye){return this.add(-1*Ee,ye)},he.format=function(Ee){var ye=this,Ae=this.$locale();if(!this.isValid())return Ae.invalidDate||pe;var De=Ee||"YYYY-MM-DDTHH:mm:ssZ",Te=Le.z(this),Ie=this.$H,Re=this.$m,we=this.$M,Oe=Ae.weekdays,Se=Ae.months,xe=function(Ve,Me,Ge,qe){return Ve&&(Ve[Me]||Ve(ye,De))||Ge[Me].slice(0,qe)},$e=function(Ve){return Le.s(Ie%12||12,Ve,"0")},ze=Ae.meridiem||function(Ve,Me,Ge){var qe=Ve<12?"AM":"PM";return Ge?qe.toLowerCase():qe},Fe={YY:String(this.$y).slice(-2),YYYY:this.$y,M:we+1,MM:Le.s(we+1,2,"0"),MMM:xe(Ae.monthsShort,we,Se,3),MMMM:xe(Se,we),D:this.$D,DD:Le.s(this.$D,2,"0"),d:String(this.$W),dd:xe(Ae.weekdaysMin,this.$W,Oe,2),ddd:xe(Ae.weekdaysShort,this.$W,Oe,3),dddd:Oe[this.$W],H:String(Ie),HH:Le.s(Ie,2,"0"),h:$e(1),hh:$e(2),a:ze(Ie,Re,!0),A:ze(Ie,Re,!1),m:String(Re),mm:Le.s(Re,2,"0"),s:String(this.$s),ss:Le.s(this.$s,2,"0"),SSS:Le.s(this.$ms,3,"0"),Z:Te};return De.replace(ve,function(Ve,Me){return Me||Fe[Ve]||Te.replace(":","")})},he.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},he.diff=function(Ee,ye,Ae){var De,Te=Le.p(ye),Ie=Pe(Ee),Re=(Ie.utcOffset()-this.utcOffset())*Z,we=this-Ie,Oe=Le.m(this,Ie);return Oe=(De={},De[re]=Oe/12,De[oe]=Oe,De[le]=Oe/3,De[ie]=(we-Re)/6048e5,De[se]=(we-Re)/864e5,De[ne]=we/U,De[ae]=we/Z,De[ee]=we/j,De)[Te]||we,Ae?Oe:Le.a(Oe)},he.daysInMonth=function(){return this.endOf(oe).$D},he.$locale=function(){return fe[this.$L]},he.locale=function(Ee,ye){if(!Ee)return this.$L;var Ae=this.clone(),De=ke(Ee,ye,!0);return De&&(Ae.$L=De),Ae},he.clone=function(){return Le.w(this.$d,this)},he.toDate=function(){return new Date(this.valueOf())},he.toJSON=function(){return this.isValid()?this.toISOString():null},he.toISOString=function(){return this.$d.toISOString()},he.toString=function(){return this.$d.toUTCString()},Be}(),Ne=Ce.prototype;return Pe.prototype=Ne,[["$ms",Y],["$s",ee],["$m",ae],["$H",ne],["$W",se],["$M",oe],["$y",re],["$D",ce]].forEach(function(Be){Ne[Be[1]]=function(he){return this.$g(he,Be[0],Be[1])}}),Pe.extend=function(Be,he){return Be.$i||(Be(he,Ce,Pe),Be.$i=!0),Pe},Pe.locale=ke,Pe.isDayjs=me,Pe.unix=function(Be){return Pe(1e3*Be)},Pe.en=fe[ge],Pe.Ls=fe,Pe.p={},Pe})})(ct);var F$2=ct.exports,ft={exports:{}};(function(b,$){(function(j,Z){b.exports=Z()})(J$1,function(){return function(j,Z,U){var Y=Z.prototype,ee=function(le){var re,ce=le.date,pe=le.utc,ue={};if(!((re=ce)instanceof Date||re instanceof Array||Y.$utils().u(re)||re.constructor.name!=="Object")){if(!Object.keys(ce).length)return new Date;var ve=pe?U.utc():U();Object.keys(ce).forEach(function(Pe){var Le,Ce;ue[Le=Pe,Ce=Y.$utils().p(Le),Ce==="date"?"day":Ce]=ce[Pe]});var de=ue.day||(ue.year||ue.month>=0?1:ve.date()),_e=ue.year||ve.year(),be=ue.month>=0?ue.month:ue.year||ue.day?0:ve.month(),ge=ue.hour||0,fe=ue.minute||0,me=ue.second||0,ke=ue.millisecond||0;return pe?new Date(Date.UTC(_e,be,de,ge,fe,me,ke)):new Date(_e,be,de,ge,fe,me,ke)}return ce},ae=Y.parse;Y.parse=function(le){le.date=ee.bind(this)(le),ae.bind(this)(le)};var ne=Y.set,se=Y.add,ie=Y.subtract,oe=function(le,re,ce,pe){pe===void 0&&(pe=1);var ue=Object.keys(re),ve=this;return ue.forEach(function(de){ve=le.bind(ve)(re[de]*pe,de)}),ve};Y.set=function(le,re){return re=re===void 0?le:re,le.constructor.name==="Object"?oe.bind(this)(function(ce,pe){return ne.bind(this)(pe,ce)},re,le):ne.bind(this)(le,re)},Y.add=function(le,re){return le.constructor.name==="Object"?oe.bind(this)(se,le,re):se.bind(this)(le,re)},Y.subtract=function(le,re){return le.constructor.name==="Object"?oe.bind(this)(se,le,re,-1):ie.bind(this)(le,re)}}})})(ft);var Nt=ft.exports,ht={exports:{}};(function(b,$){(function(j,Z){b.exports=Z()})(J$1,function(){var j={year:0,month:1,day:2,hour:3,minute:4,second:5},Z={};return function(U,Y,ee){var ae,ne=function(le,re,ce){ce===void 0&&(ce={});var pe=new Date(le),ue=function(ve,de){de===void 0&&(de={});var _e=de.timeZoneName||"short",be=ve+"|"+_e,ge=Z[be];return ge||(ge=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:ve,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:_e}),Z[be]=ge),ge}(re,ce);return ue.formatToParts(pe)},se=function(le,re){for(var ce=ne(le,re),pe=[],ue=0;ue<ce.length;ue+=1){var ve=ce[ue],de=ve.type,_e=ve.value,be=j[de];be>=0&&(pe[be]=parseInt(_e,10))}var ge=pe[3],fe=ge===24?0:ge,me=pe[0]+"-"+pe[1]+"-"+pe[2]+" "+fe+":"+pe[4]+":"+pe[5]+":000",ke=+le;return(ee.utc(me).valueOf()-(ke-=ke%1e3))/6e4},ie=Y.prototype;ie.tz=function(le,re){le===void 0&&(le=ae);var ce=this.utcOffset(),pe=this.toDate(),ue=pe.toLocaleString("en-US",{timeZone:le}),ve=Math.round((pe-new Date(ue))/1e3/60),de=ee(ue).$set("millisecond",this.$ms).utcOffset(15*-Math.round(pe.getTimezoneOffset()/15)-ve,!0);if(re){var _e=de.utcOffset();de=de.add(ce-_e,"minute")}return de.$x.$timezone=le,de},ie.offsetName=function(le){var re=this.$x.$timezone||ee.tz.guess(),ce=ne(this.valueOf(),re,{timeZoneName:le}).find(function(pe){return pe.type.toLowerCase()==="timezonename"});return ce&&ce.value};var oe=ie.startOf;ie.startOf=function(le,re){if(!this.$x||!this.$x.$timezone)return oe.call(this,le,re);var ce=ee(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return oe.call(ce,le,re).tz(this.$x.$timezone,!0)},ee.tz=function(le,re,ce){var pe=ce&&re,ue=ce||re||ae,ve=se(+ee(),ue);if(typeof le!="string")return ee(le).tz(ue);var de=function(fe,me,ke){var Pe=fe-60*me*1e3,Le=se(Pe,ke);if(me===Le)return[Pe,me];var Ce=se(Pe-=60*(Le-me)*1e3,ke);return Le===Ce?[Pe,Le]:[fe-60*Math.min(Le,Ce)*1e3,Math.max(Le,Ce)]}(ee.utc(le,pe).valueOf(),ve,ue),_e=de[0],be=de[1],ge=ee(_e).utcOffset(be);return ge.$x.$timezone=ue,ge},ee.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},ee.tz.setDefault=function(le){ae=le}}})})(ht);var Wt=ht.exports,lt={exports:{}};(function(b,$){(function(j,Z){b.exports=Z()})(J$1,function(){var j="minute",Z=/[+-]\d\d(?::?\d\d)?/g,U=/([+-]|\d\d)/g;return function(Y,ee,ae){var ne=ee.prototype;ae.utc=function(pe){var ue={date:pe,utc:!0,args:arguments};return new ee(ue)},ne.utc=function(pe){var ue=ae(this.toDate(),{locale:this.$L,utc:!0});return pe?ue.add(this.utcOffset(),j):ue},ne.local=function(){return ae(this.toDate(),{locale:this.$L,utc:!1})};var se=ne.parse;ne.parse=function(pe){pe.utc&&(this.$u=!0),this.$utils().u(pe.$offset)||(this.$offset=pe.$offset),se.call(this,pe)};var ie=ne.init;ne.init=function(){if(this.$u){var pe=this.$d;this.$y=pe.getUTCFullYear(),this.$M=pe.getUTCMonth(),this.$D=pe.getUTCDate(),this.$W=pe.getUTCDay(),this.$H=pe.getUTCHours(),this.$m=pe.getUTCMinutes(),this.$s=pe.getUTCSeconds(),this.$ms=pe.getUTCMilliseconds()}else ie.call(this)};var oe=ne.utcOffset;ne.utcOffset=function(pe,ue){var ve=this.$utils().u;if(ve(pe))return this.$u?0:ve(this.$offset)?oe.call(this):this.$offset;if(typeof pe=="string"&&(pe=function(ge){ge===void 0&&(ge="");var fe=ge.match(Z);if(!fe)return null;var me=(""+fe[0]).match(U)||["-",0,0],ke=me[0],Pe=60*+me[1]+ +me[2];return Pe===0?0:ke==="+"?Pe:-Pe}(pe),pe===null))return this;var de=Math.abs(pe)<=16?60*pe:pe,_e=this;if(ue)return _e.$offset=de,_e.$u=pe===0,_e;if(pe!==0){var be=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_e=this.local().add(de+be,j)).$offset=de,_e.$x.$localOffset=be}else _e=this.utc();return _e};var le=ne.format;ne.format=function(pe){var ue=pe||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return le.call(this,ue)},ne.valueOf=function(){var pe=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*pe},ne.isUTC=function(){return!!this.$u},ne.toISOString=function(){return this.toDate().toISOString()},ne.toString=function(){return this.toDate().toUTCString()};var re=ne.toDate;ne.toDate=function(pe){return pe==="s"&&this.$offset?ae(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():re.call(this)};var ce=ne.diff;ne.diff=function(pe,ue,ve){if(pe&&this.$u===pe.$u)return ce.call(this,pe,ue,ve);var de=this.local(),_e=ae(pe).local();return ce.call(de,_e,ue,ve)}}})})(lt);var Zt=lt.exports;F$2.extend(Nt),F$2.extend(Zt),F$2.extend(Wt);const Q$1=(b,$)=>{if(b){if(F$2(b instanceof Date?b:b.trim()).isValid()){const Z=$?F$2(b).tz($):F$2(b),U=Z.year(),Y=Z.month()+1,ee=Z.date(),ae=Z.hour(),ne=Z.minute(),se=Z.second(),ie=Z.millisecond(),oe=ae===0&&ne===0&&se===0&&ie===0;return{value:Z.toDate(),info:{year:U,month:Y,day:ee,...oe?{}:{hour:ae,minute:ne,second:se}},type:oe?"date":"full"}}const j=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(b.trim());if(j){const[,Z,U,Y,ee,ae,ne]=j,se=ue=>typeof ue>"u"?void 0:Number(ue),ie=ue=>ue&&ue<100?ue+2e3:ue,oe=ue=>ee&&ae&&!ne?0:ue,le={year:ie(se(Z)),month:se(U),day:se(Y),hour:se(ee),minute:se(ae),second:oe(se(ne))},re=Z===void 0&&U===void 0&&Y===void 0,ce=ee===void 0&&ae===void 0&&ne===void 0,pe=F$2({...le,month:le.month-1}).toDate();return{value:re?void 0:pe,info:ce?{year:le.year,month:le.month,day:le.day}:re?{hour:le.hour,minute:le.minute,second:le.second}:le,type:re?"time":ce?"date":"full"}}}return null},K=(b,...$)=>{if($.length===0)return b;const j=$.shift()||{};return Object.keys(j).forEach(Z=>{typeof b[Z]=="object"&&!Array.isArray(b[Z])&&typeof j[Z]=="object"&&!Array.isArray(j[Z])?K(b[Z],j[Z]):typeof j[Z]=="object"?Array.isArray(j[Z])?b[Z]=[...j[Z]]:b[Z]={...j[Z]}:b[Z]=j[Z]}),K(b,...$)},Pt=(b,$=!1)=>b?Array.isArray(b)?b.map(j=>typeof j=="string"?{name:j}:j):typeof b=="string"?[{name:b}]:typeof b=="object"&&b.name?[b]:(console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${$?"":"| false"} | undefined\`, but got`,b),[]):[],X=(b,$)=>{if(b){if(Array.isArray(b))return b;if(typeof b=="string")return[b];console.error(`Expect ${$||"value"} to be \`string[] | string | undefined\`, but got`,b)}return[]},Rt=b=>X(b,"category"),Bt=b=>X(b,"tag"),backToTop="",a$2=()=>h$6(st,{name:"back-to-top"},()=>[h$6("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$6("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$2.displayName="BackToTopIcon";var h$5=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(b){const $=usePageFrontmatter(),j=Mt({"/zh/":{backToTop:"返回顶部"},"/":{backToTop:"Back to top"}}),Z=ref(0),U=computed(()=>$.value.backToTop!==!1&&Z.value>b.threshold),Y=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{Z.value=Y()}),useEventListener("scroll",useDebounceFn(()=>{Z.value=Y()},100)),()=>h$6(Transition,{name:"fade"},()=>U.value?h$6("button",{class:"back-to-top","aria-label":j.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),Z.value=0}},h$6(a$2)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:b})=>{b.component("Badge",t$2),b.component("FontIcon",i$5)},setup:()=>{useStyleTag('@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");',{id:"icon-assets"})},rootComponents:[()=>h$6(h$5,{threshold:300})]});function r$3(b,$,j){var Z,U,Y;$===void 0&&($=50),j===void 0&&(j={});var ee=(Z=j.isImmediate)!=null&&Z,ae=(U=j.callback)!=null&&U,ne=j.maxWait,se=Date.now(),ie=[];function oe(){if(ne!==void 0){var re=Date.now()-se;if(re+$>=ne)return ne-re}return $}var le=function(){var re=[].slice.call(arguments),ce=this;return new Promise(function(pe,ue){var ve=ee&&Y===void 0;if(Y!==void 0&&clearTimeout(Y),Y=setTimeout(function(){if(Y=void 0,se=Date.now(),!ee){var _e=b.apply(ce,re);ae&&ae(_e),ie.forEach(function(be){return(0,be.resolve)(_e)}),ie=[]}},oe()),ve){var de=b.apply(ce,re);return ae&&ae(de),pe(de)}ie.push({resolve:pe,reject:ue})})};return le.cancel=function(re){Y!==void 0&&clearTimeout(Y),ie.forEach(function(ce){return(0,ce.reject)(re)}),ie=[]},le}const useActiveHeaderLinks=({headerLinkSelector:b,headerAnchorSelector:$,delay:j,offset:Z=5})=>{const U=useRouter(),ee=r$3(()=>{var pe,ue;const ae=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(ae-0)<Z){updateHash(U,"");return}const se=window.innerHeight+ae,ie=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),oe=Math.abs(ie-se)<Z,le=Array.from(document.querySelectorAll(b)),ce=Array.from(document.querySelectorAll($)).filter(ve=>le.some(de=>de.hash===ve.hash));for(let ve=0;ve<ce.length;ve++){const de=ce[ve],_e=ce[ve+1],be=ae>=(((pe=de.parentElement)==null?void 0:pe.offsetTop)??0)-Z,ge=!_e||ae<(((ue=_e.parentElement)==null?void 0:ue.offsetTop)??0)-Z;if(!(be&&ge))continue;const me=decodeURIComponent(U.currentRoute.value.hash),ke=decodeURIComponent(de.hash);if(me===ke)return;if(oe){for(let Pe=ve+1;Pe<ce.length;Pe++)if(me===decodeURIComponent(ce[Pe].hash))return}updateHash(U,ke);return}},j);onMounted(()=>{window.addEventListener("scroll",ee)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",ee)})},updateHash=async(b,$)=>{const{scrollBehavior:j}=b.options;b.options.scrollBehavior=void 0,await b.replace({query:b.currentRoute.value.query,hash:$,force:!0}).finally(()=>b.options.scrollBehavior=j)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),vars$1="",externalLinkIcon="",svg=h$6("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$6("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$6("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(b){const $=useRouteLocale(),j=computed(()=>b.locales[$.value]??{openInNewWindow:"open in new window"});return()=>h$6("span",[svg,h$6("span",{class:"external-link-icon-sr-only"},j.value.openInNewWindow)])}}),locales={},clientConfig3=defineClientConfig({enhance({app:b}){b.component("ExternalLinkIcon",h$6(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:b=>{const $=nprogress$1.isStarted();b=clamp(b,nprogress$1.settings.minimum,1),nprogress$1.status=b===1?null:b;const j=nprogress$1.render(!$),Z=j.querySelector(nprogress$1.settings.barSelector),U=nprogress$1.settings.speed,Y=nprogress$1.settings.easing;return j.offsetWidth,queue(ee=>{css(Z,{transform:"translate3d("+toBarPerc(b)+"%,0,0)",transition:"all "+U+"ms "+Y}),b===1?(css(j,{transition:"none",opacity:"1"}),j.offsetWidth,setTimeout(function(){css(j,{transition:"all "+U+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),ee()},U)},U)):setTimeout(()=>ee(),U)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const b=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),b())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&b(),nprogress$1},done:b=>!b&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:b=>{let $=nprogress$1.status;return $?(typeof b!="number"&&(b=(1-$)*clamp(Math.random()*$,.1,.95)),$=clamp($+b,0,.994),nprogress$1.set($)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:b=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const $=document.createElement("div");$.id="nprogress",$.innerHTML=nprogress$1.settings.template;const j=$.querySelector(nprogress$1.settings.barSelector),Z=b?"-100":toBarPerc(nprogress$1.status||0),U=document.querySelector(nprogress$1.settings.parent);return css(j,{transition:"all 0 linear",transform:"translate3d("+Z+"%,0,0)"}),U!==document.body&&addClass(U,"nprogress-custom-parent"),U==null||U.appendChild($),$},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const b=document.getElementById("nprogress");b&&removeElement(b)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(b,$,j)=>b<$?$:b>j?j:b,toBarPerc=b=>(-1+b)*100,queue=function(){const b=[];function $(){const j=b.shift();j&&j($)}return function(j){b.push(j),b.length===1&&$()}}(),css=function(){const b=["Webkit","O","Moz","ms"],$={};function j(ee){return ee.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(ae,ne){return ne.toUpperCase()})}function Z(ee){const ae=document.body.style;if(ee in ae)return ee;let ne=b.length;const se=ee.charAt(0).toUpperCase()+ee.slice(1);let ie;for(;ne--;)if(ie=b[ne]+se,ie in ae)return ie;return ee}function U(ee){return ee=j(ee),$[ee]||($[ee]=Z(ee))}function Y(ee,ae,ne){ae=U(ae),ee.style[ae]=ne}return function(ee,ae){for(const ne in ae){const se=ae[ne];se!==void 0&&Object.prototype.hasOwnProperty.call(ae,ne)&&Y(ee,ne,se)}}}(),hasClass=(b,$)=>(typeof b=="string"?b:classList(b)).indexOf(" "+$+" ")>=0,addClass=(b,$)=>{const j=classList(b),Z=j+$;hasClass(j,$)||(b.className=Z.substring(1))},removeClass=(b,$)=>{const j=classList(b);if(!hasClass(b,$))return;const Z=j.replace(" "+$+" "," ");b.className=Z.substring(1,Z.length-1)},classList=b=>(" "+(b.className||"")+" ").replace(/\s+/gi," "),removeElement=b=>{b&&b.parentNode&&b.parentNode.removeChild(b)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const b=useRouter(),$=new Set;$.add(b.currentRoute.value.path),b.beforeEach(j=>{$.has(j.path)||nprogress$1.start()}),b.afterEach(j=>{$.add(j.path),nprogress$1.done()})})},clientConfig4=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse(`{"blog":{"medias":{"GitHub":"https://github.com/davidliuk","Gitee":"https://gitee.com/da-wei-liu","Linkedin":"https://www.linkedin.cn/incareer/in/ACoAAChiGB8BoHZIY3GXEyeAxfCUVmL5EpXQY6c","Email":"l729641074@163.com"}},"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$1e7gpcPYDPSbXYVOJyYHlORMnHtw7zaFo1TF9cAlJkxxJL6MpB74i"],"/zh/demo/encrypt.html":["$2a$10$PW8ZjgofkjlbRPOUFXuZXOfE8FBKHCiRLu8Jn0YC9pwAZfj.gt/Ya"]}},"pure":false,"darkmode":"switch","themeColor":false,"fullscreen":false,"locales":{"/zh/":{"blog":{"description":"一个名东大学子","intro":"/zh/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/zh/":["",{"text":"如何使用","icon":"creative","prefix":"guide/","link":"guide/","children":"structure"},{"text":"文章","icon":"note","prefix":"posts/","children":"structure"},"intro","slides"]},"sidebarIcon":true,"headerDepth":2,"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏","slides":"幻灯片","encrypt":"加密"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"David Liu","url":"https://github.com/davidliuk"},"logo":"/favicon.ico","repo":"davidliuk/blog","docsDir":"docs","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/zh/",{"text":"演示","icon":"discover","link":"/zh/demo/"},{"text":"博文","icon":"edit","prefix":"/zh/posts/","children":[{"text":"苹果","icon":"edit","prefix":"apple/","children":[{"text":"苹果1","icon":"edit","link":"1"},{"text":"苹果2","icon":"edit","link":"2"},"3","4"]},{"text":"香蕉","icon":"edit","prefix":"banana/","children":[{"text":"香蕉 1","icon":"edit","link":"1"},{"text":"香蕉 2","icon":"edit","link":"2"},"3","4"]},{"text":"樱桃","icon":"edit","link":"cherry"},{"text":"火龙果","icon":"edit","link":"dragonfruit"},"tomato","strawberry"]},{"text":"V2 文档","icon":"note","link":"https://vuepress-theme-hope.github.io/v2/zh/"}],"footer":" David's Blog","displayFooter":true},"/":{"blog":{"description":"A Junior Student of Northeastern University","intro":"/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/cs/algo/":["",{"text":"框架","icon":"note","prefix":"framework/","children":"structure"},{"text":"总结","icon":"note","prefix":"summary/","children":"structure"},{"text":"高频题","icon":"note","prefix":"faq/","children":"structure"}],"/cs/basic/":"structure","/cs/database/redis/":"structure","/cs/database/mysql/":["",{"text":"事务","icon":"note","prefix":"transaction/","children":"structure"},{"text":"索引","icon":"note","prefix":"index/","children":"structure"},{"text":"引擎","icon":"note","prefix":"engine/","children":"structure"},{"text":"锁","icon":"note","prefix":"lock/","children":"structure"},{"text":"日志","icon":"note","prefix":"log/","children":"structure"}],"/se/lang/java/":"structure","/se/framework/":"structure","/se/devops/":"structure","/se/design/":"structure","/se/tools/":"structure","/se/devops/unix/":["",{"text":"UNIX 基础","icon":"note","prefix":"basic/","children":"structure"},{"text":"Availability 可用性","icon":"note","prefix":"availability/","children":"structure"}],"/standardized/":["",{"text":"GRE","icon":"note","prefix":"GRE/","link":"GRE/","children":"structure"},{"text":"TOEFL","icon":"note","prefix":"TOEFL/","link":"TOEFL/","children":"structure"}]},"sidebarIcon":true,"headerDepth":2,"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page on GitHub"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","slides":"Slides","encrypt":"Encrypted"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"author":{"name":"David Liu","url":"https://github.com/davidliuk"},"logo":"/favicon.ico","repo":"davidliuk/blog","docsDir":"docs","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/",{"text":"Computer Science","icon":"edit","prefix":"/cs/","children":[{"text":"Basic","icon":"edit","prefix":"basic/","children":[{"text":"Network","icon":"edit","link":"network/"},{"text":"Operating System","icon":"edit","link":"os/"}]},{"text":"Database","icon":"edit","prefix":"database/","children":[{"text":"MySQK","icon":"edit","prefix":"mysql/","link":"mysql/","children":[{"text":"Transaction","icon":"edit","link":"transaction"},{"text":"Index","icon":"edit","link":"index"},{"text":"Lock","icon":"edit","link":"lock"},{"text":"Log","icon":"edit","link":"log"}]},{"text":"Redis","icon":"edit","prefix":"redis/","link":"redis/","children":[{"text":"Clients","icon":"edit","link":"clients"},{"text":"Commands","icon":"edit","link":"commands"},{"text":"Data structure","icon":"edit","link":"data-structure"}]}]},{"text":"Algorithm","icon":"edit","prefix":"algo/","children":[{"text":"Framework","icon":"edit","link":"framework/"},{"text":"Summary","icon":"edit","link":"summary/"},{"text":"FAQ","icon":"edit","link":"faq/"}]}]},{"text":"Software Engineer","icon":"edit","prefix":"/se/","children":[{"text":"Lang","icon":"note","prefix":"lang/","children":[{"text":"Java","icon":"edit","link":"java/"}]},{"text":"Framework","icon":"edit","prefix":"framework/","children":[{"text":"Spring","icon":"edit","link":"spring/"},{"text":"ORM","icon":"edit","link":"orm/"}]},{"text":"DevOps","icon":"note","prefix":"devops/","children":[{"text":"Unix","icon":"edit","link":"unix/"},"docker/","k8s/"]},{"text":"Design","icon":"note","prefix":"design/","children":[{"text":"Design Principal","icon":"edit","link":"principal/"},{"text":"Design Pattern","icon":"edit","link":"pattern/"},{"text":"OOD","icon":"edit","link":"ood/"},{"text":"System Design","icon":"edit","link":"system-design/"}]},"tools/"]},{"text":"Course","icon":"note","prefix":"/course/","children":[{"text":"Rec Sys","icon":"edit","link":"rec-sys/"},{"text":"Deep Learning","icon":"edit","link":"deep-learning/"},{"text":"Block Chain","icon":"edit","link":"block-chain/"},{"text":"XR Tech","icon":"edit","link":"xr-tech/"}]},{"text":"Standardized","icon":"edit","prefix":"/standardized/","children":[{"text":"GRE","icon":"edit","prefix":"GRE/","children":[{"text":"QUANTITATIVE","icon":"edit","link":"QUANTITATIVE"},{"text":"VERBAL","icon":"edit","link":"VERBAL"}]},{"text":"TOEFL","icon":"edit","prefix":"TOEFL/","children":[{"text":"LISTENING","icon":"edit","link":"LISTENING"},{"text":"READING","icon":"edit","link":"READING"},{"text":"SPEAKING","icon":"edit","link":"SPEAKING"},{"text":"WRITING","icon":"edit","link":"WRITING"}]}]}],"footer":"David's Blog","displayFooter":true}}}`),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const b=inject(themeLocaleDataSymbol);if(!b)throw new Error("useThemeLocaleData() is called without provider.");return b},resolveThemeLocaleData=(b,$)=>{var j;return{...b,...(j=b.locales)==null?void 0:j[$]}},clientConfig5=defineClientConfig({enhance({app:b}){const $=useThemeData$1(),j=b._context.provides[routeLocaleSymbol],Z=computed(()=>resolveThemeLocaleData($.value,j.value));b.provide(themeLocaleDataSymbol,Z),Object.defineProperties(b.config.globalProperties,{$theme:{get(){return $.value}},$themeLocale:{get(){return Z.value}}})}}),giscus="",e$2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"},k$4=Boolean(e$2.categoryId),i$3=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"];var P$4=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup(b){const $=usePageFrontmatter(),j=useRoute(),Z=ref(!1),U=computed(()=>{const ae=usePageLang().value;if(i$3.includes(ae))return ae;const ne=ae.split("-")[0];return i$3.includes(ne)?ne:"en"}),Y=computed(()=>{if(!k$4)return!1;const ae=e$2.comment!==!1,ne=$.value.comment;return Boolean(ne)||ae!==!1&&ne!==!1}),ee=computed(()=>({repo:e$2.repo,repoId:e$2.repoId,category:e$2.category,categoryId:e$2.categoryId,lang:U.value,theme:b.darkmode?e$2.darkTheme:e$2.lightTheme,mapping:e$2.mapping||"pathname",term:withBase(j.path),inputPosition:e$2.inputPosition||"top",reactionsEnabled:e$2.reactionsEnabled!==!1?"1":"0",strict:e$2.strict!==!1?"1":"0",loading:e$2.lazyLoading!==!1?"lazy":"eager",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-cb5b3b13.js"),[]),Z.value=!0}),()=>h$6("div",{class:["giscus-wrapper",{"input-top":e$2.inputPosition!=="bottom"}],style:{display:Y.value?"block":"none"}},Z.value?h$6("giscus-widget",ee.value):h$6("div",{style:"text-align:center"},"Loading..."))}});const l$3={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"}.comment!==!1;var s$2=defineClientConfig({enhance:({app:b})=>{const $=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup(j){const Z=usePageFrontmatter(),U=computed(()=>Z.value.comment||l$3&&Z.value.comment!==!1);return()=>h$6(P$4,{darkmode:j.darkmode,style:{display:U.value?"block":"none"}})}});b.component("CommentService",$)}});const message="",balloon="",button="",O$2=500,A$2=2e3,L$1={"/zh/":{copy:"复制代码",copied:"已复制",hint:"复制成功"},"/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"}},d$3='.theme-hope-content div[class*="language-"] pre',g$3=!1,S$5=async b=>{try{return navigator.clipboard.writeText(b)}catch{const $=document.createElement("textarea"),j=document.activeElement;$.value=b,$.setAttribute("readonly",""),$.style.contain="strict",$.style.position="absolute",$.style.left="-9999px",$.style.fontSize="12pt";const Z=document.getSelection(),U=Z?Z.rangeCount>0&&Z.getRangeAt(0):null;document.body.appendChild($),$.select(),$.selectionStart=0,$.selectionEnd=b.length,document.execCommand("copy"),document.body.removeChild($),U&&(Z.removeAllRanges(),Z.addRange(U)),j&&j.focus()}},_$3='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',y$2=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$3=new Map,w$2=()=>{const b=useRoute(),$=Mt(L$1);let j;const Z=ee=>{if(!ee.hasAttribute("copy-code-registered")){const ae=document.createElement("button");ae.classList.add("copy-code-button"),ae.innerHTML='<div class="copy-icon" />',ae.setAttribute("aria-label",$.value.copy),ae.setAttribute("data-copied",$.value.copied),ae.setAttribute("data-balloon-pos","left"),ee.parentElement&&ee.parentElement.insertBefore(ae,ee),ee.setAttribute("copy-code-registered","")}},U=()=>{setTimeout(()=>{document.querySelectorAll(d$3).forEach(Z)},O$2)},Y=(ee,ae,ne)=>{let{innerText:se=""}=ae;/language-(shellscript|shell|bash|sh|zsh)/.test(ee.classList.toString())&&(se=se.replace(/^ *(\$|>) /gm,"")),S$5(se).then(()=>{ne.classList.add("copied"),clearTimeout(p$3.get(ne));const ie=setTimeout(()=>{ne.classList.remove("copied"),ne.blur(),p$3.delete(ne)},2e3);p$3.set(ne,ie),j.pop(`${_$3}<span>${$.value.hint} 🎉</span>`,A$2)})};onMounted(()=>{j=new kt,(!y$2()||g$3)&&U(),window.addEventListener("click",ee=>{const ae=ee.target;if(ae.matches('div[class*="language-"] > button.copy')){const ne=ae.parentElement,se=ae.nextElementSibling;se&&Y(ne,se,ae)}else if(ae.matches('div[class*="language-"] div.copy-icon')){const ne=ae.parentElement,se=ne.parentElement,ie=ne.nextElementSibling;ie&&Y(se,ie,ne)}})}),watch(()=>b.path,()=>{(!y$2()||g$3)&&U()})};var P$3=defineClientConfig({setup:()=>{w$2()}});const chart="",LoadingIcon$1=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const $=ref(),j=ref(),Z=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-bcb4bc66.js"),[]),new Promise(U=>setTimeout(U,500))]).then(([{default:U}])=>{U.defaults.maintainAspectRatio=!1;const Y=parseChartConfig(Lt(b.config),b.type),ee=j.value.getContext("2d");new U(ee,Y),Z.value=!1})}),()=>[b.title?h$6("div",{class:"chart-title"},decodeURIComponent(b.title)):null,Z.value?h$6("div",{class:"chart-loading-wrapper"},h$6(LoadingIcon$1)):null,h$6("div",{ref:$,class:"chart-wrapper",id:b.id,style:{display:Z.value?"none":"block"}},h$6("canvas",{ref:j,height:400}))]}});const codeTabs="",o$2=useStorage("VUEPRESS_CODE_TAB_STORE",{});var h$4=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:$}){const j=ref((()=>{if(b.tabId){const ne=b.data.findIndex(({title:se,value:ie=se})=>o$2.value[b.tabId]===ie);if(ne!==-1)return ne}return b.active})()),Z=ref([]),U=()=>{if(b.tabId){const{title:ne,value:se=ne}=b.data[j.value];o$2.value[b.tabId]=se}},Y=(ne=j.value)=>{j.value=ne<Z.value.length-1?ne+1:0,Z.value[j.value].focus()},ee=(ne=j.value)=>{j.value=ne>0?ne-1:Z.value.length-1,Z.value[j.value].focus()},ae=(ne,se)=>{if(ne.key===" "||ne.key==="Enter"?(ne.preventDefault(),j.value=se):ne.key==="ArrowRight"?(ne.preventDefault(),Y()):ne.key==="ArrowLeft"&&(ne.preventDefault(),ee()),b.tabId){const{title:ie,value:oe=ie}=b.data[j.value];o$2.value[b.tabId]=oe}};return watch(()=>o$2.value[b.tabId],(ne,se)=>{if(b.tabId&&ne!==se){const ie=b.data.findIndex(({title:oe,value:le=oe})=>le===ne);ie!==-1&&(j.value=ie)}}),()=>h$6(ClientOnly,()=>b.data.length?h$6("div",{class:"code-tabs"},[h$6("div",{class:"code-tabs-nav",role:"tablist"},b.data.map(({title:ne},se)=>{const ie=se===j.value;return h$6("button",{ref:oe=>{oe&&(Z.value[se]=oe)},class:["code-tabs-nav-tab",{active:ie}],role:"tab","aria-controls":`codetab-${b.id}-${se}`,"aria-selected":ie,onClick:()=>{j.value=se,U()},onKeydown:oe=>ae(oe,se)},ne)})),b.data.map(({title:ne,value:se=ne},ie)=>{var oe;const le=ie===j.value;return h$6("div",{class:["code-tab",{active:le}],id:`codetab-${b.id}-${ie}`,role:"tabpanel","aria-expanded":le},(oe=$[`tab${ie}`])==null?void 0:oe.call($,{title:ne,value:se,isActive:le}))})]):null)}});const index$2="",codeDemo="",M$1=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),O$1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$1={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A$1=(b,$,j)=>{const Z=document.createElement(b);return $&&Object.keys($).forEach(U=>{if(U.indexOf("data"))Z[U]=$[U];else{const Y=U.replace("data","");Z.dataset[Y]=$[U]}}),j&&j.forEach(U=>{Z.appendChild(U)}),Z},w$1=b=>({...L,...b,jsLib:Array.from(new Set([...L.jsLib||[],...b.jsLib||[]])),cssLib:Array.from(new Set([...L.cssLib||[],...b.cssLib||[]]))}),v=(b,$)=>{if(b[$]!==void 0)return b[$];const j=new Promise(Z=>{var U;const Y=document.createElement("script");Y.src=$,(U=document.querySelector("body"))==null||U.appendChild(Y),Y.onload=()=>{Z()}});return b[$]=j,j},k$3=(b,$)=>{if($.css&&Array.from(b.childNodes).every(j=>j.nodeName!=="STYLE")){const j=A$1("style",{innerHTML:$.css});b.appendChild(j)}},D=(b,$,j)=>{const Z=j.getScript();if(Z&&Array.from($.childNodes).every(U=>U.nodeName!=="SCRIPT")){const U=document.createElement("script");U.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${b} .code-demo-container').shadowRoot;
${Z}}`)),$.appendChild(U)}},R=b=>{const $=Object.keys(b),j={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(Z=>{const U=$.filter(Y=>C$1[Z].types.includes(Y));if(U.length){const Y=U[0];j[Z]=[b[Y].replace(/^\n|\n$/g,""),C$1[Z].map[Y]||Y]}}),j.isLegal=(!j.html.length||j.html[1]==="none")&&(!j.js.length||j.js[1]==="none")&&(!j.css.length||j.css[1]==="none"),j},x=b=>b.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$2=b=>`<div id="app">
${x(b)}
</div>`,B$1=b=>`${b.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V=b=>b.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q=b=>`(function(exports){var module={};module.exports=exports;${b};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z=(b,$)=>{const j=w$1($),Z=b.js[0]||"";return{...j,html:x(b.html[0]||""),js:Z,css:b.css[0]||"",isLegal:b.isLegal,getScript:()=>{var U;return j.useBabel?((U=window.Babel.transform(Z,{presets:["es2015"]}))==null?void 0:U.code)||"":Z}}},P$2=(b,$)=>{const j=w$1($),Z=b.html[0]||"",U=/<template>([\s\S]+)<\/template>/u.exec(Z),Y=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(Z),ee=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(Z),ae=U?U[1].replace(/^\n|\n$/g,""):"",[ne="",se=""]=Y?[Y[4].replace(/^\n|\n$/g,""),Y[3]]:[],[ie="",oe=""]=ee?[ee[4].replace(/^\n|\n$/g,""),ee[3]]:[],le=se===""&&(oe===""||oe==="css");return{...j,html:_$2(ae),js:V(ne),css:ie,isLegal:le,jsLib:[j.vue,...j.jsLib],getScript:()=>{var re,ce;const pe=$.useBabel?((ce=(re=window.Babel)==null?void 0:re.transform(ne,{presets:["es2015"]}))==null?void 0:ce.code)||"":ne.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q(pe)};appOptions.template=\`${ae.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$1=(b,$)=>{const j=w$1($);return{...j,html:_$2(""),js:B$1(b.js[0]||""),css:b.css[0]||(b.js[0]?b.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:b.isLegal,jsLib:[j.react,j.reactDOM,...j.jsLib],jsx:!0,getScript:()=>{var Z,U;const Y=((U=(Z=window.Babel)==null?void 0:Z.transform(b.js[0]||"",{presets:["es2015","react"]}))==null?void 0:U.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q(Y)}))`}}},h$3={},I$1=b=>Promise.all([v(h$3,b.babel),v(h$3,b.react),v(h$3,b.reactDOM)]),J=b=>{const $=[v(h$3,b.vue)];return b.useBabel&&$.push(v(h$3,b.babel)),Promise.all($)},Q=b=>b.useBabel?v(h$3,b.babel):Promise.resolve();var F$1=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(b,{slots:$}){const j=ref(!1),Z=ref(),U=ref(),Y=ref("0"),ee=ref(!1),ae=computed(()=>JSON.parse(b.config?Lt(b.config):"{}")),ne=computed(()=>{const re=JSON.parse(Lt(b.code));return R(re)}),se=computed(()=>b.type==="react"?H$1(ne.value,ae.value):b.type==="vue"?P$2(ne.value,ae.value):z(ne.value,ae.value)),ie=computed(()=>se.value.isLegal),oe=(re=!1)=>{const ce=Z.value.attachShadow({mode:"open"}),pe=document.createElement("div");pe.classList.add("code-demo-app"),ce.appendChild(pe),ie.value?(re&&(pe.innerHTML=se.value.html),k$3(ce,se.value),D(b.id,ce,se.value),Y.value="0"):Y.value="auto",ee.value=!0},le=()=>{switch(b.type){case"react":return I$1(se.value).then(()=>oe());case"vue":return J(se.value).then(()=>oe());default:return Q(se.value).then(()=>oe(!0))}};return onMounted(()=>{setTimeout(()=>{le()},500)}),()=>{var re;return h$6("div",{class:"code-demo-wrapper",id:b.id},[ee.value?null:h$6("div",{class:"loading"},h$6(M$1)),h$6("div",{class:"code-demo-header"},[se.value.isLegal?h$6("button",{class:["toggle-button",j.value?"down":"right"],onClick:()=>{Y.value=j.value?"0":`${U.value.clientHeight+13.8}px`,j.value=!j.value}}):null,b.title?h$6("span",{class:"title"},decodeURIComponent(b.title)):null,se.value.isLegal&&se.value.jsfiddle!==!1?h$6("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$6("input",{type:"hidden",name:"html",value:se.value.html}),h$6("input",{type:"hidden",name:"js",value:se.value.js}),h$6("input",{type:"hidden",name:"css",value:se.value.css}),h$6("input",{type:"hidden",name:"wrap",value:"1"}),h$6("input",{type:"hidden",name:"panel_js",value:"3"}),h$6("input",{type:"hidden",name:"resources",value:[...se.value.cssLib,...se.value.jsLib].join(",")}),h$6("button",{type:"submit",class:"jsfiddle-button",innerHTML:N,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!se.value.isLegal||se.value.codepen!==!1?h$6("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$6("input",{type:"hidden",name:"data",value:JSON.stringify({html:se.value.html,js:se.value.js,css:se.value.css,js_external:se.value.jsLib.join(";"),css_external:se.value.cssLib.join(";"),layout:se.value.codepenLayout,html_pre_processor:ne.value?ne.value.html[1]:"none",js_pre_processor:ne.value?ne.value.js[1]:se.value.jsx?"babel":"none",css_pre_processor:ne.value?ne.value.css[1]:"none",editors:se.value.codepenEditors})}),h$6("button",{type:"submit",innerHTML:O$1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$6("div",{ref:Z,class:"code-demo-container",style:{display:ie.value&&ee.value?"block":"none"}}),h$6("div",{class:"code-demo-code-wrapper",style:{height:Y.value}},h$6("div",{ref:U,class:"code-demo-codes"},(re=$.default)==null?void 0:re.call($)))])}}});const echarts="",LoadingIcon=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const $=ref();let j;const Z=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-63dde3cb.js"),[]),new Promise(U=>setTimeout(U,500))]).then(([U])=>{const Y=parseEChartsConfig(Lt(b.config),b.type);j=U.init($.value),j.showLoading(),j.setOption(Y),j.hideLoading(),Z.value=!1}),useEventListener("resize",useDebounceFn(()=>j==null?void 0:j.resize(),100))}),onBeforeUnmount(()=>{j==null||j.dispose()}),()=>[b.title?h$6("div",{class:"echarts-title"},decodeURIComponent(b.title)):null,Z.value?h$6("div",{class:"echarts-loading-wrapper"},h$6(LoadingIcon)):null,h$6("div",{ref:$,class:"echarts-wrapper",id:b.id})]}});const figure="",flowchart="",y$1=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var a$1={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C={...a$1,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g$2={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p$2={ant:F,vue:g$2,pie:C},k$2=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(b){let $;const j=ref(),Z=ref(!0),U=ref(1),Y=computed(()=>p$2[b.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${b.preset}`),p$2.vue)),ee=ae=>ae<419?.8:ae>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart.parse-0007e96c.js").then(ae=>ae.f),[]),new Promise(ae=>setTimeout(ae,500))]).then(([{default:ae}])=>{$=ae(Lt(b.code)),U.value=ee(window.innerWidth),Z.value=!1,$.drawSVG(b.id,{...Y.value,scale:U.value}),useEventListener("resize",useDebounceFn(()=>{const ne=ee(window.innerWidth);U.value!==ne&&(U.value=ne,$.drawSVG(b.id,{...Y.value,scale:ne}))},100))})}),()=>[Z.value?h$6("div",{class:"flowchart-loading-wrapper"},h$6(y$1)):null,h$6("div",{ref:j,class:["flowchart-wrapper",b.preset],id:b.id,style:{display:Z.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),k$1=b=>({dark:b,background:b?"#1e1e1e":"#fff",primaryColor:b?"#389d70":"#4abf8a",primaryBorderColor:b?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:b?"#fff":"#000",secondaryTextColor:b?"#ddd":"#333",tertiaryColor:b?"#282828":"#efeef4",tertiaryBorderColor:b?"#bbb":"#242424",tertiaryTextColor:b?"#ddd":"#333",noteBkgColor:b?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:b?"#f6d365":"#333",lineColor:b?"#d3d3d3":"#333",textColor:b?"#fff":"#242424",mainBkg:b?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:b?"#389d70":"#4abf8a",nodeTextColor:b?"#fff":"#242424",signalTextColor:b?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:b?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(b){const $=ref(""),j=ref(),Z=ref(!1);let U=null;return onMounted(()=>{const Y=document.querySelector("html"),ee=Lt(b.code),ae=()=>Y.classList.contains("dark")||Y.getAttribute("data-theme")==="dark";Z.value=ae(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-bc08675d.js"),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-4f120df1.js"),["assets/mermaid-mindmap.esm.min-4f120df1.js","assets/framework-e5d7a6b2.js"]),new Promise(ne=>setTimeout(ne,500))]).then(async([{default:ne},{default:se}])=>{try{await ne.registerExternalDiagrams([se])}catch{}const ie=async()=>{const oe=document.createElement("div");oe.style.position="relative",oe.style.top="-9999px";const le=re=>{$.value=re,document.body.removeChild(oe)};ne.initialize({theme:"base",themeVariables:k$1(Z.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),$.value="",document.body.appendChild(oe),await nextTick(),await ne.renderAsync(b.id,ee,le,oe)};await ie(),U=new MutationObserver(()=>{Z.value=ae()}),U.observe(Y,{attributeFilter:["class","data-theme"],attributes:!0}),watch(Z,ie)})}),onBeforeUnmount(()=>{U==null||U.disconnect()}),()=>h$6("div",{ref:j,class:["mermaid-wrapper",{loading:!$.value}]},$.value?h$6("div",{class:"content",innerHTML:$.value}):h$6(M))}});const o$1=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t$1=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e$1=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$2=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i$2=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c$3=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a(),t$1(),o$1(),e$1(),i$2(),r$2(),c$3()],index$1="",leagueGothic="",sourceSansPro="",k=()=>h$6(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$6("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$6("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$6("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var S$4=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(b){const $=usePageFrontmatter(),j=ref(""),Z=ref(!1),U=ref(),Y=ref();let ee;return onMounted(()=>{if(Y.value){j.value=Lt(b.code),Y.value.setAttribute("id",b.id),Y.value.setAttribute("data-theme",b.theme);const ae=[new Promise(ne=>setTimeout(ne,500)),...useReveal()];Promise.all(ae).then(([,ne,...se])=>{ee=new ne.default(Y.value,{plugins:se.map(ie=>ie.default)}),ee.initialize({backgroundTransition:"slide",hash:$.value.layout==="Slide",mouseWheel:$.value.layout==="Slide",transition:"slide",slideNumber:!0,...$.value.reveal||{},embedded:$.value.layout!=="Slide"}).then(()=>{Z.value=!1,ee.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{ee==null||ee.destroy()}),()=>h$6("div",{ref:U,class:{"md-enhance-presentation":!0,loading:Z.value}},[Z.value?h$6(k):null,h$6("div",{ref:Y,class:["reveal","reveal-viewport"]},h$6("div",{class:"slides",style:{display:Z.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${j.value}<\/script></section>`}))])}});const playground="",n$1='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r$1=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(b){return()=>[h$6("div",{class:"playground-wrapper"},[h$6("div",{class:"title-wrapper"},[b.title?h$6("div",{class:"title"},decodeURIComponent(b.title)):null,h$6("div",{class:"actions"},[h$6("a",{class:"action",href:decodeURIComponent(b.link),target:"_blank",innerHTML:n$1})])]),h$6("div",{class:"preview-container"},h$6("iframe",{class:"iframe-preview",src:decodeURIComponent(b.link)}))])]}});const tabs="",d$2=useStorage("VUEPRESS_TAB_STORE",{});var S$3=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:$}){const j=ref((()=>{if(b.tabId){const ne=b.data.findIndex(({title:se,value:ie=se})=>d$2.value[b.tabId]===ie);if(ne!==-1)return ne}return b.active})()),Z=ref([]),U=()=>{if(b.tabId){const{title:ne,value:se=ne}=b.data[j.value];d$2.value[b.tabId]=se}},Y=(ne=j.value)=>{j.value=ne<Z.value.length-1?ne+1:0,Z.value[j.value].focus()},ee=(ne=j.value)=>{j.value=ne>0?ne-1:Z.value.length-1,Z.value[j.value].focus()},ae=(ne,se)=>{ne.key===" "||ne.key==="Enter"?(ne.preventDefault(),j.value=se):ne.key==="ArrowRight"?(ne.preventDefault(),Y()):ne.key==="ArrowLeft"&&(ne.preventDefault(),ee()),U()};return watch(()=>d$2.value[b.tabId],(ne,se)=>{if(b.tabId&&ne!==se){const ie=b.data.findIndex(({title:oe,value:le=oe})=>le===ne);ie!==-1&&(j.value=ie)}}),()=>h$6(ClientOnly,()=>h$6("div",{class:"tab-list"},[h$6("div",{class:"tab-list-nav",role:"tablist"},b.data.map(({title:ne},se)=>{const ie=se===j.value;return h$6("button",{ref:oe=>{oe&&(Z.value[se]=oe)},class:["tab-list-nav-item",{active:ie}],role:"tab","aria-controls":`tab-${b.id}-${se}`,"aria-selected":ie,onClick:()=>{j.value=se,U()},onKeydown:oe=>ae(oe,se)},ne)})),b.data.map(({title:ne,value:se=ne},ie)=>{var oe;const le=ie===j.value;return h$6("div",{class:["tab-item",{active:le}],id:`tab-${b.id}-${ie}`,role:"tabpanel","aria-expanded":le},(oe=$[`tab${ie}`])==null?void 0:oe.call($,{title:ne,value:se,isActive:le}))})]))}});const tasklist="",katex="",clientConfig8=defineClientConfig({enhance:({app:b})=>{b.component("ChartJS",ChartJS),b.component("CodeTabs",h$4),b.component("CodeDemo",F$1),b.component("ECharts",ECharts),b.component("FlowChart",k$2),b.component("Mermaid",w),b.component("Presentation",S$4),b.component("Playground",r$1),b.component("Tabs",S$3),b.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-eb49f51d.js"),["assets/VuePlayground-eb49f51d.js","assets/framework-e5d7a6b2.js"])))}}),photoswipe="",S$2=".theme-hope-content :not(a) > img",_$1={"/zh/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"},"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}},P$1=500,E$1={},c$2=b=>({src:b.src,width:b.naturalWidth,height:b.naturalHeight,alt:b.alt}),O=b=>{const $=typeof b=="string"?Array.from(document.querySelectorAll(b)):b.map(j=>Array.from(document.querySelectorAll(j))).flat();return Promise.all($.map(j=>new Promise((Z,U)=>{j.complete?Z(c$2(j)):(j.onload=()=>Z(c$2(j)),j.onerror=Y=>U(Y))}))).then(j=>({elements:$,infos:j}))},H=()=>{const{isSupported:b,toggle:$}=useFullscreen(),j=Mt(_$1),Z=useRoute(),U=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-a9093b7c.js"),[]),new Promise(Y=>setTimeout(Y,P$1)).then(()=>O(S$2))]).then(([Y,ee])=>{ee.elements.forEach((ae,ne)=>{ae.style.cursor="zoom-in",ae.addEventListener("click",()=>{const se=new Y.default({dataSource:ee.infos,...j.value,...E$1,index:ne});se.on("uiRegister",()=>{b&&se.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{$()}}),se.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(ie,oe)=>{ie.setAttribute("download",""),ie.setAttribute("target","_blank"),ie.setAttribute("rel","noopener"),oe.on("change",()=>{ie.href=oe.currSlide.data.src})}})}),se.init()})})})};watch(()=>Z.path,()=>U()),onMounted(()=>U())};var I=defineClientConfig({setup:()=>{H()}});function f$2(b){return{all:b=b||new Map,on:function($,j){var Z=b.get($);Z?Z.push(j):b.set($,[j])},off:function($,j){var Z=b.get($);Z&&(j?Z.splice(Z.indexOf(j)>>>0,1):b.set($,[]))},emit:function($,j){var Z=b.get($);Z&&Z.slice().map(function(U){U(j)}),(Z=b.get("*"))&&Z.slice().map(function(U){U($,j)})}}}const p$1=Symbol.for("PWAEvent"),h$2=async b=>{const{register:$}=await Promise.resolve().then(function(){return E});$(withBase("service-worker.js"),{ready(j){console.log("[PWA]: Service worker is active"),b.emit("ready",j)},registered(j){console.log("[PWA]: Service worker has been registered."),b.emit("registered",j)},cached(j){console.log("[PWA]: Content has been cached for offline usage"),b.emit("cached",j)},async updatefound(j){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),b.emit("updatefound",j))},updated(j){console.log("[PWA]: New content is available, please refresh.");const Z="service-worker-version",U=Number(localStorage.getItem(Z)||0);localStorage.setItem(Z,(U+1).toString()),localStorage.removeItem("manifest"),b.emit("updated",j)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),b.emit("offline")},error(j){console.log("[PWA]: Error during service worker registration:",j),b.emit("error",j)}})},W$1=()=>{const b=f$2();provide(p$1,b),onMounted(async()=>{var $;let j=!1;($=navigator.serviceWorker)!=null&&$.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{j||(j=!0,window.location.reload())}),await h$2(b)})};var m$1=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},c$1;typeof window<"u"&&(typeof Promise<"u"?c$1=new Promise(function(b){return window.addEventListener("load",b)}):c$1={then:function(b){return window.addEventListener("load",b)}});function S$1(b,$){$===void 0&&($={});var j=$.registrationOptions;j===void 0&&(j={}),delete $.registrationOptions;var Z=function(U){for(var Y=[],ee=arguments.length-1;ee-- >0;)Y[ee]=arguments[ee+1];$&&$[U]&&$[U].apply($,Y)};"serviceWorker"in navigator&&c$1.then(function(){m$1()?(y(b,Z,j),navigator.serviceWorker.ready.then(function(U){Z("ready",U)}).catch(function(U){return i$1(Z,U)})):(l$2(b,Z,j),navigator.serviceWorker.ready.then(function(U){Z("ready",U)}).catch(function(U){return i$1(Z,U)}))})}function i$1(b,$){navigator.onLine||b("offline"),b("error",$)}function l$2(b,$,j){navigator.serviceWorker.register(b,j).then(function(Z){if($("registered",Z),Z.waiting){$("updated",Z);return}Z.onupdatefound=function(){$("updatefound",Z);var U=Z.installing;U.onstatechange=function(){U.state==="installed"&&(navigator.serviceWorker.controller?$("updated",Z):$("cached",Z))}}}).catch(function(Z){return i$1($,Z)})}function y(b,$,j){fetch(b).then(function(Z){Z.status===404?($("error",new Error("Service worker not found at "+b)),d$1()):Z.headers.get("content-type").indexOf("javascript")===-1?($("error",new Error("Expected "+b+" to have javascript content-type, but received "+Z.headers.get("content-type"))),d$1()):l$2(b,$,j)}).catch(function(Z){return i$1($,Z)})}function d$1(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(b){b.unregister()}).catch(function(b){return i$1(emit,b)})}var E=Object.freeze({__proto__:null,register:S$1,unregister:d$1});const popup="",W={"/zh/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"},"/":{install:"Install",iOSInstall:"Tap the share button and then 'Add to Home Screen'",cancel:"Cancel",close:"Close",prevImage:"Previous Image",nextImage:"Next Image",desc:"Description",feature:"Key Features",explain:"This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",hint:"New content found.",update:"New content is available."}},s$1=()=>h$6(st,{name:"update"},()=>h$6("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));s$1.displayName="UpdateIcon";const P=Symbol.for("PWAEvent"),S=()=>{const b=inject(P);if(!b)throw new Error("usePWAEvent() is called without provider.");return b},g$1=b=>{const $=b.waiting;if(!$)return;const j=new MessageChannel;$.postMessage({type:"SKIP_WAITING"},[j.port2])};var A=defineComponent({name:"SWUpdatePopup",setup(b,{slots:$}){const j=Mt(W),Z=ref(),U=computed(()=>Boolean(Z.value)),Y=()=>{Z.value&&(g$1(Z.value),Z.value=void 0)};return onMounted(()=>{S().on("updated",ee=>{ee&&(Z.value=ee)})}),()=>h$6(Transition,{name:"popup"},()=>{var ee;return((ee=$.default)==null?void 0:ee.call($,{enabled:U.value,reload:Y}))||(U.value?h$6("button",{class:"sw-update-popup",tabindex:0,onClick:()=>Y()},[j.value.update,h$6("span",{class:"icon-wrapper"},h$6(s$1))]):null)})}});const clientConfig10=defineClientConfig({setup:()=>{W$1()},rootComponents:[A]}),useAutoLink=(b,$=!1)=>{const j=useRouter(),{fullPath:Z,meta:U,name:Y}=ut(j,encodeURI(b));return{text:!$&&U.s?U.s:U.title||b,link:Y==="404"?b:Z,...U.i?{icon:U.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useMobile=()=>{const b=useThemeData(),$=ref(!1),j=()=>{$.value=window.innerWidth<(b.value.mobileBreakPoint||719)};return onMounted(()=>{j(),useEventListener("resize",j,!1),useEventListener("orientationchange",j,!1)}),$},useNavigate=()=>{const b=useRouter(),$=useRoute();return j=>{if(j)if(j.startsWith("/"))$.path!==j&&b.push(j);else if(j.startsWith("http://")||j.startsWith("https://")||j.startsWith("mailto:"))window&&window.open(j);else{const Z=$.path.slice(0,$.path.lastIndexOf("/"));b.push(`${Z}/${encodeURI(j)}`)}}},usePageAuthor=()=>{const b=useThemeLocaleData(),$=usePageFrontmatter();return computed(()=>{const{author:j}=$.value;return j?Pt(j):j===!1?[]:Pt(b.value.author,!1)})},usePageCategory=()=>{const b=usePageFrontmatter();return computed(()=>Rt(b.value.category).map($=>{var j,Z;return{name:$,path:((Z=(j=inject(Symbol.for("categoryMap")))==null?void 0:j.value.map[$])==null?void 0:Z.path)||""}}))},usePageTag=()=>{const b=usePageFrontmatter();return computed(()=>Bt(b.value.tag).map($=>{var j,Z;return{name:$,path:((Z=(j=inject(Symbol.for("tagMap")))==null?void 0:j.value.map[$])==null?void 0:Z.path)||""}}))},usePageDate=()=>{const b=usePageFrontmatter(),$=usePageData();return computed(()=>{const{date:j}=b.value;if(j)return Q$1(j);const{createdTime:Z}=$.value.git||{};return Z?Q$1(new Date(Z)):null})},usePageInfo=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter(),Z=usePageAuthor(),U=usePageCategory(),Y=usePageTag(),ee=usePageDate(),ae=computed(()=>({author:Z.value,category:U.value,date:ee.value,localizedDate:$.value.localizedDate,tag:Y.value,isOriginal:j.value.isOriginal||!1,readingTime:$.value.readingTime||null,pageview:"pageview"in j.value?j.value.pageview:!0})),ne=computed(()=>"pageInfo"in j.value?j.value.pageInfo:"pageInfo"in b.value?b.value.pageInfo:null);return{info:ae,items:ne}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(b=>promiseResolve=b)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const b=usePageFrontmatter(),$=useThemeLocaleData(),j=usePageAuthor(),Z=computed(()=>{const{copyright:ee,footer:ae}=b.value;return ae!==!1&&Boolean(ee||ae||$.value.displayFooter)}),U=computed(()=>{const{footer:ee}=b.value;return ee===!1?!1:typeof ee=="string"?ee:$.value.footer||""}),Y=computed(()=>"copyright"in b.value?b.value.copyright:"copyright"in $.value?$.value.copyright:j.value.length?`Copyright © ${new Date().getFullYear()} ${j.value[0].name}`:!1);return()=>Z.value?h$6("footer",{class:"footer-wrapper"},[h$6("div",{class:"footer",innerHTML:U.value}),Y.value?h$6("div",{class:"copyright",innerHTML:Y.value}):null]):null}}),Icon=b=>{const{icon:$=""}=b;return isLinkHttp($)?h$6("img",{class:"icon",src:$}):$.startsWith("/")?h$6("img",{class:"icon",src:withBase($)}):h$6(resolveComponent("FontIcon"),b)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(b,{attrs:$,emit:j,slots:Z}){const U=useRoute(),Y=useSiteData(),ee=toRef(b,"config"),ae=computed(()=>isLinkHttp(ee.value.link)),ne=computed(()=>isLinkMailto(ee.value.link)||isLinkTel(ee.value.link)),se=computed(()=>ne.value?void 0:ee.value.target||(ae.value?"_blank":void 0)),ie=computed(()=>se.value==="_blank"),oe=computed(()=>!ae.value&&!ne.value&&!ie.value),le=computed(()=>ne.value?void 0:ee.value.rel||(ie.value?"noopener noreferrer":void 0)),re=computed(()=>ee.value.ariaLabel||ee.value.text),ce=computed(()=>{if(b.exact)return!1;const ue=Object.keys(Y.value.locales);return ue.length?ue.every(ve=>ve!==ee.value.link):ee.value.link!=="/"}),pe=computed(()=>oe.value?ee.value.activeMatch?new RegExp(ee.value.activeMatch).test(U.path):ce.value?U.path.startsWith(ee.value.link):U.path===ee.value.link:!1);return()=>{var _e,be,ge;const{text:ue,icon:ve,link:de}=ee.value;return oe.value?h$6(RouterLink,{to:de,"aria-label":re.value,...$,class:["nav-link",{active:pe.value},$.class],onFocusout:()=>j("focusout")},()=>{var fe,me,ke;return((fe=Z.default)==null?void 0:fe.call(Z))||[((me=Z.before)==null?void 0:me.call(Z))||h$6(Icon,{icon:ve}),ue,(ke=Z.after)==null?void 0:ke.call(Z)]}):h$6("a",{href:de,rel:le.value,target:se.value,"aria-label":re.value,...$,class:["nav-link",$.class],onFocusout:()=>j("focusout")},((_e=Z.default)==null?void 0:_e.call(Z))||[((be=Z.before)==null?void 0:be.call(Z))||h$6(Icon,{icon:ve}),ue,b.noExternalLinkIcon?null:h$6(ExternalLinkIcon),(ge=Z.after)==null?void 0:ge.call(Z)])}}}),isActiveSidebarItem=(b,$,j=!1)=>"activeMatch"in $?new RegExp($.activeMatch).test(b.path):Ht(b,$.link)?!0:$.children&&!j?$.children.some(Z=>isActiveSidebarItem(b,Z)):!1,isMatchedSidebarItem=(b,$)=>$.type==="group"?$.children.some(j=>j.type==="group"?isMatchedSidebarItem(b,j):j.type==="page"&&isActiveSidebarItem(b,j,!0))||"prefix"in $&&Ht(b,$.prefix):!1,renderItem=(b,$)=>b.link?h$6(AutoLink,{...$,config:b}):h$6("p",$,[h$6(Icon,{icon:b.icon}),b.text]),renderChildren$1=b=>{const $=useRoute();return b?h$6("ul",{class:"sidebar-sub-headers"},b.map(j=>{const Z=isActiveSidebarItem($,j,!0);return h$6("li",{class:"sidebar-sub-header"},[renderItem(j,{class:["sidebar-link","heading",{active:Z}]}),renderChildren$1(j.children)])})):null},sidebarData={"/zh/guide/":[],"/zh/posts/":[{text:"Apple",prefix:"apple/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]},{text:"Banana",prefix:"banana/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]},"cherry.md","dragonfruit.md","tomato.md","strawberry.md"],"/cs/algo/framework/":["README.md",{text:"代码质量",prefix:"coding-style/",collapsible:!0,children:["README.md"]},{text:"优化",prefix:"optimise/",collapsible:!0,children:["README.md","减治优化.md","动态规划.md"]},{text:"传参",prefix:"parameter/",collapsible:!0,children:["README.md"]},{text:"搜索",prefix:"search/",collapsible:!0,children:["README.md","BFS.md","DFS.md","FOR.md","单向递归.md"]},{text:"线索",prefix:"clues/",collapsible:!0,children:["README.md"]},{text:"结构",prefix:"structure/",collapsible:!0,children:["README.md"]},{text:"顺序",prefix:"order/",collapsible:!0,children:["README.md"]}],"/cs/algo/summary/":["README.md",{text:"Optimise",prefix:"optimise/",collapsible:!0,children:[{text:"减治",prefix:"decrease-conquer/",collapsible:!0,children:["README.md",{text:"二值有序",prefix:"binary/",collapsible:!0,children:["README.md",{text:"二分搜索",prefix:"binary-search/",collapsible:!0,children:["README.md","浮点数.md","答案集.md","输入集.md"]},{text:"双指针",prefix:"dual-pointer/",collapsible:!0,children:["README.md",{text:"平行双指针",prefix:"parallel/",collapsible:!0,children:["README.md"]},{text:"滑窗双指针",prefix:"window/",collapsible:!0,children:["README.md"]},{text:"相向双指针",prefix:"opposite/",collapsible:!0,children:["README.md"]}]}]},{text:"贪心有序",prefix:"greedy/",collapsible:!0,children:["README.md"]}]},{text:"动态规划",prefix:"dynamic-programming/",collapsible:!0,children:["README.md",{text:"Combine",prefix:"combine/",collapsible:!0,children:[{text:"Combine",prefix:"combine/",collapsible:!0,children:["股票问题.md"]}]}]}]},{text:"Search",prefix:"search/",collapsible:!0,children:[{text:"深搜：栈式搜索",prefix:"DFS/",collapsible:!0,children:["README.md",{text:"枚举：宽树搜索",prefix:"enumerate/",collapsible:!0,children:["README.md",{text:"Combination",prefix:"combination/",collapsible:!0,children:["分割.md","组合.md","选择.md"]}]}]}]},{text:"Structure",prefix:"structure/",collapsible:!0,children:[{text:"Linear",prefix:"linear/",collapsible:!0,children:[{text:"排序",prefix:"sort/",collapsible:!0,children:["README.md",{text:"Partition",prefix:"partition/",collapsible:!0,children:["划分方法.md"]}]},{text:"数组算法",prefix:"array-list/",collapsible:!0,children:["README.md"]},{text:"链表算法",prefix:"linked-list/",collapsible:!0,children:["README.md",{text:"双指针",prefix:"双指针/",collapsible:!0,children:["README.md"]},"3. 反转链表.md","2. 基本技巧.md","1. 虚拟头节点.md","4. 链表中点.md","5. 链表求环.md"]}]},{text:"Tree",prefix:"tree/",collapsible:!0,children:[{text:"二叉树",prefix:"bitree/",collapsible:!0,children:["README.md"]}]}]},{text:"九章算法",prefix:"九章算法/",collapsible:!0,children:["11. BFS.md","14. BFS性价比之王.md","33. BFS双向.md","37. DFS.md","17. 排列式DFS.md","16. 组合类DFS.md","7. 二分法三重境界.md","30. 二分法实战.md","15. 分治法求二叉树.md","13. 二叉树非递归遍历.md","3. 代码质量.md","31. 低于On的算法.md","32. 全子集问题.md","2. 最长回文子串.md","23. 动态规划.md","40. 动态规划：区间型.md","25. 动态规划：背包型.md","27. 动态规划优化.md","24. 动态规划使用场景.md","29. 双指针.md","18. 哈希表.md","19. Heap.md","4. 复杂度理论.md","39. 外排序算法与数组合并类.md","5. 排序.md","21. 哈希表和堆.md","38. 数据结构设计.md","1. 真实案例.md","0. 总结.md","22. 记忆化搜索.md","6. 递归.md","12. 递归、遍历、分治.md"]}],"/cs/algo/faq/":["README.md","17. 单调栈.md","4. 滑窗型双指针与隔板法.md","2. 同向双指针.md","大文件处理.md","14. 字典树.md","3. 拓展知识.md","1. 算法面试高频知识点与技巧.md"],"/cs/basic/":[{text:"Computer Network",prefix:"network/",collapsible:!0,children:["README.md","HTTP.md","HTTPS.md","TCP.md"]},{text:"Operating System",prefix:"os/",collapsible:!0,children:["README.md","文件管理.md","IO多路复用.md","内存管理.md","用户态内核态.md","操作系统.md","线程进程.md"]}],"/cs/database/redis/":["README.md",{text:"Commands",prefix:"commands/",collapsible:!0,children:["hash.md","list.md","set.md","sorted-set.md","string.md","generic.md"]},{text:"Feature",prefix:"feature/",collapsible:!0,children:["feature.md"]},{text:"Practice",prefix:"practice/",collapsible:!0,children:[{text:"Best",prefix:"best/",collapsible:!0,children:["服务端优化.md","集群.md","批处理优化.md","键值设计.md"]},{text:"Design",prefix:"design/",collapsible:!0,children:["uvpv.md","global-id.md","follow.md","distributed-lock.md","rate.md","seckill.md","sign.md","nearby.md"]},{text:"Problem",prefix:"problem/",collapsible:!0,children:["consistency-update-strategy.md","cache-preheat.md","atomic.md","cache-problem.md"]}]},{text:"Principal",prefix:"principal/",collapsible:!0,children:[{text:"Memory Model",prefix:"memory-model/",collapsible:!0,children:["内存淘汰策略.md","过期删除策略.md"]},{text:"Redis 数据结构",prefix:"data-structure/",collapsible:!0,children:["README.md","基本类型.md","数据结构.md","特殊类型.md"]},{text:"Thread Model",prefix:"thread- model/",collapsible:!0,children:["线程模型.md"]}]},{text:"Redis Java 客户端",prefix:"clients/",collapsible:!0,children:["README.md","jedis.md","spring-data-redis.md"]},{text:"持久化策略",prefix:"persistency/",collapsible:!0,children:["README.md","AOF.md","RDB.md"]},{text:"高可用",prefix:"availability/",collapsible:!0,children:["README.md","cluster.md","replication.md","sentinel.md"]}],"/cs/database/mysql/transaction/":["README.md","1. ACID.md","4. 传播机制.md","2. 并发问题.md","3. 隔离级别.md"],"/cs/database/mysql/index/":["README.md","4. 使用规则.md","3. 性能分析.md","2. 索引分类.md","1. 索引结构.md"],"/cs/database/mysql/engine/":[{text:"InnoDB 底层原理",prefix:"innodb-principle/",collapsible:!0,children:["README.md","3. 事务原理.md","2. 引擎架构.md","1. 逻辑存储结构.md"]},"1. 体系结构.md","2. 存储引擎.md"],"/cs/database/mysql/lock/":["README.md","1. 全局锁.md","3. 行级锁.md","2. 表级锁.md"],"/cs/database/mysql/log/":["README.md"],"/se/lang/java/":["README.md",{text:"Basic",prefix:"basic/",collapsible:!0,children:[{text:"Class",prefix:"class/",collapsible:!0,children:["内部类.md","工具类.md","常见类.md","面向对象.md"]},{text:"Type",prefix:"type/",collapsible:!0,children:["基本类型.md","数组.md"]},"代码规范.md","关键字.md","异常.md","运算符.md"]},{text:"Feature",prefix:"feature/",collapsible:!0,children:["java8.md"]},{text:"JUC",prefix:"JUC/",collapsible:!0,children:["README.md",{text:"Async",prefix:"async/",collapsible:!0,children:["forkjoin.md","future.md"]},{text:"Lock",prefix:"lock/",collapsible:!0,children:["乐观锁.md","悲观锁.md","对比.md"]},{text:"Sync",prefix:"sync/",collapsible:!0,children:["AQS.md","CountDownLatch.md","CyclicBarrier.md","Semaphore.md"]},{text:"Thread",prefix:"thread/",collapsible:!0,children:["threadlocal.md","线程.md","线程池.md","线程状态.md"]},{text:"线程安全",prefix:"safe/",collapsible:!0,children:["README.md","jmm.md","volatile.md"]}]},{text:"Jvm",prefix:"jvm/",collapsible:!0,children:[{text:"内存管理",prefix:"内存管理/",collapsible:!0,children:["内存区域.md","内存泄漏.md","垃圾回收算法.md","垃圾收集器.md","对象死亡判定.md","引用类型.md"]},"jmm.md",{text:"类加载",prefix:"类加载/",collapsible:!0,children:["类加载器.md","类加载时机.md","类加载过程.md"]},"问题排查.md"]},{text:"集合",prefix:"collections/",collapsible:!0,children:["README.md","collection.md","map.md","Concurrent.md"]}],"/se/framework/":[{text:"Doc",prefix:"doc/",collapsible:!0,children:[{text:"Swagger",prefix:"swagger/",collapsible:!0,children:["swagger.md","knife4j.md"]}]},{text:"Nginx",prefix:"nginx/",collapsible:!0,children:["Untitled.md"]},{text:"ORM",prefix:"orm/",collapsible:!0,children:["README.md",{text:"Mybatis",prefix:"mybatis/",collapsible:!0,children:["参数.md","查询.md","标签.md"]},{text:"Mybatis Plus",prefix:"mybatis-plus/",collapsible:!0,children:["条件查询.md","查询投影.md"]},"常见问题.md"]},{text:"Oss",prefix:"oss/",collapsible:!0,children:["oss.md"]},{text:"Spring",prefix:"spring/",collapsible:!0,children:["README.md",{text:"Core",prefix:"core/",collapsible:!0,children:[{text:"Aop",prefix:"aop/",collapsible:!0,children:["应用场景.md","概念.md","用法.md"]},{text:"Beans",prefix:"beans/",collapsible:!0,children:["循环依赖.md","基本概念.md","后处理器.md","生命周期.md"]},{text:"Ioc",prefix:"ioc/",collapsible:!0,children:["ioc.md"]},{text:"Tx",prefix:"tx/",collapsible:!0,children:["事务.md"]}]},{text:"Mvc",prefix:"mvc/",collapsible:!0,children:["servlet.md","Spring MVC.md"]},{text:"Spring Boot",prefix:"boot/",collapsible:!0,children:["README.md"]},"设计模式.md"]},{text:"Spring Cloud",prefix:"spring-cloud/",collapsible:!0,children:["README.md",{text:"",prefix:"nacos/",collapsible:!0,children:["README.md"]}]}],"/se/devops/":[{text:"CI/CD",prefix:"cicd/",collapsible:!0,children:["README.md","ci.md","makefile.md"]},{text:"Docker",prefix:"docker/",collapsible:!0,children:["README.md","docker-file.md","persistence.md","network.md"]},{text:"Kubernetes",prefix:"k8s/",collapsible:!0,children:["README.md","archetecture.md","installation.md"]},{text:"企业级服务器系统导论",prefix:"unix/",collapsible:!0,children:["README.md",{text:"Availability 可用性",prefix:"availability/",collapsible:!0,children:["README.md","DNS-DRBD-network.md","load-assessment-and-tuning.md","optimize-server-and-topology.md","redundancy-and-load-balancing.md"]},{text:"UNIX 基础",prefix:"basic/",collapsible:!0,children:["README.md","1.1 basic-cmd.md","2. account-management.md","3. shell.md","4.1 booting.md","4.2 systemd.md","5. access-ctrl.md","6. process-ctrl.md","7. Filesystem.md","8. Storage.md","9. Disk Quota.md","10. scheduled-tasks.md","11. backups.md","12. software-management.md","network-management.md","network-services.md","security.md","rescue.md","1.2. vi.md","1.3 三剑客.md"]}]}],"/se/design/":[{text:"Pattern",prefix:"pattern/",collapsible:!0,children:["Untitled.md"]},{text:"系统设计",prefix:"system-design/",collapsible:!0,children:["README.md",{text:"Projects",prefix:"projects/",collapsible:!0,children:["trace-note.md"]},"cron.md","user.md","seckill.md"]},{text:"面向对象设计",prefix:"ood/",collapsible:!0,children:["README.md"]}],"/se/tools/":["README.md",{text:"Git",prefix:"git/",collapsible:!0,children:["README.md"]},{text:"LaTeX",prefix:"latex/",collapsible:!0,children:["README.md","latex运算符.md"]},{text:"Others",prefix:"others/",collapsible:!0,children:["alist.md","xdm.md"]},{text:"Uml",prefix:"uml/",collapsible:!0,children:["mermaid.md","plantUML.md"]},{text:"Vuepress",prefix:"vuepress/",collapsible:!0,children:["README.md","vuepress.md"]}],"/se/devops/unix/basic/":["README.md","1.1 basic-cmd.md","2. account-management.md","3. shell.md","4.1 booting.md","4.2 systemd.md","5. access-ctrl.md","6. process-ctrl.md","7. Filesystem.md","8. Storage.md","9. Disk Quota.md","10. scheduled-tasks.md","11. backups.md","12. software-management.md","network-management.md","network-services.md","security.md","rescue.md","1.2. vi.md","1.3 三剑客.md"],"/se/devops/unix/availability/":["README.md","DNS-DRBD-network.md","load-assessment-and-tuning.md","optimize-server-and-topology.md","redundancy-and-load-balancing.md"],"/standardized/GRE/":["README.md",{text:"Quantitative",prefix:"QUANTITATIVE/",collapsible:!0,children:["README.md","代数.md","数论.md"]},{text:"Verbal",prefix:"VERBAL/",collapsible:!0,children:["README.md",{text:"Blank",prefix:"Blank/",collapsible:!0,children:["README.md"]},{text:"Reading",prefix:"Reading/",collapsible:!0,children:[{text:"公式法",prefix:"formula/",collapsible:!0,children:["README.md","2.0 主旨题.md","1. 事实信息题.md","2.2 信息目的题.md","2.1 句子作用题.md","4. 可多选题.md","8. 否定事实信息题.md","10. 归纳与解释.md","5. 态度题.md","3. 推断题.md","7. 类比题.md","9. 词汇题.md"]},{text:"双线阅读法",prefix:"dual-line/",collapsible:!0,children:["README.md","8. 高效信息提取与信息题.md","6. 全文结构与主旨题.md","9. 功能与信息线综合.md","7. 功能线综合练习.md","3. 单句功能判断方法论.md","4. 句间关系与句子功能.md","2. 长难句.md"]}]}]}],"/standardized/TOEFL/":["README.md","计划.md",{text:"Listening",prefix:"LISTENING/",collapsible:!0,children:["README.md","真题营.md","积累.md","1. 中心逻辑精听法.md","基础.md",{text:"基础课",prefix:"基础课/",collapsible:!0,children:["单词.md","句子.md","段落.md"]},"4. 对话串联法.md","3. 笔记法.md",{text:"练习",prefix:"练习/",collapsible:!0,children:["对话练习.md","讲座练习.md"]},"5. 讲座分层法.md",{text:"长难句",prefix:"长难句/",collapsible:!0,children:["1.md","3.md","2.md"]},"2. 题型.md"]},{text:"Reading",prefix:"READING/",collapsible:!0,children:["README.md","2. 六选三.md","3. 文章段落.md","5. 文章结构.md",{text:"练习",prefix:"练习/",collapsible:!0,children:["刷题答案.md"]},"4. 逻辑考点.md","1. 阅读方法论.md",{text:"题型分类",prefix:"题型分类/",collapsible:!0,children:["1. 六选三.md","5. 句子插入题.md","4. 句子简化题.md","3. 指代题.md","8. 推断题.md","9. 目的题.md","6. 细节题.md","2. 词汇题.md"]}]},{text:"Speaking",prefix:"SPEAKING/",collapsible:!0,children:["README.md","task1.md","task2.md","task3.md","task4.md",{text:"刷题营",prefix:"exercise/",collapsible:!0,children:["README.md","1.md","7. .md","9. .md","10..md","12.md","14. .md","15.md","16.md","17.md","18.md","19.md","20.md","21.md","23.md","24.md","25.md","26.md","27.md","28.md","29.md"]},{text:"练习",prefix:"练习/",collapsible:!0,children:["task2.md"]},{text:"训练营",prefix:"训练营/",collapsible:!0,children:["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md"]},"读音.md"]},{text:"Writing",prefix:"WRITING/",collapsible:!0,children:["README.md","2. 主体段.md","改革.md",{text:"练习",prefix:"练习/",collapsible:!0,children:["1. .md","2. .md"]},"1. 结构.md","5. 综合写作.md","3. 语料1.md","4. 语料2.md"]}]},resolvePrefix=(b="",$="")=>$.startsWith("/")?$:`${ensureEndingSlash(b)}${$}`,headerToSidebarItem=(b,$)=>{const j=usePageData();return{type:"heading",text:b.title,link:`${j.value.path}#${b.slug}`,children:headersToSidebarItemChildren(b.children,$)}},headersToSidebarItemChildren=(b,$)=>$>0?b.map(j=>headerToSidebarItem(j,$-1)):[],resolveHeadingSidebarItems=b=>{const $=usePageData();return headersToSidebarItemChildren($.value.headers,b)},resolveArraySidebarItems=(b,$,j="")=>{const Z=usePageData(),U=useRoute(),Y=(ee,ae=j)=>{var se;const ne=isString$1(ee)?useAutoLink(resolvePrefix(ae,ee)):ee.link?{...ee,...isLinkExternal(ee.link)?{}:{link:useAutoLink(resolvePrefix(ae,ee.link)).link}}:ee;if("children"in ne){const ie=resolvePrefix(ae,ne.prefix),oe=ne.children==="structure"?sidebarData[ie]:ne.children;return{type:"group",...ne,prefix:ie,children:oe.map(le=>Y(le,ie))}}return{type:"page",...ne,children:ne.link===U.path?headersToSidebarItemChildren(((se=Z.value.headers[0])==null?void 0:se.level)===1?Z.value.headers[0].children:Z.value.headers,$):[]}};return b.map(ee=>Y(ee))},resolveMultiSidebarItems=(b,$)=>{const j=useRoute(),Z=Object.keys(b).sort((U,Y)=>Y.length-U.length);for(const U of Z)if(decodeURI(j.path).startsWith(U)){const Y=b[U];return Y?resolveArraySidebarItems(Y==="structure"?sidebarData[U]:Y,$,U):[]}return console.warn(`${j.path} do not have valid sidebar config`),[]},resolveSidebarItems=()=>{const b=useRouteLocale(),$=usePageFrontmatter(),j=useThemeLocaleData(),Z=$.value.home?!1:$.value.sidebar??j.value.sidebar??"structure",U=$.value.headerDepth??j.value.headerDepth??2;return Z===!1?[]:Z==="heading"?resolveHeadingSidebarItems(U):Z==="structure"?resolveArraySidebarItems(sidebarData[b.value],U,b.value):isArray(Z)?resolveArraySidebarItems(Z,U):isPlainObject(Z)?resolveMultiSidebarItems(Z,U):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const b=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,b)},useSidebarItems=()=>{const b=inject(sidebarItemsSymbol);if(!b)throw new Error("useSidebarItems() is called without provider.");return b},common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(b,{slots:$}){const j=useRouter(),Z=usePageData(),U=usePageFrontmatter(),Y=useThemeLocaleData(),ee=useMobile(),ae=ref(!1),ne=computed(()=>b.noNavbar||U.value.navbar===!1||Y.value.navbar===!1?!1:Boolean(Z.value.title||Y.value.logo||Y.value.repo||Y.value.navbar)),se=useSidebarItems(),ie=computed(()=>b.noSidebar?!1:U.value.sidebar!==!1&&se.value.length!==0&&!U.value.home),oe=ref(!1),le=ref(!1),re=fe=>{oe.value=typeof fe=="boolean"?fe:!oe.value},ce=fe=>{le.value=typeof fe=="boolean"?fe:!le.value},pe={x:0,y:0},ue=fe=>{pe.x=fe.changedTouches[0].clientX,pe.y=fe.changedTouches[0].clientY},ve=fe=>{const me=fe.changedTouches[0].clientX-pe.x,ke=fe.changedTouches[0].clientY-pe.y;Math.abs(me)>Math.abs(ke)*1.5&&Math.abs(me)>40&&(me>0&&pe.x<=80?re(!0):re(!1))},de=computed(()=>U.value.home?!1:U.value.toc||Y.value.toc!==!1&&U.value.toc!==!1),_e=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let be,ge=0;return useEventListener("scroll",useThrottleFn(()=>{const fe=_e();ge<fe&&fe>58?oe.value||(ae.value=!0):ae.value=!1,ge=fe},300,!0)),watch(ee,fe=>{fe||re(!1)}),onMounted(()=>{be=j.afterEach(()=>{re(!1)})}),onBeforeUnmount(()=>{be()}),()=>h$6("div",{class:["theme-container",{"no-navbar":!ne.value,"no-sidebar":!ie.value&&!($.sidebar||$.sidebarTop||$.sidebarBottom),"has-toc":de.value,"hide-navbar":ae.value,"sidebar-collapsed":!ee.value&&le.value,"sidebar-open":ee.value&&oe.value},U.value.containerClass||""],onTouchStart:ue,onTouchEnd:ve},h$6(St("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):wt,()=>{var fe;return[ne.value?h$6(resolveComponent("Navbar"),{onToggleSidebar:()=>re()},{leftStart:()=>{var me;return(me=$.navbarLeftStart)==null?void 0:me.call($)},leftEnd:()=>{var me;return(me=$.navbarLeftEnd)==null?void 0:me.call($)},centerStart:()=>{var me;return(me=$.navbarCenterStart)==null?void 0:me.call($)},centerEnd:()=>{var me;return(me=$.navbarCenterEnd)==null?void 0:me.call($)},rightStart:()=>{var me;return(me=$.navbarRightStart)==null?void 0:me.call($)},rightEnd:()=>{var me;return(me=$.navbarRightEnd)==null?void 0:me.call($)},screenTop:()=>{var me;return(me=$.navScreenTop)==null?void 0:me.call($)},screenBottom:()=>{var me;return(me=$.navScreenBottom)==null?void 0:me.call($)}}):null,h$6(Transition,{name:"fade"},()=>oe.value?h$6("div",{class:"sidebar-mask",onClick:()=>re(!1)}):null),h$6(Transition,{name:"fade"},()=>ee.value?null:h$6("div",{class:"toggle-sidebar-wrapper",onClick:()=>ce()},h$6("span",{class:["arrow",le.value?"right":"left"]}))),h$6(resolveComponent("Sidebar"),{},{...$.sidebar?{default:()=>{var me;return(me=$.sidebar)==null?void 0:me.call($)}}:{},top:()=>{var me;return(me=$.sidebarTop)==null?void 0:me.call($)},bottom:()=>{var me;return(me=$.sidebarBottom)==null?void 0:me.call($)}}),(fe=$.default)==null?void 0:fe.call($),h$6(PageFooter)]}))}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(b,{slots:$}){const j=U=>{U.style.transition=`transform ${b.duration}s ease-in-out ${b.delay}s, opacity ${b.duration}s ease-in-out ${b.delay}s`,U.style.transform="translateY(-20px)",U.style.opacity="0"},Z=U=>{U.style.transform="translateY(0)",U.style.opacity="1"};return()=>h$6(b.type==="single"?Transition:TransitionGroup,{name:"drop",appear:b.appear,onAppear:j,onAfterAppear:Z,onEnter:j,onAfterEnter:Z,onBeforeLeave:j},()=>{var U;return(U=$.default)==null?void 0:U.call($)})}}),HomeFeatures=defineComponent({name:"HomeFeatures",setup(){const b=usePageFrontmatter(),$=computed(()=>isArray(b.value.features)?b.value.features:[]);return()=>{var j;return $.value.length?h$6("div",{class:"features"},(j=b.value.features)==null?void 0:j.map(Z=>{const U=[h$6("h2",[h$6(Icon,{icon:Z.icon}),h$6("span",{innerHTML:Z.title})]),h$6("p",{innerHTML:Z.details})];return Z.link?isLinkExternal(Z.link)?h$6("a",{class:"feature link",href:Z.link,role:"navigation","aria-label":Z.title,target:"_blank"},U):h$6(RouterLink,{class:"feature link",to:Z.link,role:"navigation","aria-label":Z.title},()=>U):h$6("div",{class:"feature"},U)})):null}}}),MarkdownContent=({custom:b})=>h$6(Content,{class:["theme-hope-content",{custom:b}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const HomeHero=defineComponent({name:"HomeHero",setup(b,{slots:$}){const j=usePageFrontmatter(),Z=useSiteLocaleData(),U=computed(()=>j.value.heroText===!1?!1:j.value.heroText||Z.value.title||"Hello"),Y=computed(()=>j.value.tagline===!1?!1:j.value.tagline||Z.value.description||"Welcome to your VuePress site"),ee=computed(()=>j.value.heroImage?withBase(j.value.heroImage):null),ae=computed(()=>j.value.heroImageDark?withBase(j.value.heroImageDark):null),ne=computed(()=>j.value.heroAlt||U.value||"hero"),se=computed(()=>j.value.actions??[]);return()=>{var ie,oe;return h$6("header",{class:"hero"},[((ie=$.heroImage)==null?void 0:ie.call($))||h$6(DropTransition,{appear:!0,type:"group"},()=>[ee.value?h$6("img",{key:"light",class:{light:ae.value},src:ee.value,alt:ne.value}):null,ae.value?h$6("img",{key:"dark",class:"dark",src:ae.value,alt:ne.value}):null]),((oe=$.heroInfo)==null?void 0:oe.call($))||h$6("div",{class:"hero-info"},[U.value?h$6(DropTransition,{appear:!0,delay:.04},()=>h$6("h1",{id:"main-title"},U.value)):null,Y.value?h$6(DropTransition,{appear:!0,delay:.08},()=>h$6("p",{class:"description"},Y.value)):null,se.value.length?h$6(DropTransition,{appear:!0,delay:.12},()=>h$6("p",{class:"actions"},se.value.map(le=>h$6(AutoLink,{class:["action-button",le.type||"default"],config:le,noExternalLinkIcon:!0})))):null])])}}}),homePage="",HomePage=defineComponent({name:"HopePage",setup(b,{slots:$}){const j=usePure(),Z=usePageFrontmatter();return()=>{var U,Y,ee;return h$6("main",{class:["home project",{pure:j.value}],id:"main-content","aria-labelledby":Z.value.heroText===null?void 0:"main-title"},[(U=$.top)==null?void 0:U.call($),h$6(HomeHero),h$6(DropTransition,{appear:!0,delay:.16},()=>h$6(HomeFeatures)),(Y=$.center)==null?void 0:Y.call($),h$6(DropTransition,{appear:!0,delay:.24},()=>h$6(MarkdownContent,{custom:!0})),(ee=$.bottom)==null?void 0:ee.call($)])}}}),getAncestorLinks=(b,$)=>{const j=b.path.replace($,"/").split("/"),Z=[];let U=removeEndingSlash($);return j.forEach((Y,ee)=>{ee!==j.length-1?(U+=`${Y}/`,Z.push(U)):Y!==""&&(U+=Y,Z.push(U))}),Z},resolveRepoType=b=>!isLinkHttp(b)||/github\.com/.test(b)?"GitHub":/bitbucket\.org/.test(b)?"Bitbucket":/gitlab\.com/.test(b)?"GitLab":/gitee\.com/.test(b)?"Gitee":null,breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const b=useRouter(),$=useRoute(),j=useRouteLocale(),Z=usePageFrontmatter(),U=useThemeLocaleData(),Y=ref([]),ee=computed(()=>(Z.value.breadcrumb||Z.value.breadcrumb!==!1&&U.value.breadcrumb!==!1)&&Y.value.length>1),ae=computed(()=>Z.value.breadcrumbIcon||Z.value.breadcrumbIcon!==!1&&U.value.breadcrumbIcon!==!1),ne=()=>{const se=b.getRoutes(),ie=getAncestorLinks($,j.value).map(oe=>{const le=se.find(re=>re.path===oe);if(le){const{meta:re,path:ce}=ut(b,le.path),pe=re.s||re.title;if(pe)return{title:pe,icon:re.i,path:ce}}return null}).filter(oe=>oe!==null);ie.length>1&&(Y.value=ie)};return onMounted(()=>{ne(),watch(()=>$.path,ne)}),()=>h$6("nav",{class:["breadcrumb",{disable:!ee.value}]},ee.value?h$6("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},Y.value.map((se,ie)=>h$6("li",{class:{"is-active":Y.value.length-1===ie},property:"itemListElement",typeof:"ListItem"},[h$6(RouterLink,{to:se.path,property:"item",typeof:"WebPage"},()=>[ae.value?h$6(Icon,{icon:se.icon}):null,h$6("span",{property:"name"},se.title||"Unknown")]),h$6("meta",{property:"position",content:ie+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=b=>b===!1?!1:isString$1(b)?useAutoLink(b,!0):isPlainObject(b)?b:null,resolveFromSidebarItems=(b,$,j)=>{const Z=b.findIndex(U=>U.link===$);if(Z!==-1){const U=b[Z+j];return U!=null&&U.link?U:null}for(const U of b)if(U.children){const Y=resolveFromSidebarItems(U.children,$,j);if(Y)return Y}return null},PageNav=defineComponent({name:"PageNav",setup(){const b=useThemeLocaleData(),$=usePageFrontmatter(),j=useSidebarItems(),Z=useRoute(),U=useNavigate(),Y=computed(()=>{const ae=resolveFromFrontmatterConfig($.value.prev);return ae===!1?null:ae||(b.value.prevLink===!1?null:resolveFromSidebarItems(j.value,Z.path,-1))}),ee=computed(()=>{const ae=resolveFromFrontmatterConfig($.value.next);return ae===!1?null:ae||(b.value.nextLink===!1?null:resolveFromSidebarItems(j.value,Z.path,1))});return useEventListener("keydown",ae=>{ae.altKey&&(ae.key==="ArrowRight"?ee.value&&(U(ee.value.link),ae.preventDefault()):ae.key==="ArrowLeft"&&Y.value&&(U(Y.value.link),ae.preventDefault()))}),()=>Y.value||ee.value?h$6("nav",{class:"page-nav"},[Y.value?h$6(AutoLink,{class:"prev",config:Y.value},()=>{var ae,ne;return[h$6("div",{class:"hint"},[h$6("span",{class:"arrow left"}),b.value.metaLocales.prev]),h$6("div",{class:"link"},[h$6(Icon,{icon:(ae=Y.value)==null?void 0:ae.icon}),(ne=Y.value)==null?void 0:ne.text])]}):null,ee.value?h$6(AutoLink,{class:"next",config:ee.value},()=>{var ae,ne;return[h$6("div",{class:"hint"},[b.value.metaLocales.next,h$6("span",{class:"arrow right"})]),h$6("div",{class:"link"},[(ae=ee.value)==null?void 0:ae.text,h$6(Icon,{icon:(ne=ee.value)==null?void 0:ne.icon})])]}):null]):null}}),AuthorIcon=()=>h$6(st,{name:"author"},()=>h$6("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$6(st,{name:"calendar"},()=>h$6("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$6(st,{name:"category"},()=>h$6("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$6(st,{name:"eye"},()=>h$6("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$6(st,{name:"fire"},()=>h$6("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const TagIcon$1=()=>h$6(st,{name:"tag"},()=>h$6("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$6(st,{name:"timer"},()=>h$6("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$6(st,{name:"word"},()=>[h$6("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$6("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const b=useThemeLocaleData();return computed(()=>b.value.metaLocales)},readingTimeLocales={"/zh/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:b,docsBranch:$,docsDir:j,filePathRelative:Z,editLinkPattern:U})=>{if(!Z)return null;const Y=resolveRepoType(b);let ee;return U?ee=U:Y!==null&&(ee=editLinkPatterns[Y]),ee?ee.replace(/:repo/,isLinkHttp(b)?b:`https://github.com/${b}`).replace(/:branch/,$).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(j)}/${Z}`)):null},useEditLink=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter();return computed(()=>{const{repo:Z,docsRepo:U=Z,docsBranch:Y="main",docsDir:ee="",editLink:ae,editLinkPattern:ne=""}=b.value;if(!(j.value.editLink??ae??!0)||!U)return null;const ie=resolveEditLink({docsRepo:U,docsBranch:Y,docsDir:ee,editLinkPattern:ne,filePathRelative:$.value.filePathRelative});return ie?{text:b.value.metaLocales.editLink,link:ie}:null})},useUpdateTime=()=>{const b=useSiteLocaleData(),$=useThemeLocaleData(),j=usePageData(),Z=usePageFrontmatter();return computed(()=>{var ee,ae;return!(Z.value.lastUpdated??$.value.lastUpdated??!0)||!((ee=j.value.git)!=null&&ee.updatedTime)?null:new Date((ae=j.value.git)==null?void 0:ae.updatedTime).toLocaleString(b.value.lang)})},useContributors=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter();return computed(()=>{var U;return j.value.contributors??b.value.contributors??!0?((U=$.value.git)==null?void 0:U.contributors)??null:null})},AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(b){const $=useMetaLocale();return()=>b.author.length?h$6("span",{class:"author-info","aria-label":`${$.value.author}${b.pure?"":"🖊"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(AuthorIcon),h$6("span",b.author.map(j=>j.url?h$6("a",{class:"author-item",href:j.url,target:"_blank",rel:"noopener noreferrer"},j.name):h$6("span",{class:"author-item"},j.name))),h$6("span",{property:"author",content:b.author.map(j=>j.name).join(", ")})]):null}}),category="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(b){const $=useRouter(),j=useRoute(),Z=useMetaLocale(),U=(Y,ee="")=>{ee&&j.path!==ee&&(Y.preventDefault(),$.push(ee))};return()=>b.category.length?h$6("span",{class:"category-info","aria-label":`${Z.value.category}${b.pure?"":"🌈"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(CategoryIcon$1),...b.category.map(({name:Y,path:ee})=>h$6("span",{class:["category-item",{[`category${Ut(Y,9)}`]:!b.pure,clickable:ee}],role:ee?"navigation":"",onClick:ae=>U(ae,ee)},Y)),h$6("meta",{property:"articleSection",content:b.category.map(({name:Y})=>Y).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(b){const $=usePageLang(),j=useMetaLocale();return()=>{var Z,U;return b.date?h$6("span",{class:"date-info","aria-label":`${j.value.date}${b.pure?"":"📅"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(CalendarIcon),h$6("span",h$6(ClientOnly,()=>{var Y;return b.localizedDate||((Y=b.date.value)==null?void 0:Y.toLocaleDateString($.value))})),h$6("meta",{property:"datePublished",content:((U=(Z=b.date)==null?void 0:Z.value)==null?void 0:U.toISOString())||""})]):null}}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(b){const $=useRoute(),j=useMetaLocale(),Z=ref(0),U=()=>{const Y=document.querySelector(".waline-pageview-count");if(Y){const ee=Y.textContent;ee&&!isNaN(Number(ee))?Z.value=Number(ee):setTimeout(U,500)}};return onMounted(()=>{setTimeout(U,1500)}),watch(()=>$.path,(Y,ee)=>{Y!==ee&&setTimeout(U,500)}),()=>b.pageview?h$6("span",{class:"visitor-info","aria-label":`${j.value.views}${b.pure?"":"🔢"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(Z.value<1e3?EyeIcon:FireIcon),h$6("span",{class:"waline-pageview-count","data-path":typeof b.pageview=="string"?b.pageview:withBase($.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const $=useMetaLocale(),j=Mt(readingTimeLocales),Z=computed(()=>{if(!b.readingTime)return null;const{minutes:U}=b.readingTime;return U<1?{text:j.value.less1Minute,time:"PT1M"}:{text:j.value.time.replace("$time",Math.round(U).toString()),time:`PT${Math.round(U)}M`}});return()=>Z.value?h$6("span",{class:"reading-time-info","aria-label":`${$.value.readingTime}${b.pure?"":"⌛"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(TimerIcon),h$6("span",Z.value.text),h$6("meta",{property:"timeRequired",content:Z.value.time})]):null}}),tag="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(b){const $=useRouter(),j=useRoute(),Z=useMetaLocale(),U=(Y,ee="")=>{ee&&j.path!==ee&&(Y.preventDefault(),$.push(ee))};return()=>b.tag.length?h$6("span",{"aria-label":`${Z.value.tag}${b.pure?"":"🏷"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(TagIcon$1),...b.tag.map(({name:Y,path:ee})=>h$6("span",{class:["tag-item",{[`tag${Ut(Y,9)}`]:!b.pure,clickable:ee}],role:ee?"navigation":"",onClick:ae=>U(ae,ee)},Y)),h$6("meta",{property:"keywords",content:b.tag.map(({name:Y})=>Y).join(",")})]):null}}),OriginalInfo=defineComponent({name:"OriginalMark",inheritAttrs:!1,props:{isOriginal:Boolean},setup(b){const $=useMetaLocale();return()=>b.isOriginal?h$6("span",{class:"origin"},$.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const $=useMetaLocale(),j=Mt(readingTimeLocales),Z=computed(()=>{var Y;return(Y=b.readingTime)==null?void 0:Y.words.toString()}),U=computed(()=>j.value.word.replace("$word",Z.value||""));return()=>Z.value?h$6("span",{class:"words-info","aria-label":`${$.value.words}${b.pure?"":"🔠"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$6(WordIcon),h$6("span",U.value),h$6("meta",{property:"wordCount",content:Z.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","Category","Tag","ReadingTime"]},info:{type:Object,required:!0}},setup(b){const $=usePure();return()=>b.items?h$6("div",{class:"page-info"},b.items.map(j=>h$6(resolveComponent(`${j}Info`),{...b.info,pure:$.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const b=usePageData(),$=usePageFrontmatter(),j=useThemeLocaleData(),{info:Z,items:U}=usePageInfo();return()=>h$6("div",{class:"page-title"},[h$6("h1",[j.value.titleIcon!==!1?h$6(Icon,{icon:$.value.icon}):null,b.value.title]),h$6(PageInfo,{info:Z.value,...U.value===null?{}:{items:U.value}}),h$6("hr")])}}),EditIcon=()=>h$6(st,{name:"edit"},()=>[h$6("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$6("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$6("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const b=useThemeLocaleData(),$=useEditLink(),j=useUpdateTime(),Z=useContributors();return()=>{const{metaLocales:U}=b.value;return h$6("footer",{class:"page-meta"},[$.value?h$6("div",{class:"meta-item edit-link"},h$6(AutoLink,{class:"label",config:$.value},{before:()=>h$6(EditIcon)})):null,j.value?h$6("div",{class:"meta-item update-time"},[h$6("span",{class:"label"},`${U.lastUpdated}: `),h$6(ClientOnly,()=>h$6("span",{class:"info"},j.value))]):null,Z.value&&Z.value.length?h$6("div",{class:"meta-item contributors"},[h$6("span",{class:"label"},`${U.contributors}: `),Z.value.map(({email:Y,name:ee},ae)=>[h$6("span",{class:"contributor",title:`email: ${Y}`},ee),ae!==Z.value.length-1?",":""])]):null])}}}),toc="",renderHeader=({title:b,level:$,slug:j})=>h$6(RouterLink,{to:`#${j}`,class:["toc-link",`level${$}`]},()=>b),renderChildren=(b,$)=>{const j=useRoute();return b.length&&$>0?h$6("ul",{class:"toc-list"},b.map(Z=>[h$6("li",{class:["toc-item",{active:Ht(j,`#${Z.slug}`)}]},renderHeader(Z)),renderChildren(Z.children,$-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(b){const $=useRoute(),j=usePageData(),Z=useMetaLocale(),U=ref(),Y=ee=>{var ae;(ae=U.value)==null||ae.scrollTo({top:ee,behavior:"smooth"})};return onMounted(()=>{watch(()=>$.hash,ee=>{if(U.value){const ae=document.querySelector(`#toc a.toc-link[href$="${ee}"]`);if(!ae)return;const{top:ne,height:se}=U.value.getBoundingClientRect(),{top:ie,height:oe}=ae.getBoundingClientRect();ie<ne?Y(U.value.scrollTop+ie-ne):ie+oe>ne+se&&Y(U.value.scrollTop+ie+oe-ne-se)}})}),()=>{const ee=b.items.length?renderChildren(b.items,b.headerDepth):j.value.headers?renderChildren(j.value.headers,b.headerDepth):null;return ee?h$6("div",{class:"toc-place-holder"},[h$6("aside",{id:"toc"},[h$6("div",{class:"toc-header"},Z.value.toc),h$6("div",{class:"toc-wrapper",ref:U},[ee])])]):null}}}),darkModeSymbol=Symbol.for("darkMode"),useDarkMode=()=>{const b=inject(darkModeSymbol);if(!b)throw new Error("useDarkMode() is called without provider.");return b},injectDarkMode=b=>{const $=useThemeData(),j=usePreferredDark(),Z=useStorage("vuepress-theme-hope-scheme","auto"),U=computed(()=>{const{darkmode:Y}=$.value;return Y==="disable"?!1:Y==="enable"?!0:Y==="auto"?j.value:Y==="toggle"?Z.value==="dark":Z.value==="dark"||Z.value==="auto"&&j.value});b.provide(darkModeSymbol,{isDarkMode:U,status:Z}),Object.defineProperties(b.config.globalProperties,{$isDarkMode:{get:()=>U.value}})},setupDarkMode=()=>{const{isDarkMode:b}=useDarkMode(),$=(j=b.value)=>{const Z=window==null?void 0:window.document.querySelector("html");Z==null||Z.setAttribute("data-theme",j?"dark":"light")};onMounted(()=>{watch(b,$,{immediate:!0})})},page$1="",NormalPage=defineComponent({name:"NormalPage",setup(b,{slots:$}){const j=usePageFrontmatter(),{isDarkMode:Z}=useDarkMode(),U=useThemeLocaleData(),Y=computed(()=>j.value.toc||j.value.toc!==!1&&U.value.toc!==!1);return()=>h$6("main",{class:"page",id:"main-content"},h$6(St("LocalEncrypt")?resolveComponent("LocalEncrypt"):wt,()=>{var ee,ae,ne,se;return[(ee=$.top)==null?void 0:ee.call($),h$6(BreadCrumb),h$6(PageTitle),Y.value?h$6(TOC,{headerDepth:j.value.headerDepth??U.value.headerDepth??2}):null,(ae=$.contentBefore)==null?void 0:ae.call($),h$6(MarkdownContent),(ne=$.contentAfter)==null?void 0:ne.call($),h$6(PageMeta),h$6(PageNav),St("CommentService")?h$6(resolveComponent("CommentService"),{darkmode:Z.value}):null,(se=$.bottom)==null?void 0:se.call($)]}))}}),I18nIcon=()=>h$6(st,{name:"i18n"},()=>[h$6("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const GitHubIcon=()=>h$6(st,{name:"github"},()=>h$6("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));GitHubIcon.displayName="GitHubIcon";const GitlabIcon=()=>h$6(st,{name:"gitlab"},()=>h$6("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));GitlabIcon.displayName="GitlabIcon";const GiteeIcon=()=>h$6(st,{name:"gitee"},()=>h$6("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));GiteeIcon.displayName="GiteeIcon";const BitbucketIcon=()=>h$6(st,{name:"bitbucket"},()=>h$6("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));BitbucketIcon.displayName="BitbucketIcon";const SourceIcon=()=>h$6(st,{name:"source"},()=>h$6("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));SourceIcon.displayName="SourceIcon";const dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(b,{slots:$}){const j=useRoute(),Z=toRef(b,"config"),U=computed(()=>Z.value.ariaLabel||Z.value.text),Y=ref(!1);watch(()=>j.path,()=>{Y.value=!1});const ee=ae=>{ae.detail===0&&(Y.value=!Y.value)};return()=>{var ae;return h$6("div",{class:["dropdown-wrapper",{open:Y.value}]},[h$6("button",{class:"dropdown-title",type:"button","aria-label":U.value,onClick:ee},[((ae=$.title)==null?void 0:ae.call($))||h$6("span",{class:"title"},[h$6(Icon,{icon:Z.value.icon}),b.config.text]),h$6("span",{class:"arrow"}),h$6("ul",{class:"nav-dropdown"},Z.value.children.map((ne,se)=>{const ie=se===Z.value.children.length-1;return h$6("li",{class:"dropdown-item"},"children"in ne?[h$6("h4",{class:"dropdown-subtitle"},ne.link?h$6(AutoLink,{config:ne,onFocusout:()=>{ne.children.length===0&&ie&&(Y.value=!1)}}):h$6("span",ne.text)),h$6("ul",{class:"dropdown-subitem-wrapper"},ne.children.map((oe,le)=>h$6("li",{class:"dropdown-subitem"},h$6(AutoLink,{config:oe,onFocusout:()=>{le===ne.children.length-1&&ie&&(Y.value=!1)}}))))]:h$6(AutoLink,{config:ne,onFocusout:()=>{ie&&(Y.value=!1)}}))}))])])}}}),resolveNavbarItem=(b,$="")=>isString$1(b)?useAutoLink(`${$}${b}`):"children"in b?{...b,...b.link&&!isLinkExternal(b.link)?useAutoLink(`${$}${b.link}`):{},children:b.children.map(j=>resolveNavbarItem(j,`${$}${b.prefix||""}`))}:{...b,link:isLinkExternal(b.link)?b.link:useAutoLink(`${$}${b.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(b=>resolveNavbarItem(b))),useNavbarLanguageDropdown=()=>{const b=useRouter(),$=useRouteLocale(),j=useSiteLocaleData(),Z=useThemeData(),U=useThemeLocaleData();return computed(()=>{const Y=Object.keys(j.value.locales);if(Y.length<2)return null;const{path:ee,hash:ae}=b.currentRoute.value,{navbarLocales:ne}=U.value;return{text:"",ariaLabel:ne==null?void 0:ne.selectLangAriaLabel,children:Y.map(ie=>{var ue,ve,de;const oe=((ue=j.value.locales)==null?void 0:ue[ie])??{},le=((ve=Z.value.locales)==null?void 0:ve[ie])??{},re=oe.lang||"",ce=((de=le.navbarLocales)==null?void 0:de.langName)??re;let pe;if(re===j.value.lang)pe=ee;else{const _e=ee.replace($.value,ie);pe=b.getRoutes().some(be=>be.path===_e)?`${_e}${ae}`:le.home??ie}return{text:ce,link:pe}})}})},useNavbarRepo=()=>{const b=useThemeLocaleData(),$=computed(()=>b.value.repo||null),j=computed(()=>$.value?resolveRepoType($.value):null),Z=computed(()=>$.value&&!isLinkHttp($.value)?`https://github.com/${$.value}`:$.value),U=computed(()=>Z.value?b.value.repoLabel??(j.value===null?"Source":j.value):null);return computed(()=>!Z.value||!U.value||b.value.repoDisplay===!1?null:{type:j.value||"Source",label:U.value,link:Z.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const b=useNavbarLanguageDropdown();return()=>b.value?h$6("div",{class:"nav-item"},h$6(DropdownLink,{class:"i18n-dropdown",config:b.value},{title:()=>{var $;return h$6(I18nIcon,{"aria-label":($=b.value)==null?void 0:$.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const b=useRouteLocale(),$=useSiteLocaleData(),j=useThemeLocaleData(),Z=computed(()=>j.value.home||b.value),U=computed(()=>$.value.title),Y=computed(()=>j.value.logo?withBase(j.value.logo):null),ee=computed(()=>j.value.logoDark?withBase(j.value.logoDark):null);return()=>h$6(RouterLink,{to:Z.value,class:"brand"},()=>[Y.value?h$6("img",{class:["logo",{light:Boolean(ee.value)}],src:Y.value,alt:U.value}):null,ee.value?h$6("img",{class:["logo dark"],src:ee.value,alt:U.value}):null,U.value?h$6("span",{class:["site-name",{"hide-in-pad":Y.value}]},U.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$6("nav",{class:"nav-links"},[...b.value.map($=>h$6("div",{class:"nav-item hide-in-mobile"},"children"in $?h$6(DropdownLink,{config:$}):h$6(AutoLink,{config:$})))]):null}});function _toConsumableArray(b){if(Array.isArray(b)){for(var $=0,j=Array(b.length);$<b.length;$++)j[$]=b[$];return j}else return Array.from(b)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function b($){return locks.some(function(j){return!!(j.options.allowTouchMove&&j.options.allowTouchMove($))})},preventDefault=function b($){var j=$||window.event;return allowTouchMove(j.target)||j.touches.length>1?!0:(j.preventDefault&&j.preventDefault(),!1)},setOverflowHidden=function b($){if(previousBodyPaddingRight===void 0){var j=!!$&&$.reserveScrollBarGap===!0,Z=window.innerWidth-document.documentElement.clientWidth;j&&Z>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=Z+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function b(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function b($){return $?$.scrollHeight-$.scrollTop<=$.clientHeight:!1},handleScroll=function b($,j){var Z=$.targetTouches[0].clientY-initialClientY;return allowTouchMove($.target)?!1:j&&j.scrollTop===0&&Z>0||isTargetElementTotallyScrolled(j)&&Z<0?preventDefault($):($.stopPropagation(),!0)},disableBodyScroll=function b($,j){if(!$){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function(U){return U.targetElement===$})){var Z={targetElement:$,options:j||{}};locks=[].concat(_toConsumableArray(locks),[Z]),isIosDevice?($.ontouchstart=function(U){U.targetTouches.length===1&&(initialClientY=U.targetTouches[0].clientY)},$.ontouchmove=function(U){U.targetTouches.length===1&&handleScroll(U,$)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(j)}},clearAllBodyScrollLocks=function b(){isIosDevice?(locks.forEach(function($){$.targetElement.ontouchstart=null,$.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(b){const $=useRoute(),j=toRef(b,"config"),Z=computed(()=>j.value.ariaLabel||j.value.text),U=ref(!1);watch(()=>$.path,()=>{U.value=!1});const Y=(ee,ae)=>ae[ae.length-1]===ee;return()=>[h$6("button",{class:["nav-screen-dropdown-title",{active:U.value}],type:"button","aria-label":Z.value,onClick:()=>{U.value=!U.value}},[h$6("span",{class:"title"},[h$6(Icon,{icon:j.value.icon}),b.config.text]),h$6("span",{class:["arrow",U.value?"down":"right"]})]),h$6("ul",{class:["nav-screen-dropdown",{hide:!U.value}]},j.value.children.map(ee=>h$6("li",{class:"dropdown-item"},"children"in ee?[h$6("h4",{class:"dropdown-subtitle"},ee.link?h$6(AutoLink,{config:ee,onFocusout:()=>{Y(ee,j.value.children)&&ee.children.length===0&&(U.value=!1)}}):h$6("span",ee.text)),h$6("ul",{class:"dropdown-subitem-wrapper"},ee.children.map(ae=>h$6("li",{class:"dropdown-subitem"},h$6(AutoLink,{config:ae,onFocusout:()=>{Y(ae,ee.children)&&Y(ee,j.value.children)&&(U.value=!1)}}))))]:h$6(AutoLink,{config:ee,onFocusout:()=>{Y(ee,j.value.children)&&(U.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$6("nav",{class:"nav-screen-links"},b.value.map($=>h$6("div",{class:"navbar-links-item"},"children"in $?h$6(NavScreenDropdown,{config:$}):h$6(AutoLink,{config:$})))):null}}),DarkIcon=()=>h$6(st,{name:"dark"},()=>h$6("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$6(st,{name:"light"},()=>h$6("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$6(st,{name:"auto"},()=>h$6("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$6(st,{name:"enter-fullscreen"},()=>h$6("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$6(st,{name:"cancel-fullscreen"},()=>h$6("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$6(st,{name:"outlook"},()=>[h$6("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const b=useThemeData(),{status:$}=useDarkMode(),j=computed(()=>b.value.darkmode),Z=()=>{j.value==="switch"?$.value={light:"dark",dark:"auto",auto:"light"}[$.value]:$.value=$.value==="light"?"dark":"light"};return()=>h$6("button",{id:"appearance-switch",onClick:()=>Z()},[h$6(AutoIcon,{style:{display:$.value==="auto"?"block":"none"}}),h$6(DarkIcon,{style:{display:$.value==="dark"?"block":"none"}}),h$6(LightIcon,{style:{display:$.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=computed(()=>$.value.outlookLocales.darkmode),Z=computed(()=>b.value.darkmode),U=computed(()=>Z.value==="switch"||Z.value==="toggle");return()=>U.value?h$6("div",{class:"appearance-wrapper"},[h$6("label",{class:"appearance-title",for:"appearance-switch"},j.value),h$6(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(b){const $=(j="")=>{const Z=document.documentElement.classList,U=Object.keys(b.themeColor).map(Y=>`theme-${Y}`);if(!j){localStorage.removeItem("theme"),Z.remove(...U);return}Z.remove(...U.filter(Y=>Y!==`theme-${j}`)),Z.add(`theme-${j}`),localStorage.setItem("theme",j)};return onMounted(()=>{const j=localStorage.getItem("theme");j&&$(j)}),()=>h$6("ul",{id:"theme-color-picker"},[h$6("li",h$6("span",{class:"theme-color",onClick:()=>$()})),...Object.entries(b.themeColor).map(([j,Z])=>h$6("li",h$6("span",{style:{background:Z},onClick:()=>$(j)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=computed(()=>$.value.outlookLocales.themeColor),Z=computed(()=>{const{themeColor:U}=b.value;return U===!1?null:U});return()=>Z.value?h$6("div",{class:"theme-color-wrapper"},[h$6("label",{class:"theme-color-title",for:"theme-color-picker"},j.value),h$6(ThemeColorPicker,{themeColor:Z.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const b=useThemeLocaleData(),{isSupported:$,isFullscreen:j,toggle:Z}=useFullscreen(),U=computed(()=>b.value.outlookLocales.fullscreen);return()=>$?h$6("div",{class:"fullscreen-wrapper"},[h$6("label",{class:"full-screen-title",for:"full-screen-switch"},U.value),h$6("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:j.value,onClick:()=>Z()},j.value?h$6(CancelFullScreenIcon):h$6(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const b=useThemeData(),$=usePure(),j=computed(()=>b.value.darkmode!=="disable"&&b.value.darkmode!=="enable"),Z=computed(()=>!$.value&&Boolean(b.value.themeColor)),U=computed(()=>!$.value&&b.value.fullscreen);return()=>h$6(ClientOnly,()=>[Z.value?h$6(ThemeColor):null,j.value?h$6(AppearanceMode):null,U.value?h$6(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(b,{emit:$,slots:j}){const Z=useRoute(),U=useMobile(),Y=ref();return watch(U,ee=>{!ee&&b.show&&(clearAllBodyScrollLocks(),$("close"))}),watch(()=>Z.path,()=>{clearAllBodyScrollLocks(),$("close")}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$6(Transition,{name:"fade",onEnter:()=>disableBodyScroll(Y.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var ee,ae;return b.show?h$6("div",{id:"nav-screen",ref:Y},h$6("div",{class:"container"},[(ee=j.before)==null?void 0:ee.call(j),h$6(NavScreenLinks),h$6("div",{class:"outlook-wrapper"},h$6(OutlookSettings)),(ae=j.after)==null?void 0:ae.call(j)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:b}=useFullscreen(),$=useThemeData(),j=usePure(),Z=useRoute(),U=ref(!1),Y=computed(()=>$.value.darkmode!=="disable"&&$.value.darkmode!=="enable"),ee=computed(()=>!j.value&&Boolean($.value.themeColor)),ae=computed(()=>!j.value&&$.value.fullscreen&&b);return watch(()=>Z.path,()=>{U.value=!1}),()=>Y.value||ae.value||ee.value?h$6("div",{class:"nav-item hide-in-mobile"},Y.value&&!ae.value&&!ee.value?h$6(AppearanceSwitch):ae.value&&!Y.value&&!ee.value?h$6(ToggleFullScreenButton):h$6("button",{class:["outlook-button",{open:U.value}],tabindex:"-1",ariaHidden:!0},[h$6(OutlookIcon),h$6("div",{class:"outlook-dropdown"},h$6(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:b=!1},{emit:$})=>h$6("button",{class:["toggle-navbar-button",{"is-active":b}],"aria-label":"Toggle Navbar","aria-expanded":b,"aria-controls":"nav-screen",onClick:()=>$("toggle")},h$6("span",{class:"button-container"},[h$6("span",{class:"button-top"}),h$6("span",{class:"button-middle"}),h$6("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(b,{emit:$})=>h$6("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>$("toggle")},h$6("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon,GiteeIcon,GitHubIcon,GitlabIcon,SourceIcon},setup(){const b=useNavbarRepo();return()=>b.value?h$6("div",{class:"nav-item"},h$6("a",{class:"repo-link",href:b.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":b.value.label},h$6(resolveComponent(`${b.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(b,{emit:$,slots:j}){const Z=useThemeLocaleData(),U=useMobile(),Y=ref(!1),ee=computed(()=>{const{navbarAutoHide:ne}=Z.value;return ne!=="none"&&(ne==="always"||U.value)}),ae=computed(()=>Z.value.navbarLayout||{left:["Brand"],center:["Links"],right:["Language","Repo","Outlook","Search"]});return()=>{var se,ie,oe,le,re,ce;const ne={Brand:h$6(NavbarBrand),Language:h$6(LanguageDropdown),Links:h$6(NavbarLinks),Repo:h$6(RepoLink),Outlook:h$6(OutlookButton),Search:St("Docsearch")?h$6(resolveComponent("Docsearch")):St("SearchBox")?h$6(resolveComponent("SearchBox")):St("SearchBox")?h$6(resolveComponent("SearchBox")):null};return[h$6("header",{class:["navbar",{"auto-hide":ee.value,"hide-icon":!Z.value.navbarIcon}]},[h$6("div",{class:"navbar-left"},[h$6(ToggleSidebarButton,{onToggle:()=>{Y.value&&(Y.value=!1),$("toggleSidebar")}}),(se=j.leftStart)==null?void 0:se.call(j),...ae.value.left.map(pe=>ne[pe]),(ie=j.leftEnd)==null?void 0:ie.call(j)]),h$6("div",{class:"navbar-center"},[(oe=j.centerStart)==null?void 0:oe.call(j),...ae.value.center.map(pe=>ne[pe]),(le=j.centerEnd)==null?void 0:le.call(j)]),h$6("div",{class:"navbar-right"},[(re=j.rightStart)==null?void 0:re.call(j),...ae.value.right.map(pe=>ne[pe]),(ce=j.rightEnd)==null?void 0:ce.call(j),h$6(ToggleNavbarButton,{active:Y.value,onToggle:()=>{Y.value=!Y.value}})])]),h$6(NavScreen,{show:Y.value,onClose:()=>{Y.value=!1}},{before:()=>{var pe;return(pe=j.screenTop)==null?void 0:pe.call(j)},after:()=>{var pe;return(pe=j.screenBottom)==null?void 0:pe.call(j)}})]}}}),sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(b){const $=useRoute();return()=>[renderItem(b.config,{class:["sidebar-link",`sidebar-${b.config.type}`,{active:isActiveSidebarItem($,b.config,!0)}],exact:!0}),renderChildren$1(b.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(b,{emit:$}){const j=useRoute(),Z=computed(()=>isActiveSidebarItem(j,b.config)),U=computed(()=>isActiveSidebarItem(j,b.config,!0));return()=>{const{collapsible:Y,children:ee=[],icon:ae,prefix:ne,link:se,text:ie}=b.config;return h$6("section",{class:"sidebar-group"},[h$6(Y?"button":"p",{class:["sidebar-heading",{clickable:Y||se,exact:U.value,active:Z.value}],...Y?{onClick:()=>$("toggle"),onKeydown:oe=>{oe.key==="Enter"&&$("toggle")}}:{}},[h$6(Icon,{icon:ae}),se?h$6(RouterLink,{to:se,class:"title"},()=>ie):h$6("span",{class:"title"},ie),Y?h$6("span",{class:["arrow",b.open?"down":"right"]}):null]),b.open||!Y?h$6(SidebarLinks,{key:ne,config:ee}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(b){const $=useRoute(),j=ref(-1),Z=U=>{j.value=U===j.value?-1:U};return watch(()=>$.path,()=>{const U=b.config.findIndex(Y=>isMatchedSidebarItem($,Y));j.value=U},{immediate:!0,flush:"post"}),()=>h$6("ul",{class:"sidebar-links"},b.config.map((U,Y)=>h$6("li",U.type==="group"?h$6(SidebarGroup,{config:U,open:Y===j.value,onToggle:()=>Z(Y)}):h$6(SidebarChild,{config:U}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(b,{slots:$}){const j=useRoute(),Z=useThemeLocaleData(),U=useSidebarItems(),Y=ref();return onMounted(()=>{watch(()=>j.hash,ee=>{const ae=document.querySelector(`.sidebar a.sidebar-link[href="${j.path}${ee}"]`);if(!ae)return;const{top:ne,height:se}=Y.value.getBoundingClientRect(),{top:ie,height:oe}=ae.getBoundingClientRect();ie<ne?ae.scrollIntoView(!0):ie+oe>ne+se&&ae.scrollIntoView(!1)})}),()=>{var ee,ae,ne;return h$6("aside",{class:["sidebar",{"hide-icon":!Z.value.sidebarIcon}],ref:Y},[(ee=$.top)==null?void 0:ee.call($),((ae=$.default)==null?void 0:ae.call($))||h$6(SidebarLinks,{config:U.value}),(ne=$.bottom)==null?void 0:ne.call($)])}}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(b,{slots:$}){const j=useScrollPromise(),Z=j.resolve,U=j.pending;return()=>h$6(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:Z,onBeforeLeave:U},()=>{var Y;return(Y=$.default)==null?void 0:Y.call($)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(b){const $=useRoute(),j=useThemeLocaleData(),Z=ref();watch(()=>$.path,()=>Z.value.focus());const U=({target:Y})=>{const ee=document.querySelector(Y.hash);if(ee){const ae=()=>{ee.removeAttribute("tabindex"),ee.removeEventListener("blur",ae)};ee.setAttribute("tabindex","-1"),ee.addEventListener("blur",ae),ee.focus(),window.scrollTo(0,0)}};return()=>[h$6("span",{ref:Z,tabindex:"-1"}),h$6("a",{href:`#${b.content}`,class:"skip-link sr-only",onClick:U},j.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=usePageData(),Z=usePageFrontmatter(),U=useMobile(),Y=computed(()=>$.value.blog.sidebarDisplay||b.value.blog.sidebarDisplay||"mobile");return()=>[h$6(SkipLink),h$6(resolveComponent("CommonWrapper"),{},{default:()=>Z.value.home?h$6(resolveComponent("HomePage")):h$6(FadeSlideY,()=>h$6(resolveComponent("NormalPage"),{key:j.value.path})),...Y.value!=="none"?{navScreenBottom:()=>h$6(resolveComponent("BloggerInfo"))}:{},...!U.value&&Y.value==="always"?{sidebar:()=>h$6(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const b=useRouteLocale(),$=useThemeLocaleData(),j=()=>{const U=$.value.routeLocales.notFoundMsg;return U[Math.floor(Math.random()*U.length)]},{navigate:Z}=useLink({to:$.value.home??b.value});return()=>[h$6(SkipLink),h$6(resolveComponent("CommonWrapper"),{noSidebar:!0},()=>h$6("main",{class:"page not-found",id:"main-content"},[h$6(NotFoundIcon),h$6("blockquote",j()),h$6("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},$.value.routeLocales.back),h$6("button",{class:"action-button",onClick:()=>Z()},$.value.routeLocales.home)]))]}}),index="",icons={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Linkedin:'<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 0 1-12.682 0L246.7 415.274z"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{}},"/zh/":{path:"/zh/category/",map:{使用指南:{path:"/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-62ced1a6","v-2b64e284","v-c1942916","v-65c00218","v-36295574"]},樱桃:{path:"/zh/category/%E6%A8%B1%E6%A1%83/",keys:["v-9ef49308"]},火龙果:{path:"/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",keys:["v-3fbd497c"]},水果:{path:"/zh/category/%E6%B0%B4%E6%9E%9C/",keys:["v-46587e86","v-3fbd497c","v-4b73526d","v-49be79ce","v-738aa55e","v-71d5ccbf"]},草莓:{path:"/zh/category/%E8%8D%89%E8%8E%93/",keys:["v-46587e86"]},蔬菜:{path:"/zh/category/%E8%94%AC%E8%8F%9C/",keys:["v-56a32aab"]},苹果:{path:"/zh/category/%E8%8B%B9%E6%9E%9C/",keys:["v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81"]},香蕉:{path:"/zh/category/%E9%A6%99%E8%95%89/",keys:["v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce"]}}}},tag:{"/":{path:"/tag/",map:{}},"/zh/":{path:"/zh/tag/",map:{禁用:{path:"/zh/tag/%E7%A6%81%E7%94%A8/",keys:["v-c1942916"]},文章加密:{path:"/zh/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",keys:["v-65c00218"]},Markdown:{path:"/zh/tag/markdown/",keys:["v-36295574"]},页面配置:{path:"/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",keys:["v-62ced1a6"]},使用指南:{path:"/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-62ced1a6"]},红:{path:"/zh/tag/%E7%BA%A2/",keys:["v-56a32aab","v-46587e86","v-3fbd497c","v-9ef49308","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81"]},小:{path:"/zh/tag/%E5%B0%8F/",keys:["v-46587e86","v-9ef49308"]},圆:{path:"/zh/tag/%E5%9C%86/",keys:["v-56a32aab","v-9ef49308","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81"]},大:{path:"/zh/tag/%E5%A4%A7/",keys:["v-3fbd497c","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81"]},黄:{path:"/zh/tag/%E9%BB%84/",keys:["v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce"]},弯曲的:{path:"/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",keys:["v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce"]},长:{path:"/zh/tag/%E9%95%BF/",keys:["v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce"]}}}}},typeMap={article:{"/":{path:"/article/",keys:["v-35285eb9","v-48946111","v-46f8812b","v-4b40d03a","v-204dfcb5","v-d121411e","v-76758d33","v-7b7b747c","v-10591812","v-e4de8f16","v-1c5516a4","v-e7fcc674","v-16cbeb16","v-7559fca0","v-76befe12","v-13fa91a7","v-15b61052","v-4eeecf07","v-a7be60d0","v-5cca2bb4","v-55f6c938","v-58f3d4b0","v-dadd1a02","v-21be9004","v-1e28a188","v-0b82bae4","v-4bfca452","v-55484202","v-40277606","v-dd640a06","v-a4194498","v-be0f4bc2","v-2aaaa1f4","v-0257c685","v-72740c8a","v-2ba863a6","v-55ae513c","v-7435acea","v-8db72a40","v-3747c200","v-528188e2","v-4b860994","v-3d59908d","v-7d2d82d5","v-61f32f65","v-27a7aebc","v-417d8c70","v-5d5862b1","v-238ca5f1","v-4fb9770f","v-8694b6bc","v-1696696a","v-224320df","v-59260c34","v-6b7d4df0","v-b1951358","v-4a7c9956","v-cd98a0ac","v-134b021f","v-74902a86","v-e108a058","v-7bd55f08","v-28d0a65b","v-310c2e4d","v-ff501fce","v-042b12ec","v-a67d5778","v-d8cf28cc","v-252112bc","v-f9b0b4de","v-0689dc16","v-57c14fa1","v-5b2bda71","v-4e118aef","v-91c74a40","v-08870d52","v-7161413e","v-98bd41e4","v-1196072b","v-134adfca","v-14ffb869","v-070b4ce4","v-53bc634a","v-fcbb4718","v-9a479324","v-f95195da","v-f5e7e49c","v-f27e335e","v-ef148220","v-ebaad0e2","v-e8411fa4","v-e4d76e66","v-e16dbd28","v-0f462a55","v-b9c2d34a","v-0dd5d98e","v-e394a960","v-1c105e2a","v-524dd07d","v-39134fda","v-37115d34","v-ad51a322","v-11c61338","v-6e0be950","v-408c76ae","v-9c8a184c","v-17cf18c3","v-2aeb94c0","v-169528f7","v-15eaf20e","v-44446262","v-ae5df412","v-a4f4a4ee","v-26fa744b","v-758e153b","v-caba3efa","v-a2c6403c","v-15123ac3","v-7be0c5c5","v-3e6b0702","v-6f144404","v-ede14f50","v-038a238a","v-5f917da2","v-51ba0f86","v-053efc29","v-426d42b4","v-7f4986f6","v-77e76ddc","v-3f37697a","v-4d98b8f6","v-61ad84b0","v-44ec96d0","v-8feca790","v-0544da66","v-d3b6a002","v-75b582f6","v-05eb9b21","v-cb925366","v-65fed5a9","v-eda53cb6","v-8580ea64","v-82173926","v-7ead87e8","v-19e12e64","v-16777d26","v-7a39bf00","v-806780e0","v-881a2a42","v-84b07904","v-8146c7c6","v-7ddd1688","v-7ff1e5e5","v-6869cf82","v-edfa1c3e","v-444e8e82","v-01fbf701","v-2c74f45a","v-b175398e","v-4901312d","v-783750bb","v-3e024300","v-7b4c535c","v-6628a39c","v-7b52310e","v-5c362ade","v-d68d8200","v-2760f36f","v-7a3b5784","v-442d7e7b","v-e410df86","v-584aef61","v-3372119a","v-3ee5a1d1","v-fd8baddc","v-2822df36","v-535cace4","v-67d5af29","v-458d213f","v-51a91932","v-3dff3951","v-531aadbf","v-1523f743","v-68faa95e","v-50f44bf2","v-26f64b8a","v-1c4e6234","v-7a74ce20","v-1a0953b3","v-c8e33b14","v-073fc5c3","v-e76cd190","v-23892914","v-3678f3e0","v-ff34970a","v-5f46ee29","v-2a5deb4c","v-31055127","v-75f558e2","v-29eadb9e","v-dbc33718","v-136d231a","v-18234947","v-845e9762","v-4f4311a3","v-02071af9","v-83e03870","v-2b6c26fc","v-d2b5ffd4","v-917eeb5c","v-57aa1d68","v-63ce032a","v-1df68cd2","v-09e365e1","v-63a3cb8f","v-e441e7a2","v-212567eb","v-8abf6c9c","v-4a61e36c","v-192873bd","v-1cb2880a","v-0df9788a","v-4e6e7a49","v-70e72ec0","v-9c53d84a","v-0cc211d4","v-35dbe43a","v-939bf7f4","v-432219a8","v-4fda0a50","v-95a2e48c","v-6805b83a","v-6a840a26","v-18f5becc","v-fa02c2e6","v-6f9a0880","v-6789a301","v-41cd53a5","v-9a82766e","v-15bb7bd3","v-3314e6bb","v-5301653a","v-827df3ae","v-f40c5306","v-429e53da","v-bd3feee8","v-70a587ea","v-4f81662d","v-1e2d9eaa","v-97c49406","v-52c50185","v-15c7c82c","v-1c5df1d3","v-3f5d7d5a","v-df376572","v-72755b99","v-1668525e","v-e189f522","v-77b52ea4","v-2d506fa0","v-ca789fae","v-79f5d040","v-1700c95b","v-3e315581","v-5af053ea","v-c5e43a24","v-ff7c9288","v-70059fca","v-e7235c34","v-98b322f4","v-43096280","v-fe71849e","v-15b42f9f","v-7155f962","v-32713fab","v-b61bc5fe","v-6e6759ec","v-b9dfdcac","v-dbf1abde","v-c85546b2","v-50d81d6c","v-67db80ff","v-b610beba","v-0da42f26","v-0faf468c","v-0befbfde","v-703fbedc","v-588edf1b","v-2479638a","v-1c03b80a","v-4899202c","v-01dd35c2","v-cf651cb2","v-24f0391e","v-47173f46","v-cb799b10","v-77e0f31c","v-315ce8e2","v-3f3cb95e","v-504e2eb4","v-23567452","v-7443bfa7","v-abcd1588","v-0d277b0b","v-62b1adbc","v-110262e4","v-7101117c","v-a49aad7c","v-d7518ca6","v-7b4aa45a","v-5517b052","v-7f0bc75b","v-675b1dd5","v-88f16952","v-8587b814","v-821e06d6","v-7eb45598","v-1c4985c6","v-9db00862","v-6ef4e9e0","v-502d46de","v-670668a4","v-215ec3a6","v-373a2774","v-5f92dfbb","v-4f3994ec","v-64b49b30","v-ac829028","v-5c15b7e2","v-f9d5596c","v-2feabdf0","v-4e1b354c","v-28281b72","v-12108c54","v-2a47af17","v-05848cc6","v-5ad3f066","v-cd92eada","v-36bfb854","v-0659a534","v-06cc4f6b","v-31ec3247","v-08b6dbb0","v-74546404","v-6371899c","v-6c1da50c","v-84294778","v-34a08d44","v-72cecc71","v-783883a8","v-66c9f1a6","v-6665310a","v-36278ac8","v-3f65bda0","v-4c1d4f60","v-3c560536","v-876872ba","v-8c5b1a90","v-09c20ff4","v-e1ad699e","v-96982e4a","v-932e7d0c","v-604b10c2","v-48443ca0","v-76b158ca","v-f9914250","v-1b966efe","v-ef542e96","v-ebea7d58","v-e880cc1a","v-e5171adc","v-f5efc878","v-77daaac4","v-7fed26e2","v-99436756","v-037780e0","v-033cbaee","v-c004b79e","v-000087f0","v-0cb7951b","v-1decc628","v-26f515e6","v-7d6856f3","v-49c3f183","v-ff7fd2ec","v-057d6f7c","v-768b6a8d","v-1cd5019a","v-5dfec8e3","v-14aae730","v-6d66a52e","v-3c42b9a8","v-3753d956","v-1a561374","v-1f61ac84","v-ab058a38","v-41151cf4","v-20b84030","v-7bc8de14","v-5b0fec5f","v-151b7b10","v-495b1b82","v-448f8146","v-2b9ef426","v-5a792faa","v-c2aa5004","v-61d5087f","v-69cd4508","v-6274d0d4","v-28741391","v-30ade360","v-0bff3a50","v-36873900","v-ef4200a4","v-414df76c","v-dcc7ce0c","v-f09f22fa","v-58b8a846","v-6b616070","v-c3160f00","v-5b97dc51","v-d51afb96","v-a877b200","v-8515fffe","v-209719ec","v-62dda79b","v-0ab26f57","v-926c3a2a","v-a3c5ff30","v-02f6cb50","v-2b707058","v-24f44b58","v-3f4a6a8c","v-074f1f5b","v-840effd6","v-1b05a52c","v-4c40d619","v-0906aead","v-2dabab05","v-13dd7056","v-821201d6","v-47fd2db2","v-aae0d1cc","v-d02da8bc","v-4ed44f29","v-7be630bb","v-f2e33722","v-6a7521df","v-0e336dfc","v-5d436f67","v-aa563614","v-1aa52699","v-102b7812","v-135edba9","v-6063ff37","v-69de2c8f","v-d27165ae","v-308f7b35","v-e9f43e02","v-4b9d149c","v-896b5f1e","v-53ada9b3","v-690bd11a","v-091b4a7d","v-517e3dfc","v-341199cc","v-9374ca82","v-501c4172","v-1d780b38","v-1331a2fc","v-d0d15838","v-ea34918a","v-6d8096fe","v-0fbed879","v-43154c5b","v-4f0993bc","v-ed6ad178","v-5cd31434","v-631280a5","v-2c848bba","v-7f1c40a5","v-41488cf8","v-4b0be9ad","v-7c7306e3","v-0a3572c0","v-1d0812fd","v-21ff79cf","v-52ee249c","v-96b71298","v-c796c7da","v-4f59b344","v-56daac70","v-19bd4e76","v-7126edee","v-434af5a2","v-2060c73c","v-015be349","v-2b9b6ca2","v-bac30082","v-779a1f7a","v-5c068491","v-041e4908","v-2ca4e71c","v-bfc74c5c","v-bed94cb8","v-3a2a6658","v-1be737d6","v-17903938","v-392996a2","v-fcf961c2","v-dc59fc0a","v-cd8b0f7c","v-26094462","v-430c5169","v-052b696f","v-f9a399ac","v-0405ee87","v-e67a2cf4","v-315833f6","v-5df2755c","v-26bb2f82","v-12e03cba","v-439cccae","v-59a7c044","v-62ae8cb0","v-764e75cc","v-1cc0ba47","v-bc0877a2","v-6bbae1e2","v-9f54ba94","v-2e162ac8","v-3a8ea346","v-9d6a2c94","v-62c284eb","v-61d84292","v-11c01b04","v-1374f3a3","v-1529cc42","v-16dea4e1","v-a39b8410","v-a1b1fbce","v-b3d1d064","v-00409b10","v-2ae46f98","v-585111ff","v-2861a49b","v-c7814346","v-3a5e6193","v-999605fc","v-0cc106d2","v-73efc5e4","v-4febd898","v-6838aa16","v-6d735e26","v-84e07be8","v-8daa1a0e","v-184f4da6"]},"/zh/":{path:"/zh/article/",keys:["v-56a32aab","v-62ced1a6","v-2d0ad528","v-858cfdd6","v-269ae70f","v-2b64e284","v-c1942916","v-65c00218","v-36295574","v-46587e86","v-3fbd497c","v-9ef49308","v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81"]}},encrypted:{"/":{path:"/encrypted/",keys:[]},"/zh/":{path:"/zh/encrypted/",keys:["v-65c00218"]}},slide:{"/":{path:"/slide/",keys:[]},"/zh/":{path:"/zh/slide/",keys:["v-269ae70f"]}},star:{"/":{path:"/star/",keys:[]},"/zh/":{path:"/zh/star/",keys:["v-4b73526d","v-56a32aab","v-7020f420","v-62ced1a6"]}},timeline:{"/":{path:"/timeline/",keys:["v-35285eb9","v-48946111","v-46f8812b","v-4b40d03a","v-204dfcb5","v-d121411e","v-76758d33","v-7b7b747c","v-10591812","v-e4de8f16","v-1c5516a4","v-e7fcc674","v-16cbeb16","v-7559fca0","v-76befe12","v-13fa91a7","v-15b61052","v-4eeecf07","v-a7be60d0","v-5cca2bb4","v-55f6c938","v-58f3d4b0","v-dadd1a02","v-21be9004","v-1e28a188","v-0b82bae4","v-4bfca452","v-55484202","v-40277606","v-dd640a06","v-a4194498","v-be0f4bc2","v-2aaaa1f4","v-0257c685","v-72740c8a","v-2ba863a6","v-55ae513c","v-7435acea","v-8db72a40","v-3747c200","v-528188e2","v-4b860994","v-3d59908d","v-7d2d82d5","v-61f32f65","v-27a7aebc","v-417d8c70","v-5d5862b1","v-238ca5f1","v-4fb9770f","v-8694b6bc","v-1696696a","v-224320df","v-59260c34","v-6b7d4df0","v-b1951358","v-4a7c9956","v-cd98a0ac","v-134b021f","v-74902a86","v-e108a058","v-7bd55f08","v-28d0a65b","v-310c2e4d","v-ff501fce","v-042b12ec","v-a67d5778","v-d8cf28cc","v-252112bc","v-f9b0b4de","v-0689dc16","v-57c14fa1","v-5b2bda71","v-4e118aef","v-91c74a40","v-08870d52","v-7161413e","v-98bd41e4","v-1196072b","v-134adfca","v-14ffb869","v-070b4ce4","v-53bc634a","v-fcbb4718","v-9a479324","v-f95195da","v-f5e7e49c","v-f27e335e","v-ef148220","v-ebaad0e2","v-e8411fa4","v-e4d76e66","v-e16dbd28","v-0f462a55","v-b9c2d34a","v-0dd5d98e","v-e394a960","v-1c105e2a","v-524dd07d","v-39134fda","v-37115d34","v-ad51a322","v-11c61338","v-6e0be950","v-408c76ae","v-9c8a184c","v-17cf18c3","v-2aeb94c0","v-169528f7","v-15eaf20e","v-44446262","v-ae5df412","v-a4f4a4ee","v-26fa744b","v-758e153b","v-caba3efa","v-a2c6403c","v-15123ac3","v-7be0c5c5","v-3e6b0702","v-6f144404","v-ede14f50","v-038a238a","v-5f917da2","v-51ba0f86","v-053efc29","v-426d42b4","v-7f4986f6","v-77e76ddc","v-3f37697a","v-4d98b8f6","v-61ad84b0","v-44ec96d0","v-8feca790","v-0544da66","v-d3b6a002","v-75b582f6","v-05eb9b21","v-cb925366","v-65fed5a9","v-eda53cb6","v-8580ea64","v-82173926","v-7ead87e8","v-19e12e64","v-16777d26","v-7a39bf00","v-806780e0","v-881a2a42","v-84b07904","v-8146c7c6","v-7ddd1688","v-7ff1e5e5","v-6869cf82","v-edfa1c3e","v-444e8e82","v-01fbf701","v-2c74f45a","v-b175398e","v-4901312d","v-783750bb","v-3e024300","v-7b4c535c","v-6628a39c","v-7b52310e","v-5c362ade","v-d68d8200","v-2760f36f","v-7a3b5784","v-442d7e7b","v-e410df86","v-584aef61","v-3372119a","v-3ee5a1d1","v-fd8baddc","v-2822df36","v-535cace4","v-67d5af29","v-458d213f","v-51a91932","v-3dff3951","v-531aadbf","v-1523f743","v-68faa95e","v-50f44bf2","v-26f64b8a","v-1c4e6234","v-7a74ce20","v-1a0953b3","v-c8e33b14","v-073fc5c3","v-e76cd190","v-23892914","v-3678f3e0","v-ff34970a","v-5f46ee29","v-2a5deb4c","v-31055127","v-75f558e2","v-29eadb9e","v-dbc33718","v-136d231a","v-18234947","v-845e9762","v-4f4311a3","v-02071af9","v-83e03870","v-2b6c26fc","v-d2b5ffd4","v-917eeb5c","v-57aa1d68","v-63ce032a","v-1df68cd2","v-09e365e1","v-63a3cb8f","v-e441e7a2","v-212567eb","v-8abf6c9c","v-4a61e36c","v-192873bd","v-1cb2880a","v-0df9788a","v-4e6e7a49","v-70e72ec0","v-9c53d84a","v-0cc211d4","v-35dbe43a","v-939bf7f4","v-432219a8","v-4fda0a50","v-95a2e48c","v-6805b83a","v-6a840a26","v-18f5becc","v-fa02c2e6","v-6f9a0880","v-6789a301","v-41cd53a5","v-9a82766e","v-15bb7bd3","v-3314e6bb","v-5301653a","v-827df3ae","v-f40c5306","v-429e53da","v-bd3feee8","v-70a587ea","v-4f81662d","v-1e2d9eaa","v-97c49406","v-52c50185","v-15c7c82c","v-1c5df1d3","v-3f5d7d5a","v-df376572","v-72755b99","v-1668525e","v-e189f522","v-77b52ea4","v-2d506fa0","v-ca789fae","v-79f5d040","v-1700c95b","v-3e315581","v-5af053ea","v-c5e43a24","v-ff7c9288","v-70059fca","v-e7235c34","v-98b322f4","v-43096280","v-fe71849e","v-15b42f9f","v-7155f962","v-32713fab","v-b61bc5fe","v-6e6759ec","v-b9dfdcac","v-dbf1abde","v-c85546b2","v-50d81d6c","v-67db80ff","v-b610beba","v-0da42f26","v-0faf468c","v-0befbfde","v-703fbedc","v-588edf1b","v-2479638a","v-1c03b80a","v-4899202c","v-01dd35c2","v-cf651cb2","v-24f0391e","v-47173f46","v-cb799b10","v-77e0f31c","v-315ce8e2","v-3f3cb95e","v-504e2eb4","v-23567452","v-7443bfa7","v-abcd1588","v-0d277b0b","v-62b1adbc","v-110262e4","v-7101117c","v-a49aad7c","v-d7518ca6","v-7b4aa45a","v-5517b052","v-7f0bc75b","v-675b1dd5","v-88f16952","v-8587b814","v-821e06d6","v-7eb45598","v-1c4985c6","v-9db00862","v-6ef4e9e0","v-502d46de","v-670668a4","v-215ec3a6","v-373a2774","v-5f92dfbb","v-4f3994ec","v-64b49b30","v-ac829028","v-5c15b7e2","v-f9d5596c","v-2feabdf0","v-4e1b354c","v-28281b72","v-12108c54","v-2a47af17","v-05848cc6","v-5ad3f066","v-cd92eada","v-36bfb854","v-0659a534","v-06cc4f6b","v-31ec3247","v-08b6dbb0","v-74546404","v-6371899c","v-6c1da50c","v-84294778","v-34a08d44","v-72cecc71","v-783883a8","v-66c9f1a6","v-6665310a","v-36278ac8","v-3f65bda0","v-4c1d4f60","v-3c560536","v-876872ba","v-8c5b1a90","v-09c20ff4","v-e1ad699e","v-96982e4a","v-932e7d0c","v-604b10c2","v-48443ca0","v-76b158ca","v-f9914250","v-1b966efe","v-ef542e96","v-ebea7d58","v-e880cc1a","v-e5171adc","v-f5efc878","v-77daaac4","v-7fed26e2","v-99436756","v-037780e0","v-033cbaee","v-c004b79e","v-000087f0","v-0cb7951b","v-1decc628","v-26f515e6","v-7d6856f3","v-49c3f183","v-ff7fd2ec","v-057d6f7c","v-768b6a8d","v-1cd5019a","v-5dfec8e3","v-14aae730","v-6d66a52e","v-3c42b9a8","v-3753d956","v-1a561374","v-1f61ac84","v-ab058a38","v-41151cf4","v-20b84030","v-7bc8de14","v-5b0fec5f","v-151b7b10","v-495b1b82","v-448f8146","v-2b9ef426","v-5a792faa","v-c2aa5004","v-61d5087f","v-69cd4508","v-6274d0d4","v-28741391","v-30ade360","v-0bff3a50","v-36873900","v-ef4200a4","v-414df76c","v-dcc7ce0c","v-f09f22fa","v-58b8a846","v-6b616070","v-c3160f00","v-5b97dc51","v-d51afb96","v-a877b200","v-8515fffe","v-209719ec","v-62dda79b","v-0ab26f57","v-926c3a2a","v-a3c5ff30","v-02f6cb50","v-2b707058","v-24f44b58","v-3f4a6a8c","v-074f1f5b","v-840effd6","v-1b05a52c","v-4c40d619","v-0906aead","v-2dabab05","v-13dd7056","v-821201d6","v-47fd2db2","v-aae0d1cc","v-d02da8bc","v-4ed44f29","v-7be630bb","v-f2e33722","v-6a7521df","v-0e336dfc","v-5d436f67","v-aa563614","v-1aa52699","v-102b7812","v-135edba9","v-6063ff37","v-69de2c8f","v-d27165ae","v-308f7b35","v-e9f43e02","v-4b9d149c","v-896b5f1e","v-53ada9b3","v-690bd11a","v-091b4a7d","v-517e3dfc","v-341199cc","v-9374ca82","v-501c4172","v-1d780b38","v-1331a2fc","v-d0d15838","v-ea34918a","v-6d8096fe","v-0fbed879","v-43154c5b","v-4f0993bc","v-ed6ad178","v-5cd31434","v-631280a5","v-2c848bba","v-7f1c40a5","v-41488cf8","v-4b0be9ad","v-7c7306e3","v-0a3572c0","v-1d0812fd","v-21ff79cf","v-52ee249c","v-96b71298","v-c796c7da","v-4f59b344","v-56daac70","v-19bd4e76","v-7126edee","v-434af5a2","v-2060c73c","v-015be349","v-2b9b6ca2","v-bac30082","v-779a1f7a","v-5c068491","v-041e4908","v-2ca4e71c","v-bfc74c5c","v-bed94cb8","v-3a2a6658","v-1be737d6","v-17903938","v-392996a2","v-fcf961c2","v-dc59fc0a","v-cd8b0f7c","v-26094462","v-430c5169","v-052b696f","v-f9a399ac","v-0405ee87","v-e67a2cf4","v-315833f6","v-5df2755c","v-26bb2f82","v-12e03cba","v-439cccae","v-59a7c044","v-62ae8cb0","v-764e75cc","v-1cc0ba47","v-bc0877a2","v-6bbae1e2","v-9f54ba94","v-2e162ac8","v-3a8ea346","v-9d6a2c94","v-62c284eb","v-61d84292","v-11c01b04","v-1374f3a3","v-1529cc42","v-16dea4e1","v-a39b8410","v-a1b1fbce","v-b3d1d064","v-00409b10","v-2ae46f98","v-585111ff","v-2861a49b","v-c7814346","v-3a5e6193","v-999605fc","v-0cc106d2","v-73efc5e4","v-4febd898","v-6838aa16","v-6d735e26","v-84e07be8","v-8daa1a0e","v-184f4da6"]},"/zh/":{path:"/zh/timeline/",keys:["v-2d0ad528","v-858cfdd6","v-269ae70f","v-2b64e284","v-c1942916","v-65c00218","v-36295574","v-56a32aab","v-46587e86","v-3fbd497c","v-9ef49308","v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81","v-62ced1a6"]}}},_=ref(categoryMap),B=(b="")=>{const $=useRouter(),j=useRoute(),Z=useRouteLocale();return computed(()=>{var U;const Y=b||((U=usePageFrontmatter().value.blog)==null?void 0:U.key)||"",ee=$.getRoutes();if(!_.value[Y])throw new Error(`useBlogCategory: ${b?`key ${b} is invalid`:"can not bind to an existing key on non blog pages"}`);const ae=_.value[Y][Z.value],ne={path:ae.path,map:{}};for(const se in ae.map){const ie=ae.map[se];ne.map[se]={path:ie.path,items:[]};for(const oe of ie.keys){const le=ee.find(({name:re})=>re===oe);if(le){const re=ut($,le.path);ne.map[se].items.push({path:re.path,info:re.meta})}}j.path===ie.path&&(ne.currentItems=ne.map[se].items)}return ne})},l$1=ref(typeMap),T=(b="")=>{const $=useRouter(),j=useRouteLocale();return computed(()=>{var Z;const U=b||((Z=usePageFrontmatter().value.blog)==null?void 0:Z.key)||"";if(!l$1.value[U])throw new Error(`useBlogType: ${b?`key ${b} is invalid`:"can not bind to an existing key on non blog pages"}`);const Y=$.getRoutes(),ee=l$1.value[U][j.value],ae={path:ee.path,items:[]};for(const ne of ee.keys){const se=Y.find(({name:ie})=>ie===ne);if(se){const ie=ut($,se.path);ae.items.push({path:ie.path,info:ie.meta})}}return ae})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const b=inject(categoryMapSymbol);if(!b)throw new Error("useCategoryMap() is called without provider.");return b},setupCategoryMap=()=>{const b=B("category");provide(categoryMapSymbol,b)},useBlogOptions=()=>{const b=useThemeData(),$=useThemeLocaleData();return computed(()=>({...b.value.blog,...$.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const b=inject(tagMapSymbol);if(!b)throw new Error("useTagMap() is called without provider.");return b},setupTagMap=()=>{const b=B("tag");provide(tagMapSymbol,b)},useArticleAuthor=b=>{const $=useThemeLocaleData();return computed(()=>{const{["a"]:j}=b.value;return j?Pt(j):j===!1?[]:Pt($.value.author,!1)})},useArticleCategory=b=>{const $=useCategoryMap();return computed(()=>Rt(b.value.c).map(j=>({name:j,path:$.value.map[j].path})))},useArticleTag=b=>{const $=useTagMap();return computed(()=>Bt(b.value.g).map(j=>({name:j,path:$.value.map[j].path})))},useArticleDate=b=>computed(()=>{const{["d"]:$}=b.value;return $?Q$1($):null}),useArticleInfo=b=>{const $=toRef(b,"info"),j=useBlogOptions(),Z=useArticleAuthor($),U=useArticleCategory($),Y=useArticleTag($),ee=useArticleDate($),ae=computed(()=>({author:Z.value,category:U.value,date:ee.value,localizedDate:$.value.l||"",tag:Y.value,isOriginal:$.value.o||!1,readingTime:$.value.r||null,pageview:b.path})),ne=computed(()=>j.value.articleInfo);return{info:ae,items:ne}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const b=inject(articlesSymbol);if(!b)throw new Error("useArticles() is called without provider.");return b},setupArticles=()=>{const b=T("article");provide(articlesSymbol,b)},encryptedArticlesSymbol=Symbol.for("encryptedArticles"),useEncryptedArticles=()=>{const b=inject(encryptedArticlesSymbol);if(!b)throw new Error("useEncryptedArticles() is called without provider.");return b},setupEncryptedArticles=()=>{const b=T("encrypted");provide(encryptedArticlesSymbol,b)},slidesSymbol=Symbol.for("slides"),useSlides=()=>{const b=inject(slidesSymbol);if(!b)throw new Error("useSlides() is called without provider.");return b},setupSlides=()=>{const b=T("slide");provide(slidesSymbol,b)},starsSymbol=Symbol.for("stars"),useStars=()=>{const b=inject(starsSymbol);if(!b)throw new Error("useStars() is called without provider.");return b},setupStars=()=>{const b=T("star");provide(starsSymbol,b)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const b=inject(timelinesSymbol);if(!b)throw new Error("useTimelines() is called without provider.");return b},setupTimelines=()=>{const b=T("timeline"),$=computed(()=>{const j=[];return b.value.items.forEach(({info:Z,path:U})=>{var ne;const{year:Y,month:ee,day:ae}=((ne=Q$1(Z.d))==null?void 0:ne.info)||{};Y&&ee&&ae&&((!j[0]||j[0].year!==Y)&&j.unshift({year:Y,items:[]}),j[0].items.push({date:`${ee}/${ae}`,info:Z,path:U}))}),{...b.value,config:j.reverse()}});provide(timelinesSymbol,$)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupEncryptedArticles(),setupSlides(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const b=useBlogOptions(),$=usePure(),j=computed(()=>{const Z=b.value.medias;return Z?Object.entries(Z).map(([U,Y])=>({name:U,icon:icons[U],url:Y})):[]});return()=>j.value.length?h$6("div",{class:"social-media-wrapper"},j.value.map(({name:Z,icon:U,url:Y})=>h$6("a",{class:"social-media",href:Y,rel:"noopener noreferrer",target:"_blank","aria-label":Z,...$.value?{}:{"data-balloon-pos":"up"},innerHTML:U}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const b=useBlogOptions(),$=useSiteLocaleData(),j=useThemeLocaleData(),Z=useArticles(),U=useCategoryMap(),Y=useTagMap(),ee=useTimelines(),ae=useNavigate(),ne=computed(()=>{var le;return b.value.name||((le=Pt(j.value.author)[0])==null?void 0:le.name)||$.value.title}),se=computed(()=>b.value.avatar||j.value.logo),ie=computed(()=>j.value.blogLocales),oe=computed(()=>b.value.intro);return()=>h$6("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$6("div",{class:"blogger",...oe.value?{style:{cursor:"pointer"},"aria-label":ie.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>ae(oe.value)}:{}},[se.value?h$6("img",{class:["blogger-avatar",{round:b.value.roundAvatar}],src:withBase(se.value),property:"image",alt:"Blogger Avatar"}):null,ne.value?h$6("div",{class:"blogger-name",property:"name"},ne.value):null,b.value.description?h$6("div",{class:"blogger-description",innerHTML:b.value.description}):null,oe.value?h$6("meta",{property:"url",content:withBase(oe.value)}):null]),h$6("div",{class:"num-wrapper"},[h$6("div",{onClick:()=>ae(Z.value.path)},[h$6("div",{class:"num"},Z.value.items.length),h$6("div",ie.value.article)]),h$6("div",{onClick:()=>ae(U.value.path)},[h$6("div",{class:"num"},Object.keys(U.value.map).length),h$6("div",ie.value.category)]),h$6("div",{onClick:()=>ae(Y.value.path)},[h$6("div",{class:"num"},Object.keys(Y.value.map).length),h$6("div",ie.value.tag)]),h$6("div",{onClick:()=>ae(ee.value.path)},[h$6("div",{class:"num"},ee.value.items.length),h$6("div",ie.value.timeline)])]),h$6(SocialMedia)])}}),CategoryIcon=()=>h$6(st,{name:"category"},()=>h$6("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$6(st,{name:"tag"},()=>h$6("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$6(st,{name:"timeline"},()=>h$6("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$6(st,{name:"slides"},()=>h$6("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$6(st,{name:"sticky"},()=>[h$6("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$6(st,{name:"article"},()=>h$6("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$6(st,{name:"book"},()=>h$6("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$6(st,{name:"link"},()=>h$6("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$6(st,{name:"project"},()=>h$6("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$6(st,{name:"friend"},()=>h$6("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$6(st,{name:"slide-down"},()=>h$6("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$6("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$6(st,{name:"lock"},()=>h$6("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(b){const $=useRouter(),j=toRef(b,"info"),{info:Z,items:U}=useArticleInfo(b);return()=>h$6("div",{class:"article-item"},h$6("article",{class:"article",vocab:"https://schema.org/",typeof:"Article",onClick:()=>{$.push(b.path)}},[j.value.u?h$6(StickyIcon):null,h$6(RouterLink,{to:b.path},()=>[h$6("header",{class:"title"},[j.value.n?h$6(LockIcon):null,j.value.y==="s"?h$6(SlideIcon):null,h$6("span",{property:"headline"},j.value.title),j.value.v?h$6("meta",{property:"image",content:withBase(j.value.v)}):null])]),j.value.e?h$6("div",{class:"excerpt",innerHTML:j.value.e}):null,h$6("hr",{class:"hr"}),h$6(PageInfo,{info:Z.value,...U.value?{items:U.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:b=>!0},setup(b,{emit:$}){let j;const Z=useThemeLocaleData(),U=ref(""),Y=computed(()=>Z.value.paginationLocales),ee=computed(()=>Math.ceil(b.total/b.perPage)),ae=computed(()=>Boolean(ee.value)&&ee.value!==1),ne=computed(()=>ee.value<7?!1:b.current>4),se=computed(()=>ee.value<7?!1:b.current<ee.value-3),ie=computed(()=>{const{current:re}=b;let ce=1,pe=ee.value;const ue=[];ee.value>=7&&(re<=4&&re<ee.value-3?(ce=1,pe=5):re>4&&re>=ee.value-3?(pe=ee.value,ce=ee.value-4):ee.value>7&&(ce=re-2,pe=re+2));for(let ve=ce;ve<=pe;ve++)ue.push(ve);return ue}),oe=re=>$("updateCurrentPage",re),le=re=>{const ce=parseInt(re);ce<=ee.value&&ce>0?oe(ce):j.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${Y.value.errorText.replace(/\$page/g,ee.value.toString())}`)};return onMounted(()=>{j=new kt}),()=>h$6("div",{class:"pagination-wrapper"},ae.value?h$6("div",{class:"pagination-list"},[h$6("div",{class:"page-number"},[b.current>1?h$6("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>oe(b.current-1)},Y.value.prev):null,...ne.value?[h$6("div",{role:"navigation",onClick:()=>oe(1)},1),h$6("div",{class:"ellipsis"},"...")]:[],...ie.value.map(re=>h$6("div",{key:re,class:{active:b.current===re},role:"navigation",onClick:()=>oe(re)},re)),...se.value?[h$6("div",{class:"ellipsis"},"..."),h$6("div",{role:"navigation",onClick:()=>oe(ee.value)},ee.value)]:[],b.current<ee.value?h$6("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>oe(b.current+1)},Y.value.next):null]),h$6("div",{class:"navigate-wrapper"},[h$6("label",{for:"navigation-text"},`${Y.value.navigate}: `),h$6("input",{id:"navigation-text",value:U.value,onInput:({target:re})=>{U.value=re.value},onKeydown:re=>{re.key==="Enter"&&(re.preventDefault(),le(U.value))}}),h$6("button",{class:"navigate",role:"navigation",title:Y.value.action,onClick:()=>le(U.value)},Y.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(b){const $=useRoute(),j=useRouter(),Z=useBlogOptions(),U=ref(1),Y=computed(()=>Z.value.articlePerPage||10),ee=computed(()=>b.items.slice((U.value-1)*Y.value,U.value*Y.value)),ae=ne=>{U.value=ne;const se={...$.query};se.page===ne.toString()||ne===1&&!se.page||(ne===1?delete se.page:se.page=ne.toString(),j.push({path:$.path,query:se}))};return watch(U,()=>{const ne=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,ne)},100)}),onMounted(()=>{const{page:ne}=$.query;ae(ne?Number(ne):1)}),()=>h$6("div",{id:"article-list",class:"article-wrapper"},ee.value.length?[...ee.value.map(({info:ne,path:se},ie)=>h$6(DropTransition,{appear:!0,delay:ie*.04},()=>h$6(ArticleItem,{key:se,info:ne,path:se}))),h$6(Pagination,{current:U.value,perPage:Y.value,total:b.items.length,onUpdateCurrentPage:ae})]:h$6(EmptyIcon))}}),defaultHeroBgImagePath="/blog/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const b=usePageHeadTitle(),$=usePageFrontmatter(),j=ref(),Z=computed(()=>$.value.heroImage||null),U=computed(()=>$.value.heroFullScreen||!1),Y=computed(()=>({...{maxHeight:"180px",margin:$.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...$.value.heroImageStyle})),ee=computed(()=>$.value.bgImage?withBase($.value.bgImage):$.value.bgImage??defaultHeroBgImagePath),ae=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...$.value.bgImageStyle}));return()=>$.value.hero!==!1?h$6("div",{ref:j,class:["blog-hero",{fullscreen:U.value}],style:ae.value},[ee.value?h$6("div",{class:"mask",style:{background:`url(${ee.value}) center/cover no-repeat`}}):null,h$6(DropTransition,{appear:!0,delay:.04},()=>Z.value?h$6("img",{class:"hero-image",style:Y.value,src:withBase(Z.value),alt:$.value.heroAlt||"hero image"}):null),h$6(DropTransition,{appear:!0,delay:.08},()=>$.value.heroText!==!1?h$6("h1",$.value.heroText||b.value):null),h$6(DropTransition,{appear:!0,delay:.12},()=>$.value.tagline?h$6("p",{class:"description",innerHTML:$.value.tagline}):null),U.value?h$6("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:j.value.clientHeight,behavior:"smooth"})}},[h$6(SlideDownIcon),h$6(SlideDownIcon)]):null]):null}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const b=useRoute(),$=useCategoryMap();return()=>h$6("ul",{class:"category-list-wrapper"},Object.entries($.value.map).map(([j,{path:Z,items:U}])=>h$6("li",{class:["category",`category${Ut(j,9)}`,{active:Z===b.path}]},h$6(RouterLink,{to:Z},()=>[j,h$6("span",{class:"category-num"},U.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const b=usePageFrontmatter(),$=useTagMap(),j=Z=>{var U;return Z===((U=b.value.blog)==null?void 0:U.name)};return()=>h$6("ul",{class:"tag-list-wrapper"},Object.entries($.value.map).map(([Z,{path:U,items:Y}])=>h$6("li",{class:["tag",`tag${Ut(Z,9)}`,{active:j(Z)}]},h$6(RouterLink,{to:U},()=>[Z,h$6("span",{class:"tag-num"},Y.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const b=useThemeLocaleData(),$=useTimelines(),j=useNavigate(),Z=computed(()=>b.value.blogLocales.timeline);return()=>h$6("div",{class:"timeline-list-wrapper"},[h$6("div",{class:"timeline-list-title",onClick:()=>j($.value.path)},[h$6(TimelineIcon),h$6("span",{class:"num"},$.value.items.length),Z.value]),h$6("hr"),h$6("div",{class:"timeline-content"},h$6("ul",{class:"timeline-list"},$.value.config.map(({year:U,items:Y},ee)=>h$6(DropTransition,{appear:!0,delay:.08*(ee+1)},()=>h$6("li",[h$6("h3",{class:"timeline-year"},U),h$6("ul",{class:"timeline-year-wrapper"},Y.map(({date:ae,info:ne,path:se})=>h$6("li",{class:"timeline-item"},[h$6("span",{class:"timeline-date"},ae),h$6(RouterLink,{class:"timeline-title",to:se},()=>ne.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const b=useThemeLocaleData(),$=useArticles(),j=useCategoryMap(),Z=computed(()=>Object.keys(j.value.map).length),U=useStars(),Y=useTagMap(),ee=computed(()=>Object.keys(Y.value.map).length),ae=useNavigate(),ne=ref("article"),se=computed(()=>b.value.blogLocales),ie=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$6("div",{class:"blog-info-list"},[h$6("div",{class:"blog-type-wrapper"},ie.map(([oe,le])=>h$6("button",{class:"blog-type-button",onClick:()=>{ne.value=oe}},h$6("div",{class:["icon-wrapper",{active:ne.value===oe}],"aria-label":se.value[oe],"data-balloon-pos":"up"},h$6(le))))),ne.value==="article"?h$6(DropTransition,()=>[h$6("div",{class:"sticky-article-wrapper"},[h$6("div",{class:"title",onClick:()=>ae($.value.path)},[h$6(ArticleIcon),h$6("span",{class:"num"},$.value.items.length),se.value.article]),h$6("hr"),h$6("ul",{class:"sticky-article-list"},U.value.items.map(({info:oe,path:le},re)=>h$6(DropTransition,{appear:!0,delay:.08*(re+1)},()=>h$6("li",{class:"sticky-article"},h$6(RouterLink,{to:le},()=>oe.title)))))])]):null,ne.value==="category"?h$6(DropTransition,()=>[h$6("div",{class:"category-wrapper"},[Z.value?h$6("div",{class:"title",onClick:()=>ae(j.value.path)},[h$6(CategoryIcon),h$6("span",{class:"num"},Z.value),se.value.category]):null,h$6("hr"),h$6(DropTransition,{delay:.04},()=>h$6(CategoryList))])]):null,ne.value==="tag"?h$6(DropTransition,()=>[h$6("div",{class:"tag-wrapper"},[ee.value?h$6("div",{class:"title",onClick:()=>ae(Y.value.path)},[h$6(TagIcon),h$6("span",{class:"num"},ee.value),se.value.tag]):null,h$6("hr"),h$6(DropTransition,{delay:.04},()=>h$6(TagList))])]):null,ne.value==="timeline"?h$6(DropTransition,()=>h$6(TimelineList)):null])}}),infoPanel="",InfoPanel=()=>h$6("aside",{class:"blog-info-wrapper"},[h$6(DropTransition,()=>h$6(BloggerInfo)),h$6(DropTransition,{delay:.04},()=>h$6(InfoList))]);InfoPanel.displayName="InfoPanel";const projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const b=usePageFrontmatter(),$=usePure(),j=useNavigate(),Z=(U="",Y="icon")=>AVAILABLE_PROJECT_TYPES.includes(U)?h$6(resolveComponent(`${U}-icon`)):U.match(/^https?:\/\//)?h$6("img",{src:U,alt:Y,class:"image"}):U.startsWith("/")?h$6("img",{src:withBase(U),alt:Y,class:"image"}):h$6(Icon,{icon:U});return()=>{var U;return(U=b.value.projects)!=null&&U.length?h$6("div",{class:"project-panel"},b.value.projects.map(({icon:Y,link:ee,name:ae,desc:ne},se)=>h$6("div",{class:["project",{[`project${se%9}`]:!$.value}],onClick:()=>j(ee)},[Z(Y,ae),h$6("div",{class:"name"},ae),h$6("div",{class:"desc"},ne)]))):null}}}),home="",BlogHome=defineComponent({name:"BlogHome",setup(){const b=useArticles();return()=>h$6("div",{class:"page blog"},[h$6(BlogHero),h$6("div",{class:"blog-page-wrapper"},[h$6("main",{class:"blog-home",id:"main-content"},[h$6(DropTransition,{appear:!0,delay:.16},()=>h$6(ProjectPanel)),h$6(DropTransition,{appear:!0,delay:.24},()=>h$6(ArticleList,{items:b.value.items}))]),h$6(DropTransition,{appear:!0,delay:.16},()=>h$6(InfoPanel))]),h$6(DropTransition,{appear:!0,delay:.28},()=>h$6(MarkdownContent))])}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const b=useThemeLocaleData(),$=useRoute(),j=useArticles(),Z=useEncryptedArticles(),U=useSlides(),Y=useStars(),ee=computed(()=>{const ae=b.value.blogLocales;return[{text:ae.all,path:j.value.path},{text:ae.star,path:Y.value.path},{text:ae.slides,path:U.value.path},{text:ae.encrypt,path:Z.value.path}]});return()=>h$6("ul",{class:"article-type-wrapper"},ee.value.map(ae=>h$6("li",{class:["article-type",{active:ae.path===$.path}]},h$6(RouterLink,{to:ae.path},()=>ae.text))))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const b=useBlogOptions(),$=useThemeLocaleData(),j=useTimelines(),Z=computed(()=>b.value.timeline||$.value.blogLocales.timelineTitle),U=computed(()=>j.value.config.map(({year:Y})=>({title:Y.toString(),level:2,slug:Y.toString(),children:[]})));return()=>h$6("div",{class:"timeline-wrapper"},h$6("ul",{class:"timeline-content"},[h$6(DropTransition,()=>h$6("li",{class:"motto"},Z.value)),h$6(TOC,{items:U.value}),...j.value.config.map(({year:Y,items:ee},ae)=>h$6(DropTransition,{appear:!0,delay:.08*(ae+1),type:"group"},()=>[h$6("h3",{key:"title",id:Y,class:"timeline-year-title"},h$6("span",Y)),h$6("li",{key:"content",class:"timeline-year-list"},[h$6("ul",{class:"timeline-year-wrapper"},ee.map(({date:ne,info:se,path:ie})=>h$6("li",{class:"timeline-item"},[h$6("span",{class:"timeline-date"},ne),h$6(RouterLink,{class:"timeline-title",to:ie},()=>se.title)])))])]))]))}}),page="",BlogPage=defineComponent({name:"BlogPage",components:{ArticleType,CategoryList,TagList},setup(){const b=usePageFrontmatter(),$=useRoute(),j=useArticles(),Z=useCategoryMap(),U=useEncryptedArticles(),Y=useSlides(),ee=useStars(),ae=useTagMap(),ne=computed(()=>{const{key:ie}=b.value.blog||{};return ie==="category"?"CategoryList":ie==="tag"?"TagList":ie==="timeline"?"":"ArticleType"}),se=computed(()=>{const{name:ie="",key:oe=""}=b.value.blog||{};return oe==="encrypted"?U.value.items:oe==="star"?ee.value.items:oe==="slide"?Y.value.items:oe==="timeline"?[]:oe==="category"?ie?Z.value.map[ie].items:[]:oe==="tag"?ie?ae.value.map[ie].items:[]:j.value.items});return()=>h$6("div",{class:"page blog"},h$6("div",{class:"blog-page-wrapper"},[h$6("main",{class:"blog-main",id:"main-content"},[h$6(DropTransition,()=>ne.value?h$6(resolveComponent(ne.value)):null),h$6(DropTransition,{appear:!0,delay:.24},()=>{var ie;return((ie=b.value.blog)==null?void 0:ie.key)==="timeline"?h$6(TimelineItems):h$6(ArticleList,{key:$.path,items:se.value})})]),h$6(DropTransition,{delay:.16},()=>h$6(InfoPanel))]))}}),Blog=defineComponent({name:"Blog",setup(){const b=usePageFrontmatter(),$=useMobile();return()=>[h$6(SkipLink),h$6(resolveComponent("CommonWrapper"),{noSidebar:!0},{default:()=>b.value.home?h$6(BlogHome):h$6(BlogPage),navScreenBottom:()=>h$6(BloggerInfo),...$.value?{sidebar:()=>h$6(InfoList)}:{}})]}}),layout$1="",passwordModal="",PasswordModal=defineComponent({name:"PasswordModal",props:{full:Boolean},emits:{verify:(b,$)=>!0},setup(b,{emit:$}){const j=usePageFrontmatter(),Z=useThemeLocaleData(),U=ref(""),Y=ref(!1),ee=ref(!1),ae=computed(()=>Z.value.encryptLocales);let ne=null;const se=()=>{ne&&clearTimeout(ne),Y.value=!1,$("verify",U.value,ee.value),nextTick().then(()=>{Y.value=!0,ne=setTimeout(()=>{Y.value=!1},1e3)})};return()=>h$6("div",{class:["password-layer",{expand:b.full||j.value.home}]},h$6("div",{class:"password-modal"},[h$6("div",{class:["hint",{tried:Y.value}]},Y.value?ae.value.errorHint:h$6(LockIcon,{"aria-label":ae.value.iconLabel})),h$6("div",{class:"password"},[h$6("input",{type:"password",value:U.value,placeholder:ae.value.placeholder,onInput:({target:ie})=>{U.value=ie.value},onKeydown:({key:ie})=>{ie==="Enter"&&se()}})]),h$6("div",{class:"remember-password"},[h$6("input",{type:"checkbox",value:ee.value,onChange:()=>ee.value=!ee.value}),ae.value.remember]),h$6("button",{class:"submit",onClick:()=>se()},"OK")]))}}),r="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],e=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],n=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],o=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],s=(b,$)=>{if($<=0||$>b.length)throw Error(`Illegal len: ${$}`);let j,Z,U=0;const Y=[];for(;U<$;){if(j=255&b[U++],Y.push(r[j>>2&63]),j=(3&j)<<4,U>=$){Y.push(r[63&j]);break}if(Z=255&b[U++],j|=Z>>4&15,Y.push(r[63&j]),j=(15&Z)<<2,U>=$){Y.push(r[63&j]);break}Z=255&b[U++],j|=Z>>6&3,Y.push(r[63&j]),Y.push(r[63&Z])}return Y.join("")},l=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,f$1=(b,$,j,Z)=>{let U,Y=b[$],ee=b[$+1];return Y^=j[0],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[1],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[2],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[3],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[4],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[5],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[6],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[7],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[8],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[9],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[10],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[11],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[12],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[13],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[14],U=Z[Y>>>24],U+=Z[256|Y>>16&255],U^=Z[512|Y>>8&255],U+=Z[768|255&Y],ee^=U^j[15],U=Z[ee>>>24],U+=Z[256|ee>>16&255],U^=Z[512|ee>>8&255],U+=Z[768|255&ee],Y^=U^j[16],b[$]=ee^j[17],b[$+1]=Y,b},i=(b,$)=>{let j=0;for(let Z=0;Z<4;++Z)j=j<<8|255&b[$],$=($+1)%b.length;return{key:j,offp:$}},u=(b,$,j)=>{const Z=$.length,U=j.length;let Y,ee=0,ae=[0,0];for(let ne=0;ne<Z;ne++)Y=i(b,ee),ee=Y.offp,$[ne]=$[ne]^Y.key;for(let ne=0;ne<Z;ne+=2)ae=f$1(ae,0,$,j),$[ne]=ae[0],$[ne+1]=ae[1];for(let ne=0;ne<U;ne+=2)ae=f$1(ae,0,$,j),j[ne]=ae[0],j[ne+1]=ae[1]},h$1=(b,$,j,Z,U)=>{const Y=o.slice(),ee=Y.length;if(j<4||j>31){const le=new Error(`Illegal number of rounds (4-31): ${j}`);if(Z===!1)return Promise.reject(le);throw le}if($.length!==16){const le=new Error(`Illegal salt length: ${$.length} != 16`);if(Z===!1)return Promise.reject(le);throw le}let ae,ne;j=1<<j>>>0;let se,ie=0;Int32Array?(ae=new Int32Array(e),ne=new Int32Array(n)):(ae=e.slice(),ne=n.slice()),((le,re,ce,pe)=>{const ue=ce.length,ve=pe.length;let de,_e=0,be=[0,0];for(let ge=0;ge<ue;ge++)de=i(re,_e),_e=de.offp,ce[ge]=ce[ge]^de.key;_e=0;for(let ge=0;ge<ue;ge+=2)de=i(le,_e),_e=de.offp,be[0]^=de.key,de=i(le,_e),_e=de.offp,be[1]^=de.key,be=f$1(be,0,ce,pe),ce[ge]=be[0],ce[ge+1]=be[1];for(let ge=0;ge<ve;ge+=2)de=i(le,_e),_e=de.offp,be[0]^=de.key,de=i(le,_e),_e=de.offp,be[1]^=de.key,be=f$1(be,0,ce,pe),pe[ge]=be[0],pe[ge+1]=be[1]})($,b,ae,ne);const oe=()=>{if(U&&U(ie/j),!(ie<j)){for(ie=0;ie<64;ie++)for(se=0;se<ee>>1;se++)f$1(Y,se<<1,ae,ne);const le=[];for(ie=0;ie<ee;ie++)le.push((Y[ie]>>24&255)>>>0),le.push((Y[ie]>>16&255)>>>0),le.push((Y[ie]>>8&255)>>>0),le.push((255&Y[ie])>>>0);return Z===!1?Promise.resolve(le):le}{const le=Date.now();for(;ie<j&&(ie+=1,u(b,ae,ne),u($,ae,ne),!(Date.now()-le>100)););}if(Z===!1)return new Promise(le=>l(()=>{oe().then(le)}))};if(Z===!1)return oe();{let le;for(;;)if((le=oe())!==void 0)return le||[]}},p=(b=10)=>{if(typeof b!="number")throw Error("Illegal arguments: "+typeof b);b<4?b=4:b>31&&(b=31);const $=[];return $.push("$2a$"),b<10&&$.push("0"),$.push(b.toString()),$.push("$"),$.push(s((j=>{try{let Z;return(self.crypto||self.msCrypto).getRandomValues(Z=new Uint32Array(j)),Array.prototype.slice.call(Z)}catch{throw Error("WebCryptoAPI is not available")}})(16),16)),$.join("")};function g(b,$,j,Z){if(typeof b!="string"||typeof $!="string"){const oe=new Error("Invalid string / salt: Not a string");if(j===!1)return Promise.reject(oe);throw oe}let U,Y;if($.charAt(0)!=="$"||$.charAt(1)!=="2"){const oe=new Error("Invalid salt version: "+$.substring(0,2));if(j===!1)return Promise.reject(oe);throw oe}if($.charAt(2)==="$")U=String.fromCharCode(0),Y=3;else{if(U=$.charAt(2),U!=="a"&&U!=="b"&&U!=="y"||$.charAt(3)!=="$"){const oe=Error("Invalid salt revision: "+$.substring(2,4));if(j===!1)return Promise.reject(oe);throw oe}Y=4}if($.charAt(Y+2)>"$"){const oe=new Error("Missing salt rounds");if(j===!1)return Promise.reject(oe);throw oe}const ee=10*parseInt($.substring(Y,Y+1),10)+parseInt($.substring(Y+1,Y+2),10),ae=$.substring(Y+3,Y+25),ne=(oe=>{const le=[];let re=0;var ce;return ce=pe=>{le.push(pe)},((pe,ue)=>{let ve,de=null;for(;(ve=de!==null?de:pe())!==null;)ve>=55296&&ve<=57343&&(de=pe())!==null&&de>=56320&&de<=57343?(ue(1024*(ve-55296)+de-56320+65536),de=null):ue(ve);de!==null&&ue(de)})(()=>re>=oe.length?null:oe.charCodeAt(re++),function(pe){((ue,ve)=>{let de=null;for(typeof ue=="number"&&(de=ue,ue=()=>null);de!==null||(de=ue())!==null;)de<128?ve(127&de):de<2048?(ve(de>>6&31|192),ve(63&de|128)):de<65536?(ve(de>>12&15|224),ve(de>>6&63|128),ve(63&de|128)):(ve(de>>18&7|240),ve(de>>12&63|128),ve(de>>6&63|128),ve(63&de|128)),de=null})(pe,ce)}),le})(b+=U>="a"?"\0":""),se=((oe,le)=>{if(le<=0)throw Error(`Illegal len: ${le}`);const re=oe.length;let ce,pe,ue,ve,de,_e,be=0,ge=0;const fe=[];for(;be<re-1&&ge<le&&(_e=oe.charCodeAt(be++),ce=_e<t.length?t[_e]:-1,_e=oe.charCodeAt(be++),pe=_e<t.length?t[_e]:-1,ce!=-1&&pe!=-1)&&(de=ce<<2>>>0,de|=(48&pe)>>4,fe.push(String.fromCharCode(de)),!(++ge>=le||be>=re))&&(_e=oe.charCodeAt(be++),ue=_e<t.length?t[_e]:-1,ue!=-1)&&(de=(15&pe)<<4>>>0,de|=(60&ue)>>2,fe.push(String.fromCharCode(de)),!(++ge>=le||be>=re));)_e=oe.charCodeAt(be++),ve=_e<t.length?t[_e]:-1,de=(3&ue)<<6>>>0,de|=ve,fe.push(String.fromCharCode(de)),++ge;return fe.map(me=>me.charCodeAt(0))})(ae,16),ie=oe=>{const le=[];return le.push("$2"),U>="a"&&le.push(U),le.push("$"),ee<10&&le.push("0"),le.push(ee.toString()),le.push("$"),le.push(s(se,se.length)),le.push(s(oe,4*o.length-1)),le.join("")};return j===!1?h$1(ne,se,ee,!1,Z).then(oe=>ie(oe)):ie(h$1(ne,se,ee,!0,Z))}const c=(b,$=10)=>{if(typeof $=="number"&&($=p($)),typeof b!="string"||typeof $!="string")throw Error("Illegal arguments: "+typeof b+", "+typeof $);return g(b,$,!0)},m=(b,$)=>{if(typeof b!="string"||typeof $!="string")throw Error("Illegal arguments: "+typeof b+", "+typeof $);return $.length===60&&c(b,$.substring(0,$.length-31))===$},useEncryptData=()=>{const b=useThemeData();return computed(()=>b.value.encrypt||{})},STORAGE_KEY$1="VUEPRESS_HOPE_GLOBAL_TOKEN",useGlobalEncrypt=()=>{const b=useEncryptData(),$=useStorage(STORAGE_KEY$1,""),j=useSessionStorage(STORAGE_KEY$1,"");return{isGlobalEncrypted:computed(()=>b.value.global&&b.value.admin?$.value?b.value.admin.every(Y=>!m($.value,Y)):j.value?b.value.admin.every(Y=>!m(j.value,Y)):!0:!1),validateGlobalToken:(Y,ee=!1)=>{(ee?$:j).value=Y}}},checkToken=(b="",$)=>Boolean(b)&&m(b,$),STORAGE_KEY="VUEPRESS_HOPE_PATH_TOKEN",usePathEncrypt=()=>{const b=useRoute(),$=useEncryptData(),j=useStorage(STORAGE_KEY,{}),Z=useSessionStorage(STORAGE_KEY,{}),U=ne=>typeof $.value.config=="object"?Object.keys($.value.config).filter(se=>decodeURI(ne).startsWith(se)).sort((se,ie)=>ie.length-se.length):[],Y=ne=>{const se=U(ne);if(se.length!==0){const{config:ie={}}=$.value;return!se.some(oe=>j.value[oe]&&ie[oe].some(le=>checkToken(j.value[oe],le))||Z.value[oe]&&ie[oe].some(le=>checkToken(Z.value[oe],le)))}return!1};return{isEncrypted:computed(()=>Y(b.path)),getPathEncryptStatus:Y,validateToken:(ne,se=!1)=>{const{config:ie={}}=$.value,oe=U(b.path);for(const le of oe)if(ie[le].filter(re=>checkToken(ne,re))){(se?j:Z).value[le]=ne;break}}}},GlobalEncrypt=defineComponent({name:"GlobalEncrypt",setup(b,{slots:$}){const{isGlobalEncrypted:j,validateGlobalToken:Z}=useGlobalEncrypt();return()=>{var U;return j.value?h$6(PasswordModal,{full:!0,onVerify:Z}):((U=$.default)==null?void 0:U.call($))||null}}}),LocalEncrypt=defineComponent({name:"LocalEncrypt",setup(b,{slots:$}){const{isEncrypted:j,validateToken:Z}=usePathEncrypt();return()=>{var U;return j.value?h$6(PasswordModal,{full:!0,onVerify:Z}):((U=$.default)==null?void 0:U.call($))||null}}}),layout="",d=()=>h$6(st,{name:"back"},()=>h$6("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h=()=>h$6(st,{name:"home"},()=>h$6("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f=defineComponent({name:"SlidePage",setup(){const b=useRouter(),$=ref(!1),j=ref(),Z=()=>{$.value=!$.value},U=()=>{$.value=!1},Y=()=>{U(),window.history.go(-1)},ee=()=>{U(),b.push("/")};return onClickOutside(j,U),()=>h$6("div",{class:"presentation"},[h$6(Content),h$6("div",{ref:j,class:["menu",{active:$.value}]},[h$6("button",{class:"menu-button",onClick:()=>Z()},h$6("span",{class:"icon"})),h$6("button",{class:"back-button",onClick:()=>Y()},h$6(d)),h$6("button",{class:"home-button",onClick:()=>ee()},h$6(h))])])}});const clientConfig11=defineClientConfig({enhance:({app:b,router:$})=>{const{scrollBehavior:j}=$.options;$.options.scrollBehavior=async(...Z)=>(await useScrollPromise().wait(),j(...Z)),injectDarkMode(b),b.component("CommonWrapper",CommonWrapper),b.component("HomePage",HomePage),b.component("NormalPage",NormalPage),b.component("Navbar",Navbar),b.component("Sidebar",Sidebar),b.component("BloggerInfo",BloggerInfo),b.component("BlogHome",BlogHome),b.component("BlogPage",BlogPage),b.component("GlobalEncrypt",GlobalEncrypt),b.component("LocalEncrypt",LocalEncrypt)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,Blog,Slide:f}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,clientConfig3,clientConfig4,clientConfig5,s$2,P$3,clientConfig8,I,clientConfig10,clientConfig11],pagesRoutes=[["v-8daa1a0e","/",{y:"h",d:"2022-11-26T02:48:47.000Z",e:`<p>If you have any ideas to share, please contact me at any time in your convenience</p>
`,r:{minutes:.28,words:85},title:"Home",i:"home"},["/index.html","/README.md"]],["v-184f4da6","/intro.html",{y:"a",d:"2022-11-26T02:48:47.000Z",e:`<h1> Intro Page for David</h1>
<p>Hello! I am David Liu, a junior student majoring software engineering in Northeastern University! Nice to see you.</p>
`,r:{minutes:.08,words:24},title:"Intro Page for David",i:"info"},["/intro","/intro.md"]],["v-b9c2d34a","/course/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Artificial Intelligence</h1>
<p>强化学习是通过与环境交互来学习如何做出最优决策的一种机器学习方法。在强化学习中，一个智能体（agent）通过与环境进行交互，观察环境的状态并基于当前状态做出决策，然后获取环境的反馈（奖励或惩罚），并根据反馈来更新其决策策略，以获得更好的性能。</p>
<p>强化学习通常用于解决与时间和序列有关的问题，例如机器人控制、游戏AI等。强化学习的性能提升主要通过以下几个方面实现：</p>
<ol>
<li>数据增强：通过在不同的环境下进行训练，使得智能体能够处理更广泛的情况，从而提高其泛化能力。</li>
<li>更好的状态表示：强化学习中的状态通常由一组特征表示，良好的状态表示能够提供更多的信息并帮助智能体做出更好的决策。</li>
<li>更好的策略学习算法：策略学习算法是强化学习中最关键的部分之一。更好的策略学习算法能够帮助智能体更快地学习到最优策略，从而提高其性能。</li>
<li>智能体的探索策略：强化学习中的智能体需要通过不断尝试不同的决策来学习最优策略。智能体的探索策略可以影响其性能，更好的探索策略可以帮助智能体更快地学习到最优策略。</li>
<li>奖励函数设计：奖励函数是指智能体在与环境交互中获得的奖励或惩罚信号。良好的奖励函数设计能够帮助智能体更快地学习到最优策略。</li>
</ol>`,r:{minutes:5.3,words:1590},title:"Artificial Intelligence"},["/course/index.html","/course/README.md"]],["v-0dd5d98e","/course/%E8%AE%BA%E6%96%87.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 论文</h1>
<p>分析现有方法的缺点</p>
<p>优势：架构不一样，但是也属于进化计算分支</p>
<p>元启发式算法 -&gt; 进化计算（进化类元启发式算法）</p>
<p>典型的有：</p>
<ul>
<li>遗传算法 GA</li>
<li>差分进化算法 DE</li>
<li>进化策略 ES</li>
<li>遗传编程 GP</li>
<li>进化编程 EP</li>
</ul>
<p>meta 元启发式算法分类</p>
<ul>
<li>
<p>进化类</p>
</li>
<li>
<p>物理/化学类</p>
</li>
<li>
<p>自然现象类</p>
<ul>
<li>蚁群算法</li>
<li>人工蜂群</li>
</ul>
</li>
<li>
<p>人类社会启发</p>
</li>
</ul>`,r:{minutes:2.01,words:604},title:"论文"},["/course/论文.html","/course/%E8%AE%BA%E6%96%87","/course/论文.md","/course/%E8%AE%BA%E6%96%87.md"]],["v-439cccae","/standardized/",{y:"a",d:"2022-12-03T11:21:38.000Z",e:`<h1> 标准化考试</h1>
<p>英语标准化考试，主要是语言考试和升学考试两种：</p>
<ul>
<li>GRE</li>
<li>TOEFL</li>
</ul>
<h2> 单词</h2>
<h3> 词根</h3>
<p>元音互换（aeiouyw）</p>
<p>gkh互换</p>
<p>dts互换dts(c)th</p>
<p>uvw互换</p>
<p>mnlr互换</p>
<p>bpmfv互换</p>
<p>印欧语音变：词源不变，语音改变</p>
<p>uni统一</p>
<p>词缀常用就几十个</p>
<p>鼻音和送型音脱落，nm h</p>
<p>uni - one</p>
<p>tri - three</p>`,r:{minutes:.43,words:130},title:"标准化考试"},["/standardized/index.html","/standardized/README.md"]],["v-2d0ad528","/zh/",{y:"h",d:"2022-11-26T02:48:47.000Z",e:`<p>这是一个博客主页的案例。</p>
<p>要使用此布局，你应该在页面前端设置 <code>layout: Blog</code> 和 <code>home: true</code>。</p>
<p>相关配置文档请见 <a href="https://vuepress-theme-hope.github.io/v2/zh/guide/blog/home/" target="_blank" rel="noopener noreferrer">博客主页</a>。</p>
`,r:{minutes:.77,words:231},title:"主页",i:"home"},["/zh/index.html","/zh/README.md"]],["v-858cfdd6","/zh/intro.html",{y:"a",d:"2022-11-26T02:48:47.000Z",e:`<h1> 介绍页</h1>
<p>将你的个人介绍和档案放置在此处。</p>
`,r:{minutes:.07,words:20},title:"介绍页",i:"info"},["/zh/intro","/zh/intro.md"]],["v-269ae70f","/zh/slides.html",{y:"s",d:"2022-11-26T02:48:47.000Z",e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:4.51,words:1352},title:"幻灯片页",i:"slides"},["/zh/slides","/zh/slides.md"]],["v-e394a960","/course/block-chain/1.%20%E5%8C%BA%E5%9D%97%E9%93%BE%E5%8F%91%E5%B1%95.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 区块链发展</h1>
<h3> 1.0 Bitcoin</h3>
<h3> 2.0 Ethereum 以太坊</h3>
<p>比特币 + 智能合约</p>
<p>解决了：</p>
<ul>
<li>让链可以具有定制化功能，有实际功能</li>
</ul>
<h3> 3.0 Fabric</h3>
<p>智能合约 + 监管</p>
<p>解决了：</p>
<ul>
<li>分级权限管理</li>
<li>访问权限控制，保障隐私</li>
</ul>
<p>适合B2B，银行里面常用</p>
<p>Fabric主要语言是Go，但是Java和C也可以写</p>
<p>写智能合约一般没有什么问题</p>`,r:{minutes:1.08,words:324},title:"区块链发展"},["/course/block-chain/1. 区块链发展.html","/course/block-chain/1.%20%E5%8C%BA%E5%9D%97%E9%93%BE%E5%8F%91%E5%B1%95","/course/block-chain/1. 区块链发展.md","/course/block-chain/1.%20%E5%8C%BA%E5%9D%97%E9%93%BE%E5%8F%91%E5%B1%95.md"]],["v-1c105e2a","/course/block-chain/2.%20%E5%AF%86%E7%A0%81%E5%AD%A6%E5%9F%BA%E7%A1%80.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 密码学基础</h1>
<h2> 常见加密算法</h2>
<p>加密 Encryption</p>
<ul>
<li>
<p>对称</p>
<p>IV，会加入一个随机向量，来保证密码的随机</p>
<p>eg. DES, IDEA, AES</p>
</li>
<li>
<p>非对称</p>
</li>
</ul>
<p>哈希函数 Hash Function</p>
<p>数字签名 DIgital Signature</p>
<p>对称加密</p>
<p>Symmetric Cryptography</p>
<p>又称私钥加密</p>
<p>非对称加密</p>
<p>如RSA</p>
`,r:{minutes:5.65,words:1696},title:"密码学基础"},["/course/block-chain/2. 密码学基础.html","/course/block-chain/2.%20%E5%AF%86%E7%A0%81%E5%AD%A6%E5%9F%BA%E7%A1%80","/course/block-chain/2. 密码学基础.md","/course/block-chain/2.%20%E5%AF%86%E7%A0%81%E5%AD%A6%E5%9F%BA%E7%A1%80.md"]],["v-524dd07d","/course/block-chain/3.%20%E7%A7%98%E5%AF%86%E5%85%B1%E4%BA%AB.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Shamir秘密共享</h1>
<blockquote>
<p>基本思想：</p>
<p>一元k次多项式函数</p>
<p>只要有k+1个点，就可以求出来整个函数</p>
</blockquote>
<h2> 门限秘密共享方案</h2>
<h3> 定义</h3>
<p>秘密s通过某种方式被分成n个部分，每个部分称为份额(share)， 每个份额由一个参与者持有，使得：</p>
<ul>
<li>由t个或多于t个参与者所持有的份额可重构秘密s;</li>
<li>由少于t个参与者所持有的份额则无法重构秘密s;</li>
</ul>
<p>称该方案为(t,n)门限秘密共享方案， t称为门限值。少于t个参与者所持有的份额得不到关于秘密s的任何信息则 称该方案是完善的。</p>`,r:{minutes:1.75,words:525},title:"Shamir秘密共享"},["/course/block-chain/3. 秘密共享.html","/course/block-chain/3.%20%E7%A7%98%E5%AF%86%E5%85%B1%E4%BA%AB","/course/block-chain/3. 秘密共享.md","/course/block-chain/3.%20%E7%A7%98%E5%AF%86%E5%85%B1%E4%BA%AB.md"]],["v-39134fda","/course/block-chain/4.%20%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 哈希函数</h1>
<h2> Hash函数</h2>
<p>哈希函数</p>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7713em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7713em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></p>`,r:{minutes:5.98,words:1794},title:"哈希函数"},["/course/block-chain/4. 哈希函数.html","/course/block-chain/4.%20%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0","/course/block-chain/4. 哈希函数.md","/course/block-chain/4.%20%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0.md"]],["v-37115d34","/course/block-chain/5.%20%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 数字货币</h1>
<h2> Simple Cryptocurrencies</h2>
<p>钱转给谁只需要知道对方的公钥</p>
<p>要转出钱需要知道自己的私钥</p>
<p>真伪没问题：公钥校验</p>
<p>这样一张简单的钱，存在的问题：</p>
<ol>
<li>复制粘贴（双花）</li>
<li>无找零</li>
<li>无编号</li>
</ol>
<p>创世区块</p>
<p>账本：记录转账区块，每次记录前校验这个交易是否合法</p>
<p>分叉，用最长链原则来选择</p>
<p>难题给的越难，比如说10分钟出一块，那就出现分叉的概率越低。</p>
<p>交易脚本</p>`,r:{minutes:.49,words:146},title:"数字货币"},["/course/block-chain/5. 数字货币.html","/course/block-chain/5.%20%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81","/course/block-chain/5. 数字货币.md","/course/block-chain/5.%20%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81.md"]],["v-ad51a322","/course/block-chain/6.%20%E5%85%B1%E8%AF%86%E6%9C%BA%E5%88%B6.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 共识机制</h1>
<p>达成共识以后产生一个相同的账单。</p>
<p>分布式共识机制</p>
<p>只能选择一个节点来记录</p>
<p>计算是为了增加这个成本，不能随便造假了</p>
<ul>
<li>双花攻击</li>
<li>女巫攻击：可以伪造身份</li>
</ul>
<p>pow</p>
`,r:{minutes:.23,words:70},title:"共识机制"},["/course/block-chain/6. 共识机制.html","/course/block-chain/6.%20%E5%85%B1%E8%AF%86%E6%9C%BA%E5%88%B6","/course/block-chain/6. 共识机制.md","/course/block-chain/6.%20%E5%85%B1%E8%AF%86%E6%9C%BA%E5%88%B6.md"]],["v-11c61338","/course/block-chain/7.%20pow.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> pow</h1>
<ul>
<li>proof-of-work:</li>
<li>Proof-of-stake: 这样越有钱的人越能记，变得越来越有钱（最有钱的人一直在记）</li>
</ul>
<p>51% attacker</p>
`,r:{minutes:.12,words:35},title:"pow"},["/course/block-chain/7. pow.html","/course/block-chain/7.%20pow","/course/block-chain/7. pow.md","/course/block-chain/7.%20pow.md"]],["v-6e0be950","/course/block-chain/8.%20Fabric.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Fabric</h1>
<p>联盟链=公链-去中性化+监管</p>
`,r:{minutes:.04,words:12},title:"Fabric"},["/course/block-chain/8. Fabric.html","/course/block-chain/8.%20Fabric","/course/block-chain/8. Fabric.md","/course/block-chain/8.%20Fabric.md"]],["v-408c76ae","/course/block-chain/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 课程概要</h1>
<p>实验，5月7号（11周周一）下午五点提交给课代表：学号加姓名</p>
<h2> 成绩</h2>
<ul>
<li>
<p>出勤20</p>
<p>点3-4次名，点名前一天会跟大家说</p>
</li>
<li>
<p>测试20</p>
<p>3-4次，很简单和讲的内容强相关，只要认真听，这个部分基本上都是满分</p>
<p>一般点名的时候，会有课堂测验</p>
<ol>
<li>下次课测验（第三周），内容就是密码共享，比如说给一个(t, n)，让讲出秘密共享的想法，也可以举一个例子</li>
</ol>
</li>
<li>
<p>实验30</p>
<p>Bitcoin + Ethereum，比去年的难度小很多很多，实验指导书有一个步骤，只要按要求一步一步做，一定可以做出来</p>
<blockquote>
<p>主要是看完成的质量；很多都会拿到满分</p>
</blockquote>
<p>实验报告不能写100多页，会规定页数</p>
<p>限制一共25页，宋体小4，行间距22，第一个实验10页左右、第二个NFT可以多一点15页、第三个；超了扣分，老师看着累写着也累</p>
<p>三选二，指导书第五周发</p>
<ul>
<li>merkle tree</li>
</ul>
</li>
<li>
<p>展示30</p>
<p>presentation（research paper）（group work）</p>
<p>小组完成，平均分25分左右，答辩的时候给的是小组的平均分，然后按照贡献度占比得到每个人的权重的分（有的人分多有的少，定量去算）</p>
<p>4-5人一组</p>
<p>贡献值，</p>
<p>汇报，</p>
<p>可以选择做presentation，分会高</p>
<p>也可以选择做research paper，如果是不想展示，但是分会低一些</p>
<p>答辩20分钟，</p>
<blockquote>
<p>很多人拿到的都是满分，超了就都按满分算</p>
</blockquote>
<p>反正不能按报告来叫，因为chatgpt可以写</p>
<p>展示的ppt下周交一下</p>
<p>可以拷到电脑里，或者自己带电脑用</p>
<p>展示时间严格控制在9分钟以内，</p>
<p>不要一直照着ppt念，不要ppt打得都是文字，这样就打的分会比较低</p>
</li>
</ul>`,r:{minutes:2.8,words:841},title:"课程概要"},["/course/block-chain/index.html","/course/block-chain/README.md"]],["v-9c8a184c","/course/deep-learning/1.%20%E5%88%A4%E5%88%AB%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 回归</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640.jpeg" alt="图片" loading="lazy"></p>
<h2> 机器学习</h2>
<p>寻找目标的重要的特征，并排序</p>
<p>机器学习其实是在做一个特征工程</p>
<p>深度学习目前成本很高</p>
<h3> 任务T</h3>
<p>两类任务：分类、回归（连续空间）</p>
<p>多任务模型，把任务拆解</p>
<h3> 经验E</h3>
<p>随着任务的不断执行，经验的积累会带来计算机性能的提升。</p>`,r:{minutes:5.21,words:1563},title:"回归"},["/course/deep-learning/1. 判别学习方法.html","/course/deep-learning/1.%20%E5%88%A4%E5%88%AB%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95","/course/deep-learning/1. 判别学习方法.md","/course/deep-learning/1.%20%E5%88%A4%E5%88%AB%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.md"]],["v-17cf18c3","/course/deep-learning/2.%20%E7%94%9F%E6%88%90%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 生成学习方法</h1>
<p>机器学习的两个分支：</p>
<ul>
<li>
<p>判别学习方法</p>
<p>对条件概率<span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∣</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>进行建模，然后就可以根据学习结果对数据进行分类</p>
</li>
<li>
<p>生成学习方法</p>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∣</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></p>
<p>对先验概率进行建模，然后利用贝叶斯法求后验概率</p>
<p>对条件概率建模，需要的假设更多</p>
</li>
</ul>`,r:{minutes:5.7,words:1709},title:"生成学习方法"},["/course/deep-learning/2. 生成学习方法.html","/course/deep-learning/2.%20%E7%94%9F%E6%88%90%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95","/course/deep-learning/2. 生成学习方法.md","/course/deep-learning/2.%20%E7%94%9F%E6%88%90%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.md"]],["v-2aeb94c0","/course/deep-learning/3.%20%E5%86%B3%E7%AD%96%E6%A0%91.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 决策树</h1>
<p>决策树是一种用于分类和回归任务的非参数监督学习算法。它是一种分层树形结构，由<strong>根节点、分支、内部节点和叶节点</strong>组成。每个内部节点表示一个属性上的测试，每个分支代表一个测试输出，每个叶节点代表一种类别。</p>
<h3> 构造</h3>
<h3> 剪枝</h3>
<p>剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p>
<blockquote>
<p>可以防止过拟合。</p>
</blockquote>
<h4> 预剪枝</h4>
<p>预剪枝是指在决策树构造过程中，对每个节点在划分前后计算信息增益，若划分后的信息增益小于划分前，则不对该节点进行划分，即把该节点变为叶节点。</p>`,r:{minutes:1.57,words:470},title:"决策树"},["/course/deep-learning/3. 决策树.html","/course/deep-learning/3.%20%E5%86%B3%E7%AD%96%E6%A0%91","/course/deep-learning/3. 决策树.md","/course/deep-learning/3.%20%E5%86%B3%E7%AD%96%E6%A0%91.md"]],["v-169528f7","/course/deep-learning/4.%20%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 集成学习</h1>
<h2> Bagging</h2>
<p>Bagging 算法是一种集成学习的方法，它的基本思想是：通过构建并结合多个分类器来完成学习任务，最终将各个分类器的预测结果进行结合，得到最终的预测结果。Bagging算法的基本思想是：通过构建并结合多个分类器来完成学习任务，最终将各个分类器的预测结果进行结合，得到最终的预测结果。</p>
<h2> Boosting</h2>
<p>Boosting 算法是一种集成学习的方法，它的基本思想是将弱分类器组合成一个强分类器。Boosting算法的基本思想是：通过迭代的方式，每一次迭代都学习一个弱分类器，然后将这些弱分类器进行加权组合，得到最终的强分类器。Boosting算法的主要思想是：通过迭代的方式，每一次迭代都学习一个弱分类器，然后将这些弱分类器进行加权组合，得到最终的强分类器。</p>`,r:{minutes:2.16,words:647},title:"集成学习"},["/course/deep-learning/4. 集成学习.html","/course/deep-learning/4.%20%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0","/course/deep-learning/4. 集成学习.md","/course/deep-learning/4.%20%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0.md"]],["v-15eaf20e","/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 随机森林</h1>
<p>袋外错误率 Oob Error Rate</p>
<p>无需交叉认证或测试集，在训练过程中，每个样本被选中的概率为 1 - 1/e ≈ 63.2%。袋外样本的预测结果不会被用于训练，因此可以用来评估模型的泛化能力。</p>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">6</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.104em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mopen">([</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord">0.5</span><span class="mclose">]</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></p>`,r:{minutes:1.15,words:346},title:"随机森林"},["/course/deep-learning/5. 随机森林.html","/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97","/course/deep-learning/5. 随机森林.md","/course/deep-learning/5.%20%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97.md"]],["v-44446262","/course/deep-learning/6.%20SVM.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 支持向量机</h1>
<p>深度学习火起来以前，最火的，分类最好的算法就是SVM和随机森林</p>
<p>对于分界线上的元素，遵循公平性原则</p>
<p>线性分类器：可以画超平面去分类为两类</p>
<p>线性函数，计算简单，易于求解</p>
<p>间隔最大化：分类超平面和两类数据直接的间隔尽可能的大，两边都保持尽量远（保证公平性）</p>
<p>正样本、负样本</p>
<h3> 核函数</h3>
<ul>
<li>线性核函数</li>
<li>多项式核函数</li>
<li>高斯核函数</li>
</ul>
<p>CNN：卷积神经网络</p>
<ul>
<li>特征提取很</li>
</ul>`,r:{minutes:1.2,words:359},title:"支持向量机"},["/course/deep-learning/6. SVM.html","/course/deep-learning/6.%20SVM","/course/deep-learning/6. SVM.md","/course/deep-learning/6.%20SVM.md"]],["v-ae5df412","/course/deep-learning/7.%20CNN.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> CNN 卷积神经网络</h1>
<h2> 全连接网络</h2>
<ul>
<li>每一个细胞与下一层所有细胞都连接</li>
</ul>
<p>输入层、隐藏层、输出层</p>
<p>每个神经元都有自己单独的权重向量</p>
<p>目标/损失函数：</p>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">∣∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord">∣∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2809em;vertical-align:-0.4358em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.162em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4358em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1002em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></p>`,r:{minutes:2.88,words:863},title:"CNN 卷积神经网络"},["/course/deep-learning/7. CNN.html","/course/deep-learning/7.%20CNN","/course/deep-learning/7. CNN.md","/course/deep-learning/7.%20CNN.md"]],["v-a4f4a4ee","/course/deep-learning/8.%20RNN.html",{y:"a",d:"2023-06-08T07:41:54.000Z",title:""},["/course/deep-learning/8. RNN.html","/course/deep-learning/8.%20RNN","/course/deep-learning/8. RNN.md","/course/deep-learning/8.%20RNN.md"]],["v-26fa744b","/course/deep-learning/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 深度学习技术</h1>
<p>大部分代码不需要自己写，但是要试一试现有的framework练练</p>
<h2> 大纲</h2>
<h3> 机器学习导论</h3>
<blockquote>
<p>主要讲基于微分方程的一些算法</p>
</blockquote>
<ul>
<li>
<p>机器学习综述</p>
</li>
<li>
<p>线性回归、logistics回归</p>
<p>Redge/LASSO</p>
</li>
<li>
<p>数据清洗、特征选择</p>
</li>
<li>
<p>决策树与随机森林</p>
</li>
</ul>
<h3> 深度学习</h3>
<blockquote>
<p>黑盒，解释性可以有但是不能彻底解释清楚</p>
</blockquote>`,r:{minutes:1.58,words:473},title:"深度学习技术"},["/course/deep-learning/index.html","/course/deep-learning/README.md"]],["v-758e153b","/course/intel-elec/1.%20%E8%AF%BE%E7%A8%8B%E5%BC%95%E5%85%A5.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 第一次课</h1>
<h3> 课上作业</h3>
<ol>
<li>
<p>人工智能与哪些学科技术有关？100-150字提交到此题</p>
<blockquote>
<p>短篇的一个描述，在雨课堂上</p>
<p>内容不能超</p>
</blockquote>
</li>
</ol>
<p>调研内容：</p>
<p>编辑好以后就可以放雨课堂以后</p>
<ol start="2">
<li>
<p>人工智能与哪些学科技术有关？图片</p>
<blockquote>
<p>可以画一个思维导图，来支撑前面的文字描述</p>
</blockquote>
</li>
</ol>
<p>7:05结束</p>`,r:{minutes:2.74,words:821},title:"第一次课"},["/course/intel-elec/1. 课程引入.html","/course/intel-elec/1.%20%E8%AF%BE%E7%A8%8B%E5%BC%95%E5%85%A5","/course/intel-elec/1. 课程引入.md","/course/intel-elec/1.%20%E8%AF%BE%E7%A8%8B%E5%BC%95%E5%85%A5.md"]],["v-caba3efa","/course/intel-elec/2.%20%E7%94%B5%E8%B7%AF%E5%88%86%E6%9E%90.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 第二次课</h1>
<p>线上上课，看mooc，做mooc测验（也放到了雨课堂）</p>
<ol>
<li>
<p>请首先注册中国大学MOOC中的<a href="https://www.icourse163.org/course/NEU-1002920013" target="_blank" rel="noopener noreferrer">“模拟电子技术基础”</a>慕课；</p>
</li>
<li>
<p>在第三周周六前完成期中如下章节内容视频的学习，并完成 <strong>第****二周线上自学内容对应测试</strong>。</p>
<p>学习内容：</p>
</li>
</ol>`,r:{minutes:.68,words:203},title:"第二次课"},["/course/intel-elec/2. 电路分析.html","/course/intel-elec/2.%20%E7%94%B5%E8%B7%AF%E5%88%86%E6%9E%90","/course/intel-elec/2. 电路分析.md","/course/intel-elec/2.%20%E7%94%B5%E8%B7%AF%E5%88%86%E6%9E%90.md"]],["v-a2c6403c","/course/intel-elec/3.%20%E4%BC%A0%E6%84%9F%E5%99%A8.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 传感器</h1>
<p>有一个课堂练习</p>
<h3> 基础知识</h3>
<p>类似人类的感官</p>
<p>调研：</p>
<p>传感器的组成</p>
<ul>
<li>敏感元件</li>
<li>转换元件</li>
<li>转换电路</li>
</ul>
<blockquote>
<p>&amp;&amp;考试可能会考这部分</p>
</blockquote>
<p>传感器分类方式</p>
<ul>
<li>技术特征</li>
<li>能量关系</li>
<li>基本效应</li>
<li>输入量</li>
<li>输出量</li>
<li>工作原理</li>
</ul>
<p>模拟信号是一种连续的信号，数字信号是一种离散的信号。两者之间可以进行互相转换。模拟信号分布于自然界的各个角落，如气温的变化，而数字信号是人为的抽象出来的在幅度取值上不连续的信号。</p>`,r:{minutes:3,words:901},title:"传感器"},["/course/intel-elec/3. 传感器.html","/course/intel-elec/3.%20%E4%BC%A0%E6%84%9F%E5%99%A8","/course/intel-elec/3. 传感器.md","/course/intel-elec/3.%20%E4%BC%A0%E6%84%9F%E5%99%A8.md"]],["v-15123ac3","/course/intel-elec/4.%20%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 逻辑电路</h1>
<p>SSI,MSI,LSI,VLSI,ULS的IC规格分类、集成电路名称、型号、价格</p>
<p>您好，这是必应。我根据网络搜索结果，为您整理了一个集成电路的实例器件表格。表格内容包括序号、IC规格分类、集成电路名称、型号、价格和照片。希望对您有帮助。</p>
<table>
<thead>
<tr>
<th>序号</th>
<th>IC规格分类</th>
<th>集成电路名称</th>
<th>型号</th>
<th>价格</th>
<th>照片</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>小规模集成电路（SSI）</td>
<td>四位二进制加法器</td>
<td>74LS83A</td>
<td>￥2.00</td>
<td><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/IMG_9705.jpg" alt="IMG_9705" style="zoom:50%;"></td>
</tr>
<tr>
<td>2</td>
<td>中规模集成电路（MSI）</td>
<td>十进制计数器/分频器</td>
<td>CD4017BE</td>
<td>￥0.66</td>
<td><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/IMG_9706.jpg" alt="IMG_9706" style="zoom:50%;"></td>
</tr>
<tr>
<td>3</td>
<td>大规模集成电路（LSI）</td>
<td>静态随机存储器（SRAM）</td>
<td>CY62256NLL-70PXC</td>
<td>￥9.7</td>
<td><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/IMG_9707.jpg" alt="IMG_9707" style="zoom:50%;"></td>
</tr>
<tr>
<td>4</td>
<td>超大规模集成电路（VLSI）</td>
<td>微控制器单元（MCU）</td>
<td>STM32F401CCU6 QFN48</td>
<td>￥15.5</td>
<td><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/IMG_9708.jpg" alt="IMG_9708" style="zoom:33%;"></td>
</tr>
<tr>
<td>5</td>
<td>超超大规模集成电路（ULSI）</td>
<td>中央处理器（CPU）</td>
<td>Intel Core i7-10700K</td>
<td>￥2,009.00</td>
<td><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/IMG_9709.jpg" alt="IMG_9709" style="zoom:50%;"></td>
</tr>
</tbody>
</table>`,r:{minutes:2.53,words:759},title:"逻辑电路"},["/course/intel-elec/4. 逻辑电路.html","/course/intel-elec/4.%20%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF","/course/intel-elec/4. 逻辑电路.md","/course/intel-elec/4.%20%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF.md"]],["v-7be0c5c5","/course/intel-elec/5.%20%E4%BF%A1%E6%81%AF%E5%A4%84%E7%90%86.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 数字信号处理</h1>
<p>日常接触的具体的信号：举例</p>
<ul>
<li>5G信号</li>
<li>Wifi信号</li>
<li>蓝牙信号</li>
</ul>
<ol>
<li>红绿灯信号 - 在路口上，红色和绿色的灯光信号指示着行人和驾驶员何时可以通过路口，何时必须停止。</li>
<li>手势信号 - 在交通指挥员或警察指挥交通时，他们可能会使用手势来指示车辆何时可以通过路口或何时必须停止。</li>
<li>无线电或电视广播信号 - 这些信号通过无线电或电视转播塔传输信息。我们可以在收音机、电视或手机上接收这些信号，以获取新闻、天气预报、音乐等信息。</li>
<li>火警警报信号 - 当发生火灾时，火警警报系统可能会发出响亮的声音来提醒人们采取行动。</li>
<li>电话铃声 - 当有人给你打电话时，电话铃声是一种信号，提醒你有电话呼入。</li>
<li>闹钟信号 - 闹钟可以设置成在特定的时间发出声音或振动，以提醒我们起床或做其他事情。</li>
<li>消防车或救护车的警笛声 - 当消防车或救护车行驶时，他们会使用响亮的警笛声来提醒其他司机让路。</li>
<li>警察车辆的闪光灯 - 当警察需要在紧急情况下行驶时，他们的车辆上的闪光灯可以提醒其他司机注意他们的存在。</li>
<li>机场或车站广播 - 当旅客需要知道他们的航班或列车的到达和离开时间时，机场或车站广播系统可以提供这些信息。</li>
<li>电子邮件通知 - 当你收到一封电子邮件时，你的电子邮件客户端可能会发出声音或弹出通知窗口，以提醒你收到新邮件。</li>
</ol>`,r:{minutes:4.12,words:1236},title:"数字信号处理"},["/course/intel-elec/5. 信息处理.html","/course/intel-elec/5.%20%E4%BF%A1%E6%81%AF%E5%A4%84%E7%90%86","/course/intel-elec/5. 信息处理.md","/course/intel-elec/5.%20%E4%BF%A1%E6%81%AF%E5%A4%84%E7%90%86.md"]],["v-3e6b0702","/course/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 数字信号处理</h1>
<p>心电信号的频率范围一般为0.05～l00Hz，并且能量主要集中在0.25～35Hz。</p>
<p>互评，10分</p>
<p>心电滤波程序：MATLAB</p>
<p>请绘制对应的数轴式序列波形图：</p>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">x</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">3</span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mclose">]</span></span></span></span></p>`,r:{minutes:.31,words:93},title:"数字信号处理"},["/course/intel-elec/6. 数字信号处理.html","/course/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86","/course/intel-elec/6. 数字信号处理.md","/course/intel-elec/6.%20%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7%E5%A4%84%E7%90%86.md"]],["v-6f144404","/course/intel-elec/7.%20%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 数字图形处理</h1>
<p>数字</p>
<p>给出一个两个汉字组成的词语，里面的两个汉字具有相对的含义。提交该词汇，并做出解释。</p>
<p>“形象”是一个由“形”和“象”两个汉字组成的词语，其中“形”指外形，“象”指比喻、类比。这个词语的意思是指具有外形特征的事物或人物，或者是具有某种特定的比喻、类比关系的事物或人物。</p>
<p>“形象”是一个由“形”和“象”两个汉字组成的词语，其中“形”指外形，“象”指比喻、类比、特征。这个词语的意思是指具有外形特征的事物或人物，或者是具有某种特定的比喻、类比关系的事物或人物。</p>
<ul>
<li>词语：一个两个字的词</li>
<li>解释：是否对两个字各自及两字解释</li>
</ul>`,r:{minutes:1.66,words:499},title:"数字图形处理"},["/course/intel-elec/7. 数字图像处理.html","/course/intel-elec/7.%20%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86","/course/intel-elec/7. 数字图像处理.md","/course/intel-elec/7.%20%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86.md"]],["v-ede14f50","/course/intel-elec/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 智能电子与信息技术</h1>
<h2> 课程安排</h2>
<h3> 时间节点</h3>
<ol>
<li>
<p>第二周：线上课，无需到教室，内容在中国大学慕课</p>
</li>
<li>
<p>第七周：翻转课堂</p>
<p>五个教室，每个教室4个组</p>
<p>内容第六周公布做什么准备</p>
</li>
<li>
<p>第八周随堂测试，30-40分</p>
<p>内容来自课上讲的东西、作业、练习题</p>
<p>开卷考试，内容不难</p>
</li>
</ol>
<h3> 授课方式</h3>
<p>考勤：雨课堂，xiaochengxu点进去即可</p>
<p>时间：正课内容到9点半，会留课堂练习，可以课上做，也可以课后做，留一周时间做</p>`,r:{minutes:2.92,words:877},title:"智能电子与信息技术"},["/course/intel-elec/index.html","/course/intel-elec/README.md"]],["v-038a238a","/course/neusoft/1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>十组一个指导老师</p>
<p>前三周上课，后面开发，中期答辩的时候会发一个模板要有一个成果物</p>
<p>版本以来</p>
<p>Java 8</p>
<p>MySQL5.7-8的版本都可以</p>
<p>Maven</p>
<p>办公类文件</p>
<ul>
<li>文档：Markdown，推荐typora</li>
</ul>
<p><strong>统一做物流系统</strong></p>
<p>本来有一个详细的需求分析书，但是害怕大家做的都一样，所以就不给了（但是讲完课以后会给大家共享屏幕看一眼），需求分析需要自己做，自己做的简单可以难也行根据自己能力，这样到时候好有区分度，好打分</p>`,r:{minutes:1.79,words:538},title:""},["/course/neusoft/1","/course/neusoft/1.md"]],["v-5f917da2","/course/neusoft/11.%20Docker.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Docker</h1>
<p>容器虚拟化</p>
<p>容器部署是未来</p>
<h2> 部署项目</h2>
<p>tar包</p>
<p>jar包，通过命令启动，端口号映射、目录挂载</p>
<p>Maven插件构建景象，打包插件</p>
<p>先开启docker的远程访问</p>
`,r:{minutes:.19,words:56},title:"Docker"},["/course/neusoft/11. Docker.html","/course/neusoft/11.%20Docker","/course/neusoft/11. Docker.md","/course/neusoft/11.%20Docker.md"]],["v-51ba0f86","/course/neusoft/13.%20Cloud.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>熔断，降级</p>
`,r:{minutes:.01,words:4},title:""},["/course/neusoft/13. Cloud.html","/course/neusoft/13.%20Cloud","/course/neusoft/13. Cloud.md","/course/neusoft/13.%20Cloud.md"]],["v-76758d33","/course/neusoft/15.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> Sentinel</h2>
<p>限流、熔断（链路保护机制）</p>
<p>sentinel有控制台</p>
`,r:{minutes:.05,words:16},title:""},["/course/neusoft/15","/course/neusoft/15.md"]],["v-053efc29","/course/neusoft/2.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> MyBatis</h1>
<p>动态SQL</p>
<p>缓存</p>
<p>逆向工程</p>
<p>DML不需要写resultType</p>
<p>resultType：表的每一行的数据的类型</p>
<h2> 动态SQL</h2>
<p>静态SQL：结构恒定的，虽然可以传入参数，但是结构不会变</p>
<p>动态SQL：语句的结构会变化，如批量添加、批量删除，可以通过循环标签</p>
<h3> foreach 标签</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>INSTERT <span class="token keyword">INTO</span> t_student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> major<span class="token punctuation">,</span> birthdate<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
<span class="token operator">&lt;</span>foreach collection<span class="token operator">=</span><span class="token string">"list"</span> item<span class="token operator">=</span><span class="token string">"stu"</span> separator<span class="token operator">=</span><span class="token string">","</span><span class="token operator">&gt;</span>
	<span class="token punctuation">(</span><span class="token comment">#{stu.name},#{stu.age},#{stu.major},#{stu.birthdate})</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>foreach<span class="token operator">&gt;</span>

<span class="token keyword">delete</span> <span class="token keyword">FROM</span> t_student
<span class="token keyword">WHERE</span> id <span class="token operator">IN</span>
<span class="token operator">&lt;</span>foreach collection<span class="token operator">=</span><span class="token string">"list"</span> item<span class="token operator">=</span><span class="token string">"id"</span> separator<span class="token operator">=</span><span class="token string">","</span> <span class="token keyword">open</span><span class="token operator">=</span><span class="token string">"("</span> <span class="token keyword">close</span><span class="token operator">=</span><span class="token string">")"</span><span class="token operator">&gt;</span>
	<span class="token comment">#{id}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>foreach<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.42,words:126},title:"MyBatis"},["/course/neusoft/2","/course/neusoft/2.md"]],["v-426d42b4","/course/neusoft/3.%20Spring.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Spring</h1>
<p>IoC、AOP</p>
<h2> IoC</h2>
<p>对象创建（IoC）和依赖关系（DI）</p>
<p>默认是单例的，但是可以配置成 prototype</p>
<p>对象创建i</p>
<ul>
<li>配置文件，标签bean，id和class，用ClassPath</li>
<li>配置类，用AnnotationConfigApplicationContext容器（需要register和refresh）</li>
</ul>
<p>依赖注入的方式</p>
<ul>
<li>
<p>通过构造方法，需要提供带参的构造方法，推荐用name属性来注入</p>
</li>
<li>
<p>通过setter，</p>
</li>
<li>
<p>自动装配</p>
<p>byType,</p>
<p>byName 要保证字段名和bean名一致</p>
</li>
</ul>`,r:{minutes:1.14,words:341},title:"Spring"},["/course/neusoft/3. Spring.html","/course/neusoft/3.%20Spring","/course/neusoft/3. Spring.md","/course/neusoft/3.%20Spring.md"]],["v-7f4986f6","/course/neusoft/4.%20Spring.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>整合框架</p>
<h2> Web</h2>
<h2> Tomcat</h2>
<p>SpringMVC</p>
<p>JSON</p>
`,r:{minutes:.03,words:8},title:""},["/course/neusoft/4. Spring.html","/course/neusoft/4.%20Spring","/course/neusoft/4. Spring.md","/course/neusoft/4.%20Spring.md"]],["v-77e76ddc","/course/neusoft/5.%20SpringBoot.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>上传解析器</p>
<p>SpringMVC 使用 MultipartFile，可以限制文件大小等信息</p>
<p>少出现半小时，最好和老师说一声或者和同桌说一声，这样不影响分数</p>
<p>老师来座位拍照不直接影响分数，后面核实出勤就不扣分否则算旷课，旷课比请假扣分多</p>
`,r:{minutes:.29,words:86},title:""},["/course/neusoft/5. SpringBoot.html","/course/neusoft/5.%20SpringBoot","/course/neusoft/5. SpringBoot.md","/course/neusoft/5.%20SpringBoot.md"]],["v-7b7b747c","/course/neusoft/",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>最基本：SpringBoot、MyBatis、前后端分离</p>
<p>推荐：SpringCloud，每个人可以单独开发测试（算是一个加分点，</p>
<p>技术没有上限，集成更多高级技术都是加分点，可以加分</p>
<blockquote>
<p>除了Redis、MQ外，还可以介入elastic search</p>
</blockquote>
<p>系统分析（</p>
<p>系统设计（包括数据库设计，表、字段（先用Excel设计出来</p>
<p>这两块6月份要做完，</p>
<p>中期报告：<strong>6月20号</strong>，提交第一个版本的中期报告（就是最终总结报告的一部分，就是最终报告的前几部分就是已经完成的一部分）（老师会看和指正问题）</p>`,r:{minutes:2.95,words:886},title:""},["/course/neusoft/index.html","/course/neusoft/README.md"]],["v-3f37697a","/course/rec-sys/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> Recommendation System</h1>
<p>推荐系统</p>
<p>经典算法</p>
<ul>
<li>
<p>User-based</p>
</li>
<li>
<p>Item-based</p>
</li>
<li>
<p>Context-based</p>
<ul>
<li>
<p>Social rec</p>
<p>TrustSVD</p>
</li>
</ul>
</li>
</ul>
<p>深度学习</p>
<h2> 算法库</h2>
<p>Librec</p>
<p>librec 使用</p>
<p>librec rec -exec -conf ../core/src/main/resources/rec/context/rating/trustsvd-test.properties</p>`,r:{minutes:.2,words:61},title:"Recommendation System"},["/course/rec-sys/index.html","/course/rec-sys/README.md"]],["v-4d98b8f6","/course/unlinear/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 非线性科学导论</h1>
<p>混沌</p>
<p>分型</p>
<p>网络科学</p>
<p>网络传播动力学</p>
<p>复杂网络</p>
`,r:{minutes:.09,words:26},title:"非线性科学导论"},["/course/unlinear/index.html","/course/unlinear/README.md"]],["v-61ad84b0","/course/unlinear/network-dynamics.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 9. 网络动力学及应用</h1>
<h2> 传播动力学</h2>
<h2> 经典传播模型</h2>
<p>sir</p>
<p>sis</p>
<p>seirs</p>
<h2> 网络的同步</h2>
`,r:{minutes:.09,words:28},title:"9. 网络动力学及应用"},["/course/unlinear/network-dynamics","/course/unlinear/network-dynamics.md"]],["v-44ec96d0","/course/xr-tech/1.%20VR.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> VR 基础</h1>
<p>VR的三个目标</p>
<ul>
<li>沉浸性</li>
<li>交互性</li>
<li>无感知性</li>
</ul>
<p>感知输入设备</p>
<ul>
<li>
<p>手部追踪</p>
<p>手套、手柄</p>
</li>
<li>
<p>眼部追踪</p>
</li>
<li>
<p>腕带</p>
<p>解放双手</p>
</li>
<li>
<p>动捕衣服</p>
<p>身上关键的关节有捕捉点，有助于捕捉身体动作</p>
</li>
</ul>
<p>六个自由度</p>
<h2> HMD</h2>
<h3> 数学原理</h3>
<p>高斯成像公式计算：</p>`,r:{minutes:3.48,words:1045},title:"VR 基础"},["/course/xr-tech/1. VR.html","/course/xr-tech/1.%20VR","/course/xr-tech/1. VR.md","/course/xr-tech/1.%20VR.md"]],["v-8feca790","/course/xr-tech/2.%20VRML.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> VRML</h1>
<blockquote>
<p>可能会有随堂测验，10分，课堂做，学完VRML用这个写一段代码，可以网上找到参考资料</p>
<p>小组为单位去写，给充足的时间去写</p>
</blockquote>
<p>VR Modeling Language</p>
<p>虚拟现实建模语言，文件后缀：<code>.wrl</code></p>
<p>这个是基础的内容，比unity等低级得多，与unity相比，这个像是c语言，这个是底层语言</p>
<p>可以描述物体的位置和运动</p>
<p>讨论：</p>
<ul>
<li>VRML1.0和2.0的区别
<ul>
<li>3D声音</li>
<li>交互性</li>
<li>面向对象结构变更</li>
</ul>
</li>
<li>有哪些节点，共54个</li>
</ul>`,r:{minutes:1.27,words:382},title:"VRML"},["/course/xr-tech/2. VRML.html","/course/xr-tech/2.%20VRML","/course/xr-tech/2. VRML.md","/course/xr-tech/2.%20VRML.md"]],["v-0544da66","/course/xr-tech/3.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6%E5%9F%BA%E7%A1%80.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 计算机图形学</h1>
<p>3D图像转成计算机可以展示的2D的内容</p>
<h2> 坐标变换</h2>
<p>平移、旋转、缩放、错切</p>
<h3> 平移 （Translation）</h3>
<p>在3D空间中，假设我们需要将一个点平移到另一个位置。假设空间中的一点P，其用坐标表示为（x,y,z）；将其向 x方向平移 tx，向y方向平移ty, 向z方向平移tz, 设平移后点的坐标为（x’,y’,z'）,则上述点的平移操作可以归纳为如下公式：</p>
<h3> 缩放 （Scaling）</h3>
<p>在3D空间中，对点（x,y,z）常用的另一种操作为相对于另一点(px,py,pz)进行缩放操作，我们不妨x方向的缩放因子为sx,y方向的缩放因子为sy,z方向的缩放因子为sz, 则上述点（x,y,z）相对于点（px,py,pz）的缩放操作可以归纳为如下公式：</p>`,r:{minutes:1.34,words:401},title:"计算机图形学"},["/course/xr-tech/3. 计算机图形学基础.html","/course/xr-tech/3.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6%E5%9F%BA%E7%A1%80","/course/xr-tech/3. 计算机图形学基础.md","/course/xr-tech/3.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6%E5%9F%BA%E7%A1%80.md"]],["v-d3b6a002","/course/xr-tech/4.%203ds.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 3ds MAX</h1>
<p>3ds max 是一款三维制作软件，它提供了多种变换工具，包括移动、旋转、缩放、倾斜、拉伸等等。在 3ds max 中，变换工具是通过主工具栏上的按钮来实现的。您可以单击这些按钮，或使用快捷键来调用它们。例如，移动工具的快捷键是 W，旋转工具的快捷键是 E，缩放工具的快捷键是 R。</p>
<p>您可以在 3ds max 中使用“变换”工具来移动、旋转和缩放对象。要使用“变换”工具，请选择您要移动、旋转或缩放的对象，然后单击“变换”工具栏上的相应按钮。例如，如果您要移动对象，请单击“移动”按钮。然后，您可以使用鼠标来移动对象。</p>
<ol>
<li>各种变换操作</li>
<li>在哪操作</li>
<li>快捷键</li>
<li>使用场景</li>
</ol>`,r:{minutes:4.45,words:1335},title:"3ds MAX"},["/course/xr-tech/4. 3ds.html","/course/xr-tech/4.%203ds","/course/xr-tech/4. 3ds.md","/course/xr-tech/4.%203ds.md"]],["v-75b582f6","/course/xr-tech/5.%20VR%E5%BA%94%E7%94%A8%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> VR 应用设计</h1>
<p>亚利桑那阳光</p>
<p>VR的交互</p>
<ul>
<li>物体选择</li>
</ul>
<p>提出自己小组VR的产品</p>
<h2> 设计</h2>
<h3> 交互</h3>
<h4> 如何输出 do impact</h4>
<p>如何做方式，如何影响世界</p>
<ul>
<li>handles，手柄</li>
<li>buttons，按钮</li>
</ul>
<h4> 如何感受反馈 feel feedback</h4>
<p>cool</p>
<p>hot：</p>
<h4> 如何知道 know</h4>
<ul>
<li>Map，</li>
<li>Path，一步一步每个时间点做什么</li>
</ul>`,r:{minutes:.28,words:85},title:"VR 应用设计"},["/course/xr-tech/5. VR应用设计.html","/course/xr-tech/5.%20VR%E5%BA%94%E7%94%A8%E8%AE%BE%E8%AE%A1","/course/xr-tech/5. VR应用设计.md","/course/xr-tech/5.%20VR%E5%BA%94%E7%94%A8%E8%AE%BE%E8%AE%A1.md"]],["v-05eb9b21","/course/xr-tech/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 虚拟现实技术</h1>
<p>留三个作业，每个分数低一些，要求也会低一些，</p>
<h2> 分数</h2>
<ul>
<li>
<p>出勤10，点名</p>
<blockquote>
<p>很少，上学期就一次，我们这个不一定几次</p>
<p>基本上都满分，一两次没来不扣分</p>
</blockquote>
<p>分成8组，每组10人左右，8-12人</p>
<p>每组每堂课的出勤率不少于75%，至少来7人，这样就不扣分</p>
</li>
<li>
<p>作业1 15</p>
<p>课堂分组作业，</p>
<p>目标：了解VR的视觉显示原理（可以自己给自己出题去解决）</p>
<p>考核形式：</p>
<ul>
<li>
<p>小组为单位</p>
</li>
<li>
<p>互评/组评/教评</p>
<p>（上学期就是两辆互评，不能太离谱，每个人都打90分以上就离谱了，两辆PK，互相评分，觉得不合理的分可以找老师申诉）</p>
<p>（这学期可能是组评，每一组的分由其他所有组共同决定出）</p>
<p>（教评，老师给分，尺度一定会很好，但是学生自己没有权利了）</p>
</li>
</ul>
<p>如何考核</p>
<ul>
<li>
<p>报告</p>
</li>
<li>
<p>PPT，每个小组大概5分钟进进行汇报</p>
</li>
<li>
<p>课堂测验，现场做现场交（难度可能不一定）</p>
</li>
<li>
<p>随机评测，分成4对，每个小组之间互相出题（但是难度难以保证统一）</p>
<p>最后分数跟难度相关，最简单的类，可能答满也只能80分</p>
</li>
</ul>
</li>
<li>
<p>作业2 25</p>
</li>
<li>
<p>期末 40</p>
<p>大作业</p>
</li>
</ul>`,r:{minutes:2.17,words:651},title:"虚拟现实技术"},["/course/xr-tech/index.html","/course/xr-tech/README.md"]],["v-1be737d6","/cs/algo/",{y:"a",d:"2022-12-04T02:34:19.000Z",e:`<h1> Algorithm</h1>
<h2> 算法学习</h2>
<p>结合labuladong和codetop，按labuladong的知识点刷codetop上微软的高频题</p>
<p>先学labuladong学习知识、总结算法模板、刷模板题，这个时候相当于开卷去学习刷题；然后刷codetop上的高配题，这个时候尽量闭卷不看题解用自己总结的方法刷</p>
<h2> 八股学习</h2>
<p>八股学习主要通过如下三种内容相互结合进行，有的知识点只需要其中的某一种方式，而有的需要多种结合来加深理解：</p>
<ul>
<li>
<p>视频教程</p>
<p>如：尚硅谷、黑马、动力节点等</p>
</li>
<li>
<p>技术博客</p>
<p>如：JavaGuide、小林Coding等</p>
<p>其中，小林重讲解知识点，JavaGuide重面试题总结</p>
</li>
<li>
<p>技术书籍</p>
<p>如：Redis原理及实战、JVMxxx等，这个可以通过zlib下载</p>
</li>
</ul>`,r:{minutes:2.56,words:769},title:"Algorithm"},["/cs/algo/index.html","/cs/algo/README.md"]],["v-77b52ea4","/cs/database/",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> Database</h1>
<p>本部分总结常见数据库的使用方法，包括关系型数据库、非关系型数据库、分布式数据库等。</p>
<ul>
<li>MySQL</li>
<li>Redis</li>
<li>MongoDB</li>
</ul>
`,r:{minutes:.14,words:41},title:"Database"},["/cs/database/index.html","/cs/database/README.md"]],["v-4f59b344","/daily/plain/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 寒假学习计划</h1>
<p>极速学习路线</p>
<ol>
<li>2.2-2.3：时间紧迫速成的课程 10h</li>
<li>2.4-2.5：Redis 15h</li>
<li>后面看八股、复习MySQL八股+日常刷算法题</li>
</ol>
<h2> 算法学习</h2>
<p>结合labuladong和codetop，按labuladong的知识点刷codetop上微软的高频题</p>
<p>先学labuladong学习知识、总结算法模板、刷模板题，这个时候相当于开卷去学习刷题；然后刷codetop上的高配题，这个时候尽量闭卷不看题解用自己总结的方法刷。</p>
<p>代码可视化工具：</p>`,r:{minutes:3.96,words:1189},title:"寒假学习计划"},["/daily/plain/寒假学习计划.html","/daily/plain/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92","/daily/plain/寒假学习计划.md","/daily/plain/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92.md"]],["v-e410df86","/daily/plain/%E8%8B%B1%E8%AF%AD%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 英语学习计划</h1>
<p>重点：查漏补缺</p>
<ul>
<li>托福110</li>
<li>GRE330</li>
</ul>
<h2> TOEFL</h2>
<h3> 词汇</h3>
<ul>
<li>托福听力词</li>
<li>GRE 抖词 2400</li>
</ul>
<h3> 听力</h3>
<ul>
<li>托福听力</li>
</ul>
<h3> 口语</h3>
<ul>
<li>独立题：fancy 口语预料</li>
<li>综合题：每日练习一套</li>
</ul>
<h3> 写作</h3>
<ul>
<li>独立写作</li>
<li>综合写作：每日练习一套</li>
</ul>`,r:{minutes:.23,words:70},title:"英语学习计划"},["/daily/plain/英语学习计划.html","/daily/plain/%E8%8B%B1%E8%AF%AD%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92","/daily/plain/英语学习计划.md","/daily/plain/%E8%8B%B1%E8%AF%AD%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92.md"]],["v-10591812","/employment/interview/%E4%B8%BB%E7%AE%A1%E9%9D%A2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 主管面</h1>
<h2> 自我介绍</h2>
<h3> 自我介绍</h3>
<p>面试官您好，我是刘大维，来自东北大学软件工程专业大三年级。我将从三个方面来介绍我自己：</p>
<p>首先，我热爱技术研发，学习能力良好。我在大学期间成绩优异，平均学分绩点为92.5，荣获国家奖学金。我具有良好的java基础以及扎实的开发能力，我主导开发的两个项目获得了国家二等奖、字节跳动青训营一等奖的优异成绩。</p>
<p>其次，我具有良好的沟通能力和强烈的责任心，无论是在平时的课程项目中，还是在科创竞赛中，我都经常担任团队组长，在项目管理过程中会提前梳理工作量，结合每个人的优势特长分配工作。</p>`,r:{minutes:19.82,words:5945},title:"主管面"},["/employment/interview/主管面.html","/employment/interview/%E4%B8%BB%E7%AE%A1%E9%9D%A2","/employment/interview/主管面.md","/employment/interview/%E4%B8%BB%E7%AE%A1%E9%9D%A2.md"]],["v-e4de8f16","/employment/interview/%E5%8F%8D%E9%97%AE.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 反问</h1>
<p>面试官：“你还有什么想问我的吗？”（回答模板）</p>
<p>此类问题大致分为三种情形：部门负责人面、HR面、高层领导面。</p>
<h3> <strong>一、部门负责人面</strong></h3>
<p>【判断自己的业务能力和性格特点是否与岗位匹配度高】 此时，你可以选择问： <strong>① 您认为优秀的XXX应该具备怎样的能力？</strong> （根据面试官的回答可以对自身的优势与不足有一定更准确的判断与了解，有利于明确自己后续的努力方向，避免少走弯路。） <strong>② 请问XXX岗位相关的考核指标有哪些？</strong> （进一步明晰入职后的具体工作内容与方向以及工作量，同时也表现自己对这份工作的关注程度，好感加分~） <strong>③ 请问目前这个部门的工作氛围是怎样的呢？</strong> （可以借此机会表达自己向往的工作氛围是怎样的，同时表达自己期待入职的热情。） <strong>④ 请问贵公司期望的到岗时间是怎样的呢？</strong> （对到岗时间有个大体的掌握与心理预期，同时判断公司对招人用人的急切程度等等。）</p>`,r:{minutes:3.09,words:926},title:"反问"},["/employment/interview/反问.html","/employment/interview/%E5%8F%8D%E9%97%AE","/employment/interview/反问.md","/employment/interview/%E5%8F%8D%E9%97%AE.md"]],["v-1c5516a4","/employment/interview/%E6%80%BB%E7%BB%93.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>暑期实习找工总结</p>
<p>一共投了6家公司</p>
<p>亚马逊、花旗银行 无反应</p>
<p>阿里 一面过 测评挂</p>
<p>SNK offer</p>
<p>京东 offer</p>
<p>华为 面试都过 泡池子等offer</p>
`,r:{minutes:.17,words:50},title:""},["/employment/interview/总结.html","/employment/interview/%E6%80%BB%E7%BB%93","/employment/interview/总结.md","/employment/interview/%E6%80%BB%E7%BB%93.md"]],["v-e7fcc674","/employment/resume/%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 如何写好工作总结？</h1>
<p>进了公司后，我们难免会被要求写一些工作总结，而且上级很可能会根据你的工作总结来评估绩效、决定是否升值加薪。因此，写好一份工作总结是至关重要的。</p>
<p>像我们鹅厂这边，每半年会有一次绩效考核，考核前要求我们每位员工和基干都要写一个自评（自我评价），其实就是对自己近半年来的工作总结了。比如你这半年做了哪些工作、之前定制的目标完成的怎么样了、给项目 / 团队 / 公司带来了哪些贡献等等。</p>
<p>虽然有些同学说：领导要给你什么样的绩效早就心里有数了，写自评就是意思意思。但我每次还是会认真写自评的，一方面是希望在老板那里有一点点的加分；另一方面也是写给自己看的，希望通过对自己近半年工作的回顾，帮助自己发现问题并改正、持续进步吧。</p>`,r:{minutes:7.63,words:2290},title:"如何写好工作总结？"},["/employment/resume/工作总结.html","/employment/resume/%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93","/employment/resume/工作总结.md","/employment/resume/%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93.md"]],["v-16cbeb16","/employment/resume/%E6%8A%80%E6%9C%AF%E6%A0%88.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 技术栈</h1>
<ul>
<li>良好的 Java 基础、熟悉集合、熟练使用 Java8 新特性、熟悉 JUC 并发编程。</li>
<li>熟悉 MySQL 的使用、理解锁、事物、索引的原理、了解常见的性能优化的方法。</li>
<li>熟悉 Redis 的使用、理解数据类型、线程模型、内存淘汰机制，能够解决缓存穿透、缓存雪崩、缓存击穿、双写一致性问题。</li>
<li>熟悉 RabbitMQ 的使用、了解死信队列、延迟队列的使用、了解消息幂等性、消息可靠性的解决方案。</li>
<li>了解 Spring 的 IoC、AOP、事务和设计模式。熟悉 Spring Boot、MyBatis 等常用开发框架，可以独立开发业务模块。</li>
<li>熟悉 Git 的基本使用、了解常见 Linux 命令、了解 Docker 的基本应用。</li>
</ul>`,r:{minutes:.65,words:195},title:"技术栈"},["/employment/resume/技术栈.html","/employment/resume/%E6%8A%80%E6%9C%AF%E6%A0%88","/employment/resume/技术栈.md","/employment/resume/%E6%8A%80%E6%9C%AF%E6%A0%88.md"]],["v-7559fca0","/employment/resume/%E6%8A%95%E9%80%92.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 投递</h1>
<h2> 如何获取求职信息？</h2>
<p>重点推荐几个找实习或工作的渠道：</p>
<p>1）实习僧，鱼皮的第一份实习就是在这里找的，机会很多
地址：<a href="https://tuiguang.shixiseng.com/" target="_blank" rel="noopener noreferrer">https://tuiguang.shixiseng.com/</a></p>
<p>2）牛客网，有很多互联网公司的内推机会
地址：<a href="https://www.nowcoder.com/" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/</a></p>`,r:{minutes:3.54,words:1062},title:"投递"},["/employment/resume/投递.html","/employment/resume/%E6%8A%95%E9%80%92","/employment/resume/投递.md","/employment/resume/%E6%8A%95%E9%80%92.md"]],["v-76befe12","/employment/resume/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%AE%80%E5%8E%86%E6%8C%87%E5%8D%97.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 程序员简历指南</h1>
<p>写在前面</p>
<p>简历有多重要？</p>
<p>简历是一个人求职的门面，也是整个求职过程中的 第一步 。如果简历不过关的话，后面的笔试、面试可能连机会都没有！</p>
<p>好的简历不仅能帮助你拿到面试机会，增加面试官的好感度。还能通过适当的内容引导来帮助你在面试中 出奇制胜 。</p>
<h3> 什么时候准备简历？</h3>
<p>千万不要等到找工作前才开始准备简历！真正好的简历不是一两天就能包装出来的，而是通过个人长期以来的积累、不断发掘并改进自己的不足、经过了多个版本的持续优化后才凝练而成的。</p>
<p>在你学完基础的开发技能，比如开发框架（前端 Vue、后端 SpringBoot 等），并且能够独立运用所学技术来完成一个属于自己的项目之后，就可以开始准备简历了。一般是学编程 6 个月到 1 年左右就可以开始准备了，写简历的过程也是帮助自己对当前的状态和学习进度、不足有个清醒的认识。</p>`,r:{minutes:58.54,words:17561},title:"程序员简历指南"},["/employment/resume/程序员简历指南.html","/employment/resume/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%AE%80%E5%8E%86%E6%8C%87%E5%8D%97","/employment/resume/程序员简历指南.md","/employment/resume/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%AE%80%E5%8E%86%E6%8C%87%E5%8D%97.md"]],["v-13fa91a7","/employment/resume/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 自我介绍</h1>
<p>面试官您好，我是刘大维，来自东北大学软件工程专业大三年级。我将从三个方面来介绍我自己：</p>
<p>首先，我热爱技术研发，学习能力良好。我在大学期间成绩优异，平均学分绩点为92.5，荣获国家奖学金。我具有良好的java基础以及扎实的开发能力，我主导开发的两个项目获得了国家二等奖、字节跳动青训营一等奖的优异成绩。</p>
<p>其次，我具有良好的沟通能力和强烈的责任心，无论是在平时的课程项目中，还是在科创竞赛中，我都经常担任团队组长，在项目管理过程中会提前梳理工作量，结合每个人的优势特长分配工作。</p>
<p>最后一个方面是，我勤奋好学、善于总结思考。我认为细致、踏实才能真正掌握知识点，在学习新技术的过程中，我往往会反复实践。我在过往的学习中，养成了写总结笔记的习惯，并且放在了我的个人博客上。</p>`,r:{minutes:1.81,words:543},title:"自我介绍"},["/employment/resume/自我介绍.html","/employment/resume/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D","/employment/resume/自我介绍.md","/employment/resume/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.md"]],["v-15b61052","/employment/resume/%E9%9D%A2%E8%AF%95%E7%BB%8F%E9%AA%8C.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 笔试</h3>
<p>选择题 + 算法题</p>
<p>选择大概18道，3道编程</p>
<p>七道单选，八道多选。</p>
<p>单选2*6=12，4*6=24，编程是14、20、30</p>
<p>40分过，算法题</p>
<h3> 测评</h3>
<p>刚写完素质测试题～来分享一下，一共分为四个部分：</p>
<p>第一个部分，阅读理解题吧，10题左右，每题60-90s不等</p>
<p>第二部分，图表题，看图表和文字计算结果，也是10道题，限时每题60-90s不等</p>
<p>第三部分，图形推理，10题每题60-90s不等</p>
<p>第四部分，性格测试，不限时选择98题</p>`,r:{minutes:.89,words:268},title:""},["/employment/resume/面试经验.html","/employment/resume/%E9%9D%A2%E8%AF%95%E7%BB%8F%E9%AA%8C","/employment/resume/面试经验.md","/employment/resume/%E9%9D%A2%E8%AF%95%E7%BB%8F%E9%AA%8C.md"]],["v-584aef61","/se/test/jmeter.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> JMeter</h1>
<p>JMeter是一款开源的压力测试工具，可以用于测试Web应用程序、FTP服务器、数据库等。以下是JMeter的一些常用功能和参数设置：</p>
<ol>
<li>
<p>线程组：线程组是JMeter中最基本的测试元素，用于模拟用户并发访问。可以设置线程数、循环次数、延迟时间等参数。</p>
</li>
<li>
<p>HTTP请求：HTTP请求用于模拟HTTP请求，可以设置请求方式、请求URL、请求参数、请求头等参数。可以使用JMeter的参数化功能，将请求参数设置为变量，以便在测试过程中动态修改参数值。</p>
</li>
<li>
<p>断言：断言用于验证响应结果是否符合预期。可以设置响应代码、响应头、响应内容等参数，以便进行验证。</p>
</li>
<li>
<p>监听器：监听器用于收集测试结果，并以图表、表格等形式展示。可以设置响应时间、吞吐量、错误率等参数，以便进行分析。</p>
</li>
<li>
<p>配置元件：配置元件用于设置全局参数，例如代理服务器、Cookie管理器、HTTP头管理器等。可以在测试计划中共享这些参数，以便在多个测试元素中使用。</p>
</li>
<li>
<p>断点控制器：断点控制器用于暂停测试过程，以便进行调试。可以设置断点位置、断点条件等参数。</p>
</li>
<li>
<p>分布式测试：JMeter支持分布式测试，可以将测试任务分配给多个JMeter客户端执行。可以设置主控节点、从节点、通信方式等参数。</p>
</li>
</ol>`,r:{minutes:1.62,words:486},title:"JMeter"},["/se/test/jmeter","/se/test/jmeter.md"]],["v-17903938","/se/tools/",{y:"a",d:"2022-12-04T02:34:19.000Z",e:`<h1> Tools</h1>
<p>实用工具</p>
`,r:{minutes:.02,words:5},title:"Tools"},["/se/tools/index.html","/se/tools/README.md"]],["v-59a7c044","/standardized/GRE/",{y:"a",d:"2022-12-03T11:21:38.000Z",e:`<h1> GRE</h1>
<p>330+</p>
<p>分数构成</p>
<ul>
<li>
<p>数学 170</p>
</li>
<li>
<p>语文 170</p>
</li>
<li>
<p>写作 6</p>
</li>
<li>
<p>Quantitative</p>
</li>
<li>
<p>Verbal</p>
</li>
</ul>
`,r:{minutes:.06,words:17},title:"GRE"},["/standardized/GRE/index.html","/standardized/GRE/README.md"]],["v-62ae8cb0","/standardized/TOEFL/",{y:"a",d:"2022-12-03T11:21:38.000Z",e:`<h1> TOEFL</h1>
<p>110+</p>
<p>分数：105</p>
<p>28 + 26 + 26 + 25</p>
<p>托福=英语语言能力+考试</p>
<h2> 英语语言能力</h2>
<p>词（量 音 形 意）</p>
<p>句（音变 语法 长度 提炼）</p>
<h3> 词汇</h3>
<ul>
<li>量</li>
<li>发音</li>
<li>意思，一词多义</li>
<li>写</li>
</ul>
<h3> 句子</h3>
<p>表层：</p>
<ul>
<li>句子语法结构</li>
<li>连读弱读语音</li>
</ul>
<p>提炼：中心句，关键信息</p>`,r:{minutes:1.54,words:462},title:"TOEFL"},["/standardized/TOEFL/index.html","/standardized/TOEFL/README.md"]],["v-4eeecf07","/standardized/TOEFL/%E8%AE%A1%E5%88%92.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 复习计划</h2>
<h3> 单词</h3>
<p>听力词汇</p>
<h3> 听力</h3>
<p>精听一个section</p>
<p>1c2l</p>
<h3> 口语</h3>
<p>练一个section</p>
<h3> 写作</h3>
<h3> 阅读</h3>
`,r:{minutes:.09,words:28},title:""},["/standardized/TOEFL/计划.html","/standardized/TOEFL/%E8%AE%A1%E5%88%92","/standardized/TOEFL/计划.md","/standardized/TOEFL/%E8%AE%A1%E5%88%92.md"]],["v-a7be60d0","/standardized/app/BL.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>耶鲁、斯坦福</p>
<p>Yale</p>
<p>Stanford</p>
`,r:{minutes:.02,words:7},title:""},["/standardized/app/BL","/standardized/app/BL.md"]],["v-5cca2bb4","/standardized/app/PHB.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> PH for Kory</h1>
<p>主要：mis</p>
<p>mim/mis/mism</p>
<p>ba</p>
<p>umich、jhu、cmu、nyu</p>
<h2> MIS</h2>
<p>mis/mim/it</p>
<p>比DS之类的容易一些</p>
<p>jhu，mis，商学院下面，stem、1年制（属于匹配，主申）、陆本友好</p>
<p>umich anabor，mis 非常适合转DS，很多分支，有HCI、DS、图书馆（想做数据很合适）、陆本友好，喜欢学霸（GPA、实习科研），缺点：地理位置村，工学院很强，大公司把这个当target school</p>
<p>cmu mism，录的多、陆本多，需要wes认证，有sde分支，很适合陆本转码，有12/16月，推荐16月的（12月主要招有全职的），适合转数据、BA（商业分析），以前是美本也不免托福，所以对陆本友好，这两年政策取消，所以</p>`,r:{minutes:3.42,words:1025},title:"PH for Kory"},["/standardized/app/PHB","/standardized/app/PHB.md"]],["v-55f6c938","/standardized/app/PHD.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> PH for David</h1>
<h3> 第一梯队</h3>
<p>Stanford mscs, mse（management science &amp; engineering）(美本清北复交，哥大也有这个项目)</p>
<p>cmu mscs 非常难，基本上死翘翘</p>
<p>cmu computational biology, 录取比例比cs、ai、ml高一些，经历比较match</p>
<p>cmu svse 偏向于招收两年工作经验的，避坑一下</p>
<p>scs下，msit，computational biology（计算生物系）</p>
<p>重点：cb、it（ai相关录取率基本上在个位数上，比较困难）</p>`,r:{minutes:4.95,words:1484},title:"PH for David"},["/standardized/app/PHD","/standardized/app/PHD.md"]],["v-58f3d4b0","/standardized/app/%E6%96%87%E4%B9%A6.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>fiverr</p>
<p>40刀-200刀，sop+3rl</p>
`,r:{minutes:.02,words:7},title:""},["/standardized/app/文书.html","/standardized/app/%E6%96%87%E4%B9%A6","/standardized/app/文书.md","/standardized/app/%E6%96%87%E4%B9%A6.md"]],["v-2b64e284","/zh/demo/",{y:"a",d:"2022-11-26T02:48:47.000Z",c:["使用指南"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/blog/zh/demo/markdown.html" target="blank">Markdown 展示</a></p>
</li>
<li>
<p><a href="/blog/zh/demo/page.html" target="blank">页面展示</a></p>
</li>
<li>
<p><a href="/blog/zh/demo/disable.html" target="blank">禁用展示</a></p>
</li>
<li>
<p><a href="/blog/zh/demo/encrypt.html" target="blank">加密展示</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},title:"主要功能与配置演示",i:"discover"},["/zh/demo/index.html","/zh/demo/README.md"]],["v-c1942916","/zh/demo/disable.html",{y:"a",d:"2022-11-26T02:48:47.000Z",c:["使用指南"],g:["禁用"],e:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,r:{minutes:.42,words:127},title:"布局与功能禁用",i:"config"},["/zh/demo/disable","/zh/demo/disable.md"]],["v-65c00218","/zh/demo/encrypt.html",{y:"a",d:"2022-11-26T02:48:47.000Z",c:["使用指南"],g:["文章加密"],n:!0,r:{minutes:.52,words:156},title:"密码加密的文章",i:"lock"},["/zh/demo/encrypt","/zh/demo/encrypt.md"]],["v-36295574","/zh/demo/markdown.html",{y:"a",d:"2022-11-26T02:48:47.000Z",c:["使用指南"],g:["Markdown"],e:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,r:{minutes:4.09,words:1226},title:"Markdown 展示",i:"markdown"},["/zh/demo/markdown","/zh/demo/markdown.md"]],["v-62ced1a6","/zh/demo/page.html",{y:"a",a:"Ms.Hope",d:"2020-01-01T00:00:00.000Z",l:"2020年1月1日",c:["使用指南"],g:["页面配置","使用指南"],u:!0,e:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,r:{minutes:1.58,words:475},title:"页面配置",i:"page"},["/zh/demo/page","/zh/demo/page.md"]],["v-9ef49308","/zh/posts/cherry.html",{y:"a",d:"2022-01-09T00:00:00.000Z",l:"2022年1月9日",c:["樱桃"],g:["红","小","圆"],e:`<h1> 樱桃</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.1,words:31},title:"樱桃",i:"edit"},["/zh/posts/cherry","/zh/posts/cherry.md"]],["v-3fbd497c","/zh/posts/dragonfruit.html",{y:"a",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["火龙果","水果"],g:["红","大"],e:`<h1> 火龙果</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"火龙果",i:"edit"},["/zh/posts/dragonfruit","/zh/posts/dragonfruit.md"]],["v-46587e86","/zh/posts/strawberry.html",{y:"a",d:"2022-01-11T00:00:00.000Z",l:"2022年1月11日",c:["水果","草莓"],g:["红","小"],e:`<h1> 草莓</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:32},title:"草莓",i:"edit"},["/zh/posts/strawberry","/zh/posts/strawberry.md"]],["v-56a32aab","/zh/posts/tomato.html",{y:"a",d:"2022-01-12T00:00:00.000Z",l:"2022年1月12日",c:["蔬菜"],g:["红","圆"],u:!0,e:`<h1> 番茄</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"番茄",i:"edit"},["/zh/posts/tomato","/zh/posts/tomato.md"]],["v-cb925366","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E5%A4%A7%E7%BA%B2.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 区块链技术发展进展-以认证数据结构为例</h1>
<p><a href="https://www.wwsww.cn/jishu/2081.html" target="_blank" rel="noopener noreferrer">https://www.wwsww.cn/jishu/2081.html</a></p>
<h2> 区块链技术发展概览</h2>
<blockquote>
<p>这部分主要参考这篇文章：</p>
<p><a href="https://www.ccvalue.cn/article/414856.html" target="_blank" rel="noopener noreferrer">清华区块链报告：深度剖析国内外区块链最新进展 | 附报告全文 - 碳链价值 (ccvalue.cn)</a></p>
<p>三页左右即可，只是一个概述</p>
</blockquote>`,r:{minutes:12.36,words:3707},title:"区块链技术发展进展-以认证数据结构为例"},["/course/block-chain/作业/大纲.html","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E5%A4%A7%E7%BA%B2","/course/block-chain/作业/大纲.md","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E5%A4%A7%E7%BA%B2.md"]],["v-65fed5a9","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E6%9C%9F%E6%9C%AB.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 期末</h1>
<p>汇报任何和区块链相关的都可以，可以是程序，可以是案例，认证数据结构，安全多方计算，共识机制，新区块链系统 P2P 网络 闪电网络、区块链相关的论文等等。</p>
<p>汇报的时间在9分钟以内。</p>
<p>汇报任何和区块链相关的都可以，可以是程序，可以是案例，认证数据结构，安全多方计算，共识机制，新区块链系统，P2P 网络，闪电网络、区块链相关的论文等等。</p>
<ol>
<li>认证数据结构</li>
</ol>
<p>认证数据结构（Authenticated Data Structures）是一种数据结构，可以在不泄露数据的情况下，对数据进行验证和修改。它可以用于保护数据的完整性和安全性，防止数据被篡改或伪造。常见的认证数据结构包括Merkle树、哈希链和哈希树等。</p>`,r:{minutes:5.92,words:1776},title:"期末"},["/course/block-chain/作业/期末.html","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E6%9C%9F%E6%9C%AB","/course/block-chain/作业/期末.md","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E6%9C%9F%E6%9C%AB.md"]],["v-eda53cb6","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E8%B5%84%E6%96%99.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>郑晨风3.77，120名</p>
<p>张国庆3.68，140</p>
<p>郭子桓2.93，48树莓</p>
<p>目前还有第一个part需要一位同学来认领，然后另外一位同学可以视情况做一些整体善后的工作啦，或者如果两位同学</p>
<p>There are different types of authenticated data structures in blockchain, such as <strong>digital signatures</strong> and <strong>digital watermarking</strong>⁴.</p>
<p>Digital signatures are a secure form of authentication where trust can be anchored on the digital signature of both parties⁴. Digital watermarking is a form of data origin authentication that gives data source authentication without any need to access the source data⁴.</p>`,r:{minutes:2.29,words:687},title:""},["/course/block-chain/作业/资料.html","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E8%B5%84%E6%96%99","/course/block-chain/作业/资料.md","/course/block-chain/%E4%BD%9C%E4%B8%9A/%E8%B5%84%E6%96%99.md"]],["v-8580ea64","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 实验1</h1>
<p>关键在理解伪代码，怎么弄</p>
<p>写一个merkle tree</p>
<p>实验要求：</p>
<ol>
<li>
<p>生成一个2^n个元素的集合，要求里面没有重复元素</p>
</li>
<li>
<p>要求用数组存构建这棵树（这样简单一些）</p>
</li>
<li>
<p>hash函数选取一个，如md5或sha256、sha1</p>
<p>用库，千万不要自己实现</p>
</li>
</ol>
<p>节点三类：清节点（记录区块的头和与自己有关的节点）</p>
<h3> 证明存在</h3>
<p>返回证据（以及他们所在左右）</p>
<p>自下而上构建</p>`,r:{minutes:1.14,words:343},title:"实验1"},["/course/block-chain/实验/实验1.html","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C1","/course/block-chain/实验/实验1.md","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C1.md"]],["v-82173926","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C2.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 实验 2</h1>
<p>remix 平台，NFT，比较简单</p>
<p>去年有一个配置比特币 RPC 环境，今年取消了</p>
<p>智能合约放在上面，openSea</p>
<p>建议做 NFT 实验，换了一个测试网</p>
<p>这个 neunft.sol 就是智能合约的代码</p>
<p>dox 里面有详细教程</p>
<p>需要一个 ipfs 就是把图片放到星际文件系统（去年他们做的开盲盒的内容</p>
<p>11 周周日（第一天）之前交</p>
<ul>
<li>注册这个 Metamask 火狐狸的钱包</li>
<li>用 remix 平台</li>
<li>用 mumbai 网络，以前那个有问题不要用</li>
<li>然后在 opensea 平台上就可以看到了</li>
</ul>`,r:{minutes:1.1,words:331},title:"实验 2"},["/course/block-chain/实验/实验2.html","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C2","/course/block-chain/实验/实验2.md","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C2.md"]],["v-7ead87e8","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C3.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>第三个在remix平台找一个智能合约，看一下看懂调用一下就可以了</p>
<p>三选二</p>
`,r:{minutes:.1,words:30},title:""},["/course/block-chain/实验/实验3.html","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C3","/course/block-chain/实验/实验3.md","/course/block-chain/%E5%AE%9E%E9%AA%8C/%E5%AE%9E%E9%AA%8C3.md"]],["v-19e12e64","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 测验1</h1>
<h2> 对称算法非对称</h2>
<p>对称算法(Symmetric Algorithm)：加密密钥能够从解密密钥中推算出来，反之亦然(大多数对称算法加密密钥和解密 密钥相同)。又称为私钥密码、单钥密码。</p>
<ul>
<li>对称加密算法的优点是计算量小、加密速度快、加密效率高。它通常在消息发送方需要加密大量数据时使用。</li>
<li>对称加密的缺点是秘钥的安全性难以保证，需要在通信之前先同步秘钥，容易被窃听或篡改。</li>
<li>常见的对称加密算法有DES、AES、RC4等。</li>
</ul>
<p>非对称算法(Asymmetric Algorithm)：用作加密的密钥不同于用作解密的密钥，而且解密密钥不能根据加密密钥计算出来。又称为公钥密码、双钥密码。非对称加密使用一对秘钥，一个公开（公钥），一个保密（私钥）。 一般使用公钥进行加密，私钥进行解密，或者反过来。</p>`,r:{minutes:3.67,words:1101},title:"测验1"},["/course/block-chain/测验/测验1.html","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C1","/course/block-chain/测验/测验1.md","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C1.md"]],["v-16777d26","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C2.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 测验2</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/image-20230411093414663.png" alt="image-20230411093414663" loading="lazy"></p>
<h3> 选择题</h3>
<h3> 论述题</h3>
<blockquote>
<p>从访问控制的角度可将区块链分成几类,分别是什么?并对比各类。</p>
</blockquote>
<p>从访问控制的角度，我们常把区块链分为公有链、联盟链和私有链：</p>
<ul>
<li>公有链(Public Blockchain)，是指所有人都可以参与的区块链，比如Bitcoin、EOS、Ethereum。</li>
<li>联盟链(Consortium Blockchair)是指只有特定组织或个人可以参与的区块链，比如联合银行间清算系统（UBS）联盟链、Fabric、R3联盟。</li>
<li>私有链(Private Blockchain)是指只有特定组织或个人可以参与的区块链，比如Multichain、Monax。</li>
</ul>`,r:{minutes:9.82,words:2945},title:"测验2"},["/course/block-chain/测验/测验2.html","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C2","/course/block-chain/测验/测验2.md","/course/block-chain/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C2.md"]],["v-7a39bf00","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E5%A4%A7%E4%BD%9C%E4%B8%9A.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 如何实现一个扫描全能王？</h1>
<p>三个需求</p>
<ul>
<li>找到图片中的纸张：边缘检测</li>
<li>将纸张修复展平并放在图像中间：透视变换</li>
<li>更进一步：如何识别图中文字？</li>
</ul>
<h2> 文档扫描</h2>
<ol>
<li>边缘检测</li>
<li>获取纸张轮廓</li>
<li>透视变换</li>
</ol>
<h2> OCR</h2>
<ul>
<li>CTPN 算法：检测文本位置</li>
<li>CRNN 算法：识别文本内容</li>
</ul>
<h3> CTPN 算法</h3>
<blockquote>
<p>ECCV 2016提出的一种文字检测算法</p>
<p>Z. Tian, W. Huang, T. He, P. He and Y. Qiao: Detecting Text in Natural Image with Connectionist Text Proposal Network, ECCV, 2016.</p>
</blockquote>`,r:{minutes:2.98,words:894},title:"如何实现一个扫描全能王？"},["/course/deep-learning/汇报/大作业.html","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E5%A4%A7%E4%BD%9C%E4%B8%9A","/course/deep-learning/汇报/大作业.md","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E5%A4%A7%E4%BD%9C%E4%B8%9A.md"]],["v-806780e0","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E8%AE%B2%E7%A8%BF.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 如何实现一个扫描全能王？</h1>
<p>相信大家都有使用过扫描全能王吧，大家有没有考虑过如何实现一个扫描全能王呢？</p>
<p>我们将从如下五个方面，解决这个问题。</p>
<p>首先我们先对问题所需的任务进行一个分析</p>
<h2> <strong>问题概览</strong></h2>
<p>三个需求</p>
<ul>
<li>找到图片中的纸张：边缘检测</li>
<li>将纸张修复展平并放在图像中间：透视变换</li>
<li>更进一步：如何识别图中文字？</li>
</ul>
<h2> 文档扫描过程</h2>
<p>扫描过程中，主要涉及到如上三个步骤：</p>
<p>123</p>`,r:{minutes:4.08,words:1224},title:"如何实现一个扫描全能王？"},["/course/deep-learning/汇报/讲稿.html","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E8%AE%B2%E7%A8%BF","/course/deep-learning/汇报/讲稿.md","/course/deep-learning/%E6%B1%87%E6%8A%A5/%E8%AE%B2%E7%A8%BF.md"]],["v-881a2a42","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业 1</h1>
<p><strong>智能学习笔记本</strong></p>
<p>智能学习笔记本是一款可以帮助学生提高学习效率和质量的智能化产品。它具有以下特点：</p>
<ul>
<li>可以识别用户的书写和语音，并将其转换为电子文档，方便保存和分享。</li>
<li>可以根据用户的学习目标和进度，自动生成个性化的复习计划和测试题目，帮助用户巩固知识点和检测学习效果。</li>
<li>可以通过人工智能分析用户的学习行为和偏好，提供合适的学习资源和建议，增强用户的兴趣和动力。</li>
<li>可以与其他智能设备如手机、平板、电脑等无缝连接，实现跨平台的数据同步和互动。</li>
</ul>`,r:{minutes:.67,words:200},title:"作业 1"},["/course/intel-elec/作业/作业1.html","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1","/course/intel-elec/作业/作业1.md","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1.md"]],["v-84b07904","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业2</h1>
`,r:{minutes:.01,words:3},title:"作业2"},["/course/intel-elec/作业/作业2.html","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2","/course/intel-elec/作业/作业2.md","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2.md"]],["v-8146c7c6","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业 3</h1>
<p>利用 multisim 进行电路模拟，然后做选择题</p>
<ol>
<li>给了电路的文件 ms14，需要用 multisim14 软件打开即可</li>
<li>multisim 只支持 Windows 系统打开</li>
<li>9 道选择题，对应了几个电路，每个都给了</li>
</ol>
<p>1-3 电路 1，3 个题</p>
<p>4-5 电路 2，2 个题</p>
<p>6-9 电路 3，4 个题</p>
<p>我把下载链接和 ms14 文件发给那个同学，等他下载完以后，然后让他打开，跑一下，或者他先下载，然后我给他远程桌面一下。</p>
`,r:{minutes:.46,words:138},title:"作业 3"},["/course/intel-elec/作业/作业3.html","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3","/course/intel-elec/作业/作业3.md","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3.md"]],["v-7ddd1688","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业 4</h1>
<p>注册中国专利网，在政务服务分区到专利检索里面找智能冰箱的专利</p>
<p>找一个专利，在雨课堂里面提交作业</p>
<p>专利网保护文字，不保护配图，必须是写成具体的文字描述才能得到保护，图想要保护，一定要详细用文字描述出来才行。</p>
<p>有图文即可</p>
<p>冰箱内物品提示方法、装置、电子设备及存储介质</p>
<p>这份专利申请提供了一种冰箱内物品提示方法、装置、电子设备及存储介质，通过获取查找物品的语音指令，并确定与所述语音指令对应的物品信息；在所述智能冰箱中确定与所述物品信息对应的目标物品的物品储存位置；基于所述物品储存位置在至少一个所述参照物中确定与所述目标物品对应的目标参照物，并确定所述目标物品与所述目标参照物的第一空间关系；基于所述目标参照物的参照物位置和所述第一空间关系对所述目标物品的物品储存位置进行感官提示。从而辅助盲人用户在冰箱中快速定位目标物品。</p>`,r:{minutes:3.91,words:1174},title:"作业 4"},["/course/intel-elec/作业/作业4.html","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4","/course/intel-elec/作业/作业4.md","/course/intel-elec/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4.md"]],["v-7ff1e5e5","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%9C%9F%E6%9C%AB.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 期末</h1>
<p>基本上都是原题</p>
<p>25 道客观题小题，每个人的不同，有的题 1 分，有的 2 分：选择、判断</p>
<ul>
<li>Multisim</li>
<li>Matlab
<ul>
<li>矩阵</li>
<li>图像</li>
</ul>
</li>
</ul>
<h2> 小题</h2>
<h3> 一</h3>
<h3> 1</h3>
<h3> 2</h3>
<p>总之，光电三极管工作原理分为两个过程：一是 <strong>光电转换；二是光电流放大</strong>。最大特点是输出电流大，达毫安级。 但响应速度比光电二极管慢得多，温度效应也比光电二极管大得多。</p>`,r:{minutes:2.81,words:842},title:"期末"},["/course/intel-elec/测验/期末.html","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%9C%9F%E6%9C%AB","/course/intel-elec/测验/期末.md","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%9C%9F%E6%9C%AB.md"]],["v-6869cf82","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 测验</h1>
<h2> 平时测验</h2>
<h3> 单选题</h3>
<p>测得品体管三个电极的静态电流分别为0.06mA,3.66mA和3.6mA。则该晶体管的静态电流放大系数是多少？</p>
<blockquote>
<p>60</p>
</blockquote>
<p>二极管整流电路利用了半导体二极管的哪种特性？</p>
<ol>
<li>电流放大特性</li>
<li>电压放大待性</li>
<li>单向导电特性</li>
<li>反向击穿特性</li>
</ol>
<blockquote>
<p>单向导电特性</p>
</blockquote>
<p>晶体管能够实现放大的外部条件是什么？</p>`,r:{minutes:2.6,words:779},title:"测验"},["/course/intel-elec/测验/测验.html","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C","/course/intel-elec/测验/测验.md","/course/intel-elec/%E6%B5%8B%E9%AA%8C/%E6%B5%8B%E9%AA%8C.md"]],["v-edfa1c3e","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E6%96%87%E7%8C%AE%E6%B1%87%E6%80%BB.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 智能家居智能电子系统调研汇报</h1>
<h2> 智能家居系统概述</h2>
<blockquote>
<p>赵晓纯,王芳.嵌入式智能家居电子控制系统开发策略[J].电子质量,2019(2):31-35,48.DOI:10.3969/j.issn.1003-0107.2019.02.008.</p>
</blockquote>
<h3> 背景介绍</h3>
<p>在现代信息技术和科学技术不断发展的过程中，远程监控系统也被广泛应用到消防控制、智能建筑等多种领域中，并且也成为了社会中各行业场所安防及重点部门的安防基础，管理部门能够根据远程监控系统获得视频图像信息，从而有效实现异常事件的处理和监控等目的。</p>`,r:{minutes:6.49,words:1947},title:"智能家居智能电子系统调研汇报"},["/course/intel-elec/翻转课堂/文献汇总.html","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E6%96%87%E7%8C%AE%E6%B1%87%E6%80%BB","/course/intel-elec/翻转课堂/文献汇总.md","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E6%96%87%E7%8C%AE%E6%B1%87%E6%80%BB.md"]],["v-444e8e82","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 翻转课堂</h1>
<p>要向三位同学提问，小组内要有讨论记录放到雨课堂翻转课堂的主观题</p>
<p>记录：你问别人的问题，别人怎么回答的</p>
<p>翻转课堂上课以后打开填写</p>
<p>在上课前要完成设计</p>
<h2> 选题</h2>
<p>你好，我理解你需要通过 3~5 篇文献调研一种智能电子系统并制作讲解 PPT。我不知道你想调研哪个方面的智能电子系统，例如智能家居、智能医疗、智能交通等等。如果你能告诉我你想调研的方向，我可以帮你更好地回答你的问题。另外，你可以在文献中寻找相关信息并制作 PPT，或者使用一些在线 PPT 制作工具，例如百度文库、WPS 等等。希望这些信息对你有所帮助。</p>`,r:{minutes:2.81,words:844},title:"翻转课堂"},["/course/intel-elec/翻转课堂/翻转课堂.html","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82","/course/intel-elec/翻转课堂/翻转课堂.md","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82.md"]],["v-01fbf701","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E9%97%AE%E7%AD%94.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 问题</h1>
<p>同学：计算机 2102-20215974-陈煜</p>
<p>问题：按照你的理解，智能家居可以分为哪些类？</p>
<p>回答：根据不同划分标准可以有不同的方案。</p>
<ul>
<li>按规模划分：可以分为 2 种，以小区或楼宇为控制范围、以单个用户的室内空间为控制范围。</li>
<li>按服务特性划分：可以分为舒适型、健康型及安全型 3 类。</li>
<li>按网络布线技术划分：可以分为基于分布式现场总线技术、基于集中控制技术和基于无线技术。</li>
</ul>
<p>同学：电子 2102-20216234-王磊</p>
<p>问题：信号还有哪些基本运算？</p>`,r:{minutes:1.35,words:406},title:"问题"},["/course/intel-elec/翻转课堂/问答.html","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E9%97%AE%E7%AD%94","/course/intel-elec/翻转课堂/问答.md","/course/intel-elec/%E7%BF%BB%E8%BD%AC%E8%AF%BE%E5%A0%82/%E9%97%AE%E7%AD%94.md"]],["v-dadd1a02","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%8A%A5%E5%91%8A.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>按时间来写</p>
<p>前三周写学的知识点（一个列表</p>
<p>第四周需求分析，把一些自己的东西放进去，梗概内容和关键的图片放进去几个即可，不然太多了</p>
<p>第五周，设计部分，比如说ER图，架构设计，前后端分离各用什么技术</p>
<p>如果做的比较快，也可以第四周的内容写需求分析和设计，第五周写开发的内容</p>
<p>小组开会发现的问题总结下来，放到存在问题那一栏里面</p>
<p>这周总结需求分析的时候存在的问题</p>
<p>下周设计部分存在的问题</p>
<p>要写出来：提出问题、讨论、解决问题</p>
<p>中期报告奔着最终的报告来去的，要遵从实训报告提出来的需求的点</p>`,r:{minutes:2.71,words:812},title:""},["/course/neusoft/中期/报告.html","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%8A%A5%E5%91%8A","/course/neusoft/中期/报告.md","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%8A%A5%E5%91%8A.md"]],["v-21be9004","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%96%87%E6%A1%A3.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 第一周</h3>
<p>第一周的主要工作是学习基本开发框架，包括MyBatis、Spring、SpringMVC的相关知识和使用方法。</p>
<p>MyBatis</p>
<ol>
<li>课程整体安排介绍</li>
<li>环境搭建</li>
<li>MyBatis框架基本入门</li>
<li>MyBatis框架接口开发</li>
<li>MyBatis框架核心配置文件</li>
<li>MyBatis框架输入映射和输出映射</li>
<li>MyBatis框架关联实体和关联集合</li>
<li>MyBatis框架延迟加载</li>
<li>MyBatis框架缓存</li>
<li>MyBatis框架逆向工程</li>
</ol>`,r:{minutes:2.49,words:746},title:""},["/course/neusoft/中期/文档.html","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%96%87%E6%A1%A3","/course/neusoft/中期/文档.md","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E6%96%87%E6%A1%A3.md"]],["v-1e28a188","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E9%97%AE%E9%A2%98.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>（可围绕以下两点进行评价：1.是否给出解决方案，并意识到方案的局限性；2.是否主动提出并清晰表达观点。）</p>
<p>小组开会发现的问题总结下来，放到存在问题那一栏里面</p>
<p>这周总结需求分析的时候存在的问题</p>
<p>下周设计部分存在的问题</p>
<p>要写出来：提出问题、讨论、解决问题</p>
<ol>
<li>如果中心仓库只有一个，则很难为各地均提供快速的物流服务。</li>
</ol>
<p>我设计出了分布式的中心库房，即分区中心库房。具体如华北库房、华中库房分别优先进行其各自区域内订单的物流配送，以提升配送的速度，同时减少货物集中带来的仓储的压力。</p>
<ol start="2">
<li>商品在中心库房有货时可以很快配送给用户，但是中心库房缺货时，需要先从供货商配送到中心库房再从中心库房给用户配货造成物流资源和时间成本上的浪费</li>
</ol>`,r:{minutes:4.57,words:1371},title:""},["/course/neusoft/中期/问题.html","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E9%97%AE%E9%A2%98","/course/neusoft/中期/问题.md","/course/neusoft/%E4%B8%AD%E6%9C%9F/%E9%97%AE%E9%A2%98.md"]],["v-0b82bae4","/course/neusoft/%E5%88%86%E6%9E%90/%E7%B3%BB%E7%BB%9F%E5%88%86%E6%9E%90.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 系统分析</h1>
<h2> 业务概述</h2>
<p>物流配送系统的主要目标是为配送公司开发有市场前景的配送服务提供支持；并快速，高效调度配送公司内的各种资源，使配送公司内的各部门协助合作为客户提供满意、高效的配送服务。</p>
<p>经过对和某公司同仁的讨论，结合公司现有的工作模式，对物流配送管理系统进行了分析。</p>
<p>基于完整性的考虑，结合现有工作模式，形成此规格说明书，以便开发方可以直接进行设计开发。</p>
<p>物流配送系统旨在高效地调度配送的仓储和物流资源，使配送公司内的各职能部门有序地协作，为客户提供安全、快捷的配送服务。</p>
<p>面向客户方：我们支持加急订单、常规订单、变更订单信息、退换货、管理常用收货地址、以及实时获取最新的订单物流状态信息。</p>`,r:{minutes:3.11,words:934},title:"系统分析"},["/course/neusoft/分析/系统分析.html","/course/neusoft/%E5%88%86%E6%9E%90/%E7%B3%BB%E7%BB%9F%E5%88%86%E6%9E%90","/course/neusoft/分析/系统分析.md","/course/neusoft/%E5%88%86%E6%9E%90/%E7%B3%BB%E7%BB%9F%E5%88%86%E6%9E%90.md"]],["v-4bfca452","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 前端设计</h1>
<h2> 界面设计</h2>
<ul>
<li>用户和骑手优先保证移动端的界面，vant</li>
<li>管理界面只需要电脑端，arco design</li>
</ul>
<h3> 用户端</h3>
<h4> 登录注册（刘）</h4>
<ul>
<li>登录</li>
<li>账号密码登录</li>
<li>邮箱登录</li>
<li>注册
<ul>
<li>邮箱注册</li>
</ul>
</li>
</ul>
<h4> 订单管理/我的订单</h4>
<ul>
<li>下单（deng）</li>
<li>所有订单，查看已有的所有，这里可以（<strong>雷神</strong>）
<ul>
<li>搜索</li>
<li>无限下拉，分页</li>
</ul>
</li>
<li>订单详情（<strong>雷神</strong>）
<ul>
<li>订单信息（收货地址、收货人、发送时间、预计达到时间</li>
<li>订单状态</li>
<li>地图（假的，现实再那个城市）</li>
</ul>
</li>
</ul>`,r:{minutes:4.39,words:1317},title:"前端设计"},["/course/neusoft/开发/前端设计.html","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1","/course/neusoft/开发/前端设计.md","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1.md"]],["v-55484202","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%90%8E%E7%AB%AF%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 后端</h1>
<h2> 设计</h2>
<h3> 信息流</h3>
<ul>
<li>
<p><strong>order</strong> 订单</p>
<p>类型：新订、换货、退货、退订（、全部）</p>
<p>状态：待支付、已支付（待调度）、已调度（待出库）、已出库、已入库（待分配）、已分配（待领货）、已领货（待收货）、已收货（完成）、取消</p>
<p>调拨单、出库单（入库单）、分发单（验货单）、任务单、签收单</p>
<blockquote>
<p>待支付、可调度/撤销、已调度、中心库房出库、配送站到货、可分配、已分配、已领货、完成、失败、缺货</p>
</blockquote>
</li>
<li>
<p><strong>work order</strong> 任务单（配送-&gt;用户）</p>
<p>类型：送货/配送、换货、退货（这些任务都会产生回执任务单）</p>
<p>状态：已调度（待出库）、已出库、已入库（待分配）、已分配（待领货）、已领货（待收货）、已收货（完成）、取消</p>
<blockquote>
<p>已调度、可分配、已分配、已领货、（待收货）、完成、失败等</p>
</blockquote>
</li>
<li>
<p><strong>Invoice</strong> 发票</p>
<p>状态：待领用、已领用、已退回、取消</p>
</li>
<li>
<p>receipt 签收单</p>
<ul>
<li>签收单号、</li>
<li>任务单ID、</li>
<li>客户ID</li>
<li>客户姓名、</li>
<li>联系电话、</li>
<li>邮编、</li>
<li>送货地址、</li>
<li>送货日期、</li>
<li>送货要求、</li>
<li>送货分站、
<ul>
<li>ID</li>
<li>name</li>
<li>地址、</li>
<li>电话、</li>
</ul>
</li>
<li>是否要发票、</li>
<li>订单ID</li>
<li>备注、</li>
<li>客户满意度</li>
<li>客户反馈、</li>
</ul>
</li>
<li>
<p><strong>check order</strong> 分发/验货单（仓库-&gt;物流公司-&gt;分站）</p>
<p>状态：已出库、已入库（待分配）、取消</p>
</li>
<li>
<p><strong>storage order</strong> 出/入库单</p>
<p>状态：已出库、已入库（待分配）、取消</p>
<p>分发单=验货单</p>
<p>出库单=分发单汇总X</p>
</li>
<li>
<p><strong>Purchase order</strong> 购货单（供应商-&gt;仓库）</p>
</li>
<li>
<p><strong>transfer order</strong> 调拨单（仓库-&gt;分站）</p>
<p>意义：确定仓库、分站、物流公司</p>
<p>状态：已调度（待出库）、已出库、已入库（待分配）、取消</p>
</li>
</ul>`,r:{minutes:7.9,words:2370},title:"后端"},["/course/neusoft/开发/后端设计.html","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%90%8E%E7%AB%AF%E8%AE%BE%E8%AE%A1","/course/neusoft/开发/后端设计.md","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%90%8E%E7%AB%AF%E8%AE%BE%E8%AE%A1.md"]],["v-40277606","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%B7%A5%E4%BD%9C%E8%B4%A1%E7%8C%AE%E7%BB%9F%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 工作贡献统计</h1>
<h2> 刘</h2>
<h3> 需求分析部分：</h3>
<p>客户服务中心、下单</p>
<h3> 系统设计部分：</h3>
<p>数据库所有共47张表、9个微服务、所有实体类vo类、管理端、用户端、配送端三端设计。客户服务中心所有业务流程设计。</p>
<h3> 系统实现部分：</h3>
<ul>
<li>后端
<ul>
<li>所有9个微服务共计19300多行代码；</li>
</ul>
</li>
<li>管理端
<ul>
<li>登录注册验证码登录、</li>
<li>个人中心、</li>
<li>权限管理、
<ul>
<li>用户管理
<ul>
<li>CRUD</li>
<li>用户授权</li>
</ul>
</li>
<li>角色管理
<ul>
<li>CRUD</li>
<li>角色授权</li>
</ul>
</li>
<li>权限管理</li>
</ul>
</li>
<li>商品管理（
<ul>
<li>属性组管理、</li>
<li>属性管理、</li>
<li>分类管理、</li>
<li>商品管理、</li>
<li>商品创建、</li>
<li>商品上下架）；</li>
</ul>
</li>
</ul>
</li>
<li>用户端
<ul>
<li>登录注册、</li>
<li>个人中心、</li>
<li>首页数据、</li>
<li>商品搜索、</li>
<li>商品详情</li>
</ul>
</li>
</ul>`,r:{minutes:4.07,words:1220},title:"工作贡献统计"},["/course/neusoft/开发/工作贡献统计.html","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%B7%A5%E4%BD%9C%E8%B4%A1%E7%8C%AE%E7%BB%9F%E8%AE%A1","/course/neusoft/开发/工作贡献统计.md","/course/neusoft/%E5%BC%80%E5%8F%91/%E5%B7%A5%E4%BD%9C%E8%B4%A1%E7%8C%AE%E7%BB%9F%E8%AE%A1.md"]],["v-dd640a06","/course/neusoft/%E5%BC%80%E5%8F%91/%E6%B5%8B%E8%AF%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>亲爱的同学,您好!感谢您的测试方案设计任务,我很荣幸可以提供一些意见。下面是我Draft的测试方案设计报告,字数约1300字,请您参考:</p>
<p>接口测试方案设计</p>
<ol>
<li>接口测试的目的</li>
</ol>
<ul>
<li>检查各个模块之间的接口是否符合设计文档的定义</li>
<li>接口的参数和返回值是否正确</li>
<li>接口的容错能力和稳定性</li>
</ul>
<ol start="2">
<li>测试用例设计</li>
</ol>
<ul>
<li>对所有接口编写测试用例,包含正常用例和异常用例</li>
<li>正常用例检查接口的基本功能和参数返回</li>
<li>异常用例检查接口的容错能力,包括传入非法参数、服务不可用等情况</li>
</ul>`,r:{minutes:2.85,words:856},title:""},["/course/neusoft/开发/测试.html","/course/neusoft/%E5%BC%80%E5%8F%91/%E6%B5%8B%E8%AF%95","/course/neusoft/开发/测试.md","/course/neusoft/%E5%BC%80%E5%8F%91/%E6%B5%8B%E8%AF%95.md"]],["v-a4194498","/course/neusoft/%E5%BC%80%E5%8F%91/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>形成自己的需求，写一份文档出来</p>
<p>流程，自己把自己的模块画出来，模块和模块之间的可以一起画</p>
<p>系统运行环境，按实际情况来写</p>
<p>大的流程、小的流程</p>
<p>需求分析</p>
<p>周五交第一个版本的需求分析文档，20号交中期报告（需求和设计部分</p>
<p>周五：图+文字描述</p>
<p>中期：格式就得比较好</p>
<p>划分任务</p>
<p>系统分析：就是做需求分析的过程（把</p>
<p>概要分析，大的模块、角色、流程</p>
<p>详细描述，每一个功能点的情况</p>
<p>设计部分，包括数据库的设计，每一个表的情况，数据模型</p>`,r:{minutes:.86,words:258},title:""},["/course/neusoft/开发/系统设计.html","/course/neusoft/%E5%BC%80%E5%8F%91/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1","/course/neusoft/开发/系统设计.md","/course/neusoft/%E5%BC%80%E5%8F%91/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1.md"]],["v-be0f4bc2","/course/neusoft/%E6%8A%A5%E5%91%8A/%E5%AE%9E%E8%AE%AD%E6%80%BB%E7%BB%93%E6%8A%A5%E5%91%8A.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 实训总结报告</h1>
<h2> “前言”</h2>
<h3> “实训背景”</h3>
<blockquote>
<p>可简介实训目的、通过何种方式到此单位实训等内容；</p>
</blockquote>
<h3> “实训环境”</h3>
<blockquote>
<p>可包括实训单位全称（中英文）、地址、实训单位性质、规模、简介、所在部门、该部门主要工作、指导教师安排等内容；</p>
</blockquote>
<h3> “实训过程”</h3>
<blockquote>
<p>概述实训各阶段所从事的主要工作等。</p>
</blockquote>
<ul>
<li>
<p>学习阶段</p>
</li>
<li>
<p>分析阶段</p>
</li>
<li>
<p>设计阶段</p>
</li>
<li>
<p>开发阶段</p>
<ul>
<li>
<p>后端：承担整个后端所有的工作。所有接口设计、开发和测试</p>
<p>本系统按照业务需求设计，分为了10个微服务</p>
<ul>
<li>权限控制服务</li>
<li>用户服务</li>
<li>购物车服务</li>
<li>商品服务</li>
<li>系统服务</li>
<li>搜索服务</li>
<li>主页服务</li>
</ul>
</li>
<li>
<p>前端：</p>
<ul>
<li>管理端：权限管理、登录注册、商品管理</li>
<li>用户端：首页展示、登录注册、商品搜索、商品详情</li>
<li>配送端：</li>
</ul>
</li>
</ul>
</li>
<li>
<p>开发阶段</p>
<ul>
<li>接口测试</li>
<li>联调测试</li>
<li>压力测试</li>
</ul>
</li>
</ul>`,r:{minutes:12.28,words:3684},title:"实训总结报告"},["/course/neusoft/报告/实训总结报告.html","/course/neusoft/%E6%8A%A5%E5%91%8A/%E5%AE%9E%E8%AE%AD%E6%80%BB%E7%BB%93%E6%8A%A5%E5%91%8A","/course/neusoft/报告/实训总结报告.md","/course/neusoft/%E6%8A%A5%E5%91%8A/%E5%AE%9E%E8%AE%AD%E6%80%BB%E7%BB%93%E6%8A%A5%E5%91%8A.md"]],["v-2aaaa1f4","/course/neusoft/%E7%AD%94%E8%BE%A9/PPT.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> PPT内容</h1>
<blockquote>
<p>重点讲自己的工作</p>
</blockquote>
<p>尊敬的评委老师好，我是IDEA小组的组长刘大维，下面我将对本小组设计开发的iTMS-灵创物运中本人所做的工作进行展示。</p>
<p>整体业务流程的设计、数据库设计、后端共9个微服务的设计与实现、管理端、用户端、配送端三端的设计、以及管理端和用户端的核心功能的实现。</p>
<h3> 项目介绍</h3>
<p>iTMS-灵创物运</p>
<h3> 工作综述</h3>
<p>作为组长，进行人员分工、进度管理、质量控制</p>
<h3> 需求分析部分</h3>
<p>客户服务中心、下单</p>`,r:{minutes:1.41,words:423},title:"PPT内容"},["/course/neusoft/答辩/PPT.html","/course/neusoft/%E7%AD%94%E8%BE%A9/PPT","/course/neusoft/答辩/PPT.md","/course/neusoft/%E7%AD%94%E8%BE%A9/PPT.md"]],["v-0257c685","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A6%81%E6%B1%82.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>项目背景不要花太多时间讲了，主要是讲自己做了什么，如果不是自己的导师你需要在8分钟内打动老师给你打一个高分</p>
<p>答辩现场三个老师，2个东软1个学校，随机排的（不一定是自己的知道老师</p>
<p>答辩的老师可能是别的项目组调过来的</p>
<p>成绩：学校老师现场给一个报告成绩（不是最终成绩）、指导老师也有一个成绩、啥的还会跳分</p>
<p>最多八分钟，但是也可以接着讲，不过最好按时间说</p>
<p>答辩教室和顺序晚上发</p>
<p>六点之前，交答辩要用的所有文件，给自己东软的老师（ppt啥的），如果要延期，就自己准备u盘，明天自己现场拷一个</p>
<p>如果需要演示自己的程序，代码，必须要自备电脑和转接头来展示，现场的电脑跑不了代码</p>`,r:{minutes:2.5,words:749},title:""},["/course/neusoft/答辩/要求.html","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A6%81%E6%B1%82","/course/neusoft/答辩/要求.md","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A6%81%E6%B1%82.md"]],["v-72740c8a","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A7%86%E9%A2%91.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>展示自己的工作，如果主要工作是后端的话，展示一下接口文档，点一点测一测</p>
<p>展示内容</p>
<ol>
<li>
<p>工作综述</p>
<ol>
<li>代码量</li>
<li>提交数</li>
</ol>
</li>
<li>
<p>前端工作展示</p>
<ol>
<li>
<p>管理端</p>
<ol>
<li>登录注册
<ol>
<li>密码登录</li>
<li>退出</li>
<li>邮箱登录同时带注册</li>
</ol>
</li>
<li>基础功能
<ol>
<li>国际化</li>
<li>白天黑夜模式</li>
<li>全屏</li>
<li>设置</li>
</ol>
</li>
<li>权限管理
<ol>
<li>人员管理
<ol>
<li>CRUD
<ol>
<li>新建</li>
<li>条件分页查询</li>
<li>修改</li>
<li>删除</li>
<li>批量删除</li>
</ol>
</li>
<li>下载</li>
<li>批量导入</li>
<li>用户授权</li>
</ol>
</li>
<li>角色管理
<ol>
<li>CRUD
<ol>
<li>新建</li>
<li>条件分页查询</li>
<li>修改</li>
<li>删除</li>
<li>批量删除</li>
</ol>
</li>
<li>角色授权</li>
</ol>
</li>
<li>权限管理
<ol>
<li>CRUD
<ol>
<li>修改</li>
<li>删除</li>
<li>批量删除</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
<li>商品管理
<ol>
<li>平台属性管理
<ol>
<li>新建</li>
<li>条件分页查询</li>
<li>修改</li>
<li>删除</li>
<li>批量删除</li>
</ol>
</li>
<li>属性管理
<ul>
<li>新建</li>
<li>修改</li>
<li>删除</li>
</ul>
</li>
<li>分类管理</li>
<li>商品管理</li>
<li>商品创建</li>
</ol>
</li>
</ol>
</li>
<li>
<p>用户端</p>
<ol>
<li>
<p>首页</p>
<p>翻一下，波一波轮播图即可</p>
</li>
<li>
<p>登录注册</p>
<ol>
<li>密码登录</li>
<li>邮箱登录</li>
<li>注册</li>
</ol>
</li>
<li>
<p>搜索</p>
</li>
<li>
<p>商品详情</p>
</li>
</ol>
</li>
</ol>
</li>
</ol>`,r:{minutes:1.02,words:305},title:""},["/course/neusoft/答辩/视频.html","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A7%86%E9%A2%91","/course/neusoft/答辩/视频.md","/course/neusoft/%E7%AD%94%E8%BE%A9/%E8%A7%86%E9%A2%91.md"]],["v-2ba863a6","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E5%8A%9F%E8%83%BD%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 权限管理</h2>
<h3> 用户管理</h3>
<h4> 需求</h4>
<p>admin用户表和role角色表</p>
<ol>
<li>用户列表（条件分页查询）</li>
<li>用户添加</li>
<li>用户修改（id查询和修改）</li>
<li>用户删除（id和批量删除）</li>
<li>为用户分配角色</li>
</ol>
<h4> 角色管理</h4>
<ol>
<li>角色列表（条件分页查询）</li>
<li>角色添加</li>
<li>角色修改（id查询和修改）</li>
<li>角色删除（id和批量删除）</li>
<li>为角色分配菜单</li>
</ol>`,r:{minutes:1.26,words:379},title:""},["/course/neusoft/设计/功能设计.html","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E5%8A%9F%E8%83%BD%E8%AE%BE%E8%AE%A1","/course/neusoft/设计/功能设计.md","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E5%8A%9F%E8%83%BD%E8%AE%BE%E8%AE%A1.md"]],["v-55ae513c","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 数据库设计</h1>
<h3> 用户相关</h3>
<p>user, 用户</p>
<ul>
<li>id, ID</li>
<li>username, 用户名</li>
<li>password, 密码</li>
<li>name, 姓名</li>
<li>id_card, 身份证号</li>
<li>employer, 工作单位名称</li>
<li>phone, 移动电话</li>
<li>ware_id, 仓库id（0代表普通用户，配送员为具体分站id）</li>
<li>email, 电子邮箱地址</li>
<li>create_time, 创建时间</li>
<li>update_time, 更新时间</li>
<li>Is_deleted, 删除标记（0:不可用，1:可用）</li>
</ul>`,r:{minutes:5.92,words:1776},title:"数据库设计"},["/course/neusoft/设计/数据库设计.html","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1","/course/neusoft/设计/数据库设计.md","/course/neusoft/%E8%AE%BE%E8%AE%A1/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1.md"]],["v-2c74f45a","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1%20HMD.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业1</h1>
<p>分数：10分（容易得满）</p>
<p>时间：期末之前（第六周结课之前，每个小组为单位做一个）</p>
<p>目的：结合</p>
<p>小组为单位自己制作一个cardboard HMD（淘宝20rmb就可以买到）</p>
<p>淘宝买一个HMD，DIY一下</p>
<p>可以在google cardboard I/O 2015</p>
<p>纸壳、透镜、胶带</p>
<p>十五块钱左右，就可以买下来</p>
<p>看Google cardboard的论坛，可以看到很多人自己设计的HMD</p>
<p>要求</p>
<ul>
<li>
<p>说明配置</p>
<p>透镜f</p>
</li>
<li>
<p>说明思想流程</p>
<p>如：跟着谷歌，or，自己了解原理自己做的</p>
</li>
</ul>`,r:{minutes:.74,words:221},title:"作业1"},["/course/xr-tech/作业/作业1 HMD.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1%20HMD","/course/xr-tech/作业/作业1 HMD.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A1%20HMD.md"]],["v-b175398e","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2%20%E6%8A%80%E6%9C%AF%E5%A4%A9%E8%8A%B1%E6%9D%BF.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业2 技术天花板讨论</h1>
<p>分数：5分</p>
<p>主题：分析VR技术天花板：非视觉、听觉传感器技术发展现状</p>
<p>截止时间：下堂课之前</p>
<p>VR目前非视觉、听觉传感器技术主要包括触觉反馈技术和前庭系统技术。</p>
<ul>
<li>触觉反馈技术能通过作用力、振动等一系列动作为使用者再现触感，提高虚拟环境的交互性和临场感。目前常用的致动器有偏转质量马达（ERM）、线性共振致动器（LRA）和压电式致动器（Piezo）。</li>
<li>前庭系统技术能模拟人体在真实环境中的空间感和平衡感，减少VR中常见的眩晕、恶心等不适症状。目前常用的方法有电刺激法、气流刺激法和声波刺激法。</li>
</ul>`,r:{minutes:1.75,words:524},title:"作业2 技术天花板讨论"},["/course/xr-tech/作业/作业2 技术天花板.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2%20%E6%8A%80%E6%9C%AF%E5%A4%A9%E8%8A%B1%E6%9D%BF","/course/xr-tech/作业/作业2 技术天花板.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A2%20%E6%8A%80%E6%9C%AF%E5%A4%A9%E8%8A%B1%E6%9D%BF.md"]],["v-4901312d","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3%20%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BD%8D.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 产品定位</h1>
`,r:{minutes:.01,words:4},title:"产品定位"},["/course/xr-tech/作业/作业3 产品定位.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3%20%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BD%8D","/course/xr-tech/作业/作业3 产品定位.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A3%20%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BD%8D.md"]],["v-783750bb","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%92%E8%AF%84.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> VR手术模拟器</h1>
<p>15分钟设计一下，如何互评（5分）</p>
<p>比较粗糙的东西</p>
<p>设计一个创新性的VR产品的方案，给出你的产品，要求如下：</p>
<ol>
<li>想做的产品是用来做什么的</li>
<li>市面上有没有类似的产品</li>
<li>你的产品功能特点是什么</li>
<li>你的产品可能涉及的最主要的技术是什么</li>
<li>结合目前的VR技术，可行性如何？</li>
</ol>
<p>下次课前10分钟，每个小组做1页ppt展示要做什么内容（类似海报，是什么、创新点的展示）</p>
<p>每个人，只能给一个小组投票，选觉得最好的小组（最后按照票数给分）</p>`,r:{minutes:11.88,words:3563},title:"VR手术模拟器"},["/course/xr-tech/作业/作业4 互评.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%92%E8%AF%84","/course/xr-tech/作业/作业4 互评.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%92%E8%AF%84.md"]],["v-3e024300","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%A7%E5%93%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E4%BA%92%E8%AF%84.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> VR手术模拟器</h1>
<p>15分钟设计一下，然后互评（5分）</p>
<p>比较粗糙的东西</p>
<p>设计一个创新性的VR产品的方案，给出你的产品，要求如下：</p>
<ol>
<li>想做的产品是用来做什么的</li>
<li>市面上有没有类似的产品</li>
<li>你的产品功能特点是什么</li>
<li>你的产品可能涉及的最主要的技术是什么</li>
<li>结合目前的VR技术，可行性如何？</li>
</ol>
<p>下次课前10分钟，每个小组做1页ppt展示要做什么内容（类似海报，是什么、创新点的展示）</p>
<p>每个人，只能给一个小组投票，选觉得最好的小组（最后按照票数给分）</p>`,r:{minutes:11.77,words:3530},title:"VR手术模拟器"},["/course/xr-tech/作业/作业4 产品设计与互评.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%A7%E5%93%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E4%BA%92%E8%AF%84","/course/xr-tech/作业/作业4 产品设计与互评.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A4%20%E4%BA%A7%E5%93%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E4%BA%92%E8%AF%84.md"]],["v-7b4c535c","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A5%20%E8%8D%89%E5%9B%BE%E5%9C%BA%E6%99%AF%E4%B8%8E%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 草图场景与原型设计</h1>
<p>用sketchBox等等，去做系统原型设计</p>
<p>第六周周三之前，小组为单位交草图</p>
<p>打分标准：根据这三个场景，可以清晰的知道你做的是什么（不看文字描述的情况下</p>
<h2> 草图场景</h2>
<p>以下是三个最有代表性的场景和它们的核心要素以及意义：</p>
<ol>
<li>手术室准备阶段</li>
</ol>
<ul>
<li>要素：第一人称，手术室内部、手术用具和设备。</li>
<li>意义：这个场景可以展示手术室内部的各种设备和工具，包括手术台、监护仪等等。此外，还可以显示在准备手术前的各种操作，例如穿戴手套、清洗手术用具等。这个场景能够帮助用户更好地理解手术室的结构和手术前的准备流程。</li>
</ul>`,r:{minutes:1.75,words:524},title:"草图场景与原型设计"},["/course/xr-tech/作业/作业5 草图场景与原型设计.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A5%20%E8%8D%89%E5%9B%BE%E5%9C%BA%E6%99%AF%E4%B8%8E%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1","/course/xr-tech/作业/作业5 草图场景与原型设计.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A5%20%E8%8D%89%E5%9B%BE%E5%9C%BA%E6%99%AF%E4%B8%8E%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1.md"]],["v-6628a39c","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A6%20%E5%A4%A7%E4%BD%9C%E4%B8%9A.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 作业5 大作业</h1>
<p>最后交</p>
<p>内容：之前所有关于产品设计写的东西汇总整理+草图+界面原型+贡献度</p>
<p>周期报告中要回答四个问题：</p>
<ol>
<li>Who is the user</li>
<li>What are the user needs</li>
<li>Can VR address those needs</li>
<li>Please pick up a VR game and give the analysis for the users</li>
</ol>
<h3> 分析一个VR产品的主要用户是什么</h3>
<p>面向医学生及实习医生模拟外科手术的应用</p>`,r:{minutes:1.3,words:390},title:"作业5 大作业"},["/course/xr-tech/作业/作业6 大作业.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A6%20%E5%A4%A7%E4%BD%9C%E4%B8%9A","/course/xr-tech/作业/作业6 大作业.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E4%BD%9C%E4%B8%9A6%20%E5%A4%A7%E4%BD%9C%E4%B8%9A.md"]],["v-7b52310e","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E8%AF%84%E8%AF%AD.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 评语</h1>
<p>评分对象：XRSpere</p>
<p>分数：5</p>
<h3> 想做的产品是用来做什么的</h3>
<p>该小组产品内容是面向医学生及实习医生模拟外科手术的应用，在现实生活中有着广泛的市场需求：一方面，医学生缺少手术经验、需要一些手术来提高自身技能；另一方面，直接让医学生做真实的手术，容易带来较高的手术风险。所以利用VR技术实现模拟手术场景，是一个非常有前景的应用方向。</p>
<h3> 市面上有没有类似的产品</h3>
<ul>
<li>Surgical Theater ：一种基于虚拟现实技术的手术模拟器</li>
<li>Simulab ：一种基于仿真技术的手术模拟器</li>
<li>Osso VR ：一种基于虚拟现实技术的手术模拟器</li>
<li>FundamentalVR ：一种基于虚拟现实技术的手术模拟器</li>
</ul>`,r:{minutes:1.67,words:502},title:"评语"},["/course/xr-tech/作业/评语.html","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E8%AF%84%E8%AF%AD","/course/xr-tech/作业/评语.md","/course/xr-tech/%E4%BD%9C%E4%B8%9A/%E8%AF%84%E8%AF%AD.md"]],["v-c2aa5004","/cs/algo/faq/1.%20%E7%AE%97%E6%B3%95%E9%9D%A2%E8%AF%95%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9%E4%B8%8E%E6%8A%80%E5%B7%A7.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 算法面试高频知识点与技巧</h1>
<p>连续、非连续</p>
<p>连续On2：substring, subarray</p>
<p>非连续O2n：subsequence O2n</p>
<p>On：双指针、单调栈、快速选择、树上各类遍历与分治、n次并查集操作、n次哈希表</p>
`,r:{minutes:.2,words:60},title:"算法面试高频知识点与技巧"},["/cs/algo/faq/1. 算法面试高频知识点与技巧.html","/cs/algo/faq/1.%20%E7%AE%97%E6%B3%95%E9%9D%A2%E8%AF%95%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9%E4%B8%8E%E6%8A%80%E5%B7%A7","/cs/algo/faq/1. 算法面试高频知识点与技巧.md","/cs/algo/faq/1.%20%E7%AE%97%E6%B3%95%E9%9D%A2%E8%AF%95%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9%E4%B8%8E%E6%8A%80%E5%B7%A7.md"]],["v-61d5087f","/cs/algo/faq/14.%20%E5%AD%97%E5%85%B8%E6%A0%91.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 字典树</h1>
<p>字典树的基本操作</p>
<ul>
<li>插入单词</li>
<li>前缀计数</li>
<li>查找单词</li>
<li>查找前缀</li>
</ul>
<p>字典树的题型</p>
<ul>
<li>
<p>直接操作字典树</p>
</li>
<li>
<p>在字典树上深度优先搜索</p>
</li>
<li>
<p>使用字典树加速其他算法</p>
<p>DP</p>
</li>
</ul>
<p>单词搜索 II</p>
<p>拼图游戏</p>
`,r:{minutes:.24,words:72},title:"字典树"},["/cs/algo/faq/14. 字典树.html","/cs/algo/faq/14.%20%E5%AD%97%E5%85%B8%E6%A0%91","/cs/algo/faq/14. 字典树.md","/cs/algo/faq/14.%20%E5%AD%97%E5%85%B8%E6%A0%91.md"]],["v-69cd4508","/cs/algo/faq/17.%20%E5%8D%95%E8%B0%83%E6%A0%88.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 单调栈</h1>
<p>使用场景</p>
<p>模板</p>
<p>变形：单调队列</p>
`,r:{minutes:.05,words:15},title:"单调栈"},["/cs/algo/faq/17. 单调栈.html","/cs/algo/faq/17.%20%E5%8D%95%E8%B0%83%E6%A0%88","/cs/algo/faq/17. 单调栈.md","/cs/algo/faq/17.%20%E5%8D%95%E8%B0%83%E6%A0%88.md"]],["v-6274d0d4","/cs/algo/faq/2.%20%E5%90%8C%E5%90%91%E5%8F%8C%E6%8C%87%E9%92%88.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 同向双指针</h1>
`,r:{minutes:.02,words:5},title:"同向双指针"},["/cs/algo/faq/2. 同向双指针.html","/cs/algo/faq/2.%20%E5%90%8C%E5%90%91%E5%8F%8C%E6%8C%87%E9%92%88","/cs/algo/faq/2. 同向双指针.md","/cs/algo/faq/2.%20%E5%90%8C%E5%90%91%E5%8F%8C%E6%8C%87%E9%92%88.md"]],["v-28741391","/cs/algo/faq/3.%20%E6%8B%93%E5%B1%95%E7%9F%A5%E8%AF%86.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 拓展知识</h1>
<p>暴力：想到的最简单的方法</p>
<p>贪心：与别的算法结合去考90%，那种一眼看上去就知道怎么贪心的那种</p>
<p>模拟：（捡胡萝卜）他让你干什么就干什么，非常简单，没有什么算法</p>
<p>暴力：你能想到的最naive的算法</p>
<p>贪心：可以解决题目问题的某种思路（处理）</p>
<p>模拟：题目让你做一些很复杂的事</p>
<h3> 通过数据范围降低题目难度</h3>
<p>面试给数据范围 = 放水</p>
<p>一般来说，评测机1s能运算10<sup>7-10</sup>9</p>
<ul>
<li>
<p>n = 10^4</p>
<p>O(n)==&gt;双指针？前缀和？遍历? DP?</p>
<p>O(nlogn)==&gt;排序？二分？</p>
</li>
<li>
<p>n = 10^3</p>
<p>O(n^2)==&gt; 二维数组?双重循环？二维dp?</p>
</li>
<li>
<p>n = 10^2</p>
<p>O(n3) ==&gt; 三重循环? 区间dp</p>
</li>
<li>
<p>n = 10</p>
<p>O(2n), O(n!) ==&gt; dfs暴力?</p>
</li>
<li>
<p>n = 10^9</p>
<p>别打算开数组存或O(n)复杂度 ==&gt; log</p>
</li>
</ul>`,r:{minutes:.89,words:268},title:"拓展知识"},["/cs/algo/faq/3. 拓展知识.html","/cs/algo/faq/3.%20%E6%8B%93%E5%B1%95%E7%9F%A5%E8%AF%86","/cs/algo/faq/3. 拓展知识.md","/cs/algo/faq/3.%20%E6%8B%93%E5%B1%95%E7%9F%A5%E8%AF%86.md"]],["v-30ade360","/cs/algo/faq/4.%20%E6%BB%91%E7%AA%97%E5%9E%8B%E5%8F%8C%E6%8C%87%E9%92%88%E4%B8%8E%E9%9A%94%E6%9D%BF%E6%B3%95.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 双指针与隔板法</h1>
<p>指针回头不能用双指针算法（因为不On了）</p>
<p>滑窗型双指针</p>
<p>滑窗每次只改入窗出窗元素</p>
<p>左减右加</p>
<p>滑动窗口写左闭右开的好，这样处理前不需要特判右指针是否越界，在while哪里就判断了</p>
`,r:{minutes:.27,words:82},title:"双指针与隔板法"},["/cs/algo/faq/4. 滑窗型双指针与隔板法.html","/cs/algo/faq/4.%20%E6%BB%91%E7%AA%97%E5%9E%8B%E5%8F%8C%E6%8C%87%E9%92%88%E4%B8%8E%E9%9A%94%E6%9D%BF%E6%B3%95","/cs/algo/faq/4. 滑窗型双指针与隔板法.md","/cs/algo/faq/4.%20%E6%BB%91%E7%AA%97%E5%9E%8B%E5%8F%8C%E6%8C%87%E9%92%88%E4%B8%8E%E9%9A%94%E6%9D%BF%E6%B3%95.md"]],["v-392996a2","/cs/algo/faq/",{y:"a",d:"2022-12-04T02:34:19.000Z",e:`<h1> 高频题</h1>
`,r:{minutes:.01,words:3},title:"高频题"},["/cs/algo/faq/index.html","/cs/algo/faq/README.md"]],["v-2d506fa0","/cs/algo/faq/%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 大文件处理问题</h1>
<blockquote>
<p>最好的分类的讲解：</p>
<p><a href="https://doocs.github.io/advanced-java/#/docs/big-data/find-top-1-ip" target="_blank" rel="noopener noreferrer">如何找出某一天访问百度网站最多的 IP？ (doocs.github.io)</a></p>
</blockquote>
<p>海量数据大多数，分成小文件处理，分治</p>
<p><a href="https://blog.csdn.net/wanger61/article/details/110004130" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/wanger61/article/details/110004130</a></p>`,r:{minutes:3.03,words:908},title:"大文件处理问题"},["/cs/algo/faq/大文件处理.html","/cs/algo/faq/%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86","/cs/algo/faq/大文件处理.md","/cs/algo/faq/%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86.md"]],["v-31ec3247","/cs/algo/framework/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 框架</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image.png" alt="image" loading="lazy"></p>
<p>结构</p>
<ul>
<li>
<p>线：减治，</p>
</li>
<li>
<p>树：分治，无重叠子问题（注意均衡的问题）</p>
<p>分治很简单也符合直觉，难点是时间复杂度估算（主方法）</p>
<p>对于分布式计算很重要，mit 6.24</p>
</li>
<li>
<p>图：动规，有重叠子问题</p>
</li>
<li>
<p>集：无序，判断存在或者数量</p>
</li>
</ul>`,r:{minutes:.65,words:196},title:"框架"},["/cs/algo/framework/index.html","/cs/algo/framework/README.md"]],["v-fcf961c2","/cs/algo/summary/",{y:"a",d:"2022-12-04T02:34:19.000Z",e:`<h1> 总结</h1>
<p>概览</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 高精度加法</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">B</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">C</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t <span class="token operator">+=</span> <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token class-name">B</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> t <span class="token operator">+=</span> <span class="token class-name">B</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">C</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>t <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token class-name">C</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">C</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.84,words:251},title:"总结"},["/cs/algo/summary/index.html","/cs/algo/summary/README.md"]],["v-ca789fae","/cs/basic/network/HTTP.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> HTTP</h1>
<p>HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p>
<p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p>
<h2> 基本概念</h2>
<p>HTTP 是超文本传输协议，也就是<strong>H</strong>yperText <strong>T</strong>ransfer <strong>P</strong>rotocol。</p>`,r:{minutes:12.36,words:3707},title:"HTTP"},["/cs/basic/network/HTTP","/cs/basic/network/HTTP.md"]],["v-0cc211d4","/cs/basic/network/HTTPS.html",{y:"a",d:"2023-04-03T03:29:06.000Z",e:`<h1> HTTPS</h1>
<h3> HTTP 与 HTTPS 有哪些区别？</h3>
<ul>
<li>HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</li>
<li>HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。</li>
<li>两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。</li>
<li>HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。</li>
</ul>`,r:{minutes:4.21,words:1264},title:"HTTPS"},["/cs/basic/network/HTTPS","/cs/basic/network/HTTPS.md"]],["v-08b6dbb0","/cs/basic/network/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> Computer Network</h1>
<p>应用层</p>
<ul>
<li>HTTP/HTTPS</li>
<li>DNS</li>
<li>ICMP</li>
</ul>
<p>传输层</p>
<ul>
<li>TCP</li>
<li>UDP</li>
</ul>
<p>网络层</p>
<ul>
<li>ARP</li>
<li>ASPF</li>
</ul>
<p>链路层</p>
<ul>
<li>以太网</li>
</ul>
<h2> 通信方式</h2>
<h3> 单工</h3>
<p>定义：单工数据传输只支持数据在一个方向上传输。</p>
<p>例如：灯塔发发出光信号，航船只能接受信号</p>`,r:{minutes:1.86,words:557},title:"Computer Network"},["/cs/basic/network/index.html","/cs/basic/network/README.md"]],["v-79f5d040","/cs/basic/network/TCP.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> TCP</h1>
<p>MTU: Maxitum Transmission Unit 最大传输单元 MSS: Maxitum Segment Size 最大分段大小 由于以太网EthernetII最大的数据帧是1518Bytes</p>
<p>标志位：</p>
<ul>
<li>
<p>SYN：建立链接</p>
</li>
<li>
<p>FIN：中止链接</p>
</li>
<li>
<p>ACK：确认32位确认序号有效。</p>
<p>注意，<strong>ACK 报文是不会有重传的，当 ACK 丢失了，就由对方重传对应的报文</strong>。</p>
</li>
<li>
<p>RST：“复位”报文</p>
<ol>
<li>目的端口无监听。当连接请求到达时,目的端口没有进程正在监听，TCP会产生一个复位报文。（在UDP中，则产生一个ICMP端口不可达的信息）</li>
<li>异常终止链接。可以通过发送个复位报文段而不是FIN来中途释放一个连接，这种行为称为异常释放( abortive release)。
<ul>
<li>如窗口探测3次都发现接受窗口为0</li>
<li>连接中，收到错误的标志信号，如SYN等</li>
<li>客户端的连接被关闭，客户的内核就会回 RST 报文，服务端收到后就会释放连接。</li>
</ul>
</li>
</ol>
</li>
<li>
<p>URG：</p>
</li>
<li>
<p>PSH：</p>
<p>有点过时</p>
</li>
</ul>`,r:{minutes:3.86,words:1159},title:"TCP"},["/cs/basic/network/TCP","/cs/basic/network/TCP.md"]],["v-4a61e36c","/cs/basic/os/IO%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8.html",{y:"a",d:"2023-04-11T10:23:43.000Z",e:`<h1> IO多路复用</h1>
<p>select</p>
<p>poll</p>
<p>epoll</p>
`,r:{minutes:.03,words:8},title:"IO多路复用"},["/cs/basic/os/IO多路复用.html","/cs/basic/os/IO%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8","/cs/basic/os/IO多路复用.md","/cs/basic/os/IO%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8.md"]],["v-74546404","/cs/basic/os/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> Operating System</h1>
<p>多核： multiprocessing, 意思就是多重处理， 多个cpu同时干活。</p>
<p>多进程： multiprogramming， 也可以近似认为是multitasking,  意思就是多道程序设计。 单个cpu并发干活， 在不同的进程间切换。</p>
<p>多线程： multithreading,  这个就是我们通常说的多线程， 单个cpu并发干活， 在同一个进程的线程间切换。</p>
`,r:{minutes:.32,words:95},title:"Operating System"},["/cs/basic/os/index.html","/cs/basic/os/README.md"]],["v-192873bd","/cs/basic/os/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<h1> 内存管理</h1>
<p>虚拟内存、共享内存、常驻内存</p>
<p>top 命令可以看到如下参数</p>
<p>VIRT：</p>
<p>1、进程“需要的”虚拟内存大小，包括进程使用的库、代码、数据，以及malloc、new分配的堆空间和分配的栈空间等；</p>
<p>2、假如进程新申请10MB的内存，但实际只使用了1MB，那么它会增长10MB，而不是实际的1MB使用量。</p>
<p>3、VIRT = SWAP + RES</p>
<p>RES：</p>
<p>1、进程当前使用的内存大小，包括使用中的malloc、new分配的堆空间和分配的栈空间，但不包括swap out量；</p>`,r:{minutes:1.17,words:351},title:"内存管理"},["/cs/basic/os/内存管理.html","/cs/basic/os/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86","/cs/basic/os/内存管理.md","/cs/basic/os/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.md"]],["v-35dbe43a","/cs/basic/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{y:"a",d:"2023-04-03T03:29:06.000Z",e:`<h1> 操作系统</h1>
<h2> 定义</h2>
<p>操作系统是一直运行在计算机上的程序（通常称为内核(kernel))。</p>
<p>除了内核外，还有其他两类程序：</p>
<ul>
<li>系统程序(system program)，是与系统运行有关的程序，但不是内核的一部分</li>
<li>应用程序，是与系统运行无关的所有其他程序。</li>
</ul>
<h2> 组成</h2>
<h3> 系统调用</h3>
<p>系统调用大致可分为六大类：进程控制（process control)、文件管理(file manipulation)、设备管理(device manipulation)、信息维护(information maintenance)、通信(commu- nication)和保护(protection)。</p>`,r:{minutes:5.62,words:1687},title:"操作系统"},["/cs/basic/os/操作系统.html","/cs/basic/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F","/cs/basic/os/操作系统.md","/cs/basic/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.md"]],["v-1cb2880a","/cs/basic/os/%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<p><strong>硬链接</strong></p>
<p><a href="https://so.csdn.net/so/search?q=%E7%A1%AC%E9%93%BE%E6%8E%A5&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">硬链接</a>是通过索引节点进行的链接。在Linux中，多个文件指向同一个索引节点是允许的，像这样的链接就是硬链接。硬链接只能在同一文件系统中的文件之间进行链接，不能对目录进行创建。如果删除硬链接对应的源文件，则硬链接文件仍然存在，而且保存了原有的内容，这样可以起到防止因为误操作而错误删除文件的作用。由于硬链接是有着相同 inode 号仅文件名不同的文件，因此，删除一个硬链接文件并不影响其他有相同 inode 号的文件。</p>`,r:{minutes:2.11,words:633},title:""},["/cs/basic/os/文件管理.html","/cs/basic/os/%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86","/cs/basic/os/文件管理.md","/cs/basic/os/%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.md"]],["v-939bf7f4","/cs/basic/os/%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81.html",{y:"a",d:"2023-04-03T03:29:06.000Z",e:`<h1> 内核态用户态</h1>
<h2> 一、操作系统需要两种CPU状态</h2>
<p>内核态（Kernel Mode）：运行操作系统程序，操作硬件</p>
<p>用户态（User Mode）：运行用户程序</p>
<h2> 二、指令划分</h2>
<p>特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O 内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机</p>
<p>非特权指令：用户程序可以使用的指令。 举例：控制转移 算数运算 取数指令 <strong>访管指令</strong>（使用户程序从用户态陷入内核态）</p>
<h2> 三、特权级别</h2>
<p><strong>特权环：R0、R1、R2和R3</strong></p>`,r:{minutes:3.5,words:1050},title:"内核态用户态"},["/cs/basic/os/用户态内核态.html","/cs/basic/os/%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81","/cs/basic/os/用户态内核态.md","/cs/basic/os/%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81.md"]],["v-95a2e48c","/cs/basic/os/%E7%BA%BF%E7%A8%8B%E8%BF%9B%E7%A8%8B.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 线程进程</h1>
<h2> 进程</h2>
<h3> 进程通信 IPC</h3>
<ul>
<li>
<p>管道</p>
<ul>
<li>匿名管道<code>\\</code></li>
<li>命名管道<code>mkfifo</code></li>
</ul>
</li>
<li>
<p>消息队列</p>
</li>
<li>
<p>共享内存</p>
</li>
<li>
<p>信号量</p>
</li>
<li>
<p>信号</p>
</li>
<li>
<p>Socket</p>
</li>
<li>
<p>互斥量</p>
</li>
<li>
<p>条件变量</p>
</li>
<li>
<p>读写锁</p>
</li>
</ul>`,r:{minutes:2.77,words:830},title:"线程进程"},["/cs/basic/os/线程进程.html","/cs/basic/os/%E7%BA%BF%E7%A8%8B%E8%BF%9B%E7%A8%8B","/cs/basic/os/线程进程.md","/cs/basic/os/%E7%BA%BF%E7%A8%8B%E8%BF%9B%E7%A8%8B.md"]],["v-5b97dc51","/cs/database/mongodb/0.%20%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> mongo <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 mongo <span class="token parameter variable">--auth</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongo mongosh admin
<span class="token comment"># 创建一个名为 admin，密码为 123456 的用户。</span>
<span class="token operator">&gt;</span>  db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user:<span class="token string">'admin'</span>,pwd:<span class="token string">'123456'</span>,roles:<span class="token punctuation">[</span> <span class="token punctuation">{</span> role:<span class="token string">'userAdminAnyDatabase'</span>, db: <span class="token string">'admin'</span><span class="token punctuation">}</span>,<span class="token string">"readWriteAnyDatabase"</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 尝试使用上面创建的用户信息进行连接。</span>
<span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">'admin'</span>, <span class="token string">'123456'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.22,words:65},title:""},["/cs/database/mongodb/0. 安装使用.html","/cs/database/mongodb/0.%20%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8","/cs/database/mongodb/0. 安装使用.md","/cs/database/mongodb/0.%20%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.md"]],["v-d51afb96","/cs/database/mongodb/1.%20%E6%A6%82%E5%BF%B5.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<p>MongoDB存储类似Json</p>
<p>database database 数据库
table
collectione
数据库表/集合。
rOWe
documentp
数据记录行文档。
columne
fide
数据字段/域。
index
index
索引。
table joinse
表连接,MongoDB.不支持。
primary keye
primary keye
主键 MongoDB.自动将_id字段设置为主键。</p>
<p>集合就是数据库的表</p>
`,r:{minutes:.25,words:75},title:""},["/cs/database/mongodb/1. 概念.html","/cs/database/mongodb/1.%20%E6%A6%82%E5%BF%B5","/cs/database/mongodb/1. 概念.md","/cs/database/mongodb/1.%20%E6%A6%82%E5%BF%B5.md"]],["v-a877b200","/cs/database/mongodb/2.%20%E4%BD%BF%E7%94%A8.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 使用</h1>
<p>MongoTemplate 灵活</p>
<p>MongoRepository 不够灵活</p>
<p>mongoTemplate.findAll(User.class):查询User文档的全部数据
mongoTemplate.findById(&lt;id&gt;, User.class): 查询User文档id为id的数据
mongoTemplate.find(query, User.class);：根据query内的查询条件查询
mongoTemplate.upsert(query, update, User.class): 修改
mongoTemplate.remove(query, User.class): 删除
mongoTemplate.insert(User):新增</p>`,r:{minutes:.54,words:161},title:"使用"},["/cs/database/mongodb/2. 使用.html","/cs/database/mongodb/2.%20%E4%BD%BF%E7%94%A8","/cs/database/mongodb/2. 使用.md","/cs/database/mongodb/2.%20%E4%BD%BF%E7%94%A8.md"]],["v-dc59fc0a","/cs/database/mysql/",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> MySQL</h1>
<h2> 目录</h2>
<ul>
<li>
<p>事务</p>
<p>ACID</p>
<p>并发事务问题</p>
<p>隔离级别</p>
</li>
<li>
<p>索引</p>
<ul>
<li>结构</li>
<li>分类</li>
<li>规则</li>
</ul>
</li>
<li>
<p>锁</p>
<ul>
<li>全局锁</li>
<li>表锁</li>
<li>行锁</li>
</ul>
</li>
<li>
<p>引擎</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>日志</p>
</li>
<li>
<p>内存</p>
</li>
<li>
<p>运维</p>
</li>
</ul>`,r:{minutes:.13,words:40},title:"MySQL"},["/cs/database/mysql/index.html","/cs/database/mysql/README.md"]],["v-cd8b0f7c","/cs/database/redis/",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Redis</h1>
<p>帮助文档：<a href="http://redis.io/commands" target="_blank" rel="noopener noreferrer">redis.io/commands</a></p>
`,r:{minutes:.02,words:7},title:"Redis"},["/cs/database/redis/index.html","/cs/database/redis/README.md"]],["v-26094462","/cs/database/sql/",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> SQL</h1>
<p><a href="https://www.w3schools.com/sql/sql_case.asp" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/sql/sql_case.asp</a></p>
`,r:{minutes:.02,words:5},title:"SQL"},["/cs/database/sql/index.html","/cs/database/sql/README.md"]],["v-7435acea","/cs/middleware/es/",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> ElasticSearch</h1>
<p>Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。</p>
<p>Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用SON作为文档序列化的格式，比如下面这条用户数据：</p>
<p>10.1.2索引(Index)</p>
<p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。</p>`,r:{minutes:1.62,words:487},title:"ElasticSearch"},["/cs/middleware/es/index.html","/cs/middleware/es/README.md"]],["v-3372119a","/cs/middleware/rabbitmq/",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h2> 基本概念</h2>
<h3> rabbitmq有哪些重要角色？</h3>
<ul>
<li>生产者：消息的创建者，负责创建和推送数据到消息服务器</li>
<li>消费者：消息的接收方，用于处理数据和确认消息</li>
<li>代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息</li>
</ul>
<h3> rabbitmq有哪些重要组件？</h3>
<ul>
<li>ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立连接的管理器</li>
<li>BrokerBroker是RabbitMQ的核心组件，它接收来自生产者的消息并将其路由到消费者。Broker还负责管理队列、交换机和绑定等对象。RabbitMQ Broker可以在单个节点上运行，也可以在多个节点上运行以实现高可用性和负载均衡。</li>
<li>Channel(信道)：消息推送使用的通道</li>
<li>Exchange(交换器)：用于接受、分配消息</li>
<li>Queue(队列)：用于存储生产者的消息</li>
<li>RoutingKey(路由键)：生产者将消息发送给交换器的时候，会指定一个RoutingKey,用来指定这个消息的路由规则，这个RoutingKey需要与交换器类型和绑定键(BindingKey)联合使用才能最终生效。</li>
<li>BindKey(绑定键)：用于把交换器的消息绑定到队列上</li>
</ul>`,r:{minutes:1.8,words:539},title:""},["/cs/middleware/rabbitmq/index.html","/cs/middleware/rabbitmq/README.md"]],["v-6805b83a","/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 为什么用 RabbitMQ</h1>
<h2> 使用场景</h2>
<p>消息队列是一种异步通信机制，常用于以下场景：</p>
<ol>
<li>
<p>异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。</p>
</li>
<li>
<p>解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。</p>
</li>
<li>
<p>流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。</p>
</li>
</ol>
<h3> 流量削峰原理</h3>
<p>消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰：</p>`,r:{minutes:3.38,words:1014},title:"为什么用 RabbitMQ"},["/cs/middleware/rabbitmq/为什么用.html","/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8","/cs/middleware/rabbitmq/为什么用.md","/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.md"]],["v-1700c95b","/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 延迟队列</h1>
<p><a href="https://blog.csdn.net/m0_56079407/article/details/125858748" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_56079407/article/details/125858748</a></p>
<h3> 实现方式</h3>
<ul>
<li>基于死信：在队列里面，通过ttl</li>
<li>基于插件：在交换机里面</li>
</ul>
<h3> 应用场景</h3>
<ol>
<li>订单在十分钟之内未支付则自动取消</li>
<li>新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。</li>
<li>用户注册成功后，如果三天内没有登陆则进行短信提醒。</li>
<li>用户发起退款，如果三天内没有得到收处理则通知相关运营人员。</li>
<li>预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议</li>
</ol>`,r:{minutes:1.42,words:427},title:"延迟队列"},["/cs/middleware/rabbitmq/延迟队列.html","/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97","/cs/middleware/rabbitmq/延迟队列.md","/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.md"]],["v-0da42f26","/cs/middleware/rabbitmq/%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.html",{y:"a",d:"2023-03-05T13:59:03.000Z",e:`<h1> 死信队列</h1>
<h2> 死信的概念</h2>
<p>即无法被消费的消息。</p>
<p><strong>导致的死信的几种原因</strong>：</p>
<ul>
<li>消息被拒（<code>Basic.Reject /Basic.Nack</code>) 且 <code>requeue = false</code>。</li>
<li>消息 TTL 过期。</li>
<li>队列消息长度达到限制；队列满了，无法再添加。</li>
</ul>
<h3> 应用场景</h3>
<ul>
<li>保证数据不丢失</li>
<li>超时未支付砍单</li>
</ul>
<h2> 什么是死信队列？如何导致的？</h2>`,r:{minutes:4.38,words:1314},title:"死信队列"},["/cs/middleware/rabbitmq/死信队列.html","/cs/middleware/rabbitmq/%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97","/cs/middleware/rabbitmq/死信队列.md","/cs/middleware/rabbitmq/%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.md"]],["v-3e315581","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 消息应答与确认</h1>
<p>RabbitMQ 的三种确认机制：</p>
<ol>
<li>Publish ——》Broker：confirmCallback</li>
<li>Exchange ——》Queue：returnCallback</li>
<li>Queue——》Client：Ack机制</li>
</ol>
<h2> 消息应答</h2>
<p>消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。</p>`,r:{minutes:3.92,words:1177},title:"消息应答与确认"},["/cs/middleware/rabbitmq/消息应答.html","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94","/cs/middleware/rabbitmq/消息应答.md","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.md"]],["v-588edf1b","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E6%A8%A1%E5%9E%8B.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 消息模型</h1>
<ul>
<li>基本消息队列（basicQueue）</li>
<li>工作消息队列（workQueue）</li>
</ul>
<p>发布订阅（Publish，Sub），根据交换机类型不同分为三种：</p>
<ul>
<li>Fanout 广播</li>
<li>Direct 路由</li>
<li>Topic 主题</li>
</ul>
<p>publish</p>
<h3> Work Queue 模型</h3>
<p>Work queue,工作队列，可以提高消息处理速度，避免队列消息堆积</p>
<p>多个消费者绑定到一个队列，同一条消息只会被一个消费者处理。</p>`,r:{minutes:3.08,words:924},title:"消息模型"},["/cs/middleware/rabbitmq/消息模型.html","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E6%A8%A1%E5%9E%8B","/cs/middleware/rabbitmq/消息模型.md","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E6%A8%A1%E5%9E%8B.md"]],["v-2479638a","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E8%BD%AC%E6%8D%A2%E5%99%A8.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 消息转换器</h1>
<p>收发消息都可以传递Object，SpringAMQP默认会自动把对象利用JDK做序列化，但是可读性差且字节数太多，推荐使用Jackson</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.32,words:96},title:"消息转换器"},["/cs/middleware/rabbitmq/消息转换器.html","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E8%BD%AC%E6%8D%A2%E5%99%A8","/cs/middleware/rabbitmq/消息转换器.md","/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E8%BD%AC%E6%8D%A2%E5%99%A8.md"]],["v-8db72a40","/employment/interview/SNK/SNK.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> SNK面试</h1>
<ul>
<li>一面，技术面</li>
<li>二面，技术主管面</li>
<li>HR面</li>
</ul>
<h2> 一面 4月21日</h2>
<h3> 项目</h3>
<p>第一个项目的一些细节</p>
<ul>
<li>
<p>redis 的geo怎么用的</p>
</li>
<li>
<p>然后这个项目介绍一下</p>
</li>
<li>
<p>好友共同关注set怎么实现的</p>
</li>
<li>
<p>然后这个aof什么好处为什么用这个</p>
</li>
<li>
<p>然后我们这个项目是什么奖项</p>
<p>二等奖（ar赛道的第叁名</p>
</li>
<li>
<p>你觉得和一等奖的差在哪里</p>
</li>
</ul>`,r:{minutes:1.71,words:513},title:"SNK面试"},["/employment/interview/SNK/SNK","/employment/interview/SNK/SNK.md"]],["v-3747c200","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%A7%E5%93%81%E8%BF%90%E8%90%A5.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 产品运营</h1>
<h2> 一面</h2>
<p>自我介绍</p>
<p>家在哪</p>
<p>why运营</p>
<p>对京东科技的了解</p>
<p>介绍一下你的项目</p>
<ul>
<li>第一个</li>
<li>第二个</li>
</ul>
<p>整个开发都是你们团队做的嘛</p>
<p>你的工作</p>
<p>如何促进用户使用深度的提升</p>
<p>产品思维不错但是缺乏运维的思维</p>
<p>软件上线了吗？</p>
<p>酒香也怕巷子深，运营如何推广软件，让大家下载</p>
<p>如何获客</p>
<p>对运营工作的理解</p>
<p>专业课有哪些？</p>
<p>三个词介绍一下自己</p>`,r:{minutes:7.72,words:2317},title:"产品运营"},["/employment/interview/京东/产品运营.html","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%A7%E5%93%81%E8%BF%90%E8%90%A5","/employment/interview/京东/产品运营.md","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%A7%E5%93%81%E8%BF%90%E8%90%A5.md"]],["v-528188e2","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 京东</h1>
<ul>
<li>一轮技术面，60min</li>
<li>一轮 HR 面</li>
</ul>
<p>hr 面的时候说今年实习生走错系统了 所以只有两轮</p>
<p>hr 说，如果意向地没有 hc，别的地方有 hc 的话，可能会加一轮技术面</p>
<p>面试官说简历都是在池子里，只要有人捞出来就会发起面试，确实都是等面试官捞的</p>
<p>我面试的时候，没有问技术问题，都是问发展规划之类的，有点像 hr 问的问题，过了</p>
<p>为啥面完hr面后流程还显示hr面试中，也没有收到面试评价的链接</p>
<p>我是收到面评后，状态变成转推荐。你这个应该是hr没提交面评。</p>`,r:{minutes:25.25,words:7575},title:"京东"},["/employment/interview/京东/京东.html","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C","/employment/interview/京东/京东.md","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C.md"]],["v-4b860994","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 京东科技</h1>
<ul>
<li>
<p>技术面，40min</p>
<p>电话面</p>
</li>
<li>
<p>主管面，30min</p>
<p>视频面</p>
</li>
<li>
<p>人力面，15min</p>
<p>视频面</p>
</li>
</ul>
<h2> 技术面</h2>
<h3> 介绍业务</h3>
<p>算法工具部</p>
<p>平台，给算法工程师使用</p>
<p>aigc</p>
<p>软件</p>
<h3> 询问实习</h3>
<p>时长、到岗</p>
<p>可以转正</p>
<p>自我介绍</p>
<h3> 项目</h3>
<p>项目的难点</p>`,r:{minutes:1.1,words:329},title:"京东科技"},["/employment/interview/京东/京东科技.html","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80","/employment/interview/京东/京东科技.md","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80.md"]],["v-3d59908d","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80%E4%B8%80%E9%9D%A2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 京东科技</h1>
<ul>
<li>一轮技术面，60min</li>
<li>一轮 HR 面，15min</li>
</ul>
<h2> 一面</h2>
<h3> 自我介绍</h3>
<p>到岗时间</p>
<p>实习时间，不打算考研，已经在申请？</p>
<p>学校讲 java 吗？</p>
<p>简历两个都是 java ？</p>
<h3> 项目</h3>
<p>讲雁过留痕功能、架构、难题</p>
<blockquote>
<p>lbs</p>
<p>Redis 缓存，set， 热点信息，封装解决穿透雪崩</p>
<p>aop 权限的校验，一个注解</p>
<p>log 日志的处理</p>
</blockquote>`,r:{minutes:15.62,words:4686},title:"京东科技"},["/employment/interview/京东/京东科技一面.html","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80%E4%B8%80%E9%9D%A2","/employment/interview/京东/京东科技一面.md","/employment/interview/%E4%BA%AC%E4%B8%9C/%E4%BA%AC%E4%B8%9C%E7%A7%91%E6%8A%80%E4%B8%80%E9%9D%A2.md"]],["v-7d2d82d5","/employment/interview/%E4%BA%AC%E4%B8%9C/%E9%9D%A2%E7%BB%8F%E6%B1%87%E6%80%BB.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 面经汇总</h1>
<p>技术面轮次：看部门，核心部门可能两面，其他部门一般一面</p>
<h2> 技术面</h2>
<p>可能部门不同?我在别的帖子上看到好像京东零售是两轮业务面一轮hr面</p>
<h3> 一</h3>
<p>背景：2 本非科班+211 科班 项目：一个导师项目、一个尚硅谷的项目 Java 技术栈</p>
<p>-2、非常有礼貌的介绍和流程介绍</p>
<p>-1、自我介绍</p>
<p>0、可以提前来实习嘛</p>
<p>1、项目介绍</p>
<p>2、项目难点</p>
<p>3、怎么知道用户一定支付成功</p>
<p>4、聊了聊分布式锁和一些场景</p>
<p>5、什么情况下会出现热 key，出现了之后怎么解决</p>`,r:{minutes:7.12,words:2137},title:"面经汇总"},["/employment/interview/京东/面经汇总.html","/employment/interview/%E4%BA%AC%E4%B8%9C/%E9%9D%A2%E7%BB%8F%E6%B1%87%E6%80%BB","/employment/interview/京东/面经汇总.md","/employment/interview/%E4%BA%AC%E4%B8%9C/%E9%9D%A2%E7%BB%8F%E6%B1%87%E6%80%BB.md"]],["v-61f32f65","/employment/interview/%E5%8D%8E%E4%B8%BA/4.26%20%E7%AC%94%E8%AF%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 笔试</h1>
<h2> 第一题</h2>
<h3> 解题思路</h3>
<p>拓扑排序，最长路径</p>
<h2> 第二题</h2>
<h3> 解题思路</h3>
<p>类LRU做优化（双向链表+哈希表O1删除），但是被卡读入</p>
<h3> 题干描述</h3>
<p>一个管理ID的资源池、可以从资源池中分配资源ID和释放资源ID须，有动态分配和指定分配，动态分配是从资源池的开始分配，指定分配是指定一个资源ID进行分配，无论哪种分配方式释放资源ID都需要放到资源池的尾部，执行一系列操作后，请问资源池的第一个空ID应该是多少？</p>
<p>能否通过用例：|表示换行； 1 3 | 2 | 1 1| 3 1 输出：2</p>`,r:{minutes:3.09,words:928},title:"笔试"},["/employment/interview/华为/4.26 笔试.html","/employment/interview/%E5%8D%8E%E4%B8%BA/4.26%20%E7%AC%94%E8%AF%95","/employment/interview/华为/4.26 笔试.md","/employment/interview/%E5%8D%8E%E4%B8%BA/4.26%20%E7%AC%94%E8%AF%95.md"]],["v-27a7aebc","/employment/interview/%E5%8D%8E%E4%B8%BA/%E5%8D%8E%E4%B8%BA.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 华为</h1>
<p>状态：</p>
<ul>
<li>resume_type提前说明审批通过</li>
<li>iv_date提前说明oc</li>
<li>showstatus11说明oc</li>
<li>好像是说resume提前了就是提交了，index消失了就是审批通过了</li>
<li>问hr有没有面评，hr说没有，问hr有没有排序，hr说按hc面的人，然后就是回复offer在审批别担心</li>
<li>showstatus是发了offer才会变，oc不会变的</li>
</ul>
<p>笔试、测评</p>
<ul>
<li>一轮技术面</li>
<li>综合面/HR面</li>
</ul>`,r:{minutes:4.6,words:1381},title:"华为"},["/employment/interview/华为/华为.html","/employment/interview/%E5%8D%8E%E4%B8%BA/%E5%8D%8E%E4%B8%BA","/employment/interview/华为/华为.md","/employment/interview/%E5%8D%8E%E4%B8%BA/%E5%8D%8E%E4%B8%BA.md"]],["v-417d8c70","/employment/interview/%E5%8D%8E%E4%B8%BA/%E7%BB%BC%E5%90%88%E9%9D%A2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 综合面</h1>
<p>自我介绍</p>
<p>介绍一个任务最好的项目或比赛，难点你做的工作</p>
<p>项目里面你是组长，你的具体工作</p>
<p>你是准备保研吗</p>
<p>出国的话有规划好去什么学校吗？去学校合作的院校吗？</p>
<p>为什么要实习，不会耽误申请准备吗？是学校要求的吗</p>
<p>好多荣誉和奖项，除了学业成绩以外还有什么别的加分项获得这些吗</p>
<p>比赛都有哪些</p>
<p>论文作者是一作吗</p>
<p>团队开发中，如果遇到分歧如何处理</p>
<p>主要语言是java吗</p>
<p>反问</p>
<ul>
<li>部门业务</li>
<li>流程</li>
</ul>`,r:{minutes:.56,words:167},title:"综合面"},["/employment/interview/华为/综合面.html","/employment/interview/%E5%8D%8E%E4%B8%BA/%E7%BB%BC%E5%90%88%E9%9D%A2","/employment/interview/华为/综合面.md","/employment/interview/%E5%8D%8E%E4%B8%BA/%E7%BB%BC%E5%90%88%E9%9D%A2.md"]],["v-5d5862b1","/employment/interview/%E6%B5%8B%E8%AF%84/%E5%9B%BE%E5%BD%A2%E6%8E%A8%E7%90%86.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 规律性</h2>
<h3> 种类</h3>
<h3> 曲直</h3>
<h3> 笔画</h3>
<h3> 数量</h3>
<h4> 等差数列</h4>
<h3> 位置变换</h3>
<p>平移、</p>
<p>旋转（顺时针、逆时针）</p>
<p>翻转</p>
<p>缩放</p>
<h3> 对称</h3>
<p>（字母对称、图形对称）</p>
<h3> 面数</h3>
<ul>
<li>封闭空间的个数，如汉字和数字里面0或口的个数</li>
<li>图形里面划分出来多少个空间</li>
</ul>
<h3> 立体</h3>
<p>展开图</p>
<ul>
<li>几面体：多少个面就是几面</li>
</ul>`,r:{minutes:.32,words:95},title:""},["/employment/interview/测评/图形推理.html","/employment/interview/%E6%B5%8B%E8%AF%84/%E5%9B%BE%E5%BD%A2%E6%8E%A8%E7%90%86","/employment/interview/测评/图形推理.md","/employment/interview/%E6%B5%8B%E8%AF%84/%E5%9B%BE%E5%BD%A2%E6%8E%A8%E7%90%86.md"]],["v-238ca5f1","/employment/interview/%E9%98%BF%E9%87%8C/3.30.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>反问</p>
<p>成绩？科班基础扎实？工作工具有了解，</p>
<p>分阶段，看技术栈文档、业务文档（多问）</p>
<p>接业务需求</p>
<p>有的人看一个多月的文档</p>
<p>Mentor机制，mentor忙，主管坦诚公开交流更换</p>
`,r:{minutes:.21,words:63},title:""},["/employment/interview/阿里/3.30.html","/employment/interview/%E9%98%BF%E9%87%8C/3.30","/employment/interview/阿里/3.30.md","/employment/interview/%E9%98%BF%E9%87%8C/3.30.md"]],["v-4fb9770f","/employment/interview/%E9%98%BF%E9%87%8C/4.11.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>Redis主从通讯是指Redis主节点和从节点之间的通讯机制，主要用于主从复制和故障转移等功能。</p>
<p>Redis主从通讯的流程如下：</p>
<ol>
<li>
<p>从节点向主节点发送SYNC命令，请求进行全量复制或者增量复制。</p>
</li>
<li>
<p>主节点接收到SYNC命令后，根据请求的复制方式进行处理。如果是全量复制，主节点会将自己的数据全部发送给从节点；如果是增量复制，主节点会将自上次复制以来的所有修改操作发送给从节点。</p>
</li>
<li>
<p>从节点接收到主节点发送的数据后，将数据保存到自己的内存中。</p>
</li>
<li>
<p>主节点在发送数据的同时，会将自己的操作日志保存到内存中，并将操作日志发送给从节点。</p>
</li>
<li>
<p>从节点接收到主节点发送的操作日志后，将操作日志保存到自己的内存中，并执行相应的操作。</p>
</li>
<li>
<p>从节点定期向主节点发送PING命令，以检测主节点是否存活。</p>
</li>
<li>
<p>如果主节点出现故障，从节点会尝试进行故障转移，选择一个新的主节点，并向新的主节点发送SYNC命令，进行数据同步。</p>
</li>
</ol>`,r:{minutes:3.58,words:1073},title:""},["/employment/interview/阿里/4.11.html","/employment/interview/%E9%98%BF%E9%87%8C/4.11","/employment/interview/阿里/4.11.md","/employment/interview/%E9%98%BF%E9%87%8C/4.11.md"]],["v-8694b6bc","/employment/interview/%E9%98%BF%E9%87%8C/%E9%98%BF%E9%87%8C.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 阿里</h1>
<p>●如需要申请转部门，学生通过邮件申请，发送至campus@alibaba-inc.com
●邮件标题：姓名+转部门/转岗位申请
●内容包含：
（1）申请编号
（2）姓名
（3）手机号
（4）申请转入的部门&amp;岗位
（5）目前所在部门&amp;岗位
（6）申请转部门的原因
（7）我已知晓并同意：1. 转岗位需要消耗掉一个意向机会；2. 转部门/岗位均只有一次申请机会</p>
<p>（1）申请编号：6187526
（2）姓名：刘大维
（3）手机号：15038237816
（4）申请转入的部门&amp;岗位：阿里集团-中国数字商业-大淘宝-大淘宝技术-行业与商家技术，研发工程师JAVA
（5）目前所在部门&amp;岗位：阿里集团-大淘宝-技术部，研发工程师JAVA
（6）申请转部门的原因：希望可以尝试面试行业与商家技术部门
（7）我已知晓并同意：1. 转岗位需要消耗掉一个意向机会；2. 转部门/岗位均只有一次申请机会</p>`,r:{minutes:1.57,words:471},title:"阿里"},["/employment/interview/阿里/阿里.html","/employment/interview/%E9%98%BF%E9%87%8C/%E9%98%BF%E9%87%8C","/employment/interview/阿里/阿里.md","/employment/interview/%E9%98%BF%E9%87%8C/%E9%98%BF%E9%87%8C.md"]],["v-1696696a","/employment/resume/%E9%A1%B9%E7%9B%AE/%E6%8E%98%E9%87%91.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 掘金</h1>
<h2> 项目背景</h2>
<h3> 项目介绍</h3>
<p>这是一款类掘金的知识分享平台。用户可以发布和收藏文章、评论互动、互相关注，以及获得个性化推荐的文章。我们还利用 TrustSVD 社交推荐算法，实现针对用户的个性化社交推荐。</p>
<h3> 人员分工</h3>
<ul>
<li>4个同学，2位同学开发前端，2位同学开发后端。</li>
<li>2人前端，SwiftUI 主要界面、ARKit 场景交互页面</li>
<li>2人后端，</li>
</ul>
<h3> 个人工作</h3>
<blockquote>
<p>你这个项目是因为什么写的呀？为什么写的呀？</p>
</blockquote>`,r:{minutes:3.53,words:1059},title:"掘金"},["/employment/resume/项目/掘金.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E6%8E%98%E9%87%91","/employment/resume/项目/掘金.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E6%8E%98%E9%87%91.md"]],["v-224320df","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%87%AA%E6%88%91.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 自我介绍</h2>
<p>面试官您好，我是刘大维，来自东北大学软件工程专业大三年级。我将从三个方面来介绍我自己：</p>
<p>首先，我热爱技术研发，学习能力良好。我在大学期间成绩优异，平均学分绩点为92.5，荣获国家奖学金。我具有良好的java基础以及扎实的开发能力，我主导开发的两个项目获得了国家二等奖、字节跳动青训营一等奖的优异成绩。</p>
<p>其次，我具有良好的沟通能力和强烈的责任心，无论是在平时的课程项目中，还是在科创竞赛中，我都经常担任团队组长，在项目管理过程中会提前梳理工作量，结合每个人的优势特长分配工作。</p>
<p>最后一个方面是，我勤奋好学、善于总结思考。我认为细致、踏实才能真正掌握知识点，在学习新技术的过程中，我往往会反复实践。我在过往的学习中，养成了写总结笔记的习惯，并且放在了我的个人博客上。</p>`,r:{minutes:10.14,words:3043},title:"Trace Note"},["/employment/resume/项目/自我.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%87%AA%E6%88%91","/employment/resume/项目/自我.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%87%AA%E6%88%91.md"]],["v-59260c34","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%AE%B2%E7%A8%BF.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>并且，我注重学习与实践相结合，参加了十余项科创比赛。我将主要分享以下两个竞赛经历</p>
<p>我参与设计并开发了一款基于地点的增强现实ios应用，选用SpringBoot， Redis等技术，包含放置ar留言板、连续签到、装扮抢购等功能。去年在浙大，获得了中国高校计算机大赛移动应用创新赛全国二等奖。</p>
<p>右边就是在实地放置AR留言板的演示视频。</p>
<p>在实现方面，我使用了Redis-ZSet存储用户点赞信息，将点赞日期作为score值，并通过 BitMap 实现用户连续签到统计功能，只需要长度为31位的二进制数，就可以存储一个月登陆与否的信息。</p>
<blockquote>
<p>🌟点赞日期作为score值；用户id，存的是他关注的人，每个用户id+业务前缀作为key，key下面存set集合，存放所有关注他的人的id，取交集；用户每个月是一个bitmap，只需要长度为31位的二进制数，就可以存储一个月登陆与否的信息，只需要4bit以内（一个int空间），判断是否连续登陆</p>
</blockquote>`,r:{minutes:1.95,words:584},title:""},["/employment/resume/项目/讲稿.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%AE%B2%E7%A8%BF","/employment/resume/项目/讲稿.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E8%AE%B2%E7%A8%BF.md"]],["v-6b7d4df0","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%9B%81%E8%BF%87%E7%95%99%E7%97%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> Trace Note</h1>
<h2> 项目背景</h2>
<h3> 项目介绍</h3>
<p>雁过留痕 Trace Note 是一款基于地点的社交 app。用户可以在一个地点开启一个 Trace AR 场景，并在场景中放置 Note 虚拟留言板，不同用户见可以在同一个 Trace 中相互交互评论。Note 留言板提供字体、材质等个性化装饰选项。用户可以通过每日签到打卡获取代币，用来抢购个性化装扮，以提高个性化程度，并作为激励机制提高用户每日的活跃度。</p>
<h3> 人员分工</h3>
<ul>
<li>3个同学，1人全职文案和海报，2位开发同学客户端和后端共同负责</li>
<li>2人客户端、SwiftUI主要界面、ARKit场景交互页面</li>
<li>2人后端、</li>
</ul>`,r:{minutes:7.53,words:2260},title:"Trace Note"},["/employment/resume/项目/雁过留痕.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%9B%81%E8%BF%87%E7%95%99%E7%97%95","/employment/resume/项目/雁过留痕.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%9B%81%E8%BF%87%E7%95%99%E7%97%95.md"]],["v-b1951358","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E4%BA%AE%E7%82%B9%E6%80%BB%E7%BB%93.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 项目亮点总结</h1>
<h3> 用户中心项目</h3>
<ol>
<li>
<p>为了提高开发效率，选用 Ant Design Pro 脚手架快速搭建基础页面，并对原始模板进行瘦身、抽象为可复用的公共模板，便于后续同类项目的快速研发。</p>
</li>
<li>
<p>在脚手架自带的 umi-request 请求库基础上进行改造和封装，添加全局请求拦截和全局异常处理逻辑、自动根据项目启动命令来区分环境，减少重复代码、提升项目可维护性。</p>
</li>
<li>
<p>选用 MyBatis + MyBatis-Plus 进行数据访问层开发，复用大多数通用方法，并且通过继承定制了自己的 通用操作模板 ，大幅提升了项目开发效率。</p>
</li>
<li>
<p>为了明确接口的返回，自定义统一的错误码，并封装了 全局异常处理器 ，从而规范了异常返回、屏蔽了项目冗余的报错细节。</p>
</li>
<li>
<p>对于项目中的 JSON 格式化处理对象，采用 双检锁单例模式 进行管理，从而复用对象，避免了重复创建对象的开销，便于集中维护管理。</p>
</li>
<li>
<p>采用 Nginx 完成前端项目部署、采用 Docker 容器完成后端项目部署，并且使用宝塔面板对项目进行运维监控。</p>
</li>
</ol>`,r:{minutes:16.3,words:4891},title:"项目亮点总结"},["/employment/resume/项目/项目亮点总结.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E4%BA%AE%E7%82%B9%E6%80%BB%E7%BB%93","/employment/resume/项目/项目亮点总结.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E4%BA%AE%E7%82%B9%E6%80%BB%E7%BB%93.md"]],["v-4a7c9956","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%8F%90%E9%97%AE%E5%87%86%E5%A4%87.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 雁过留痕</h2>
<h3> 小组如何分工合作的？</h3>
<h3> Redis Zset 结构/原理？</h3>
<p>skiplist 跳表结构（一段八股）</p>
<p>跳表（Skip List）是一种有序数据结构，它通过在链表中添加多级索引来提高查找效率。跳表的原理如下：</p>
<ol>
<li>
<p>基本结构：跳表由多个层级组成，每个层级都是一个有序的链表。最底层是原始链表，每个节点包含一个元素和指向下一个节点的指针。每个层级的链表都是原始链表的子集。</p>
</li>
<li>
<p>索引层级：除了原始链表外，跳表还包含多个索引层级。每个索引层级都是原始链表的一个子集，其中的节点包含指向下一个层级的指针。每个节点的指针可以跳过多个节点，从而实现快速的查找。</p>
</li>
<li>
<p>查找操作：跳表的查找操作从最顶层的索引层级开始，逐层向下查找。在每个层级中，从当前节点开始，比较目标元素与当前节点的值。如果目标元素小于当前节点的值，则向下一层级继续查找；如果目标元素大于等于当前节点的值，则继续在当前层级中向右查找。直到找到目标元素或者无法继续向下查找为止。</p>
</li>
<li>
<p>插入操作：插入操作首先进行查找，找到插入位置后，将新节点插入到对应的层级中，并更新相应的指针。为了保持跳表的平衡性，插入操作时会随机决定是否在更高层级添加索引节点。</p>
</li>
<li>
<p>删除操作：删除操作首先进行查找，找到目标节点后，将其从每个层级的链表中移除，并更新相应的指针。</p>
</li>
</ol>`,r:{minutes:11.33,words:3399},title:""},["/employment/resume/项目/项目提问准备.html","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%8F%90%E9%97%AE%E5%87%86%E5%A4%87","/employment/resume/项目/项目提问准备.md","/employment/resume/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%8F%90%E9%97%AE%E5%87%86%E5%A4%87.md"]],["v-0bff3a50","/se/design/ood/",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 面向对象设计</h1>
<h3> 类型划分</h3>
<ul>
<li>管理类</li>
<li>预定类</li>
<li>实物类</li>
<li>游戏类</li>
</ul>
<h3> OOP三大特征</h3>
<ul>
<li>封装</li>
<li>继承</li>
<li>多态</li>
</ul>
<h3> 设计原则</h3>
<p>SOLID：</p>
<ul>
<li>
<p>S – Single responsibility principle</p>
<p>一个类应该有且只有一个去改变他的理由，这意味着一个类应该只有一项工作。</p>
</li>
<li>
<p>O – Open close principle</p>
<p>对象或实体应该对扩展开放，对修改封闭 (Open to extension, close to modification)。</p>
</li>
<li>
<p>L – Liskov substitution principle</p>
<p>任何一个子类或派生类应该可以替换它们的基类或父类</p>
</li>
<li>
<p>I – Interface segregation principle</p>
<p>不应该强迫一个类实现它用不上的接口</p>
</li>
<li>
<p>D – Dependency inversion principle</p>
<p>抽象不应该依赖于具体实现，具体实现应该依赖于抽象</p>
<p>High-level的实体不应该依赖于low-level的实体</p>
</li>
</ul>`,r:{minutes:1.21,words:364},title:"面向对象设计"},["/se/design/ood/index.html","/se/design/ood/README.md"]],["v-432219a8","/se/design/pattern/Untitled.html",{y:"a",d:"2023-04-03T03:29:06.000Z",title:""},["/se/design/pattern/Untitled","/se/design/pattern/Untitled.md"]],["v-36873900","/se/design/system-design/",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 系统设计</h1>
<p>系统设计中常说的 Tradeoff 是什么：权衡，面试官最看重的</p>
<p>什么叫 SOA</p>
<p>什么是 Pull Model 和什么是 Push Model</p>
<p>数据存储系统有哪些，什么样的数据适合存在什么样的数据存储系统中</p>
<p>什么是异步任务和消息队列</p>
<h3> 问题</h3>
<p>设计 xxx 系统</p>
<p>设计 xx 系统中的 xx 功能</p>
<p>访问限制系统：memcached</p>
<p>设计统计某事件历史发生次数：监控设计</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-13 08.46.33.png" alt="截屏2022-07-13 08.46.33" loading="lazy"></p>`,r:{minutes:1.63,words:488},title:"系统设计"},["/se/design/system-design/index.html","/se/design/system-design/README.md"]],["v-5af053ea","/se/design/system-design/cron.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 定时任务</h1>
<h2> 单体定时任务</h2>
<h3> Thread</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"doSameThing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.79,words:538},title:"定时任务"},["/se/design/system-design/cron","/se/design/system-design/cron.md"]],["v-1c03b80a","/se/design/system-design/seckill.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 秒杀系统</h1>
<h2> 数据库设计</h2>
<ul>
<li>
<p>商品信息表</p>
<p><code>commodity_info</code></p>
</li>
<li>
<p>库存信息表</p>
<p><code>stock_info</code></p>
</li>
<li>
<p>秒杀活动表</p>
<p><code>seckill_info</code></p>
</li>
<li>
<p>订单信息表</p>
<p><code>order_info</code></p>
</li>
</ul>
<h3> 扣减库存</h3>
<p>先读取，再扣减</p>
<p>会出现并发超卖问题</p>`,r:{minutes:.84,words:252},title:"秒杀系统"},["/se/design/system-design/seckill","/se/design/system-design/seckill.md"]],["v-c5e43a24","/se/design/system-design/user.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 用户系统</h1>
<p>用户系统特点：</p>
<p>读非常多，写非常少，一个读多写少的系统，一定要使用 Cache 进行优化</p>
<ul>
<li>Authentication Service 负责登录注册</li>
<li>User Service 负责用户信息存储与查询</li>
<li>Friendship Service 负责好友关系存储</li>
</ul>
`,r:{minutes:.23,words:68},title:"用户系统"},["/se/design/system-design/user","/se/design/system-design/user.md"]],["v-4b40d03a","/se/devops/cicd/",{y:"a",d:"2023-08-10T08:28:21.000Z",e:`<h1> CI/CD</h1>
<p>Continuous Integration, Delivery, and Deployment (CI/CD)</p>
`,r:{minutes:.03,words:9},title:"CI/CD"},["/se/devops/cicd/index.html","/se/devops/cicd/README.md"]],["v-35285eb9","/se/devops/cicd/ci.html",{y:"a",d:"2023-08-14T07:11:56.000Z",e:`<h1> CI</h1>
<p>jenkins</p>
<p>Argo workflows</p>
`,r:{minutes:.01,words:4},title:"CI"},["/se/devops/cicd/ci","/se/devops/cicd/ci.md"]],["v-204dfcb5","/se/devops/cicd/makefile.html",{y:"a",d:"2023-08-10T08:28:21.000Z",e:`<h1> Makefile</h1>
<h2> makefile的规则</h2>
<p>在讲述这个makefile之前，还是让我们先来粗略地看一看makefile的规则。</p>
<div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token target symbol">target ...</span> <span class="token punctuation">:</span> prerequisites ...
    recipe
    ...
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.4,words:420},title:"Makefile"},["/se/devops/cicd/makefile","/se/devops/cicd/makefile.md"]],["v-8515fffe","/se/devops/docker/",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> Docker</h1>
<p>要理解原理，其实可以自己制作，如k8s就完全可以自己做，只会用层次太低了</p>
<p>容器是云计算的基础</p>
<p>容器，隔离环境</p>
<p>安装指南：<a href="https://www.bilibili.com/read/cv17586749" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/read/cv17586749</a></p>
<p>cgroup</p>
`,r:{minutes:.19,words:56},title:"Docker"},["/se/devops/docker/index.html","/se/devops/docker/README.md"]],["v-d121411e","/se/devops/docker/docker-file.html",{y:"a",d:"2023-08-10T08:28:21.000Z",e:`<h1> DockerFile</h1>
`,r:{minutes:0,words:1},title:"DockerFile"},["/se/devops/docker/docker-file","/se/devops/docker/docker-file.md"]],["v-209719ec","/se/devops/docker/network.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 网络</h1>
<p>bridge是一个interface，可以把多个网络连接到一个网</p>
<p>根据应用来选用哪种</p>
<p>能不用网络就不用，但是可以有的应用强的话，就用强的</p>
<p>7061588533214969892</p>
`,r:{minutes:.18,words:53},title:"网络"},["/se/devops/docker/network","/se/devops/docker/network.md"]],["v-62dda79b","/se/devops/docker/persistence.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 持久化</h1>
<ul>
<li>--volume 挂在到目录</li>
<li>--volume from 从一个容器里面挂数据</li>
</ul>
<p>一次性程序 --rm，跑完就删</p>
<p>mount远端的，通过nfs，但是本机可以无感拿数据（但是依赖网络）</p>
<p>把本机的目录mount到容器上</p>
`,r:{minutes:.22,words:66},title:"持久化"},["/se/devops/docker/persistence","/se/devops/docker/persistence.md"]],["v-0ab26f57","/se/devops/k8s/",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> Kubernetes</h1>
<p><a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<p>A workload is an application running on Kubernetes. Whether your workload is a single component or several that work
together, on Kubernetes you run it inside a set of pods. In Kubernetes, a Pod represents a set of running containers on
your cluster.</p>`,r:{minutes:.54,words:162},title:"Kubernetes"},["/se/devops/k8s/index.html","/se/devops/k8s/README.md"]],["v-926c3a2a","/se/devops/k8s/archetecture.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> Architecture</h1>
`,r:{minutes:0,words:1},title:"Architecture"},["/se/devops/k8s/archetecture","/se/devops/k8s/archetecture.md"]],["v-a3c5ff30","/se/devops/k8s/installation.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> Installation</h1>
<h2> 本地</h2>
<p>mac环境下使用的brew作为包管理器，通过brew的方式安装最新的docker desktop</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.47,words:140},title:"Installation"},["/se/devops/k8s/installation","/se/devops/k8s/installation.md"]],["v-4c40d619","/se/devops/unix/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 企业级服务器系统导论</h1>
<h2> 课程章程</h2>
<ol>
<li>
<p>Linux、Unix用法</p>
<p>主要是Linux（相对没有含金量，但是比较重要）</p>
</li>
<li>
<p>运维硬件的角度</p>
<ol>
<li>给很多的脚本</li>
<li>冗余、故障转移（冗余节点对故障节点的接管）</li>
</ol>
</li>
<li>
<p>Docker容器</p>
</li>
<li>
<p>Kubernetes</p>
</li>
</ol>
<p>Linux</p>
<p>讲生产环节下的Linux环境下的东西</p>
<p>一般用GNU：bash</p>`,r:{minutes:1.74,words:522},title:"企业级服务器系统导论"},["/se/devops/unix/index.html","/se/devops/unix/README.md"]],["v-cd98a0ac","/se/framework/nginx/Untitled.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>反向代理</p>
<p>负载均衡</p>
<p>动静分离</p>
`,r:{minutes:.04,words:12},title:""},["/se/framework/nginx/Untitled","/se/framework/nginx/Untitled.md"]],["v-779a1f7a","/se/framework/orm/",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> ORM</h1>
`,r:{minutes:0,words:1},title:"ORM"},["/se/framework/orm/index.html","/se/framework/orm/README.md"]],["v-5c068491","/se/framework/orm/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> 常见问题</h1>
<h3> The error occurred while setting parameters</h3>
<p>解决办法</p>
<p>一、检查有没有拼写错误</p>
<p>比如 insert 写成 inset</p>
<p>二、检查有没有sql关键字</p>
<p>比如 insert into order (order_no) VALUES (1001);</p>
<p>其中表名 order是sql关键字 所以加上\`\`即可，改为INSERT INTO \`order\` (order_no) VALUES (1001);</p>
<p>或者字段名是关键词同理</p>`,r:{minutes:.3,words:91},title:"常见问题"},["/se/framework/orm/常见问题.html","/se/framework/orm/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98","/se/framework/orm/常见问题.md","/se/framework/orm/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md"]],["v-134b021f","/se/framework/oss/oss.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> OSS</h1>
`,r:{minutes:0,words:1},title:"OSS"},["/se/framework/oss/oss","/se/framework/oss/oss.md"]],["v-0906aead","/se/framework/spring/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Spring</h1>
<p>核心模块</p>
<ul>
<li>
<p>IoC 控制反转</p>
</li>
<li>
<p>AOP 面向切面</p>
<p>代理模式，开闭原则</p>
</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20200831175708.png" alt="Spring5.x主要模块" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20200902100038.png" alt="Spring 各个模块的依赖关系" loading="lazy"></p>`,r:{minutes:1.14,words:343},title:"Spring"},["/se/framework/spring/index.html","/se/framework/spring/README.md"]],["v-4899202c","/se/framework/spring/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 设计模式</h1>
<h3> 模板模式</h3>
<p>Spring 中 <code>JdbcTemplate</code>、<code>HibernateTemplate</code> 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。一般情况下，我们都是使用继承的方式来实现模板模式，但是 Spring 并没有使用这种方式，而是使用 Callback 模式与模板方法模式配合，既达到了代码复用的效果，同时增加了灵活性。</p>
<h3> 观察者模式</h3>
<h3> 单例模式</h3>
<h3> 工厂模式</h3>
`,r:{minutes:.4,words:120},title:"设计模式"},["/se/framework/spring/设计模式.html","/se/framework/spring/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F","/se/framework/spring/设计模式.md","/se/framework/spring/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md"]],["v-2dabab05","/se/framework/spring-cloud/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Spring Cloud</h1>
`,r:{minutes:.01,words:2},title:"Spring Cloud"},["/se/framework/spring-cloud/index.html","/se/framework/spring-cloud/README.md"]],["v-3ee5a1d1","/se/lang/golang/MPG.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> MPG</h1>
<p>在操作系统提供的内核线程之上，Go 搭建了一个特有的用户级线程模型。传统的函数调用是将函数指针存储在内存的栈空间上，但是栈空间只允许操作系统进行操作，我们能拿到的只限于堆内存，所以 Go 开发者在堆上申请一块内存，将寄存器 %rsp 以及寄存器 %rbp 指过去，从而将这块内存伪装成用户栈，从而巧妙地实现了并行运行用户级线程 goroutine。要聊 Go 的线程实现模型，必须要知道以下3个核心元素：</p>
<ul>
<li>M：machine 缩写，一个 M 代表一个内核线程。</li>
<li>P：processer 缩写，一个 P 代表执行一个 Go 代码片段所需的必要资源。</li>
<li>G：goroutine 缩写，一个 G 代表一个 Go 代码片段。</li>
</ul>`,r:{minutes:.74,words:221},title:"MPG"},["/se/lang/golang/MPG","/se/lang/golang/MPG.md"]],["v-48946111","/se/lang/golang/tool-chain.html",{y:"a",d:"2023-08-14T07:11:56.000Z",e:`<h1> 工具链</h1>
<ul>
<li>熔断 back-off</li>
<li>定时任务 cron</li>
<li>k8s client-go
informer</li>
</ul>
`,r:{minutes:.05,words:16},title:"工具链"},["/se/lang/golang/tool-chain","/se/lang/golang/tool-chain.md"]],["v-fd8baddc","/se/lang/golang/%E8%AF%AD%E6%B3%95.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Go</h1>
<h2> Golang基本语法</h2>
<h3> 数据类型</h3>
<p>Golang中的数据类型包括基本数据类型和复合数据类型。</p>
<h4> 基本数据类型</h4>
<p>Golang中的基本数据类型包括：</p>
<ul>
<li>bool：布尔类型，取值为true或false。</li>
<li>数值类型：包括整数类型和浮点数类型。
<ul>
<li>整数类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、int、uint、uintptr。</li>
<li>浮点数类型：float32、float64。</li>
</ul>
</li>
<li>字符串类型：用于表示文本数据。</li>
<li>字符类型：用于表示单个字符，使用rune类型表示。</li>
<li>错误类型：用于表示错误信息，通常用于函数返回值。</li>
</ul>`,r:{minutes:6.91,words:2072},title:"Go"},["/se/lang/golang/语法.html","/se/lang/golang/%E8%AF%AD%E6%B3%95","/se/lang/golang/语法.md","/se/lang/golang/%E8%AF%AD%E6%B3%95.md"]],["v-56daac70","/se/lang/java/",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> Java</h1>
<ul>
<li>语法</li>
<li>集合</li>
<li>JUC 并发编程</li>
<li>JVM 虚拟机</li>
<li>新特性</li>
<li>IO</li>
</ul>
`,r:{minutes:.06,words:18},title:"Java"},["/se/lang/java/index.html","/se/lang/java/README.md"]],["v-13dd7056","/se/tools/git/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Git</h1>
<h2> 配置信息</h2>
<p>git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。</p>
<h3> 查看git配置信息</h3>
<p><code>$ git config --list</code></p>
<h3> 查看git用户名、密码、邮箱的配置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config user.name
$ <span class="token function">git</span> config user.password
$ <span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.41,words:123},title:"Git"},["/se/tools/git/index.html","/se/tools/git/README.md"]],["v-821201d6","/se/tools/latex/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> LaTeX</h1>
<p><a href="https://www.mathcha.io" target="_blank" rel="noopener noreferrer">https://www.mathcha.io</a></p>
`,r:{minutes:.01,words:3},title:"LaTeX"},["/se/tools/latex/index.html","/se/tools/latex/README.md"]],["v-47fd2db2","/se/tools/latex/latex%E8%BF%90%E7%AE%97%E7%AC%A6.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> LaTeX 运算符</h1>
<p><code>\\mathcal</code>：花体数学符号</p>
<p><code>\\mathbf</code>：粗体正向数学符号</p>
<p><code>\\mathrm</code>：取消字母的数学符号格式的倾斜</p>
<p><code>\\mathop</code>：标记后面内容为数学运算符（则可以使用limits等标记）</p>
<p><code>\\underset</code>，功能和效果类似limits的下限</p>
<p><a href="https://www.jianshu.com/p/22117d964baf" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/22117d964baf</a></p>`,r:{minutes:.32,words:95},title:"LaTeX 运算符"},["/se/tools/latex/latex运算符.html","/se/tools/latex/latex%E8%BF%90%E7%AE%97%E7%AC%A6","/se/tools/latex/latex运算符.md","/se/tools/latex/latex%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],["v-ef4200a4","/se/tools/others/alist.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> AList</h1>
<p>Webdav</p>
<p>阿里云无法预览视频原因：refresh token问题，重新抓去，或去app抓取</p>
<p>用安卓，或安卓虚拟机抓取</p>
`,r:{minutes:.12,words:37},title:"AList"},["/se/tools/others/alist","/se/tools/others/alist.md"]],["v-414df76c","/se/tools/others/xdm.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> XDM</h1>
<p>下载器对比：<a href="https://zhuanlan.zhihu.com/p/500792340" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/500792340</a></p>
`,r:{minutes:.03,words:10},title:"XDM"},["/se/tools/others/xdm","/se/tools/others/xdm.md"]],["v-f09f22fa","/se/tools/uml/mermaid.html",{y:"a",d:"2023-01-07T14:07:14.000Z",e:`<h1> Mermaid</h1>
`,r:{minutes:0,words:1},title:"Mermaid"},["/se/tools/uml/mermaid","/se/tools/uml/mermaid.md"]],["v-58b8a846","/se/tools/uml/plantUML.html",{y:"a",d:"2023-01-07T14:07:14.000Z",e:`<h1> Plant UML</h1>
<p><a href="https://blog.csdn.net/vidar_li/article/details/86495811" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/vidar_li/article/details/86495811</a></p>
<p><img src="https://g.gravizo.com/svg?
  digraph G {
    aize =&quot;4,4&quot;;
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label=&quot;100 times&quot;];
    make_string [label=&quot;make a string&quot;];
    node [shape=box,style=filled,color=&quot;.7 .3 1.0&quot;];
    execute -> compare;
  }"></p>`,r:{minutes:.23,words:70},title:"Plant UML"},["/se/tools/uml/plantUML","/se/tools/uml/plantUML.md"]],["v-aae0d1cc","/se/tools/vuepress/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Vuepress</h1>
`,r:{minutes:0,words:1},title:"Vuepress"},["/se/tools/vuepress/index.html","/se/tools/vuepress/README.md"]],["v-d02da8bc","/se/tools/vuepress/vuepress.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Vuepress 踩坑记录</h1>
<p>踩坑记录：</p>
<p>vuepress部署样式问题的解决：</p>
<p><a href="https://www.jb51.net/article/263056.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/263056.htm</a></p>
<p>github action缓存node</p>
<ul>
<li><a href="http://www.wrzsj.top" target="_blank" rel="noopener noreferrer">http://www.wrzsj.top</a></li>
<li><a href="https://www.5axxw.com/questions/content/tffumi" target="_blank" rel="noopener noreferrer">https://www.5axxw.com/questions/content/tffumi</a></li>
</ul>`,r:{minutes:.24,words:72},title:"Vuepress 踩坑记录"},["/se/tools/vuepress/vuepress","/se/tools/vuepress/vuepress.md"]],["v-764e75cc","/standardized/GRE/QUANTITATIVE/",{y:"a",d:"2022-12-03T11:21:38.000Z",e:`<h1> Quantitative</h1>
<p>170</p>
<p>计算器只能做简单的加减乘除，乘方不行</p>
<ul>
<li>单选，圆形框</li>
<li>不定项选择，方形框</li>
</ul>
<h2> 题型</h2>
<h3> 数值比较题</h3>
<p>1-7/8都是数值比较题：a大b大c大d不确定</p>
<p>方法：</p>
<ol>
<li>试数：只能证明D</li>
<li>减法：A - B ? 0</li>
<li>除法：A / B ? 1，注意正负</li>
<li>极值：一边最大都比另一侧最小小，则小</li>
<li>规律：</li>
</ol>
<h2> 数论</h2>`,r:{minutes:1.11,words:332},title:"Quantitative"},["/standardized/GRE/QUANTITATIVE/index.html","/standardized/GRE/QUANTITATIVE/README.md"]],["v-74902a86","/standardized/GRE/QUANTITATIVE/%E4%BB%A3%E6%95%B0.html",{y:"a",d:"2023-08-10T06:29:52.000Z",title:""},["/standardized/GRE/QUANTITATIVE/代数.html","/standardized/GRE/QUANTITATIVE/%E4%BB%A3%E6%95%B0","/standardized/GRE/QUANTITATIVE/代数.md","/standardized/GRE/QUANTITATIVE/%E4%BB%A3%E6%95%B0.md"]],["v-e108a058","/standardized/GRE/QUANTITATIVE/%E6%95%B0%E8%AE%BA.html",{y:"a",d:"2023-08-10T06:29:52.000Z",title:""},["/standardized/GRE/QUANTITATIVE/数论.html","/standardized/GRE/QUANTITATIVE/%E6%95%B0%E8%AE%BA","/standardized/GRE/QUANTITATIVE/数论.md","/standardized/GRE/QUANTITATIVE/%E6%95%B0%E8%AE%BA.md"]],["v-1cc0ba47","/standardized/GRE/VERBAL/",{y:"a",d:"2022-12-03T11:21:38.000Z",e:`<h1> Verbal</h1>
<p>分为</p>
<ul>
<li>填空</li>
<li>阅读</li>
</ul>
<p>各10题</p>
`,r:{minutes:.03,words:10},title:"Verbal"},["/standardized/GRE/VERBAL/index.html","/standardized/GRE/VERBAL/README.md"]],["v-bc0877a2","/standardized/TOEFL/LISTENING/1.%20%E4%B8%AD%E5%BF%83%E9%80%BB%E8%BE%91%E7%B2%BE%E5%90%AC%E6%B3%95.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 中心逻辑精听法</h1>
<p>提炼简化能力</p>
<h2> 中心逻辑</h2>
<p>理解目的：全文中心与逻辑结构</p>
<p>精听方式：在讲什么、为什么讲、要讲什么</p>
<h3> 中心句</h3>
<p>中心：中心句，文章是围绕着中心句来说的而不是中心词</p>
<p><strong>中心句：完整的有因果逻辑的句子</strong></p>
<blockquote>
<p>很多真题里面标志句后面跟的是中心词，并没有跟着完整的中心句。<strong>经常是中心词，没有出现中心句</strong></p>
</blockquote>
<p>中心句意识</p>
<p>如果中心句中的核心词未知，则讲座一开始会先讲这个概念</p>`,r:{minutes:3.65,words:1095},title:"中心逻辑精听法"},["/standardized/TOEFL/LISTENING/1. 中心逻辑精听法.html","/standardized/TOEFL/LISTENING/1.%20%E4%B8%AD%E5%BF%83%E9%80%BB%E8%BE%91%E7%B2%BE%E5%90%AC%E6%B3%95","/standardized/TOEFL/LISTENING/1. 中心逻辑精听法.md","/standardized/TOEFL/LISTENING/1.%20%E4%B8%AD%E5%BF%83%E9%80%BB%E8%BE%91%E7%B2%BE%E5%90%AC%E6%B3%95.md"]],["v-6bbae1e2","/standardized/TOEFL/LISTENING/2.%20%E9%A2%98%E5%9E%8B.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 题型</h1>
<p>音节听力能力，记音节</p>
<p>题型现状：重听题变少，态度和多选变多</p>
<h2> 听力题型</h2>
<h3> 题型目的</h3>
<p>不可能做到全部都听懂，所以需要理解出题和做题的思路。</p>
<h3> 题型判断标准</h3>
<p>标准：题型 = 题干关键词 + 正确选项</p>
<blockquote>
<p>平时练习的时候判断，来懂这个思路</p>
</blockquote>
<p>题干关键词 + 正确选项来判断题型：平时练习的时候判断，来懂这个思路</p>
<h4> 考查形式</h4>
<p>（不重要）</p>
<ul>
<li>
<p>细节题：在听力里不分细节题和推断题</p>
<p>say = infer = imply = explain = illustrate = demonstrate = 说</p>
</li>
<li>
<p>目的题：why，展开证明中心的目的 or 细节证明中心的目的（中心）</p>
</li>
<li>
<p>多选题：看在考两个什么，两个细节 or <strong>两个中心</strong>（居多）</p>
</li>
<li>
<p>重听题：现在很少了，让位给态度题、多选题了</p>
</li>
<li>
<p>态度题：大态度、小态度、多个态度</p>
</li>
</ul>`,r:{minutes:2.19,words:658},title:"题型"},["/standardized/TOEFL/LISTENING/2. 题型.html","/standardized/TOEFL/LISTENING/2.%20%E9%A2%98%E5%9E%8B","/standardized/TOEFL/LISTENING/2. 题型.md","/standardized/TOEFL/LISTENING/2.%20%E9%A2%98%E5%9E%8B.md"]],["v-9f54ba94","/standardized/TOEFL/LISTENING/3.%20%E7%AC%94%E8%AE%B0%E6%B3%95.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 笔记法</h1>
<p>取决于题型</p>
<h2> 笔记的意义</h2>
<ol>
<li>
<p>心态</p>
<p>不甘心：❌ 会错过重要听力的内容，也不理解意思；</p>
<p>会走神：❌ 找别的方法，如盯着一个地方看；</p>
<p>怕忘记：❌ 听懂了主要内容，基本上不会忘，而且答案选项可以帮回忆，脑补；</p>
<p>找答案：对，但是优先保听</p>
</li>
<li>
<p>结合出题</p>
<p>答案选项可以帮回忆，脑补；</p>
</li>
<li>
<p>什么时候记</p>
<p>理解，不影响后面听的时候记</p>
<p>23 分以下的同学不要记笔记</p>
<p>除非特别简单，能完全听懂，否则少记</p>
<p>勉强听懂的文章，不太能记笔记，保听少记</p>
<p>24 分是听懂个大概</p>
<p>25、27 分的同学也要少记笔记，</p>
<p>低分段中分段，笔记越少越好</p>
<p>高分段，听懂更多，有时间记意思</p>
<p>尽量 100%精力去听，少记笔记，只记主干</p>
<blockquote>
<p>没有理解不要记</p>
</blockquote>
<p>中心句，听出来不一定记，因为时间很短，记中心词无效（因为全文都在说），记别的又费时间</p>
</li>
<li>
<p>记哪些内容</p>
<p>全文中心 + 段落中心 + 段内展开</p>
<p>细节不记因为基本不考且很多，而且听懂就能选</p>
</li>
<li>
<p>怎么记合适</p>
<p>笔记 + 画图 + 脑补</p>
<p>笔记：速记符号，简写、汉字、符号</p>
<p>逻辑</p>
<ul>
<li>原因，∵</li>
<li>对比，vs</li>
<li>转折，Z</li>
<li>并列，1 2 3</li>
</ul>
<p>好坏+-，⬆️⬇️</p>
</li>
</ol>`,r:{minutes:1.41,words:423},title:"笔记法"},["/standardized/TOEFL/LISTENING/3. 笔记法.html","/standardized/TOEFL/LISTENING/3.%20%E7%AC%94%E8%AE%B0%E6%B3%95","/standardized/TOEFL/LISTENING/3. 笔记法.md","/standardized/TOEFL/LISTENING/3.%20%E7%AC%94%E8%AE%B0%E6%B3%95.md"]],["v-7bd55f08","/standardized/TOEFL/LISTENING/4.%20%E5%AF%B9%E8%AF%9D%E4%B8%B2%E8%81%94%E6%B3%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 对话</h1>
<p>刷题：不用太多，只需要10/20篇，认认真真做，去掌握规律，无需分话题，分话题只是熟悉场景词；永远做不完，不要纯刷题，认认真真刷十道题仔细分析规律就够了</p>
<p>话题：校园场景</p>
<p>简单之处：</p>
<ul>
<li>词汇简单、</li>
<li>内容简单、</li>
<li>篇幅不长</li>
</ul>
<p>困难之处：</p>
<ol>
<li>
<p>地道表达</p>
<p>neat=nice</p>
</li>
<li>
<p>语音现象</p>
<p>语速稍快，连读、弱读更多</p>
</li>
<li>
<p>内容思路</p>
</li>
</ol>`,r:{minutes:3.47,words:1040},title:"对话"},["/standardized/TOEFL/LISTENING/4. 对话串联法.html","/standardized/TOEFL/LISTENING/4.%20%E5%AF%B9%E8%AF%9D%E4%B8%B2%E8%81%94%E6%B3%95","/standardized/TOEFL/LISTENING/4. 对话串联法.md","/standardized/TOEFL/LISTENING/4.%20%E5%AF%B9%E8%AF%9D%E4%B8%B2%E8%81%94%E6%B3%95.md"]],["v-28d0a65b","/standardized/TOEFL/LISTENING/5.%20%E8%AE%B2%E5%BA%A7%E5%88%86%E5%B1%82%E6%B3%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 讲座分层法</h1>
<p>并列理论</p>
<ul>
<li>简单并列：</li>
<li>让步转折：
<ul>
<li>虽然方法是并列的，但是前面的有缺陷才讲后面的方法</li>
</ul>
</li>
</ul>
<h3> 讲座听力策略</h3>
<ol>
<li>
<p>抓中心(句) topic</p>
<blockquote>
<p>开头1min，抓中心 topic 就可以了（中心句）</p>
</blockquote>
<ul>
<li>开门见山</li>
<li>背景铺垫
<ul>
<li>1min</li>
<li>2min</li>
</ul>
</li>
<li>自己总结</li>
</ul>
</li>
<li>
<p>听分段</p>
<ul>
<li>语气词、
<ul>
<li>ok</li>
<li>now</li>
</ul>
</li>
<li>逻辑词、
<ul>
<li>next</li>
</ul>
</li>
<li>新内容（new info、提问引出）</li>
</ul>
</li>
<li>
<p>段内逻辑点</p>
<p>基本上就是考点</p>
<ul>
<li>
<p>举例 eg.</p>
<p>why mention 例子</p>
<p>信号词：for example</p>
</li>
<li>
<p>对比 VS</p>
<p>difference</p>
<p>信号词：</p>
</li>
<li>
<p>因果 ∵</p>
<p>factor</p>
<p>信号词：as a result</p>
</li>
<li>
<p>转折 Z</p>
<ul>
<li>eg. 理论、=(解释)、+(支持证据)、-(存在问题)</li>
<li>转折前后的信息点都要听到</li>
</ul>
</li>
<li>
<p>并列 1.2. also</p>
<p>多选，四选二或五选三</p>
</li>
</ul>
</li>
<li>
<p>非逻辑考点</p>
<p>20分+基础同学</p>
<ul>
<li>
<p>细节</p>
</li>
<li>
<p>强调</p>
</li>
<li>
<p>态度</p>
<p>可能是在最后</p>
<ul>
<li>doubt</li>
<li>neg</li>
<li>pos</li>
</ul>
</li>
<li>
<p>评价</p>
</li>
<li>
<p>概念</p>
<ul>
<li>常识概念，不会出题（比如很直观的如现实主义、未来主义）</li>
<li>非常识概念，可能会出题</li>
</ul>
</li>
</ul>
</li>
</ol>`,r:{minutes:1.81,words:544},title:"讲座分层法"},["/standardized/TOEFL/LISTENING/5. 讲座分层法.html","/standardized/TOEFL/LISTENING/5.%20%E8%AE%B2%E5%BA%A7%E5%88%86%E5%B1%82%E6%B3%95","/standardized/TOEFL/LISTENING/5. 讲座分层法.md","/standardized/TOEFL/LISTENING/5.%20%E8%AE%B2%E5%BA%A7%E5%88%86%E5%B1%82%E6%B3%95.md"]],["v-2e162ac8","/standardized/TOEFL/LISTENING/",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Listening</h1>
<p>28题，30分</p>
<h2> 考试划分</h2>
<h3> 时间划分</h3>
<p>无加试2个section</p>
<blockquote>
<p>有加试3个section</p>
<p>新托福无加时</p>
</blockquote>
<blockquote>
<p>在Direction里面第一句说是2 section还是3 section，如果说3则遇到加试</p>
</blockquote>
<p>答题时间</p>
<ul>
<li>1对话+1讲座 11题，6.5m答题</li>
<li>1对话+2讲座 17题，10m答题</li>
<li>1对话+1讲座 11题，6.5m答题（加试）</li>
</ul>`,r:{minutes:5.06,words:1518},title:"Listening"},["/standardized/TOEFL/LISTENING/index.html","/standardized/TOEFL/LISTENING/README.md"]],["v-2822df36","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 基础</h1>
<p>音标</p>
<p>单词读法</p>
<p>单词音变</p>
<p>连读弱读爆破等规则</p>
<p>拼读法联系段落</p>
<p>句子精听步骤讲解</p>
<p>精听段落训练及拼读法巩固</p>
<p>清音：</p>
<p>浊音：</p>
<p>元音都是浊音，后面跟 s 的时候就读 z</p>
<h2> 音标</h2>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-05-14 15.39.44.png" alt="截屏2023-05-14 15.39.44" loading="lazy"></p>`,r:{minutes:4.74,words:1423},title:"基础"},["/standardized/TOEFL/LISTENING/基础.html","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80","/standardized/TOEFL/LISTENING/基础.md","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80.md"]],["v-310c2e4d","/standardized/TOEFL/LISTENING/%E7%9C%9F%E9%A2%98%E8%90%A5.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>25+，</p>
<ul>
<li>
<p>对话全对，需要100%听懂</p>
<p>基础不错的基本上就可以做到</p>
</li>
<li>
<p>讲座不需要100%</p>
<p>80%即可结合方法做全对，有时一整段没听出来也不影响做全对</p>
</li>
</ul>
<h2> 对话</h2>
<p>conversation 不建议记笔记，</p>
<ul>
<li>信息点密集</li>
<li>出题点密集</li>
<li>记笔记会导致丢失听信息</li>
<li>没理解的信息会很容易忘记</li>
</ul>
<p>单词、句型：简单</p>
<p>语速：难</p>
<h3> 信息串联</h3>`,r:{minutes:1.23,words:369},title:""},["/standardized/TOEFL/LISTENING/真题营.html","/standardized/TOEFL/LISTENING/%E7%9C%9F%E9%A2%98%E8%90%A5","/standardized/TOEFL/LISTENING/真题营.md","/standardized/TOEFL/LISTENING/%E7%9C%9F%E9%A2%98%E8%90%A5.md"]],["v-ff501fce","/standardized/TOEFL/LISTENING/%E7%A7%AF%E7%B4%AF.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>get by 勉强、凑合、过得去</p>
<p>my english is not good, but it gets by</p>
`,r:{minutes:.06,words:18},title:""},["/standardized/TOEFL/LISTENING/积累.html","/standardized/TOEFL/LISTENING/%E7%A7%AF%E7%B4%AF","/standardized/TOEFL/LISTENING/积累.md","/standardized/TOEFL/LISTENING/%E7%A7%AF%E7%B4%AF.md"]],["v-535cace4","/standardized/TOEFL/READING/1.%20%E9%98%85%E8%AF%BB%E6%96%B9%E6%B3%95%E8%AE%BA.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 阅读方法论</h1>
<p>基础课：逻辑讲解在基础课里面，长难句、拆句</p>
<p>专题课：</p>
<h2> 方法论</h2>
<h3> 三类单词</h3>
<ol>
<li>
<p>TW：<strong>中心</strong>词 topic word</p>
<p>全文中心：标题中找</p>
<p>段落中心：段落中找</p>
<p><strong>逻辑预判</strong>能力：被动=》主动</p>
</li>
<li>
<p>EW：等价词 equivalent word，与中心词重复，替换</p>
<p>过滤旧信息，寻找新概念：</p>
<p><strong>“是不是”法</strong>：是否是重复前文的概念，如果是则不需读</p>
<p><strong>把握细节和中心的关系</strong></p>
</li>
<li>
<p>LW：逻辑词 Logic word</p>
<p>逻辑层面</p>
</li>
</ol>`,r:{minutes:2.69,words:806},title:"阅读方法论"},["/standardized/TOEFL/READING/1. 阅读方法论.html","/standardized/TOEFL/READING/1.%20%E9%98%85%E8%AF%BB%E6%96%B9%E6%B3%95%E8%AE%BA","/standardized/TOEFL/READING/1. 阅读方法论.md","/standardized/TOEFL/READING/1.%20%E9%98%85%E8%AF%BB%E6%96%B9%E6%B3%95%E8%AE%BA.md"]],["v-3a8ea346","/standardized/TOEFL/READING/2.%20%E5%85%AD%E9%80%89%E4%B8%89.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 六选三</h1>
<h3> 段落结构</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221108192037141.png" alt="image-20221108192037141" loading="lazy"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221108195340251.png" alt="image-20221108195340251" loading="lazy"></p>`,r:{minutes:.8,words:241},title:"六选三"},["/standardized/TOEFL/READING/2. 六选三.html","/standardized/TOEFL/READING/2.%20%E5%85%AD%E9%80%89%E4%B8%89","/standardized/TOEFL/READING/2. 六选三.md","/standardized/TOEFL/READING/2.%20%E5%85%AD%E9%80%89%E4%B8%89.md"]],["v-5c362ade","/standardized/TOEFL/READING/3.%20%E6%96%87%E7%AB%A0%E6%AE%B5%E8%90%BD.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 文章段落</h1>
<img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-06-10 10.33.07.png" alt="截屏2023-06-10 10.33.07" style="zoom:33%;">
<h2> 按内容分</h2>
<ul>
<li>
<p>问题解决</p>
<p>结构：问题-展开问题-<strong>解决方法</strong></p>
<p>中心不在前面，解决方法才是中心</p>
</li>
<li>
<p>并列展开</p>
</li>
<li>
<p>现象解释</p>
</li>
<li>
<p>新旧对比</p>
</li>
</ul>`,r:{minutes:.51,words:152},title:"文章段落"},["/standardized/TOEFL/READING/3. 文章段落.html","/standardized/TOEFL/READING/3.%20%E6%96%87%E7%AB%A0%E6%AE%B5%E8%90%BD","/standardized/TOEFL/READING/3. 文章段落.md","/standardized/TOEFL/READING/3.%20%E6%96%87%E7%AB%A0%E6%AE%B5%E8%90%BD.md"]],["v-9d6a2c94","/standardized/TOEFL/READING/4.%20%E9%80%BB%E8%BE%91%E8%80%83%E7%82%B9.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 逻辑考点</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221108195703623.png" alt="image-20221108195703623" loading="lazy"></p>
<h3> 因果逻辑</h3>
<p>阅读方法：原因和结果</p>
<p>设计套路：</p>
<ol>
<li>
<p>因果倒置</p>
</li>
<li>
<p>原因/结果替换</p>
</li>
<li>
<p>并列改因果</p>
<p>名词的并列不能改因果，但是动词的并列可以改因果</p>
</li>
<li>
<p>隐含因果</p>
<p>make, enviroment</p>
</li>
<li>
<p>比较对象改因果</p>
</li>
</ol>`,r:{minutes:1.6,words:481},title:"逻辑考点"},["/standardized/TOEFL/READING/4. 逻辑考点.html","/standardized/TOEFL/READING/4.%20%E9%80%BB%E8%BE%91%E8%80%83%E7%82%B9","/standardized/TOEFL/READING/4. 逻辑考点.md","/standardized/TOEFL/READING/4.%20%E9%80%BB%E8%BE%91%E8%80%83%E7%82%B9.md"]],["v-1d780b38","/standardized/TOEFL/READING/5.%20%E6%96%87%E7%AB%A0%E7%BB%93%E6%9E%84.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 文章结构</h1>
<p>文章结构</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221108200326421.png" alt="image-20221108200326421" loading="lazy"></p>
<p>文章结构</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221113213016732.png" alt="image-20221113213016732" loading="lazy"></p>`,r:{minutes:.24,words:72},title:"文章结构"},["/standardized/TOEFL/READING/5. 文章结构.html","/standardized/TOEFL/READING/5.%20%E6%96%87%E7%AB%A0%E7%BB%93%E6%9E%84","/standardized/TOEFL/READING/5. 文章结构.md","/standardized/TOEFL/READING/5.%20%E6%96%87%E7%AB%A0%E7%BB%93%E6%9E%84.md"]],["v-62c284eb","/standardized/TOEFL/READING/",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Reading</h1>
<h3> 分数换算</h3>
<img src="https://pic4.zhimg.com/80/v2-c93b4212f1507f35511f374d2b363e27_1440w.jpg" alt="img" style="zoom:33%;">
<p>28分：错 4-5 题</p>
<p>Raw Point Total原始分是33分。因为最后一道题，文章主旨题是2分题，所以一篇文章10道题，总原始分其实是11分，那么三篇文章，就是33个原始分。</p>
<p>其次，**新托福的分数判定是区间性的，错3道题之内，有可能是30分，也有可能是28分。**因为不是所有题都是完美的，假如你对宗教、性别、取向等敏感问题有偏见，那么就有可能会选错。</p>`,r:{minutes:2,words:599},title:"Reading"},["/standardized/TOEFL/READING/index.html","/standardized/TOEFL/READING/README.md"]],["v-61d84292","/standardized/TOEFL/SPEAKING/",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Speaking</h1>
<h3> 题型划分</h3>
<ul>
<li>
<p>独立题</p>
<p>task 1，主观题</p>
</li>
<li>
<p>综合题</p>
<p>task 2-4 ，客观题</p>
<p>理解信息（不是难点）、<strong>记录信息</strong>（关键步骤）、转述信息</p>
<p>summary 笔记：完整、逻辑</p>
<ul>
<li>2-3 阅读 + 听力 + 说</li>
<li>4 讲座：听力 + 说</li>
</ul>
</li>
</ul>
<h3> 综合题笔记</h3>
<p>一张A4纸，从中间对折，每1/4面一道综合题笔记</p>`,r:{minutes:2.47,words:741},title:"Speaking"},["/standardized/TOEFL/SPEAKING/index.html","/standardized/TOEFL/SPEAKING/README.md"]],["v-11c01b04","/standardized/TOEFL/SPEAKING/task1.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Task 1 独立题</h1>
<p>400最大题库，80个最大话题题（免费活动），这80个反复练，会积累很多预料素材，独立题就可以完全没问题</p>
<p>特点：难，容易无话可说，需要积累</p>
<p>背诵：33则语料</p>
<p>二选一：</p>
<p>Personally speaking + 态度 I think + 态度
I agree/disagree + 态度</p>
<h3> 题型辨析</h3>
<ul>
<li>二选一：A or B，</li>
<li>Agree or Disagree</li>
</ul>
<blockquote>
<p>选A选B的题，<strong>一定要反对反观点</strong></p>
<p>同意不同意的题，不需要反对反观点</p>
</blockquote>`,r:{minutes:1.58,words:475},title:"Task 1 独立题"},["/standardized/TOEFL/SPEAKING/task1","/standardized/TOEFL/SPEAKING/task1.md"]],["v-1374f3a3","/standardized/TOEFL/SPEAKING/task2.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Task 2</h1>
<h6> 步骤：阅读 &gt; 听力 &gt; 准备 &gt; 答题</h6>
<p>主题：Campus topic 校园生活话题</p>
<h3> 做题流程</h3>
<ol>
<li>阅读，记笔记</li>
<li>听力，记笔记</li>
<li>准备，30s（+读题共60s），补充笔记（补逻辑词、补句子）</li>
<li>答题，60s</li>
</ol>
<p>###阅读 45-50s</p>
<p>内容：校园通知/学生建议 +两个原因/建议</p>
<ul>
<li>校园通知/学校政策</li>
<li>学生或教授建议信</li>
</ul>
<h4> 笔记</h4>`,r:{minutes:1.92,words:577},title:"Task 2"},["/standardized/TOEFL/SPEAKING/task2","/standardized/TOEFL/SPEAKING/task2.md"]],["v-1529cc42","/standardized/TOEFL/SPEAKING/task3.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Task 3</h1>
<p>步骤：阅读 &gt; 听力 &gt; 准备 &gt; 答题</p>
<p>主题：Academic topic 学术话题</p>
<p>主旨句：标题</p>
<p>定义句：利用信号词，在文章中找</p>
<h3> 阅读 45-50s</h3>
<p>阅读结构：</p>
<img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-06-05 13.09.15.png" alt="截屏2023-06-05 13.09.15" style="zoom: 33%;">
<p>1个主题（阅读标题，不需要记录，因为阅读结束以后屏幕上会出现这个标题）</p>`,r:{minutes:1.58,words:473},title:"Task 3"},["/standardized/TOEFL/SPEAKING/task3","/standardized/TOEFL/SPEAKING/task3.md"]],["v-16dea4e1","/standardized/TOEFL/SPEAKING/task4.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Task 4</h1>
<p>步骤：听力 &gt; 准备 &gt; 答题</p>
<p>特点：无阅读了，难度更大（缺乏预判的文本依据，不过听力文本有如下固定结构）</p>
<p>理解，记录，转述</p>
<h3> 听力</h3>
<p>lecture 90-120s</p>
<p>1-2-3个例子，90%是2个例子</p>
<p>听懂80%就可以答出来</p>
<h4> 固定结构</h4>
<img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-06-11 22.58.44.png" alt="截屏2023-06-11 22.58.44" style="zoom:25%;">`,r:{minutes:1.11,words:332},title:"Task 4"},["/standardized/TOEFL/SPEAKING/task4","/standardized/TOEFL/SPEAKING/task4.md"]],["v-a39b8410","/standardized/TOEFL/SPEAKING/%E8%AF%BB%E9%9F%B3.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 读音</h1>
<p>连读：前一个单词辅音结尾，后一个单词元音开头</p>
<p>浊化：元音前，ptk清音浊化</p>
<p>穿透：h会被穿透 leave him(livim)</p>
<p>失去爆破：b p k g t d，音节结尾的这些辅音不发音（admin）</p>
<p>虚词弱读、清音浊化</p>
<h3> 重音规则：</h3>
<p>双音节名称：重音在前面</p>
<p>双音节动词：重音在后面</p>
<p>三个音节及以上的，重音一般在倒数第三个位置</p>
<p>发重音时，元音大，不发重音时元音小</p>
<p>e: e, i</p>
`,r:{minutes:.45,words:135},title:"读音"},["/standardized/TOEFL/SPEAKING/读音.html","/standardized/TOEFL/SPEAKING/%E8%AF%BB%E9%9F%B3","/standardized/TOEFL/SPEAKING/读音.md","/standardized/TOEFL/SPEAKING/%E8%AF%BB%E9%9F%B3.md"]],["v-a1b1fbce","/standardized/TOEFL/WRITING/1.%20%E7%BB%93%E6%9E%84.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 结构</h1>
<p>一共七类题，最常考的是这两类</p>
<ol>
<li>教育</li>
<li>成功</li>
</ol>
<h2> 独立写作结构 (350-450)</h2>
<ul>
<li>
<p>开头段 60 3min</p>
</li>
<li>
<p>主体段 [130, 150] 8-10min</p>
</li>
<li>
<p>主体段 [130, 150] 8-10min</p>
</li>
<li>
<p>(让步段) + 结尾(30-80) 1, 1-3min</p>
</li>
</ul>
<p>是否有让步段</p>
<ul>
<li>
<p>如果单选题就不需要写让步段</p>
</li>
<li>
<p>如果多选一，前面没提到所有选项的话，让步段一定要写30词</p>
</li>
<li>
<p>多选一：is the optimal option</p>
</li>
</ul>`,r:{minutes:2.63,words:789},title:"结构"},["/standardized/TOEFL/WRITING/1. 结构.html","/standardized/TOEFL/WRITING/1.%20%E7%BB%93%E6%9E%84","/standardized/TOEFL/WRITING/1. 结构.md","/standardized/TOEFL/WRITING/1.%20%E7%BB%93%E6%9E%84.md"]],["v-b3d1d064","/standardized/TOEFL/WRITING/2.%20%E4%B8%BB%E4%BD%93%E6%AE%B5.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 主体段</h1>
<h2> 结构</h2>
<h3> A.</h3>
<ol>
<li>
<p>To start/begin with, 主题句 1</p>
</li>
<li>
<p>展开 6</p>
<p>解释+细节</p>
</li>
<li>
<p>小结 1</p>
<p>So it is essential to xxx</p>
</li>
</ol>
<h3> B.</h3>
<ol>
<li>
<p>In addition主题句 1</p>
</li>
<li>
<p>展开 3</p>
</li>
<li>
<p>例子 3</p>
<p>对象是任何人都可以，不写极端、负面的就行</p>
</li>
<li>
<p>小结 1</p>
</li>
</ol>`,r:{minutes:.99,words:296},title:"主体段"},["/standardized/TOEFL/WRITING/2. 主体段.html","/standardized/TOEFL/WRITING/2.%20%E4%B8%BB%E4%BD%93%E6%AE%B5","/standardized/TOEFL/WRITING/2. 主体段.md","/standardized/TOEFL/WRITING/2.%20%E4%B8%BB%E4%BD%93%E6%AE%B5.md"]],["v-00409b10","/standardized/TOEFL/WRITING/3.%20%E8%AF%AD%E6%96%991.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 语料1</h1>
<p>上半年考试，教育类题目占90%</p>
<p>教育类、生活类是大的类型</p>
<p>教育类、成功类</p>
<p>段落版里面的中文思路</p>
<p>提纲版：PPT上内容（中文思路+英文表达）</p>
<p>段落版：连词成句+常用句型20个</p>
<p>最常考：教育类、成功类</p>
<h2> 教育类</h2>
<h3> 学生</h3>
<h4> 不玩电子产品</h4>
<ul>
<li>
<p>study efficiency</p>
<p>时间：preview, review, finish homework</p>
<p>精力：stay up late, fall asleep/ be obessed with various television shows, X focus on</p>
<p>兴趣：improve/ lose interest in learning</p>
</li>
<li>
<p>Health/ healthy living habits</p>
<ul>
<li>
<p>Physical health</p>
<blockquote>
<p>Harm eyesight</p>
<p>Suffer obesity</p>
</blockquote>
</li>
<li>
<p>Mental health</p>
<blockquote>
<p>Form a false value (voilent content)</p>
<p>unsociable and eccentric</p>
</blockquote>
</li>
</ul>
</li>
</ul>`,r:{minutes:2.4,words:719},title:"语料1"},["/standardized/TOEFL/WRITING/3. 语料1.html","/standardized/TOEFL/WRITING/3.%20%E8%AF%AD%E6%96%991","/standardized/TOEFL/WRITING/3. 语料1.md","/standardized/TOEFL/WRITING/3.%20%E8%AF%AD%E6%96%991.md"]],["v-2ae46f98","/standardized/TOEFL/WRITING/4.%20%E8%AF%AD%E6%96%992.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 语料2</h1>
<h2> 社会生活类</h2>
<h3> 个人&amp;关系</h3>
<ul>
<li>
<p>foster independence</p>
<p>the rise of the living standard; go abroad for further study in the future; through advanced means of transport; depend on themselves</p>
<p>Master practical skills</p>
<p>lay a solid foundation for future development</p>
</li>
<li>
<p>promote / boost the relationship with family members</p>
<p>Communicate/ offer help</p>
<p>(a tight schedule of work/ lack of communication/ cold &amp; distant)</p>
</li>
</ul>`,r:{minutes:1.26,words:378},title:"语料2"},["/standardized/TOEFL/WRITING/4. 语料2.html","/standardized/TOEFL/WRITING/4.%20%E8%AF%AD%E6%96%992","/standardized/TOEFL/WRITING/4. 语料2.md","/standardized/TOEFL/WRITING/4.%20%E8%AF%AD%E6%96%992.md"]],["v-585111ff","/standardized/TOEFL/WRITING/5.%20%E7%BB%BC%E5%90%88%E5%86%99%E4%BD%9C.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 综合写作</h1>
<h3> 注意事项</h3>
<ol>
<li>时间：R3+L2+W20 (mins)</li>
<li>字数：150-225 (240+最好，取决于听力内容)</li>
</ol>
<p>中国学生平均20分</p>
<h3> 评分标准</h3>
<ol>
<li>A question about the relation between the lecture and the reading passage</li>
</ol>
<p>基本上都是听力反驳阅读</p>
<ol>
<li>
<p>直接反驳</p>
</li>
<li>
<p>解决办法</p>
<ol>
<li>详细：如，逃跑时应该开着车去逃离，更加快一点</li>
<li>虚：如，逃跑时应该跑的快一点</li>
</ol>
</li>
<li>
<p>Use information from the reading passage and the lecture but no personal opinion</p>
</li>
</ol>`,r:{minutes:4.25,words:1276},title:"综合写作"},["/standardized/TOEFL/WRITING/5. 综合写作.html","/standardized/TOEFL/WRITING/5.%20%E7%BB%BC%E5%90%88%E5%86%99%E4%BD%9C","/standardized/TOEFL/WRITING/5. 综合写作.md","/standardized/TOEFL/WRITING/5.%20%E7%BB%BC%E5%90%88%E5%86%99%E4%BD%9C.md"]],["v-2861a49b","/standardized/TOEFL/WRITING/",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> Writing</h1>
<p>输入做好就可以28+</p>
<ul>
<li>
<p>综合写作 20min</p>
</li>
<li>
<p>独立写作 30min</p>
</li>
</ul>
<h3> 利弊类</h3>
<h3> 事实类</h3>
<p>标志词：无</p>
<p>与利弊类题目非此即彼</p>
<h3> 独立写作得分点</h3>
<ul>
<li>
<p>思路，切题</p>
</li>
<li>
<p>结构，固定</p>
</li>
<li>
<p><strong>展开</strong>，快速提分点</p>
</li>
<li>
<p>逻辑，连贯与衔接（重点），一定要每句话都写清楚，语料中强调</p>
</li>
</ul>`,r:{minutes:.71,words:212},title:"Writing"},["/standardized/TOEFL/WRITING/index.html","/standardized/TOEFL/WRITING/README.md"]],["v-042b12ec","/standardized/TOEFL/WRITING/%E6%94%B9%E9%9D%A9.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 改革</h1>
<p>独立写作取消，换成discussion board</p>
<p>30分钟-》10分钟</p>
<p>这个讨论版就是在写一个主体段</p>
<ol>
<li>时间：20+10min</li>
<li>综合写作保留</li>
<li>独立写作变成新题型，类似独立写作主体段</li>
</ol>
<p>新题型评分标准和原本的独立写作一样（只是少了一些内容）</p>
<p>论证充分</p>
<p>表达精确</p>
<p>语法正确</p>
<p>题型分析</p>
<ol>
<li>单选</li>
<li>二选一</li>
<li>三选一</li>
<li>绝对题</li>
</ol>`,r:{minutes:.44,words:133},title:"改革"},["/standardized/TOEFL/WRITING/改革.html","/standardized/TOEFL/WRITING/%E6%94%B9%E9%9D%A9","/standardized/TOEFL/WRITING/改革.md","/standardized/TOEFL/WRITING/%E6%94%B9%E9%9D%A9.md"]],["v-a67d5778","/standardized/app/%E6%9C%BA%E6%9E%84/PH.html",{y:"a",d:"2023-08-10T06:29:52.000Z",title:""},["/standardized/app/机构/PH.html","/standardized/app/%E6%9C%BA%E6%9E%84/PH","/standardized/app/机构/PH.md","/standardized/app/%E6%9C%BA%E6%9E%84/PH.md"]],["v-d8cf28cc","/standardized/app/%E6%9C%BA%E6%9E%84/%E6%96%B0%E9%80%9A.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>首选软件工程</p>
<p>cmu se，主审</p>
<p>ucb，招的少、竞争者背景强</p>
<p>ucla，好录一些</p>
<p>Harvard，有录了但是uiuc没录的，难度比sb低，可以试一下</p>
<p>hmsb第一档</p>
<p>cmu、uiuc、uta（地理位置差一些，但是专排5）</p>
<p>纵排前、专排：</p>
<p>du、ucsd、</p>
<p>第三</p>
<p>usc、nyu</p>
<p>选专业重要</p>
<p>xjtu 3.2, 102, 325 cmu svse -&gt; Google 3-4y</p>
<p>ai, nlp, ml, rob难度大</p>`,r:{minutes:2.5,words:750},title:""},["/standardized/app/机构/新通.html","/standardized/app/%E6%9C%BA%E6%9E%84/%E6%96%B0%E9%80%9A","/standardized/app/机构/新通.md","/standardized/app/%E6%9C%BA%E6%9E%84/%E6%96%B0%E9%80%9A.md"]],["v-252112bc","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%9D%E5%BA%95.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h2> 保底</h2>
<h3> 保底校原则</h3>
<ul>
<li>bar低</li>
<li>学费低 or 综排高</li>
<li>offer早</li>
</ul>
<p>NEU</p>
<ul>
<li>cs us13 wld16</li>
<li>offer早</li>
</ul>
<p>NYU</p>
<ul>
<li>综合排名 TOP30</li>
<li>offer早</li>
</ul>
<p>TAMU</p>
<ul>
<li>cs us17</li>
<li>学费低，性价比高</li>
</ul>
<p>DUKE</p>
<ul>
<li>综合排名 TOP20/30</li>
<li>Offer早</li>
</ul>`,r:{minutes:.36,words:108},title:""},["/standardized/app/项目/保底.html","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%9D%E5%BA%95","/standardized/app/项目/保底.md","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%9D%E5%BA%95.md"]],["v-f9b0b4de","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%A1%E6%81%AF.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>opencs.app</p>
<p>csrankings</p>
`,r:{minutes:.01,words:2},title:""},["/standardized/app/项目/信息.html","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%A1%E6%81%AF","/standardized/app/项目/信息.md","/standardized/app/%E9%A1%B9%E7%9B%AE/%E4%BF%A1%E6%81%AF.md"]],["v-0689dc16","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%81%BF%E5%9D%91.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>CSSA（中国学生学者联谊会）</p>
`,r:{minutes:.03,words:10},title:""},["/standardized/app/项目/避坑.html","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%81%BF%E5%9D%91","/standardized/app/项目/避坑.md","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%81%BF%E5%9D%91.md"]],["v-57c14fa1","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>彩票/冲刺/主申/保底</p>
`,r:{minutes:.03,words:8},title:""},["/standardized/app/项目/项目.html","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE","/standardized/app/项目/项目.md","/standardized/app/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE.md"]],["v-6e6c1b81","/zh/posts/apple/1.html",{y:"a",d:"2022-01-01T00:00:00.000Z",l:"2022年1月1日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:32},title:"苹果 1",i:"edit"},["/zh/posts/apple/1","/zh/posts/apple/1.md"]],["v-7020f420","/zh/posts/apple/2.html",{y:"a",d:"2022-01-02T00:00:00.000Z",l:"2022年1月2日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 2</h1>
<p>一个被星标了的苹果文章。</p>
`,r:{minutes:.15,words:46},title:"苹果 2",i:"edit"},["/zh/posts/apple/2","/zh/posts/apple/2.md"]],["v-71d5ccbf","/zh/posts/apple/3.html",{y:"a",d:"2022-01-03T00:00:00.000Z",l:"2022年1月3日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"苹果 3",i:"edit"},["/zh/posts/apple/3","/zh/posts/apple/3.md"]],["v-738aa55e","/zh/posts/apple/4.html",{y:"a",d:"2022-01-04T00:00:00.000Z",l:"2022年1月4日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"苹果 4",i:"edit"},["/zh/posts/apple/4","/zh/posts/apple/4.md"]],["v-49be79ce","/zh/posts/banana/1.html",{y:"a",d:"2022-01-05T00:00:00.000Z",l:"2022年1月5日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},title:"香蕉 1",i:"edit"},["/zh/posts/banana/1","/zh/posts/banana/1.md"]],["v-4b73526d","/zh/posts/banana/2.html",{y:"a",d:"2022-01-06T00:00:00.000Z",l:"2022年1月6日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 2</h1>
<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>
`,r:{minutes:.18,words:53},title:"香蕉 2",i:"edit"},["/zh/posts/banana/2","/zh/posts/banana/2.md"]],["v-4d282b0c","/zh/posts/banana/3.html",{y:"a",d:"2022-01-07T00:00:00.000Z",l:"2022年1月7日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"香蕉 3",i:"edit"},["/zh/posts/banana/3","/zh/posts/banana/3.md"]],["v-4edd03ab","/zh/posts/banana/4.html",{y:"a",d:"2022-01-08T00:00:00.000Z",l:"2022年1月8日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},title:"香蕉 4",i:"edit"},["/zh/posts/banana/4","/zh/posts/banana/4.md"]],["v-6371899c","/cs/algo/framework/clues/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 线索</h1>
<p>分析线索主要有如下四类：</p>
<ul>
<li>递推</li>
<li>分类</li>
<li>有序</li>
<li>收敛</li>
</ul>
<h2> 收敛</h2>
<h3> 性质</h3>
<ol>
<li>单调：严格单调递增或单调递减</li>
<li>有界：有明确上界或者下界</li>
</ol>
<p>逐级递减，可选状态空间逐级减少</p>
<p>出现位置</p>
<ul>
<li>
<p>排列，每次能选的少一个</p>
</li>
<li>
<p>环图，设置单调收敛变量，保证每个节点只能被访问一次</p>
<p>如hashmap的visited</p>
</li>
</ul>`,r:{minutes:.82,words:245},title:"线索"},["/cs/algo/framework/clues/index.html","/cs/algo/framework/clues/README.md"]],["v-6c1da50c","/cs/algo/framework/coding-style/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 代码质量</h1>
<p>优化的逻辑：</p>
<ol>
<li>先想暴力的方法</li>
<li>看哪里有地方是浪费的</li>
</ol>
<h4> 优秀的Coding Quality</h4>
<ol>
<li>
<p>bug free</p>
</li>
<li>
<p>有边界检测和异常处理</p>
</li>
<li>
<p>代码风格：命名规范、空格、空行</p>
<ol>
<li>
<p>每一个逻辑Part之间一个空格划分</p>
<p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p>
</li>
<li>
<p>变量命名采用全称：1-2个单词，小驼峰</p>
</li>
<li>
<p>避免重复代码，不允许（泄露没有工程经验）</p>
</li>
<li>
<p>用不到的变量用_来命名</p>
</li>
<li>
<p>尽可能避免全局变量</p>
</li>
<li>
<p>缩进：java是4个</p>
</li>
<li>
<p>空格</p>
<ol>
<li>运算符前后要有</li>
<li>逗号、分号后面有</li>
</ol>
</li>
</ol>
</li>
</ol>`,r:{minutes:1.18,words:354},title:"代码质量"},["/cs/algo/framework/coding-style/index.html","/cs/algo/framework/coding-style/README.md"]],["v-84294778","/cs/algo/framework/optimise/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 优化</h1>
<ul>
<li>
<p>减治：无效优化</p>
<p>避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间</p>
<p>有序（广义上的有序，符合一定的规律）的线性结构</p>
<p>（四大类型）eg. 二分法，快速选择</p>
</li>
<li>
<p>动归：重叠优化</p>
<p>避免重复计算：</p>
<p>DAG结构</p>
<p>复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等）</p>
</li>
</ul>
<p>动态规划的优化</p>
<ul>
<li>
<p>空间优化：</p>
<p>先序：</p>
<ul>
<li>FOR：滚动数组</li>
<li>DFS、BFS：把hashmap的节点删除（hashmap.remove）</li>
</ul>
<p>后序：</p>
<ul>
<li>只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储</li>
<li>lc一道hard里面出现过一次</li>
</ul>
</li>
<li>
<p>时间优化：通过减治</p>
</li>
</ul>`,r:{minutes:.71,words:214},title:"优化"},["/cs/algo/framework/optimise/index.html","/cs/algo/framework/optimise/README.md"]],["v-34a08d44","/cs/algo/framework/optimise/%E5%87%8F%E6%B2%BB%E4%BC%98%E5%8C%96.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 减治</h1>
<h2> 逆向有序</h2>
<h3> 二分查找</h3>
<h3> 减治双针</h3>
<h4> 逆向双针</h4>
<h4> 滑窗双针</h4>
<h2> 删除有序</h2>
<h3> 单调栈</h3>
<h3> 单调队列</h3>
<h2> 结构有序</h2>
<h2> 贪心有序</h2>
`,r:{minutes:.14,words:41},title:"减治"},["/cs/algo/framework/optimise/减治优化.html","/cs/algo/framework/optimise/%E5%87%8F%E6%B2%BB%E4%BC%98%E5%8C%96","/cs/algo/framework/optimise/减治优化.md","/cs/algo/framework/optimise/%E5%87%8F%E6%B2%BB%E4%BC%98%E5%8C%96.md"]],["v-72cecc71","/cs/algo/framework/optimise/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 动态规划</h1>
<h3> 问题分类</h3>
<p>P问题：多项式时间复杂度，<span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span>复杂度</p>`,r:{minutes:.6,words:181},title:"动态规划"},["/cs/algo/framework/optimise/动态规划.html","/cs/algo/framework/optimise/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92","/cs/algo/framework/optimise/动态规划.md","/cs/algo/framework/optimise/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md"]],["v-783883a8","/cs/algo/framework/order/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 顺序</h1>
<p>这四种顺序是针对值传递而言的，因为每一种顺序都是传递一个具体值的</p>
<p>第一对顺序</p>
<ol>
<li>先序</li>
<li>后序</li>
</ol>
<p>第二对顺序</p>
<ol>
<li>访问</li>
<li>邻接</li>
</ol>
<h2> 先序/后序</h2>
<p>从出发点考虑：即已有一个拓扑排序，是从已知到未知还是从未知到已知</p>
<h3> 先序</h3>
<p>定义：已知点到未知点，即出发点和边界点相同</p>
<p>方式：DFS、BFS、FOR</p>
<p>实现：（对于DFS，通过参数列表）</p>
<h3> 后序</h3>`,r:{minutes:2.13,words:639},title:"顺序"},["/cs/algo/framework/order/index.html","/cs/algo/framework/order/README.md"]],["v-66c9f1a6","/cs/algo/framework/parameter/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 传参</h1>
<h2> 传参设计</h2>
<h3> 局部变量传递</h3>
<p>父传子</p>
<ul>
<li>非引用类型需要函数传参（BFS节点），如深度信息可以直接父传子depth + 1</li>
<li>引用类型变量需要结合回溯来实现。</li>
</ul>
<p>子传父</p>
<ul>
<li>DFS通过返回值将子问题结果传递给父问题。</li>
</ul>
<h3> 全局变量传递</h3>
<p>邻接：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间</p>
<p>访问：序号、前后序时间戳、访问前驱、访问后继，需要全局参数传递，因为不再是父子相传</p>`,r:{minutes:3.22,words:966},title:"传参"},["/cs/algo/framework/parameter/index.html","/cs/algo/framework/parameter/README.md"]],["v-6665310a","/cs/algo/framework/search/BFS.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> BFS</h1>
<h3> BFS基础</h3>
<p>队列搜索</p>
<p>等待队列：队列里面的是已经结束，等待扩展的</p>
<p>入队：节点进入等待</p>
<p>出队：节点开始运行</p>
<h3> BFS步骤</h3>
<ol>
<li>
<p>出队</p>
</li>
<li>
<p>捕捉：全局变量捕捉target值</p>
<p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p>
</li>
<li>
<p>扩展</p>
</li>
<li>
<p>入队</p>
</li>
</ol>
<h3> BFS拓展</h3>
<ul>
<li>
<p>递推公式：即这个边的语义，只需要改变递推公式就可以改变边的语义</p>
<p>如求和、求Max、求Min等</p>
</li>
<li>
<p>判断环路：拓扑排序</p>
</li>
<li>
<p>队列类型</p>
<ul>
<li>普通队列：先进先出</li>
<li>优先队列：可以根据优先级插队</li>
<li>双端队列</li>
</ul>
</li>
</ul>`,r:{minutes:.57,words:171},title:"BFS"},["/cs/algo/framework/search/BFS","/cs/algo/framework/search/BFS.md"]],["v-36278ac8","/cs/algo/framework/search/DFS.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> DFS</h1>
<h3> DFS基础</h3>
<p>栈搜索</p>
<p>运行时栈：栈里的是仍在运行的</p>
<p>入栈：函数开始运行</p>
<p>出栈：函数运行结束</p>
<h3> DFS步骤</h3>
<ol>
<li>
<p>出栈（即函数被调用了）</p>
</li>
<li>
<p>捕捉：全局变量捕捉target值</p>
<p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p>
</li>
<li>
<p>扩展</p>
</li>
<li>
<p>入栈</p>
</li>
</ol>
<h3> 先序遍历</h3>
<p>从已知点开始出发</p>
`,r:{minutes:.85,words:256},title:"DFS"},["/cs/algo/framework/search/DFS","/cs/algo/framework/search/DFS.md"]],["v-3f65bda0","/cs/algo/framework/search/FOR.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> FOR</h1>
<p>仅限于遍历线性结构，对于通过树或图结构的迭代器遍历，本质上就是对树或图结构指定好的一种拓扑序列进行遍历，也是对线性结构</p>
`,r:{minutes:.19,words:57},title:"FOR"},["/cs/algo/framework/search/FOR","/cs/algo/framework/search/FOR.md"]],["v-4c1d4f60","/cs/algo/framework/search/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 搜索</h1>
<p>搜索的分类：</p>
<ul>
<li>FOR循环</li>
<li>DFS深搜</li>
<li>BFS广搜</li>
</ul>
<h3> DFS对BFS优势</h3>
<ol>
<li>
<p>后序传值</p>
<p>DFS专属后序位置，可以让父收到子传的值</p>
</li>
<li>
<p>先序回溯</p>
<p>DFS优点，可以节省空间</p>
</li>
<li>
<p>宽树搜索</p>
<p>空间复杂度对比：</p>
<p>BFS：树的最大宽度</p>
<p>DFS：树的最大深度</p>
<p>宽树搜索，必须DFS</p>
</li>
</ol>`,r:{minutes:1.45,words:434},title:"搜索"},["/cs/algo/framework/search/index.html","/cs/algo/framework/search/README.md"]],["v-3c560536","/cs/algo/framework/search/%E5%8D%95%E5%90%91%E9%80%92%E5%BD%92.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 单向递归</h1>
<h3> 循环与递归对比</h3>
<p>尾递归</p>
`,r:{minutes:.05,words:14},title:"单向递归"},["/cs/algo/framework/search/单向递归.html","/cs/algo/framework/search/%E5%8D%95%E5%90%91%E9%80%92%E5%BD%92","/cs/algo/framework/search/单向递归.md","/cs/algo/framework/search/%E5%8D%95%E5%90%91%E9%80%92%E5%BD%92.md"]],["v-876872ba","/cs/algo/framework/structure/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 结构</h1>
<p>数据结构的逻辑结构与存储结构的关系是抽象与具体的关系。</p>
<h2> 逻辑结构</h2>
<p>是指数据对象中数据元素之间的相互关系。</p>
<ul>
<li>
<p>集：记录</p>
<p>快速的判断一个点是否存在</p>
</li>
<li>
<p>线：有序</p>
<p>有序和混乱是相对的概念</p>
<p>有序可以做减治，混乱只能暴力FOR遍历</p>
</li>
<li>
<p>树：分类</p>
<p>边数=点数-1，因为根节点入度为0，其他节点入度为1.</p>
</li>
<li>
<p>图：依赖</p>
<p>DAG(Directed Acyclic Graph)</p>
<p>DAG，核心就是值传递</p>
<p>如果是环图，要引入单调收敛的状态变量来使节点加状态变量共同组成一个DAG</p>
</li>
</ul>`,r:{minutes:2.64,words:791},title:"结构"},["/cs/algo/framework/structure/index.html","/cs/algo/framework/structure/README.md"]],["v-f5efc878","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/0.%20%E6%80%BB%E7%BB%93.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 算法总结</h1>
<p>特殊条件：</p>
<ul>
<li>
<p>有序</p>
<ul>
<li>二分法</li>
<li>双指针</li>
</ul>
</li>
<li>
<p>在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内</p>
<p>原地交换（哈希映射）</p>
</li>
<li>
<p>子串/子数组</p>
<ul>
<li>滑动窗口</li>
<li>区间型动态规划</li>
<li>前缀和/差分数组</li>
</ul>
</li>
<li>
<p>子序列</p>
</li>
</ul>
<h2> 按时间复杂度区分</h2>
<p>a, max</p>`,r:{minutes:1.67,words:502},title:"算法总结"},["/cs/algo/summary/九章算法/0. 总结.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/0.%20%E6%80%BB%E7%BB%93","/cs/algo/summary/九章算法/0. 总结.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/0.%20%E6%80%BB%E7%BB%93.md"]],["v-77daaac4","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/1.%20%E7%9C%9F%E5%AE%9E%E6%A1%88%E4%BE%8B.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 真实案例</h1>
<h3> 模式串匹配</h3>
<p>Python有for else写法，如果break没有执行，就会执行else</p>
<p>字符串匹配，暴力n2</p>
<p>kmp On，但是难背，而且使用场景只有这一个，不建议</p>
<p>优化的话：</p>
<ul>
<li>
<p>可以用robin karp（原理是hash code）</p>
</li>
<li>
<p>hash函数，进行进制转换，(a*31^n+xxxxx+)%10000</p>
</li>
</ul>
<p>o1</p>
<p>循环一般不用超过三层，实在要超就封装子函数</p>
<p>写得越深bug越多，因为更难懂了</p>`,r:{minutes:1.09,words:326},title:"真实案例"},["/cs/algo/summary/九章算法/1. 真实案例.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/1.%20%E7%9C%9F%E5%AE%9E%E6%A1%88%E4%BE%8B","/cs/algo/summary/九章算法/1. 真实案例.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/1.%20%E7%9C%9F%E5%AE%9E%E6%A1%88%E4%BE%8B.md"]],["v-7fed26e2","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/11.%20BFS.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> BFS</h1>
<h3> BFS适用场景</h3>
<ol>
<li>分层遍历
<ul>
<li>一层一层的遍历一个图、树、矩阵</li>
<li>简单图最短路径（边长都为1）</li>
</ul>
</li>
<li>连通块问题
<ul>
<li>连通图中一个点找到其他所有连通的点</li>
<li>找到所有方案问题的一种非递归实现方式</li>
</ul>
</li>
<li>拓扑排序
<ul>
<li>实现容易度远超过DFS</li>
</ul>
</li>
</ol>
<h3> BFS的三种实现方式</h3>
<p>通过二叉树层次遍历为例</p>
<h4> 单队列</h4>`,r:{minutes:1.05,words:316},title:"BFS"},["/cs/algo/summary/九章算法/11. BFS.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/11.%20BFS","/cs/algo/summary/九章算法/11. BFS.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/11.%20BFS.md"]],["v-99436756","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/12.%20%E9%80%92%E5%BD%92%E3%80%81%E9%81%8D%E5%8E%86%E3%80%81%E5%88%86%E6%B2%BB.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 递归、遍历、分治</h1>
<p>递归、深搜、回溯</p>
<p>Recursion DFS Backtracking</p>
<p>区别与联系</p>
<h3> 递归 Recursion</h3>
<p>递归函数：函数自我调用</p>
<p>递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题</p>
<p>一般我们说的递归指的是递归函数</p>
<h3> 深度优先搜索</h3>
<p>可以使用递归函数来实现</p>
<p>也可以不用递归函数，如自己通过一个手动创建的Stack</p>
<h3> 回溯</h3>
<ul>
<li>回溯法：就是深度优先搜素算法</li>
<li>回溯操作：递归函数在回到上一层递归调用处的时候，一些状态参数需要调回调用之前的值，这个操作就是回溯；调用前状态参数是什么样，递归后都改回来</li>
</ul>`,r:{minutes:1.82,words:546},title:"递归、遍历、分治"},["/cs/algo/summary/九章算法/12. 递归、遍历、分治.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/12.%20%E9%80%92%E5%BD%92%E3%80%81%E9%81%8D%E5%8E%86%E3%80%81%E5%88%86%E6%B2%BB","/cs/algo/summary/九章算法/12. 递归、遍历、分治.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/12.%20%E9%80%92%E5%BD%92%E3%80%81%E9%81%8D%E5%8E%86%E3%80%81%E5%88%86%E6%B2%BB.md"]],["v-037780e0","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/13.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E9%9D%9E%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 二叉树非递归遍历</h1>
<p>Binary Search Tree Iterator</p>
<p>实现hasNext和next两个方法</p>
<p>这个主要就需要背了</p>
<p>非递归需要实现栈</p>
<p>这个栈的定义是栈内元素是所有路径上的元素</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-11 18.05.24.png" alt="截屏2022-07-11 18.05.24" loading="lazy"></p>
<p>这个实现比较灵活，这样通过把right和left互换，实现prev操作找前继结点</p>`,r:{minutes:.78,words:234},title:"二叉树非递归遍历"},["/cs/algo/summary/九章算法/13. 二叉树非递归遍历.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/13.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E9%9D%9E%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86","/cs/algo/summary/九章算法/13. 二叉树非递归遍历.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/13.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E9%9D%9E%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.md"]],["v-033cbaee","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/14.%20BFS%E6%80%A7%E4%BB%B7%E6%AF%94%E4%B9%8B%E7%8E%8B.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> BFS</h1>
<p>构图具有一定的灵活性，需要多加联系（一开始可能并不是一个图）</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-11 21.45.23.png" alt="截屏2022-07-11 21.45.23" loading="lazy"></p>
<p>bfs</p>
<ul>
<li>拓扑排序</li>
<li>分层遍历</li>
<li>连通块</li>
</ul>
<p>连通块相关的所有</p>
<ol>
<li>bfs</li>
<li>UFS</li>
</ol>`,r:{minutes:3.59,words:1076},title:"BFS"},["/cs/algo/summary/九章算法/14. BFS性价比之王.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/14.%20BFS%E6%80%A7%E4%BB%B7%E6%AF%94%E4%B9%8B%E7%8E%8B","/cs/algo/summary/九章算法/14. BFS性价比之王.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/14.%20BFS%E6%80%A7%E4%BB%B7%E6%AF%94%E4%B9%8B%E7%8E%8B.md"]],["v-c004b79e","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/15.%20%E5%88%86%E6%B2%BB%E6%B3%95%E6%B1%82%E4%BA%8C%E5%8F%89%E6%A0%91.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 二叉树分治</h1>
<p>二叉树上求值，求路径</p>
<p>二叉树结构变化</p>
<p>二叉查找树</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-12 22.41.24.png" alt="截屏2022-07-12 22.41.24" loading="lazy"></p>
<h4> 最小子树</h4>
<p>避免全局变量的原因：全局变量影响无法多线程化，因为要加锁</p>
<p>避免全局变量的方法：返回多个值</p>
<h4> 最近公共祖先</h4>`,r:{minutes:.4,words:121},title:"二叉树分治"},["/cs/algo/summary/九章算法/15. 分治法求二叉树.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/15.%20%E5%88%86%E6%B2%BB%E6%B3%95%E6%B1%82%E4%BA%8C%E5%8F%89%E6%A0%91","/cs/algo/summary/九章算法/15. 分治法求二叉树.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/15.%20%E5%88%86%E6%B2%BB%E6%B3%95%E6%B1%82%E4%BA%8C%E5%8F%89%E6%A0%91.md"]],["v-000087f0","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/16.%20%E7%BB%84%E5%90%88%E7%B1%BBDFS.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> DFS组合类</h1>
<p>dfs构建的过程中，思考的方式：递归的那一行不需要往下去思考，就直接考虑到递归出口的效果即可当做这一行执行完了，然后继续往下考虑。</p>
<p>回溯的时候，i这些整数，不需要进行回溯，因为整数这些基本类型是深拷贝的，只有数组对象这些东西，需要回溯，因为他们是引用传递的，其实也可以通过深拷贝来代替回溯</p>
<p>本问题下：深度优先搜索是一种更加灵活的方式，可以不知道循环的层数</p>
<p>所有子集</p>
<p>实现一，实现subset所有子集的方法</p>
<p>是0-1法，只有搜索树的叶子是所需要的结果</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">subsets</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> results<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ArrayLisy</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1. 递归的定义</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>
	<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span>
    <span class="token keyword">int</span> index<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> subset<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> results
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. 递归的出口</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 深拷贝</span>
        results<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 递归的拆解</span>
    <span class="token comment">// 选 nums[index]</span>
    subset<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> subset<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    subset<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>subset<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> subset<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.99,words:597},title:"DFS组合类"},["/cs/algo/summary/九章算法/16. 组合类DFS.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/16.%20%E7%BB%84%E5%90%88%E7%B1%BBDFS","/cs/algo/summary/九章算法/16. 组合类DFS.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/16.%20%E7%BB%84%E5%90%88%E7%B1%BBDFS.md"]],["v-0cb7951b","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> DFS排序类</h1>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">subsets</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> results<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ArrayLisy</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1. 递归的定义</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>
	<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span>
    <span class="token comment">// int index,</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> visited<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> permutation<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> results
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. 递归的出口</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>permutation<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 深拷贝</span>
        results<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>permutation<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 2. 递归的拆解</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        permutation<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> subset<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        permutation<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>subset<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.86,words:259},title:"DFS排序类"},["/cs/algo/summary/九章算法/17. 排列式DFS.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS","/cs/algo/summary/九章算法/17. 排列式DFS.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS.md"]],["v-1decc628","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/18.%20%E5%93%88%E5%B8%8C%E8%A1%A8.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 哈希表</h1>
`,r:{minutes:.01,words:3},title:"哈希表"},["/cs/algo/summary/九章算法/18. 哈希表.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/18.%20%E5%93%88%E5%B8%8C%E8%A1%A8","/cs/algo/summary/九章算法/18. 哈希表.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/18.%20%E5%93%88%E5%B8%8C%E8%A1%A8.md"]],["v-26f515e6","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/19.%20Heap.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 堆</h1>
`,r:{minutes:0,words:1},title:"堆"},["/cs/algo/summary/九章算法/19. Heap.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/19.%20Heap","/cs/algo/summary/九章算法/19. Heap.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/19.%20Heap.md"]],["v-7d6856f3","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/2.%20%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 最长回文子串</h1>
<p>subsequence 子序列（非连续字符）：O(2^n)</p>
<p>substring 子串（非连续字符）：O(n^2)</p>
<p>回文子串</p>
<p>暴力</p>
<p>for 起点 O(n)</p>
<p>​	for 终点 O(n)</p>
<p>​		判断是否回文 O(n)</p>
<p>优化：枚举长度、枚举起点，判断回文</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-08 10.53.11.png" alt="截屏2022-07-08 10.53.11" loading="lazy"></p>`,r:{minutes:2.56,words:767},title:"最长回文子串"},["/cs/algo/summary/九章算法/2. 最长回文子串.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/2.%20%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2","/cs/algo/summary/九章算法/2. 最长回文子串.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/2.%20%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.md"]],["v-49c3f183","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/21.%20%E5%93%88%E5%B8%8C%E8%A1%A8%E5%92%8C%E5%A0%86.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 数据结构：哈希表与堆</h1>
<p>数据结构类面试问题的三种考法</p>
<p>考法1：问某种数据结构的基本原理，并要求实现
例题：说一下Hash的原理并实现一个Hash表</p>
<p>考法2：使用某种数据结构完成事情
例题：归并K个有序数组</p>
<p>考法3：多个数据结构配合在一起使用，提供一些特定的功能
例题：LRU</p>
<h3> Set / HashSet</h3>
<p>特点：数据无重复，且无序</p>
<p>应用：去重，快速查找某数据是否存在</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-08 21.11.56.png" alt="截屏2022-08-08 21.11.56" loading="lazy"></p>`,r:{minutes:1.93,words:579},title:"数据结构：哈希表与堆"},["/cs/algo/summary/九章算法/21. 哈希表和堆.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/21.%20%E5%93%88%E5%B8%8C%E8%A1%A8%E5%92%8C%E5%A0%86","/cs/algo/summary/九章算法/21. 哈希表和堆.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/21.%20%E5%93%88%E5%B8%8C%E8%A1%A8%E5%92%8C%E5%A0%86.md"]],["v-ff7fd2ec","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 记忆化搜索</h1>
<p>记忆化搜索复杂度分析</p>
<p>多少种组合*每层耗费</p>
<p>记忆化搜索 = 分治 + hashmap</p>
<p>会变化的参数放在hashmap里</p>
<p>函数的限制：</p>
<ol>
<li>
<p>要有返回值（DC）</p>
<p>和Cache很像</p>
</li>
<li>
<p>函数的结果，只与输入的参数有关，与其他信息无关</p>
<p>叫做pure function（类似前端的纯函数，与其他全局变量无关）</p>
</li>
</ol>
<p>重复计算</p>
<p>记忆化搜索 = 动态规划</p>
<p>（只是说是用搜索的方式实现的DP）</p>`,r:{minutes:.98,words:294},title:"记忆化搜索"},["/cs/algo/summary/九章算法/22. 记忆化搜索.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2","/cs/algo/summary/九章算法/22. 记忆化搜索.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.md"]],["v-057d6f7c","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 动态规划</h1>
<p>核心思想：小大化小</p>
<p>大规模问题的依赖于小规模问题</p>
<p>类似思想算法的还有：递归，分治法</p>
<p>动态规划DP</p>
<p>贪心法Greedy</p>
<h3> 实现方式</h3>
<ol>
<li>
<p>记忆化搜索</p>
<p>（自顶向下的动态规划）</p>
</li>
<li>
<p>多重循环</p>
<p>（自底向上的动态规划）</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,r:{minutes:1.76,words:527},title:"动态规划"},["/cs/algo/summary/九章算法/23. 动态规划.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92","/cs/algo/summary/九章算法/23. 动态规划.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md"]],["v-768b6a8d","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/24.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 动态规划使用场景</h1>
<p>动规的使用场景</p>
<p>求最值：最大值、最小值</p>
<p>可行性80-90%：是否存在一种方案</p>
<p>方案总数：只求总数不求具体方案</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-09 16.38.36.png" alt="截屏2022-08-09 16.38.36" loading="lazy"></p>
<p>前三种考的最多</p>
<p>状态压缩：用01进行压缩</p>
<p>动态规划的题型分类有什么？</p>`,r:{minutes:2.67,words:800},title:"动态规划使用场景"},["/cs/algo/summary/九章算法/24. 动态规划使用场景.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/24.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF","/cs/algo/summary/九章算法/24. 动态规划使用场景.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/24.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.md"]],["v-1cd5019a","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/25.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E8%83%8C%E5%8C%85%E5%9E%8B.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 动态规划：背包型</h1>
<p>01背包：要么选1个，要么不选</p>
<p>多重背包：可选多份</p>
<p>完全背包：可以分分割（贪心法，不是DP）</p>
<p>其他DP没有维度是和的DP，所以背包问题是很特殊的DP</p>
<p>第一种状态表示</p>
<p>dp[i][j]表示前i个物品，是否可以表示出总和j</p>
<p>第二种状态表示</p>
<p>dp[i][j]表示前i个物品，挑出&lt;=j的最大和是多少</p>
<p>效率比第一种低，原因：或运算比+快</p>
<h4> 背包问题小结</h4>
<p>通常是二维的状态数组，前i个组成和为j</p>
<p>状态数组的大小需要开(n + 1)* (m + 1)</p>`,r:{minutes:1.39,words:416},title:"动态规划：背包型"},["/cs/algo/summary/九章算法/25. 动态规划：背包型.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/25.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E8%83%8C%E5%8C%85%E5%9E%8B","/cs/algo/summary/九章算法/25. 动态规划：背包型.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/25.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E8%83%8C%E5%8C%85%E5%9E%8B.md"]],["v-5dfec8e3","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/27.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BC%98%E5%8C%96.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 动态规划优化</h1>
<h2> rolling up</h2>
<p>滚动数组优化</p>
<p>只与上一行有关时，可以只用两行进行存储（如数字三角形）</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-09 21.26.30.png" alt="截屏2022-08-09 21.26.30" loading="lazy"></p>
<p>动态规划虽然不擅长找所有方案，但是找最优值的具体方案还是可以的。</p>
<p>比如这个LIS，记录最优的IS，用prev数组</p>`,r:{minutes:.5,words:149},title:"动态规划优化"},["/cs/algo/summary/九章算法/27. 动态规划优化.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/27.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BC%98%E5%8C%96","/cs/algo/summary/九章算法/27. 动态规划优化.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/27.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BC%98%E5%8C%96.md"]],["v-14aae730","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/29.%20%E5%8F%8C%E6%8C%87%E9%92%88.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 双指针</h1>
<p>相向双指针：一头一尾</p>
<p>同向双指针：一前一后</p>
<p>两数之差问题</p>
<p>On</p>
<p>很多数据量大的问题的时候不允许用hash表</p>
<p>当不能使用哈希表时</p>
<p>可以在排序数据集上进行二分来替代
不能使用哈希表的情况比如数据集很大
或者题目要求不适用额外空间</p>
<p>数组+二分可以起到hashmap的作用</p>
<p>一个for，一个while</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        j <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.05,words:316},title:"双指针"},["/cs/algo/summary/九章算法/29. 双指针.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/29.%20%E5%8F%8C%E6%8C%87%E9%92%88","/cs/algo/summary/九章算法/29. 双指针.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/29.%20%E5%8F%8C%E6%8C%87%E9%92%88.md"]],["v-6d66a52e","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/3.%20%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 代码质量</h1>
<p>优化的逻辑：</p>
<ol>
<li>先想暴力的方法</li>
<li>看哪里有地方是浪费的</li>
</ol>
<h4> 优秀的Coding Quality</h4>
<ol>
<li>
<p>bug free</p>
</li>
<li>
<p>有边界检测和异常处理</p>
</li>
<li>
<p>代码风格：命名规范、空格、空行</p>
<ol>
<li>
<p>每一个逻辑Part之间一个空格划分</p>
<p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p>
</li>
<li>
<p>变量命名采用全称：1-2个单词，小驼峰</p>
</li>
<li>
<p>避免重复代码，不允许（泄露没有工程经验）</p>
</li>
<li>
<p>用不到的变量用_来命名</p>
</li>
<li>
<p>尽可能避免全局变量</p>
</li>
<li>
<p>缩进：java是4个</p>
</li>
<li>
<p>空格</p>
<ol>
<li>运算符前后要有</li>
<li>逗号、分号后面有</li>
</ol>
</li>
</ol>
</li>
</ol>`,r:{minutes:1.18,words:354},title:"代码质量"},["/cs/algo/summary/九章算法/3. 代码质量.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/3.%20%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F","/cs/algo/summary/九章算法/3. 代码质量.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/3.%20%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F.md"]],["v-3c42b9a8","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/30.%20%E4%BA%8C%E5%88%86%E6%B3%95%E5%AE%9E%E6%88%98.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 二分法实战</h1>
<p>二分答案</p>
<p>输入集未排序</p>
<p>二分的本质：连续性</p>
<p>左侧和右侧，是两种不同的性质，左侧同时满足一种，右侧同时一种</p>
<p>抄书问题</p>
<p>二分答案的话，就是求满足条件的最大值或者满足条件的最小值</p>
`,r:{minutes:.27,words:81},title:"二分法实战"},["/cs/algo/summary/九章算法/30. 二分法实战.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/30.%20%E4%BA%8C%E5%88%86%E6%B3%95%E5%AE%9E%E6%88%98","/cs/algo/summary/九章算法/30. 二分法实战.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/30.%20%E4%BA%8C%E5%88%86%E6%B3%95%E5%AE%9E%E6%88%98.md"]],["v-3753d956","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/31.%20%E4%BD%8E%E4%BA%8EOn%E7%9A%84%E7%AE%97%E6%B3%95.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 低于On的算法</h1>
<p>快速幂Ologn</p>
<p>辗转相除法 Ologn</p>
<p>分解质因数 O√n （对称，成双成对出现）</p>
<p>分块检索法 O√n （可以找到次优解，最优解可能是logn的算法）</p>
<h3> 快速幂</h3>
<p>取模运算：+-*满足</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-10 16.34.51.png" alt="截屏2022-08-10 16.34.51" loading="lazy"></p>`,r:{minutes:.94,words:283},title:"低于On的算法"},["/cs/algo/summary/九章算法/31. 低于On的算法.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/31.%20%E4%BD%8E%E4%BA%8EOn%E7%9A%84%E7%AE%97%E6%B3%95","/cs/algo/summary/九章算法/31. 低于On的算法.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/31.%20%E4%BD%8E%E4%BA%8EOn%E7%9A%84%E7%AE%97%E6%B3%95.md"]],["v-1a561374","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 全子集问题</h1>
<p>一个方案=一条路径</p>
<p>BFS擅长找连通块</p>
<p>二叉树序列号反序列化</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"{}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.15,words:45},title:"全子集问题"},["/cs/algo/summary/九章算法/32. 全子集问题.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98","/cs/algo/summary/九章算法/32. 全子集问题.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98.md"]],["v-1f61ac84","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/33.%20BFS%E5%8F%8C%E5%90%91.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> BFS双向</h1>
`,r:{minutes:.01,words:3},title:"BFS双向"},["/cs/algo/summary/九章算法/33. BFS双向.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/33.%20BFS%E5%8F%8C%E5%90%91","/cs/algo/summary/九章算法/33. BFS双向.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/33.%20BFS%E5%8F%8C%E5%90%91.md"]],["v-ab058a38","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/37.%20DFS.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> DFS</h1>
<p>dfs时间复杂度分析：</p>
<p>通用：O(方案总数*构造每个方案的时间)</p>
<p>程序结构的艺术</p>
<ul>
<li>入口函数</li>
<li>搜索函数</li>
<li>判断函数</li>
<li>打印函数</li>
</ul>
<p>DFS优化策略</p>
<ul>
<li>
<p>可行性剪枝</p>
</li>
<li>
<p>最优性剪枝</p>
</li>
<li>
<p>顺序优化</p>
<p>：优先搜索那些可能方案少的位置</p>
</li>
</ul>
`,r:{minutes:.27,words:81},title:"DFS"},["/cs/algo/summary/九章算法/37. DFS.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/37.%20DFS","/cs/algo/summary/九章算法/37. DFS.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/37.%20DFS.md"]],["v-41151cf4","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/38.%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 数据结构设计类</h1>
<h2> 最小栈</h2>
<h2> 最大栈</h2>
<h2> 栈和队列互相实现</h2>
`,r:{minutes:.07,words:21},title:"数据结构设计类"},["/cs/algo/summary/九章算法/38. 数据结构设计.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/38.%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1","/cs/algo/summary/九章算法/38. 数据结构设计.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/38.%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1.md"]],["v-20b84030","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/39.%20%E5%A4%96%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E7%BB%84%E5%90%88%E5%B9%B6%E7%B1%BB.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 外排序算法与数组合并类问题</h1>
<h2> 数组合并类问题</h2>
<h2> 外排序算法</h2>
`,r:{minutes:.08,words:25},title:"外排序算法与数组合并类问题"},["/cs/algo/summary/九章算法/39. 外排序算法与数组合并类.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/39.%20%E5%A4%96%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E7%BB%84%E5%90%88%E5%B9%B6%E7%B1%BB","/cs/algo/summary/九章算法/39. 外排序算法与数组合并类.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/39.%20%E5%A4%96%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E7%BB%84%E5%90%88%E5%B9%B6%E7%B1%BB.md"]],["v-7bc8de14","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/4.%20%E5%A4%8D%E6%9D%82%E5%BA%A6%E7%90%86%E8%AE%BA.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 复杂度理论</h1>
<p>四个复杂度</p>
<ol>
<li>时间复杂度 - 核心考察点</li>
<li>空间复杂度 - 次要考察点</li>
<li>编程复杂度 - 能看得懂</li>
<li>思维复杂度 - 能想得出</li>
</ol>
<p>双指针线性复杂度</p>
<p>但有的时候，很明显的小数据的情况下，可以略微损失一点时间复杂度来降低编程复杂度，提高可读性</p>
<h2> 时间复杂度</h2>
<h3> P问题 Polynomial</h3>
<p>（多项式问题）</p>
<ul>
<li>On，On2，On3</li>
<li>O1，On0.5</li>
<li>Ologn，Onlogn</li>
</ul>`,r:{minutes:1.52,words:455},title:"复杂度理论"},["/cs/algo/summary/九章算法/4. 复杂度理论.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/4.%20%E5%A4%8D%E6%9D%82%E5%BA%A6%E7%90%86%E8%AE%BA","/cs/algo/summary/九章算法/4. 复杂度理论.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/4.%20%E5%A4%8D%E6%9D%82%E5%BA%A6%E7%90%86%E8%AE%BA.md"]],["v-5b0fec5f","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/40.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E5%8C%BA%E9%97%B4%E5%9E%8B.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 动态规划：区间型</h1>
`,r:{minutes:.02,words:7},title:"动态规划：区间型"},["/cs/algo/summary/九章算法/40. 动态规划：区间型.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/40.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E5%8C%BA%E9%97%B4%E5%9E%8B","/cs/algo/summary/九章算法/40. 动态规划：区间型.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/40.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%9A%E5%8C%BA%E9%97%B4%E5%9E%8B.md"]],["v-151b7b10","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/5.%20%E6%8E%92%E5%BA%8F.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 排序</h1>
<h3> 快速排序</h3>
<p>partition算法</p>
<p>分治算法：整体有序再局部有序</p>
<p>1,1,1,3</p>
<p>1  -     1</p>
<p>+  - +</p>
<p>要点解析</p>
<ol>
<li>
<p>取pivot策略：经验下选择中点是最好的（很少能构造出让他退化成n2的数据）</p>
</li>
<li>
<p>中心点只能是严格大或严格小才++--，等于的时候要交换，不然的话如果是全部相等的序列每次都不变，左指针走到最右侧，右指针原地不动，会造成无限递归。</p>
</li>
<li>
<p>必须是left &lt;= right，不然会无限递归，而且要防止左右有交集</p>
</li>
</ol>`,r:{minutes:2.33,words:700},title:"排序"},["/cs/algo/summary/九章算法/5. 排序.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/5.%20%E6%8E%92%E5%BA%8F","/cs/algo/summary/九章算法/5. 排序.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/5.%20%E6%8E%92%E5%BA%8F.md"]],["v-495b1b82","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/6.%20%E9%80%92%E5%BD%92.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 递归</h1>
<p>递归的算法</p>
<p>解决的问题</p>
<p>类似剥洋葱，每次操作类似，但是问题的规模变小了</p>
<p>只需要考虑：</p>
<ul>
<li>
<p>当前层和里面一层的关系</p>
<blockquote>
<p>即递归的拆解</p>
</blockquote>
</li>
<li>
<p>最里层的实现的情况</p>
<blockquote>
<p>即递归的出口</p>
</blockquote>
</li>
</ul>
<p>递归三要素</p>
<ol>
<li>
<p>递归的定义：入参、出参、代表的意思</p>
</li>
<li>
<p>递归的拆解：</p>
<p>一定要确保每次问题规模缩小，否则会无限递归</p>
</li>
<li>
<p>递归的出口：</p>
</li>
</ol>`,r:{minutes:1.79,words:536},title:"递归"},["/cs/algo/summary/九章算法/6. 递归.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/6.%20%E9%80%92%E5%BD%92","/cs/algo/summary/九章算法/6. 递归.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/6.%20%E9%80%92%E5%BD%92.md"]],["v-448f8146","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> 二分法三重境界</h1>
<h3> 第一境界：写出不会死循环的二分法</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-10 10.10.44.png" alt="截屏2022-07-10 10.10.44" loading="lazy"></p>
<p>万能模板</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findPosition</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// 下面的==的情况需要根据题意稍作变化，看是要第一个还是最后一个还是随便一个</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">//可以这样偷懒，因为这样也会退出</span>
            <span class="token comment">// start = mid + 1;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">//可以这样偷懒，因为这样也会退出</span>
            <span class="token comment">// end = mid - 1;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> start<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.45,words:734},title:"二分法三重境界"},["/cs/algo/summary/九章算法/7. 二分法三重境界.html","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C","/cs/algo/summary/九章算法/7. 二分法三重境界.md","/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C.md"]],["v-5b2bda71","/cs/database/mysql/devops/%E9%85%8D%E7%BD%AE.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p><strong>临时修改方案，重启后失效：</strong></p>
<p>在任意连接到 mysql 的 session 会话里，或者 navicat 界面中执行以下命令都可以。进入 docker 以后，执行：mysql -u root -p 然后回车，之后按提示输入 mysql 密码。</p>
<p>set GLOBAL max_connections=1020;    -- 设置该 DB 最大连接数为 1020
set GLOBAL max_user_connections = 1000;     -- 设置单用户最大连接数为 1000</p>
`,r:{minutes:.31,words:94},title:""},["/cs/database/mysql/devops/配置.html","/cs/database/mysql/devops/%E9%85%8D%E7%BD%AE","/cs/database/mysql/devops/配置.md","/cs/database/mysql/devops/%E9%85%8D%E7%BD%AE.md"]],["v-67d5af29","/cs/database/mysql/distributed/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h2> 分库分表</h2>
<p>读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：<strong>如果 MySQL 一张表的数据量过大怎么办?</strong></p>
<p>换言之，<strong>我们该如何解决 MySQL 的存储压力呢？</strong></p>
<p>答案之一就是 <strong>分库分表</strong>。</p>
<h3> 分库</h3>
<p><strong>分库</strong> 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。</p>
<h4> <strong>垂直分库</strong></h4>
<p>就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。</p>`,r:{minutes:2.18,words:654},title:""},["/cs/database/mysql/distributed/分库分表.html","/cs/database/mysql/distributed/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8","/cs/database/mysql/distributed/分库分表.md","/cs/database/mysql/distributed/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.md"]],["v-458d213f","/cs/database/mysql/distributed/%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h2> 读写分离</h2>
<h3> 什么是读写分离？</h3>
<p>见名思意，根据读写分离的名字，我们就可以知道：<strong>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。</strong> 这样的话，就能够小幅提升写性能，大幅提升读性能。</p>
<h3> 读写分离会带来什么问题？如何解决？</h3>
<p>读写分离对于提升数据库的并发非常有效，但是，同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的，这个时间差就导致了主库和从库的数据不一致性问题。这也就是我们经常说的 <strong>主从同步延迟</strong> 。</p>`,r:{minutes:5.15,words:1546},title:""},["/cs/database/mysql/distributed/读写分离.html","/cs/database/mysql/distributed/%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB","/cs/database/mysql/distributed/读写分离.md","/cs/database/mysql/distributed/%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB.md"]],["v-19bd4e76","/cs/database/mysql/engine/1.%20%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 体系结构</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-25 22.50.47.png" alt="截屏2023-02-25 22.50.47" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/mysql查询流程.png" alt="查询语句执行流程" loading="lazy"></p>
<p>连接层：连接、授权认证</p>`,r:{minutes:1.42,words:426},title:"体系结构"},["/cs/database/mysql/engine/1. 体系结构.html","/cs/database/mysql/engine/1.%20%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84","/cs/database/mysql/engine/1. 体系结构.md","/cs/database/mysql/engine/1.%20%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.md"]],["v-0df9788a","/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<h1> 存储引擎</h1>
<h2> InnoDB</h2>
<p>兼顾高可靠性和高性能的通用存储引擎</p>
<p>MySQL5.5 后默认 InnoDB</p>
<h3> 特点</h3>
<ol>
<li>DML 操作遵循 ACID，支持事务</li>
<li>行级锁，提高并发访问性能</li>
<li>支持外键 foreign key 约束，保证数据的完整性和正确性</li>
</ol>
<h3> 文件</h3>
<ul>
<li>
<p><code>.frm</code>: <strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p>
</li>
<li>
<p><code>.ibd</code>: xxx 是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p>
<p>ibd 是二进制文件，无法直接打开，但是可以输入指令 ibd2sdi 得到可查看的 JSON</p>
</li>
</ul>`,r:{minutes:2.3,words:691},title:"存储引擎"},["/cs/database/mysql/engine/2. 存储引擎.html","/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E","/cs/database/mysql/engine/2. 存储引擎.md","/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.md"]],["v-ff7c9288","/cs/database/mysql/index/1.%20%E7%B4%A2%E5%BC%95%E7%BB%93%E6%9E%84.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 索引结构</h1>
<h2> 索引结构分类</h2>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.56.58.png" alt="截屏2022-07-28 20.56.58" loading="lazy"></p>
<p>支持情况</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 20.57.23.png" alt="截屏2022-07-28 20.57.23" loading="lazy"></p>`,r:{minutes:3.47,words:1042},title:"索引结构"},["/cs/database/mysql/index/1. 索引结构.html","/cs/database/mysql/index/1.%20%E7%B4%A2%E5%BC%95%E7%BB%93%E6%9E%84","/cs/database/mysql/index/1. 索引结构.md","/cs/database/mysql/index/1.%20%E7%B4%A2%E5%BC%95%E7%BB%93%E6%9E%84.md"]],["v-70059fca","/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 索引分类</h1>
<h3> 按「数据结构」分类</h3>
<p><strong>B+tree 索引、Hash 索引、Full-text 索引</strong>。</p>
<ul>
<li>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</li>
<li>Hash 哈希索引：类似键值对的形式，一次即可定位。</li>
<li>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>
<li>Full-Text 全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>
</ul>`,r:{minutes:1.91,words:574},title:"索引分类"},["/cs/database/mysql/index/2. 索引分类.html","/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB","/cs/database/mysql/index/2. 索引分类.md","/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.md"]],["v-02f6cb50","/cs/database/mysql/index/3.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 性能分析</h1>
<p>索引优化</p>
<h2> 常用分析</h2>
<h3> SQL 执行频率</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">global</span> <span class="token operator">|</span> <span class="token keyword">session</span><span class="token punctuation">]</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">'Com_______'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:9.95,words:2984},title:"性能分析"},["/cs/database/mysql/index/3. 性能分析.html","/cs/database/mysql/index/3.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90","/cs/database/mysql/index/3. 性能分析.md","/cs/database/mysql/index/3.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90.md"]],["v-2b707058","/cs/database/mysql/index/4.%20%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 使用原则</h1>
<h2> 最左前缀法则</h2>
<p>如果索引了多列（联合索引），要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。</p>
<p>如果跳跃某一列，索引将部分失效(后面的字段索引失效)。</p>
<p>最左前缀匹配原则指的是，在使用联合索引时，<strong>MySQL</strong> 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 <strong><code>&gt;</code></strong>、<strong><code>&lt;</code></strong>）才会停止匹配。对于 <strong><code>&gt;=</code></strong>、<strong><code>&lt;=</code></strong>、<strong><code>BETWEEN</code></strong>、<strong><code>like</code></strong> 前缀匹配的范围查询，并不会停止匹配。所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。</p>`,r:{minutes:8.2,words:2461},title:"使用原则"},["/cs/database/mysql/index/4. 使用规则.html","/cs/database/mysql/index/4.%20%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99","/cs/database/mysql/index/4. 使用规则.md","/cs/database/mysql/index/4.%20%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99.md"]],["v-24f44b58","/cs/database/mysql/index/",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 索引</h1>
<p>索引的定义：</p>
<p>索引是帮助 MySQL 高效获取数据的数据结构（有序）。</p>
<p><strong>索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</strong></p>
<h3> B 树&amp; B+树</h3>
<p>B 树也称 B-树,全称为 <strong>多路平衡查找树</strong> ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 <code>Balanced</code> （平衡）的意思。</p>
<p>目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。</p>`,r:{minutes:5.02,words:1507},title:"索引"},["/cs/database/mysql/index/index.html","/cs/database/mysql/index/README.md"]],["v-7126edee","/cs/database/mysql/lock/1.%20%E5%85%A8%E5%B1%80%E9%94%81.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 全局锁</h1>
<p>对整个数据库实例加锁，加锁以后整个实例处于只读状态，后续的 DML 写操作、DDL 语句，以及更新操作的事物提交语句都将被阻塞。</p>
<p>典型使用场景：全库的逻辑备份，对所有表进行锁定，从而获取一致性视图，保证数据的完整性。</p>
<h2> 语法</h2>
<p>加全局锁语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>flush <span class="token keyword">tables</span> <span class="token keyword">with</span> <span class="token keyword">read</span> <span class="token keyword">lock</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.86,words:558},title:"全局锁"},["/cs/database/mysql/lock/1. 全局锁.html","/cs/database/mysql/lock/1.%20%E5%85%A8%E5%B1%80%E9%94%81","/cs/database/mysql/lock/1. 全局锁.md","/cs/database/mysql/lock/1.%20%E5%85%A8%E5%B1%80%E9%94%81.md"]],["v-434af5a2","/cs/database/mysql/lock/2.%20%E8%A1%A8%E7%BA%A7%E9%94%81.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 表级锁</h1>
<p>每次操作锁住整张表。锁定粒度大，发生锁冲突的概率最高，并发度最低。应用在 MyISAM、InnoDB、BDB。</p>
<p>对于表级锁，主要分为以下三类：</p>
<ul>
<li>表锁 Table Lock</li>
<li>元数据锁 MDL</li>
<li>意向锁 IL</li>
<li>自增锁 AUTO-INC</li>
</ul>
<h3> 表锁</h3>
<p>对于表锁，分为两类：</p>
<ol>
<li>
<p>表共享读锁（read lock）（S）</p>
<p>加锁以后可以自己读，但是不可以写（会拒绝执行）</p>
<p>不会阻塞其他客户端的读，会阻塞其他客户端的写</p>
</li>
<li>
<p>表独占写锁（write lock）（X）</p>
<p>加锁以后自己可以读写</p>
<p>但是会阻塞别的客户端的读写</p>
</li>
</ol>`,r:{minutes:5.51,words:1653},title:"表级锁"},["/cs/database/mysql/lock/2. 表级锁.html","/cs/database/mysql/lock/2.%20%E8%A1%A8%E7%BA%A7%E9%94%81","/cs/database/mysql/lock/2. 表级锁.md","/cs/database/mysql/lock/2.%20%E8%A1%A8%E7%BA%A7%E9%94%81.md"]],["v-2060c73c","/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 行级锁</h1>
<p>操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低</p>
<p>在 Innodb 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ，</p>
<p>查看目前加的锁</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> object_schema<span class="token punctuation">,</span> object_name<span class="token punctuation">,</span> index_name<span class="token punctuation">,</span> lock_type<span class="token punctuation">,</span> lock_mode<span class="token punctuation">,</span> lock_data <span class="token keyword">from</span> performance_schema<span class="token punctuation">.</span>data_locks

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> performance_schema<span class="token punctuation">.</span>data_locks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.9,words:3571},title:"行级锁"},["/cs/database/mysql/lock/3. 行级锁.html","/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81","/cs/database/mysql/lock/3. 行级锁.md","/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81.md"]],["v-015be349","/cs/database/mysql/lock/",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 锁</h1>
<p>保证数据并发访问一致性、有效性</p>
<p>锁冲突也是数据库并发访问性能的一个重要因素</p>
<p>按照粒度分，主要分为三类：</p>
<ol>
<li>全局锁：</li>
<li>表级锁：</li>
<li>行级锁：</li>
</ol>
`,r:{minutes:.2,words:59},title:"锁"},["/cs/database/mysql/lock/index.html","/cs/database/mysql/lock/README.md"]],["v-e7235c34","/cs/database/mysql/log/",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 日志</h1>
<p><code>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code>binlog</code>（归档日志）和事务日志 <code>redo log</code>（重做日志）和 <code>undo log</code>（回滚日志）。</p>
<img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/01.png" alt="img" style="zoom: 50%;">
<h2> redo log</h2>`,r:{minutes:12.97,words:3890},title:"日志"},["/cs/database/mysql/log/index.html","/cs/database/mysql/log/README.md"]],["v-6a840a26","/cs/database/mysql/memory/Buffer%20Pool.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> Buffer pool</h1>
`,r:{minutes:.01,words:2},title:"Buffer pool"},["/cs/database/mysql/memory/Buffer Pool.html","/cs/database/mysql/memory/Buffer%20Pool","/cs/database/mysql/memory/Buffer Pool.md","/cs/database/mysql/memory/Buffer%20Pool.md"]],["v-98b322f4","/cs/database/mysql/process/%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 存储过程</h1>
<p>创建</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名称<span class="token punctuation">(</span><span class="token punctuation">[</span>参数列表<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">--SQL语句</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.14,words:41},title:"存储过程"},["/cs/database/mysql/process/存储过程.html","/cs/database/mysql/process/%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B","/cs/database/mysql/process/存储过程.md","/cs/database/mysql/process/%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.md"]],["v-43096280","/cs/database/mysql/process/%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 查询过程</h1>
<ul>
<li>
<p>查询语句的执行流程如下：</p>
<p>权限校验（如果命中缓存）---&gt;查询缓存---&gt;分析器---&gt;优化器---&gt;权限校验---&gt;执行器---&gt;引擎</p>
</li>
<li>
<p>更新语句执行流程如下：</p>
<p>分析器----&gt;权限校验----&gt;执行器---&gt;引擎---redo log(prepare 状态)---&gt;binlog---&gt;redo log(commit 状态)</p>
</li>
</ul>
<p>权限校验的时机</p>
<ul>
<li>
<p>连接器</p>
</li>
<li>
<p>命中缓存时</p>
</li>
<li>
<p>执行器、优化器完毕后</p>
<p>如果没有权限就会返回错误信息，如果有权限就会调用数据库引擎接口，返回引擎的执行结果。</p>
</li>
</ul>`,r:{minutes:1.19,words:358},title:"查询过程"},["/cs/database/mysql/process/查询过程.html","/cs/database/mysql/process/%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B","/cs/database/mysql/process/查询过程.md","/cs/database/mysql/process/%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B.md"]],["v-2b9b6ca2","/cs/database/mysql/transaction/1.%20ACID.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 事务特性：ACID</h1>
<h2> 四大特性</h2>
<ul>
<li>
<p>原子性（Ato'micity）</p>
<p>事务是不可分割的最小操作单元，要么全部成功，要么全部失败。</p>
</li>
<li>
<p>一致性（Con'sistency）</p>
<p>事务完成时，必须使所有的数据都保持一致状态。</p>
</li>
<li>
<p>隔离性（Isolation）</p>
<p>数据库系统提供的隔离机制（隔离级别），保证事务在不受外部并发操作影响的独立环境下运行。</p>
</li>
<li>
<p>持久性（Dura'bility）</p>
<p>事务一旦提交或回滚，他对数据库中数据的改变就是永久的。</p>
</li>
</ul>`,r:{minutes:.53,words:159},title:"事务特性：ACID"},["/cs/database/mysql/transaction/1. ACID.html","/cs/database/mysql/transaction/1.%20ACID","/cs/database/mysql/transaction/1. ACID.md","/cs/database/mysql/transaction/1.%20ACID.md"]],["v-4e6e7a49","/cs/database/mysql/transaction/2.%20%E5%B9%B6%E5%8F%91%E9%97%AE%E9%A2%98.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<h1> 并发问题</h1>
<h3> 脏读</h3>
<p>一个事务读到另一个事务还没有提交的数据。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png" alt="截屏2023-01-03 12.19.43" loading="lazy"></p>
<h3> 不可重复读</h3>
<p>定义：一个事务先后读取<strong>同一条记录</strong>，但两次读取的数据不同。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.20.50.png" alt="截屏2023-01-03 12.20.50" loading="lazy"></p>`,r:{minutes:1.85,words:556},title:"并发问题"},["/cs/database/mysql/transaction/2. 并发问题.html","/cs/database/mysql/transaction/2.%20%E5%B9%B6%E5%8F%91%E9%97%AE%E9%A2%98","/cs/database/mysql/transaction/2. 并发问题.md","/cs/database/mysql/transaction/2.%20%E5%B9%B6%E5%8F%91%E9%97%AE%E9%A2%98.md"]],["v-bac30082","/cs/database/mysql/transaction/3.%20%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html",{y:"a",d:"2023-01-02T08:18:38.000Z",e:`<h1> 隔离级别</h1>
<p>目的：解决并发事务问题</p>
<p>事务隔离级别</p>
<ul>
<li>
<p>RU：事务提交前，就可被其他事务读取到</p>
</li>
<li>
<p>RC：事务提交后，才能被其他事务读取到</p>
</li>
<li>
<p>RR：</p>
<p>InnoDB 在 RR 下利用 Read View 和锁很大程度上解决了幻读问题</p>
</li>
<li>
<p>Serializable：</p>
<p>Serialized 把幻读解决了</p>
</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-04 12.49.05.png" alt="截屏2023-03-04 12.49.05" loading="lazy"></p>`,r:{minutes:1.96,words:589},title:"隔离级别"},["/cs/database/mysql/transaction/3. 隔离级别.html","/cs/database/mysql/transaction/3.%20%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB","/cs/database/mysql/transaction/3. 隔离级别.md","/cs/database/mysql/transaction/3.%20%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.md"]],["v-70e72ec0","/cs/database/mysql/transaction/4.%20%E4%BC%A0%E6%92%AD%E6%9C%BA%E5%88%B6.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<h1> 传播机制</h1>
<p>什么是事务的传播行为：事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。</p>
<p>分类</p>
<ul>
<li>PROPAGATION_REQUIRED 表示当前方法必须在一个具有事务的上下文中运行,如有客户端有事务在进行，那么被调用端将在该事务中运行，否则的话重新开启一个事务。( 如果被调用端发生异常,那么调用端和被调用端事务都将回滚)</li>
<li>PROPAGATION_SUPPORTS 表示当前方法不必需要具有一个事务上下文,但是如果有一个事务的话,它也可以在这个事务中运行</li>
<li>PROPAGATION_MANDATORY 表示当前方法必须在一个事务中运行，如果没有事务，将抛出异常</li>
<li>PROPAGATION_REQUIRES_NEW 总是开启一个新的事务。如果一个事务已经存在，则将这个存在的事务挂起。</li>
<li>PROPAGATION_NOT_SUPPORTED 总是非事务地执行，并挂起任何存在的事务。</li>
<li>PROPAGATION_NEVER 总是非事务地执行，如果存在一个活动事务，则抛出异常</li>
<li>PROPAGATION_NESTED 表示如果当前方法正有一个事务在运行中,则该方法应该运行在一个嵌套事务中 ,被嵌套的事务可以独立于被封装的事务中进行提交或者回滚。如果封装事务存在,并且外层事务抛出异常回滚，那么内层事务必须回滚,反之,内层事务并不影响外层事务。如果封装事务不存在,则同 propagation. required 的一样</li>
</ul>`,r:{minutes:1.4,words:421},title:"传播机制"},["/cs/database/mysql/transaction/4. 传播机制.html","/cs/database/mysql/transaction/4.%20%E4%BC%A0%E6%92%AD%E6%9C%BA%E5%88%B6","/cs/database/mysql/transaction/4. 传播机制.md","/cs/database/mysql/transaction/4.%20%E4%BC%A0%E6%92%AD%E6%9C%BA%E5%88%B6.md"]],["v-3f4a6a8c","/cs/database/mysql/transaction/",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 事务</h1>
<h3> 事务定义</h3>
<p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>
<p>默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。</p>
<h2> 事务操作</h2>
<h3> 方法一</h3>
<p>取消自动提交</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">-- 写操作</span>

<span class="token comment">-- 操作</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">-- 如果异常，则不要执行commit，要回滚事务</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.02,words:905},title:"事务"},["/cs/database/mysql/transaction/index.html","/cs/database/mysql/transaction/README.md"]],["v-51a91932","/cs/database/redis/availability/",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 高可用</h1>
<h2> 单点Redis的问题</h2>
<h3> 数据丢失问题</h3>
<p>=&gt; Redis数据持久化</p>
<h3> 并发能力问题</h3>
<p>=&gt; 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能）</p>
<h3> 故障恢复问题</h3>
<p>=&gt; 利用Redis哨兵，实现健康检测和自动恢复</p>
<h3> 存储能力问题</h3>
<p>=&gt; 搭建分片集群，利用插槽机制实现动态扩容</p>
`,r:{minutes:.33,words:99},title:"高可用"},["/cs/database/redis/availability/index.html","/cs/database/redis/availability/README.md"]],["v-3dff3951","/cs/database/redis/availability/cluster.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Cluster：数据分片</h1>
<p>节点建议最多1000个节点</p>
<p>16384</p>
<ul>
<li>Redis集群支持多个Master,每个Master.又可以挂载多个Slave</li>
<li>由于Cluster自带Sentinel的故障转移机制，内置了高可用的支持，无需再去使用哨兵功能</li>
<li>客户端与Redis的节点连接，♪不再需要连接集群中所有的节点，只需要任意连接集群中的一个可用节点即可</li>
<li>槽位sot负责分配到各个物理服务节点，由对应的集群来负责维护节点、插槽和数据之间的关系</li>
</ul>
<h2> 集群算法</h2>`,r:{minutes:4.07,words:1222},title:"Cluster：数据分片"},["/cs/database/redis/availability/cluster","/cs/database/redis/availability/cluster.md"]],["v-531aadbf","/cs/database/redis/availability/replication.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Replication：主从复制</h1>
<p>架构图</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-21 20.18.31.png" alt="截屏2023-02-21 20.18.31" loading="lazy"></p>
<h2> 是什么</h2>
<p>主负责写，从负责读</p>
<p>redis读多写少，所以这样比较有效</p>
<p>就是主从复制，master以写为主，Slave以读为主</p>
<p>当master数据变化的时候，自动将新的数据异步同步到其它slave数据库</p>`,r:{minutes:1.96,words:588},title:"Replication：主从复制"},["/cs/database/redis/availability/replication","/cs/database/redis/availability/replication.md"]],["v-1523f743","/cs/database/redis/availability/sentinel.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Sentinel：故障转移</h1>
<p>哨兵：自动故障转移Failover</p>
<h2> 是什么</h2>
<p>吹哨人巡查监控后台master.主机是否故障，如果故障了根据投票数自动将某一个从库转换为新主库，继续对外服务</p>
<p>无人值守的运维机制</p>
<h2> 干什么</h2>
<ul>
<li>主从监控：监控主从redis)库运行是否正常</li>
<li>消息通知：哨兵可以将故障转移的结果发送给客户端</li>
<li>故障转移：如果Master异常，则会进行主从切换，将其中一个Slave作为新Master</li>
<li>配置中心：客户端通过连接哨兵来获得当前Redis服务的主节点地址</li>
</ul>`,r:{minutes:2.3,words:691},title:"Sentinel：故障转移"},["/cs/database/redis/availability/sentinel","/cs/database/redis/availability/sentinel.md"]],["v-430c5169","/cs/database/redis/clients/",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Redis Java 客户端</h1>
<p>Jedis</p>
<p>以Redis命令作为方法名称，学习成本低，简单实用。但是Jedis实例是线程不安全的，多线程环境下需要基于连接池来使用</p>
<p>lettuce</p>
<p>基于Netty实现的，支持同步、异步和响应式编程方式，并且是线程安全的。支持Redis的哨兵模式、集群模式和管道模式，Spring官方默认的</p>
<p>Redisson</p>
<p>基于Redis实现的分布式、可伸缩的Java数据结构集合。包含了诸如Map、Queue、Lock、Semaphore、AtomicLong等强大功能</p>
<p>Spring Data Redis，封装一层，底层可以选择使用Jedis或Lettuce</p>`,r:{minutes:.53,words:159},title:"Redis Java 客户端"},["/cs/database/redis/clients/index.html","/cs/database/redis/clients/README.md"]],["v-052b696f","/cs/database/redis/clients/jedis.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Jedis 客户端</h1>
<p>连接池</p>
<p>操作与redis指令一致</p>
<p>jedis.hset等</p>
`,r:{minutes:.06,words:17},title:"Jedis 客户端"},["/cs/database/redis/clients/jedis","/cs/database/redis/clients/jedis.md"]],["v-f9a399ac","/cs/database/redis/clients/spring-data-redis.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Spring Data Redis</h1>
<p>操作API分组</p>
<ul>
<li>opsForValue</li>
<li>opsForHash</li>
<li>opsForList</li>
<li>opsForSet</li>
<li>opsForZSet</li>
</ul>
<h3> 引入依赖</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>spring-data-redis

common-pool2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.43,words:128},title:"Spring Data Redis"},["/cs/database/redis/clients/spring-data-redis","/cs/database/redis/clients/spring-data-redis.md"]],["v-0405ee87","/cs/database/redis/commands/generic.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> 通用命令</h1>
<h2> 键操作</h2>
<ul>
<li><code>KEYS</code> 查询符合模板的 key，不建议在生成环境设备上使用</li>
<li><code>DEL</code> 删除 key</li>
<li><code>UNLINK</code> 删除 key，不会阻塞客户端，Redis 4.0 之后才有的命令</li>
<li><code>EXISTS</code> 判断 key 是否存在</li>
<li><code>EXPIRE</code> 给 key 设置有效期，有效期到期时该 key 会被自动删除</li>
<li><code>TTL</code> ：查看一个 KEY 的剩余有效期
<ul>
<li>-1：永久有效</li>
<li>-2：过期了</li>
</ul>
</li>
</ul>`,r:{minutes:.47,words:141},title:"通用命令"},["/cs/database/redis/commands/generic","/cs/database/redis/commands/generic.md"]],["v-e67a2cf4","/cs/database/redis/commands/hash.html",{y:"a",d:"2022-12-03T16:12:12.000Z",title:""},["/cs/database/redis/commands/hash","/cs/database/redis/commands/hash.md"]],["v-315833f6","/cs/database/redis/commands/list.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> List 类型</h1>
<p>类似 LinkedList，可以看做一个双向链表</p>
<p>特征：</p>
<ul>
<li>有序</li>
<li>元素可以重复</li>
<li>插入和删除快</li>
<li>查询速度一般</li>
</ul>
<p>常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。</p>
<h2> 常见命令</h2>
<ul>
<li><code>lpush</code> 向列表左侧插入一个或多个元素</li>
<li><code>lpop</code> 移除并返回列表左侧的第一个</li>
<li><code>rpush</code> 向列表右侧插入一个或多个元素</li>
<li><code>rpop</code> 移除并返回列表右侧的第一个元素</li>
<li><code>Lrange</code> key start end</li>
<li><code>BLPOP</code> 会阻塞指定时间，等到有元素了再 pop</li>
<li><code>BRPOP</code> 会阻塞指定时间</li>
</ul>`,r:{minutes:.77,words:230},title:"List 类型"},["/cs/database/redis/commands/list","/cs/database/redis/commands/list.md"]],["v-5df2755c","/cs/database/redis/commands/set.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Set 类型</h1>
<p>与 Java 中的 HashSet 类似，可以认为是 value 为 null 的 HashMap</p>
<h2> 常见命令</h2>
<ul>
<li><code>sadd</code> 向 set 中添加一个或多个元素</li>
<li><code>srem</code> 移除 set 中的指定元素</li>
<li><code>scard</code> 返回 set 中元素个数</li>
<li><code>sismember</code> 判断一个元素是否存在 set 中</li>
<li><code>smembers</code> 获取 set 中的所有元素</li>
<li><code>sinter</code> 交集</li>
<li><code>sdiff</code> 差集</li>
<li><code>sunion</code> 并集</li>
</ul>`,r:{minutes:.29,words:88},title:"Set 类型"},["/cs/database/redis/commands/set","/cs/database/redis/commands/set.md"]],["v-26bb2f82","/cs/database/redis/commands/sorted-set.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> Sorted Set</h1>
<p>类似 Java TreeSet，都排序了，不过 Java 是红黑树实现的，这里的是跳表+Hash</p>
<p>每一个元素带有一个 score</p>
<p>特性：</p>
<ul>
<li>可排序</li>
<li>元素不重复</li>
<li>查询速度快</li>
</ul>
<p>因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。</p>
<h2> 常见命令</h2>
<ul>
<li>
<p><code>zadd</code> 增</p>
</li>
<li>
<p><code>zrem</code> 删</p>
</li>
<li>
<p><code>zscore</code> 获取指定元素的 score 值</p>
</li>
<li>
<p><code>zrank</code> 获取指定元素的排名</p>
</li>
<li>
<p><code>zcard</code> 获取元素个数</p>
</li>
<li>
<p><code>zcount</code> 指定范围内元素个数</p>
</li>
<li>
<p><code>zincrby</code> 让指定元素的分值自增</p>
</li>
<li>
<p><code>zrange</code> key min max 按照 score 升序排序后，获取指定排名范围内的元素</p>
</li>
<li>
<p><code>zrevrange</code> key min max 按照 score 降序排序后，获取指定排名范围内的元素</p>
</li>
<li>
<p><code>zrangebyscore</code> key min max 按照 score 排序后，获取指定 score 范围内的元素</p>
</li>
<li>
<p><code>zdiff</code> , zinter, zunion 求差集、交集、并集</p>
</li>
</ul>`,r:{minutes:.71,words:212},title:"Sorted Set"},["/cs/database/redis/commands/sorted-set","/cs/database/redis/commands/sorted-set.md"]],["v-12e03cba","/cs/database/redis/commands/string.html",{y:"a",d:"2022-12-03T16:12:12.000Z",e:`<h1> String 类型</h1>
<p>三种格式：</p>
<ul>
<li>字符</li>
<li>整型</li>
<li>浮点</li>
</ul>
<h2> 常见命令</h2>
<ul>
<li>
<p><code>set</code></p>
</li>
<li>
<p><code>get</code></p>
</li>
<li>
<p><code>mset</code></p>
</li>
<li>
<p><code>mget</code></p>
</li>
<li>
<p><code>incr</code> 让整型的 key 自增 1</p>
</li>
<li>
<p><code>incrby</code> 让整型的 key 自增指定步长</p>
</li>
<li>
<p><code>incrbyfloat</code> 让浮点型的 key 自增指定步长</p>
</li>
<li>
<p><code>setnx</code> 设置 key，当 key 不存在时</p>
</li>
<li>
<p><code>setex</code> 设置 key 的有效期</p>
</li>
</ul>`,r:{minutes:.24,words:73},title:"String 类型"},["/cs/database/redis/commands/string","/cs/database/redis/commands/string.md"]],["v-68faa95e","/cs/database/redis/feature/feature.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 新特性</h1>
<h2> Redis 7</h2>
<ul>
<li>
<p>Redis Function</p>
</li>
<li>
<p>Client-eviction</p>
</li>
<li>
<p>Multi-part AOF</p>
<p>变成三个文件</p>
</li>
<li>
<p>ACL</p>
</li>
<li>
<p>listpack替代ziplist</p>
</li>
<li>
<p>底层性能优化</p>
</li>
</ul>
`,r:{minutes:.1,words:29},title:"新特性"},["/cs/database/redis/feature/feature","/cs/database/redis/feature/feature.md"]],["v-01dd35c2","/cs/database/redis/persistency/AOF.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> AOF</h1>
<p>Append Only File (追加文件）。</p>
<h2> 特点</h2>
<h3> 写后日志</h3>
<p>说到日志，我们比较熟悉的是数据库的redo log写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。</p>
<p>不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示：</p>
<p>那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。</p>`,r:{minutes:3.3,words:989},title:"AOF"},["/cs/database/redis/persistency/AOF","/cs/database/redis/persistency/AOF.md"]],["v-cf651cb2","/cs/database/redis/persistency/RDB.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> RDB</h1>
<p>Rediscover Database Backup file，数据备份文件，数据快照。</p>
<h3> 使用方式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli
save <span class="token comment"># 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用</span>
bgsave <span class="token comment"># 子进程执行RDB，避免主进程受到影响</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.97,words:592},title:"RDB"},["/cs/database/redis/persistency/RDB","/cs/database/redis/persistency/RDB.md"]],["v-24f0391e","/cs/database/redis/persistency/",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 持久化策略</h1>
<h3> 对比</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-21 20.13.40.png" alt="截屏2023-02-21 20.13.40" loading="lazy"></p>
`,r:{minutes:.09,words:28},title:"持久化策略"},["/cs/database/redis/persistency/index.html","/cs/database/redis/persistency/README.md"]],["v-fe71849e","/cs/database/sql/basic/function.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 函数</h1>
<h2> 聚合函数</h2>
<p>最大值，最小值</p>
<p><strong>聚合函数类型</strong></p>
<ul>
<li>AVG()</li>
<li>SUM()</li>
<li>MAX()</li>
<li>MIN()</li>
<li>COUNT()</li>
</ul>
<h2> 窗口函数</h2>
<p><a href="https://zhuanlan.zhihu.com/p/92654574" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/92654574</a></p>`,r:{minutes:2.96,words:887},title:"函数"},["/cs/database/sql/basic/function","/cs/database/sql/basic/function.md"]],["v-15b42f9f","/cs/database/sql/basic/join.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 连接</h1>
<table>
<thead>
<tr>
<th>连接类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>INNER JOIN 内连接</td>
<td>（默认连接方式）只有当两个表都存在满足条件的记录时才会返回行。</td>
</tr>
<tr>
<td>LEFT JOIN / LEFT OUTER JOIN 左(外)连接</td>
<td>返回左表中的所有行，即使右表中没有满足条件的行也是如此。</td>
</tr>
<tr>
<td>RIGHT JOIN / RIGHT OUTER JOIN 右(外)连接</td>
<td>返回右表中的所有行，即使左表中没有满足条件的行也是如此。</td>
</tr>
<tr>
<td>FULL JOIN / FULL OUTER JOIN 全(外)连接</td>
<td>只要其中有一个表存在满足条件的记录，就返回行。</td>
</tr>
<tr>
<td>SELF JOIN</td>
<td>将一个表连接到自身，就像该表是两个表一样。为了区分两个表，在 SQL 语句中需要至少重命名一个表。</td>
</tr>
<tr>
<td>CROSS JOIN</td>
<td>交叉连接，从两个或者多个连接表中返回记录集的笛卡尔积。</td>
</tr>
</tbody>
</table>`,r:{minutes:1.8,words:541},title:"连接"},["/cs/database/sql/basic/join","/cs/database/sql/basic/join.md"]],["v-7155f962","/cs/database/sql/basic/null.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 空值</h1>
<ul>
<li>is null</li>
<li>is not null</li>
<li>Ifnull(a, b)</li>
</ul>
<p>MySQL 使用三值逻辑 —— TRUE, FALSE 和 UNKNOWN。任何与 NULL 值进行的比较都会与第三种值 UNKNOWN 做比较。这个“任何值”包括 NULL 本身</p>
<p>SQL的保留字中，很多都被归类为谓词一类，例如&gt;,&lt;&gt;,= 等比较谓词，以及BETWEEN, LIKE, IN, IS NULL等。总结，谓词是一种特殊的函数，返回值是真值。(前面提到的诶个谓词，返回值都是true, false, unknown,SQL是三值逻辑，所以有三种真值）</p>`,r:{minutes:.9,words:269},title:"空值"},["/cs/database/sql/basic/null","/cs/database/sql/basic/null.md"]],["v-50f44bf2","/cs/database/sql/basic/set.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 集合操作</h1>
<p>对结果集进行交并差操作</p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/6d666f8c6c392a2b04799886422f55e7.png" alt="img" loading="lazy"></p>
<h3> INTERSECT</h3>
<p>求两个集合的交集</p>
<h3> UNION</h3>
<p>求两个集合的并集</p>
<p>默认会去重（但是会影响性能）</p>
<p>UNION ALL可以不去重（性能更好）</p>
<h3> MINUS</h3>`,r:{minutes:.25,words:74},title:"集合操作"},["/cs/database/sql/basic/set","/cs/database/sql/basic/set.md"]],["v-32713fab","/cs/database/sql/basic/sort.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 排序</h1>
<p><code>order by</code>后面可以根多个字段及其升降序，如果为标明则MySQL采用默认升序的策略进行排序。</p>
<p>对字符串用默认的升降序排序得到的是按字典序排列的结果</p>
<h2> 默认排序</h2>
<h3> 升序</h3>
<p><code>order by id asc</code></p>
<h3> 降序</h3>
<p><code>order by id desc</code></p>
<h2> 自定排序</h2>
<p>利用<code>field()</code>函数，来指定排序顺序</p>
<p><code>order by field(id, 5, 2, 3)</code></p>`,r:{minutes:3.06,words:917},title:"排序"},["/cs/database/sql/basic/sort","/cs/database/sql/basic/sort.md"]],["v-b61bc5fe","/cs/database/sql/basic/subquery.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 子查询</h1>
<p>子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null</p>
`,r:{minutes:.11,words:33},title:"子查询"},["/cs/database/sql/basic/subquery","/cs/database/sql/basic/subquery.md"]],["v-26f64b8a","/cs/database/sql/design/%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 设计</h1>
<p>主要考虑三个点：</p>
<ul>
<li></li>
</ul>
<h2> 范式</h2>
<p>数据库范式是一种规范化数据库设计的方法，它通过将数据分解成更小的、更规范化的表来减少数据冗余和提高数据一致性。常见的数据库范式有以下几种：</p>
<ol>
<li>
<p>第一范式（1NF）：确保每个表中的每个列都是原子的，即不可再分的。这可以通过将多值属性拆分成单值属性来实现。</p>
</li>
<li>
<p>第二范式（2NF）：确保每个表中的每个非主键列都<strong>完全依赖</strong>于主键。如果一个表中有多个主键，那么每个非主键列都应该依赖于所有主键。</p>
</li>
<li>
<p>第三范式（3NF）：确保每个表中的每个非主键列都<strong>不传递依赖</strong>于主键。如果一个非主键列依赖于另一个非主键列，那么应该将其拆分成一个单独的表。</p>
</li>
</ol>`,r:{minutes:2.27,words:681},title:"设计"},["/cs/database/sql/design/设计.html","/cs/database/sql/design/%E8%AE%BE%E8%AE%A1","/cs/database/sql/design/设计.md","/cs/database/sql/design/%E8%AE%BE%E8%AE%A1.md"]],["v-15c7c82c","/cs/database/sql/optimisation/",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> SQL 优化</h1>
<h2> 选择合适的字段类型</h2>
<p>存储字节越小、占用空间就越小、性能就越好</p>
<ul>
<li>
<p>非负整数优先用unsigned int，多出一倍存储空间</p>
<p>自增ID、整型IP、年龄等</p>
</li>
<li>
<p>小数值类型优先使用TINYINT</p>
<p>比如年龄、状态表示如0/1/2、类别</p>
</li>
<li>
<p>IP地址用整数存</p>
<p>MySQL提供两个方法处理ip地址</p>
<ul>
<li>INET_ATON</li>
<li>INET_NTOA</li>
</ul>
</li>
<li>
<p>日期类型用timestamp</p>
<p>Datetime消耗空间大，且没有时区信息。</p>
</li>
<li>
<p>金融字段用decimal，避免丢失精度</p>
</li>
</ul>`,r:{minutes:1.99,words:597},title:"SQL 优化"},["/cs/database/sql/optimisation/index.html","/cs/database/sql/optimisation/README.md"]],["v-1c4e6234","/cs/database/sql/optimisation/%E6%85%A2%E6%9F%A5%E8%AF%A2.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<p>MySQL慢查询是指执行时间较长的SQL语句，它会影响数据库的性能和响应速度。为了排查和解决MySQL慢查询问题，可以采取以下步骤：</p>
<ol>
<li>
<p>开启慢查询日志：在MySQL配置文件中，可以开启慢查询日志，记录执行时间超过一定阈值的SQL语句。开启慢查询日志可以帮助我们找到执行时间较长的SQL语句。</p>
</li>
<li>
<p>分析慢查询日志：通过分析慢查询日志，可以找到执行时间较长的SQL语句，并了解其执行时间、执行次数、执行计划等信息。可以使用工具如mysqldumpslow、pt-query-digest等来分析慢查询日志。</p>
</li>
<li>
<p>优化SQL语句：通过分析慢查询日志，可以找到执行时间较长的SQL语句，并对其进行优化。例如，可以添加索引、优化查询语句、减少查询数据量等方式来优化SQL语句。</p>
</li>
<li>
<p>优化数据库配置：可以对MySQL数据库进行优化，例如调整缓存大小、调整连接数、调整线程池大小等。优化数据库配置可以提高数据库的性能和响应速度。</p>
</li>
<li>
<p>优化硬件环境：可以对服务器硬件环境进行优化，例如增加内存、增加磁盘空间、升级CPU等。优化硬件环境可以提高服务器的性能和响应速度。</p>
</li>
</ol>`,r:{minutes:1.49,words:448},title:""},["/cs/database/sql/optimisation/慢查询.html","/cs/database/sql/optimisation/%E6%85%A2%E6%9F%A5%E8%AF%A2","/cs/database/sql/optimisation/慢查询.md","/cs/database/sql/optimisation/%E6%85%A2%E6%9F%A5%E8%AF%A2.md"]],["v-18f5becc","/cs/middleware/rabbitmq/problem/%E5%B9%82%E7%AD%89%E6%80%A7.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 幂等性</h1>
<h3> 概念</h3>
<p>用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了侧作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣歌，返回结果成功，用户查询余额发现多扣钱了，流水记录也变成了两条。在以前的单应用系统中，我们只需要把数据操作放入事务中即可，发生错误立即回滚，但是再响应客户端的时候也有可能出现网络中断或者异常等等</p>
<h3> <strong>防止消息重复消费</strong></h3>
<p>消费者在消费MQ中的消息时，MQ已把消息发送给消费者，消费者在给MQ返回ack时网络中断，故MQ未收到确认信息，该条消息会重新发给其他的消费者，或者在网络重连后再次发送给该消费者，但实际上该消费者已成诚功消费了该条消息，造成消费者消费了重复的消息，</p>`,r:{minutes:3.16,words:948},title:"幂等性"},["/cs/middleware/rabbitmq/problem/幂等性.html","/cs/middleware/rabbitmq/problem/%E5%B9%82%E7%AD%89%E6%80%A7","/cs/middleware/rabbitmq/problem/幂等性.md","/cs/middleware/rabbitmq/problem/%E5%B9%82%E7%AD%89%E6%80%A7.md"]],["v-fa02c2e6","/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E4%B8%A2%E5%A4%B1.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 消息丢失</h1>
<h2> 产生原因</h2>
<p>消息到 MQ 的过程中搞丢，MQ 自己搞丢，MQ 到消费过程中搞丢。</p>
<ul>
<li>第一种：生产者弄丢了数据。生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题或服务器宕机等。</li>
<li>第二种：RabbitMQ 弄丢了数据。MQ还没有持久化自己挂了</li>
<li>第三种：消费端弄丢了数据。刚消费到，还没处理，结果进程挂了，比如重启了。</li>
</ul>
<h2> 解决方案</h2>
<ul>
<li>生产者到 RabbitMQ：事务机制和 Confirm 机制，注意：事务机制和 Confirm 机制是互斥的，两者不能共存，会导致 RabbitMQ 报错。</li>
<li>RabbitMQ 自身：持久化、集群、普通模式、镜像模式。</li>
<li>RabbitMQ 到消费者：basicAck 机制、死信队列、消息补偿机制。</li>
</ul>`,r:{minutes:6.21,words:1864},title:"消息丢失"},["/cs/middleware/rabbitmq/problem/消息丢失.html","/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E4%B8%A2%E5%A4%B1","/cs/middleware/rabbitmq/problem/消息丢失.md","/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E4%B8%A2%E5%A4%B1.md"]],["v-6e6759ec","/se/design/system-design/projects/trace-note.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> Trace Note 系统设计</h1>
<ul>
<li>用户系统</li>
<li>秒杀系统</li>
<li>评论系统</li>
<li>地理系统</li>
<li>上传系统</li>
</ul>
<h3> Redisson分布式延迟队列RDelayedQueue</h3>
<p>Redisson是一个基于redis实现的Java 驻内存数据网格，它不仅提供了一系列的分布式的Java常用对象，还提供了许多分布式服务。</p>
<p>Redisson除了提供我们常用的分布式锁外，还提供了一个分布式延迟队列RDelayedQueue，他是一种基于zset结构实现的延迟队列，其实现类是RedissonDelayedQueue。</p>`,r:{minutes:2.43,words:729},title:"Trace Note 系统设计"},["/se/design/system-design/projects/trace-note","/se/design/system-design/projects/trace-note.md"]],["v-4ed44f29","/se/devops/unix/availability/DNS-DRBD-network.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> DNS DRBD network</h1>
`,r:{minutes:.01,words:3},title:"DNS DRBD network"},["/se/devops/unix/availability/DNS-DRBD-network","/se/devops/unix/availability/DNS-DRBD-network.md"]],["v-7be630bb","/se/devops/unix/availability/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Availability 可用性</h1>
<p>24 hours</p>
<p>Fault</p>
<ul>
<li>detect</li>
<li>recover</li>
</ul>
<p>主要解决思路：</p>
<p>Redundancy 冗余</p>
<ul>
<li>active</li>
<li>spare 后备</li>
</ul>
<p>核心问题：</p>
<ul>
<li>如何知道服务挂了，</li>
<li>以及如何进行切换</li>
</ul>
`,r:{minutes:.14,words:42},title:"Availability 可用性"},["/se/devops/unix/availability/index.html","/se/devops/unix/availability/README.md"]],["v-f2e33722","/se/devops/unix/availability/load-assessment-and-tuning.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> load assessment and tuning</h1>
<p>sar：发现瓶颈在哪，cpu还是io</p>
<h3> When CPU load is high</h3>
<p>Top &amp; sar</p>
<p>Ps 看 CPU time</p>
<p>strace 看系统调用</p>
<h3> When I/O load is high</h3>
<p>swap 内存不够</p>
<p>数据库I/O多</p>
<h3> prefork</h3>
<h3> 多进程 &amp; 多线程</h3>
<p>多进程隔离性更好，一个进程挂了不影响别人</p>
<p>多线程，一个线程挂了整个进程都挂了</p>`,r:{minutes:.76,words:228},title:"load assessment and tuning"},["/se/devops/unix/availability/load-assessment-and-tuning","/se/devops/unix/availability/load-assessment-and-tuning.md"]],["v-6a7521df","/se/devops/unix/availability/optimize-server-and-topology.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> optimize server and topology</h1>
<h2> Reverse Proxy</h2>
<h2> Optimize memory use</h2>
<h2> MySQL Replicayion (同步)</h2>
<h3> Reasons Cause Database stopped</h3>
<h3> MySQL Replication</h3>
<p>Master, Slave</p>
<p>Matser 改</p>
<p>Slave 查，查很多</p>
<p>异步同步</p>
<blockquote>
<p>Slave + Load Balance</p>
</blockquote>`,r:{minutes:.16,words:49},title:"optimize server and topology"},["/se/devops/unix/availability/optimize-server-and-topology","/se/devops/unix/availability/optimize-server-and-topology.md"]],["v-0e336dfc","/se/devops/unix/availability/redundancy-and-load-balancing.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> Redundancy and Load Balancing</h1>
<p>Possible failures</p>
<ul>
<li>Web server failure 服务器失败</li>
<li></li>
</ul>
<p>stand by</p>
<p>spare 方式</p>
<ul>
<li>cold spare</li>
<li>warm spare</li>
<li>hot spare</li>
</ul>
<p>failover 故障转移（实际上是服务转义）</p>
<p>虚拟IP技术，大家都用同一个虚拟IP地址</p>
<p><a href="http://failover.sh" target="_blank" rel="noopener noreferrer">failover.sh</a></p>`,r:{minutes:.58,words:174},title:"Redundancy and Load Balancing"},["/se/devops/unix/availability/redundancy-and-load-balancing","/se/devops/unix/availability/redundancy-and-load-balancing.md"]],["v-5d436f67","/se/devops/unix/basic/1.1%20basic-cmd.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 1. UNIX 常用指令</h1>
<p>wildcard character</p>
<h2> 命令格式</h2>
<p>三部分：</p>
<ul>
<li>
<p>cmd</p>
</li>
<li>
<p>option(s)</p>
<p>分类：</p>
<ul>
<li><code>-</code>：简写</li>
<li><code>--</code>：全称，增加可读性（脚本里面一般用全写）</li>
</ul>
<p>常见：</p>
<ul>
<li><code>-a</code>: 全部的</li>
<li><code>-l</code>: 长的、全部信息</li>
<li><code>-R</code>: 递归的（删除文件夹等用）</li>
<li><code>-v</code>: verbose 显示冗余信息，（普通的时候会省略一些东西），这个可以显示全</li>
</ul>
</li>
<li>
<p>args</p>
<p>参数可以有多个</p>
</li>
</ul>`,r:{minutes:6.86,words:2058},title:"1. UNIX 常用指令"},["/se/devops/unix/basic/1.1 basic-cmd.html","/se/devops/unix/basic/1.1%20basic-cmd","/se/devops/unix/basic/1.1 basic-cmd.md","/se/devops/unix/basic/1.1%20basic-cmd.md"]],["v-aa563614","/se/devops/unix/basic/1.2.%20vi.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> VI</h1>
<p>vi编辑器里面，输入/然后加入搜索内容，然后回车，就可以看到结果，按n可以往后看别的匹配的，shift+n可以往前看</p>
<p>一开始是cmd模式</p>
<p>输入i(或者a,o)，进入编辑模式</p>
<h3> 状态：</h3>
<ul>
<li>
<p>cmd</p>
<p>命令模式</p>
<p>如：j, k上下调光标</p>
</li>
<li>
<p>insert</p>
</li>
<li>
<p>Last line</p>
<p>:</p>
</li>
</ul>
<h3> CMD</h3>
<p>jk上下</p>
<p>gg回到文件首</p>`,r:{minutes:.58,words:175},title:"VI"},["/se/devops/unix/basic/1.2. vi.html","/se/devops/unix/basic/1.2.%20vi","/se/devops/unix/basic/1.2. vi.md","/se/devops/unix/basic/1.2.%20vi.md"]],["v-46f8812b","/se/devops/unix/basic/1.3%20%E4%B8%89%E5%89%91%E5%AE%A2.html",{y:"a",d:"2023-08-14T07:11:56.000Z",e:`<h1> 三剑客</h1>
<p>三剑客：grep、sed、awk</p>
<h2> grep</h2>
<h3> 正则表达式</h3>
<h4> 括号表达式与字符类</h4>
<p>括号表达式：[]</p>
<p>字符类</p>
`,r:{minutes:.11,words:32},title:"三剑客"},["/se/devops/unix/basic/1.3 三剑客.html","/se/devops/unix/basic/1.3%20%E4%B8%89%E5%89%91%E5%AE%A2","/se/devops/unix/basic/1.3 三剑客.md","/se/devops/unix/basic/1.3%20%E4%B8%89%E5%89%91%E5%AE%A2.md"]],["v-1aa52699","/se/devops/unix/basic/10.%20scheduled-tasks.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 10. 调度任务</h1>
<p>自动化运维：遇到问题，写程序，可以复用</p>
<h2> 常用指令</h2>
<p>at：在指定时间做一次的</p>
<p>cron：周期性的</p>
<p>anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行</p>
<p>At ...</p>
<p>atq</p>
<p>atrm</p>
<p>batch 以低优先级运行命令</p>
<p>var下面放的都是常变的内容，比如说who命令，他的内容写在var/run/uxxx下面写得</p>
<p>spool</p>
<p>需要at daemon，每分钟检查一次</p>
<h4> init</h4>`,r:{minutes:.72,words:217},title:"10. 调度任务"},["/se/devops/unix/basic/10. scheduled-tasks.html","/se/devops/unix/basic/10.%20scheduled-tasks","/se/devops/unix/basic/10. scheduled-tasks.md","/se/devops/unix/basic/10.%20scheduled-tasks.md"]],["v-102b7812","/se/devops/unix/basic/11.%20backups.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 11. 备份</h1>
<p>备份的分类：</p>
<ul>
<li>全量备份：所有的都备份</li>
<li>增量备份：只备份修改了的</li>
</ul>
<h3> tar CMD</h3>
<p>tar -cf 压缩</p>
<p>tar -xf 解压</p>
<h3> cpio CMD</h3>
<p>tar遇到错误会直接崩溃，后面就都不解压了</p>
<p>cpio会继续往后解压，能解压一个是一个</p>
<p>i</p>
<p>-m: 可以保留文件原本的创建时间</p>
<h3> 增量备份</h3>
<p>tar和cpio做增量备份</p>
<p>dump</p>
<p>Bacula：分布式的集群中，做一个备份</p>`,r:{minutes:.39,words:118},title:"11. 备份"},["/se/devops/unix/basic/11. backups.html","/se/devops/unix/basic/11.%20backups","/se/devops/unix/basic/11. backups.md","/se/devops/unix/basic/11.%20backups.md"]],["v-6f9a0880","/se/devops/unix/basic/12.%20software-management.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 12. 软件管理</h1>
<h2> 分发软件的格式</h2>
<ul>
<li>.tar.gz</li>
<li>.rpm (Red Hat, Fedora, SUSE, OEL ..) yum</li>
<li>.deb (debian, Ubuntu)</li>
</ul>
<h2> 包管理器</h2>
<h3> RPM</h3>
<p>Redhat Package management</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.21,words:362},title:"12. 软件管理"},["/se/devops/unix/basic/12. software-management.html","/se/devops/unix/basic/12.%20software-management","/se/devops/unix/basic/12. software-management.md","/se/devops/unix/basic/12.%20software-management.md"]],["v-135edba9","/se/devops/unix/basic/2.%20account-management.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 2. 用户管理</h1>
<p>root下的所有目录</p>
<ul>
<li>Home 一般用户的工作目录</li>
<li>root 是管理员用户的目录</li>
<li>bin</li>
<li>sbin 系统管理命令</li>
<li><strong>etc</strong>：所有的配置文件</li>
</ul>
<p>用root可以看到shadow</p>
<p>Unix下用<code>:</code>做内容分割</p>
<p>用户在etc下的passwd里面</p>
<ol>
<li>用户名</li>
<li>x，密码存的地方（x代表别处，在shallow下面）</li>
<li>用户id</li>
<li>用户组id</li>
<li>完整名字</li>
<li>主目录</li>
<li>启动时使用的shell</li>
</ol>`,r:{minutes:1.1,words:329},title:"2. 用户管理"},["/se/devops/unix/basic/2. account-management.html","/se/devops/unix/basic/2.%20account-management","/se/devops/unix/basic/2. account-management.md","/se/devops/unix/basic/2.%20account-management.md"]],["v-6063ff37","/se/devops/unix/basic/3.%20shell.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 3. Shell 编程</h1>
<p>（Linux 课讲的是系统编程不是 shell）</p>
<h3> 基本</h3>
<ol>
<li>#是注释</li>
</ol>
<p>shell 脚本的第一行</p>
<p>文件的前 16 个 bit（前两个字节/英文字符）是 magic number，</p>
<p>来说明是啥，然后用后面的东西解释（sh 可以 ls 也可以，都行，但是能做的内容不一样多）</p>
<blockquote>
<p>”符号链接“待会讲</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.42,words:727},title:"3. Shell 编程"},["/se/devops/unix/basic/3. shell.html","/se/devops/unix/basic/3.%20shell","/se/devops/unix/basic/3. shell.md","/se/devops/unix/basic/3.%20shell.md"]],["v-69de2c8f","/se/devops/unix/basic/4.1%20booting.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 4. Booting</h1>
<p>系统启动</p>
<p><code>boot loaders - grub</code></p>
<p>平时一般用3，除了图形界面的其他的都有，服务器一般就是这个</p>
<p>1 超级用户模式，</p>
<p>software stack，一个软件可能要启动多个进程，如Spark等</p>
<p>脚本</p>
<p>service 命令可以自动帮我们找脚本</p>
<p>符号链接：快捷方式</p>
<p>关机</p>
<ul>
<li>
<p>init 0</p>
</li>
<li>
<p>shutdown</p>
<p>-r 通知所有用户多长时间后关机</p>
<p>-h</p>
</li>
</ul>`,r:{minutes:.56,words:167},title:"4. Booting"},["/se/devops/unix/basic/4.1 booting.html","/se/devops/unix/basic/4.1%20booting","/se/devops/unix/basic/4.1 booting.md","/se/devops/unix/basic/4.1%20booting.md"]],["v-d27165ae","/se/devops/unix/basic/4.2%20systemd.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 4.2. systemd</h1>
<h3> 目的</h3>
<p>增加并发性、减少shell开发</p>
<h3> 争议</h3>
<p>红帽的，来顶替init进程，</p>
<p>违法unix哲学，因为过于复杂，不单一职责</p>
<h3> systemctl</h3>
<p>可以控制systemd系统和服务管理</p>
<p>systemctl disable/enable xxx 关闭/打开开机自启动</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
systemctl stop <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
systemctl restart <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
systemctl reload <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
systemctl status <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
systemctl is-active <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span> <span class="token comment"># 检查是否在运行</span>
systemctl list-units <span class="token parameter variable">--type</span> <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span>
<span class="token comment"># equals to: chkconfig --list</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span> <span class="token comment"># 打开开机自启动</span>
systemctl disable <span class="token punctuation">[</span>name.service<span class="token punctuation">]</span> <span class="token comment"># 关闭开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.41,words:123},title:"4.2. systemd"},["/se/devops/unix/basic/4.2 systemd.html","/se/devops/unix/basic/4.2%20systemd","/se/devops/unix/basic/4.2 systemd.md","/se/devops/unix/basic/4.2%20systemd.md"]],["v-308f7b35","/se/devops/unix/basic/5.%20access-ctrl.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 5. 访问控制</h1>
<p>文件权限：rwx</p>
<ul>
<li>read</li>
<li>write</li>
<li>executable</li>
</ul>
<p>后3位</p>
<p>user other group三个组的控制权限</p>
<p>RBAC：role based access control</p>
<p>SELinux：安全强化，模型：least-privilege，什么都改不了就</p>
<p>access control list (ACL) 访问控制列表</p>
<p>Real-World Access Control</p>
<p>sudo</p>`,r:{minutes:.32,words:96},title:"5. 访问控制"},["/se/devops/unix/basic/5. access-ctrl.html","/se/devops/unix/basic/5.%20access-ctrl","/se/devops/unix/basic/5. access-ctrl.md","/se/devops/unix/basic/5.%20access-ctrl.md"]],["v-e9f43e02","/se/devops/unix/basic/6.%20process-ctrl.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 6. 进程控制</h1>
<p>fork复制当前进程，状态和pc也完全一样，执行fork后面部分的程序</p>
<p>换代码、execute操作</p>
<p>Linux里面子进程的创建，不会创建</p>
<p>cow写时复制</p>
<p>redis持久化：fork下来复制，然后主线程的修改，写时复制</p>
<h2> 进程死亡的方式</h2>
<ul>
<li>
<p>自行死亡</p>
<p>执行完毕，如，c的main函数，返回值是进程返回值，返回给父进程看</p>
</li>
<li>
<p>被杀死</p>
<p>kill，软中断</p>
<p>kill -l 可以看到所有的信号，谁杀的、怎么死的</p>
<p>kill -9 xxx</p>
</li>
<li>
<p>出错没了，call down</p>
</li>
</ul>`,r:{minutes:4.4,words:1319},title:"6. 进程控制"},["/se/devops/unix/basic/6. process-ctrl.html","/se/devops/unix/basic/6.%20process-ctrl","/se/devops/unix/basic/6. process-ctrl.md","/se/devops/unix/basic/6.%20process-ctrl.md"]],["v-4b9d149c","/se/devops/unix/basic/7.%20Filesystem.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 7. 文件系统</h1>
<p>IDE</p>
<p>SCSI</p>
<p>移动硬盘</p>
<p>hd</p>
<p>sd开头是窜口磁盘</p>
<p>默认是8e，Linux LVM，现在是83</p>
<p>Disk Partitions</p>
<h3> make filesyste</h3>
<p>创建文件系统</p>
<p>Windows目录森林，每个文件系统都是一棵树</p>
<p>Unix只有一个根，把他们嫁接成一个树，需要有一个mount point，挂载点，一般喜欢找到一个空目录mnt进行挂载（因为会把原目录里的文件遮蔽）</p>
<p>lost+found</p>`,r:{minutes:3.34,words:1001},title:"7. 文件系统"},["/se/devops/unix/basic/7. Filesystem.html","/se/devops/unix/basic/7.%20Filesystem","/se/devops/unix/basic/7. Filesystem.md","/se/devops/unix/basic/7.%20Filesystem.md"]],["v-896b5f1e","/se/devops/unix/basic/8.%20Storage.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 8. 存储</h1>
<h3> Logical Volume Management (LVM)</h3>
<p>这样有逻辑上的统一调配</p>
<p>服务器，跨盘文件传输非常慢，</p>
<p>通过虚拟化解决，逻辑上组合成一个硬盘，这样i节点就不用动了</p>
<p>扩容一般好，动态扩容，不需要停机</p>
<p>支持卷快照</p>
<p>一直在变，快照不太好做，但是LVM可以直接做到</p>
<p>在线备份，真备份不放在一块的，防止一起被烧毁</p>
<p>操作</p>
<p>pv：Physical Volume</p>
<p>vg：volume group</p>
<p>lv：logical volume</p>`,r:{minutes:1.2,words:360},title:"8. 存储"},["/se/devops/unix/basic/8. Storage.html","/se/devops/unix/basic/8.%20Storage","/se/devops/unix/basic/8. Storage.md","/se/devops/unix/basic/8.%20Storage.md"]],["v-53ada9b3","/se/devops/unix/basic/9.%20Disk%20Quota.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 9. Disk Quota</h1>
<p>硬盘满了系统就会崩掉</p>
<p>硬盘满了，普通用户登录都登录不了，不过root可以登录，因为系统会为root预留一定的硬盘空间</p>
<p>系统资源：</p>
<ul>
<li>i节点数量</li>
<li></li>
</ul>
<p>soft quota到了这个阈值就提示一下</p>
<p>hard quota到了就不能再用了</p>
<p>数据库</p>
<p>usrquota，grpquota</p>
<p>etc /etc/fstab</p>
<p>setenforce安全</p>
<p>好，但是影响性能</p>
<p>开启quota权限：quotaon</p>`,r:{minutes:.55,words:164},title:"9. Disk Quota"},["/se/devops/unix/basic/9. Disk Quota.html","/se/devops/unix/basic/9.%20Disk%20Quota","/se/devops/unix/basic/9. Disk Quota.md","/se/devops/unix/basic/9.%20Disk%20Quota.md"]],["v-690bd11a","/se/devops/unix/basic/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> UNIX 基础</h1>
`,r:{minutes:.01,words:3},title:"UNIX 基础"},["/se/devops/unix/basic/index.html","/se/devops/unix/basic/README.md"]],["v-091b4a7d","/se/devops/unix/basic/network-management.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 13. 网络管理</h1>
`,r:{minutes:.02,words:5},title:"13. 网络管理"},["/se/devops/unix/basic/network-management","/se/devops/unix/basic/network-management.md"]],["v-517e3dfc","/se/devops/unix/basic/network-services.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 14. 网络服务</h1>
`,r:{minutes:.02,words:5},title:"14. 网络服务"},["/se/devops/unix/basic/network-services","/se/devops/unix/basic/network-services.md"]],["v-341199cc","/se/devops/unix/basic/rescue.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 16. 救援</h1>
`,r:{minutes:.01,words:3},title:"16. 救援"},["/se/devops/unix/basic/rescue","/se/devops/unix/basic/rescue.md"]],["v-9374ca82","/se/devops/unix/basic/security.html",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> 15. 安全</h1>
`,r:{minutes:.01,words:3},title:"15. 安全"},["/se/devops/unix/basic/security","/se/devops/unix/basic/security.md"]],["v-4e118aef","/se/framework/doc/swagger/knife4j.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 页面404</h1>
<p>默认情况下并不需要添加此配置即可访问</p>
<p>很多朋友在使用SpringBoot集成swagger-bootstrap-ui后，都无法访问doc.html界面，此时，你可能需要实现SpringBoot的<code>WebMvcConfigurer</code>接口，添加相关的ResourceHandler,代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerBootstrapUiDemoApplication</span>  <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"doc.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"classpath*:/META-INF/resources/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/webjars/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"classpath*:/META-INF/resources/webjars/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.62,words:186},title:"页面404"},["/se/framework/doc/swagger/knife4j","/se/framework/doc/swagger/knife4j.md"]],["v-91c74a40","/se/framework/doc/swagger/swagger.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> swagger</h1>
<p>在线文档</p>
<ol>
<li>及时性（接口变更后，能够及时准确地通知相关前后端开发人员）</li>
<li>规范性（并且保证接口的规范性，如接口的地址，请求方式，参数及响应格式和错误信息）</li>
<li>一致性（接口信息一致，不会出现因开发人员拿到的文档版本不一致，而出现分歧）</li>
<li>可测性（直接在接口文档进行测试，以方便理解业务）</li>
</ol>
<p>kife4j</p>
<p>knife4i是为ava MVC框架集成Swaggers生成Api文档的增强解决方案。</p>
<p>knife4j属于service模块公共资源，因此我们集成到service-util模块</p>`,r:{minutes:.63,words:190},title:"swagger"},["/se/framework/doc/swagger/swagger","/se/framework/doc/swagger/swagger.md"]],["v-041e4908","/se/framework/orm/mybatis/%E5%8F%82%E6%95%B0.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> 参数</h1>
<h2> 占位符</h2>
<ul>
<li>
<p><code>\${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于<strong>静态文本替换</strong>，比如\${driver}会被静态替换为<code>com.mysql.jdbc. Driver</code>。</p>
<p>字符串拼接</p>
</li>
<li>
<p><code>#{}</code>是 sql 的参数占位符，MyBatis 会将 sql 中的<code>#{}</code>替换为? 号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的? 号占位符设置参数值，比如 ps.setInt(0, parameterValue)，<code>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 <code>param.getItem().getName()</code>。</p>
</li>
</ul>`,r:{minutes:1.56,words:469},title:"参数"},["/se/framework/orm/mybatis/参数.html","/se/framework/orm/mybatis/%E5%8F%82%E6%95%B0","/se/framework/orm/mybatis/参数.md","/se/framework/orm/mybatis/%E5%8F%82%E6%95%B0.md"]],["v-2ca4e71c","/se/framework/orm/mybatis/%E6%9F%A5%E8%AF%A2.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> 查询</h1>
`,r:{minutes:.01,words:2},title:"查询"},["/se/framework/orm/mybatis/查询.html","/se/framework/orm/mybatis/%E6%9F%A5%E8%AF%A2","/se/framework/orm/mybatis/查询.md","/se/framework/orm/mybatis/%E6%9F%A5%E8%AF%A2.md"]],["v-bfc74c5c","/se/framework/orm/mybatis/%E6%A0%87%E7%AD%BE.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> 标签</h1>
<h3> foreach</h3>
<p><a href="https://www.cnblogs.com/fnlingnzb-learner/p/10566452.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/fnlingnzb-learner/p/10566452.html</a></p>
<p>常用来批量 insert，可以显著提高性能（大约十倍）</p>
<blockquote>
<p>三种方式性能对比：<a href="https://www.jb51.net/article/224857.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/224857.htm</a></p>
</blockquote>`,r:{minutes:.22,words:67},title:"标签"},["/se/framework/orm/mybatis/标签.html","/se/framework/orm/mybatis/%E6%A0%87%E7%AD%BE","/se/framework/orm/mybatis/标签.md","/se/framework/orm/mybatis/%E6%A0%87%E7%AD%BE.md"]],["v-bed94cb8","/se/framework/orm/mybatis-plus/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:`<h1> 条件查询</h1>
<h2> Wrapper 传统写法</h2>
<p>示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> qw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
qw<span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>qw<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.49,words:146},title:"条件查询"},["/se/framework/orm/mybatis-plus/条件查询.html","/se/framework/orm/mybatis-plus/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2","/se/framework/orm/mybatis-plus/条件查询.md","/se/framework/orm/mybatis-plus/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2.md"]],["v-3a2a6658","/se/framework/orm/mybatis-plus/%E6%9F%A5%E8%AF%A2%E6%8A%95%E5%BD%B1.html",{y:"a",d:"2022-12-28T12:08:23.000Z",e:'<h1> 查询投影</h1>\n<h2> select</h2>\n<h2> groupBy</h2>\n<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>knownact<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>post<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>brief<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>cover_image<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>dislike<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>favorite<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>review_status<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'\\"Hello\\"\'</span><span class="token punctuation">,</span> <span class="token string">\'https://neusurvey-1309929060.cos.ap-beijing.myqcloud.com/bb/1958ce9f5f21488bbb888934f4423942aa.md\'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>knownact<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>post<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>brief<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>cover_image<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>dislike<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>favorite<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>review_status<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'我的 React 最佳实践\'</span><span class="token punctuation">,</span> <span class="token string">\'\\"Hi\\"\'</span><span class="token punctuation">,</span> <span class="token string">\'React 目前开发以函数组件为主，辅以 hooks 实现大部分的页面逻辑。目前数栈的 react 版本是 16.13.1，该版本是支持 hooks 的，故以下实践是 hooks 相关的最佳实践。\'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>knownact<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>post<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>brief<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>cover_image<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>dislike<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>favorite<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>review_status<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'疫情这么严重下的初级前端年终总结\'</span><span class="token punctuation">,</span> <span class="token string">\'\\"Hi\\"\'</span><span class="token punctuation">,</span> <span class="token string">\'「回顾2022，展望2023，我正在参与2022年终总结征文大赛活动」 前言 不知不觉干这行业也几年了，期间少不了的酸甜苦辣，有熬夜通宵发版的辛苦，也有团队开心聚餐的喜悦，总得来说有苦亦有甜，人生嘛！\'</span><span class="token punctuation">,</span> <span class="token string">\'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01d8e08090d5499e912ffd7f5bf37d3b~tplv-k3u1fbpfcp-watermark.image?\'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>knownact<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>post<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>brief<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>cover_image<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>dislike<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>favorite<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>review_status<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'【中级/高级前端】为什么我建议你一定要读一读 Tapable 源码？\'</span><span class="token punctuation">,</span> <span class="token string">\'https://neusurvey-1309929060.cos.ap-beijing.myqcloud.com/bb/d516f7e786ab49759092ba2a4ae22b9daa.md\'</span><span class="token punctuation">,</span> <span class="token string">\'所有人都知道 Webpack 很复杂，但 Webpack 的源码却很优雅，是一个典型的可插拔架构，不仅逻辑清晰，而且灵活好扩展。近几年出来的一些构建工具，大多也都参考了 Webpack 的这种架构方式\'</span><span class="token punctuation">,</span> <span class="token string">\'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b43847957944e2da5dac558d04d06d2~tplv-k3u1fbpfcp-watermark.image?\'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',r:{minutes:1.57,words:471},title:"查询投影"},["/se/framework/orm/mybatis-plus/查询投影.html","/se/framework/orm/mybatis-plus/%E6%9F%A5%E8%AF%A2%E6%8A%95%E5%BD%B1","/se/framework/orm/mybatis-plus/查询投影.md","/se/framework/orm/mybatis-plus/%E6%9F%A5%E8%AF%A2%E6%8A%95%E5%BD%B1.md"]],["v-7a74ce20","/se/framework/spring/boot/",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Spring Boot</h1>
<h3> SpringBootApplication</h3>
<p>可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：</p>
<ul>
<li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li>
<li>@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li>
<li>@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类</li>
</ul>`,r:{minutes:7.65,words:2294},title:"Spring Boot"},["/se/framework/spring/boot/index.html","/se/framework/spring/boot/README.md"]],["v-1a0953b3","/se/framework/spring/mvc/Spring%20MVC.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Spring MVC</h1>
<h3> Spring MVC 的核心组件有哪些？</h3>
<p>记住了下面这些组件，也就记住了 SpringMVC 的工作原理。</p>
<ul>
<li><strong><code>DispatcherServlet</code></strong> ：<strong>核心的中央处理器</strong>，负责接收请求、分发，并给予客户端响应。</li>
<li><strong><code>HandlerMapping</code></strong> ：<strong>处理器映射器</strong>，根据 uri 去匹配查找能处理的 <code>Handler</code> ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li>
<li><strong><code>HandlerAdapter</code></strong> ：<strong>处理器适配器</strong>，根据 <code>HandlerMapping</code> 找到的 <code>Handler</code> ，适配执行对应的 <code>Handler</code>；</li>
<li><strong><code>Handler</code></strong> ：<strong>请求处理器</strong>，处理实际请求的处理器。</li>
<li><strong><code>ViewResolver</code></strong> ：<strong>视图解析器</strong>，根据 <code>Handler</code> 返回的逻辑视图 / 视图，解析并渲染真正的视图，并传递给 <code>DispatcherServlet</code> 响应客户端</li>
</ul>`,r:{minutes:6.56,words:1968},title:"Spring MVC"},["/se/framework/spring/mvc/Spring MVC.html","/se/framework/spring/mvc/Spring%20MVC","/se/framework/spring/mvc/Spring MVC.md","/se/framework/spring/mvc/Spring%20MVC.md"]],["v-c8e33b14","/se/framework/spring/mvc/servlet.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Servlet</h1>
<p>在Java Web程序中，<strong>Servlet</strong>主要负责接收用户请求 <code>HttpServletRequest</code>,在<code>doGet()</code>,<code>doPost()</code>中做相应的处理，并将回应<code>HttpServletResponse</code>反馈给用户。<strong>Servlet</strong> 可以设置初始化参数，供Servlet内部使用。一个Servlet类只会有一个实例，在它初始化时调用<code>init()</code>方法，销毁时调用<code>destroy()</code>方法**。**Servlet需要在web.xml中配置（MyEclipse中创建Servlet会自动配置），<strong>一个Servlet可以设置多个URL访问</strong>。<strong>Servlet不是线程安全</strong>，因此要谨慎使用类变量。</p>`,r:{minutes:4.51,words:1353},title:"Servlet"},["/se/framework/spring/mvc/servlet","/se/framework/spring/mvc/servlet.md"]],["v-d68d8200","/se/framework/spring-cloud/nacos/",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<p>注册中心、配置中心</p>
<p>namespace：区分环境，比如开发、测试、生产环境</p>
<p>group：区别项目，比如tracenote和juejin</p>
<h2> 配置中心</h2>
<p>搭建完成Nacos服务发现中心，下边搭建Nacos为配置中心，其目的就是通过Nacos去管理项目的所有配置。</p>
<p>先将项目中的配置文件分分类：</p>
<p>1、每个项目特有的配置</p>
<p>是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。</p>
<p>比如：spring.application.name每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。</p>`,r:{minutes:1.65,words:496},title:""},["/se/framework/spring-cloud/nacos/index.html","/se/framework/spring-cloud/nacos/README.md"]],["v-501c4172","/se/lang/java/JUC/",{y:"a",d:"2023-01-02T12:45:28.000Z",e:`<h1> JUC</h1>
<p>Java.util.concurrent</p>
`,r:{minutes:.01,words:2},title:"JUC"},["/se/lang/java/JUC/index.html","/se/lang/java/JUC/README.md"]],["v-073fc5c3","/se/lang/java/basic/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 代码规范</h1>
<h2> 命名规范</h2>
<p><a href="https://blog.csdn.net/csdn_life18/article/details/126335665" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/csdn_life18/article/details/126335665</a></p>
<p><a href="http://t.zoukankan.com/leon618-p-7469638.html" target="_blank" rel="noopener noreferrer">http://t.zoukankan.com/leon618-p-7469638.html</a></p>`,r:{minutes:1.46,words:439},title:"代码规范"},["/se/lang/java/basic/代码规范.html","/se/lang/java/basic/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83","/se/lang/java/basic/代码规范.md","/se/lang/java/basic/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.md"]],["v-1c5df1d3","/se/lang/java/basic/%E5%85%B3%E9%94%AE%E5%AD%97.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 关键字</h1>
<table>
<thead>
<tr>
<th style="text-align:left">分类</th>
<th style="text-align:left">关键字</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">访问控制</td>
<td style="text-align:left">private protected public</td>
</tr>
<tr>
<td style="text-align:left">类，方法和变量修饰符</td>
<td style="text-align:left">abstract class extends final implements interface native new static strictfp synchronized transient volatile enum</td>
</tr>
<tr>
<td style="text-align:left">程序控制</td>
<td style="text-align:left">break continue return do while if else for instanceof switch case default assert</td>
</tr>
<tr>
<td style="text-align:left">错误处理</td>
<td style="text-align:left">try catch throw throws finally</td>
</tr>
<tr>
<td style="text-align:left">包相关</td>
<td style="text-align:left">import package</td>
</tr>
<tr>
<td style="text-align:left">基本类型</td>
<td style="text-align:left">boolean byte char double float int long short</td>
</tr>
<tr>
<td style="text-align:left">变量引用</td>
<td style="text-align:left">super this void</td>
</tr>
<tr>
<td style="text-align:left">保留字</td>
<td style="text-align:left">goto const</td>
</tr>
</tbody>
</table>`,r:{minutes:1.33,words:399},title:"关键字"},["/se/lang/java/basic/关键字.html","/se/lang/java/basic/%E5%85%B3%E9%94%AE%E5%AD%97","/se/lang/java/basic/关键字.md","/se/lang/java/basic/%E5%85%B3%E9%94%AE%E5%AD%97.md"]],["v-6789a301","/se/lang/java/basic/%E5%BC%82%E5%B8%B8.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 异常</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/types-of-exceptions-in-java.png" alt="Java 异常类层次结构图" loading="lazy"></p>
<h3> Exception 和 Error 区别</h3>
<p>所有异常都有一个共同的祖先：<code>Throwable</code> 类。该类有两个重要的子类:</p>
<ul>
<li>
<p><strong><code>Exception</code></strong>：程序本身可以处理的异常，可以通过 <code>catch</code> 来进行捕获。<code>Exception</code> 又可以分为：</p>
<ul>
<li>Checked Exception (受检查异常，必须处理)</li>
<li>Unchecked Exception (不受检查异常，可以不处理)。</li>
</ul>
</li>
<li>
<p><strong><code>Error</code></strong>：<code>Error</code> 属于程序无法处理的错误 ，我们没办法通过 <code>catch</code> 来进行捕获不建议通过<code>catch</code>捕获 。例如</p>
<ul>
<li>Java 虚拟机运行错误（<code>Virtual MachineError</code>）</li>
<li>虚拟机内存不够错误（<code>OutOfMemoryError</code>）</li>
<li>栈溢出错误（<code>StackOverFlowError</code>）</li>
<li>类定义错误（<code>NoClassDefFoundError</code>）</li>
</ul>
<p>这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</p>
</li>
</ul>`,r:{minutes:3.15,words:945},title:"异常"},["/se/lang/java/basic/异常.html","/se/lang/java/basic/%E5%BC%82%E5%B8%B8","/se/lang/java/basic/异常.md","/se/lang/java/basic/%E5%BC%82%E5%B8%B8.md"]],["v-47173f46","/se/lang/java/basic/%E8%BF%90%E7%AE%97%E7%AC%A6.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 运算符</h1>
<h2> 单目运算符</h2>
<h3> <code>++</code>/<code>--</code></h3>
<h3> <code>!</code></h3>
<h2> 双目运算符</h2>
<h3> <code>,</code></h3>
<p>在java中，逗号运算符并不像C/C++中一样，可以随意使用，</p>
<p>在java中，逗号只能用来：</p>
<ul>
<li>
<p>分隔方法的参数，</p>
<p><code>int sum(int a, int b)</code></p>
</li>
<li>
<p>分割多个变量的声明，</p>
<p><code>int a, b;</code></p>
</li>
<li>
<p>用于for循环的表达式中：</p>
<p><code>for (int i = 0, j = 0; ; i++, j++)</code></p>
</li>
</ul>`,r:{minutes:.33,words:98},title:"运算符"},["/se/lang/java/basic/运算符.html","/se/lang/java/basic/%E8%BF%90%E7%AE%97%E7%AC%A6","/se/lang/java/basic/运算符.md","/se/lang/java/basic/%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],["v-cb799b10","/se/lang/java/collections/Concurrent.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 并发容器</h1>
<ul>
<li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code></li>
<li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li>
<li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li>
<li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>
<li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>
</ul>`,r:{minutes:3.28,words:984},title:"并发容器"},["/se/lang/java/collections/Concurrent","/se/lang/java/collections/Concurrent.md"]],["v-b9dfdcac","/se/lang/java/collections/",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 集合</h1>
<p>Java集合的架构如下</p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-16 21.15.43.png" alt="截屏2023-03-16 21.15.43" loading="lazy"></p>
<p>内容大概分为如下三个部分：</p>
<ul>
<li>Collaction 接口</li>
<li>Map 接口</li>
<li>集合线程安全</li>
</ul>
<h2> 性质</h2>
<h3> comparable 和 Comparator 的区别</h3>`,r:{minutes:2.7,words:809},title:"集合"},["/se/lang/java/collections/index.html","/se/lang/java/collections/README.md"]],["v-dbf1abde","/se/lang/java/collections/collection.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> Collection 接口</h1>
<h2> List 接口</h2>
<ul>
<li>Vector，List 接口旧的实现，是线程安全的，方法前都</li>
<li>ArrayList</li>
<li>LinkedList</li>
</ul>
<p>（Stack是继承自Vector的类，但是一般不推荐使用，ArrayDeque更快）</p>
<h3> ArrayList</h3>
<h4> 初始容量</h4>
<p>如果是无参构造，初始容量是0，加入第一个元素的时候会扩容成10。</p>
<h4> 扩容机制</h4>
<p>当装满的时候，会扩容数组大小为1.5倍。</p>
`,r:{minutes:.74,words:223},title:"Collection 接口"},["/se/lang/java/collections/collection","/se/lang/java/collections/collection.md"]],["v-c85546b2","/se/lang/java/collections/map.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> Map 接口</h1>
<p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。</p>
<p>当我们只需要存放元素值时，就选择实现Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口的集合比如 TreeSet 或 HashSet，不需要就选择实现 List 接口的比如 ArrayList或 LinkedList ，然后再根据实现这些接口的集合的特点来选用。</p>
<h2> HashMap</h2>`,r:{minutes:8.41,words:2523},title:"Map 接口"},["/se/lang/java/collections/map","/se/lang/java/collections/map.md"]],["v-50d81d6c","/se/lang/java/feature/java8.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> Java 8</h1>
<h2> Interface 方法修饰</h2>
<p>为了解决接口的修改与现有的实现不兼容的问题。新 interface 的方法可以用<code>default</code> 或 <code>static</code>修饰，这样就可以有方法体，实现类也不必重写此方法。</p>
<p>一个 interface 中可以有多个方法被它们修饰，这 2 个修饰符的区别主要也是普通方法和静态方法的区别。</p>
<ol>
<li><code>default</code>修饰的方法，是普通实例方法，可以用<code>this</code>调用，可以被子类继承、重写。</li>
<li><code>static</code>修饰的方法，使用上和一般类静态方法一样。但它不能被子类继承，只能用<code>Interface</code>调用。</li>
</ol>`,r:{minutes:3.16,words:949},title:"Java 8"},["/se/lang/java/feature/java8","/se/lang/java/feature/java8.md"]],["v-d7518ca6","/se/lang/java/jvm/jmm.html",{y:"a",d:"2023-02-03T07:46:32.000Z",e:`<h1> 内存结构</h1>
`,r:{minutes:.01,words:4},title:"内存结构"},["/se/lang/java/jvm/jmm","/se/lang/java/jvm/jmm.md"]],["v-e76cd190","/se/lang/java/jvm/%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 线上问题排查</h1>
<h2> CPU 过高/爆掉</h2>
<p>JVM调优过程中，如果CPU爆掉了，可以通过以下步骤进行排查：</p>
<ol>
<li>
<p>使用top命令查看CPU占用率最高的进程，确定是哪个进程导致了CPU爆满。</p>
</li>
<li>
<p>使用jstack命令获取Java进程的线程堆栈信息，查看哪些线程正在运行，是否存在死循环、长时间等待等问题。</p>
</li>
<li>
<p>使用jmap命令获取Java进程的内存信息，查看堆内存使用情况、GC情况等，是否存在内存泄漏等问题。</p>
</li>
<li>
<p>使用jstat命令获取Java进程的GC情况，查看GC频率、GC时间等，是否存在频繁的Full GC等问题。</p>
</li>
<li>
<p>根据以上信息，确定问题所在，进行相应的优化和调整，例如优化代码、调整JVM参数、增加硬件资源等。</p>
</li>
</ol>`,r:{minutes:.93,words:280},title:"线上问题排查"},["/se/lang/java/jvm/问题排查.html","/se/lang/java/jvm/%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5","/se/lang/java/jvm/问题排查.md","/se/lang/java/jvm/%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.md"]],["v-1331a2fc","/standardized/GRE/VERBAL/Blank/",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> Blank</h1>
<h3> 题型</h3>
<ul>
<li>
<p>文本填空</p>
<p>类似完形填空</p>
<ul>
<li>单空</li>
<li>双空</li>
<li>三空</li>
</ul>
</li>
<li>
<p>句子等价</p>
<p>六选二</p>
</li>
</ul>
<p>时间前后对比，一定有变化</p>
<ul>
<li>相反变化，出现多</li>
<li>程度变化，出现少</li>
</ul>
<p>时间前后对比</p>
<ul>
<li>until=before</li>
<li>past</li>
</ul>
<p>名词，立场</p>
`,r:{minutes:.21,words:64},title:"Blank"},["/standardized/GRE/VERBAL/Blank/index.html","/standardized/GRE/VERBAL/Blank/README.md"]],["v-08870d52","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8D%95%E8%AF%8D.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 单词</h1>
<h2> 音标</h2>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-08-07 23.53.54.png" alt="截屏2023-08-07 23.53.54" loading="lazy"></p>
<p>元音</p>
<p>feel fill fell full fool fail
heal hill hell hall hole hail
fan fawn fun phone feign fend</p>
<p>辅音</p>
<p>face vase waste
fence vent went</p>`,r:{minutes:1.29,words:386},title:"单词"},["/standardized/TOEFL/LISTENING/基础课/单词.html","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8D%95%E8%AF%8D","/standardized/TOEFL/LISTENING/基础课/单词.md","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8D%95%E8%AF%8D.md"]],["v-7161413e","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8F%A5%E5%AD%90.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 句子</h1>
<h2> 连读</h2>
<h3> 辅音 + 元音</h3>
<blockquote>
<p>可以直接连，当作一个单词，可以出现浊化、失暴等情况</p>
</blockquote>
<ul>
<li>read only</li>
<li>fall off</li>
<li>an art</li>
</ul>
<p>浊化连读</p>
<p>that I'm = the dime</p>
<p>Out in</p>
<p>They tell me <em>the dime</em> easier to understand.
They tell me <strong>that I'm</strong> easier to understand.
We've been talking about the difficulties of dating petroglyphs rock art that can be over 10000 years old.
Here is an image of a hand.
Then the three-dimensional paint appears to be coming out of the canvas.
They match almost exactly the oval eyes on some of the animals painted on the walls.</p>`,r:{minutes:.84,words:253},title:"句子"},["/standardized/TOEFL/LISTENING/基础课/句子.html","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8F%A5%E5%AD%90","/standardized/TOEFL/LISTENING/基础课/句子.md","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E5%8F%A5%E5%AD%90.md"]],["v-98bd41e4","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E6%AE%B5%E8%90%BD.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 段落</h1>
<h3> 语音类</h3>
<p>And industrial applications of refrigerated air have been extremely important.</p>
<p>The shadows underneath the paint showed folds in clothes and jewels (their subjects wore).</p>
<p>Most current artists place more emphasis on the painting's surface,its texture on their art work than the display of colors and lines.</p>`,r:{minutes:.95,words:286},title:"段落"},["/standardized/TOEFL/LISTENING/基础课/段落.html","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E6%AE%B5%E8%90%BD","/standardized/TOEFL/LISTENING/基础课/段落.md","/standardized/TOEFL/LISTENING/%E5%9F%BA%E7%A1%80%E8%AF%BE/%E6%AE%B5%E8%90%BD.md"]],["v-2760f36f","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E5%AF%B9%E8%AF%9D%E7%BB%83%E4%B9%A0.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 对话练习</h1>
<h2> 火山</h2>
<h3> 闲聊</h3>
<p>what brings you to campus a week before class start</p>
<h3> 正题</h3>
<p>去会议了吗？</p>
<p>没有，因为：印尼刚erupt，去研究新鲜volcanic ash 火山灰一个很短句讲的概念，</p>
<p>不危险，原因：距离很远</p>
<p>女生 summer</p>
<p>trip to 挪威</p>
<p>fjords</p>
<p>carve the way through solid rock</p>
<h2> 上课</h2>`,r:{minutes:.75,words:226},title:"对话练习"},["/standardized/TOEFL/LISTENING/练习/对话练习.html","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E5%AF%B9%E8%AF%9D%E7%BB%83%E4%B9%A0","/standardized/TOEFL/LISTENING/练习/对话练习.md","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E5%AF%B9%E8%AF%9D%E7%BB%83%E4%B9%A0.md"]],["v-7a3b5784","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E8%AE%B2%E5%BA%A7%E7%BB%83%E4%B9%A0.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 讲座练习</h1>
<h2> Coral Bleaching</h2>
<blockquote>
<p>生物</p>
</blockquote>
<p>中心句：coral 白化 -&gt; coral reef↓</p>
<ul>
<li>预判：珊瑚、 白化、减少</li>
</ul>
<p>coral&lt;=&gt;zoo，</p>
<ul>
<li>
<p>zoo-&gt;coral</p>
<ul>
<li>
<p>food</p>
<p>photoxxx</p>
</li>
<li>
<p>color</p>
</li>
</ul>
</li>
<li>
<p>coral-&gt;zoo</p>
</li>
</ul>`,r:{minutes:1.87,words:560},title:"讲座练习"},["/standardized/TOEFL/LISTENING/练习/讲座练习.html","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E8%AE%B2%E5%BA%A7%E7%BB%83%E4%B9%A0","/standardized/TOEFL/LISTENING/练习/讲座练习.md","/standardized/TOEFL/LISTENING/%E7%BB%83%E4%B9%A0/%E8%AE%B2%E5%BA%A7%E7%BB%83%E4%B9%A0.md"]],["v-1196072b","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>连读</p>
<ul>
<li>辅音+元音</li>
<li>辅音+辅音，发音相似/相同的辅音，只发一次
<ul>
<li>classic cases，/clasicasis/</li>
<li>clothes母语者简化读为/clos/</li>
</ul>
</li>
</ul>
<p>清浊：元音还有浊辅音都是浊音</p>
<p>浊音：元音，wl，</p>
<p>清后清、浊后浊</p>
<ul>
<li>浊音后面的s读/z/
<ul>
<li>shadows</li>
<li>jewels</li>
</ul>
</li>
<li>eg.
<ul>
<li>showed /d/</li>
<li>watched /t/</li>
</ul>
</li>
</ul>`,r:{minutes:.78,words:233},title:""},["/standardized/TOEFL/LISTENING/长难句/1.html","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/1","/standardized/TOEFL/LISTENING/长难句/1.md","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/1.md"]],["v-134adfca","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> n, l</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-08-05 21.55.29.png" alt="截屏2023-08-05 21.55.29" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-08-05 21.56.08.png" alt="截屏2023-08-05 21.56.08" loading="lazy"></p>`,r:{minutes:.37,words:112},title:"n, l"},["/standardized/TOEFL/LISTENING/长难句/2.html","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/2","/standardized/TOEFL/LISTENING/长难句/2.md","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/2.md"]],["v-14ffb869","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/3.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>两个元音之间：/t/-&gt;/d/</p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-08-06 13.26.42.png" alt="截屏2023-08-06 13.26.42" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-08-06 13.27.15.png" alt="截屏2023-08-06 13.27.15" loading="lazy"></p>`,r:{minutes:.47,words:140},title:""},["/standardized/TOEFL/LISTENING/长难句/3.html","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/3","/standardized/TOEFL/LISTENING/长难句/3.md","/standardized/TOEFL/LISTENING/%E9%95%BF%E9%9A%BE%E5%8F%A5/3.md"]],["v-442d7e7b","/standardized/TOEFL/READING/%E7%BB%83%E4%B9%A0/%E5%88%B7%E9%A2%98%E7%AD%94%E6%A1%88.html",{y:"a",d:"2023-06-08T07:41:54.000Z",e:`<h1> 高频题答案</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221113215737831.png" alt="image-20221113215737831" loading="lazy"></p>
<p>17: BD</p>
<p>16: 10分（扣1）</p>
<p>17: Sea Turtle Hatchling Strategies for Navigation</p>
<p>CBDCB</p>
<ol start="2">
<li>most：light</li>
<li>形状可；人光害gui</li>
<li>x</li>
<li>geo</li>
</ol>`,r:{minutes:.42,words:127},title:"高频题答案"},["/standardized/TOEFL/READING/练习/刷题答案.html","/standardized/TOEFL/READING/%E7%BB%83%E4%B9%A0/%E5%88%B7%E9%A2%98%E7%AD%94%E6%A1%88","/standardized/TOEFL/READING/练习/刷题答案.md","/standardized/TOEFL/READING/%E7%BB%83%E4%B9%A0/%E5%88%B7%E9%A2%98%E7%AD%94%E6%A1%88.md"]],["v-070b4ce4","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/1.%20%E5%85%AD%E9%80%89%E4%B8%89.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h1> 六选三</h1>
<p>：小结题</p>
<p>每篇文章，最后一道大题</p>
<p>一般一次考试出现2-3题，有的文章末尾没有的话就是第十种题型</p>
<p>Directions：most important</p>
<p>Brief summary，出题人给的正确答案，可以做一个参考</p>
<p>表达最重要的信息，有的选项他与原文一致，但是不能选因为不是重要信息</p>
<p>六选三，每篇文章的最后一题：</p>
<ol>
<li>
<p>可以体现中心的细节可以选</p>
<p>误区：细节都不选是错误的。因为体现中心的细节可以选。</p>
</li>
<li>
<p>刷题时千万不要马后炮</p>
</li>
</ol>`,r:{minutes:1.55,words:465},title:"六选三"},["/standardized/TOEFL/READING/题型分类/1. 六选三.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/1.%20%E5%85%AD%E9%80%89%E4%B8%89","/standardized/TOEFL/READING/题型分类/1. 六选三.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/1.%20%E5%85%AD%E9%80%89%E4%B8%89.md"]],["v-c7814346","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/2.%20%E8%AF%8D%E6%B1%87%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 词汇题</h1>
<p>词霸营</p>
<p>400题</p>
<h3> 题干</h3>
<p>The word X in the passage is closest in meaning to</p>
<p>3 篇文章大概6-8个左右</p>
<p>单词在语境中的含义</p>
<h3> 方法一</h3>
<p>生词的含义在从句和上下句中暗示</p>
<h3> 方法二</h3>
<p>并列、平行与排比</p>
<ul>
<li>A and B</li>
<li>as well as</li>
<li>or</li>
<li>also</li>
<li>so as</li>
</ul>`,r:{minutes:.4,words:121},title:"词汇题"},["/standardized/TOEFL/READING/题型分类/2. 词汇题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/2.%20%E8%AF%8D%E6%B1%87%E9%A2%98","/standardized/TOEFL/READING/题型分类/2. 词汇题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/2.%20%E8%AF%8D%E6%B1%87%E9%A2%98.md"]],["v-3a5e6193","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/3.%20%E6%8C%87%E4%BB%A3%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 指代题</h1>
<h3> 题干</h3>
<p>The word X in the passage refers to</p>
<p>(it, they)</p>
<p>题量0-4个</p>
<h3> 解法</h3>
<p>根据四种代词现象反推即可</p>
<ol>
<li><strong>所有格代词</strong>指代前面位置上最近的名词</li>
<li>后半句的代词主语指代前半句的名词主语</li>
</ol>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-03 15.23.05.png" alt="截屏2022-10-03 15.23.05" loading="lazy"></p>`,r:{minutes:.47,words:140},title:"指代题"},["/standardized/TOEFL/READING/题型分类/3. 指代题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/3.%20%E6%8C%87%E4%BB%A3%E9%A2%98","/standardized/TOEFL/READING/题型分类/3. 指代题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/3.%20%E6%8C%87%E4%BB%A3%E9%A2%98.md"]],["v-999605fc","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/4.%20%E5%8F%A5%E5%AD%90%E7%AE%80%E5%8C%96%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 句子简化题</h1>
<p>Which of the sentences below best expresses the essential information in the highlighted sentence in the passage?</p>
<p>一共 2-3</p>
<p>基本上每篇一个</p>
<p>best 最好的</p>
<p>essential 核心信息</p>
<p>核心信息：</p>
<ol>
<li>
<p>修饰主体不变</p>
<p>插入语等成分不能升级到主要地位</p>
</li>
<li>
<p>程度不变</p>
<ul>
<li>大小 biggest</li>
<li>多少 most, only, all, ...</li>
<li>强弱 always, must, should, ...</li>
</ul>
</li>
<li>
<p>范围不变</p>
</li>
<li>
<p>逻辑关系不变</p>
<ul>
<li>因果</li>
<li>转折</li>
<li>对比</li>
<li>比较 than</li>
</ul>
</li>
</ol>`,r:{minutes:.65,words:196},title:"句子简化题"},["/standardized/TOEFL/READING/题型分类/4. 句子简化题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/4.%20%E5%8F%A5%E5%AD%90%E7%AE%80%E5%8C%96%E9%A2%98","/standardized/TOEFL/READING/题型分类/4. 句子简化题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/4.%20%E5%8F%A5%E5%AD%90%E7%AE%80%E5%8C%96%E9%A2%98.md"]],["v-0cc106d2","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/5.%20%E5%8F%A5%E5%AD%90%E6%8F%92%E5%85%A5%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 句子插入题</h1>
<h3> 方式一：指代暗示</h3>
<p>如果待插入句里面有these, this, They, it等代词，看指代内容是谁，那前一句一定有对应的成分</p>
<p>对应的方法，同指代题一样，只是反过来应用</p>
<h3> 方式二：段落结构暗示</h3>
<p>概述-&gt;细节</p>
<p>概述永远放在细节前，细节永远在概述之后</p>
<h3> 方法三：逻辑关系暗示</h3>
<p>转折：Yet, however,</p>
<p>因果：consequently</p>
<p>先原因后结果</p>
`,r:{minutes:.39,words:118},title:"句子插入题"},["/standardized/TOEFL/READING/题型分类/5. 句子插入题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/5.%20%E5%8F%A5%E5%AD%90%E6%8F%92%E5%85%A5%E9%A2%98","/standardized/TOEFL/READING/题型分类/5. 句子插入题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/5.%20%E5%8F%A5%E5%AD%90%E6%8F%92%E5%85%A5%E9%A2%98.md"]],["v-73efc5e4","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/6.%20%E7%BB%86%E8%8A%82%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 细节题</h1>
`,r:{minutes:.01,words:3},title:"细节题"},["/standardized/TOEFL/READING/题型分类/6. 细节题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/6.%20%E7%BB%86%E8%8A%82%E9%A2%98","/standardized/TOEFL/READING/题型分类/6. 细节题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/6.%20%E7%BB%86%E8%8A%82%E9%A2%98.md"]],["v-4febd898","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/8.%20%E6%8E%A8%E6%96%AD%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 推断题</h1>
<p>GRE推断题的简-版</p>
<p>正向推断</p>
<p>负向推断</p>
<p>标志词：suggest/infer</p>
<p>逻辑</p>
<ul>
<li>
<p>比较逻辑</p>
<ul>
<li>不同对象，unlike 北京，广州热</li>
<li>不同时间，before 上课, 不认识老师</li>
</ul>
</li>
<li>
<p>因果逻辑</p>
<p>因为疫情，so 我们有缘在一起</p>
</li>
<li>
<p>举例逻辑</p>
<p>湖南喜欢辣椒，比如鑫哥</p>
</li>
</ul>
<p>推断题</p>
<ul>
<li>比较
<ul>
<li>不同对象比较，unlike 北京，广州热</li>
<li>不同时间比较，before 上课，不认识老师</li>
<li>非黑即白，说1和3重要，则2一定不重要</li>
</ul>
</li>
<li>因果
<ul>
<li>可能不需要推，就是原文的因或者果</li>
</ul>
</li>
<li>举例</li>
</ul>`,r:{minutes:.54,words:161},title:"推断题"},["/standardized/TOEFL/READING/题型分类/8. 推断题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/8.%20%E6%8E%A8%E6%96%AD%E9%A2%98","/standardized/TOEFL/READING/题型分类/8. 推断题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/8.%20%E6%8E%A8%E6%96%AD%E9%A2%98.md"]],["v-6838aa16","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/9.%20%E7%9B%AE%E7%9A%84%E9%A2%98.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<h1> 目的题</h1>
<p>Why does the author mention/use/include "word" ... ?</p>
<p>TS + eg，举例为了证实TS</p>
<p>TS位置的情况</p>
<ul>
<li>段首句</li>
<li>转折</li>
<li>一个小段作为前一段TS的例子</li>
</ul>
<ol>
<li>段首核心句</li>
<li>转折句</li>
<li>整段例子</li>
</ol>
`,r:{minutes:.2,words:60},title:"目的题"},["/standardized/TOEFL/READING/题型分类/9. 目的题.html","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/9.%20%E7%9B%AE%E7%9A%84%E9%A2%98","/standardized/TOEFL/READING/题型分类/9. 目的题.md","/standardized/TOEFL/READING/%E9%A2%98%E5%9E%8B%E5%88%86%E7%B1%BB/9.%20%E7%9B%AE%E7%9A%84%E9%A2%98.md"]],["v-6b616070","/standardized/TOEFL/SPEAKING/exercise/1.html",{y:"a",d:"2023-01-07T14:07:14.000Z",e:`<h1> Day 1</h1>
<h3> 1</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-09 08.40.20.png" alt="截屏2023-02-09 08.40.20" loading="lazy"></p>
<p>agree</p>
<ul>
<li>
<p>Encourage young people to take action</p>
<p>Celebrity定义</p>
<p>Young people look up to them,</p>
<p>=&gt; they imitate their idols' behaviors and attitude</p>
<p>eg. Fancy, singer, environmental protection</p>
</li>
</ul>`,r:{minutes:.59,words:178},title:"Day 1"},["/standardized/TOEFL/SPEAKING/exercise/1","/standardized/TOEFL/SPEAKING/exercise/1.md"]],["v-76b158ca","/standardized/TOEFL/SPEAKING/exercise/10..html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 10：2017年</h1>
<h3> 9</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-15 23.43.10.png" alt="截屏2023-01-15 23.43.10" loading="lazy"></p>
<p>disagree</p>
<ul>
<li>
<p>increase efficiency and accuracy</p>
<p>Eg. math exam, do it to calculate some complicated and difficult equations</p>
<p>=&gt; save time and get more accurate results</p>
<p>=&gt; get high efficiency in the exam</p>
</li>
<li>
<p>convenient</p>
<p>I mean, in this mordern society, everyone has got a smartphone, right? They can use the e-calculator on their phones.</p>
</li>
</ul>`,r:{minutes:.37,words:110},title:"Day 10：2017年"},["/standardized/TOEFL/SPEAKING/exercise/10.","/standardized/TOEFL/SPEAKING/exercise/10..md"]],["v-f9914250","/standardized/TOEFL/SPEAKING/exercise/12.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 12：2018年</h1>
<h3> 11</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-17 23.30.11.png" alt="截屏2023-01-17 23.30.11" loading="lazy"></p>
<p>disagree</p>
<ul>
<li>
<p>Plays an essential role in providing educational resources centers for every one in the community</p>
</li>
<li>
<p>Atmosphere is good</p>
<p>&lt;= very quiet and comfortable</p>
<p>=&gt; I can fully concentrate on my study</p>
</li>
</ul>`,r:{minutes:.73,words:219},title:"Day 12：2018年"},["/standardized/TOEFL/SPEAKING/exercise/12","/standardized/TOEFL/SPEAKING/exercise/12.md"]],["v-1b966efe","/standardized/TOEFL/SPEAKING/exercise/14.%20.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 14</h1>
<h3> 13</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-19 21.45.16.png" alt="截屏2023-01-19 21.45.16" loading="lazy"></p>
<p>短语积累：</p>
<blockquote>
<p>Stand a better chance at doing sth. 更有机会做某事</p>
</blockquote>
<p>Travel long distance 面对面语料</p>`,r:{minutes:1.32,words:395},title:"Day 14"},["/standardized/TOEFL/SPEAKING/exercise/14. .html","/standardized/TOEFL/SPEAKING/exercise/14.%20","/standardized/TOEFL/SPEAKING/exercise/14. .md","/standardized/TOEFL/SPEAKING/exercise/14.%20.md"]],["v-ef542e96","/standardized/TOEFL/SPEAKING/exercise/15.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 15：2019年</h1>
<h3> 14</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-20 09.05.55.png" alt="截屏2023-01-20 09.05.55" loading="lazy"></p>
<blockquote>
<p>invade one's privacy 侵犯某人隐私</p>
<p>Take responsibility for 为某事负责</p>
</blockquote>
<p>agree</p>`,r:{minutes:1.37,words:411},title:"Day 15：2019年"},["/standardized/TOEFL/SPEAKING/exercise/15","/standardized/TOEFL/SPEAKING/exercise/15.md"]],["v-ebea7d58","/standardized/TOEFL/SPEAKING/exercise/16.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 16：2019年</h1>
<h3> 15</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-21 23.28.25.png" alt="截屏2023-01-21 23.28.25" loading="lazy"></p>
<p>agree</p>
<ul>
<li>
<p>Waste them a lot of time 时间宝贵，学生很忙语料</p>
<p>study should always be the top priority</p>
</li>
<li>
<p>kids not mature to tell right from wrong</p>
<p>may imitate some negative behaviors in video games, like bad language or violence</p>
</li>
</ul>`,r:{minutes:.64,words:192},title:"Day 16：2019年"},["/standardized/TOEFL/SPEAKING/exercise/16","/standardized/TOEFL/SPEAKING/exercise/16.md"]],["v-e880cc1a","/standardized/TOEFL/SPEAKING/exercise/17.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 17：2019年</h1>
<h3> 16</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-22 23.49.34.png" alt="截屏2023-01-22 23.49.34" loading="lazy"></p>
<p>praise</p>
<p>鼓励语料：英语比赛</p>
<h3> 16</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-22 23.50.17.png" alt="截屏2023-01-22 23.50.17" loading="lazy"></p>`,r:{minutes:.4,words:119},title:"Day 17：2019年"},["/standardized/TOEFL/SPEAKING/exercise/17","/standardized/TOEFL/SPEAKING/exercise/17.md"]],["v-e5171adc","/standardized/TOEFL/SPEAKING/exercise/18.html",{y:"a",d:"2023-01-23T07:31:24.000Z",e:`<h1> Day 18：2019年</h1>
<h3> 17</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-23 14.44.11.png" alt="截屏2023-01-23 14.44.11" loading="lazy"></p>
<p>A: different places</p>
<ul>
<li>
<p>broadens my horizon and enhances my knowledge</p>
<p>eg.</p>
<ul>
<li>visiting museums</li>
<li>tasting local food</li>
<li>Talking with the locals</li>
</ul>
<p>=&gt; know more about American cultures and custom</p>
</li>
</ul>`,r:{minutes:.91,words:272},title:"Day 18：2019年"},["/standardized/TOEFL/SPEAKING/exercise/18","/standardized/TOEFL/SPEAKING/exercise/18.md"]],["v-e1ad699e","/standardized/TOEFL/SPEAKING/exercise/19.html",{y:"a",d:"2023-01-27T10:03:27.000Z",e:`<h1> Day 19：2020年</h1>
<h3> 17</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-24 23.55.09.png" alt="截屏2023-01-24 23.55.09" loading="lazy"></p>
<p>A：different</p>
<ul>
<li>broaden horizons</li>
</ul>
<h3> 17</h3>
`,r:{minutes:.1,words:31},title:"Day 19：2020年"},["/standardized/TOEFL/SPEAKING/exercise/19","/standardized/TOEFL/SPEAKING/exercise/19.md"]],["v-96982e4a","/standardized/TOEFL/SPEAKING/exercise/20.html",{y:"a",d:"2023-01-27T10:03:27.000Z",e:`<h1> Day 20：2020年</h1>
<h3> 19</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-25 23.09.48.png" alt="截屏2023-01-25 23.09.48" loading="lazy"></p>
<p>高效：学生忙语料</p>
<p>A: one time</p>
<ul>
<li>
<p>more efficient</p>
<p>&lt;= time is very precious for me</p>
<p>学生忙语料</p>
</li>
<li>
<p>Environment is more comfortable</p>
</li>
</ul>`,r:{minutes:1.3,words:390},title:"Day 20：2020年"},["/standardized/TOEFL/SPEAKING/exercise/20","/standardized/TOEFL/SPEAKING/exercise/20.md"]],["v-932e7d0c","/standardized/TOEFL/SPEAKING/exercise/21.html",{y:"a",d:"2023-01-27T10:03:27.000Z",e:`<h1> Day 21: 2020</h1>
<h3> 20</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-27 00.03.32.png" alt="截屏2023-01-27 00.03.32" loading="lazy"></p>
<p>disagree</p>
<ul>
<li>Face-to-face语料</li>
<li>online: get distracted</li>
</ul>
<h3> 20</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-27 00.05.39.png" alt="截屏2023-01-27 00.05.39" loading="lazy"></p>`,r:{minutes:.19,words:56},title:"Day 21: 2020"},["/standardized/TOEFL/SPEAKING/exercise/21","/standardized/TOEFL/SPEAKING/exercise/21.md"]],["v-8c5b1a90","/standardized/TOEFL/SPEAKING/exercise/23.html",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> Day 23：2020年</h1>
<h3> 22</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-27 23.58.11.png" alt="截屏2023-01-27 23.58.11" loading="lazy"></p>
<p>agree</p>
<ul>
<li>teachers are human, we are not perfect</li>
<li>model how they respond when they are wrong</li>
</ul>`,r:{minutes:.69,words:208},title:"Day 23：2020年"},["/standardized/TOEFL/SPEAKING/exercise/23","/standardized/TOEFL/SPEAKING/exercise/23.md"]],["v-88f16952","/standardized/TOEFL/SPEAKING/exercise/24.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> Day 24：2020年</h1>
<h3> 23</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-29 23.57.33.png" alt="截屏2023-01-29 23.57.33" loading="lazy"></p>
<p>Hard work</p>
<ul>
<li>need hard work to success</li>
</ul>
`,r:{minutes:.11,words:33},title:"Day 24：2020年"},["/standardized/TOEFL/SPEAKING/exercise/24","/standardized/TOEFL/SPEAKING/exercise/24.md"]],["v-8587b814","/standardized/TOEFL/SPEAKING/exercise/25.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> Day 25：2021年</h1>
<h3> 24</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-30 23.35.44.png" alt="截屏2023-01-30 23.35.44" loading="lazy"></p>
<p>Cut budge in academic clubs</p>
<ul>
<li>doing sports is very beneficial for their physical and mental health</li>
<li>Sports clubs need more money to buy all sorts of equipment</li>
</ul>`,r:{minutes:.43,words:129},title:"Day 25：2021年"},["/standardized/TOEFL/SPEAKING/exercise/25","/standardized/TOEFL/SPEAKING/exercise/25.md"]],["v-821e06d6","/standardized/TOEFL/SPEAKING/exercise/26.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> Day 26：2021年</h1>
<h3> 25</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 00.36.59.png" alt="截屏2023-02-01 00.36.59" loading="lazy"></p>
<p>A：big city</p>
<ul>
<li>
<p>More interesting to do</p>
<p>去美国Boston旅游语料</p>
</li>
<li>
<p>Convenient due to public transportation</p>
</li>
</ul>`,r:{minutes:.24,words:71},title:"Day 26：2021年"},["/standardized/TOEFL/SPEAKING/exercise/26","/standardized/TOEFL/SPEAKING/exercise/26.md"]],["v-7eb45598","/standardized/TOEFL/SPEAKING/exercise/27.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> Day 27：2021年</h1>
<h3> 26</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 21.45.07.png" alt="截屏2023-02-01 21.45.07" loading="lazy"></p>
<p>A: experienced</p>
<ul>
<li>
<p>more rich teaching experience, and teach more effectively</p>
<p>eg. fancy</p>
<p>20 years</p>
<p>=&gt; good at teaching</p>
<ul>
<li>know  how to use the most interesting way to teach complicated and boring grammar.</li>
<li>knows how to attract students attention in class</li>
<li>focus on what she is saying for the whole 45 mins</li>
</ul>
</li>
<li></li>
</ul>`,r:{minutes:1.21,words:363},title:"Day 27：2021年"},["/standardized/TOEFL/SPEAKING/exercise/27","/standardized/TOEFL/SPEAKING/exercise/27.md"]],["v-7b4aa45a","/standardized/TOEFL/SPEAKING/exercise/28.html",{y:"a",d:"2023-02-03T07:46:32.000Z",e:`<h1> Day 28：2021年</h1>
<h3> 27</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-02 23.41.56.png" alt="截屏2023-02-02 23.41.56" loading="lazy"></p>
<p>agree</p>
<ul>
<li>
<p>may leave a bad impression on others</p>
<p>eg. dinner table</p>
<p>&lt;= shows no respect to others on the table</p>
<p>eg. Bob,</p>
</li>
<li>
<p>Some public areas ban the use of cellphones</p>
</li>
</ul>`,r:{minutes:.26,words:77},title:"Day 28：2021年"},["/standardized/TOEFL/SPEAKING/exercise/28","/standardized/TOEFL/SPEAKING/exercise/28.md"]],["v-77e0f31c","/standardized/TOEFL/SPEAKING/exercise/29.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> Day 29：2021年</h1>
<h3> 28</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-03 23.32.34.png" alt="截屏2023-02-03 23.32.34" loading="lazy"></p>
<p>agree</p>
<ul>
<li>
<p>Life pace in small town is slower</p>
<p>=&gt; more time to care about eac other</p>
</li>
<li>
<p>City: busy, can't pay too much</p>
</li>
<li>
<p>Know each other for many years</p>
</li>
</ul>`,r:{minutes:.18,words:54},title:"Day 29：2021年"},["/standardized/TOEFL/SPEAKING/exercise/29","/standardized/TOEFL/SPEAKING/exercise/29.md"]],["v-2b9ef426","/standardized/TOEFL/SPEAKING/exercise/7.%20.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> Day 7：2017年</h1>
<h3> 61</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-12 20.12.50.png" alt="截屏2023-01-12 20.12.50" loading="lazy"></p>
<p>花费很多钱：I will cost me an arm and a leg</p>
<p>钱应该花在更有意义的地方：the money should be saved to do other meaningful things, like buying books or taveling</p>`,r:{minutes:.79,words:236},title:"Day 7：2017年"},["/standardized/TOEFL/SPEAKING/exercise/7. .html","/standardized/TOEFL/SPEAKING/exercise/7.%20","/standardized/TOEFL/SPEAKING/exercise/7. .md","/standardized/TOEFL/SPEAKING/exercise/7.%20.md"]],["v-5a792faa","/standardized/TOEFL/SPEAKING/exercise/9.%20.html",{y:"a",d:"2023-01-15T03:19:11.000Z",e:`<h1> Day 9：2017年</h1>
<h3> 8</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-14 22.59.09.png" alt="截屏2023-01-14 22.59.09" loading="lazy"></p>
<p>Agree</p>
<ul>
<li>
<p>Develop child's independence</p>
<p>&lt;= I need to do some basic household tasks by myself, such as</p>
<ul>
<li>doing laundry</li>
<li>washing dished</li>
<li>vacuuming the floor, etc.</li>
</ul>
<p>=&gt; Now, I am studying in a city which is far away from my hometown, but I can totally take care of myself and live independently.</p>
</li>
<li>
<p>Strengthen their relationships</p>
<p>&lt;= they can spend time together doing interesting things</p>
</li>
</ul>`,r:{minutes:1.27,words:382},title:"Day 9：2017年"},["/standardized/TOEFL/SPEAKING/exercise/9. .html","/standardized/TOEFL/SPEAKING/exercise/9.%20","/standardized/TOEFL/SPEAKING/exercise/9. .md","/standardized/TOEFL/SPEAKING/exercise/9.%20.md"]],["v-c3160f00","/standardized/TOEFL/SPEAKING/exercise/",{y:"a",d:"2023-01-07T14:07:14.000Z",e:`<h1> 刷题营</h1>
<p>16-22年370道独立题</p>
<p>30天，</p>
`,r:{minutes:.04,words:13},title:"刷题营"},["/standardized/TOEFL/SPEAKING/exercise/index.html","/standardized/TOEFL/SPEAKING/exercise/README.md"]],["v-53bc634a","/standardized/TOEFL/SPEAKING/%E7%BB%83%E4%B9%A0/task2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p>The letter proposes that ... because ... and ...</p>
<p>community service</p>
<p>don't agree</p>
<p>nosense</p>
<p>riduculous waste time,</p>
`,r:{minutes:.06,words:18},title:""},["/standardized/TOEFL/SPEAKING/练习/task2.html","/standardized/TOEFL/SPEAKING/%E7%BB%83%E4%B9%A0/task2","/standardized/TOEFL/SPEAKING/练习/task2.md","/standardized/TOEFL/SPEAKING/%E7%BB%83%E4%B9%A0/task2.md"]],["v-fcbb4718","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/1.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 1</h3>
<p>Which do you prefer:start a project as early as possible or wait until the due time?</p>
<hr>
<p>I prefer to start a project as early as possible,because it makes me more productive while reducing stress at the same time.However,if I wait until the last minute,maybe I will fail the deadline.</p>`,r:{minutes:3.72,words:1115},title:""},["/standardized/TOEFL/SPEAKING/训练营/1.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/1","/standardized/TOEFL/SPEAKING/训练营/1.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/1.md"]],["v-9a479324","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/10.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 7</h3>
<p>Do you agree or disagree with the following statement?To truly know about a county,it is necessary to learn a major language of this country.Use specific reasons and examples to support your position.</p>
<hr>
<p>I disagree that it is necessary to learn a country's language if people want to get to know the country, because learning a new language requires years of efforts.Take myself as an example.I have been learning English for more than 10 years.I spent a great deal of time memorizing English words, learning grammar,practicing oral English and so on.I mean,it takes you a lot of time to learn a new language,but not everyone has time do this.What's more,thanks to the technology,people can use all kinds of translation tools to help them translate the foreign <a href="http://language.It" target="_blank" rel="noopener noreferrer">language.It</a>'s very convenient and accurate.</p>`,r:{minutes:2.57,words:772},title:""},["/standardized/TOEFL/SPEAKING/训练营/10.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/10","/standardized/TOEFL/SPEAKING/训练营/10.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/10.md"]],["v-f95195da","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/2.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 9</h3>
<p>Many people think that students study course materials more effectively by taking exams,while others think that students learn more effective through doing other activities such as writing paper or completing projects,which do you think is more effective for students to learn.</p>
<hr>`,r:{minutes:3.89,words:1166},title:""},["/standardized/TOEFL/SPEAKING/训练营/2.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/2","/standardized/TOEFL/SPEAKING/训练营/2.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/2.md"]],["v-f5e7e49c","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/3.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 1</h3>
<p>Some people choose to work in a small company or organization with a few workers.Others prefer to work in a large company or organization with thousands of employees.Which do you think is better?</p>
<hr>
<p>I prefer to work in a large company with thousands of employees,because it provides me with a better platform to accumulate more practical working experience and skills. However,if I work in a small company,I can't make big progress.Last year,I had an internship in a fortune 500 company called <a href="http://Lenovo.It" target="_blank" rel="noopener noreferrer">Lenovo.It</a> was a great experience for me, because I learned some useful knowledge and skills,such as time management,teamwork,organization,customer service and so on.All these can lay a solid foundation for my future career.What's more,I like to work with thousands of coworkers.I mean,some of them must be excellent and talented.I'm sure I can learn a lot from them.These are the reasons why I like to work in a big company.</p>`,r:{minutes:5.04,words:1511},title:""},["/standardized/TOEFL/SPEAKING/训练营/3.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/3","/standardized/TOEFL/SPEAKING/训练营/3.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/3.md"]],["v-f27e335e","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/4.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 2</h3>
<p>Do you agree or disagree with the statement that school should limit the time that student doing part-time jobs in school?</p>
<hr>
<p>I agree that the school should limit the time that student doing part-time jobs in school, because study is the top priority for students,they should spend more time on study instead of part-time jobs.I'm a student who is super busy every day.I'm busy with a lot of things,like taking classes, writing homework and so on.Therefore,it's very important for me to manage my time well. However,doing part-time jobs is very time-consuming,because you need to deal with a lot of tasks. For students,study should always be the top priority.</p>`,r:{minutes:3.61,words:1082},title:""},["/standardized/TOEFL/SPEAKING/训练营/4.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/4","/standardized/TOEFL/SPEAKING/训练营/4.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/4.md"]],["v-ef148220","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/5.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 3</h3>
<p>Do you agree or disagree with the following statement?Parents should use money as an incentive for kids to behave well in school.</p>
<hr>
<p>I agree that parents should use money as an incentive for kids to behave well in school,because it's an excellent motivator for kids.I mean,it can encourage them to study harder.There is no doubt that everyone likes money,right?Including kids! Kids can use their pocket money to buy things they like,such as comic books,snacks and toys.Therefore,money is a tangible evidence of what they've accomplished.</p>`,r:{minutes:3.71,words:1114},title:""},["/standardized/TOEFL/SPEAKING/训练营/5.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/5","/standardized/TOEFL/SPEAKING/训练营/5.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/5.md"]],["v-ebaad0e2","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/6.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 4</h3>
<p>Do you agree or disagree with the following statement?It is never acceptable to interrupt another person when he or she is talking.</p>
<hr>
<p>I agree that it's not good to interrupt others when they are talking,because it tells others that you don't care what they <a href="http://say.It" target="_blank" rel="noopener noreferrer">say.It</a> shows no respect to others. Having a good manner plays a very important role in our life,because it enables you to maintain good interpersonal relationships with others. For example, you should always be a good listener,and listen to others'opinions patiently.This shows respect to others.Once,when I was having a conversation with my friend Bob,he often interrupted me while I was talking. I felt so annoyed,because I thought he showed no interest in my <a href="http://talk.It" target="_blank" rel="noopener noreferrer">talk.It</a>'s very impolite and rude,and it left a bad impression on me.</p>`,r:{minutes:1.8,words:541},title:""},["/standardized/TOEFL/SPEAKING/训练营/6.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/6","/standardized/TOEFL/SPEAKING/训练营/6.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/6.md"]],["v-e8411fa4","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/7.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 5</h3>
<p>Do you agree or disagree with the following statement?With the popularity of the technology that focuses on entertainment,people read fewer books than before.</p>
<hr>
<p>I agree with the statement that with the popularity of the technology that focuses on entertainment,people read fewer books than before, because there are so many interesting things for people to do to kill the time.Take myself as an example,on weekends,I often hang out with my friends,and we have a variety of interesting activities to do,such as watching a movie in the theater,shopping in the big shopping mall or climbing the mountain in suburb.We never fail to find interesting things to do in our spare fime.</p>`,r:{minutes:3.75,words:1125},title:""},["/standardized/TOEFL/SPEAKING/训练营/7.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/7","/standardized/TOEFL/SPEAKING/训练营/7.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/7.md"]],["v-e4d76e66","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/8.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 5</h3>
<h5> Some people prefer to do several tasks or projects together at the same time.Others prefer to work on one task or project at a time.Which way of working do you prefer and why?</h5>
<hr>
<p>I prefer to work on one task or project at a time,because I can be fully concentrated on the task and complete it with high quality.However,if I do several tasks at the same time,it's easy for me to make mistakes.For example,I am a university student who has a lot of papers and tasks to do.Last week,I had 3 papers to write,then I chose to finish one paper at a time.During the process,I could be fully concentrated and get high efficiency.After finishing writing one paper, I could continue to write another <a href="http://one.in" target="_blank" rel="noopener noreferrer">one.in</a> this case,I could finish each paper on time with high quality.What's more,doing a lot of tasks at the same time makes me nervous and stressed out. Therefore,I may make a lot of minor mistakes and get lower grade.</p>`,r:{minutes:3.84,words:1151},title:""},["/standardized/TOEFL/SPEAKING/训练营/8.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/8","/standardized/TOEFL/SPEAKING/训练营/8.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/8.md"]],["v-e16dbd28","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/9.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<h3> 6</h3>
<p>Your professor is asking you to help with some research work on the weekend,but you have planned to go to your sister's birthday party.Which would you choose to do?Explain why?</p>
<hr>
<p>I choose to go to my sister's party,because I can make friends and relax in the party.However, doing research with my professor on weekends makes me feel tired and stressed out.I'm a university student who is super busy every day,such as taking classes,writing homework,doing part-time jobs and so on.I often feel burned out.Therefore,I need to take a break and do something for fun.Going to my sister's party is a pretty good choice,because during the process,I can forget all the stress and tension in study.I can make friends with new people who have different <a href="http://backgrounds.In" target="_blank" rel="noopener noreferrer">backgrounds.In</a> this way,it can expand my social circle.</p>`,r:{minutes:3.56,words:1067},title:""},["/standardized/TOEFL/SPEAKING/训练营/9.html","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/9","/standardized/TOEFL/SPEAKING/训练营/9.md","/standardized/TOEFL/SPEAKING/%E8%AE%AD%E7%BB%83%E8%90%A5/9.md"]],["v-6d735e26","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/1.%20.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:"<p>Nowadays, due to the fierce competition in society, people attach more and more importance to being successful. Some people believe that we should sticky to our own ideas because other's words may not be correct and applicable. However, in my perspective, being open to new ideas and being willing to alter our minds is of great significance to success.</p>",r:{minutes:.58,words:175},title:""},["/standardized/TOEFL/WRITING/练习/1. .html","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/1.%20","/standardized/TOEFL/WRITING/练习/1. .md","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/1.%20.md"]],["v-84e07be8","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/2.%20.html",{y:"a",d:"2022-11-26T07:02:46.000Z",e:`<p>There is a natural tendency that people will ponder over all aspects, when they plan to buy some goods that costs a great deal of money.</p>
`,r:{minutes:.09,words:26},title:""},["/standardized/TOEFL/WRITING/练习/2. .html","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/2.%20","/standardized/TOEFL/WRITING/练习/2. .md","/standardized/TOEFL/WRITING/%E7%BB%83%E4%B9%A0/2.%20.md"]],["v-0f462a55","/standardized/app/%E6%9C%BA%E6%9E%84/%E5%86%8D%E6%9D%A5%E4%BA%BA/%E5%86%8D%E6%9D%A5%E4%BA%BA.html",{y:"a",d:"2023-08-10T06:29:52.000Z",e:`<p><strong>申请</strong></p>
<p>冲：斯坦福和Princeton</p>
<p>hypsm，m不招国内硕士</p>
<p>cmu，大概率可以录一些竞争不那么激烈的方向</p>
<p>地方会弱一些</p>
<p>ucb，有可能，因为有校友推</p>
<p>加州 cit ucb</p>
<p>东北 哥大、nyu、brown</p>
<p>ut Austin综排靠后</p>
<p>uiuc</p>
<p>git</p>
<p>uw mscs 招的少、学术要求高、全美排名不高50上下，大家申请少</p>
<p>西雅图（挨着加拿大）、温哥华</p>
<p>怎么规划、怎么达成目标</p>`,r:{minutes:9.86,words:2958},title:""},["/standardized/app/机构/再来人/再来人.html","/standardized/app/%E6%9C%BA%E6%9E%84/%E5%86%8D%E6%9D%A5%E4%BA%BA/%E5%86%8D%E6%9D%A5%E4%BA%BA","/standardized/app/机构/再来人/再来人.md","/standardized/app/%E6%9C%BA%E6%9E%84/%E5%86%8D%E6%9D%A5%E4%BA%BA/%E5%86%8D%E6%9D%A5%E4%BA%BA.md"]],["v-604b10c2","/cs/algo/summary/optimise/decrease-conquer/",{y:"a",d:"2023-01-27T10:03:27.000Z",e:`<h1> 减治</h1>
<p>在广义“有序“的线性结构上搜索</p>
<h3> 四类减治问题</h3>
<p><strong>反向排序</strong>：两侧性质相反</p>
<ul>
<li>二分查找：每次减一半</li>
<li>双指针：减少组合复杂度的空间</li>
</ul>
<p><strong>结构排序</strong>：每次减一半</p>
<ul>
<li>基于二分查找存储化的结构
<ul>
<li>数组：树状数组</li>
<li>链表：跳表</li>
<li>树：
<ul>
<li>B+树</li>
<li>线段树</li>
<li>分块树</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:.52,words:155},title:"减治"},["/cs/algo/summary/optimise/decrease-conquer/index.html","/cs/algo/summary/optimise/decrease-conquer/README.md"]],["v-48443ca0","/cs/algo/summary/optimise/dynamic-programming/",{y:"a",d:"2023-01-27T10:03:27.000Z",e:`<h1> 动态规划</h1>
<p><strong>1、遍历的过程中，所需的状态必须是已经计算出来的</strong>。</p>
<p><strong>2、遍历结束后，存储结果的那个位置必须已经被计算出来</strong>。</p>
<p>对动态规划进行降维打击</p>
<p>dp定义：</p>
<ul>
<li>
<p>子序列问题定义：</p>
<p>dp[i]：以num[i]为结尾的值</p>
</li>
</ul>
<p>优化：</p>
<ul>
<li>
<p>空间：滚动数组优化</p>
<p>多开一个位置，然后%，可以减少rotate的时间，时间空间优化很大</p>
<p>如果仅以来于上一层，甚至可以滚动数组都无需开，但是需要注意顺序：</p>
<ul>
<li>倒序更新，如01背包问题、三角形路径问题</li>
<li>正序更新，如完全背包问题、矩阵路径问题</li>
</ul>
</li>
<li>
<p>时间：斜率优化</p>
</li>
</ul>`,r:{minutes:1.11,words:334},title:"动态规划"},["/cs/algo/summary/optimise/dynamic-programming/index.html","/cs/algo/summary/optimise/dynamic-programming/README.md"]],["v-1c4985c6","/cs/algo/summary/search/DFS/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 深搜：栈式搜索</h1>
<p>三大特点</p>
<ul>
<li>
<p>先序回溯</p>
</li>
<li>
<p>宽树搜索：枚举</p>
</li>
<li>
<p>后序遍历</p>
<p>如果需要自底向上的传值，则必须使用深搜</p>
</li>
</ul>
<p>两类问题：</p>
<ul>
<li>
<p>遍历</p>
<p>在既定结构上进行遍历，如遍历图、树、线</p>
<p>可以使用回溯和后序遍历</p>
</li>
<li>
<p>枚举</p>
<p>根据题意生成解空间，而非直接遍历原结构本身</p>
<p>常见如枚举所有符合条件的答案/路径</p>
</li>
</ul>`,r:{minutes:.38,words:113},title:"深搜：栈式搜索"},["/cs/algo/summary/search/DFS/index.html","/cs/algo/summary/search/DFS/README.md"]],["v-315ce8e2","/cs/database/mysql/devops/log/",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 日志</h1>
<p>错误日志，记录了 mysqld 启动和停止时，以及服务器在运行程序时产生的 error 记录在这里，主要是启动失败之类的严重错误</p>
<p>二进制日志(BINLOG)记录了所有的 DDL(数据定义语言)语句和 DML 语句，但是不包括数据查询(select, show)</p>
<p>作用</p>
<ul>
<li>灾难时的数据恢复</li>
<li>MySQL 的主从复制</li>
</ul>
<p>在 Mysql8 中，二进制日志是默认开启的</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token operator">%</span>bin_log<span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.66,words:198},title:"日志"},["/cs/database/mysql/devops/log/index.html","/cs/database/mysql/devops/log/README.md"]],["v-074f1f5b","/cs/database/mysql/engine/innodb-principle/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 逻辑存储结构</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 16.45.38.png" alt="逻辑存储结构" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png" alt="img" loading="lazy"></p>
<ul>
<li>
<p>表空间 Tablespace</p>
<p>系统、独立、通用、撤销、临时表空间</p>
</li>
<li>
<p>段 Segment：</p>
</li>
<li>
<p>区 Extent：一个区 1M，64 个连续的页</p>
</li>
<li>
<p>页 Page：存储引擎磁盘管理的最小单元，每个页大小 16k</p>
<p>数据页、溢出页，Undo 页</p>
</li>
<li>
<p>行 Row</p>
</li>
</ul>`,r:{minutes:11.89,words:3567},title:"逻辑存储结构"},["/cs/database/mysql/engine/innodb-principle/1. 逻辑存储结构.html","/cs/database/mysql/engine/innodb-principle/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84","/cs/database/mysql/engine/innodb-principle/1. 逻辑存储结构.md","/cs/database/mysql/engine/innodb-principle/1.%20%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.md"]],["v-9c53d84a","/cs/database/mysql/engine/innodb-principle/2.%20%E5%BC%95%E6%93%8E%E6%9E%B6%E6%9E%84.html",{y:"a",d:"2023-04-06T03:47:09.000Z",e:`<h1> 引擎架构</h1>
<p>整体架构图</p>
<img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-05 20.23.31.png" alt="截屏2023-04-05 20.23.31" style="zoom:50%;">
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 18.42.23.png" alt="截屏2023-01-03 18.42.23" loading="lazy"></p>`,r:{minutes:4.04,words:1213},title:"引擎架构"},["/cs/database/mysql/engine/innodb-principle/2. 引擎架构.html","/cs/database/mysql/engine/innodb-principle/2.%20%E5%BC%95%E6%93%8E%E6%9E%B6%E6%9E%84","/cs/database/mysql/engine/innodb-principle/2. 引擎架构.md","/cs/database/mysql/engine/innodb-principle/2.%20%E5%BC%95%E6%93%8E%E6%9E%B6%E6%9E%84.md"]],["v-840effd6","/cs/database/mysql/engine/innodb-principle/3.%20%E4%BA%8B%E5%8A%A1%E5%8E%9F%E7%90%86.html",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> 事务原理</h1>
<p>事务性质</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-24 23.15.51.png" alt="截屏2023-02-24 23.15.51" loading="lazy"></p>
<h2> redo log</h2>
<p>保证：<strong>持久性</strong>：事务一旦提交或回滚，他对数据库中数据的改变就是永久的。</p>
<p>物理日志：存操作的指令</p>
<p>该日志文件由两部分组成：</p>`,r:{minutes:9.42,words:2827},title:"事务原理"},["/cs/database/mysql/engine/innodb-principle/3. 事务原理.html","/cs/database/mysql/engine/innodb-principle/3.%20%E4%BA%8B%E5%8A%A1%E5%8E%9F%E7%90%86","/cs/database/mysql/engine/innodb-principle/3. 事务原理.md","/cs/database/mysql/engine/innodb-principle/3.%20%E4%BA%8B%E5%8A%A1%E5%8E%9F%E7%90%86.md"]],["v-1b05a52c","/cs/database/mysql/engine/innodb-principle/",{y:"a",d:"2023-01-03T11:47:15.000Z",e:`<h1> InnoDB 底层原理</h1>
`,r:{minutes:.02,words:5},title:"InnoDB 底层原理"},["/cs/database/mysql/engine/innodb-principle/index.html","/cs/database/mysql/engine/innodb-principle/README.md"]],["v-3f3cb95e","/cs/database/redis/practice/best/%E6%89%B9%E5%A4%84%E7%90%86%E4%BC%98%E5%8C%96.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 批处理优化</h1>
<p>pipeline：单机模式下的批处理</p>
<h3> mset</h3>
<ul>
<li>mset</li>
<li>hmset</li>
</ul>
<p>注意事项：</p>
<ul>
<li>不要在一次批处理中传输太多命令，否则单次命令占用带宽过多，会导致网络阻塞</li>
<li>MSET 虽然可以批处理，但是却只能操作部分数据类型，因此如果有对复杂数据类型的批处理需要，建议使用 Pipeline 功能：</li>
</ul>
<h3> 管道 Pipeline</h3>
<p>使用<strong>管道技术可以解决多个命令执行时的网络等待</strong>，它是把多个命令整合到一起发送给服务器端处理之后统一返回给客户端，这样就免去了每条命令执行后都要等待的情况，从而有效地提高了程序的执行效率。</p>`,r:{minutes:.98,words:294},title:"批处理优化"},["/cs/database/redis/practice/best/批处理优化.html","/cs/database/redis/practice/best/%E6%89%B9%E5%A4%84%E7%90%86%E4%BC%98%E5%8C%96","/cs/database/redis/practice/best/批处理优化.md","/cs/database/redis/practice/best/%E6%89%B9%E5%A4%84%E7%90%86%E4%BC%98%E5%8C%96.md"]],["v-504e2eb4","/cs/database/redis/practice/best/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BC%98%E5%8C%96.html",{y:"a",d:"2023-02-27T13:30:02.000Z",title:""},["/cs/database/redis/practice/best/服务端优化.html","/cs/database/redis/practice/best/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BC%98%E5%8C%96","/cs/database/redis/practice/best/服务端优化.md","/cs/database/redis/practice/best/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BC%98%E5%8C%96.md"]],["v-23567452","/cs/database/redis/practice/best/%E9%94%AE%E5%80%BC%E8%AE%BE%E8%AE%A1.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 键值设计</h1>
<h2> 优雅的key结构</h2>
<p>Redis的Key虽然可以自定义，但最好遵循下面的几个最佳实践约定：</p>
<ul>
<li>遵循基本格式：[业务名称]：[数据名]：[id]</li>
<li>长度不超过44字节</li>
<li>不包含特殊字符</li>
</ul>
<p>例如：我们的登录业务，保存用户信息，其key是这样的：</p>
<p>优点：</p>
<ul>
<li>
<p>可读性强</p>
</li>
<li>
<p>避免key冲突</p>
</li>
<li>
<p>方便管理</p>
</li>
<li>
<p>节省内存</p>
<p>key是string类型，底层编码包含：int、embstr和raw三种。</p>
<p>在小于44字节时，是embstr编码，采用连续内存空间，内存占用更小（减少内存碎片）</p>
<p>（可用通过<code>object encoding xxx</code>查看编码方式）</p>
</li>
</ul>`,r:{minutes:1.7,words:510},title:"键值设计"},["/cs/database/redis/practice/best/键值设计.html","/cs/database/redis/practice/best/%E9%94%AE%E5%80%BC%E8%AE%BE%E8%AE%A1","/cs/database/redis/practice/best/键值设计.md","/cs/database/redis/practice/best/%E9%94%AE%E5%80%BC%E8%AE%BE%E8%AE%A1.md"]],["v-7443bfa7","/cs/database/redis/practice/best/%E9%9B%86%E7%BE%A4.html",{y:"a",d:"2023-02-27T13:30:02.000Z",title:""},["/cs/database/redis/practice/best/集群.html","/cs/database/redis/practice/best/%E9%9B%86%E7%BE%A4","/cs/database/redis/practice/best/集群.md","/cs/database/redis/practice/best/%E9%9B%86%E7%BE%A4.md"]],["v-41cd53a5","/cs/database/redis/practice/design/distributed-lock.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 分布式锁</h1>
<p>满足分布式系统或集群模式下多进程可见并且互斥的锁。</p>
<ul>
<li>多进场可见</li>
<li>互斥</li>
<li>高可用</li>
<li>高性能</li>
<li>安全性</li>
<li>锁自身的特性：公平非公平等</li>
</ul>
<p>三种常见方式对比：</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-08 11.12.18.png" alt="截屏2023-02-08 11.12.18" loading="lazy"></p>`,r:{minutes:4.69,words:1408},title:"分布式锁"},["/cs/database/redis/practice/design/distributed-lock","/cs/database/redis/practice/design/distributed-lock.md"]],["v-9a82766e","/cs/database/redis/practice/design/follow.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 关注</h1>
<h2> 关注和取关</h2>
<ol>
<li>关注和取关两个接口</li>
<li>判断是否关注的接口</li>
</ol>
<p>这个放到表里面，联系集</p>
<h2> 共同关注</h2>
<p>使用 redis set 结构实现</p>
<p><code>sinter</code> 指令可以实现集合求交集</p>
<h2> 关注推送</h2>
<p>也叫 Feed 流。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-11 11.08.57.png" alt="截屏2023-02-11 11.08.57" loading="lazy"></p>`,r:{minutes:1.58,words:473},title:"关注"},["/cs/database/redis/practice/design/follow","/cs/database/redis/practice/design/follow.md"]],["v-15bb7bd3","/cs/database/redis/practice/design/global-id.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 全局 ID 生成器</h1>
<h2> 基本概念</h2>
<h3> 数据库自增主键的问题</h3>
<ul>
<li>会泄露一些信息，如每天有多少单</li>
<li>可能会分库分表（分布式存储），如果是数据库的自增主键，那就无法保证 iid 的唯一性了</li>
</ul>
<h3> 全局 ID 生成器的特性</h3>
<p>分布式系统下用来生成全局唯一的 ID 的工具，要满足如下特性：</p>
<ul>
<li>唯一性</li>
<li>高可用：什么时候要 id 都能给</li>
<li>高性能</li>
<li>递增性：同时还可以有一个统计的效果</li>
<li>安全性：为增加安全性，我们加入一些其他信息防止被猜出来</li>
</ul>`,r:{minutes:1.39,words:417},title:"全局 ID 生成器"},["/cs/database/redis/practice/design/global-id","/cs/database/redis/practice/design/global-id.md"]],["v-3314e6bb","/cs/database/redis/practice/design/nearby.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 附近</h1>
<p>基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET</p>
<ul>
<li>
<p><code>GEOADD</code>，key，(x, y, member)，member 建议存数据库里面的 id</p>
</li>
<li>
<p><code>GEOPOS</code></p>
</li>
<li>
<p><code>GEOHASH</code>，</p>
</li>
<li>
<p><code>GEODIST</code>，两个 key 之间的距离，返回的单位都是 km</p>
</li>
<li>
<p><code>GEORADIUS</code>，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功能，6.2 以后废弃，替换为 GEOSEARCH</p>
</li>
<li>
<p><code>GEOSEARCH</code>，不仅支持圆形，还支持方形等，拓展性更好，其他方面与上面那个相同，半径长度的单位是 km</p>
</li>
<li>
<p><code>GEOSEARCHSTORE</code>，不返回，只是讲搜索结果存储到一个指定的 key</p>
</li>
</ul>`,r:{minutes:.66,words:199},title:"附近"},["/cs/database/redis/practice/design/nearby","/cs/database/redis/practice/design/nearby.md"]],["v-5301653a","/cs/database/redis/practice/design/rate.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 点赞排行</h1>
<h2> 点赞</h2>
<h3> 一人一赞</h3>
<p>方案一：</p>
<ul>
<li>数据库建立联系集，点赞和取消都在数据库做 crud</li>
<li>缺点：太重</li>
</ul>
<p>方案二：</p>
<ul>
<li>Redis Set：集合并且唯一</li>
</ul>
<h3> 点赞排行榜</h3>
<p>按照点赞的时间排序，展示点赞排行的前五名</p>
<p>SortedSet，</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-10 23.06.43.png" alt="截屏2023-02-10 23.06.43" loading="lazy"></p>`,r:{minutes:.46,words:138},title:"点赞排行"},["/cs/database/redis/practice/design/rate","/cs/database/redis/practice/design/rate.md"]],["v-827df3ae","/cs/database/redis/practice/design/seckill.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 秒杀</h1>
<h3> 超卖解决</h3>
<p>悲观锁：添加同步锁，让线程串行执行</p>
<ul>
<li>优点：简单粗暴</li>
<li>缺点：性能一般</li>
</ul>
<p>乐观锁：不加锁，在更新的时候判断是否有其他线程在修改</p>
<p>版本号，这样需要数据库加字段；或简化为：CAS 法</p>
<ul>
<li>优点：性能好</li>
<li>缺点：成功率太低</li>
</ul>
<p>改进：不再判断是否相等，只判断是否大于零，类似双锁校验</p>
<h3> 一人一单</h3>
<p>因为购买数量是否修改过数据库里面不存在，所以不难使用乐观锁方案，</p>
`,r:{minutes:1.02,words:307},title:"秒杀"},["/cs/database/redis/practice/design/seckill","/cs/database/redis/practice/design/seckill.md"]],["v-f40c5306","/cs/database/redis/practice/design/sign.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 签到</h1>
<h2> BitMap 用法</h2>
<p>必要性：签到如果存在数据库表中，耗费内存，数据库压力大</p>
<p>每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节</p>
<p>布隆过滤器底层是 BitMap</p>
<p>Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位</p>
<p>默认就是 0，故只有要设为 1 的才需要 set</p>
<ul>
<li>
<p><code>SETBIT</code></p>
</li>
<li>
<p><code>GETBIT</code></p>
</li>
<li>
<p><code>BITCOUNT</code></p>
</li>
<li>
<p><code>BITFIELD</code></p>
</li>
</ul>`,r:{minutes:.54,words:162},title:"签到"},["/cs/database/redis/practice/design/sign","/cs/database/redis/practice/design/sign.md"]],["v-429e53da","/cs/database/redis/practice/design/uvpv.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> UV</h1>
<h3> UV/PV 概念</h3>
<ul>
<li>UV：全称 Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。</li>
<li>PV：全称 Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV,用户多次打开页面，则记录多次 PV。往往用来衡量网站的流量。</li>
</ul>
<h2> HyperLogLog</h2>
<p>基于 LogLog 派生的概率算法，用于确定非常大的集合的基数，而不需要存储其所有值。</p>
<p>相同元素进去永远只有一次</p>`,r:{minutes:.86,words:257},title:"UV"},["/cs/database/redis/practice/design/uvpv","/cs/database/redis/practice/design/uvpv.md"]],["v-bd3feee8","/cs/database/redis/practice/problem/atomic.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 原子性保证</h1>
<p><strong>Redis 并不一定保证原子性</strong>（原子性：事务中的命令要不全部成功，要不全部失败）。</p>
<h2> 事务</h2>
<h3> 命令</h3>
<p><code>MULTI</code>：开启事务</p>
<p><code>EXEC</code>：执行事务</p>
<p><code>DISCARD</code>：取消事务（只是清空暂存的命令队列，不能起到回滚的作用）</p>
<h3> 异常处理</h3>
<h4> 组队时错误</h4>
<p>如下，我们在组队时输入错误的指令，redis会之间将所有指令都会失效，因为这是一个问题队列。</p>`,r:{minutes:2.02,words:607},title:"原子性保证"},["/cs/database/redis/practice/problem/atomic","/cs/database/redis/practice/problem/atomic.md"]],["v-3f5d7d5a","/cs/database/redis/practice/problem/cache-preheat.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 冷启动问题：缓存预热</h1>
<h3> 问题分析</h3>
<p>冷启动：服务刚刚启动时，Redis 中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p>
<p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到 Redis 中。</p>
<p>缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：</p>`,r:{minutes:3.28,words:983},title:"冷启动问题：缓存预热"},["/cs/database/redis/practice/problem/cache-preheat","/cs/database/redis/practice/problem/cache-preheat.md"]],["v-df376572","/cs/database/redis/practice/problem/cache-problem.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 缓存问题：穿透、击穿、雪崩</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png" alt="图片" loading="lazy"></p>
<h2> 缓存穿透</h2>
<p>Pass Through</p>
<h3> 概念</h3>
<p>客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。</p>
<h3> 被动方案</h3>
<ul>
<li>
<p>缓存空对象</p>
<ul>
<li>优点：实现简单，维护方便</li>
<li>缺点：
<ul>
<li>额外的内存消耗（不过可以通过 TTL 来缓解）</li>
<li>可能造成短期的不一致</li>
</ul>
</li>
</ul>
</li>
<li>
<p>布隆过滤</p>
<ul>
<li>
<p>优点：内存占用比较少，没有多余 key</p>
</li>
<li>
<p>缺点：</p>
<ul>
<li>
<p>实现复杂（hash + bitmap + 概率实现的）</p>
</li>
<li>
<p>存在误判可能</p>
<p>说不存在一定不存在，但是说存在的时候也有一定概率是不存在的</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:4.78,words:1434},title:"缓存问题：穿透、击穿、雪崩"},["/cs/database/redis/practice/problem/cache-problem","/cs/database/redis/practice/problem/cache-problem.md"]],["v-72755b99","/cs/database/redis/practice/problem/consistency-update-strategy.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 一致性问题：缓存更新策略</h1>
<h2> 概览</h2>
<table>
<thead>
<tr>
<th></th>
<th>内存淘汰</th>
<th>超时剔除</th>
<th>主动更新</th>
</tr>
</thead>
<tbody>
<tr>
<td>说明</td>
<td>不用自己维护，利用 Redis 内存淘汰机制，当内存不足时自动淘汰部分数据。下次查询时更新缓存。</td>
<td>给缓存数据添加 TTL 时间，到期后自动删除缓存。下次查询时更新缓存。</td>
<td>编写业务逻辑，再修改数据库的同时，更新缓存</td>
</tr>
<tr>
<td>一致性</td>
<td>差</td>
<td>一般</td>
<td>好</td>
</tr>
<tr>
<td>维护成本</td>
<td>无</td>
<td>低</td>
<td>高</td>
</tr>
</tbody>
</table>`,r:{minutes:3.36,words:1009},title:"一致性问题：缓存更新策略"},["/cs/database/redis/practice/problem/consistency-update-strategy","/cs/database/redis/practice/problem/consistency-update-strategy.md"]],["v-abcd1588","/cs/database/redis/principal/data-structure/",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> Redis 数据结构</h1>
<p>Redis 是 key-value 的数据库，key 一般是 String 类型，不过 value 的类型多种多样：</p>
<h3> 基本类型</h3>
<ul>
<li>
<p>String</p>
</li>
<li>
<p>Hash</p>
</li>
<li>
<p>List</p>
<p>底层是链表</p>
</li>
<li>
<p>Set</p>
</li>
<li>
<p>Sorted Set（即 ZSet）</p>
</li>
</ul>
<h3> 特殊类型</h3>
<ul>
<li>GEO</li>
<li>BitMap</li>
<li>HyperLog</li>
</ul>`,r:{minutes:.18,words:54},title:"Redis 数据结构"},["/cs/database/redis/principal/data-structure/index.html","/cs/database/redis/principal/data-structure/README.md"]],["v-0d277b0b","/cs/database/redis/principal/data-structure/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 基本类型</h1>
<p>基本类型与底层数据结构对应关系如下图所示：</p>
<p><img src="https://cdn.xiaolincoding.com//mysql/other/9fa26a74965efbf0f56b707a03bb9b7f.png" alt="img" loading="lazy"></p>
<p>五种</p>
<h2> String</h2>
<p>String 是最基本的 key-value 结构，key 是唯一标识，value 是具体的值，value 其实不仅是字符串， 也可以是数字（整数或浮点数），value 最多可以容纳的数据长度是 <code>512M</code>。</p>`,r:{minutes:4.06,words:1218},title:"基本类型"},["/cs/database/redis/principal/data-structure/基本类型.html","/cs/database/redis/principal/data-structure/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B","/cs/database/redis/principal/data-structure/基本类型.md","/cs/database/redis/principal/data-structure/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.md"]],["v-62b1adbc","/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 数据结构</h1>
<h2> SDS</h2>
<p>SDS 动态字符串，字符串是 Redis 中最常用的一种数据结构。Redis 中保存的 Key 是字符串，value 往往是字符串或者字符串的集合。</p>
<h3> String 缺点</h3>
<p>Redis 没有直接使用 C 语言中的 String，因为 C 语言字符串存在很多问题：</p>
<ul>
<li>获取字符串长度的需要通过遍历，On</li>
<li>非二进制安全（用特殊标识标志结束<code>\\0</code>），如果内容有<code>\\0</code>会导致提早结束</li>
<li>不可修改（本质是定长字符数组，不会动态扩容），可能发生缓冲区溢出</li>
</ul>`,r:{minutes:13.45,words:4034},title:"数据结构"},["/cs/database/redis/principal/data-structure/数据结构.html","/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84","/cs/database/redis/principal/data-structure/数据结构.md","/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],["v-110262e4","/cs/database/redis/principal/data-structure/%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 特殊类型</h1>
<h2> Bitmap</h2>
<p>底层String 类型是会保存为二进制的字节数组</p>
<h3> 介绍</h3>
<p>Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。</p>
<p>你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。</p>
<h3> 命令</h3>
<ul>
<li><code>SETBIT</code></li>
<li><code>GETBIT</code></li>
<li><code>BITCOUNT</code></li>
<li><code>BITOP</code></li>
<li><code>BITPOS</code></li>
</ul>`,r:{minutes:5.55,words:1666},title:"特殊类型"},["/cs/database/redis/principal/data-structure/特殊类型.html","/cs/database/redis/principal/data-structure/%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B","/cs/database/redis/principal/data-structure/特殊类型.md","/cs/database/redis/principal/data-structure/%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B.md"]],["v-0faf468c","/cs/database/redis/principal/memory-model/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.html",{y:"a",d:"2023-03-05T13:59:03.000Z",e:`<h1> 内存淘汰策略</h1>
<p>在主线程进行的</p>
<p>前面说的过期删除策略，是删除已过期的 key，而当 Redis 的运行内存已经超过 Redis 设置的最大内存之后，则会使用内存淘汰策略删除符合条件的 key，以此来保障 Redis 高效的运行。</p>
<h3> 设置最大内存</h3>
<p>在配置文件 redis.conf 中，可以通过参数 <code>maxmemory &lt;bytes&gt;</code> 来设定最大运行内存，只有在 Redis 的运行内存达到了我们设置的最大运行内存，才会触发内存淘汰策略。 不同位数的操作系统，maxmemory 的默认值是不同的：</p>`,r:{minutes:4.28,words:1284},title:"内存淘汰策略"},["/cs/database/redis/principal/memory-model/内存淘汰策略.html","/cs/database/redis/principal/memory-model/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5","/cs/database/redis/principal/memory-model/内存淘汰策略.md","/cs/database/redis/principal/memory-model/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.md"]],["v-0befbfde","/cs/database/redis/principal/memory-model/%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E7%AD%96%E7%95%A5.html",{y:"a",d:"2023-03-05T13:59:03.000Z",e:`<h1> 过期删除策略</h1>
<p>在主线程进行的，Redis4.0以后如果是删除大key会到辅助的线程中异步删除。</p>
<h3> 设置过期时间</h3>
<p>先说一下对 key 设置过期时间的命令。 设置 key 过期时间的命令一共有 4 个：</p>
<ul>
<li><code>expire &lt;key&gt; &lt;n&gt;</code>：设置 key 在 n 秒后过期，比如 expire key 100 表示设置 key 在 100 秒后过期；</li>
<li><code>pexpire &lt;key&gt; &lt;n&gt;</code>：设置 key 在 n 毫秒后过期，比如 pexpire key2 100000 表示设置 key2 在 100000 毫秒（100 秒）后过期。</li>
<li><code>expireat &lt;key&gt; &lt;n&gt;</code>：设置 key 在某个时间戳（精确到秒）之后过期，比如 expireat key3 1655654400 表示 key3 在时间戳 1655654400 后过期（精确到秒）；</li>
<li><code>pexpireat &lt;key&gt; &lt;n&gt;</code>：设置 key 在某个时间戳（精确到毫秒）之后过期，比如 pexpireat key4 1655654400000 表示 key4 在时间戳 1655654400000 后过期（精确到毫秒）</li>
</ul>`,r:{minutes:5.14,words:1543},title:"过期删除策略"},["/cs/database/redis/principal/memory-model/过期删除策略.html","/cs/database/redis/principal/memory-model/%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E7%AD%96%E7%95%A5","/cs/database/redis/principal/memory-model/过期删除策略.md","/cs/database/redis/principal/memory-model/%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E7%AD%96%E7%95%A5.md"]],["v-1668525e","/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 线程模型</h1>
<h3> Redis 是单线程吗？</h3>
<p><strong>Redis 单线程指的是「接收客户端请求-&gt;解析请求 -&gt;进行数据读写等操作-&gt;发送数据给客户端」这个过程是由一个线程（主线程）来完成的</strong>，这也是我们常说 Redis 是单线程的原因。</p>
<p>但是，<strong>Redis 程序并不是单线程的</strong>，Redis 在启动的时候，是会<strong>启动后台线程</strong>（BIO）的：（Background IO）</p>
<ul>
<li><strong>Redis 在 2.6 版本</strong>，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务；</li>
<li><strong>Redis 在 4.0 版本之后</strong>，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程。例如执行 unlink key / flushdb async / flushall async 等命令，会把这些删除操作交给后台线程来执行，好处是不会导致 Redis 主线程卡顿。因此，当我们要删除一个大 key 的时候，不要使用 del 命令删除，因为 del 是在主线程处理的，这样会导致 Redis 主线程卡顿，因此我们应该使用 unlink 命令来异步删除大key。</li>
</ul>`,r:{minutes:6.91,words:2072},title:"线程模型"},["/cs/database/redis/principal/thread- model/线程模型.html","/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B","/cs/database/redis/principal/thread- model/线程模型.md","/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.md"]],["v-23892914","/se/framework/spring/core/aop/%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 应用场景</h1>
<p>aop 称为是面向切面编程，而他的 aop 原理呢就是：在执行某些代码之前执行另外的代码，是程序变的灵活，扩展性更灵活，可以随意的删除和添加某些功能！</p>
<p>一，性能统计／计数</p>
<p>将与业务无关的代码，使用 AOP 拦截他们。</p>
<p>二，事务处理</p>
<p>调用方法前开启事务， 调用方法后提交关闭事务</p>
<p>三，缓存处理</p>
<p>简单的＂方法缓存＂可以把＂方法名－参数＂作为 Key，拦截器拦截方法根据＂方法名－参数＂去缓存系统查询，如果存在就直接返回，不需要执行方法真正的逻辑～</p>
<p>四，日志打印</p>
`,r:{minutes:1.36,words:407},title:"应用场景"},["/se/framework/spring/core/aop/应用场景.html","/se/framework/spring/core/aop/%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF","/se/framework/spring/core/aop/应用场景.md","/se/framework/spring/core/aop/%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.md"]],["v-3678f3e0","/se/framework/spring/core/aop/%E6%A6%82%E5%BF%B5.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 概念</h1>
<h3> 什么是 AOP</h3>
<p>AOP：Aspect oriented programming 面向切面编程，AOP 是 OOP（面向对象编程）的一种延续。</p>
<p>下面我们先看一个 OOP 的例子。</p>
<p>OOP 编程思想可以解决大部分的代码重复问题。但是有一些问题是处理不了的。比如在父类 Animal 中的多个方法的相同位置出现了重复的代码，OOP 就解决不了。</p>
<h3> AOP 解决了什么问题</h3>
<p>通过上面的分析可以发现，AOP 主要用来解决：在不改变原有业务逻辑的情况下，增强横切逻辑代码，根本上解耦合，避免横切逻辑代码重复。</p>`,r:{minutes:3.05,words:914},title:"概念"},["/se/framework/spring/core/aop/概念.html","/se/framework/spring/core/aop/%E6%A6%82%E5%BF%B5","/se/framework/spring/core/aop/概念.md","/se/framework/spring/core/aop/%E6%A6%82%E5%BF%B5.md"]],["v-ff34970a","/se/framework/spring/core/aop/%E7%94%A8%E6%B3%95.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 用法</h1>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">execution</span><span class="token punctuation">(</span>方法表达式<span class="token punctuation">)</span>
<span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> cn<span class="token punctuation">.</span>sunpiaoliang<span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token punctuation">.</span>*<span class="token punctuation">.</span>*<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
cn<span class="token punctuation">.</span>sunpiaoliang<span class="token punctuation">.</span>service 这个路径下的包或子包所有方法和所有类型的参数 返回值为任何类型
<span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">"execution(void com.itheima.dao.BookDao.update())"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.24,words:371},title:"用法"},["/se/framework/spring/core/aop/用法.html","/se/framework/spring/core/aop/%E7%94%A8%E6%B3%95","/se/framework/spring/core/aop/用法.md","/se/framework/spring/core/aop/%E7%94%A8%E6%B3%95.md"]],["v-5f46ee29","/se/framework/spring/core/beans/%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 后处理器</h1>
<p>Spring 的后处理器是 Spring 对外开发的重要扩展点，允许我们介入到 Bean 的整个实例化流程中来，以达到动态注册 BeanDefinition,动态修改 BeanDefinition,以及动态修改 Bean 的作用。Spring 主要有两种后处理器：</p>
<ul>
<li>BeanFactoryPostProcessor：Bean 工厂后处理器，在 BeanDefinitionMap 填充完毕，Bean 实例化之前执行：</li>
<li>BeanPostProcessor：Bean 后处理器，一般在 Bean 实例化之后，填充到单例池 singletonObjects 之前执行。</li>
</ul>`,r:{minutes:.78,words:235},title:"后处理器"},["/se/framework/spring/core/beans/后处理器.html","/se/framework/spring/core/beans/%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8","/se/framework/spring/core/beans/后处理器.md","/se/framework/spring/core/beans/%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8.md"]],["v-2a5deb4c","/se/framework/spring/core/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Bean</h1>
<h2> 生命周期</h2>
<ul>
<li>Bean 容器找到配置文件中 Spring Bean 的定义。（加载 BeanDefination）</li>
<li>Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。</li>
<li>如果涉及到一些属性值 利用 <code>set()</code>方法设置一些属性值。</li>
<li>如果 Bean 实现了 <code>BeanNameAware</code> 接口，调用 <code>setBeanName()</code>方法，传入 Bean 的名字。</li>
<li>如果 Bean 实现了 <code>BeanClassLoaderAware</code> 接口，调用 <code>setBeanClassLoader()</code>方法，传入 <code>ClassLoader</code>对象的实例。</li>
<li>如果 Bean 实现了 <code>BeanFactoryAware</code> 接口，调用 <code>setBeanFactory()</code>方法，传入 <code>BeanFactory</code>对象的实例。</li>
<li>与上面的类似，如果实现了其他 <code>*.Aware</code>接口，就调用相应的方法。</li>
<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code>BeanPostProcessor</code> 对象，执行<code>postProcessBeforeInitialization()</code> 方法</li>
<li>如果 Bean 实现了<code>InitializingBean</code>接口，执行<code>afterPropertiesSet()</code>方法。</li>
<li>如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。</li>
<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code>BeanPostProcessor</code> 对象，执行<code>postProcessAfterInitialization()</code> 方法</li>
<li>当要销毁 Bean 的时候，如果 Bean 实现了 <code>DisposableBean</code> 接口，执行 <code>destroy()</code> 方法。</li>
<li>当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。</li>
</ul>`,r:{minutes:1.65,words:496},title:"Bean"},["/se/framework/spring/core/beans/基本概念.html","/se/framework/spring/core/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5","/se/framework/spring/core/beans/基本概念.md","/se/framework/spring/core/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md"]],["v-31055127","/se/framework/spring/core/beans/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h2> 循环依赖</h2>
<p>Spring 通过三级缓存解决循环依赖问题，具体过程如下：</p>
<ol>
<li>
<p>创建对象：当 Spring 容器创建一个对象时，会将该对象放入一级缓存中。</p>
</li>
<li>
<p>属性注入：当 Spring 容器对该对象进行属性注入时，如果发现该对象依赖于另一个对象，会先创建另一个对象并放入一级缓存中，然后将该对象放入二级缓存中。</p>
</li>
<li>
<p>循环依赖：如果发现另一个对象也依赖于该对象，会从二级缓存中获取该对象并注入到另一个对象中，然后将另一个对象放入二级缓存中。</p>
</li>
<li>
<p>初始化：当所有对象的属性都注入完成后，会按照依赖关系依次初始化对象，并将对象放入三级缓存中。</p>
</li>
<li>
<p>返回对象：当所有对象都初始化完成后，会从三级缓存中获取需要返回的对象，并将三级缓存清空。</p>
</li>
</ol>`,r:{minutes:4.07,words:1220},title:""},["/se/framework/spring/core/beans/循环依赖.html","/se/framework/spring/core/beans/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96","/se/framework/spring/core/beans/循环依赖.md","/se/framework/spring/core/beans/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96.md"]],["v-75f558e2","/se/framework/spring/core/beans/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 生命周期</h1>
<h2> 三个阶段</h2>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-05 22.11.05.png" alt="截屏2023-04-05 22.11.05" loading="lazy"></p>
<p>Spring Bean 的生命周期是从 Bean 实例化之后，即通过反射创建出对象之后，到 Bean 成为一个完整对象，最终存储到单例池中，这个过程被称为 Spring Bean 的生命周期。Spring Bean 的生命周期大体上分为三个阶段：</p>`,r:{minutes:7.06,words:2118},title:"生命周期"},["/se/framework/spring/core/beans/生命周期.html","/se/framework/spring/core/beans/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F","/se/framework/spring/core/beans/生命周期.md","/se/framework/spring/core/beans/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md"]],["v-29eadb9e","/se/framework/spring/core/ioc/ioc.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> IoC</h1>
<h2> IoC 思想</h2>
<h3> Spring IoC 的了解</h3>
<p><strong>IoC（Inversion of Control:控制反转）</strong> 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。<strong>IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value）,Map 中存放的是各种对象。</strong></p>
<p>IoC 最常见以及最合理的实现方式叫做依赖注入（Dependency Injection，简称 DI）。</p>`,r:{minutes:7.05,words:2115},title:"IoC"},["/se/framework/spring/core/ioc/ioc","/se/framework/spring/core/ioc/ioc.md"]],["v-dbc33718","/se/framework/spring/core/tx/%E4%BA%8B%E5%8A%A1.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 事务</h1>
<h2> 事务传播</h2>
<p>Spring事务传播机制是指在多个事务方法相互调用时，如何处理事务的传播和隔离。Spring提供了多种事务传播机制，包括REQUIRED、SUPPORTS、MANDATORY、REQUIRES_NEW、NOT_SUPPORTED、NEVER和NESTED等。以下是各种事务传播机制的具体实现：</p>
<ol>
<li>
<p>REQUIRED：如果当前存在事务，则加入该事务；如果当前不存在事务，则创建一个新的事务。</p>
</li>
<li>
<p>SUPPORTS：如果当前存在事务，则加入该事务；如果当前不存在事务，则以非事务方式执行。</p>
</li>
<li>
<p>MANDATORY：如果当前存在事务，则加入该事务；如果当前不存在事务，则抛出异常。</p>
</li>
<li>
<p>REQUIRES_NEW：创建一个新的事务，并挂起当前事务（如果存在）。</p>
</li>
<li>
<p>NOT_SUPPORTED：以非事务方式执行，并挂起当前事务（如果存在）。</p>
</li>
<li>
<p>NEVER：以非事务方式执行，并抛出异常（如果当前存在事务）。</p>
</li>
<li>
<p>NESTED：如果当前存在事务，则在该事务中嵌套一个新的事务；如果当前不存在事务，则创建一个新的事务。</p>
</li>
</ol>`,r:{minutes:1.53,words:458},title:"事务"},["/se/framework/spring/core/tx/事务.html","/se/framework/spring/core/tx/%E4%BA%8B%E5%8A%A1","/se/framework/spring/core/tx/事务.md","/se/framework/spring/core/tx/%E4%BA%8B%E5%8A%A1.md"]],["v-136d231a","/se/lang/java/JUC/async/forkjoin.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 分支合并框架</h1>
`,r:{minutes:.02,words:6},title:"分支合并框架"},["/se/lang/java/JUC/async/forkjoin","/se/lang/java/JUC/async/forkjoin.md"]],["v-7101117c","/se/lang/java/JUC/async/future.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> 异步编程</h1>
<h2> Future</h2>
<h3> 同步与异步的概念</h3>
<ul>
<li><strong>同步</strong> ： 发出一个调用之后，在没有得到结果之前， 该调用就不可以返回，一直等待。</li>
<li><strong>异步</strong> ：调用在发出之后，不用等待返回结果，该调用直接返回。</li>
</ul>
<h3> 阻塞与非阻塞的概念</h3>
<p>阻塞和非阻塞指的是：当前接口数据还未准备就绪时，线程是否被阻塞挂起。</p>
<p>何为阻塞挂起？就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间片还未到就让出 CPU。</p>`,r:{minutes:2.37,words:712},title:"异步编程"},["/se/lang/java/JUC/async/future","/se/lang/java/JUC/async/future.md"]],["v-18234947","/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E9%94%81.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 乐观锁</h1>
<p>代表：AtomicInteger，使用 cas（Unsafe）来保证原子性</p>
<ul>
<li>核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功</li>
<li>由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换</li>
<li>它需要多核 cpu 支持，且核心数不应超过 cpu 核数</li>
</ul>
<p>缺点：</p>
<ul>
<li>只能保证一个变量的原子操作</li>
<li>解决：AtomicReference</li>
</ul>
<p>1、乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读取新值修改后重试更新。（自旋锁就是一种乐观锁）</p>`,r:{minutes:2.65,words:795},title:"乐观锁"},["/se/lang/java/JUC/lock/乐观锁.html","/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E9%94%81","/se/lang/java/JUC/lock/乐观锁.md","/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E9%94%81.md"]],["v-5517b052","/se/lang/java/JUC/lock/%E5%AF%B9%E6%AF%94.html",{y:"a",d:"2023-02-03T07:46:32.000Z",e:`<h1> 锁的对比</h1>
<h2> 乐观锁 vs 悲观锁</h2>
<p>悲观锁：每次操作前都加锁</p>
<p>乐观锁：CAS 或版本号机制</p>
<p>一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会</p>
<p><strong>悲观锁通常多用于写比较多的情况下（多写场景），避免频繁失败和重试影响性能。</strong></p>
<p><strong>乐观锁通常多于写比较少的情况下（多读场景），避免频繁加锁影响性能，大大提升了系统的吞吐量。</strong></p>
<h2> Lock vs sychronized</h2>
<h3> 语法层面</h3>
<ul>
<li>synchronized 是关键字，源码在 jvm 中，用 c++实现</li>
<li>Lock 是接口，源码由 jdk 提供，用 java 语言实现</li>
<li>使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁</li>
</ul>`,r:{minutes:2.84,words:851},title:"锁的对比"},["/se/lang/java/JUC/lock/对比.html","/se/lang/java/JUC/lock/%E5%AF%B9%E6%AF%94","/se/lang/java/JUC/lock/对比.md","/se/lang/java/JUC/lock/%E5%AF%B9%E6%AF%94.md"]],["v-845e9762","/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 悲观锁</h1>
<p>代表：synchronized 和 Lock</p>
<ul>
<li>核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待</li>
<li>线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能</li>
<li>实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会</li>
</ul>
<h2> synchronized</h2>
<p>是可重入锁。</p>
<p><code>synchronized</code> 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。</p>`,r:{minutes:12.37,words:3710},title:"悲观锁"},["/se/lang/java/JUC/lock/悲观锁.html","/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81","/se/lang/java/JUC/lock/悲观锁.md","/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81.md"]],["v-7f0bc75b","/se/lang/java/JUC/safe/",{y:"a",d:"2023-02-03T07:46:32.000Z",e:`<h1> 线程安全</h1>
<h2> 并发编程三要素</h2>
<ul>
<li>可见性，一个线程对共享变量修改，另外的线程能立即看到最新值。</li>
<li>有序性，一个线程内代码按编写顺序执行（多线程下不能）由于指令重排序问题，代码的执行顺序未必就是编写代码时候的顺序。</li>
<li>原子性，一个线程内多行代码以一个整体运行，期间不难有其他线程的代码插队</li>
</ul>
<h3> <strong>原子性</strong></h3>
<ul>
<li>起因：多线程下，不同线程的<strong>指令发生了交错</strong>导致的共享变量的读写混乱</li>
<li>解决：用悲观锁或乐观锁解决，volatile 并不能解决原子性</li>
</ul>`,r:{minutes:1.81,words:544},title:"线程安全"},["/se/lang/java/JUC/safe/index.html","/se/lang/java/JUC/safe/README.md"]],["v-70a587ea","/se/lang/java/JUC/safe/jmm.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> JMM</h1>
<p>JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。</p>
<h3> JMM 是如何抽象线程和主内存之间的关系？</h3>
<p><strong>Java 内存模型（JMM）</strong> 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。</p>
<p>在 JDK1.2 之前，Java 的内存模型实现总是从 <strong>主存</strong> （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 <strong>本地内存</strong> （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。</p>`,r:{minutes:4.97,words:1491},title:"JMM"},["/se/lang/java/JUC/safe/jmm","/se/lang/java/JUC/safe/jmm.md"]],["v-a49aad7c","/se/lang/java/JUC/safe/volatile.html",{y:"a",d:"2023-02-27T13:30:02.000Z",e:`<h1> volatile</h1>
<h2> 可见性</h2>
<p>在 Java 中，<code>volatile</code> 关键字可以保证变量的可见性，如果我们将变量声明为 <strong><code>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。</p>
<p>当一个变量被声明为<code>volatile</code>时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。</p>
<h3> 过程</h3>
<ol>
<li>线程 A 将工作内存的 data 更改后，强制将 data 值刷回主内存</li>
<li>如果线程 B 的工作内存中有 data 变量的缓存时，会强制让这个 data 变量缓存失效</li>
<li>当线程 B 需要读取 data 变量的值时，先从工作内存中读，发现已经过期，就会从主内存中加载 data 变量的最新值了</li>
</ol>`,r:{minutes:1.56,words:469},title:"volatile"},["/se/lang/java/JUC/safe/volatile","/se/lang/java/JUC/safe/volatile.md"]],["v-4f4311a3","/se/lang/java/JUC/sync/AQS.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> AQS</h1>
<h2> 底层原理</h2>
<h3> AQS 核心思想</h3>
<ul>
<li>如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。</li>
<li>如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制 AQS 是基于 <strong>CLH 锁</strong> （Craig, Landin, and Hagersten locks） 实现的。</li>
</ul>
<h3> CLH 锁</h3>
<p>CLH 锁是对自旋锁的一种改进，解决了自旋锁的两个缺点改进如下：</p>`,r:{minutes:2.64,words:792},title:"AQS"},["/se/lang/java/JUC/sync/AQS","/se/lang/java/JUC/sync/AQS.md"]],["v-02071af9","/se/lang/java/JUC/sync/CountDownLatch.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> CountDownLatch</h1>
<p>减小计数，构造方法设置初始值，然后可以使用 countDown 方法使计数器每次减一</p>
<p>await 方法，在不为 0 时，阻塞线程，等到计数器变成 0 时唤醒线程，继续执行</p>
<p>方法</p>
<ul>
<li>countDown，使计数器每次减一（调用这个方法的线程不会阻塞）</li>
<li>await，在不为 0 时，阻塞线程，等到变成 0 时唤醒线程，继续执行</li>
</ul>
<h2> 例子</h2>
<h3> 生活场景</h3>
<p>6 个同学陆续离开教师后，班长才可以锁门</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 6个同学陆续离开教师后，班长才可以锁门</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">CountDownLatch</span> latch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"号同学离开了教室"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 计数器减一</span>
            latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 等待</span>
    latch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"班长锁门了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.9,words:271},title:"CountDownLatch"},["/se/lang/java/JUC/sync/CountDownLatch","/se/lang/java/JUC/sync/CountDownLatch.md"]],["v-83e03870","/se/lang/java/JUC/sync/CyclicBarrier.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> CyclicBarrier</h1>
<h2> 概念</h2>
<p>循环栅栏</p>
<h3> 作用</h3>
<p><code>CyclicBarrier</code> 的字面意思是可循环使用（Cyclic）的屏障（Barrier）。它要做的事情是：让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。</p>
<h3> 方法</h3>
<p>构造方法中，传入“目标障碍数”，达到目标障碍数后执行的线程</p>
<p>await 方法，可以理解为加 1 操作，同时阻塞该线程</p>
<h2> 例子</h2>
<p>集齐 7 颗龙珠就可以召唤神龙</p>`,r:{minutes:.73,words:219},title:"CyclicBarrier"},["/se/lang/java/JUC/sync/CyclicBarrier","/se/lang/java/JUC/sync/CyclicBarrier.md"]],["v-2b6c26fc","/se/lang/java/JUC/sync/Semaphore.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> Semaphore</h1>
<p>信号量</p>
<h2> 方法</h2>
<ul>
<li>acquire，抢占一个资源</li>
<li>release，释放以后，别的阻塞进程被唤醒来抢这个资源</li>
</ul>
<h2> 例子</h2>
<p>6 辆汽车，停 3 个车位</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Semaphore</span> semaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 抢占车位</span>
                semaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"号车抢到车位"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 随机停车时间</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"号车----离开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                semaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.37,words:112},title:"Semaphore"},["/se/lang/java/JUC/sync/Semaphore","/se/lang/java/JUC/sync/Semaphore.md"]],["v-d2b5ffd4","/se/lang/java/JUC/thread/threadlocal.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> ThreadLocal</h1>
<p>解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。</p>
<p>作用：</p>
<ul>
<li>实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题</li>
<li>实现了线程内的资源共享</li>
</ul>
<p>局部变量：可以线程隔离，但是不能跨方法。Thread Local主要解决的就是这个跨方法的问题</p>
<h2> 线程关联的原理</h2>
<p>ThreadLocal 并不是一个独立的存在, 它与 Thread 类是存在耦合的, java.lang.Thread 类针对 ThreadLocal 提供了如下支持：</p>`,r:{minutes:5.39,words:1618},title:"ThreadLocal"},["/se/lang/java/JUC/thread/threadlocal","/se/lang/java/JUC/thread/threadlocal.md"]],["v-4f81662d","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 线程</h1>
<h2> 线程的概念</h2>
<h3> 线程与进程的比较</h3>
<p>线程与进程的比较如下：</p>
<ul>
<li>进程是资源（包括内存、打开的文件等）分配的单位，线程是 CPU 调度的单位；</li>
<li>进程拥有一个完整的资源平台，而线程只独享必不可少的资源，如寄存器和栈；</li>
<li>线程同样具有就绪、阻塞、执行三种基本状态，同样具有状态之间的转换关系；</li>
<li>线程能减少并发执行的时间和空间开销；</li>
</ul>
<p>对于，线程相比进程能减少开销，体现在：</p>
<ul>
<li>线程的创建时间比进程快，因为进程在创建的过程中，还需要资源管理信息，比如内存管理信息、文件管理信息，而线程在创建的过程中，不会涉及这些资源管理信息，而是共享它们；</li>
<li>线程的终止时间比进程快，因为线程释放的资源相比进程少很多；</li>
<li>同一个进程内的线程切换比进程切换快，因为线程具有相同的地址空间（虚拟内存共享），这意味着同一个进程的线程都具有同一个页表，那么在切换的时候不需要切换页表。而对于进程之间的切换，切换的时候要把页表给切换掉，而页表的切换过程开销是比较大的；</li>
<li>由于同一进程的各线程间共享内存和文件资源，那么在线程之间数据传递的时候，就不需要经过内核了，这就使得线程之间的数据交互效率更高了；</li>
</ul>`,r:{minutes:7.91,words:2372},title:"线程"},["/se/lang/java/JUC/thread/线程.html","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B","/se/lang/java/JUC/thread/线程.md","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B.md"]],["v-e189f522","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E6%B1%A0.html",{y:"a",d:"2023-03-23T13:33:44.000Z",e:`<h1> 线程池</h1>
<p><a href="https://blog.csdn.net/ch98000/article/details/126727000" target="_blank" rel="noopener noreferrer">Java线程池进阶_服务重启线程池如何保证不丢失任务_一头狒狒的博客-CSDN博客</a></p>
<h2> 好处</h2>
<p>池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。</p>
<p><strong>线程池</strong>提供了一种限制和管理资源（包括执行一个任务）的方式。 每个<strong>线程池</strong>还维护一些基本统计信息，例如已完成任务的数量。</p>`,r:{minutes:18.2,words:5460},title:"线程池"},["/se/lang/java/JUC/thread/线程池.html","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E6%B1%A0","/se/lang/java/JUC/thread/线程池.md","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E6%B1%A0.md"]],["v-4fda0a50","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81.html",{y:"a",d:"2023-04-03T03:29:06.000Z",e:`<h1> 线程状态</h1>
<h2> 状态转换图</h2>
<h3> JAVA 六种状态</h3>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 22.49.41.png" alt="截屏2023-02-01 22.49.41" loading="lazy"></p>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png" alt="Java 线程状态变迁图" loading="lazy"></p>`,r:{minutes:3.99,words:1198},title:"线程状态"},["/se/lang/java/JUC/thread/线程状态.html","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81","/se/lang/java/JUC/thread/线程状态.md","/se/lang/java/JUC/thread/%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81.md"]],["v-dcc7ce0c","/se/lang/java/basic/class/%E5%86%85%E9%83%A8%E7%B1%BB.html",{y:"a",d:"2023-01-12T03:47:01.000Z",e:`<h1> 内部类</h1>
<p>必要性：</p>
<p>每一个内部类都可以继承一个类，或者实现若干个接口，从而达到多继承的目的</p>
<h2> 匿名内部类</h2>
<p>无自己的构造方法，但是可以有初始化块</p>
<p>常用于：</p>
<ol>
<li>
<p>一个final的HashMap初始化，可以直接一条语句写完很方便。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">START</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">START</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SIGNED</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SIGNED</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>拓展PriorityQueue功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlogn, O1），普通的int[]还是直接Arrays.sort即可，这个没法实现，哎，因为是private</p>
<p>常用于一个二维int按某一位比较，如：xx，实现不了，看来堆排序只能手撕了，不需要堆排的时候老老实实Arrays.sort吧</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values<span class="token punctuation">;</span>
<span class="token comment">// values = xxx;</span>
<span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
    queue <span class="token operator">=</span> values<span class="token punctuation">;</span>
    size <span class="token operator">=</span> values<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ol>`,r:{minutes:.92,words:275},title:"内部类"},["/se/lang/java/basic/class/内部类.html","/se/lang/java/basic/class/%E5%86%85%E9%83%A8%E7%B1%BB","/se/lang/java/basic/class/内部类.md","/se/lang/java/basic/class/%E5%86%85%E9%83%A8%E7%B1%BB.md"]],["v-917eeb5c","/se/lang/java/basic/class/%E5%B7%A5%E5%85%B7%E7%B1%BB.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 常用工具类</h1>
<ul>
<li>Objects</li>
<li>Arrays</li>
<li>Collections</li>
</ul>
`,r:{minutes:.03,words:8},title:"常用工具类"},["/se/lang/java/basic/class/工具类.html","/se/lang/java/basic/class/%E5%B7%A5%E5%85%B7%E7%B1%BB","/se/lang/java/basic/class/工具类.md","/se/lang/java/basic/class/%E5%B7%A5%E5%85%B7%E7%B1%BB.md"]],["v-67db80ff","/se/lang/java/basic/class/%E5%B8%B8%E8%A7%81%E7%B1%BB.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 常见类</h1>
<h2> Object</h2>
<h3> Object 方法</h3>
<p>全部方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * naitive 方法，用于创建并返回当前对象的一份拷贝。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span>
<span class="token doc-comment comment">/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 实例被垃圾回收器回收的时候触发的操作
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.11,words:2434},title:"常见类"},["/se/lang/java/basic/class/常见类.html","/se/lang/java/basic/class/%E5%B8%B8%E8%A7%81%E7%B1%BB","/se/lang/java/basic/class/常见类.md","/se/lang/java/basic/class/%E5%B8%B8%E8%A7%81%E7%B1%BB.md"]],["v-57aa1d68","/se/lang/java/basic/class/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 面向对象</h1>
<h3> 三大特征</h3>
<h4> 封装</h4>
<h4> 继承</h4>
<p><strong>关于继承如下 3 点请记住：</strong></p>
<ol>
<li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，<strong>只是拥有</strong>。</li>
<li>子类可以拥有自己属性和方法，即子类可以对父类进行扩展。</li>
<li>子类可以用自己的方式实现父类的方法。（以后介绍）。</li>
</ol>
<h4> 多态</h4>
<p>多态，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。</p>`,r:{minutes:1.74,words:522},title:"面向对象"},["/se/lang/java/basic/class/面向对象.html","/se/lang/java/basic/class/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1","/se/lang/java/basic/class/面向对象.md","/se/lang/java/basic/class/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md"]],["v-b610beba","/se/lang/java/basic/type/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html",{y:"a",d:"2023-03-20T14:10:49.000Z",e:`<h1> 基本类型</h1>
<p>Java 中有 8 种基本数据类型，分别为：</p>
<ul>
<li>6 种数字类型：
<ul>
<li>4 种整数型：<code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code></li>
<li>2 种浮点型：<code>float</code>、<code>double</code></li>
</ul>
</li>
<li>1 种字符类型：<code>char</code></li>
<li>1 种布尔型：<code>boolean</code></li>
</ul>`,r:{minutes:.67,words:202},title:"基本类型"},["/se/lang/java/basic/type/基本类型.html","/se/lang/java/basic/type/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B","/se/lang/java/basic/type/基本类型.md","/se/lang/java/basic/type/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.md"]],["v-63ce032a","/se/lang/java/basic/type/%E6%95%B0%E7%BB%84.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 数组</h1>
<p>二维数组</p>
<p><a href="https://zhuanlan.zhihu.com/p/79723486" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/79723486</a></p>
`,r:{minutes:.03,words:10},title:"数组"},["/se/lang/java/basic/type/数组.html","/se/lang/java/basic/type/%E6%95%B0%E7%BB%84","/se/lang/java/basic/type/数组.md","/se/lang/java/basic/type/%E6%95%B0%E7%BB%84.md"]],["v-1df68cd2","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 内存区域</h1>
<h2> 线程独占</h2>
<h3> 程序计数器</h3>
<p>程序计数器( ProgramCounterRegister )是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里[1]，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。</p>
<h3> Java 虚拟机栈</h3>
<p>Java 虚拟机栈( JavaVirtualMachineStack )也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型:每个方法被执行的时候， Java 虚拟机都会同步创建一个栈帧<a href="StackFrame">1</a>用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。</p>`,r:{minutes:2.74,words:822},title:"内存区域"},["/se/lang/java/jvm/内存管理/内存区域.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F","/se/lang/java/jvm/内存管理/内存区域.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.md"]],["v-09e365e1","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 内存泄漏</h1>
<p>Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种：</p>
<ol>
<li>
<p>静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。</p>
</li>
<li>
<p>对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据库连接、文件流等资源，就会导致内存泄漏。</p>
</li>
<li>
<p>匿名内部类引起的内存泄漏：如果在匿名内部类中引用了外部类的对象，并且没有及时释放，就会导致内存泄漏。</p>
</li>
</ol>`,r:{minutes:7.77,words:2331},title:"内存泄漏"},["/se/lang/java/jvm/内存管理/内存泄漏.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F","/se/lang/java/jvm/内存管理/内存泄漏.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md"]],["v-63a3cb8f","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 垃圾回收算法</h1>
<h2> 分代收集理论</h2>
<ol>
<li>弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。</li>
<li>强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。</li>
<li>跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。</li>
</ol>
<p>这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则:收集器应该将 Java 堆划分 出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区 域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那 么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对 象，就能以较低代价回收到大量的空间;如果剩下的都是难以消亡的对象，那把它们集中放在一块， 虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有 效利用。</p>`,r:{minutes:8.69,words:2607},title:"垃圾回收算法"},["/se/lang/java/jvm/内存管理/垃圾回收算法.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95","/se/lang/java/jvm/内存管理/垃圾回收算法.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.md"]],["v-e441e7a2","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 垃圾收集器</h1>
<p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-31 18.47.04.png" alt="截屏2023-03-31 18.47.04" loading="lazy"></p>
<h2> Young Generation</h2>
<h3> Serial 收集器</h3>
<p>Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 <strong>“单线程”</strong> 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ <strong>"Stop The World"</strong> ），直到它收集结束。</p>`,r:{minutes:11.15,words:3346},title:"垃圾收集器"},["/se/lang/java/jvm/内存管理/垃圾收集器.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8","/se/lang/java/jvm/内存管理/垃圾收集器.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.md"]],["v-212567eb","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%AF%B9%E8%B1%A1%E6%AD%BB%E4%BA%A1%E5%88%A4%E5%AE%9A.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 对象死亡判定</h1>
<h2> 引用计数</h2>
<p>优点：</p>
<ul>
<li>原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。</li>
</ul>
<p>缺点：</p>
<ul>
<li>占用了一些额外的内存空间来进行计数</li>
<li>难以解决循环引用的问题；它们因为互相引用着对方，导致它们的引用计数都不为零，引用计数算法也 就无法回收它们。</li>
</ul>
<h2> 可达性分析</h2>
<p>这个算法的基本思路就是通过 一系列称为“GC Roots”的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过 程所走过的路径称为“引用链”(Reference Chain)，如果某个对象到 GC Roots 间没有任何引用链相连， 或者用图论的话来说就是从 GC Roots 到这个对象不可达时，则证明此对象是不可能再被使用的。</p>`,r:{minutes:6.13,words:1838},title:"对象死亡判定"},["/se/lang/java/jvm/内存管理/对象死亡判定.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%AF%B9%E8%B1%A1%E6%AD%BB%E4%BA%A1%E5%88%A4%E5%AE%9A","/se/lang/java/jvm/内存管理/对象死亡判定.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%AF%B9%E8%B1%A1%E6%AD%BB%E4%BA%A1%E5%88%A4%E5%AE%9A.md"]],["v-8abf6c9c","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B.html",{y:"a",d:"2023-05-17T10:10:52.000Z",e:`<h1> 引用类型</h1>
<h2> 强引用</h2>
<p>普通变量赋值即为强引用，如</p>
<p><code>A a = new A();</code></p>
<h3> 回收特点</h3>
<p>当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠回收具有强引用的对象，来解决内存不足的问题。通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收。</p>
<p>如果想中断或者回收强引用对象可以显式地将引用赋值为 null(a=null)，这样的话 JVM 就会在合适的时间，进行垃圾回收。</p>
<h2> 软引用</h2>`,r:{minutes:2.94,words:883},title:"引用类型"},["/se/lang/java/jvm/内存管理/引用类型.html","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B","/se/lang/java/jvm/内存管理/引用类型.md","/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B.md"]],["v-1e2d9eaa","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 类加载器</h1>
<p>从上面的介绍可以看出:</p>
<ul>
<li>类加载器是一个负责加载类的对象，用于实现类加载过程中的加载这一步。</li>
<li>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li>
<li>数组类不是通过 <code>ClassLoader</code> 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。</li>
</ul>
<p>类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些:比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。</p>`,r:{minutes:9.45,words:2835},title:"类加载器"},["/se/lang/java/jvm/类加载/类加载器.html","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8","/se/lang/java/jvm/类加载/类加载器.md","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.md"]],["v-97c49406","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%9C%BA.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 类加载时机</h1>
<p>一个类型从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期将会经历：</p>
<p>加载(Loading)、验证(Verification)、准备(Preparation)、解析(Resolution)、初始化(Initialization)、使用(Using)和卸载(Unloading)七个阶段，其中验证、准备、解析三个部分统称为连接(Linking)。</p>
<p>加载、验证、准备、初始化和卸载这五个阶段的顺序是确定的，类型的加载过程必须按 照这种顺序按部就班地开始，而解析阶段则不一定:它在某些情况下可以在初始化阶段之后再开始， 这是为了支持 Java 语言的运行时绑定特性(也称为动态绑定或晚期绑定)。请注意，这里笔者写的是 按部就班地“开始”，而不是按部就班地“进行”或按部就班地“完成”，强调这点是因为这些阶段通常都 是互相交叉地混合进行的，会在一个阶段执行的过程中调用、激活另一个阶段。</p>`,r:{minutes:2.83,words:850},title:"类加载时机"},["/se/lang/java/jvm/类加载/类加载时机.html","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%9C%BA","/se/lang/java/jvm/类加载/类加载时机.md","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%9C%BA.md"]],["v-52c50185","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.html",{y:"a",d:"2023-03-29T11:46:59.000Z",e:`<h1> 类加载过程</h1>
<h2> 加载</h2>
<p>“加载”(Loading)阶段是整个“类加载”(ClassLoading)过程中的一个阶段，希望读者没有混淆</p>
<p>这两个看起来很相似的名词。在加载阶段，Java虚拟机需要完成以下三件事情：</p>
<ol>
<li>
<p>通过一个类的全限定名来获取定义此类的二进制字节流。</p>
</li>
<li>
<p>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。</p>
</li>
<li>
<p>在内存中生成一个代表这个类的java.lang.Class对象，作为方法区这个类的各种数据的访问入口。</p>
</li>
</ol>`,r:{minutes:7.96,words:2388},title:"类加载过程"},["/se/lang/java/jvm/类加载/类加载过程.html","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B","/se/lang/java/jvm/类加载/类加载过程.md","/se/lang/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.md"]],["v-d0d15838","/standardized/GRE/VERBAL/Reading/dual-line/2.%20%E9%95%BF%E9%9A%BE%E5%8F%A5.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 长难句分析</h1>
<p>常用于：阅读第一句话、题目题干</p>
<p>拆解句子成分（长句打短），先理解每个小成分的语义</p>
<p>利用各成分之间的关系，将各成分组合在一起进行整体理解</p>
<p>句子成分拆解</p>
<p>主干、定语、状语、平行（并列）</p>
<h3> 主干</h3>
<h4> 谓语</h4>
<p>过去分词与谓语动词的区分</p>
<ol>
<li>v-ed过去分词与谓语动词的区分</li>
<li>主句谓语动词与从句谓语动词的区分</li>
<li>动词形容词化</li>
</ol>
<h3> 定义</h3>
<p>分词</p>
<p>定语从句-介词提前</p>`,r:{minutes:.94,words:283},title:"长难句分析"},["/standardized/GRE/VERBAL/Reading/dual-line/2. 长难句.html","/standardized/GRE/VERBAL/Reading/dual-line/2.%20%E9%95%BF%E9%9A%BE%E5%8F%A5","/standardized/GRE/VERBAL/Reading/dual-line/2. 长难句.md","/standardized/GRE/VERBAL/Reading/dual-line/2.%20%E9%95%BF%E9%9A%BE%E5%8F%A5.md"]],["v-ea34918a","/standardized/GRE/VERBAL/Reading/dual-line/3.%20%E5%8D%95%E5%8F%A5%E5%8A%9F%E8%83%BD%E5%88%A4%E6%96%AD%E6%96%B9%E6%B3%95%E8%AE%BA.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 单句功能判断方法论</h1>
<h2> 单句功能：视角</h2>
<p>“视角”重要性</p>
<ul>
<li>信息题的切入点</li>
<li>主旨题的考点</li>
<li>预判后文</li>
</ul>
<p>视角</p>
<ul>
<li>引入观点（后文的靶子）</li>
<li>作者观点（后文的展开对象）</li>
<li>事实（背景/证明观点的证据）</li>
</ul>
<h3> 视角标志词</h3>
<p>要区分开观点类和叙实类</p>
<h4> 观点类动词</h4>
<p>believe, claim, assert, state,maintain,hold, argue, say, conclude, assume, allege, purport, posit, stress, suggest, speculate(推测), theorize(提出理论), hypothesize(提出理论), write, attribute/ascribe A to B ...(归因于)</p>`,r:{minutes:1.38,words:414},title:"单句功能判断方法论"},["/standardized/GRE/VERBAL/Reading/dual-line/3. 单句功能判断方法论.html","/standardized/GRE/VERBAL/Reading/dual-line/3.%20%E5%8D%95%E5%8F%A5%E5%8A%9F%E8%83%BD%E5%88%A4%E6%96%AD%E6%96%B9%E6%B3%95%E8%AE%BA","/standardized/GRE/VERBAL/Reading/dual-line/3. 单句功能判断方法论.md","/standardized/GRE/VERBAL/Reading/dual-line/3.%20%E5%8D%95%E5%8F%A5%E5%8A%9F%E8%83%BD%E5%88%A4%E6%96%AD%E6%96%B9%E6%B3%95%E8%AE%BA.md"]],["v-6d8096fe","/standardized/GRE/VERBAL/Reading/dual-line/4.%20%E5%8F%A5%E9%97%B4%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%8F%A5%E5%AD%90%E5%8A%9F%E8%83%BD.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 句间关系与句子功能</h1>
<p>灵魂</p>
<p>先功能后信息</p>
<p>展开，可以不关注具体的</p>
<p>opposing viewpoints 一组对立的引用观点</p>
<p>situate the debate over</p>
<p>信息题：整篇文章逻辑关系的把握</p>
<p>句子功能题和选句子题</p>
<h3> 句子功能题</h3>
<p>The author mentioned sth. In order to ... / serve to / intend to / function / purpose / role</p>
<p>其实就是在考<strong>句间关系</strong>的，不能被<strong>细节</strong>干扰了</p>`,r:{minutes:4.15,words:1244},title:"句间关系与句子功能"},["/standardized/GRE/VERBAL/Reading/dual-line/4. 句间关系与句子功能.html","/standardized/GRE/VERBAL/Reading/dual-line/4.%20%E5%8F%A5%E9%97%B4%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%8F%A5%E5%AD%90%E5%8A%9F%E8%83%BD","/standardized/GRE/VERBAL/Reading/dual-line/4. 句间关系与句子功能.md","/standardized/GRE/VERBAL/Reading/dual-line/4.%20%E5%8F%A5%E9%97%B4%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%8F%A5%E5%AD%90%E5%8A%9F%E8%83%BD.md"]],["v-0fbed879","/standardized/GRE/VERBAL/Reading/dual-line/6.%20%E5%85%A8%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E4%B8%BB%E6%97%A8%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 全文结构与主旨题</h1>
<p>得到全文主线</p>
<h3> 主旨题</h3>
<p>筛选主线+选项分析</p>
<p>根据题干就可以排除</p>
<h3> step 1 主线筛选</h3>
<p>宏观功能</p>
<p>大原则：根据逻辑关系，判断句子功能，思考其重要性</p>
<p><strong>比较：双主体对比</strong></p>
<p><strong>转折：转向、质疑</strong></p>
<p>顺承：推论，不影响</p>
<p>让步：用不影响主线</p>
<p>找到主线的句子</p>
<h3> step 2 选项辨析</h3>
<p>选项构成：</p>
<ul>
<li>动词：难点</li>
<li>抽象名词：难点</li>
<li>具体名词：简单</li>
</ul>`,r:{minutes:1.35,words:406},title:"全文结构与主旨题"},["/standardized/GRE/VERBAL/Reading/dual-line/6. 全文结构与主旨题.html","/standardized/GRE/VERBAL/Reading/dual-line/6.%20%E5%85%A8%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E4%B8%BB%E6%97%A8%E9%A2%98","/standardized/GRE/VERBAL/Reading/dual-line/6. 全文结构与主旨题.md","/standardized/GRE/VERBAL/Reading/dual-line/6.%20%E5%85%A8%E6%96%87%E7%BB%93%E6%9E%84%E4%B8%8E%E4%B8%BB%E6%97%A8%E9%A2%98.md"]],["v-43154c5b","/standardized/GRE/VERBAL/Reading/dual-line/7.%20%E5%8A%9F%E8%83%BD%E7%BA%BF%E7%BB%BC%E5%90%88%E7%BB%83%E4%B9%A0.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 功能线综合练习</h1>
`,r:{minutes:.02,words:7},title:"功能线综合练习"},["/standardized/GRE/VERBAL/Reading/dual-line/7. 功能线综合练习.html","/standardized/GRE/VERBAL/Reading/dual-line/7.%20%E5%8A%9F%E8%83%BD%E7%BA%BF%E7%BB%BC%E5%90%88%E7%BB%83%E4%B9%A0","/standardized/GRE/VERBAL/Reading/dual-line/7. 功能线综合练习.md","/standardized/GRE/VERBAL/Reading/dual-line/7.%20%E5%8A%9F%E8%83%BD%E7%BA%BF%E7%BB%BC%E5%90%88%E7%BB%83%E4%B9%A0.md"]],["v-4f0993bc","/standardized/GRE/VERBAL/Reading/dual-line/8.%20%E9%AB%98%E6%95%88%E4%BF%A1%E6%81%AF%E6%8F%90%E5%8F%96%E4%B8%8E%E4%BF%A1%E6%81%AF%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 信息线</h1>
<p>信息A + 逻辑词X + 信息B</p>
<p>（托福雅思考的是语言，考得是信息本身能不能读懂）</p>
<p>（gre考得是逻辑）</p>
<p>当AB和X对不上的时候，默认是X对</p>
<p>总原则：</p>
<p>永远首先默认引，文章给定的逻辑关系必须是合理的。</p>
<p>有意识的<strong>挑选/修正/补充</strong>关键信息以使得该逻辑关系合理。</p>
<p>挑选：阅读效率</p>
<p>修正：根据逻辑词修正</p>
<p>补充：后面说的几种补充logical gap</p>
<p>信息A + 逻辑词X + 信息B</p>
<p>如果X = 对比，则有三种处理情况</p>`,r:{minutes:2.14,words:642},title:"信息线"},["/standardized/GRE/VERBAL/Reading/dual-line/8. 高效信息提取与信息题.html","/standardized/GRE/VERBAL/Reading/dual-line/8.%20%E9%AB%98%E6%95%88%E4%BF%A1%E6%81%AF%E6%8F%90%E5%8F%96%E4%B8%8E%E4%BF%A1%E6%81%AF%E9%A2%98","/standardized/GRE/VERBAL/Reading/dual-line/8. 高效信息提取与信息题.md","/standardized/GRE/VERBAL/Reading/dual-line/8.%20%E9%AB%98%E6%95%88%E4%BF%A1%E6%81%AF%E6%8F%90%E5%8F%96%E4%B8%8E%E4%BF%A1%E6%81%AF%E9%A2%98.md"]],["v-ed6ad178","/standardized/GRE/VERBAL/Reading/dual-line/9.%20%E5%8A%9F%E8%83%BD%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%BA%BF%E7%BB%BC%E5%90%88.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 功能线与信息线综合</h1>
`,r:{minutes:.03,words:9},title:"功能线与信息线综合"},["/standardized/GRE/VERBAL/Reading/dual-line/9. 功能与信息线综合.html","/standardized/GRE/VERBAL/Reading/dual-line/9.%20%E5%8A%9F%E8%83%BD%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%BA%BF%E7%BB%BC%E5%90%88","/standardized/GRE/VERBAL/Reading/dual-line/9. 功能与信息线综合.md","/standardized/GRE/VERBAL/Reading/dual-line/9.%20%E5%8A%9F%E8%83%BD%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%BA%BF%E7%BB%BC%E5%90%88.md"]],["v-5cd31434","/standardized/GRE/VERBAL/Reading/dual-line/",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 双线阅读法</h1>
<p>一个section20题，填空阅读各10道</p>
<ul>
<li>4篇GRE短阅读文章，所谓短阅读文章，也就是每篇文章字数在150~180左右。而每篇阅读题目数量也多为3道-2道-2道-2道这种组合模式，总的题目数量为9道，此时逻辑题为1道。</li>
<li>3篇GRE阅读文章，其中有1篇为长阅读文章，也就是字数长度约为400~500字，而这一片阅读的题目数为4道，另外2篇依旧是短阅读，短阅读的题目数分别为1道和3道，总共题目数为8道，此时逻辑题为2道。</li>
</ul>
<p><a href="https://zhuanlan.zhihu.com/p/382642079" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/382642079</a></p>`,r:{minutes:3.09,words:927},title:"双线阅读法"},["/standardized/GRE/VERBAL/Reading/dual-line/index.html","/standardized/GRE/VERBAL/Reading/dual-line/README.md"]],["v-631280a5","/standardized/GRE/VERBAL/Reading/formula/1.%20%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 事实信息题</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-13 22.15.24.png" alt="截屏2022-10-13 22.15.24" loading="lazy"></p>
<h3> 题干标志：</h3>
<ul>
<li>
<p>According to the passage, …?</p>
</li>
<li>
<p>The passage mentions which of the following as ... ?</p>
<p>最好的描述</p>
</li>
<li>
<p>Based on the passage, … ?</p>
</li>
</ul>`,r:{minutes:.83,words:248},title:"事实信息题"},["/standardized/GRE/VERBAL/Reading/formula/1. 事实信息题.html","/standardized/GRE/VERBAL/Reading/formula/1.%20%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/1. 事实信息题.md","/standardized/GRE/VERBAL/Reading/formula/1.%20%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98.md"]],["v-2c848bba","/standardized/GRE/VERBAL/Reading/formula/10.%20%E5%BD%92%E7%BA%B3%E4%B8%8E%E8%A7%A3%E9%87%8A.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 归纳与解释</h1>
<p>归纳</p>
<p>support</p>
`,r:{minutes:.03,words:8},title:"归纳与解释"},["/standardized/GRE/VERBAL/Reading/formula/10. 归纳与解释.html","/standardized/GRE/VERBAL/Reading/formula/10.%20%E5%BD%92%E7%BA%B3%E4%B8%8E%E8%A7%A3%E9%87%8A","/standardized/GRE/VERBAL/Reading/formula/10. 归纳与解释.md","/standardized/GRE/VERBAL/Reading/formula/10.%20%E5%BD%92%E7%BA%B3%E4%B8%8E%E8%A7%A3%E9%87%8A.md"]],["v-7f1c40a5","/standardized/GRE/VERBAL/Reading/formula/2.0%20%E4%B8%BB%E6%97%A8%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 主旨题</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-12 20.59.08.png" alt="截屏2022-10-12 20.59.08" loading="lazy"></p>
<p>考点：作者的写作目的</p>
<p>从选项区分</p>
<p>主旨内容题更简单，如果判定出是主旨内容题就不需要读懂文章结构，只需要找主旨句（简单所以考频低）</p>
<p>公式：5+3+4</p>
<h3> 一段的短文章结构</h3>
<ul>
<li>
<p>现象解释</p>
</li>
<li>
<p>问题解决</p>
</li>
<li>
<p><strong>新旧观点</strong></p>
<p>只有2个观点，对立关系</p>
<p>出现了反驳，但是给了解决方法</p>
<p><strong>Correct a view</strong>或者a view challenge a view或者a theory challenge a theory</p>
<p>Citing competing views</p>
</li>
<li>
<p><strong>观点点评</strong></p>
<p>观点只有1个，</p>
<ul>
<li>
<p>粉丝型，只做正向的点评</p>
</li>
<li>
<p><strong>键盘侠</strong>，做负向的点评，不提正确的新观点（即使存在可能别的，他文章不提就不行）</p>
<p>这个与新旧观点容易混淆</p>
<p>challenge a view</p>
</li>
</ul>
</li>
<li>
<p>说明文</p>
<p>无观点，</p>
<p>往往有时间维度，说明事件变化过程</p>
<p>难度很低，出的少</p>
<p>trace, chronicling</p>
</li>
</ul>`,r:{minutes:2.24,words:671},title:"主旨题"},["/standardized/GRE/VERBAL/Reading/formula/2.0 主旨题.html","/standardized/GRE/VERBAL/Reading/formula/2.0%20%E4%B8%BB%E6%97%A8%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/2.0 主旨题.md","/standardized/GRE/VERBAL/Reading/formula/2.0%20%E4%B8%BB%E6%97%A8%E9%A2%98.md"]],["v-41488cf8","/standardized/GRE/VERBAL/Reading/formula/2.1%20%E5%8F%A5%E5%AD%90%E4%BD%9C%E7%94%A8%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 句子作用题</h1>
<p>考点：句间句内关系</p>
<p>句子作用题问法：</p>
<ul>
<li>Which of the following best describes the function of the highlighted sentence?</li>
<li>In the context of the passage, the highlighted sentence serves to…</li>
</ul>
<h3> 句间句内关系</h3>
<ul>
<li>
<p>前句与其解释</p>
<p>In other words</p>
</li>
<li>
<p>前句与其例子</p>
<p>For example</p>
</li>
<li>
<p>前句与其类比</p>
<p>Similarly</p>
</li>
<li>
<p>前句与其比喻</p>
<p>Like</p>
</li>
<li>
<p>前句与其转折对立</p>
<p>In fact</p>
<p>However</p>
</li>
<li>
<p>前句与其强烈对比
<strong>A departure from B</strong></p>
</li>
</ul>`,r:{minutes:1.14,words:343},title:"句子作用题"},["/standardized/GRE/VERBAL/Reading/formula/2.1 句子作用题.html","/standardized/GRE/VERBAL/Reading/formula/2.1%20%E5%8F%A5%E5%AD%90%E4%BD%9C%E7%94%A8%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/2.1 句子作用题.md","/standardized/GRE/VERBAL/Reading/formula/2.1%20%E5%8F%A5%E5%AD%90%E4%BD%9C%E7%94%A8%E9%A2%98.md"]],["v-4b0be9ad","/standardized/GRE/VERBAL/Reading/formula/2.2%20%E4%BF%A1%E6%81%AF%E7%9B%AE%E7%9A%84%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 信息目的题</h1>
<p>句间句内关系</p>
<p>Which of the following is not part of</p>
<p>elaborate 阐述</p>
<p>Take issue with 反对，提出异议</p>
<h3> 无特殊关系标志时</h3>
<p>夹逼定理：看前后句</p>
<p>读三句话，本身、前句、后句</p>
<p>看本句和前句关系、本句和后句关系</p>
<h3> 有特殊关系标志时</h3>
<p>句内关系</p>
<ul>
<li>“<strong>:</strong>”：解析、支持</li>
<li>since</li>
<li>due to</li>
</ul>`,r:{minutes:.4,words:120},title:"信息目的题"},["/standardized/GRE/VERBAL/Reading/formula/2.2 信息目的题.html","/standardized/GRE/VERBAL/Reading/formula/2.2%20%E4%BF%A1%E6%81%AF%E7%9B%AE%E7%9A%84%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/2.2 信息目的题.md","/standardized/GRE/VERBAL/Reading/formula/2.2%20%E4%BF%A1%E6%81%AF%E7%9B%AE%E7%9A%84%E9%A2%98.md"]],["v-7c7306e3","/standardized/GRE/VERBAL/Reading/formula/3.%20%E6%8E%A8%E6%96%AD%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 推断题</h1>
<p>占比大、考点多、难度大、耗时多</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-16 15.12.22.png" alt="截屏2022-10-16 15.12.22" loading="lazy"></p>
<p>题干标志：<strong>infer</strong> <strong>or suggest or indicate or imply</strong></p>
<p>考点：定位+（7种）推理逻辑</p>`,r:{minutes:.87,words:260},title:"推断题"},["/standardized/GRE/VERBAL/Reading/formula/3. 推断题.html","/standardized/GRE/VERBAL/Reading/formula/3.%20%E6%8E%A8%E6%96%AD%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/3. 推断题.md","/standardized/GRE/VERBAL/Reading/formula/3.%20%E6%8E%A8%E6%96%AD%E9%A2%98.md"]],["v-0a3572c0","/standardized/GRE/VERBAL/Reading/formula/4.%20%E5%8F%AF%E5%A4%9A%E9%80%89%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 可多选题</h1>
<p>GRE阅读中优先级最低的题</p>
<p>Consider each of the choices separately and select all that apply.</p>
<p>需要与<strong>其它题型</strong>搭配。</p>
<p>需要<strong>单独</strong>考虑每一个选项。</p>
<p>答案有可能会<strong>跨区</strong>。</p>
<p><strong>双定位</strong></p>
<p>题干+选项</p>
<ol>
<li>题干定位词过于笼统，涵盖全文。</li>
<li>利用选项定位，便于用“无中生有”排除。</li>
</ol>`,r:{minutes:.3,words:91},title:"可多选题"},["/standardized/GRE/VERBAL/Reading/formula/4. 可多选题.html","/standardized/GRE/VERBAL/Reading/formula/4.%20%E5%8F%AF%E5%A4%9A%E9%80%89%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/4. 可多选题.md","/standardized/GRE/VERBAL/Reading/formula/4.%20%E5%8F%AF%E5%A4%9A%E9%80%89%E9%A2%98.md"]],["v-1d0812fd","/standardized/GRE/VERBAL/Reading/formula/5.%20%E6%80%81%E5%BA%A6%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 态度题</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-16 15.26.21.png" alt="截屏2022-10-16 15.26.21" loading="lazy"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-16 15.26.38.png" alt="截屏2022-10-16 15.26.38" loading="lazy"></p>`,r:{minutes:.52,words:157},title:"态度题"},["/standardized/GRE/VERBAL/Reading/formula/5. 态度题.html","/standardized/GRE/VERBAL/Reading/formula/5.%20%E6%80%81%E5%BA%A6%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/5. 态度题.md","/standardized/GRE/VERBAL/Reading/formula/5.%20%E6%80%81%E5%BA%A6%E9%A2%98.md"]],["v-21ff79cf","/standardized/GRE/VERBAL/Reading/formula/7.%20%E7%B1%BB%E6%AF%94%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 类比题</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-16 16.20.42.png" alt="截屏2022-10-16 16.20.42" loading="lazy"></p>
<p>变化趋势</p>
`,r:{minutes:.09,words:28},title:"类比题"},["/standardized/GRE/VERBAL/Reading/formula/7. 类比题.html","/standardized/GRE/VERBAL/Reading/formula/7.%20%E7%B1%BB%E6%AF%94%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/7. 类比题.md","/standardized/GRE/VERBAL/Reading/formula/7.%20%E7%B1%BB%E6%AF%94%E9%A2%98.md"]],["v-52ee249c","/standardized/GRE/VERBAL/Reading/formula/8.%20%E5%90%A6%E5%AE%9A%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 否定事实信息题</h1>
`,r:{minutes:.02,words:7},title:"否定事实信息题"},["/standardized/GRE/VERBAL/Reading/formula/8. 否定事实信息题.html","/standardized/GRE/VERBAL/Reading/formula/8.%20%E5%90%A6%E5%AE%9A%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/8. 否定事实信息题.md","/standardized/GRE/VERBAL/Reading/formula/8.%20%E5%90%A6%E5%AE%9A%E4%BA%8B%E5%AE%9E%E4%BF%A1%E6%81%AF%E9%A2%98.md"]],["v-96b71298","/standardized/GRE/VERBAL/Reading/formula/9.%20%E8%AF%8D%E6%B1%87%E9%A2%98.html",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 词汇题</h1>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-16 16.22.21.png" alt="截屏2022-10-16 16.22.21" loading="lazy"></p>
`,r:{minutes:.08,words:24},title:"词汇题"},["/standardized/GRE/VERBAL/Reading/formula/9. 词汇题.html","/standardized/GRE/VERBAL/Reading/formula/9.%20%E8%AF%8D%E6%B1%87%E9%A2%98","/standardized/GRE/VERBAL/Reading/formula/9. 词汇题.md","/standardized/GRE/VERBAL/Reading/formula/9.%20%E8%AF%8D%E6%B1%87%E9%A2%98.md"]],["v-c796c7da","/standardized/GRE/VERBAL/Reading/formula/",{y:"a",d:"2023-01-02T09:54:51.000Z",e:`<h1> 公式法</h1>
<p>读一题做一题</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-10-12 15.33.51.png" alt="截屏2022-10-12 15.33.51" loading="lazy"></p>
<p>高效提分</p>
<ol>
<li>
<p>题型为导向→<strong>死背公式</strong></p>
</li>
<li>
<p>高频反复考→分析高频</p>
<p>只需要350高频机经，不用做模考题浪费时间</p>
<p>拿来验证做题思路，不是只对答案</p>
</li>
<li>
<p>遗忘速度快→反复复习</p>
</li>
</ol>`,r:{minutes:2.42,words:727},title:"公式法"},["/standardized/GRE/VERBAL/Reading/formula/index.html","/standardized/GRE/VERBAL/Reading/formula/README.md"]],["v-9db00862","/cs/algo/summary/optimise/decrease-conquer/binary/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 二值有序</h1>
<p>每一个元素在目标函数上都只有两种取值，然后可以唯一对应到两种操作，可以避免走回头路，可以做到：</p>
<ul>
<li>将On2的问题优化到On
<ul>
<li>双指针本来为组合问题，复杂度应为On2</li>
<li></li>
</ul>
</li>
<li>将On的问题优化到Ologn</li>
</ul>
<p>特殊有序</p>
<ul>
<li></li>
</ul>
<p>二分答案</p>
<ul>
<li>线性扫描</li>
<li>逆向双针</li>
<li>滑动窗口</li>
<li>Z型遍历</li>
<li>动态规划</li>
</ul>`,r:{minutes:.36,words:109},title:"二值有序"},["/cs/algo/summary/optimise/decrease-conquer/binary/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/README.md"]],["v-6ef4e9e0","/cs/algo/summary/optimise/decrease-conquer/greedy/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 贪心有序</h1>
`,r:{minutes:.01,words:4},title:"贪心有序"},["/cs/algo/summary/optimise/decrease-conquer/greedy/index.html","/cs/algo/summary/optimise/decrease-conquer/greedy/README.md"]],["v-502d46de","/cs/algo/summary/search/DFS/enumerate/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 枚举：宽树搜索</h1>
<p>枚举类问题的特点：</p>
<ol>
<li>
<p>深度线性：</p>
<p>解空间的深度小于等于传入序列的长度</p>
<p>故栈空间占用始终是线性可解的</p>
</li>
<li>
<p>宽度指数：</p>
<p>解空间的宽度呈现指数级别增长</p>
<p>每个节点可以扩散0-n个</p>
</li>
</ol>
`,r:{minutes:.27,words:80},title:"枚举：宽树搜索"},["/cs/algo/summary/search/DFS/enumerate/index.html","/cs/algo/summary/search/DFS/enumerate/README.md"]],["v-670668a4","/cs/algo/summary/structure/linear/array-list/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 数组算法</h1>
`,r:{minutes:.01,words:4},title:"数组算法"},["/cs/algo/summary/structure/linear/array-list/index.html","/cs/algo/summary/structure/linear/array-list/README.md"]],["v-215ec3a6","/cs/algo/summary/structure/linear/linked-list/1.%20%E8%99%9A%E6%8B%9F%E5%A4%B4%E8%8A%82%E7%82%B9.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 虚拟头节点</h1>
<h3> 基本使用</h3>
<p>定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.81,words:243},title:"虚拟头节点"},["/cs/algo/summary/structure/linear/linked-list/1. 虚拟头节点.html","/cs/algo/summary/structure/linear/linked-list/1.%20%E8%99%9A%E6%8B%9F%E5%A4%B4%E8%8A%82%E7%82%B9","/cs/algo/summary/structure/linear/linked-list/1. 虚拟头节点.md","/cs/algo/summary/structure/linear/linked-list/1.%20%E8%99%9A%E6%8B%9F%E5%A4%B4%E8%8A%82%E7%82%B9.md"]],["v-373a2774","/cs/algo/summary/structure/linear/linked-list/2.%20%E5%9F%BA%E6%9C%AC%E6%8A%80%E5%B7%A7.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 基本技巧</h1>
<p>Basic Linked List Skills</p>
<ol>
<li>
<p>traversal</p>
<ul>
<li>
<p>迭代遍历</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// FOR：先序：访问</span>
<span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
    
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// FOR：先序：访问</span>
<span class="token class-name">ListNode</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
    
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写法2，不推荐，因为局部变量，且边界不好控制，且移动语句受限</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>`,r:{minutes:.85,words:256},title:"基本技巧"},["/cs/algo/summary/structure/linear/linked-list/2. 基本技巧.html","/cs/algo/summary/structure/linear/linked-list/2.%20%E5%9F%BA%E6%9C%AC%E6%8A%80%E5%B7%A7","/cs/algo/summary/structure/linear/linked-list/2. 基本技巧.md","/cs/algo/summary/structure/linear/linked-list/2.%20%E5%9F%BA%E6%9C%AC%E6%8A%80%E5%B7%A7.md"]],["v-5f92dfbb","/cs/algo/summary/structure/linear/linked-list/3.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 反转链表</h1>
`,r:{minutes:.01,words:4},title:"反转链表"},["/cs/algo/summary/structure/linear/linked-list/3. 反转链表.html","/cs/algo/summary/structure/linear/linked-list/3.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8","/cs/algo/summary/structure/linear/linked-list/3. 反转链表.md","/cs/algo/summary/structure/linear/linked-list/3.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.md"]],["v-4f3994ec","/cs/algo/summary/structure/linear/linked-list/4.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%82%B9.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 链表中点</h1>
`,r:{minutes:.01,words:4},title:"链表中点"},["/cs/algo/summary/structure/linear/linked-list/4. 链表中点.html","/cs/algo/summary/structure/linear/linked-list/4.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%82%B9","/cs/algo/summary/structure/linear/linked-list/4. 链表中点.md","/cs/algo/summary/structure/linear/linked-list/4.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%82%B9.md"]],["v-64b49b30","/cs/algo/summary/structure/linear/linked-list/5.%20%E9%93%BE%E8%A1%A8%E6%B1%82%E7%8E%AF.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 链表求环</h1>
`,r:{minutes:.01,words:4},title:"链表求环"},["/cs/algo/summary/structure/linear/linked-list/5. 链表求环.html","/cs/algo/summary/structure/linear/linked-list/5.%20%E9%93%BE%E8%A1%A8%E6%B1%82%E7%8E%AF","/cs/algo/summary/structure/linear/linked-list/5. 链表求环.md","/cs/algo/summary/structure/linear/linked-list/5.%20%E9%93%BE%E8%A1%A8%E6%B1%82%E7%8E%AF.md"]],["v-ac829028","/cs/algo/summary/structure/linear/linked-list/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 链表算法</h1>
<h3> 主要技巧</h3>
<ul>
<li>
<p>虚拟头节点</p>
<p>使用场景：</p>
<ul>
<li>头节点不确定时，如创建一个新的链表（初始时无法判断是否为空）
<ul>
<li>合并链表（到一个新的链表）merge</li>
<li>划分链表（到两个新的链表）partition</li>
</ul>
</li>
<li>头节点可能被变动时，如添加、删除、移动
<ul>
<li>删除节点
<ul>
<li>链表去重</li>
<li>删除值为x的节点</li>
</ul>
</li>
<li>移动
<ul>
<li>反转链表</li>
<li>交换链表节点</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>双指针</p>
<p>技巧分类及使用场景：</p>
<ul>
<li>快慢双指针
<ul>
<li>链表中点：middle</li>
<li>链表求环：circle</li>
</ul>
</li>
<li>同向双指针
<ul>
<li>反转链表：reverse</li>
<li>链表去重：deduplication</li>
<li>划分链表：partition，lomoto写法，结合前序遍历可拓展为quickSort</li>
<li>倒序查找：findFromEnd</li>
</ul>
</li>
<li>平行双指针
<ul>
<li>合并链表：merge，结合后序遍历可拓展为mergeSort</li>
<li>划分链表：partition，结合前序遍历可拓展为quickSort</li>
<li>链表交点</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:1.16,words:349},title:"链表算法"},["/cs/algo/summary/structure/linear/linked-list/index.html","/cs/algo/summary/structure/linear/linked-list/README.md"]],["v-5c15b7e2","/cs/algo/summary/structure/linear/sort/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 排序</h1>
<h2> 分类</h2>
<p>按时间复杂度分类</p>
<ul>
<li>
<p>O(n)</p>
<p>如，基数排序、桶排序、计数排序</p>
</li>
<li>
<p>O(nlogn)</p>
<p>如，快速排序、归并排序、队排序</p>
</li>
<li>
<p>O(n2)</p>
<p>如，插入排序、简单选择排序、简单希尔排序</p>
</li>
<li>
<p>其他</p>
<p>优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳</p>
</li>
</ul>
<p>按排序方式分类</p>
<ul>
<li>
<p>基于交换类</p>
<p>效率的上限就是Onlogn</p>
</li>
<li>
<p>非交换类</p>
<p>上限可以是On</p>
</li>
</ul>`,r:{minutes:1.15,words:346},title:"排序"},["/cs/algo/summary/structure/linear/sort/index.html","/cs/algo/summary/structure/linear/sort/README.md"]],["v-09c20ff4","/cs/algo/summary/structure/tree/bitree/",{y:"a",d:"2023-01-29T15:51:30.000Z",e:`<h1> 二叉树</h1>
<p>二叉树解题的思维模式分两类：</p>
<ol>
<li>是否可以通过遍历一遍二叉树得到答案？如果可以，用一个 traverse 函数配合外部变量来实现，这叫「遍历」的思维模式。</li>
<li>是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案？如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值，这叫「分解问题」的思维模式。</li>
</ol>
<p>无论使用哪种思维模式，你都需要思考：</p>
<p>如果单独抽出一个二叉树节点，它需要做什么事情？需要在什么时候（前/中/后序位置）做？其他的节点不用你操心，递归函数会帮你在所有节点上执行相同的操作。</p>`,r:{minutes:1.09,words:326},title:"二叉树"},["/cs/algo/summary/structure/tree/bitree/index.html","/cs/algo/summary/structure/tree/bitree/README.md"]],["v-f9d5596c","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 二分搜索</h1>
<p>核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False</p>
<h3> 使用条件</h3>
<ul>
<li>
<p>连续的解空间</p>
<p>往往是一个连续的整数区间，通常表示：</p>
<ul>
<li>坐标位置或索引，如数组中查找一个元素、隔板插入的空隙</li>
<li>一种资源或者能力，如最小或最大的花费、最大重复的子数组长度</li>
</ul>
</li>
<li>
<p>对于一个函数，在该解空间上，一边为True，一边为False，我们二分搜索就是找到这两段临界的那两个节点，故分类为寻找符合条件的最左侧的，和寻找符合条件的最右侧的这两种情况</p>
</li>
</ul>`,r:{minutes:3.75,words:1124},title:"二分搜索"},["/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/README.md"]],["v-2feabdf0","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E6%B5%AE%E7%82%B9%E6%95%B0.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 浮点搜索</h1>
`,r:{minutes:.01,words:4},title:"浮点搜索"},["/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/浮点数.html","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E6%B5%AE%E7%82%B9%E6%95%B0","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/浮点数.md","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E6%B5%AE%E7%82%B9%E6%95%B0.md"]],["v-4e1b354c","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E7%AD%94%E6%A1%88%E9%9B%86.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 答案集</h1>
<p>往往是求符合一定条件的最大值或最小值，如果问题具有两段性（一侧可以实现、一侧不可以），则重点考察check函数的写法，常见有二分法与以下几种的组合：</p>
<ul>
<li>线性扫描</li>
<li>双指针法
<ul>
<li>逆向指针</li>
<li>同向指针</li>
<li>滑动窗口</li>
<li>Z型遍历</li>
</ul>
</li>
<li>广度优先</li>
<li>贪心策略</li>
</ul>
<h2> 线性扫描</h2>
<h2> 双指针法</h2>
`,r:{minutes:.35,words:106},title:"答案集"},["/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/答案集.html","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E7%AD%94%E6%A1%88%E9%9B%86","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/答案集.md","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E7%AD%94%E6%A1%88%E9%9B%86.md"]],["v-28281b72","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E8%BE%93%E5%85%A5%E9%9B%86.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 输入集</h1>
<h2> 排序数组</h2>
<p>以下题目均默认在非严格递增的数组上搜索，可以涵盖严格递增数组的情况。</p>
<p>（如果在非严格递减的数组上搜索，仅需把大于小于号取反，如&gt;=变为&lt;=，&lt;=变为&gt;=）</p>
<p>问题列表见右侧TOC目录：</p>
<h3> 在排序数组中查找数字</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// in: nums[], target</span>
<span class="token keyword">int</span> pos <span class="token operator">=</span> <span class="token function">searchFirst</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> nums<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token operator">?</span> pos<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.7,words:2009},title:"输入集"},["/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/输入集.html","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E8%BE%93%E5%85%A5%E9%9B%86","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/输入集.md","/cs/algo/summary/optimise/decrease-conquer/binary/binary-search/%E8%BE%93%E5%85%A5%E9%9B%86.md"]],["v-12108c54","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 双指针</h1>
<p>核心思想：</p>
<p>不走回头路，On2 -&gt; On</p>
<p>同向双指针</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// [j, i], j是i符合条件下最靠左的位置</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 这个题的操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.4,words:119},title:"双指针"},["/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/README.md"]],["v-675b1dd5","/cs/algo/summary/optimise/dynamic-programming/combine/combine/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98.html",{y:"a",d:"2023-02-03T07:46:32.000Z",e:`<h1> 股票问题</h1>
<p>那么对于这道题，我们具体到每一天，看看总共有几种可能的「状态」，再找出每个「状态」对应的「选择」。我们要穷举所有「状态」，穷举的目的是根据对应的「选择」更新状态。听起来抽象，你只要记住「状态」和「选择」两个词就行，下面实操一下就很容易明白了。</p>
<h3> 选择</h3>
<p><strong>每天都有三种「选择」</strong>：买入、卖出、无操作，我们用 <code>buy</code>, <code>sell</code>, <code>rest</code> 表示这三种选择。</p>
<h3> 限制</h3>
<p><code>sell</code> 必须在 <code>buy</code> 之后，<code>buy</code> 必须在 <code>sell</code> 之后。那么 <code>rest</code> 操作还应该分两种状态，一种是 <code>buy</code> 之后的 <code>rest</code>（持有了股票），一种是 <code>sell</code> 之后的 <code>rest</code>（没有持有股票）。</p>`,r:{minutes:1.66,words:497},title:"股票问题"},["/cs/algo/summary/optimise/dynamic-programming/combine/combine/股票问题.html","/cs/algo/summary/optimise/dynamic-programming/combine/combine/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98","/cs/algo/summary/optimise/dynamic-programming/combine/combine/股票问题.md","/cs/algo/summary/optimise/dynamic-programming/combine/combine/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98.md"]],["v-2a47af17","/cs/algo/summary/search/DFS/enumerate/combination/%E5%88%86%E5%89%B2.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 分割</h1>
`,r:{minutes:.01,words:2},title:"分割"},["/cs/algo/summary/search/DFS/enumerate/combination/分割.html","/cs/algo/summary/search/DFS/enumerate/combination/%E5%88%86%E5%89%B2","/cs/algo/summary/search/DFS/enumerate/combination/分割.md","/cs/algo/summary/search/DFS/enumerate/combination/%E5%88%86%E5%89%B2.md"]],["v-05848cc6","/cs/algo/summary/search/DFS/enumerate/combination/%E7%BB%84%E5%90%88.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 组合</h1>
`,r:{minutes:.01,words:2},title:"组合"},["/cs/algo/summary/search/DFS/enumerate/combination/组合.html","/cs/algo/summary/search/DFS/enumerate/combination/%E7%BB%84%E5%90%88","/cs/algo/summary/search/DFS/enumerate/combination/组合.md","/cs/algo/summary/search/DFS/enumerate/combination/%E7%BB%84%E5%90%88.md"]],["v-5ad3f066","/cs/algo/summary/search/DFS/enumerate/combination/%E9%80%89%E6%8B%A9.html",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 选择</h1>
`,r:{minutes:.01,words:2},title:"选择"},["/cs/algo/summary/search/DFS/enumerate/combination/选择.html","/cs/algo/summary/search/DFS/enumerate/combination/%E9%80%89%E6%8B%A9","/cs/algo/summary/search/DFS/enumerate/combination/选择.md","/cs/algo/summary/search/DFS/enumerate/combination/%E9%80%89%E6%8B%A9.md"]],["v-cd92eada","/cs/algo/summary/structure/linear/linked-list/%E5%8F%8C%E6%8C%87%E9%92%88/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 双指针</h1>
`,r:{minutes:.01,words:3},title:"双指针"},["/cs/algo/summary/structure/linear/linked-list/双指针/","/cs/algo/summary/structure/linear/linked-list/%E5%8F%8C%E6%8C%87%E9%92%88/index.html","/cs/algo/summary/structure/linear/linked-list/双指针/README.md","/cs/algo/summary/structure/linear/linked-list/%E5%8F%8C%E6%8C%87%E9%92%88/README.md"]],["v-703fbedc","/cs/algo/summary/structure/linear/sort/partition/%E5%88%92%E5%88%86%E6%96%B9%E6%B3%95.html",{y:"a",d:"2023-03-05T13:59:03.000Z",e:`<h1> 划分方法</h1>
<h2> 分类</h2>
<ul>
<li>
<p>划分型</p>
<p>单纯把数组划分成两段：一半大于等于，一半小于等于 pivot</p>
</li>
<li>
<p>寻找型</p>
<p>在划分数组的同时，找到pivot元素最终位置</p>
</li>
</ul>
<p>优化：</p>
<ul>
<li>
<p>三路划分</p>
<p>将数组划分成：<code>&lt;, =, &gt;</code> pivot三段，并找到pivot段的两个端点</p>
<p>优势：在重复元素较多时，可以更快的排序完毕，一次可以同时处理掉很多位置</p>
</li>
<li>
<p>多枢划分</p>
<p>如，Java快排源码，使用了两个Pivot进行划分</p>
</li>
</ul>`,r:{minutes:2.02,words:606},title:"划分方法"},["/cs/algo/summary/structure/linear/sort/partition/划分方法.html","/cs/algo/summary/structure/linear/sort/partition/%E5%88%92%E5%88%86%E6%96%B9%E6%B3%95","/cs/algo/summary/structure/linear/sort/partition/划分方法.md","/cs/algo/summary/structure/linear/sort/partition/%E5%88%92%E5%88%86%E6%96%B9%E6%B3%95.md"]],["v-36bfb854","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/opposite/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 相向双指针</h1>
`,r:{minutes:.02,words:5},title:"相向双指针"},["/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/opposite/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/opposite/README.md"]],["v-0659a534","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/parallel/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 平行双指针</h1>
`,r:{minutes:.02,words:5},title:"平行双指针"},["/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/parallel/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/parallel/README.md"]],["v-06cc4f6b","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/window/",{y:"a",d:"2023-02-01T13:44:44.000Z",e:`<h1> 滑窗双指针</h1>
<p>核心：维护窗口内部的组成的一个性质，使该窗口复合一个给定的条件，如窗口内元素的和小于x</p>
<h3> 核心模板</h3>
<p>window始终维护<code>[left, right]</code>之间的一个性质</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">windowPtr</span><span class="token punctuation">(</span>
    <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">,</span>
    <span class="token class-name">BiPredicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> isValid<span class="token punctuation">,</span>
    <span class="token class-name">IntConsumer</span> in<span class="token punctuation">,</span> <span class="token class-name">IntConsumer</span> out<span class="token punctuation">,</span>
    <span class="token class-name">BiConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> prev<span class="token punctuation">,</span>
    <span class="token class-name">BiConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> next
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// [left, right]版本，这种模板也方便处理单纯的数对问题</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> start<span class="token punctuation">,</span> right <span class="token operator">=</span> start<span class="token punctuation">;</span> 
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        in<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isValid<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                next<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            out<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.46,words:138},title:"滑窗双指针"},["/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/window/index.html","/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/window/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-5bc93818","/category/",{title:"Category"},["/category/index.html"]],["v-744d024e","/tag/",{title:"Tag"},["/tag/index.html"]],["v-e52c881c","/article/",{title:"Articles"},["/article/index.html"]],["v-75ed4ea4","/encrypted/",{title:"Encrypted"},["/encrypted/index.html"]],["v-d804e652","/slide/",{title:"Slides"},["/slide/index.html"]],["v-154dc4c4","/star/",{title:"Star"},["/star/index.html"]],["v-01560935","/timeline/",{title:"Timeline"},["/timeline/index.html"]],["v-fbb94a6e","/zh/category/",{title:"分类"},["/zh/category/index.html"]],["v-540234fd","/zh/tag/",{title:"标签"},["/zh/tag/index.html"]],["v-54d7ff21","/zh/article/",{title:"文章"},["/zh/article/index.html"]],["v-1ad78213","/zh/encrypted/",{title:"加密"},["/zh/encrypted/index.html"]],["v-5b30cfc6","/zh/slide/",{title:"幻灯片"},["/zh/slide/index.html"]],["v-2c3ee7f5","/zh/star/",{title:"收藏"},["/zh/star/index.html"]],["v-27b02be6","/zh/timeline/",{title:"时间轴"},["/zh/timeline/index.html"]],["v-2a32a3a8","/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{title:"使用指南 分类"},["/zh/category/使用指南/","/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-03ba1c5a","/zh/tag/%E7%A6%81%E7%94%A8/",{title:"禁用 标签"},["/zh/tag/禁用/","/zh/tag/%E7%A6%81%E7%94%A8/index.html"]],["v-16890533","/zh/category/%E6%A8%B1%E6%A1%83/",{title:"樱桃 分类"},["/zh/category/樱桃/","/zh/category/%E6%A8%B1%E6%A1%83/index.html"]],["v-05bf9c12","/zh/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",{title:"文章加密 标签"},["/zh/tag/文章加密/","/zh/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/index.html"]],["v-d28a2a8a","/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",{title:"火龙果 分类"},["/zh/category/火龙果/","/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/index.html"]],["v-2e14b8c3","/zh/tag/markdown/",{title:"Markdown 标签"},["/zh/tag/markdown/index.html"]],["v-1397518c","/zh/category/%E6%B0%B4%E6%9E%9C/",{title:"水果 分类"},["/zh/category/水果/","/zh/category/%E6%B0%B4%E6%9E%9C/index.html"]],["v-d4827004","/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{title:"页面配置 标签"},["/zh/tag/页面配置/","/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],["v-41412eae","/zh/category/%E8%8D%89%E8%8E%93/",{title:"草莓 分类"},["/zh/category/草莓/","/zh/category/%E8%8D%89%E8%8E%93/index.html"]],["v-ac203710","/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{title:"使用指南 标签"},["/zh/tag/使用指南/","/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-d908375e","/zh/category/%E8%94%AC%E8%8F%9C/",{title:"蔬菜 分类"},["/zh/category/蔬菜/","/zh/category/%E8%94%AC%E8%8F%9C/index.html"]],["v-03d1f283","/zh/tag/%E7%BA%A2/",{title:"红 标签"},["/zh/tag/红/","/zh/tag/%E7%BA%A2/index.html"]],["v-072edc12","/zh/category/%E8%8B%B9%E6%9E%9C/",{title:"苹果 分类"},["/zh/category/苹果/","/zh/category/%E8%8B%B9%E6%9E%9C/index.html"]],["v-331fe9d7","/zh/tag/%E5%B0%8F/",{title:"小 标签"},["/zh/tag/小/","/zh/tag/%E5%B0%8F/index.html"]],["v-6905c52d","/zh/category/%E9%A6%99%E8%95%89/",{title:"香蕉 分类"},["/zh/category/香蕉/","/zh/category/%E9%A6%99%E8%95%89/index.html"]],["v-24d008e3","/zh/tag/%E5%9C%86/",{title:"圆 标签"},["/zh/tag/圆/","/zh/tag/%E5%9C%86/index.html"]],["v-31a38f34","/zh/tag/%E5%A4%A7/",{title:"大 标签"},["/zh/tag/大/","/zh/tag/%E5%A4%A7/index.html"]],["v-58bb7b92","/zh/tag/%E9%BB%84/",{title:"黄 标签"},["/zh/tag/黄/","/zh/tag/%E9%BB%84/index.html"]],["v-012340a5","/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",{title:"弯曲的 标签"},["/zh/tag/弯曲的/","/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/index.html"]],["v-78e0ca6a","/zh/tag/%E9%95%BF/",{title:"长 标签"},["/zh/tag/长/","/zh/tag/%E9%95%BF/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const b=usePageLayout();return()=>h$6(b.value)}}),createRoutes=()=>pagesRoutes.reduce((b,[$,j,Z,U])=>(b.push({name:$,path:j,component:Vuepress,meta:Z},...U.map(Y=>({path:Y,redirect:j}))),b),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const b=createRouter({history:historyCreator(removeEndingSlash("/blog/")),routes:createRoutes(),scrollBehavior:($,j,Z)=>Z||($.hash?{el:$.hash}:{top:0})});return b.beforeResolve(async($,j)=>{var Z;($.path!==j.path||j===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData($.name),(Z=pagesComponents[$.name])==null?void 0:Z.__asyncLoader()]))}),b},setupGlobalComponents=b=>{b.component("ClientOnly",ClientOnly),b.component("Content",Content)},setupGlobalComputed=(b,$,j)=>{const Z=computed(()=>resolvers.resolveLayouts(j)),U=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,$.currentRoute.value.path)),Y=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,U.value)),ee=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),ae=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,Y.value)),ne=computed(()=>resolvers.resolvePageHead(ae.value,ee.value,Y.value)),se=computed(()=>resolvers.resolvePageLang(pageData.value)),ie=computed(()=>resolvers.resolvePageLayout(pageData.value,Z.value));return b.provide(layoutsSymbol,Z),b.provide(pageFrontmatterSymbol,ee),b.provide(pageHeadTitleSymbol,ae),b.provide(pageHeadSymbol,ne),b.provide(pageLangSymbol,se),b.provide(pageLayoutSymbol,ie),b.provide(routeLocaleSymbol,U),b.provide(siteLocaleDataSymbol,Y),Object.defineProperties(b.config.globalProperties,{$frontmatter:{get:()=>ee.value},$head:{get:()=>ne.value},$headTitle:{get:()=>ae.value},$lang:{get:()=>se.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>U.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>Y.value},$withBase:{get:()=>withBase}}),{layouts:Z,pageData,pageFrontmatter:ee,pageHead:ne,pageHeadTitle:ae,pageLang:se,pageLayout:ie,routeLocale:U,siteData,siteLocaleData:Y}},setupUpdateHead=()=>{const b=useRoute(),$=usePageHead(),j=usePageLang(),Z=ref([]),U=()=>{$.value.forEach(ee=>{const ae=queryHeadTag(ee);ae&&Z.value.push(ae)})},Y=()=>{document.documentElement.lang=j.value,Z.value.forEach(ee=>{ee.parentNode===document.head&&document.head.removeChild(ee)}),Z.value.splice(0,Z.value.length),$.value.forEach(ee=>{const ae=createHeadTag(ee);ae!==null&&(document.head.appendChild(ae),Z.value.push(ae))})};provide(updateHeadSymbol,Y),onMounted(()=>{U(),Y(),watch(()=>b.path,()=>Y())})},queryHeadTag=([b,$,j=""])=>{const Z=Object.entries($).map(([ae,ne])=>isString$1(ne)?`[${ae}=${JSON.stringify(ne)}]`:ne===!0?`[${ae}]`:"").join(""),U=`head > ${b}${Z}`;return Array.from(document.querySelectorAll(U)).find(ae=>ae.innerText===j)||null},createHeadTag=([b,$,j])=>{if(!isString$1(b))return null;const Z=document.createElement(b);return isPlainObject($)&&Object.entries($).forEach(([U,Y])=>{isString$1(Y)?Z.setAttribute(U,Y):Y===!0&&Z.setAttribute(U,"")}),isString$1(j)&&Z.appendChild(document.createTextNode(j)),Z},appCreator=createSSRApp,createVueApp=async()=>{var j;const b=appCreator({name:"VuepressApp",setup(){var Z;setupUpdateHead();for(const U of clientConfigs)(Z=U.setup)==null||Z.call(U);return()=>[h$6(RouterView),...clientConfigs.flatMap(({rootComponents:U=[]})=>U.map(Y=>h$6(Y)))]}}),$=createVueRouter();setupGlobalComponents(b),setupGlobalComputed(b,$,clientConfigs);for(const Z of clientConfigs)await((j=Z.enhance)==null?void 0:j.call(Z,{app:b,router:$,siteData}));return b.use($),{app:b,router:$}};createVueApp().then(({app:b,router:$})=>{$.isReady().then(()=>{b.mount("#app")})});export{K,__vitePreload as _,createVueApp,st as s};
