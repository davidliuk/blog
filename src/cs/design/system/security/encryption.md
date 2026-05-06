# Encryption 加密

加密解决的是“数据如何安全存储与传输”。

## 常见场景

- 用户密码存储
- 服务间通信
- 配置与密钥管理
- 敏感字段落库

## 基本原则

- 密码不要明文存储
- 传输层优先使用 HTTPS / TLS
- 密钥和业务数据不要混放
- 不要自己发明加密算法

## 常见区分

- Hash：适合密码校验
- Symmetric Encryption：适合高性能数据加解密
- Asymmetric Encryption：适合密钥交换、签名与证书体系

## 相关主题

- `./authentication.md`
- `./authorization.md`

