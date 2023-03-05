# 题目分析

## 背景分析

1. 确定数据集：扩大关键词，国外的植物学+气象学的网站

   优先维度多的数据，

2. 

Different species of plants react to stresses in different ways. 

For example, grasslands are quite sensitive to drought. 

Droughts occur at varying frequencies and varying levels of severity. Numerous observations suggest that the number of different species present plays a role in how a plant community adapts when exposed to cycles of drought over successive generations. 

In some communities with only one species of plant, the generations that follow are not as well adapted to drought conditions as the individual plants in communities with four or more species. These observations raise many questions. For example, what is the minimal number of species necessary for a plant community to benefit from this type of localized biodiversity? How does this phenomenon scale as the number of species increases? What does this imply for the long- term survivability of a plant community?

> **不同种类的植物以不同的方式**对压力作出反应。（例如，草场对干旱相当敏感）。干旱发生的频率和严重程度各不相同。
>
> 大量的观察表明，**不同物种的数量**对植物群落如何适应连续几代人的干旱周期起着作用。
>
> 在一些只有一种植物的群落中，随后的几代对干旱条件的适应性不如有四个或更多物种的群落中的单个植物。
>
> 这些观察结果提出了许多问题。例如，
>
> - 一个植物群落从这种局部生物多样性中**受益所需的最小物种数量**是多少？（找起始点）
> - 随着物种数量的增加，这种现象是如何扩展的？
> - 这对一个植物群落的长期生存能力意味着什么？


## 任务分析

- Develop a mathematical model to predict how a plant community changes over time as it is exposed to various irregular weather cycles. 

  Include times of drought when precipitation should be abundant. 

  The model should account for interactions between different species during cycles of drought.

- Explore what conclusions you can draw from your model with respect to the long-term interactions of a community of plants and the larger environment. Consider the following questions:

  - How many different plant species are required for the community to benefit and what happens as the number of species grows?

  - How do the types of species in the community impact your results?

  - What are the impact of a greater frequency and wider variation of the occurrence of droughts in future weather cycles? If droughts are less frequent, does the number of species have the same impact on the overall population?

  - How do other factors such as pollution and habitat reduction impact your conclusions?

  - What does your model indicate should be done to ensure the long-term viability of a plant community and what are the impacts on the larger environment?



- 建立一个数学模型，预测一个植物群落在各种不规则的天气周期中如何随时间变化。在降水丰富的时候，要包括干旱的时候。该模型应考虑到干旱周期中不同物种之间的相互作用。

  > 竞争
  >
  > - 种内竞争：最好与数据的维度对应关系对的比较
  >
  >   有可能模型的变量与数据不完全对应
  >
  > - 种间竞争：
  >
  > 合作

- 就植物群落与大环境的长期相互作用而言，探讨你能从你的模型中得出什么结论。请考虑以下问题。

  - 该群落需要多少种不同的植物物种才能***受益***？随着物种数量的增加会发生什么？

    最优解的问题

    植物物种数量对群落受益性分析

  - 群落中的物种类型如何影响你的结果？

    ke、目等，群落中的物种类型对群落生长的影响

  - 在未来的天气周期中，干旱发生的频率越高，变化越大，会有什么影响？如果干旱不那么频繁，物种的数量对整个种群有同样的影响吗？
  
    变参数，
  
  - 其他因素，如污染和栖息地减少对你的结论有什么影响？
  
    核心数据解决不了的时候，要有辅助的数据
  
  - 你的模型表明，为了确保植物群落的长期生存能力，应该做些什么，对大环境有什么影响？
  
    博弈论



为了量化混合物与单株植物相比的效果，我们计算了所有物种的土地当量比（LER）和各个物种各自的部分LER（PLER）。混合物的土地当量衡量的是作物单株产生与混合物中观察到的相同的CCB所需的相对土地面积；它通过使用公式（3）计算为混合物中两个物种的PLER之和。

