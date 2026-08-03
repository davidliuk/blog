---
title: CI/CD
description: A delivery pipeline model covering integration, artifact promotion, deployment, verification, and rollback.
icon: arrows-rotate
---

# CI/CD

CI/CD 的目标不是“自动执行更多脚本”，而是缩短从代码变化到生产反馈的时间，并让每一次变化都可追踪、可验证、可停止和可恢复。

## The Delivery Flow

<div class="knowledge-flow" aria-label="Software delivery flow">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Integrate</strong>
    <p>快速合并小变更，用静态检查、单元测试和契约检查保护主干。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Package</strong>
    <p>从已验证提交生成不可变制品，记录源码、依赖和构建环境。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Deploy</strong>
    <p>把同一制品逐级提升到目标环境，控制配置、流量和变更批次。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Verify</strong>
    <p>用健康检查、SLO、业务指标和错误预算决定继续、停止或回滚。</p>
  </div>
</div>

## Pipeline Stages

| Stage | Main evidence | Common failure |
| --- | --- | --- |
| Pre-merge | format、lint、unit、secret scan | 反馈太慢，开发者绕过检查 |
| Build | 可复现制品、SBOM、版本元数据 | 环境漂移、依赖不可追踪 |
| Integration | contract、migration、dependency tests | 测试环境与真实依赖差异过大 |
| Release | approval、change record、progressive rollout | 一次全量发布，无法隔离影响 |
| Post-release | SLO、关键业务指标、日志与追踪 | 只看进程存活，不看用户结果 |

## Design Principles

- **Build once, promote many**：环境之间提升同一制品，只替换外部配置。
- **Small batches**：小变更更容易理解、验证和回滚。
- **Fast first signal**：便宜、稳定的检查在前，昂贵测试在后。
- **Backward compatibility**：API 与 Schema 变更允许新旧版本短期共存。
- **Rollback is a feature**：回滚路径、数据兼容和操作权限需要提前验证。

## Notes

- [Continuous Integration](./ci.md)
- [Continuous Delivery](./cd.md)
- [Makefile](./makefile.md)

## Release Review

1. 哪个提交、制品和配置将被发布？
2. 最先影响哪一小部分流量，怎样扩大？
3. 哪些指标证明结果正常，观察多久？
4. 触发停止或回滚的阈值是什么？
5. 数据变更是否支持向前修复，而不只支持代码回滚？
