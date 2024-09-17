const mongoose = require("mongoose");
const instructorSchema = require("./instructor.js");
const enterpriseSchema = require("./enterprise.js");

// Função para conectar ao MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/skilltech");
        console.log("Connection successful to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    mongoose.connection.on("error", err => {
        console.error("MongoDB connection error:", err);
    });
}

// Conectar ao MongoDB
connectToDatabase().then(() => {
    // Definir modelos
    mongoose.model("instructors", instructorSchema);
    mongoose.model("enterprises", enterpriseSchema);

    // Criar e salvar um novo documento
    mongoose.models['instructors'].create({
        name: "Jean pablo",
        email: "Jean1pablo8@gmail.com",
        specialty: "Software Engineering",
        social_midia: ["instagram", "linkedin"]
    })
    .then(doc => console.log("Document saved:", doc))
    .catch(err => console.error("Error saving document:", err));
});

module.exports = mongoose;