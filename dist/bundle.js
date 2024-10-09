/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/page_actions/index.js":
/*!**************************************!*\
  !*** ./src/js/page_actions/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const EnterpriseService = __webpack_require__(/*! ../services/enterpriseService.js */ \"./src/js/services/enterpriseService.js\");\n\nconst enterpriseService = new EnterpriseService();\n\nenterpriseService.getAllData().then((response) => console.log(response));\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/index.js?");

/***/ }),

/***/ "./src/js/services/enterpriseService.js":
/*!**********************************************!*\
  !*** ./src/js/services/enterpriseService.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass EnterpriseService extends Service{\n    constructor(){\n        super('enterprises');\n    }\n}\n\nmodule.exports = EnterpriseService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/enterpriseService.js?");

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/***/ ((module) => {

eval("class Service {\r\n    #entity;\r\n    #url;\r\n    constructor(entity){\r\n        this.#entity = entity;\r\n        this.#url = `http://192.168.0.10:3001/skilltech/api/v1/${this.#entity}`;\r\n    }\r\n\r\n    async getAllData(){\r\n        const response = await fetch(this.#url, {\r\n            method: 'GET',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n}\r\n\r\nmodule.exports = Service;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/page_actions/index.js");
/******/ 	
/******/ })()
;