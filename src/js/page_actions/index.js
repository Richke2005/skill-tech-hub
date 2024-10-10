const EnterpriseService = require('../services/enterpriseService.js');
const enterpriseService = new EnterpriseService();
const button = document.getElementById('show');

button.addEventListener('click', async () => {
    const data = await enterpriseService.getAllData();
    const div = document.getElementById('data');
    renderData(div, data);
})

function renderData(div, data){
    div.innerHTML = '';
    data.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element.name;
        div.appendChild(p);
    });
}