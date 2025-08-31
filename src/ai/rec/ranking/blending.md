# Blending 融合预估分数

- 简单的加权和
  - $p_{click}+w_1\cdot p_{like}+w_2\cdot p_{collect}+\dots$
- 点击率乘以其他项的加权和
  - $p_{click}\cdot(1+w_1\cdot p_{like}+w_2\cdot p_{collect}+…)$
- 海外某短视频APP的融分公式（TikTok）
  - $(1+w_1\cdot p_{time})^{\alpha_1}\cdot(1+w_2\cdot p_{like})^{\alpha_2}\dots$
- 国内某短视频APP的融分公式（Kuaishou）
  - 根据预估时长$p_{time}$，对$n$篇候选视频做排序
  - 如果某视频排名第$r_{time}$，则它得分$\frac{1}{r_{time}^\alpha+\beta}$
  - 对点击、点赞、转发、评论等预估分数做类似处理。
  - 最终融合分数：$\frac{w_1}{r_{time}^{\alpha_1}+\beta_1}+\frac{w_2}{r_{click}^{\alpha_2}+\beta_2}+\frac{w_1}{r_{like}^{\alpha_3}+\beta_3}+\dots$
- 某电商的融分公式
  - 电商的转化流程：曝光〉点击〉加购物车〉付款
  - 模型预估：$p_{click}, p_{cart},p_{pay}$
  - 最终融合分数：$p^{\alpha_1}_{click} \times p^{\alpha_2}_{cart} \times p^{\alpha_3}_{pay}\times price^{\alpha_4}$