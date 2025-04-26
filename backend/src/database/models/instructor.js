const {Schema} = require("mongoose");

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

module.exports = instructorSchema;