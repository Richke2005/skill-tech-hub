const {default: mongoose, Schema} = require("mongoose");

const instructorSchema = new Schema({
    name: String,
    email: String, 
    especiality: String,
    social_midia: [String]
}, 
{
    timestamps: true
});

const Instructor = mongoose.model("instructors", instructorSchema);

module.exports = Instructor;