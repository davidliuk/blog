---
title: System Security
description: Security design through assets, trust boundaries, authentication, authorization, encryption, and abuse resistance.
icon: shield-halved
---

# System Security

安全设计从 threat model 开始：保护什么资产、谁可能攻击、入口在哪里、成功攻击的影响是什么。认证、授权和加密只是控制措施，不是完整的安全结论。

## Threat Modeling

1. 列出用户数据、凭证、模型、资金、控制面等资产。
2. 画出客户端、边缘、服务、数据库和第三方之间的 trust boundary。
3. 对每个数据流检查 spoofing、tampering、disclosure、denial 与 privilege escalation。
4. 按 likelihood × impact 排序，而不是平均分配安全投入。
5. 为关键控制设计日志、告警、轮换和恢复。

## Core Topics

- [Authentication](./authentication.md)：你是谁，以及身份如何建立和续期。
- [Authorization](./authorization.md)：主体能对哪个资源执行什么动作。
- [Encryption](./encryption.md)：传输与静态数据的机密性、完整性和密钥管理。

## Defense in Depth

| Boundary | Controls |
| --- | --- |
| Edge | TLS、rate limit、request size、bot/abuse detection |
| Identity | MFA、session/token lifecycle、credential protection |
| Service | least privilege、input validation、tenant isolation |
| Data | access policy、encryption、backup、retention、audit |
| Operations | secret rotation、patching、change control、incident response |

## Review Checklist

- 默认拒绝，权限是否以资源和动作表达？
- 服务身份和用户身份是否被清楚区分？
- 敏感数据是否被日志、指标或错误响应泄露？
- 限流是否按攻击成本和共享资源设计？
- 密钥、token、证书和个人数据怎样撤销或删除？
