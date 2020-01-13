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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/yolki.svg */ \"./src/assets/yolki.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./assets/office.svg */ \"./src/assets/office.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n}\\n#map {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  width: 100%;\\n}\\n.point {\\n  background-size: cover;\\n  width: 50px;\\n  height: 50px;\\n  cursor: pointer;\\n  opacity: 0.8;\\n  transition: opacity 100ms ease-in-out;\\n}\\n\\n.tree {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.office {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.point.selected {\\n  width: 30px;\\n  height: 30px;\\n}\\n\\n.point:hover {\\n  opacity: 1;\\n}\\n\\n.car {\\n  width: 50px;\\n}\\n\\n.hide {\\n  visibility: hidden;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

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
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/car.svg":
/*!****************************!*\
  !*** ./src/assets/car.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f4ffa1f51039b8c5e51b527658535b8a.svg\");\n\n//# sourceURL=webpack:///./src/assets/car.svg?");

/***/ }),

/***/ "./src/assets/office.svg":
/*!*******************************!*\
  !*** ./src/assets/office.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d30478ae6b30ddd03fbfdee910ed98f3.svg\");\n\n//# sourceURL=webpack:///./src/assets/office.svg?");

/***/ }),

/***/ "./src/assets/yolki.svg":
/*!******************************!*\
  !*** ./src/assets/yolki.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"013a92de16ec95e266d1cbe3970f6fc3.svg\");\n\n//# sourceURL=webpack:///./src/assets/yolki.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_car_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/car.svg */ \"./src/assets/car.svg\");\n/* harmony import */ var _js_drawRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/drawRoute */ \"./src/js/drawRoute.js\");\n/* harmony import */ var _js_animateChunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/animateChunk */ \"./src/js/animateChunk.js\");\n/* harmony import */ var _js_breakRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/breakRoute */ \"./src/js/breakRoute.js\");\n\n\n\n\n\n\nconst origin = [30.4696164, 50.386801];\nconst treePoints = [\n  [30.477433033299803, 50.379981404067905],\n  [30.500041966855406, 50.389946840865264],\n  [30.523445704883244, 50.41274632617777]\n];\n\nmapboxgl.accessToken =\n  \"pk.eyJ1Ijoicm9tYW5ib3JvZGF0b3YiLCJhIjoiY2sxa2w3N3Y1MDdvZjNibzNveXFidWpuaSJ9.h9858JVC3HbU02hxED68eg\";\nconst map = new mapboxgl.Map({\n  container: \"map\", // container id\n  style: \"mapbox://styles/romanborodatov/ck5bi9lc90b0h1cr4zfljuqzo\", // stylesheet location\n  center: origin, // starting position [lng, lat]\n  zoom: 9 // starting zoom\n});\n\nlet route;\nlet carMarker;\nconst treesConnectionLine = turf.lineString([...treePoints]);\nconst treesBoundingBox = turf.bbox(treesConnectionLine);\n\nconst showAllTrees = () => {\n  document.querySelectorAll(\".tree\").forEach(element => {\n    element.classList.remove(\"hide\");\n    element.classList.remove(\"selected\");\n  });\n};\n\nconst animateCarAlongRoute = async route => {\n  const chunks = Object(_js_breakRoute__WEBPACK_IMPORTED_MODULE_4__[\"breakRouteInChunksWithAngle\"])(route.geometry.coordinates);\n\n  for (let i = 0; i < chunks.length; i++) {\n    await Object(_js_animateChunk__WEBPACK_IMPORTED_MODULE_3__[\"animateRouteChunk\"])(chunks[i], carMarker);\n  }\n  map.fitBounds(treesBoundingBox, { padding: 100 });\n  showAllTrees();\n};\n\n// Get route from Navigation API and draw it\nconst getRoute = destination => {\n  const start = carMarker.getLngLat();\n  const url =\n    \"https://api.mapbox.com/directions/v5/mapbox/driving/\" +\n    start.lng +\n    \",\" +\n    start.lat +\n    \";\" +\n    destination[0] +\n    \",\" +\n    destination[1] +\n    \"?steps=true&geometries=geojson&access_token=\" +\n    mapboxgl.accessToken;\n\n  fetch(url)\n    .then(res => res.json())\n    .then(async res => {\n      route = res.routes[0];\n      await Object(_js_drawRoute__WEBPACK_IMPORTED_MODULE_2__[\"drawRoute\"])(route, map);\n      animateCarAlongRoute(route);\n    });\n};\n\nconst hideInactiveTrees = activeId => {\n  const allTrees = document.querySelectorAll(\".tree\");\n\n  allTrees.forEach(treeElement => {\n    if (treeElement.id === activeId) {\n      treeElement.classList.add(\"selected\");\n    } else {\n      treeElement.classList.add(\"hide\");\n    }\n  });\n};\n\n// function to generate tree points on map with listener for click\nconst generateMarkers = () => {\n  if (!map.isZooming()) {\n    const office = document.createElement(\"div\");\n    office.classList.add(\"point\", \"office\");\n    office.addEventListener(\"click\", e => {\n      getRoute(origin);\n    });\n    new mapboxgl.Marker({ element: office, anchor: \"left\" })\n      .setLngLat(origin)\n      .addTo(map);\n\n    treePoints.map((point, index) => {\n      const element = document.createElement(\"div\");\n      element.classList.add(\"point\", \"tree\");\n      element.id = index;\n      element.addEventListener(\"click\", e => {\n        hideInactiveTrees(e.target.id);\n        getRoute(point);\n      });\n      new mapboxgl.Marker({ element: element, anchor: \"top\" })\n        .setLngLat(point)\n        .addTo(map);\n    });\n  } else {\n    setTimeout(generateMarkers, 50);\n  }\n};\n\nconst initCar = () => {\n  const carElement = document.createElement(\"img\");\n  carElement.src = _assets_car_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  carElement.classList.add(\"car\");\n  document.querySelector(\"body\").appendChild(carElement);\n  carMarker = new mapboxgl.Marker(carElement).setLngLat(origin).addTo(map);\n};\n\n// Add origin point and zoom map to show all trees when map is ready\nmap.on(\"load\", () => {\n  // disable map rotation using right click + drag\n  map.dragRotate.disable();\n\n  // disable map rotation using touch rotation gesture\n  map.touchZoomRotate.disableRotation();\n\n  map.fitBounds(treesBoundingBox, { padding: 100 });\n  generateMarkers();\n  initCar();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/animateChunk.js":
