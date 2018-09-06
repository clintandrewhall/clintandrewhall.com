/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-prefixedcss-prefixedcssvalue-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,a,s;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),y.push((i?"":"no-")+s.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){if("object"==typeof e)for(var t in e)_(e,t)&&f(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e,n){return!!~(""+e).indexOf(n)}function A(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?A(i,t||n):i);return!1}function c(n,t,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,n,t);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!t&&n.currentStyle&&n.currentStyle[r];return i}function d(){var e=n.body;return e||(e=s(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,i){var o,a,l,f,u="modernizr",A=s("div"),p=d();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=i?i[r]:u+(r+1),A.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+u,(p.fake?p:A).appendChild(o),p.appendChild(A),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),A.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=t(A,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):A.parentNode.removeChild(A),!!a}function g(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(a(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+a(n[i])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function v(e,n,i,o){function a(){A&&(delete T.style,delete T.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var f=g(e,i);if(!r(f,"undefined"))return f}for(var A,p,c,d,m,v=["modernizr","tspan","samp"];!T.style&&v.length;)A=!0,T.modElem=s(v.shift()),T.style=T.modElem.style;for(c=e.length,p=0;c>p;p++)if(d=e[p],m=T.style[d],u(d,"-")&&(d=l(d)),T.style[d]!==t){if(o||r(i,"undefined"))return a(),"pfx"==n?d:!0;try{T.style[d]=i}catch(h){}if(T.style[d]!=m)return a(),"pfx"==n?d:!0}return a(),!1}function h(e,n,t,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+U.join(a+" ")+a).split(" ");return r(n,"string")||r(n,"undefined")?v(s,n,i,o):(s=(e+" "+B.join(a+" ")+a).split(" "),p(s,n,t))}var y=[],w=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _,S=n.documentElement,b="svg"===S.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=f}),Modernizr.addAsyncTest(function(){function e(e,n,t){function r(n){var r=n&&"load"===n.type?1==i.width:!1,o="webp"===e;f(e,o&&r?new Boolean(r):r),t&&t(n)}var i=new Image;i.onerror=r,i.onload=r,i.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var r=0;r<n.length;r++)e(n[r].name,n[r].uri)})});var x="Moz O ms Webkit",B=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=B;var Q=function(e,n){var t=!1,r=s("div"),i=r.style;if(e in i){var o=B.length;for(i[e]=n,t=i[e];o--&&!t;)i[e]="-"+B[o]+"-"+n,t=i[e]}return""===t&&(t=!1),t};C.prefixedCSSValue=Q;var U=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=U;var R=function(n){var r,i=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var a=0;i>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+n}return!1};C.atRule=R;var E={elem:s("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style}),C.testAllProps=h;var P=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=l(e)),n?h(e,n,t):h(e,"pfx"))};C.prefixedCSS=function(e){var n=P(e);return n&&a(n)};i(),o(y),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);
