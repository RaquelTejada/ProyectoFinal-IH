const router = require("express").Router()

const { getAllEvents, getOneEvent, editEvent, deleteEvent, joinEvent, unJoinEvent, saveEvent, getJoinedEvents } = require('../controllers/events.controller')

router.get("/getAllEvents", getAllEvents)

router.get("/getOneEvent/:event_id", getOneEvent)

router.put('/edit/:event_id', editEvent)

router.delete('/delete/:event_id', deleteEvent)

router.put("/joinEvent/:event_id", joinEvent)

router.delete('/unJoinEvent/:event_id', unJoinEvent)

router.post("/saveEvent", saveEvent)

router.get('/joinedEvents', getJoinedEvents)

module.exports = router