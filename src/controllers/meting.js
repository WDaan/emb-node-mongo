const Meting = require('../models/meting')

/**
 *
 * Info about model
 *
 */

exports.info = (req, res) => {
    return res.json({
        modelName: 'meting',
        temperature: {
            type: 'Number',
            required: true
        },
        createdAt: { type: 'Date', default: 'Date.now' }
    })
}

/**
 *
 * List
 *
 */

exports.list = async (lim = 25) => {
    const metingen = await Meting.find().sort({ createdAt: -1 }).limit(lim)

    return metingen.reverse()
}

/**
 *
 * FindById
 *
 */

exports.find = id => {
    return Meting.findById(id)
}

/**
 *
 * Create
 *
 */

exports.create = (req, res) => {
    return new Meting(req.body).save()
}

/**
 *
 * count
 *
 */

exports.count = async () => {
    return Meting.countDocuments()
}
