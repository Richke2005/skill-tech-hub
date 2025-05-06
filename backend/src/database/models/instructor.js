const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({
  name: String,
  img: String,
  description: String,
  linkedin: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Instructor', instructorSchema);
/*const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({
  name: String,
  img: String,
  description: String,
  linkedin: String
}, {
  timestamps: true
});

// Exportando apenas o esquema para posterior uso no index.js
module.exports = instructorSchema;*/





























/*const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({
  name: String,
  img: String,
  description: String,
  linkedin: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Instructor', instructorSchema);*/





























/*const { Schema} = require("mongoose");

const instructorSchema = new Schema({
    name: String,
    email: String, 
    specialty: String,
    social_midia: [String],
    areas: [
        {
            _id: false,
            area_id: { 
                type: Schema.Types.ObjectId,
                ref: "areas"
            },
            name: String
        }
    ]
}, 
{
    timestamps: true
});

module.exports = instructorSchema;*/