/*!********************************!*\
  !*** ./src/js/animateChunk.js ***!
  \********************************/
/*! exports provided: animateRouteChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateRouteChunk\", function() { return animateRouteChunk; });\nconst ease = ({ distance, durationMs, onStep, resolve }) => {\n  const stepCount = durationMs / 16 > 120 ? durationMs / 16 : 120;\n  const valueIncrement = distance / stepCount;\n  const sinValueIncrement = Math.PI / stepCount;\n\n  let currentValue = 0;\n  let currentSinValue = 0;\n\n  const step = () => {\n    currentSinValue += sinValueIncrement;\n    currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;\n\n    if (currentSinValue < Math.PI && currentValue < distance) {\n      onStep(currentValue);\n      requestAnimationFrame(step);\n    } else {\n      resolve();\n    }\n  };\n\n  requestAnimationFrame(step);\n};\n\nconst animateRouteChunk = (chunk, carMarker) => {\n  return new Promise(resolve => {\n    const distanceKm = turf.length(chunk.features[0].geometry, {\n      units: \"kilometers\"\n    });\n    const coeff = distanceKm > 0.8 ? 30 : 12;\n    const animationDuration = Math.round((distanceKm * 1000) / 0.0139 / coeff);\n\n    const currentMarkerPosition = carMarker.getLngLat();\n    let initialyRotated = 0;\n    const targetAngle = turf.bearing(\n      turf.point([currentMarkerPosition.lng, currentMarkerPosition.lat]),\n      turf.point(chunk.features[0].geometry.coordinates[1])\n    );\n    const currentAngle = carMarker.getRotation();\n    const delta = ((targetAngle - currentAngle + 540) % 360) - 180;\n\n    const moveMarker = distance => {\n      const oldPosition = carMarker.getLngLat();\n      const newPosition = turf.along(chunk.features[0].geometry, distance);\n      const angleToRotate = turf.bearing(\n        turf.point([oldPosition.lng, oldPosition.lat]),\n        turf.point(newPosition.geometry.coordinates)\n      );\n\n      carMarker.setLngLat(newPosition.geometry.coordinates);\n\n      if (initialyRotated <= 20) {\n        carMarker.setRotation(currentAngle + delta * 0.05 * initialyRotated);\n        initialyRotated += 1;\n      } else if (angleToRotate !== 0) {\n        carMarker.setRotation(angleToRotate);\n      }\n    };\n\n    ease({\n      distance: distanceKm,\n      durationMs: animationDuration,\n      onStep: moveMarker,\n      resolve\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./src/js/animateChunk.js?");

/***/ }),

