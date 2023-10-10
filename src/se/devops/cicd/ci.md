# CI

jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是 k8s 原生的，需要额外的维护成本

Argo workflows：k8s 原生的，配置灵活

Tekton：k8s 原生的，配置灵活

## Argo workflows

Argo workflows 是一个 k8s 原生的 workflow engine，可以用来做 CI/CD，也可以用来做其他的 workflow，比如 ETL，ML pipeline 等。

Argo workflows 的核心概念是 workflow template，workflow template 是一个 k8s 的 CRD，定义了一个 workflow 的模板，包括 workflow 的各个步骤，每个步骤的输入输出，以及步骤之间的依赖关系。

workflow template 的定义是一个 yaml 文件，可以通过 argo cli 来创建，也可以通过 argo web ui 来创建。

workflow template 的定义文件中，可以定义多个步骤，每个步骤可以是一个 container，也可以是一个 workflow template，也可以是一个 dag，也可以是一个 step group。

workflow template 的定义文件中，可以定义每个步骤的输入输出，以及步骤之间的依赖关系。

workflow template 的定义文件中，可以定义 workflow 的参数，参数可以是一个字符串，也可以是一个数组，也可以是一个 map，也可以是一个 artifact，也可以是一个 workflow template。

如需执行脚本，可以定义 script template，script template 是一个 workflow template，其中只有一个步骤，步骤的 container 是一个脚本，脚本的内容可以是 bash，也可以是 python，也可以是其他语言。

1. 开发、自测

   功能开发、自测在自己的 feature 分支中完成，如 feature/addButton，提交到远程代码仓。

2. `git commit -m "AddFeature:add button"`

3. `git push origin feature/addButton`

4. 集成测试

合并 feature 到 develop 分支

完成自测后合到 develop 分支，与其他模块进行集成，解决冲突，并联调、集成测试。

1. git checkout develop 切到 develop 分支

2. git pull origin develop 获取最新代码

3. git checkout feature/addButton 切回开发分支

4. git merge develop 合并最新 develop 代码

5. **解决冲突，并再次自测，确保自己的功能不被影响**

6. git commit -m "Merge latest develop code"

7. git push origin feature/addButton

8. 在 coding 中提交合并请求（feature/addButton -> develop），并找人进行 code review

9. 完成 code review，代码合入 develop 分支

CI 流程

jenkin 中配置了 develop 分支的自动构建，默认半小时触发一次。

如果比较紧急，可以登录到 jenkin 页面，进行手动触发

### 构建管理 CI

版本获取工具

镜像构建

1. 目录结构
2. Dockerfile
3. Makefile

### 部署管理 CD

版本识别工具

GitOps 部署配置

1. deployment.yaml
2. kustomization.yaml
3. Makefile
4. 各个代码仓负责人需要做的是：

   1. 各个代码仓，按照第五章的分支管理规范，创建 develop、r\*和 master 分支

   2. 将代码仓通过 submodule 的方式，加入到 AIPlatformDeploy 中

   3. 将代码仓的部署相关 yaml 放到 AIPlatformDeploy 代码仓中，根据示例微调 yaml 中字段

注：为保障 CD 接入不出问题，步骤 b、c、d 由[@赵本光](<javascript:void(0)>)、[@俞凯](<javascript:void(0)>)协助各个代码仓负责人进行。

## 分支和发版测试及生产环境发布管理

我们通过 GitOps 部署服务, 监控 GitOps 代码仓相应分支的对应目录, 手动触发或自动发布测试,预发,以及生产环境部署.

**注**: 原来每个人个人工作环境中的 k8s 集群.kube/config, 包括测试,预发和生产等, 需要严格管控, 尤其是生产环境. 这些配置, 仅可用作问题定位时访问集群, 而不可更改其环境配置.

1. 模块代码仓分支管理规范

为了规范测试,预发,和生产的产品迭代代码和配置管理, 以及紧急线上问题修复, 需要执行严格的分支管理.

版本号构成:

格式:`v<大版本号>.<小版本号>-<count>-<commitid>`, 例如: v1.0-12-e6e5d98

1. 1. 功能和版本匹配原则

