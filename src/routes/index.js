const express = require("express");
const instructorRoutes = require("./instructorRoutes.js");
const enterpriseRoutes = require("./enterpriseRoutes.js");

module.exports = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({message: "API skilltechub"});
    });

    app.use(
        express.json(),
        instructorRoutes,
        enterpriseRoutes
    );
}