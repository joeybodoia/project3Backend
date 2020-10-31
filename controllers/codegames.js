const express = require('express')
const codegames = express.Router()
const Codegame = require("../models/codegames.js")


// INDEX

codegames.get("/", (req,res)=>{
    Codegame.find({},(err,foundGame)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundGame)
    })
})

// DELETE
codegames.delete("/:id", (req,res)=>{
    Codegame.findByIdAndRemove(req.params.id, (error, deletedGame)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedGame)
    })
})

// UPDATE
codegames.put("/:id", (req,res)=>{
    Codegame.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedGame)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedGame)
    })
})


// CREATE
codegames.post("/", (req,res)=>{
    Codegame.create(req.body, (error, createdGame)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdGame)
    })
})

module.exports = codegames