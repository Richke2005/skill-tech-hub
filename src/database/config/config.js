const mongoose = require("mongoose");
require("dotenv").config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

//TODO: Replace the uri string with your MongoDB deployment's connection string.
async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${db_user}:${db_password}@cluster-tech-hub.ckvim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-tech-hub`);
        console.log("Connection successful to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    mongoose.connection.on("error", err => {
        console.error("MongoDB connection error:", err);
    });
}

module.exports = connect;