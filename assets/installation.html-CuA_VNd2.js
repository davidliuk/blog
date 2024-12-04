import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as t}from"./app-CybQbXIt.js";const n={};function l(r,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h1><h2 id="本地" tabindex="-1"><a class="header-anchor" href="#本地"><span>本地</span></a></h2><p>mac 环境下使用的 brew 作为包管理器，通过 brew 的方式安装最新的 docker desktop</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --cask</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>由于 k8s 是谷歌的服务以及一些网络的因素，k8s 的安装过程会非常受阻</p><p>故采用阿里云的服务进行 k8s 的安装</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/AliyunContainerService/k8s-for-docker-desktop.git</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s-for-docker-desktop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./load_images.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行脚本安装 K8S 相关镜像（确认 k8s-for-docker-desktop 文件夹下的 images 中的 k8s 和本地安装的 docker 中需要的 k8s 版本保持一致）</p>`,8)]))}const h=e(n,[["render",l],["__file","installation.html.vue"]]),k=JSON.parse(`{"path":"/se/devops/k8s/installation.html","title":"Installation","lang":"en-US","frontmatter":{"description":"Installation 本地 mac 环境下使用的 brew 作为包管理器，通过 brew 的方式安装最新的 docker desktop 由于 k8s 是谷歌的服务以及一些网络的因素，k8s 的安装过程会非常受阻 故采用阿里云的服务进行 k8s 的安装 执行脚本安装 K8S 相关镜像（确认 k8s-for-docker-desktop 文件夹下的 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/k8s/installation.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Installation"}],["meta",{"property":"og:description","content":"Installation 本地 mac 环境下使用的 brew 作为包管理器，通过 brew 的方式安装最新的 docker desktop 由于 k8s 是谷歌的服务以及一些网络的因素，k8s 的安装过程会非常受阻 故采用阿里云的服务进行 k8s 的安装 执行脚本安装 K8S 相关镜像（确认 k8s-for-docker-desktop 文件夹下的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Installation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"本地","slug":"本地","link":"#本地","children":[]}],"git":{"createdTime":1672229303000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":4},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"se/devops/k8s/installation.md","localizedDate":"December 28, 2022","excerpt":"\\n<h2>本地</h2>\\n<p>mac 环境下使用的 brew 作为包管理器，通过 brew 的方式安装最新的 docker desktop</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">brew</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --cask</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{h as comp,k as data};
