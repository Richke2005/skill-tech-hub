const mongoose = require('mongoose');

// Importando os modelos apenas para registrá-los no mongoose
require('./instructor');
require('./enterprise');
require('./curse');
require('./user');
require('./area');

// Exportando o objeto mongoose já com os modelos registrados
module.exports = mongoose;




/*const mongoose = require("mongoose");

// Aqui você importa os modelos prontos
const Instructor = require("./instructor.js");
const Enterprise = require("./enterprise.js");
const Curse = require("./curse.js");
const User = require("./user.js");
const Area = require("./area.js");

module.exports = {
  mongoose,
  Instructor,
  Enterprise,
  Curse,
  User,
  Area
};*/




























/*const mongoose = require("mongoose");
const instructorSchema = require("./instructor.js");
const enterpriseSchema = require("./enterprise.js");
const curseSchema = require("./curse.js");
const userSchema = require("./user.js");
const areaSchema = require("./area.js");

// Defining collections and models
mongoose.model("instructors", instructorSchema);
mongoose.model("enterprises", enterpriseSchema);
mongoose.model("curses", curseSchema);
mongoose.model("users", userSchema);
mongoose.model("areas", areaSchema);

module.exports = mongoose;*/