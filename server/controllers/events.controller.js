const router = require("express").Router()

const Event = require('./../models/Event.model')

const getAllEvents = (req, res, next) => {

    Event
        .find()
        // .select()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneEvent = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editEvent = (req, res, next) => {

    const { event_id } = req.params

    const { title, description, date } = req.body

    User
        .findByIdAndUpdate(event_id, { title, description, date })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteEvent = (req, res, next) => {

    const { event_id } = req.params

    User
        .findByIdAndDelete(event_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => next(err))
}

const saveEvent = (req, res, next) => {

    console.log(req.body)
    Event
        .create({ ...req.body, owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredItineraries = (req, res, next) => {

    Itinerary
        .find({ ...req.query })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllEvents,
    getOneEvent,
    editEvent,
    deleteEvent,
    saveEvent
}