To quantify the effect of mixtures compared to monocultures, we calculated the land equivalent ratio (LER) for all species and the respective partial LER (PLER) for each species. The land equivalent of a mixture measures the relative land area required for a crop monoculture to produce the same CCB as that observed in the mixture; it is calculated as the sum of the PLERs of the two species in the mixture by using equation (3).



$$\int_{t=0}^{t+\frac{1}{n}}f(x)dx=(f(t+\frac{1}{n})+f(t))/(2n)$$



地区、x带、纬度等

天气数据好找，

如，黄石公园，等大型的公园；

$$\int\limits_{t=0}^{t+\frac{1}{n}}f(x)dx=(f(t+\frac{1}{n})+f(t))/(2n)$$



引用有背书的帮助，但是不能太多

要有很多自己的定义

> 注意巧，有些数据不含盖的要素可以就不提

正确性：**逻辑清晰**，推理没有毛病

自证：数据集里面留一部分，80%定义模型，20%留做测试，交叉验证

要多画图，提高美观性（）



前两天可以熬夜



- 为了建立一个数学模型来预测植物群落随着时间和天气变化的动态，需要考虑以下几个方面：

  - 植物群落的初始状态，包括物种组成、数量、分布等；
  - 天气变化的规律和干旱事件的频率、持续时间、强度等；
  - 植物对干旱的响应机制，包括生理、形态、行为等；
  - 植物之间的相互作用，包括竞争、协作、捕食等；
  - 植物群落的生态功能和服务，包括生产力、水文调节、碳储存等。

- 可以探索以下几个问题：

  - 植物群落需要多少种不同的植物才能从多样性中受益？随着物种数目增加，植物群落会发生什么变化？

    这个问题可能没有一个确定的答案，因为不同类型和数量的植物可能有不同的水分需求和利用策略。

    一般来说，多样性越高，植物群落越能抵抗干旱压力 ，但是也有例外 。

    可以尝试在你的模型中设置不同 的初始条件和参数，并观察结果之间的差异。

  - 植物群落中各种类型的植物对结果有什么影响？

    这个问题也没有一个确定的答案，因为不同类型或功能型组 的植物可能在干旱条件下具有优势或协同作用 。你可以尝试在你 的模型中设置不同类型或功能型组 的植物，并观察结果之间 的差异。

  - 如果未来天气周期中干旱事件更频繁或更严重会有什么影响？如果干旱事件更少会怎样？此时多样性对总体种群有相同 的影响吗？

    这个问题可能比较容易回答。一般来说，如果未来天气周期中干旱事件更频繁或更严重， 那么植物群落会受到更大的压力，并且可能出现死亡或退化现象。此时， 多样性对于维持植物群落稳定性和恢复力是非常重要 的 。如果干旱事件更少， 那么植物群落会受到较小 的压力，并且可能出现增长或扩张现象。此时， 多样性对于提高植物群落生产力和竞争力是非常重要 的



从种群数量为3时，群落开始收益，后面逐步上升，在16时达到最优值，如何逐步开始下降，我们利用高斯函数对数据进行拟合，得到如下结果：

The community starts to gain from a number of species of 3 and gradually rises later, reaching an optimum at 16, how it gradually starts to decline, we fitted the data using a Gaussian function and obtained the following results.



$\mathbf{LER} = 1 + 0.011\times e^{(\frac{x-15.927}{12.359})^2}$





在相同温度和湿度下，不同物种数的LER值如图3所示，每个三角形代表一个物种数量下的LER。



我看到你的问题是关于植物群落的数学模型和干旱的影响。这是一个很有意义的话题，但也很复杂。😅

我不能为你建立一个完整的数学模型，因为这需要很多数据和假设，而且可能超出了我的能力范围。😓

但是，我可以给你一些参考资料和建议，希望对你有所帮助。😊

