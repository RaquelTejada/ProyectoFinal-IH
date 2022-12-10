import './DestinationsPage.css'
import { Card } from 'react-bootstrap'
import itineraryService from '../../services/itineraries.service'
import { useState, useEffect } from 'react'


const DestinationsPage = () => {

    const [destinations, setDestinations] = useState()

    const printDestinations = () => {

        itineraryService
            .getAllDestinations()
            .then(response => setDestinations(response.data.cities))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        printDestinations()
    }, [])

    return (
        <>
            {
                destinations ? destinations.map((destination, idx) => {
                    return (
                        <Card className="mb-4 DestinationCard" key={idx}>
                            <Card.Body>
                                <Card.Title><h3>{destination}</h3></Card.Title>
                                {/* <Card.Text>
                                    <h4>{destination.title}</h4>
                                    <h5>{destination.transport}</h5>
                                </Card.Text> */}
                            </Card.Body>
                        </Card>)
                })
                    :
                    'Cargando...'}
        </>
    )

}

export default DestinationsPage