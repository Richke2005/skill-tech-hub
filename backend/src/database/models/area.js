const mongoose = require('mongoose');
const { Schema } = mongoose;

const areaSchema = new Schema({
  name: String,
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Area', areaSchema);
/*const mongoose = require('mongoose');
const { Schema } = mongoose;

const areaSchema = new Schema({
  name: String,
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Area', areaSchema);*/





























/*const { Schema} = require("mongoose");

const areaSchema = new Schema({
    name: String,
    desc: String
}, 
{
    timestamps: true
});

module.exports = areaSchema;*/










