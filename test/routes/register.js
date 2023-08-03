const express = require('express')
const register_route = express.Router()
const register_model = require('../models/registermodel')
const jwt = require('jsonwebtoken')
const token = require('../tokengen')

register_route.get('/',(req,res)=>{
    res.send('Please register here')
})

register_route.post('/', async(req,res)=>{
    try{
        const oldregister = await register_model.findOne({username: req.body.username})

        // const result = oldregister == req.body; 
        if (oldregister){
            res.send('user already exists')
        }
        else{
            const emp_details = await register_model.create(req.body)
            // res.send(emp_details.username +" registered successfully")
            const token = jwt.sign({
                user:{
                    username:req.body.username,
                    email:req.body.email
                }
            },process.env.ACCESS_TOKEN_SECRET)
            res.send(emp_details.username +"registered successfully" +"\ntoken:"+token)
        }
    }catch(err){
        res.send('error:'+err)
    }
})


module.exports = register_route