- 你可以参考一些已经发表的研究论文，了解一些常用的植物群落模型和方法，例如Lotka-Volterra模型、Markov链模型、微分方程模型等。¹²³
- 你可以根据你感兴趣的植物群落类型、地理位置、气候条件等选择合适的参数和变量，例如植物生长率、死亡率、竞争系数、干旱强度、持续时间等。
- 你可以利用一些现有的数据集或者自己收集数据来验证和优化你的模型，例如使用R语言或者Python语言进行统计分析和可视化。
- 你可以根据你的模型结果进行敏感性分析和情景分析，探讨不同因素对植物群落变化的影响，并给出一些合理的解释和推论。

希望这些信息对你有所启发。祝你好运！👍

源: 与必应的对话， 2023/2/17(1) 2023年美国大学生数学建模竞赛A题中英版 - 国际竞赛. https://www.jingsailian.com/zlk/294982.html 访问时间 2023/2/17.
(2) 2023美赛A题：受旱灾影响的植物群落_川川菜鸟的博客 .... https://blog.csdn.net/weixin_46211269/article/details/129077553 访问时间 2023/2/17.
(3) 2023美赛A题思路/2023年美国大学生数学建模竞赛A题思路 .... https://www.bilibili.com/read/cv21875314 访问时间 2023/2/17.





First, you need to decide what kind of model you want to use. There are different types of mathematical models in plant biology, such as 

differential equations, cellular automata, agent-based models, network models, and statistical models⁴. 

Each type has its own advantages and limitations, depending on the level of detail, complexity, and scale you want to capture.

Second, you need to collect data and parameters for your model. You may need to measure or estimate various variables that affect plant growth and survival under drought stress, such as soil moisture, temperature, precipitation, evapotranspiration, photosynthesis rate, biomass production, leaf water potential¹, species richness², functional diversity, etc. You may also need to account for spatial and temporal heterogeneity in these variables.

Third, you need to calibrate and validate your model using existing data or experiments. You may need to compare your model predictions with observed patterns of plant community dynamics under different scenarios of drought stress. You may also need to test the sensitivity and robustness of your model to different assumptions and parameter values.

Fourth, you need to explore what conclusions you can draw from your model with respect to the long-term interactions of a plant community and the larger environment. You may need to run simulations or analyses using your model under various conditions of drought frequency², severity⁶, variation⁷, pollution³, habitat reduction³, etc. You may also need to consider how different types of species (e.g., grasses vs trees) impact your results.

Some possible sources that might help you with your task are:

- Mathematical Modelling in Plant Biology by Richard J. Morris (Springer)⁴
- Biodiversity and community structure by Simon A Levin et al. (PNAS)⁶
- Plant adaptation to drought stress by Nese Sreenivasulu et al. (PubMed)¹
- Plant Community Composition and Biodiversity Responses Across an Urban Park Typology by Christopher M Swan et al. (Frontiers)⁷

I hope this helps! Good luck with your task! 😊

源: 与必应的对话， 2023/2/17(1) . https://bing.com/search?q=mathematical+model+plant+community+biodiversity 访问时间 2023/2/17.
(2) A Dynamic Model for Strategies and Dynamics of Plant .... https://pubmed.ncbi.nlm.nih.gov/32411150/ 访问时间 2023/2/17.
(3) 2023 MCM Problem A: Drought-Stricken Plant Communities. http://www.immchallenge.org/mcm/2023_MCM_Problem_A.pdf 访问时间 2023/2/17.
(4) Biodiversity and community structure | PNAS. https://www.pnas.org/doi/10.1073/pnas.2101176118 访问时间 2023/2/17.
(5) Frontiers | Plant Community Composition and Biodiversity .... https://www.frontiersin.org/articles/10.3389/fevo.2019.00201/full 访问时间 2023/2/17.
(6) Towards a mathematical model of plant growth - ResearchGate. https://www.researchgate.net/publication/356880107_Towards_a_mathematical_model_of_plant_growth 访问时间 2023/2/17.
(7) Mathematical Modelling in Plant Biology | SpringerLink. https://link.springer.com/book/10.1007/978-3-319-99070-5 访问时间 2023/2/17.





