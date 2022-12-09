const router = require("express").Router()

const Itinerary = require('./../models/Itinerary.model')

const getAllItineraries = (req, res, next) => {

    Itinerary
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

const getOneItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    Itinerary
        .findById(itinerary_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

const editItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    const { city, transport, category, title, duration, pets, description, images } = req.body

    Itinerary
        .findByIdAndUpdate(itinerary_id, { city, transport, category, title, duration, pets, description, images })
        .then(response => res.json(response))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
}

const deleteItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    Itinerary
        .findByIdAndDelete(itinerary_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
}

const saveItinerary = (req, res, next) => {

    Itinerary
        .create({ ...req.body, owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

const filteredItineraries = (req, res, next) => {

    Itinerary
        .find({ ...req.query })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}





module.exports = {
    getAllItineraries,
    getOneItinerary,
    editItinerary,
    deleteItinerary,
    saveItinerary,
    filteredItineraries,

}