const router = require('express').Router()

const { getAllItineraries, getOneItinerary, editItinerary, deleteItinerary, saveItinerary, filteredItineraries, getAllDestinations } = require('../controllers/itineraries.controller')
<<<<<<< HEAD
=======

const { isAuthenticated } = require('./../middleware/jwt.middleware')
>>>>>>> ad9d52d96a31326db22f263b73852e8299ff65e7

router.get('/getAllItineraries', getAllItineraries)

router.get('/getOneItinerary/:itinerary_id', isAuthenticated, getOneItinerary)

router.put('/edit/:itinerary_id', isAuthenticated, editItinerary)

router.delete('/delete/:itinerary_id', isAuthenticated, deleteItinerary)

router.post('/saveItinerary', isAuthenticated, saveItinerary)

router.get('/filtered', filteredItineraries)

router.get('/getAllDestinations', getAllDestinations)

module.exports = router