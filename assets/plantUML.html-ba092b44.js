const t=JSON.parse(`{"key":"v-58b8a846","path":"/se/tools/uml/plantUML.html","title":"Plant UML","lang":"en-US","frontmatter":{"description":"Plant UML https://blog.csdn.net/vidar_li/article/details/86495811","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/tools/uml/plantUML.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Plant UML"}],["meta",{"property":"og:description","content":"Plant UML https://blog.csdn.net/vidar_li/article/details/86495811"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-07T14:07:14.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-07T14:07:14.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/tools/uml/plantUML.html"}]]},"headers":[],"git":{"createdTime":1673100434000,"updatedTime":1673100434000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.23,"words":70},"localizedDate":"January 7, 2023","filePathRelative":"se/tools/uml/plantUML.md","excerpt":"<h1> Plant UML</h1>\\n<p><a href=\\"https://blog.csdn.net/vidar_li/article/details/86495811\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/vidar_li/article/details/86495811</a></p>\\n<p><img src=\\"https://g.gravizo.com/svg?\\n  digraph G {\\n    aize =&quot;4,4&quot;;\\n    main [shape=box];\\n    main -> parse [weight=8];\\n    parse -> execute;\\n    main -> init [style=dotted];\\n    main -> cleanup;\\n    execute -> { make_string; printf}\\n    init -> make_string;\\n    edge [color=red];\\n    main -> printf [style=bold,label=&quot;100 times&quot;];\\n    make_string [label=&quot;make a string&quot;];\\n    node [shape=box,style=filled,color=&quot;.7 .3 1.0&quot;];\\n    execute -> compare;\\n  }\\"></p>","autoDesc":true}`);export{t as data};
