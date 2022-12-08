const router = require('express').Router()

const { getDestinationsByCity } = require('../controllers/destinations.controller')

router.get('/getDestinationsByCity', getDestinationsByCity)

module.exports = router