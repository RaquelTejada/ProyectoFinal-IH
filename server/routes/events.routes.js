const router = require("express").Router()

const { getAllEvents, getOneEvent, editEvent, deleteEvent, saveEvent } = require('../controllers/events.controller')

router.get("/getAllEvents", getAllEvents)


router.get("/getOneEvent/:event_id", getOneEvent)

router.put('/edit/:event_id', editEvent)

router.delete('/delete/:event_id', deleteEvent)


router.post("/saveEvent", saveEvent)

module.exports = router