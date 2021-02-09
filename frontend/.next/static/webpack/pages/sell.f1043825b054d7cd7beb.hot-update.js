webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Users_ericsmith_Documents_courses_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ericsmith_Documents_courses_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  //create a state object for our inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1]; //handle change here, pass to input\n\n\n  function handleChange(e) {\n    //lets descructure some properties of our input we care about from e.target\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_ericsmith_Documents_courses_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  } //return the things we want to surface from this custom hook\n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUE4QjtBQUFBOztBQUFBLE1BQWJDLE9BQWEsdUVBQUgsRUFBRzs7QUFDekM7QUFEeUMsa0JBRWJDLHNEQUFRLENBQUNELE9BQUQsQ0FGSztBQUFBLE1BRWxDRSxNQUZrQztBQUFBLE1BRTFCQyxTQUYwQixpQkFJekM7OztBQUNBLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3JCO0FBRHFCLG9CQUVPQSxDQUFDLENBQUNDLE1BRlQ7QUFBQSxRQUVmQyxLQUZlLGFBRWZBLEtBRmU7QUFBQSxRQUVSQyxJQUZRLGFBRVJBLElBRlE7QUFBQSxRQUVGQyxJQUZFLGFBRUZBLElBRkU7O0FBSXJCLFFBQUdBLElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNIOztBQUVESixhQUFTLGlDQUNGRCxNQURFLHdNQUVKTSxJQUZJLEVBRUlELEtBRkosR0FBVDtBQUlILEdBakJ3QyxDQW1CekM7OztBQUNBLFNBQU87QUFDSEwsVUFBTSxFQUFOQSxNQURHO0FBRUhFLGdCQUFZLEVBQVpBO0FBRkcsR0FBUDtBQUlIOztHQXhCdUJMLE8iLCJmaWxlIjoiLi9saWIvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSl7XG4gICAgLy9jcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XG5cbiAgICAvL2hhbmRsZSBjaGFuZ2UgaGVyZSwgcGFzcyB0byBpbnB1dFxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIC8vbGV0cyBkZXNjcnVjdHVyZSBzb21lIHByb3BlcnRpZXMgb2Ygb3VyIGlucHV0IHdlIGNhcmUgYWJvdXQgZnJvbSBlLnRhcmdldFxuICAgICAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldElucHV0cyh7IFxuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW25hbWVdIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9yZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRzLFxuICAgICAgICBoYW5kbGVDaGFuZ2VcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})