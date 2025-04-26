const {Schema} = require("mongoose");

const userSchema = new Schema({
    name: String,
    img: String,
    address: {
        street: String,
        number: String,
        city: String,
        state: String,
        zip_code: String
    },
    email: String, 
    password: String,
    cpf: String,
    areas_of_interest: [String],
    social_midias: [{
        name: String,
        url: String
    }],
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