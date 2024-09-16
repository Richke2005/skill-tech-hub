const {Schema} = require("mongoose");

const instructorSchema = new Schema({
    name: String,
    email: String, 
    especiality: String,
    social_midia: [String]
}, 
{
    timestamps: true
});

module.exports = instructorSchema;