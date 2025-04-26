const {Schema} = require("mongoose");

const curseSchema = new Schema({
    title: String,
    desc: String, 
    classification: [
        {
            _id: false,
            area_id: { 
                type: Schema.Types.ObjectId,
                ref: "areas"
            },
            name: String
        }
    ],
    modules: [{
        title: String,
        url: String,
        img: String,
        video: String,
        desc: String,
    }],
    instructor: {
        _id: { 
            type: Schema.Types.ObjectId,
            ref: "instructors"
        },
        name: String,
        social_midias: [String]
    }
}, 
{
    timestamps: true
});

module.exports = curseSchema;