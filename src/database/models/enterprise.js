const {Schema} = require("mongoose");

const enterpriseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    phone_number: [String],
    location: {
        city: String,
        state: String,
        cep: String
    },
}, 
{
    timestamps: true
});

module.exports = enterpriseSchema;