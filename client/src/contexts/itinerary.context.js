import { createContext, useState, useEffect } from "react"
import itineraryService from "../services/itineraries.service"
import { useParams } from "react-router-dom"

const ItinerariesContext = createContext()

function ItinerariesProviderWrapper(props) {

    const { city } = useParams()

    const [itineraries, setItineraries] = useState([])

    const loadItineraries = () => {

        itineraryService
            .getFilteredItineraries(city)
            .then((response) => {
                console.log(response.data)
                setItineraries(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadItineraries()
    }, [])


    return (
        < ItinerariesContext.Provider value={{ itineraries }}>
            {props.children}
        </ItinerariesContext.Provider >

    )
}

export { ItinerariesContext, ItinerariesProviderWrapper }