const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")


const validatetoken = asynchandler(async(req,res,next)=>{
    let token = req.headers.Authorization || req.headers.authorization
    // if (authhand && authhand.startsWith('Bearer')){
        // token = authhand.split(' ')[1]
    // }
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

module.exports = validatetoken;