const router = require('express').Router()

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

router.put('/edit/:itinerary_id', (req, res, next) => {

    const { itinerary_id } = req.params

    const { city, transport, category, title, duration, pets, description, images } = req.body

    User
        .findByIdAndUpdate(itinerary_id, { city, transport, category, title, duration, pets, description, images })
        .then(response => res.json(response))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
})

router.delete('/delete/:itinerary_id', (req, res, next) => {

    const { itinerary_id } = req.params

    User
        .findByIdAndDelete(itinerary_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
})

router.post('/saveItinerary', (req, res, next) => {

    Itinerary
        .create({ ...req.body, owner: req.playload })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router