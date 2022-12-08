import { useState, useEffect, useContext } from "react"
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

// import { AuthContext } from '../../contexts/auth.context'

import NewEventForm from "../../components/NewEventForm/NewEventForm"

import eventService from "../../services/events.service"

const EventsListPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    // const { user } = useContext(AuthContext)

    const fireFinalActions = () => {
        closeModal()
    }

    useEffect(() => {

        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <Container className="Home">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Events List</h1>
                        <Button onClick={openModal} variant="dark">Nueva ruta</Button>
                    </Col>
                </Row>
            </Container>

            {events.map((elm, idx) => <p key={idx}>{elm.title}</p>)}

            < Modal show={showModal} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Nueva ruta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewEventForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal >
        </div>
    )
}

export default EventsListPage