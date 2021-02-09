module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/sell.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateProduct; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n\nvar _jsxFileName = \"/Users/ericsmith/Documents/courses/Advanced-React/sick-fits/frontend/components/CreateProduct.js\";\n\nfunction CreateProduct() {\n  const {\n    inputs,\n    handleChange,\n    clearForm\n  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    name: 'Tingz',\n    price: 342567,\n    description: 'Tingz be poppin off'\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"name\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        id: \"name\",\n        placeholder: \"Name\",\n        value: inputs.name,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"price\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        id: \"price\",\n        name: \"price\",\n        placeholder: \"price\",\n        value: inputs.price,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: clearForm\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanM/ZTA1MCJdLCJuYW1lcyI6WyJDcmVhdGVQcm9kdWN0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwidXNlRm9ybSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULEdBQXdCO0FBRW5DLFFBQUs7QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkM7QUFBeEIsTUFBc0NDLDREQUFPLENBQUM7QUFDL0NDLFFBQUksRUFBRSxPQUR5QztBQUUvQ0MsU0FBSyxFQUFFLE1BRndDO0FBRy9DQyxlQUFXLEVBQUU7QUFIa0MsR0FBRCxDQUFsRDtBQU1BLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBLDZCQUNJO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxZQUFJLEVBQUMsTUFGVDtBQUdJLFVBQUUsRUFBQyxNQUhQO0FBSUksbUJBQVcsRUFBQyxNQUpoQjtBQUtJLGFBQUssRUFBRU4sTUFBTSxDQUFDSSxJQUxsQjtBQU1JLGdCQUFRLEVBQUVIO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQSw2QkFDSTtBQUNJLFlBQUksRUFBQyxRQURUO0FBRUksVUFBRSxFQUFDLE9BRlA7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLG1CQUFXLEVBQUMsT0FKaEI7QUFLSSxhQUFLLEVBQUVELE1BQU0sQ0FBQ0ssS0FMbEI7QUFNSSxnQkFBUSxFQUFFSjtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFxQkk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5QkgiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKXtcbiAgICBcbiAgICBjb25zdHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSB9ID0gdXNlRm9ybSh7XG4gICAgICAgIG5hbWU6ICdUaW5neicsXG4gICAgICAgIHByaWNlOiAzNDI1NjcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGluZ3ogYmUgcG9wcGluIG9mZicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnIFxuICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZScgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJyBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJpY2UnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICBpZD0ncHJpY2UnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ncHJpY2UnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Y2xlYXJGb3JtfT48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction useForm(initial = {}) {\n  //create a state object for our inputs\n  const {\n    0: inputs,\n    1: setInputs\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial); //handle change here, pass to input\n\n  function handleChange(e) {\n    //lets descructure some properties of our input we care about from e.target\n    let {\n      value,\n      name,\n      type\n    } = e.target;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    }\n\n    if (type === 'file') {\n      value[0] = e.targer.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n      [name]: value\n    }));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));\n    setInputs(blankState);\n  } //return the things we want to surface from this custom hook\n\n\n  return {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXNlRm9ybS5qcz9mMGUyIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJuYW1lIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwidGFyZ2VyIiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxPQUFPLEdBQUcsRUFBM0IsRUFBOEI7QUFDekM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUNILE9BQUQsQ0FBcEMsQ0FGeUMsQ0FJekM7O0FBQ0EsV0FBU0ksWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckI7QUFDQSxRQUFJO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQXdCSCxDQUFDLENBQUNJLE1BQTlCOztBQUVBLFFBQUdELElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRixXQUFLLEdBQUdJLFFBQVEsQ0FBQ0osS0FBRCxDQUFoQjtBQUNIOztBQUVELFFBQUdFLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQ2ZGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0QsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQXBCO0FBQ0g7O0FBRURWLGFBQVMsaUNBQ0ZELE1BREU7QUFFTCxPQUFDTSxJQUFELEdBQVNEO0FBRkosT0FBVDtBQUlIOztBQUVELFdBQVNPLFNBQVQsR0FBb0I7QUFDaEJYLGFBQVMsQ0FBQ0YsT0FBRCxDQUFUO0FBQ0g7O0FBRUQsV0FBU2MsU0FBVCxHQUFvQjtBQUNoQixVQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVqQixNQUFmLEVBQXVCa0IsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDQyxHQUFELEVBQU1kLEtBQU4sQ0FBRCxLQUFrQixDQUFDYyxHQUFELEVBQU0sRUFBTixDQUE3QyxDQUFuQixDQUFuQjtBQUNBbEIsYUFBUyxDQUFDYSxVQUFELENBQVQ7QUFDSCxHQTlCd0MsQ0FnQ3pDOzs7QUFDQSxTQUFPO0FBQ0hkLFVBREc7QUFFSEcsZ0JBRkc7QUFHSFMsYUFIRztBQUlIQztBQUpHLEdBQVA7QUFNSCIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KXtcbiAgICAvL2NyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICAgIC8vaGFuZGxlIGNoYW5nZSBoZXJlLCBwYXNzIHRvIGlucHV0XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy9sZXRzIGRlc2NydWN0dXJlIHNvbWUgcHJvcGVydGllcyBvZiBvdXIgaW5wdXQgd2UgY2FyZSBhYm91dCBmcm9tIGUudGFyZ2V0XG4gICAgICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGUgPT09ICdudW1iZXInKXtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZSA9PT0gJ2ZpbGUnKXtcbiAgICAgICAgICAgIHZhbHVlWzBdID0gZS50YXJnZXIuZmlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbnB1dHMoeyBcbiAgICAgICAgICAgIC4uLmlucHV0cyxcbiAgICAgICAgICAgIFtuYW1lXSA6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgICAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJGb3JtKCl7XG4gICAgICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKSk7XG4gICAgICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgICB9XG5cbiAgICAvL3JldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZSBmcm9tIHRoaXMgY3VzdG9tIGhvb2tcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dHMsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgcmVzZXRGb3JtLFxuICAgICAgICBjbGVhckZvcm1cbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SellPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ \"./components/CreateProduct.js\");\n\nvar _jsxFileName = \"/Users/ericsmith/Documents/courses/Advanced-React/sick-fits/frontend/pages/sell.js\";\n\nfunction SellPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWxsLmpzP2UxNDAiXSwibmFtZXMiOlsiU2VsbFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFDOUIsc0JBQ0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0giLCJmaWxlIjoiLi9wYWdlcy9zZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxsUGFnZSgpe1xuICAgIHJldHVybihcbiAgICAgICAgPENyZWF0ZVByb2R1Y3QgLz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sell.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });