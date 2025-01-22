import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as p,o as t}from"./app-ktFCNIob.js";const e={};function l(i,s){return t(),n("div",null,s[0]||(s[0]=[p('<h1 id="cnn-卷积神经网络" tabindex="-1"><a class="header-anchor" href="#cnn-卷积神经网络"><span>CNN 卷积神经网络</span></a></h1><p>Multilayer Perceptron(MLP)，多层感知机</p><h2 id="全连接网络" tabindex="-1"><a class="header-anchor" href="#全连接网络"><span>全连接网络</span></a></h2><ul><li>每一个细胞与下一层所有细胞都连接</li></ul><p>输入层、隐藏层、输出层</p><p>每个神经元都有自己单独的权重向量</p><p>目标/损失函数：</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>C</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mi>y</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mi>j</mi></msub><mo stretchy="false">(</mo><msub><mi>y</mi><mi>j</mi></msub><mo>−</mo><msub><mi>a</mi><mi>j</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">C=\\frac{1}{2}||y-a^2||=\\frac{1}{2}\\sum_j(y_j-a_j)^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">∣∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord">∣∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2809em;vertical-align:-0.4358em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.162em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4358em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1002em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></p><p>随机初始化每个神经元的参数，然后把样本集的每个样本的特征带进去，算出来概率和真实概率做一个差，利用随机梯度下降最小化这个差</p><p>核心问题：如何求出一个神经元的参数（的梯度）</p><p>可以解决线性不可分的问题：</p><p>可以认为相当于一个升维度的过程，所以可以解决低纬度下线性不可分的问题</p><p>为什么引入激活函数：模型假设，灵感来自于大脑的神经元，输入一个信号，对于下一个节点的输出也就两种，传递下去或者不传递（即0/1）</p><p>层数太多也有很多风险</p><p>比如过拟合、</p><p>通常是随机砍掉50%</p><h2 id="反向传播" tabindex="-1"><a class="header-anchor" href="#反向传播"><span>反向传播</span></a></h2><p>算梯度的时候，从最后一层算误差，然后把残差向前传递，根据每一个神经元的残差去求每个神经元的偏导数</p><p>公式2：</p><p>第l层的误差可以由l+1层的残差推导</p><p>设计模式：管道过滤器</p><p>图论问题：管道过滤器</p><h2 id="卷积" tabindex="-1"><a class="header-anchor" href="#卷积"><span>卷积</span></a></h2><p>卷积：按位运算</p><p>灰度图像0-255</p><p>卷积核：</p><ul><li>-1和1可以检测各种方向上的边缘，还可以 检测边缘的强度</li></ul><p>通过边缘来认知事物的</p><p>卷积核求和，可以得到矢量和的法向量的边缘</p><p>卷积核，可以33和55，大的可以获得更复杂的形状</p><p>彩色图像：3通道，最后是堆叠起来</p><p>通道、卷积核个数</p><p>CNN：对文本的处理用的比较少</p><p>每一层都有一个激活</p><p>池化</p><p>Pooling 池化，随着网络的延伸，feature map变小一些</p><ul><li>Max Pooling，这个用的多，取最大值</li><li>Mean Pooling</li></ul><p>channel</p><p>在数学，尤其是概率论和相关领域中，归一化指数函数，或称Softmax函数，是逻辑函数的一种推广。它能将一个含任意实数的K维向量z“压缩”到另一个K维实向量σ(z)中，使得每一个元素的范围都在(0,1)之间，并且所有元素的和为1。该函数多用于多分类问题中。</p><p>多模态任务：转换成矩阵任务，如</p><ul><li>文本，利用霍夫曼编码转化成数字编码</li><li>视频，是很多帧图像，形成一个三维的矩阵</li></ul><p>深度可分离卷积</p><h3 id="lenet" tabindex="-1"><a class="header-anchor" href="#lenet"><span>LeNet</span></a></h3><h3 id="vgg-16" tabindex="-1"><a class="header-anchor" href="#vgg-16"><span>VGG 16</span></a></h3><h3 id="googlenet" tabindex="-1"><a class="header-anchor" href="#googlenet"><span>GoogLeNet</span></a></h3><p>Inception Model</p><p>320,000</p><p>1*1深度可分离卷积</p><ul><li>改变通道数</li><li>深度可分离卷积，降低参数规模</li><li>替代全连接层，可以使输入的图的模型是任意大小</li></ul><p>网络中一旦有全连接，那输入图像的大小就要固定了，这个是不太好的，这样需要把图像重采样</p><p>Transformer、多任务网络、迁移学习网络、在线学习等都是使用了GoogLeNet中这个结构的创新inception</p><p>Tensorflow中GoogleNet底层源码可以看看</p><p>GoogleNet有三个损失函数，原因</p><ul><li>网络越深，会出现梯度消失的问题</li></ul><p>inception：特征融合</p><h3 id="resnet" tabindex="-1"><a class="header-anchor" href="#resnet"><span>ResNet</span></a></h3><p>避免梯度消失</p><p>上采样、下采样：插值</p>',58)]))}const c=a(e,[["render",l],["__file","7. CNN.html.vue"]]),h=JSON.parse(`{"path":"/education/bs/deep-learning/7.%20CNN.html","title":"CNN 卷积神经网络","lang":"en-US","frontmatter":{"description":"CNN 卷积神经网络 Multilayer Perceptron(MLP)，多层感知机 全连接网络 每一个细胞与下一层所有细胞都连接 输入层、隐藏层、输出层 每个神经元都有自己单独的权重向量 目标/损失函数： C=21​∣∣y−a2∣∣=21​∑j​(yj​−aj​)2 随机初始化每个神经元的参数，然后把样本集的每个样本的特征带进去，算出来概率和真实概...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/deep-learning/7.%20CNN.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CNN 卷积神经网络"}],["meta",{"property":"og:description","content":"CNN 卷积神经网络 Multilayer Perceptron(MLP)，多层感知机 全连接网络 每一个细胞与下一层所有细胞都连接 输入层、隐藏层、输出层 每个神经元都有自己单独的权重向量 目标/损失函数： C=21​∣∣y−a2∣∣=21​∑j​(yj​−aj​)2 随机初始化每个神经元的参数，然后把样本集的每个样本的特征带进去，算出来概率和真实概..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CNN 卷积神经网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"全连接网络","slug":"全连接网络","link":"#全连接网络","children":[]},{"level":2,"title":"反向传播","slug":"反向传播","link":"#反向传播","children":[]},{"level":2,"title":"卷积","slug":"卷积","link":"#卷积","children":[{"level":3,"title":"LeNet","slug":"lenet","link":"#lenet","children":[]},{"level":3,"title":"VGG 16","slug":"vgg-16","link":"#vgg-16","children":[]},{"level":3,"title":"GoogLeNet","slug":"googlenet","link":"#googlenet","children":[]},{"level":3,"title":"ResNet","slug":"resnet","link":"#resnet","children":[]}]}],"git":{"createdTime":1679578424000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"education/bs/deep-learning/7. CNN.md","localizedDate":"March 23, 2023","excerpt":"\\n<p>Multilayer Perceptron(MLP)，多层感知机</p>\\n<h2>全连接网络</h2>\\n<ul>\\n<li>每一个细胞与下一层所有细胞都连接</li>\\n</ul>\\n<p>输入层、隐藏层、输出层</p>\\n<p>每个神经元都有自己单独的权重向量</p>\\n<p>目标/损失函数：</p>\\n<p><span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>C</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\\"normal\\">∣</mi><mi mathvariant=\\"normal\\">∣</mi><mi>y</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\\"normal\\">∣</mi><mi mathvariant=\\"normal\\">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mi>j</mi></msub><mo stretchy=\\"false\\">(</mo><msub><mi>y</mi><mi>j</mi></msub><mo>−</mo><msub><mi>a</mi><mi>j</mi></msub><msup><mo stretchy=\\"false\\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">C=\\\\frac{1}{2}||y-a^2||=\\\\frac{1}{2}\\\\sum_j(y_j-a_j)^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">C</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1901em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mord\\">∣∣</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">a</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mord\\">∣∣</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.2809em;vertical-align:-0.4358em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.162em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.4358em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1002em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">a</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></p>","autoDesc":true}`);export{c as comp,h as data};