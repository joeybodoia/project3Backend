const express = require('express')
const gear = express.Router()
const Gear = require("../models/gear.js")


// INDEX for Gear

gear.get("/", (req,res)=>{
    Gear.find({},(err,foundGear)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundGear)
    })
})

// DELETE
gear.delete("/:id", (req,res)=>{
    Gear.findByIdAndRemove(req.params.id, (error, deletedGear)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedGear)
    })
})

// UPDATE
gear.put("/:id", (req,res)=>{
    Gear.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedGear)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedGear)
    })
})


// CREATE
gear.post("/", (req,res)=>{
    Gear.create(req.body, (error, createdGear)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdGear)
    })
})

module.exports = gear