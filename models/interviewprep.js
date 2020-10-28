const mongoose = require('mongoose')

const intPrepSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: String,
    language: {type: String, required: true},
    url: String,
    img: {type: Image, required: true}
})

module.exports = mongoose.model('Prep', intPrepSchema)