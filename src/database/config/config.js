const mongoose = require("mongoose");

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/test")
    .catch(error => console.error(error));

    mongoose.connection.on("error", err => {
        console.error(err);
    });

    mongoose.connection.once("open", () => {
        console.log("connection sucessfull to mongoDB");
    });
}

module.exports = connect;