const express = require("express");
const routes = require("./routes/index.js");
require("./database/config/config.js");

const app = express();

routes(app);

module.exports = app;