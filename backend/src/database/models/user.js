const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'E-mail é obrigatório.'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'E-mail inválido.'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória.']
  },
  cpf: {
    type: String,
    required: [true, 'CPF é obrigatório.'],
    match: [/^\d{11}$/, 'CPF deve conter 11 dígitos numéricos.'],
    trim: true
  },
  areas_of_interest: [{ type: String, trim: true }],
  /*curses: [{ type: String, trim: true }],*/
  curses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curse' }],

  social_midias: [{ type: String, trim: true }]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);
/*const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  areas_of_interest: [{ type: String }],
  curses: [{ type: String }],
  social_midias: [{ type: String }],
}, { timestamps: true });

// Pre-save hook para criptografar a senha
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);*/


















/*const mongoose = require('mongoose');
const { Schema } = mongoose;

/*const {Schema} = require("mongoose");

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

/*module.exports = userSchema;



module.exports = mongoose.model('User', userSchema);*/

