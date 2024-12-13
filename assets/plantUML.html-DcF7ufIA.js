import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-DIqbhby7.js";const i={};function o(r,t){return l(),a("div",null,t[0]||(t[0]=[n(`<h1 id="plant-uml" tabindex="-1"><a class="header-anchor" href="#plant-uml"><span>Plant UML</span></a></h1><p><a href="https://blog.csdn.net/vidar_li/article/details/86495811" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/vidar_li/article/details/86495811</a></p><p><img src="https://g.gravizo.com/svg?
  digraph G {
    aize =&quot;4,4&quot;;
    main [shape=box];
    main -&gt; parse [weight=8];
    parse -&gt; execute;
    main -&gt; init [style=dotted];
    main -&gt; cleanup;
    execute -&gt; { make_string; printf}
    init -&gt; make_string;
    edge [color=red];
    main -&gt; printf [style=bold,label=&quot;100 times&quot;];
    make_string [label=&quot;make a string&quot;];
    node [shape=box,style=filled,color=&quot;.7 .3 1.0&quot;];
    execute -&gt; compare;
  }"></p><p><a href="https://blog.csdn.net/fleaxin/article/details/104776154/" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/fleaxin/article/details/104776154/</a></p><p><a href="https://plantuml.com/zh/stdlib" target="_blank" rel="noopener noreferrer">https://plantuml.com/zh/stdlib</a></p>`,5)]))}const d=e(i,[["render",o],["__file","plantUML.html.vue"]]),c=JSON.parse(`{"path":"/se/tools/uml/plantUML.html","title":"Plant UML","lang":"en-US","frontmatter":{"description":"Plant UML https://blog.csdn.net/vidar_li/article/details/86495811 https://blog.csdn.net/fleaxin/article/details/104776154/ https://plantuml.com/zh/stdlib","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/tools/uml/plantUML.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Plant UML"}],["meta",{"property":"og:description","content":"Plant UML https://blog.csdn.net/vidar_li/article/details/86495811 https://blog.csdn.net/fleaxin/article/details/104776154/ https://plantuml.com/zh/stdlib"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plant UML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1673100434000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.21,"words":63},"filePathRelative":"se/tools/uml/plantUML.md","localizedDate":"January 7, 2023","excerpt":"\\n<p><a href=\\"https://blog.csdn.net/vidar_li/article/details/86495811\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/vidar_li/article/details/86495811</a></p>\\n<p><img src=\\"https://g.gravizo.com/svg?\\n  digraph G {\\n    aize =&quot;4,4&quot;;\\n    main [shape=box];\\n    main -> parse [weight=8];\\n    parse -> execute;\\n    main -> init [style=dotted];\\n    main -> cleanup;\\n    execute -> { make_string; printf}\\n    init -> make_string;\\n    edge [color=red];\\n    main -> printf [style=bold,label=&quot;100 times&quot;];\\n    make_string [label=&quot;make a string&quot;];\\n    node [shape=box,style=filled,color=&quot;.7 .3 1.0&quot;];\\n    execute -> compare;\\n  }\\"></p>","autoDesc":true}`);export{d as comp,c as data};
