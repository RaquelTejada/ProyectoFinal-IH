import { useContext, useState } from "react"
import { Col, Row, Button, Modal } from "react-bootstrap"
import { Link } from 'react-router-dom'
import ItineraryCard from "../ItineraryCard/ItineraryCard"
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { AuthContext } from './../../contexts/auth.context'
import NewItineraryForm from "../NewItineraryForm/NewItineraryForm"

const ItinerariesList = () => {

    const { itineraries } = useContext(ItinerariesContext)

    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    return (
        <Row>
            {
                !user
                    ?
                    <>
                        <Link to={'/iniciar-sesion'}>
                            <Button variant="dark" size="sm">Crea tu propia ruta</Button>
                        </Link>
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
            }
            {itineraries.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <ItineraryCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItinerariesList