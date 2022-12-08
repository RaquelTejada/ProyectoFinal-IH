import './DestinationsPage.css'
import DestinationsList from '../../components/DestinationsList/DestinationsList'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { useContext } from 'react'

const DestinationsPage = () => {


    return (
        <div>
            <h1>Todos los destinos</h1>
            <DestinationsList />
        </div>
    )
}

export default DestinationsPage