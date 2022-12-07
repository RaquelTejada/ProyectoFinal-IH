import './ItinerariesFilteredPage.css'
import { useParams } from 'react-router-dom'
import ItinerariesList from '../../components/ItinerariesList/ItinerariesList'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { useContext } from 'react'

const ItinerariesFilteredPage = () => {

    const { itineraries } = useContext(ItinerariesContext)

    return (
        <div>
            <h1>Events List</h1>
            <ItinerariesList />
        </div>
    )
}

export default ItinerariesFilteredPage