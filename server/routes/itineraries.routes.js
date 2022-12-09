const router = require('express').Router()

<<<<<<< HEAD
const { getAllItineraries, getOneItinerary, editItinerary, deleteItinerary, saveItinerary, filteredItineraries, detailsItinerary } = require('../controllers/itineraries.controller')
=======
const { getAllItineraries, getOneItinerary, editItinerary, deleteItinerary, saveItinerary, filteredItineraries, getAllDestinations } = require('../controllers/itineraries.controller')
>>>>>>> f51edf5a44771dbdcd098841cbdb854a8ac50ecc

router.get('/getAllItineraries', getAllItineraries)

router.get('/getOneItinerary/:itinerary_id', getOneItinerary)

router.put('/edit/:itinerary_id', editItinerary)

router.delete('/delete/:itinerary_id', deleteItinerary)

router.post('/saveItinerary', saveItinerary)

router.get('/filtered', filteredItineraries)

<<<<<<< HEAD

=======
router.get('/getAllDestinations', getAllDestinations)
>>>>>>> f51edf5a44771dbdcd098841cbdb854a8ac50ecc

module.exports = router