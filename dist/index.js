!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserAgent=t():e.UserAgent=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r="ie",o="edge",u="chrome",s="safari",f="firefox",a="opera",c="iphone",d="ipad",l="android",h="mobile",p="tablet",_="pc",b="pressblog",y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._ua=window.navigator.userAgent.toLowerCase(),this._browser=-1!=this._ua.indexOf(b)&&b||(-1!=this._ua.indexOf("msie")||-1!=this._ua.indexOf("trident"))&&r||-1!=this._ua.indexOf(o)&&o||-1!=this._ua.indexOf(u)&&u||-1!=this._ua.indexOf(s)&&s||-1!=this._ua.indexOf(f)&&f||-1!=this._ua.indexOf(a)&&a||"unknown",this._device=-1!=this._ua.indexOf(b)&&b||-1!=this._ua.indexOf(c)&&c||-1!=this._ua.indexOf(d)&&d||-1!=this._ua.indexOf(l)&&(-1!=this._ua.indexOf(h)&&l+h||l+p)||_}return i(e,[{key:"isIE",get:function(){return this._browser===r}},{key:"isEdge",get:function(){return this._browser===o}},{key:"isChrome",get:function(){return this._browser===u}},{key:"isSafari",get:function(){return this._browser===s}},{key:"isFirefox",get:function(){return this._browser===f}},{key:"isOpera",get:function(){return this._browser===a}},{key:"isiPhone",get:function(){return this._device===c}},{key:"isiPad",get:function(){return this._device===d}},{key:"isAndroid",get:function(){return-1!=this._device.indexOf(l)}},{key:"isAndroidMobile",get:function(){return this._device===l+h}},{key:"isAndroidTablet",get:function(){return this._device===l+p}},{key:"isApp",get:function(){return this._device===b}},{key:"isPC",get:function(){return this._device===_}},{key:"isMobile",get:function(){return this.isiPhone||this.isAndroidMobile||this.isApp}}]),e}();t.default=new y}])});