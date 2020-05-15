const express = require('express')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

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
app.use(
    session({
        secret: process.env.SECRET,
        cookie: { maxAge: 60000 },
        resave: false, // forces the session to be saved back to the store
        saveUninitialized: false // dont save unmodified
    })
)
app.use(flash())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

hbs.registerPartials(`${__dirname}/views/components`)
hbs.registerHelper('stringifyFunc', fn => {
    return new hbs.SafeString(`(${fn.toString().replace(/\"/g, "'")})()`)
})
hbs.registerHelper('toLocaleString', date => date.toLocaleString())

// register routes
app.use('/', require('./routes/page'))
app.use('/api', require('./routes/api.js'))

module.exports = app
