
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItineraryDetailsCard from '../../components/ItineraryDetailsCard/ItineraryDetailsCard'
import CreateEvent from '../../components/CreateEvent/CreateEvent'
import MyMap from '../../components/ItineraryMap/ItineraryMap'
import EventCalendar from '../../components/Calendar/Calendar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import eventService from '../../services/events.service'
import './ItineraryDetailsPage.css'

function ItineraryDetailsPage() {

    const [itineray, setItinerary] = useState()
    const { itinerary_id } = useParams()
    const [events, setEvents] = useState()

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
                        itineraryOwner: event.itineraryOwner,
                        description: event.description,
                        id: event._id
                    }
                })

                const filteredEvents = allEvents.filter(event => event.itineraryOwner === itinerary_id)

                setEvents(filteredEvents)
            })
    }

    const getDetails = (itinerary_id) => {

        itineraryService
            .getOneItinerary(itinerary_id)
            .then(({ data }) => setItinerary(data))
            .catch(err => console.log(err))
    }

    const addFav = (itinerary_id) => {

        itineraryService
            .addFav(itinerary_id)
            .then(() => console.log('likaso'))
            .catch(err => console.log(err))

    }

    const deleteFav = (itinerary_id) => {

        itineraryService
            .deleteFav(itinerary_id)
            // .then(() => closeModal())
            .then(() => console.log('dis likaso'))

            .catch(console.log('ERROR'))

    }

    useEffect(() => {
        getDetails(itinerary_id)
        filterEvent()
    }, [])


    return (
        <>

            {itineray ?
                <>
                    <ItineraryDetailsCard itinerary={itineray} />
                </>
                : 'Cargando...'
            }

            <Container fluid>
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
                <Row className="mb-4 d-flex justify-content-center">
                    <Col md={{ span: 5 }} >

                        {itineray ?
                            <>
                                <MyMap locations={itineray.locations} />
                            </>
                            : 'Cargando...'}
                    </Col>

                    <Col md={{ span: 5 }} >
                        <CreateEvent itinerary_id={itinerary_id} filterEvent={filterEvent} />
                    </Col>
                    <Col md={{ span: 11 }}>
                        {events && <EventCalendar events={events} filterEvent={filterEvent} />}
                    </Col>
                    <Button onClick={() => addFav(itinerary_id)} variant="dark" size="sm">Añadir fav</Button>
                    <Button onClick={() => deleteFav(itinerary_id)} variant="dark" size="sm">Quitar fav</Button>
                </Row>
            </Container>
        </>
    );
}

export default ItineraryDetailsPage