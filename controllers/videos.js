const express = require('express')
const video = express.Router()
const Video = require("../models/videos.js")


// INDEX

video.get("/", (req,res)=>{
    Video.find({},(err,foundVideo)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundVideo)
    })
})

// DELETE
video.delete("/:id", (req,res)=>{
    Video.findByIdAndRemove(req.params.id, (error, deletedVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedVideo)
    })
})

// UPDATE
video.put("/:id", (req,res)=>{
    Video.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedVideo)
    })
})


// CREATE
video.post("/", (req,res)=>{
    Video.create(req.body, (error, createdVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdVideo)
    })
})

module.exports = video