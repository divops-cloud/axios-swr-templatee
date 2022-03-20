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
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/data.ts":
/*!***************************!*\
  !*** ./pages/api/data.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"default\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// awaits stripe tokens and redirects to portal api urls\nconst data = [\n    'Password1/Redirectlink1',\n    'Password2/Redirectlink2',\n    'Password3/Redirectlink3',\n    'Password4/Redirect1ink4', \n];\nfunction api(req, res) {\n    if (req.query.cookie) {\n        // a slow endpoint for getting repo data\n        axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.github.com/repos/${req.query.cookie}`).then((response)=>response.data\n        ).then((data1)=>{\n            setTimeout(()=>{\n                res.json(data1);\n            }, 2000);\n        });\n        return;\n    }\n    setTimeout(()=>{\n        res.json(data);\n    }, 2000);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lCO0FBRXpCLEVBQXdEO0FBQ2pELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDbkIsQ0FBeUI7SUFDekIsQ0FBeUI7SUFDekIsQ0FBeUI7SUFDekIsQ0FBeUI7QUFDM0IsQ0FBQztBQUVjLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFLENBQUM7SUFDdEUsRUFBRSxFQUFFRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxFQUFFLENBQUM7UUFDckIsRUFBd0M7UUFDeENOLDRDQUFLLEVBQUUsNkJBQTZCLEVBQUVHLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLElBQ25EQyxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDUCxJQUFJO1VBQzlCTSxJQUFJLEVBQUNOLEtBQUksR0FBSSxDQUFDO1lBQ2JRLFVBQVUsS0FBTyxDQUFDO2dCQUNoQkwsR0FBRyxDQUFDTSxJQUFJLENBQUNULEtBQUk7WUFDZixDQUFDLEVBQUUsSUFBSTtRQUNULENBQUM7UUFFSCxNQUFNO0lBQ1IsQ0FBQztJQUNEUSxVQUFVLEtBQU8sQ0FBQztRQUNoQkwsR0FBRyxDQUFDTSxJQUFJLENBQUNULElBQUk7SUFDZixDQUFDLEVBQUUsSUFBSTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heGlvcy1zd3IvLi9wYWdlcy9hcGkvZGF0YS50cz9lZDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBhd2FpdHMgc3RyaXBlIHRva2VucyBhbmQgcmVkaXJlY3RzIHRvIHBvcnRhbCBhcGkgdXJsc1xuZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gICdQYXNzd29yZDEvUmVkaXJlY3RsaW5rMScsXG4gICdQYXNzd29yZDIvUmVkaXJlY3RsaW5rMicsXG4gICdQYXNzd29yZDMvUmVkaXJlY3RsaW5rMycsXG4gICdQYXNzd29yZDQvUmVkaXJlY3QxaW5rNCcsXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLnF1ZXJ5LmNvb2tpZSkge1xuICAgIC8vIGEgc2xvdyBlbmRwb2ludCBmb3IgZ2V0dGluZyByZXBvIGRhdGFcbiAgICBheGlvcyhgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcS5xdWVyeS5jb29raWV9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzLmpzb24oZGF0YSlcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH0pXG5cbiAgICByZXR1cm5cbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZXMuanNvbihkYXRhKVxuICB9LCAyMDAwKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGF0YSIsImFwaSIsInJlcSIsInJlcyIsInF1ZXJ5IiwiY29va2llIiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/data.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/data.ts"));
module.exports = __webpack_exports__;

})();