import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as n,o as s}from"./app-ktFCNIob.js";const a={};function o(r,e){return s(),i("div",null,e[0]||(e[0]=[n(`<h1 id="concept-questions-for-hw01" tabindex="-1"><a class="header-anchor" href="#concept-questions-for-hw01"><span>Concept Questions for HW01</span></a></h1><h2 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1"><span>Question 1</span></a></h2><h3 id="mathematical-difference" tabindex="-1"><a class="header-anchor" href="#mathematical-difference"><span>Mathematical Difference:</span></a></h3><ol><li>vec4 operator*(const vec4 &amp;v) const (Line 89): This multiplies a matrix (mat4) by a column vector (vec4), i.e., m * v. The matrix applies a transformation to the vector.</li><li>vec4 operator*(const vec4 &amp;v, const mat4 &amp;m) (Line 106): This multiplies a row vector (vec4) by a matrix (mat4), i.e., v * m. This may result in a different transformation, as the multiplication order is reversed.</li></ol><h3 id="explanation-of-const" tabindex="-1"><a class="header-anchor" href="#explanation-of-const"><span>Explanation of const:</span></a></h3><ol><li>const vec4 &amp;v: The vector v is passed as a constant reference, meaning it cannot be modified inside the function.</li><li>const mat4 &amp;m: The matrix m is passed as a constant reference, ensuring it isn&#39;t modified.</li><li>const after the function: Ensures that the matrix object calling the function is not modified.</li></ol><h2 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2"><span>Question 2</span></a></h2><ol><li><p><strong>First function (line 25)</strong>:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>float operator[](unsigned int index) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This version can <strong>only</strong> be used when the <code>vec4</code> object is <strong>const</strong>, as it provides read-only access to the vector&#39;s elements.</p><p><strong>Situation</strong>:</p><ul><li><p>If you have a <code>const vec4</code> object, you can <strong>only use this version</strong> to access its elements because the vector cannot be modified. For example:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const vec4 v(1.0f, 2.0f, 3.0f, 4.0f);</span></span>
<span class="line"><span>float x = v[0];  // Accesses the first element, but cannot modify it.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>Second function (line 28)</strong>:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>float&amp; operator[](unsigned int index);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This version can <strong>only</strong> be used with <strong>non-const <code>vec4</code> objects</strong>, as it provides modifiable access to the elements.</p><p><strong>Situation</strong>:</p><ul><li><p>When you want to <strong>modify an element</strong> of a <code>vec4</code>, you use this version. For instance:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vec4 v(1.0f, 2.0f, 3.0f, 4.0f);</span></span>
<span class="line"><span>v[0] = 5.0f;  // Modifies the first element of the vector.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>In summary:</p><ul><li>The first function is used when <strong>reading values</strong> from a <code>const vec4</code>.</li><li>The second function is used when you need to <strong>modify elements</strong> in a <strong>non-const vec4</strong>.</li></ul>`,10)]))}const d=t(a,[["render",o],["__file","1.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/cq/1.html","title":"Concept Questions for HW01","lang":"en-US","frontmatter":{"description":"Concept Questions for HW01 Question 1 Mathematical Difference: vec4 operator*(const vec4 &v) const (Line 89): This multiplies a matrix (mat4) by a column vector (vec4), i.e., m ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/1.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Concept Questions for HW01"}],["meta",{"property":"og:description","content":"Concept Questions for HW01 Question 1 Mathematical Difference: vec4 operator*(const vec4 &v) const (Line 89): This multiplies a matrix (mat4) by a column vector (vec4), i.e., m ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concept Questions for HW01\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Question 1","slug":"question-1","link":"#question-1","children":[{"level":3,"title":"Mathematical Difference:","slug":"mathematical-difference","link":"#mathematical-difference","children":[]},{"level":3,"title":"Explanation of const:","slug":"explanation-of-const","link":"#explanation-of-const","children":[]}]},{"level":2,"title":"Question 2","slug":"question-2","link":"#question-2","children":[]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"education/ms/5600/cq/1.md","localizedDate":"September 30, 2024","excerpt":"\\n<h2>Question 1</h2>\\n<h3>Mathematical Difference:</h3>\\n<ol>\\n<li>vec4 operator*(const vec4 &amp;v) const (Line 89): This multiplies a matrix (mat4) by a column vector (vec4), i.e., m * v. The matrix applies a transformation to the vector.</li>\\n<li>vec4 operator*(const vec4 &amp;v, const mat4 &amp;m) (Line 106): This multiplies a row vector (vec4) by a matrix (mat4), i.e., v * m. This may result in a different transformation, as the multiplication order is reversed.</li>\\n</ol>","autoDesc":true}`);export{d as comp,h as data};