- 没有新增功能(例如 bugfix 等), 不增加大小版本号. 自动版本号部分, 会随着代码提交自动变化.

- 没有新增重大功能, 不增加大版本号. 同一大版本内, 各软件版本或发布之间, 必须保持功能兼容, 且可平滑升级.

- 大版本之间, 必须可升级; 建议可平滑升级.
  1. 主要分支构成

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/link.png)

1. 1. 分支创建及其管理

   - master 分支作为 production 分支. 该分支只允许合并最新稳定 Release 分支 rX.Y.

   - develop 在创建代码仓时创建.

分支和迭代流程

开发流程及其 Git 版本标签 vX.Y, 以及 Release 分支 rX.Y 的创建规则:

- - 由版本管理员, 在 develop 分支中对应首个新功能 commit id, 创建 vX.Y 的版本 tag. 例如: 描述新功能规划的 README.md 文件的代码提交.

  - 开发分支功能通过开发联调自测后, 在发版时, 由版本管理员, 基于当前 develop 分支创建 Release 分支 rX.Y, .

  - rX.Y 发版后, 进入测试阶段.

    - 非阻塞问题, 在开发分支基础上修复, 在当前测试完成一轮后, 合并进入最新 rX.X. 进入回归测试阶段.

    - 阻塞性问题, 在当前 rX.X 基础上修复, 同时合并进入 develop 和最新 rX.X 分支后. 继续测试.

  - 至全部测试用例回归通过之前, develop 分支不允许合并非 vX.X 版本规划功能的代码.

  - 回归测试全部通过后, 进入新版本功能的开发阶段, develop 分支解除分支合并限制, 可以合并入新功能代码. 开始下一个迭代开发周期, 同时当前分支 rX.Y 成为历史版本分支.

  1. 历史版本 bugfix

历史版本分支 rX.Y 上发现的问题, 修复过程

- 基于 rX.Y 分支创建 bugfix 分支, 开发测试通过后合并入 rX.Y 分支, 进入测试回归阶段.

- 如果该 bugfix 也需要移植入其它版本分支或开发分支, 可采用 cherry-pick 方式.

1. 发版测试,预发和生产上线

部署代码仓, 由版本管理员创建对应分支 rX.Y, 关联对应组件代码仓的分支 rX.Y, 进行版本发布测试. 为了简化问题, 所有的组件代码仓, 均需要保持同样的分支结构, 无论是否有代码修改.

部署代码仓通过 git submodule 关联各个模块代码仓的  分支, 例如:生产分支 imaster. 通过自动触发部署到预发环境. 预发环境, 进行系统回归测试通过后, 手动触发至生产环境.

1. 1. 上线过程

发版测试 -> 预发环境验证 -> 生产环境灰度及回滚

**管理规范**

1. 1. 1. 首先在版本分支(rX.Y), 进行发版测试. 测试重点在新增功能部分.

      1. 发版测试通过后, 合并发版的最新版本 rX.Y, 至生产分支 master.

      1. 然后, 把生产分支部署在测试环境中, 进行预发环境验证. 验证测试重点是整体功能集成性的回归测试, 例如保证分支合并的完整性等.

      1. 预发环境验证通过后, 把生产分支部署通过手动管理的方式, 在生产环境中进行同步更新部署. 进行灰度或回滚.

   1. 权限管理

发版测试环境的 ArgoCD 服务, 和预发和生产环境, 采用不同的服务隔离. 发版测试环境, 由测试人员管理; 预发和生产环境发布, 由上线负责人管理.

测试环境: http://cicd.mlops-test.jd.com/applications : 进行发版测试, 和预发验证.

生产环境: http://cicd.kuplus.jd.com/applications : 进行上线.

**注**:

- - 没有预发分支. 生产(master)分支部署在预发环境, 则为预发. 部署在生产环境中,则为上线.

  - 上线过程为**手动触发**同步或回滚.

1. 1. 后续实施步骤

1、所有组件统一到代码仓 AIPlatform,除非必要申请新代码仓需说明理由，经 leader 同意。

2、建立 develop/release/master 分支合并的规则，统一宣贯。

3、建立测试、预发、生产三个环境，生产环境仅发版负责人可以进行部署。

4、回收生产集群 k8s 直接访问权限。
