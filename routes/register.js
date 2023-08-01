const express = require('express')
const register_route = express.Router()
const register_model = require('../models/registermodel')

register_route.get('/',(req,res)=>{
    res.send('Please register here')
})

register_route.post('/submit', async(req,res)=>{
    try{
        const oldregister = await register_model.findOne({username: req.body.username})

        // const result = oldregister == req.body; 
        if (oldregister){
            res.send('user already exists')
        }
        else{
            const emp_details = await register_model.create(req.body)
            res.send(emp_details.username +" registered successfully")

        }
    }catch(err){
        res.send('error:',err)
    }
})


module.exports = register_route