const router = require("express").Router()

const { response } = require("express")
const Itinerary = require('./../models/Itinerary.model')
const User = require('./../models/User.model')

const getAllItineraries = (req, res, next) => {

    Itinerary
        .find()
        // .select()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    Itinerary
        .findById(itinerary_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    const { city, transport, category, title, duration, pets, description, images } = req.body

    Itinerary
        .findByIdAndUpdate(itinerary_id, { city, transport, category, title, duration, pets, description, images }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteItinerary = (req, res, next) => {

    const { itinerary_id } = req.params

    Itinerary
        .findByIdAndDelete(itinerary_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => next(err))
}

const saveItinerary = (req, res, next) => {

    const { city, description, title, transport, category, duration, pets, images, events, coordinates } = req.body
    const { _id: owner } = req.payload

    const locations = coordinates.map((elm) => {
        return {
            type: 'Point',
            coordinates: [elm.lat, elm.lng]
        }
    })


    Itinerary
        .create({ city, description, title, transport, category, duration, pets, images, events, locations, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredItineraries = (req, res, next) => {

    Itinerary
        .find({ ...req.query })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllDestinations = (req, res, next) => {

    Itinerary
        .find()
        .then(response => {
            const cities = response.map(({ city }) => city)

            const setCities = [...new Set(cities)]

            res.json({ cities: setCities })
        })
        .catch(err => next(err))
}

const getOwnedItineraries = (req, res, next) => {

    Itinerary
        .find({ owner: req.payload._id })
        .then(ownedItineraries => res.json(ownedItineraries))
        .catch(err => next(err))
}

const getFavsItineraries = (req, res, next) => {

    User
        .findById(req.payload._id)
        .populate('Fav')
        .then(user => res.json(user.Fav))
        .catch(err => next(err))
}

const addFav = (req, res, next) => {

    const { itinerary_id } = req.params
    User
        .findByIdAndUpdate(req.payload._id, { $addToSet: { Fav: itinerary_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteFav = (req, res, next) => {

    const { itinerary_id } = req.params
    User
        .findByIdAndUpdate(req.payload._id, { $pull: { Fav: itinerary_id } })
        .then(response => res.json(response))
        .catch(err => next(err))

}
module.exports = {
    getAllItineraries,
    getOneItinerary,
    editItinerary,
    deleteItinerary,
    saveItinerary,
    filteredItineraries,
    getAllDestinations,
    getOwnedItineraries,
    getFavsItineraries,
    addFav,
    deleteFav
}