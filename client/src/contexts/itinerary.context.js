import { createContext, useState, useEffect } from "react"
import itineraryService from "../services/itineraries.service"
import { useParams } from "react-router-dom"

const ItinerariesContext = createContext()

function ItinerariesProviderWrapper(props) {

    const [itineraries, setItineraries] = useState([])

    const loadItineraries = (city, category) => {
        itineraryService
            .getFilteredItineraries(city, category)
            .then((response) => {
                console.log('ESTAMOS EN EL CONTEXTO Y ESTOS SON LOS ITIS', response.data)
                setItineraries(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadItineraries()
    }, [])


    return (
        < ItinerariesContext.Provider value={{ itineraries, loadItineraries }}>
            {props.children}
        </ItinerariesContext.Provider >

    )
}

export { ItinerariesContext, ItinerariesProviderWrapper }