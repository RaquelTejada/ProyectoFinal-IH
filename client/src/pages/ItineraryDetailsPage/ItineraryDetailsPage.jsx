import Card from 'react-bootstrap/Card'
import itineraryService from '../../services/itineraries.service'
import { ItinerariesContext } from '../../contexts/itinerary.context';
// import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';

function ItineraryDetailsPage(
    { city, transport, itinerary_id, owner, images, title, category, duration, pets, description }
) {
    const [details, setDetails] = useState()
    const { getItineraryDetails } = useContext(ItinerariesContext)
    // const { _id } = useParams()


    const itineraryDetails = () => {
        itineraryService
            .getOneItinerary(itinerary_id)
            .then((response) => {
                const detailsiti = response.data;
                setDetails(detailsiti)
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        itineraryDetails()
    })


    return (
        <>
            <Card className="mb-4 ItineraryCard">
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Img variant="top" src={images} />
                <Card.Body>
                    <Card.Text><p>{city}</p></Card.Text>
                    <Card.Text><p>{transport}</p></Card.Text>
                    <Card.Text><p>{category}</p></Card.Text>
                    <Card.Text><p>{duration}</p></Card.Text>
                    <Card.Text><p>{pets}</p></Card.Text>
                    <Card.Text><p>{description}</p></Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItineraryDetailsPage