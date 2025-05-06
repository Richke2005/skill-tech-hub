const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('loginButton');

button.addEventListener('click', async () => {
  const emailText = email.value;
  const passwordText = password.value;

  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailText,
        password: passwordText
      })
    });

    const data = await response.json();

    if (response.ok) {
      // Redireciona se login for bem-sucedido
      window.location.href = `http://localhost:5500/src/pages/home.html?id=${encodeURIComponent(data._id)}`;
    } else {
      alert(data.message || "Erro ao fazer login.");
    }
  } catch (err) {
    console.error("Erro na requisição:", err);
    alert("Erro de conexão com o servidor.");
  }
});

/*const UserService = require('../services/userServices');
const userService = new UserService();

const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('loginButton');

button.addEventListener('click', async ()=>{
    const emailText = email.value;
    const passwordText = password.value;

    userService.getUserByAuth(emailText).then((userData)=>{
        if(userData.length != 0 && userData[0] != undefined){
            if(userData[0].email == emailText && userData[0].password == passwordText){
                const id = userData[0]._id;
                window.location.href = `http://localhost:5500/src/pages/home.html?id=${encodeURIComponent(id)}`;
            }else{
                window.alert("email or password incorrect");
            }
        }else{
            window.alert("User not finded");
        }
    }).catch((error)=>{
        window.alert("Connection error");
        console.error(error);
    });
});*/