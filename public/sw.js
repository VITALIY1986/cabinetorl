if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Style.css",revision:"ea3624f747b9cc73cbd14d9b391a5009"},{url:"/_next/static/chunks/20.d92f69ca6932dc8a.js",revision:"d92f69ca6932dc8a"},{url:"/_next/static/chunks/23.edf2e864189a82d1.js",revision:"edf2e864189a82d1"},{url:"/_next/static/chunks/28.6ae94cac91534082.js",revision:"6ae94cac91534082"},{url:"/_next/static/chunks/695.16aea92f316b949d.js",revision:"16aea92f316b949d"},{url:"/_next/static/chunks/778.8c128ecddbd2b0a1.js",revision:"8c128ecddbd2b0a1"},{url:"/_next/static/chunks/864.31bb92ecab330b03.js",revision:"31bb92ecab330b03"},{url:"/_next/static/chunks/907.88c26ec6c1aff78c.js",revision:"88c26ec6c1aff78c"},{url:"/_next/static/chunks/909-0be2c035c4a8eb8c.js",revision:"0be2c035c4a8eb8c"},{url:"/_next/static/chunks/framework-49c6cecf1f6d5795.js",revision:"49c6cecf1f6d5795"},{url:"/_next/static/chunks/main-850a3bc005d10af7.js",revision:"850a3bc005d10af7"},{url:"/_next/static/chunks/pages/_app-b9df30b5699a5fa8.js",revision:"b9df30b5699a5fa8"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-e6dd67a76672d1c7.js",revision:"e6dd67a76672d1c7"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-34e23f8ea76baffa.js",revision:"34e23f8ea76baffa"},{url:"/_next/static/css/24ac22214a2d3e41.css",revision:"24ac22214a2d3e41"},{url:"/_next/static/css/7d1b90f6667fd93f.css",revision:"7d1b90f6667fd93f"},{url:"/_next/static/css/968a1d44ea63a2da.css",revision:"968a1d44ea63a2da"},{url:"/_next/static/css/99af510bbb104abd.css",revision:"99af510bbb104abd"},{url:"/_next/static/media/021bc4481ed92ece-s.woff2",revision:"0f5cb8880dd308345f58cecdc5fc5041"},{url:"/_next/static/media/3f69592b2fe603c7-s.woff2",revision:"84568c0a37620328592a78e9ad069d77"},{url:"/_next/static/media/4f05ba3a6752a328-s.p.woff2",revision:"ea21cc6e4b393851204d1a3160ad6abc"},{url:"/_next/static/media/6325a8417175c41d-s.woff2",revision:"a3fd0c427e31c0cadb48607ee8c7876b"},{url:"/_next/static/media/99b7f73d5af7c3e2-s.woff2",revision:"e94b5e20c27aefc321077e0493d637fa"},{url:"/_next/static/media/Background_Dark.78f5e2b4.webp",revision:"78f5e2b4"},{url:"/_next/static/media/Prof-Dr-LuminitaRadulescu.2976a9b0.png",revision:"bee04e01217a7ea610522df27d72d614"},{url:"/_next/static/media/Teeth.f030f13b.webp",revision:"8111426043f67696cffded7b40357a61"},{url:"/_next/static/tLSZTsaaFa_qCN6mFF1e4/_buildManifest.js",revision:"476dbab93ac2b6ea5333858493bd7a3c"},{url:"/_next/static/tLSZTsaaFa_qCN6mFF1e4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon.png",revision:"2efeed55512721ed5135290a5277bac4"},{url:"/map.html",revision:"9f5ec4cafcf84d4bd08b3a78ddf53eee"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/ortodont.webp",revision:"66ad34eead39ce8ee41a058e9feaee43"},{url:"/robots.txt",revision:"e0fe5ff0f97a12e73dd496eab944175f"},{url:"/sitemap-0.xml",revision:"cd0c84beeaa9b64557c7b26f8621a5cd"},{url:"/sitemap.xml",revision:"4d88ce0f69c4c0cafda79354c10038f3"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));