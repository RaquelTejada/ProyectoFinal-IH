const router = require("express").Router()

const Event = require('../models/Event.model')

router.get("/getAllEvents", (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneEvent/:event_id", (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveEvent", (req, res, next) => {

    Event
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router