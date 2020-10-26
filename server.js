const express = require('express')
const app = express()
const PORT = 3008

const mongoose = require('mongoose')
const cors = require("cors")

// Mongoose connections
// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect('mongodb+srv://joeybodoia:a1b2c3d4@sei.44xol.azure.mongodb.net/project3-codingPrep?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// MIDDLEWARE
app.use(express.json()); //use .json(), not .urlencoded()

// CORS
app.use(cors()) // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)



// CONTROLLERS
const gearController = require("./controllers/gear.js")
const gear = require('./models/gear.js')

app.use("/gear", gearController)


//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })