const express = require("express");
const routes = require("./routes/index.js");
const connect = require("./database/config/config.js");
const cors = require("cors");
/*-------------------------------------------------------*/
const authRoutes = require('./routes/authRoutes');
const app = express();






//Conexão com o banco
(async () => await connect())();

// Configurações do Express
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rotas
/*app.use(authRoutes);*/
app.use(authRoutes);

routes(app);



module.exports = app; 


