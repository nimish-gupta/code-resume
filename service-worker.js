if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/0.bundle.js",revision:"f6b5d99ad662c816e3997504026b534d"},{url:"/0.bundle.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/2.bundle.js",revision:"caec32445f76225b1cd3c1f5f191b6df"},{url:"/3.bundle.js",revision:"466fa69f95584943d82b3148f1723bcd"},{url:"/4.bundle.js",revision:"e7c9e8006f81db2fa54021568e8bb51d"},{url:"/5.bundle.js",revision:"57a79e8a3fd5b2df67a99f282976c8be"},{url:"/6.bundle.js",revision:"17fc37a15ef8559bcddf3c9f58b274b2"},{url:"/7.bundle.js",revision:"54b73905208a6488093fbd13a66afcca"},{url:"/bundle.js",revision:"bf842a1eaaa08e991ce6b9e883644b9d"},{url:"/bundle.js.LICENSE.txt",revision:"f231859d6585c4cd5f80c344783ed269"},{url:"/index.html",revision:"c851f7baac67e499755f361b9afce105"}],{})}));
