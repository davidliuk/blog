---
title: AI Safety & Governance
description: AI safety across risk modeling, data, model behavior, agent actions, security, monitoring, and governance.
icon: shield-halved
---

# AI Safety & Governance

AI safety 不是模型外的一层过滤器，而是贯穿 specification、data、training、evaluation、deployment 和 incident response 的系统属性。风险取决于 capability、access、context 和 potential impact。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Risk Management</p>
  <h2>Map the risk. Limit authority. Measure behavior. Preserve recovery.</h2>
  <p>
    从资产和使用场景建立 threat model；让模型能力与实际权限分离；
    用分层 evaluation 和生产监控识别风险；为高影响动作保留审批、审计和恢复路径。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Trustworthiness</span>
    <span class="section-pill">Security</span>
    <span class="section-pill">Privacy</span>
    <span class="section-pill">Agents</span>
    <span class="section-pill">Governance</span>
  </div>
</div>

## Knowledge Map

<div class="ai-card-grid">
  <a class="ai-card" href="./threat-model.md">
    <span class="ai-card__eyebrow">Risk discovery</span>
    <h3>Threat Modeling</h3>
    <p>资产、行为、攻击者、trust boundary、failure mode 和 impact。</p>
  </a>
  <a class="ai-card" href="./agent-security.md">
    <span class="ai-card__eyebrow">Action safety</span>
    <h3>Agent Security</h3>
    <p>Prompt injection、tool authority、data flow、approval 和 sandbox。</p>
  </a>
  <a class="ai-card" href="./governance.md">
    <span class="ai-card__eyebrow">Lifecycle control</span>
    <h3>Governance</h3>
    <p>Ownership、documentation、release gates、monitoring、incident 和 retirement。</p>
  </a>
</div>

## Risk Surfaces

| Surface | Example risk |
| --- | --- |
| Data | privacy、consent、provenance、bias、poisoning |
| Model | hallucination、unsafe content、memorization、capability misuse |
| Application | misleading UX、automation bias、bad fallback、overtrust |
| Agent | prompt injection、excess authority、irreversible side effect |
| Infrastructure | model theft、secret exposure、supply chain、denial of service |
| Society / organization | discrimination、misinformation、concentration、accountability gap |

## Control Hierarchy

1. **Avoid**：不在高风险场景使用能力，或缩小 scope。
2. **Prevent**：data control、least privilege、input validation、policy。
3. **Detect**：evaluation、monitoring、audit、red team。
4. **Contain**：sandbox、rate limit、approval、blast-radius isolation。
5. **Recover**：rollback、revoke、delete、notify、repair。

## Reference Framework

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
