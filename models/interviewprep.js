const mongoose = require('mongoose')

const intPrepSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: String,
    review: String,
    url: String
})

module.exports = mongoose.model('Prep', intPrepSchema)