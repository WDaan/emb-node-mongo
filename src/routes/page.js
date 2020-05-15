const router = require('express').Router()
const MetingController = require('../controllers/meting')

/* GET home page. */
router.get('/', async (req, res) => {
    const metingen = await MetingController.list(10)
    res.render('pages/index', { success: req.flash('success'), metingen })
})

/* GET create page. */
router.get('/create', (req, res) => {
    res.render('pages/create')
})

module.exports = router
