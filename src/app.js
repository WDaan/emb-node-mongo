const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// mongoose connection
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const app = express()

// express setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// register routes
app.use('/', require('./routes/api.js'))

module.exports = app
