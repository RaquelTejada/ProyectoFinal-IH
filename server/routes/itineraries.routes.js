const router = require('express').Router()

const Itinerary = require('./../models/Itinerary.model')

router.get('/', (req, res, next) => {
    res.json('All good in here')
})

module.exports = router