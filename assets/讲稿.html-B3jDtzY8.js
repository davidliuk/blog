import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as a,o as l}from"./app-Cv-jMnVl.js";const i={};function t(o,e){return l(),p("div",null,e[0]||(e[0]=[a('<h1 id="如何实现一个扫描全能王" tabindex="-1"><a class="header-anchor" href="#如何实现一个扫描全能王"><span>如何实现一个扫描全能王？</span></a></h1><p>相信大家都有使用过扫描全能王吧，大家有没有考虑过如何实现一个扫描全能王呢？</p><p>我们将从如下五个方面，解决这个问题。</p><p>首先我们先对问题所需的任务进行一个分析</p><h2 id="问题概览" tabindex="-1"><a class="header-anchor" href="#问题概览"><span><strong>问题概览</strong></span></a></h2><p>三个需求</p><ul><li>找到图片中的纸张：边缘检测</li><li>将纸张修复展平并放在图像中间：透视变换</li><li>更进一步：如何识别图中文字？</li></ul><h2 id="文档扫描过程" tabindex="-1"><a class="header-anchor" href="#文档扫描过程"><span>文档扫描过程</span></a></h2><p>扫描过程中，主要涉及到如上三个步骤：</p><p>123</p><ol><li><p>边缘检测</p><blockquote><p>Canny算法，进行边界检测（结合高斯滤波函数）</p></blockquote><p>在课程中，我们也了解过卷积运算可以进行一些边缘的检测和过滤，这里的Canny算法也是利用用高斯一阶偏导核卷积图像、结合梯度和滤波函数进行边缘检测的。</p><p>检测器算法的四个步骤：</p><ol><li>用高斯一阶偏导核卷积图像</li><li>计算每个点的梯度幅值和方向</li><li>非极大值抑制</li><li>连接与阈值（滞后）</li></ol><blockquote><p>（当然，感兴趣的同学，也可以尝试使用Meta开源的Segment Anything模型去做分割，这里就不再赘述）</p></blockquote></li><li><p>获取纸张轮廓</p><blockquote><p>对检测到的边界求解一个近似轮廓</p><p>findContours方法，找到上一步中的所有边缘。</p></blockquote><p>由于噪声点或图像清晰度的原因，我们Canny算法探测出来的边缘可能是一个很复杂的多边形，那么我们可以道格拉斯-普克算法（Douglas-Peucker），approxPolyDP方法求解近似多边形。我们找到最大的近似四边形作为我们的纸张。</p></li><li><p>透视变换</p><p>我们再利用矩阵，进行坐标变换，将四边形展平放大。warpPerspective</p></li></ol><h2 id="ocr" tabindex="-1"><a class="header-anchor" href="#ocr"><span>OCR</span></a></h2><ul><li>CTPN 算法：检测文本位置</li><li>CRNN 算法：识别文本内容</li></ul><h3 id="ctpn-算法" tabindex="-1"><a class="header-anchor" href="#ctpn-算法"><span>CTPN 算法</span></a></h3><blockquote><p>ECCV 2016提出的一种文字检测算法</p><p>Z. Tian, W. Huang, T. He, P. He and Y. Qiao: Detecting Text in Natural Image with Connectionist Text Proposal Network, ECCV, 2016.</p></blockquote><p>RPN（Region Proposal Network）方法（faster-rcnn）</p><p>文本通常都是从左往右写的（水平），并且字之间的宽度都大致相同固定宽度，来检测文本高度即可，但是如何应对变长序列呢？</p><p>本质上还是 RPN 方法（可参考 faster rcnn)，可将检测到的框拼在一起。</p><ol><li><p>使用 VGG16 的卷积阶段的网络层作为骨干网络，然后将图片输入 VGG16 网络中进行特征提取，生成特征图</p></li><li><p>在 ① 中输出的特征图中滑动进行 3*3 卷积，然后进行 im2col 操作，然后每次滑动都得到一个 3*3 通道数的特征向量，最后生成一个新的特征图，然后输入 BiLSTM 中进行序列特征提取，再传入全连接层中进一步提取特征</p></li><li><p>在 ② 的全连接层后接 3 个全连接层分支，分别预测垂直坐标回归、分类得分、水平平移量回归</p></li><li><p>将 ③ 中的预测垂直坐标回归和分类得分结果输入 RPN 中</p></li></ol><h4 id="网络架构" tabindex="-1"><a class="header-anchor" href="#网络架构"><span>网络架构</span></a></h4><p>VGG 提取特征，BiLSTM 融入上下文信息，基于 RPN 完成检测</p><p>二分类：文字/背景</p><p>VGG 网络的 4 次池化，后面不进行了</p><p>没用 resnet（因为这个工作相对不新，用的传统方法）</p><h4 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h4><p>输出结果包括了三部分：2K 得分，2K 回归，1K 边界调整（相比于以前工作多的一部分，提升 2%）</p><p>边界调整能使得文本检测框效果更好，下列是调整后的结果：</p><h4 id="合并小框" tabindex="-1"><a class="header-anchor" href="#合并小框"><span>合并小框</span></a></h4><p>检测到每一个小块文本区域还需拼接成完整的文本区域：文本线构造方法</p><p>规则，分前向和后向两部分：</p><ul><li>先前向走，对于 Xi,基于重合度(0.7)与位置距离（50 像素）找到 score 值最大的的 X</li><li>接下来再返向走（规则不变），比较两次得分值大小来判断序列。</li></ul><h3 id="crnn-算法" tabindex="-1"><a class="header-anchor" href="#crnn-算法"><span>CRNN 算法</span></a></h3><p>CNN + RNN</p><p>卷积和递归神经网络结合在一起：由图像得到文本</p><blockquote><p>每个词都需要上下文信息，所以只用 CNN 是不合适的</p></blockquote><p>首先 CNN 进行特征提取，接下来 RNN 进行序列特征提取，最后得出预测结果即可。</p><h4 id="ctc-模块" tabindex="-1"><a class="header-anchor" href="#ctc-模块"><span>CTC 模块</span></a></h4><p>对齐，对于不同长度、间隔，但是语意一样的问题，如何处理</p><p>以前的方法：都识别，然后去重，重复的只留一个</p><p>CTC：预测特殊字符，（空的或者延续长的音就变成特殊字符），然后识别的时候过滤掉。</p><p>卷积、池化（保持宽度不变长度减半）</p><h4 id="文本生成器" tabindex="-1"><a class="header-anchor" href="#文本生成器"><span>文本生成器</span></a></h4><h3 id="训练" tabindex="-1"><a class="header-anchor" href="#训练"><span>训练</span></a></h3><h4 id="数据集" tabindex="-1"><a class="header-anchor" href="#数据集"><span>数据集</span></a></h4><h2 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取"><span>数据获取</span></a></h2><h2 id="训练资源" tabindex="-1"><a class="header-anchor" href="#训练资源"><span>训练资源</span></a></h2><p>AutoDL</p><p>12:14</p><p>15:38</p>',49)]))}const s=n(i,[["render",t],["__file","讲稿.html.vue"]]),h=JSON.parse(`{"path":"/education/bs/deep-learning/final/%E8%AE%B2%E7%A8%BF.html","title":"如何实现一个扫描全能王？","lang":"en-US","frontmatter":{"description":"如何实现一个扫描全能王？ 相信大家都有使用过扫描全能王吧，大家有没有考虑过如何实现一个扫描全能王呢？ 我们将从如下五个方面，解决这个问题。 首先我们先对问题所需的任务进行一个分析 问题概览 三个需求 找到图片中的纸张：边缘检测 将纸张修复展平并放在图像中间：透视变换 更进一步：如何识别图中文字？ 文档扫描过程 扫描过程中，主要涉及到如上三个步骤： 12...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/deep-learning/final/%E8%AE%B2%E7%A8%BF.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"如何实现一个扫描全能王？"}],["meta",{"property":"og:description","content":"如何实现一个扫描全能王？ 相信大家都有使用过扫描全能王吧，大家有没有考虑过如何实现一个扫描全能王呢？ 我们将从如下五个方面，解决这个问题。 首先我们先对问题所需的任务进行一个分析 问题概览 三个需求 找到图片中的纸张：边缘检测 将纸张修复展平并放在图像中间：透视变换 更进一步：如何识别图中文字？ 文档扫描过程 扫描过程中，主要涉及到如上三个步骤： 12..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:28:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:28:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何实现一个扫描全能王？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:28:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"问题概览","slug":"问题概览","link":"#问题概览","children":[]},{"level":2,"title":"文档扫描过程","slug":"文档扫描过程","link":"#文档扫描过程","children":[]},{"level":2,"title":"OCR","slug":"ocr","link":"#ocr","children":[{"level":3,"title":"CTPN 算法","slug":"ctpn-算法","link":"#ctpn-算法","children":[]},{"level":3,"title":"CRNN 算法","slug":"crnn-算法","link":"#crnn-算法","children":[]},{"level":3,"title":"训练","slug":"训练","link":"#训练","children":[]}]},{"level":2,"title":"数据获取","slug":"数据获取","link":"#数据获取","children":[]},{"level":2,"title":"训练资源","slug":"训练资源","link":"#训练资源","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1732242483000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":4.08,"words":1225},"filePathRelative":"education/bs/deep-learning/final/讲稿.md","localizedDate":"May 17, 2023","excerpt":"\\n<p>相信大家都有使用过扫描全能王吧，大家有没有考虑过如何实现一个扫描全能王呢？</p>\\n<p>我们将从如下五个方面，解决这个问题。</p>\\n<p>首先我们先对问题所需的任务进行一个分析</p>\\n<h2><strong>问题概览</strong></h2>\\n<p>三个需求</p>\\n<ul>\\n<li>找到图片中的纸张：边缘检测</li>\\n<li>将纸张修复展平并放在图像中间：透视变换</li>\\n<li>更进一步：如何识别图中文字？</li>\\n</ul>\\n<h2>文档扫描过程</h2>\\n<p>扫描过程中，主要涉及到如上三个步骤：</p>\\n<p>123</p>\\n<ol>\\n<li>\\n<p>边缘检测</p>\\n<blockquote>\\n<p>Canny算法，进行边界检测（结合高斯滤波函数）</p>\\n</blockquote>\\n<p>在课程中，我们也了解过卷积运算可以进行一些边缘的检测和过滤，这里的Canny算法也是利用用高斯一阶偏导核卷积图像、结合梯度和滤波函数进行边缘检测的。</p>\\n<p>检测器算法的四个步骤：</p>\\n<ol>\\n<li>用高斯一阶偏导核卷积图像</li>\\n<li>计算每个点的梯度幅值和方向</li>\\n<li>非极大值抑制</li>\\n<li>连接与阈值（滞后）</li>\\n</ol>\\n<blockquote>\\n<p>（当然，感兴趣的同学，也可以尝试使用Meta开源的Segment Anything模型去做分割，这里就不再赘述）</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>获取纸张轮廓</p>\\n<blockquote>\\n<p>对检测到的边界求解一个近似轮廓</p>\\n<p>findContours方法，找到上一步中的所有边缘。</p>\\n</blockquote>\\n<p>由于噪声点或图像清晰度的原因，我们Canny算法探测出来的边缘可能是一个很复杂的多边形，那么我们可以道格拉斯-普克算法（Douglas-Peucker），approxPolyDP方法求解近似多边形。我们找到最大的近似四边形作为我们的纸张。</p>\\n</li>\\n<li>\\n<p>透视变换</p>\\n<p>我们再利用矩阵，进行坐标变换，将四边形展平放大。warpPerspective</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as comp,h as data};
