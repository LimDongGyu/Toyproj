/*!
 * Build Date: 2020. 2. 25. 오전 12:30:21
 * Author: ldg
 * 
 */
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/times-circle.png?2a32eee45a9f280f743fb36b7c530d98 */ \"./src/images/times-circle.png?2a32eee45a9f280f743fb36b7c530d98\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"/*! 빌드 날짜: 2020. 1. 11. 오전 11:11:06 */\\r\\n.FormView {\\r\\n  position: relative\\r\\n}\\r\\n\\r\\n.FormView input[type=text] {\\r\\n  display: block;\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n  margin: 15px 0;\\r\\n  padding: 10px 15px;\\r\\n  font-size: 14px;\\r\\n  line-height: 1.5;\\r\\n  border: 1px solid #ccc\\r\\n}\\r\\n\\r\\n.FormView .btn-reset {\\r\\n  position: absolute;\\r\\n  top: 12px;\\r\\n  right: 10px;\\r\\n  border: none;\\r\\n  border-radius: 50%;\\r\\n  padding: 0;\\r\\n  width: 20px;\\r\\n  height: 20px\\r\\n}\\r\\n\\r\\n.FormView .btn-reset:before {\\r\\n  content: \\\" \\\";\\r\\n  display: inline-block;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 50%/contain;\\r\\n  opacity: .15\\r\\n}\\r\\n\\r\\n.FormView .btn-reset:hover {\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n.ResultView ul {\\r\\n  margin: 0;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n.ResultView ul li {\\r\\n  display: flex;\\r\\n  margin-bottom: 4px;\\r\\n  padding: 0 4px\\r\\n}\\r\\n\\r\\n.ResultView ul li:first-child {\\r\\n  padding-top: 4px\\r\\n}\\r\\n\\r\\n.ResultView ul li:last-child {\\r\\n  padding-bottom: 4px;\\r\\n  margin-bottom: 0\\r\\n}\\r\\n\\r\\n.ResultView ul li:hover {\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n.ResultView ul img {\\r\\n  max-width: 150px;\\r\\n  margin-right: 8px\\r\\n}\\r\\n\\r\\n.ResultView ul p {\\r\\n  display: flex;\\r\\n  align-items: center\\r\\n}\\r\\n\\r\\n.TabView {\\r\\n  display: flex;\\r\\n  margin: 0;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n.TabView li {\\r\\n  display: inline-block;\\r\\n  width: 50%;\\r\\n  padding: 15px;\\r\\n  text-align: center;\\r\\n  box-sizing: border-box;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  background-color: #fff;\\r\\n  color: #aaa\\r\\n}\\r\\n\\r\\n.TabView li:hover {\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n.TabView li.active {\\r\\n  background-color: #2ac1bc;\\r\\n  color: #fff\\r\\n}\\r\\n\\r\\n.TabView li.active:hover {\\r\\n  cursor: auto\\r\\n}\\r\\n\\r\\n.KeywordView {\\r\\n  margin: 0;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n.KeywordView li {\\r\\n  box-sizing: border-box;\\r\\n  display: block;\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  position: relative\\r\\n}\\r\\n\\r\\n.KeywordView li:hover {\\r\\n  background-color: #effbfb;\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n.KeywordView li:last-child {\\r\\n  border-bottom: none\\r\\n}\\r\\n\\r\\n.KeywordView li .date,\\r\\n.KeywordView li .number {\\r\\n  margin-right: 15px;\\r\\n  color: #ccc\\r\\n}\\r\\n\\r\\n.KeywordView li .date {\\r\\n  position: absolute;\\r\\n  right: 50px;\\r\\n  top: 15px\\r\\n}\\r\\n\\r\\n.HistoryView {\\r\\n  margin: 0;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n.HistoryView li {\\r\\n  box-sizing: border-box;\\r\\n  display: block;\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  position: relative\\r\\n}\\r\\n\\r\\n.HistoryView li:hover {\\r\\n  background-color: #effbfb;\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n.HistoryView li:last-child {\\r\\n  border-bottom: none\\r\\n}\\r\\n\\r\\n.HistoryView li .date,\\r\\n.HistoryView li .number {\\r\\n  margin-right: 15px;\\r\\n  color: #ccc\\r\\n}\\r\\n\\r\\n.HistoryView li .date {\\r\\n  position: absolute;\\r\\n  right: 50px;\\r\\n  top: 15px\\r\\n}\\r\\n\\r\\n.HistoryView .btn-remove {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  top: 12px;\\r\\n  margin-right: 15px;\\r\\n  border: none;\\r\\n  border-radius: 50%;\\r\\n  padding: 0;\\r\\n  width: 20px;\\r\\n  height: 20px\\r\\n}\\r\\n\\r\\n.HistoryView .btn-remove:before {\\r\\n  content: \\\" \\\";\\r\\n  display: inline-block;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 50%/contain;\\r\\n  opacity: .15\\r\\n}\\r\\n\\r\\n.HistoryView .btn-remove:hover {\\r\\n  cursor: pointer\\r\\n}\\r\\n\\r\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\nhtml {\\r\\n  line-height: 1.15;\\r\\n  -webkit-text-size-adjust: 100%\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: block\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: .67em 0\\r\\n}\\r\\n\\r\\nhr {\\r\\n  box-sizing: content-box;\\r\\n  height: 0;\\r\\n  overflow: visible\\r\\n}\\r\\n\\r\\npre {\\r\\n  font-family: monospace, monospace;\\r\\n  font-size: 1em\\r\\n}\\r\\n\\r\\na {\\r\\n  background-color: transparent\\r\\n}\\r\\n\\r\\nabbr[title] {\\r\\n  border-bottom: none;\\r\\n  text-decoration: underline;\\r\\n  text-decoration: underline dotted\\r\\n}\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder\\r\\n}\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace;\\r\\n  font-size: 1em\\r\\n}\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%\\r\\n}\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -.25em\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -.5em\\r\\n}\\r\\n\\r\\nimg {\\r\\n  border-style: none\\r\\n}\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit;\\r\\n  font-size: 100%;\\r\\n  line-height: 1.15;\\r\\n  margin: 0\\r\\n}\\r\\n\\r\\nbutton,\\r\\ninput {\\r\\n  overflow: visible\\r\\n}\\r\\n\\r\\nbutton,\\r\\nselect {\\r\\n  text-transform: none\\r\\n}\\r\\n\\r\\n[type=button],\\r\\n[type=reset],\\r\\n[type=submit],\\r\\nbutton {\\r\\n  -webkit-appearance: button\\r\\n}\\r\\n\\r\\n[type=button]::-moz-focus-inner,\\r\\n[type=reset]::-moz-focus-inner,\\r\\n[type=submit]::-moz-focus-inner,\\r\\nbutton::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n[type=button]:-moz-focusring,\\r\\n[type=reset]:-moz-focusring,\\r\\n[type=submit]:-moz-focusring,\\r\\nbutton:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText\\r\\n}\\r\\n\\r\\nfieldset {\\r\\n  padding: .35em .75em .625em\\r\\n}\\r\\n\\r\\nlegend {\\r\\n  box-sizing: border-box;\\r\\n  color: inherit;\\r\\n  display: table;\\r\\n  max-width: 100%;\\r\\n  padding: 0;\\r\\n  white-space: normal\\r\\n}\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  overflow: auto\\r\\n}\\r\\n\\r\\n[type=checkbox],\\r\\n[type=radio] {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0\\r\\n}\\r\\n\\r\\n[type=number]::-webkit-inner-spin-button,\\r\\n[type=number]::-webkit-outer-spin-button {\\r\\n  height: auto\\r\\n}\\r\\n\\r\\n[type=search] {\\r\\n  -webkit-appearance: textfield;\\r\\n  outline-offset: -2px\\r\\n}\\r\\n\\r\\n[type=search]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none\\r\\n}\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button;\\r\\n  font: inherit\\r\\n}\\r\\n\\r\\ndetails {\\r\\n  display: block\\r\\n}\\r\\n\\r\\nsummary {\\r\\n  display: list-item\\r\\n}\\r\\n\\r\\n[hidden],\\r\\ntemplate {\\r\\n  display: none\\r\\n}\\r\\n\\r\\n#app {\\r\\n  min-width: 320px;\\r\\n  max-width: 768px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin-left: 8px;\\r\\n  margin-right: 8px\\r\\n}\\r\\n\\r\\nheader {\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  margin: 0;\\r\\n  text-align: center\\r\\n}\\r\\n\\r\\n.content {\\r\\n  border: 1px solid #ddd\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/city-4490237_1920.jpg */ \"./src/images/city-4490237_1920.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    /* background-color: yellow; */\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController.js */ \"./src/controllers/MainController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  new _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //definePlugin()\n\n  console.log(\"development\");\n  console.log(\"v.1.2.3\");\n  console.log(999);\n  console.log(\"http://127.0.0.1\");\n}); //babel 기본동작 예제\n\nconst alert = msg => window.alert(msg);\n/**\r\n * npm install @babel/core @babel/cli -D\r\n */\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/MainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/FormView.js */ \"./src/views/FormView.js\");\n/* harmony import */ var _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/ResultView.js */ \"./src/views/ResultView.js\");\n/* harmony import */ var _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/TabView.js */ \"./src/views/TabView.js\");\n/* harmony import */ var _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/KeywordView.js */ \"./src/views/KeywordView.js\");\n/* harmony import */ var _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/HistoryView.js */ \"./src/views/HistoryView.js\");\n/* harmony import */ var _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/SearchModel.js */ \"./src/models/SearchModel.js\");\n/* harmony import */ var _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/KeywordModel.js */ \"./src/models/KeywordModel.js\");\n/* harmony import */ var _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/HistoryModel.js */ \"./src/models/HistoryModel.js\");\n\n\n\n\n\n\n\n\nclass MainController {\n  constructor() {\n    const formViewEl = document.querySelector(\"form\");\n    const tabViewEl = document.querySelector(\"#tabs\");\n    const keywordViewEl = document.querySelector(\"#search-keyword\");\n    const historyViewEl = document.querySelector(\"#search-history\");\n    const resultViewEl = document.querySelector(\"#search-result\");\n    this.formView = new _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](formViewEl).on(\"@submit\", e => this.search(e.detail.input)).on(\"@reset\", () => this.renderView());\n    this.tabView = new _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](tabViewEl).on(\"@change\", e => this.onChangeTab(e.detail.tabName));\n    this.keywordView = new _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keywordViewEl).on(\"@click\", e => this.search(e.detail.keyword));\n    this.historyView = new _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](historyViewEl).on(\"@click\", e => this.search(e.detail.keyword)).on(\"@remove\", e => this.onRemoveHistory(e.detail.keyword));\n    this.resultView = new _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](resultViewEl);\n    this.selectedTab = \"추천 검색어\";\n    this.renderView();\n  }\n\n  async search(query) {\n    this.formView.setValue(query);\n    const data = await _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].list(query);\n    this.onSearchResult(data);\n  }\n\n  onSearchResult(data) {\n    this.tabView.hide();\n    this.keywordView.hide();\n    this.historyView.hide();\n    this.resultView.mount(data);\n  }\n\n  onChangeTab(tabName) {\n    this.selectedTab = tabName;\n    this.renderView();\n  }\n\n  async renderView() {\n    this.tabView.setActiveTab(this.selectedTab);\n\n    if (this.selectedTab === \"추천 검색어\") {\n      const data = await _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].list();\n      this.keywordView.mount(data);\n      this.historyView.hide();\n    } else {\n      const data = await _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].list();\n      this.historyView.mount(data).bindRemoveBtn();\n      this.keywordView.hide();\n    }\n\n    this.resultView.hide();\n  }\n\n  onRemoveHistory(keyword) {\n    _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].remove(keyword);\n    this.renderView();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/controllers/MainController.js?");

/***/ }),

