const router = require('express').Router()

const { response } = require('../app')
const Itinerary = require('./../models/Itinerary.model')

router.get('/getAllItineraries', (req, res, next) => {

    Itinerary
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneItinerary/:itinerary_id', (req, res, next) => {

    const { itinerary_id } = req.params

    Itinerary
        .findById(itinerary_id)
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