# CLIP

Contrastive Language-Image Pre-training

图像分类



预训练：正样本拉近，负样本拉远

Lecun 世界模型





图形Encoder



```python
# image_encode ResNet OF Vislon Transformer 
# text_encoder CBON Text Transforme 
# Iln minibatch h W aligned images TER minibatch aligned W_ild1 d_e learned pro imag enbed W_t[d_t d_e learned oro text learned temperature parametei extrac feature
#t representations ot each modality 

I_f = image_encoder(I) #[n, d_i]
T_f = text_encoder(T)  #[n, d_t]

# joint multimoda embeddino 
I_e = l2_normalize(np.dot(I_f, W_i), axis=1)
T_e = l2_normalize(np.dot(T_f, W_t), axis=1) 

# scaled pairwise cosine similarities [n, n]
logits = np.dot(I_e, T_e.T) * np.exp(t) 

# synmetric 10S5 function 
labels = p.arange(n)
loss_1 = cross_entropy_loss(logits, labels, axis=0)
loss_t = cross_entropy_loss(logits, labels, axis=1)
loss = (loss_1 + loss_t）/2
```



拓展：

ImageBind

SigLIP

四亿图文对

ITC架构：图像文本对比学习架构
