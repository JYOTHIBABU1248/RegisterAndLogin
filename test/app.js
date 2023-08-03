const express = require('express');
const register_route = require('./routes/register');
const login_route = require('./routes/login');
const delete_route = require('./routes/delete')
const mongoose = require('mongoose');
const validatetoken = require('./tokenhandler');
const app = express()
const url = 'mongodb+srv://jyothibabu:9666941355@cluster0.x5glxlk.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection
con.on('open',()=>{
    console.log('connected to db')
})

app.use(express.json())
app.use('/register',register_route)
app.use('/login',validatetoken,login_route)
app.use('/delete',delete_route)

let PORT = 8080;

app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})