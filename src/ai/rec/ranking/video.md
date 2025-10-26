图文 vs 视频

- 图文笔记排序的主要依据：
  - 点击、点赞、收藏、转发、评论…
- 视频排序的依据还有**播放时长**和**完播**。
- 直接用回归拟合播放时长效果不好。建议用 YouTube 的时长建模[1]。

> 参考文献：
>
> 1. Paul Covington,Jay Adams,Emre Sargin.Deep Neural Networks for YouTube Recommendations.In RecSys,2016.

## 视频完播

- 线上预估完播率，然后做调整：
  - $p_{frinish}=\frac{预估完播率}{f(视频长度)}$
- 把$p_{finish}$作为融分公式中的一项。
