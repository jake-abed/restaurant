(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,":root {\n    font-size: 16px;\n    --bg-color: #EDF2F4;\n    --rich-black: #050517;\n    --pantone-red: #EF233C;\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, sans-serif;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: var(--bg-color);\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\nh1 {\n    margin-right: auto;\n    margin-left: 2rem;\n    font-size: 3rem;\n}\n\nheader > ul {\n    display: flex;\n    gap: 2rem;\n    margin-right: 2rem;\n}\n\nheader > ul > li {\n    display: inline;    \n    list-style: none;\n    font-size: 1.5rem;\n}\n\nheader > ul > li > a {\n    color: var(--rich-black);\n    text-decoration: none;\n}\n\nheader > ul > li > a:hover {\n    color: var(--pantone-red);\n}\n\n.hero {\n    display: grid;\n    grid-template: 1fr / 1fr;\n    align-items: center;\n}\n\n.hero-copy {\n    grid-area: 1 / 1;\n    text-align: center;\n    font-size: 2rem;\n    text-transform: uppercase;\n    background-color: #05051766;\n    padding: 2rem 0 2rem 0;\n    color: var(--bg-color);\n    cursor: default;\n}\n\nsection > img {\n    width: 100dvw;\n    height: 80dvh;\n    object-fit: none;\n    grid-area: 1 / 1;\n}\n\nfooter > p {\n    text-align: center;\n}\n\nfooter > p:hover {\n    text-decoration: underline var(--pantone-red);\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=o(e,r),d=0;d<a.length;d++){var s=t(a[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),l=t.n(c),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"9ef0a769fd3661afb9a4.jpeg",v=document.querySelector("#content");function g(){document.querySelector("section").remove()}function y(e,n,t){const o=document.createElement("section"),r=document.createElement("img"),a=document.createElement("div");return o.classList.add("hero"),r.setAttribute("src",e),r.setAttribute("alt",n),a.classList.add("hero-copy"),a.innerText=t,o.appendChild(r),o.appendChild(a),console.log(`Hero with copy ${t} created!`),o}const b=[{name:"Tim E.",review:"I nearly choked to death on the inedible food."},{name:"Shell E.",review:"It was okay, I guess..."},{name:"Wall E.",review:"Where am I? Please let me out, I am so scared, I just want to go home."},{name:"Michael G.",review:"I stole all their oxygen."},{name:"Stefan B.",review:"What do you expect? Hollow, worthless food for vapid people."}];console.log(v),function(e){const n=document.createElement("header"),t=document.createElement("h1"),o=document.createElement("ul");function r(e,n,t){const o=document.createElement("li"),r=document.createElement("a");return r.setAttribute("href",n),r.setAttribute("id",t),r.innerText=e,o.appendChild(r),o}t.innerText=e,n.appendChild(t),o.appendChild(r("Home","#","home")),o.appendChild(r("Menu","#","menu")),o.appendChild(r("About Us","#","about")),n.appendChild(o),v.appendChild(n),console.log(`Header with H1 of ${e} Built`)}("FAUX TAUX AUPS"),v.appendChild(y(h,"Text Alt Text","Fake Food For Fake Folks")),function(e){const n=document.createElement("footer"),t=document.createElement("p");t.innerText=e,n.appendChild(t),v.appendChild(n),console.log(`Footer with copy of ${e} created.`)}("Faux Taux Aups © created by Jake Abed circa 2023"),document.querySelector("#home").addEventListener("click",(function(){return document.querySelector("section.hero")?console.log("Already on Home!"):(g(),v.appendChild(y(h,"The hands of a chef assembling a mushroom-centric dish on a log.","Fake Food For Fake Folks")),console.log("Home loaded!"))})),document.querySelector("#about").addEventListener("click",(function(){return document.querySelector("section.about")?console.log("Already on About Us!"):(g(),v.appendChild(function(e,n,t){const o=document.createElement("section"),r=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("p"),c=document.createElement("div"),l=document.createElement("p"),d=document.createElement("p"),s=b[(u=b.length,Math.floor(Math.random()*u))];var u;return a.innerText="About Us",i.innerText=e,r.appendChild(a),r.appendChild(i),l.innerText=s.review,d.innerText=s.name,c.appendChild(l),c.appendChild(d),o.appendChild(r),o.appendChild(c),o.classList.add("about"),console.log(`About us page with review from ${s.name} built.`),o}("All of our food is fake. It is meant for you to take photos of for social credit. Please stop eating the food. We cannot afford another lawsuit. Our owner is an idiot and clearly had a bad concept for a restaurant why did I take this gig. I wanted to be an astronaut...")),console.log("About Us loaded!"))}))})()})();