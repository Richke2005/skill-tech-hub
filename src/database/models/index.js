const mongoose = require("mongoose");
const instructorSchema = require("./instructor.js");

mongoose.model("instructors", instructorSchema);

module.exports = mongoose;