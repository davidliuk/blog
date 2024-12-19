import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as i,o as p}from"./app-PqS9YW_3.js";const t={};function r(a,l){return p(),o("div",null,l[0]||(l[0]=[i('<h1 id="ci" tabindex="-1"><a class="header-anchor" href="#ci"><span>CI</span></a></h1><p>jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是 k8s 原生的，需要额外的维护成本</p><p>Argo workflows：k8s 原生的，配置灵活</p><p>Tekton：k8s 原生的，配置灵活</p><h2 id="argo-workflows" tabindex="-1"><a class="header-anchor" href="#argo-workflows"><span>Argo workflows</span></a></h2><p>Argo workflows 是一个 k8s 原生的 workflow engine，可以用来做 CI/CD，也可以用来做其他的 workflow，比如 ETL，ML pipeline 等。</p><p>Argo workflows 的核心概念是 workflow template，workflow template 是一个 k8s 的 CRD，定义了一个 workflow 的模板，包括 workflow 的各个步骤，每个步骤的输入输出，以及步骤之间的依赖关系。</p><p>workflow template 的定义是一个 yaml 文件，可以通过 argo cli 来创建，也可以通过 argo web ui 来创建。</p><p>workflow template 的定义文件中，可以定义多个步骤，每个步骤可以是一个 container，也可以是一个 workflow template，也可以是一个 dag，也可以是一个 step group。</p><p>workflow template 的定义文件中，可以定义每个步骤的输入输出，以及步骤之间的依赖关系。</p><p>workflow template 的定义文件中，可以定义 workflow 的参数，参数可以是一个字符串，也可以是一个数组，也可以是一个 map，也可以是一个 artifact，也可以是一个 workflow template。</p><p>如需执行脚本，可以定义 script template，script template 是一个 workflow template，其中只有一个步骤，步骤的 container 是一个脚本，脚本的内容可以是 bash，也可以是 python，也可以是其他语言。</p><ol><li><p>开发、自测</p><p>功能开发、自测在自己的 feature 分支中完成，如 feature/addButton，提交到远程代码仓。</p></li><li><p><code>git commit -m &quot;AddFeature:add button&quot;</code></p></li><li><p><code>git push origin feature/addButton</code></p></li><li><p>集成测试</p></li></ol><p>合并 feature 到 develop 分支</p><p>完成自测后合到 develop 分支，与其他模块进行集成，解决冲突，并联调、集成测试。</p><ol><li><p>git checkout develop 切到 develop 分支</p></li><li><p>git pull origin develop 获取最新代码</p></li><li><p>git checkout feature/addButton 切回开发分支</p></li><li><p>git merge develop 合并最新 develop 代码</p></li><li><p><strong>解决冲突，并再次自测，确保自己的功能不被影响</strong></p></li><li><p>git commit -m &quot;Merge latest develop code&quot;</p></li><li><p>git push origin feature/addButton</p></li><li><p>在 coding 中提交合并请求（feature/addButton -&gt; develop），并找人进行 code review</p></li><li><p>完成 code review，代码合入 develop 分支</p></li></ol><p>CI 流程</p><p>jenkin 中配置了 develop 分支的自动构建，默认半小时触发一次。</p><p>如果比较紧急，可以登录到 jenkin 页面，进行手动触发</p><h3 id="构建管理-ci" tabindex="-1"><a class="header-anchor" href="#构建管理-ci"><span>构建管理 CI</span></a></h3><p>版本获取工具</p><p>镜像构建</p><ol><li>目录结构</li><li>Dockerfile</li><li>Makefile</li></ol><h3 id="部署管理-cd" tabindex="-1"><a class="header-anchor" href="#部署管理-cd"><span>部署管理 CD</span></a></h3><p>版本识别工具</p><p>GitOps 部署配置</p><ol><li><p>deployment.yaml</p></li><li><p>kustomization.yaml</p></li><li><p>Makefile</p></li><li><p>各个代码仓负责人需要做的是：</p><ol><li><p>各个代码仓，按照第五章的分支管理规范，创建 develop、r*和 master 分支</p></li><li><p>将代码仓通过 submodule 的方式，加入到 AIPlatformDeploy 中</p></li><li><p>将代码仓的部署相关 yaml 放到 AIPlatformDeploy 代码仓中，根据示例微调 yaml 中字段</p></li></ol></li></ol><p>注：为保障 CD 接入不出问题，步骤 b、c、d 由[@赵本光](&lt;javascript:void(0)&gt;)、[@俞凯](&lt;javascript:void(0)&gt;)协助各个代码仓负责人进行。</p><h2 id="分支和发版测试及生产环境发布管理" tabindex="-1"><a class="header-anchor" href="#分支和发版测试及生产环境发布管理"><span>分支和发版测试及生产环境发布管理</span></a></h2><p>我们通过 GitOps 部署服务, 监控 GitOps 代码仓相应分支的对应目录, 手动触发或自动发布测试,预发,以及生产环境部署.</p><p><strong>注</strong>: 原来每个人个人工作环境中的 k8s 集群.kube/config, 包括测试,预发和生产等, 需要严格管控, 尤其是生产环境. 这些配置, 仅可用作问题定位时访问集群, 而不可更改其环境配置.</p><ol><li>模块代码仓分支管理规范</li></ol><p>为了规范测试,预发,和生产的产品迭代代码和配置管理, 以及紧急线上问题修复, 需要执行严格的分支管理.</p><p>版本号构成:</p><p>格式:<code>v&lt;大版本号&gt;.&lt;小版本号&gt;-&lt;count&gt;-&lt;commitid&gt;</code>, 例如: v1.0-12-e6e5d98</p><ol><li><ol><li>功能和版本匹配原则</li></ol></li></ol><ul><li><p>没有新增功能(例如 bugfix 等), 不增加大小版本号. 自动版本号部分, 会随着代码提交自动变化.</p></li><li><p>没有新增重大功能, 不增加大版本号. 同一大版本内, 各软件版本或发布之间, 必须保持功能兼容, 且可平滑升级.</p></li><li><p>大版本之间, 必须可升级; 建议可平滑升级.</p><ol><li>主要分支构成</li></ol></li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/link.png" alt="img" loading="lazy"></p><ol><li><ol><li>分支创建及其管理</li></ol><ul><li><p>master 分支作为 production 分支. 该分支只允许合并最新稳定 Release 分支 rX.Y.</p></li><li><p>develop 在创建代码仓时创建.</p></li></ul></li></ol><p>分支和迭代流程</p><p>开发流程及其 Git 版本标签 vX.Y, 以及 Release 分支 rX.Y 的创建规则:</p><ul><li><ul><li><p>由版本管理员, 在 develop 分支中对应首个新功能 commit id, 创建 vX.Y 的版本 tag. 例如: 描述新功能规划的 <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> 文件的代码提交.</p></li><li><p>开发分支功能通过开发联调自测后, 在版时, 由版本管理员, 基于当前 develop 分支创建 Release 分支 rX.Y, .</p></li><li><p>rX.Y 发版后, 进入测试阶段.</p><ul><li><p>非阻塞问题, 在开发分支基础上修复, 在当前测试完成一轮后, 合并进入最新 rX.X. 进入回归测试阶段.</p></li><li><p>阻塞性问题, 在当前 rX.X 基础上修复, 同时合并进入 develop 和最新 rX.X 分支后. 继续测试.</p></li></ul></li><li><p>至全部测试用例回归通过之前, develop 分支不允许合并非 vX.X 版本规划功能的代码.</p></li><li><p>回归测试全部通过后, 进入新版本功能的开发阶段, develop 分支解除分支合并限制, 可以合并入新功能代码. 开始下一个迭代开发周期, 同时当前分支 rX.Y 成为历史版本分支.</p></li></ul><ol><li>历史版本 bugfix</li></ol></li></ul><p>历史版本分支 rX.Y 上发现的问题, 修复过程</p><ul><li><p>基于 rX.Y 分支创建 bugfix 分支, 开发测试通过后合并入 rX.Y 分支, 进入测试回归阶段.</p></li><li><p>如果该 bugfix 也需要移植入其它版本分支或开发分支, 可采用 cherry-pick 方式.</p></li></ul><ol><li>发版测试,预发和生产上线</li></ol><p>部署代码仓, 由版本管理员创建对应分支 rX.Y, 关联对应组件代码仓的分支 rX.Y, 进行版本发布测试. 为了简化问题, 所有的组件代码仓, 均需要保持同样的分支结构, 无论是否有代码修改.</p><p>部署代码仓通过 git submodule 关联各个模块代码仓的 \b 分支, 例如:生产分支 imaster. 通过自动触发部署到预发环境. 预发环境, 进行系统回归测试通过后, 手动触发至生产环境.</p><ol><li><ol><li>上线过程</li></ol></li></ol><p>发版测试 -&gt; 预发环境验证 -&gt; 生产环境灰度及回滚</p><p><strong>管理规范</strong></p><ol><li><ol><li><ol><li><p>首先在版本分支(rX.Y), 进行发版测试. 测试重点在新增功能部分.</p></li><li><p>发版测试通过后, 合并发版的最新版本 rX.Y, 至生产分支 master.</p></li><li><p>然后, 把生产分支部署在测试环境中, 进行预发环境验证. 验证测试重点是整体功能集成性的回归测试, 例如保证分支合并的完整性等.</p></li><li><p>预发环境验证通过后, 把生产分支部署通过手动管理的方式, 在生产环境中进行同步更新部署. 进行灰度或回滚.</p></li></ol></li><li><p>权限管理</p></li></ol></li></ol><p>发版测试环境的 ArgoCD 服务, 和预发和生产环境, 采用不同的服务隔离. 发版测试环境, 由测试人员管理; 预发和生产环境发布, 由上线负责人管理.</p><p>测试环境: <a href="http://cicd.mlops-test.jd.com/applications" target="_blank" rel="noopener noreferrer">http://cicd.mlops-test.jd.com/applications</a> : 进行发版测试, 和预发验证.</p><p>生产环境: <a href="http://cicd.kuplus.jd.com/applications" target="_blank" rel="noopener noreferrer">http://cicd.kuplus.jd.com/applications</a> : 进行上线.</p><p><strong>注</strong>:</p><ul><li><ul><li><p>没有预发分支. 生产(master)分支部署在预发环境, 则为预发. 部署在生产环境中,则为上线.</p></li><li><p>上线过程为<strong>手动触发</strong>同步或回滚.</p></li></ul></li></ul><ol><li><ol><li>后续实施步骤</li></ol></li></ol><p>1、所有组件统一到代码仓 AIPlatform,除非必要申请新代码仓需说明理由，经 leader 同意。</p><p>2、建立 develop/release/master 分支合并的规则，统一宣贯。</p><p>3、建立测试、预发、生产三个环境，生产环境仅发版负责人可以进行部署。</p><p>4、回收生产集群 k8s 直接访问权限。</p>',61)]))}const d=e(t,[["render",r],["__file","ci.html.vue"]]),c=JSON.parse(`{"path":"/se/devops/cicd/ci.html","title":"CI","lang":"en-US","frontmatter":{"description":"CI jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是 k8s 原生的，需要额外的维护成本 Argo workflows：k8s 原生的，配置灵活 Tekton：k8s 原生的，配置灵活 Argo workflows Argo workflows 是一个 k8s 原生的 workflow engine，可以用来做 CI/CD，也可以用...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/cicd/ci.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CI"}],["meta",{"property":"og:description","content":"CI jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是 k8s 原生的，需要额外的维护成本 Argo workflows：k8s 原生的，配置灵活 Tekton：k8s 原生的，配置灵活 Argo workflows Argo workflows 是一个 k8s 原生的 workflow engine，可以用来做 CI/CD，也可以用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/link.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:56:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:56:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CI\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/link.png\\"],\\"dateModified\\":\\"2023-11-22T09:56:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Argo workflows","slug":"argo-workflows","link":"#argo-workflows","children":[{"level":3,"title":"构建管理 CI","slug":"构建管理-ci","link":"#构建管理-ci","children":[]},{"level":3,"title":"部署管理 CD","slug":"部署管理-cd","link":"#部署管理-cd","children":[]}]},{"level":2,"title":"分支和发版测试及生产环境发布管理","slug":"分支和发版测试及生产环境发布管理","link":"#分支和发版测试及生产环境发布管理","children":[]}],"git":{"createdTime":1691997116000,"updatedTime":1700646963000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":5},{"name":"liudawei47","email":"liudawei47@jd.com","commits":3}]},"readingTime":{"minutes":7.12,"words":2137},"filePathRelative":"se/devops/cicd/ci.md","localizedDate":"August 14, 2023","excerpt":"\\n<p>jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是 k8s 原生的，需要额外的维护成本</p>\\n<p>Argo workflows：k8s 原生的，配置灵活</p>\\n<p>Tekton：k8s 原生的，配置灵活</p>\\n<h2>Argo workflows</h2>\\n<p>Argo workflows 是一个 k8s 原生的 workflow engine，可以用来做 CI/CD，也可以用来做其他的 workflow，比如 ETL，ML pipeline 等。</p>\\n<p>Argo workflows 的核心概念是 workflow template，workflow template 是一个 k8s 的 CRD，定义了一个 workflow 的模板，包括 workflow 的各个步骤，每个步骤的输入输出，以及步骤之间的依赖关系。</p>","autoDesc":true}`);export{d as comp,c as data};
