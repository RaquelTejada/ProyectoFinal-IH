import './ItineraryCard.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { MessageContext } from './../../contexts/userMessage.context'
import itineraryService from '../../services/itineraries.service'
import { ItinerariesContext } from '../../contexts/itinerary.context';
import EditItineraryForm from '../../components/EditItineraryForm/EditItineraryForm'

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

    const [itinerary, setItinerary] = useState()
    const [showModal, setShowModal] = useState(false)

    const { itinerary_id } = useParams();
    const navigate = useNavigate()

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => {
        itineraryService
            .getOneItinerary(itinerary_id)
            .then((response) => {
                const editItinerary = response.data;
                setItinerary(editItinerary);
            })
            .catch((error) => console.log(error));

    }, [itinerary_id]);

    const handleFormSubmit = e => {
        e.preventDefault()

        itineraryService
            .editItinerary(itinerary_id, itinerary)
            .then(() => {
                setShowToast(true)
                setToastMessage('Ruta editada correctamente')
                // fireFinalActions()
                closeModal()

                // navigate(`/detalles/${itinerary_id}`)
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
                                        <div>
                                            <Button variant="dark" onClick={openModal}>Edit</Button>
                                            <Modal show={showModal} onHide={closeModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Editar Ruta</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <EditItineraryForm itinerary={itinerary} setItinerary={setItinerary} handleFormSubmit={handleFormSubmit} />
                                                </Modal.Body>
                                            </Modal>
                                        </div>
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