const mongoose = require("mongoose")
const app = require("express");
const register_model = require("../models/registermodel");
const route = app.Router()

route.patch("/:id", async(req,res)=>{
    try {
        const updatedCode= await 
        register_model.findByIdAndUpdate({_id:req.params.id},{phone_number:req.body.phone_number},{new:true});
        if(updatedCode){
            res.send('updated successfully'+updatedCode)
        }
        else{
            res.send('id not found')
        }
    } 
    catch (error) {
        console.log("Error",error)
    }
})

route.put("/:id", async(req,res)=>{
    try {
        const updatedCode= await register_model.findByIdAndUpdate({_id:req.params.id},{phone_number:req.body.phone_number},{new:true});
        res.json(updatedCode)
    } 
    catch (error) {
        console.log("Error",error)
    }

})



route.delete('/deletebyid/:id',async(req,res)=>{
    const deleted = await register_model.findByIdAndDelete({_id:req.params.id})
    if (deleted){
        res.send('deleted successfully'+deleted)
    }
    else{
        res.send("user does not exists to delete")
    }
})

route.put("/",async(req,res)=>{
    const bulkupdate = await register_model.updateMany({qualification:req.body.qualification},{qualification:"m.tech"})
    res.json(bulkupdate)
})

route.delete('/removebyid/:id',async(req,res)=>{
    const removed = await register_model.findByIdAndRemove({_id:req.params.id})
    res.send(removed)
})

route.delete('/deletebyone/:id',async(req,res)=>{
    const deleted = await register_model.findOneAndDelete({email:req.body.email})
    res.json(deleted)
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