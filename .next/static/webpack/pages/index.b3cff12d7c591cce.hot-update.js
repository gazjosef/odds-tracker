"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_odds_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_odds_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_odds_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Event */ \"./components/Event.js\");\n/* harmony import */ var _components_Event2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Event2 */ \"./components/Event2.js\");\n/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Searchbar */ \"./components/Searchbar.js\");\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/data.json */ \"./data/data.json\");\n/* harmony import */ var _data_h2hData_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data/h2hData.json */ \"./data/h2hData.json\");\n/* harmony import */ var _data_spreadData_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/data/spreadData.json */ \"./data/spreadData.json\");\n/* harmony import */ var _data_totalData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/data/totalData.json */ \"./data/totalData.json\");\n/* harmony import */ var _data_upcoming_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/data/upcoming.json */ \"./data/upcoming.json\");\n/* harmony import */ var _data_upcomingMarkets_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/data/upcomingMarkets.json */ \"./data/upcomingMarkets.json\");\n\n\n// import \"dotenv/config\"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import\n// import express from \"express\";\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), events = ref[0], setEvents = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), upcoming = ref1[0], setUpcoming = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), data = ref2[0], setData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), sports = ref3[0], setSports = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), sport = ref4[0], selectSport = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), league = ref5[0], selectLeague = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), eventObject = ref6[0], setEventObject = ref6[1];\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n    // const apiKey = \"YOUR_API_KEY\";\n    var apiKey = \"0964ad4e3be969508766aef582e92012\";\n    var sportKey = \"upcoming\"; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports\n    var regions = \"us\"; // uk | us | eu | au. Multiple can be specified if comma delimited\n    var markets = \"h2h\"; // h2h | spreads | totals. Multiple can be specified if comma delimited\n    var oddsFormat = \"decimal\"; // decimal | american\n    var dateFormat = \"iso\"; // iso | unix\n    // * GET DATA\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // TEST\n        /*\n    First get a list of in-season sports\n        the sport 'key' from the response can be used to get odds in the next request\n\n*/ axios.get(\"https://api.the-odds-api.com/v4/sports\", {\n            params: {\n                apiKey: apiKey\n            }\n        }).then(function(response) {\n            console.log(response.data);\n            // Set Upcoming Events\n            setUpcoming(response.data);\n            // Check your usage\n            console.log(\"Remaining requests\", response.headers[\"x-requests-remaining\"]);\n            console.log(\"Used requests\", response.headers[\"x-requests-used\"]);\n        }).catch(function(error) {\n            console.log(\"Error status\", error.response.status);\n            console.log(error.response.data);\n        });\n        console.log(\"Axios Ran\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"useEffect - upcoming\", upcoming);\n        // SET SPORTS\n        if (upcoming && sports.length === 0) {\n            var allTitles = upcoming.map(function(event) {\n                return event.group;\n            });\n            var uniqueTitles = _toConsumableArray(new Set(allTitles));\n            setSports(uniqueTitles);\n        }\n        console.log(\"Set Sports ran\", sports);\n    }, [\n        upcoming,\n        sports.length\n    ]);\n    // * FIND ODDS\n    var findOdds = function() {\n        var _ref = _asyncToGenerator(_Users_garethhind_Documents_Github_odds_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_garethhind_Documents_Github_odds_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        /*\n    Now get a list of live & upcoming games for the sport you want, along with odds for different bookmakers\n    This will deduct from the usage quota\n    The usage quota cost = [number of markets specified] x [number of regions specified]\n    For examples of usage quota costs, see https://the-odds-api.com/liveapi/guides/v4/#usage-quota-costs\n\n*/ axios.get(\"https://api.the-odds-api.com/v4/sports/\".concat(sportKey, \"/odds\"), {\n                            params: {\n                                apiKey: apiKey,\n                                regions: regions,\n                                markets: markets,\n                                oddsFormat: oddsFormat,\n                                dateFormat: dateFormat\n                            }\n                        }).then(function(response) {\n                            // response.data.data contains a list of live and\n                            //   upcoming events and odds for different bookmakers.\n                            // Events are ordered by start time (live events are first)\n                            console.log(\"8 upcoming matches\", JSON.stringify(response.data));\n                            setEvents(JSON.stringify(response.data));\n                            // Check your usage\n                            console.log(\"Remaining requests\", response.headers[\"x-requests-remaining\"]);\n                            console.log(\"Used requests\", response.headers[\"x-requests-used\"]);\n                        }).catch(function(error) {\n                            console.log(\"Error status\", error.response.status);\n                            console.log(error.response.data);\n                        });\n                        console.warn(\"creatEventObject Completed\");\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function findOdds(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(\"upcoming\", upcoming);\n    console.log(\"events\", events);\n    // console.log(\"data\", data);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                className: \"article-display-odds\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"article-display-odds__title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Upcoming Events\"\n                        }, void 0, false, {\n                            fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"article-display-odds__events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                className: \"aside\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Searchbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    data: upcoming,\n                    sport: sport,\n                    sports: sports,\n                    findOdds: findOdds,\n                    selectSport: selectSport,\n                    selectLeague: selectLeague\n                }, void 0, false, {\n                    fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/garethhind/Documents/Github/odds-tracker/pages/index.js\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"FofmO/ipKxzTLW9wXjLZk+YOcmo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQWU7Ozs7Ozs7Ozs7O2dHQUVwQkQsQ0FBTzt3QkFBQ0YsU0FBUyxFQUFDLENBQThCOzs7Ozs7Ozs7Ozs7d0ZBS2xESSxDQUFLO2dCQUFDSixTQUFTLEVBQUMsQ0FBTztzR0FDckJ0RCw2REFBUztvQkFDUlksSUFBSSxFQUFFRixRQUFRO29CQUNkTSxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pGLE1BQU0sRUFBRUEsTUFBTTtvQkFDZGlDLFFBQVEsRUFBRUEsUUFBUTtvQkFDbEI5QixXQUFXLEVBQUVBLFdBQVc7b0JBQ3hCRSxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDLENBQUM7R0F6SXVCWixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW90ZG90bGEvZG90ZW52I2hvdy1kby1pLXVzZS1kb3RlbnYtd2l0aC1pbXBvcnRcbi8vIGltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCJAL2NvbXBvbmVudHMvRXZlbnRcIjtcbmltcG9ydCBFdmVudDIgZnJvbSBcIkAvY29tcG9uZW50cy9FdmVudDJcIjtcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hiYXJcIjtcblxuaW1wb3J0IGpzb25EYXRhIGZyb20gXCJAL2RhdGEvZGF0YS5qc29uXCI7XG5pbXBvcnQgaDJoRGF0YSBmcm9tIFwiQC9kYXRhL2gyaERhdGEuanNvblwiO1xuaW1wb3J0IHNwcmVhZERhdGEgZnJvbSBcIkAvZGF0YS9zcHJlYWREYXRhLmpzb25cIjtcbmltcG9ydCB0b3RhbERhdGEgZnJvbSBcIkAvZGF0YS90b3RhbERhdGEuanNvblwiO1xuaW1wb3J0IHVwY29taW5nRGF0YSBmcm9tIFwiQC9kYXRhL3VwY29taW5nLmpzb25cIjtcbmltcG9ydCB1cGNvbWluZ01hcmtldHMgZnJvbSBcIkAvZGF0YS91cGNvbWluZ01hcmtldHMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3VwY29taW5nLCBzZXRVcGNvbWluZ10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3BvcnRzLCBzZXRTcG9ydHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3BvcnQsIHNlbGVjdFNwb3J0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbbGVhZ3VlLCBzZWxlY3RMZWFndWVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXZlbnRPYmplY3QsIHNldEV2ZW50T2JqZWN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbiAgLy8gY29uc3QgYXBpS2V5ID0gXCJZT1VSX0FQSV9LRVlcIjtcbiAgY29uc3QgYXBpS2V5ID0gXCIwOTY0YWQ0ZTNiZTk2OTUwODc2NmFlZjU4MmU5MjAxMlwiO1xuICBjb25zdCBzcG9ydEtleSA9IFwidXBjb21pbmdcIjsgLy8gdXNlIHRoZSBzcG9ydF9rZXkgZnJvbSB0aGUgL3Nwb3J0cyBlbmRwb2ludCBiZWxvdywgb3IgdXNlICd1cGNvbWluZycgdG8gc2VlIHRoZSBuZXh0IDggZ2FtZXMgYWNyb3NzIGFsbCBzcG9ydHNcbiAgY29uc3QgcmVnaW9ucyA9IFwidXNcIjsgLy8gdWsgfCB1cyB8IGV1IHwgYXUuIE11bHRpcGxlIGNhbiBiZSBzcGVjaWZpZWQgaWYgY29tbWEgZGVsaW1pdGVkXG4gIGNvbnN0IG1hcmtldHMgPSBcImgyaFwiOyAvLyBoMmggfCBzcHJlYWRzIHwgdG90YWxzLiBNdWx0aXBsZSBjYW4gYmUgc3BlY2lmaWVkIGlmIGNvbW1hIGRlbGltaXRlZFxuICBjb25zdCBvZGRzRm9ybWF0ID0gXCJkZWNpbWFsXCI7IC8vIGRlY2ltYWwgfCBhbWVyaWNhblxuICBjb25zdCBkYXRlRm9ybWF0ID0gXCJpc29cIjsgLy8gaXNvIHwgdW5peFxuXG4gIC8vICogR0VUIERBVEFcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRFU1RcblxuICAgIC8qXG4gICAgRmlyc3QgZ2V0IGEgbGlzdCBvZiBpbi1zZWFzb24gc3BvcnRzXG4gICAgICAgIHRoZSBzcG9ydCAna2V5JyBmcm9tIHRoZSByZXNwb25zZSBjYW4gYmUgdXNlZCB0byBnZXQgb2RkcyBpbiB0aGUgbmV4dCByZXF1ZXN0XG5cbiovXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL2FwaS50aGUtb2Rkcy1hcGkuY29tL3Y0L3Nwb3J0c1wiLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFwaUtleSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIC8vIFNldCBVcGNvbWluZyBFdmVudHNcbiAgICAgICAgc2V0VXBjb21pbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIC8vIENoZWNrIHlvdXIgdXNhZ2VcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJSZW1haW5pbmcgcmVxdWVzdHNcIixcbiAgICAgICAgICByZXNwb25zZS5oZWFkZXJzW1wieC1yZXF1ZXN0cy1yZW1haW5pbmdcIl1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VkIHJlcXVlc3RzXCIsIHJlc3BvbnNlLmhlYWRlcnNbXCJ4LXJlcXVlc3RzLXVzZWRcIl0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzdGF0dXNcIiwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiQXhpb3MgUmFuXCIpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdCAtIHVwY29taW5nXCIsIHVwY29taW5nKTtcbiAgICAvLyBTRVQgU1BPUlRTXG4gICAgaWYgKHVwY29taW5nICYmIHNwb3J0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGFsbFRpdGxlcyA9IHVwY29taW5nLm1hcCgoZXZlbnQpID0+IGV2ZW50Lmdyb3VwKTtcbiAgICAgIGNvbnN0IHVuaXF1ZVRpdGxlcyA9IFsuLi5uZXcgU2V0KGFsbFRpdGxlcyldO1xuXG4gICAgICBzZXRTcG9ydHModW5pcXVlVGl0bGVzKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJTZXQgU3BvcnRzIHJhblwiLCBzcG9ydHMpO1xuICB9LCBbdXBjb21pbmcsIHNwb3J0cy5sZW5ndGhdKTtcblxuICAvLyAqIEZJTkQgT0REU1xuXG4gIGNvbnN0IGZpbmRPZGRzID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvKlxuICAgIE5vdyBnZXQgYSBsaXN0IG9mIGxpdmUgJiB1cGNvbWluZyBnYW1lcyBmb3IgdGhlIHNwb3J0IHlvdSB3YW50LCBhbG9uZyB3aXRoIG9kZHMgZm9yIGRpZmZlcmVudCBib29rbWFrZXJzXG4gICAgVGhpcyB3aWxsIGRlZHVjdCBmcm9tIHRoZSB1c2FnZSBxdW90YVxuICAgIFRoZSB1c2FnZSBxdW90YSBjb3N0ID0gW251bWJlciBvZiBtYXJrZXRzIHNwZWNpZmllZF0geCBbbnVtYmVyIG9mIHJlZ2lvbnMgc3BlY2lmaWVkXVxuICAgIEZvciBleGFtcGxlcyBvZiB1c2FnZSBxdW90YSBjb3N0cywgc2VlIGh0dHBzOi8vdGhlLW9kZHMtYXBpLmNvbS9saXZlYXBpL2d1aWRlcy92NC8jdXNhZ2UtcXVvdGEtY29zdHNcblxuKi9cblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwczovL2FwaS50aGUtb2Rkcy1hcGkuY29tL3Y0L3Nwb3J0cy8ke3Nwb3J0S2V5fS9vZGRzYCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhcGlLZXksXG4gICAgICAgICAgcmVnaW9ucyxcbiAgICAgICAgICBtYXJrZXRzLFxuICAgICAgICAgIG9kZHNGb3JtYXQsXG4gICAgICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gcmVzcG9uc2UuZGF0YS5kYXRhIGNvbnRhaW5zIGEgbGlzdCBvZiBsaXZlIGFuZFxuICAgICAgICAvLyAgIHVwY29taW5nIGV2ZW50cyBhbmQgb2RkcyBmb3IgZGlmZmVyZW50IGJvb2ttYWtlcnMuXG4gICAgICAgIC8vIEV2ZW50cyBhcmUgb3JkZXJlZCBieSBzdGFydCB0aW1lIChsaXZlIGV2ZW50cyBhcmUgZmlyc3QpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiOCB1cGNvbWluZyBtYXRjaGVzXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgc2V0RXZlbnRzKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcblxuICAgICAgICAvLyBDaGVjayB5b3VyIHVzYWdlXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiUmVtYWluaW5nIHJlcXVlc3RzXCIsXG4gICAgICAgICAgcmVzcG9uc2UuaGVhZGVyc1tcIngtcmVxdWVzdHMtcmVtYWluaW5nXCJdXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlZCByZXF1ZXN0c1wiLCByZXNwb25zZS5oZWFkZXJzW1wieC1yZXF1ZXN0cy11c2VkXCJdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc3RhdHVzXCIsIGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG5cbiAgICBjb25zb2xlLndhcm4oXCJjcmVhdEV2ZW50T2JqZWN0IENvbXBsZXRlZFwiKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhcInVwY29taW5nXCIsIHVwY29taW5nKTtcbiAgY29uc29sZS5sb2coXCJldmVudHNcIiwgZXZlbnRzKTtcbiAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kaXNwbGF5LW9kZHNcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aWNsZS1kaXNwbGF5LW9kZHNfX3RpdGxlXCI+XG4gICAgICAgICAgPGgxPlVwY29taW5nIEV2ZW50czwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aWNsZS1kaXNwbGF5LW9kZHNfX2V2ZW50c1wiPlxuICAgICAgICAgIHsvKiA8RXZlbnQyIGV2ZW50cz17ZXZlbnRzfSAvPiAqL31cbiAgICAgICAgICB7LyogPEV2ZW50IGV2ZW50T2JqZWN0PXtldmVudE9iamVjdH0gLz4gKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJhc2lkZVwiPlxuICAgICAgICA8U2VhcmNoYmFyXG4gICAgICAgICAgZGF0YT17dXBjb21pbmd9XG4gICAgICAgICAgc3BvcnQ9e3Nwb3J0fVxuICAgICAgICAgIHNwb3J0cz17c3BvcnRzfVxuICAgICAgICAgIGZpbmRPZGRzPXtmaW5kT2Rkc31cbiAgICAgICAgICBzZWxlY3RTcG9ydD17c2VsZWN0U3BvcnR9XG4gICAgICAgICAgc2VsZWN0TGVhZ3VlPXtzZWxlY3RMZWFndWV9XG4gICAgICAgIC8+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkV2ZW50IiwiRXZlbnQyIiwiU2VhcmNoYmFyIiwianNvbkRhdGEiLCJoMmhEYXRhIiwic3ByZWFkRGF0YSIsInRvdGFsRGF0YSIsInVwY29taW5nRGF0YSIsInVwY29taW5nTWFya2V0cyIsIkhvbWUiLCJldmVudHMiLCJzZXRFdmVudHMiLCJ1cGNvbWluZyIsInNldFVwY29taW5nIiwiZGF0YSIsInNldERhdGEiLCJzcG9ydHMiLCJzZXRTcG9ydHMiLCJzcG9ydCIsInNlbGVjdFNwb3J0IiwibGVhZ3VlIiwic2VsZWN0TGVhZ3VlIiwiZXZlbnRPYmplY3QiLCJzZXRFdmVudE9iamVjdCIsImF4aW9zIiwicmVxdWlyZSIsImFwaUtleSIsInNwb3J0S2V5IiwicmVnaW9ucyIsIm1hcmtldHMiLCJvZGRzRm9ybWF0IiwiZGF0ZUZvcm1hdCIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1cyIsImxlbmd0aCIsImFsbFRpdGxlcyIsIm1hcCIsImV2ZW50IiwiZ3JvdXAiLCJ1bmlxdWVUaXRsZXMiLCJTZXQiLCJmaW5kT2RkcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwibWFpbiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJzZWN0aW9uIiwiaDEiLCJhc2lkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});