# AI Governance

Governance 让风险决策有 owner、有证据、有生命周期。它不等于增加文档审批，而是确保模型变化、数据使用和自动化权限与组织目标一致。

## Lifecycle Responsibilities

| Stage | Required evidence |
| --- | --- |
| Design | intended use、out-of-scope use、stakeholder、risk assessment |
| Data | provenance、license/consent、quality、retention、deletion |
| Development | lineage、experiment、known limitation、security review |
| Evaluation | capability、safety、slice、red team、human review |
| Release | owner、approval、monitoring、rollback、user communication |
| Operation | incident、complaint、drift、access review、change log |
| Retirement | traffic migration、artifact retention、data deletion、credential revoke |

## Model / System Card

记录：

- system purpose 与用户；
- model、prompt、retrieval、tools 和 policy 版本；
- training / evaluation data scope；
- key metric、slice、known failure 和 uncertainty；
- authority、human oversight 与 fallback；
- monitoring、incident contact 和 change history。

## Release Gates

Gate 必须绑定风险，而不是一套所有系统通用的固定分数。高风险领域需要更强的 domain validation、human review 和 post-release sampling。

## Change Management

模型权重不变时，prompt、tool、index、routing 或 safety policy 的变化仍可能显著改变行为。所有行为相关组件都进入同一 change record 和 regression suite。

## User Transparency

用户应知道何时在与 AI 交互、系统能做什么、重要限制是什么，以及如何纠正、申诉或联系人工。解释应支持正确使用，而不是只满足形式。
