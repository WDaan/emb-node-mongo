const mongoose = require('mongoose')

const { Schema } = mongoose

const metingSchema = new Schema({
    temperature: {
        type: Number,
        required: true
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Meting', metingSchema)
