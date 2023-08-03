const mongoose = require("mongoose")
const app = require("express");
const register_model = require("../models/registermodel");
const route = app.Router()

route.patch("/:id", async(req,res)=>{
    try {
        const updatedCode= await register_model.findByIdAndUpdate({_id:req.params.id},{phone_number:req.body.phone_number})
        res.json(updatedCode)
    } 
    catch (error) {
        console.log("Error",error)
    }
})

route.put("/:id", async(req,res)=>{
    try {
        const updatedCode= await register_model.updateOne({_id:req.params.id},{phone_number:req.body.phone_number},{new:true, runValidators: true});
        res.json(updatedCode)
    } 
    catch (error) {
        console.log("Error",error)
    }

})

route.get("/:id", async(req,res)=>{
    try {
        const updatedCode= await register_model.findById({_id:req.params.id});
        res.json(updatedCode)
    } 
    catch (error) {
        console.log("Error",error)
    }

})

module.exports = route