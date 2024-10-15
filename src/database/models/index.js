const mongoose = require("mongoose");
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

module.exports = mongoose;