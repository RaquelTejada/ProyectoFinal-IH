const router = require('express').Router()

const { getAllItineraries, getOneItinerary, editItinerary, deleteItinerary, saveItinerary, filteredItineraries, getAllDestinations } = require('../controllers/itineraries.controller')

const { isAuthenticated } = require('./../middleware/jwt.middleware')

router.get('/getAllItineraries', getAllItineraries)

router.get('/getOneItinerary/:itinerary_id', isAuthenticated, getOneItinerary)

router.put('/edit/:itinerary_id', isAuthenticated, editItinerary)

router.delete('/delete/:itinerary_id', isAuthenticated, deleteItinerary)

router.post('/saveItinerary', isAuthenticated, saveItinerary)

router.get('/filtered', filteredItineraries)

router.get('/getAllDestinations', getAllDestinations)

module.exports = router