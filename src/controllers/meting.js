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
 * Create
 *
 */

exports.create = (req, res) => {
    new Meting(req.body).save((err, meting) => {
        if (err) throw err

        // success message
        req.flash('success', 'Successfully created a meting')
        // redirect home
        return res.redirect('/')
    })
}

/**
 *
 * count
 *
 */

exports.count = async () => {
    return Meting.countDocuments()
}
