import{_ as l,V as p,W as i,a0 as a}from"./framework-705b829b.js";const e={},n=a('<h1 id="复杂度理论" tabindex="-1"><a class="header-anchor" href="#复杂度理论" aria-hidden="true">#</a> 复杂度理论</h1><p>四个复杂度</p><ol><li>时间复杂度 - 核心考察点</li><li>空间复杂度 - 次要考察点</li><li>编程复杂度 - 能看得懂</li><li>思维复杂度 - 能想得出</li></ol><p>双指针线性复杂度</p><p>但有的时候，很明显的小数据的情况下，可以略微损失一点时间复杂度来降低编程复杂度，提高可读性</p><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><h3 id="p问题-polynomial" tabindex="-1"><a class="header-anchor" href="#p问题-polynomial" aria-hidden="true">#</a> P问题 Polynomial</h3><p>（多项式问题）</p><ul><li>On，On2，On3</li><li>O1，On0.5</li><li>Ologn，Onlogn</li></ul><h3 id="np问题" tabindex="-1"><a class="header-anchor" href="#np问题" aria-hidden="true">#</a> NP问题</h3><ul><li>O2n，On^n, On!</li></ul><p>只考虑最高项</p><p>不考虑常数项和系数项</p><p>Omax(n, m) = O(n+m)</p><p>根据时间复杂度来倒推算法</p><p>On算法有</p><ol><li>双指针算法：最常见，远大于后面的所有算法的和</li><li>打擂台算法：找最大值（一开始赋值成负无穷，每次把最大的打下来）</li><li>单调栈算法，四五道题稍微多一些</li><li>单调队列算法</li></ol><p>双指针</p><ol><li><p>相向双指针（eg判断回文串）</p><ol><li><p>Reverse型</p><p>翻转字符串</p><p>判断回文串</p></li><li><p>Two Sum型</p><p>两数之和</p><ol><li>Hashmap: On, On</li><li>排序+双指针: Onlogn, O1</li></ol><p>三数之和</p></li><li><p>Partition型</p><p>快速排序</p><p>颜色排序</p></li></ol></li><li><p>同向双指针</p></li><li><p>背向双指针</p><p>非常少见，就几个题</p><p>最长回文串</p></li></ol><p>如果while或if里面过长，则可以考虑可以拆出来一个函数来处理，过长的时候不容易读懂，然后可能出错</p><p>返回多个值，需要构建类</p><p>两数之和，有十种变形</p><p>follow up</p><ol><li><p>排好序的情况下，哪种更好</p><p>双指针</p></li><li><p>需要返回下标的时候，哪种更好</p><p>hashmap更好</p><p>否则双指针需要将数组转换成一个pair的数组进行排序，保存数值和原来的位置</p></li></ol>',24),o=[n];function r(h,t){return p(),i("div",null,o)}const s=l(e,[["render",r],["__file","4. 复杂度理论.html.vue"]]);export{s as default};
