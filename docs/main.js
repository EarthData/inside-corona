(()=>{"use strict";var e,n={8138:(e,n,i)=>{var t=i(5689),o=i(4376),l=i(9477),r=i(3844),a=i.n(r),s=i(2698),d=i.n(s),c=i(9315),h=i.n(c),u=i(3171),g=i(1529),f=i(3181);const m=new(d()),p='<h2>General</h2>\n    <p>The color of the links reflects the communites detected with <a href="https://graphology.github.io/standard-library/communities-louvain.html" target = "_blank">Louvain algorithm</a></p>\n    <h2>Navigation</h2>\n    <p>Click: Show info and connections<br/>\n    Mouse-Wheel/Middle-Click: Zoom<br/>\n    Right-Click: Add node to Filter<br/>\n    Shortest-Path: Select Node and Shift-Select a second node to show the shortest path</p>\n    <h2>Settings</h2>\n    <h3>General</h3>\n    <p>Simplyfy: Reduce the complexity by increasing the number of required neighbors<br/>\n    Link Length: Disable Link-Force and display links with the configured length<br/>\n    Hide Info Panel: Hide this panel<br/>\n    Search: Search for nodes and links with regular expressions<br/>\n    Filter: Filter nodes\n    Zoom To Fit: Fit graph to screen<br/>\n    Show Help: Show this help</p>\n    <h3>Advanced</h3>\n    <p>Orientation: Different layouts<br/>\n    Dimension: Switch from 3 to 2 dimension to change layout<br/>\n    Link Force: Enable Link-Force by respecting the number of neighbors of the attached nodes<br/>\n    Louvain-Communities: Communities detected with Louvain algorithm</p>',k=document.getElementById("info");k.innerHTML=p;const b=document.getElementById("graph");fetch("json/inside-corona.json").then((e=>e.json())).then((e=>{e.nodes.forEach((e=>{m.addNode(e.id)})),e.links.forEach((e=>{m.addUndirectedEdgeWithKey(e.id,e.source,e.target)})),console.log("Number of nodes",m.order),console.log("Number of edges",m.size),h().assign(m,{getEdgeWeight:null});let n=h().detailed(m);console.log(n),e.nodes.forEach((e=>{e.community=m.getNodeAttribute(e.id,"community")})),e.links.forEach((n=>{const i=e.nodes[n.source],t=e.nodes[n.target];!i.neighbors&&(i.neighbors=[]),!t.neighbors&&(t.neighbors=[]),i.neighbors.push(t),t.neighbors.push(i),!i.links&&(i.links=[]),!t.links&&(t.links=[]),i.links.push(n),t.links.push(n)}));const i=[...Array(n.count).keys()],r=new Set,s=new Set;var d=null,c=[],D=[];const y=(0,t.Z)()(b).nodeThreeObject((e=>{const n=(new l.dpR).load(`${e.image}`),i=new l.xeV({map:n}),t=new l.jyi(i);return t.scale.set(14,14),t})).height(b.offsetHeight).showNavInfo(!1).graphData(e).dagMode(null).nodeLabel("title").linkLabel("title").linkWidth((e=>s.has(e)?5:1)).linkAutoColorBy((n=>e.nodes[n.source].community)).linkOpacity(.4).linkDirectionalParticles((e=>s.has(e)?2:0)).linkDirectionalParticleColor((()=>"red")).linkDirectionalParticleSpeed(.005).linkDirectionalParticleWidth(5).onBackgroundClick((e=>{r.clear(),s.clear(),M(),d=null})).onNodeClick(((n,i)=>{r.clear(),s.clear(),n&&n==d?(r.clear(),s.clear(),info.innerHTML="",M(),d=null):(i.ctrlKey||i.shiftKey||i.altKey)&&n!=d?(function(n,i){e.nodes;let t=e.links,o=(0,u.Ar)(m,n,i),l=(0,g.B)(m,o);t=t.filter((e=>l.includes(String(e.id)))),r.clear(),s.clear();let a="<h2>Shortest Path</h2><p>";o.forEach((n=>{let i=e.nodes[n];r.add(i),a=a.concat(i.title+" ("+i.group+")<br/>")})),a.concat("</p>"),k.innerHTML=a,t.forEach((e=>s.add(e))),M()}(d.id,n.id),d=n):n&&n!=d&&(r.add(n),n.neighbors.forEach((e=>r.add(e))),n.links.forEach((e=>s.add(e))),info.innerHTML="<h2>"+n.title+'</h2><img src="'+n.image+'" align="left"><p>Group: '+n.group+"</p><p>"+n.notes+"</p>",d=n,M())})).onNodeRightClick((e=>{if("include"!=S.Filtermode||D.includes(e.title)){if("exclude"!=S.Filtermode||c.includes(e.title))return;c.push(e.title),console.log("Include-Filter"),console.log(D),console.log("Exclude-Filter"),console.log(c)}else D.push(e.title),console.log("Include-Filter"),console.log(D),console.log("Exclude-Filter"),console.log(c);let{nodes:n,links:i}=N();y.graphData({nodes:n,links:i}),y.numDimensions(S.Dimensions)})).onNodeDragEnd((e=>{e.fx=e.x,e.fy=e.y,e.fz=e.z})).onLinkClick((e=>{r.clear(),s.clear(),e&&(s.add(e),r.add(e.source),r.add(e.target)),M()}));a()().listenTo(b,(e=>y.width(e.offsetWidth)));const S={Orientation:null,"Link Length":80,Dimensions:3,Search:"",Simplify:1,"Link Force":!1,"Hide Info Panel":!1,Searchmode:"highlight",Filtermode:"include",Depth:1},v=new o.XS,F=v.addFolder("General");F.add(S,"Simplify",1,10,1).listen().onChange((function(){let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)})),F.add(S,"Link Length",0,200).listen().onChange((function(){S["Link Force"]=!1,y.d3Force("link").distance(S["Link Length"]),y.numDimensions(S.Dimensions)})),F.add(S,"Hide Info Panel").listen().onChange((function(){S["Hide Info Panel"]?(k.style.display="none",b.style.height="100vh",y.height(b.offsetHeight)):(k.style.display="block",b.style.height="70vh",y.height(b.offsetHeight))})),F.open();const w=v.addFolder("Search / Filter");w.add(S,"Searchmode",["highlight","filter"]);const E=w.add(S,"Search").listen().onFinishChange((function(e){if("highlight"==S.Searchmode)!function(){let{nodes:e,links:n}=N();if(r.clear(),s.clear(),""!==E.object.Search){let i=E.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(i,"gi");e=e.filter((e=>e.title.match(t))),n=n.filter((e=>e.title.match(t))),e.forEach((e=>{r.add(e),e.neighbors.forEach((e=>r.add(e))),e.links.forEach((e=>s.add(e)))})),n.forEach((e=>s.add(e)))}M()}();else{let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}}));w.add(S,"Filtermode",["include","exclude"]).listen(),w.add(S,"Depth",1,4,1).listen().onChange((function(){let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}));const L=v.addFolder("Groups");e.groups.forEach((e=>{S[e]=!0,L.add(S,e).listen().onChange((function(){let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}))}));const C=v.addFolder("Advanced");C.add(S,"Orientation",[null,"td","bu","lr","rl","zout","zin","radialout","radialin"]).onChange((e=>y&&y.dagMode(e)&&y.numDimensions(S.Dimensions))),C.add(S,"Dimensions",["2","3"]).onChange((e=>y&&y.dagMode(S.Orientation)&&y.numDimensions(e))),C.add(S,"Link Force").listen().onChange((function(){S["Link Force"]?(y.d3Force("link").distance((e=>1/(e.source.neighbors.length+e.target.neighbors.length)*1e3)),y.numDimensions(S.Dimensions)):(y.d3Force("link").distance(S["Link Length"]),y.numDimensions(S.Dimensions))}));const x=C.addFolder("Louvain-Communities");i.forEach((e=>{S[e]=!0,x.add(S,e).listen().onChange((function(){let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}))}));var O={add:function(){!function(){let{nodes:e,links:n}=y.graphData(),i=e.map((e=>e.id));e=e.filter((e=>i.some((n=>e.neighbors.map((e=>e.id)).includes(n))))),y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}()}};v.add(O,"add").name("Filter Soley Nodes");var j={add:function(){y.zoomToFit(400)}};v.add(j,"add").name("Zoom To Fit");var H={add:function(){!function(){r.clear(),s.clear(),d=null,c.length=0,D.length=0;let{nodes:e,links:n}=N();y.graphData({nodes:e,links:n}),y.numDimensions(S.Dimensions)}()}};v.add(H,"add").name("Reset Filter");var P={add:function(){k.innerHTML=p}};function N(){let n=e.nodes,t=e.links;if(S.Simplify>1){n=n.filter((e=>e.neighbors.length>=S.Simplify));let e=n.map((e=>e.id));t=t.filter((n=>e.includes(n.source.id)&&e.includes(n.target.id)))}let o=[];e.groups.forEach((n=>{if(S[n]){let i=e.nodes.filter((e=>e.group==n)).map((e=>e.id));o=o.concat(i)}})),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),t=t.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id)));let l=[];if(i.forEach((n=>{if(S[n]){let i=e.nodes.filter((e=>e.community==n)).map((e=>e.id));l=l.concat(i)}})),l=[...new Set(l)],n=n.filter((e=>l.includes(e.id))),t=t.filter((e=>l.includes(e.source.id)&&l.includes(e.target.id))),""!==E.object.Search&&"filter"==S.Searchmode){let e=E.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),i=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(i))),l=t.filter((e=>e.title.match(i))),r=o.map((e=>e.id)),a=o.map((e=>e.neighbors.map((e=>e.id)))).flat();r=r.concat(a);let s=l.map((e=>e.source.id)),d=l.map((e=>e.target.id));r=r.concat(s).concat(d),r=[...new Set(r)],n=n.filter((e=>r.includes(e.id))),t=t.filter((e=>r.includes(e.source.id)&&r.includes(e.target.id)))}if(D.length>0){let e=("^"+D.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),i=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(i))).map((e=>e.id)),l=[];o.forEach((e=>{(0,f.a)(m,e,(function(e,n,i){i<=S.Depth&&l.push(Number(e))}))})),o=o.concat(l),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),t=t.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id)))}if(c.length>0){let e=("^"+c.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),i=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(i))).map((e=>e.id));if(S.Depth>1){let e=[];o.forEach((n=>{(0,f.a)(m,n,(function(n,i,t){t<=S.Depth-1&&e.push(Number(n))}))})),o=o.concat(e)}o=[...new Set(o)],n=n.filter((e=>!o.includes(e.id))),t=t.filter((e=>!o.includes(e.source.id)&&!o.includes(e.target.id)))}return{nodes:n,links:t}}function M(){y.linkWidth(y.linkWidth()).linkDirectionalParticles(y.linkDirectionalParticles())}v.add(P,"add").name("Show Help")}))}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var l=i[e]={exports:{}};return n[e].call(l.exports,l,l.exports,t),l.exports}t.m=n,e=[],t.O=(n,i,o,l)=>{if(!i){var r=1/0;for(c=0;c<e.length;c++){for(var[i,o,l]=e[c],a=!0,s=0;s<i.length;s++)(!1&l||r>=l)&&Object.keys(t.O).every((e=>t.O[e](i[s])))?i.splice(s--,1):(a=!1,l<r&&(r=l));if(a){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,o,l]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,l,[r,a,s]=i,d=0;if(r.some((n=>0!==e[n]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var c=s(t)}for(n&&n(i);d<r.length;d++)l=r[d],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},i=self.webpackChunkinside_corona_angst_frei_ch=self.webpackChunkinside_corona_angst_frei_ch||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var o=t.O(void 0,[394],(()=>t(8138)));o=t.O(o)})();