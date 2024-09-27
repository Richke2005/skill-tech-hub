const mongoose = require("mongoose");
const instructorSchema = require("./instructor.js");
const enterpriseSchema = require("./enterprise.js");
const curseSchema = require("./curse.js");
const userSchema = require("./user.js");

// Definir modelos
mongoose.model("instructors", instructorSchema);
mongoose.model("enterprises", enterpriseSchema);
mongoose.model("curses", curseSchema);
mongoose.model("users", userSchema);

module.exports = mongoose;