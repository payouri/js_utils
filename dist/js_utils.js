!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["Javascript Utils"]=t():e["Javascript Utils"]=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return n}));const n=e=>{if(Array.isArray(e))return e[Math.floor(Math.random()*e.length)];throw new TypeError('Param "array" is not an array')};t.a={chunkArray:(e,t)=>{let r=[],n=0;for(let o=0,a=e.length;o<a;o+=t){let a=e.slice(o,o+t);r[n]=a,n++}return r},falsyBounce:e=>{let t=[];for(let r of e)r&&t.push(r);return t},intersection:(e,t)=>e.filter(e=>t.includes(e)),mergeArrays:(...e)=>(t=!1)=>{let r=[];for(let t=0,n=e.length;t<n;t++)r=[...r,...e[t]];return t?r.filter((e,t)=>r.indexOf(e)===t):r},randomPick:n,getElementAt:function(e,t){if(0==e.length)return;const r=t%e.length;return r>=0?e[r]:e[e.length+r]}}},function(e,t,r){"use strict";(function(e){var n=r(0);const o=e=>e&&e[0].toUpperCase()+e.slice(1);t.a={capitalize:o,capitalizeWords:e=>e.split(" ").map(e=>o(e)).join(" "),generateRandom:(e=6,t)=>{if("number"!=typeof e)return;t&&Array.isArray(t)&&0!=t.length||(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$*#&!".split(""));let r="";for(let o=0;o<e;o++)r+=Object(n.b)(t);return r},replaceAll:(e,t,r)=>e.replace(new RegExp(t,"g"),r),secsToMin:e=>{let t=~~(e/3600),r=~~(e%3600/60),n=~~e%60,o="";return t>0&&(o+=t+":"+(r<10?"0":"")),o+=r+":"+(n<10?"0":""),o+=""+n,o},stringToFunction:t=>{let r=t.split("."),n=e||void 0;for(let e=0,t=r.length;e<t;e++)n=n[r[e]];if("function"!=typeof n)throw new Error("function not found");return n},unCapitalize:e=>e&&e[0].toLowerCase()+e.slice(1),nFormatter:(e,t=0)=>{const r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];let n;for(n=r.length-1;n>0&&!(e>=r[n].value);n--);return(e/r[n].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+r[n].symbol},encodeHTML:e=>"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"):e,generateHexKey:()=>(new Date).getTime().toString(16)}}).call(this,r(2))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(t,r,n){"use strict";n.r(r);var o=n(0);const a=(e,t,r,n=!1)=>{if(!(e instanceof HTMLElement||e instanceof window.constructor))throw new TypeError('Param 1 "el", is not an instance of HTMLElement');if("function"!=typeof t)throw new TypeError('Param 2 "cb", is not a function');if(!Array.isArray(r)){if("string"==typeof r)return e.addEventListener(r,t,n),e;throw new TypeError('Param 3 "evts", is not an array')}for(let o of r)return"string"==typeof o&&e.addEventListener(o,t,n),e},s=(t,r,n,o=!1)=>{if(o=!!o,t instanceof HTMLElement||t instanceof window.constructor){if("function"==typeof r){if(Array.isArray(n)){for(let e of n)"string"==typeof e&&t.removeEventListener(e,r,o);return t}if("string"==typeof e)return t.removeEventListener(e,r,o),t;throw new TypeError('Param 3 "evts", is not an array')}throw new TypeError('Param 2 "cb", is not a function')}throw new TypeError('Param 1 "el", is not an instance of HTMLElement')},i=({text:e="",classes:t=[],attributes:r={},styles:n={},...o}={})=>{let{tag:a}=o;a&&"string"==typeof a||(a="div");const s=document.createElement(a);return("string"==typeof r||Object.entries(r).length>0)&&c(s,r),("string"==typeof n||Object.entries(n).length>0)&&f(s,n),t.length>0&&l(s,t),s.innerHTML=e,s},l=(e,t=[])=>{if(e instanceof HTMLElement||e instanceof SVGElement){if(Array.isArray(t))if(0==e.classList.length)e.classList=t.join(" ");else for(let r of t)"string"==typeof r&&e.classList.add(r);else"string"==typeof t&&(e.classList+=`${e.classList.length>0?" ":""}${t}`);return e}throw new Error('Param 1 "el", is not an instance of HTMLElement')},c=(e,t={})=>{if(e instanceof HTMLElement||e instanceof SVGElement){for(let r in t)"data"!=r.substring(0,4)?e.setAttribute(r,t[r]):e.dataset[r[4].toLowerCase()+r.substring(5)]=t[r];return e}throw new Error('Param 1 "el", is not an instance of HTMLElement')},f=(e,{...t}={})=>{if(!(e instanceof HTMLElement||e instanceof ShadowRoot))throw new TypeError('Param 1 "el", is not an instance of HTMLElement');for(let r in t)null!=e.style[r]&&(e.style[r]=t[r])};var u={appendChildren:(e,...t)=>(t.forEach(t=>{const r=t=>{t instanceof HTMLElement?e.appendChild(t):console.warn(t,", isn't an instance of HTMLElement")};Array.isArray(t)?t.forEach(e=>{r(e)}):r(t)}),e),addListeners:a,attachEvts:a,removeListeners:s,detachEvts:s,createElement:i,getBoundEvents:e=>{if(e instanceof HTMLElement){const t={};for(let r in e)"on"==r.substring(0,2)&&null!=e[r]&&(t[r]=e[r]);return t}},isChildrenOf:(e,t)=>t.contains(e),moveNode:(e,t)=>{if(e instanceof HTMLElement){if(t instanceof HTMLElement)return t.contains(e)||(e.parentNode&&e.parentNode.removeChild(e),t.appendChild(e)),e;throw new TypeError('Param 2 "newParent", is not an instance of HTMLElement')}throw new TypeError('Param 1 "el", is not an instance of HTMLElement')},setClasses:l,removeClasses:(e,t)=>{if(e instanceof HTMLElement||e instanceof SVGElement){if(Array.isArray(t)){for(let r in t)e.classList.remove(r);return e}if(t="all")return e.classList="",e;throw new TypeError('Param 2 "classes", is not an array')}throw new TypeError('Param 1 "el", is not an instance of HTMLElement')},setAttributes:c,getAttributes:(e,t)=>{if(e instanceof HTMLElement||e instanceof SVGElement){const r={};for(let n of t)r[n]=e.attributes[n];return r}throw new Error('Param 1 "el", is not an instance of HTMLElement')},removeAttributes:(e,t)=>{if(e instanceof HTMLElement){if(Array.isArray(t)){for(let r of t)"string"==typeof r&&e.removeAttribute(r);return e}if("all"==t){for(let t of e.attributes)"class"!=t.name&&"style"!=t.name&&e.removeAttribute(t.name);return e}throw new Error('TypeError: Param 2 "attrs", is not an array')}throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement')},setDataAttributes:(e,{...t})=>{if(!(e instanceof HTMLElement))throw new Error('Param 1 "el", is not an instance of HTMLElement');for(let r in t)e.dataset[r]=t[r]},removeDataAttributes:(e,t)=>{if("string"==typeof t&&(t=[t]),!(e instanceof HTMLElement))throw new Error('Param 1 "el", is not an instance of HTMLElement');if(!Array.isArray(t))throw new Error('Param 2 "attrs", is not an array');for(let r of t)e.dataset[r]&&e.removeAttribute(["data-"+r])},setProperties:(e,{...t})=>{if(e instanceof HTMLElement)for(let r in t)e.style.setProperty(`--${r}`,t[r].value?t[r].value:"",t[r].priority?t[r].priority:void 0)},removeProperties:(e,t)=>{if(e instanceof HTMLElement)if(Array.isArray(t))for(let r of t)"string"==typeof r&&e.style.removeProperty(`--${r}`);else"string"==typeof t&&e.style.removeProperty(`--${t}`)},setStyles:f,removeStyles:(e,t)=>{if(!(e instanceof HTMLElement))throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement');if(Array.isArray(t))for(let r of t)null!=e.style[r]&&(e.style[r]="");else{if("all"!=t)throw new Error('TypeError: Param 2 "styles", is not an array');Object.keys(e.style).filter(t=>{e.style[t]&&isNaN(Number(t))&&(e.style[t]="")})}},wrapNode:(e,{...t}={})=>{if(e instanceof HTMLElement){const r=i({...t});return e.parentNode.replaceChild(r,e),r.appendChild(e),r}throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement')},parseSelector:e=>{},hasClasses:(e,t)=>Array.isArray(t)?t.reduce((t,r)=>t&&e.classlist.contains(r),!0):"string"==typeof t?e.classlist.contains(t):void 0,hasAttributes:(e,t)=>Array.isArray(t)?t.reduce((t,r)=>t&&e.hasAttribute(r),!0):"string"==typeof t?e.hasAttribute(t):void 0,addChildrenListener:(e,t,r,n,o)=>{if(!(e instanceof HTMLElement))throw new TypeError('Param 1 "parentEl", is not an instance of HTMLElement');a(e,e=>{const{target:r}=e,o=r.closest(t),a=new Proxy(e,{get:function(e,t){return"target"==t?o:e[t]}});o&&"function"==typeof n&&n(a)},r,!0)}};var m={CanvasView:class{constructor(e,{root:t,context:r=""}={}){this._DOMElem=e||CanvasUtils.createDOMCanvas(...options),this._ctx=this._DOMElem.getContext(r||"2d"),this._root=t||this._DOMElem.parentNode}get DOMElem(){return this._DOMElem}get root(){return this._root}set DOMElem(e){e instanceof HTMLCanvasElement&&(this._DOMElem=e)}set root(e){e instanceof HTMLElement&&(this._root=e)}render(){}},createDOMCanvas:({...e}={})=>i({tag:"canvas",...e})};var y={debounce:function(e,t,r){let n;return function(){const o=this,a=arguments,s=r&&!n;clearTimeout(n),n=setTimeout((function(){n=null,r||e.apply(o,a)}),t),s&&e.apply(o,a)}},throttle:function(e,t=250){let r=0;return function(...n){const o=(new Date).getTime();if(!(o-r<t))return r=o,e(...n)}}};var p={calcPointCoordsOnCircle:function(e,t,r,n){return{x:e+r*Math.cos(n),y:t+r*Math.sin(n)}},distBetweenTwoPts:(e,t)=>e.x&&e.y&&t.x&&t.y?Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2)):NaN,getCirclePerimeter:e=>{const t=Number(e);if(isNaN(t))throw new Error('TypeError: Param "radius" is not a valid number');return 2*Math.PI*t},getDiscArea:e=>{const t=Number(e);if(isNaN(t))throw new Error('TypeError: Param "radius" is not a valid number');return Math.PI*Math.pow(t,2)}};var d={clamp:(e,t,r)=>e<=t?t:e>=r?r:e,random:(e,t)=>Math.random()*(t-e)+e,randomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e)};const h=e=>e&&"object"==typeof e&&!Array.isArray(e);var E={isObject:h,isValidEmail:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),isValidPhone:e=>String(e).match(/^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7})){1}$/gm)};var g=n(1);var v={getInlineTransforms:e=>{const t=e.style.transform.toLowerCase();return[{name:"scale",variants:["X","Y","Z","3d"]},{name:"translate",variants:["X","Y","Z","3d"]},{name:"rotate",variants:["X","Y","Z","3d"]},{name:"skew",variants:["X","Y"]},{name:"perspective",variants:[]},{name:"matrix",variants:["3d"]}].map(e=>{const r={name:"",transform:{X:0,Y:0,Z:0}},n=t.indexOf(e.name);if(r.name=e.name,-1!=n){let o=t.charAt(n+e.name.length).toUpperCase();if("3"===o&&(o="3d"),e.variants.includes(o)&&"3d"!=o)r.transform[o]=t.substring(n+e.name.length+2,t.indexOf(")",n));else if("3d"==o&&"matrix"!=e.name){const o=t.substring(n+e.name.length+3,t.indexOf(")",n));let a,s=Y=Z=0,i=StringUtils.replaceAll(o," ","").split(",");s=i[0]?i[0]:0,Y=i[1]?i[1]:0,Z=i[2]?i[2]:0,a=i[3]?i[3]:0,r.transform={X:s,Y:Y,Z:Z,unit:a}}else{const o=t.substring(n+e.name.length+1,t.indexOf(")",n));let a=Y=Z=0;if(-1!=o.indexOf(",")){let t=StringUtils.replaceAll(o," ","").split(",");"matrix"!=e.name?(a=t[0]?t[0]:0,Y=t[1]?t[1]:0,Z=t[2]?t[2]:0,r.transform={X:a,Y:Y,Z:Z}):r.transform=t}else o.length>0&&("rotate"!=e.name&&"perspective"!=e.name?(a=o,Y=o,Z=0,r.transform={X:a,Y:Y,Z:Z}):(a=0,Y=0,Z=o,r.transform={X:a,Y:Y,Z:Z}))}}return r})},mouseTouchOffset:e=>{e.type&&e.type;const t=!e.currentTarget||e.currentTarget instanceof window.constructor?{x:0,y:0}:e.currentTarget.getBoundingClientRect();return e instanceof MouseEvent?{x:e.x-t.x,y:e.y-t.y}:e instanceof TouchEvent?e.touches&&e.touches[0]?{x:e.touches[0].clientX-t.x,y:e.touches[0].clientY-t.y}:{x:null,y:null}:void 0},getFirstTouch:({touches:e})=>e&&e[0]?e[0]:null};const w=e=>{if(e.length<2)return e;let t=e[0],r=[],n=[];for(let o=1,a=e.length;o<a;o++)e[o]<t?r.push(e[o]):n.push(e[o]);return[...w(r),t,...w(n)]};var T={localeSort:(e,t,r,n)=>e.localeCompare(t,r,n),quickSort:w};r.default={ArrayUtils:o.a,CanvasUtils:m,DOMUtils:u,EventUtils:y,GeomUtils:p,MathUtils:d,ObjectUtils:{},StringUtils:g.a,Validators:E,OtherUtils:v,SortUtils:T}}])}));