const router = require("express").Router()

const Itinerary = require('./../models/Itinerary.model')

const getDestinationsByCity = (req, res, next) => {

    Itinerary
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

module.exports = {
    getDestinationsByCity
}