/***/ "./src/images/city-4490237_1920.jpg":
/*!******************************************!*\
  !*** ./src/images/city-4490237_1920.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./dist/city-4490237_1920.jpg?ce1c5c3341afa74df4ea87c7270270df\");\n\n//# sourceURL=webpack:///./src/images/city-4490237_1920.jpg?");

/***/ }),

/***/ "./src/images/times-circle.png?2a32eee45a9f280f743fb36b7c530d98":
/*!**********************************************************************!*\
  !*** ./src/images/times-circle.png?2a32eee45a9f280f743fb36b7c530d98 ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack:///./src/images/times-circle.png?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/models/HistoryModel.js":
/*!************************************!*\
  !*** ./src/models/HistoryModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: [{\n    keyword: \"검색기록2\",\n    date: \"12.03\"\n  }, {\n    keyword: \"검색기록1\",\n    date: \"12.02\"\n  }, {\n    keyword: \"검색기록0\",\n    date: \"12.01\"\n  }],\n\n  list() {\n    return Promise.resolve(this.data);\n  },\n\n  add(keyword = \"\") {\n    keyword = keyword.trim();\n    if (!keyword) return;\n\n    if (this.data.some(item => item.keyword === keyword)) {\n      this.remove(keyword);\n    }\n\n    const date = \"12.31\";\n    this.data = [{\n      keyword,\n      date\n    }, ...this.data];\n  },\n\n  remove(keyword) {\n    this.data = this.data.filter(item => item.keyword !== keyword);\n  }\n\n});\n\n//# sourceURL=webpack:///./src/models/HistoryModel.js?");

/***/ }),

