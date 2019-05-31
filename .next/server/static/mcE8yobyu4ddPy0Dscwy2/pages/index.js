module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W+0S");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("H/sG");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_api_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("bv8N");
/* harmony import */ var _components_MoviePoster__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("vOzc");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("oTOh");


















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "generate_posters", function () {
      var posters = [];

      for (var a in _this.state.popular_movies) {
        posters.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MoviePoster__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
          meta: _this.state.popular_movies[a],
          key: a
        }));
      }

      return posters;
    });

    _this.state = {
      popular_movies: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var query = {
        sort_by: "popularity.desc",
        api_key: _config_api_js__WEBPACK_IMPORTED_MODULE_14__[/* api */ "a"].key
      };
      query = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify(query);
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_config_api_js__WEBPACK_IMPORTED_MODULE_14__[/* api */ "a"].base + 'discover/movie?' + query).then(function (res) {
        _this2.setState({
          popular_movies: res.data.results
        });

        console.log(_this2.state.popular_movies);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "movie_posters"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "title"
      }, "Popular Movies"), this.generate_posters())));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bv8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
var api = {
  "key": "c23cc4db88ee77e42325b4fba9d030ed",
  "base": "https://api.themoviedb.org/3/",
  "urls": {
    "popular": "/discover/movie?sort_by=popularity.desc/"
  }
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hiMN":
/***/ (function(module, exports) {



/***/ }),

/***/ "hzN+":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oTOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hiMN");
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_scss__WEBPACK_IMPORTED_MODULE_8__);










var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Nav, _Component);

  function Nav(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Nav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Nav).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Nav, [{
    key: "search_redirect",
    value: function search_redirect() {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/search');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: "video",
        className: "video_icon"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/discover"
      }, "Discover")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchBar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: "search"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/search');
        }
      })))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vOzc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_movie_poster_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hzN+");
/* harmony import */ var _styles_movie_poster_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_poster_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);












var MoviePoster =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(MoviePoster, _Component);

  function MoviePoster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MoviePoster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(MoviePoster).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "view_movie", function (id) {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/movie/' + id);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MoviePoster, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "movie_poster"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flip-card-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flip-card-front"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://image.tmdb.org/t/p/w200".concat(this.props.meta.poster_path)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flip-card-back",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/movie/' + _this2.props.meta.id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "movie_title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, this.props.meta.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rating"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: "star",
        className: "star"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
        className: "rating_avg"
      }, this.props.meta.vote_average)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "overview"
      }, this.props.meta.overview))));
    }
  }]);

  return MoviePoster;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MoviePoster);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });