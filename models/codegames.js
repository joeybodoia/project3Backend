const mongoose = require('mongoose')

const codegamesSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    url: String
})

module.exports = mongoose.model('Codegame', codegamesSchema)