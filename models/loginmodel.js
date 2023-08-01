const mongoose = require('mongoose')
const schema = mongoose.Schema({

    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
    
})

const login = mongoose.model('login',schema)
module.exports = login