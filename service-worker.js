if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return d[e]||(r=new Promise(async r=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=r}else importScripts(e),r()})),r.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},r=(r,d)=>{Promise.all(r.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(r)};self.define=(r,s,i)=>{d[r]||(d[r]=Promise.resolve().then(()=>{let d={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return d;case"module":return n;default:return e(r)}})).then(e=>{const r=i(...e);return d.default||(d.default=r),d})}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/0.bundle.js",revision:"71bd63d96115a1d7b70b81a687fcaee5"},{url:"/0.bundle.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/2.bundle.js",revision:"ac515b355aa7077d8479d0618b5ca042"},{url:"/3.bundle.js",revision:"4aa548860d37d5d547aad8827b8d13f2"},{url:"/4.bundle.js",revision:"1992f5758d5122264acb30a29b138979"},{url:"/5.bundle.js",revision:"fb9ffe3723c2396457b4cb683edf9215"},{url:"/6.bundle.js",revision:"b4628402ccbe8c16da2db3413c1c23dd"},{url:"/7.bundle.js",revision:"fdb97ec10a76d06e3fbd56dffedad6ca"},{url:"/bundle.js",revision:"dff461a254f23ea40c69a2198fa65cdb"},{url:"/bundle.js.LICENSE.txt",revision:"f231859d6585c4cd5f80c344783ed269"},{url:"/index.html",revision:"c851f7baac67e499755f361b9afce105"}],{})}));
