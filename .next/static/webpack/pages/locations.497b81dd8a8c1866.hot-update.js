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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Locations = function(param) {\n    var results = param.results;\n    console.log(results.results_returned);\n    console.log(results.shop.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"card\",\n            children: results.shop.map(function(shop) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"./\".concat(shop.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"shop\",\n                                children: shop.name\n                            }, void 0, false, {\n                                fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"access\",\n                                children: shop.access\n                            }, void 0, false, {\n                                fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"open\",\n                                children: shop.open\n                            }, void 0, false, {\n                                fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, shop.id, true, {\n                        fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/noji/RestaurantSearcher/restaurant-searcher-app/src/pages/locations.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Locations;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Locations);\nvar _c;\n$RefreshReg$(_c, \"Locations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9jYXRpb25zLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUU1QixJQUFNRSxZQUFZO1FBQUdDLGdCQUFBQTtJQUNuQkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRRyxnQkFBZ0I7SUFDcENGLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUUksSUFBSSxDQUFDQyxFQUFFO0lBRzNCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFHQyxXQUFVO3NCQUVUUCxRQUFRSSxJQUFJLENBQUNJLEdBQUcsQ0FBQ0osU0FBQUE7cUNBQ2hCLDhEQUFDTixrREFBSUE7b0JBQUNXLE1BQU0sS0FBYSxPQUFSTCxLQUFLQyxFQUFFOzhCQUN0Qiw0RUFBQ0s7OzBDQUNDLDhEQUFDQztnQ0FBRUosV0FBVTswQ0FBUUgsS0FBS1EsSUFBSTs7Ozs7OzBDQUM5Qiw4REFBQ0Q7Z0NBQUVKLFdBQVU7MENBQVVILEtBQUtTLE1BQU07Ozs7OzswQ0FDbEMsOERBQUNGO2dDQUFFSixXQUFVOzBDQUFRSCxLQUFLVSxJQUFJOzs7Ozs7O3VCQUh2QlYsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjlCO0tBL0JNTjs7QUFpQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvY2F0aW9ucy5qc3g/ODliNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBMb2NhdGlvbnMgPSAoeyByZXN1bHRzIH0pID0+IHtcbiAgY29uc29sZS5sb2cocmVzdWx0cy5yZXN1bHRzX3JldHVybmVkKTtcbiAgY29uc29sZS5sb2cocmVzdWx0cy5zaG9wLmlkKTtcblxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPiAqL31cbiAgICAgICAgICB7cmVzdWx0cy5zaG9wLm1hcChzaG9wID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AuLyR7c2hvcC5pZH1gfT5cbiAgICAgICAgICAgICAgPGxpIGtleT17c2hvcC5pZH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hvcFwiPntzaG9wLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY2Vzc1wiPntzaG9wLmFjY2Vzc308L3A+ICBcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGVuXCI+e3Nob3Aub3Blbn08L3A+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBob3RvXCIgXG4gICAgICAgICAgICAgICAgICBzcmM9e3Nob3AucGhvdG8ucGMubX0gXG4gICAgICAgICAgICAgICAgICBhbHQ9e1wiaW1hZ2VcIn0gXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9e1wiZmlsbFwifVxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PXtcImNvdmVyXCJ9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L0xpbms+KSl9XG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICA8L3VsPlxuICAgICAgXG4gICAgXG4gICAgPC8+XG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9ucztcblxuLy/jgrDjg6vjg6HjgrXjg7zjg4FhcGnjgYvjgonjg4fjg7zjgr/jga7lj5blvpdcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyhjb250ZXh0KSA9PntcblxuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HVVJVTUVTRUFSQ0hfQVBJX0tFWTtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly93ZWJzZXJ2aWNlLnJlY3J1aXQuY28uanAvaG90cGVwcGVyL2dvdXJtZXQvdjEvXCI7XG4gIGNvbnN0IGxhdGl0dWRlID0gY29udGV4dC5xdWVyeS5sYXRpdHVkZTtcbiAgY29uc3QgbG9uZ2l0dWRlID0gY29udGV4dC5xdWVyeS5sb25naXR1ZGU7XG4gIGNvbnN0IHJhbmdlID0gY29udGV4dC5xdWVyeS5yYW5nZTtcbiAgY29uc3QgZm9ybWF0ID0gXCJqc29uXCI7IC8vIOODleOCqeODvOODnuODg+ODiEpTT07jgpLmjIflrppcblxuICAvLyDlpJbpg6hBUEnjgYvjgonjg4fjg7zjgr/jgpJGZXRjaFxuICB0cnl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtiYXNlVXJsfT9rZXk9JHthcGlLZXl9JmxhdD0ke2xhdGl0dWRlfSZsbmc9JHtsb25naXR1ZGV9JnJhbmdlPSR7cmFuZ2V9JmZvcm1hdD0ke2Zvcm1hdH1gXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGpzb247XG5cbiAgICByZXR1cm4geyBwcm9wczogeyByZXN1bHRzIH0gfTtcbiAgfWNhdGNoKGUpe1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJMb2NhdGlvbnMiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHNfcmV0dXJuZWQiLCJzaG9wIiwiaWQiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImhyZWYiLCJsaSIsInAiLCJuYW1lIiwiYWNjZXNzIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/locations.jsx\n"));

/***/ })

});