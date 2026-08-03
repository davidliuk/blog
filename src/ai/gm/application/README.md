---
title: AI Applications
description: AI application systems that combine models with context, retrieval, tools, state, policy, and user experience.
icon: screwdriver-wrench
---

# AI Applications

应用层把模型能力嵌入真实工作流。一个可靠 AI 产品通常不是单次 prompt，而是 context construction、retrieval、tools、state、policy、evaluation 和 human interaction 的组合。

## System Map

<div class="ai-card-grid">
  <a class="ai-card" href="./rag/">
    <span class="ai-card__eyebrow">External knowledge</span>
    <h3>Retrieval-Augmented Generation</h3>
    <p>Indexing、retrieval、reranking、context construction、generation 和 citation。</p>
  </a>
  <a class="ai-card" href="./agent/">
    <span class="ai-card__eyebrow">External action</span>
    <h3>Agents & Tools</h3>
    <p>Goal、state、tool、runtime、recovery、authority 和 long-running workflow。</p>
  </a>
  <a class="ai-card" href="../training/alignment/prompt/">
    <span class="ai-card__eyebrow">Behavior interface</span>
    <h3>Context & Prompting</h3>
    <p>Instruction、example、evidence、memory 和 output contract 的组织。</p>
  </a>
  <a class="ai-card" href="../../evaluation/">
    <span class="ai-card__eyebrow">Evidence</span>
    <h3>Evaluation</h3>
    <p>Task success、groundedness、tool correctness、safety、latency 和 cost。</p>
  </a>
</div>

## Application Contract

1. 用户真正要完成的 job 是什么？
2. 哪些信息来自模型参数，哪些必须检索或询问？
3. 哪些动作只读、可逆、不可逆或影响其他人？
4. 不确定时系统应该澄清、拒绝、fallback 还是请求人工？
5. 成功如何由外部状态证明，而不是由模型自评？

## Context Is a Budget

Prompt、conversation、retrieval、memory 和 tool result 共同竞争有限 context。应优先保留当前目标、可靠证据、操作 contract 和必要状态，删除重复与低可信内容。

## Product Failure Modes

- 回答流畅但没有证据；
- 检索正确但 context assembly 丢失关键关系；
- tool 成功返回，但业务目标未完成；
- memory 用旧偏好覆盖当前明确指令；
- model failure 被 UI 包装成确定结论；
- fallback 静默生效，长期质量下降无人发现。
