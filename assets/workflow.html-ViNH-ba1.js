import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as a}from"./app-C8HRrJwL.js";const l={};function n(r,e){return a(),i("div",null,e[0]||(e[0]=[o('<h1 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow"><span>Workflow</span></a></h1><ol><li><p><strong>data</strong>, get data ready</p></li><li><p><strong>build</strong> or pick a pretrained model(to suit your problem)</p><ol><li>Pick a loss function &amp; optimizer</li><li>Build a training loop</li></ol></li><li><p><strong>Fit</strong> the model to the data and make a prediction</p></li><li><p>Evaluate the model</p></li><li><p>Improve through experimentation</p></li><li><p>Save and reload your trained model</p></li></ol><hr><ol><li><strong>data</strong>, get data ready</li><li><strong>build</strong> or pick a pretrained model(to suit your problem)</li><li><strong>Fit</strong> the model to the data (training)</li><li>make a <strong>prediction</strong> (inference)</li><li>saving and loading a model</li><li>putting it all together</li><li>Evaluate the model</li><li>Improve through experimentation</li><li>Save and reload your trained model</li></ol><hr><p>Machine Learning: a game of two parts</p><ol><li>inputs</li><li>numerical encoding</li><li>learns representation(patterns/ features/ weights)</li><li>representation outputs</li><li>Outputs</li></ol><hr><ol><li>get data into a numerical representation</li><li>build a model to learn patterns in that numerical representation</li></ol><hr><h3 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset"><span>dataset</span></a></h3><ul><li>training set, always</li><li>validation set, often but not always</li><li>Test set, always</li></ul><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model"><span>model</span></a></h3><p>algorithm</p><ol><li>Gradient descent</li><li>back propagation</li></ol><hr><p>torch.nn<br> torch.nn.Parameter<br> torch.nn.Module<br> torch.optim</p><hr><p>torch.Interfere_mode()</p><h3 id="train" tabindex="-1"><a class="header-anchor" href="#train"><span>Train</span></a></h3><ol><li><p>loss function</p><p><code>nn.L1Loss()</code></p><p>MAE</p></li><li><p>optimizer</p><p><code>torch.optim.SGD()</code></p><p>Lr: learning rate 变化的幅度。是 hyperparameter 超参数，自己设置的</p></li></ol><p><code>module.state_dict()</code></p><h3 id="training-loop" tabindex="-1"><a class="header-anchor" href="#training-loop"><span>Training loop</span></a></h3><ol start="0"><li><p>loop through the data</p></li><li><p>Forward pass to make predictions on data</p><p>前向传播</p></li><li><p>Calculate the loss</p><p>计算误差</p></li><li><p>Optimizer zero grad</p></li><li><p>Loss backward</p><p>反向传播</p></li><li><p>Optimizer step</p></li></ol><p><code>epochs</code></p><p>数据、模型、损失函数、优化器、迭代训练</p><h3 id="testing-loop" tabindex="-1"><a class="header-anchor" href="#testing-loop"><span>Testing loop</span></a></h3><h3 id="saving-a-model-in-pytorch" tabindex="-1"><a class="header-anchor" href="#saving-a-model-in-pytorch"><span>Saving a model in Pytorch</span></a></h3><ul><li><code>torch.save()</code>, picle</li><li><code>torch.load()</code>, picle</li><li><code>torch.nn.load_state_dict()</code>, picle</li></ul>',29)]))}const s=t(l,[["render",n],["__file","workflow.html.vue"]]),c=JSON.parse(`{"path":"/ai/pytorch/workflow.html","title":"Workflow","lang":"en-US","frontmatter":{"description":"Workflow data, get data ready build or pick a pretrained model(to suit your problem) Pick a loss function & optimizer Build a training loop Fit the model to the data and make a ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/ai/pytorch/workflow.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Workflow"}],["meta",{"property":"og:description","content":"Workflow data, get data ready build or pick a pretrained model(to suit your problem) Pick a loss function & optimizer Build a training loop Fit the model to the data and make a ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-27T14:41:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-27T14:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Workflow\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-27T14:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"dataset","slug":"dataset","link":"#dataset","children":[]},{"level":3,"title":"model","slug":"model","link":"#model","children":[]},{"level":3,"title":"Train","slug":"train","link":"#train","children":[]},{"level":3,"title":"Training loop","slug":"training-loop","link":"#training-loop","children":[]},{"level":3,"title":"Testing loop","slug":"testing-loop","link":"#testing-loop","children":[]},{"level":3,"title":"Saving a model in Pytorch","slug":"saving-a-model-in-pytorch","link":"#saving-a-model-in-pytorch","children":[]}],"git":{"createdTime":1703688112000,"updatedTime":1703688112000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.91,"words":274},"filePathRelative":"ai/pytorch/workflow.md","localizedDate":"December 27, 2023","excerpt":"\\n<ol>\\n<li>\\n<p><strong>data</strong>, get data ready</p>\\n</li>\\n<li>\\n<p><strong>build</strong> or pick a pretrained model(to suit your problem)</p>\\n<ol>\\n<li>Pick a loss function &amp; optimizer</li>\\n<li>Build a training loop</li>\\n</ol>\\n</li>\\n<li>\\n<p><strong>Fit</strong> the model to the data and make a prediction</p>\\n</li>\\n<li>\\n<p>Evaluate the model</p>\\n</li>\\n<li>\\n<p>Improve through experimentation</p>\\n</li>\\n<li>\\n<p>Save and reload your trained model</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as comp,c as data};
