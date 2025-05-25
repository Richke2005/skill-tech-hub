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

/***/ "./src/js/page_actions/catalogoCurso.js":
/*!**********************************************!*\
  !*** ./src/js/page_actions/catalogoCurso.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

  eval("const AreaService = __webpack_require__(/*! ../services/areaServices.js */ \"./src/js/services/areaServices.js\");\nconst CurseService = __webpack_require__(/*! ../services/curseServices.js */ \"./src/js/services/curseServices.js\");\n\nconst areaService = new AreaService();\nconst curseService = new CurseService();\n\nwindow.onload = async () => {\n    const data = await areaService.getCursesByArea();\n    const div = document.getElementById('areas');\n    renderCatalog(div, data);\n}\n\nfunction renderCatalog(div, data){\n    div.innerHTML = '';\n    data.forEach(element => {\n        const curses = element.curses;\n        const areaDiv = document.createElement('div');\n        areaDiv.className = 'area';\n        const titleDiv = document.createElement('div');\n        titleDiv.className = 'titleView';\n        const curseView = document.createElement('div');\n        curseView.className = 'curseView';\n\n        titleDiv.innerHTML = `<h2>${element.name}</h2> <p>${element.desc}</p>`;\n        div.appendChild(areaDiv);\n        areaDiv.appendChild(titleDiv);\n        areaDiv.appendChild(curseView);\n\n        curses.forEach(curse => {\n            const curseCard = document.createElement('div');\n            curseCard.id = curse._id;\n            curseCard.className = 'card';\n            curseCard.style = 'width: 18rem; margin: 10px;';\n            curseCard.innerHTML = `<img src='${curse.img}' class='card-img-top' alt='...'>`;\n            const cardBody = document.createElement('div');\n            cardBody.className = 'card-body';\n            cardBody.style = 'font-family: lemon_milk;';\n   cardBody.innerHTML = `<h5 class=\"card-title\">${curse.title}</h5><p class=\"card-text\">${curse.desc}</p><a href=\"${curse.title === 'Elétrônica Digital' ? `./eletronica_digital.html?id=${curse._id}` : curse.title === 'Elétric Circuits' ? `./electric_circuits.html?id=${curse._id}` : curse.title === 'CLP schneider' ? `./clp_schneider.html?id=${curse._id}` : curse.title === 'Robótic Kuka' ? `./robotic_kuka.html?id=${curse._id}` : curse.title === 'Robótic Yaskawa' ? `./robotic_yaskawa.html?id=${curse._id}` : curse.title === 'Torno mecanico' ? `./torno_mecanico.html?id=${curse._id}` : curse.title === 'Inventor' ? `./inventor.html?id=${curse._id}` : './moduloscurso.html?id=${curse._id}'}\" id=\"${curse._id}\" class=\"btn btn-outline-dark\">Acessar curso</a>`;                                                   \n            curseView.appendChild(curseCard);\n  curseCard.appendChild(cardBody);\n        });\n    });\n}\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/page_actions/catalogoCurso.js?");
  /***/ }),
  




  
  /***/ "./src/js/services/areaServices.js":
  /*!*****************************************!*\
    !*** ./src/js/services/areaServices.js ***!
    \*****************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass AreaService extends Service{\n    constructor(){\n        super('areas');\n    }\n\n    async getCursesByArea(){\n        const response = await fetch(`${this.url}/curses`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            mode: 'cors'\n        });\n        return response.json();\n    }\n}\n\nmodule.exports = AreaService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/areaServices.js?");
  
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
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/js/page_actions/catalogoCurso.js");
  /******/ 	
  /******/ })()
  ;
  
  // Função para renderizar o catálogo de cursos
  function renderCatalog(curses) {
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = ''; // Limpa o conteúdo anterior

    curses.forEach(curse => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${curse.title}</h5>
                    <p class="card-text">${curse.desc}</p>
                    <a href="" id="${curse._id}" class="btn btn-outline-dark">Acessar curso</a>
                </div>
            </div>
        `;
        catalogContainer.appendChild(card);

        const goSomewhereButton = card.querySelector('.btn');

        // Definindo o link padrão
        let linkHref = `../src/pages/moduloscurso.html?id=${curse._id}`;

        // Redirecionamentos específicos para cada curso
        if (curse.title === 'Elétrônica Digital') {
            linkHref = `./src/pages/eletronica_digital.html?id=${curse._id}`;
        } else if (curse.title === 'Elétric Circuits') {
            linkHref = `./src/pages/eletronica_digital.html?id=${curse._id}`;
        } else if (curse.title === 'CLP Schneider') {
            linkHref = `./src/pages/clp_schneider.html?id=${curse._id}`;
        } else if (curse.title === 'Robótic Kuka') {
            linkHref = `./src/pages/robotic_kuka.html?id=${curse._id}`;
        } else if (curse.title === 'Robótica Yaskawa') {
            linkHref = `./src/pages/robotic_yaskawa.html?id=${curse._id}`;
        } else if (curse.title === 'Torno Mecânico') {
            linkHref = `./src/pages/torno_mecanico.html?id=${curse._id}`;
        } else if (curse.title === 'Autodesk Inventor') {
            linkHref = `./src/pages/inventor.html?id=${curse._id}`;
        }

        // Atribuindo o link corrigido ao botão
        goSomewhereButton.href = linkHref;

        
    });
}

  /*function renderCatalog(curses) {
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = ''; // Limpa o conteúdo anterior
  
    curses.forEach(curse => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${curse.title}</h5>
                    <p class="card-text">${curse.desc}</p>
                    <a href="" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>
                </div>
            </div>
        `;
        catalogContainer.appendChild(card);
  
        const goSomewhereButton = card.querySelector('.btn');
        let linkHref = `../src/pages/moduloscurso.html?id=${curse._id}`;

if (curse.title === 'Elétronica Digital') {
    linkHref = `./src/pages/eletronica_digital.html?id=${curse._id}`;
} else if (curse.title === 'Elétric Circuits') {
    linkHref = `./src/pages/eletronica_digital.html?id=${curse._id}`;
} else if (curse.title === 'CLP schneider') {
    linkHref = `./src/pages/clp_schneider.html?id=${curse._id}`;
} else if (curse.title === 'Robótic Kuka') {
    linkHref = `./src/pages/robotic_kuka.html?id=${curse._id}`;
}

        goSomewhereButton.href = linkHref;
    });
  }*/
  
  // Função para buscar os cursos (simulação)
  /*async function fetchCatalog() {
    try {
        // Simulação de dados do servidor
        const mockCurses = [
            { _id: '1', title: 'Introdução à Robótica', desc: 'Um curso introdutório para iniciantes.' },
            { _id: '2', title: 'Elétric Circuits', desc: 'Aprenda sobre circuitos elétricos básicos.' },
            { _id: '3', title: 'Elétrônica Digital', desc: 'Explore o mundo da eletrônica digital.' },
            { _id: '4', title: 'CLP Schneider', desc: 'Domine a programação de CLPs Schneider.' },
            { _id: '5', title: 'Robótic Kuka', desc: 'Trabalhe com robôs industriais Kuka.' },
            { _id: '6', title: 'Outro Curso', desc: 'Descrição de outro curso.' },
        ];
        renderCatalog(mockCurses);
    } catch (error) {
        console.error('Erro ao buscar o catálogo:', error);
        document.getElementById('catalog-container').innerHTML = '<p>Erro ao carregar o catálogo de cursos.</p>';
    }
  }
  
  // Carrega o catálogo quando a página é carregada
  document.addEventListener('DOMContentLoaded', fetchCatalog);*/