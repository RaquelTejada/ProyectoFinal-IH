const router = require('express').Router()

const { response } = require('../app')
const Itinerary = require('./../models/Itinerary.model')

router.get('/getAllItineraries', (req, res, next) => {

    Itinerary
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getFilteredItineraries/:city', (req, res, next) => {

    const { city } = req.params

    Itinerary
        .findOne(city)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/saveItinerary', (req, res, next) => {

    Itinerary
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router