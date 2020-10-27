const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    url: String
})

module.exports = mongoose.model('Video', videoSchema)