/***/ "./src/js/breakRoute.js":
/*!******************************!*\
  !*** ./src/js/breakRoute.js ***!
  \******************************/
/*! exports provided: breakRouteInChunksWithAngle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakRouteInChunksWithAngle\", function() { return breakRouteInChunksWithAngle; });\nconst generateChunk = coordinates => {\n  return {\n    type: \"FeatureCollection\",\n    features: [\n      {\n        type: \"Feature\",\n        geometry: {\n          type: \"LineString\",\n          coordinates: coordinates\n        }\n      }\n    ]\n  };\n};\n\nconst breakRouteInChunksWithAngle = route => {\n  const chunks = [];\n\n  for (let i = 0; i < route.length; i++) {\n    const chunkCoords = [route[i]];\n    if (i === route.length - 2) {\n      chunkCoords.push(route[route.length - 1]);\n      chunks.push(generateChunk(chunkCoords));\n      break;\n    }\n    for (let n = i; n < route.length - 2; n++) {\n      const firstAngle = turf.bearing(\n        turf.point(route[n]),\n        turf.point(route[n + 1])\n      );\n      const secondAngle = turf.bearing(\n        turf.point(route[n + 1]),\n        turf.point(route[n + 2])\n      );\n\n      const delta = ((secondAngle - firstAngle + 540) % 360) - 180;\n\n      if (delta > -45 && delta < 45) {\n        chunkCoords.push(route[n + 1]);\n      } else {\n        chunkCoords.push(route[n + 1]);\n        i = n;\n        break;\n      }\n    }\n    chunks.push(generateChunk(chunkCoords));\n  }\n  return chunks;\n};\n\n\n//# sourceURL=webpack:///./src/js/breakRoute.js?");

/***/ }),

/***/ "./src/js/drawRoute.js":
/*!*****************************!*\
  !*** ./src/js/drawRoute.js ***!
  \*****************************/
/*! exports provided: drawRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawRoute\", function() { return drawRoute; });\nconst drawRoute = (route, map) => {\n  return new Promise(resolve => {\n    let currentGeojson = {\n      type: \"Feature\",\n      properties: {},\n      geometry: {\n        type: \"LineString\",\n        coordinates: []\n      }\n    };\n\n    const treesConnectionLine = turf.lineString([\n      ...route.geometry.coordinates\n    ]);\n    const treesBoundingBox = turf.bbox(treesConnectionLine);\n\n    map.fitBounds(treesBoundingBox, { padding: 100, maxZoom: 14 });\n\n    // Reset route line if it exists, otherwise create one\n    if (map.getSource(\"route\")) {\n      map.getSource(\"route\").setData(currentGeojson);\n    } else {\n      map.addLayer({\n        id: \"route\",\n        type: \"line\",\n        source: {\n          type: \"geojson\",\n          data: currentGeojson\n        },\n        layout: {\n          \"line-join\": \"round\",\n          \"line-cap\": \"round\"\n        },\n        paint: {\n          \"line-color\": \"#3887be\",\n          \"line-width\": 5,\n          \"line-opacity\": 0.5\n        }\n      });\n    }\n\n    // animation duration is duration value form Mapbox API converted to ms and speeded 20 times\n    const animationDuration = route.duration;\n    const distanceKm = route.distance / 1000;\n    const distanceIncrement = (distanceKm / animationDuration) * 10;\n\n    let passedDistance = 0;\n\n    const lineRef = map.getSource(\"route\");\n\n    //Function gets new Point along the line, draws it and increases passedDistance\n    const draw = () => {\n      const newPosition = turf.along(route.geometry, passedDistance);\n      currentGeojson.geometry.coordinates.push(\n        newPosition.geometry.coordinates\n      );\n      lineRef.setData(currentGeojson);\n\n      passedDistance = passedDistance + distanceIncrement;\n\n      if (passedDistance < distanceKm) {\n        requestAnimationFrame(draw);\n      } else {\n        resolve();\n      }\n    };\n\n    requestAnimationFrame(draw);\n  });\n};\n\n\n//# sourceURL=webpack:///./src/js/drawRoute.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ })

/******/ });