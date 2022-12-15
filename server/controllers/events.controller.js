const router = require("express").Router()

const Event = require('./../models/Event.model')
const Itinerary = require('./../models/Itinerary.model')

const getAllEvents = (req, res, next) => {

    Event
        .find()
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

    Event
        .create({ ...req.body, owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const joinEvent = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { $addToSet: { users: req.payload._id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const unJoinEvent = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { $pull: { users: req.payload._id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getJoinedEvents = (req, res, next) => {

    Event
        .find({ users: { $in: [req.payload._id] } })
        .then(joinedEvents => {
            console.log('---------JOINEDEVENT-----', joinedEvents)
            res.json(joinedEvents)
        })
        .catch(next)
}

const getItineraryFromEventId = (req, res, next) => {

    const { event_id } = req.params

    Itinerary
        .find({ event: event_id })
        .then(relatedItinerary => {
            res.json(relatedItinerary)
        })
        .catch(next)
}

module.exports = {
    getAllEvents,
    getItineraryFromEventId,
    getOneEvent,
    editEvent,
    deleteEvent,
    joinEvent,
    unJoinEvent,
    saveEvent,
    getJoinedEvents
}