import './ItineraryCard.css'
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';

import NewItineraryForm from "../../components/NewItineraryForm/NewItineraryForm"

function ItineraryCard({ city, transport, _id, owner, images, title }) {

    const { user } = useContext(AuthContext)
    // const [showModal, setShowModal] = useState(false)

    // const openModal = () => setShowModal(true)
    // const closeModal = () => setShowModal(false)

    // const fireFinalActions = () => {
    //     closeModal()
    // }

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
                                        <Link to={`/detalles/${_id}`}>
                                            <Button variant="dark" size="sm">Eliminar</Button>
                                        </Link>
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

            {/* <div> */}
            {/* {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Button onClick={openModal} variant="dark">Crea tu propia ruta</Button>
                        </>
                        :
                        <>
                            <Button onClick={openModal} variant="dark">Crea tu propia ruta</Button>
                            <div className="d-grid">
                                <Modal show={showModal} onHide={closeModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Nueva ruta</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <NewItineraryForm fireFinalActions={fireFinalActions} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </>
                } */}

            {/* </div> */}
        </>
    );
}

export default ItineraryCard;