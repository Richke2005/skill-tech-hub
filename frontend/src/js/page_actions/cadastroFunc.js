const UserService = require('../services/userServices');

const userService = new UserService();

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpf = document.getElementById('cpf');
const areasOfInterest = document.querySelectorAll('.form-check-input');
const button = document.getElementById('cadButton');

button.addEventListener('click', async () => {
  const data = {
    nome: name.value,
    email: email.value,
    password: password.value,
    cpf: cpf.value,
    areas_of_interest: []
  };

  areasOfInterest.forEach((area) => {
    if (area.checked) {
      data.areas_of_interest.push(area.value);
    }
  });

  const response = await userService.postData(data);

  if (response.success) {
  alert(response.message || 'Usuário cadastrado com sucesso!');
  window.location.href = '../pages/login_funcionario.html';
} else {
  if (response.erros && Array.isArray(response.erros)) {
    alert("Erros encontrados:\n" + response.erros.join('\n'));
  } else {
    alert(response.message || 'Erro ao cadastrar. Verifique os dados.');
  }
}

});

/*button.addEventListener('click', async () => {
  const data = {
    nome: name.value,
    email: email.value,
    password: password.value,
    cpf: cpf.value,
    areas_of_interest: []
  };

  areasOfInterest.forEach((area) => {
    if (area.checked) {
      data.areas_of_interest.push(area.value);
    }
  });

  try {
    const response = await userService.postData(data);

    if (response && response.message === 'Usuário criado com sucesso!') {
      alert(response.message);
      window.location.href = '../pages/login_funcionario.html';
    } else if (response && response.erros) {
      alert("Erros encontrados:\n" + response.erros.join('\n'));
    } else {
      alert('Erro ao cadastrar usuário. Verifique os dados.');
    }
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    alert('Erro de conexão com o servidor.');
  }
});*/




/*const UserService = require('../services/userServices');

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
});*/
