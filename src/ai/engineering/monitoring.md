# Monitoring AI Systems

AI monitoring 同时观察服务、数据、模型和产品。只监控 CPU 与错误率，会漏掉“系统稳定运行但决策质量已经下降”的 silent failure。

## Four Layers

| Layer | Signals |
| --- | --- |
| Service | availability、latency、throughput、queue、resource、cost |
| Data | schema、missing、freshness、distribution、label delay |
| Model | prediction distribution、confidence、calibration、slice quality |
| Product | completion、acceptance、correction、retention、harm report |

## Drift

- **Input drift**：特征或请求分布变化。
- **Prediction drift**：模型输出分布变化。
- **Concept drift**：输入与 outcome 的关系变化。
- **Policy drift**：产品、routing 或用户行为因模型上线发生变化。

Drift 不是自动 rollback 结论。它是调查信号，需要连接 outcome 或抽样 label。

## Generative and Agent Signals

- prompt / output length 与 refusal rate；
- groundedness、citation validity 和 user correction；
- tool selection、tool error、loop length 与 recovery；
- unsafe action attempt、approval rate 和 policy block；
- latency / cost 按 task、model、tenant 和 tool 分片。

## Feedback Quality

用户点击或接受不一定代表内容正确。反馈可能被展示位置、默认选项和模型自身策略影响。用于 retraining 前应记录采集 policy，并识别 feedback loop。

## Incident Response

1. 冻结 model、prompt、tool、index 与 data version。
2. 保存 representative trace 和受影响 slice。
3. 用 policy、routing 或 fallback 先限制风险。
4. 区分 model failure、system failure 与 measurement failure。
5. 修复后把事故转成永久 evaluation case。
