import './ItineraryDetailsCard.css'
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from 'react-bootstrap';


function ItineraryDetailsCard({ itinerary }) {

    return (
        <Container fluid className='mt-4'>
            <Row className="mb-4 d-flex justify-content-center">
                <Col md={{ span: 5 }}>
                    <Card.Img variant="top" src={itinerary.images} />
                </Col>
                <Col md={{ span: 5 }} >
                    <h3 className='details-title details-elements'>{itinerary.title}</h3>
                    <p className='details-elements'>{itinerary.city}</p>
                    <p className='details-elements'>{itinerary.transport}</p>
                    <p className='details-elements'>{itinerary.category}</p>
                    <p className='details-elements'>{itinerary.duration}</p>
                    <p className='details-elements'>{itinerary.pets}</p>
                    <article className='text-start'>{itinerary.description}</article>
                </Col>
            </Row>
        </Container >
    );
}

export default ItineraryDetailsCard