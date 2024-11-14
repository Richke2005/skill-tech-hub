const UserService = require('../services/userServices');

const userService = new UserService();

const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('loginButton');


button.addEventListener('click', async ()=>{
    const emailText = email.value;
    const passwordText = password.value;

    const userData = await userService.getAllData();
    if(userData.length != 0){
        if(userData[0].email == emailText && userData[0].password == passwordText){
            window.location.href = "http://localhost:5500/src/pages/catalogo.html";
        }else{
            window.alert("User not finded");
        }
    }else{
        window.alert("User not finded");
    }
})