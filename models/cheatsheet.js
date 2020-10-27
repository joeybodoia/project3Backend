const mongoose = require('mongoose')

const cheatsheetsSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: String,
    url: String
})

module.exports = mongoose.model('Cheatsheet', cheatsheetsSchema)