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

/***/ "./src/js/page_actions/home.js":
/*!*************************************!*\
  !*** ./src/js/page_actions/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const CurseService = __webpack_require__(/*! ../services/curseServices */ \"./src/js/services/curseServices.js\");\nconst Userservice = __webpack_require__(/*! ../services/userServices */ \"./src/js/services/userServices.js\");\n\nconst curseService = new CurseService();\nconst userService = new Userservice();\n\nconst slideContainer = document.querySelector('.carousel-inner');\nconst myCursesContainer = document.querySelector('.active-courses');\n\nwindow.onload = async () => {\n    try{\n    const data = await curseService.getCursesLimiting();\n    const user = await userService.getUserCurses(getUrlParameter('id'));\n    const user_id = sessionStorage.getItem('user_id');\n    if( !user_id || user_id == \"null\"){\n        sessionStorage.setItem('user_id', getUrlParameter('id'));\n    }\n    renderNews(slideContainer, data);\n    renderMyCurses(myCursesContainer, user[0].curses);\n    }catch(error){\n        console.error(error);\n    }\n}\n\nfunction renderNews(father, newsCurses){\n    father.innerHTML = '';\n    newsCurses.forEach((curse, i) => {\n        const slide = document.createElement('div');\n        const caption = document.createElement('div');\n        slide.className = 'carousel-item';\n        if(i === 0)\n            slide.className = 'carousel-item active';\n        slide.innerHTML = `<img src=\"${curse.img}\" class=\"d-block w-100\" alt=\"...\">`;\n        caption.className = 'carousel-caption d-none d-md-block';\n        caption.innerHTML = `<h5>${curse.title}</h5><p>${curse.desc}</p>`;\n        slide.appendChild(caption);\n        father.appendChild(slide);\n    });\n}\n\nfunction renderMyCurses(father, myCurses){\n    father.innerHTML = '';\n    myCurses.forEach((curse) => {\n        const curseCard = document.createElement('div');\n        const cardBody = document.createElement('div');\n        curseCard.id = curse._id;\n        curseCard.className = 'card';\n        curseCard.style = 'width: 18rem; margin: 20px;'\n        curseCard.innerHTML = `<img src=\"${curse.img}\" class=\"card-img-top\" alt=\"...\">`;\n        cardBody.className = 'card-body';\n        cardBody.style = 'font-family: lemon_milk;';\n        cardBody.innerHTML = `<h5 class=\"card-title\">${curse.title}</h5>\n        <p class=\"card-text\">${curse.desc}</p>\n        <a href=\"./curse_page.html/${curse._id}\" id=\"${curse._id}\" class=\"btn btn-outline-dark\">Go somewhere</a>`;\n        curseCard.appendChild(cardBody);\n        father.appendChild(curseCard);\n    });\n}\n\nfunction getUrlParameter(name) { \n    const urlParams = new URLSearchParams(window.location.search); \n    return urlParams.get(name); \n} \n \n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/home.js?");

/***/ }),

/***/ "./src/js/services/curseServices.js":
/*!******************************************!*\
  !*** ./src/js/services/curseServices.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass CurseService extends Service{\n    constructor(){\n        super('curses');\n    }\n\n    async getCursesLimiting(){\n        const response = await fetch(`${this.url}/home`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            mode: 'cors'\n        });\n        return response.json();\n    }\n}\n\nmodule.exports = CurseService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/curseServices.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/page_actions/home.js");
/******/ 	
/******/ })()
;