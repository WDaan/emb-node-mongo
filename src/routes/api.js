const router = require('express').Router()

/* metings */
router.use('/metings', require('./api/meting'))

module.exports = router
