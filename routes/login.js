const express = require('express')
const login_emp = express.Router()
const register_model = require('../models/registermodel')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();
const asynchandler = require('express-async-handler')

login_emp.post('/', async(req,res)=>{
    // try{
        const emp_login = await register_model.findOne({email:req.body.email})
        if (emp_login){
            const result = req.body.password == emp_login.password
            if (result){
                // res.send(`logged in successfully as ${emp_login.username}`)
                const accesstoken = jwt.sign(
                    { user:{
                        userName:emp_login.username,
                        email:emp_login.email,
                        password:emp_login.password
                        }
                    },process.env.ACCESS_TOKEN_SECRET,
            
                );
                res.json(accesstoken)
            }
            else{
                res.send('username or password entered incorrectly')
            }
        }
        else{
            res.send('user not existed')
        }
    /*catch(err){
        res.send('error:'+err)
    }*/
})

const validatetoken = asynchandler(async(req,res,next)=>{
    let authhand = req.headers.Authorization || req.headers.authorization
    if (authhand && authhand.startsWith('Bearer')){
        token = authhand.split(' ')[1]
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if (err){
            res.send('user authentication in required')
        }
        console.log(decoded)
        next();
    })
    if(!token){
        res.send('please enter the token')
    }
})

login_emp.post('/allemp',validatetoken, async(req,res)=>{
    const allemp = await register_model.find()
    res.json(allemp)

})








module.exports = login_emp