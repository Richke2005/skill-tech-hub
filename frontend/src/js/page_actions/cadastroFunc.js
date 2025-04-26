const UserService = require('../services/userServices');

const userService = new UserService();

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpf = document.getElementById('cpf');
const areasOfInterest = document.querySelectorAll('.form-check-input');
const button = document.getElementById('cadButton');



button.addEventListener('click', async() => {
    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        cpf: cpf.value,
        areas_of_interest: []
    }

    areasOfInterest.forEach((area) => {
        if (area.checked) {
            data.areas_of_interest.push(area.value);
        }
    });
    
    const response = await userService.postData(data);
    
    if (response) {
        alert('Usuário cadastrado com sucesso');
        window.location.href = './login_funcionario.html';
    } else {
        alert('Erro ao cadastrar usuário');
    }
});
