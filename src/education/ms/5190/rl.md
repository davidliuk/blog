# Reinforcement Learning

Three Kinds of Learning

- • Supervised learning
  - • Given labeled examples 𝑥, 𝑦 , learn to predict 𝑦 given 𝑥
- • Unsupervised learning
  - • Given unlabeled examples 𝑥, uncover structure in 𝑥
- • Reinforcement learning
  - • Learning from sequence of interactions with the environment
  - • Learning from the feedback/rewards from the environment, instead of ground-truth labels.

## Sequential Decision Making

• Machine learning almost always aims to inform decision making

• Only show user an image if it contains a pet

• Help a doctor make a treatment decision

• Reinforcement learning is about sequences of decisions

• Naïve strategy: Predict future and optimize decisions accordingly

• But decisions affect forecasts

• If we show the user too many cats, they might get bored of cats!

• Solution: Jointly perform prediction and optimization

## Reinforcement Learning Problem

At a high level, we need to specify the following:

- • State space: What are the observations the agent may encounter?
- • Action space: What are the actions the agent can take?
- • Transitions/dynamics: How the state is updated when taking an action
- • Rewards: What rewards the agent receives for taking an action in a state

• For most of today, assume state and action spaces are finite

## Markov Decision Process (MDP)

Planning: Given 𝑃 and 𝑅, compute the optimal policy 𝜋∗

• Purely an optimization problem! No learning

• Reinforcement learning: Compute the optimal policy 𝜋∗ without prior knowledge of 𝑃 and 𝑅

### Policy Value Function





### Optimal Value Function

## Q Learning

由于它可以使用一套策略收集数据，同时更新另一套策略的 Q 值，因此它被称为**离轨学习 (Off-Policy Learning**



**在轨学习 (On-Policy Learning)**