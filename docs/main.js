(()=>{"use strict";var n,e={138:(n,e,i)=>{var o=i(689),r=i(376),t=i(477);fetch("json/inside-corona.json").then((n=>n.json())).then((n=>{n.links.forEach((e=>{const i=n.nodes[e.source],o=n.nodes[e.target];!i.neighbors&&(i.neighbors=[]),!o.neighbors&&(o.neighbors=[]),i.neighbors.push(o),o.neighbors.push(i),!i.links&&(i.links=[]),!o.links&&(o.links=[]),i.links.push(e),o.links.push(e)}));const e=new Set,i=new Set;let s=null;const l=(0,o.Z)()(document.getElementById("graph")).nodeThreeObject((n=>{const e=(new t.dpR).load(`${n.image}`),i=new t.xeV({map:e}),o=new t.jyi(i);return o.scale.set(12,12),o})).graphData(n).dagMode(null).nodeLabel("title").nodeAutoColorBy("group").linkLabel("title").linkWidth((n=>i.has(n)?1:.5)).linkDirectionalParticles((n=>i.has(n)?2:0)).linkDirectionalParticleWidth(1).onNodeHover((n=>{!n&&!e.size||n&&s===n||(e.clear(),i.clear(),n&&(e.add(n),n.neighbors.forEach((n=>e.add(n))),n.links.forEach((n=>i.add(n)))),s=n||null,f())})).onLinkHover((n=>{e.clear(),i.clear(),n&&(i.add(n),e.add(n.source),e.add(n.target)),f()})).linkOpacity(.4).linkAutoColorBy("group").onNodeClick((n=>{n.link.length&&(window.open(n.link),window.focus())})).onNodeRightClick((n=>{const e=1+40/Math.hypot(n.x,n.y,n.z);l.cameraPosition({x:n.x*e,y:n.y*e,z:n.z*e},n,3e3)})).onNodeDragEnd((n=>{n.fx=n.x,n.fy=n.y,n.fz=n.z})).onLinkClick((n=>{n.link.length&&(window.open(n.link),window.focus())})),a={Orientation:null,"Link Length":80,Dimensions:3,Search:"",Simplify:!1,"Link Force":!1},d=new r.XS,c=d.addFolder("Physics");c.add(a,"Orientation",[null,"td","bu","lr","rl","zout","zin","radialout","radialin"]).onChange((n=>l&&l.dagMode(n)&&l.numDimensions(a.Mode))),c.add(a,"Dimensions",["2","3"]).onChange((n=>l&&l.dagMode(a.Orientation)&&l.numDimensions(n))),c.add(a,"Simplify").listen().onChange((function(){g()})),c.add(a,"Link Force").listen().onChange((function(){a["Link Force"]?l.d3Force("link").distance((n=>1/(n.source.neighbors.length+n.target.neighbors.length)*1e3)):l.d3Force("link").distance(a["Link Length"]),l.numDimensions(a.Dimensions)})),c.add(a,"Link Length",0,200).listen().onChange((function(){a["Link Force"]=!1,l.d3Force("link").distance(a["Link Length"]),l.numDimensions(a.Dimensions)})),c.open();const h=d.addFolder("Groups");n.groups.forEach((n=>{a[n]=!0,h.add(a,n).listen().onChange((function(){g()}))}));const u=d.add(a,"Search").listen().onFinishChange((function(n){g()}));function g(){let e=n.nodes,i=n.links,o=[];a.Simplify&&(e=e.filter((n=>n.neighbors.length>1)),e.forEach((n=>{o.push(n.id)})),i=i.filter((n=>o.includes(n.source.id)&&o.includes(n.target.id))));let r=[];if(n.groups.forEach((e=>{a[e]&&n.nodes.filter((n=>n.group==e)).forEach((n=>{r.push(n.id)}))})),r=[...new Set(r)],e=e.filter((n=>r.includes(n.id))),i=i.filter((n=>r.includes(n.source.id)&&r.includes(n.target.id))),""!==u.object.Search){let n=[],o=new RegExp(u.object.Search,"gi"),t=e.filter((n=>!!n.title.match(o))),s=i.filter((n=>!!n.title.match(o)));t.forEach((e=>{r.includes(e.id)&&n.push(e.id)})),t.forEach((e=>{e.neighbors.forEach((i=>{r.includes(e.id)&&n.push(i.id)}))})),s.forEach((e=>{r.includes(e.source.id)&&r.includes(e.target.id)&&n.push(e.source.id,e.target.id)})),n=[...new Set(n)],e=e.filter((e=>n.includes(e.id))),i=i.filter((e=>n.includes(e.source.id)&&n.includes(e.target.id)))}l.graphData({nodes:e,links:i})}function f(){l.linkWidth(l.linkWidth()).linkDirectionalParticles(l.linkDirectionalParticles())}}))}},i={};function o(n){var r=i[n];if(void 0!==r)return r.exports;var t=i[n]={exports:{}};return e[n](t,t.exports,o),t.exports}o.m=e,n=[],o.O=(e,i,r,t)=>{if(!i){var s=1/0;for(c=0;c<n.length;c++){for(var[i,r,t]=n[c],l=!0,a=0;a<i.length;a++)(!1&t||s>=t)&&Object.keys(o.O).every((n=>o.O[n](i[a])))?i.splice(a--,1):(l=!1,t<s&&(s=t));if(l){n.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}t=t||0;for(var c=n.length;c>0&&n[c-1][2]>t;c--)n[c]=n[c-1];n[c]=[i,r,t]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var i in e)o.o(e,i)&&!o.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={179:0};o.O.j=e=>0===n[e];var e=(e,i)=>{var r,t,[s,l,a]=i,d=0;if(s.some((e=>0!==n[e]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(a)var c=a(o)}for(e&&e(i);d<s.length;d++)t=s[d],o.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return o.O(c)},i=self.webpackChunkinside_corona_angst_frei_ch=self.webpackChunkinside_corona_angst_frei_ch||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var r=o.O(void 0,[572],(()=>o(138)));r=o.O(r)})();