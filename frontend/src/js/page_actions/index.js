//Importando as classes dos serviços
const EnterpriseService = require('../services/enterpriseServices.js');
const CurseService = require('../services/curseServices.js');
const InstructorService = require('../services/instructorServices.js');
const UserService = require('../services/userServices.js');
const AreaService = require('../services/areaServices.js');

//Instânciando os serviços necessários para a requisição
const enterpriseService = new EnterpriseService();
const curseService = new CurseService();
const instructorService = new InstructorService();
const userService = new UserService();
const areaService = new AreaService();



const button = document.getElementById('show');

button.addEventListener('click', async () => {
    const data = await areaService.getCursesByArea();
    const div = document.getElementById('data');
    console.log(data);
    renderData(div, data);
})

function renderData(div, data){
    div.innerHTML = '';
    data.forEach(element => {
        div.innerHTML += `
            <div>
                <p>${element.name}</p>
                <p>${element.email}</p>
                <p>${element.location.city}</p>
            </div>`
    });
}