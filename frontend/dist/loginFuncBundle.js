/******/ (() => { // webpackBootstrap
/*!*************************************************!*\
  !*** ./src/js/page_actions/loginFuncionario.js ***!
  \*************************************************/
// loginFuncionario.js

// Aguarda o DOM estar totalmente carregado
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado. Script loginFuncionario.js funcionando corretamente.");

  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!form) {
    console.error("Formulário de login não encontrado (id='login-form').");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao fazer login.");
        return;
      }

      const userId = data?._id;
      if (!userId) {
        alert("ID do usuário não encontrado na resposta.");
        return;
      }

      // Armazena o ID do usuário localmente
      sessionStorage.setItem("user_id", userId);
      localStorage.setItem("loggedUserId", userId);

      alert("Login realizado com sucesso!");
      window.location.href = "./perfil.html";

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro de rede ao tentar fazer login.");
    }
  });
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
/******/ })()
;
//# sourceMappingURL=loginFuncBundle.js.map