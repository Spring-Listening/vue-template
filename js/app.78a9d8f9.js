(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,m=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=(o={app:0},{app:0}),c=[];function u(e){return i.p+"js/"+({Home:"Home"}[e]||e)+"."+{Home:"344d47c0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Home:"Home"}[e]||e)+"."+{Home:"9e5f13bc"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));n={Home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Home:"Home"}[e]||e)+"."+{Home:"9e5f13bc"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-template/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"298a":function(e,t,n){"use strict";n("c318")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var u=Object(r["x"])("router-view");return Object(r["r"])(),Object(r["d"])(u,null,{default:Object(r["E"])((function(e){var t=e.Component;return[(Object(r["r"])(),Object(r["d"])(r["a"],null,[(Object(r["r"])(),Object(r["d"])(Object(r["y"])(t),{username:"spring"}))],1024))]})),_:1})}var a=Object(r["i"])({name:"App",components:{},data:function(){return{invoke:"spring"}},setup:function(){}}),c=(n("aa28"),n("298a"),n("d959")),u=n.n(c);const i=u()(a,[["render",o]]);var s=i,l=n("2909"),m=(n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("6c02")),f=[{path:"/example"}],d=f,p=[].concat(Object(l["a"])(d),[{path:"/home",name:"Home",meta:{title:"welcome",auth:!0},component:function(){return n.e("Home").then(n.bind(null,"16c0"))}},{path:"/test",name:"Test",meta:{title:"welcome",auth:!0},component:function(){return n.e("Home").then(n.bind(null,"78c1"))}},{path:"/move",name:"Move",meta:{title:"welcome",auth:!0},component:function(){return n.e("Home").then(n.bind(null,"e403"))}},{path:"/",redirect:{name:"Home"}}]),h=Object(m["a"])({history:Object(m["b"])("/vue-template"),routes:p});h.beforeEach((function(e,t,n){0===e.matched.length?t.name?n({name:t.name}):n("/home"):n()}));var g,b=h,v=n("5502"),y={namespaced:!0,state:{name:"username",age:12},getters:{},actions:{asyncAddAge:function(e,t){e.commit("addAage",t)}},mutations:{addAage:function(e,t){console.log(t),t?e.age+=t.num:e.age++}}},O=y,j=n("ade3"),w="changeUserName",H="addAge",A="asyncChangeUserName",E={namespaced:!0,state:{name:"spring_zou",age:67},getters:{},actions:Object(j["a"])({},A,(function(e,t){e.commit("changeUserName",t)})),mutations:(g={},Object(j["a"])(g,w,(function(e,t){e.name=t.name})),Object(j["a"])(g,H,(function(e){e.age++})),g)},C=E,S=Object(v["a"])({modules:{userStore:O,classify:C}});n("b29b");Object(r["c"])(s).use(S).use(b).mount("#app")},aa28:function(e,t,n){"use strict";n("eb41")},b29b:function(e,t,n){},c318:function(e,t,n){},eb41:function(e,t,n){}});
//# sourceMappingURL=app.78a9d8f9.js.map