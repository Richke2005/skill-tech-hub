const express = require("express");
const instructorRoutes = require("./instructorRoutes.js");
const enterpriseRoutes = require("./enterpriseRoutes.js");
const curseRoutes = require("./curseRoutes.js");
const userRoutes = require("./userRoutes.js");
const areaRoutes = require("./areaRoutes.js");

module.exports = (app) => {
    app.route('/skilltech/api/v1').get((req, res) => {
        res.status(200).send({ message: "API skilltechub" });
    });

    app.use(
        express.json(),
        instructorRoutes,
        enterpriseRoutes,
        curseRoutes,
        userRoutes,
        areaRoutes
    );
};
/*const express = require("express");
const instructorRoutes = require("./instructorRoutes.js");
const enterpriseRoutes = require("./enterpriseRoutes.js");
const curseRoutes = require("./curseRoutes.js");
const userRoutes = require("./userRoutes.js");
const areaRoutes = require("./areaRoutes.js");

const UserController = require('../controllers/userController.js');
const userControllerInstance = new UserController();

module.exports = (app) => {
    app.route('/skilltech/api/v1').get((req, res)=>{
        res.status(200).send({message: "API skilltechub"});
    });

    app.use(
        express.json(),
        instructorRoutes,
        enterpriseRoutes,
        curseRoutes,
        userRoutes,
        areaRoutes
    );
    
    // Adicione qualquer rota relacionada ao userController, se necessário.
    // Exemplo:
    // app.post('/some-endpoint', userControllerInstance.someMethod);
}































/*const express = require("express");
const instructorRoutes = require("./instructorRoutes.js");
const enterpriseRoutes = require("./enterpriseRoutes.js");
const curseRoutes = require("./curseRoutes.js");
const userRoutes = require("./userRoutes.js");
const areaRoutes = require("./areaRoutes.js");

const UserController = require('../controllers/userController.js');
const userControllerInstance = new UserController();

console.log(UserController); // Adicione esta linha

module.exports = (app) => {
    app.route('/skilltech/api/v1').get((req, res)=>{
        res.status(200).send({message: "API skilltechub"});
        
    });

   

    app.use(
        express.json(),
        instructorRoutes,
        enterpriseRoutes,
        curseRoutes,
        userRoutes,
        areaRoutes
    );
}*/