本问题使用对照法进行实验。对照组使用正常的干湿数据（同第二问），运行10次得到平均的生物量曲线和LER；实验组使用干旱更严重的干湿数据，同上理得到生物量曲线和LER。





在相同的温度和湿度环境下，我们设置了三个不同的群落互相对照。第一组是由五种抗旱-慢生长植物组成，第二组由五种不抗旱-快生长植物组成，第三组由两种抗旱-慢生长植物和三种不抗旱-快生长植物共同组成，随时间变化他们的Biomass的变化曲线如上图所示。



根据上述实验研究，我们认为较为严峻的较为不适合不耐旱植物，不耐旱植物面对环境的考验虽然可以被耐旱植物缓解，但是仍然较有挑战。耐旱植物在该环境下相比于不耐旱植物较为有利，于是会在竞争中取得优势，不耐旱植物在环境和竞争的双重打击下逐渐被淘汰。





图7中，左图是抗旱性好、生长慢的5种植物在实验环境下的生长情况，由于都具有抗旱性，这些植物的生物量均较为平稳的增长直至达到平衡；右图是抗旱性差、生长快的5种植物在实验环境下的生长情况，由于他们抗旱性不佳，所以生长过程受干旱程度影响比较大，增长过程中存在较大程度的波动。在种间竞争中，部分物种由于竞争力不足，种群生物量较大程度减少，直至淘汰。



图8中，种群包括2种抗旱性差、生长快的植物和3种抗旱性好、生长慢的植物。可以看到，由于物种互补的情况存在，并没有出现物种淘汰的情况，且各物种的生物量最后均达到动态平衡。



你的模型表明，为了确保植物群落的长期生存能力，应该做些什么，对大环境有什么影响？

What does your model indicate should be done to ensure the long-term viability of a plant community and what are the impacts on the larger environment?



在本节中，我们将在我们模型的基础上，探讨确保植物群落的长期生存能力的措施，以及对大环境的影响。



在这里，我们愿意展示真菌多样性对生态系统分解地面垃圾和木质纤维效率的影响。首先，我们把热带雨林作为我们的经验环境。根据真菌的总密度和每个选定的真菌的密度比，我们开始选择在这种情况下进化的前3个和前2个物种。我们的模型给出了122天内的分解量预测，如下图所示。





```latex
\begin{center}
        \begin{tabular}{ccc}% 其中，tabular是表格内容的环境；c表示centering，即文本格式居中；c的个数代表列的个数
        % \caption{Notations}
        \toprule %[2pt]设置线宽     
        
        % 符号、定义、单位
        Symbol & Defination & Unit \\ %换行
        \midrule %[2pt]  

        % 按首字母字母顺序插入，便于查找！！
        $\beta(T)$ & moisture transfer coefficient & / \\
        $\beta_i(T)$ & temperature influence factor on $i$-th plants & / \\
        $B_i(t)$ & biomass of $i$-th plant & $t/hm^2$ \\
        $c_{ij}$ & relative competitiveness of species i to species j & / \\
        $g_i(T, M)$ & inherent growth rate of $i$-th plant & / \\
        $\hat{g_i}(T, M)$ & ideal inherent growth rate of $i$-th plant & / \\
        $k_{i}(T)$ & inherent water absorption capacity of $i$-th plants & / \\
        $K$ & the environmental capacity & $t/hm^2$ \\
        $M_s(t)$ & SPEI, a measure of drought severity & / \\
        $M_0(t)$ & moisture degree of the ground & / \\
        $M(t)$ & Comprehensive evaluation moisture indicators & / \\
        $M_i(t)$ & moisture degree of the $i$-th plant & / \\
        $T(t)$ & temperature & / \\
        $w_{i}$ & inherent drought tolerance capacity of $i$-th plants & / \\
        
        \bottomrule %[2pt]
        \end{tabular}
    \end{center}
```

