import { createContext, useState, useEffect } from "react"
import itineraryService from "../services/itineraries.service"


const ItinerariesContext = createContext()

function ItinerariesProviderWrapper(props) {

    const [itineraries, setItineraries] = useState([])

    const resetItineraries = () => {
        setItineraries([])
    }

    const loadItineraries = (city, category) => {
        itineraryService
            .getFilteredItineraries(city, category)
            .then((response) => {
                console.log(response.data)
                setItineraries(response.data)
            })
            .catch(err => console.log(err))
    }

    const loadDestinations = (city) => {
        itineraryService
            .getFilteredItineraries(city)
            .then((response) => {
                console.log(response.data)
                setItineraries(response.data)
            })
            .catch(err => console.log(err))
    }

    const getAllItineraries = () => {
        itineraryService
            .getItineraries()
            .then((response) => {
                setItineraries(response.data)
            })
            .catch(err => console.log(err))
    }

    const getItineraryDetails = (itinerary_id) => {
        itineraryService
            .getOneItinerary(itinerary_id)
            .then((response) => {
                setItineraries(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllItineraries()
    }, [])


    return (
        < ItinerariesContext.Provider value={{ itineraries, loadItineraries, getItineraryDetails, resetItineraries, getAllItineraries }}>
            {props.children}
        </ItinerariesContext.Provider >

    )
}

export { ItinerariesContext, ItinerariesProviderWrapper }