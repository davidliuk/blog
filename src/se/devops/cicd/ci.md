# CI

jenkins: 功能全，但是相对陈旧，不够灵活，不够简洁，且不是k8s原生的，需要额外的维护成本

Argo workflows：k8s原生的，配置灵活

Tekton：k8s原生的，配置灵活

## Argo workflows

Argo workflows是一个k8s原生的workflow engine，可以用来做CI/CD，也可以用来做其他的workflow，比如ETL，ML pipeline等。

Argo workflows的核心概念是workflow template，workflow template是一个k8s的CRD，定义了一个workflow的模板，包括workflow的各个步骤，每个步骤的输入输出，以及步骤之间的依赖关系。

workflow template的定义是一个yaml文件，可以通过argo cli来创建，也可以通过argo web ui来创建。

workflow template的定义文件中，可以定义多个步骤，每个步骤可以是一个container，也可以是一个workflow template，也可以是一个dag，也可以是一个step group。

workflow template的定义文件中，可以定义每个步骤的输入输出，以及步骤之间的依赖关系。

workflow template的定义文件中，可以定义workflow的参数，参数可以是一个字符串，也可以是一个数组，也可以是一个map，也可以是一个artifact，也可以是一个workflow template。

如需执行脚本，可以定义script template，script template是一个workflow template，其中只有一个步骤，步骤的container是一个脚本，脚本的内容可以是bash，也可以是python，也可以是其他语言。
