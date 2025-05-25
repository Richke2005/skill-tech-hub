/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/services/curseServices.js":
/*!******************************************!*\
  !*** ./src/js/services/curseServices.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Service = __webpack_require__(/*! ./service */ "./src/js/services/service.js");

class CurseService extends Service{
    constructor(){
        super('curses');
    }

    async getCursesLimiting(){
        const response = await fetch(`${this.url}/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = CurseService;

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/***/ ((module) => {

class Service {
    #entity;
    url;

    /**
     * Construtor da classe Service.
     * @param {string} entity - A entidade para a qual o serviço será utilizado.
     */
    constructor(entity) {
        this.#entity = entity;
        this.url = `http://127.0.0.1:3001/skilltech/api/v1/${this.#entity}`;
    }

    /**
     * Obtém todos os dados da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getAllData() {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Obtém os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getDataById(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Envia dados para a entidade.
     * @param {Object} data - Os dados a serem enviados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async postData(data) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Atualiza os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @param {Object} data - Os dados a serem atualizados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async putData(id, data) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Deleta uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async deleteData(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = Service;

/***/ }),

/***/ "./src/js/services/userServices.js":
/*!*****************************************!*\
  !*** ./src/js/services/userServices.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Service = __webpack_require__(/*! ./service */ "./src/js/services/service.js");

class UserService extends Service {
    constructor() {
        super('users'); // <- isso assume que o endpoint do backend é "/users"
    }

    async getUserByAuth(email) {
        const response = await fetch(`${this.url}/search?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async getUserCurses(id) {
        const response = await fetch(`${this.url}/${id}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /*async postData(data) {
        try {
            const response = await fetch(`${this.url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'cors'
            });

            const responseData = await response.json();

            if (!response.ok) {
                return { success: false, ...responseData };
            }

            return { success: true, ...responseData };
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            return { success: false, message: 'Erro de conexão com o servidor.' };
        }
    }*/
   async postData(data) {
  try {
    const response = await fetch(`http://localhost:3001/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return response.ok
      ? { success: true, ...result }
      : { success: false, ...result };

  } catch (error) {
    return { success: false, message: 'Erro de conexão com o servidor.' };
  }
}


}

module.exports = UserService;
/*const Service = require('./service');

class UserService extends Service{
    constructor(){
        super('users');
    }

    async getUserByAuth(email){
        const response = await fetch(`${this.url}/search?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async getUserCurses(id){
        const response = await fetch(`${this.url}/${id}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = UserService;*/

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/js/page_actions/home.js ***!
  \*************************************/
const CurseService = __webpack_require__(/*! ../services/curseServices */ "./src/js/services/curseServices.js");
const Userservice = __webpack_require__(/*! ../services/userServices */ "./src/js/services/userServices.js");

const curseService = new CurseService();
const userService = new Userservice();

const slideContainer = document.querySelector('.carousel-inner');
const myCursesContainer = document.querySelector('.active-courses');

window.onload = async () => {
    try{
    const data = await curseService.getCursesLimiting();
    const user = await userService.getUserCurses(getUrlParameter('id'));
    const user_id = sessionStorage.getItem('user_id');
    if( !user_id || user_id == "null"){
        sessionStorage.setItem('user_id', getUrlParameter('id'));
    }
    renderNews(slideContainer, data);
    renderMyCurses(myCursesContainer, user[0].curses);
    }catch(error){
        console.error(error);
    }
}

function renderNews(father, newsCurses){
    father.innerHTML = '';
    newsCurses.forEach((curse, i) => {
        const slide = document.createElement('div');
        const caption = document.createElement('div');
        slide.className = 'carousel-item';
        if(i === 0)
            slide.className = 'carousel-item active';
        slide.innerHTML = `<img src="${curse.img}" class="d-block w-100" alt="...">`;
        caption.className = 'carousel-caption d-none d-md-block';
        caption.innerHTML = `<h5>${curse.title}</h5><p>${curse.desc}</p>`;
        slide.appendChild(caption);
        father.appendChild(slide);
    });
}

function renderMyCurses(father, myCurses){
    father.innerHTML = '';
    myCurses.forEach((curse) => {
        const curseCard = document.createElement('div');
        const cardBody = document.createElement('div');
        curseCard.id = curse._id;
        curseCard.className = 'card';
        curseCard.style = 'width: 18rem; margin: 20px;'
        curseCard.innerHTML = `<img src="${curse.img}" class="card-img-top" alt="...">`;
        cardBody.className = 'card-body';
        cardBody.style = 'font-family: lemon_milk;';
        cardBody.innerHTML = `<h5 class="card-title">${curse.title}</h5>
        <p class="card-text">${curse.desc}</p>
        <a href="./curse_page.html/${curse._id}" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>`;
        curseCard.appendChild(cardBody);
        father.appendChild(curseCard);
    });
}

function getUrlParameter(name) { 
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name); 
} 
 
})();

/******/ })()
;
//# sourceMappingURL=homeBundle.js.map