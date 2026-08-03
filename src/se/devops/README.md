---
title: DevOps & Infrastructure
description: Notes on Unix, containers, orchestration, and continuous delivery.
icon: infinity
---

# DevOps & Infrastructure

DevOps 的目标是缩短“代码发生变化”到“生产结果被验证”的反馈时间，同时控制发布风险。

## Delivery Stack

<div class="section-card-grid">
  <a class="section-card" href="./unix/">
    <span class="section-card__eyebrow">Runtime environment</span>
    <h3>Unix</h3>
    <p>进程、文件系统、权限、网络、Shell 与系统管理。</p>
  </a>
  <a class="section-card" href="./docker/">
    <span class="section-card__eyebrow">Packaging</span>
    <h3>Docker</h3>
    <p>镜像、容器、网络和持久化，让运行环境可以重复。</p>
  </a>
  <a class="section-card" href="./k8s/">
    <span class="section-card__eyebrow">Orchestration</span>
    <h3>Kubernetes</h3>
    <p>声明式部署、调度、服务发现、扩缩容和故障恢复。</p>
  </a>
  <a class="section-card" href="./cicd/">
    <span class="section-card__eyebrow">Automation</span>
    <h3>CI/CD</h3>
    <p>从验证、构建到发布和回滚的自动化质量门禁。</p>
  </a>
</div>

## Production Checklist

- 构建产物是否可重复，配置是否与镜像分离？
- 健康检查能否区分启动、存活和就绪？
- 发布是否支持渐进放量、快速停止和回滚？
- 数据迁移能否兼容新旧版本同时运行？
- 指标、日志和追踪能否证明发布结果？
