• **Assumption 1**: The decomposition rate of a certain fungus is consistent in the decay cycle when all conditions are constant. Thus, we take the rate in the middle stage as the decomposition rate.

,→**Justification***: According to the research article mentioned in Section 1.1, the fungi examined are most relevant with respect to the decay of woody materials in the middle of their decay cycle. Therefore, we can assume that the decomposition rate of a certain fungus is consistent.*

• **Assumption 2**: Inherent growth rate is positively correlate with inherent hyphal extension rate when all conditions are consistent.

,→**Justification**:  *As the inherent growth rate and inherent hyphal extension rate are both drived by the growth of hyphae, we can assume that there exists positive correlation.*

• **Assumption 3**: All fungi shares a common environmental capacity.

 ,→**Justification***: For model simplication, we suppose that they have a equal environmental capacity, since these cannot be discriminated in experimental environment.*

• **Assumption 4**: The diffusion of external fungus should be ignored.

,→**Justification***: Here we only consider a relatively closed region where outside fungus can hardly diffuse in this area, which means the growth of each species will only depend on its proliferation rate.*

• **Assumption 5**: No influential human being activities.

,→**Justification***: Though most of our data are driven from the nature, we design all experiment in laboratory environment which has nearly no human being activities except adjusting its temperature and moisture.*



假设

- 植物种群的数量随时间变化，可以用微分方程描述。
- 植物种群之间存在竞争系数，反映了资源和压力的影响。
- 每个植物种群都有一个最大承载量，受环境因素限制。
- 每个植物种群都有一个内禀增长率，反映了自然繁殖能力。



环境因素

- $T(t)$：温度
- $M_s(t)$：SPEI
- $M_0(t)$：土地干湿程度
- $M(t)$：Comprehensive evaluation moisture indicators, SPEI03：衡量干湿程度
- $K$：环境容量

物种因素

- $B_i(t)$：生物量

- $g_i(T, M)$：生长速率

- $M_i(t)$：物种干湿程度

- $I_i(t)$：the impact of the drought on the $i$th plant species at time $t$

  ：耐旱性质，归一化，模仿O奖定义方法

- $c_i(T, M)$：地上竞争能力：主要是对阳光的竞争能力

- （：温度耐受系数）

- （：地下竞争能力：主要是对地下水、土质营养的竞争能力）





$$\frac{dB_i}{dt}=g_iB_i(1-\frac{B_i}{K}-\sum_{j=1}^{n}\frac{c_{ij}B_j}{K})$$

$$g_i=\hat {g_i}*(1-\frac{|M_i|}{w_i}),其中\hat{g_i}是种族i的理想状态的生长速率$$

$$c_{ij}=1-\frac{g_i}{\sum_{j=1}^{n}g_j}$$

$$\frac{dM_0}{dt}=\alpha(M_s-M_0)+\frac{\sum_{i=1}^{n}(-B_i\frac{dM_i}{dt})}{B_{sum}}$$

$$\frac{dM_i}{dt}=\beta(T)(M_0-M_i)$$

$$
\beta(T)=
\begin{cases} 
I_i(T)+\frac{1}{k_i(T)},\quad &M_0-M_i<0\\
I_i(T)+k_i(T),\quad &M_0-M_i>=0\\
\end{cases}
$$



1. 公式号

2. 带入一种特定植物去求解出来一种参数，计算出来，**提高readable**

   21年O奖第一片，待一组数据用SGD求出来未知的几个参数

3. 逻辑上清晰，语言简洁，不要长难句

4. 今天晚上把该做好的做完，明天完全写作

5. 审稿人不喜欢看大段文字，几幅图让审稿人明白

6. 写的漂亮一定会加分

7. 提高可读性，把想传达的意思

8. 可以取舍参数，比如说五个参数的时候模拟效果不好，三个的时候好，就取舍一些

   

The effect of plants on the wetness indicator of air does not need to be considered, the effect on the wetness indicator of soil needs to be considered.

As discussed below, because the SPEI, a measure of air wetness, already covers the effect of plant transpiration, we do not need to repeat this part of the calculation, while soil moisture will be influenced to a relatively large extent by plants.

