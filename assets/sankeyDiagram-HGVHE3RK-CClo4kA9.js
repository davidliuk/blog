import{m as n,v as jt,d as zt,Q as dt,B as Bt,w as Ft,M as Rt,F as Gt,A as Ut,L as Wt,h as qt,b as K,aY as Qt,b7 as Vt,bf as Ht}from"./mermaid.esm.min-D4u8nBbZ.js";import"./app-DIqbhby7.js";var st=function(){var t=n(function(x,r,a,f){for(a=a||{},f=x.length;f--;a[x[f]]=r);return a},"o"),i=[1,9],s=[1,10],l=[1,5,10,12],h={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:n(function(x,r,a,f,k,d,b){var v=d.length-1;switch(k){case 7:let C=f.findOrCreateNode(d[v-4].trim().replaceAll('""','"')),A=f.findOrCreateNode(d[v-2].trim().replaceAll('""','"')),N=parseFloat(d[v].trim());f.addLink(C,A,N);break;case 8:case 9:case 11:this.$=d[v];break;case 10:this.$=d[v-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:i,20:s},{1:[2,6],7:11,10:[1,12]},t(s,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(l,[2,8]),t(l,[2,9]),{19:[1,16]},t(l,[2,11]),{1:[2,1]},{1:[2,5]},t(s,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:i,20:s},{15:18,16:7,17:8,18:i,20:s},{18:[1,19]},t(s,[2,3]),{12:[1,20]},t(l,[2,10]),{15:21,16:7,17:8,18:i,20:s},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:n(function(x,r){if(r.recoverable)this.trace(x);else{var a=new Error(x);throw a.hash=r,a}},"parseError"),parse:n(function(x){var r=this,a=[0],f=[],k=[null],d=[],b=this.table,v="",C=0,A=0,N=0,j=2,M=1,z=d.slice.call(arguments,1),L=Object.create(this.lexer),I={yy:{}};for(var D in this.yy)Object.prototype.hasOwnProperty.call(this.yy,D)&&(I.yy[D]=this.yy[D]);L.setInput(x,I.yy),I.yy.lexer=L,I.yy.parser=this,typeof L.yylloc>"u"&&(L.yylloc={});var g=L.yylloc;d.push(g);var S=L.options&&L.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function q(E){a.length=a.length-2*E,k.length=k.length-E,d.length=d.length-E}n(q,"popStack");function R(){var E;return E=f.pop()||L.lex()||M,typeof E!="number"&&(E instanceof Array&&(f=E,E=f.pop()),E=r.symbols_[E]||E),E}n(R,"lex");for(var T,G,P,e,y,u,c={},o,p,w,$;;){if(P=a[a.length-1],this.defaultActions[P]?e=this.defaultActions[P]:((T===null||typeof T>"u")&&(T=R()),e=b[P]&&b[P][T]),typeof e>"u"||!e.length||!e[0]){var O="";$=[];for(o in b[P])this.terminals_[o]&&o>j&&$.push("'"+this.terminals_[o]+"'");L.showPosition?O="Parse error on line "+(C+1)+`:
`+L.showPosition()+`
Expecting `+$.join(", ")+", got '"+(this.terminals_[T]||T)+"'":O="Parse error on line "+(C+1)+": Unexpected "+(T==M?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(O,{text:L.match,token:this.terminals_[T]||T,line:L.yylineno,loc:g,expected:$})}if(e[0]instanceof Array&&e.length>1)throw new Error("Parse Error: multiple actions possible at state: "+P+", token: "+T);switch(e[0]){case 1:a.push(T),k.push(L.yytext),d.push(L.yylloc),a.push(e[1]),T=null,G?(T=G,G=null):(A=L.yyleng,v=L.yytext,C=L.yylineno,g=L.yylloc,N>0);break;case 2:if(p=this.productions_[e[1]][1],c.$=k[k.length-p],c._$={first_line:d[d.length-(p||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(p||1)].first_column,last_column:d[d.length-1].last_column},S&&(c._$.range=[d[d.length-(p||1)].range[0],d[d.length-1].range[1]]),u=this.performAction.apply(c,[v,A,C,I.yy,e[1],k,d].concat(z)),typeof u<"u")return u;p&&(a=a.slice(0,-1*p*2),k=k.slice(0,-1*p),d=d.slice(0,-1*p)),a.push(this.productions_[e[1]][0]),k.push(c.$),d.push(c._$),w=b[a[a.length-2]][a[a.length-1]],a.push(w);break;case 3:return!0}}return!0},"parse")},m=function(){var x={EOF:1,parseError:n(function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},"parseError"),setInput:n(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:n(function(r){var a=r.length,f=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var k=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===k.length?this.yylloc.first_column:0)+k[k.length-f.length].length-f[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(r){this.unput(this.match.slice(r))},"less"),pastInput:n(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:n(function(r,a){var f,k,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),k=r[0].match(/(?:\r\n?|\n).*/g),k&&(this.yylineno+=k.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:k?k[k.length-1].length-k[k.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],f=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var b in d)this[b]=d[b];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,f,k;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),b=0;b<d.length;b++)if(f=this._input.match(this.rules[d[b]]),f&&(!a||f[0].length>a[0].length)){if(a=f,k=b,this.options.backtrack_lexer){if(r=this.test_match(f,d[b]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,d[k]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var r=this.next();return r||this.lex()},"lex"),begin:n(function(r){this.conditionStack.push(r)},"begin"),popState:n(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:n(function(r){this.begin(r)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(r,a,f,k){switch(f){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return x}();h.lexer=m;function _(){this.yy={}}return n(_,"Parser"),_.prototype=h,h.Parser=_,new _}();st.parser=st;var J=st,nt=[],it=[],tt=new Map,Xt=n(()=>{nt=[],it=[],tt=new Map,jt()},"clear"),U,Kt=(U=class{constructor(i,s,l=0){this.source=i,this.target=s,this.value=l}},n(U,"SankeyLink"),U),Yt=n((t,i,s)=>{nt.push(new Kt(t,i,s))},"addLink"),W,Zt=(W=class{constructor(i){this.ID=i}},n(W,"SankeyNode"),W),Jt=n(t=>{t=zt.sanitizeText(t,dt());let i=tt.get(t);return i===void 0&&(i=new Zt(t),tt.set(t,i),it.push(i)),i},"findOrCreateNode"),te=n(()=>it,"getNodes"),ee=n(()=>nt,"getLinks"),ne=n(()=>({nodes:it.map(t=>({id:t.ID})),links:nt.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),ie={nodesMap:tt,getConfig:n(()=>dt().sankey,"getConfig"),getNodes:te,getLinks:ee,getGraph:ne,addLink:Yt,findOrCreateNode:Jt,getAccTitle:Bt,setAccTitle:Ft,getAccDescription:Rt,setAccDescription:Gt,getDiagramTitle:Ut,setDiagramTitle:Wt,clear:Xt};function ot(t,i){let s;if(i===void 0)for(let l of t)l!=null&&(s<l||s===void 0&&l>=l)&&(s=l);else{let l=-1;for(let h of t)(h=i(h,++l,t))!=null&&(s<h||s===void 0&&h>=h)&&(s=h)}return s}n(ot,"max");function gt(t,i){let s;if(i===void 0)for(let l of t)l!=null&&(s>l||s===void 0&&l>=l)&&(s=l);else{let l=-1;for(let h of t)(h=i(h,++l,t))!=null&&(s>h||s===void 0&&h>=h)&&(s=h)}return s}n(gt,"min");function Y(t,i){let s=0;if(i===void 0)for(let l of t)(l=+l)&&(s+=l);else{let l=-1;for(let h of t)(h=+i(h,++l,t))&&(s+=h)}return s}n(Y,"sum");function kt(t){return t.target.depth}n(kt,"targetDepth");function xt(t){return t.depth}n(xt,"left");function vt(t,i){return i-1-t.height}n(vt,"right");function pt(t,i){return t.sourceLinks.length?t.depth:i-1}n(pt,"justify");function wt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?gt(t.sourceLinks,kt)-1:0}n(wt,"center");function H(t){return function(){return t}}n(H,"constant");function at(t,i){return X(t.source,i.source)||t.index-i.index}n(at,"ascendingSourceBreadth");function lt(t,i){return X(t.target,i.target)||t.index-i.index}n(lt,"ascendingTargetBreadth");function X(t,i){return t.y0-i.y0}n(X,"ascendingBreadth");function Z(t){return t.value}n(Z,"value");function bt(t){return t.index}n(bt,"defaultId");function Lt(t){return t.nodes}n(Lt,"defaultNodes");function Et(t){return t.links}n(Et,"defaultLinks");function ht(t,i){let s=t.get(i);if(!s)throw new Error("missing: "+i);return s}n(ht,"find");function ut({nodes:t}){for(let i of t){let s=i.y0,l=s;for(let h of i.sourceLinks)h.y0=s+h.width/2,s+=h.width;for(let h of i.targetLinks)h.y1=l+h.width/2,l+=h.width}}n(ut,"computeLinkBreadths");function Tt(){let t=0,i=0,s=1,l=1,h=24,m=8,_,x=bt,r=pt,a,f,k=Lt,d=Et,b=6;function v(){let e={nodes:k.apply(null,arguments),links:d.apply(null,arguments)};return C(e),A(e),N(e),j(e),L(e),ut(e),e}n(v,"sankey"),v.update=function(e){return ut(e),e},v.nodeId=function(e){return arguments.length?(x=typeof e=="function"?e:H(e),v):x},v.nodeAlign=function(e){return arguments.length?(r=typeof e=="function"?e:H(e),v):r},v.nodeSort=function(e){return arguments.length?(a=e,v):a},v.nodeWidth=function(e){return arguments.length?(h=+e,v):h},v.nodePadding=function(e){return arguments.length?(m=_=+e,v):m},v.nodes=function(e){return arguments.length?(k=typeof e=="function"?e:H(e),v):k},v.links=function(e){return arguments.length?(d=typeof e=="function"?e:H(e),v):d},v.linkSort=function(e){return arguments.length?(f=e,v):f},v.size=function(e){return arguments.length?(t=i=0,s=+e[0],l=+e[1],v):[s-t,l-i]},v.extent=function(e){return arguments.length?(t=+e[0][0],s=+e[1][0],i=+e[0][1],l=+e[1][1],v):[[t,i],[s,l]]},v.iterations=function(e){return arguments.length?(b=+e,v):b};function C({nodes:e,links:y}){for(let[c,o]of e.entries())o.index=c,o.sourceLinks=[],o.targetLinks=[];let u=new Map(e.map((c,o)=>[x(c,o,e),c]));for(let[c,o]of y.entries()){o.index=c;let{source:p,target:w}=o;typeof p!="object"&&(p=o.source=ht(u,p)),typeof w!="object"&&(w=o.target=ht(u,w)),p.sourceLinks.push(o),w.targetLinks.push(o)}if(f!=null)for(let{sourceLinks:c,targetLinks:o}of e)c.sort(f),o.sort(f)}n(C,"computeNodeLinks");function A({nodes:e}){for(let y of e)y.value=y.fixedValue===void 0?Math.max(Y(y.sourceLinks,Z),Y(y.targetLinks,Z)):y.fixedValue}n(A,"computeNodeValues");function N({nodes:e}){let y=e.length,u=new Set(e),c=new Set,o=0;for(;u.size;){for(let p of u){p.depth=o;for(let{target:w}of p.sourceLinks)c.add(w)}if(++o>y)throw new Error("circular link");u=c,c=new Set}}n(N,"computeNodeDepths");function j({nodes:e}){let y=e.length,u=new Set(e),c=new Set,o=0;for(;u.size;){for(let p of u){p.height=o;for(let{source:w}of p.targetLinks)c.add(w)}if(++o>y)throw new Error("circular link");u=c,c=new Set}}n(j,"computeNodeHeights");function M({nodes:e}){let y=ot(e,o=>o.depth)+1,u=(s-t-h)/(y-1),c=new Array(y);for(let o of e){let p=Math.max(0,Math.min(y-1,Math.floor(r.call(null,o,y))));o.layer=p,o.x0=t+p*u,o.x1=o.x0+h,c[p]?c[p].push(o):c[p]=[o]}if(a)for(let o of c)o.sort(a);return c}n(M,"computeNodeLayers");function z(e){let y=gt(e,u=>(l-i-(u.length-1)*_)/Y(u,Z));for(let u of e){let c=i;for(let o of u){o.y0=c,o.y1=c+o.value*y,c=o.y1+_;for(let p of o.sourceLinks)p.width=p.value*y}c=(l-c+_)/(u.length+1);for(let o=0;o<u.length;++o){let p=u[o];p.y0+=c*(o+1),p.y1+=c*(o+1)}T(u)}}n(z,"initializeNodeBreadths");function L(e){let y=M(e);_=Math.min(m,(l-i)/(ot(y,u=>u.length)-1)),z(y);for(let u=0;u<b;++u){let c=Math.pow(.99,u),o=Math.max(1-c,(u+1)/b);D(y,c,o),I(y,c,o)}}n(L,"computeNodeBreadths");function I(e,y,u){for(let c=1,o=e.length;c<o;++c){let p=e[c];for(let w of p){let $=0,O=0;for(let{source:Q,value:rt}of w.targetLinks){let V=rt*(w.layer-Q.layer);$+=G(Q,w)*V,O+=V}if(!(O>0))continue;let E=($/O-w.y0)*y;w.y0+=E,w.y1+=E,R(w)}a===void 0&&p.sort(X),g(p,u)}}n(I,"relaxLeftToRight");function D(e,y,u){for(let c=e.length,o=c-2;o>=0;--o){let p=e[o];for(let w of p){let $=0,O=0;for(let{target:Q,value:rt}of w.sourceLinks){let V=rt*(Q.layer-w.layer);$+=P(w,Q)*V,O+=V}if(!(O>0))continue;let E=($/O-w.y0)*y;w.y0+=E,w.y1+=E,R(w)}a===void 0&&p.sort(X),g(p,u)}}n(D,"relaxRightToLeft");function g(e,y){let u=e.length>>1,c=e[u];q(e,c.y0-_,u-1,y),S(e,c.y1+_,u+1,y),q(e,l,e.length-1,y),S(e,i,0,y)}n(g,"resolveCollisions");function S(e,y,u,c){for(;u<e.length;++u){let o=e[u],p=(y-o.y0)*c;p>1e-6&&(o.y0+=p,o.y1+=p),y=o.y1+_}}n(S,"resolveCollisionsTopToBottom");function q(e,y,u,c){for(;u>=0;--u){let o=e[u],p=(o.y1-y)*c;p>1e-6&&(o.y0-=p,o.y1-=p),y=o.y0-_}}n(q,"resolveCollisionsBottomToTop");function R({sourceLinks:e,targetLinks:y}){if(f===void 0){for(let{source:{sourceLinks:u}}of y)u.sort(lt);for(let{target:{targetLinks:u}}of e)u.sort(at)}}n(R,"reorderNodeLinks");function T(e){if(f===void 0)for(let{sourceLinks:y,targetLinks:u}of e)y.sort(lt),u.sort(at)}n(T,"reorderLinks");function G(e,y){let u=e.y0-(e.sourceLinks.length-1)*_/2;for(let{target:c,width:o}of e.sourceLinks){if(c===y)break;u+=o+_}for(let{source:c,width:o}of y.targetLinks){if(c===e)break;u-=o}return u}n(G,"targetTop");function P(e,y){let u=y.y0-(y.targetLinks.length-1)*_/2;for(let{source:c,width:o}of y.targetLinks){if(c===e)break;u+=o+_}for(let{target:c,width:o}of e.sourceLinks){if(c===y)break;u-=o}return u}return n(P,"sourceTop"),v}n(Tt,"Sankey");var ct=Math.PI,ft=2*ct,F=1e-6,re=ft-F;function et(){this._x0=this._y0=this._x1=this._y1=null,this._=""}n(et,"Path");function mt(){return new et}n(mt,"path");et.prototype=mt.prototype={constructor:et,moveTo:n(function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},"moveTo"),closePath:n(function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},"closePath"),lineTo:n(function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},"lineTo"),quadraticCurveTo:n(function(t,i,s,l){this._+="Q"+ +t+","+ +i+","+(this._x1=+s)+","+(this._y1=+l)},"quadraticCurveTo"),bezierCurveTo:n(function(t,i,s,l,h,m){this._+="C"+ +t+","+ +i+","+ +s+","+ +l+","+(this._x1=+h)+","+(this._y1=+m)},"bezierCurveTo"),arcTo:n(function(t,i,s,l,h){t=+t,i=+i,s=+s,l=+l,h=+h;var m=this._x1,_=this._y1,x=s-t,r=l-i,a=m-t,f=_-i,k=a*a+f*f;if(h<0)throw new Error("negative radius: "+h);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=i);else if(k>F)if(!(Math.abs(f*x-r*a)>F)||!h)this._+="L"+(this._x1=t)+","+(this._y1=i);else{var d=s-m,b=l-_,v=x*x+r*r,C=d*d+b*b,A=Math.sqrt(v),N=Math.sqrt(k),j=h*Math.tan((ct-Math.acos((v+k-C)/(2*A*N)))/2),M=j/N,z=j/A;Math.abs(M-1)>F&&(this._+="L"+(t+M*a)+","+(i+M*f)),this._+="A"+h+","+h+",0,0,"+ +(f*d>a*b)+","+(this._x1=t+z*x)+","+(this._y1=i+z*r)}},"arcTo"),arc:n(function(t,i,s,l,h,m){t=+t,i=+i,s=+s,m=!!m;var _=s*Math.cos(l),x=s*Math.sin(l),r=t+_,a=i+x,f=1^m,k=m?l-h:h-l;if(s<0)throw new Error("negative radius: "+s);this._x1===null?this._+="M"+r+","+a:(Math.abs(this._x1-r)>F||Math.abs(this._y1-a)>F)&&(this._+="L"+r+","+a),s&&(k<0&&(k=k%ft+ft),k>re?this._+="A"+s+","+s+",0,1,"+f+","+(t-_)+","+(i-x)+"A"+s+","+s+",0,1,"+f+","+(this._x1=r)+","+(this._y1=a):k>F&&(this._+="A"+s+","+s+",0,"+ +(k>=ct)+","+f+","+(this._x1=t+s*Math.cos(h))+","+(this._y1=i+s*Math.sin(h))))},"arc"),rect:n(function(t,i,s,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +s+"v"+ +l+"h"+-s+"Z"},"rect"),toString:n(function(){return this._},"toString")};var se=mt;function yt(t){return n(function(){return t},"constant")}n(yt,"default");function St(t){return t[0]}n(St,"x");function Mt(t){return t[1]}n(Mt,"y");var oe=Array.prototype.slice;function At(t){return t.source}n(At,"linkSource");function Nt(t){return t.target}n(Nt,"linkTarget");function It(t){var i=At,s=Nt,l=St,h=Mt,m=null;function _(){var x,r=oe.call(arguments),a=i.apply(this,r),f=s.apply(this,r);if(m||(m=x=se()),t(m,+l.apply(this,(r[0]=a,r)),+h.apply(this,r),+l.apply(this,(r[0]=f,r)),+h.apply(this,r)),x)return m=null,x+""||null}return n(_,"link"),_.source=function(x){return arguments.length?(i=x,_):i},_.target=function(x){return arguments.length?(s=x,_):s},_.x=function(x){return arguments.length?(l=typeof x=="function"?x:yt(+x),_):l},_.y=function(x){return arguments.length?(h=typeof x=="function"?x:yt(+x),_):h},_.context=function(x){return arguments.length?(m=x??null,_):m},_}n(It,"link");function Ct(t,i,s,l,h){t.moveTo(i,s),t.bezierCurveTo(i=(i+l)/2,s,i,h,l,h)}n(Ct,"curveHorizontal");function Dt(){return It(Ct)}n(Dt,"linkHorizontal");function Ot(t){return[t.source.x1,t.y0]}n(Ot,"horizontalSource");function Pt(t){return[t.target.x0,t.y1]}n(Pt,"horizontalTarget");function $t(){return Dt().source(Ot).target(Pt)}n($t,"default");var B,_t=(B=class{static next(i){return new B(i+ ++B.count)}constructor(i){this.id=i,this.href=`#${i}`}toString(){return"url("+this.href+")"}},n(B,"Uid"),B.count=0,B),ae={left:xt,right:vt,center:wt,justify:pt},le=n(function(t,i,s,l){let{securityLevel:h,sankey:m}=dt(),_=qt.sankey,x;h==="sandbox"&&(x=K("#i"+i));let r=h==="sandbox"?K(x.nodes()[0].contentDocument.body):K("body"),a=h==="sandbox"?r.select(`[id="${i}"]`):K(`[id="${i}"]`),f=(m==null?void 0:m.width)??_.width,k=(m==null?void 0:m.height)??_.width,d=(m==null?void 0:m.useMaxWidth)??_.useMaxWidth,b=(m==null?void 0:m.nodeAlignment)??_.nodeAlignment,v=(m==null?void 0:m.prefix)??_.prefix,C=(m==null?void 0:m.suffix)??_.suffix,A=(m==null?void 0:m.showValues)??_.showValues,N=l.db.getGraph(),j=ae[b];Tt().nodeId(g=>g.id).nodeWidth(10).nodePadding(10+(A?15:0)).nodeAlign(j).extent([[0,0],[f,k]])(N);let M=Qt(Ht);a.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",g=>(g.uid=_t.next("node-")).id).attr("transform",function(g){return"translate("+g.x0+","+g.y0+")"}).attr("x",g=>g.x0).attr("y",g=>g.y0).append("rect").attr("height",g=>g.y1-g.y0).attr("width",g=>g.x1-g.x0).attr("fill",g=>M(g.id));let z=n(({id:g,value:S})=>A?`${g}
${v}${Math.round(S*100)/100}${C}`:g,"getText");a.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",g=>g.x0<f/2?g.x1+6:g.x0-6).attr("y",g=>(g.y1+g.y0)/2).attr("dy",`${A?"0":"0.35"}em`).attr("text-anchor",g=>g.x0<f/2?"start":"end").text(z);let L=a.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),I=(m==null?void 0:m.linkColor)??"gradient";if(I==="gradient"){let g=L.append("linearGradient").attr("id",S=>(S.uid=_t.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",S=>S.source.x1).attr("x2",S=>S.target.x0);g.append("stop").attr("offset","0%").attr("stop-color",S=>M(S.source.id)),g.append("stop").attr("offset","100%").attr("stop-color",S=>M(S.target.id))}let D;switch(I){case"gradient":D=n(g=>g.uid,"coloring");break;case"source":D=n(g=>M(g.source.id),"coloring");break;case"target":D=n(g=>M(g.target.id),"coloring");break;default:D=I}L.append("path").attr("d",$t()).attr("stroke",D).attr("stroke-width",g=>Math.max(1,g.width)),Vt(void 0,a,0,d)},"draw"),he={draw:le},ue=n(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),ce=J.parse.bind(J);J.parse=t=>ce(ue(t));var de={parser:J,db:ie,renderer:he};export{de as diagram};
