const {Schema} = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: String, 
    password: String,
    cpf: String,
    areas_of_interest: [String],
    social_midias: [String],
    enterprise: {
        _id: {        
            type: Schema.Types.ObjectId,
            ref: "enterprises",
            //required: [true, "Enterprise is required"]
        },
        name: String
    },
    curses: [{type: Schema.Types.ObjectId, ref: "curses"}]
},
{
    timestamps: true
});

module.exports = userSchema;