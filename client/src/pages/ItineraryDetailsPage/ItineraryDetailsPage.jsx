
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItineraryDetailsCard from '../../components/ItineraryDetailsCard/ItineraryDetailsCard';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import MyMap from '../../components/ItineraryMap/ItineraryMap';
import EventCalendar from '../../components/Calendar/Calendar';
import { Container, Row, Col } from 'react-bootstrap';

function ItineraryDetailsPage() {

    const [itinerary, setItinerary] = useState()
    const { itinerary_id } = useParams()

    console.log(itinerary)

    const getDetails = (itinerary_id) => {
        itineraryService
            .getOneItinerary(itinerary_id)
            .then(({ data }) => setItinerary(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDetails(itinerary_id)
    }, [])


    return (
        <>

            {itinerary ?
                <>
                    <ItineraryDetailsCard itinerary={itinerary} />
                    {/* <MyMap locations={itinerary.locations} /> */}
                </>
                : 'Cargando...'}

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
                        <CreateEvent />
                        <EventCalendar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItineraryDetailsPage