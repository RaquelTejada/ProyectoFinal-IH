import { useState, useEffect, useContext } from "react"
import itineraryService from "../../services/itineraries.service"
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePagePro.css'

import { AuthContext } from '../../contexts/auth.context'

import NewItineraryForm from "../../components/NewItineraryForm/NewItineraryForm"

const HomePagePro = () => {

    const [itineraries, setItineraries] = useState()
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    // const { user } = useContext(AuthContext)

    const fireFinalActions = () => {
        closeModal()
    }

    return (
        <div>
            <Container className="Home">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Itineraies App! Versión Pro</h1>
                        <hr />
                        <h3>Proyecto final Ironhack</h3>
                        <Button onClick={openModal} variant="dark">Crea tu propia ruta</Button>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva ruta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewItineraryForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default HomePagePro