/***/ "./src/models/KeywordModel.js":
/*!************************************!*\
  !*** ./src/models/KeywordModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: [{\n    keyword: \"이탈리아\"\n  }, {\n    keyword: \"세프의요리\"\n  }, {\n    keyword: \"제철\"\n  }, {\n    keyword: \"홈파티\"\n  }],\n\n  list() {\n    return new Promise(res => {\n      setTimeout(() => {\n        res(this.data);\n      }, 200);\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///./src/models/KeywordModel.js?");

/***/ }),

/***/ "./src/models/SearchModel.js":
/*!***********************************!*\
  !*** ./src/models/SearchModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  id: 1,\n  name: \"[버거] 치즈버거처럼 생긴 새우버거\",\n  image: \"https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\"\n}, {\n  id: 2,\n  name: \"[피자] 썸네일 주소가 잘못된 상품\",\n  image: \"http://foo.bar/image.jpg\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  list() {\n    return new Promise(res => {\n      setTimeout(() => {\n        res(data);\n      }, 200);\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///./src/models/SearchModel.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/views/FormView.js":
/*!*******************************!*\
  !*** ./src/views/FormView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\nclass FormView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this._inputEl = el.querySelector(\"[type=text]\");\n    this._resetEl = el.querySelector(\"[type=reset]\");\n    this.showResetBtn(false);\n    this.bindEvents();\n    return this;\n  }\n\n  showResetBtn(show = true) {\n    this._resetEl.style.display = show ? \"block\" : \"none\";\n  }\n\n  bindEvents() {\n    this.on(\"submit\", e => e.preventDefault());\n\n    this._inputEl.addEventListener(\"keyup\", e => this.onKeyup(e));\n\n    this._resetEl.addEventListener(\"click\", () => this.onClickReset());\n  }\n\n  onKeyup(e) {\n    const enter = 13;\n    this.showResetBtn(this._inputEl.value.length);\n    if (!this._inputEl.value.length) this.emit(\"@reset\");\n    if (e.keyCode !== enter) return;\n    this.emit(\"@submit\", {\n      input: this._inputEl.value\n    });\n  }\n\n  onClickReset() {\n    this.emit(\"@reset\");\n    this.showResetBtn(false);\n  }\n\n  setValue(value = \"\") {\n    this._inputEl.value = value;\n    this.showResetBtn(this._inputEl.value.length);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/FormView.js?");

/***/ }),

/***/ "./src/views/HistoryView.js":
/*!**********************************!*\
  !*** ./src/views/HistoryView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HistoryView; });\n/* harmony import */ var _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeywordView.js */ \"./src/views/KeywordView.js\");\n\nclass HistoryView extends _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this._messages.NO_KEYWORDS = \"검색 이력이 없습니다\";\n    return this;\n  }\n\n  getKeywordsHtml(data) {\n    return data.reduce((html, item) => {\n      html += `<li data-keyword=\"${item.keyword}\">\n        ${item.keyword} \n        <span class=\"date\">${item.date}</span>\n        <button class=\"btn-remove\"></button>\n        </li>`;\n      return html;\n    }, '<ul class=\"HistoryView\">') + \"</ul>\";\n  }\n\n  bindRemoveBtn() {\n    Array.from(this.el.querySelectorAll(\"button.btn-remove\")).forEach(btn => {\n      btn.addEventListener(\"click\", e => {\n        e.stopPropagation();\n        this.onRemove(btn.parentElement.dataset.keyword);\n      });\n    });\n  }\n\n  onRemove(keyword) {\n    this.emit(\"@remove\", {\n      keyword\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/HistoryView.js?");

/***/ }),

/***/ "./src/views/KeywordView.js":
/*!**********************************!*\
  !*** ./src/views/KeywordView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeywordView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\nclass KeywordView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this._messages = {\n      NO_KEYWORDS: \"추천 검색어가 없습니다\"\n    };\n    return this;\n  }\n\n  mount(data = []) {\n    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : this._messages.NO_KEYWORDS;\n    this.show();\n\n    this._bindClickEvent();\n\n    return this;\n  }\n\n  getKeywordsHtml(data) {\n    return data.reduce((html, item, index) => {\n      html += `<li data-keyword=\"${item.keyword}\"><span class=\"number\">${index + 1}</span>${item.keyword}</li>`;\n      return html;\n    }, '<ul class=\"KeywordView\">') + \"</ul>\";\n  }\n\n  _bindClickEvent() {\n    Array.from(this.el.querySelectorAll(\"li\")).forEach(li => {\n      li.addEventListener(\"click\", e => this._onClickKeyword(e));\n    });\n  }\n\n  _onClickKeyword(e) {\n    const {\n      keyword\n    } = e.currentTarget.dataset;\n    this.emit(\"@click\", {\n      keyword\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/KeywordView.js?");

/***/ }),

