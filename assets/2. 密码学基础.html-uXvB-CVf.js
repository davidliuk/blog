import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as p,o as m}from"./app-CybQbXIt.js";const t={};function l(e,a){return m(),n("div",null,a[0]||(a[0]=[p('<h1 id="密码学基础" tabindex="-1"><a class="header-anchor" href="#密码学基础"><span>密码学基础</span></a></h1><h2 id="常见加密算法" tabindex="-1"><a class="header-anchor" href="#常见加密算法"><span>常见加密算法</span></a></h2><p>加密 Encryption</p><ul><li><p>对称</p><p>IV，会加入一个随机向量，来保证密码的随机</p><p>eg. DES, IDEA, AES</p></li><li><p>非对称</p></li></ul><p>哈希函数 Hash Function</p><p>数字签名 DIgital Signature</p><p>对称加密</p><p>Symmetric Cryptography</p><p>又称私钥加密</p><p>非对称加密</p><p>如RSA</p><p>哈希加密</p><blockquote><p>暴力攻击</p></blockquote><p>openssl库，加密算法的库，一定要用这个，不然基本上一定会有漏洞</p><ol><li>需求分析</li><li>开发</li><li>测试</li></ol><p>安全需要根据用户定义，如不同用户有不同的需求定义</p><p>密码编码学、密码分析学</p><p>密码学起源：</p><p>埃及文字</p><p>藏头诗</p><p>古希腊scytale棍子</p><p>凯撒密码，每个字母于其后第三位对应</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>3</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>26</mn></mrow><annotation encoding="application/x-tex">y=x+3 \\mod26</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">26</span></span></span></span></p><ul><li><p>频率分析法/词频分析，可以根据词频来推出具体的明文对应</p><p>如词频最高的是e</p></li><li><p>或遍历</p></li></ul><p>卡尔达诺漏隔板</p><p>几何图形密码</p><p>Enigma密码（轮转机实现）</p><p>根据每天早上都发的早上好之类的一个固定的东西就给破获了</p><p>古典密码，容易受到频率分析法的攻击</p><p>缺点</p><p>数据的安全要基于密钥，而不是算法</p><p>算法公开，大家都用同一套算法</p><p>What is one of the requirements of secure hashing<br> function?</p><p>It is a one way function<br> It is an ECC function<br> It is a secret function<br> It is a log function</p><p>对称加密的缺点</p><ul><li>需要共享同一个密钥</li></ul><p>优点：加密非常快</p><p>公钥加密：</p><ul><li><p>无需共享一个密钥，安全</p><p>公钥：加密</p><p>私钥：解密</p></li><li><p>加密慢，无法传大文件</p></li></ul><p>只有我能打开，但是别人都可以往里面放</p><p>邮筒、信箱的原理</p><p>数字信封：安全传大文件的方法：</p><ul><li>对称加密的密钥利用公钥加密</li><li>然后对文件进行对称加密</li></ul><p>这个就是数字信封</p><p>数字信封是一种数据传输加密的方法，它使用公钥密码体制来保证只有特定的收信人才能阅读通信的内容。数字信封的工作原理如下：</p><ul><li>发送方使用一个对称密钥来加密信息内容，生成密文。</li><li>发送方使用接收方的公钥来加密对称密钥，生成数字信封。</li><li>发送方将数字信封和密文一起发送给接收方。</li><li>接收方使用自己的私钥来解密数字信封，得到对称密钥。</li><li>接收方使用对称密钥来解密密文，得到信息内容。</li></ul><p>数字信封的优点是可以利用对称加密的速度和公钥加密的安全性，缺点是需要额外传输数字信封和管理公私钥。</p><p>如果你想了解更多关于数字信封的细节，请参考以下网页：</p><ul><li>数据传输加密-数字信封</li><li>数字信封工作原理</li><li>数字信封工作原理 - Crysaty</li></ul><p>公钥加密是一种非对称加密技术，它使用两个不同的密钥来加密和解密数据。其中一个是公钥，可以公开给任何人使用，另一个是私钥，只有持有者才能使用。公钥加密的实际应用很多，例如：</p><ul><li>软件商务系统中，可以使用公钥加密技术来保护用户的隐私和安全¹。</li><li>防盗版领域中，可以使用公钥加密技术来生成数字签名和验证软件的合法性¹。</li><li>软件VPN系统中，可以使用公钥加密技术来建立安全的通信隧道和认证用户的身份¹。</li></ul><p>如果你想了解更多关于公钥加密技术的原理和细节，请参考以下网页：</p><ul><li>RSA公钥加密机制跨语言应用实战²</li><li>理解公钥与私钥³</li><li>图文彻底搞懂非对称加密（公钥密钥）⁵</li><li>公开密钥加密⁶</li></ul><p>评判密码系统</p><ul><li>实用性</li><li>抗攻击的能力</li><li>算法公开性</li><li>可用性</li></ul><p>银行21天更换一次密码</p><p>增加破解密码的难度：</p><ul><li>增加长度</li><li>所有系统的密码不一样</li></ul><p>安全领域，所有的东西都需要设计成随机的，例如手机验证码</p><p>随机的东西，一定要放到最后才安全</p><p>如果先弄验证码，总有一次猜对，猜对以后就随便登录了</p><p>防止词频分析：每个字母出现概率都是相同的</p><p>一定要用非确定性的加密</p><h3 id="专业术语" tabindex="-1"><a class="header-anchor" href="#专业术语"><span>专业术语</span></a></h3><ul><li>明文(plaintext):没有加密的信息(message)</li><li>密文(ciphertext):加密后的信息</li><li>加密(encryption，encipher):从明文到密文的变换，映射（函数）</li><li>解密(decryption，decipher):从密文到明文的变换</li><li>密钥(key):加密和解密是在密钥控制下进行的 <ul><li>对称key</li><li>非对称：公钥pk（所有人公开）、私钥sk（自己保留）</li></ul></li></ul><p>密码算法，带有秘密参数的数学函数</p><p>需求1</p><p>密码参数：密钥</p><ul><li>知道密码参数，求逆非常容易</li><li>不知道密码参数，求逆在计算上上不可行的</li></ul><h3 id="密码系统模型" tabindex="-1"><a class="header-anchor" href="#密码系统模型"><span>密码系统模型</span></a></h3><ul><li>信源（source）</li><li>信宿（sink）</li><li>信道（channel）</li></ul><p>攻击</p><ul><li>重放攻击：如果是确定性的加密，别人如果窃取了信道里传送的内容，重新发给对方，</li></ul><p>分类</p><ul><li><p>对称算法</p></li><li><p>非对称算法</p><p>CA，认证中心，公钥（证书）</p></li></ul><p>ukey，一个小u盘，这里面存的一些密钥，只有把这个东西插上的时候才能进入系统</p><p>对称加密：接受方、发送方共享一把钥匙</p><p>公钥加密：</p><h3 id="密码分析" tabindex="-1"><a class="header-anchor" href="#密码分析"><span>密码分析</span></a></h3><p>穷举攻击：通过</p><blockquote><p>对抗：增大密钥空间</p></blockquote><p>统计分析攻击：</p><blockquote><p>对抗：设计明文和秘文的统计规律不一样，如引入随机</p></blockquote><p>解密变换攻击：针对加密变换的数学基础，通过数学求解设法找到解密变换</p><blockquote><p>王小云，怀孕期间把MD5破解了，现在是院士在清华</p><p>对抗：选用具有坚实的数学基础和足够复杂的加密算法</p></blockquote><p>不能采用确定性的加密算法，一定要随机的方式，不然容易出错</p><p>加密过程</p><ul><li><p>密钥生成，非确定性的算法</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mi>e</mi><mi>u</mi><mi>G</mi><mi>e</mi><mi>n</mi><mo stretchy="false">(</mo><mi>λ</mi><mo stretchy="false">)</mo><mo>→</mo><mi>k</mi></mrow><annotation encoding="application/x-tex">keuGen(\\lambda)\\rightarrow k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">u</span><span class="mord mathnormal">G</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">λ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span></p></li><li><p>加密，非确定性的算法更安全</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mi>n</mi><mi>c</mi><mo stretchy="false">(</mo><mi>m</mi><mo separator="true">,</mo><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>C</mi></mrow><annotation encoding="application/x-tex">Enc(m,k)\\rightarrow C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">c</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span></p></li><li><p>解密，确定性的算法</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi><mi>e</mi><mi>c</mi><mo stretchy="false">(</mo><mi>c</mi><mo separator="true">,</mo><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>m</mi></mrow><annotation encoding="application/x-tex">Dec(c,k)\\rightarrow m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">Dec</span><span class="mopen">(</span><span class="mord mathnormal">c</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span></p></li></ul><p>非对称加密过程：</p><p>公钥pk（所有人公开，用于加密）、私钥sk（自己保留，用于解密）</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mi>e</mi><mi>u</mi><mi>G</mi><mi>e</mi><mi>n</mi><mo stretchy="false">(</mo><mi>λ</mi><mo stretchy="false">)</mo><mo>→</mo><mo stretchy="false">(</mo><mi>p</mi><mi>k</mi><mo separator="true">,</mo><mi>s</mi><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">keuGen(\\lambda)\\rightarrow (pk,sk)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">u</span><span class="mord mathnormal">G</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">λ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span></p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mi>n</mi><mi>c</mi><mo stretchy="false">(</mo><mi>m</mi><mo separator="true">,</mo><mi>p</mi><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>C</mi></mrow><annotation encoding="application/x-tex">Enc(m,pk)\\rightarrow C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">c</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span></p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi><mi>e</mi><mi>c</mi><mo stretchy="false">(</mo><mi>c</mi><mo separator="true">,</mo><mi>s</mi><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>m</mi></mrow><annotation encoding="application/x-tex">Dec(c,sk)\\rightarrow m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">Dec</span><span class="mopen">(</span><span class="mord mathnormal">c</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span></p><p>ECB，可以并行做，每一位单独加密</p><p>机密性保护很差</p><p>PRF，伪随机函数，用ECB实现，可以固定长度</p><p>CBC引入随机初始向量，CBC更安全</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>C</mi><mo>=</mo><msup><mi>M</mi><mi>e</mi></msup></mrow><annotation encoding="application/x-tex">C=M^e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">e</span></span></span></span></span></span></span></span></span></span></span></p><p>e是常数</p><p>OTP，</p><p>一字一密</p><p>分块再加密，</p>',102)]))}const c=s(t,[["render",l],["__file","2. 密码学基础.html.vue"]]),o=JSON.parse(`{"path":"/education/bs/block-chain/2.%20%E5%AF%86%E7%A0%81%E5%AD%A6%E5%9F%BA%E7%A1%80.html","title":"密码学基础","lang":"en-US","frontmatter":{"description":"密码学基础 常见加密算法 加密 Encryption 对称 IV，会加入一个随机向量，来保证密码的随机 eg. DES, IDEA, AES 非对称 哈希函数 Hash Function 数字签名 DIgital Signature 对称加密 Symmetric Cryptography 又称私钥加密 非对称加密 如RSA 哈希加密 暴力攻击 open...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/block-chain/2.%20%E5%AF%86%E7%A0%81%E5%AD%A6%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"密码学基础"}],["meta",{"property":"og:description","content":"密码学基础 常见加密算法 加密 Encryption 对称 IV，会加入一个随机向量，来保证密码的随机 eg. DES, IDEA, AES 非对称 哈希函数 Hash Function 数字签名 DIgital Signature 对称加密 Symmetric Cryptography 又称私钥加密 非对称加密 如RSA 哈希加密 暴力攻击 open..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"密码学基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"常见加密算法","slug":"常见加密算法","link":"#常见加密算法","children":[{"level":3,"title":"专业术语","slug":"专业术语","link":"#专业术语","children":[]},{"level":3,"title":"密码系统模型","slug":"密码系统模型","link":"#密码系统模型","children":[]},{"level":3,"title":"密码分析","slug":"密码分析","link":"#密码分析","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":5.67,"words":1702},"filePathRelative":"education/bs/block-chain/2. 密码学基础.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>常见加密算法</h2>\\n<p>加密 Encryption</p>\\n<ul>\\n<li>\\n<p>对称</p>\\n<p>IV，会加入一个随机向量，来保证密码的随机</p>\\n<p>eg. DES, IDEA, AES</p>\\n</li>\\n<li>\\n<p>非对称</p>\\n</li>\\n</ul>\\n<p>哈希函数 Hash Function</p>\\n<p>数字签名 DIgital Signature</p>\\n<p>对称加密</p>\\n<p>Symmetric Cryptography</p>\\n<p>又称私钥加密</p>\\n<p>非对称加密</p>\\n<p>如RSA</p>\\n<p>哈希加密</p>\\n<blockquote>\\n<p>暴力攻击</p>\\n</blockquote>","autoDesc":true}`);export{c as comp,o as data};
