const router = require('express').Router()

const MetingController = require('../../controllers/meting')

/* Metings */
router.get('/', async (req, res) => {
    const metingen = await MetingController.list()
    res.json({ metingen })
})

router.get('/:id', async (req, res) => {
    res.json(await MetingController.find(req.params.id))
})

router.get('/info', MetingController.info)

router.get('/count', async (req, res) => {
    const count = await MetingController.count()
    res.json({ count })
})

router.post('/', MetingController.create)

module.exports = router
