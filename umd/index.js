!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).style=t()}(this,function(){"use strict";function e(t,n){return Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t}return e.css=function(e,t){var n=document.createElement("style");t&&(e=e.replace(/(\-bem\-)/g,"."+t)),n.type="text/css",n.textContent=e,document.head.appendChild(n)},e.class=function(e,t,n){return n&&(t=t.replace(/(\-bem\-)/g,""+n)),e.setAttribute("class",t),e},e.sheet=function(e){return e},e.bem=function(){return"bem"+Date.now().toString(32)+Math.random().toString(32).slice(2)},e});
//# sourceMappingURL=index.js.map
