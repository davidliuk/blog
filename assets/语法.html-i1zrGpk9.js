import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-CybQbXIt.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go"><span>Go</span></a></h1><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3><p>Golang 中的数据类型包括基本数据类型和复合数据类型。</p><h4 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h4><p>Golang 中的基本数据类型包括：</p><ul><li>布尔类型：bool，取值为 true 或 false。</li><li>数值类型：包括整数类型和浮点数类型。 <ul><li>整数类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、int、uint、uintptr。</li><li>浮点数类型：float32、float64。</li></ul></li><li>字符串类型：用于表示文本数据。</li><li>字符类型：用于表示单个字符，使用 rune 类型表示。</li><li>错误类型：用于表示错误信息，通常用于函数返回值。</li></ul><h4 id="复合数据类型" tabindex="-1"><a class="header-anchor" href="#复合数据类型"><span>复合数据类型</span></a></h4><p>Golang 中的复合数据类型包括：</p><ul><li>数组类型：用于表示一组固定长度的数据。</li><li>切片类型：用于表示一组长度可变的数据。</li><li>映射类型：用于表示一组键值对的数据。</li><li>结构体类型：用于表示一组相关的数据。</li><li>接口类型：用于表示一组方法的集合。</li></ul><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h3><p>Golang 中的流程控制语句包括：</p><ul><li>条件语句：if 语句、switch 语句。</li><li>循环语句：for 语句。</li><li>跳转语句：break 语句、continue 语句、goto 语句。</li></ul><h4 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句"><span>条件语句</span></a></h4><p>if 语句用于根据条件执行不同的代码块，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> initialization</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> initialization</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>initialization</code>的作用域覆盖 if-else 所有分支</p><p>switch 语句用于根据不同的条件执行不同的代码块，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">switch</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> expression</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> value1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> value2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句"><span>循环语句</span></a></h4><p>for 语句用于循环执行一段代码，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> initialization</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">post</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，initialization 用于初始化循环变量，condition 用于判断循环是否继续，post 用于更新循环变量。</p><h4 id="跳转语句" tabindex="-1"><a class="header-anchor" href="#跳转语句"><span>跳转语句</span></a></h4><p>break 语句用于跳出循环，continue 语句用于跳过当前循环，goto 语句用于无条件跳转到指定的标签处。</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        continue</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">goto</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> label</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// code block</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// code block</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总的来说，Golang 中的流程控制语句包括条件语句、循环语句和跳转语句，可以根据实际情况选择合适的语句进行控制程序的流程。</p><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明"><span>变量声明</span></a></h3><p>在 Golang 中，变量声明可以使用 var 关键字或短变量声明（:=）。</p><p>使用 var 关键字声明变量的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> variable_name</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> data_type</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，variable_name 为变量名，data_type 为变量的数据类型。</p><p>例如，声明一个整数变量 x：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以在声明变量的同时进行初始化，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> variable_name</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> data_type</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> initial_value</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如，声明一个整数变量 x 并初始化为 10：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用短变量声明（:=）可以更简洁地声明变量并进行初始化，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">variable_name</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> initial_value</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如，声明一个整数变量 x 并初始化为 10：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">x</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，短变量声明只能用于函数内部，而 var 关键字可以用于函数内部和外部。另外，Golang 中的变量声明必须使用，否则会编译错误。</p><h2 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程"><span>并发编程</span></a></h2><p>Golang 是一门天生支持并发编程的语言，它提供了丰富的并发编程机制，包括 goroutine、channel、select 等。以下是 Golang 并发编程的一些基本概念和使用方法：</p><h3 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine"><span>Goroutine</span></a></h3><p>Goroutine 是 Golang 中的轻量级线程，可以在一个程序中同时运行多个 Goroutine，每个 Goroutine 都是独立的执行流程。Goroutine 的创建和启动非常简单，只需要在函数调用前加上 go 关键字即可，例如：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">go</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>Channel</span></a></h3><p>Channel 是 Golang 中的一种通信机制，用于在 Goroutine 之间传递数据。Channel 有两种类型：带缓冲的 Channel 和不带缓冲的 Channel。带缓冲的 Channel 可以缓存一定数量的数据，当缓存满时，发送方会被阻塞，直到接收方取走数据。不带缓冲的 Channel 在发送和接收数据时都会被阻塞，直到有对应的接收或发送操作为止。</p><p>创建 Channel 的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> data_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>发送数据到 Channel 的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> data</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>从 Channel 接收数据的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h3><p>Select 语句用于在多个 Channel 之间进行选择，当有一个 Channel 可以进行发送或接收操作时，就会执行对应的代码块。Select 语句可以用于实现超时、非阻塞等功能。</p><p>Select 语句的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是 Golang 并发编程的一些基本概念和使用方法，需要注意的是，在并发编程中需要注意线程安全和数据竞争等问题，可以使用锁、原子操作等机制来解决这些问题。</p><h3 id="对象声明" tabindex="-1"><a class="header-anchor" href="#对象声明"><span>对象声明</span></a></h3><p>在 Golang 中，new 和 make 都是用于创建新的数据结构的内置函数，但是它们的作用不同。</p><p>new 用于创建一个指定类型的指针，并返回该指针的地址。new 的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ptr</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">data_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，data_type 为指定的数据类型，ptr 为指向该数据类型的指针。</p><p>例如，创建一个整数类型的指针：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ptr</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>make 用于创建一个指定类型的数据结构，并返回该数据结构的引用。make 只能用于创建 slice、map 和 channel 等数据结构，因为这些数据结构需要进行初始化才能使用。make 的语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ref</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">data_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">capacity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，data_type 为指定的数据类型，length 为数据结构的长度，capacity 为数据结构的容量（仅适用于 slice 和 channel）。</p><p>例如，创建一个长度为 10、容量为 20 的整数类型的 slice：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，new 和 make 都是用于创建新的数据结构，但是它们的作用不同。new 用于创建指针类型的数据结构，而 make 用于创建 slice、map 和 channel 等数据结构。在使用 new 和 make 时，需要根据实际情况选择合适的函数，并进行适当的初始化。</p><p>在 Golang 中，数组和切片都是用于存储一组数据的数据结构，但是它们之间有很大的区别。</p><h2 id="数组与切片" tabindex="-1"><a class="header-anchor" href="#数组与切片"><span>数组与切片</span></a></h2><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>数组是一组固定长度的数据结构，数组的长度在创建时就已经确定，不能动态改变。数组的元素类型可以是任意类型，但是所有元素的类型必须相同。数组的声明和初始化语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> array_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">data_type</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，array_name 为数组名，length 为数组长度，data_type 为数组元素类型。</p><p>例如，创建一个长度为 5 的整数类型数组：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片"><span>切片</span></a></h3><p>切片是一个动态长度的数据结构，可以根据需要动态增加或减少长度。切片的元素类型和数组类似，但是切片的长度可以动态改变。切片的声明和初始化语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> slice_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">data_type</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，slice_name 为切片名，data_type 为切片元素类型。</p><p>例如，创建一个整数类型的切片：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>切片可以通过 make 函数进行初始化，语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slice_name</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([]</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">data_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">capacity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，length 为切片的长度，capacity 为切片的容量。</p><p>例如，创建一个长度为 5、容量为 10 的整数类型切片：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3><p>数组和切片之间的主要区别如下：</p><ol><li><p>长度：数组的长度在创建时就已经确定，不能动态改变，而切片的长度可以动态改变。</p></li><li><p>内存分配：数组在创建时就会分配一段连续的内存空间，而切片在创建时不会分配内存空间，只有在添加元素时才会动态分配内存空间。</p></li><li><p>传递方式：数组在函数调用时会进行值传递，即会复制一份数组，而切片在函数调用时会进行引用传递，即会传递切片的指针。</p></li></ol><p>总的来说，数组和切片都是用于存储一组数据的数据结构，但是它们之间的区别很大，需要根据实际情况选择合适的数据结构。</p>`,98)]))}const p=s(l,[["render",t],["__file","语法.html.vue"]]),r=JSON.parse(`{"path":"/se/lang/golang/%E8%AF%AD%E6%B3%95.html","title":"Go","lang":"en-US","frontmatter":{"description":"Go 基本语法 数据类型 Golang 中的数据类型包括基本数据类型和复合数据类型。 基本数据类型 Golang 中的基本数据类型包括： 布尔类型：bool，取值为 true 或 false。 数值类型：包括整数类型和浮点数类型。 整数类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、int、ui...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/golang/%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Go"}],["meta",{"property":"og:description","content":"Go 基本语法 数据类型 Golang 中的数据类型包括基本数据类型和复合数据类型。 基本数据类型 Golang 中的基本数据类型包括： 布尔类型：bool，取值为 true 或 false。 数值类型：包括整数类型和浮点数类型。 整数类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、int、ui..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:01:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"流程控制","slug":"流程控制","link":"#流程控制","children":[]},{"level":3,"title":"变量声明","slug":"变量声明","link":"#变量声明","children":[]}]},{"level":2,"title":"并发编程","slug":"并发编程","link":"#并发编程","children":[{"level":3,"title":"Goroutine","slug":"goroutine","link":"#goroutine","children":[]},{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"Select","slug":"select","link":"#select","children":[]},{"level":3,"title":"对象声明","slug":"对象声明","link":"#对象声明","children":[]}]},{"level":2,"title":"数组与切片","slug":"数组与切片","link":"#数组与切片","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"切片","slug":"切片","link":"#切片","children":[]},{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]}]}],"git":{"createdTime":1684318252000,"updatedTime":1732240892000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3},{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":7.06,"words":2119},"filePathRelative":"se/lang/golang/语法.md","localizedDate":"May 17, 2023","excerpt":"\\n<h2>基本语法</h2>\\n<h3>数据类型</h3>\\n<p>Golang 中的数据类型包括基本数据类型和复合数据类型。</p>\\n<h4>基本数据类型</h4>\\n<p>Golang 中的基本数据类型包括：</p>\\n<ul>\\n<li>布尔类型：bool，取值为 true 或 false。</li>\\n<li>数值类型：包括整数类型和浮点数类型。\\n<ul>\\n<li>整数类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、int、uint、uintptr。</li>\\n<li>浮点数类型：float32、float64。</li>\\n</ul>\\n</li>\\n<li>字符串类型：用于表示文本数据。</li>\\n<li>字符类型：用于表示单个字符，使用 rune 类型表示。</li>\\n<li>错误类型：用于表示错误信息，通常用于函数返回值。</li>\\n</ul>","autoDesc":true}`);export{p as comp,r as data};
