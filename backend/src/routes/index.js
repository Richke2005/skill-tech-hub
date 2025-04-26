const express = require("express");
const instructorRoutes = require("./instructorRoutes.js");
const enterpriseRoutes = require("./enterpriseRoutes.js");
const curseRoutes = require("./curseRoutes.js");
const userRoutes = require("./userRoutes.js");
const areaRoutes = require("./areaRoutes.js");

const UserController = require('../controllers/userController.js');
const userControllerInstance = new UserController();
/*router.post('/redefinir-senha', usuarioController.redefinirSenha);*/
console.log(UserController); // Adicione esta linha

module.exports = (app) => {
    app.route('/skilltech/api/v1').get((req, res)=>{
        res.status(200).send({message: "API skilltechub"});
        
    });

    app.post('/api/redefinir-senha', userControllerInstance.redefinirSenha);

    app.use(
        express.json(),
        instructorRoutes,
        enterpriseRoutes,
        curseRoutes,
        userRoutes,
        areaRoutes
    );
}

