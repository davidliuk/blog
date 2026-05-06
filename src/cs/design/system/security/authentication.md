# Authentication 认证

认证解决的是“你是谁”。

## 常见方案

- Session 认证
- Token 认证
- OAuth / SSO

## Session

服务端保存会话状态，客户端通常通过 Cookie 携带会话标识。

优点：

- 服务端可控
- 失效与踢出更直接

缺点：

- 扩容时要考虑会话共享
- 对跨域和多端接入没有 Token 灵活

## Token

服务端签发 Token，客户端在后续请求中携带。

优点：

- 更适合前后端分离和多端接入
- 服务扩容时状态依赖更少

缺点：

- 撤销与续签策略要单独设计
- Token 泄漏后风险更直接

## 相关主题

- `./authorization.md`
- `./encryption.md`
