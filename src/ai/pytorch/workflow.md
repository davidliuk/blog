# Workflow

1. **data**, get data ready
2. **build** or pick a pretrained model(to suit your problem)
   1. Pick a loss function & optimizer
   2. Build a training loop

3. **Fit** the model to the data and make a prediction
4. Evaluate the model
5. Improve through experimentation
6. Save and reload your trained model

---

1. **data**, get data ready
2. **build** or pick a pretrained model(to suit your problem)
3. **Fit** the model to the data (training)
4. make a **prediction** (inference)
5. saving and loading a model
6. putting it all together
7. Evaluate the model
8. Improve through experimentation
9. Save and reload your trained model

---

Machine Learning: a game of two parts

1. inputs
2. numerical encoding
3. learns representation(patterns/ features/ weights)
4. representation outputs
5. Outputs

---

1. get data into a numerical representation
2. build a model to learn patterns in that numerical representation

---

### dataset

- training set, always
- validation set, often but not always
- Test set, always

### model

algorithm

1. Gradient descent
2. back propagation

---

torch.nn
torch.nn.Parameter
torch.nn.Module
torch.optim

---

torch.Interfere_mode()

### Train

1. loss function

   `nn.L1Loss()`

   MAE

2. optimizer

   `torch.optim.SGD()`

   Lr: learning rate 变化的幅度。是 hyperparameter 超参数，自己设置的

`module.state_dict()`

### Training loop


0. loop through the data

1. Forward pass to make predictions on data

   前向传播

2. Calculate the loss

   计算误差

3. Optimizer zero grad

4. Loss backward

   反向传播

5. Optimizer step

`epochs`

数据、模型、损失函数、优化器、迭代训练

### Testing loop





### Saving a model in Pytorch

- `torch.save()`, picle
- `torch.load()`, picle
- `torch.nn.load_state_dict()`, picle

