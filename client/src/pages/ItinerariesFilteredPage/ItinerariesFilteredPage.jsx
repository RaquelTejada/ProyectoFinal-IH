import './ItinerariesFilteredPage.css'
import ItinerariesList from '../../components/ItinerariesList/ItinerariesList'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { useContext } from 'react'

const ItinerariesFilteredPage = () => {

    const { itineraries } = useContext(ItinerariesContext)

    return (
        <div>
            <h1>Elige la categoría que te apetece para poder ver tus rutas...</h1>
            <ItinerariesList />
        </div>
    )
}

export default ItinerariesFilteredPage