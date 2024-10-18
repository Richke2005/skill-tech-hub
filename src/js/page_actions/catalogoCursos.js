const AreaService = require('../services/areaServices.js');
const CurseService = require('../services/curseServices.js');

const areaService = new AreaService();
const curseService = new CurseService();

window.onload = async () => {
    const data = await areaService.getCursesByArea();
    const div = document.getElementById('areas');
    console.log(data);
    renderCatalog(div, data);
}

function renderCatalog(div, data){
    div.innerHTML = '';
    data.forEach(element => {
        const curses = element.curses;
        const areaDiv = document.createElement('div');
        areaDiv.className = 'area';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'titleView';
        const curseView = document.createElement('div');
        curseView.className = 'curseView';

        titleDiv.innerHTML = `<h2>${element.name}</h2> <p>${element.desc}</p>`;
        div.appendChild(areaDiv);
        areaDiv.appendChild(titleDiv);
        areaDiv.appendChild(curseView);

        curses.forEach(curse => {
            const curseDiv = document.createElement('div');
            curseDiv.className = 'curse';
            curseDiv.innerHTML = `<h3>${curse.title}</h3> <p>${curse.desc}</p>`;
            curseView.appendChild(curseDiv);
        });
    });
}