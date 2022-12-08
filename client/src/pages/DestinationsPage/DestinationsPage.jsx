import './DestinationsPage.css'
import { Card } from 'react-bootstrap'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { useContext } from 'react'


const DestinationsPage = () => {

    const { itineraries } = useContext(ItinerariesContext)

    return (

        <Card className="mb-4 DestinationCard">
            <Card.Body>
                <Card.Title><h3>{itineraries.city}</h3></Card.Title>
                <Card.Text>
                    <h4>{itineraries.title}</h4>
                    <h5>{itineraries.transport}</h5>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default DestinationsPage