/***/ "./src/views/ResultView.js":
/*!*********************************!*\
  !*** ./src/views/ResultView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n //TODO : 파일을 로딩할 수 있도록 웹팩 로더 설정을 추가하라\n//file-loader나 url-loader\n\nclass ResultView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this.messages = {\n      NO_RESULT: \"검색 결과가 없습니다\"\n    };\n  }\n\n  mount(data = []) {\n    this.el.innerHTML = `<div class=\"ResultView\">\n      ${data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT}\n    </div>`;\n    this.show();\n  }\n\n  getSearchResultsHtml(data) {\n    return data.reduce((html, item) => {\n      html += this.getSearchItemHtml(item);\n      return html;\n    }, \"<ul>\") + \"</ul>\";\n  }\n\n  getSearchItemHtml(item) {\n    return `<li>\n      <img src=\"${item.image}\" onerror=\"this.src='src/images/default-image.jpg'\"/>\n      <p>${item.name}</p>\n    </li>`;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/ResultView.js?");

/***/ }),

/***/ "./src/views/TabView.js":
/*!******************************!*\
  !*** ./src/views/TabView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\nclass TabView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this.mount();\n    this.bindEvents();\n  }\n\n  mount() {\n    this.el.innerHTML = `<ul class=\"TabView\">\n      <li>추천 검색어</li>\n      <li>최근 검색어</li>\n    </ul>`;\n  }\n\n  get tabItems() {\n    return Array.from(this.el.children[0].children);\n  }\n\n  bindEvents() {\n    this.tabItems.forEach(li => {\n      li.addEventListener(\"click\", () => this.onClick(li.innerHTML));\n    });\n  }\n\n  onClick(tabName) {\n    this.setActiveTab(tabName);\n    this.emit(\"@change\", {\n      tabName\n    });\n  }\n\n  setActiveTab(tabName) {\n    this.tabItems.forEach(li => {\n      li.className = li.innerHTML === tabName ? \"active\" : \"\";\n    });\n    this.show();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/TabView.js?");

/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n  constructor(el) {\n    if (!el) throw el;\n    this.el = el;\n    return this;\n  }\n\n  on(event, handler) {\n    this.el.addEventListener(event, handler);\n    return this;\n  }\n\n  emit(event, data) {\n    const evt = new CustomEvent(event, {\n      detail: data\n    });\n    this.el.dispatchEvent(evt);\n    return this;\n  }\n\n  hide() {\n    this.el.style.display = \"none\";\n    return this;\n  }\n\n  show() {\n    this.el.style.display = \"\";\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/views/View.js?");

/***/ })

/******/ });