const express = require("express");
const routes = require("./routes/index.js");
const connect = require("./database/config/config.js");
const cors = require("cors");

(async ()=> await connect())();

const app = express();

app.use(cors({
    origin: "*"
}));
routes(app)

module.exports = app;