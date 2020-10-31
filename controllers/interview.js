const express = require('express')
const interview = express.Router()
const Interviews = require("../models/interviewprep")

// INDEX for Gear

interview.get("/", (req,res)=>{
    Interviews.find({},(err,foundInt)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundInt)
    })
})

// DELETE
interview.delete("/:id", (req,res)=>{
    Interviews.findByIdAndRemove(req.params.id, (error, deletedInt)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedInt)
    })
})

// UPDATE
interview.put("/:id", (req,res)=>{
    Interviews.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedInt)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedInt)
    })
})


// CREATE
interview.post("/", (req,res)=>{
    Interviews.create(req.body, (error, createdInt)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdInt)
    })
})


module.exports = interview