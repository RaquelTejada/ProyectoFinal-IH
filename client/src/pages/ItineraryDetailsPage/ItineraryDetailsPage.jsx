
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItineraryDetailsCard from '../../components/ItineraryDetailsCard/ItineraryDetailsCard';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import MyMap from '../../components/ItineraryMap/ItineraryMap';
import EventCalendar from '../../components/Calendar/Calendar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import eventService from '../../services/events.service';

function ItineraryDetailsPage() {

    const [itinerary, setItinerary] = useState()
    const { itinerary_id } = useParams()
    const [events, setEvents] = useState();

    const filterEvent = () => {
        eventService
            .getEvents()
            .then(response => {
                const allEvents = response.data.map(event => {
                    return {
                        title: event.title,
                        start: new Date(event.date),
                        end: new Date(event.date),
                        allDay: true,
                        itineraryOwner: event.itineraryOwner
                    }
                })

                const filteredEvents = allEvents.filter(event => event.itineraryOwner === itinerary_id)

                setEvents(filteredEvents)
            })
    }

    const getDetails = (itinerary_id) => {
        // console.log('get details')
        itineraryService
            .getOneItinerary(itinerary_id)
            .then(({ data }) => setItinerary(data))
            .catch(err => console.log(err))
    }

    const addFav = (itinerary_id) => {

        itineraryService
            .addFav(itinerary_id)
            // .then(() => closeModal())
            .catch(err => console.log(err))

    }

    const deleteFav = (itinerary_id) => {

        itineraryService
            .deleteFav(itinerary_id)
            // .then(() => closeModal())
            .catch(console.log('ERROR'))

    }

    useEffect(() => {
        getDetails(itinerary_id)
    }, [])


    return (
        <>

            {itinerary ?
                <>
                    <ItineraryDetailsCard itinerary={itinerary} />
                </>
                : 'Cargando...'
            }

            <Container fluid>
                <Row className="mb-4 d-flex justify-content-center">
                    <Col md={{ span: 5 }} >

                        {itinerary ?
                            <>
                                <MyMap locations={itinerary.locations} />
                            </>
                            : 'Cargando...'}
                    </Col>

                    <Col md={{ span: 5 }} >
                        <CreateEvent itinerary_id={itinerary_id} filterEvent={filterEvent} />
                    </Col>
                    <Col md={{ span: 11 }}>
                        <EventCalendar events={events} filterEvent={filterEvent} />
                    </Col>
                    <Button onClick={() => addFav(itinerary._id)} variant="dark" size="sm">Añadir fav</Button>
                    <Button onClick={() => deleteFav(itinerary._id)} variant="dark" size="sm">Quitar fav</Button>
                </Row>
            </Container>

        </>
    );
}

export default ItineraryDetailsPage