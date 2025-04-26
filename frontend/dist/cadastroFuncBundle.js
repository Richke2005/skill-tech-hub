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

/***/ "./src/js/page_actions/cadastroFunc.js":
/*!*********************************************!*\
  !*** ./src/js/page_actions/cadastroFunc.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const UserService = __webpack_require__(/*! ../services/userServices */ \"./src/js/services/userServices.js\");\n\nconst userService = new UserService();\n\nconst name = document.getElementById('name');\nconst email = document.getElementById('email');\nconst password = document.getElementById('password');\nconst cpf = document.getElementById('cpf');\nconst areasOfInterest = document.querySelectorAll('.form-check-input');\nconst button = document.getElementById('cadButton');\n\n\n\nbutton.addEventListener('click', async() => {\n    const data = {\n        name: name.value,\n        email: email.value,\n        password: password.value,\n        cpf: cpf.value,\n        areas_of_interest: []\n    }\n\n    areasOfInterest.forEach((area) => {\n        if (area.checked) {\n            data.areas_of_interest.push(area.value);\n        }\n    });\n    \n    const response = await userService.postData(data);\n    \n    if (response) {\n        alert('Usuário cadastrado com sucesso');\n        window.location.href = './login_funcionario.html';\n    } else {\n        alert('Erro ao cadastrar usuário');\n    }\n});\n\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/cadastroFunc.js?");

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/***/ ((module) => {

eval("class Service {\r\n    #entity;\r\n    url;\r\n\r\n    /**\r\n     * Construtor da classe Service.\r\n     * @param {string} entity - A entidade para a qual o serviço será utilizado.\r\n     */\r\n    constructor(entity) {\r\n        this.#entity = entity;\r\n        this.url = `http://127.0.0.1:3001/skilltech/api/v1/${this.#entity}`;\r\n    }\r\n\r\n    /**\r\n     * Obtém todos os dados da entidade.\r\n     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.\r\n     */\r\n    async getAllData() {\r\n        const response = await fetch(this.url, {\r\n            method: 'GET',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    /**\r\n     * Obtém os dados de uma entidade específica pelo ID.\r\n     * @param {string} id - O ID da entidade.\r\n     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.\r\n     */\r\n    async getDataById(id) {\r\n        const response = await fetch(`${this.url}/${id}`, {\r\n            method: 'GET',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    /**\r\n     * Envia dados para a entidade.\r\n     * @param {Object} data - Os dados a serem enviados.\r\n     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.\r\n     */\r\n    async postData(data) {\r\n        const response = await fetch(this.url, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors',\r\n            body: JSON.stringify(data)\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    /**\r\n     * Atualiza os dados de uma entidade específica pelo ID.\r\n     * @param {string} id - O ID da entidade.\r\n     * @param {Object} data - Os dados a serem atualizados.\r\n     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.\r\n     */\r\n    async putData(id, data) {\r\n        const response = await fetch(`${this.url}/${id}`, {\r\n            method: 'PUT',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors',\r\n            body: JSON.stringify(data)\r\n        });\r\n        return response.json();\r\n    }\r\n\r\n    /**\r\n     * Deleta uma entidade específica pelo ID.\r\n     * @param {string} id - O ID da entidade.\r\n     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.\r\n     */\r\n    async deleteData(id) {\r\n        const response = await fetch(`${this.url}/${id}`, {\r\n            method: 'DELETE',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            mode: 'cors'\r\n        });\r\n        return response.json();\r\n    }\r\n}\r\n\r\nmodule.exports = Service;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/service.js?");

/***/ }),

/***/ "./src/js/services/userServices.js":
/*!*****************************************!*\
  !*** ./src/js/services/userServices.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass UserService extends Service{\n    constructor(){\n        super('users');\n    }\n\n    async getUserByAuth(email){\n        const response = await fetch(`${this.url}/search?email=${email}`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            mode: 'cors'\n        });\n        return response.json();\n    }\n\n    async getUserCurses(id){\n        const response = await fetch(`${this.url}/${id}/curses`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            mode: 'cors'\n        });\n        return response.json();\n    }\n}\n\nmodule.exports = UserService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/userServices.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/page_actions/cadastroFunc.js");
/******/ 	
/******/ })()
;