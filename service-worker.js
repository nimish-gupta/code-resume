if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return d[e]||(r=new Promise(async r=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=r}else importScripts(e),r()})),r.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},r=(r,d)=>{Promise.all(r.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(r)};self.define=(r,s,c)=>{d[r]||(d[r]=Promise.resolve().then(()=>{let d={};const u={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return d;case"module":return u;default:return e(r)}})).then(e=>{const r=c(...e);return d.default||(d.default=r),d})}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/code-resume/0.bundle.js",revision:"71bd63d96115a1d7b70b81a687fcaee5"},{url:"/code-resume/0.bundle.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/code-resume/2.bundle.js",revision:"ac515b355aa7077d8479d0618b5ca042"},{url:"/code-resume/3.bundle.js",revision:"4aa548860d37d5d547aad8827b8d13f2"},{url:"/code-resume/4.bundle.js",revision:"1992f5758d5122264acb30a29b138979"},{url:"/code-resume/5.bundle.js",revision:"fb9ffe3723c2396457b4cb683edf9215"},{url:"/code-resume/6.bundle.js",revision:"b4628402ccbe8c16da2db3413c1c23dd"},{url:"/code-resume/7.bundle.js",revision:"fdb97ec10a76d06e3fbd56dffedad6ca"},{url:"/code-resume/bundle.js",revision:"f2ccd3e3f8bbf91cb0689d743b802754"},{url:"/code-resume/bundle.js.LICENSE.txt",revision:"f231859d6585c4cd5f80c344783ed269"},{url:"/code-resume/index.html",revision:"91d45b6cadcabf4509b185db60a253d8"}],{})}));
