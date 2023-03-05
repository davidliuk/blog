# 2021



D

Music has been part of human societies since the beginning of time as an essential component of cultural heritage. As part of an effort to understand the role music has played in the collective human experience, we have been asked to develop a method to quantify musical evolution. There are many factors that can influence artists when they create a new piece of music, including their innate ingenuity, current social or political events, access to new instruments or tools, or other personal experiences. Our goal is to understand and measure the influence of previously produced music on new music and musical artists.



自古以来，音乐作为文化遗产的一个重要组成部分，一直是人类社会的一部分。

作为了解音乐在人类集体经历中所发挥的作用的努力的一部分，我们被要求开发一种**方法来量化音乐的演变**。

当艺术家创作新的音乐作品时，有许多因素可以影响他们，包括他们**天生的聪明才智、当前的社会或政治事件、获得新的乐器或工具，或其他个人经历**。

我们的目标是了解和衡量以前制作的音乐对新音乐和音乐艺术家的影响。



**Some artists can list a dozen or more other artists who they say influenced their own musical work**. 

> “*influence_data*”

It has also been suggested that influence can be measured by the degree of similarity between song characteristics, such as structure, rhythm, or lyrics. There are sometimes revolutionary shifts in music, offering new sounds or tempos, such as when a new genre emerges, or there is a reinvention of an existing genre (e.g. classical, pop/rock, jazz, etc.). 

> *full_music_data*

This can be due to a sequence of small changes, a cooperative effort of artists, a series of influential artists, or a shift within society.



Many songs have similar sounds, and many artists have contributed to major shifts in a musical genre. 

- Sometimes these shifts are due to one artist influencing another. 
- Sometimes it is a change that emerges in response to external events (such as major world events or technological advances). 

By considering **networks of songs and their musical characteristics**, we can begin to capture the influence that musical artists have on each other. And, perhaps, we can also gain a better understanding of how music evolves through societies over time.

Your team has been identified by the Integrative Collective Music (ICM) Society to develop a model that measures musical influence. This problem asks you to examine evolutionary and revolutionary trends of artists and genres. To do this, your team has been given several data sets by the ICM:





- Use the influence_data 

  data set or portions of it to create a (multiple) **directed network**(s) of musical influence, where influencers are connected to followers. Develop parameters that capture ‘music influence’ in this network. Explore a subset of musical influence by creating a subnetwork of your directed influencer network. Describe this subnetwork. What do your ‘music influence’ measures reveal in this subnetwork?

  > 先构建有限图，然后
  >
  > 可以使用Page rank算法来衡量他们的‘music influence’
  >
  > networkX可以做

- Use full_music_data and/or the two summary data sets (with artists and years) of music characteristics, to develop measures of music similarity. Using your measure, are artists within genre more similar than artists between genres?

  > 用一种相似度系数：贝叶斯、pcc，consine也可以（推荐系统上学过的）
  >
  > 求每个genre的聚类中心，内部到自己的重心的距离和自己道别的流派的

- Compare similarities and influences between and within genres. What **distinguishes** a genre and how do genres change over time? Are some genres related to others?

  > influences: Page rank
  >
  > similarities: 贝叶斯
  >
  > distinguishes: 拟合每个流派的参数，归属度，神经网络

- Indicate whether the similarity data, as reported in the **data_influence data set**, suggest that the **identified influencers in fact influence the respective artists**. Do the ‘influencers’ actually affect the music created by the followers? Are some music characteristics more ‘contagious’ than others, or do they all have similar roles in influencing a particular artist’s music?

  > 作家的特征，时间点前后（拿音乐算），作家间的相似度有没有变大
  >
  > 
  >
  > contagious：

- Identify if there are characteristics that might signify revolutions (major leaps) in musical evolution from these data? What artists represent revolutionaries (influencers of major change) in your network?

  > 

- Analyze the influence processes of musical evolution that occurred over time in one genre. Can your team identify indicators that reveal the dynamic influencers, and explain how the genre(s) or artist(s) changed over time?

  

- How does your work express information about cultural influence of music in time or circumstances? Alternatively, how can the effects of social, political or technological changes (such as the internet) be identified within the network?



