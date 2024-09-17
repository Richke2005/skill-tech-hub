const mongoose = require("mongoose");

function connect() {
    mongoose.connect("mongodb://localhost:27017/test");

    mongoose.connection.once('open', () => {
        console.log("Connected to MongoDB");
    });

    mongoose.connection.on("error", err => {
        console.error("MongoDB connection error:", err);
    });
}

connect();

module.exports = mongoose;