"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/locations",{

/***/ "./src/pages/locations.jsx":
/*!*********************************!*\
  !*** ./src/pages/locations.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Locations = function(param) {\n    var results = param.results;\n    console.log(results.results_returned);\n    console.log(results.shop[0].photo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"card\",\n            children: results.shop.map(function(shop) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"shop\",\n                            children: shop.name\n                        }, void 0, false, {\n                            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"access\",\n                            children: shop.access\n                        }, void 0, false, {\n                            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"open\",\n                            children: shop.open\n                        }, void 0, false, {\n                            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"photo\",\n                            src: shop.photo.pc.m,\n                            width: 300,\n                            height: 300,\n                            alt: \"image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, shop.id, true, {\n                    fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Locations;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Locations);\nvar _c;\n$RefreshReg$(_c, \"Locations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9jYXRpb25zLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRTlCLElBQU1DLFlBQVk7UUFBR0MsZ0JBQUFBO0lBQ25CQyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLGdCQUFnQjtJQUNwQ0YsUUFBUUMsR0FBRyxDQUFDRixRQUFRSSxJQUFJLENBQUMsRUFBRSxDQUFDQyxLQUFLO0lBR2pDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFHQyxXQUFVO3NCQUNYUCxRQUFRSSxJQUFJLENBQUNJLEdBQUcsQ0FBQ0osU0FBQUE7cUNBQ2hCLDhEQUFDSzs7c0NBRUMsOERBQUNDOzRCQUFFSCxXQUFVO3NDQUFRSCxLQUFLTyxJQUFJOzs7Ozs7c0NBQzlCLDhEQUFDRDs0QkFBRUgsV0FBVTtzQ0FBVUgsS0FBS1EsTUFBTTs7Ozs7O3NDQUNsQyw4REFBQ0Y7NEJBQUVILFdBQVU7c0NBQVFILEtBQUtTLElBQUk7Ozs7OztzQ0FDOUIsOERBQUNmLG1EQUFLQTs0QkFBQ1MsV0FBVTs0QkFBUU8sS0FBS1YsS0FBS0MsS0FBSyxDQUFDVSxFQUFFLENBQUNDLENBQUM7NEJBQUVDLE9BQU87NEJBQUtDLFFBQVE7NEJBQUtDLEtBQUs7Ozs7Ozs7bUJBTHRFZixLQUFLZ0IsRUFBRTs7Ozs7Ozs7Ozs7O0FBWTFCO0tBckJNckI7O0FBdUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2NhdGlvbnMuanN4Pzg5YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgTG9jYXRpb25zID0gKHsgcmVzdWx0cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc3VsdHMucmVzdWx0c19yZXR1cm5lZCk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdHMuc2hvcFswXS5waG90byk7XG5cblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIHtyZXN1bHRzLnNob3AubWFwKHNob3AgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Nob3AuaWR9PlxuICAgICAgICAgICAgey8qIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXt3aGVyZWFib3V0LmltYWdlfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cImljb24taW1nXCIvPiAqL31cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNob3BcIj57c2hvcC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY2Vzc1wiPntzaG9wLmFjY2Vzc308L3A+ICBcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wZW5cIj57c2hvcC5vcGVufTwvcD5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJwaG90b1wiIHNyYz17c2hvcC5waG90by5wYy5tfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gYWx0PXtcImltYWdlXCJ9Lz5cbiAgICAgICAgICA8L2xpPikpfVxuICAgICAgPC91bD5cbiAgICBcbiAgICA8Lz5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25zO1xuXG4vL+OCsOODq+ODoeOCteODvOODgWFwaeOBi+OCieODh+ODvOOCv+OBruWPluW+l1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKGNvbnRleHQpID0+e1xuXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dVUlVNRVNFQVJDSF9BUElfS0VZO1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL3dlYnNlcnZpY2UucmVjcnVpdC5jby5qcC9ob3RwZXBwZXIvZ291cm1ldC92MS9cIjtcbiAgY29uc3QgbGF0aXR1ZGUgPSBjb250ZXh0LnF1ZXJ5LmxhdGl0dWRlO1xuICBjb25zdCBsb25naXR1ZGUgPSBjb250ZXh0LnF1ZXJ5LmxvbmdpdHVkZTtcbiAgY29uc3QgcmFuZ2UgPSBjb250ZXh0LnF1ZXJ5LnJhbmdlO1xuICBjb25zdCBmb3JtYXQgPSBcImpzb25cIjsgLy8g44OV44Kp44O844Oe44OD44OISlNPTuOCkuaMh+WumlxuXG4gIC8vIOWklumDqEFQSeOBi+OCieODh+ODvOOCv+OCkkZldGNoXG4gIHRyeXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2Jhc2VVcmx9P2tleT0ke2FwaUtleX0mbGF0PSR7bGF0aXR1ZGV9JmxuZz0ke2xvbmdpdHVkZX0mcmFuZ2U9JHtyYW5nZX0mZm9ybWF0PSR7Zm9ybWF0fWBcbiAgICApO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0ganNvbjtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IHJlc3VsdHMgfSB9O1xuICB9Y2F0Y2goZSl7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTG9jYXRpb25zIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzX3JldHVybmVkIiwic2hvcCIsInBob3RvIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJsaSIsInAiLCJuYW1lIiwiYWNjZXNzIiwib3BlbiIsInNyYyIsInBjIiwibSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/locations.jsx\n"));

/***/ })

});