When all conditions are consistent, temperature has little direct effect on growth itself.

We consider that temperature can indirectly affect plant growth by influencing plant water uptake and loss.

All plants shares a common environmental capacity.

For model simplication, we suppose the environmental capacity limits the biomass sum of all plants on a unit area, since the environmental capacity of each plants cannot be discriminated respectively.



1. 植物对空气的湿润程度指标的影响无需考虑，对土壤的湿润程度指标的作用需要考虑。

   如下文所述，因为衡量空气湿润程度的指标SPEI已经涵盖了植物蒸腾作用的影响，所以这部分我们无需重复计算，而土壤的湿度会在比较大的程度上受到植物的影响。

2. 当所有条件一致时，温度对生长本身的直接影响不大。

   我们考虑温度可以通过影响植物水份的吸收和损失，从而间接的影响到植物的生长。

3. 所有物种共享一种环境容纳量。

   

4. 

   



Assumption 1: The decomposition rate of a certain fungus is consistent in the decay cycle when all conditions are constant. Thus, we take the rate in the middle stage as the decomposition rate.

Justification: According to the research article mentioned in Section 1.1, the fungi examined are most relevant with respect to the decay of woody materials in the middle of their decay cycle. Therefore, we can assume that the decomposition rate of a certain fungus is consistent.

Assumption 2: Inherent growth rate is positively correlate with inherent hyphal extension rate when all conditions are consistent.

Justification: As the inherent growth rate and inherent hyphal extension rate are both drived by the growth of hyphae, we can assume that there exists positive correlation.

Assumption 3: All fungi shares a common environmental capacity.

Justification: For model simplication, we suppose that they have a equal environmental capacity, since these cannot be discriminated in experimental environment.

Assumption 4: The diffusion of external fungus should be ignored.

Justification: Here we only consider a relatively closed region where outside fungus can hardly diffuse in this area, which means the growth of each species will only depend on its proliferation rate.

Assumption 5: No influential human being activities.

Justification: Though most of our data are driven from the nature, we design all experiment in laboratory environment which has nearly no human being activities except adjusting its temperature and moisture.





明天中午发一般论文，写到什么程度





2023美赛A题是关于不同种类的植物对压力的反应方式的数学建模问题。¹²³

根据¹和²，最优物种竞争微分方程模型是基于以下假设：



根据这些假设，可以建立如下形式的微分方程模型：

$$\frac{dB_i}{dt}=r_iB_i(1-\frac{B_i}{K_i}-\sum_{j=1,j\neq i}^{n}\alpha_{ij}\frac{N_j}{K_i})$$

其中，$B_i$表示第$i$个植物种群的数量，$r_i$表示第$i$个植物种群的内禀增长率，$K_i$表示第$i$个植物种群的最大承载量，$\alpha_{ij}$表示第$j$个植物种群对第$i$个植物种群的竞争系数。

这个模型可以用数值方法或符号方法求解，并分析不同参数对结果的影响。



真菌生长的温度
真菌生长的相对湿度 
木质纤维的相对密度
第i种真菌的密度
第i种真菌的透明体长度
第i种真菌的固有生长速度 
第i种真菌的固有透明体延伸率 
第i种真菌对第j种的相对竞争力 
第i种真菌的环境容量
理解能力
第i种真菌的生长-菌丝延伸率 
第i种真菌的湿度控制的相对菌丝延伸率 
第i种真菌的温度控制的相对菌丝延伸率
耐湿因子
温度耐受系数
第i种真菌在第j个地区的122天分解率
对第j个地区的多样性减少率的影响





There are a few errors in the provided code. Here are the corrected lines:

1. The line `for i in range(n):` inside the function `model` should be `for i in range(len(B)):`.
2. The line `k[j]=gamma[i]*(T[t]-np.array(T).mean())+1` should be `k[j]=gamma[i]*(T[int(t[-1])]-np.array(T).mean())+1`.
3. The line `beta=np.array(n)` should be `beta=np.zeros(n)`.
4. The line `M_s=[0.]*t_all` should be `M_s=[0]*t_all`.
5. The line `x=odeint(model,B,t)` should be `x=odeint(model,B,t,args=())`.





In this problem, the growth rate of the fungus and the fungus tolerance to moisture are the only two traits we considered. We evaluate the importance of biodiversity by accom- plishing several tasks:

Task 1 We are to build a prediction model in order to reveal fungus’ evolution as well as their decomposition of woody fibers.
We use the data from the article mentioned in Section 1.1, making log-log linear regres- sion to determine decomposition curve. Then we use Gause’s competitive model to make the prediction. We take the interaction of different fungus into consideration and design a 122-day-experiment to validate our model.
Task 2 We give the stimulation on a fixed region in both short- and long-term to describe the grow- competitive tendency of various species. A exploration on rapid fluctuation weather is also provided to show the system roundly.



Our MIPG model is made up 





真菌对有机物的分解是碳循环中不可缺少的一部分，可以使碳在环境中得到重新利用。最近一篇文章探讨了不同性状对其分解效率的影响。在本文中，我们主要关注两个主要性状，即吸虫延伸率和耐湿性，以及真菌和各种环境条件之间的相互作用，以模拟木质纤维的分解并理解生物多样性的重要性。

我们的MIPG模型是由四个单词的首字母组成的。在我们开始实验之前，我们建立了一个模型来模拟不同植物之间的交叉作用以及温度、湿度对它们各自生长的影响。我们采用Gause的竞争模型来揭示物种之间的竞争作用，并通过考虑水循环的变化得出一个微分方程组。该模型描述了植物的生长、水循环、植物的竞争与合作。

首先，为了简化模型，我们固定温度T=22◦C，并人为设置三种不同真菌的性状参数。实验结果表明，我们的模型具有较高的合理性，因为预测的分解率接近30%，与已验证的研究结果大致相当。

首先，为验证模型合理性，我们找到了Baikal needlegrass meadow和对应的SPEI数据集进行求解和拟合，得到五种植物各自的常量指标。实验结果表明，我们的模型具有很高的合理性，因为在模拟确定好物种自身的指标以后，预测的情况与实际数据大致相当。

其次，我们选择了五种具有代表性的真菌作为实验对象，它们分别是P.Flavidoalba.S.、P.Hartigii.N.、M.Tremellosus.N.、P.Sangioneus.S.和H.Setigerum.N。在描述了它们的典型特征后，我们介绍了用于校准的水分/温度容差系数。基于所提出的模型，我们发现P.Flavidoalba.S.在哥伦布（温带）的短期（7天）和长期（122天）总是占优势，这是因为它对水分的普遍优势。另外，快速波动实验表明那些能很好地适应环境的人将处于优势地位。

其次，我们引入了LER，作为衡量多物种混合生长相比于单物种生长效果的指标。通过计算不同物种数对应的LER，我们发现物种数为16时，LER最好。

第三，我们选择了五个城市，圣达菲（干旱）、苏福尔斯（半干旱）、哥伦布（温带）、亚特兰大（树栖）和Codajás（雨林），并对前一步做了同样的预测。结果显示，除了领先的真菌P.Flavidoalba.S.外，其他物种的密度逐渐降低，但从未趋于0。此外，P.Flavidoalba.S.、P.Sangioneus.S.、M.Tremellosus.N.在热带雨林中会有一致的竞争，因为它们在这种环境中有其独特的优势。在一定程度上，温度和湿度越高，分解率就越高。

第四，我们通过改变真菌的数量来探索系统的分解效率，发现它们实际上在所有地区都有正相关的关系。此外，研究表明，与干旱地区相比，热带雨林会对生物多样性有更高的要求，因为它有相对稳定的气候。

建模后，我们还进行了敏感性分析，揭示了我们的模型对一些参数的稳健性。最后我们总结了我们的优势和劣势。文中还提出了一个简短的结论。

关键词。分解率，多环境，Gause模型，生物多样性



**Keywords**: Biomass, Multi-ineractive, Water cycle, Gause’s Model, Biodiversity