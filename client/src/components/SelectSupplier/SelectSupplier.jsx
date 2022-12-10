import React from "react"
import Select from 'react-select'
import './SelectSupplier.css'
import itineraryService from '../../services/itineraries.service'
import { useState, useEffect } from 'react'


const SelectSupplier = () => {

    const [destinations, setDestinations] = useState()

    const printDestinations = () => {

        itineraryService
            .getAllDestinations()
            .then(response => setDestinations(response.data.cities))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        printDestinations()
    }, [])

    let mapDestinations = []
    destinations ? (
        mapDestinations = destinations.map(elm => { return { 'label': elm, 'value': elm } }))
        :
        destinations = []


    return (
        <div className="Suppliers-container">
            <Select
                options={mapDestinations}
            // onChange={handleSelectChange}
            />
        </div>
    )
}

export default SelectSupplier