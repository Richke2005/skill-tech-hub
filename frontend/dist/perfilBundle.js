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

/***/ "./src/js/page_actions/perfil.js":
/*!***************************************!*\
  !*** ./src/js/page_actions/perfil.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const UserService = __webpack_require__(/*! ../services/userServices */ \"./src/js/services/userServices.js\");\n\nconst userService = new UserService();\n\nconst resume = document.getElementById('resume');\nconst personalInfo = document.getElementById('personal-info');\nconst socialMidia = document.getElementById('social-midia');\n\n\n\nwindow.onload = async () => {\n    try{\n        const id = sessionStorage.getItem('user_id');\n        const user = await userService.getDataById(id);\n        renderResume(resume, user);\n        renderPersonalInfo(personalInfo, user);\n        renderSocialMidia(socialMidia, user);\n    }catch(error){\n        console.error(error);\n    }\n}\n\nfunction renderResume(father, data){\n    father.innerHTML = '';\n    const cardFlex = document.createElement('div');\n    const image = document.createElement('img');\n    const mt3 = document.createElement('div');\n    cardFlex.className = 'd-flex flex-column align-items-center text-center';\n\n    image.src = data.img;\n    image.className = 'rounded-circle';\n    image.width = '150';\n    image.alt = 'Admin';\n    \n    var areasIterest = '';\n    data.areas_of_interest.forEach((area, i) => {\n        if(!(i === data.areas_of_interest.length - 1))\n            areasIterest += `${area}, `;\n        else\n        areasIterest += `${area}.`;\n    }); \n\n    mt3.className = 'mt-3';\n    mt3.innerHTML = `<h4>${data.name}</h4>\n    <p class=\"text-secondary mb-1\">${data.enterprise.name}</p>\n    <p class=\"text-muted font-size-sm\">${areasIterest}</p>\n    <button class=\"btn btn-primary\">Follow</button>\n    <button class=\"btn btn-outline-primary\">Message</button>`;\n    \n    cardFlex.appendChild(image);\n    cardFlex.appendChild(mt3);\n    father.appendChild(cardFlex);\n}\n\nfunction renderPersonalInfo(father, data){\n    father.innerHTML = '';\n    const row1 = document.createElement('div');\n    const coilName = document.createElement('div');\n    const coilName2 = document.createElement('div');\n\n    row1.className = 'row';\n    coilName.className = 'col-sm-3';\n    coilName2.className = 'col-sm-9 text-secondary';\n\n    coilName.innerHTML = `<h6 class=\"mb-0\">Full Name</h6>`;\n    coilName2.innerHTML = `${data.name}`;\n    row1.appendChild(coilName);\n    row1.appendChild(coilName2);\n\n    father.appendChild(row1);\n\n    const row2 = document.createElement('div');\n    const coilEmail = document.createElement('div');\n    const colEmail2 = document.createElement('div');\n\n    row2.className = 'row';\n    coilEmail.className = 'col-sm-3';\n    colEmail2.className = 'col-sm-9 text-secondary';\n\n    coilEmail.innerHTML = `<h6 class=\"mb-0\">Email</h6>`;\n    colEmail2.innerHTML = `${data.email}`;\n    row2.appendChild(coilEmail);\n    row2.appendChild(colEmail2);\n\n    father.appendChild(row2);\n\n    const row3 = document.createElement('div');\n    const coilAddress = document.createElement('div');\n    const coilAddress2 = document.createElement('div');\n\n    row3.className = 'row';\n    coilAddress.className = 'col-sm-3';\n    coilAddress2.className = 'col-sm-9 text-secondary';\n\n    coilAddress.innerHTML = `<h6 class=\"mb-0\">Address</h6>`;\n    coilAddress2.innerHTML = `${data.address.street}`;\n    row3.appendChild(coilAddress);\n    row3.appendChild(coilAddress2);\n\n    father.appendChild(row3);\n}\n\nfunction renderSocialMidia(father, data){\n    father.innerHTML = '';\n    const ul = document.createElement('ul');\n    ul.className = 'list-group list-group-flush';\n    \n    data.social_midias.forEach((socialMidia) => {\n        const li = document.createElement('li');\n        const h6 = document.createElement('h6');\n        const span = document.createElement('span');\n\n        li.className = 'list-group-item d-flex justify-content-between align-items-center flex-wrap';\n        h6.className = 'mb-0';\n        span.className = 'text-secondary';\n\n        h6.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"24\" \n        height=\"24\" \n        viewBox=\"0 0 24 24\" \n        fill=\"none\" \n        stroke=\"currentColor\" \n        stroke-width=\"2\" \n        stroke-linecap=\"round\" \n        stroke-linejoin=\"round\" \n        class=\"feather \n        feather-globe mr-2 icon-inline\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\">\n        </circle>\n        <line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\">\n        </line>\n        <path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\">\n        </path></svg>\n        ${socialMidia.name}`;\n\n        span.innerHTML = `<a href=${socialMidia.url}>${socialMidia.name}</a>`;\n\n        li.appendChild(h6);\n        li.appendChild(span);\n        \n        ul.appendChild(li);\n    });\n    father.appendChild(ul);\n}\n\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/perfil.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/page_actions/perfil.js");
/******/ 	
/******/ })()
;