const express = require("express");

module.exports = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({message: "API skilltechub"});
    });

    app.use(
        express.json()
    );
}