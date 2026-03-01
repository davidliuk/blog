# Alignment

Paradigm

- RLHF (Reinforcement Learning from Human Feedback)
- RLVR (Reinforcement Learning from Verifiable Rewards)
  - **ORM (Outcome-based Reward Model)：**只看结果。只要最后答案对，就给奖励。
    - **优点：** 简单，不会引导模型造假。
    - **缺点：** 容易产生“对的答案、错的逻辑”。
  - **PRM (Process-based Reward Model)：**
    - **步步给分。** 对推理的每一步进行验证。
    - **难点：** 并不是所有任务的中间步骤都能自动验证（代码执行可以，但纯数学证明很难）。