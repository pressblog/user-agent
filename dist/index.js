/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar IE = 'ie';\nvar Edge = 'edge';\nvar Chrome = 'chrome';\nvar Safari = 'safari';\nvar Firefox = 'firefox';\nvar Opera = 'opera';\nvar iPhone = 'iphone';\nvar iPad = 'ipad';\nvar Android = 'android';\nvar Mobile = 'mobile';\nvar Tablet = 'tablet';\nvar PC = 'pc';\nvar App = 'pressblog';\n\nvar UserAgent = function () {\n  function UserAgent() {\n    _classCallCheck(this, UserAgent);\n\n    this._ua = window.navigator.userAgent.toLowerCase();\n    this._browser = this._ua.indexOf(App) != -1 && App || (this._ua.indexOf('msie') != -1 || this._ua.indexOf('trident') != -1) && IE || this._ua.indexOf(Edge) != -1 && Edge || this._ua.indexOf(Chrome) != -1 && Chrome || this._ua.indexOf(Safari) != -1 && Safari || this._ua.indexOf(Firefox) != -1 && Firefox || this._ua.indexOf(Opera) != -1 && Opera || 'unknown';\n    this._device = this._ua.indexOf(App) != -1 && App || this._ua.indexOf(iPhone) != -1 && iPhone || this._ua.indexOf(iPad) != -1 && iPad || this._ua.indexOf(Android) != -1 && (this._ua.indexOf(Mobile) != -1 && Android + Mobile || Android + Tablet) || PC;\n  }\n\n  /*\n   * ブラウザ\n   */\n\n\n  _createClass(UserAgent, [{\n    key: 'isIE',\n    get: function get() {\n      return this._browser === IE;\n    }\n  }, {\n    key: 'isEdge',\n    get: function get() {\n      return this._browser === Edge;\n    }\n  }, {\n    key: 'isChrome',\n    get: function get() {\n      return this._browser === Chrome;\n    }\n  }, {\n    key: 'isSafari',\n    get: function get() {\n      return this._browser === Safari;\n    }\n  }, {\n    key: 'isFirefox',\n    get: function get() {\n      return this._browser === Firefox;\n    }\n  }, {\n    key: 'isOpera',\n    get: function get() {\n      return this._browser === Opera;\n    }\n\n    /*\n     * デバイス\n     */\n\n  }, {\n    key: 'isiPhone',\n    get: function get() {\n      return this._device === iPhone;\n    }\n  }, {\n    key: 'isiPad',\n    get: function get() {\n      return this._device === iPad;\n    }\n  }, {\n    key: 'isAndroid',\n    get: function get() {\n      return this._device.indexOf(Android) != -1;\n    }\n  }, {\n    key: 'isAndroidMobile',\n    get: function get() {\n      return this._device === Android + Mobile;\n    }\n  }, {\n    key: 'isAndroidTablet',\n    get: function get() {\n      return this._device === Android + Tablet;\n    }\n\n    /*\n     * PRESSアプリ\n     */\n\n  }, {\n    key: 'isApp',\n    get: function get() {\n      return this._device === App;\n    }\n\n    /*\n     * 種別\n     */\n\n  }, {\n    key: 'isPC',\n    get: function get() {\n      return this._device === PC;\n    }\n  }, {\n    key: 'isMobile',\n    get: function get() {\n      return this.isiPhone || this.isAndroidMobile || this.isApp;\n    }\n  }]);\n\n  return UserAgent;\n}();\n\nif (typeof window != 'undefined' && window.Vue) {\n  window.UserAgent = new UserAgent();\n}\n\nmodule.exports = new UserAgent();\nmodule.exports.default = module.exports;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });