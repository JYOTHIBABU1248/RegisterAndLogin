const mongoose = require('mongoose')
const schema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    confirm_password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required: true
    },
    qualification:{
        type: String,
        required: true
    }
})

const register_model = mongoose.model('registeration',schema)
module.exports = register_model