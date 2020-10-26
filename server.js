require("dotenv").config();
const { PORT = 3008, NODE_ENV = "development" } = process.env;

const express = require('express')
const app = express()


// MONGO Connection
const mongoose = require('./DB/conn')


// CORS
const cors = require("cors")
// const corsOptions = require("./configs/cors.js");

//OTHER IMPORTS
const morgan = require("morgan");


// MIDDLEWARE
NODE_ENV === "production" ? app.use(cors()) : app.use(cors());
app.use(cors())
app.use(express.json());
app.use(morgan("tiny")); //logging


// CONTROLLERS
const gearController = require("./controllers/gear.js")
const codegamesController = require("./controllers/codegames.js")
const cheatsheetController = require("./controllers/cheatsheet.js")
app.use("/gear", gearController)
app.use("/codegames", codegamesController)
app.use("/cheatsheet", cheatsheetController)


//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })