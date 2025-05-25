const mongoose = require("mongoose");
require("dotenv").config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

//TODO: Replace the uri string with your MongoDB deployment's connection string.


async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Matheus:12345@cluster-tech-hub.ckvim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-tech-hub");
        console.log("✅ Conectado ao MongoDB");
    } catch (error) {
        console.error("❌ Erro na conexão com MongoDB:", error.message);
    }
}

module.exports = connect;