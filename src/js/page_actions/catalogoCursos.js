const CurseService = require('../services/curseServices.js');

const curseService = new CurseService();

const button = document.getElementById('show');

button.addEventListener('click', async () => {
    const data = await enterpriseService.getAllData();
    const div = document.getElementById('data');
    console.log(data);
    renderData(div, data);
});