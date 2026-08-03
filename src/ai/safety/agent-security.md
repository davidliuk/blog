# Agent Security

Agent security 的核心是防止不可信输入借助模型获得可信工具的权限。Prompt injection 不能只靠另一段 prompt 解决，必须使用系统边界和最小权限。

## Trust Separation

| Source | Default trust |
| --- | --- |
| System / developer policy | 定义允许行为，但仍需 runtime enforcement |
| User instruction | 只在用户 authority 范围内有效 |
| Retrieved document / webpage | 数据，不是指令 |
| Tool output | 可能错误或被外部系统污染 |
| Model-generated plan | 建议，需要经过 schema、policy 和 permission |

## Defense Layers

1. **Capability allowlist**：当前任务只暴露必要工具。
2. **Scoped credential**：token 限制资源、动作、时间和 tenant。
3. **Structured call**：schema validation、type、range 和 destination check。
4. **Policy enforcement**：在模型外判断操作是否允许。
5. **Approval**：高影响、不可逆或跨人操作要求确认。
6. **Sandbox**：代码和文件操作限制网络、文件系统与资源。
7. **Audit**：记录用户、模型、tool、参数、结果和 policy decision。

## Prompt Injection Path

```text
untrusted content
  → model context
  → malicious instruction selected
  → tool call
  → external side effect
```

最有效的控制位于最后两步：即使模型选择了恶意指令，也不能越权执行。

## Data Exfiltration

- Tool result 按字段最小化，不把整个数据库放入 context。
- 不允许任意 URL、邮箱或文件路径作为默认输出 destination。
- Secret 不进入 prompt；工具在受控边界内部使用 secret。
- Memory 按 user / project / tenant 隔离，并验证 read/write scope。

## Recovery

操作使用 idempotency key、dry-run、transaction 或 compensating action。无法撤销的外部写入需要更严格的 precondition 和 approval。
