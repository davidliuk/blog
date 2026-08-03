# SGLang

SGLang 是面向大语言模型与多模态模型的服务和编程系统。它把高性能推理运行时、结构化生成、缓存复用和请求编排放在同一套抽象中，适合包含多轮调用、共享前缀或工具链的应用。

## RadixAttention

许多请求共享 system prompt、few-shot 示例或文档前缀。RadixAttention 用 radix tree 管理 KV cache，使不同请求能够复用公共前缀，而不必反复执行 prefill。

收益取决于前缀重复率、缓存容量和调度策略。缓存命中率低时，树维护本身也有成本；涉及多租户或敏感上下文时，还必须定义隔离和淘汰边界。

## Continuous Batching

运行时按 token step 动态加入和移除请求，提高 GPU 利用率。调度器需要在吞吐、首 token 延迟、每 token 延迟和公平性之间取舍；长 prompt 或长输出可能阻塞短请求，因此通常配合 chunked prefill、优先级和容量限制。

## Structured Outputs

结构化生成将 JSON Schema、正则或语法约束编译为 token 级约束，只允许模型选择仍可形成合法输出的 token。它能保证语法合法，但不能保证字段语义正确；业务层仍需校验类型、范围、引用对象和权限。

## 使用场景

- 多轮对话和共享长 system prompt；
- RAG 中相同文档前缀的批量问答；
- constrained decoding 与工具参数生成；
- 多阶段推理、分支采样和 prompt program；
- 需要高吞吐 API 的本地模型服务。

## 评估清单

比较运行时不能只看 tokens/s，还应记录模型、精度、GPU、并发、输入输出长度分布及 cache 命中率，并分别报告 TTFT、TPOT、P95/P99、吞吐、显存占用和错误率。

参考：[SGLang Documentation](https://docs.sglang.ai/)。
