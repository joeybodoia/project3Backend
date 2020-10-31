const mongoose = require('mongoose')

const gearSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: String,
    review: String,
    url: String,
    img: String
})

module.exports = mongoose.model('Gear', gearSchema)