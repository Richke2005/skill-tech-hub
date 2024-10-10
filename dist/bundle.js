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

eval("\n//Importando as classes dos serviços\nconst EnterpriseService = __webpack_require__(/*! ../services/enterpriseServices.js */ \"./src/js/services/enterpriseServices.js\");\nconst CurseService = __webpack_require__(/*! ../services/curseServices.js */ \"./src/js/services/curseServices.js\");\nconst InstructorService = __webpack_require__(/*! ../services/instructorServices.js */ \"./src/js/services/instructorServices.js\");\nconst UserService = __webpack_require__(/*! ../services/userservices.js */ \"./src/js/services/userservices.js\");\n\n//Instânciando os serviços necessários para a requisição\nconst enterpriseService = new EnterpriseService();\nconst curseService = new CurseService();\nconst instructorService = new InstructorService();\nconst userService = new UserService();\n\n\n\nconst button = document.getElementById('show');\n\nbutton.addEventListener('click', async () => {\n    const data = await enterpriseService.getAllData();\n    const div = document.getElementById('data');\n    console.log(data);\n    renderData(div, data);\n})\n\nfunction renderData(div, data){\n    div.innerHTML = '';\n    data.forEach(element => {\n        div.innerHTML += `\n            <div>\n                <p>${element.name}</p>\n                <p>${element.email}</p>\n                <p>${element.location.city}</p>\n            </div>`\n    });\n}\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/index.js?");

/***/ }),

/***/ "./src/js/services/curseServices.js":
/*!******************************************!*\
  !*** ./src/js/services/curseServices.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass CurseService extends Service{\n    constructor(){\n        super('curses');\n    }\n}\n\nmodule.exports = CurseService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/curseServices.js?");

/***/ }),

/***/ "./src/js/services/enterpriseServices.js":
/*!***********************************************!*\
  !*** ./src/js/services/enterpriseServices.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass EnterpriseService extends Service{\n    constructor(){\n        super('enterprises');\n    }\n}\n\nmodule.exports = EnterpriseService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/enterpriseServices.js?");

/***/ }),

/***/ "./src/js/services/instructorServices.js":
/*!***********************************************!*\
  !*** ./src/js/services/instructorServices.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass InstructorService extends Service{\n    constructor(){\n        super('instructors');\n    }\n}\n\nmodule.exports = InstructorService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/instructorServices.js?");

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/***/ ((module) => {

eval("class Service {\r\n    #entity;\r\n    #url;\r\n    constructor(entity){\r\n        this.#entity = entity;\r\n        this.#url = `http://192.168.0.10:3001/skilltech/api/v1/${this.#entity}`;\r\n    }\r\n\r\n    async getAllData(){\r\n        const response = await fetch(this.#url, {\r\n            method: 'GET',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    async getDataById(id){\r\n        const response = await fetch(`${this.#url}/${id}`, {\r\n            method: 'GET',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    async postData(data){\r\n        const response = await fetch(this.#url, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors',\r\n            body: JSON.stringify(data)\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    async putData(id, data){\r\n        const response = await fetch(`${this.#url}/${id}`, {\r\n            method: 'PUT',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors',\r\n            body: JSON.stringify(data)\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    async deleteData(id){\r\n        const response = await fetch(`${this.#url}/${id}`, {\r\n            method: 'DELETE',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n}\r\n\r\nmodule.exports = Service;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/service.js?");

/***/ }),

/***/ "./src/js/services/userservices.js":
/*!*****************************************!*\
  !*** ./src/js/services/userservices.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass UserService extends Service{\n    constructor(){\n        super('users');\n    }\n}\n\nmodule.exports = UserService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/userservices.js?");

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