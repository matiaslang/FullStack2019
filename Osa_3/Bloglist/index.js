const app = require('./app')
const http = require('http')
const config = require('./utils/config.js')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})




/*
require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI




mongoose.connect(MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true})





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


*/