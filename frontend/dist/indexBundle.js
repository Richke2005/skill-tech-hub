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

/***/ "./src/js/animations/sliderEffect.js":
/*!*******************************************!*\
  !*** ./src/js/animations/sliderEffect.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const AreaService = __webpack_require__(/*! ../services/areaServices.js */ \"./src/js/services/areaServices.js\");\n\nconst areaService = new AreaService();\n\n\n\nwindow.onload = async() => {\n  try{\n    let slide_data = [];\n    const areas = await areaService.getAllData();\n    areas.forEach(area => {\n        slide_data.push({\n            src: area.img,\n            title: area.name,\n            copy: area.desc\n        })\n    });\n\n    let slides = [],\n    captions = [];\n\n    let autoplay = setInterval(function(){\n      nextSlide();\n    },5000);\n    let container = document.getElementById('container');\n    let leftSlider = document.getElementById('left-col');\n    // console.log(leftSlider);\n    let down_button = document.getElementById('down_button');\n    // let caption = document.getElementById('slider-caption');\n    // let caption_heading = caption.querySelector('caption-heading');\n\n    down_button.addEventListener('click',function(e){\n      e.preventDefault();\n      clearInterval(autoplay);\n      nextSlide();\n      autoplay;\n    });\n\n    for (let i = 0; i< slide_data.length; i++){\n      let slide = document.createElement('div'),\n          caption = document.createElement('div'),\n          slide_title = document.createElement('div');\n        \n      slide.classList.add('slide');\n      slide.setAttribute('style','background:url('+slide_data[i].src+')');\n      caption.classList.add('caption');\n      slide_title.classList.add('caption-heading');\n      slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';\n      \n      switch(i){\n        case 0:\n            slide.classList.add('current');\n            caption.classList.add('current-caption');\n            break;\n        case 1:\n            slide.classList.add('next');\n            caption.classList.add('next-caption');\n            break;\n        case slide_data.length -1:\n          slide.classList.add('previous');\n          caption.classList.add('previous-caption');\n          break;\n        default:\n          break;       \n      }\n      caption.appendChild(slide_title);\n      caption.insertAdjacentHTML('beforeend','<div class=\"caption-subhead\"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');\n      slides.push(slide);\n      captions.push(caption);\n      leftSlider.appendChild(slide);\n      container.appendChild(caption);\n    }\n    // console.log(slides);\n\n    function nextSlide(){\n      // caption.classList.add('offscreen');\n      \n      slides[0].classList.remove('current');\n      slides[0].classList.add('previous','change');\n      slides[1].classList.remove('next');\n      slides[1].classList.add('current');\n      slides[2].classList.add('next');\n      let last = slides.length -1;\n      slides[last].classList.remove('previous');\n      \n      captions[0].classList.remove('current-caption');\n      captions[0].classList.add('previous-caption','change');\n      captions[1].classList.remove('next-caption');\n      captions[1].classList.add('current-caption');\n      captions[2].classList.add('next-caption');\n      let last_caption = captions.length -1;\n      \n      // console.log(last);\n      captions[last].classList.remove('previous-caption');\n      \n      let placeholder = slides.shift();\n      let captions_placeholder = captions.shift();\n      slides.push(placeholder); \n      captions.push(captions_placeholder);\n    }\n\n    let heading = document.querySelector('.caption-heading');\n\n\n    // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/\n    function whichTransitionEvent(){\n      var t,\n          el = document.createElement(\"fakeelement\");\n\n      var transitions = {\n        \"transition\"      : \"transitionend\",\n        \"OTransition\"     : \"oTransitionEnd\",\n        \"MozTransition\"   : \"transitionend\",\n        \"WebkitTransition\": \"webkitTransitionEnd\"\n      }\n\n      for (t in transitions){\n        if (el.style[t] !== undefined){\n          return transitions[t];\n        }\n      }\n    }\n\n  }catch(err){\n    window.alert('Error loading page');\n  }\n}\n\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/animations/sliderEffect.js?");

/***/ }),

/***/ "./src/js/services/areaServices.js":
/*!*****************************************!*\
  !*** ./src/js/services/areaServices.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Service = __webpack_require__(/*! ./service */ \"./src/js/services/service.js\");\n\nclass AreaService extends Service{\n    constructor(){\n        super('areas');\n    }\n\n    async getCursesByArea(){\n        const response = await fetch(`${this.url}/curses`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            mode: 'cors'\n        });\n        return response.json();\n    }\n}\n\nmodule.exports = AreaService;\n\n//# sourceURL=webpack://skill-tech-hub/./src/js/services/areaServices.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/animations/sliderEffect.js");
/******/ 	
/******/ })()
;