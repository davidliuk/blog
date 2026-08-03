---
title: Spring Security
description: Spring Security concepts for authentication, authorization, sessions, tokens, and request protection.
icon: shield-halved
---

# Spring Security

Spring Security 通过一条过滤器链把请求转换为安全决策：读取凭证、建立身份、判断权限，并处理未认证或被拒绝的结果。

## Request Flow

1. Security filter 读取 session、token 或其他凭证。
2. Authentication 组件验证凭证并创建 principal。
3. Security context 在当前请求内保存身份。
4. Authorization 根据资源、动作和上下文判断访问。
5. Exception handler 把失败转换为一致的 HTTP 响应。

## Separate the Concerns

| Concern | Meaning | Typical mistake |
| --- | --- | --- |
| Authentication | 用户或服务是谁 | 把 token 存在当作认证成功 |
| Authorization | 当前主体能做什么 | 只在前端隐藏按钮 |
| Session | 身份状态怎样跨请求保存 | 忽略撤销、过期和并发登录 |
| CSRF | 浏览器自动携带凭证带来的伪造请求 | 把 CORS 当成 CSRF 防护 |
| CORS | 浏览器是否允许脚本读取跨域响应 | 误认为它能阻止非浏览器调用 |

## OAuth 2.0 and OIDC

OAuth 2.0 解决委托授权，OpenID Connect 在其上增加身份层。Resource Server 必须验证签名、issuer、audience、expiry 和 scope，不能只解析 JWT 内容。

## Security Checklist

- 默认拒绝，按最小权限开放。
- 授权在服务端资源边界执行。
- 密码使用专用慢哈希，不可逆加密不是替代方案。
- token 和 session 有明确过期、刷新、撤销与密钥轮换路径。
- 日志记录安全事件，但不泄露密码、token 或敏感个人信息。
- 用集成测试覆盖未认证、越权、过期和跨租户访问。
