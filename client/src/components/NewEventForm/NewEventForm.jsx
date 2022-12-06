import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import eventService from "../../services/events.service"


import { useNavigate } from 'react-router-dom'


const NewEventForm = ({ fireFinalActions }) => {

    const [eventData, setEventData] = useState({

        title: '',
        description: '',
        date: new Date,
    })


    const handleInputChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setEventData({ ...eventData, [name]: value })
    }


    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        eventService
            .saveEvent(eventData)
            .then((response) => {
                const { _id: event_id } = response.data
                console.log(response)
                // fireFinalActions()
                navigate(`/detalles/${event_id}`)
            })
            .catch(err => console.error(err))
    }

    const { title, description, date } = eventData


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Título del evento</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text area" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Fecha del evento</Form.Label>
                <Form.Control type="date" multiple value={date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear evento</Button>
            </div>
        </Form>
    )
}

export default NewEventForm