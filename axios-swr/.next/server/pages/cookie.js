"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cookie";
exports.ids = ["pages/cookie"];
exports.modules = {

/***/ "./pages/cookie.js":
/*!*************************!*\
  !*** ./pages/cookie.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * This sets `cookie` on `res` object\n */ const cookie = (res, name, value, options = {})=>{\n    const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);\n    if ('maxAge' in options) {\n        options.expires = new Date(Date.now() + options.maxAge);\n        options.maxAge /= 1000;\n    }\n    res.setHeader('Set-Cookie', (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(name, String(stringValue), options));\n};\n/**\n * Adds `cookie` function on `res.cookie` to set cookies for response\n */ const cookies = (handler)=>(req, res)=>{\n        res.cookie = (name, value, options)=>cookie(res, name, value, options)\n        ;\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb29raWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBRWxDLEVBRUc7O0NBQUEsR0FDSCxLQUFLLENBQUNDLE1BQU0sSUFBSUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbEQsS0FBSyxDQUFDQyxXQUFXLEdBQ2YsTUFBTSxDQUFDRixLQUFLLEtBQUssQ0FBUSxVQUFHLENBQUksTUFBR0csSUFBSSxDQUFDQyxTQUFTLENBQUNKLEtBQUssSUFBSUssTUFBTSxDQUFDTCxLQUFLO0lBRXpFLEVBQUUsRUFBRSxDQUFRLFdBQUlDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCQSxPQUFPLENBQUNLLE9BQU8sR0FBRyxHQUFHLENBQUNDLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxHQUFHLEtBQUtQLE9BQU8sQ0FBQ1EsTUFBTTtRQUN0RFIsT0FBTyxDQUFDUSxNQUFNLElBQUksSUFBSTtJQUN4QixDQUFDO0lBRURYLEdBQUcsQ0FBQ1ksU0FBUyxDQUFDLENBQVksYUFBRWQsaURBQVMsQ0FBQ0csSUFBSSxFQUFFTSxNQUFNLENBQUNILFdBQVcsR0FBR0QsT0FBTztBQUMxRSxDQUFDO0FBRUQsRUFFRzs7Q0FBQSxHQUNILEtBQUssQ0FBQ1UsT0FBTyxJQUFJQyxPQUFPLElBQU1DLEdBQUcsRUFBRWYsR0FBRyxHQUFLLENBQUM7UUFDMUNBLEdBQUcsQ0FBQ0QsTUFBTSxJQUFJRSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxHQUFLSixNQUFNLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU87O1FBRXZFLE1BQU0sQ0FBQ1csT0FBTyxDQUFDQyxHQUFHLEVBQUVmLEdBQUc7SUFDekIsQ0FBQzs7QUFFRCxpRUFBZWEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2F4aW9zLXN3ci8uL3BhZ2VzL2Nvb2tpZS5qcz9kNTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ2Nvb2tpZSdcblxuLyoqXG4gKiBUaGlzIHNldHMgYGNvb2tpZWAgb24gYHJlc2Agb2JqZWN0XG4gKi9cbmNvbnN0IGNvb2tpZSA9IChyZXMsIG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3Qgc3RyaW5nVmFsdWUgPVxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyAnajonICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogU3RyaW5nKHZhbHVlKVxuXG4gIGlmICgnbWF4QWdlJyBpbiBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG9wdGlvbnMubWF4QWdlKVxuICAgIG9wdGlvbnMubWF4QWdlIC89IDEwMDBcbiAgfVxuXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpemUobmFtZSwgU3RyaW5nKHN0cmluZ1ZhbHVlKSwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogQWRkcyBgY29va2llYCBmdW5jdGlvbiBvbiBgcmVzLmNvb2tpZWAgdG8gc2V0IGNvb2tpZXMgZm9yIHJlc3BvbnNlXG4gKi9cbmNvbnN0IGNvb2tpZXMgPSAoaGFuZGxlcikgPT4gKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5jb29raWUgPSAobmFtZSwgdmFsdWUsIG9wdGlvbnMpID0+IGNvb2tpZShyZXMsIG5hbWUsIHZhbHVlLCBvcHRpb25zKVxuXG4gIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb29raWVzIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsImNvb2tpZSIsInJlcyIsIm5hbWUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzdHJpbmdWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsIm1heEFnZSIsInNldEhlYWRlciIsImNvb2tpZXMiLCJoYW5kbGVyIiwicmVxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cookie.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cookie.js"));
module.exports = __webpack_exports__;

})();