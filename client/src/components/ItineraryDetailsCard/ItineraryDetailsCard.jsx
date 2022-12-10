import './ItineraryDetailsCard.css'
import Card from 'react-bootstrap/Card'



function ItineraryDetailsCard({ itinerary }) {

    return (
        <>
            <Card className="mb-4 ItineraryCard">
                <Card.Title><h3>{itinerary.title}</h3></Card.Title>
                <Card.Img variant="top" src={itinerary.images} />
                <Card.Body>
                    <Card.Text>{itinerary.city}</Card.Text>
                    <Card.Text>{itinerary.transport}</Card.Text>
                    <Card.Text>{itinerary.category}</Card.Text>
                    <Card.Text>{itinerary.duration}</Card.Text>
                    <Card.Text>{itinerary.pets}</Card.Text>
                    <Card.Text>{itinerary.description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItineraryDetailsCard