const express = require('express')
const cheatsheets = express.Router()
const Cheatsheet = require("../models/cheatsheet.js")


// INDEX

cheatsheets.get("/", (req,res)=>{
    Cheatsheet.find({},(err,foundCheatsheet)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundCheatsheet)
    })
})

// DELETE
cheatsheets.delete("/:id", (req,res)=>{
    Cheatsheet.findByIdAndRemove(req.params.id, (error, deletedCheatsheet)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedCheatsheet)
    })
})

// UPDATE
cheatsheets.put("/:id", (req,res)=>{
    Cheatsheet.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedCheatsheet)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedCheatsheet)
    })
})


// CREATE
cheatsheets.post("/", (req,res)=>{
    Cheatsheet.create(req.body, (error, createdCheatsheet)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdCheatsheet)
    })
})

module.exports = cheatsheets