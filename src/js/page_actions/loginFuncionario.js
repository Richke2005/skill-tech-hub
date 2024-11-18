const UserService = require('../services/userServices');

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
                window.location.href = "http://localhost:5500/src/pages/home.html";
                sessionStorage.setItem('user_id', JSON.stringify(userData[0]._id));
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
});