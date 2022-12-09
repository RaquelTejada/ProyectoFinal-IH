
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItineraryDetailsCard from '../../components/ItineraryDetailsCard/ItineraryDetailsCard';
import CreateEvent from '../../components/CreateEvent/CreateEvent';

function ItineraryDetailsPage(props) {
    const [itinerary, setItinerary] = useState()
    const { itinerary_id } = useParams()

    useEffect(() => {
        itineraryService
            .getOneItinerary(itinerary_id)
            .then((response) => {
                const details = response.data
                setItinerary(details)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>

            {itinerary ?
                <ItineraryDetailsCard itinerary={itinerary} />
                : 'Cargando...'}

            <CreateEvent />
        </>
    );
}

export default ItineraryDetailsPage