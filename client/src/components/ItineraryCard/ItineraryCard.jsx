import './ItineraryCard.css'
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { MessageContext } from './../../contexts/userMessage.context'
import { Link } from 'react-router-dom'
import itineraryService from '../../services/itineraries.service'
import { ItinerariesContext } from '../../contexts/itinerary.context';

import { useContext } from 'react';

function ItineraryCard({ city, transport, _id, owner, images, title, category }) {

    const { loadItineraries } = useContext(ItinerariesContext)

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const { user } = useContext(AuthContext)

    const deleteItinerary = e => {
        e.preventDefault()

        itineraryService
            .deleteItinerary(_id)
            .then(() => {
                setShowToast(true)
                setToastMessage('Ruta eliminada correctamente')
                loadItineraries(city, category)

            })
            .catch(err => console.error(err))
    }


    return (
        <>
            <Card className="mb-4 ItineraryCard">
                <Card.Img variant="top" src={images} />
                <Card.Body>
                    <Link to={`/detalles/${_id}`}>
                        <div>
                            <Card.Title><h3>{title}</h3></Card.Title>
                        </div>
                    </Link>

                    {
                        !owner || owner != user?._id
                            ?
                            <>
                            </>
                            :
                            <>
                                <div className="d-grid">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="dark" size="sm" onClick={deleteItinerary}>Eliminar</Button>
                                        <Link to={`/editar/${_id}`}>
                                            <Button variant="dark" size="sm">Editar</Button>
                                        </Link>
                                        {/* <Button variant="dark" size="sm" onClick={() => alert('ENLAZAR PÁGINA DE EDITAR')}>Editar</Button> */}
                                    </ButtonGroup>
                                </div>
                            </>
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default ItineraryCard;