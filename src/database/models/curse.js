const {Schema} = require("mongoose");

const curseSchema = new Schema({
    name: String,
    email: String, 
    specialty: String,
    social_midia: [String]
}, 
{
    timestamps: true
});

module.exports = curseSchema;