const {Schema} = require("mongoose");

const areaSchema = new Schema({
    name: String,
    desc: String
}, 
{
    timestamps: true
});

module.exports = areaSchema;