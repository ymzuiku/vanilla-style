!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).style=n()}(this,function(){"use strict";var e=["android","iphone","windows phone","ipad","ipod"],o=function(i){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.forEach(function(e){!function(r){Object.keys(i).forEach(function(e){var n=i[e],t=o.middlewares[e];t?t(n)(r):r.style[e]=n})}(e)}),1===e.length?e[0]:e}};o.middlewares={},o.createBaseStyle=function(e){return e},o.setStyle=function(t){return function(n){return Object.keys(t).forEach(function(e){n.style[e]=t[e]}),n}},o.makeOutEnterStyle=function(t){var r=null;return[function(n){r=r||{},Object.keys(t).forEach(function(e){r[e]=n.style[e],n.style[e]=t[e]})},function(n){r&&Object.keys(r).forEach(function(e){n.style[e]=r[e]}),r=null}]},o.use=function(e,n){o.middlewares[e]=n};for(var n=!0,t=navigator.userAgent.toLowerCase(),r=0;r<e.length;r++)if(0<t.indexOf(e[r])){n=!1;break}o.isPc=n,o.use("$active",function(e){var n=o.makeOutEnterStyle(e),t=n[0],r=n[1];return function(e){return e&&(o.isPc?(e.addEventListener("mousedown",function(){return t(e)}),e.addEventListener("mouseup",function(){return r(e)}),e.addEventListener("mouseleave",function(){return r(e)})):(e.addEventListener("touchstart",function(){return t(e)}),e.addEventListener("touchend",function(){return r(e)}),e.addEventListener("touchcancel",function(){return r(e)}))),e}});var i={};return o.use("$flex",function(t){return function(e){i[t]||(i[t]=function(e){var n=e.split(" "),t=n[0],r=n[1],i=n[2];return"col"===t&&(t="column"),"start"!==r&&"end"!==r||(r="flex-"+r),"start"!==i&&"end"!==r||(i="flex-"+i),{display:"flex",flexDirection:t,justifyContent:r,alignItems:i}}(t));var n=i[t];return n&&o.setStyle(n)(e),e}}),o.use("$hover",function(e){var n=o.makeOutEnterStyle(e),t=n[0],r=n[1];return function(e){return o.isPc&&e&&(e.addEventListener("mouseenter",function(){return t(e)}),e.addEventListener("mouseleave",function(){return r(e)})),e}}),o.use("$media",function(n){return function(e){return n&&(void 0!==n.$mediaApplyWidth&&window.innerWidth<n.$mediaApplyWidth&&o.setStyle(n)(e),void 0!==n.$mediaApplyHeight&&window.innerHeight<n.$mediaApplyHeight&&o.setStyle(n)(e)),e}}),o.use("$mobile",function(n){return function(e){return n&&(o.isPc||o.setStyle(n)(e)),e}}),o.use("$pc",function(n){return function(e){return n&&o.isPc&&o.setStyle(n)(e),e}}),o.use("$scrollBlock",function(e){var t=e.space,r=e.onScrollIn,i=e.onScrollOut,n=e.key,o=void 0===n?"scrollTop":n;return function(e){var n=e;return n.addEventListener("scroll",function(){!n.__isScrollDown&&n[o]>t?(n.__isScrollDown=!0,r(e)):n.__isScrollDown&&n[o]<=t&&(n.__isScrollDown=!1,i(e))}),e}}),o});
//# sourceMappingURL=index.js.map
