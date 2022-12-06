import './ItinerariesFilteredPage.css'
import itinerariesService from '../../services/itineraries.service'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItinerariesList from '../../components/ItinerariesList/ItinerariesList'

const ItinerariesFilteredPage = () => {

    const { city } = useParams()

    const [itineraries, setItineraries] = useState([])

    useEffect(() => {

        itinerariesService
            .getFilteredItineraries(city)
            .then((response) => {
                console.log(response)
                setItineraries(response.data)
            })
            .catch(err => console.log(err))

    }, [city])

    return (
        <div>
            <h1>Events List</h1>
            <ItinerariesList itineraries={itineraries} />
        </div>
    )
}

export default ItinerariesFilteredPage