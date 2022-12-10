const router = require('express').Router()

const { getAllItineraries, getOneItinerary, editItinerary, deleteItinerary, saveItinerary, filteredItineraries, getAllDestinations } = require('../controllers/itineraries.controller')

router.get('/getAllItineraries', getAllItineraries)

router.get('/getOneItinerary/:itinerary_id', getOneItinerary)

router.put('/edit/:itinerary_id', editItinerary)

router.delete('/delete/:itinerary_id', deleteItinerary)

router.post('/saveItinerary', saveItinerary)

router.get('/filtered', filteredItineraries)

router.get('/getAllDestinations', getAllDestinations)

module.exports = router