# Applied Machine Learning

[website](https://www.seas.upenn.edu/~cis5190/spring2026/)

Types of Machine Learning

- Supervised learning
  - Input: Examples of inputs and desired outputs
  - Output: Model that predicts output given a new input
- Unsupervised learning
  - Input: Examples of some data (no “outputs”)
  - Output: Representation of structure in the data
- Reinforcement learning
  - Input: Sequence of interactions with an environment
  - Output: Policy that performs a desired task

---

### Grading Scheme

- Homeworks (5x): 20%
- Project (team of 3): 25%
  - we will not have presentations for final projects. Historically, we have provided the option of a video presentation of your project for extra credit, but we will not have everyone present to each other.

- Midterms exams: 40%
  - midterm 1, 33.5 / 50.0
  - midterm 2

- In-class quizzes: 15%
  - Approx. weekly short quiz: **5-10** mins at the beginning. Best **50%** of scores out of ≈10 quizzes will count.
  - Quizzes will be done on paper
  - Based on last semester’s format, it is not open-book and typically takes up the first five minutes of the lecture, with several questions covering the current or previous week’s topics.
    - 2/5
    - 5/5
    - 3/3
    - 0/?
    - 0/0
    - 2/4
- Bonus points up to 5% of course grade for extra-good citizenship, e.g.
  - answering lots of questions on Ed Forum
  - bug / typo reporting (more info on this soon)
    - first report bug get 1% for total grade

---

- A+: 95+
- A: 90-95
- A-: 85-90
- B+: 80-85
- B: 75-80
- B-: 70-75
- Lower passing grades: 50-70
- May be curved up

### Policy: Human and AI Assistance

Report which AI agent, how you used it, for which problems

## Machine Learning

### What is Machine Learning?

Algorithms that

- improve their performance 𝑃
- at task 𝑇
- with experience 𝐸

A well-defined machine learning task is given by $(P,T,E)$

#### Prediction

- 𝑇 = predict Arctic sea ice extent
- • 𝑃 = prediction error (e.g., absolute difference)
- • 𝐸 = historical data

#### Game Playing

-  𝑇 = playing Chess
- • 𝑃 = win rate against opponents
- • 𝐸 = playing games against itself

### Machine Learning Workflow

![image-20260209104645226](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260209104645226.png)

## Types of Learning

- Supervised learning
  - • Input: Examples of inputs and desired outputs
  - • Output: Model that predicts output given a new input
- • Unsupervised learning
  - • Input: Examples of some data (no “outputs”)
  - • Output: Representation of structure in the data
- • Reinforcement learning
  - • Input: Sequence of interactions with an environment
  - • Output: Policy that performs a desired task

### Supervised Learning

Given 𝑥1, 𝑦1 , … , 𝑥𝑛, 𝑦𝑛 , learn a function that predicts 𝑦 given 𝑥

- • Regression: Labels 𝑦 are real-valued
- • Classification: Labels 𝑦 are categories
- Inputs 𝑥 can be multi-dimensional

### Unsupervised Learning

Given 𝑥1, … , 𝑥𝑛 (no labels), output hidden structure in 𝑥’s

• E.g., clustering

![image-20260209104931787](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260209104931787.png)

### Reinforcement Learning

• Learn how to perform a task from

interactions with the environment

• Examples:

- • Playing chess (interact with the game)
- • Robot grasping an object (interact with the object/real world)
- • Optimize inventory allocations (interact with the inventory system)

![image-20260209104904353](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260209104904353.png)
