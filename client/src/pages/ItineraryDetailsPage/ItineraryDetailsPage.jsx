
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItineraryDetailsCard from '../../components/ItineraryDetailsCard/ItineraryDetailsCard';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import MyMap from '../../components/ItineraryMap/ItineraryMap';
import EventCalendar from '../../components/Calendar/Calendar';

function ItineraryDetailsPage() {

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
                <>
                    <ItineraryDetailsCard itinerary={itinerary} />
                    <MyMap locations={itinerary.locations} />
                </>
                : 'Cargando...'}

            <CreateEvent />
            <EventCalendar />

        </>
    );
}

export default ItineraryDetailsPage