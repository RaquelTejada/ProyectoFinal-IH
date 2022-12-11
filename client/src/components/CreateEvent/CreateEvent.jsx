import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

// import { AuthContext } from '../../contexts/auth.context'

import NewEventForm from "../../components/NewEventForm/NewEventForm"

import eventService from "../../services/events.service"

const CreateEvent = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadEvents()
        closeModal()
    }

    useEffect(() => {
        loadEvents()
    }, [])

    return (
        <div>
            <Container className="Events">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Button onClick={openModal} variant="dark">Crear nuevo evento</Button>
                    </Col>
                </Row>
            </Container>

            < Modal show={showModal} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de tu evento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewEventForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal >
        </div>
    )
}

export default CreateEvent