const connect = require("./database/config/config.js");
const express = require("express");
const routes = require("./routes/index.js");
connect();

const app = express();

routes(app);

module.exports = app;