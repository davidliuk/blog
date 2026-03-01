# Linear Regression

> 最简单的算法，但是要讲三周

### Supervised Learning

- Data $Z=\{(x_i,y_i)\}$

- Machine learning algorithm

- Model $f$

  New input $x$ => Model => Predicted output $y$

Question: What model family (aka hypothesis class) to consider?

![image-20260202143425195](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260202143425195.png)

### Linear Functions

Consider the space of linear functions $f_\beta(x)$ defined by
$$
f_\beta(x)=\beta^Tx=[\beta\space\dots\space\beta][]
$$

- $x$ is called an **input** (a.k.a. features or covariates)
- $\beta$ is called the **parameters** (a.k.a. parameter vector)
- $y$ is called the **label** (a.k.a. output or response)

### Linear Regression Problem

- Input: Dataset $Z=\{(x_i,y_i)\}$
- Output: A linear function $f_\beta(x)=\beta^Tx$ that minimizes the MSE

### Loss Function

Mean sqaured error (MSE)
$$
L(\beta;Z)=\frac{1}{n}\sum_{i=1}^n(y_i-\beta^Tx_i)^2
$$

> Computationally convenient and works well in practice

True Function $f^*$

- Mean absolute error
- Mean relative error
- $R^2$ score
- Pearson correlation
- Rank-order correlation

## Feature Maps

Linear Regression When Data is Non-Linear?

Quadratic Feature Map

### Training vs. Test Data

- • Training data: Examples 𝑍 = 𝑥, 𝑦 used to fit our model
- • Test data: New inputs 𝑥 whose labels 𝑦 we want to predict

---

Capacity of a model family captures "complexity" of data it can fit

- Higher capacity -> more likely tour

Effectively changes the hypothesis space! This is a powerful strategy for encoding “prior knowledge” about the function we are looking to approximate.

## Assessing Underfitting & Overfitting

### Training/Test Split

![image-20260202143924147](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260202143924147.png)

#### Overfitting (high variance)

- • High capacity model capable of fitting complex data
- • Insufficient data to constrain it

#### Underfitting (high bias)

- • Low capacity model that can only fit simple data
- • Sufficient data but poor fit



### How to fix undercutting/overfitting

- Choose the right model

### Regularization

Modifying the loss function

#### L2

Original loss+regularization

$\|\beta\|_2^2=\sum\limits_i\beta_i^2$

#### Intuition on L2 Regularization

Encourages "simple" functions

pulls coefficient to 0

#### L1

$\|\beta\|_1=\sum\limits_i|\beta_i|$

### Hyperparameter Tuning & Model Selection

- training data
- val data
- test data



Choice of Learning Rate

L2 Regularized Linear Regressions

weight decay that encourages $\beta$ to be small

## Minimizing the MSE Loss

- • Closed-form solution: Compute using matrix operations
- • Optimization-based solution: Search over candidate 𝛽

### Closed-form solution



### Stochastic gradient descent

Iterative Optimization Algorithms

Iteratively optimize 𝛽

- • Initialize 𝛽1 ← Init …
- • For some number of iterations 𝑇, update 𝛽𝑡 ← Step(… )
- • Return 𝛽𝑇

---

