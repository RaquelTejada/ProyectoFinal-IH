import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import './CreateEvent.css'

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
            <Container>
                <Row className="d-flex align-items-center">
                    <Col>
                        <h1 className="details-title">Eventos</h1>
                    </Col>
                    <Col>
                        <Button className="fill details-event-button" onClick={openModal} variant="gray" size="sm">Crear nuevo evento</Button>
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
        </div >
    )
}

export default CreateEvent